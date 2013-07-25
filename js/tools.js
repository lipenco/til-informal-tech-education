
function homepageInitialize() {
    function e(e, t) {
        e.css({
            "-webkit-transform": t,
            "-moz-transform": t,
            "-ms-transform": t,
            "-o-transform": t,
            transform: t
        });
    }
    function t(e) {
        var t = 0, n = d, r = e * Math.PI / 180, i = Math.cos(r), o = Math.sin(r);
        return t -= d / 2, n -= d / 2, t = i * t * S / (S + o * t), n = i * n * S / (S + o * n), t += d / 2, 
        n += d / 2, [ t, n ];
    }
    function n() {
        if (!(.001 > Math.abs(u - p))) {
            var n = t(p), r = d - n[1], i = n[0], o = -r - 1, a = 0, s = -1;
            v.each(function() {
                e($(this), "translateY(" + o + "px)", "top", o + "px"), o += d - 2 * (1 == a ? i : r) - 2, a = 1 - a;
            }), x.each(function() {
                e($(this), "rotateX(" + p * s + "deg)"), s *= -1;
            }), b.css("opacity", p / 90), u = p;
        }
    }
    function r() {
        if (N) {
            var e = y.width(), n = y.height(), r = Math.min(e / (.75 * n), 1);
            if (d = Math.ceil(n / x.length) + (E ? 2 : 0), C && (d = n / x.length + (E ? 2 : 0)), h = 2 * n, C || w.height(h), 
            v.css({
                height: d + "px"
            }), x.css({
                "line-height": .85 * d + "px",
                "font-size": .8 * d * r + "px"
            }), E) {
                var o = t(j);
                g = (o[1] - o[0] - 2) * x.length + 1;
            } else g = d * x.length;
            u = void 0, i();
        }
    }
    function i(t) {
        if (N) {
            var o = y.scrollTop();
            if (C) {
                var a = 0;
                t && (a = t.deltaY), o = Math.max(Math.min(m - a, h / 2), 0);
            }
            var s = 2 * o / h;
            if (E) {
                if (p = 2 * j * s, p >= j) {
                    p = j;
                    var u = 2 * -g * (s - .5);
                    e(T, "translateY(" + u + "px)");
                } else e(T, "translateY(0px)");
                n();
            } else {
                var u = -g * s;
                T.css("top", u + "px");
            }
            .005 > Math.abs(1 - s) && (y.unbind("resize", r), C || y.unbind("scroll", i), C && k(), $(".crumpled-box").remove(), 
            setTimeout(function() {
                y.scrollTop(0), w.remove(), $(".content-wrapper").removeClass("inactive"), $("html").addClass("curtain-removed"), 
                contentInitialize();
            }, 50), N = !1);
        }
    }
    function o(e) {
        if (N) {
            var t = 0;
            e && (t = e.deltaY), m -= t, m = Math.max(Math.min(m, h / 2), 0);
        }
    }
    function a() {
        C ? (l -= 30, f >= l && (l = f, clearInterval(c)), i({
            deltaY: l
        }), o({
            deltaY: l
        })) : (l += 30, l >= f && (l = f, clearInterval(c)), y.scrollTop(l));
    }
    function s() {
        C ? (l = -m, f = m - h / 2) : (l = y.scrollTop(), f = h / 2), c = setInterval(a, 30);
    }
    var u, c, l, f, p = 0, d = 0, h = 0, m = 0, g = 0, y = $(window), v = $(".line-wrapper"), b = $(".gradient"), x = $(".line"), w = $(".homepage-height-stub"), T = $(".crumpled-box"), E = Modernizr.csstransforms3d, C = Modernizr.touch, k = null, N = !0, S = 1300, j = 70;
    E ? v.css({
        "-webkit-perspective": S + "px",
        "-moz-perspective": S + "px",
        "-ms-perspective": S + "px",
        "-o-perspective": S + "px",
        perspective: S + "px"
    }) : v.css("position", "relative"), y.bind("resize", r), C || y.bind("scroll", i), C && (k = y.RMDrag({
        move: i,
        end: o,
        silent: !1,
        type: "touch",
        preventDefault: !0
    }).data("destroy")), r(), $("#curtain_login").on("touchstart", function(e) {
        e.stopPropagation();
    }), $(".scroll-wrapper").on("click", function() {
        s();
    }).on("touchstart", function(e) {
        e.stopPropagation();
    });
}

function contentInitialize() {
    function e() {
        var e = '<iframe id="soundclaud" src="https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Fplaylists%2F5343775" width="120%" height="380" frameborder="yes" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'; 
        $(".vidget").html(e),  l = new VimeoPlayer($("")[0], {
            ready: n,
            playProgress: t,
            seek: t
        });
    }
   
  
  
    function a() {
        h.find(".page").css("height", d.height()), u(), n();
    }
    function s() {
        u(), n();
    }
    function u() {
        var e = [], t = -1, n = d.height();
        h.find(".page").each(function() {
            var n = $(this).position().top - (m ? g.scrollTop() : 0);
            e.push(n), 0 >= n && t++;
        }), e.push(99999);
        var r = Math.min(e[t + 1] / n, 1), i = h.find(".page:eq(" + t + ")").attr("data-bg"), o = 1 == r ? i : h.find(".page:eq(" + (t + 1) + ")").attr("data-bg");
        r = 1 - r, m || h.css("background", c(i, o, r));
        var a = $(".menu ul li:eq(" + (t - 1) + ")"), s = $(".menu ul li:eq(" + t + ")"), i = c("8c8a8b", "363234", 1 - r), o = c("8c8a8b", "363234", r);
        $(".menu ul li").css("color", "#8c8a8b"), t - 1 >= 0 && a.css("color", i), s.css("color", o);
    }
    function c(e, t, n) {
        var r = parseInt(e.substr(0, 2), 16), i = parseInt(e.substr(2, 2), 16), o = parseInt(e.substr(4, 2), 16), a = parseInt(t.substr(0, 2), 16), s = parseInt(t.substr(2, 2), 16), u = parseInt(t.substr(4, 2), 16), c = Math.round(r + (a - r) * n), l = Math.round(i + (s - i) * n), f = Math.round(o + (u - o) * n);
        return "rgb(" + c + "," + l + "," + f + ")";
    }
    var l, f, p, d = $(window), h = $(".content-wrapper"), m = Modernizr.touch, g = m ? d : h;
    d.bind("resize", a), g.bind("scroll", s), !function(e, t, n) {
        var r, i = e.getElementsByTagName(t)[0];
       
    }(document, "script"), e(), $(".menu ul li").click(r);
    
}

 
 /*
 * Modernizr v2.6.2
 * www.modernizr.com
 */

window.Modernizr = function(e, t, n) {
    function r(e) {
        b.cssText = e;
    }
    function i(e, t) {
        return r(E.join(e + ";") + (t || ""));
    }
    function o(e, t) {
        return typeof e === t;
    }
    function a(e, t) {
        return !!~("" + e).indexOf(t);
    }
    function s(e, t) {
        for (var r in e) {
            var i = e[r];
            if (!a(i, "-") && b[i] !== n) return "pfx" == t ? i : !0;
        }
        return !1;
    }
    function u(e, t, r) {
        for (var i in e) {
            var a = t[e[i]];
            if (a !== n) return r === !1 ? e[i] : o(a, "function") ? a.bind(r || t) : a;
        }
        return !1;
    }
    function c(e, t, n) {
        var r = e.charAt(0).toUpperCase() + e.slice(1), i = (e + " " + k.join(r + " ") + r).split(" ");
        return o(t, "string") || o(t, "undefined") ? s(i, t) : (i = (e + " " + N.join(r + " ") + r).split(" "), 
        u(i, t, n));
    }
    function l() {
        h.input = function(n) {
            for (var r = 0, i = n.length; i > r; r++) D[n[r]] = !!(n[r] in x);
            return D.list && (D.list = !(!t.createElement("datalist") || !e.HTMLDataListElement)), D;
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), h.inputtypes = function(e) {
            for (var r, i, o, a = 0, s = e.length; s > a; a++) x.setAttribute("type", i = e[a]), r = "text" !== x.type, 
            r && (x.value = w, x.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(i) && x.style.WebkitAppearance !== n ? (g.appendChild(x), 
            o = t.defaultView, r = o.getComputedStyle && "textfield" !== o.getComputedStyle(x, null).WebkitAppearance && 0 !== x.offsetHeight, 
            g.removeChild(x)) : /^(search|tel)$/.test(i) || (r = /^(url|email)$/.test(i) ? x.checkValidity && x.checkValidity() === !1 : x.value != w)), 
            A[e[a]] = !!r;
            return A;
        }("search tel url email datetime date month week time datetime-local number range color".split(" "));
    }
    var f, p, d = "2.6.2", h = {}, m = !0, g = t.documentElement, y = "modernizr", v = t.createElement(y), b = v.style, x = t.createElement("input"), w = ":)", T = {}.toString, E = " -webkit- -moz- -o- -ms- ".split(" "), C = "Webkit Moz O ms", k = C.split(" "), N = C.toLowerCase().split(" "), S = {
        svg: "http://www.w3.org/2000/svg"
    }, j = {}, A = {}, D = {}, M = [], O = M.slice, L = function(e, n, r, i) {
        var o, a, s, u, c = t.createElement("div"), l = t.body, f = l || t.createElement("body");
        if (parseInt(r, 10)) for (;r--; ) s = t.createElement("div"), s.id = i ? i[r] : y + (r + 1), c.appendChild(s);
        return o = [ "&#173;", '<style id="s', y, '">', e, "</style>" ].join(""), c.id = y, (l ? c : f).innerHTML += o, 
        f.appendChild(c), l || (f.style.background = "", f.style.overflow = "hidden", u = g.style.overflow, 
        g.style.overflow = "hidden", g.appendChild(f)), a = n(c, e), l ? c.parentNode.removeChild(c) : (f.parentNode.removeChild(f), 
        g.style.overflow = u), !!a;
    }, P = function(t) {
        var n = e.matchMedia || e.msMatchMedia;
        if (n) return n(t).matches;
        var r;
        return L("@media " + t + " { #" + y + " { position: absolute; } }", function(t) {
            r = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position;
        }), r;
    }, q = function() {
        function e(e, i) {
            i = i || t.createElement(r[e] || "div"), e = "on" + e;
            var a = e in i;
            return a || (i.setAttribute || (i = t.createElement("div")), i.setAttribute && i.removeAttribute && (i.setAttribute(e, ""), 
            a = o(i[e], "function"), o(i[e], "undefined") || (i[e] = n), i.removeAttribute(e))), i = null, a;
        }
        var r = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return e;
    }(), F = {}.hasOwnProperty;
    p = o(F, "undefined") || o(F.call, "undefined") ? function(e, t) {
        return t in e && o(e.constructor.prototype[t], "undefined");
    } : function(e, t) {
        return F.call(e, t);
    }, Function.prototype.bind || (Function.prototype.bind = function(e) {
        var t = this;
        if ("function" != typeof t) throw new TypeError();
        var n = O.call(arguments, 1), r = function() {
            if (this instanceof r) {
                var i = function() {};
                i.prototype = t.prototype;
                var o = new i(), a = t.apply(o, n.concat(O.call(arguments)));
                return Object(a) === a ? a : o;
            }
            return t.apply(e, n.concat(O.call(arguments)));
        };
        return r;
    }), j.flexbox = function() {
        return c("flexWrap");
    }, j.flexboxlegacy = function() {
        return c("boxDirection");
    }, j.canvas = function() {
        var e = t.createElement("canvas");
        return !(!e.getContext || !e.getContext("2d"));
    }, j.canvastext = function() {
        return !(!h.canvas || !o(t.createElement("canvas").getContext("2d").fillText, "function"));
    }, j.webgl = function() {
        return !!e.WebGLRenderingContext;
    }, j.touch = function() {
        var n;
        return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : L([ "@media (", E.join("touch-enabled),("), y, ")", "{#modernizr{top:9px;position:absolute}}" ].join(""), function(e) {
            n = 9 === e.offsetTop;
        }), n;
    }, j.geolocation = function() {
        return "geolocation" in navigator;
    }, j.postmessage = function() {
        return !!e.postMessage;
    }, j.websqldatabase = function() {
        return !!e.openDatabase;
    }, j.indexedDB = function() {
        return !!c("indexedDB", e);
    }, j.hashchange = function() {
        return q("hashchange", e) && (t.documentMode === n || t.documentMode > 7);
    }, j.history = function() {
        return !(!e.history || !history.pushState);
    }, j.draganddrop = function() {
        var e = t.createElement("div");
        return "draggable" in e || "ondragstart" in e && "ondrop" in e;
    }, j.websockets = function() {
        return "WebSocket" in e || "MozWebSocket" in e;
    }, j.rgba = function() {
        return r("background-color:rgba(150,255,150,.5)"), a(b.backgroundColor, "rgba");
    }, j.hsla = function() {
        return r("background-color:hsla(120,40%,100%,.5)"), a(b.backgroundColor, "rgba") || a(b.backgroundColor, "hsla");
    }, j.multiplebgs = function() {
        return r("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background);
    }, j.backgroundsize = function() {
        return c("backgroundSize");
    }, j.borderimage = function() {
        return c("borderImage");
    }, j.borderradius = function() {
        return c("borderRadius");
    }, j.boxshadow = function() {
        return c("boxShadow");
    }, j.textshadow = function() {
        return "" === t.createElement("div").style.textShadow;
    }, j.opacity = function() {
        return i("opacity:.55"), /^0.55$/.test(b.opacity);
    }, j.cssanimations = function() {
        return c("animationName");
    }, j.csscolumns = function() {
        return c("columnCount");
    }, j.cssgradients = function() {
        var e = "background-image:", t = "gradient(linear,left top,right bottom,from(#9f9),to(white));", n = "linear-gradient(left top,#9f9, white);";
        return r((e + "-webkit- ".split(" ").join(t + e) + E.join(n + e)).slice(0, -e.length)), a(b.backgroundImage, "gradient");
    }, j.cssreflections = function() {
        return c("boxReflect");
    }, j.csstransforms = function() {
        return !!c("transform");
    }, j.csstransforms3d = function() {
        var e = !!c("perspective");
        return e && "webkitPerspective" in g.style && L("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t) {
            e = 9 === t.offsetLeft && 3 === t.offsetHeight;
        }), e;
    }, j.csstransitions = function() {
        return c("transition");
    }, j.fontface = function() {
        var e;
        return L('@font-face {font-family:"font";src:url("https://")}', function(n, r) {
            var i = t.getElementById("smodernizr"), o = i.sheet || i.styleSheet, a = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "";
            e = /src/i.test(a) && 0 === a.indexOf(r.split(" ")[0]);
        }), e;
    }, j.generatedcontent = function() {
        var e;
        return L([ "#", y, "{font:0/0 a}#", y, ':after{content:"', w, '";visibility:hidden;font:3px/1 a}' ].join(""), function(t) {
            e = t.offsetHeight >= 3;
        }), e;
    }, j.video = function() {
        var e = t.createElement("video"), n = !1;
        try {
            (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), 
            n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""));
        } catch (r) {}
        return n;
    }, j.audio = function() {
        var e = t.createElement("audio"), n = !1;
        try {
            (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), 
            n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), 
            n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""));
        } catch (r) {}
        return n;
    }, j.localstorage = function() {
        try {
            return localStorage.setItem(y, y), localStorage.removeItem(y), !0;
        } catch (e) {
            return !1;
        }
    }, j.sessionstorage = function() {
        try {
            return sessionStorage.setItem(y, y), sessionStorage.removeItem(y), !0;
        } catch (e) {
            return !1;
        }
    }, j.webworkers = function() {
        return !!e.Worker;
    }, j.applicationcache = function() {
        return !!e.applicationCache;
    }, j.svg = function() {
        return !!t.createElementNS && !!t.createElementNS(S.svg, "svg").createSVGRect;
    }, j.inlinesvg = function() {
        var e = t.createElement("div");
        return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == S.svg;
    }, j.smil = function() {
        return !!t.createElementNS && /SVGAnimate/.test(T.call(t.createElementNS(S.svg, "animate")));
    }, j.svgclippaths = function() {
        return !!t.createElementNS && /SVGClipPath/.test(T.call(t.createElementNS(S.svg, "clipPath")));
    };
    for (var $ in j) p(j, $) && (f = $.toLowerCase(), h[f] = j[$](), M.push((h[f] ? "" : "no-") + f));
    return h.input || l(), h.addTest = function(e, t) {
        if ("object" == typeof e) for (var r in e) p(e, r) && h.addTest(r, e[r]); else {
            if (e = e.toLowerCase(), h[e] !== n) return h;
            t = "function" == typeof t ? t() : t, m !== n && m && (g.className += " " + (t ? "" : "no-") + e), h[e] = t;
        }
        return h;
    }, r(""), v = x = null, function(e, t) {
        function r(e, t) {
            var n = e.createElement("p"), r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild);
        }
        function i() {
            var e = v.elements;
            return "string" == typeof e ? e.split(" ") : e;
        }
        function o(e) {
            var t = y[e[m]];
            return t || (t = {}, g++, e[m] = g, y[g] = t), t;
        }
        function a(e, n, r) {
            if (n || (n = t), f) return n.createElement(e);
            r || (r = o(n));
            var i;
            return i = r.cache[e] ? r.cache[e].cloneNode() : h.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), 
            i.canHaveChildren && !d.test(e) ? r.frag.appendChild(i) : i;
        }
        function s(e, n) {
            if (e || (e = t), f) return e.createDocumentFragment();
            n = n || o(e);
            for (var r = n.frag.cloneNode(), a = 0, s = i(), u = s.length; u > a; a++) r.createElement(s[a]);
            return r;
        }
        function u(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), 
            e.createElement = function(n) {
                return v.shivMethods ? a(n, e, t) : t.createElem(n);
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/\w+/g, function(e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")';
            }) + ");return n}")(v, t.frag);
        }
        function c(e) {
            e || (e = t);
            var n = o(e);
            return !v.shivCSS || l || n.hasCSS || (n.hasCSS = !!r(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), 
            f || u(e, n), e;
        }
        var l, f, p = e.html5 || {}, d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, m = "_html5shiv", g = 0, y = {};
        (function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", l = "hidden" in e, f = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return e.cloneNode === n || e.createDocumentFragment === n || e.createElement === n;
                }();
            } catch (r) {
                l = !0, f = !0;
            }
        })();
        var v = {
            elements: p.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: p.shivCSS !== !1,
            supportsUnknownElements: f,
            shivMethods: p.shivMethods !== !1,
            type: "default",
            shivDocument: c,
            createElement: a,
            createDocumentFragment: s
        };
        e.html5 = v, c(t);
    }(this, t), h._version = d, h._prefixes = E, h._domPrefixes = N, h._cssomPrefixes = k, h.mq = P, h.hasEvent = q, 
    h.testProp = function(e) {
        return s([ e ]);
    }, h.testAllProps = c, h.testStyles = L, h.prefixed = function(e, t, n) {
        return t ? c(e, t, n) : c(e, "pfx");
    }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + M.join(" ") : ""), 
    h;
}(this, this.document), function(e, t) {
    e.fn.RMDrag = function(n) {
        function r() {
            e(p).off(c.start, i);
        }
        function i(t) {
            if (u(t), !window._moveInProcess) {
                if (t.originalEvent.touches) {
                    if (t.originalEvent.touches.length > 1) return;
                    t = t.originalEvent.touches[0];
                    var r = !0;
                }
                l = {
                    startX: t.pageX,
                    startY: t.pageY,
                    deltaX: 0,
                    deltaY: 0,
                    velocityX: 0,
                    velocityY: 0,
                    moved: !1,
                    startTime: Number(new Date()),
                    duration: 0,
                    touch: !!r
                }, s(t), e(document).on(c.move, o).on(c.end, a), "function" == typeof n.start && n.start.call(p, t);
            }
        }
        function o(e) {
            if (u(e), e.originalEvent.touches) {
                if (e.originalEvent.touches.length > 1) return;
                e = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
            }
            l.moved = !0;
            var t = e.pageX - l.startX, r = e.pageY - l.startY, i = t - l.deltaX || t, o = r - l.deltaY || r;
            Math.abs(i) > f.X && (i = l.velocityX), Math.abs(o) > f.Y && (o = l.velocityY), l.deltaX = t, l.deltaY = r, 
            l.velocityX = i, l.velocityY = o, s(e), "function" == typeof n.move && n.move.call(p, e), window._moveInProcess = !0;
        }
        function a(t) {
            if (u(t), t.originalEvent.touches) {
                if (0 != t.originalEvent.touches.length) return;
                t = t.originalEvent.changedTouches[0];
            }
            l.duration = Number(new Date()) - l.startTime, s(t), e(document).off(c.move, o).off(c.end, a), "function" == typeof n.stop && n.stop.call(p, t), 
            window._moveInProcess = !1;
        }
        function s(e) {
            for (prop in l) e[prop] = l[prop];
        }
        function u(e) {
            e && (n.preventDefault && e.preventDefault(), n.silent && e.stopPropagation());
        }
        if (!n) return this;
        "function" == typeof n && (n = {
            start: arguments[0],
            move: arguments[1],
            stop: arguments[2]
        }), n.start = n.start || n.begin || n.down, n.stop = n.stop || n.end || n.up, n.move = n.move || n.drag, 
        n.silent = n.silent === t ? !0 : n.silent;
        var c = {
            start: "mousedown touchstart",
            move: "mousemove touchmove",
            end: "mouseup touchend"
        };
        "touch" == n.type && (c = {
            start: "touchstart",
            move: "touchmove",
            end: "touchend"
        });
        var l, f = {
            X: 200,
            Y: 200
        }, p = this[0];
        return this.on(c.start, i), this.data("destroy", r), this;
    };
}(jQuery);

