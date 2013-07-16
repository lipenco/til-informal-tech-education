/*! jQuery v2.0.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-2.0.2.min.map
*/
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
        var e = '<iframe id="soundclaud" src="https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Fplaylists%2F5343775" width="120%" height="380" frameborder="yes" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>', 
        r = '<iframe id="ipad_video" src="http://player.vimeo.com/video/61793738?wmode=opaque&api=1&player_id=ipad_video&title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&amp;loop=1" width="100%" height="100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
        $(".vidget").html(e),  l = new VimeoPlayer($("")[0], {
            ready: n,
            playProgress: t,
            seek: t
        }), f = new VimeoPlayer($("")[0], {
            ready: n
        });
    }
   
    function n() {
        function e(e) {
            var t = e.offset().top - (m ? g.scrollTop() : 0), n = e.height();
            return t > 0 && $(window).height() > t + n;
        }
        m || (l && l.isReady && l.notPlayedYet && e($("")) && l.play(), f && f.isReady && f.notPlayedYet && e($(".ipad-video")) && f.play());
    }
    function r(e) {
        var t = $(e.currentTarget).attr("data-page"), n = $(".page.page-" + t);
        m ? $("html,body").animate({
            scrollTop: n.position().top
        }, 400) : g.animate({
            scrollTop: n.position().top + g.scrollTop()
        }, 400);
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
        e.getElementById(n) || (r = e.createElement(t), r.id = n, r.src = "//platform.twitter.com/widgets.js", 
        i.parentNode.insertBefore(r, i));
    }(document, "script", "twitter-wjs"), function(e, t, n) {
        var r, i = e.getElementsByTagName(t)[0];
        e.getElementById(n) || (r = e.createElement(t), r.id = n, r.src = "//connect.facebook.net/en_US/all.js#xfbml=1", 
        i.parentNode.insertBefore(r, i));
    }(document, "script", "facebook-jssdk"), e(), $(".menu ul li").click(r);
    var y = $(".page.page-beta .email"), v = y.find(".input"), b = y.find(".submit");
    v.bind("input propertychange", i).bind("keypress keyup keydown", function(e) {
        e.stopPropagation();
    }).bind("keyup", function(e) {
        e.stopPropagation(), 13 == e.keyCode && o();
    }).blur(), b.bind("click", o), d.on("touchstart", function(e) {
        v.is(":focus") && (v.blur(), e.stopPropagation());
    }), a();
}

(function(e, t) {
    function n(e) {
        var t = e.length, n = ot.type(e);
        return ot.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }
    function r(e) {
        var t = ht[e] = {};
        return ot.each(e.match(st) || [], function(e, n) {
            t[n] = !0;
        }), t;
    }
    function i() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {};
            }
        }), this.expando = ot.expando + Math.random();
    }
    function o(e, n, r) {
        var i;
        if (r === t && 1 === e.nodeType) if (i = "data-" + n.replace(vt, "-$1").toLowerCase(), r = e.getAttribute(i), 
        "string" == typeof r) {
            try {
                r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : yt.test(r) ? JSON.parse(r) : r;
            } catch (o) {}
            mt.set(e, n, r);
        } else r = t;
        return r;
    }
    function a() {
        return !0;
    }
    function s() {
        return !1;
    }
    function u() {
        try {
            return X.activeElement;
        } catch (e) {}
    }
    function c(e, t) {
        for (;(e = e[t]) && 1 !== e.nodeType; ) ;
        return e;
    }
    function l(e, t, n) {
        if (ot.isFunction(t)) return ot.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n;
        });
        if (t.nodeType) return ot.grep(e, function(e) {
            return e === t !== n;
        });
        if ("string" == typeof t) {
            if (jt.test(t)) return ot.filter(t, e, n);
            t = ot.filter(t, e);
        }
        return ot.grep(e, function(e) {
            return tt.call(t, e) >= 0 !== n;
        });
    }
    function f(e, t) {
        return ot.nodeName(e, "table") && ot.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
    }
    function p(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }
    function d(e) {
        var t = _t.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e;
    }
    function h(e, t) {
        for (var n = e.length, r = 0; n > r; r++) gt.set(e[r], "globalEval", !t || gt.get(t[r], "globalEval"));
    }
    function m(e, t) {
        var n, r, i, o, a, s, u, c;
        if (1 === t.nodeType) {
            if (gt.hasData(e) && (o = gt.access(e), a = gt.set(t, o), c = o.events)) {
                delete a.handle, a.events = {};
                for (i in c) for (n = 0, r = c[i].length; r > n; n++) ot.event.add(t, i, c[i][n]);
            }
            mt.hasData(e) && (s = mt.access(e), u = ot.extend({}, s), mt.set(t, u));
        }
    }
    function g(e, n) {
        var r = e.getElementsByTagName ? e.getElementsByTagName(n || "*") : e.querySelectorAll ? e.querySelectorAll(n || "*") : [];
        return n === t || n && ot.nodeName(e, n) ? ot.merge([ e ], r) : r;
    }
    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ft.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
    }
    function v(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Zt.length; i--; ) if (t = Zt[i] + n, 
        t in e) return t;
        return r;
    }
    function b(e, t) {
        return e = t || e, "none" === ot.css(e, "display") || !ot.contains(e.ownerDocument, e);
    }
    function x(t) {
        return e.getComputedStyle(t, null);
    }
    function w(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = gt.get(r, "olddisplay"), 
        n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && b(r) && (o[a] = gt.access(r, "olddisplay", k(r.nodeName)))) : o[a] || (i = b(r), 
        (n && "none" !== n || !i) && gt.set(r, "olddisplay", i ? n : ot.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e;
    }
    function T(e, t, n) {
        var r = Yt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
    }
    function E(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += ot.css(e, n + Kt[o], !0, i)), 
        r ? ("content" === n && (a -= ot.css(e, "padding" + Kt[o], !0, i)), "margin" !== n && (a -= ot.css(e, "border" + Kt[o] + "Width", !0, i))) : (a += ot.css(e, "padding" + Kt[o], !0, i), 
        "padding" !== n && (a += ot.css(e, "border" + Kt[o] + "Width", !0, i)));
        return a;
    }
    function C(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = x(e), a = ot.support.boxSizing && "border-box" === ot.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Bt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Ut.test(i)) return i;
            r = a && (ot.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0;
        }
        return i + E(e, t, n || (a ? "border" : "content"), r, o) + "px";
    }
    function k(e) {
        var t = X, n = Gt[e];
        return n || (n = N(e, t), "none" !== n && n || (zt = (zt || ot("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), 
        t = (zt[0].contentWindow || zt[0].contentDocument).document, t.write("<!doctype html><html><body>"), 
        t.close(), n = N(e, t), zt.detach()), Gt[e] = n), n;
    }
    function N(e, t) {
        var n = ot(t.createElement(e)).appendTo(t.body), r = ot.css(n[0], "display");
        return n.remove(), r;
    }
    function S(e, t, n, r) {
        var i;
        if (ot.isArray(t)) ot.each(t, function(t, i) {
            n || tn.test(e) ? r(e, i) : S(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r);
        }); else if (n || "object" !== ot.type(t)) r(e, t); else for (i in t) S(e + "[" + i + "]", t[i], n, r);
    }
    function j(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(st) || [];
            if (ot.isFunction(n)) for (;r = o[i++]; ) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        };
    }
    function A(e, n, r, i) {
        function o(u) {
            var c;
            return a[u] = !0, ot.each(e[u] || [], function(e, u) {
                var l = u(n, r, i);
                return "string" != typeof l || s || a[l] ? s ? !(c = l) : t : (n.dataTypes.unshift(l), o(l), !1);
            }), c;
        }
        var a = {}, s = e === bn;
        return o(n.dataTypes[0]) || !a["*"] && o("*");
    }
    function D(e, n) {
        var r, i, o = ot.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
        return i && ot.extend(!0, e, i), e;
    }
    function M(e, n, r) {
        for (var i, o, a, s, u = e.contents, c = e.dataTypes; "*" === c[0]; ) c.shift(), i === t && (i = e.mimeType || n.getResponseHeader("Content-Type"));
        if (i) for (o in u) if (u[o] && u[o].test(i)) {
            c.unshift(o);
            break;
        }
        if (c[0] in r) a = c[0]; else {
            for (o in r) {
                if (!c[0] || e.converters[o + " " + c[0]]) {
                    a = o;
                    break;
                }
                s || (s = o);
            }
            a = a || s;
        }
        return a ? (a !== c[0] && c.unshift(a), r[a]) : t;
    }
    function O(e, t, n, r) {
        var i, o, a, s, u, c = {}, l = e.dataTypes.slice();
        if (l[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
        for (o = l.shift(); o; ) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), 
        u = o, o = l.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
            if (a = c[u + " " + o] || c["* " + o], !a) for (i in c) if (s = i.split(" "), s[1] === o && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
                a === !0 ? a = c[i] : c[i] !== !0 && (o = s[0], l.unshift(s[1]));
                break;
            }
            if (a !== !0) if (a && e["throws"]) t = a(t); else try {
                t = a(t);
            } catch (f) {
                return {
                    state: "parsererror",
                    error: a ? f : "No conversion from " + u + " to " + o
                };
            }
        }
        return {
            state: "success",
            data: t
        };
    }
    function L() {
        return setTimeout(function() {
            jn = t;
        }), jn = ot.now();
    }
    function P(e, t, n) {
        for (var r, i = (Pn[t] || []).concat(Pn["*"]), o = 0, a = i.length; a > o; o++) if (r = i[o].call(n, t, e)) return r;
    }
    function q(e, t, n) {
        var r, i, o = 0, a = Ln.length, s = ot.Deferred().always(function() {
            delete u.elem;
        }), u = function() {
            if (i) return !1;
            for (var t = jn || L(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, o = 1 - r, a = 0, u = c.tweens.length; u > a; a++) c.tweens[a].run(o);
            return s.notifyWith(e, [ c, o, n ]), 1 > o && u ? n : (s.resolveWith(e, [ c ]), !1);
        }, c = s.promise({
            elem: e,
            props: ot.extend({}, t),
            opts: ot.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: jn || L(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = ot.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(r), r;
            },
            stop: function(t) {
                var n = 0, r = t ? c.tweens.length : 0;
                if (i) return this;
                for (i = !0; r > n; n++) c.tweens[n].run(1);
                return t ? s.resolveWith(e, [ c, t ]) : s.rejectWith(e, [ c, t ]), this;
            }
        }), l = c.props;
        for (F(l, c.opts.specialEasing); a > o; o++) if (r = Ln[o].call(c, e, l, c.opts)) return r;
        return ot.map(l, P, c), ot.isFunction(c.opts.start) && c.opts.start.call(e, c), ot.fx.timer(ot.extend(u, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always);
    }
    function F(e, t) {
        var n, r, i, o, a;
        for (n in e) if (r = ot.camelCase(n), i = t[r], o = e[n], ot.isArray(o) && (i = o[1], o = e[n] = o[0]), 
        n !== r && (e[r] = o, delete e[n]), a = ot.cssHooks[r], a && "expand" in a) {
            o = a.expand(o), delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
    }
    function $(e, n, r) {
        var i, o, a, s, u, c, l = this, f = {}, p = e.style, d = e.nodeType && b(e), h = gt.get(e, "fxshow");
        r.queue || (u = ot._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, c = u.empty.fire, u.empty.fire = function() {
            u.unqueued || c();
        }), u.unqueued++, l.always(function() {
            l.always(function() {
                u.unqueued--, ot.queue(e, "fx").length || u.empty.fire();
            });
        })), 1 === e.nodeType && ("height" in n || "width" in n) && (r.overflow = [ p.overflow, p.overflowX, p.overflowY ], 
        "inline" === ot.css(e, "display") && "none" === ot.css(e, "float") && (p.display = "inline-block")), 
        r.overflow && (p.overflow = "hidden", l.always(function() {
            p.overflow = r.overflow[0], p.overflowX = r.overflow[1], p.overflowY = r.overflow[2];
        }));
        for (i in n) if (o = n[i], Dn.exec(o)) {
            if (delete n[i], a = a || "toggle" === o, o === (d ? "hide" : "show")) {
                if ("show" !== o || !h || h[i] === t) continue;
                d = !0;
            }
            f[i] = h && h[i] || ot.style(e, i);
        }
        if (!ot.isEmptyObject(f)) {
            h ? "hidden" in h && (d = h.hidden) : h = gt.access(e, "fxshow", {}), a && (h.hidden = !d), d ? ot(e).show() : l.done(function() {
                ot(e).hide();
            }), l.done(function() {
                var t;
                gt.remove(e, "fxshow");
                for (t in f) ot.style(e, t, f[t]);
            });
            for (i in f) s = P(d ? h[i] : 0, i, l), i in h || (h[i] = s.start, d && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0));
        }
    }
    function H(e, t, n, r, i) {
        return new H.prototype.init(e, t, n, r, i);
    }
    function _(e, t) {
        var n, r = {
            height: e
        }, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Kt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
    }
    function R(e) {
        return ot.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
    }
    var I, B, z = typeof t, W = e.location, X = e.document, Y = X.documentElement, U = e.jQuery, V = e.$, G = {}, J = [], Q = "2.0.2", K = J.concat, Z = J.push, et = J.slice, tt = J.indexOf, nt = G.toString, rt = G.hasOwnProperty, it = Q.trim, ot = function(e, t) {
        return new ot.fn.init(e, t, I);
    }, at = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, st = /\S+/g, ut = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ct = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, lt = /^-ms-/, ft = /-([\da-z])/gi, pt = function(e, t) {
        return t.toUpperCase();
    }, dt = function() {
        X.removeEventListener("DOMContentLoaded", dt, !1), e.removeEventListener("load", dt, !1), ot.ready();
    };
    ot.fn = ot.prototype = {
        jquery: Q,
        constructor: ot,
        init: function(e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [ null, e, null ] : ut.exec(e), 
                !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof ot ? n[0] : n, ot.merge(this, ot.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : X, !0)), 
                    ct.test(i[1]) && ot.isPlainObject(n)) for (i in n) ot.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this;
                }
                return o = X.getElementById(i[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = X, 
                this.selector = e, this;
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ot.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, 
            this.context = e.context), ot.makeArray(e, this));
        },
        selector: "",
        length: 0,
        toArray: function() {
            return et.call(this);
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e];
        },
        pushStack: function(e) {
            var t = ot.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t;
        },
        each: function(e, t) {
            return ot.each(this, e, t);
        },
        ready: function(e) {
            return ot.ready.promise().done(e), this;
        },
        slice: function() {
            return this.pushStack(et.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [ this[n] ] : []);
        },
        map: function(e) {
            return this.pushStack(ot.map(this, function(t, n) {
                return e.call(t, n, t);
            }));
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: Z,
        sort: [].sort,
        splice: [].splice
    }, ot.fn.init.prototype = ot.fn, ot.extend = ot.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {}, u = 1, c = arguments.length, l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[1] || {}, u = 2), "object" == typeof s || ot.isFunction(s) || (s = {}), 
        c === u && (s = this, --u); c > u; u++) if (null != (e = arguments[u])) for (n in e) r = s[n], i = e[n], 
        s !== i && (l && i && (ot.isPlainObject(i) || (o = ot.isArray(i))) ? (o ? (o = !1, a = r && ot.isArray(r) ? r : []) : a = r && ot.isPlainObject(r) ? r : {}, 
        s[n] = ot.extend(l, a, i)) : i !== t && (s[n] = i));
        return s;
    }, ot.extend({
        expando: "jQuery" + (Q + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return e.$ === ot && (e.$ = V), t && e.jQuery === ot && (e.jQuery = U), ot;
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? ot.readyWait++ : ot.ready(!0);
        },
        ready: function(e) {
            (e === !0 ? --ot.readyWait : ot.isReady) || (ot.isReady = !0, e !== !0 && --ot.readyWait > 0 || (B.resolveWith(X, [ ot ]), 
            ot.fn.trigger && ot(X).trigger("ready").off("ready")));
        },
        isFunction: function(e) {
            return "function" === ot.type(e);
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window;
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e);
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? G[nt.call(e)] || "object" : typeof e;
        },
        isPlainObject: function(e) {
            if ("object" !== ot.type(e) || e.nodeType || ot.isWindow(e)) return !1;
            try {
                if (e.constructor && !rt.call(e.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (t) {
                return !1;
            }
            return !0;
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        error: function(e) {
            throw Error(e);
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || X;
            var r = ct.exec(e), i = !n && [];
            return r ? [ t.createElement(r[1]) ] : (r = ot.buildFragment([ e ], t, i), i && ot(i).remove(), ot.merge([], r.childNodes));
        },
        parseJSON: JSON.parse,
        parseXML: function(e) {
            var n, r;
            if (!e || "string" != typeof e) return null;
            try {
                r = new DOMParser(), n = r.parseFromString(e, "text/xml");
            } catch (i) {
                n = t;
            }
            return (!n || n.getElementsByTagName("parsererror").length) && ot.error("Invalid XML: " + e), n;
        },
        noop: function() {},
        globalEval: function(e) {
            var t, n = eval;
            e = ot.trim(e), e && (1 === e.indexOf("use strict") ? (t = X.createElement("script"), t.text = e, X.head.appendChild(t).parentNode.removeChild(t)) : n(e));
        },
        camelCase: function(e) {
            return e.replace(lt, "ms-").replace(ft, pt);
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function(e, t, r) {
            var i, o = 0, a = e.length, s = n(e);
            if (r) {
                if (s) for (;a > o && (i = t.apply(e[o], r), i !== !1); o++) ; else for (o in e) if (i = t.apply(e[o], r), 
                i === !1) break;
            } else if (s) for (;a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++) ; else for (o in e) if (i = t.call(e[o], o, e[o]), 
            i === !1) break;
            return e;
        },
        trim: function(e) {
            return null == e ? "" : it.call(e);
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? ot.merge(r, "string" == typeof e ? [ e ] : e) : Z.call(r, e)), r;
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : tt.call(t, e, n);
        },
        merge: function(e, n) {
            var r = n.length, i = e.length, o = 0;
            if ("number" == typeof r) for (;r > o; o++) e[i++] = n[o]; else for (;n[o] !== t; ) e[i++] = n[o++];
            return e.length = i, e;
        },
        grep: function(e, t, n) {
            var r, i = [], o = 0, a = e.length;
            for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i;
        },
        map: function(e, t, r) {
            var i, o = 0, a = e.length, s = n(e), u = [];
            if (s) for (;a > o; o++) i = t(e[o], o, r), null != i && (u[u.length] = i); else for (o in e) i = t(e[o], o, r), 
            null != i && (u[u.length] = i);
            return K.apply([], u);
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (r = e[n], n = e, e = r), ot.isFunction(e) ? (i = et.call(arguments, 2), 
            o = function() {
                return e.apply(n || this, i.concat(et.call(arguments)));
            }, o.guid = e.guid = e.guid || ot.guid++, o) : t;
        },
        access: function(e, n, r, i, o, a, s) {
            var u = 0, c = e.length, l = null == r;
            if ("object" === ot.type(r)) {
                o = !0;
                for (u in r) ot.access(e, n, u, r[u], !0, a, s);
            } else if (i !== t && (o = !0, ot.isFunction(i) || (s = !0), l && (s ? (n.call(e, i), n = null) : (l = n, 
            n = function(e, t, n) {
                return l.call(ot(e), n);
            })), n)) for (;c > u; u++) n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
            return o ? e : l ? n.call(e) : c ? n(e[0], r) : a;
        },
        now: Date.now,
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i;
        }
    }), ot.ready.promise = function(t) {
        return B || (B = ot.Deferred(), "complete" === X.readyState ? setTimeout(ot.ready) : (X.addEventListener("DOMContentLoaded", dt, !1), 
        e.addEventListener("load", dt, !1))), B.promise(t);
    }, ot.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        G["[object " + t + "]"] = t.toLowerCase();
    }), I = ot(X), function(e, t) {
        function n(e, t, n, r) {
            var i, o, a, s, u, c, l, f, p, d;
            if ((t ? t.ownerDocument || t : W) !== F && q(t), t = t || F, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (H && !r) {
                if (i = Et.exec(e)) if (a = i[1]) {
                    if (9 === s) {
                        if (o = t.getElementById(a), !o || !o.parentNode) return n;
                        if (o.id === a) return n.push(o), n;
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && B(t, o) && o.id === a) return n.push(o), 
                    n;
                } else {
                    if (i[2]) return it.apply(n, t.getElementsByTagName(e)), n;
                    if ((a = i[3]) && S.getElementsByClassName && t.getElementsByClassName) return it.apply(n, t.getElementsByClassName(a)), 
                    n;
                }
                if (S.qsa && (!_ || !_.test(e))) {
                    if (f = l = z, p = t, d = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (c = m(e), (l = t.getAttribute("id")) ? f = l.replace(Nt, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", 
                        u = c.length; u--; ) c[u] = f + g(c[u]);
                        p = yt.test(e) && t.parentNode || t, d = c.join(",");
                    }
                    if (d) try {
                        return it.apply(n, p.querySelectorAll(d)), n;
                    } catch (h) {} finally {
                        l || t.removeAttribute("id");
                    }
                }
            }
            return C(e.replace(ht, "$1"), t, n, r);
        }
        function r(e) {
            return Tt.test(e + "");
        }
        function i() {
            function e(n, r) {
                return t.push(n += " ") > A.cacheLength && delete e[t.shift()], e[n] = r;
            }
            var t = [];
            return e;
        }
        function o(e) {
            return e[z] = !0, e;
        }
        function a(e) {
            var t = F.createElement("div");
            try {
                return !!e(t);
            } catch (n) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }
        function s(e, t, n) {
            e = e.split("|");
            for (var r, i = e.length, o = n ? null : t; i--; ) (r = A.attrHandle[e[i]]) && r !== t || (A.attrHandle[e[i]] = o);
        }
        function u(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : e[t] === !0 ? t.toLowerCase() : null;
        }
        function c(e, t) {
            return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }
        function l(e) {
            return "input" === e.nodeName.toLowerCase() ? e.defaultValue : t;
        }
        function f(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Z) - (~e.sourceIndex || Z);
            if (r) return r;
            if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function p(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e;
            };
        }
        function d(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function h(e) {
            return o(function(t) {
                return t = +t, o(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--; ) n[i = o[a]] && (n[i] = !(r[i] = n[i]));
                });
            });
        }
        function m(e, t) {
            var r, i, o, a, s, u, c, l = V[e + " "];
            if (l) return t ? 0 : l.slice(0);
            for (s = e, u = [], c = A.preFilter; s; ) {
                (!r || (i = mt.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = gt.exec(s)) && (r = i.shift(), 
                o.push({
                    value: r,
                    type: i[0].replace(ht, " ")
                }), s = s.slice(r.length));
                for (a in A.filter) !(i = wt[a].exec(s)) || c[a] && !(i = c[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break;
            }
            return t ? s.length : s ? n.error(e) : V(e, u).slice(0);
        }
        function g(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r;
        }
        function y(e, t, n) {
            var r = t.dir, i = n && "parentNode" === r, o = Y++;
            return t.first ? function(t, n, o) {
                for (;t = t[r]; ) if (1 === t.nodeType || i) return e(t, n, o);
            } : function(t, n, a) {
                var s, u, c, l = X + " " + o;
                if (a) {
                    for (;t = t[r]; ) if ((1 === t.nodeType || i) && e(t, n, a)) return !0;
                } else for (;t = t[r]; ) if (1 === t.nodeType || i) if (c = t[z] || (t[z] = {}), (u = c[r]) && u[0] === l) {
                    if ((s = u[1]) === !0 || s === j) return s === !0;
                } else if (u = c[r] = [ l ], u[1] = e(t, n, a) || j, u[1] === !0) return !0;
            };
        }
        function v(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                return !0;
            } : e[0];
        }
        function b(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, c = null != t; u > s; s++) (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), 
            c && t.push(s));
            return a;
        }
        function x(e, t, n, r, i, a) {
            return r && !r[z] && (r = x(r)), i && !i[z] && (i = x(i, a)), o(function(o, a, s, u) {
                var c, l, f, p = [], d = [], h = a.length, m = o || E(t || "*", s.nodeType ? [ s ] : s, []), g = !e || !o && t ? m : b(m, p, e, s, u), y = n ? i || (o ? e : h || r) ? [] : a : g;
                if (n && n(g, y, s, u), r) for (c = b(y, d), r(c, [], s, u), l = c.length; l--; ) (f = c[l]) && (y[d[l]] = !(g[d[l]] = f));
                if (o) {
                    if (i || e) {
                        if (i) {
                            for (c = [], l = y.length; l--; ) (f = y[l]) && c.push(g[l] = f);
                            i(null, y = [], c, u);
                        }
                        for (l = y.length; l--; ) (f = y[l]) && (c = i ? st.call(o, f) : p[l]) > -1 && (o[c] = !(a[c] = f));
                    }
                } else y = b(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, u) : it.apply(a, y);
            });
        }
        function w(e) {
            for (var t, n, r, i = e.length, o = A.relative[e[0].type], a = o || A.relative[" "], s = o ? 1 : 0, u = y(function(e) {
                return e === t;
            }, a, !0), c = y(function(e) {
                return st.call(t, e) > -1;
            }, a, !0), l = [ function(e, n, r) {
                return !o && (r || n !== L) || ((t = n).nodeType ? u(e, n, r) : c(e, n, r));
            } ]; i > s; s++) if (n = A.relative[e[s].type]) l = [ y(v(l), n) ]; else {
                if (n = A.filter[e[s].type].apply(null, e[s].matches), n[z]) {
                    for (r = ++s; i > r && !A.relative[e[r].type]; r++) ;
                    return x(s > 1 && v(l), s > 1 && g(e.slice(0, s - 1).concat({
                        value: " " === e[s - 2].type ? "*" : ""
                    })).replace(ht, "$1"), n, r > s && w(e.slice(s, r)), i > r && w(e = e.slice(r)), i > r && g(e));
                }
                l.push(n);
            }
            return v(l);
        }
        function T(e, t) {
            var r = 0, i = t.length > 0, a = e.length > 0, s = function(o, s, u, c, l) {
                var f, p, d, h = [], m = 0, g = "0", y = o && [], v = null != l, x = L, w = o || a && A.find.TAG("*", l && s.parentNode || s), T = X += null == x ? 1 : Math.random() || .1;
                for (v && (L = s !== F && s, j = r); null != (f = w[g]); g++) {
                    if (a && f) {
                        for (p = 0; d = e[p++]; ) if (d(f, s, u)) {
                            c.push(f);
                            break;
                        }
                        v && (X = T, j = ++r);
                    }
                    i && ((f = !d && f) && m--, o && y.push(f));
                }
                if (m += g, i && g !== m) {
                    for (p = 0; d = t[p++]; ) d(y, h, s, u);
                    if (o) {
                        if (m > 0) for (;g--; ) y[g] || h[g] || (h[g] = nt.call(c));
                        h = b(h);
                    }
                    it.apply(c, h), v && !o && h.length > 0 && m + t.length > 1 && n.uniqueSort(c);
                }
                return v && (X = T, L = x), y;
            };
            return i ? o(s) : s;
        }
        function E(e, t, r) {
            for (var i = 0, o = t.length; o > i; i++) n(e, t[i], r);
            return r;
        }
        function C(e, t, n, r) {
            var i, o, a, s, u, c = m(e);
            if (!r && 1 === c.length) {
                if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && S.getById && 9 === t.nodeType && H && A.relative[o[1].type]) {
                    if (t = (A.find.ID(a.matches[0].replace(St, jt), t) || [])[0], !t) return n;
                    e = e.slice(o.shift().value.length);
                }
                for (i = wt.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !A.relative[s = a.type]); ) if ((u = A.find[s]) && (r = u(a.matches[0].replace(St, jt), yt.test(o[0].type) && t.parentNode || t))) {
                    if (o.splice(i, 1), e = r.length && g(o), !e) return it.apply(n, r), n;
                    break;
                }
            }
            return O(e, c)(r, t, !H, n, yt.test(e)), n;
        }
        function k() {}
        var N, S, j, A, D, M, O, L, P, q, F, $, H, _, R, I, B, z = "sizzle" + -new Date(), W = e.document, X = 0, Y = 0, U = i(), V = i(), G = i(), J = !1, Q = function() {
            return 0;
        }, K = typeof t, Z = 1 << 31, et = {}.hasOwnProperty, tt = [], nt = tt.pop, rt = tt.push, it = tt.push, at = tt.slice, st = tt.indexOf || function(e) {
            for (var t = 0, n = this.length; n > t; t++) if (this[t] === e) return t;
            return -1;
        }, ut = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ct = "[\\x20\\t\\r\\n\\f]", lt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ft = lt.replace("w", "w#"), pt = "\\[" + ct + "*(" + lt + ")" + ct + "*(?:([*^$|!~]?=)" + ct + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ft + ")|)|)" + ct + "*\\]", dt = ":(" + lt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + pt.replace(3, 8) + ")*)|.*)\\)|)", ht = RegExp("^" + ct + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ct + "+$", "g"), mt = RegExp("^" + ct + "*," + ct + "*"), gt = RegExp("^" + ct + "*([>+~]|" + ct + ")" + ct + "*"), yt = RegExp(ct + "*[+~]"), vt = RegExp("=" + ct + "*([^\\]'\"]*)" + ct + "*\\]", "g"), bt = RegExp(dt), xt = RegExp("^" + ft + "$"), wt = {
            ID: RegExp("^#(" + lt + ")"),
            CLASS: RegExp("^\\.(" + lt + ")"),
            TAG: RegExp("^(" + lt.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + pt),
            PSEUDO: RegExp("^" + dt),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ct + "*(even|odd|(([+-]|)(\\d*)n|)" + ct + "*(?:([+-]|)" + ct + "*(\\d+)|))" + ct + "*\\)|)", "i"),
            bool: RegExp("^(?:" + ut + ")$", "i"),
            needsContext: RegExp("^" + ct + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ct + "*((?:-\\d)?\\d*)" + ct + "*\\)|)(?=[^-]|$)", "i")
        }, Tt = /^[^{]+\{\s*\[native \w/, Et = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Ct = /^(?:input|select|textarea|button)$/i, kt = /^h\d$/i, Nt = /'|\\/g, St = RegExp("\\\\([\\da-f]{1,6}" + ct + "?|(" + ct + ")|.)", "ig"), jt = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r);
        };
        try {
            it.apply(tt = at.call(W.childNodes), W.childNodes), tt[W.childNodes.length].nodeType;
        } catch (At) {
            it = {
                apply: tt.length ? function(e, t) {
                    rt.apply(e, at.call(t));
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; ) ;
                    e.length = n - 1;
                }
            };
        }
        M = n.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1;
        }, S = n.support = {}, q = n.setDocument = function(e) {
            var n = e ? e.ownerDocument || e : W, i = n.parentWindow;
            return n !== F && 9 === n.nodeType && n.documentElement ? (F = n, $ = n.documentElement, H = !M(n), 
            i && i.frameElement && i.attachEvent("onbeforeunload", function() {
                q();
            }), S.attributes = a(function(e) {
                return e.innerHTML = "<a href='#'></a>", s("type|href|height|width", c, "#" === e.firstChild.getAttribute("href")), 
                s(ut, u, null == e.getAttribute("disabled")), e.className = "i", !e.getAttribute("className");
            }), S.input = a(function(e) {
                return e.innerHTML = "<input>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
            }), s("value", l, S.attributes && S.input), S.getElementsByTagName = a(function(e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length;
            }), S.getElementsByClassName = a(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length;
            }), S.getById = a(function(e) {
                return $.appendChild(e).id = z, !n.getElementsByName || !n.getElementsByName(z).length;
            }), S.getById ? (A.find.ID = function(e, t) {
                if (typeof t.getElementById !== K && H) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [ n ] : [];
                }
            }, A.filter.ID = function(e) {
                var t = e.replace(St, jt);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }) : (delete A.find.ID, A.filter.ID = function(e) {
                var t = e.replace(St, jt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== K && e.getAttributeNode("id");
                    return n && n.value === t;
                };
            }), A.find.TAG = S.getElementsByTagName ? function(e, n) {
                return typeof n.getElementsByTagName !== K ? n.getElementsByTagName(e) : t;
            } : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (;n = o[i++]; ) 1 === n.nodeType && r.push(n);
                    return r;
                }
                return o;
            }, A.find.CLASS = S.getElementsByClassName && function(e, n) {
                return typeof n.getElementsByClassName !== K && H ? n.getElementsByClassName(e) : t;
            }, R = [], _ = [], (S.qsa = r(n.querySelectorAll)) && (a(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || _.push("\\[" + ct + "*(?:value|" + ut + ")"), 
                e.querySelectorAll(":checked").length || _.push(":checked");
            }), a(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && _.push("[*^$]=" + ct + "*(?:''|\"\")"), 
                e.querySelectorAll(":enabled").length || _.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), 
                _.push(",.*:");
            })), (S.matchesSelector = r(I = $.webkitMatchesSelector || $.mozMatchesSelector || $.oMatchesSelector || $.msMatchesSelector)) && a(function(e) {
                S.disconnectedMatch = I.call(e, "div"), I.call(e, "[s!='']:x"), R.push("!=", dt);
            }), _ = _.length && RegExp(_.join("|")), R = R.length && RegExp(R.join("|")), B = r($.contains) || $.compareDocumentPosition ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
            } : function(e, t) {
                if (t) for (;t = t.parentNode; ) if (t === e) return !0;
                return !1;
            }, S.sortDetached = a(function(e) {
                return 1 & e.compareDocumentPosition(n.createElement("div"));
            }), Q = $.compareDocumentPosition ? function(e, t) {
                if (e === t) return J = !0, 0;
                var r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return r ? 1 & r || !S.sortDetached && t.compareDocumentPosition(e) === r ? e === n || B(W, e) ? -1 : t === n || B(W, t) ? 1 : P ? st.call(P, e) - st.call(P, t) : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
            } : function(e, t) {
                var r, i = 0, o = e.parentNode, a = t.parentNode, s = [ e ], u = [ t ];
                if (e === t) return J = !0, 0;
                if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : P ? st.call(P, e) - st.call(P, t) : 0;
                if (o === a) return f(e, t);
                for (r = e; r = r.parentNode; ) s.unshift(r);
                for (r = t; r = r.parentNode; ) u.unshift(r);
                for (;s[i] === u[i]; ) i++;
                return i ? f(s[i], u[i]) : s[i] === W ? -1 : u[i] === W ? 1 : 0;
            }, n) : F;
        }, n.matches = function(e, t) {
            return n(e, null, null, t);
        }, n.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== F && q(e), t = t.replace(vt, "='$1']"), !(!S.matchesSelector || !H || R && R.test(t) || _ && _.test(t))) try {
                var r = I.call(e, t);
                if (r || S.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
            } catch (i) {}
            return n(t, F, null, [ e ]).length > 0;
        }, n.contains = function(e, t) {
            return (e.ownerDocument || e) !== F && q(e), B(e, t);
        }, n.attr = function(e, n) {
            (e.ownerDocument || e) !== F && q(e);
            var r = A.attrHandle[n.toLowerCase()], i = r && et.call(A.attrHandle, n.toLowerCase()) ? r(e, n, !H) : t;
            return i === t ? S.attributes || !H ? e.getAttribute(n) : (i = e.getAttributeNode(n)) && i.specified ? i.value : null : i;
        }, n.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e);
        }, n.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (J = !S.detectDuplicates, P = !S.sortStable && e.slice(0), e.sort(Q), J) {
                for (;t = e[i++]; ) t === e[i] && (r = n.push(i));
                for (;r--; ) e.splice(n[r], 1);
            }
            return e;
        }, D = n.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += D(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
            } else for (;t = e[r]; r++) n += D(t);
            return n;
        }, A = n.selectors = {
            cacheLength: 50,
            createPseudo: o,
            match: wt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(St, jt), e[3] = (e[4] || e[5] || "").replace(St, jt), "~=" === e[2] && (e[3] = " " + e[3] + " "), 
                    e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), 
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e;
                },
                PSEUDO: function(e) {
                    var n, r = !e[5] && e[2];
                    return wt.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && bt.test(r) && (n = m(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), 
                    e[2] = r.slice(0, n)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(St, jt).toLowerCase();
                    return "*" === e ? function() {
                        return !0;
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                },
                CLASS: function(e) {
                    var t = U[e + " "];
                    return t || (t = RegExp("(^|" + ct + ")" + e + "(" + ct + "|$)")) && U(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== K && e.getAttribute("class") || "");
                    });
                },
                ATTR: function(e, t, r) {
                    return function(i) {
                        var o = n.attr(i, e);
                        return null == o ? "!=" === t : t ? (o += "", "=" === t ? o === r : "!=" === t ? o !== r : "^=" === t ? r && 0 === o.indexOf(r) : "*=" === t ? r && o.indexOf(r) > -1 : "$=" === t ? r && o.slice(-r.length) === r : "~=" === t ? (" " + o + " ").indexOf(r) > -1 : "|=" === t ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0;
                    };
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode;
                    } : function(t, n, u) {
                        var c, l, f, p, d, h, m = o !== a ? "nextSibling" : "previousSibling", g = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !u && !s;
                        if (g) {
                            if (o) {
                                for (;m; ) {
                                    for (f = t; f = f[m]; ) if (s ? f.nodeName.toLowerCase() === y : 1 === f.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling";
                                }
                                return !0;
                            }
                            if (h = [ a ? g.firstChild : g.lastChild ], a && v) {
                                for (l = g[z] || (g[z] = {}), c = l[e] || [], d = c[0] === X && c[1], p = c[0] === X && c[2], f = d && g.childNodes[d]; f = ++d && f && f[m] || (p = d = 0) || h.pop(); ) if (1 === f.nodeType && ++p && f === t) {
                                    l[e] = [ X, d, p ];
                                    break;
                                }
                            } else if (v && (c = (t[z] || (t[z] = {}))[e]) && c[0] === X) p = c[1]; else for (;(f = ++d && f && f[m] || (p = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++p || (v && ((f[z] || (f[z] = {}))[e] = [ X, p ]), 
                            f !== t)); ) ;
                            return p -= i, p === r || 0 === p % r && p / r >= 0;
                        }
                    };
                },
                PSEUDO: function(e, t) {
                    var r, i = A.pseudos[e] || A.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                    return i[z] ? i(t) : i.length > 1 ? (r = [ e, e, "", t ], A.setFilters.hasOwnProperty(e.toLowerCase()) ? o(function(e, n) {
                        for (var r, o = i(e, t), a = o.length; a--; ) r = st.call(e, o[a]), e[r] = !(n[r] = o[a]);
                    }) : function(e) {
                        return i(e, 0, r);
                    }) : i;
                }
            },
            pseudos: {
                not: o(function(e) {
                    var t = [], n = [], r = O(e.replace(ht, "$1"));
                    return r[z] ? o(function(e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--; ) (o = a[s]) && (e[s] = !(t[s] = o));
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop();
                    };
                }),
                has: o(function(e) {
                    return function(t) {
                        return n(e, t).length > 0;
                    };
                }),
                contains: o(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || D(t)).indexOf(e) > -1;
                    };
                }),
                lang: o(function(e) {
                    return xt.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(St, jt).toLowerCase(), function(t) {
                        var n;
                        do if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), 
                        n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                    };
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                },
                root: function(e) {
                    return e === $;
                },
                focus: function(e) {
                    return e === F.activeElement && (!F.hasFocus || F.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: function(e) {
                    return e.disabled === !1;
                },
                disabled: function(e) {
                    return e.disabled === !0;
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                    return !0;
                },
                parent: function(e) {
                    return !A.pseudos.empty(e);
                },
                header: function(e) {
                    return kt.test(e.nodeName);
                },
                input: function(e) {
                    return Ct.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type);
                },
                first: h(function() {
                    return [ 0 ];
                }),
                last: h(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: h(function(e, t, n) {
                    return [ 0 > n ? n + t : n ];
                }),
                even: h(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e;
                }),
                odd: h(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e;
                }),
                lt: h(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0; ) e.push(r);
                    return e;
                }),
                gt: h(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; t > ++r; ) e.push(r);
                    return e;
                })
            }
        };
        for (N in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) A.pseudos[N] = p(N);
        for (N in {
            submit: !0,
            reset: !0
        }) A.pseudos[N] = d(N);
        O = n.compile = function(e, t) {
            var n, r = [], i = [], o = G[e + " "];
            if (!o) {
                for (t || (t = m(e)), n = t.length; n--; ) o = w(t[n]), o[z] ? r.push(o) : i.push(o);
                o = G(e, T(i, r));
            }
            return o;
        }, A.pseudos.nth = A.pseudos.eq, k.prototype = A.filters = A.pseudos, A.setFilters = new k(), S.sortStable = z.split("").sort(Q).join("") === z, 
        q(), [ 0, 0 ].sort(Q), S.detectDuplicates = J, ot.find = n, ot.expr = n.selectors, ot.expr[":"] = ot.expr.pseudos, 
        ot.unique = n.uniqueSort, ot.text = n.getText, ot.isXMLDoc = n.isXML, ot.contains = n.contains;
    }(e);
    var ht = {};
    ot.Callbacks = function(e) {
        e = "string" == typeof e ? ht[e] || r(e) : ot.extend({}, e);
        var n, i, o, a, s, u, c = [], l = !e.once && [], f = function(t) {
            for (n = e.memory && t, i = !0, u = a || 0, a = 0, s = c.length, o = !0; c && s > u; u++) if (c[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                n = !1;
                break;
            }
            o = !1, c && (l ? l.length && f(l.shift()) : n ? c = [] : p.disable());
        }, p = {
            add: function() {
                if (c) {
                    var t = c.length;
                    (function r(t) {
                        ot.each(t, function(t, n) {
                            var i = ot.type(n);
                            "function" === i ? e.unique && p.has(n) || c.push(n) : n && n.length && "string" !== i && r(n);
                        });
                    })(arguments), o ? s = c.length : n && (a = t, f(n));
                }
                return this;
            },
            remove: function() {
                return c && ot.each(arguments, function(e, t) {
                    for (var n; (n = ot.inArray(t, c, n)) > -1; ) c.splice(n, 1), o && (s >= n && s--, u >= n && u--);
                }), this;
            },
            has: function(e) {
                return e ? ot.inArray(e, c) > -1 : !(!c || !c.length);
            },
            empty: function() {
                return c = [], s = 0, this;
            },
            disable: function() {
                return c = l = n = t, this;
            },
            disabled: function() {
                return !c;
            },
            lock: function() {
                return l = t, n || p.disable(), this;
            },
            locked: function() {
                return !l;
            },
            fireWith: function(e, t) {
                return t = t || [], t = [ e, t.slice ? t.slice() : t ], !c || i && !l || (o ? l.push(t) : f(t)), this;
            },
            fire: function() {
                return p.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!i;
            }
        };
        return p;
    }, ot.extend({
        Deferred: function(e) {
            var t = [ [ "resolve", "done", ot.Callbacks("once memory"), "resolved" ], [ "reject", "fail", ot.Callbacks("once memory"), "rejected" ], [ "notify", "progress", ot.Callbacks("memory") ] ], n = "pending", r = {
                state: function() {
                    return n;
                },
                always: function() {
                    return i.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var e = arguments;
                    return ot.Deferred(function(n) {
                        ot.each(t, function(t, o) {
                            var a = o[0], s = ot.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && ot.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [ e ] : arguments);
                            });
                        }), e = null;
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? ot.extend(e, r) : r;
                }
            }, i = {};
            return r.pipe = r.then, ot.each(t, function(e, o) {
                var a = o[2], s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s;
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this;
                }, i[o[0] + "With"] = a.fireWith;
            }), r.promise(i), e && e.call(i, i), i;
        },
        when: function(e) {
            var t, n, r, i = 0, o = et.call(arguments), a = o.length, s = 1 !== a || e && ot.isFunction(e.promise) ? a : 0, u = 1 === s ? e : ot.Deferred(), c = function(e, n, r) {
                return function(i) {
                    n[e] = this, r[e] = arguments.length > 1 ? et.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r);
                };
            };
            if (a > 1) for (t = Array(a), n = Array(a), r = Array(a); a > i; i++) o[i] && ot.isFunction(o[i].promise) ? o[i].promise().done(c(i, r, o)).fail(u.reject).progress(c(i, n, t)) : --s;
            return s || u.resolveWith(r, o), u.promise();
        }
    }), ot.support = function(t) {
        var n = X.createElement("input"), r = X.createDocumentFragment(), i = X.createElement("div"), o = X.createElement("select"), a = o.appendChild(X.createElement("option"));
        return n.type ? (n.type = "checkbox", t.checkOn = "" !== n.value, t.optSelected = a.selected, t.reliableMarginRight = !0, 
        t.boxSizingReliable = !0, t.pixelPosition = !1, n.checked = !0, t.noCloneChecked = n.cloneNode(!0).checked, 
        o.disabled = !0, t.optDisabled = !a.disabled, n = X.createElement("input"), n.value = "t", n.type = "radio", 
        t.radioValue = "t" === n.value, n.setAttribute("checked", "t"), n.setAttribute("name", "t"), r.appendChild(n), 
        t.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, t.focusinBubbles = "onfocusin" in e, 
        i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === i.style.backgroundClip, 
        ot(function() {
            var n, r, o = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", a = X.getElementsByTagName("body")[0];
            a && (n = X.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", 
            a.appendChild(n).appendChild(i), i.innerHTML = "", i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", 
            ot.swap(a, null != a.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === i.offsetWidth;
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(i, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(i, null) || {
                width: "4px"
            }).width, r = i.appendChild(X.createElement("div")), r.style.cssText = i.style.cssText = o, r.style.marginRight = r.style.width = "0", 
            i.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), 
            a.removeChild(n));
        }), t) : t;
    }({});
    var mt, gt, yt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, vt = /([A-Z])/g;
    i.uid = 1, i.accepts = function(e) {
        return e.nodeType ? 1 === e.nodeType || 9 === e.nodeType : !0;
    }, i.prototype = {
        key: function(e) {
            if (!i.accepts(e)) return 0;
            var t = {}, n = e[this.expando];
            if (!n) {
                n = i.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t);
                } catch (r) {
                    t[this.expando] = n, ot.extend(e, t);
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n;
        },
        set: function(e, t, n) {
            var r, i = this.key(e), o = this.cache[i];
            if ("string" == typeof t) o[t] = n; else if (ot.isEmptyObject(o)) ot.extend(this.cache[i], t); else for (r in t) o[r] = t[r];
            return o;
        },
        get: function(e, n) {
            var r = this.cache[this.key(e)];
            return n === t ? r : r[n];
        },
        access: function(e, n, r) {
            return n === t || n && "string" == typeof n && r === t ? this.get(e, n) : (this.set(e, n, r), r !== t ? r : n);
        },
        remove: function(e, n) {
            var r, i, o, a = this.key(e), s = this.cache[a];
            if (n === t) this.cache[a] = {}; else {
                ot.isArray(n) ? i = n.concat(n.map(ot.camelCase)) : (o = ot.camelCase(n), n in s ? i = [ n, o ] : (i = o, 
                i = i in s ? [ i ] : i.match(st) || [])), r = i.length;
                for (;r--; ) delete s[i[r]];
            }
        },
        hasData: function(e) {
            return !ot.isEmptyObject(this.cache[e[this.expando]] || {});
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]];
        }
    }, mt = new i(), gt = new i(), ot.extend({
        acceptData: i.accepts,
        hasData: function(e) {
            return mt.hasData(e) || gt.hasData(e);
        },
        data: function(e, t, n) {
            return mt.access(e, t, n);
        },
        removeData: function(e, t) {
            mt.remove(e, t);
        },
        _data: function(e, t, n) {
            return gt.access(e, t, n);
        },
        _removeData: function(e, t) {
            gt.remove(e, t);
        }
    }), ot.fn.extend({
        data: function(e, n) {
            var r, i, a = this[0], s = 0, u = null;
            if (e === t) {
                if (this.length && (u = mt.get(a), 1 === a.nodeType && !gt.get(a, "hasDataAttrs"))) {
                    for (r = a.attributes; r.length > s; s++) i = r[s].name, 0 === i.indexOf("data-") && (i = ot.camelCase(i.slice(5)), 
                    o(a, i, u[i]));
                    gt.set(a, "hasDataAttrs", !0);
                }
                return u;
            }
            return "object" == typeof e ? this.each(function() {
                mt.set(this, e);
            }) : ot.access(this, function(n) {
                var r, i = ot.camelCase(e);
                if (a && n === t) {
                    if (r = mt.get(a, e), r !== t) return r;
                    if (r = mt.get(a, i), r !== t) return r;
                    if (r = o(a, i, t), r !== t) return r;
                } else this.each(function() {
                    var r = mt.get(this, i);
                    mt.set(this, i, n), -1 !== e.indexOf("-") && r !== t && mt.set(this, e, n);
                });
            }, null, n, arguments.length > 1, null, !0);
        },
        removeData: function(e) {
            return this.each(function() {
                mt.remove(this, e);
            });
        }
    }), ot.extend({
        queue: function(e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = gt.get(e, n), r && (!i || ot.isArray(r) ? i = gt.access(e, n, ot.makeArray(r)) : i.push(r)), 
            i || []) : t;
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ot.queue(e, t), r = n.length, i = n.shift(), o = ot._queueHooks(e, t), a = function() {
                ot.dequeue(e, t);
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, 
            i.call(e, a, o)), !r && o && o.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return gt.get(e, n) || gt.access(e, n, {
                empty: ot.Callbacks("once memory").add(function() {
                    gt.remove(e, [ t + "queue", n ]);
                })
            });
        }
    }), ot.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? ot.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = ot.queue(this, e, n);
                ot._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ot.dequeue(this, e);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                ot.dequeue(this, e);
            });
        },
        delay: function(e, t) {
            return e = ot.fx ? ot.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r);
                };
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, n) {
            var r, i = 1, o = ot.Deferred(), a = this, s = this.length, u = function() {
                --i || o.resolveWith(a, [ a ]);
            };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--; ) r = gt.get(a[s], e + "queueHooks"), 
            r && r.empty && (i++, r.empty.add(u));
            return u(), o.promise(n);
        }
    });
    var bt, xt, wt = /[\t\r\n\f]/g, Tt = /\r/g, Et = /^(?:input|select|textarea|button)$/i;
    ot.fn.extend({
        attr: function(e, t) {
            return ot.access(this, ot.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
            return this.each(function() {
                ot.removeAttr(this, e);
            });
        },
        prop: function(e, t) {
            return ot.access(this, ot.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[ot.propFix[e] || e];
            });
        },
        addClass: function(e) {
            var t, n, r, i, o, a = 0, s = this.length, u = "string" == typeof e && e;
            if (ot.isFunction(e)) return this.each(function(t) {
                ot(this).addClass(e.call(this, t, this.className));
            });
            if (u) for (t = (e || "").match(st) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(wt, " ") : " ")) {
                for (o = 0; i = t[o++]; ) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                n.className = ot.trim(r);
            }
            return this;
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0, s = this.length, u = 0 === arguments.length || "string" == typeof e && e;
            if (ot.isFunction(e)) return this.each(function(t) {
                ot(this).removeClass(e.call(this, t, this.className));
            });
            if (u) for (t = (e || "").match(st) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(wt, " ") : "")) {
                for (o = 0; i = t[o++]; ) for (;r.indexOf(" " + i + " ") >= 0; ) r = r.replace(" " + i + " ", " ");
                n.className = e ? ot.trim(r) : "";
            }
            return this;
        },
        toggleClass: function(e, t) {
            var n = typeof e, r = "boolean" == typeof t;
            return ot.isFunction(e) ? this.each(function(n) {
                ot(this).toggleClass(e.call(this, n, this.className, t), t);
            }) : this.each(function() {
                if ("string" === n) for (var i, o = 0, a = ot(this), s = t, u = e.match(st) || []; i = u[o++]; ) s = r ? s : !a.hasClass(i), 
                a[s ? "addClass" : "removeClass"](i); else (n === z || "boolean" === n) && (this.className && gt.set(this, "__className__", this.className), 
                this.className = this.className || e === !1 ? "" : gt.get(this, "__className__") || "");
            });
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(wt, " ").indexOf(t) >= 0) return !0;
            return !1;
        },
        val: function(e) {
            var n, r, i, o = this[0];
            return arguments.length ? (i = ot.isFunction(e), this.each(function(r) {
                var o;
                1 === this.nodeType && (o = i ? e.call(this, r, ot(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ot.isArray(o) && (o = ot.map(o, function(e) {
                    return null == e ? "" : e + "";
                })), n = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== t || (this.value = o));
            })) : o ? (n = ot.valHooks[o.type] || ot.valHooks[o.nodeName.toLowerCase()], n && "get" in n && (r = n.get(o, "value")) !== t ? r : (r = o.value, 
            "string" == typeof r ? r.replace(Tt, "") : null == r ? "" : r)) : t;
        }
    }), ot.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text;
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++) if (n = r[u], 
                    !(!n.selected && u !== i || (ot.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ot.nodeName(n.parentNode, "optgroup"))) {
                        if (t = ot(n).val(), o) return t;
                        a.push(t);
                    }
                    return a;
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = ot.makeArray(t), a = i.length; a--; ) r = i[a], (r.selected = ot.inArray(ot(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o;
                }
            }
        },
        attr: function(e, n, r) {
            var i, o, a = e.nodeType;
            return e && 3 !== a && 8 !== a && 2 !== a ? typeof e.getAttribute === z ? ot.prop(e, n, r) : (1 === a && ot.isXMLDoc(e) || (n = n.toLowerCase(), 
            i = ot.attrHooks[n] || (ot.expr.match.bool.test(n) ? xt : bt)), r === t ? i && "get" in i && null !== (o = i.get(e, n)) ? o : (o = ot.find.attr(e, n), 
            null == o ? t : o) : null !== r ? i && "set" in i && (o = i.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), 
            r) : (ot.removeAttr(e, n), t)) : t;
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, o = t && t.match(st);
            if (o && 1 === e.nodeType) for (;n = o[i++]; ) r = ot.propFix[n] || n, ot.expr.match.bool.test(n) && (e[r] = !1), 
            e.removeAttribute(n);
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ot.support.radioValue && "radio" === t && ot.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? (a = 1 !== s || !ot.isXMLDoc(e), a && (n = ot.propFix[n] || n, 
            o = ot.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]) : t;
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || Et.test(e.nodeName) || e.href ? e.tabIndex : -1;
                }
            }
        }
    }), xt = {
        set: function(e, t, n) {
            return t === !1 ? ot.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
    }, ot.each(ot.expr.match.bool.source.match(/\w+/g), function(e, n) {
        var r = ot.expr.attrHandle[n] || ot.find.attr;
        ot.expr.attrHandle[n] = function(e, n, i) {
            var o = ot.expr.attrHandle[n], a = i ? t : (ot.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return ot.expr.attrHandle[n] = o, a;
        };
    }), ot.support.optSelected || (ot.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
        }
    }), ot.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        ot.propFix[this.toLowerCase()] = this;
    }), ot.each([ "radio", "checkbox" ], function() {
        ot.valHooks[this] = {
            set: function(e, n) {
                return ot.isArray(n) ? e.checked = ot.inArray(ot(e).val(), n) >= 0 : t;
            }
        }, ot.support.checkOn || (ot.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    });
    var Ct = /^key/, kt = /^(?:mouse|contextmenu)|click/, Nt = /^(?:focusinfocus|focusoutblur)$/, St = /^([^.]*)(?:\.(.+)|)$/;
    ot.event = {
        global: {},
        add: function(e, n, r, i, o) {
            var a, s, u, c, l, f, p, d, h, m, g, y = gt.get(e);
            if (y) {
                for (r.handler && (a = r, r = a.handler, o = a.selector), r.guid || (r.guid = ot.guid++), (c = y.events) || (c = y.events = {}), 
                (s = y.handle) || (s = y.handle = function(e) {
                    return typeof ot === z || e && ot.event.triggered === e.type ? t : ot.event.dispatch.apply(s.elem, arguments);
                }, s.elem = e), n = (n || "").match(st) || [ "" ], l = n.length; l--; ) u = St.exec(n[l]) || [], h = g = u[1], 
                m = (u[2] || "").split(".").sort(), h && (p = ot.event.special[h] || {}, h = (o ? p.delegateType : p.bindType) || h, 
                p = ot.event.special[h] || {}, f = ot.extend({
                    type: h,
                    origType: g,
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && ot.expr.match.needsContext.test(o),
                    namespace: m.join(".")
                }, a), (d = c[h]) || (d = c[h] = [], d.delegateCount = 0, p.setup && p.setup.call(e, i, m, s) !== !1 || e.addEventListener && e.addEventListener(h, s, !1)), 
                p.add && (p.add.call(e, f), f.handler.guid || (f.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, f) : d.push(f), 
                ot.event.global[h] = !0);
                e = null;
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, c, l, f, p, d, h, m, g = gt.hasData(e) && gt.get(e);
            if (g && (u = g.events)) {
                for (t = (t || "").match(st) || [ "" ], c = t.length; c--; ) if (s = St.exec(t[c]) || [], d = m = s[1], 
                h = (s[2] || "").split(".").sort(), d) {
                    for (f = ot.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), 
                    a = o = p.length; o--; ) l = p[o], !i && m !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (p.splice(o, 1), 
                    l.selector && p.delegateCount--, f.remove && f.remove.call(e, l));
                    a && !p.length && (f.teardown && f.teardown.call(e, h, g.handle) !== !1 || ot.removeEvent(e, d, g.handle), 
                    delete u[d]);
                } else for (d in u) ot.event.remove(e, d + t[c], n, r, !0);
                ot.isEmptyObject(u) && (delete g.handle, gt.remove(e, "events"));
            }
        },
        trigger: function(n, r, i, o) {
            var a, s, u, c, l, f, p, d = [ i || X ], h = rt.call(n, "type") ? n.type : n, m = rt.call(n, "namespace") ? n.namespace.split(".") : [];
            if (s = u = i = i || X, 3 !== i.nodeType && 8 !== i.nodeType && !Nt.test(h + ot.event.triggered) && (h.indexOf(".") >= 0 && (m = h.split("."), 
            h = m.shift(), m.sort()), l = 0 > h.indexOf(":") && "on" + h, n = n[ot.expando] ? n : new ot.Event(h, "object" == typeof n && n), 
            n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            n.result = t, n.target || (n.target = i), r = null == r ? [ n ] : ot.makeArray(r, [ n ]), p = ot.event.special[h] || {}, 
            o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!o && !p.noBubble && !ot.isWindow(i)) {
                    for (c = p.delegateType || h, Nt.test(c + h) || (s = s.parentNode); s; s = s.parentNode) d.push(s), 
                    u = s;
                    u === (i.ownerDocument || X) && d.push(u.defaultView || u.parentWindow || e);
                }
                for (a = 0; (s = d[a++]) && !n.isPropagationStopped(); ) n.type = a > 1 ? c : p.bindType || h, f = (gt.get(s, "events") || {})[n.type] && gt.get(s, "handle"), 
                f && f.apply(s, r), f = l && s[l], f && ot.acceptData(s) && f.apply && f.apply(s, r) === !1 && n.preventDefault();
                return n.type = h, o || n.isDefaultPrevented() || p._default && p._default.apply(d.pop(), r) !== !1 || !ot.acceptData(i) || l && ot.isFunction(i[h]) && !ot.isWindow(i) && (u = i[l], 
                u && (i[l] = null), ot.event.triggered = h, i[h](), ot.event.triggered = t, u && (i[l] = u)), n.result;
            }
        },
        dispatch: function(e) {
            e = ot.event.fix(e);
            var n, r, i, o, a, s = [], u = et.call(arguments), c = (gt.get(this, "events") || {})[e.type] || [], l = ot.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (s = ot.event.handlers.call(this, e, c), n = 0; (o = s[n++]) && !e.isPropagationStopped(); ) for (e.currentTarget = o.elem, 
                r = 0; (a = o.handlers[r++]) && !e.isImmediatePropagationStopped(); ) (!e.namespace_re || e.namespace_re.test(a.namespace)) && (e.handleObj = a, 
                e.data = a.data, i = ((ot.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u), i !== t && (e.result = i) === !1 && (e.preventDefault(), 
                e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result;
            }
        },
        handlers: function(e, n) {
            var r, i, o, a, s = [], u = n.delegateCount, c = e.target;
            if (u && c.nodeType && (!e.button || "click" !== e.type)) for (;c !== this; c = c.parentNode || this) if (c.disabled !== !0 || "click" !== e.type) {
                for (i = [], r = 0; u > r; r++) a = n[r], o = a.selector + " ", i[o] === t && (i[o] = a.needsContext ? ot(o, this).index(c) >= 0 : ot.find(o, this, null, [ c ]).length), 
                i[o] && i.push(a);
                i.length && s.push({
                    elem: c,
                    handlers: i
                });
            }
            return n.length > u && s.push({
                elem: this,
                handlers: n.slice(u)
            }), s;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, o, a = n.button;
                return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || X, i = r.documentElement, 
                o = r.body, e.pageX = n.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), 
                e.pageY = n.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), 
                e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e;
            }
        },
        fix: function(e) {
            if (e[ot.expando]) return e;
            var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = kt.test(i) ? this.mouseHooks : Ct.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, 
            e = new ot.Event(o), t = r.length; t--; ) n = r[t], e[n] = o[n];
            return e.target || (e.target = X), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e;
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== u() && this.focus ? (this.focus(), !1) : t;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === u() && this.blur ? (this.blur(), !1) : t;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && ot.nodeName(this, "input") ? (this.click(), !1) : t;
                },
                _default: function(e) {
                    return ot.nodeName(e.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result);
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = ot.extend(new ot.Event(), n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? ot.event.trigger(i, null, t) : ot.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
        }
    }, ot.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1);
    }, ot.Event = function(e, n) {
        return this instanceof ot.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.getPreventDefault && e.getPreventDefault() ? a : s) : this.type = e, 
        n && ot.extend(this, n), this.timeStamp = e && e.timeStamp || ot.now(), this[ot.expando] = !0, t) : new ot.Event(e, n);
    }, ot.Event.prototype = {
        isDefaultPrevented: s,
        isPropagationStopped: s,
        isImmediatePropagationStopped: s,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = a, e && e.preventDefault && e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = a, e && e.stopPropagation && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = a, this.stopPropagation();
        }
    }, ot.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        ot.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !ot.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), 
                e.type = t), n;
            }
        };
    }), ot.support.focusinBubbles || ot.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0, r = function(e) {
            ot.event.simulate(t, e.target, ot.event.fix(e), !0);
        };
        ot.event.special[t] = {
            setup: function() {
                0 === n++ && X.addEventListener(e, r, !0);
            },
            teardown: function() {
                0 === --n && X.removeEventListener(e, r, !0);
            }
        };
    }), ot.fn.extend({
        on: function(e, n, r, i, o) {
            var a, u;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (u in e) this.on(u, n, r, e[u], o);
                return this;
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, 
            r = n, n = t)), i === !1) i = s; else if (!i) return this;
            return 1 === o && (a = i, i = function(e) {
                return ot().off(e), a.apply(this, arguments);
            }, i.guid = a.guid || (a.guid = ot.guid++)), this.each(function() {
                ot.event.add(this, e, i, r, n);
            });
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1);
        },
        off: function(e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ot(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), 
            this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this;
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = s), this.each(function() {
                ot.event.remove(this, e, r, n);
            });
        },
        trigger: function(e, t) {
            return this.each(function() {
                ot.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, n) {
            var r = this[0];
            return r ? ot.event.trigger(e, n, r, !0) : t;
        }
    });
    var jt = /^.[^:#\[\.,]*$/, At = /^(?:parents|prev(?:Until|All))/, Dt = ot.expr.match.needsContext, Mt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    ot.fn.extend({
        find: function(e) {
            var t, n = [], r = this, i = r.length;
            if ("string" != typeof e) return this.pushStack(ot(e).filter(function() {
                for (t = 0; i > t; t++) if (ot.contains(r[t], this)) return !0;
            }));
            for (t = 0; i > t; t++) ot.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? ot.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, 
            n;
        },
        has: function(e) {
            var t = ot(e, this), n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++) if (ot.contains(this, t[e])) return !0;
            });
        },
        not: function(e) {
            return this.pushStack(l(this, e || [], !0));
        },
        filter: function(e) {
            return this.pushStack(l(this, e || [], !1));
        },
        is: function(e) {
            return !!l(this, "string" == typeof e && Dt.test(e) ? ot(e) : e || [], !1).length;
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = Dt.test(e) || "string" != typeof e ? ot(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && ot.find.matchesSelector(n, e))) {
                n = o.push(n);
                break;
            }
            return this.pushStack(o.length > 1 ? ot.unique(o) : o);
        },
        index: function(e) {
            return e ? "string" == typeof e ? tt.call(ot(e), this[0]) : tt.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            var n = "string" == typeof e ? ot(e, t) : ot.makeArray(e && e.nodeType ? [ e ] : e), r = ot.merge(this.get(), n);
            return this.pushStack(ot.unique(r));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    }), ot.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return ot.dir(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return ot.dir(e, "parentNode", n);
        },
        next: function(e) {
            return c(e, "nextSibling");
        },
        prev: function(e) {
            return c(e, "previousSibling");
        },
        nextAll: function(e) {
            return ot.dir(e, "nextSibling");
        },
        prevAll: function(e) {
            return ot.dir(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return ot.dir(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return ot.dir(e, "previousSibling", n);
        },
        siblings: function(e) {
            return ot.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return ot.sibling(e.firstChild);
        },
        contents: function(e) {
            return e.contentDocument || ot.merge([], e.childNodes);
        }
    }, function(e, t) {
        ot.fn[e] = function(n, r) {
            var i = ot.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ot.filter(r, i)), this.length > 1 && (Mt[e] || ot.unique(i), 
            At.test(e) && i.reverse()), this.pushStack(i);
        };
    }), ot.extend({
        filter: function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ot.find.matchesSelector(r, e) ? [ r ] : [] : ot.find.matches(e, ot.grep(t, function(e) {
                return 1 === e.nodeType;
            }));
        },
        dir: function(e, n, r) {
            for (var i = [], o = r !== t; (e = e[n]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
                if (o && ot(e).is(r)) break;
                i.push(e);
            }
            return i;
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        }
    });
    var Ot = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Lt = /<([\w:]+)/, Pt = /<|&#?\w+;/, qt = /<(?:script|style|link)/i, Ft = /^(?:checkbox|radio)$/i, $t = /checked\s*(?:[^=]|=\s*.checked.)/i, Ht = /^$|\/(?:java|ecma)script/i, _t = /^true\/(.*)/, Rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, It = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    It.optgroup = It.option, It.tbody = It.tfoot = It.colgroup = It.caption = It.thead, It.th = It.td, ot.fn.extend({
        text: function(e) {
            return ot.access(this, function(e) {
                return e === t ? ot.text(this) : this.empty().append((this[0] && this[0].ownerDocument || X).createTextNode(e));
            }, null, e, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = f(this, e);
                    t.appendChild(e);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = f(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        remove: function(e, t) {
            for (var n, r = e ? ot.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || ot.cleanData(g(n)), 
            n.parentNode && (t && ot.contains(n.ownerDocument, n) && h(g(n, "script")), n.parentNode.removeChild(n));
            return this;
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ot.cleanData(g(e, !1)), e.textContent = "");
            return this;
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return ot.clone(this, e, t);
            });
        },
        html: function(e) {
            return ot.access(this, function(e) {
                var n = this[0] || {}, r = 0, i = this.length;
                if (e === t && 1 === n.nodeType) return n.innerHTML;
                if ("string" == typeof e && !qt.test(e) && !It[(Lt.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                    e = e.replace(Ot, "<$1></$2>");
                    try {
                        for (;i > r; r++) n = this[r] || {}, 1 === n.nodeType && (ot.cleanData(g(n, !1)), n.innerHTML = e);
                        n = 0;
                    } catch (o) {}
                }
                n && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith: function() {
            var e = ot.map(this, function(e) {
                return [ e.nextSibling, e.parentNode ];
            }), t = 0;
            return this.domManip(arguments, function(n) {
                var r = e[t++], i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), ot(this).remove(), i.insertBefore(n, r));
            }, !0), t ? this : this.remove();
        },
        detach: function(e) {
            return this.remove(e, !0);
        },
        domManip: function(e, t, n) {
            e = K.apply([], e);
            var r, i, o, a, s, u, c = 0, l = this.length, f = this, h = l - 1, m = e[0], y = ot.isFunction(m);
            if (y || !(1 >= l || "string" != typeof m || ot.support.checkClone) && $t.test(m)) return this.each(function(r) {
                var i = f.eq(r);
                y && (e[0] = m.call(this, r, i.html())), i.domManip(e, t, n);
            });
            if (l && (r = ot.buildFragment(e, this[0].ownerDocument, !1, !n && this), i = r.firstChild, 1 === r.childNodes.length && (r = i), 
            i)) {
                for (o = ot.map(g(r, "script"), p), a = o.length; l > c; c++) s = r, c !== h && (s = ot.clone(s, !0, !0), 
                a && ot.merge(o, g(s, "script"))), t.call(this[c], s, c);
                if (a) for (u = o[o.length - 1].ownerDocument, ot.map(o, d), c = 0; a > c; c++) s = o[c], Ht.test(s.type || "") && !gt.access(s, "globalEval") && ot.contains(u, s) && (s.src ? ot._evalUrl(s.src) : ot.globalEval(s.textContent.replace(Rt, "")));
            }
            return this;
        }
    }), ot.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        ot.fn[e] = function(e) {
            for (var n, r = [], i = ot(e), o = i.length - 1, a = 0; o >= a; a++) n = a === o ? this : this.clone(!0), 
            ot(i[a])[t](n), Z.apply(r, n.get());
            return this.pushStack(r);
        };
    }), ot.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0), u = ot.contains(e.ownerDocument, e);
            if (!(ot.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ot.isXMLDoc(e))) for (a = g(s), 
            o = g(e), r = 0, i = o.length; i > r; r++) y(o[r], a[r]);
            if (t) if (n) for (o = o || g(e), a = a || g(s), r = 0, i = o.length; i > r; r++) m(o[r], a[r]); else m(e, s);
            return a = g(s, "script"), a.length > 0 && h(a, !u && g(e, "script")), s;
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, u, c, l = 0, f = e.length, p = t.createDocumentFragment(), d = []; f > l; l++) if (i = e[l], 
            i || 0 === i) if ("object" === ot.type(i)) ot.merge(d, i.nodeType ? [ i ] : i); else if (Pt.test(i)) {
                for (o = o || p.appendChild(t.createElement("div")), a = (Lt.exec(i) || [ "", "" ])[1].toLowerCase(), 
                s = It[a] || It._default, o.innerHTML = s[1] + i.replace(Ot, "<$1></$2>") + s[2], c = s[0]; c--; ) o = o.firstChild;
                ot.merge(d, o.childNodes), o = p.firstChild, o.textContent = "";
            } else d.push(t.createTextNode(i));
            for (p.textContent = "", l = 0; i = d[l++]; ) if ((!r || -1 === ot.inArray(i, r)) && (u = ot.contains(i.ownerDocument, i), 
            o = g(p.appendChild(i), "script"), u && h(o), n)) for (c = 0; i = o[c++]; ) Ht.test(i.type || "") && n.push(i);
            return p;
        },
        cleanData: function(e) {
            for (var n, r, o, a, s, u, c = ot.event.special, l = 0; (r = e[l]) !== t; l++) {
                if (i.accepts(r) && (s = r[gt.expando], s && (n = gt.cache[s]))) {
                    if (o = Object.keys(n.events || {}), o.length) for (u = 0; (a = o[u]) !== t; u++) c[a] ? ot.event.remove(r, a) : ot.removeEvent(r, a, n.handle);
                    gt.cache[s] && delete gt.cache[s];
                }
                delete mt.cache[r[mt.expando]];
            }
        },
        _evalUrl: function(e) {
            return ot.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            });
        }
    }), ot.fn.extend({
        wrapAll: function(e) {
            var t;
            return ot.isFunction(e) ? this.each(function(t) {
                ot(this).wrapAll(e.call(this, t));
            }) : (this[0] && (t = ot(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), 
            t.map(function() {
                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                return e;
            }).append(this)), this);
        },
        wrapInner: function(e) {
            return ot.isFunction(e) ? this.each(function(t) {
                ot(this).wrapInner(e.call(this, t));
            }) : this.each(function() {
                var t = ot(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
            });
        },
        wrap: function(e) {
            var t = ot.isFunction(e);
            return this.each(function(n) {
                ot(this).wrapAll(t ? e.call(this, n) : e);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes);
            }).end();
        }
    });
    var Bt, zt, Wt = /^(none|table(?!-c[ea]).+)/, Xt = /^margin/, Yt = RegExp("^(" + at + ")(.*)$", "i"), Ut = RegExp("^(" + at + ")(?!px)[a-z%]+$", "i"), Vt = RegExp("^([+-])=(" + at + ")", "i"), Gt = {
        BODY: "block"
    }, Jt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Qt = {
        letterSpacing: 0,
        fontWeight: 400
    }, Kt = [ "Top", "Right", "Bottom", "Left" ], Zt = [ "Webkit", "O", "Moz", "ms" ];
    ot.fn.extend({
        css: function(e, n) {
            return ot.access(this, function(e, n, r) {
                var i, o, a = {}, s = 0;
                if (ot.isArray(n)) {
                    for (i = x(e), o = n.length; o > s; s++) a[n[s]] = ot.css(e, n[s], !1, i);
                    return a;
                }
                return r !== t ? ot.style(e, n, r) : ot.css(e, n);
            }, e, n, arguments.length > 1);
        },
        show: function() {
            return w(this, !0);
        },
        hide: function() {
            return w(this);
        },
        toggle: function(e) {
            var t = "boolean" == typeof e;
            return this.each(function() {
                (t ? e : b(this)) ? ot(this).show() : ot(this).hide();
            });
        }
    }), ot.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Bt(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, u = ot.camelCase(n), c = e.style;
                return n = ot.cssProps[u] || (ot.cssProps[u] = v(c, u)), s = ot.cssHooks[n] || ot.cssHooks[u], r === t ? s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : c[n] : (a = typeof r, 
                "string" === a && (o = Vt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(ot.css(e, n)), a = "number"), 
                null == r || "number" === a && isNaN(r) || ("number" !== a || ot.cssNumber[u] || (r += "px"), ot.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (c[n] = "inherit"), 
                s && "set" in s && (r = s.set(e, r, i)) === t || (c[n] = r)), t);
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, u = ot.camelCase(n);
            return n = ot.cssProps[u] || (ot.cssProps[u] = v(e.style, u)), s = ot.cssHooks[n] || ot.cssHooks[u], 
            s && "get" in s && (o = s.get(e, !0, r)), o === t && (o = Bt(e, n, i)), "normal" === o && n in Qt && (o = Qt[n]), 
            "" === r || r ? (a = parseFloat(o), r === !0 || ot.isNumeric(a) ? a || 0 : o) : o;
        }
    }), Bt = function(e, n, r) {
        var i, o, a, s = r || x(e), u = s ? s.getPropertyValue(n) || s[n] : t, c = e.style;
        return s && ("" !== u || ot.contains(e.ownerDocument, e) || (u = ot.style(e, n)), Ut.test(u) && Xt.test(n) && (i = c.width, 
        o = c.minWidth, a = c.maxWidth, c.minWidth = c.maxWidth = c.width = u, u = s.width, c.width = i, c.minWidth = o, 
        c.maxWidth = a)), u;
    }, ot.each([ "height", "width" ], function(e, n) {
        ot.cssHooks[n] = {
            get: function(e, r, i) {
                return r ? 0 === e.offsetWidth && Wt.test(ot.css(e, "display")) ? ot.swap(e, Jt, function() {
                    return C(e, n, i);
                }) : C(e, n, i) : t;
            },
            set: function(e, t, r) {
                var i = r && x(e);
                return T(e, t, r ? E(e, n, r, ot.support.boxSizing && "border-box" === ot.css(e, "boxSizing", !1, i), i) : 0);
            }
        };
    }), ot(function() {
        ot.support.reliableMarginRight || (ot.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? ot.swap(e, {
                    display: "inline-block"
                }, Bt, [ e, "marginRight" ]) : t;
            }
        }), !ot.support.pixelPosition && ot.fn.position && ot.each([ "top", "left" ], function(e, n) {
            ot.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = Bt(e, n), Ut.test(r) ? ot(e).position()[n] + "px" : r) : t;
                }
            };
        });
    }), ot.expr && ot.expr.filters && (ot.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight;
    }, ot.expr.filters.visible = function(e) {
        return !ot.expr.filters.hidden(e);
    }), ot.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        ot.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [ n ]; 4 > r; r++) i[e + Kt[r] + t] = o[r] || o[r - 2] || o[0];
                return i;
            }
        }, Xt.test(e) || (ot.cssHooks[e + t].set = T);
    });
    var en = /%20/g, tn = /\[\]$/, nn = /\r?\n/g, rn = /^(?:submit|button|image|reset|file)$/i, on = /^(?:input|select|textarea|keygen)/i;
    ot.fn.extend({
        serialize: function() {
            return ot.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ot.prop(this, "elements");
                return e ? ot.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !ot(this).is(":disabled") && on.test(this.nodeName) && !rn.test(e) && (this.checked || !Ft.test(e));
            }).map(function(e, t) {
                var n = ot(this).val();
                return null == n ? null : ot.isArray(n) ? ot.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(nn, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(nn, "\r\n")
                };
            }).get();
        }
    }), ot.param = function(e, n) {
        var r, i = [], o = function(e, t) {
            t = ot.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
        };
        if (n === t && (n = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(e) || e.jquery && !ot.isPlainObject(e)) ot.each(e, function() {
            o(this.name, this.value);
        }); else for (r in e) S(r, e[r], n, o);
        return i.join("&").replace(en, "+");
    }, ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        ot.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
    }), ot.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r);
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        }
    });
    var an, sn, un = ot.now(), cn = /\?/, ln = /#.*$/, fn = /([?&])_=[^&]*/, pn = /^(.*?):[ \t]*([^\r\n]*)$/gm, dn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, hn = /^(?:GET|HEAD)$/, mn = /^\/\//, gn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, yn = ot.fn.load, vn = {}, bn = {}, xn = "*/".concat("*");
    try {
        sn = W.href;
    } catch (wn) {
        sn = X.createElement("a"), sn.href = "", sn = sn.href;
    }
    an = gn.exec(sn.toLowerCase()) || [], ot.fn.load = function(e, n, r) {
        if ("string" != typeof e && yn) return yn.apply(this, arguments);
        var i, o, a, s = this, u = e.indexOf(" ");
        return u >= 0 && (i = e.slice(u), e = e.slice(0, u)), ot.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (o = "POST"), 
        s.length > 0 && ot.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: n
        }).done(function(e) {
            a = arguments, s.html(i ? ot("<div>").append(ot.parseHTML(e)).find(i) : e);
        }).complete(r && function(e, t) {
            s.each(r, a || [ e.responseText, t, e ]);
        }), this;
    }, ot.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
        ot.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), ot.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: sn,
            type: "GET",
            isLocal: dn.test(an[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": xn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ot.parseJSON,
                "text xml": ot.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? D(D(e, ot.ajaxSettings), t) : D(ot.ajaxSettings, e);
        },
        ajaxPrefilter: j(vn),
        ajaxTransport: j(bn),
        ajax: function(e, n) {
            function r(e, n, r, s) {
                var c, f, v, b, w, E = n;
                2 !== x && (x = 2, u && clearTimeout(u), i = t, a = s || "", T.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, 
                r && (b = M(p, T, r)), b = O(p, b, T, c), c ? (p.ifModified && (w = T.getResponseHeader("Last-Modified"), 
                w && (ot.lastModified[o] = w), w = T.getResponseHeader("etag"), w && (ot.etag[o] = w)), 204 === e || "HEAD" === p.type ? E = "nocontent" : 304 === e ? E = "notmodified" : (E = b.state, 
                f = b.data, v = b.error, c = !v)) : (v = E, (e || !E) && (E = "error", 0 > e && (e = 0))), T.status = e, 
                T.statusText = (n || E) + "", c ? m.resolveWith(d, [ f, E, T ]) : m.rejectWith(d, [ T, E, v ]), T.statusCode(y), 
                y = t, l && h.trigger(c ? "ajaxSuccess" : "ajaxError", [ T, p, c ? f : v ]), g.fireWith(d, [ T, E ]), 
                l && (h.trigger("ajaxComplete", [ T, p ]), --ot.active || ot.event.trigger("ajaxStop")));
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var i, o, a, s, u, c, l, f, p = ot.ajaxSetup({}, n), d = p.context || p, h = p.context && (d.nodeType || d.jquery) ? ot(d) : ot.event, m = ot.Deferred(), g = ot.Callbacks("once memory"), y = p.statusCode || {}, v = {}, b = {}, x = 0, w = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === x) {
                        if (!s) for (s = {}; t = pn.exec(a); ) s[t[1].toLowerCase()] = t[2];
                        t = s[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? a : null;
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return x || (e = b[n] = b[n] || e, v[e] = t), this;
                },
                overrideMimeType: function(e) {
                    return x || (p.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (2 > x) for (t in e) y[t] = [ y[t], e[t] ]; else T.always(e[T.status]);
                    return this;
                },
                abort: function(e) {
                    var t = e || w;
                    return i && i.abort(t), r(0, t), this;
                }
            };
            if (m.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, p.url = ((e || p.url || sn) + "").replace(ln, "").replace(mn, an[1] + "//"), 
            p.type = n.method || n.type || p.method || p.type, p.dataTypes = ot.trim(p.dataType || "*").toLowerCase().match(st) || [ "" ], 
            null == p.crossDomain && (c = gn.exec(p.url.toLowerCase()), p.crossDomain = !(!c || c[1] === an[1] && c[2] === an[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (an[3] || ("http:" === an[1] ? "80" : "443")))), 
            p.data && p.processData && "string" != typeof p.data && (p.data = ot.param(p.data, p.traditional)), 
            A(vn, p, n, T), 2 === x) return T;
            l = p.global, l && 0 === ot.active++ && ot.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), 
            p.hasContent = !hn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (cn.test(o) ? "&" : "?") + p.data, 
            delete p.data), p.cache === !1 && (p.url = fn.test(o) ? o.replace(fn, "$1_=" + un++) : o + (cn.test(o) ? "&" : "?") + "_=" + un++)), 
            p.ifModified && (ot.lastModified[o] && T.setRequestHeader("If-Modified-Since", ot.lastModified[o]), 
            ot.etag[o] && T.setRequestHeader("If-None-Match", ot.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), 
            T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + xn + "; q=0.01" : "") : p.accepts["*"]);
            for (f in p.headers) T.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (p.beforeSend.call(d, T, p) === !1 || 2 === x)) return T.abort();
            w = "abort";
            for (f in {
                success: 1,
                error: 1,
                complete: 1
            }) T[f](p[f]);
            if (i = A(bn, p, n, T)) {
                T.readyState = 1, l && h.trigger("ajaxSend", [ T, p ]), p.async && p.timeout > 0 && (u = setTimeout(function() {
                    T.abort("timeout");
                }, p.timeout));
                try {
                    x = 1, i.send(v, r);
                } catch (E) {
                    if (!(2 > x)) throw E;
                    r(-1, E);
                }
            } else r(-1, "No Transport");
            return T;
        },
        getJSON: function(e, t, n) {
            return ot.get(e, t, n, "json");
        },
        getScript: function(e, n) {
            return ot.get(e, t, n, "script");
        }
    }), ot.each([ "get", "post" ], function(e, n) {
        ot[n] = function(e, r, i, o) {
            return ot.isFunction(r) && (o = o || i, i = r, r = t), ot.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            });
        };
    }), ot.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return ot.globalEval(e), e;
            }
        }
    }), ot.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), ot.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, i) {
                    t = ot("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type);
                    }), X.head.appendChild(t[0]);
                },
                abort: function() {
                    n && n();
                }
            };
        }
    });
    var Tn = [], En = /(=)\?(?=&|$)|\?\?/;
    ot.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Tn.pop() || ot.expando + "_" + un++;
            return this[e] = !0, e;
        }
    }), ot.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, a, s, u = n.jsonp !== !1 && (En.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && En.test(n.data) && "data");
        return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ot.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, 
        u ? n[u] = n[u].replace(En, "$1" + o) : n.jsonp !== !1 && (n.url += (cn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), 
        n.converters["script json"] = function() {
            return s || ot.error(o + " was not called"), s[0];
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
            s = arguments;
        }, i.always(function() {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Tn.push(o)), s && ot.isFunction(a) && a(s[0]), 
            s = a = t;
        }), "script") : t;
    }), ot.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest();
        } catch (e) {}
    };
    var Cn = ot.ajaxSettings.xhr(), kn = {
        0: 200,
        1223: 204
    }, Nn = 0, Sn = {};
    e.ActiveXObject && ot(e).on("unload", function() {
        for (var e in Sn) Sn[e]();
        Sn = t;
    }), ot.support.cors = !!Cn && "withCredentials" in Cn, ot.support.ajax = Cn = !!Cn, ot.ajaxTransport(function(e) {
        var n;
        return ot.support.cors || Cn && !e.crossDomain ? {
            send: function(r, i) {
                var o, a, s = e.xhr();
                if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (o in e.xhrFields) s[o] = e.xhrFields[o];
                e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (o in r) s.setRequestHeader(o, r[o]);
                n = function(e) {
                    return function() {
                        n && (delete Sn[a], n = s.onload = s.onerror = null, "abort" === e ? s.abort() : "error" === e ? i(s.status || 404, s.statusText) : i(kn[s.status] || s.status, s.statusText, "string" == typeof s.responseText ? {
                            text: s.responseText
                        } : t, s.getAllResponseHeaders()));
                    };
                }, s.onload = n(), s.onerror = n("error"), n = Sn[a = Nn++] = n("abort"), s.send(e.hasContent && e.data || null);
            },
            abort: function() {
                n && n();
            }
        } : t;
    });
    var jn, An, Dn = /^(?:toggle|show|hide)$/, Mn = RegExp("^(?:([+-])=|)(" + at + ")([a-z%]*)$", "i"), On = /queueHooks$/, Ln = [ $ ], Pn = {
        "*": [ function(e, t) {
            var n = this.createTween(e, t), r = n.cur(), i = Mn.exec(t), o = i && i[3] || (ot.cssNumber[e] ? "" : "px"), a = (ot.cssNumber[e] || "px" !== o && +r) && Mn.exec(ot.css(n.elem, e)), s = 1, u = 20;
            if (a && a[3] !== o) {
                o = o || a[3], i = i || [], a = +r || 1;
                do s = s || ".5", a /= s, ot.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --u);
            }
            return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), 
            n;
        } ]
    };
    ot.Animation = ot.extend(q, {
        tweener: function(e, t) {
            ot.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++) n = e[r], Pn[n] = Pn[n] || [], Pn[n].unshift(t);
        },
        prefilter: function(e, t) {
            t ? Ln.unshift(e) : Ln.push(e);
        }
    }), ot.Tween = H, H.prototype = {
        constructor: H,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), 
            this.end = r, this.unit = o || (ot.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = H.propHooks[this.prop];
            return e && e.get ? e.get(this) : H.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = H.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ot.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, 
            this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : H.propHooks._default.set(this), this;
        }
    }, H.prototype.init.prototype = H.prototype, H.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ot.css(e.elem, e.prop, ""), 
                t && "auto" !== t ? t : 0) : e.elem[e.prop];
            },
            set: function(e) {
                ot.fx.step[e.prop] ? ot.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ot.cssProps[e.prop]] || ot.cssHooks[e.prop]) ? ot.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
            }
        }
    }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, ot.each([ "toggle", "show", "hide" ], function(e, t) {
        var n = ot.fn[t];
        ot.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(_(t, !0), e, r, i);
        };
    }), ot.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(b).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r);
        },
        animate: function(e, t, n, r) {
            var i = ot.isEmptyObject(e), o = ot.speed(t, n, r), a = function() {
                var t = q(this, ot.extend({}, e), o);
                (i || gt.get(this, "finish")) && t.stop(!0);
            };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a);
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r);
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0, n = null != e && e + "queueHooks", o = ot.timers, a = gt.get(this);
                if (n) a[n] && a[n].stop && i(a[n]); else for (n in a) a[n] && a[n].stop && On.test(n) && i(a[n]);
                for (n = o.length; n--; ) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), 
                t = !1, o.splice(n, 1));
                (t || !r) && ot.dequeue(this, e);
            });
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = gt.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = ot.timers, a = r ? r.length : 0;
                for (n.finish = !0, ot.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), 
                o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
            });
        }
    }), ot.each({
        slideDown: _("show"),
        slideUp: _("hide"),
        slideToggle: _("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        ot.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r);
        };
    }), ot.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? ot.extend({}, e) : {
            complete: n || !n && t || ot.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !ot.isFunction(t) && t
        };
        return r.duration = ot.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ot.fx.speeds ? ot.fx.speeds[r.duration] : ot.fx.speeds._default, 
        (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            ot.isFunction(r.old) && r.old.call(this), r.queue && ot.dequeue(this, r.queue);
        }, r;
    }, ot.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        }
    }, ot.timers = [], ot.fx = H.prototype.init, ot.fx.tick = function() {
        var e, n = ot.timers, r = 0;
        for (jn = ot.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || ot.fx.stop(), jn = t;
    }, ot.fx.timer = function(e) {
        e() && ot.timers.push(e) && ot.fx.start();
    }, ot.fx.interval = 13, ot.fx.start = function() {
        An || (An = setInterval(ot.fx.tick, ot.fx.interval));
    }, ot.fx.stop = function() {
        clearInterval(An), An = null;
    }, ot.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ot.fx.step = {}, ot.expr && ot.expr.filters && (ot.expr.filters.animated = function(e) {
        return ot.grep(ot.timers, function(t) {
            return e === t.elem;
        }).length;
    }), ot.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            ot.offset.setOffset(this, e, t);
        });
        var n, r, i = this[0], o = {
            top: 0,
            left: 0
        }, a = i && i.ownerDocument;
        return a ? (n = a.documentElement, ot.contains(n, i) ? (typeof i.getBoundingClientRect !== z && (o = i.getBoundingClientRect()), 
        r = R(a), {
            top: o.top + r.pageYOffset - n.clientTop,
            left: o.left + r.pageXOffset - n.clientLeft
        }) : o) : t;
    }, ot.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, c, l = ot.css(e, "position"), f = ot(e), p = {};
            "static" === l && (e.style.position = "relative"), s = f.offset(), o = ot.css(e, "top"), u = ot.css(e, "left"), 
            c = ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1, c ? (r = f.position(), a = r.top, 
            i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), ot.isFunction(t) && (t = t.call(e, n, s)), 
            null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p);
        }
    }, ot.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], r = {
                    top: 0,
                    left: 0
                };
                return "fixed" === ot.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), 
                t = this.offset(), ot.nodeName(e[0], "html") || (r = e.offset()), r.top += ot.css(e[0], "borderTopWidth", !0), 
                r.left += ot.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - ot.css(n, "marginTop", !0),
                    left: t.left - r.left - ot.css(n, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Y; e && !ot.nodeName(e, "html") && "static" === ot.css(e, "position"); ) e = e.offsetParent;
                return e || Y;
            });
        }
    }), ot.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(n, r) {
        var i = "pageYOffset" === r;
        ot.fn[n] = function(o) {
            return ot.access(this, function(n, o, a) {
                var s = R(n);
                return a === t ? s ? s[r] : n[o] : (s ? s.scrollTo(i ? e.pageXOffset : a, i ? a : e.pageYOffset) : n[o] = a, 
                t);
            }, n, o, arguments.length, null);
        };
    }), ot.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        ot.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            ot.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i), s = r || (i === !0 || o === !0 ? "margin" : "border");
                return ot.access(this, function(n, r, i) {
                    var o;
                    return ot.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, 
                    Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? ot.css(n, r, s) : ot.style(n, r, i, s);
                }, n, a ? i : t, a, null);
            };
        });
    }), ot.fn.size = function() {
        return this.length;
    }, ot.fn.andSelf = ot.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ot : "function" == typeof define && define.amd && define("jquery", [], function() {
        return ot;
    }), "object" == typeof e && "object" == typeof e.document && (e.jQuery = e.$ = ot);
})(window), //     Underscore may be freely distributed under the MIT license.
function() {
    var e = this, t = e._, n = {}, r = Array.prototype, i = Object.prototype, o = Function.prototype, a = r.push, s = r.slice, u = r.concat, c = i.toString, l = i.hasOwnProperty, f = r.forEach, p = r.map, d = r.reduce, h = r.reduceRight, m = r.filter, g = r.every, y = r.some, v = r.indexOf, b = r.lastIndexOf, x = Array.isArray, w = Object.keys, T = o.bind, E = function(e) {
        return e instanceof E ? e : this instanceof E ? (this._wrapped = e, void 0) : new E(e);
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = E), 
    exports._ = E) : e._ = E, E.VERSION = "1.5.1";
    var C = E.each = E.forEach = function(e, t, r) {
        if (null != e) if (f && e.forEach === f) e.forEach(t, r); else if (e.length === +e.length) {
            for (var i = 0, o = e.length; o > i; i++) if (t.call(r, e[i], i, e) === n) return;
        } else for (var a in e) if (E.has(e, a) && t.call(r, e[a], a, e) === n) return;
    };
    E.map = E.collect = function(e, t, n) {
        var r = [];
        return null == e ? r : p && e.map === p ? e.map(t, n) : (C(e, function(e, i, o) {
            r.push(t.call(n, e, i, o));
        }), r);
    };
    var k = "Reduce of empty array with no initial value";
    E.reduce = E.foldl = E.inject = function(e, t, n, r) {
        var i = arguments.length > 2;
        if (null == e && (e = []), d && e.reduce === d) return r && (t = E.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
        if (C(e, function(e, o, a) {
            i ? n = t.call(r, n, e, o, a) : (n = e, i = !0);
        }), !i) throw new TypeError(k);
        return n;
    }, E.reduceRight = E.foldr = function(e, t, n, r) {
        var i = arguments.length > 2;
        if (null == e && (e = []), h && e.reduceRight === h) return r && (t = E.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
        var o = e.length;
        if (o !== +o) {
            var a = E.keys(e);
            o = a.length;
        }
        if (C(e, function(s, u, c) {
            u = a ? a[--o] : --o, i ? n = t.call(r, n, e[u], u, c) : (n = e[u], i = !0);
        }), !i) throw new TypeError(k);
        return n;
    }, E.find = E.detect = function(e, t, n) {
        var r;
        return N(e, function(e, i, o) {
            return t.call(n, e, i, o) ? (r = e, !0) : void 0;
        }), r;
    }, E.filter = E.select = function(e, t, n) {
        var r = [];
        return null == e ? r : m && e.filter === m ? e.filter(t, n) : (C(e, function(e, i, o) {
            t.call(n, e, i, o) && r.push(e);
        }), r);
    }, E.reject = function(e, t, n) {
        return E.filter(e, function(e, r, i) {
            return !t.call(n, e, r, i);
        }, n);
    }, E.every = E.all = function(e, t, r) {
        t || (t = E.identity);
        var i = !0;
        return null == e ? i : g && e.every === g ? e.every(t, r) : (C(e, function(e, o, a) {
            return (i = i && t.call(r, e, o, a)) ? void 0 : n;
        }), !!i);
    };
    var N = E.some = E.any = function(e, t, r) {
        t || (t = E.identity);
        var i = !1;
        return null == e ? i : y && e.some === y ? e.some(t, r) : (C(e, function(e, o, a) {
            return i || (i = t.call(r, e, o, a)) ? n : void 0;
        }), !!i);
    };
    E.contains = E.include = function(e, t) {
        return null == e ? !1 : v && e.indexOf === v ? -1 != e.indexOf(t) : N(e, function(e) {
            return e === t;
        });
    }, E.invoke = function(e, t) {
        var n = s.call(arguments, 2), r = E.isFunction(t);
        return E.map(e, function(e) {
            return (r ? t : e[t]).apply(e, n);
        });
    }, E.pluck = function(e, t) {
        return E.map(e, function(e) {
            return e[t];
        });
    }, E.where = function(e, t, n) {
        return E.isEmpty(t) ? n ? void 0 : [] : E[n ? "find" : "filter"](e, function(e) {
            for (var n in t) if (t[n] !== e[n]) return !1;
            return !0;
        });
    }, E.findWhere = function(e, t) {
        return E.where(e, t, !0);
    }, E.max = function(e, t, n) {
        if (!t && E.isArray(e) && e[0] === +e[0] && 65535 > e.length) return Math.max.apply(Math, e);
        if (!t && E.isEmpty(e)) return -1/0;
        var r = {
            computed: -1/0,
            value: -1/0
        };
        return C(e, function(e, i, o) {
            var a = t ? t.call(n, e, i, o) : e;
            a > r.computed && (r = {
                value: e,
                computed: a
            });
        }), r.value;
    }, E.min = function(e, t, n) {
        if (!t && E.isArray(e) && e[0] === +e[0] && 65535 > e.length) return Math.min.apply(Math, e);
        if (!t && E.isEmpty(e)) return 1/0;
        var r = {
            computed: 1/0,
            value: 1/0
        };
        return C(e, function(e, i, o) {
            var a = t ? t.call(n, e, i, o) : e;
            r.computed > a && (r = {
                value: e,
                computed: a
            });
        }), r.value;
    }, E.shuffle = function(e) {
        var t, n = 0, r = [];
        return C(e, function(e) {
            t = E.random(n++), r[n - 1] = r[t], r[t] = e;
        }), r;
    };
    var S = function(e) {
        return E.isFunction(e) ? e : function(t) {
            return t[e];
        };
    };
    E.sortBy = function(e, t, n) {
        var r = S(t);
        return E.pluck(E.map(e, function(e, t, i) {
            return {
                value: e,
                index: t,
                criteria: r.call(n, e, t, i)
            };
        }).sort(function(e, t) {
            var n = e.criteria, r = t.criteria;
            if (n !== r) {
                if (n > r || void 0 === n) return 1;
                if (r > n || void 0 === r) return -1;
            }
            return e.index < t.index ? -1 : 1;
        }), "value");
    };
    var j = function(e, t, n, r) {
        var i = {}, o = S(null == t ? E.identity : t);
        return C(e, function(t, a) {
            var s = o.call(n, t, a, e);
            r(i, s, t);
        }), i;
    };
    E.groupBy = function(e, t, n) {
        return j(e, t, n, function(e, t, n) {
            (E.has(e, t) ? e[t] : e[t] = []).push(n);
        });
    }, E.countBy = function(e, t, n) {
        return j(e, t, n, function(e, t) {
            E.has(e, t) || (e[t] = 0), e[t]++;
        });
    }, E.sortedIndex = function(e, t, n, r) {
        n = null == n ? E.identity : S(n);
        for (var i = n.call(r, t), o = 0, a = e.length; a > o; ) {
            var s = o + a >>> 1;
            i > n.call(r, e[s]) ? o = s + 1 : a = s;
        }
        return o;
    }, E.toArray = function(e) {
        return e ? E.isArray(e) ? s.call(e) : e.length === +e.length ? E.map(e, E.identity) : E.values(e) : [];
    }, E.size = function(e) {
        return null == e ? 0 : e.length === +e.length ? e.length : E.keys(e).length;
    }, E.first = E.head = E.take = function(e, t, n) {
        return null == e ? void 0 : null == t || n ? e[0] : s.call(e, 0, t);
    }, E.initial = function(e, t, n) {
        return s.call(e, 0, e.length - (null == t || n ? 1 : t));
    }, E.last = function(e, t, n) {
        return null == e ? void 0 : null == t || n ? e[e.length - 1] : s.call(e, Math.max(e.length - t, 0));
    }, E.rest = E.tail = E.drop = function(e, t, n) {
        return s.call(e, null == t || n ? 1 : t);
    }, E.compact = function(e) {
        return E.filter(e, E.identity);
    };
    var A = function(e, t, n) {
        return t && E.every(e, E.isArray) ? u.apply(n, e) : (C(e, function(e) {
            E.isArray(e) || E.isArguments(e) ? t ? a.apply(n, e) : A(e, t, n) : n.push(e);
        }), n);
    };
    E.flatten = function(e, t) {
        return A(e, t, []);
    }, E.without = function(e) {
        return E.difference(e, s.call(arguments, 1));
    }, E.uniq = E.unique = function(e, t, n, r) {
        E.isFunction(t) && (r = n, n = t, t = !1);
        var i = n ? E.map(e, n, r) : e, o = [], a = [];
        return C(i, function(n, r) {
            (t ? r && a[a.length - 1] === n : E.contains(a, n)) || (a.push(n), o.push(e[r]));
        }), o;
    }, E.union = function() {
        return E.uniq(E.flatten(arguments, !0));
    }, E.intersection = function(e) {
        var t = s.call(arguments, 1);
        return E.filter(E.uniq(e), function(e) {
            return E.every(t, function(t) {
                return E.indexOf(t, e) >= 0;
            });
        });
    }, E.difference = function(e) {
        var t = u.apply(r, s.call(arguments, 1));
        return E.filter(e, function(e) {
            return !E.contains(t, e);
        });
    }, E.zip = function() {
        for (var e = E.max(E.pluck(arguments, "length").concat(0)), t = Array(e), n = 0; e > n; n++) t[n] = E.pluck(arguments, "" + n);
        return t;
    }, E.object = function(e, t) {
        if (null == e) return {};
        for (var n = {}, r = 0, i = e.length; i > r; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n;
    }, E.indexOf = function(e, t, n) {
        if (null == e) return -1;
        var r = 0, i = e.length;
        if (n) {
            if ("number" != typeof n) return r = E.sortedIndex(e, t), e[r] === t ? r : -1;
            r = 0 > n ? Math.max(0, i + n) : n;
        }
        if (v && e.indexOf === v) return e.indexOf(t, n);
        for (;i > r; r++) if (e[r] === t) return r;
        return -1;
    }, E.lastIndexOf = function(e, t, n) {
        if (null == e) return -1;
        var r = null != n;
        if (b && e.lastIndexOf === b) return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
        for (var i = r ? n : e.length; i--; ) if (e[i] === t) return i;
        return -1;
    }, E.range = function(e, t, n) {
        1 >= arguments.length && (t = e || 0, e = 0), n = arguments[2] || 1;
        for (var r = Math.max(Math.ceil((t - e) / n), 0), i = 0, o = Array(r); r > i; ) o[i++] = e, e += n;
        return o;
    };
    var D = function() {};
    E.bind = function(e, t) {
        var n, r;
        if (T && e.bind === T) return T.apply(e, s.call(arguments, 1));
        if (!E.isFunction(e)) throw new TypeError();
        return n = s.call(arguments, 2), r = function() {
            if (!(this instanceof r)) return e.apply(t, n.concat(s.call(arguments)));
            D.prototype = e.prototype;
            var i = new D();
            D.prototype = null;
            var o = e.apply(i, n.concat(s.call(arguments)));
            return Object(o) === o ? o : i;
        };
    }, E.partial = function(e) {
        var t = s.call(arguments, 1);
        return function() {
            return e.apply(this, t.concat(s.call(arguments)));
        };
    }, E.bindAll = function(e) {
        var t = s.call(arguments, 1);
        if (0 === t.length) throw Error("bindAll must be passed function names");
        return C(t, function(t) {
            e[t] = E.bind(e[t], e);
        }), e;
    }, E.memoize = function(e, t) {
        var n = {};
        return t || (t = E.identity), function() {
            var r = t.apply(this, arguments);
            return E.has(n, r) ? n[r] : n[r] = e.apply(this, arguments);
        };
    }, E.delay = function(e, t) {
        var n = s.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(null, n);
        }, t);
    }, E.defer = function(e) {
        return E.delay.apply(E, [ e, 1 ].concat(s.call(arguments, 1)));
    }, E.throttle = function(e, t, n) {
        var r, i, o, a = null, s = 0;
        n || (n = {});
        var u = function() {
            s = n.leading === !1 ? 0 : new Date(), a = null, o = e.apply(r, i);
        };
        return function() {
            var c = new Date();
            s || n.leading !== !1 || (s = c);
            var l = t - (c - s);
            return r = this, i = arguments, 0 >= l ? (clearTimeout(a), a = null, s = c, o = e.apply(r, i)) : a || n.trailing === !1 || (a = setTimeout(u, l)), 
            o;
        };
    }, E.debounce = function(e, t, n) {
        var r, i = null;
        return function() {
            var o = this, a = arguments, s = function() {
                i = null, n || (r = e.apply(o, a));
            }, u = n && !i;
            return clearTimeout(i), i = setTimeout(s, t), u && (r = e.apply(o, a)), r;
        };
    }, E.once = function(e) {
        var t, n = !1;
        return function() {
            return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t);
        };
    }, E.wrap = function(e, t) {
        return function() {
            var n = [ e ];
            return a.apply(n, arguments), t.apply(this, n);
        };
    }, E.compose = function() {
        var e = arguments;
        return function() {
            for (var t = arguments, n = e.length - 1; n >= 0; n--) t = [ e[n].apply(this, t) ];
            return t[0];
        };
    }, E.after = function(e, t) {
        return function() {
            return 1 > --e ? t.apply(this, arguments) : void 0;
        };
    }, E.keys = w || function(e) {
        if (e !== Object(e)) throw new TypeError("Invalid object");
        var t = [];
        for (var n in e) E.has(e, n) && t.push(n);
        return t;
    }, E.values = function(e) {
        var t = [];
        for (var n in e) E.has(e, n) && t.push(e[n]);
        return t;
    }, E.pairs = function(e) {
        var t = [];
        for (var n in e) E.has(e, n) && t.push([ n, e[n] ]);
        return t;
    }, E.invert = function(e) {
        var t = {};
        for (var n in e) E.has(e, n) && (t[e[n]] = n);
        return t;
    }, E.functions = E.methods = function(e) {
        var t = [];
        for (var n in e) E.isFunction(e[n]) && t.push(n);
        return t.sort();
    }, E.extend = function(e) {
        return C(s.call(arguments, 1), function(t) {
            if (t) for (var n in t) e[n] = t[n];
        }), e;
    }, E.pick = function(e) {
        var t = {}, n = u.apply(r, s.call(arguments, 1));
        return C(n, function(n) {
            n in e && (t[n] = e[n]);
        }), t;
    }, E.omit = function(e) {
        var t = {}, n = u.apply(r, s.call(arguments, 1));
        for (var i in e) E.contains(n, i) || (t[i] = e[i]);
        return t;
    }, E.defaults = function(e) {
        return C(s.call(arguments, 1), function(t) {
            if (t) for (var n in t) void 0 === e[n] && (e[n] = t[n]);
        }), e;
    }, E.clone = function(e) {
        return E.isObject(e) ? E.isArray(e) ? e.slice() : E.extend({}, e) : e;
    }, E.tap = function(e, t) {
        return t(e), e;
    };
    var M = function(e, t, n, r) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return e === t;
        e instanceof E && (e = e._wrapped), t instanceof E && (t = t._wrapped);
        var i = c.call(e);
        if (i != c.call(t)) return !1;
        switch (i) {
          case "[object String]":
            return e == t + "";

          case "[object Number]":
            return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;

          case "[object Date]":
          case "[object Boolean]":
            return +e == +t;

          case "[object RegExp]":
            return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase;
        }
        if ("object" != typeof e || "object" != typeof t) return !1;
        for (var o = n.length; o--; ) if (n[o] == e) return r[o] == t;
        var a = e.constructor, s = t.constructor;
        if (a !== s && !(E.isFunction(a) && a instanceof a && E.isFunction(s) && s instanceof s)) return !1;
        n.push(e), r.push(t);
        var u = 0, l = !0;
        if ("[object Array]" == i) {
            if (u = e.length, l = u == t.length) for (;u-- && (l = M(e[u], t[u], n, r)); ) ;
        } else {
            for (var f in e) if (E.has(e, f) && (u++, !(l = E.has(t, f) && M(e[f], t[f], n, r)))) break;
            if (l) {
                for (f in t) if (E.has(t, f) && !u--) break;
                l = !u;
            }
        }
        return n.pop(), r.pop(), l;
    };
    E.isEqual = function(e, t) {
        return M(e, t, [], []);
    }, E.isEmpty = function(e) {
        if (null == e) return !0;
        if (E.isArray(e) || E.isString(e)) return 0 === e.length;
        for (var t in e) if (E.has(e, t)) return !1;
        return !0;
    }, E.isElement = function(e) {
        return !(!e || 1 !== e.nodeType);
    }, E.isArray = x || function(e) {
        return "[object Array]" == c.call(e);
    }, E.isObject = function(e) {
        return e === Object(e);
    }, C([ "Arguments", "Function", "String", "Number", "Date", "RegExp" ], function(e) {
        E["is" + e] = function(t) {
            return c.call(t) == "[object " + e + "]";
        };
    }), E.isArguments(arguments) || (E.isArguments = function(e) {
        return !(!e || !E.has(e, "callee"));
    }), E.isFunction = function(e) {
        return "function" == typeof e;
    }, E.isFinite = function(e) {
        return isFinite(e) && !isNaN(parseFloat(e));
    }, E.isNaN = function(e) {
        return E.isNumber(e) && e != +e;
    }, E.isBoolean = function(e) {
        return e === !0 || e === !1 || "[object Boolean]" == c.call(e);
    }, E.isNull = function(e) {
        return null === e;
    }, E.isUndefined = function(e) {
        return void 0 === e;
    }, E.has = function(e, t) {
        return l.call(e, t);
    }, E.noConflict = function() {
        return e._ = t, this;
    }, E.identity = function(e) {
        return e;
    }, E.times = function(e, t, n) {
        for (var r = Array(Math.max(0, e)), i = 0; e > i; i++) r[i] = t.call(n, i);
        return r;
    }, E.random = function(e, t) {
        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1));
    };
    var O = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    O.unescape = E.invert(O.escape);
    var L = {
        escape: RegExp("[" + E.keys(O.escape).join("") + "]", "g"),
        unescape: RegExp("(" + E.keys(O.unescape).join("|") + ")", "g")
    };
    E.each([ "escape", "unescape" ], function(e) {
        E[e] = function(t) {
            return null == t ? "" : ("" + t).replace(L[e], function(t) {
                return O[e][t];
            });
        };
    }), E.result = function(e, t) {
        if (null == e) return void 0;
        var n = e[t];
        return E.isFunction(n) ? n.call(e) : n;
    }, E.mixin = function(e) {
        C(E.functions(e), function(t) {
            var n = E[t] = e[t];
            E.prototype[t] = function() {
                var e = [ this._wrapped ];
                return a.apply(e, arguments), H.call(this, n.apply(E, e));
            };
        });
    };
    var P = 0;
    E.uniqueId = function(e) {
        var t = ++P + "";
        return e ? e + t : t;
    }, E.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var q = /(.)^/, F = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "   ": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, $ = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    E.template = function(e, t, n) {
        var r;
        n = E.defaults({}, n, E.templateSettings);
        var i = RegExp([ (n.escape || q).source, (n.interpolate || q).source, (n.evaluate || q).source ].join("|") + "|$", "g"), o = 0, a = "__p+='";
        e.replace(i, function(t, n, r, i, s) {
            return a += e.slice(o, s).replace($, function(e) {
                return "\\" + F[e];
            }), n && (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), 
            i && (a += "';\n" + i + "\n__p+='"), o = s + t.length, t;
        }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
        try {
            r = Function(n.variable || "obj", "_", a);
        } catch (s) {
            throw s.source = a, s;
        }
        if (t) return r(t, E);
        var u = function(e) {
            return r.call(this, e, E);
        };
        return u.source = "function(" + (n.variable || "obj") + "){\n" + a + "}", u;
    }, E.chain = function(e) {
        return E(e).chain();
    };
    var H = function(e) {
        return this._chain ? E(e).chain() : e;
    };
    E.mixin(E), C([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(e) {
        var t = r[e];
        E.prototype[e] = function() {
            var n = this._wrapped;
            return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], H.call(this, n);
        };
    }), C([ "concat", "join", "slice" ], function(e) {
        var t = r[e];
        E.prototype[e] = function() {
            return H.call(this, t.apply(this._wrapped, arguments));
        };
    }), E.extend(E.prototype, {
        chain: function() {
            return this._chain = !0, this;
        },
        value: function() {
            return this._wrapped;
        }
    });
}.call(this), /*!
 * Modernizr v2.6.2
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
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

var Froogaloop = function() {
    function e(t) {
        return new e.fn.init(t);
    }
    function t(e, t, n) {
        if (!n.contentWindow.postMessage) return !1;
        var r = n.getAttribute("src").split("?")[0], i = JSON.stringify({
            method: e,
            value: t
        });
        "//" === r.substr(0, 2) && (r = window.location.protocol + r), n.contentWindow.postMessage(i, r);
    }
    function n(e) {
        var t, n;
        try {
            t = JSON.parse(e.data), n = t.event || t.method;
        } catch (r) {}
        if ("ready" != n || c || (c = !0), e.origin != l) return !1;
        var o = t.value, a = t.data, s = "" === s ? null : t.player_id, u = i(n, s), f = [];
        return u ? (void 0 !== o && f.push(o), a && f.push(a), s && f.push(s), f.length > 0 ? u.apply(null, f) : u.call()) : !1;
    }
    function r(e, t, n) {
        n ? (u[n] || (u[n] = {}), u[n][e] = t) : u[e] = t;
    }
    function i(e, t) {
        return t ? u[t][e] : u[e];
    }
    function o(e, t) {
        if (t && u[t]) {
            if (!u[t][e]) return !1;
            u[t][e] = null;
        } else {
            if (!u[e]) return !1;
            u[e] = null;
        }
        return !0;
    }
    function a(e) {
        "//" === e.substr(0, 2) && (e = window.location.protocol + e);
        for (var t = e.split("/"), n = "", r = 0, i = t.length; i > r && 3 > r; r++) n += t[r], 2 > r && (n += "/");
        return n;
    }
    function s(e) {
        return !!(e && e.constructor && e.call && e.apply);
    }
    var u = {}, c = !1, l = (Array.prototype.slice, "");
    return e.fn = e.prototype = {
        element: null,
        init: function(e) {
            return "string" == typeof e && (e = document.getElementById(e)), this.element = e, this.element ? (l = a(this.element.getAttribute("src")), 
            this) : null;
        },
        api: function(e, n) {
            if (!this.element || !e) return !1;
            var i = this, o = i.element, a = "" !== o.id ? o.id : null, u = s(n) ? null : n, c = s(n) ? n : null;
            return c && r(e, c, a), t(e, u, o), i;
        },
        addEvent: function(e, n) {
            if (!this.element) return !1;
            var i = this, o = i.element, a = "" !== o.id ? o.id : null;
            return r(e, n, a), "ready" != e ? t("addEventListener", e, o) : "ready" == e && c && n.call(null, a), 
            i;
        },
        removeEvent: function(e) {
            if (!this.element) return !1;
            var n = this, r = n.element, i = "" !== r.id ? r.id : null, a = o(e, i);
            "ready" != e && a && t("removeEventListener", e, r);
        }
    }, e.fn.init.prototype = e.fn, window.addEventListener ? window.addEventListener("message", n, !1) : window.attachEvent("onmessage", n), 
    window.Froogaloop = window.$f = e;
}(), VimeoPlayer = function(e, t) {
    _.bindAll(this), this.callbacks = t || {}, this.isReady = !1, this.notPlayedYet = !0, this.player = $f(e), 
    this.player.addEvent("ready", _.bind(function(e) {
        this.isReady = !0, this.fire("ready", e), this.player.api("setVolume", 0), this.player.addEvent("play", _.bind(function(e) {
            this.notPlayedYet = !1, this.fire("play", e);
        }, this)), this.player.addEvent("pause", _.bind(function(e) {
            this.fire("pause", e);
        }, this)), this.player.addEvent("finish", _.bind(function(e) {
            this.fire("finish", e);
        }, this)), this.player.addEvent("seek", _.bind(function(e) {
            this.fire("seek", e);
        }, this)), this.player.addEvent("playProgress", _.bind(function(e) {
            this.fire("playProgress", e);
        }, this));
    }, this));
};

VimeoPlayer.prototype = {
    fire: function(e, t) {
        this.callbacks && "function" == typeof this.callbacks[e] && this.callbacks[e](this.player, t);
    },
    play: function() {
        this.player.api("play");
    }
};
/*!
  LESS - Leaner CSS v1.3.3
  http://lesscss.org
 
  Copyright (c) 2009-2013, Alexis Sellier
  Licensed under the Apache 2.0 License.
*/