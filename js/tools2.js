function homepageInitialize() {

	var oldAngle,
		curAngle = 0,
		lineHeight = 0,
		scrollHeight = 0,
		touchScrollTop = 0,
		crumplesTotalHeightOnStopAngle = 0,
		$window = $(window),
		$wrappers = $(".line-wrapper"),
		$gradients = $(".gradient"),
		$lines = $(".line"),
		$stub = $(".homepage-height-stub"),
		$box = $(".crumpled-box"),
		is3d = Modernizr.csstransforms3d,
		isTouch = Modernizr.touch,
		scrollTimer,
		scrollTimerCurPos,
		scrollTimerTargetPos,
		destroyRMDrag = null,
		active = true;

	var PERSPECTIVE = 1300,
		STOPANGLE = 70;

	if (is3d) {
		$wrappers.css({
			'-webkit-perspective': PERSPECTIVE + 'px',
			'-moz-perspective': PERSPECTIVE + 'px',
			'-ms-perspective': PERSPECTIVE + 'px',
			'-o-perspective': PERSPECTIVE + 'px',
			'perspective': PERSPECTIVE + 'px'
		});
	} else {
		$wrappers.css('position', 'relative');
	}

	$window.bind('resize', onResize);
	if (!isTouch) $window.bind('scroll', onScroll);
	if (isTouch) destroyRMDrag = $window.RMDrag({
		'move'	: onScroll,//_.throttle(onScroll, 30),
		'end'	: onScrollEnd,
		'silent': false,
		'type'  : 'touch',
		'preventDefault' : true
	}).data('destroy');
	onResize();


	$('#curtain_login').on('touchstart', function(e) {
		e.stopPropagation();
	});


	$('.scroll-wrapper')
		.on('click', function() {
			fullScroll();
		})
		.on('touchstart', function(e) {
			e.stopPropagation();
		});

	//functions

	function applyTransform(obj, str) {
		obj.css({
			'-webkit-transform': str,
			'-moz-transform': str,
			'-ms-transform': str,
			'-o-transform': str,
			'transform': str
		});
	}

	function calcPerspectiveDimensions(angle) {
		var t = 0,
			b = lineHeight,
			rad = angle * Math.PI / 180,
			cosAngle = Math.cos(rad),
			sinAngle = Math.sin(rad);
		t -= lineHeight / 2;
		b -= lineHeight / 2;
		t = cosAngle * t * PERSPECTIVE / (PERSPECTIVE + sinAngle * t);
		b = cosAngle * b * PERSPECTIVE / (PERSPECTIVE + sinAngle * b);
		t += lineHeight / 2;
		b += lineHeight / 2;
		return [t, b];
	}

	function applyRotation() {

		if (Math.abs(oldAngle - curAngle) < 0.001) return;

		var perspectiveDimensions = calcPerspectiveDimensions(curAngle);

		var marginTop = lineHeight - perspectiveDimensions[1];
		var marginBottom = perspectiveDimensions[0];
		var startOffset = -marginTop - 1;
		var ind = 0;
		var dir = -1;

		$wrappers.each(function() {
			applyTransform($(this), 'translateY(' + startOffset + 'px)', 'top', startOffset + 'px');
			startOffset += lineHeight - (ind == 1 ? marginBottom : marginTop) * 2 - 2;
			ind = 1 - ind;
		})

		$lines.each(function() {
			applyTransform($(this), 'rotateX(' + (curAngle * dir) + 'deg)');
			dir *= -1;
		});

		$gradients.css('opacity', curAngle / 90);

		oldAngle = curAngle;
	}

	function onResize() {

		if (!active) return;

		var ww = $window.width(),
			wh = $window.height(),
			fontAdjust = Math.min(ww / (wh * 0.75), 1);

		lineHeight = Math.ceil(wh / $lines.length) + (is3d ? 2 : 0);
		if (isTouch) lineHeight = wh / $lines.length + (is3d ? 2 : 0);

		scrollHeight = wh * 2;
		if (!isTouch) $stub.height(scrollHeight);
		$wrappers.css({'height': lineHeight + 'px'})
		$lines.css({'line-height': (lineHeight * 0.85) + 'px', 'font-size': (lineHeight * 0.8 * fontAdjust) + 'px'})

		if (is3d) {
			var perspectiveDimensions = calcPerspectiveDimensions(STOPANGLE);
			crumplesTotalHeightOnStopAngle = (perspectiveDimensions[1] - perspectiveDimensions[0] - 2) * $lines.length + 1;
		} else {
			crumplesTotalHeightOnStopAngle = lineHeight * $lines.length;
		}

		oldAngle = undefined;
		onScroll();
	}

	function onScroll(e) {
		if (!active) return;

		var scrollTop = $window.scrollTop();

		if (isTouch) {
			var dY = 0;
			if (e) dY = e.deltaY;
			scrollTop = Math.max(Math.min(touchScrollTop - dY, scrollHeight / 2), 0);
		}

		var percent = 2 * scrollTop / scrollHeight;
		if (is3d) {
			curAngle = 2 * STOPANGLE * percent;
			if (curAngle >= STOPANGLE) {
				curAngle = STOPANGLE;
				var topOffset = -crumplesTotalHeightOnStopAngle * (percent - 0.5) * 2;
				applyTransform($box, 'translateY(' + topOffset + 'px)');
			} else {
				applyTransform($box, 'translateY(0px)');
			}
			applyRotation();
		} else {
			var topOffset = -crumplesTotalHeightOnStopAngle * percent;
			$box.css('top', topOffset + 'px');
		}

		//scrolled - top - remove all handlers and curtain
		if (Math.abs(1 - percent) < 0.005) {
			$window.unbind('resize', onResize);
			if (!isTouch) $window.unbind('scroll', onScroll);
			if (isTouch) destroyRMDrag();
			$('.crumpled-box').remove();
			setTimeout(function() {
				$window.scrollTop(0);
				$stub.remove();
				$('.content-wrapper').removeClass('inactive');
				$('html').addClass('curtain-removed');
				contentInitialize();
			}, 50);
			active = false;
		}
	}

	function onScrollEnd(e) {
		if (!active) return;

		var dY = 0;
		if (e) dY = e.deltaY;
		touchScrollTop -= dY;
		touchScrollTop = Math.max(Math.min(touchScrollTop, scrollHeight / 2), 0);
	}


	function fullScrollStep() {
		if (isTouch) {
			scrollTimerCurPos -= 30;
			if (scrollTimerCurPos <= scrollTimerTargetPos) {
				scrollTimerCurPos = scrollTimerTargetPos;
				clearInterval(scrollTimer);
			}
			onScroll({deltaY: scrollTimerCurPos });
			onScrollEnd({deltaY: scrollTimerCurPos});
		} else {
			scrollTimerCurPos += 30;
			if (scrollTimerCurPos >= scrollTimerTargetPos) {
				scrollTimerCurPos = scrollTimerTargetPos;
				clearInterval(scrollTimer);
			}
			$window.scrollTop(scrollTimerCurPos);
		}
	}

	function fullScroll() {
		if (isTouch) {
			scrollTimerCurPos = -touchScrollTop;
			scrollTimerTargetPos = touchScrollTop - scrollHeight / 2;
		} else {
			scrollTimerCurPos = $window.scrollTop();
			scrollTimerTargetPos = scrollHeight / 2;
		}
		scrollTimer = setInterval(fullScrollStep, 30);
	}
}



function contentInitialize() {
	var $window = $(window),
		$container = $('.content-wrapper'),
		isTouch = Modernizr.touch,
		macVideoPlayer, ipadVideoPlayer, curMacSubtitleInd,
		$scrollContainer = isTouch ? $window : $container;

	$window.bind('resize', onResize);
	$scrollContainer.bind('scroll', onScroll);

	//twitter button
	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

	//facebook button
	(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));


	insertVideos();



	$('.menu ul li').click(scrollToPage);

	//mail form prepare

	var $form = $(".page.page-beta .email"),
		$input = $form.find('.input'),
		$submit = $form.find('.submit');

	$input
		.bind('input propertychange', checkEmail)
		.bind('keypress keyup keydown', function(e) {e.stopPropagation()})
		.bind('keyup', function(e) {
			e.stopPropagation();
			if (e.keyCode == 13) onSubmit();
		})
		.blur();

	$submit.bind('click', onSubmit);

	$window.on('touchstart', function(e) {
		if ($input.is(":focus")) {
			$input.blur();
			e.stopPropagation();
		}
	});


	onResize();


	//inserts vimeo video inside "mac air" and "ipad"
	//in case video sets in html initialy, some weird bugs with fixed positions occurs
	function insertVideos() {
		var macVideo = '<iframe id="mac_video" src="http://player.vimeo.com/video/61953558?wmode=opaque&api=1&player_id=mac_video&title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&amp;loop=1" width="100%" height="100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',
			ipadVideo = '<iframe id="ipad_video" src="http://player.vimeo.com/video/61793738?wmode=opaque&api=1&player_id=ipad_video&title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&amp;loop=1" width="100%" height="100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';

		$('.mac-video').html(macVideo);
		$('.ipad-video').html(ipadVideo);

		macVideoPlayer = new VimeoPlayer($('#mac_video')[0], {'ready': autoplayVideo, 'playProgress': macVideoProgress, 'seek': macVideoProgress});
		ipadVideoPlayer = new VimeoPlayer($('#ipad_video')[0], {'ready': autoplayVideo});
	}


	function macVideoProgress(player, data) {
		var subtitles = [
			{st: 0, ed: 10, text: 'Anyone can publish a beautiful mag. Our constructor is really that simple, intuitive and easy-to-use. Therefore, the only thing you should care about is the content.'},
			{st: 10, ed: 22, text: 'Easily set the background using color, photo or video.'},
			{st: 22, ed: 42, text: 'Style the text freely and choose among hundreds of web fonts.'},
			{st: 42, ed: 56, text: 'Design using grids. Easily set columns, gutters and baseline for your page.'},
			{st: 56, ed: 90, text: 'We\'ve built a smart online text editor. Splitting among columns, setting margins and playing with font styles is just fascinating.'},
			{st: 90, ed: 98, text: 'Preview the results in one click.'},
			{st: 98, ed: 124, text: 'With beautiful built-in templates creating a mag becomes even easier.'},
			{st: 124, ed: 152, text: 'Search through Google Images, Flickr and Instagram right from the page.'},
			{st: 152, ed: 99999, text: 'Publish in a second. Furthermore, add changes and republish the mag any time you want.'}
		]

		var ind = -1, i;
		for (i = 0; i < subtitles.length; i++)
			if (subtitles[i].st <= data.seconds && subtitles[i].ed >= data.seconds) ind = i;
		if (ind == curMacSubtitleInd) return;
		if (ind < 0) return;
		curMacSubtitleInd = ind;

		$('.page.page-create .content .message .text').text(subtitles[ind].text);
	}


	function autoplayVideo() {

		if (isTouch) return;

		if (macVideoPlayer && macVideoPlayer.isReady && macVideoPlayer.notPlayedYet)
			if (checkVideoVisible($('.mac-video')))
				macVideoPlayer.play();

		if (ipadVideoPlayer && ipadVideoPlayer.isReady && ipadVideoPlayer.notPlayedYet)
			if (checkVideoVisible($('.ipad-video')))
				ipadVideoPlayer.play();


		function checkVideoVisible($node) {
			var top = $node.offset().top - (isTouch ? $scrollContainer.scrollTop() : 0),
				height = $node.height();

			return top > 0 && top + height < $(window).height();
		}
	}


	function scrollToPage(e) {
		var pageTag = $(e.currentTarget).attr('data-page'),
			$page = $('.page.page-' + pageTag);

		if (isTouch)
			$('html,body').animate({'scrollTop': $page.position().top}, 400);
		else
			$scrollContainer.animate({'scrollTop': $page.position().top + $scrollContainer.scrollTop()}, 400);
	}

	function checkEmail() {

		function isValidEmail(email, strict) {
			if (!strict) email = email.replace(/^\s+|\s+$/g, '');
			return (/^([a-z0-9_\-]+\.)*[a-z0-9_\-]+@([a-z0-9][a-z0-9\-]*[a-z0-9]\.)+[a-z]{2,4}$/i).test(email);
		}

		$form.toggleClass('valid', isValidEmail($input.val()));
	}

	function onSubmit(e) {
		if (!$form.hasClass('valid')) return;

		$.post('/api/emailme/', {'email': $input.val()}, function(response) {
				$form.addClass('submitted');
				$input.remove();
		}).error(function() {
				$form.addClass('submitted');
				$input.remove();
		});
	}



	function onResize() {
		$container.find('.page').css('height', $window.height());
		recalcBG();
		autoplayVideo();
	}


	function onScroll() {
		recalcBG();
		autoplayVideo();
	}


	function recalcBG() {

		var pagesPos = [],
			topVisibleInd = -1,
			windowHeight = $window.height();

		//находим номер страницы которая видна хотя бы частично сверху окна
		$container.find('.page').each(function() {
			var top = $(this).position().top - (isTouch ? $scrollContainer.scrollTop() : 0);
			pagesPos.push(top);
			if (top <= 0) topVisibleInd++;
		});

		//буфер безопасности
		pagesPos.push(99999);

		//находим, где на экране находится линия разделяющуую текущую видимую страницу и следующую
		//percent 1 - полностью видна страница topVisibleInd, а следующая не видна
		//percent 0.00000001 - практически полностью видна следующая, текущая уже почти полностью проскролена
		//из этого составляем пропорцию, как смешать цвета текущей страницы и следующей
		var percent = Math.min(pagesPos[topVisibleInd + 1] / windowHeight, 1),
			color1 = $container.find('.page:eq(' + topVisibleInd + ')').attr('data-bg'),
			color2 = (percent == 1 ? color1 : $container.find('.page:eq(' + (topVisibleInd + 1) + ')').attr('data-bg'));

		percent = 1 - percent;

		//теперь смешиваем цвета color1 и color2 в пропорции percent
		if (!isTouch) $container.css('background', mixColors(color1, color2, percent));

		//устанавливаем цвет пунктов меню
		var menuItem1 = $('.menu ul li:eq(' + (topVisibleInd - 1) + ')'),
			menuItem2 = $('.menu ul li:eq(' + (topVisibleInd) + ')'),
			color1 = mixColors('8c8a8b', '363234', 1 - percent),
			color2 = mixColors('8c8a8b', '363234', percent);

		$('.menu ul li').css('color', '#8c8a8b');
		if (topVisibleInd - 1 >= 0) menuItem1.css('color', color1);
		menuItem2.css('color', color2);
	}

	function mixColors(color1, color2, percent) {
		var r1 = parseInt(color1.substr(0, 2), 16),
			g1 = parseInt(color1.substr(2, 2), 16),
			b1 = parseInt(color1.substr(4, 2), 16),
			r2 = parseInt(color2.substr(0, 2), 16),
			g2 = parseInt(color2.substr(2, 2), 16),
			b2 = parseInt(color2.substr(4, 2), 16),
			r = Math.round(r1 + (r2 - r1) * percent),
			g = Math.round(g1 + (g2 - g1) * percent),
			b = Math.round(b1 + (b2 - b1) * percent);

		return 'rgb(' + r + ',' + g + ',' + b +  ')';
	}
}



/**
 *  Плеер для вимео. Основан на Froogaloop
 */
var VimeoPlayer = function(iframe, callbacks) {
	_.bindAll(this);

	this.callbacks = callbacks || {};
	this.isReady = false;
	this.notPlayedYet = true;
	this.player = $f(iframe);

	this.player.addEvent('ready', _.bind(function(e) {
		this.isReady = true;
		this.fire('ready', e);

		this.player.api('setVolume', 0);

	    this.player.addEvent('play', _.bind(function(e) {
			this.notPlayedYet = false;
			this.fire('play', e);
		}, this));

	    this.player.addEvent('pause', _.bind(function(e) {
			this.fire('pause', e);
		}, this));

	    this.player.addEvent('finish', _.bind(function(e) {
			this.fire('finish', e);
		}, this));

	    this.player.addEvent('seek', _.bind(function(e) {
			this.fire('seek', e);
		}, this));

	    this.player.addEvent('playProgress', _.bind(function(e) {
			this.fire('playProgress', e);
		}, this));
	}, this));
}

VimeoPlayer.prototype = {

	fire: function(eventName, e) {
		if (this.callbacks && typeof this.callbacks[eventName] === 'function')
			this.callbacks[eventName](this.player, e);
	},
	play: function() {
		this.player.api('play');
	},
};