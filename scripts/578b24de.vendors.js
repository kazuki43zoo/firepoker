function AngularFire(a, b, c, d) {
    if (this._q = a, this._parse = b, this._timeout = c, this._initial = !0, this._remoteValue = !1, "string" == typeof d) throw new Error("Please provide a Firebase reference instead of a URL, eg: new Firebase(url)");
    this._fRef = d
}

if (function (a, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    "use strict";

    function c(a, b, c) {
        b = b || ga;
        var d, e = b.createElement("script");
        if (e.text = a, c) for (d in ua) c[d] && (e[d] = c[d]);
        b.head.appendChild(e).parentNode.removeChild(e)
    }

    function d(a) {
        return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? ma[na.call(a)] || "object" : typeof a
    }

    function e(a) {
        var b = !!a && "length" in a && a.length, c = d(a);
        return sa(a) || ta(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    function f(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    }

    function g(a, b, c) {
        return sa(b) ? wa.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        }) : b.nodeType ? wa.grep(a, function (a) {
            return a === b !== c
        }) : "string" != typeof b ? wa.grep(a, function (a) {
            return la.call(b, a) > -1 !== c
        }) : wa.filter(b, a, c)
    }

    function h(a, b) {
        for (; (a = a[b]) && 1 !== a.nodeType;) ;
        return a
    }

    function i(a) {
        var b = {};
        return wa.each(a.match(Ia) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    function j(a) {
        return a
    }

    function k(a) {
        throw a
    }

    function l(a, b, c, d) {
        var e;
        try {
            a && sa(e = a.promise) ? e.call(a).done(b).fail(c) : a && sa(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d))
        } catch (a) {
            c.apply(void 0, [a])
        }
    }

    function m() {
        ga.removeEventListener("DOMContentLoaded", m), a.removeEventListener("load", m), wa.ready()
    }

    function n(a, b) {
        return b.toUpperCase()
    }

    function o(a) {
        return a.replace(Ma, "ms-").replace(Na, n)
    }

    function p() {
        this.expando = wa.expando + p.uid++
    }

    function q(a) {
        return "true" === a ? !0 : "false" === a ? !1 : "null" === a ? null : a === +a + "" ? +a : Ra.test(a) ? JSON.parse(a) : a
    }

    function r(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Sa, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = q(c)
            } catch (e) {
            }
            Qa.set(a, b, c)
        } else c = void 0;
        return c
    }

    function s(a, b, c, d) {
        var e, f, g = 20, h = d ? function () {
                return d.cur()
            } : function () {
                return wa.css(a, b, "")
            }, i = h(), j = c && c[3] || (wa.cssNumber[b] ? "" : "px"),
            k = (wa.cssNumber[b] || "px" !== j && +i) && Ua.exec(wa.css(a, b));
        if (k && k[3] !== j) {
            for (i /= 2, j = j || k[3], k = +i || 1; g--;) wa.style(a, b, k + j), (1 - f) * (1 - (f = h() / i || .5)) <= 0 && (g = 0), k /= f;
            k = 2 * k, wa.style(a, b, k + j), c = c || []
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }

    function t(a) {
        var b, c = a.ownerDocument, d = a.nodeName, e = Ya[d];
        return e ? e : (b = c.body.appendChild(c.createElement(d)), e = wa.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), Ya[d] = e, e)
    }

    function u(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; g > f; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = Pa.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && Wa(d) && (e[f] = t(d))) : "none" !== c && (e[f] = "none", Pa.set(d, "display", c)));
        for (f = 0; g > f; f++) null != e[f] && (a[f].style.display = e[f]);
        return a
    }

    function v(a, b) {
        var c;
        return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && f(a, b) ? wa.merge([a], c) : c
    }

    function w(a, b) {
        for (var c = 0, d = a.length; d > c; c++) Pa.set(a[c], "globalEval", !b || Pa.get(b[c], "globalEval"))
    }

    function x(a, b, c, e, f) {
        for (var g, h, i, j, k, l, m = b.createDocumentFragment(), n = [], o = 0, p = a.length; p > o; o++) if (g = a[o], g || 0 === g) if ("object" === d(g)) wa.merge(n, g.nodeType ? [g] : g); else if (bb.test(g)) {
            for (h = h || m.appendChild(b.createElement("div")), i = ($a.exec(g) || ["", ""])[1].toLowerCase(), j = ab[i] || ab._default, h.innerHTML = j[1] + wa.htmlPrefilter(g) + j[2], l = j[0]; l--;) h = h.lastChild;
            wa.merge(n, h.childNodes), h = m.firstChild, h.textContent = ""
        } else n.push(b.createTextNode(g));
        for (m.textContent = "", o = 0; g = n[o++];) if (e && wa.inArray(g, e) > -1) f && f.push(g); else if (k = wa.contains(g.ownerDocument, g), h = v(m.appendChild(g), "script"), k && w(h), c) for (l = 0; g = h[l++];) _a.test(g.type || "") && c.push(g);
        return m
    }

    function y() {
        return !0
    }

    function z() {
        return !1
    }

    function A() {
        try {
            return ga.activeElement
        } catch (a) {
        }
    }

    function B(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) B(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = z; else if (!e) return a;
        return 1 === f && (g = e, e = function (a) {
            return wa().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = wa.guid++)), a.each(function () {
            wa.event.add(this, b, e, d, c)
        })
    }

    function C(a, b) {
        return f(a, "table") && f(11 !== b.nodeType ? b : b.firstChild, "tr") ? wa(a).children("tbody")[0] || a : a
    }

    function D(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function E(a) {
        return "true/" === (a.type || "").slice(0, 5) ? a.type = a.type.slice(5) : a.removeAttribute("type"), a
    }

    function F(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (Pa.hasData(a) && (f = Pa.access(a), g = Pa.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) for (c = 0, d = j[e].length; d > c; c++) wa.event.add(b, e, j[e][c])
            }
            Qa.hasData(a) && (h = Qa.access(a), i = wa.extend({}, h), Qa.set(b, i))
        }
    }

    function G(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && Za.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    function H(a, b, d, e) {
        b = ja.apply([], b);
        var f, g, h, i, j, k, l = 0, m = a.length, n = m - 1, o = b[0], p = sa(o);
        if (p || m > 1 && "string" == typeof o && !ra.checkClone && ib.test(o)) return a.each(function (c) {
            var f = a.eq(c);
            p && (b[0] = o.call(this, c, f.html())), H(f, b, d, e)
        });
        if (m && (f = x(b, a[0].ownerDocument, !1, a, e), g = f.firstChild, 1 === f.childNodes.length && (f = g), g || e)) {
            for (h = wa.map(v(f, "script"), D), i = h.length; m > l; l++) j = f, l !== n && (j = wa.clone(j, !0, !0), i && wa.merge(h, v(j, "script"))), d.call(a[l], j, l);
            if (i) for (k = h[h.length - 1].ownerDocument, wa.map(h, E), l = 0; i > l; l++) j = h[l], _a.test(j.type || "") && !Pa.access(j, "globalEval") && wa.contains(k, j) && (j.src && "module" !== (j.type || "").toLowerCase() ? wa._evalUrl && wa._evalUrl(j.src) : c(j.textContent.replace(jb, ""), k, j))
        }
        return a
    }

    function I(a, b, c) {
        for (var d, e = b ? wa.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || wa.cleanData(v(d)), d.parentNode && (c && wa.contains(d.ownerDocument, d) && w(v(d, "script")), d.parentNode.removeChild(d));
        return a
    }

    function J(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || lb(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || wa.contains(a.ownerDocument, a) || (g = wa.style(a, b)), !ra.pixelBoxStyles() && kb.test(g) && mb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function K(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function L(a) {
        if (a in sb) return a;
        for (var b = a[0].toUpperCase() + a.slice(1), c = rb.length; c--;) if (a = rb[c] + b, a in sb) return a
    }

    function M(a) {
        var b = wa.cssProps[a];
        return b || (b = wa.cssProps[a] = L(a) || a), b
    }

    function N(a, b, c) {
        var d = Ua.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function O(a, b, c, d, e, f) {
        var g = "width" === b ? 1 : 0, h = 0, i = 0;
        if (c === (d ? "border" : "content")) return 0;
        for (; 4 > g; g += 2) "margin" === c && (i += wa.css(a, c + Va[g], !0, e)), d ? ("content" === c && (i -= wa.css(a, "padding" + Va[g], !0, e)), "margin" !== c && (i -= wa.css(a, "border" + Va[g] + "Width", !0, e))) : (i += wa.css(a, "padding" + Va[g], !0, e), "padding" !== c ? i += wa.css(a, "border" + Va[g] + "Width", !0, e) : h += wa.css(a, "border" + Va[g] + "Width", !0, e));
        return !d && f >= 0 && (i += Math.max(0, Math.ceil(a["offset" + b[0].toUpperCase() + b.slice(1)] - f - i - h - .5))), i
    }

    function P(a, b, c) {
        var d = lb(a), e = J(a, b, d), f = "border-box" === wa.css(a, "boxSizing", !1, d), g = f;
        if (kb.test(e)) {
            if (!c) return e;
            e = "auto"
        }
        return g = g && (ra.boxSizingReliable() || e === a.style[b]), ("auto" === e || !parseFloat(e) && "inline" === wa.css(a, "display", !1, d)) && (e = a["offset" + b[0].toUpperCase() + b.slice(1)], g = !0), e = parseFloat(e) || 0, e + O(a, b, c || (f ? "border" : "content"), g, d, e) + "px"
    }

    function Q(a, b, c, d, e) {
        return new Q.prototype.init(a, b, c, d, e)
    }

    function R() {
        ub && (ga.hidden === !1 && a.requestAnimationFrame ? a.requestAnimationFrame(R) : a.setTimeout(R, wa.fx.interval), wa.fx.tick())
    }

    function S() {
        return a.setTimeout(function () {
            tb = void 0
        }), tb = Date.now()
    }

    function T(a, b) {
        var c, d = 0, e = {height: a};
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = Va[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function U(a, b, c) {
        for (var d, e = (X.tweeners[b] || []).concat(X.tweeners["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d
    }

    function V(a, b, c) {
        var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b, m = this, n = {}, o = a.style,
            p = a.nodeType && Wa(a), q = Pa.get(a, "fxshow");
        c.queue || (g = wa._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
            g.unqueued || h()
        }), g.unqueued++, m.always(function () {
            m.always(function () {
                g.unqueued--, wa.queue(a, "fx").length || g.empty.fire()
            })
        }));
        for (d in b) if (e = b[d], vb.test(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                if ("show" !== e || !q || void 0 === q[d]) continue;
                p = !0
            }
            n[d] = q && q[d] || wa.style(a, d)
        }
        if (i = !wa.isEmptyObject(b), i || !wa.isEmptyObject(n)) {
            l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = Pa.get(a, "display")), k = wa.css(a, "display"), "none" === k && (j ? k = j : (u([a], !0), j = a.style.display || j, k = wa.css(a, "display"), u([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === wa.css(a, "float") && (i || (m.done(function () {
                o.display = j
            }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
                o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
            })), i = !1;
            for (d in n) i || (q ? "hidden" in q && (p = q.hidden) : q = Pa.access(a, "fxshow", {display: j}), f && (q.hidden = !p), p && u([a], !0), m.done(function () {
                p || u([a]), Pa.remove(a, "fxshow");
                for (d in n) wa.style(a, d, n[d])
            })), i = U(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0))
        }
    }

    function W(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = o(c), e = b[d], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = wa.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function X(a, b, c) {
        var d, e, f = 0, g = X.prefilters.length, h = wa.Deferred().always(function () {
            delete i.elem
        }), i = function () {
            if (e) return !1;
            for (var b = tb || S(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1)
        }, j = h.promise({
            elem: a,
            props: wa.extend({}, b),
            opts: wa.extend(!0, {specialEasing: {}, easing: wa.easing._default}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: tb || S(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var d = wa.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },
            stop: function (b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
            }
        }), k = j.props;
        for (W(k, j.opts.specialEasing); g > f; f++) if (d = X.prefilters[f].call(j, a, k, j.opts)) return sa(d.stop) && (wa._queueHooks(j.elem, j.opts.queue).stop = d.stop.bind(d)), d;
        return wa.map(k, U, j), sa(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), wa.fx.timer(wa.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j
    }

    function Y(a) {
        var b = a.match(Ia) || [];
        return b.join(" ")
    }

    function Z(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }

    function $(a) {
        return Array.isArray(a) ? a : "string" == typeof a ? a.match(Ia) || [] : []
    }

    function _(a, b, c, e) {
        var f;
        if (Array.isArray(b)) wa.each(b, function (b, d) {
            c || Hb.test(a) ? e(a, d) : _(a + "[" + ("object" == typeof d && null != d ? b : "") + "]", d, c, e)
        }); else if (c || "object" !== d(b)) e(a, b); else for (f in b) _(a + "[" + f + "]", b[f], c, e)
    }

    function aa(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(Ia) || [];
            if (sa(c)) for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function ba(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, wa.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }

        var f = {}, g = a === Tb;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function ca(a, b) {
        var c, d, e = wa.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && wa.extend(!0, a, d), a
    }

    function da(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d) for (e in h) if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break
        }
        if (i[0] in c) f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function ea(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b)
            } catch (l) {
                return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
            }
        }
        return {state: "success", data: b}
    }

    var fa = [], ga = a.document, ha = Object.getPrototypeOf, ia = fa.slice, ja = fa.concat, ka = fa.push,
        la = fa.indexOf, ma = {}, na = ma.toString, oa = ma.hasOwnProperty, pa = oa.toString, qa = pa.call(Object),
        ra = {}, sa = function (a) {
            return "function" == typeof a && "number" != typeof a.nodeType
        }, ta = function (a) {
            return null != a && a === a.window
        }, ua = {type: !0, src: !0, noModule: !0}, va = "3.3.1", wa = function (a, b) {
            return new wa.fn.init(a, b)
        }, xa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    wa.fn = wa.prototype = {
        jquery: va, constructor: wa, length: 0, toArray: function () {
            return ia.call(this)
        }, get: function (a) {
            return null == a ? ia.call(this) : 0 > a ? this[a + this.length] : this[a]
        }, pushStack: function (a) {
            var b = wa.merge(this.constructor(), a);
            return b.prevObject = this, b
        }, each: function (a) {
            return wa.each(this, a)
        }, map: function (a) {
            return this.pushStack(wa.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, slice: function () {
            return this.pushStack(ia.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: ka, sort: fa.sort, splice: fa.splice
    }, wa.extend = wa.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || sa(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], d = a[b], g !== d && (j && d && (wa.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && wa.isPlainObject(c) ? c : {}, g[b] = wa.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, wa.extend({
        expando: "jQuery" + (va + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
            throw new Error(a)
        }, noop: function () {
        }, isPlainObject: function (a) {
            var b, c;
            return a && "[object Object]" === na.call(a) ? (b = ha(a)) ? (c = oa.call(b, "constructor") && b.constructor, "function" == typeof c && pa.call(c) === qa) : !0 : !1
        }, isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        }, globalEval: function (a) {
            c(a)
        }, each: function (a, b) {
            var c, d = 0;
            if (e(a)) for (c = a.length; c > d && b.call(a[d], d, a[d]) !== !1; d++) ; else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
            return a
        }, trim: function (a) {
            return null == a ? "" : (a + "").replace(xa, "")
        }, makeArray: function (a, b) {
            var c = b || [];
            return null != a && (e(Object(a)) ? wa.merge(c, "string" == typeof a ? [a] : a) : ka.call(c, a)), c
        }, inArray: function (a, b, c) {
            return null == b ? -1 : la.call(b, a, c)
        }, merge: function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        }, grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        }, map: function (a, b, c) {
            var d, f, g = 0, h = [];
            if (e(a)) for (d = a.length; d > g; g++) f = b(a[g], g, c), null != f && h.push(f); else for (g in a) f = b(a[g], g, c), null != f && h.push(f);
            return ja.apply([], h)
        }, guid: 1, support: ra
    }), "function" == typeof Symbol && (wa.fn[Symbol.iterator] = fa[Symbol.iterator]), wa.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
        ma["[object " + b + "]"] = b.toLowerCase()
    });
    var ya = function (a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, k, m = b && b.ownerDocument, o = b ? b.nodeType : 9;
            if (c = c || [], "string" != typeof a || !a || 1 !== o && 9 !== o && 11 !== o) return c;
            if (!d && ((b ? b.ownerDocument || b : P) !== H && G(b), b = b || H, J)) {
                if (11 !== o && (i = ra.exec(a))) if (e = i[1]) {
                    if (9 === o) {
                        if (!(g = b.getElementById(e))) return c;
                        if (g.id === e) return c.push(g), c
                    } else if (m && (g = m.getElementById(e)) && N(b, g) && g.id === e) return c.push(g), c
                } else {
                    if (i[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                    if ((e = i[3]) && w.getElementsByClassName && b.getElementsByClassName) return $.apply(c, b.getElementsByClassName(e)), c
                }
                if (w.qsa && !U[a + " "] && (!K || !K.test(a))) {
                    if (1 !== o) m = b, k = a; else if ("object" !== b.nodeName.toLowerCase()) {
                        for ((h = b.getAttribute("id")) ? h = h.replace(va, wa) : b.setAttribute("id", h = O), j = A(a), f = j.length; f--;) j[f] = "#" + h + " " + n(j[f]);
                        k = j.join(","), m = sa.test(a) && l(b.parentNode) || b
                    }
                    if (k) try {
                        return $.apply(c, m.querySelectorAll(k)), c
                    } catch (p) {
                    } finally {
                        h === O && b.removeAttribute("id")
                    }
                }
            }
            return C(a.replace(ha, "$1"), b, c, d)
        }

        function c() {
            function a(c, d) {
                return b.push(c + " ") > x.cacheLength && delete a[b.shift()], a[c + " "] = d
            }

            var b = [];
            return a
        }

        function d(a) {
            return a[O] = !0, a
        }

        function e(a) {
            var b = H.createElement("fieldset");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function f(a, b) {
            for (var c = a.split("|"), d = c.length; d--;) x.attrHandle[c[d]] = b
        }

        function g(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (d) return d;
            if (c) for (; c = c.nextSibling;) if (c === b) return -1;
            return a ? 1 : -1
        }

        function h(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function i(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function j(a) {
            return function (b) {
                return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ya(b) === a : b.disabled === a : "label" in b ? b.disabled === a : !1
            }
        }

        function k(a) {
            return d(function (b) {
                return b = +b, d(function (c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function l(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        function m() {
        }

        function n(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function o(a, b, c) {
            var d = b.dir, e = b.next, f = e || d, g = c && "parentNode" === f, h = R++;
            return b.first ? function (b, c, e) {
                for (; b = b[d];) if (1 === b.nodeType || g) return a(b, c, e);
                return !1
            } : function (b, c, i) {
                var j, k, l, m = [Q, h];
                if (i) {
                    for (; b = b[d];) if ((1 === b.nodeType || g) && a(b, c, i)) return !0
                } else for (; b = b[d];) if (1 === b.nodeType || g) if (l = b[O] || (b[O] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b; else {
                    if ((j = k[f]) && j[0] === Q && j[1] === h) return m[2] = j[2];
                    if (k[f] = m, m[2] = a(b, c, i)) return !0
                }
                return !1
            }
        }

        function p(a) {
            return a.length > 1 ? function (b, c, d) {
                for (var e = a.length; e--;) if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function q(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
            return d
        }

        function r(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function s(a, b, c, e, f, g) {
            return e && !e[O] && (e = s(e)), f && !f[O] && (f = s(f, g)), d(function (d, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = d || q(b || "*", h.nodeType ? [h] : h, []),
                    s = !a || !d && b ? p : r(p, m, a, h, i), t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e) for (j = r(t, n), e(j, [], h, i), k = j.length; k--;) (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--;) (l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--;) (l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else t = r(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
            })
        }

        function t(a) {
            for (var b, c, d, e = a.length, f = x.relative[a[0].type], g = f || x.relative[" "], h = f ? 1 : 0, i = o(function (a) {
                return a === b
            }, g, !0), j = o(function (a) {
                return aa(b, a) > -1
            }, g, !0), k = [function (a, c, d) {
                var e = !f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                return b = null, e
            }]; e > h; h++) if (c = x.relative[a[h].type]) k = [o(p(k), c)]; else {
                if (c = x.filter[a[h].type].apply(null, a[h].matches), c[O]) {
                    for (d = ++h; e > d && !x.relative[a[d].type]; d++) ;
                    return s(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({value: " " === a[h - 2].type ? "*" : ""})).replace(ha, "$1"), c, d > h && t(a.slice(h, d)), e > d && t(a = a.slice(d)), e > d && n(a))
                }
                k.push(c)
            }
            return p(k)
        }

        function u(a, c) {
            var e = c.length > 0, f = a.length > 0, g = function (d, g, h, i, j) {
                var k, l, m, n = 0, o = "0", p = d && [], q = [], s = D, t = d || f && x.find.TAG("*", j),
                    u = Q += null == s ? 1 : Math.random() || .1, v = t.length;
                for (j && (D = g === H || g || j); o !== v && null != (k = t[o]); o++) {
                    if (f && k) {
                        for (l = 0, g || k.ownerDocument === H || (G(k), h = !J); m = a[l++];) if (m(k, g || H, h)) {
                            i.push(k);
                            break
                        }
                        j && (Q = u)
                    }
                    e && ((k = !m && k) && n--, d && p.push(k))
                }
                if (n += o, e && o !== n) {
                    for (l = 0; m = c[l++];) m(p, q, g, h);
                    if (d) {
                        if (n > 0) for (; o--;) p[o] || q[o] || (q[o] = Y.call(i));
                        q = r(q)
                    }
                    $.apply(i, q), j && !d && q.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                }
                return j && (Q = u, D = s), p
            };
            return e ? d(g) : g
        }

        var v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = "sizzle" + 1 * new Date, P = a.document, Q = 0,
            R = 0, S = c(), T = c(), U = c(), V = function (a, b) {
                return a === b && (F = !0), 0
            }, W = {}.hasOwnProperty, X = [], Y = X.pop, Z = X.push, $ = X.push, _ = X.slice, aa = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
                return -1
            },
            ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ca = "[\\x20\\t\\r\\n\\f]", da = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",
            ea = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + da + "))|)" + ca + "*\\]",
            fa = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ea + ")*)|.*)\\)|)",
            ga = new RegExp(ca + "+", "g"), ha = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
            ia = new RegExp("^" + ca + "*," + ca + "*"), ja = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
            ka = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"), la = new RegExp(fa),
            ma = new RegExp("^" + da + "$"), na = {
                ID: new RegExp("^#(" + da + ")"),
                CLASS: new RegExp("^\\.(" + da + ")"),
                TAG: new RegExp("^(" + da + "|[*])"),
                ATTR: new RegExp("^" + ea),
                PSEUDO: new RegExp("^" + fa),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ba + ")$", "i"),
                needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
            }, oa = /^(?:input|select|textarea|button)$/i, pa = /^h\d$/i, qa = /^[^{]+\{\s*\[native \w/,
            ra = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, sa = /[+~]/,
            ta = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"), ua = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            }, va = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, wa = function (a, b) {
                return b ? "\x00" === a ? "�" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
            }, xa = function () {
                G()
            }, ya = o(function (a) {
                return a.disabled === !0 && ("form" in a || "label" in a)
            }, {dir: "parentNode", next: "legend"});
        try {
            $.apply(X = _.call(P.childNodes), P.childNodes), X[P.childNodes.length].nodeType
        } catch (za) {
            $ = {
                apply: X.length ? function (a, b) {
                    Z.apply(a, _.call(b))
                } : function (a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];) ;
                    a.length = c - 1
                }
            }
        }
        w = b.support = {}, z = b.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, G = b.setDocument = function (a) {
            var b, c, d = a ? a.ownerDocument || a : P;
            return d !== H && 9 === d.nodeType && d.documentElement ? (H = d, I = H.documentElement, J = !z(H), P !== H && (c = H.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), w.attributes = e(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), w.getElementsByTagName = e(function (a) {
                return a.appendChild(H.createComment("")), !a.getElementsByTagName("*").length
            }), w.getElementsByClassName = qa.test(H.getElementsByClassName), w.getById = e(function (a) {
                return I.appendChild(a).id = O, !H.getElementsByName || !H.getElementsByName(O).length
            }), w.getById ? (x.filter.ID = function (a) {
                var b = a.replace(ta, ua);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }, x.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && J) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }) : (x.filter.ID = function (a) {
                var b = a.replace(ta, ua);
                return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }, x.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && J) {
                    var c, d, e, f = b.getElementById(a);
                    if (f) {
                        if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
                        for (e = b.getElementsByName(a), d = 0; f = e[d++];) if (c = f.getAttributeNode("id"), c && c.value === a) return [f]
                    }
                    return []
                }
            }), x.find.TAG = w.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : w.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, x.find.CLASS = w.getElementsByClassName && function (a, b) {
                return "undefined" != typeof b.getElementsByClassName && J ? b.getElementsByClassName(a) : void 0
            }, L = [], K = [], (w.qsa = qa.test(H.querySelectorAll)) && (e(function (a) {
                I.appendChild(a).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && K.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || K.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + O + "-]").length || K.push("~="), a.querySelectorAll(":checked").length || K.push(":checked"), a.querySelectorAll("a#" + O + "+*").length || K.push(".#.+[+~]")
            }), e(function (a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = H.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && K.push("name" + ca + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && K.push(":enabled", ":disabled"), I.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && K.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), K.push(",.*:")
            })), (w.matchesSelector = qa.test(M = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && e(function (a) {
                w.disconnectedMatch = M.call(a, "*"), M.call(a, "[s!='']:x"), L.push("!=", fa)
            }), K = K.length && new RegExp(K.join("|")), L = L.length && new RegExp(L.join("|")), b = qa.test(I.compareDocumentPosition), N = b || qa.test(I.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b) for (; b = b.parentNode;) if (b === a) return !0;
                return !1
            }, V = b ? function (a, b) {
                if (a === b) return F = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !w.sortDetached && b.compareDocumentPosition(a) === c ? a === H || a.ownerDocument === P && N(P, a) ? -1 : b === H || b.ownerDocument === P && N(P, b) ? 1 : E ? aa(E, a) - aa(E, b) : 0 : 4 & c ? -1 : 1)
            } : function (a, b) {
                if (a === b) return F = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b];
                if (!e || !f) return a === H ? -1 : b === H ? 1 : e ? -1 : f ? 1 : E ? aa(E, a) - aa(E, b) : 0;
                if (e === f) return g(a, b);
                for (c = a; c = c.parentNode;) h.unshift(c);
                for (c = b; c = c.parentNode;) i.unshift(c);
                for (; h[d] === i[d];) d++;
                return d ? g(h[d], i[d]) : h[d] === P ? -1 : i[d] === P ? 1 : 0
            }, H) : H
        }, b.matches = function (a, c) {
            return b(a, null, null, c)
        }, b.matchesSelector = function (a, c) {
            if ((a.ownerDocument || a) !== H && G(a), c = c.replace(ka, "='$1']"), w.matchesSelector && J && !U[c + " "] && (!L || !L.test(c)) && (!K || !K.test(c))) try {
                var d = M.call(a, c);
                if (d || w.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {
            }
            return b(c, H, null, [a]).length > 0
        }, b.contains = function (a, b) {
            return (a.ownerDocument || a) !== H && G(a), N(a, b)
        }, b.attr = function (a, b) {
            (a.ownerDocument || a) !== H && G(a);
            var c = x.attrHandle[b.toLowerCase()],
                d = c && W.call(x.attrHandle, b.toLowerCase()) ? c(a, b, !J) : void 0;
            return void 0 !== d ? d : w.attributes || !J ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }, b.escape = function (a) {
            return (a + "").replace(va, wa)
        }, b.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, b.uniqueSort = function (a) {
            var b, c = [], d = 0, e = 0;
            if (F = !w.detectDuplicates, E = !w.sortStable && a.slice(0), a.sort(V), F) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return E = null, a
        }, y = b.getText = function (a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += y(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else for (; b = a[d++];) c += y(b);
            return c
        }, x = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: na,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(ta, ua), a[3] = (a[3] || a[4] || a[5] || "").replace(ta, ua), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                }, PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return na.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && la.test(c) && (b = A(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(ta, ua).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                }, CLASS: function (a) {
                    var b = S[a + " "];
                    return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && S(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                }, ATTR: function (a, c, d) {
                    return function (e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ga, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                    }
                }, CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (m = b; m = m[p];) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (m = q, l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === Q && j[1], t = n && j[2], m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop();) if (1 === m.nodeType && ++t && m === b) {
                                    k[a] = [Q, n, t];
                                    break
                                }
                            } else if (s && (m = b, l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === Q && j[1], t = n), t === !1) for (; (m = ++n && m && m[p] || (t = n = 0) || o.pop()) && ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && (l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [Q, t]), m !== b));) ;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                }, PSEUDO: function (a, c) {
                    var e, f = x.pseudos[a] || x.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[O] ? f(c) : f.length > 1 ? (e = [a, a, "", c], x.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function (a, b) {
                        for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                    }) : function (a) {
                        return f(a, 0, e)
                    }) : f
                }
            },
            pseudos: {
                not: d(function (a) {
                    var b = [], c = [], e = B(a.replace(ha, "$1"));
                    return e[O] ? d(function (a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--;) (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, d, f) {
                        return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                    }
                }), has: d(function (a) {
                    return function (c) {
                        return b(a, c).length > 0
                    }
                }), contains: d(function (a) {
                    return a = a.replace(ta, ua), function (b) {
                        return (b.textContent || b.innerText || y(b)).indexOf(a) > -1
                    }
                }), lang: d(function (a) {
                    return ma.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(ta, ua).toLowerCase(), function (b) {
                        var c;
                        do if (c = J ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(),
                        c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }), target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                }, root: function (a) {
                    return a === I
                }, focus: function (a) {
                    return a === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                }, enabled: j(!1), disabled: j(!0), checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                }, selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                }, empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0
                }, parent: function (a) {
                    return !x.pseudos.empty(a)
                }, header: function (a) {
                    return pa.test(a.nodeName)
                }, input: function (a) {
                    return oa.test(a.nodeName)
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                }, text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                }, first: k(function () {
                    return [0]
                }), last: k(function (a, b) {
                    return [b - 1]
                }), eq: k(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }), even: k(function (a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }), odd: k(function (a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }), lt: k(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }), gt: k(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, x.pseudos.nth = x.pseudos.eq;
        for (v in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) x.pseudos[v] = h(v);
        for (v in {submit: !0, reset: !0}) x.pseudos[v] = i(v);
        return m.prototype = x.filters = x.pseudos, x.setFilters = new m, A = b.tokenize = function (a, c) {
            var d, e, f, g, h, i, j, k = T[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = x.preFilter; h;) {
                (!d || (e = ia.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ja.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ha, " ")
                }), h = h.slice(d.length));
                for (g in x.filter) !(e = na[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break
            }
            return c ? h.length : h ? b.error(a) : T(a, i).slice(0)
        }, B = b.compile = function (a, b) {
            var c, d = [], e = [], f = U[a + " "];
            if (!f) {
                for (b || (b = A(a)), c = b.length; c--;) f = t(b[c]), f[O] ? d.push(f) : e.push(f);
                f = U(a, u(e, d)), f.selector = a
            }
            return f
        }, C = b.select = function (a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a, k = !d && A(a = j.selector || a);
            if (c = c || [], 1 === k.length) {
                if (f = k[0] = k[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && 9 === b.nodeType && J && x.relative[f[1].type]) {
                    if (b = (x.find.ID(g.matches[0].replace(ta, ua), b) || [])[0], !b) return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                }
                for (e = na.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !x.relative[h = g.type]);) if ((i = x.find[h]) && (d = i(g.matches[0].replace(ta, ua), sa.test(f[0].type) && l(b.parentNode) || b))) {
                    if (f.splice(e, 1), a = d.length && n(f), !a) return $.apply(c, d), c;
                    break
                }
            }
            return (j || B(a, k))(d, b, !J, c, !b || sa.test(a) && l(b.parentNode) || b), c
        }, w.sortStable = O.split("").sort(V).join("") === O, w.detectDuplicates = !!F, G(), w.sortDetached = e(function (a) {
            return 1 & a.compareDocumentPosition(H.createElement("fieldset"))
        }), e(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), w.attributes && e(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || f("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), e(function (a) {
            return null == a.getAttribute("disabled")
        }) || f(ba, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), b
    }(a);
    wa.find = ya, wa.expr = ya.selectors, wa.expr[":"] = wa.expr.pseudos, wa.uniqueSort = wa.unique = ya.uniqueSort, wa.text = ya.getText, wa.isXMLDoc = ya.isXML, wa.contains = ya.contains, wa.escapeSelector = ya.escape;
    var za = function (a, b, c) {
        for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType;) if (1 === a.nodeType) {
            if (e && wa(a).is(c)) break;
            d.push(a)
        }
        return d
    }, Aa = function (a, b) {
        for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
        return c
    }, Ba = wa.expr.match.needsContext, Ca = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    wa.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? wa.find.matchesSelector(d, a) ? [d] : [] : wa.find.matches(a, wa.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, wa.fn.extend({
        find: function (a) {
            var b, c, d = this.length, e = this;
            if ("string" != typeof a) return this.pushStack(wa(a).filter(function () {
                for (b = 0; d > b; b++) if (wa.contains(e[b], this)) return !0
            }));
            for (c = this.pushStack([]), b = 0; d > b; b++) wa.find(a, e[b], c);
            return d > 1 ? wa.uniqueSort(c) : c
        }, filter: function (a) {
            return this.pushStack(g(this, a || [], !1))
        }, not: function (a) {
            return this.pushStack(g(this, a || [], !0))
        }, is: function (a) {
            return !!g(this, "string" == typeof a && Ba.test(a) ? wa(a) : a || [], !1).length
        }
    });
    var Da, Ea = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, Fa = wa.fn.init = function (a, b, c) {
        var d, e;
        if (!a) return this;
        if (c = c || Da, "string" == typeof a) {
            if (d = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : Ea.exec(a), !d || !d[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (d[1]) {
                if (b = b instanceof wa ? b[0] : b, wa.merge(this, wa.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : ga, !0)), Ca.test(d[1]) && wa.isPlainObject(b)) for (d in b) sa(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
                return this
            }
            return e = ga.getElementById(d[2]), e && (this[0] = e, this.length = 1), this
        }
        return a.nodeType ? (this[0] = a, this.length = 1, this) : sa(a) ? void 0 !== c.ready ? c.ready(a) : a(wa) : wa.makeArray(a, this)
    };
    Fa.prototype = wa.fn, Da = wa(ga);
    var Ga = /^(?:parents|prev(?:Until|All))/, Ha = {children: !0, contents: !0, next: !0, prev: !0};
    wa.fn.extend({
        has: function (a) {
            var b = wa(a, this), c = b.length;
            return this.filter(function () {
                for (var a = 0; c > a; a++) if (wa.contains(this, b[a])) return !0
            })
        }, closest: function (a, b) {
            var c, d = 0, e = this.length, f = [], g = "string" != typeof a && wa(a);
            if (!Ba.test(a)) for (; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && wa.find.matchesSelector(c, a))) {
                f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? wa.uniqueSort(f) : f)
        }, index: function (a) {
            return a ? "string" == typeof a ? la.call(wa(a), this[0]) : la.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (a, b) {
            return this.pushStack(wa.uniqueSort(wa.merge(this.get(), wa(a, b))))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), wa.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        }, parents: function (a) {
            return za(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return za(a, "parentNode", c)
        }, next: function (a) {
            return h(a, "nextSibling")
        }, prev: function (a) {
            return h(a, "previousSibling")
        }, nextAll: function (a) {
            return za(a, "nextSibling")
        }, prevAll: function (a) {
            return za(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return za(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return za(a, "previousSibling", c)
        }, siblings: function (a) {
            return Aa((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return Aa(a.firstChild)
        }, contents: function (a) {
            return f(a, "iframe") ? a.contentDocument : (f(a, "template") && (a = a.content || a), wa.merge([], a.childNodes))
        }
    }, function (a, b) {
        wa.fn[a] = function (c, d) {
            var e = wa.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = wa.filter(d, e)), this.length > 1 && (Ha[a] || wa.uniqueSort(e), Ga.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var Ia = /[^\x20\t\r\n\f]+/g;
    wa.Callbacks = function (a) {
        a = "string" == typeof a ? i(a) : wa.extend({}, a);
        var b, c, e, f, g = [], h = [], j = -1, k = function () {
            for (f = f || a.once, e = b = !0; h.length; j = -1) for (c = h.shift(); ++j < g.length;) g[j].apply(c[0], c[1]) === !1 && a.stopOnFalse && (j = g.length, c = !1);
            a.memory || (c = !1), b = !1, f && (g = c ? [] : "")
        }, l = {
            add: function () {
                return g && (c && !b && (j = g.length - 1, h.push(c)), function e(b) {
                    wa.each(b, function (b, c) {
                        sa(c) ? a.unique && l.has(c) || g.push(c) : c && c.length && "string" !== d(c) && e(c)
                    })
                }(arguments), c && !b && k()), this
            }, remove: function () {
                return wa.each(arguments, function (a, b) {
                    for (var c; (c = wa.inArray(b, g, c)) > -1;) g.splice(c, 1), j >= c && j--
                }), this
            }, has: function (a) {
                return a ? wa.inArray(a, g) > -1 : g.length > 0
            }, empty: function () {
                return g && (g = []), this
            }, disable: function () {
                return f = h = [], g = c = "", this
            }, disabled: function () {
                return !g
            }, lock: function () {
                return f = h = [], c || b || (g = c = ""), this
            }, locked: function () {
                return !!f
            }, fireWith: function (a, c) {
                return f || (c = c || [], c = [a, c.slice ? c.slice() : c], h.push(c), b || k()), this
            }, fire: function () {
                return l.fireWith(this, arguments), this
            }, fired: function () {
                return !!e
            }
        };
        return l
    }, wa.extend({
        Deferred: function (b) {
            var c = [["notify", "progress", wa.Callbacks("memory"), wa.Callbacks("memory"), 2], ["resolve", "done", wa.Callbacks("once memory"), wa.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", wa.Callbacks("once memory"), wa.Callbacks("once memory"), 1, "rejected"]],
                d = "pending", e = {
                    state: function () {
                        return d
                    }, always: function () {
                        return f.done(arguments).fail(arguments), this
                    }, "catch": function (a) {
                        return e.then(null, a)
                    }, pipe: function () {
                        var a = arguments;
                        return wa.Deferred(function (b) {
                            wa.each(c, function (c, d) {
                                var e = sa(a[d[4]]) && a[d[4]];
                                f[d[1]](function () {
                                    var a = e && e.apply(this, arguments);
                                    a && sa(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    }, then: function (b, d, e) {
                        function f(b, c, d, e) {
                            return function () {
                                var h = this, i = arguments, l = function () {
                                    var a, l;
                                    if (!(g > b)) {
                                        if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");
                                        l = a && ("object" == typeof a || "function" == typeof a) && a.then, sa(l) ? e ? l.call(a, f(g, c, j, e), f(g, c, k, e)) : (g++, l.call(a, f(g, c, j, e), f(g, c, k, e), f(g, c, j, c.notifyWith))) : (d !== j && (h = void 0, i = [a]), (e || c.resolveWith)(h, i))
                                    }
                                }, m = e ? l : function () {
                                    try {
                                        l()
                                    } catch (a) {
                                        wa.Deferred.exceptionHook && wa.Deferred.exceptionHook(a, m.stackTrace), b + 1 >= g && (d !== k && (h = void 0, i = [a]), c.rejectWith(h, i))
                                    }
                                };
                                b ? m() : (wa.Deferred.getStackHook && (m.stackTrace = wa.Deferred.getStackHook()), a.setTimeout(m))
                            }
                        }

                        var g = 0;
                        return wa.Deferred(function (a) {
                            c[0][3].add(f(0, a, sa(e) ? e : j, a.notifyWith)), c[1][3].add(f(0, a, sa(b) ? b : j)), c[2][3].add(f(0, a, sa(d) ? d : k))
                        }).promise()
                    }, promise: function (a) {
                        return null != a ? wa.extend(a, e) : e
                    }
                }, f = {};
            return wa.each(c, function (a, b) {
                var g = b[2], h = b[5];
                e[b[1]] = g.add, h && g.add(function () {
                    d = h
                }, c[3 - a][2].disable, c[3 - a][3].disable, c[0][2].lock, c[0][3].lock), g.add(b[3].fire), f[b[0]] = function () {
                    return f[b[0] + "With"](this === f ? void 0 : this, arguments), this
                }, f[b[0] + "With"] = g.fireWith
            }), e.promise(f), b && b.call(f, f), f
        }, when: function (a) {
            var b = arguments.length, c = b, d = Array(c), e = ia.call(arguments), f = wa.Deferred(), g = function (a) {
                return function (c) {
                    d[a] = this, e[a] = arguments.length > 1 ? ia.call(arguments) : c, --b || f.resolveWith(d, e)
                }
            };
            if (1 >= b && (l(a, f.done(g(c)).resolve, f.reject, !b), "pending" === f.state() || sa(e[c] && e[c].then))) return f.then();
            for (; c--;) l(e[c], g(c), f.reject);
            return f.promise()
        }
    });
    var Ja = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    wa.Deferred.exceptionHook = function (b, c) {
        a.console && a.console.warn && b && Ja.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
    }, wa.readyException = function (b) {
        a.setTimeout(function () {
            throw b
        })
    };
    var Ka = wa.Deferred();
    wa.fn.ready = function (a) {
        return Ka.then(a)["catch"](function (a) {
            wa.readyException(a)
        }), this
    }, wa.extend({
        isReady: !1, readyWait: 1, ready: function (a) {
            (a === !0 ? --wa.readyWait : wa.isReady) || (wa.isReady = !0, a !== !0 && --wa.readyWait > 0 || Ka.resolveWith(ga, [wa]))
        }
    }), wa.ready.then = Ka.then, "complete" === ga.readyState || "loading" !== ga.readyState && !ga.documentElement.doScroll ? a.setTimeout(wa.ready) : (ga.addEventListener("DOMContentLoaded", m), a.addEventListener("load", m));
    var La = function (a, b, c, e, f, g, h) {
        var i = 0, j = a.length, k = null == c;
        if ("object" === d(c)) {
            f = !0;
            for (i in c) La(a, b, i, c[i], !0, g, h)
        } else if (void 0 !== e && (f = !0, sa(e) || (h = !0), k && (h ? (b.call(a, e), b = null) : (k = b, b = function (a, b, c) {
            return k.call(wa(a), c)
        })), b)) for (; j > i; i++) b(a[i], c, h ? e : e.call(a[i], i, b(a[i], c)));
        return f ? a : k ? b.call(a) : j ? b(a[0], c) : g
    }, Ma = /^-ms-/, Na = /-([a-z])/g, Oa = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };
    p.uid = 1, p.prototype = {
        cache: function (a) {
            var b = a[this.expando];
            return b || (b = {}, Oa(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        }, set: function (a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[o(b)] = c; else for (d in b) e[o(d)] = b[d];
            return e
        }, get: function (a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][o(b)]
        }, access: function (a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b)
        }, remove: function (a, b) {
            var c, d = a[this.expando];
            if (void 0 !== d) {
                if (void 0 !== b) {
                    Array.isArray(b) ? b = b.map(o) : (b = o(b), b = b in d ? [b] : b.match(Ia) || []), c = b.length;
                    for (; c--;) delete d[b[c]]
                }
                (void 0 === b || wa.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        }, hasData: function (a) {
            var b = a[this.expando];
            return void 0 !== b && !wa.isEmptyObject(b)
        }
    };
    var Pa = new p, Qa = new p, Ra = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Sa = /[A-Z]/g;
    wa.extend({
        hasData: function (a) {
            return Qa.hasData(a) || Pa.hasData(a)
        }, data: function (a, b, c) {
            return Qa.access(a, b, c)
        }, removeData: function (a, b) {
            Qa.remove(a, b)
        }, _data: function (a, b, c) {
            return Pa.access(a, b, c)
        }, _removeData: function (a, b) {
            Pa.remove(a, b)
        }
    }), wa.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = Qa.get(f), 1 === f.nodeType && !Pa.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = o(d.slice(5)), r(f, d, e[d])));
                    Pa.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                Qa.set(this, a)
            }) : La(this, function (b) {
                var c;
                if (f && void 0 === b) {
                    if (c = Qa.get(f, a), void 0 !== c) return c;
                    if (c = r(f, a), void 0 !== c) return c
                } else this.each(function () {
                    Qa.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        }, removeData: function (a) {
            return this.each(function () {
                Qa.remove(this, a)
            })
        }
    }), wa.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = Pa.get(a, b), c && (!d || Array.isArray(c) ? d = Pa.access(a, b, wa.makeArray(c)) : d.push(c)), d || []) : void 0
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = wa.queue(a, b), d = c.length, e = c.shift(), f = wa._queueHooks(a, b), g = function () {
                wa.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return Pa.get(a, c) || Pa.access(a, c, {
                empty: wa.Callbacks("once memory").add(function () {
                    Pa.remove(a, [b + "queue", c])
                })
            })
        }
    }), wa.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? wa.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = wa.queue(this, a, b);
                wa._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && wa.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                wa.dequeue(this, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, b) {
            var c, d = 1, e = wa.Deferred(), f = this, g = this.length, h = function () {
                --d || e.resolveWith(f, [f])
            };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = Pa.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var Ta = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ua = new RegExp("^(?:([+-])=|)(" + Ta + ")([a-z%]*)$", "i"),
        Va = ["Top", "Right", "Bottom", "Left"], Wa = function (a, b) {
            return a = b || a, "none" === a.style.display || "" === a.style.display && wa.contains(a.ownerDocument, a) && "none" === wa.css(a, "display")
        }, Xa = function (a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        }, Ya = {};
    wa.fn.extend({
        show: function () {
            return u(this, !0)
        }, hide: function () {
            return u(this)
        }, toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                Wa(this) ? wa(this).show() : wa(this).hide()
            })
        }
    });
    var Za = /^(?:checkbox|radio)$/i, $a = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, _a = /^$|^module$|\/(?:java|ecma)script/i,
        ab = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ab.optgroup = ab.option, ab.tbody = ab.tfoot = ab.colgroup = ab.caption = ab.thead, ab.th = ab.td;
    var bb = /<|&#?\w+;/;
    !function () {
        var a = ga.createDocumentFragment(), b = a.appendChild(ga.createElement("div")), c = ga.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), ra.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", ra.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var cb = ga.documentElement, db = /^key/, eb = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        fb = /^([^.]*)(?:\.(.+)|)/;
    wa.event = {
        global: {}, add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = Pa.get(a);
            if (q) for (c.handler && (f = c, c = f.handler, e = f.selector), e && wa.find.matchesSelector(cb, e), c.guid || (c.guid = wa.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
                return "undefined" != typeof wa && wa.event.triggered !== b.type ? wa.event.dispatch.apply(a, arguments) : void 0
            }), b = (b || "").match(Ia) || [""], j = b.length; j--;) h = fb.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = wa.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = wa.event.special[n] || {}, k = wa.extend({
                type: n,
                origType: p,
                data: d,
                handler: c,
                guid: c.guid,
                selector: e,
                needsContext: e && wa.expr.match.needsContext.test(e),
                namespace: o.join(".")
            }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), wa.event.global[n] = !0)
        }, remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = Pa.hasData(a) && Pa.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(Ia) || [""], j = b.length; j--;) if (h = fb.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    for (l = wa.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || wa.removeEvent(a, n, q.handle), delete i[n])
                } else for (n in i) wa.event.remove(a, n + b[j], c, d, !0);
                wa.isEmptyObject(i) && Pa.remove(a, "handle events")
            }
        }, dispatch: function (a) {
            var b, c, d, e, f, g, h = wa.event.fix(a), i = new Array(arguments.length),
                j = (Pa.get(this, "events") || {})[h.type] || [], k = wa.event.special[h.type] || {};
            for (i[0] = h, b = 1; b < arguments.length; b++) i[b] = arguments[b];
            if (h.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, h) !== !1) {
                for (g = wa.event.handlers.call(this, h, j), b = 0; (e = g[b++]) && !h.isPropagationStopped();) for (h.currentTarget = e.elem, c = 0; (f = e.handlers[c++]) && !h.isImmediatePropagationStopped();) (!h.rnamespace || h.rnamespace.test(f.namespace)) && (h.handleObj = f, h.data = f.data, d = ((wa.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, i), void 0 !== d && (h.result = d) === !1 && (h.preventDefault(), h.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, h), h.result
            }
        }, handlers: function (a, b) {
            var c, d, e, f, g, h = [], i = b.delegateCount, j = a.target;
            if (i && j.nodeType && !("click" === a.type && a.button >= 1)) for (; j !== this; j = j.parentNode || this) if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
                for (f = [], g = {}, c = 0; i > c; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? wa(e, this).index(j) > -1 : wa.find(e, this, null, [j]).length), g[e] && f.push(d);
                f.length && h.push({elem: j, handlers: f})
            }
            return j = this, i < b.length && h.push({elem: j, handlers: b.slice(i)}), h
        }, addProp: function (a, b) {
            Object.defineProperty(wa.Event.prototype, a, {
                enumerable: !0, configurable: !0, get: sa(b) ? function () {
                    return this.originalEvent ? b(this.originalEvent) : void 0
                } : function () {
                    return this.originalEvent ? this.originalEvent[a] : void 0
                }, set: function (b) {
                    Object.defineProperty(this, a, {enumerable: !0, configurable: !0, writable: !0, value: b})
                }
            })
        }, fix: function (a) {
            return a[wa.expando] ? a : new wa.Event(a)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    return this !== A() && this.focus ? (this.focus(), !1) : void 0
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === A() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && f(this, "input") ? (this.click(), !1) : void 0
                }, _default: function (a) {
                    return f(a.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }, wa.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }, wa.Event = function (a, b) {
        return this instanceof wa.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? y : z, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && wa.extend(this, b), this.timeStamp = a && a.timeStamp || Date.now(), void (this[wa.expando] = !0)) : new wa.Event(a, b)
    }, wa.Event.prototype = {
        constructor: wa.Event,
        isDefaultPrevented: z,
        isPropagationStopped: z,
        isImmediatePropagationStopped: z,
        isSimulated: !1,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = y, a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = y, a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = y, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, wa.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (a) {
            var b = a.button;
            return null == a.which && db.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && eb.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
        }
    }, wa.event.addProp), wa.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        wa.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !wa.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), wa.fn.extend({
        on: function (a, b, c, d) {
            return B(this, a, b, c, d)
        }, one: function (a, b, c, d) {
            return B(this, a, b, c, d, 1)
        }, off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, wa(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = z), this.each(function () {
                wa.event.remove(this, a, c, b)
            })
        }
    });
    var gb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        hb = /<script|<style|<link/i, ib = /checked\s*(?:[^=]|=\s*.checked.)/i,
        jb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    wa.extend({
        htmlPrefilter: function (a) {
            return a.replace(gb, "<$1></$2>")
        }, clone: function (a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = wa.contains(a.ownerDocument, a);
            if (!(ra.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || wa.isXMLDoc(a))) for (g = v(h), f = v(a), d = 0, e = f.length; e > d; d++) G(f[d], g[d]);
            if (b) if (c) for (f = f || v(a), g = g || v(h), d = 0, e = f.length; e > d; d++) F(f[d], g[d]); else F(a, h);
            return g = v(h, "script"), g.length > 0 && w(g, !i && v(a, "script")), h
        }, cleanData: function (a) {
            for (var b, c, d, e = wa.event.special, f = 0; void 0 !== (c = a[f]); f++) if (Oa(c)) {
                if (b = c[Pa.expando]) {
                    if (b.events) for (d in b.events) e[d] ? wa.event.remove(c, d) : wa.removeEvent(c, d, b.handle);
                    c[Pa.expando] = void 0
                }
                c[Qa.expando] && (c[Qa.expando] = void 0)
            }
        }
    }), wa.fn.extend({
        detach: function (a) {
            return I(this, a, !0)
        }, remove: function (a) {
            return I(this, a)
        }, text: function (a) {
            return La(this, function (a) {
                return void 0 === a ? wa.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        }, append: function () {
            return H(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = C(this, a);
                    b.appendChild(a)
                }
            })
        }, prepend: function () {
            return H(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = C(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        }, before: function () {
            return H(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        }, after: function () {
            return H(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        }, empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (wa.cleanData(v(a, !1)), a.textContent = "");
            return this
        }, clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return wa.clone(this, a, b)
            })
        }, html: function (a) {
            return La(this, function (a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !hb.test(a) && !ab[($a.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = wa.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (wa.cleanData(v(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function () {
            var a = [];
            return H(this, arguments, function (b) {
                var c = this.parentNode;
                wa.inArray(this, a) < 0 && (wa.cleanData(v(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), wa.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        wa.fn[a] = function (a) {
            for (var c, d = [], e = wa(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), wa(e[g])[b](c), ka.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var kb = new RegExp("^(" + Ta + ")(?!px)[a-z%]+$", "i"), lb = function (b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a), c.getComputedStyle(b)
    }, mb = new RegExp(Va.join("|"), "i");
    !function () {
        function b() {
            if (j) {
                i.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", j.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", cb.appendChild(i).appendChild(j);
                var b = a.getComputedStyle(j);
                d = "1%" !== b.top, h = 12 === c(b.marginLeft), j.style.right = "60%", g = 36 === c(b.right), e = 36 === c(b.width), j.style.position = "absolute", f = 36 === j.offsetWidth || "absolute", cb.removeChild(i), j = null
            }
        }

        function c(a) {
            return Math.round(parseFloat(a))
        }

        var d, e, f, g, h, i = ga.createElement("div"), j = ga.createElement("div");
        j.style && (j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", ra.clearCloneStyle = "content-box" === j.style.backgroundClip, wa.extend(ra, {
            boxSizingReliable: function () {
                return b(), e
            }, pixelBoxStyles: function () {
                return b(), g
            }, pixelPosition: function () {
                return b(), d
            }, reliableMarginLeft: function () {
                return b(), h
            }, scrollboxSize: function () {
                return b(), f
            }
        }))
    }();
    var nb = /^(none|table(?!-c[ea]).+)/, ob = /^--/,
        pb = {position: "absolute", visibility: "hidden", display: "block"},
        qb = {letterSpacing: "0", fontWeight: "400"}, rb = ["Webkit", "Moz", "ms"], sb = ga.createElement("div").style;
    wa.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = J(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = o(b), i = ob.test(b), j = a.style;
                return i || (b = M(h)), g = wa.cssHooks[b] || wa.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : (f = typeof c, "string" === f && (e = Ua.exec(c)) && e[1] && (c = s(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (wa.cssNumber[h] ? "" : "px")), ra.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c)), void 0)
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = o(b), i = ob.test(b);
            return i || (b = M(h)), g = wa.cssHooks[b] || wa.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = J(a, b, d)), "normal" === e && b in qb && (e = qb[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }), wa.each(["height", "width"], function (a, b) {
        wa.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? !nb.test(wa.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? P(a, b, d) : Xa(a, pb, function () {
                    return P(a, b, d)
                }) : void 0
            }, set: function (a, c, d) {
                var e, f = lb(a), g = "border-box" === wa.css(a, "boxSizing", !1, f), h = d && O(a, b, d, g, f);
                return g && ra.scrollboxSize() === f.position && (h -= Math.ceil(a["offset" + b[0].toUpperCase() + b.slice(1)] - parseFloat(f[b]) - O(a, b, "border", !1, f) - .5)), h && (e = Ua.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = wa.css(a, b)), N(a, c, h)
            }
        }
    }), wa.cssHooks.marginLeft = K(ra.reliableMarginLeft, function (a, b) {
        return b ? (parseFloat(J(a, "marginLeft")) || a.getBoundingClientRect().left - Xa(a, {marginLeft: 0}, function () {
            return a.getBoundingClientRect().left
        })) + "px" : void 0
    }), wa.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        wa.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + Va[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, "margin" !== a && (wa.cssHooks[a + b].set = N)
    }), wa.fn.extend({
        css: function (a, b) {
            return La(this, function (a, b, c) {
                var d, e, f = {}, g = 0;
                if (Array.isArray(b)) {
                    for (d = lb(a), e = b.length; e > g; g++) f[b[g]] = wa.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? wa.style(a, b, c) : wa.css(a, b)
            }, a, b, arguments.length > 1)
        }
    }), wa.Tween = Q, Q.prototype = {
        constructor: Q, init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || wa.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (wa.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = Q.propHooks[this.prop];
            return a && a.get ? a.get(this) : Q.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = Q.propHooks[this.prop];
            return this.options.duration ? this.pos = b = wa.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Q.propHooks._default.set(this), this
        }
    }, Q.prototype.init.prototype = Q.prototype, Q.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = wa.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            }, set: function (a) {
                wa.fx.step[a.prop] ? wa.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[wa.cssProps[a.prop]] && !wa.cssHooks[a.prop] ? a.elem[a.prop] = a.now : wa.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, Q.propHooks.scrollTop = Q.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, wa.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }, _default: "swing"
    }, wa.fx = Q.prototype.init, wa.fx.step = {};
    var tb, ub, vb = /^(?:toggle|show|hide)$/, wb = /queueHooks$/;
    wa.Animation = wa.extend(X, {
        tweeners: {
            "*": [function (a, b) {
                var c = this.createTween(a, b);
                return s(c.elem, a, Ua.exec(b), c), c
            }]
        }, tweener: function (a, b) {
            sa(a) ? (b = a, a = ["*"]) : a = a.match(Ia);
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], X.tweeners[c] = X.tweeners[c] || [], X.tweeners[c].unshift(b)
        }, prefilters: [V], prefilter: function (a, b) {
            b ? X.prefilters.unshift(a) : X.prefilters.push(a)
        }
    }), wa.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? wa.extend({}, a) : {
            complete: c || !c && b || sa(a) && a,
            duration: a,
            easing: c && b || b && !sa(b) && b
        };
        return wa.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in wa.fx.speeds ? d.duration = wa.fx.speeds[d.duration] : d.duration = wa.fx.speeds._default), (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            sa(d.old) && d.old.call(this), d.queue && wa.dequeue(this, d.queue)
        }, d
    }, wa.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(Wa).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            var e = wa.isEmptyObject(a), f = wa.speed(b, c, d), g = function () {
                var b = X(this, wa.extend({}, a), f);
                (e || Pa.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        }, stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b,
                b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0, e = null != a && a + "queueHooks", f = wa.timers, g = Pa.get(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && wb.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && wa.dequeue(this, a)
            })
        }, finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = Pa.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = wa.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, wa.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), wa.each(["toggle", "show", "hide"], function (a, b) {
        var c = wa.fn[b];
        wa.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(T(b, !0), a, d, e)
        }
    }), wa.each({
        slideDown: T("show"),
        slideUp: T("hide"),
        slideToggle: T("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        wa.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), wa.timers = [], wa.fx.tick = function () {
        var a, b = 0, c = wa.timers;
        for (tb = Date.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || wa.fx.stop(), tb = void 0
    }, wa.fx.timer = function (a) {
        wa.timers.push(a), wa.fx.start()
    }, wa.fx.interval = 13, wa.fx.start = function () {
        ub || (ub = !0, R())
    }, wa.fx.stop = function () {
        ub = null
    }, wa.fx.speeds = {slow: 600, fast: 200, _default: 400}, wa.fn.delay = function (b, c) {
        return b = wa.fx ? wa.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function () {
                a.clearTimeout(e)
            }
        })
    }, function () {
        var a = ga.createElement("input"), b = ga.createElement("select"),
            c = b.appendChild(ga.createElement("option"));
        a.type = "checkbox", ra.checkOn = "" !== a.value, ra.optSelected = c.selected, a = ga.createElement("input"), a.value = "t", a.type = "radio", ra.radioValue = "t" === a.value
    }();
    var xb, yb = wa.expr.attrHandle;
    wa.fn.extend({
        attr: function (a, b) {
            return La(this, wa.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                wa.removeAttr(this, a)
            })
        }
    }), wa.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? wa.prop(a, b, c) : (1 === f && wa.isXMLDoc(a) || (e = wa.attrHooks[b.toLowerCase()] || (wa.expr.match.bool.test(b) ? xb : void 0)), void 0 !== c ? null === c ? void wa.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = wa.find.attr(a, b), null == d ? void 0 : d))
        }, attrHooks: {
            type: {
                set: function (a, b) {
                    if (!ra.radioValue && "radio" === b && f(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }, removeAttr: function (a, b) {
            var c, d = 0, e = b && b.match(Ia);
            if (e && 1 === a.nodeType) for (; c = e[d++];) a.removeAttribute(c)
        }
    }), xb = {
        set: function (a, b, c) {
            return b === !1 ? wa.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, wa.each(wa.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = yb[b] || wa.find.attr;
        yb[b] = function (a, b, d) {
            var e, f, g = b.toLowerCase();
            return d || (f = yb[g], yb[g] = e, e = null != c(a, b, d) ? g : null, yb[g] = f), e
        }
    });
    var zb = /^(?:input|select|textarea|button)$/i, Ab = /^(?:a|area)$/i;
    wa.fn.extend({
        prop: function (a, b) {
            return La(this, wa.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            return this.each(function () {
                delete this[wa.propFix[a] || a]
            })
        }
    }), wa.extend({
        prop: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && wa.isXMLDoc(a) || (b = wa.propFix[b] || b, e = wa.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = wa.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}
    }), ra.optSelected || (wa.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }, set: function (a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), wa.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        wa.propFix[this.toLowerCase()] = this
    }), wa.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (sa(a)) return this.each(function (b) {
                wa(this).addClass(a.call(this, b, Z(this)))
            });
            if (b = $(a), b.length) for (; c = this[i++];) if (e = Z(c), d = 1 === c.nodeType && " " + Y(e) + " ") {
                for (g = 0; f = b[g++];) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                h = Y(d), e !== h && c.setAttribute("class", h)
            }
            return this
        }, removeClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (sa(a)) return this.each(function (b) {
                wa(this).removeClass(a.call(this, b, Z(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if (b = $(a), b.length) for (; c = this[i++];) if (e = Z(c), d = 1 === c.nodeType && " " + Y(e) + " ") {
                for (g = 0; f = b[g++];) for (; d.indexOf(" " + f + " ") > -1;) d = d.replace(" " + f + " ", " ");
                h = Y(d), e !== h && c.setAttribute("class", h)
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a, d = "string" === c || Array.isArray(a);
            return "boolean" == typeof b && d ? b ? this.addClass(a) : this.removeClass(a) : sa(a) ? this.each(function (c) {
                wa(this).toggleClass(a.call(this, c, Z(this), b), b)
            }) : this.each(function () {
                var b, e, f, g;
                if (d) for (e = 0, f = wa(this), g = $(a); b = g[e++];) f.hasClass(b) ? f.removeClass(b) : f.addClass(b); else (void 0 === a || "boolean" === c) && (b = Z(this), b && Pa.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : Pa.get(this, "__className__") || ""))
            })
        }, hasClass: function (a) {
            var b, c, d = 0;
            for (b = " " + a + " "; c = this[d++];) if (1 === c.nodeType && (" " + Y(Z(c)) + " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    var Bb = /\r/g;
    wa.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length) return d = sa(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, wa(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = wa.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = wa.valHooks[this.type] || wa.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = wa.valHooks[e.type] || wa.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(Bb, "") : null == c ? "" : c)
            }
        }
    }), wa.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = wa.find.attr(a, "value");
                    return null != b ? b : Y(wa.text(a))
                }
            }, select: {
                get: function (a) {
                    var b, c, d, e = a.options, g = a.selectedIndex, h = "select-one" === a.type, i = h ? null : [],
                        j = h ? g + 1 : e.length;
                    for (d = 0 > g ? j : h ? g : 0; j > d; d++) if (c = e[d], (c.selected || d === g) && !c.disabled && (!c.parentNode.disabled || !f(c.parentNode, "optgroup"))) {
                        if (b = wa(c).val(), h) return b;
                        i.push(b)
                    }
                    return i
                }, set: function (a, b) {
                    for (var c, d, e = a.options, f = wa.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = wa.inArray(wa.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), wa.each(["radio", "checkbox"], function () {
        wa.valHooks[this] = {
            set: function (a, b) {
                return Array.isArray(b) ? a.checked = wa.inArray(wa(a).val(), b) > -1 : void 0
            }
        }, ra.checkOn || (wa.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), ra.focusin = "onfocusin" in a;
    var Cb = /^(?:focusinfocus|focusoutblur)$/, Db = function (a) {
        a.stopPropagation()
    };
    wa.extend(wa.event, {
        trigger: function (b, c, d, e) {
            var f, g, h, i, j, k, l, m, n = [d || ga], o = oa.call(b, "type") ? b.type : b,
                p = oa.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = m = h = d = d || ga, 3 !== d.nodeType && 8 !== d.nodeType && !Cb.test(o + wa.event.triggered) && (o.indexOf(".") > -1 && (p = o.split("."), o = p.shift(), p.sort()), j = o.indexOf(":") < 0 && "on" + o, b = b[wa.expando] ? b : new wa.Event(o, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = p.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : wa.makeArray(c, [b]), l = wa.event.special[o] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                if (!e && !l.noBubble && !ta(d)) {
                    for (i = l.delegateType || o, Cb.test(i + o) || (g = g.parentNode); g; g = g.parentNode) n.push(g), h = g;
                    h === (d.ownerDocument || ga) && n.push(h.defaultView || h.parentWindow || a)
                }
                for (f = 0; (g = n[f++]) && !b.isPropagationStopped();) m = g, b.type = f > 1 ? i : l.bindType || o, k = (Pa.get(g, "events") || {})[b.type] && Pa.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && Oa(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = o, e || b.isDefaultPrevented() || l._default && l._default.apply(n.pop(), c) !== !1 || !Oa(d) || j && sa(d[o]) && !ta(d) && (h = d[j], h && (d[j] = null), wa.event.triggered = o, b.isPropagationStopped() && m.addEventListener(o, Db), d[o](), b.isPropagationStopped() && m.removeEventListener(o, Db), wa.event.triggered = void 0, h && (d[j] = h)), b.result
            }
        }, simulate: function (a, b, c) {
            var d = wa.extend(new wa.Event, c, {type: a, isSimulated: !0});
            wa.event.trigger(d, null, b)
        }
    }), wa.fn.extend({
        trigger: function (a, b) {
            return this.each(function () {
                wa.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            var c = this[0];
            return c ? wa.event.trigger(a, b, c, !0) : void 0
        }
    }), ra.focusin || wa.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c = function (a) {
            wa.event.simulate(b, a.target, wa.event.fix(a))
        };
        wa.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this, e = Pa.access(d, b);
                e || d.addEventListener(a, c, !0), Pa.access(d, b, (e || 0) + 1)
            }, teardown: function () {
                var d = this.ownerDocument || this, e = Pa.access(d, b) - 1;
                e ? Pa.access(d, b, e) : (d.removeEventListener(a, c, !0), Pa.remove(d, b))
            }
        }
    });
    var Eb = a.location, Fb = Date.now(), Gb = /\?/;
    wa.parseXML = function (b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return (!c || c.getElementsByTagName("parsererror").length) && wa.error("Invalid XML: " + b), c
    };
    var Hb = /\[\]$/, Ib = /\r?\n/g, Jb = /^(?:submit|button|image|reset|file)$/i,
        Kb = /^(?:input|select|textarea|keygen)/i;
    wa.param = function (a, b) {
        var c, d = [], e = function (a, b) {
            var c = sa(b) ? b() : b;
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
        };
        if (Array.isArray(a) || a.jquery && !wa.isPlainObject(a)) wa.each(a, function () {
            e(this.name, this.value)
        }); else for (c in a) _(c, a[c], b, e);
        return d.join("&")
    }, wa.fn.extend({
        serialize: function () {
            return wa.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = wa.prop(this, "elements");
                return a ? wa.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !wa(this).is(":disabled") && Kb.test(this.nodeName) && !Jb.test(a) && (this.checked || !Za.test(a))
            }).map(function (a, b) {
                var c = wa(this).val();
                return null == c ? null : Array.isArray(c) ? wa.map(c, function (a) {
                    return {name: b.name, value: a.replace(Ib, "\r\n")}
                }) : {name: b.name, value: c.replace(Ib, "\r\n")}
            }).get()
        }
    });
    var Lb = /%20/g, Mb = /#.*$/, Nb = /([?&])_=[^&]*/, Ob = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Qb = /^(?:GET|HEAD)$/, Rb = /^\/\//, Sb = {},
        Tb = {}, Ub = "*/".concat("*"), Vb = ga.createElement("a");
    Vb.href = Eb.href, wa.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Eb.href,
            type: "GET",
            isLocal: Pb.test(Eb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ub,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": wa.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (a, b) {
            return b ? ca(ca(a, wa.ajaxSettings), b) : ca(wa.ajaxSettings, a)
        },
        ajaxPrefilter: aa(Sb),
        ajaxTransport: aa(Tb),
        ajax: function (b, c) {
            function d(b, c, d, h) {
                var j, m, n, u, v, w = c;
                k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = da(o, x, d)), u = ea(o, u, x, j), j ? (o.ifModified && (v = x.getResponseHeader("Last-Modified"), v && (wa.lastModified[f] = v), v = x.getResponseHeader("etag"), v && (wa.etag[f] = v)), 204 === b || "HEAD" === o.type ? w = "nocontent" : 304 === b ? w = "notmodified" : (w = u.state, m = u.data, n = u.error, j = !n)) : (n = w, (b || !w) && (w = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || w) + "", j ? r.resolveWith(p, [m, w, x]) : r.rejectWith(p, [x, w, n]), x.statusCode(t), t = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [x, o, j ? m : n]), s.fireWith(p, [x, w]), l && (q.trigger("ajaxComplete", [x, o]), --wa.active || wa.event.trigger("ajaxStop")))
            }

            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m, n, o = wa.ajaxSetup({}, c), p = o.context || o,
                q = o.context && (p.nodeType || p.jquery) ? wa(p) : wa.event, r = wa.Deferred(),
                s = wa.Callbacks("once memory"), t = o.statusCode || {}, u = {}, v = {}, w = "canceled", x = {
                    readyState: 0, getResponseHeader: function (a) {
                        var b;
                        if (k) {
                            if (!h) for (h = {}; b = Ob.exec(g);) h[b[1].toLowerCase()] = b[2];
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    }, getAllResponseHeaders: function () {
                        return k ? g : null
                    }, setRequestHeader: function (a, b) {
                        return null == k && (a = v[a.toLowerCase()] = v[a.toLowerCase()] || a, u[a] = b), this
                    }, overrideMimeType: function (a) {
                        return null == k && (o.mimeType = a), this
                    }, statusCode: function (a) {
                        var b;
                        if (a) if (k) x.always(a[x.status]); else for (b in a) t[b] = [t[b], a[b]];
                        return this
                    }, abort: function (a) {
                        var b = a || w;
                        return e && e.abort(b), d(0, b), this
                    }
                };
            if (r.promise(x), o.url = ((b || o.url || Eb.href) + "").replace(Rb, Eb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(Ia) || [""], null == o.crossDomain) {
                j = ga.createElement("a");
                try {
                    j.href = o.url, j.href = j.href, o.crossDomain = Vb.protocol + "//" + Vb.host != j.protocol + "//" + j.host
                } catch (y) {
                    o.crossDomain = !0
                }
            }
            if (o.data && o.processData && "string" != typeof o.data && (o.data = wa.param(o.data, o.traditional)), ba(Sb, o, c, x), k) return x;
            l = wa.event && o.global, l && 0 === wa.active++ && wa.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Qb.test(o.type), f = o.url.replace(Mb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Lb, "+")) : (n = o.url.slice(f.length), o.data && (o.processData || "string" == typeof o.data) && (f += (Gb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Nb, "$1"), n = (Gb.test(f) ? "&" : "?") + "_=" + Fb++ + n), o.url = f + n), o.ifModified && (wa.lastModified[f] && x.setRequestHeader("If-Modified-Since", wa.lastModified[f]), wa.etag[f] && x.setRequestHeader("If-None-Match", wa.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", o.contentType), x.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Ub + "; q=0.01" : "") : o.accepts["*"]);
            for (m in o.headers) x.setRequestHeader(m, o.headers[m]);
            if (o.beforeSend && (o.beforeSend.call(p, x, o) === !1 || k)) return x.abort();
            if (w = "abort", s.add(o.complete), x.done(o.success), x.fail(o.error), e = ba(Tb, o, c, x)) {
                if (x.readyState = 1, l && q.trigger("ajaxSend", [x, o]), k) return x;
                o.async && o.timeout > 0 && (i = a.setTimeout(function () {
                    x.abort("timeout")
                }, o.timeout));
                try {
                    k = !1, e.send(u, d)
                } catch (y) {
                    if (k) throw y;
                    d(-1, y)
                }
            } else d(-1, "No Transport");
            return x
        },
        getJSON: function (a, b, c) {
            return wa.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return wa.get(a, void 0, b, "script")
        }
    }), wa.each(["get", "post"], function (a, b) {
        wa[b] = function (a, c, d, e) {
            return sa(c) && (e = e || d, d = c, c = void 0), wa.ajax(wa.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, wa.isPlainObject(a) && a))
        }
    }), wa._evalUrl = function (a) {
        return wa.ajax({url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0})
    }, wa.fn.extend({
        wrapAll: function (a) {
            var b;
            return this[0] && (sa(a) && (a = a.call(this[0])), b = wa(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this
        }, wrapInner: function (a) {
            return sa(a) ? this.each(function (b) {
                wa(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = wa(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = sa(a);
            return this.each(function (c) {
                wa(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function (a) {
            return this.parent(a).not("body").each(function () {
                wa(this).replaceWith(this.childNodes)
            }), this
        }
    }), wa.expr.pseudos.hidden = function (a) {
        return !wa.expr.pseudos.visible(a)
    }, wa.expr.pseudos.visible = function (a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
    }, wa.ajaxSettings.xhr = function () {
        try {
            return new a.XMLHttpRequest
        } catch (b) {
        }
    };
    var Wb = {0: 200, 1223: 204}, Xb = wa.ajaxSettings.xhr();
    ra.cors = !!Xb && "withCredentials" in Xb, ra.ajax = Xb = !!Xb, wa.ajaxTransport(function (b) {
        var c, d;
        return ra.cors || Xb && !b.crossDomain ? {
            send: function (e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function (a) {
                    return function () {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.ontimeout = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Wb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {binary: h.response} : {text: h.responseText}, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), d = h.onerror = h.ontimeout = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
                    4 === h.readyState && a.setTimeout(function () {
                        c && d()
                    })
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (i) {
                    if (c) throw i
                }
            }, abort: function () {
                c && c()
            }
        } : void 0
    }), wa.ajaxPrefilter(function (a) {
        a.crossDomain && (a.contents.script = !1)
    }), wa.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (a) {
                return wa.globalEval(a), a
            }
        }
    }), wa.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), wa.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function (d, e) {
                    b = wa("<script>").prop({charset: a.scriptCharset, src: a.url}).on("load error", c = function (a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), ga.head.appendChild(b[0])
                }, abort: function () {
                    c && c()
                }
            }
        }
    });
    var Yb = [], Zb = /(=)\?(?=&|$)|\?\?/;
    wa.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = Yb.pop() || wa.expando + "_" + Fb++;
            return this[a] = !0, a
        }
    }), wa.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g,
            h = b.jsonp !== !1 && (Zb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Zb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = sa(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Zb, "$1" + e) : b.jsonp !== !1 && (b.url += (Gb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || wa.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            void 0 === f ? wa(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Yb.push(e)), g && sa(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), ra.createHTMLDocument = function () {
        var a = ga.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
    }(), wa.parseHTML = function (a, b, c) {
        if ("string" != typeof a) return [];
        "boolean" == typeof b && (c = b, b = !1);
        var d, e, f;
        return b || (ra.createHTMLDocument ? (b = ga.implementation.createHTMLDocument(""), d = b.createElement("base"), d.href = ga.location.href, b.head.appendChild(d)) : b = ga), e = Ca.exec(a), f = !c && [], e ? [b.createElement(e[1])] : (e = x([a], b, f), f && f.length && wa(f).remove(), wa.merge([], e.childNodes))
    }, wa.fn.load = function (a, b, c) {
        var d, e, f, g = this, h = a.indexOf(" ");
        return h > -1 && (d = Y(a.slice(h)), a = a.slice(0, h)), sa(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && wa.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function (a) {
            f = arguments, g.html(d ? wa("<div>").append(wa.parseHTML(a)).find(d) : a)
        }).always(c && function (a, b) {
            g.each(function () {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, wa.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        wa.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), wa.expr.pseudos.animated = function (a) {
        return wa.grep(wa.timers, function (b) {
            return a === b.elem
        }).length
    }, wa.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = wa.css(a, "position"), l = wa(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = wa.css(a, "top"), i = wa.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), sa(b) && (b = b.call(a, c, wa.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, wa.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                wa.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0];
            if (d) return d.getClientRects().length ? (b = d.getBoundingClientRect(), c = d.ownerDocument.defaultView, {
                top: b.top + c.pageYOffset,
                left: b.left + c.pageXOffset
            }) : {top: 0, left: 0}
        }, position: function () {
            if (this[0]) {
                var a, b, c, d = this[0], e = {top: 0, left: 0};
                if ("fixed" === wa.css(d, "position")) b = d.getBoundingClientRect(); else {
                    for (b = this.offset(), c = d.ownerDocument, a = d.offsetParent || c.documentElement; a && (a === c.body || a === c.documentElement) && "static" === wa.css(a, "position");) a = a.parentNode;
                    a && a !== d && 1 === a.nodeType && (e = wa(a).offset(), e.top += wa.css(a, "borderTopWidth", !0), e.left += wa.css(a, "borderLeftWidth", !0))
                }
                return {
                    top: b.top - e.top - wa.css(d, "marginTop", !0),
                    left: b.left - e.left - wa.css(d, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent; a && "static" === wa.css(a, "position");) a = a.offsetParent;
                return a || cb
            })
        }
    }), wa.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, b) {
        var c = "pageYOffset" === b;
        wa.fn[a] = function (d) {
            return La(this, function (a, d, e) {
                var f;
                return ta(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }), wa.each(["top", "left"], function (a, b) {
        wa.cssHooks[b] = K(ra.pixelPosition, function (a, c) {
            return c ? (c = J(a, b), kb.test(c) ? wa(a).position()[b] + "px" : c) : void 0
        })
    }), wa.each({Height: "height", Width: "width"}, function (a, b) {
        wa.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
            wa.fn[d] = function (e, f) {
                var g = arguments.length && (c || "boolean" != typeof e),
                    h = c || (e === !0 || f === !0 ? "margin" : "border");
                return La(this, function (b, c, e) {
                    var f;
                    return ta(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? wa.css(b, c, h) : wa.style(b, c, e, h)
                }, b, g ? e : void 0, g)
            }
        })
    }), wa.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
        wa.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), wa.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), wa.fn.extend({
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), wa.proxy = function (a, b) {
        var c, d, e;
        return "string" == typeof b && (c = a[b], b = a, a = c), sa(a) ? (d = ia.call(arguments, 2), e = function () {
            return a.apply(b || this, d.concat(ia.call(arguments)))
        }, e.guid = a.guid = a.guid || wa.guid++, e) : void 0
    }, wa.holdReady = function (a) {
        a ? wa.readyWait++ : wa.ready(!0)
    }, wa.isArray = Array.isArray, wa.parseJSON = JSON.parse, wa.nodeName = f, wa.isFunction = sa, wa.isWindow = ta, wa.camelCase = o, wa.type = d, wa.now = Date.now, wa.isNumeric = function (a) {
        var b = wa.type(a);
        return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return wa
    });
    var $b = a.jQuery, _b = a.$;
    return wa.noConflict = function (b) {
        return a.$ === wa && (a.$ = _b), b && a.jQuery === wa && (a.jQuery = $b), wa
    }, b || (a.jQuery = a.$ = wa), wa
}), "undefined" == typeof jQuery) throw new Error("Bootstrap requires jQuery");
+function (a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"), b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b) if (void 0 !== a.style[c]) return {end: b[c]}
    }

    a.fn.emulateTransitionEnd = function (b) {
        var c = !1, d = this;
        a(this).one(a.support.transition.end, function () {
            c = !0
        });
        var e = function () {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function () {
        a.support.transition = b()
    })
}(jQuery), +function (a) {
    "use strict";
    var b = '[data-dismiss="alert"]', c = function (c) {
        a(c).on("click", b, this.close)
    };
    c.prototype.close = function (b) {
        function c() {
            f.trigger("closed.bs.alert").remove()
        }

        var d = a(this), e = d.attr("data-target");
        e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
        var f = a(e);
        b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()), f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one(a.support.transition.end, c).emulateTransitionEnd(150) : c())
    };
    var d = a.fn.alert;
    a.fn.alert = function (b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.alert");
            e || d.data("bs.alert", e = new c(this)), "string" == typeof b && e[b].call(d)
        })
    }, a.fn.alert.Constructor = c, a.fn.alert.noConflict = function () {
        return a.fn.alert = d, this
    }, a(document).on("click.bs.alert.data-api", b, c.prototype.close)
}(jQuery), +function (a) {
    "use strict";
    var b = function (c, d) {
        this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d)
    };
    b.DEFAULTS = {loadingText: "loading..."}, b.prototype.setState = function (a) {
        var b = "disabled", c = this.$element, d = c.is("input") ? "val" : "html", e = c.data();
        a += "Text", e.resetText || c.data("resetText", c[d]()), c[d](e[a] || this.options[a]), setTimeout(function () {
            "loadingText" == a ? c.addClass(b).attr(b, b) : c.removeClass(b).removeAttr(b)
        }, 0)
    }, b.prototype.toggle = function () {
        var a = this.$element.closest('[data-toggle="buttons"]'), b = !0;
        if (a.length) {
            var c = this.$element.find("input");
            "radio" === c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? b = !1 : a.find(".active").removeClass("active")), b && c.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        b && this.$element.toggleClass("active")
    };
    var c = a.fn.button;
    a.fn.button = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.button"), f = "object" == typeof c && c;
            e || d.data("bs.button", e = new b(this, f)), "toggle" == c ? e.toggle() : c && e.setState(c)
        })
    }, a.fn.button.Constructor = b, a.fn.button.noConflict = function () {
        return a.fn.button = c, this
    }, a(document).on("click.bs.button.data-api", "[data-toggle^=button]", function (b) {
        var c = a(b.target);
        c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle"), b.preventDefault()
    })
}(jQuery), +function (a) {
    "use strict";
    var b = function (b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this))
    };
    b.DEFAULTS = {interval: 5e3, pause: "hover", wrap: !0}, b.prototype.cycle = function (b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, b.prototype.getActiveIndex = function () {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
    }, b.prototype.to = function (b) {
        var c = this, d = this.getActiveIndex();
        return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            c.to(b)
        }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]))
    }, b.prototype.pause = function (b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition.end && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, b.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, b.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, b.prototype.slide = function (b, c) {
        var d = this.$element.find(".item.active"), e = c || d[b](), f = this.interval,
            g = "next" == b ? "left" : "right", h = "next" == b ? "first" : "last", i = this;
        if (!e.length) {
            if (!this.options.wrap) return;
            e = this.$element.find(".item")[h]()
        }
        this.sliding = !0, f && this.pause();
        var j = a.Event("slide.bs.carousel", {relatedTarget: e[0], direction: g});
        if (!e.hasClass("active")) {
            if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid.bs.carousel", function () {
                var b = a(i.$indicators.children()[i.getActiveIndex()]);
                b && b.addClass("active")
            })), a.support.transition && this.$element.hasClass("slide")) {
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one(a.support.transition.end, function () {
                    e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function () {
                        i.$element.trigger("slid.bs.carousel")
                    }, 0)
                }).emulateTransitionEnd(600)
            } else {
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel")
            }
            return f && this.cycle(), this
        }
    };
    var c = a.fn.carousel;
    a.fn.carousel = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.carousel"),
                f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c),
                g = "string" == typeof c ? c : f.slide;
            e || d.data("bs.carousel", e = new b(this, f)), "number" == typeof c ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }, a.fn.carousel.Constructor = b, a.fn.carousel.noConflict = function () {
        return a.fn.carousel = c, this
    }, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (b) {
        var c, d = a(this), e = a(d.attr("data-target") || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "")),
            f = a.extend({}, e.data(), d.data()), g = d.attr("data-slide-to");
        g && (f.interval = !1), e.carousel(f), (g = d.attr("data-slide-to")) && e.data("bs.carousel").to(g), b.preventDefault()
    }), a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
            var b = a(this);
            b.carousel(b.data())
        })
    })
}(jQuery), +function (a) {
    "use strict";
    var b = function (c, d) {
        this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
    };
    b.DEFAULTS = {toggle: !0}, b.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, b.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b = a.Event("show.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.$parent && this.$parent.find("> .panel > .in");
                if (c && c.length) {
                    var d = c.data("bs.collapse");
                    if (d && d.transitioning) return;
                    c.collapse("hide"), d || c.data("bs.collapse", null)
                }
                var e = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[e](0), this.transitioning = 1;
                var f = function () {
                    this.$element.removeClass("collapsing").addClass("in")[e]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!a.support.transition) return f.call(this);
                var g = a.camelCase(["scroll", e].join("-"));
                this.$element.one(a.support.transition.end, a.proxy(f, this)).emulateTransitionEnd(350)[e](this.$element[0][g])
            }
        }
    }, b.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var d = function () {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return a.support.transition ? void this.$element[c](0).one(a.support.transition.end, a.proxy(d, this)).emulateTransitionEnd(350) : d.call(this)
            }
        }
    }, b.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var c = a.fn.collapse;
    a.fn.collapse = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.collapse"),
                f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c);
            e || d.data("bs.collapse", e = new b(this, f)),
            "string" == typeof c && e[c]()
        })
    }, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function () {
        return a.fn.collapse = c, this
    }, a(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function (b) {
        var c, d = a(this),
            e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""),
            f = a(e), g = f.data("bs.collapse"), h = g ? "toggle" : d.data(), i = d.attr("data-parent"), j = i && a(i);
        g && g.transitioning || (j && j.find('[data-toggle=collapse][data-parent="' + i + '"]').not(d).addClass("collapsed"), d[f.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), f.collapse(h)
    })
}(jQuery), +function (a) {
    "use strict";

    function b() {
        a(d).remove(), a(e).each(function (b) {
            var d = c(a(this));
            d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown")), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown"))
        })
    }

    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    var d = ".dropdown-backdrop", e = "[data-toggle=dropdown]", f = function (b) {
        a(b).on("click.bs.dropdown", this.toggle)
    };
    f.prototype.toggle = function (d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e), g = f.hasClass("open");
            if (b(), !g) {
                if ("ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b), f.trigger(d = a.Event("show.bs.dropdown")), d.isDefaultPrevented()) return;
                f.toggleClass("open").trigger("shown.bs.dropdown"), e.focus()
            }
            return !1
        }
    }, f.prototype.keydown = function (b) {
        if (/(38|40|27)/.test(b.keyCode)) {
            var d = a(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var f = c(d), g = f.hasClass("open");
                if (!g || g && 27 == b.keyCode) return 27 == b.which && f.find(e).focus(), d.click();
                var h = a("[role=menu] li:not(.divider):visible a", f);
                if (h.length) {
                    var i = h.index(h.filter(":focus"));
                    38 == b.keyCode && i > 0 && i--, 40 == b.keyCode && i < h.length - 1 && i++, ~i || (i = 0), h.eq(i).focus()
                }
            }
        }
    };
    var g = a.fn.dropdown;
    a.fn.dropdown = function (b) {
        return this.each(function () {
            var c = a(this), d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new f(this)), "string" == typeof b && d[b].call(c)
        })
    }, a.fn.dropdown.Constructor = f, a.fn.dropdown.noConflict = function () {
        return a.fn.dropdown = g, this
    }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", e, f.prototype.toggle).on("keydown.bs.dropdown.data-api", e + ", [role=menu]", f.prototype.keydown)
}(jQuery), +function (a) {
    "use strict";
    var b = function (b, c) {
        this.options = c, this.$element = a(b), this.$backdrop = this.isShown = null, this.options.remote && this.$element.load(this.options.remote)
    };
    b.DEFAULTS = {backdrop: !0, keyboard: !0, show: !0}, b.prototype.toggle = function (a) {
        return this[this.isShown ? "hide" : "show"](a)
    }, b.prototype.show = function (b) {
        var c = this, d = a.Event("show.bs.modal", {relatedTarget: b});
        this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function () {
            var d = a.support.transition && c.$element.hasClass("fade");
            c.$element.parent().length || c.$element.appendTo(document.body), c.$element.show(), d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), c.enforceFocus();
            var e = a.Event("shown.bs.modal", {relatedTarget: b});
            d ? c.$element.find(".modal-dialog").one(a.support.transition.end, function () {
                c.$element.focus().trigger(e)
            }).emulateTransitionEnd(300) : c.$element.focus().trigger(e)
        }))
    }, b.prototype.hide = function (b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one(a.support.transition.end, a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, b.prototype.enforceFocus = function () {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.focus()
        }, this))
    }, b.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function (a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, b.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(), this.backdrop(function () {
            a.removeBackdrop(), a.$element.trigger("hidden.bs.modal")
        })
    }, b.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, b.prototype.backdrop = function (b) {
        var c = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var d = a.support.transition && c;
            if (this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), this.$element.on("click.dismiss.modal", a.proxy(function (a) {
                a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            }, this)), d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            d ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()) : b && b()
    };
    var c = a.fn.modal;
    a.fn.modal = function (c, d) {
        return this.each(function () {
            var e = a(this), f = e.data("bs.modal"), g = a.extend({}, b.DEFAULTS, e.data(), "object" == typeof c && c);
            f || e.data("bs.modal", f = new b(this, g)), "string" == typeof c ? f[c](d) : g.show && f.show(d)
        })
    }, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function () {
        return a.fn.modal = c, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (b) {
        var c = a(this), d = c.attr("href"), e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")),
            f = e.data("modal") ? "toggle" : a.extend({remote: !/#/.test(d) && d}, e.data(), c.data());
        b.preventDefault(), e.modal(f, this).one("hide", function () {
            c.is(":visible") && c.focus()
        })
    }), a(document).on("show.bs.modal", ".modal", function () {
        a(document.body).addClass("modal-open")
    }).on("hidden.bs.modal", ".modal", function () {
        a(document.body).removeClass("modal-open")
    })
}(jQuery), +function (a) {
    "use strict";
    var b = function (a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b)
    };
    b.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, b.prototype.init = function (b, c, d) {
        this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d);
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)); else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focus", i = "hover" == g ? "mouseleave" : "blur";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, b.prototype.getDefaults = function () {
        return b.DEFAULTS
    }, b.prototype.getOptions = function (b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, b.prototype.getDelegateOptions = function () {
        var b = {}, c = this.getDefaults();
        return this._options && a.each(this._options, function (a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, b.prototype.enter = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show()
    }, b.prototype.leave = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide()
    }, b.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(b), b.isDefaultPrevented()) return;
            var c = this.tip();
            this.setContent(), this.options.animation && c.addClass("fade");
            var d = "function" == typeof this.options.placement ? this.options.placement.call(this, c[0], this.$element[0]) : this.options.placement,
                e = /\s?auto?\s?/i, f = e.test(d);
            f && (d = d.replace(e, "") || "top"), c.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(d), this.options.container ? c.appendTo(this.options.container) : c.insertAfter(this.$element);
            var g = this.getPosition(), h = c[0].offsetWidth, i = c[0].offsetHeight;
            if (f) {
                var j = this.$element.parent(), k = d,
                    l = document.documentElement.scrollTop || document.body.scrollTop,
                    m = "body" == this.options.container ? window.innerWidth : j.outerWidth(),
                    n = "body" == this.options.container ? window.innerHeight : j.outerHeight(),
                    o = "body" == this.options.container ? 0 : j.offset().left;
                d = "bottom" == d && g.top + g.height + i - l > n ? "top" : "top" == d && g.top - l - i < 0 ? "bottom" : "right" == d && g.right + h > m ? "left" : "left" == d && g.left - h < o ? "right" : d, c.removeClass(k).addClass(d)
            }
            var p = this.getCalculatedOffset(d, g, h, i);
            this.applyPlacement(p, d), this.$element.trigger("shown.bs." + this.type)
        }
    }, b.prototype.applyPlacement = function (a, b) {
        var c, d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), a.top = a.top + g, a.left = a.left + h, d.offset(a).addClass("in");
        var i = d[0].offsetWidth, j = d[0].offsetHeight;
        if ("top" == b && j != f && (c = !0, a.top = a.top + f - j), /bottom|top/.test(b)) {
            var k = 0;
            a.left < 0 && (k = -2 * a.left, a.left = 0, d.offset(a), i = d[0].offsetWidth, j = d[0].offsetHeight), this.replaceArrow(k - e + i, i, "left")
        } else this.replaceArrow(j - f, j, "top");
        c && d.offset(a)
    }, b.prototype.replaceArrow = function (a, b, c) {
        this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
    }, b.prototype.setContent = function () {
        var a = this.tip(), b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, b.prototype.hide = function () {
        function b() {
            "in" != c.hoverState && d.detach()
        }

        var c = this, d = this.tip(), e = a.Event("hide.bs." + this.type);
        return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, b).emulateTransitionEnd(150) : b(), this.$element.trigger("hidden.bs." + this.type), this)
    }, b.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, b.prototype.hasContent = function () {
        return this.getTitle()
    }, b.prototype.getPosition = function () {
        var b = this.$element[0];
        return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
            width: b.offsetWidth,
            height: b.offsetHeight
        }, this.$element.offset())
    }, b.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {top: b.top + b.height / 2 - d / 2, left: b.left - c} : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, b.prototype.getTitle = function () {
        var a, b = this.$element, c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, b.prototype.tip = function () {
        return this.$tip = this.$tip || a(this.options.template)
    }, b.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, b.prototype.validate = function () {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, b.prototype.enable = function () {
        this.enabled = !0
    }, b.prototype.disable = function () {
        this.enabled = !1
    }, b.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, b.prototype.toggle = function (b) {
        var c = b ? a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, b.prototype.destroy = function () {
        this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var c = a.fn.tooltip;
    a.fn.tooltip = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.tooltip"), f = "object" == typeof c && c;
            e || d.data("bs.tooltip", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.tooltip.Constructor = b, a.fn.tooltip.noConflict = function () {
        return a.fn.tooltip = c, this
    }
}(jQuery), +function (a) {
    "use strict";
    var b = function (a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    b.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), b.prototype.constructor = b, b.prototype.getDefaults = function () {
        return b.DEFAULTS
    }, b.prototype.setContent = function () {
        var a = this.tip(), b = this.getTitle(), c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[this.options.html ? "html" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, b.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, b.prototype.getContent = function () {
        var a = this.$element, b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, b.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, b.prototype.tip = function () {
        return this.$tip || (this.$tip = a(this.options.template)), this.$tip
    };
    var c = a.fn.popover;
    a.fn.popover = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.popover"), f = "object" == typeof c && c;
            e || d.data("bs.popover", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.popover.Constructor = b, a.fn.popover.noConflict = function () {
        return a.fn.popover = c, this
    }
}(jQuery), +function (a) {
    "use strict";

    function b(c, d) {
        var e, f = a.proxy(this.process, this);
        this.$element = a(a(c).is("body") ? window : c), this.$body = a("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", f), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || (e = a(c).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = a([]), this.targets = a([]), this.activeTarget = null, this.refresh(), this.process()
    }

    b.DEFAULTS = {offset: 10}, b.prototype.refresh = function () {
        var b = this.$element[0] == window ? "offset" : "position";
        this.offsets = a([]), this.targets = a([]);
        var c = this;
        this.$body.find(this.selector).map(function () {
            var d = a(this), e = d.data("target") || d.attr("href"), f = /^#\w/.test(e) && a(e);
            return f && f.length && [[f[b]().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), e]] || null
        }).sort(function (a, b) {
            return a[0] - b[0]
        }).each(function () {
            c.offsets.push(this[0]), c.targets.push(this[1])
        })
    }, b.prototype.process = function () {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, d = c - this.$scrollElement.height(),
            e = this.offsets, f = this.targets, g = this.activeTarget;
        if (b >= d) return g != (a = f.last()[0]) && this.activate(a);
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function (b) {
        this.activeTarget = b, a(this.selector).parents(".active").removeClass("active");
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    };
    var c = a.fn.scrollspy;
    a.fn.scrollspy = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.scrollspy"), f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
        return a.fn.scrollspy = c, this
    }, a(window).on("load", function () {
        a('[data-spy="scroll"]').each(function () {
            var b = a(this);
            b.scrollspy(b.data())
        })
    })
}(jQuery), +function (a) {
    "use strict";
    var b = function (b) {
        this.element = a(b)
    };
    b.prototype.show = function () {
        var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a")[0], f = a.Event("show.bs.tab", {relatedTarget: e});
            if (b.trigger(f), !f.isDefaultPrevented()) {
                var g = a(d);
                this.activate(b.parent("li"), c), this.activate(g, g.parent(), function () {
                    b.trigger({type: "shown.bs.tab", relatedTarget: e})
                })
            }
        }
    }, b.prototype.activate = function (b, c, d) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d()
        }

        var f = c.find("> .active"), g = d && a.support.transition && f.hasClass("fade");
        g ? f.one(a.support.transition.end, e).emulateTransitionEnd(150) : e(), f.removeClass("in")
    };
    var c = a.fn.tab;
    a.fn.tab = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.tab");
            e || d.data("bs.tab", e = new b(this)), "string" == typeof c && e[c]()
        })
    }, a.fn.tab.Constructor = b, a.fn.tab.noConflict = function () {
        return a.fn.tab = c, this
    }, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (b) {
        b.preventDefault(), a(this).tab("show")
    })
}(jQuery), +function (a) {
    "use strict";
    var b = function (c, d) {
        this.options = a.extend({}, b.DEFAULTS, d), this.$window = a(window).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(c), this.affixed = this.unpin = null, this.checkPosition()
    };
    b.RESET = "affix affix-top affix-bottom", b.DEFAULTS = {offset: 0}, b.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, b.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var c = a(document).height(), d = this.$window.scrollTop(), e = this.$element.offset(),
                f = this.options.offset, g = f.top, h = f.bottom;
            "object" != typeof f && (h = g = f), "function" == typeof g && (g = f.top()), "function" == typeof h && (h = f.bottom());
            var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= c - h ? "bottom" : null != g && g >= d ? "top" : !1;
            this.affixed !== i && (this.unpin && this.$element.css("top", ""), this.affixed = i, this.unpin = "bottom" == i ? e.top - d : null, this.$element.removeClass(b.RESET).addClass("affix" + (i ? "-" + i : "")), "bottom" == i && this.$element.offset({top: document.body.offsetHeight - h - this.$element.height()}))
        }
    };
    var c = a.fn.affix;
    a.fn.affix = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.affix"), f = "object" == typeof c && c;
            e || d.data("bs.affix", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.affix.Constructor = b, a.fn.affix.noConflict = function () {
        return a.fn.affix = c, this
    }, a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
            var b = a(this), c = b.data();
            c.offset = c.offset || {}, c.offsetBottom && (c.offset.bottom = c.offsetBottom), c.offsetTop && (c.offset.top = c.offsetTop), b.affix(c)
        })
    })
}(jQuery), function (a, b, c) {
    "use strict";

    function d(a) {
        return a && "number" == typeof a.length ? "function" != typeof a.hasOwnProperty && "function" != typeof a.constructor ? !0 : a instanceof ha || Wb && a instanceof Wb || "[object Object]" !== ac.call(a) || "function" == typeof a.callee : !1
    }

    function e(a, b, c) {
        var f;
        if (a) if (x(a)) for (f in a) "prototype" != f && "length" != f && "name" != f && a.hasOwnProperty(f) && b.call(c, a[f], f); else if (a.forEach && a.forEach !== e) a.forEach(b, c); else if (d(a)) for (f = 0; f < a.length; f++) b.call(c, a[f], f); else for (f in a) a.hasOwnProperty(f) && b.call(c, a[f], f);
        return a
    }

    function f(a) {
        var b = [];
        for (var c in a) a.hasOwnProperty(c) && b.push(c);
        return b.sort()
    }

    function g(a, b, c) {
        for (var d = f(a), e = 0; e < d.length; e++) b.call(c, a[d[e]], d[e]);
        return d
    }

    function h(a) {
        return function (b, c) {
            a(c, b)
        }
    }

    function i() {
        for (var a, b = cc.length; b;) {
            if (b--, a = cc[b].charCodeAt(0), 57 == a) return cc[b] = "A", cc.join("");
            if (90 != a) return cc[b] = String.fromCharCode(a + 1), cc.join("");
            cc[b] = "0"
        }
        return cc.unshift("0"), cc.join("")
    }

    function j(a, b) {
        b ? a.$$hashKey = b : delete a.$$hashKey
    }

    function k(a) {
        var b = a.$$hashKey;
        return e(arguments, function (b) {
            b !== a && e(b, function (b, c) {
                a[c] = b
            })
        }), j(a, b), a
    }

    function l(a) {
        return parseInt(a, 10)
    }

    function m(a, b) {
        return k(new (k(function () {
        }, {prototype: a})), b)
    }

    function n() {
    }

    function o(a) {
        return a
    }

    function p(a) {
        return function () {
            return a
        }
    }

    function q(a) {
        return "undefined" == typeof a
    }

    function r(a) {
        return "undefined" != typeof a
    }

    function s(a) {
        return null != a && "object" == typeof a
    }

    function t(a) {
        return "string" == typeof a
    }

    function u(a) {
        return "number" == typeof a
    }

    function v(a) {
        return "[object Date]" == ac.apply(a)
    }

    function w(a) {
        return "[object Array]" == ac.apply(a)
    }

    function x(a) {
        return "function" == typeof a
    }

    function y(a) {
        return "[object RegExp]" == ac.apply(a)
    }

    function z(a) {
        return a && a.document && a.location && a.alert && a.setInterval
    }

    function A(a) {
        return a && a.$evalAsync && a.$watch
    }

    function B(a) {
        return "[object File]" === ac.apply(a)
    }

    function C(a) {
        return a && (a.nodeName || a.bind && a.find)
    }

    function D(a, b, c) {
        var d = [];
        return e(a, function (a, e, f) {
            d.push(b.call(c, a, e, f))
        }), d
    }

    function E(a, b) {
        return -1 != F(a, b)
    }

    function F(a, b) {
        if (a.indexOf) return a.indexOf(b);
        for (var c = 0; c < a.length; c++) if (b === a[c]) return c;
        return -1
    }

    function G(a, b) {
        var c = F(a, b);
        return c >= 0 && a.splice(c, 1), b
    }

    function H(a, b) {
        if (z(a) || A(a)) throw Error("Can't copy Window or Scope");
        if (b) {
            if (a === b) throw Error("Can't copy equivalent objects or arrays");
            if (w(a)) {
                b.length = 0;
                for (var c = 0; c < a.length; c++) b.push(H(a[c]))
            } else {
                var d = b.$$hashKey;
                e(b, function (a, c) {
                    delete b[c]
                });
                for (var f in a) b[f] = H(a[f]);
                j(b, d)
            }
        } else b = a, a && (w(a) ? b = H(a, []) : v(a) ? b = new Date(a.getTime()) : y(a) ? b = new RegExp(a.source) : s(a) && (b = H(a, {})));
        return b
    }

    function I(a, b) {
        b = b || {};
        for (var c in a) a.hasOwnProperty(c) && "$$" !== c.substr(0, 2) && (b[c] = a[c]);
        return b
    }

    function J(a, b) {
        if (a === b) return !0;
        if (null === a || null === b) return !1;
        if (a !== a && b !== b) return !0;
        var d, e, f, g = typeof a, h = typeof b;
        if (g == h && "object" == g) {
            if (!w(a)) {
                if (v(a)) return v(b) && a.getTime() == b.getTime();
                if (y(a) && y(b)) return a.toString() == b.toString();
                if (A(a) || A(b) || z(a) || z(b) || w(b)) return !1;
                f = {};
                for (e in a) if ("$" !== e.charAt(0) && !x(a[e])) {
                    if (!J(a[e], b[e])) return !1;
                    f[e] = !0
                }
                for (e in b) if (!f[e] && "$" !== e.charAt(0) && b[e] !== c && !x(b[e])) return !1;
                return !0
            }
            if (!w(b)) return !1;
            if ((d = a.length) == b.length) {
                for (e = 0; d > e; e++) if (!J(a[e], b[e])) return !1;
                return !0
            }
        }
        return !1
    }

    function K(a, b, c) {
        return a.concat($b.call(b, c))
    }

    function L(a, b) {
        return $b.call(a, b || 0)
    }

    function M(a, b) {
        var c = arguments.length > 2 ? L(arguments, 2) : [];
        return !x(b) || b instanceof RegExp ? b : c.length ? function () {
            return arguments.length ? b.apply(a, c.concat($b.call(arguments, 0))) : b.apply(a, c)
        } : function () {
            return arguments.length ? b.apply(a, arguments) : b.call(a)
        }
    }

    function N(a, d) {
        var e = d;
        return /^\$+/.test(a) ? e = c : z(d) ? e = "$WINDOW" : d && b === d ? e = "$DOCUMENT" : A(d) && (e = "$SCOPE"), e
    }

    function O(a, b) {
        return "undefined" == typeof a ? c : JSON.stringify(a, N, b ? "  " : null)
    }

    function P(a) {
        return t(a) ? JSON.parse(a) : a
    }

    function Q(a) {
        if (a && 0 !== a.length) {
            var b = Rb("" + a);
            a = !("f" == b || "0" == b || "false" == b || "no" == b || "n" == b || "[]" == b)
        } else a = !1;
        return a
    }

    function R(a) {
        a = Vb(a).clone();
        try {
            a.html("")
        } catch (b) {
        }
        var c = 3, d = Vb("<div>").append(a).html();
        try {
            return a[0].nodeType === c ? Rb(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
                return "<" + Rb(b)
            })
        } catch (b) {
            return Rb(d)
        }
    }

    function S(a) {
        try {
            return decodeURIComponent(a)
        } catch (b) {
        }
    }

    function T(a) {
        var b, c, d = {};
        return e((a || "").split("&"), function (a) {
            a && (b = a.split("="), c = S(b[0]), r(c) && (d[c] = r(b[1]) ? S(b[1]) : !0))
        }), d
    }

    function U(a) {
        var b = [];
        return e(a, function (a, c) {
            b.push(W(c, !0) + (a === !0 ? "" : "=" + W(a, !0)))
        }), b.length ? b.join("&") : ""
    }

    function V(a) {
        return W(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function W(a, b) {
        return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+")
    }

    function X(a, c) {
        function d(a) {
            a && h.push(a)
        }

        var f, g, h = [a], i = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"], j = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        e(i, function (c) {
            i[c] = !0, d(b.getElementById(c)), c = c.replace(":", "\\:"), a.querySelectorAll && (e(a.querySelectorAll("." + c), d), e(a.querySelectorAll("." + c + "\\:"), d), e(a.querySelectorAll("[" + c + "]"), d))
        }), e(h, function (a) {
            if (!f) {
                var b = " " + a.className + " ", c = j.exec(b);
                c ? (f = a, g = (c[2] || "").replace(/\s+/g, ",")) : e(a.attributes, function (b) {
                    !f && i[b.name] && (f = a, g = b.value)
                })
            }
        }), f && c(f, g ? [g] : [])
    }

    function Y(b, c) {
        var d = function () {
            b = Vb(b), c = c || [], c.unshift(["$provide", function (a) {
                a.value("$rootElement", b)
            }]), c.unshift("ng");
            var a = Aa(c);
            return a.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, c, d) {
                a.$apply(function () {
                    b.data("$injector", d), c(b)(a)
                })
            }]), a
        }, f = /^NG_DEFER_BOOTSTRAP!/;
        return a && !f.test(a.name) ? d() : (a.name = a.name.replace(f, ""), void (bc.resumeBootstrap = function (a) {
            e(a, function (a) {
                c.push(a)
            }), d()
        }))
    }

    function Z(a, b) {
        return b = b || "_", a.replace(ec, function (a, c) {
            return (c ? b : "") + a.toLowerCase()
        })
    }

    function $() {
        Wb = a.jQuery, Wb ? (Vb = Wb, k(Wb.fn, {
            scope: nc.scope,
            controller: nc.controller,
            injector: nc.injector,
            inheritedData: nc.inheritedData
        }), ga("remove", !0, !0, !1), ga("empty", !1, !1, !1), ga("html", !1, !1, !0)) : Vb = ha, bc.element = Vb
    }

    function _(a, b, c) {
        if (!a) throw new Error("Argument '" + (b || "?") + "' is " + (c || "required"));
        return a
    }

    function aa(a, b, c) {
        return c && w(a) && (a = a[a.length - 1]), _(x(a), b, "not a function, got " + (a && "object" == typeof a ? a.constructor.name || "Object" : typeof a)), a
    }

    function ba(a, b, c) {
        if (!b) return a;
        for (var d, e = b.split("."), f = a, g = e.length, h = 0; g > h; h++) d = e[h], a && (a = (f = a)[d]);
        return !c && x(a) ? M(f, a) : a
    }

    function ca(a) {
        function b(a, b, c) {
            return a[b] || (a[b] = c())
        }

        return b(b(a, "angular", Object), "module", function () {
            var a = {};
            return function (c, d, e) {
                return d && a.hasOwnProperty(c) && (a[c] = null), b(a, c, function () {
                    function a(a, c, d) {
                        return function () {
                            return b[d || "push"]([a, c, arguments]), h
                        }
                    }

                    if (!d) throw Error("No module: " + c);
                    var b = [], f = [], g = a("$injector", "invoke"), h = {
                        _invokeQueue: b,
                        _runBlocks: f,
                        requires: d,
                        name: c,
                        provider: a("$provide", "provider"),
                        factory: a("$provide", "factory"),
                        service: a("$provide", "service"),
                        value: a("$provide", "value"),
                        constant: a("$provide", "constant", "unshift"),
                        filter: a("$filterProvider", "register"),
                        controller: a("$controllerProvider", "register"),
                        directive: a("$compileProvider", "directive"),
                        config: g,
                        run: function (a) {
                            return f.push(a), this
                        }
                    };
                    return e && g(e), h
                })
            }
        })
    }

    function da(b) {
        k(b, {
            bootstrap: Y,
            copy: H,
            extend: k,
            equals: J,
            element: Vb,
            forEach: e,
            injector: Aa,
            noop: n,
            bind: M,
            toJson: O,
            fromJson: P,
            identity: o,
            isUndefined: q,
            isDefined: r,
            isString: t,
            isFunction: x,
            isObject: s,
            isNumber: u,
            isElement: C,
            isArray: w,
            version: fc,
            isDate: v,
            lowercase: Rb,
            uppercase: Sb,
            callbacks: {counter: 0}
        }), Xb = ca(a);
        try {
            Xb("ngLocale")
        } catch (c) {
            Xb("ngLocale", []).provider("$locale", rb)
        }
        Xb("ng", ["ngLocale"], ["$provide", function (a) {
            a.provider("$compile", Ga).directive({
                a: Kc,
                input: Uc,
                textarea: Uc,
                form: Oc,
                script: Bd,
                select: Dd,
                style: Fd,
                option: Ed,
                ngBind: ed,
                ngBindHtmlUnsafe: gd,
                ngBindTemplate: fd,
                ngClass: hd,
                ngClassEven: jd,
                ngClassOdd: id,
                ngCsp: md,
                ngCloak: kd,
                ngController: ld,
                ngForm: Pc,
                ngHide: ud,
                ngInclude: od,
                ngInit: pd,
                ngNonBindable: qd,
                ngPluralize: rd,
                ngRepeat: sd,
                ngShow: td,
                ngStyle: vd,
                ngSwitch: wd,
                ngSwitchWhen: xd,
                ngSwitchDefault: yd,
                ngOptions: Cd,
                ngView: Ad,
                ngTransclude: zd,
                ngModel: $c,
                ngList: bd,
                ngChange: _c,
                required: ad,
                ngRequired: ad,
                ngValue: dd
            }).directive(Lc).directive(nd), a.provider({
                $anchorScroll: Ba,
                $browser: Da,
                $cacheFactory: Ea,
                $controller: Ia,
                $document: Ja,
                $exceptionHandler: Ka,
                $filter: tb,
                $interpolate: La,
                $http: ob,
                $httpBackend: pb,
                $location: Xa,
                $log: Ya,
                $parse: cb,
                $route: fb,
                $routeParams: gb,
                $rootScope: hb,
                $q: db,
                $sniffer: ib,
                $templateCache: Fa,
                $timeout: sb,
                $window: jb
            })
        }])
    }

    function ea() {
        return ++ic
    }

    function fa(a) {
        return a.replace(lc, function (a, b, c, d) {
            return d ? c.toUpperCase() : c
        }).replace(mc, "Moz$1")
    }

    function ga(a, b, c, d) {
        function e(a) {
            var e, g, h, i, j, k, l, m = c && a ? [this.filter(a)] : [this], n = b;
            if (!d || null != a) for (; m.length;) for (e = m.shift(), g = 0, h = e.length; h > g; g++) for (i = Vb(e[g]), n ? i.triggerHandler("$destroy") : n = !n, j = 0, k = (l = i.children()).length; k > j; j++) m.push(Wb(l[j]));
            return f.apply(this, arguments)
        }

        var f = Wb.fn[a];
        f = f.$original || f, e.$original = f, Wb.fn[a] = e
    }

    function ha(a) {
        if (a instanceof ha) return a;
        if (!(this instanceof ha)) {
            if (t(a) && "<" != a.charAt(0)) throw Error("selectors not implemented");
            return new ha(a)
        }
        if (t(a)) {
            var c = b.createElement("div");
            c.innerHTML = "<div>&#160;</div>" + a, c.removeChild(c.firstChild), ra(this, c.childNodes), this.remove()
        } else ra(this, a)
    }

    function ia(a) {
        return a.cloneNode(!0)
    }

    function ja(a) {
        la(a);
        for (var b = 0, c = a.childNodes || []; b < c.length; b++) ja(c[b])
    }

    function ka(a, b, c) {
        var d = ma(a, "events"), f = ma(a, "handle");
        f && (q(b) ? e(d, function (b, c) {
            kc(a, c, b), delete d[c]
        }) : q(c) ? (kc(a, b, d[b]), delete d[b]) : G(d[b] || [], c))
    }

    function la(a) {
        var b = a[hc], d = gc[b];
        d && (d.handle && (d.events.$destroy && d.handle({}, "$destroy"), ka(a)), delete gc[b], a[hc] = c)
    }

    function ma(a, b, c) {
        var d = a[hc], e = gc[d || -1];
        return r(c) ? (e || (a[hc] = d = ea(), e = gc[d] = {}), void (e[b] = c)) : e && e[b]
    }

    function na(a, b, c) {
        var d = ma(a, "data"), e = r(c), f = !e && r(b), g = f && !s(b);
        if (d || g || ma(a, "data", d = {}), e) d[b] = c; else {
            if (!f) return d;
            if (g) return d && d[b];
            k(d, b)
        }
    }

    function oa(a, b) {
        return (" " + a.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") > -1
    }

    function pa(a, b) {
        b && e(b.split(" "), function (b) {
            a.className = dc((" " + a.className + " ").replace(/[\n\t]/g, " ").replace(" " + dc(b) + " ", " "))
        })
    }

    function qa(a, b) {
        b && e(b.split(" "), function (b) {
            oa(a, b) || (a.className = dc(a.className + " " + dc(b)))
        })
    }

    function ra(a, b) {
        if (b) {
            b = b.nodeName || !r(b.length) || z(b) ? [b] : b;
            for (var c = 0; c < b.length; c++) a.push(b[c])
        }
    }

    function sa(a, b) {
        return ta(a, "$" + (b || "ngController") + "Controller")
    }

    function ta(a, b, c) {
        for (a = Vb(a), 9 == a[0].nodeType && (a = a.find("html")); a.length;) {
            if (c = a.data(b)) return c;
            a = a.parent()
        }
    }

    function ua(a, b) {
        var c = oc[b.toLowerCase()];
        return c && pc[a.nodeName] && c
    }

    function va(a, c) {
        var d = function (d, f) {
            if (d.preventDefault || (d.preventDefault = function () {
                d.returnValue = !1
            }), d.stopPropagation || (d.stopPropagation = function () {
                d.cancelBubble = !0
            }), d.target || (d.target = d.srcElement || b), q(d.defaultPrevented)) {
                var g = d.preventDefault;
                d.preventDefault = function () {
                    d.defaultPrevented = !0, g.call(d)
                }, d.defaultPrevented = !1
            }
            d.isDefaultPrevented = function () {
                return d.defaultPrevented
            }, e(c[f || d.type], function (b) {
                b.call(a, d)
            }), 8 >= Zb ? (d.preventDefault = null, d.stopPropagation = null, d.isDefaultPrevented = null) : (delete d.preventDefault, delete d.stopPropagation, delete d.isDefaultPrevented)
        };
        return d.elem = a, d
    }

    function wa(a) {
        var b, d = typeof a;
        return "object" == d && null !== a ? "function" == typeof (b = a.$$hashKey) ? b = a.$$hashKey() : b === c && (b = a.$$hashKey = i()) : b = a, d + ":" + b
    }

    function xa(a) {
        e(a, this.put, this)
    }

    function ya() {
    }

    function za(a) {
        var b, c, d, f;
        return "function" == typeof a ? (b = a.$inject) || (b = [], c = a.toString().replace(tc, ""), d = c.match(qc), e(d[1].split(rc), function (a) {
            a.replace(sc, function (a, c, d) {
                b.push(d)
            })
        }), a.$inject = b) : w(a) ? (f = a.length - 1, aa(a[f], "fn"), b = a.slice(0, f)) : aa(a, "fn", !0), b
    }

    function Aa(a) {
        function b(a) {
            return function (b, c) {
                return s(b) ? void e(b, h(a)) : a(b, c)
            }
        }

        function c(a, b) {
            if ((x(b) || w(b)) && (b = v.instantiate(b)), !b.$get) throw Error("Provider " + a + " must define $get factory method.");
            return u[a + o] = b
        }

        function d(a, b) {
            return c(a, {$get: b})
        }

        function f(a, b) {
            return d(a, ["$injector", function (a) {
                return a.instantiate(b)
            }])
        }

        function g(a, b) {
            return d(a, p(b))
        }

        function i(a, b) {
            u[a] = b, y[a] = b
        }

        function j(a, b) {
            var c = v.get(a + o), d = c.$get;
            c.$get = function () {
                var a = z.invoke(d, c);
                return z.invoke(b, null, {$delegate: a})
            }
        }

        function k(a) {
            var b = [];
            return e(a, function (a) {
                if (!r.get(a)) if (r.put(a, !0), t(a)) {
                    var c = Xb(a);
                    b = b.concat(k(c.requires)).concat(c._runBlocks);
                    try {
                        for (var d = c._invokeQueue, e = 0, f = d.length; f > e; e++) {
                            var g = d[e], h = "$injector" == g[0] ? v : v.get(g[0]);
                            h[g[1]].apply(h, g[2])
                        }
                    } catch (i) {
                        throw i.message && (i.message += " from " + a), i
                    }
                } else if (x(a)) try {
                    b.push(v.invoke(a))
                } catch (i) {
                    throw i.message && (i.message += " from " + a), i
                } else if (w(a)) try {
                    b.push(v.invoke(a))
                } catch (i) {
                    throw i.message && (i.message += " from " + String(a[a.length - 1])),
                        i
                } else aa(a, "module")
            }), b
        }

        function l(a, b) {
            function c(c) {
                if ("string" != typeof c) throw Error("Service name expected");
                if (a.hasOwnProperty(c)) {
                    if (a[c] === m) throw Error("Circular dependency: " + q.join(" <- "));
                    return a[c]
                }
                try {
                    return q.unshift(c), a[c] = m, a[c] = b(c)
                } finally {
                    q.shift()
                }
            }

            function d(a, b, d) {
                var e, f, g, h = [], i = za(a);
                for (f = 0, e = i.length; e > f; f++) g = i[f], h.push(d && d.hasOwnProperty(g) ? d[g] : c(g));
                switch (a.$inject || (a = a[e]), b ? -1 : h.length) {
                    case 0:
                        return a();
                    case 1:
                        return a(h[0]);
                    case 2:
                        return a(h[0], h[1]);
                    case 3:
                        return a(h[0], h[1], h[2]);
                    case 4:
                        return a(h[0], h[1], h[2], h[3]);
                    case 5:
                        return a(h[0], h[1], h[2], h[3], h[4]);
                    case 6:
                        return a(h[0], h[1], h[2], h[3], h[4], h[5]);
                    case 7:
                        return a(h[0], h[1], h[2], h[3], h[4], h[5], h[6]);
                    case 8:
                        return a(h[0], h[1], h[2], h[3], h[4], h[5], h[6], h[7]);
                    case 9:
                        return a(h[0], h[1], h[2], h[3], h[4], h[5], h[6], h[7], h[8]);
                    case 10:
                        return a(h[0], h[1], h[2], h[3], h[4], h[5], h[6], h[7], h[8], h[9]);
                    default:
                        return a.apply(b, h)
                }
            }

            function e(a, b) {
                var c, e, f = function () {
                };
                return f.prototype = (w(a) ? a[a.length - 1] : a).prototype, c = new f, e = d(a, c, b), s(e) ? e : c
            }

            return {invoke: d, instantiate: e, get: c, annotate: za}
        }

        var m = {}, o = "Provider", q = [], r = new xa,
            u = {$provide: {provider: b(c), factory: b(d), service: b(f), value: b(g), constant: b(i), decorator: j}},
            v = l(u, function () {
                throw Error("Unknown provider: " + q.join(" <- "))
            }), y = {}, z = y.$injector = l(y, function (a) {
                var b = v.get(a + o);
                return z.invoke(b.$get, b)
            });
        return e(k(a), function (a) {
            z.invoke(a || n)
        }), z
    }

    function Ba() {
        var a = !0;
        this.disableAutoScrolling = function () {
            a = !1
        }, this.$get = ["$window", "$location", "$rootScope", function (b, c, d) {
            function f(a) {
                var b = null;
                return e(a, function (a) {
                    b || "a" !== Rb(a.nodeName) || (b = a)
                }), b
            }

            function g() {
                var a, d = c.hash();
                d ? (a = h.getElementById(d)) ? a.scrollIntoView() : (a = f(h.getElementsByName(d))) ? a.scrollIntoView() : "top" === d && b.scrollTo(0, 0) : b.scrollTo(0, 0)
            }

            var h = b.document;
            return a && d.$watch(function () {
                return c.hash()
            }, function () {
                d.$evalAsync(g)
            }), g
        }]
    }

    function Ca(a, b, d, f) {
        function g(a) {
            try {
                a.apply(null, L(arguments, 1))
            } finally {
                if (s--, 0 === s) for (; u.length;) try {
                    u.pop()()
                } catch (b) {
                    d.error(b)
                }
            }
        }

        function h(a, b) {
            !function c() {
                e(w, function (a) {
                    a()
                }), v = b(c, a)
            }()
        }

        function i() {
            x != j.url() && (x = j.url(), e(A, function (a) {
                a(j.url())
            }))
        }

        var j = this, k = b[0], l = a.location, m = a.history, o = a.setTimeout, p = a.clearTimeout, r = {};
        j.isMock = !1;
        var s = 0, u = [];
        j.$$completeOutstandingRequest = g, j.$$incOutstandingRequestCount = function () {
            s++
        }, j.notifyWhenNoOutstandingRequests = function (a) {
            e(w, function (a) {
                a()
            }), 0 === s ? a() : u.push(a)
        };
        var v, w = [];
        j.addPollFn = function (a) {
            return q(v) && h(100, o), w.push(a), a
        };
        var x = l.href, y = b.find("base"), z = null;
        j.url = function (a, b) {
            if (a) {
                if (x == a) return;
                return x = a, f.history ? b ? m.replaceState(null, "", a) : (m.pushState(null, "", a), y.attr("href", y.attr("href"))) : b ? (l.replace(a), z = a) : (l.href = a, z = null), j
            }
            return z || l.href.replace(/%27/g, "'")
        };
        var A = [], B = !1;
        j.onUrlChange = function (b) {
            return B || (f.history && Vb(a).bind("popstate", i), f.hashchange ? Vb(a).bind("hashchange", i) : j.addPollFn(i), B = !0), A.push(b), b
        }, j.baseHref = function () {
            var a = y.attr("href");
            return a ? a.replace(/^https?\:\/\/[^\/]*/, "") : ""
        };
        var C = {}, D = "", E = j.baseHref();
        j.cookies = function (a, b) {
            var e, f, g, h, i;
            if (!a) {
                if (k.cookie !== D) for (D = k.cookie, f = D.split("; "), C = {}, h = 0; h < f.length; h++) if (g = f[h], i = g.indexOf("="), i > 0) {
                    var a = unescape(g.substring(0, i));
                    C[a] === c && (C[a] = unescape(g.substring(i + 1)))
                }
                return C
            }
            b === c ? k.cookie = escape(a) + "=;path=" + E + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : t(b) && (e = (k.cookie = escape(a) + "=" + escape(b) + ";path=" + E).length + 1, e > 4096 && d.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + e + " > 4096 bytes)!"))
        }, j.defer = function (a, b) {
            var c;
            return s++, c = o(function () {
                delete r[c], g(a)
            }, b || 0), r[c] = !0, c
        }, j.defer.cancel = function (a) {
            return r[a] ? (delete r[a], p(a), g(n), !0) : !1
        }
    }

    function Da() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function (a, b, c, d) {
            return new Ca(a, d, b, c)
        }]
    }

    function Ea() {
        this.$get = function () {
            function a(a, c) {
                function d(a) {
                    a != l && (m ? m == a && (m = a.n) : m = a, e(a.n, a.p), e(a, l), l = a, l.n = null)
                }

                function e(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a))
                }

                if (a in b) throw Error("cacheId " + a + " taken");
                var f = 0, g = k({}, c, {id: a}), h = {}, i = c && c.capacity || Number.MAX_VALUE, j = {}, l = null,
                    m = null;
                return b[a] = {
                    put: function (a, b) {
                        var c = j[a] || (j[a] = {key: a});
                        d(c), q(b) || (a in h || f++, h[a] = b, f > i && this.remove(m.key))
                    }, get: function (a) {
                        var b = j[a];
                        if (b) return d(b), h[a]
                    }, remove: function (a) {
                        var b = j[a];
                        b && (b == l && (l = b.p), b == m && (m = b.n), e(b.n, b.p), delete j[a], delete h[a], f--)
                    }, removeAll: function () {
                        h = {}, f = 0, j = {}, l = m = null
                    }, destroy: function () {
                        h = null, g = null, j = null, delete b[a]
                    }, info: function () {
                        return k({}, g, {size: f})
                    }
                }
            }

            var b = {};
            return a.info = function () {
                var a = {};
                return e(b, function (b, c) {
                    a[c] = b.info()
                }), a
            }, a.get = function (a) {
                return b[a]
            }, a
        }
    }

    function Fa() {
        this.$get = ["$cacheFactory", function (a) {
            return a("templates")
        }]
    }

    function Ga(a) {
        var d = {}, f = "Directive", g = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/, i = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/,
            j = "Template must have exactly one root element. was: ", l = /^\s*(https?|ftp|mailto|file):/;
        this.directive = function m(b, c) {
            return t(b) ? (_(c, "directive"), d.hasOwnProperty(b) || (d[b] = [], a.factory(b + f, ["$injector", "$exceptionHandler", function (a, c) {
                var f = [];
                return e(d[b], function (d) {
                    try {
                        var e = a.invoke(d);
                        x(e) ? e = {compile: p(e)} : !e.compile && e.link && (e.compile = p(e.link)), e.priority = e.priority || 0, e.name = e.name || b, e.require = e.require || e.controller && e.name, e.restrict = e.restrict || "A", f.push(e)
                    } catch (g) {
                        c(g)
                    }
                }), f
            }])), d[b].push(c)) : e(b, h(m)), this
        }, this.urlSanitizationWhitelist = function (a) {
            return r(a) ? (l = a, this) : l
        }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", function (a, h, m, n, q, r, u, v, y) {
            function z(a, b, c) {
                a instanceof Vb || (a = Vb(a)), e(a, function (b, c) {
                    3 == b.nodeType && b.nodeValue.match(/\S+/) && (a[c] = Vb(b).wrap("<span></span>").parent()[0])
                });
                var d = B(a, b, a, c);
                return function (b, c) {
                    _(b, "scope");
                    for (var e = c ? nc.clone.call(a) : a, f = 0, g = e.length; g > f; f++) {
                        var h = e[f];
                        (1 == h.nodeType || 9 == h.nodeType) && e.eq(f).data("$scope", b)
                    }
                    return A(e, "ng-scope"), c && c(e, b), d && d(b, e, e), e
                }
            }

            function A(a, b) {
                try {
                    a.addClass(b)
                } catch (c) {
                }
            }

            function B(a, b, d, e) {
                function f(a, d, e, f) {
                    var g, h, i, j, k, m, n, o, p = [];
                    for (m = 0, n = d.length; n > m; m++) p.push(d[m]);
                    for (m = 0, o = 0, n = l.length; n > m; o++) i = p[o], g = l[m++], h = l[m++], g ? (g.scope ? (j = a.$new(s(g.scope)), Vb(i).data("$scope", j)) : j = a, k = g.transclude, k || !f && b ? g(h, j, i, e, function (b) {
                        return function (c) {
                            var d = a.$new();
                            return d.$$transcluded = !0, b(d, c).bind("$destroy", M(d, d.$destroy))
                        }
                    }(k || b)) : g(h, j, i, c, f)) : h && h(a, i.childNodes, c, f)
                }

                for (var g, h, i, j, k, l = [], m = 0; m < a.length; m++) j = new O, i = C(a[m], [], j, e), g = i.length ? D(i, a[m], j, b, d) : null, h = g && g.terminal || !a[m].childNodes || !a[m].childNodes.length ? null : B(a[m].childNodes, g ? g.transclude : b), l.push(g), l.push(h), k = k || g || h;
                return k ? f : null
            }

            function C(a, b, c, d) {
                var e, f, h = a.nodeType, j = c.$attr;
                switch (h) {
                    case 1:
                        E(b, Ha(Yb(a).toLowerCase()), "E", d);
                        for (var k, l, m, n, o = a.attributes, p = 0, q = o && o.length; q > p; p++) k = o[p], (!Zb || Zb >= 8 || k.specified) && (l = k.name, m = Ha(l.toLowerCase()), j[m] = l, c[m] = n = dc(Zb && "href" == l ? decodeURIComponent(a.getAttribute(l, 2)) : k.value), ua(a, m) && (c[m] = !0), L(a, b, n, m), E(b, m, "A", d));
                        if (f = a.className, t(f) && "" !== f) for (; e = i.exec(f);) m = Ha(e[2]), E(b, m, "C", d) && (c[m] = dc(e[3])), f = f.substr(e.index + e[0].length);
                        break;
                    case 3:
                        K(b, a.nodeValue);
                        break;
                    case 8:
                        try {
                            e = g.exec(a.nodeValue), e && (m = Ha(e[1]), E(b, m, "M", d) && (c[m] = dc(e[2])))
                        } catch (r) {
                        }
                }
                return b.sort(H), b
            }

            function D(a, d, f, g, h) {
                function i(a, b) {
                    a && (a.require = n.require, E.push(a)), b && (b.require = n.require, H.push(b))
                }

                function k(a, b) {
                    var c, d = "data", f = !1;
                    if (t(a)) {
                        for (; "^" == (c = a.charAt(0)) || "?" == c;) a = a.substr(1), "^" == c && (d = "inheritedData"), f = f || "?" == c;
                        if (c = b[d]("$" + a + "Controller"), !c && !f) throw Error("No controller: " + a);
                        return c
                    }
                    return w(a) && (c = [], e(a, function (a) {
                        c.push(k(a, b))
                    })), c
                }

                function l(a, b, g, h, i) {
                    var j, l, n, o, p, q;
                    if (j = d === g ? f : I(f, new O(Vb(g), f.$attr)), l = j.$$element, L) {
                        var s = /^\s*([@=&])\s*(\w*)\s*$/, t = b.$parent || b;
                        e(L.scope, function (a, c) {
                            var d, e, f, g = a.match(s) || [], h = g[2] || c, i = g[1];
                            switch (b.$$isolateBindings[c] = i + h, i) {
                                case"@":
                                    j.$observe(h, function (a) {
                                        b[c] = a
                                    }), j.$$observers[h].$$scope = t;
                                    break;
                                case"=":
                                    e = r(j[h]), f = e.assign || function () {
                                        throw d = b[c] = e(t), Error(uc + j[h] + " (directive: " + L.name + ")")
                                    }, d = b[c] = e(t), b.$watch(function () {
                                        var a = e(t);
                                        return a !== b[c] && (a !== d ? d = b[c] = a : f(t, a = d = b[c])), a
                                    });
                                    break;
                                case"&":
                                    e = r(j[h]), b[c] = function (a) {
                                        return e(t, a)
                                    };
                                    break;
                                default:
                                    throw Error("Invalid isolate scope definition for directive " + L.name + ": " + a)
                            }
                        })
                    }
                    for (v && e(v, function (a) {
                        var c = {$scope: b, $element: l, $attrs: j, $transclude: i};
                        q = a.controller, "@" == q && (q = j[a.name]), l.data("$" + a.name + "Controller", u(q, c))
                    }), n = 0, o = E.length; o > n; n++) try {
                        p = E[n], p(b, l, j, p.require && k(p.require, l))
                    } catch (w) {
                        m(w, R(l))
                    }
                    for (a && a(b, g.childNodes, c, i), n = 0, o = H.length; o > n; n++) try {
                        p = H[n], p(b, l, j, p.require && k(p.require, l))
                    } catch (w) {
                        m(w, R(l))
                    }
                }

                for (var n, o, p, q, v, y, B, D = -Number.MAX_VALUE, E = [], H = [], K = null, L = null, M = null, P = f.$$element = Vb(d), Q = g, S = 0, U = a.length; U > S && (n = a[S], p = c, !(D > n.priority)); S++) {
                    if ((B = n.scope) && (J("isolated scope", L, n, P), s(B) && (A(P, "ng-isolate-scope"), L = n), A(P, "ng-scope"), K = K || n), o = n.name, (B = n.controller) && (v = v || {}, J("'" + o + "' controller", v[o], n, P), v[o] = n), (B = n.transclude) && (J("transclusion", q, n, P), q = n, D = n.priority, "element" == B ? (p = Vb(d), P = f.$$element = Vb(b.createComment(" " + o + ": " + f[o] + " ")), d = P[0], N(h, Vb(p[0]), d), Q = z(p, g, D)) : (p = Vb(ia(d)).contents(), P.html(""), Q = z(p, g))), B = n.template) if (J("template", M, n, P), M = n, B = T(B), n.replace) {
                        if (p = Vb("<div>" + dc(B) + "</div>").contents(), d = p[0], 1 != p.length || 1 !== d.nodeType) throw new Error(j + B);
                        N(h, P, d);
                        var V = {$attr: {}};
                        a = a.concat(C(d, a.splice(S + 1, a.length - (S + 1)), V)), F(f, V), U = a.length
                    } else P.html(B);
                    if (n.templateUrl) J("template", M, n, P), M = n, l = G(a.splice(S, a.length - S), l, P, f, h, n.replace, Q), U = a.length; else if (n.compile) try {
                        y = n.compile(P, f, Q), x(y) ? i(null, y) : y && i(y.pre, y.post)
                    } catch (W) {
                        m(W, R(P))
                    }
                    n.terminal && (l.terminal = !0, D = Math.max(D, n.priority))
                }
                return l.scope = K && K.scope, l.transclude = q && Q, l
            }

            function E(b, e, g, h) {
                var i = !1;
                if (d.hasOwnProperty(e)) for (var j, k = a.get(e + f), l = 0, n = k.length; n > l; l++) try {
                    j = k[l], (h === c || h > j.priority) && -1 != j.restrict.indexOf(g) && (b.push(j), i = !0)
                } catch (o) {
                    m(o)
                }
                return i
            }

            function F(a, b) {
                var c = b.$attr, d = a.$attr, f = a.$$element;
                e(a, function (d, e) {
                    "$" != e.charAt(0) && (b[e] && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                }), e(b, function (b, e) {
                    "class" == e ? (A(f, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == e ? f.attr("style", f.attr("style") + ";" + b) : "$" == e.charAt(0) || a.hasOwnProperty(e) || (a[e] = b, d[e] = c[e])
                })
            }

            function G(a, b, c, d, e, f, g) {
                var h, i, l = [], m = c[0], o = a.shift(),
                    p = k({}, o, {controller: null, templateUrl: null, transclude: null, scope: null});
                return c.html(""), n.get(o.templateUrl, {cache: q}).success(function (k) {
                    var n, o, q;
                    if (k = T(k), f) {
                        if (q = Vb("<div>" + dc(k) + "</div>").contents(), n = q[0], 1 != q.length || 1 !== n.nodeType) throw new Error(j + k);
                        o = {$attr: {}}, N(e, c, n), C(n, a, o), F(d, o)
                    } else n = m, c.html(k);
                    for (a.unshift(p), h = D(a, n, d, g), i = B(c[0].childNodes, g); l.length;) {
                        var r = l.pop(), s = l.pop(), t = l.pop(), u = l.pop(), v = n;
                        t !== m && (v = ia(n), N(s, Vb(t), v)), h(function () {
                            b(i, u, v, e, r)
                        }, u, v, e, r)
                    }
                    l = null
                }).error(function (a, b, c, d) {
                    throw Error("Failed to load template: " + d.url)
                }), function (a, c, d, e, f) {
                    l ? (l.push(c), l.push(d), l.push(e), l.push(f)) : h(function () {
                        b(i, c, d, e, f)
                    }, c, d, e, f)
                }
            }

            function H(a, b) {
                return b.priority - a.priority
            }

            function J(a, b, c, d) {
                if (b) throw Error("Multiple directives [" + b.name + ", " + c.name + "] asking for " + a + " on: " + R(d))
            }

            function K(a, b) {
                var c = h(b, !0);
                c && a.push({
                    priority: 0, compile: p(function (a, b) {
                        var d = b.parent(), e = d.data("$binding") || [];
                        e.push(c), A(d.data("$binding", e), "ng-binding"), a.$watch(c, function (a) {
                            b[0].nodeValue = a
                        })
                    })
                })
            }

            function L(a, b, d, e) {
                var f = h(d, !0);
                f && b.push({
                    priority: 100, compile: p(function (a, b, d) {
                        var g = d.$$observers || (d.$$observers = {});
                        "class" === e && (f = h(d[e], !0)), d[e] = c, (g[e] || (g[e] = [])).$$inter = !0, (d.$$observers && d.$$observers[e].$$scope || a).$watch(f, function (a) {
                            d.$set(e, a)
                        })
                    })
                })
            }

            function N(a, b, c) {
                var d, e, f = b[0], g = f.parentNode;
                if (a) for (d = 0, e = a.length; e > d; d++) if (a[d] == f) {
                    a[d] = c;
                    break
                }
                g && g.replaceChild(c, f), c[Vb.expando] = f[Vb.expando], b[0] = c
            }

            var O = function (a, b) {
                this.$$element = a, this.$attr = b || {}
            };
            O.prototype = {
                $normalize: Ha, $set: function (a, b, d, f) {
                    var g, h = ua(this.$$element[0], a), i = this.$$observers;
                    h && (this.$$element.prop(a, b), f = h), this[a] = b, f ? this.$attr[a] = f : (f = this.$attr[a], f || (this.$attr[a] = f = Z(a, "-"))), "A" === Yb(this.$$element[0]) && "href" === a && (P.setAttribute("href", b), g = P.href, "" === g || g.match(l) || (this[a] = b = "unsafe:" + g)), d !== !1 && (null === b || b === c ? this.$$element.removeAttr(f) : this.$$element.attr(f, b)), i && e(i[a], function (a) {
                        try {
                            a(b)
                        } catch (c) {
                            m(c)
                        }
                    })
                }, $observe: function (a, b) {
                    var c = this, d = c.$$observers || (c.$$observers = {}), e = d[a] || (d[a] = []);
                    return e.push(b), v.$evalAsync(function () {
                        e.$$inter || b(c[a])
                    }), b
                }
            };
            var P = y[0].createElement("a"), Q = h.startSymbol(), S = h.endSymbol(),
                T = "{{" == Q || "}}" == S ? o : function (a) {
                    return a.replace(/\{\{/g, Q).replace(/}}/g, S)
                };
            return z
        }]
    }

    function Ha(a) {
        return fa(a.replace(vc, ""))
    }

    function Ia() {
        var a = {};
        this.register = function (b, c) {
            s(b) ? k(a, b) : a[b] = c
        }, this.$get = ["$injector", "$window", function (b, c) {
            return function (d, e) {
                if (t(d)) {
                    var f = d;
                    d = a.hasOwnProperty(f) ? a[f] : ba(e.$scope, f, !0) || ba(c, f, !0), aa(d, f, !0)
                }
                return b.instantiate(d, e)
            }
        }]
    }

    function Ja() {
        this.$get = ["$window", function (a) {
            return Vb(a.document)
        }]
    }

    function Ka() {
        this.$get = ["$log", function (a) {
            return function (b, c) {
                a.error.apply(a, arguments)
            }
        }]
    }

    function La() {
        var a = "{{", b = "}}";
        this.startSymbol = function (b) {
            return b ? (a = b, this) : a
        }, this.endSymbol = function (a) {
            return a ? (b = a, this) : b
        }, this.$get = ["$parse", function (d) {
            function e(e, h) {
                for (var i, j, k, l, m = 0, n = [], o = e.length, p = !1, q = []; o > m;) -1 != (i = e.indexOf(a, m)) && -1 != (j = e.indexOf(b, i + f)) ? (m != i && n.push(e.substring(m, i)), n.push(k = d(l = e.substring(i + f, j))), k.exp = l, m = j + g, p = !0) : (m != o && n.push(e.substring(m)), m = o);
                return (o = n.length) || (n.push(""), o = 1), !h || p ? (q.length = o, k = function (a) {
                    for (var b, d = 0, e = o; e > d; d++) "function" == typeof (b = n[d]) && (b = b(a), null == b || b == c ? b = "" : "string" != typeof b && (b = O(b))), q[d] = b;
                    return q.join("")
                }, k.exp = e, k.parts = n, k) : void 0
            }

            var f = a.length, g = b.length;
            return e.startSymbol = function () {
                return a
            }, e.endSymbol = function () {
                return b
            }, e
        }]
    }

    function Ma(a) {
        for (var b = a.split("/"), c = b.length; c--;) b[c] = V(b[c]);
        return b.join("/")
    }

    function Na(a, b) {
        var c = wc.exec(a);
        return c = {
            protocol: c[1],
            host: c[3],
            port: l(c[5]) || zc[c[1]] || null,
            path: c[6] || "/",
            search: c[8],
            hash: c[10]
        }, b && (b.$$protocol = c.protocol, b.$$host = c.host, b.$$port = c.port), c
    }

    function Oa(a, b, c) {
        return a + "://" + b + (c == zc[a] ? "" : ":" + c)
    }

    function Pa(a) {
        return a.substr(0, a.lastIndexOf("/"))
    }

    function Qa(a, b, c) {
        var d = Na(a);
        return decodeURIComponent(d.path) != b || q(d.hash) || 0 !== d.hash.indexOf(c) ? a : Oa(d.protocol, d.host, d.port) + Pa(b) + d.hash.substr(c.length)
    }

    function Ra(a, b, c) {
        var d = Na(a);
        if (decodeURIComponent(d.path) != b || q(d.hash) || 0 !== d.hash.indexOf(c)) {
            var e = d.search && "?" + d.search || "", f = d.hash && "#" + d.hash || "", g = Pa(b),
                h = d.path.substr(g.length);
            if (0 !== d.path.indexOf(g)) throw Error('Invalid url "' + a + '", missing path prefix "' + g + '" !');
            return Oa(d.protocol, d.host, d.port) + b + "#" + c + h + e + f
        }
        return a
    }

    function Sa(a, b, c) {
        b = b || "", this.$$parse = function (a) {
            var c = Na(a, this);
            if (0 !== c.path.indexOf(b)) throw Error('Invalid url "' + a + '", missing path prefix "' + b + '" !');
            this.$$path = decodeURIComponent(c.path.substr(b.length)), this.$$search = T(c.search), this.$$hash = c.hash && decodeURIComponent(c.hash) || "", this.$$compose()
        }, this.$$compose = function () {
            var a = U(this.$$search), c = this.$$hash ? "#" + V(this.$$hash) : "";
            this.$$url = Ma(this.$$path) + (a ? "?" + a : "") + c, this.$$absUrl = Oa(this.$$protocol, this.$$host, this.$$port) + b + this.$$url
        }, this.$$rewriteAppUrl = function (a) {
            return 0 == a.indexOf(c) ? a : void 0
        }, this.$$parse(a)
    }

    function Ta(a, b, c) {
        var d;
        this.$$parse = function (a) {
            var c = Na(a, this);
            if (c.hash && 0 !== c.hash.indexOf(b)) throw Error('Invalid url "' + a + '", missing hash prefix "' + b + '" !');
            d = c.path + (c.search ? "?" + c.search : ""), c = yc.exec((c.hash || "").substr(b.length)), c[1] ? this.$$path = ("/" == c[1].charAt(0) ? "" : "/") + decodeURIComponent(c[1]) : this.$$path = "", this.$$search = T(c[3]), this.$$hash = c[5] && decodeURIComponent(c[5]) || "", this.$$compose()
        }, this.$$compose = function () {
            var a = U(this.$$search), c = this.$$hash ? "#" + V(this.$$hash) : "";
            this.$$url = Ma(this.$$path) + (a ? "?" + a : "") + c, this.$$absUrl = Oa(this.$$protocol, this.$$host, this.$$port) + d + (this.$$url ? "#" + b + this.$$url : "")
        }, this.$$rewriteAppUrl = function (a) {
            return 0 == a.indexOf(c) ? a : void 0
        }, this.$$parse(a)
    }

    function Ua(a, b, c, d) {
        Ta.apply(this, arguments), this.$$rewriteAppUrl = function (a) {
            return 0 == a.indexOf(c) ? c + d + "#" + b + a.substr(c.length) : void 0
        }
    }

    function Va(a) {
        return function () {
            return this[a]
        }
    }

    function Wa(a, b) {
        return function (c) {
            return q(c) ? this[a] : (this[a] = b(c), this.$$compose(), this)
        }
    }

    function Xa() {
        var b = "", c = !1;
        this.hashPrefix = function (a) {
            return r(a) ? (b = a, this) : b
        }, this.html5Mode = function (a) {
            return r(a) ? (c = a, this) : c
        }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function (d, e, f, g) {
            function h(a) {
                d.$broadcast("$locationChangeSuccess", i.absUrl(), a)
            }

            var i, j, k, l, m = e.url(), n = Na(m);
            c ? (j = e.baseHref() || "/", k = Pa(j), l = Oa(n.protocol, n.host, n.port) + k + "/", i = f.history ? new Sa(Qa(m, j, b), k, l) : new Ua(Ra(m, j, b), b, l, j.substr(k.length + 1))) : (l = Oa(n.protocol, n.host, n.port) + (n.path || "") + (n.search ? "?" + n.search : "") + "#" + b + "/", i = new Ta(m, b, l)), g.bind("click", function (b) {
                if (!b.ctrlKey && !b.metaKey && 2 != b.which) {
                    for (var c = Vb(b.target); "a" !== Rb(c[0].nodeName);) if (c[0] === g[0] || !(c = c.parent())[0]) return;
                    var e = c.prop("href"), f = i.$$rewriteAppUrl(e);
                    e && !c.attr("target") && f && (i.$$parse(f), d.$apply(), b.preventDefault(), a.angular["ff-684208-preventDefault"] = !0)
                }
            }), i.absUrl() != m && e.url(i.absUrl(), !0), e.onUrlChange(function (a) {
                if (i.absUrl() != a) {
                    if (d.$broadcast("$locationChangeStart", a, i.absUrl()).defaultPrevented) return void e.url(i.absUrl());
                    d.$evalAsync(function () {
                        var b = i.absUrl();
                        i.$$parse(a), h(b)
                    }), d.$$phase || d.$digest()
                }
            });
            var o = 0;
            return d.$watch(function () {
                var a = e.url(), b = i.$$replace;
                return o && a == i.absUrl() || (o++, d.$evalAsync(function () {
                    d.$broadcast("$locationChangeStart", i.absUrl(), a).defaultPrevented ? i.$$parse(a) : (e.url(i.absUrl(), b), h(a))
                })), i.$$replace = !1, o
            }), i
        }]
    }

    function Ya() {
        this.$get = ["$window", function (a) {
            function b(a) {
                return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)), a
            }

            function c(c) {
                var d = a.console || {}, f = d[c] || d.log || n;
                return f.apply ? function () {
                    var a = [];
                    return e(arguments, function (c) {
                        a.push(b(c))
                    }), f.apply(d, a)
                } : function (a, b) {
                    f(a, b)
                }
            }

            return {log: c("log"), warn: c("warn"), info: c("info"), error: c("error")}
        }]
    }

    function Za(a, b) {
        function c(a) {
            return -1 != a.indexOf(p)
        }

        function d(a) {
            return -1 != a.indexOf(u)
        }

        function e() {
            return s + 1 < a.length ? a.charAt(s + 1) : !1
        }

        function f(a) {
            return a >= "0" && "9" >= a
        }

        function g(a) {
            return " " == a || "\r" == a || "	" == a || "\n" == a || "" == a || " " == a
        }

        function h(a) {
            return a >= "a" && "z" >= a || a >= "A" && "Z" >= a || "_" == a || "$" == a
        }

        function i(a) {
            return "-" == a || "+" == a || f(a)
        }

        function j(b, c, d) {
            throw d = d || s, Error("Lexer Error: " + b + " at column" + (r(c) ? "s " + c + "-" + s + " [" + a.substring(c, d) + "]" : " " + d) + " in expression [" + a + "].")
        }

        function l() {
            for (var b = "", c = s; s < a.length;) {
                var d = Rb(a.charAt(s));
                if ("." == d || f(d)) b += d; else {
                    var g = e();
                    if ("e" == d && i(g)) b += d; else if (i(d) && g && f(g) && "e" == b.charAt(b.length - 1)) b += d; else {
                        if (!i(d) || g && f(g) || "e" != b.charAt(b.length - 1)) break;
                        j("Invalid exponent")
                    }
                }
                s++
            }
            b = 1 * b, q.push({
                index: c, text: b, json: !0, fn: function () {
                    return b
                }
            })
        }

        function m() {
            for (var c, d, e, i, j = "", l = s; s < a.length && (i = a.charAt(s), "." == i || h(i) || f(i));) "." == i && (c = s), j += i, s++;
            if (c) for (d = s; d < a.length;) {
                if (i = a.charAt(d), "(" == i) {
                    e = j.substr(c - l + 1), j = j.substr(0, c - l), s = d;
                    break
                }
                if (!g(i)) break;
                d++
            }
            var m = {index: l, text: j};
            if (Ac.hasOwnProperty(j)) m.fn = m.json = Ac[j]; else {
                var n = bb(j, b);
                m.fn = k(function (a, b) {
                    return n(a, b)
                }, {
                    assign: function (a, b) {
                        return _a(a, j, b)
                    }
                })
            }
            q.push(m), e && (q.push({index: c, text: ".", json: !1}), q.push({index: c + 1, text: e, json: !1}))
        }

        function n(b) {
            var c = s;
            s++;
            for (var d = "", e = b, f = !1; s < a.length;) {
                var g = a.charAt(s);
                if (e += g, f) {
                    if ("u" == g) {
                        var h = a.substring(s + 1, s + 5);
                        h.match(/[\da-f]{4}/i) || j("Invalid unicode escape [\\u" + h + "]"), s += 4, d += String.fromCharCode(parseInt(h, 16))
                    } else {
                        var i = Bc[g];
                        d += i ? i : g
                    }
                    f = !1
                } else if ("\\" == g) f = !0; else {
                    if (g == b) return s++, void q.push({
                        index: c, text: e, string: d, json: !0, fn: function () {
                            return d
                        }
                    });
                    d += g
                }
                s++
            }
            j("Unterminated quote", c)
        }

        for (var o, p, q = [], s = 0, t = [], u = ":"; s < a.length;) {
            if (p = a.charAt(s), c("\"'")) n(p); else if (f(p) || c(".") && f(e())) l(); else if (h(p)) m(), d("{,") && "{" == t[0] && (o = q[q.length - 1]) && (o.json = -1 == o.text.indexOf(".")); else if (c("(){}[].,;:")) q.push({
                index: s,
                text: p,
                json: d(":[,") && c("{[") || c("}]:,")
            }), c("{[") && t.unshift(p), c("}]") && t.shift(), s++; else {
                if (g(p)) {
                    s++;
                    continue
                }
                var v = p + e(), w = Ac[p], x = Ac[v];
                x ? (q.push({index: s, text: v, fn: x}), s += 2) : w ? (q.push({
                    index: s,
                    text: p,
                    fn: w,
                    json: d("[,:") && c("+-")
                }), s += 1) : j("Unexpected next character ", s, s + 1)
            }
            u = p
        }
        return q
    }

    function $a(a, b, d, e) {
        function f(b, c) {
            throw Error("Syntax Error: Token '" + c.text + "' " + b + " at column " + (c.index + 1) + " of the expression [" + a + "] starting at [" + a.substring(c.index) + "].")
        }

        function g() {
            if (0 === J.length) throw Error("Unexpected end of expression: " + a);
            return J[0]
        }

        function h(a, b, c, d) {
            if (J.length > 0) {
                var e = J[0], f = e.text;
                if (f == a || f == b || f == c || f == d || !a && !b && !c && !d) return e
            }
            return !1
        }

        function i(a, c, d, e) {
            var g = h(a, c, d, e);
            return g ? (b && !g.json && f("is not valid json", g), J.shift(), g) : !1
        }

        function j(a) {
            i(a) || f("is unexpected, expecting [" + a + "]", h())
        }

        function l(a, b) {
            return function (c, d) {
                return a(c, d, b)
            }
        }

        function m(a, b, c) {
            return function (d, e) {
                return b(d, e, a, c)
            }
        }

        function o() {
            for (var a = []; ;) if (J.length > 0 && !h("}", ")", ";", "]") && a.push(O()), !i(";")) return 1 == a.length ? a[0] : function (b, c) {
                for (var d, e = 0; e < a.length; e++) {
                    var f = a[e];
                    f && (d = f(b, c))
                }
                return d
            }
        }

        function q() {
            for (var a, b = s(); ;) {
                if (!(a = i("|"))) return b;
                b = m(b, a.fn, r())
            }
        }

        function r() {
            for (var a = i(), b = d(a.text), c = []; ;) {
                if (!(a = i(":"))) {
                    var e = function (a, d, e) {
                        for (var f = [e], g = 0; g < c.length; g++) f.push(c[g](a, d));
                        return b.apply(a, f)
                    };
                    return function () {
                        return e
                    }
                }
                c.push(s())
            }
        }

        function s() {
            return K()
        }

        function t() {
            var b, c, d = u();
            return (c = i("=")) ? (d.assign || f("implies assignment but [" + a.substring(0, c.index) + "] can not be assigned to", c), b = u(), function (a, c) {
                return d.assign(a, b(a, c), c)
            }) : d
        }

        function u() {
            for (var a, b = v(); ;) {
                if (!(a = i("||"))) return b;
                b = m(b, a.fn, v())
            }
        }

        function v() {
            var a, b = w();
            return (a = i("&&")) && (b = m(b, a.fn, v())), b
        }

        function w() {
            var a, b = x();
            return (a = i("==", "!=")) && (b = m(b, a.fn, w())), b
        }

        function x() {
            var a, b = y();
            return (a = i("<", ">", "<=", ">=")) && (b = m(b, a.fn, x())), b
        }

        function y() {
            for (var a, b = z(); a = i("+", "-");) b = m(b, a.fn, z());
            return b
        }

        function z() {
            for (var a, b = A(); a = i("*", "/", "%");) b = m(b, a.fn, A());
            return b
        }

        function A() {
            var a;
            return i("+") ? B() : (a = i("-")) ? m(I, a.fn, A()) : (a = i("!")) ? l(a.fn, A()) : B()
        }

        function B() {
            var a;
            if (i("(")) a = O(), j(")"); else if (i("[")) a = F(); else if (i("{")) a = G(); else {
                var b = i();
                a = b.fn, a || f("not a primary expression", b)
            }
            for (var c, d; c = i("(", "[", ".");) "(" === c.text ? (a = L(a, d), d = null) : "[" === c.text ? (d = a, a = N(a)) : "." === c.text ? (d = a, a = M(a)) : f("IMPOSSIBLE");
            return a
        }

        function C(a) {
            var b = i().text, c = bb(b, e);
            return k(function (b, d, e) {
                return c(e || a(b, d), d)
            }, {
                assign: function (c, d, e) {
                    return _a(a(c, e), b, d)
                }
            })
        }

        function D(a) {
            var b = s();
            return j("]"), k(function (d, e) {
                var f, g, h = a(d, e), i = b(d, e);
                return h ? (f = h[i], f && f.then && (g = f, "$$v" in f || (g.$$v = c, g.then(function (a) {
                    g.$$v = a
                })), f = f.$$v), f) : c
            }, {
                assign: function (c, d, e) {
                    return a(c, e)[b(c, e)] = d
                }
            })
        }

        function E(a, b) {
            var c = [];
            if (")" != g().text) do c.push(s()); while (i(","));
            return j(")"), function (d, e) {
                for (var f = [], g = b ? b(d, e) : d, h = 0; h < c.length; h++) f.push(c[h](d, e));
                var i = a(d, e, g) || n;
                return i.apply ? i.apply(g, f) : i(f[0], f[1], f[2], f[3], f[4])
            }
        }

        function F() {
            var a = [];
            if ("]" != g().text) do a.push(s()); while (i(","));
            return j("]"), function (b, c) {
                for (var d = [], e = 0; e < a.length; e++) d.push(a[e](b, c));
                return d
            }
        }

        function G() {
            var a = [];
            if ("}" != g().text) do {
                var b = i(), c = b.string || b.text;
                j(":");
                var d = s();
                a.push({key: c, value: d})
            } while (i(","));
            return j("}"), function (b, c) {
                for (var d = {}, e = 0; e < a.length; e++) {
                    var f = a[e];
                    d[f.key] = f.value(b, c)
                }
                return d
            }
        }

        var H, I = p(0), J = Za(a, e), K = t, L = E, M = C, N = D, O = q;
        return b ? (K = u, L = M = N = O = function () {
            f("is not valid json", {text: a, index: 0})
        }, H = B()) : H = o(), 0 !== J.length && f("is an unexpected token", J[0]), H
    }

    function _a(a, b, c) {
        for (var d = b.split("."), e = 0; d.length > 1; e++) {
            var f = d.shift(), g = a[f];
            g || (g = {}, a[f] = g), a = g
        }
        return a[d.shift()] = c, c
    }

    function ab(a, b, d, e, f) {
        return function (g, h) {
            var i, j = h && h.hasOwnProperty(a) ? h : g;
            return null === j || j === c ? j : (j = j[a], j && j.then && ("$$v" in j || (i = j, i.$$v = c, i.then(function (a) {
                i.$$v = a
            })), j = j.$$v), b && null !== j && j !== c ? (j = j[b], j && j.then && ("$$v" in j || (i = j, i.$$v = c, i.then(function (a) {
                i.$$v = a
            })), j = j.$$v), d && null !== j && j !== c ? (j = j[d], j && j.then && ("$$v" in j || (i = j, i.$$v = c, i.then(function (a) {
                i.$$v = a
            })), j = j.$$v), e && null !== j && j !== c ? (j = j[e], j && j.then && ("$$v" in j || (i = j, i.$$v = c, i.then(function (a) {
                i.$$v = a
            })), j = j.$$v), f && null !== j && j !== c ? (j = j[f], j && j.then && ("$$v" in j || (i = j, i.$$v = c, i.then(function (a) {
                i.$$v = a
            })), j = j.$$v), j) : j) : j) : j) : j)
        }
    }

    function bb(a, b) {
        if (Cc.hasOwnProperty(a)) return Cc[a];
        var d, f = a.split("."), g = f.length;
        if (b) d = 6 > g ? ab(f[0], f[1], f[2], f[3], f[4]) : function (a, b) {
            var d, e = 0;
            do d = ab(f[e++], f[e++], f[e++], f[e++], f[e++])(a, b), b = c, a = d; while (g > e);
            return d
        }; else {
            var h = "var l, fn, p;\n";
            e(f, function (a, b) {
                h += "if(s === null || s === undefined) return s;\nl=s;\ns=" + (b ? "s" : '((k&&k.hasOwnProperty("' + a + '"))?k:s)') + '["' + a + '"];\nif (s && s.then) {\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n'
            }), h += "return s;", d = Function("s", "k", h), d.toString = function () {
                return h
            }
        }
        return Cc[a] = d
    }

    function cb() {
        var a = {};
        this.$get = ["$filter", "$sniffer", function (b, c) {
            return function (d) {
                switch (typeof d) {
                    case"string":
                        return a.hasOwnProperty(d) ? a[d] : a[d] = $a(d, !1, b, c.csp);
                    case"function":
                        return d;
                    default:
                        return n
                }
            }
        }]
    }

    function db() {
        this.$get = ["$rootScope", "$exceptionHandler", function (a, b) {
            return eb(function (b) {
                a.$evalAsync(b)
            }, b)
        }]
    }

    function eb(a, b) {
        function d(a) {
            return a
        }

        function f(a) {
            return j(a)
        }

        function g(a) {
            var b = h(), c = a.length, d = [];
            return c ? e(a, function (a, e) {
                i(a).then(function (a) {
                    e in d || (d[e] = a, --c || b.resolve(d))
                }, function (a) {
                    e in d || b.reject(a)
                })
            }) : b.resolve(d), b.promise
        }

        var h = function () {
            var e, g, k = [];
            return g = {
                resolve: function (b) {
                    if (k) {
                        var d = k;
                        k = c, e = i(b), d.length && a(function () {
                            for (var a, b = 0, c = d.length; c > b; b++) a = d[b], e.then(a[0], a[1])
                        })
                    }
                }, reject: function (a) {
                    g.resolve(j(a))
                }, promise: {
                    then: function (a, c) {
                        var g = h(), i = function (c) {
                            try {
                                g.resolve((a || d)(c))
                            } catch (e) {
                                g.reject(e), b(e)
                            }
                        }, j = function (a) {
                            try {
                                g.resolve((c || f)(a))
                            } catch (d) {
                                g.reject(d), b(d)
                            }
                        };
                        return k ? k.push([i, j]) : e.then(i, j), g.promise
                    }
                }
            }
        }, i = function (b) {
            return b && b.then ? b : {
                then: function (c) {
                    var d = h();
                    return a(function () {
                        d.resolve(c(b))
                    }), d.promise
                }
            }
        }, j = function (b) {
            return {
                then: function (c, d) {
                    var e = h();
                    return a(function () {
                        e.resolve((d || f)(b))
                    }), e.promise
                }
            }
        }, k = function (c, e, g) {
            var k, l = h(), m = function (a) {
                try {
                    return (e || d)(a)
                } catch (c) {
                    return b(c), j(c)
                }
            }, n = function (a) {
                try {
                    return (g || f)(a)
                } catch (c) {
                    return b(c), j(c)
                }
            };
            return a(function () {
                i(c).then(function (a) {
                    k || (k = !0, l.resolve(i(a).then(m, n)))
                }, function (a) {
                    k || (k = !0, l.resolve(n(a)))
                })
            }), l.promise
        };
        return {defer: h, reject: j, when: k, all: g}
    }

    function fb() {
        var a = {};
        this.when = function (b, c) {
            if (a[b] = k({reloadOnSearch: !0}, c), b) {
                var d = "/" == b[b.length - 1] ? b.substr(0, b.length - 1) : b + "/";
                a[d] = {redirectTo: b}
            }
            return this
        }, this.otherwise = function (a) {
            return this.when(null, a), this
        }, this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", function (b, c, d, f, g, h, i) {
            function j(a, b) {
                b = "^" + b.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") + "$";
                for (var c, d = "", f = [], g = {}, h = /:(\w+)/g, i = 0; null !== (c = h.exec(b));) d += b.slice(i, c.index), d += "([^\\/]*)", f.push(c[1]), i = h.lastIndex;
                d += b.substr(i);
                var j = a.match(new RegExp(d));
                return j && e(f, function (a, b) {
                    g[a] = j[b + 1]
                }), j ? g : null
            }

            function l() {
                var a = n(), j = q.current;
                a && j && a.$$route === j.$$route && J(a.pathParams, j.pathParams) && !a.reloadOnSearch && !p ? (j.params = a.params, H(j.params, d), b.$broadcast("$routeUpdate", j)) : (a || j) && (p = !1, b.$broadcast("$routeChangeStart", a, j), q.current = a, a && a.redirectTo && (t(a.redirectTo) ? c.path(o(a.redirectTo, a.params)).search(a.params).replace() : c.url(a.redirectTo(a.pathParams, c.path(), c.search())).replace()), f.when(a).then(function () {
                    if (a) {
                        var b, c = [], d = [];
                        return e(a.resolve || {}, function (a, b) {
                            c.push(b), d.push(t(a) ? g.get(a) : g.invoke(a))
                        }), r(b = a.template) || r(b = a.templateUrl) && (b = h.get(b, {cache: i}).then(function (a) {
                            return a.data
                        })), r(b) && (c.push("$template"), d.push(b)), f.all(d).then(function (a) {
                            var b = {};
                            return e(a, function (a, d) {
                                b[c[d]] = a
                            }), b
                        })
                    }
                }).then(function (c) {
                    a == q.current && (a && (a.locals = c, H(a.params, d)), b.$broadcast("$routeChangeSuccess", a, j))
                }, function (c) {
                    a == q.current && b.$broadcast("$routeChangeError", a, j, c)
                }))
            }

            function n() {
                var b, d;
                return e(a, function (a, e) {
                    !d && (b = j(c.path(), e)) && (d = m(a, {
                        params: k({}, c.search(), b),
                        pathParams: b
                    }), d.$$route = a)
                }), d || a[null] && m(a[null], {params: {}, pathParams: {}})
            }

            function o(a, b) {
                var c = [];
                return e((a || "").split(":"), function (a, d) {
                    if (0 == d) c.push(a); else {
                        var e = a.match(/(\w+)(.*)/), f = e[1];
                        c.push(b[f]), c.push(e[2] || ""), delete b[f]
                    }
                }), c.join("")
            }

            var p = !1, q = {
                routes: a, reload: function () {
                    p = !0, b.$evalAsync(l)
                }
            };
            return b.$on("$locationChangeSuccess", l), q
        }]
    }

    function gb() {
        this.$get = p({})
    }

    function hb() {
        var a = 10;
        this.digestTtl = function (b) {
            return arguments.length && (a = b), a
        }, this.$get = ["$injector", "$exceptionHandler", "$parse", function (b, c, d) {
            function e() {
                this.$id = i(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this["this"] = this.$root = this, this.$$destroyed = !1, this.$$asyncQueue = [], this.$$listeners = {}, this.$$isolateBindings = {}
            }

            function f(a) {
                if (k.$$phase) throw Error(k.$$phase + " already in progress");
                k.$$phase = a
            }

            function g() {
                k.$$phase = null
            }

            function h(a, b) {
                var c = d(a);
                return aa(c, b), c
            }

            function j() {
            }

            e.prototype = {
                $new: function (a) {
                    var b, c;
                    if (x(a)) throw Error("API-CHANGE: Use $controller to instantiate controllers.");
                    return a ? (c = new e, c.$root = this.$root) : (b = function () {
                    }, b.prototype = this, c = new b, c.$id = i()), c["this"] = c, c.$$listeners = {}, c.$parent = this, c.$$asyncQueue = [], c.$$watchers = c.$$nextSibling = c.$$childHead = c.$$childTail = null, c.$$prevSibling = this.$$childTail, this.$$childHead ? (this.$$childTail.$$nextSibling = c, this.$$childTail = c) : this.$$childHead = this.$$childTail = c, c
                }, $watch: function (a, b, c) {
                    var d = this, e = h(a, "watch"), f = d.$$watchers, g = {fn: b, last: j, get: e, exp: a, eq: !!c};
                    if (!x(b)) {
                        var i = h(b || n, "listener");
                        g.fn = function (a, b, c) {
                            i(c)
                        }
                    }
                    return f || (f = d.$$watchers = []), f.unshift(g), function () {
                        G(f, g)
                    }
                }, $digest: function () {
                    var b, d, e, h, i, k, l, m, n, o, p, q = a, r = this, s = [];
                    f("$digest");
                    do {
                        l = !1, n = r;
                        do {
                            for (i = n.$$asyncQueue; i.length;) try {
                                n.$eval(i.shift())
                            } catch (t) {
                                c(t)
                            }
                            if (h = n.$$watchers) for (k = h.length; k--;) try {
                                b = h[k], b && (d = b.get(n)) !== (e = b.last) && !(b.eq ? J(d, e) : "number" == typeof d && "number" == typeof e && isNaN(d) && isNaN(e)) && (l = !0, b.last = b.eq ? H(d) : d, b.fn(d, e === j ? d : e, n), 5 > q && (o = 4 - q, s[o] || (s[o] = []), p = x(b.exp) ? "fn: " + (b.exp.name || b.exp.toString()) : b.exp, p += "; newVal: " + O(d) + "; oldVal: " + O(e), s[o].push(p)))
                            } catch (t) {
                                c(t)
                            }
                            if (!(m = n.$$childHead || n !== r && n.$$nextSibling)) for (; n !== r && !(m = n.$$nextSibling);) n = n.$parent
                        } while (n = m);
                        if (l && !q--) throw g(), Error(a + " $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: " + O(s))
                    } while (l || i.length);
                    g()
                }, $destroy: function () {
                    if (k != this && !this.$$destroyed) {
                        var a = this.$parent;
                        this.$broadcast("$destroy"), this.$$destroyed = !0, a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null
                    }
                }, $eval: function (a, b) {
                    return d(a)(this, b)
                }, $evalAsync: function (a) {
                    this.$$asyncQueue.push(a)
                }, $apply: function (a) {
                    try {
                        return f("$apply"), this.$eval(a)
                    } catch (b) {
                        c(b)
                    } finally {
                        g();
                        try {
                            k.$digest()
                        } catch (b) {
                            throw c(b), b
                        }
                    }
                }, $on: function (a, b) {
                    var c = this.$$listeners[a];
                    return c || (this.$$listeners[a] = c = []), c.push(b), function () {
                        c[F(c, b)] = null
                    }
                }, $emit: function (a, b) {
                    var d, e, f, g = [], h = this, i = !1, j = {
                        name: a, targetScope: h, stopPropagation: function () {
                            i = !0
                        }, preventDefault: function () {
                            j.defaultPrevented = !0
                        }, defaultPrevented: !1
                    }, k = K([j], arguments, 1);
                    do {
                        for (d = h.$$listeners[a] || g, j.currentScope = h, e = 0, f = d.length; f > e; e++) if (d[e]) try {
                            if (d[e].apply(null, k), i) return j
                        } catch (l) {
                            c(l)
                        } else d.splice(e, 1), e--, f--;
                        h = h.$parent
                    } while (h);
                    return j
                }, $broadcast: function (a, b) {
                    var d, e, f, g = this, h = g, i = g, j = {
                        name: a, targetScope: g, preventDefault: function () {
                            j.defaultPrevented = !0
                        }, defaultPrevented: !1
                    }, k = K([j], arguments, 1);
                    do {
                        for (h = i, j.currentScope = h, d = h.$$listeners[a] || [], e = 0, f = d.length; f > e; e++) if (d[e]) try {
                            d[e].apply(null, k)
                        } catch (l) {
                            c(l)
                        } else d.splice(e, 1), e--, f--;
                        if (!(i = h.$$childHead || h !== g && h.$$nextSibling)) for (; h !== g && !(i = h.$$nextSibling);) h = h.$parent
                    } while (h = i);
                    return j
                }
            };
            var k = new e;
            return k
        }]
    }

    function ib() {
        this.$get = ["$window", function (a) {
            var b = {}, c = l((/android (\d+)/.exec(Rb(a.navigator.userAgent)) || [])[1]);
            return {
                history: !(!a.history || !a.history.pushState || 4 > c),
                hashchange: "onhashchange" in a && (!a.document.documentMode || a.document.documentMode > 7),
                hasEvent: function (c) {
                    if ("input" == c && 9 == Zb) return !1;
                    if (q(b[c])) {
                        var d = a.document.createElement("div");
                        b[c] = "on" + c in d
                    }
                    return b[c]
                },
                csp: !1
            }
        }]
    }

    function jb() {
        this.$get = p(a)
    }

    function kb(a) {
        var b, c, d, f = {};
        return a ? (e(a.split("\n"), function (a) {
            d = a.indexOf(":"), b = Rb(dc(a.substr(0, d))), c = dc(a.substr(d + 1)), b && (f[b] ? f[b] += ", " + c : f[b] = c)
        }), f) : f
    }

    function lb(a) {
        var b = s(a) ? a : c;
        return function (c) {
            return b || (b = kb(a)), c ? b[Rb(c)] || null : b
        }
    }

    function mb(a, b, c) {
        return x(c) ? c(a, b) : (e(c, function (c) {
            a = c(a, b)
        }), a)
    }

    function nb(a) {
        return a >= 200 && 300 > a
    }

    function ob() {
        var a = /^\s*(\[|\{[^\{])/, b = /[\}\]]\s*$/, d = /^\)\]\}',?\n/, f = this.defaults = {
            transformResponse: [function (c) {
                return t(c) && (c = c.replace(d, ""), a.test(c) && b.test(c) && (c = P(c, !0))), c
            }],
            transformRequest: [function (a) {
                return s(a) && !B(a) ? O(a) : a
            }],
            headers: {
                common: {Accept: "application/json, text/plain, */*", "X-Requested-With": "XMLHttpRequest"},
                post: {"Content-Type": "application/json;charset=utf-8"},
                put: {"Content-Type": "application/json;charset=utf-8"}
            }
        }, h = this.responseInterceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function (a, b, d, i, j, l) {
            function m(a) {
                function c(a) {
                    var b = k({}, a, {data: mb(a.data, a.headers, n)});
                    return nb(a.status) ? b : j.reject(b)
                }

                a.method = Sb(a.method);
                var d, g, h, i, l, m = a.transformRequest || f.transformRequest,
                    n = a.transformResponse || f.transformResponse, o = k({}, a.headers),
                    r = k({"X-XSRF-TOKEN": b.cookies()["XSRF-TOKEN"]}, f.headers.common, f.headers[Rb(a.method)]);
                a:for (g in r) {
                    h = Rb(g);
                    for (i in a.headers) if (Rb(i) === h) continue a;
                    o[g] = r[g]
                }
                if (q(a.data)) for (var s in o) if ("content-type" === Rb(s)) {
                    delete o[s];
                    break
                }
                return d = mb(a.data, lb(o), m), l = p(a, d, o), l = l.then(c, c), e(v, function (a) {
                    l = a(l)
                }), l.success = function (b) {
                    return l.then(function (c) {
                        b(c.data, c.status, c.headers, a)
                    }), l
                }, l.error = function (b) {
                    return l.then(null, function (c) {
                        b(c.data, c.status, c.headers, a)
                    }), l
                }, l
            }

            function n(a) {
                e(arguments, function (a) {
                    m[a] = function (b, c) {
                        return m(k(c || {}, {method: a, url: b}))
                    }
                })
            }

            function o(a) {
                e(arguments, function (a) {
                    m[a] = function (b, c, d) {
                        return m(k(d || {}, {method: a, url: b, data: c}))
                    }
                })
            }

            function p(b, c, d) {
                function e(a, b, c) {
                    h && (nb(a) ? h.put(o, [a, b, kb(c)]) : h.remove(o)), f(b, a, c), i.$apply()
                }

                function f(a, c, d) {
                    c = Math.max(c, 0), (nb(c) ? l.resolve : l.reject)({data: a, status: c, headers: lb(d), config: b})
                }

                function g() {
                    var a = F(m.pendingRequests, b);
                    -1 !== a && m.pendingRequests.splice(a, 1)
                }

                var h, k, l = j.defer(), n = l.promise, o = r(b.url, b.params);
                if (m.pendingRequests.push(b), n.then(g, g), b.cache && "GET" == b.method && (h = s(b.cache) ? b.cache : u), h) if (k = h.get(o)) {
                    if (k.then) return k.then(g, g), k;
                    w(k) ? f(k[1], k[0], H(k[2])) : f(k, 200, {})
                } else h.put(o, n);
                return k || a(b.method, o, c, e, d, b.timeout, b.withCredentials), n
            }

            function r(a, b) {
                if (!b) return a;
                var d = [];
                return g(b, function (a, b) {
                    null != a && a != c && (s(a) && (a = O(a)), d.push(encodeURIComponent(b) + "=" + encodeURIComponent(a)))
                }), a + (-1 == a.indexOf("?") ? "?" : "&") + d.join("&")
            }

            var u = d("$http"), v = [];
            return e(h, function (a) {
                v.push(t(a) ? l.get(a) : l.invoke(a))
            }), m.pendingRequests = [], n("get", "delete", "head", "jsonp"), o("post", "put"), m.defaults = f, m
        }]
    }

    function pb() {
        this.$get = ["$browser", "$window", "$document", function (a, b, c) {
            return qb(a, Dc, a.defer, b.angular.callbacks, c[0], b.location.protocol.replace(":", ""))
        }]
    }

    function qb(a, b, c, d, f, g) {
        function h(a, b) {
            var c = f.createElement("script"), d = function () {
                f.body.removeChild(c), b && b()
            };
            c.type = "text/javascript", c.src = a, Zb ? c.onreadystatechange = function () {
                /loaded|complete/.test(c.readyState) && d()
            } : c.onload = c.onerror = d, f.body.appendChild(c)
        }

        return function (f, i, j, k, l, m, o) {
            function p(b, c, d, e) {
                var f = (i.match(wc) || ["", g])[1];
                c = "file" == f ? d ? 200 : 404 : c, c = 1223 == c ? 204 : c, b(c, d, e), a.$$completeOutstandingRequest(n)
            }

            if (a.$$incOutstandingRequestCount(), i = i || a.url(), "jsonp" == Rb(f)) {
                var q = "_" + (d.counter++).toString(36);
                d[q] = function (a) {
                    d[q].data = a
                }, h(i.replace("JSON_CALLBACK", "angular.callbacks." + q), function () {
                    d[q].data ? p(k, 200, d[q].data) : p(k, -2), delete d[q]
                })
            } else {
                var r = new b;
                r.open(f, i, !0), e(l, function (a, b) {
                    a && r.setRequestHeader(b, a)
                });
                var s;
                r.onreadystatechange = function () {
                    if (4 == r.readyState) {
                        var a = r.getAllResponseHeaders(),
                            b = ["Cache-Control", "Content-Language", "Content-Type", "Expires", "Last-Modified", "Pragma"];
                        a || (a = "", e(b, function (b) {
                            var c = r.getResponseHeader(b);
                            c && (a += b + ": " + c + "\n")
                        })), p(k, s || r.status, r.responseText, a)
                    }
                }, o && (r.withCredentials = !0), r.send(j || ""), m > 0 && c(function () {
                    s = -1, r.abort()
                }, m)
            }
        }
    }

    function rb() {
        this.$get = function () {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "¤",
                        posSuf: "",
                        negPre: "(¤",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    }],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                    SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                    DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                    SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                    AMPMS: ["AM", "PM"],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function (a) {
                    return 1 === a ? "one" : "other"
                }
            }
        }
    }

    function sb() {
        this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler", function (a, b, c, d) {
            function e(e, g, h) {
                var i, j = c.defer(), k = j.promise, l = r(h) && !h;
                return i = b.defer(function () {
                    try {
                        j.resolve(e())
                    } catch (b) {
                        j.reject(b), d(b)
                    } finally {
                        delete f[k.$$timeoutId]
                    }
                    l || a.$apply()
                }, g), k.$$timeoutId = i, f[i] = j, k
            }

            var f = {};
            return e.cancel = function (a) {
                return a && a.$$timeoutId in f ? (f[a.$$timeoutId].reject("canceled"), delete f[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1
            }, e
        }]
    }

    function tb(a) {
        function b(b, d) {
            return a.factory(b + c, d)
        }

        var c = "Filter";
        this.register = b, this.$get = ["$injector", function (a) {
            return function (b) {
                return a.get(b + c)
            }
        }], b("currency", vb), b("date", Db), b("filter", ub), b("json", Eb), b("limitTo", Fb), b("lowercase", Ic), b("number", wb), b("orderBy", Gb), b("uppercase", Jc)
    }

    function ub() {
        return function (a, b) {
            if (!w(a)) return a;
            var c = [];
            c.check = function (a) {
                for (var b = 0; b < c.length; b++) if (!c[b](a)) return !1;
                return !0
            };
            var d = function (a, b) {
                if ("!" === b.charAt(0)) return !d(a, b.substr(1));
                switch (typeof a) {
                    case"boolean":
                    case"number":
                    case"string":
                        return ("" + a).toLowerCase().indexOf(b) > -1;
                    case"object":
                        for (var c in a) if ("$" !== c.charAt(0) && d(a[c], b)) return !0;
                        return !1;
                    case"array":
                        for (var e = 0; e < a.length; e++) if (d(a[e], b)) return !0;
                        return !1;
                    default:
                        return !1
                }
            };
            switch (typeof b) {
                case"boolean":
                case"number":
                case"string":
                    b = {$: b};
                case"object":
                    for (var e in b) "$" == e ? !function () {
                        var a = ("" + b[e]).toLowerCase();
                        a && c.push(function (b) {
                            return d(b, a)
                        })
                    }() : !function () {
                        var a = e, f = ("" + b[e]).toLowerCase();
                        f && c.push(function (b) {
                            return d(ba(b, a), f)
                        })
                    }();
                    break;
                case"function":
                    c.push(b);
                    break;
                default:
                    return a
            }
            for (var f = [], g = 0; g < a.length; g++) {
                var h = a[g];
                c.check(h) && f.push(h)
            }
            return f
        }
    }

    function vb(a) {
        var b = a.NUMBER_FORMATS;
        return function (a, c) {
            return q(c) && (c = b.CURRENCY_SYM), xb(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, 2).replace(/\u00A4/g, c)
        }
    }

    function wb(a) {
        var b = a.NUMBER_FORMATS;
        return function (a, c) {
            return xb(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
        }
    }

    function xb(a, b, c, d, e) {
        if (isNaN(a) || !isFinite(a)) return "";
        var f = 0 > a;
        a = Math.abs(a);
        var g = a + "", h = "", i = [], j = !1;
        if (-1 !== g.indexOf("e")) {
            var k = g.match(/([\d\.]+)e(-?)(\d+)/);
            k && "-" == k[2] && k[3] > e + 1 ? g = "0" : (h = g, j = !0)
        }
        if (j) e > 0 && a > -1 && 1 > a && (h = a.toFixed(e)); else {
            var l = (g.split(Ec)[1] || "").length;
            q(e) && (e = Math.min(Math.max(b.minFrac, l), b.maxFrac));
            var m = Math.pow(10, e);
            a = Math.round(a * m) / m;
            var n = ("" + a).split(Ec), o = n[0];
            n = n[1] || "";
            var p = 0, r = b.lgSize, s = b.gSize;
            if (o.length >= r + s) {
                p = o.length - r;
                for (var t = 0; p > t; t++) (p - t) % s === 0 && 0 !== t && (h += c), h += o.charAt(t)
            }
            for (t = p; t < o.length; t++) (o.length - t) % r === 0 && 0 !== t && (h += c), h += o.charAt(t);
            for (; n.length < e;) n += "0";
            e && "0" !== e && (h += d + n.substr(0, e))
        }
        return i.push(f ? b.negPre : b.posPre), i.push(h), i.push(f ? b.negSuf : b.posSuf), i.join("")
    }

    function yb(a, b, c) {
        var d = "";
        for (0 > a && (d = "-", a = -a), a = "" + a; a.length < b;) a = "0" + a;
        return c && (a = a.substr(a.length - b)), d + a
    }

    function zb(a, b, c, d) {
        return c = c || 0, function (e) {
            var f = e["get" + a]();
            return (c > 0 || f > -c) && (f += c), 0 === f && -12 == c && (f = 12), yb(f, b, d)
        }
    }

    function Ab(a, b) {
        return function (c, d) {
            var e = c["get" + a](), f = Sb(b ? "SHORT" + a : a);
            return d[f][e]
        }
    }

    function Bb(a) {
        var b = -1 * a.getTimezoneOffset(), c = b >= 0 ? "+" : "";
        return c += yb(Math[b > 0 ? "floor" : "ceil"](b / 60), 2) + yb(Math.abs(b % 60), 2)
    }

    function Cb(a, b) {
        return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1]
    }

    function Db(a) {
        function b(a) {
            var b;
            if (b = a.match(c)) {
                var d = new Date(0), e = 0, f = 0;
                return b[9] && (e = l(b[9] + b[10]), f = l(b[9] + b[11])), d.setUTCFullYear(l(b[1]), l(b[2]) - 1, l(b[3])), d.setUTCHours(l(b[4] || 0) - e, l(b[5] || 0) - f, l(b[6] || 0), l(b[7] || 0)), d
            }
            return a
        }

        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (c, d) {
            var f, g, h = "", i = [];
            if (d = d || "mediumDate", d = a.DATETIME_FORMATS[d] || d, t(c) && (c = Hc.test(c) ? l(c) : b(c)), u(c) && (c = new Date(c)), !v(c)) return c;
            for (; d;) g = Gc.exec(d), g ? (i = K(i, g, 1), d = i.pop()) : (i.push(d), d = null);
            return e(i, function (b) {
                f = Fc[b], h += f ? f(c, a.DATETIME_FORMATS) : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), h
        }
    }

    function Eb() {
        return function (a) {
            return O(a, !0)
        }
    }

    function Fb() {
        return function (a, b) {
            if (!(a instanceof Array)) return a;
            b = l(b);
            var c, d, e = [];
            if (!(a && a instanceof Array)) return e;
            for (b > a.length ? b = a.length : b < -a.length && (b = -a.length), b > 0 ? (c = 0, d = b) : (c = a.length + b, d = a.length); d > c; c++) e.push(a[c]);
            return e
        }
    }

    function Gb(a) {
        return function (b, c, d) {
            function e(a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (0 !== e) return e
                }
                return 0
            }

            function f(a, b) {
                return Q(b) ? function (b, c) {
                    return a(c, b)
                } : a
            }

            function g(a, b) {
                var c = typeof a, d = typeof b;
                return c == d ? ("string" == c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : b > a ? -1 : 1) : d > c ? -1 : 1
            }

            if (!w(b)) return b;
            if (!c) return b;
            c = w(c) ? c : [c], c = D(c, function (b) {
                var c = !1, d = b || o;
                return t(b) && (("+" == b.charAt(0) || "-" == b.charAt(0)) && (c = "-" == b.charAt(0), b = b.substring(1)), d = a(b)), f(function (a, b) {
                    return g(d(a), d(b))
                }, c)
            });
            for (var h = [], i = 0; i < b.length; i++) h.push(b[i]);
            return h.sort(f(e, d))
        }
    }

    function Hb(a) {
        return x(a) && (a = {link: a}), a.restrict = a.restrict || "AC", p(a)
    }

    function Ib(a, b) {
        function c(b, c) {
            c = c ? "-" + Z(c, "-") : "", a.removeClass((b ? Wc : Vc) + c).addClass((b ? Vc : Wc) + c)
        }

        var d = this, f = a.parent().controller("form") || Mc, g = 0, h = d.$error = {};
        d.$name = b.name || b.ngForm, d.$dirty = !1, d.$pristine = !0, d.$valid = !0, d.$invalid = !1, f.$addControl(d), a.addClass(Xc), c(!0), d.$addControl = function (a) {
            a.$name && !d.hasOwnProperty(a.$name) && (d[a.$name] = a)
        }, d.$removeControl = function (a) {
            a.$name && d[a.$name] === a && delete d[a.$name], e(h, function (b, c) {
                d.$setValidity(c, !0, a)
            })
        }, d.$setValidity = function (a, b, e) {
            var i = h[a];
            if (b) i && (G(i, e), i.length || (g--, g || (c(b), d.$valid = !0, d.$invalid = !1), h[a] = !1, c(!0, a), f.$setValidity(a, !0, d))); else {
                if (g || c(b), i) {
                    if (E(i, e)) return
                } else h[a] = i = [], g++, c(!1, a), f.$setValidity(a, !1, d);
                i.push(e), d.$valid = !1, d.$invalid = !0
            }
        }, d.$setDirty = function () {
            a.removeClass(Xc).addClass(Yc), d.$dirty = !0, d.$pristine = !1, f.$setDirty()
        }
    }

    function Jb(a) {
        return q(a) || "" === a || null === a || a !== a
    }

    function Kb(a, b, d, e, f, g) {
        var h = function () {
            var c = dc(b.val());
            e.$viewValue !== c && a.$apply(function () {
                e.$setViewValue(c)
            })
        };
        if (f.hasEvent("input")) b.bind("input", h); else {
            var i, j = function () {
                i || (i = g.defer(function () {
                    h(), i = null
                }))
            };
            b.bind("keydown", function (a) {
                var b = a.keyCode;
                91 === b || b > 15 && 19 > b || b >= 37 && 40 >= b || j()
            }), b.bind("change", h), f.hasEvent("paste") && b.bind("paste cut", j)
        }
        e.$render = function () {
            b.val(Jb(e.$viewValue) ? "" : e.$viewValue)
        };
        var k, m = d.ngPattern, n = function (a, b) {
            return Jb(b) || a.test(b) ? (e.$setValidity("pattern", !0), b) : (e.$setValidity("pattern", !1), c)
        };
        if (m && (m.match(/^\/(.*)\/$/) ? (m = new RegExp(m.substr(1, m.length - 2)), k = function (a) {
            return n(m, a)
        }) : k = function (b) {
            var c = a.$eval(m);
            if (!c || !c.test) throw new Error("Expected " + m + " to be a RegExp but was " + c);
            return n(c, b)
        }, e.$formatters.push(k), e.$parsers.push(k)), d.ngMinlength) {
            var o = l(d.ngMinlength), p = function (a) {
                return !Jb(a) && a.length < o ? (e.$setValidity("minlength", !1), c) : (e.$setValidity("minlength", !0), a)
            };
            e.$parsers.push(p), e.$formatters.push(p)
        }
        if (d.ngMaxlength) {
            var q = l(d.ngMaxlength), r = function (a) {
                return !Jb(a) && a.length > q ? (e.$setValidity("maxlength", !1), c) : (e.$setValidity("maxlength", !0), a)
            };
            e.$parsers.push(r), e.$formatters.push(r)
        }
    }

    function Lb(a, b, d, e, f, g) {
        if (Kb(a, b, d, e, f, g), e.$parsers.push(function (a) {
            var b = Jb(a);
            return b || Sc.test(a) ? (e.$setValidity("number", !0), "" === a ? null : b ? a : parseFloat(a)) : (e.$setValidity("number", !1), c)
        }), e.$formatters.push(function (a) {
            return Jb(a) ? "" : "" + a
        }), d.min) {
            var h = parseFloat(d.min), i = function (a) {
                return !Jb(a) && h > a ? (e.$setValidity("min", !1), c) : (e.$setValidity("min", !0), a)
            };
            e.$parsers.push(i), e.$formatters.push(i)
        }
        if (d.max) {
            var j = parseFloat(d.max), k = function (a) {
                return !Jb(a) && a > j ? (e.$setValidity("max", !1), c) : (e.$setValidity("max", !0), a)
            };
            e.$parsers.push(k), e.$formatters.push(k)
        }
        e.$formatters.push(function (a) {
            return Jb(a) || u(a) ? (e.$setValidity("number", !0), a) : (e.$setValidity("number", !1), c)
        })
    }

    function Mb(a, b, d, e, f, g) {
        Kb(a, b, d, e, f, g);
        var h = function (a) {
            return Jb(a) || Qc.test(a) ? (e.$setValidity("url", !0), a) : (e.$setValidity("url", !1), c)
        };
        e.$formatters.push(h), e.$parsers.push(h)
    }

    function Nb(a, b, d, e, f, g) {
        Kb(a, b, d, e, f, g);
        var h = function (a) {
            return Jb(a) || Rc.test(a) ? (e.$setValidity("email", !0), a) : (e.$setValidity("email", !1), c)
        };
        e.$formatters.push(h), e.$parsers.push(h)
    }

    function Ob(a, b, c, d) {
        q(c.name) && b.attr("name", i()), b.bind("click", function () {
            b[0].checked && a.$apply(function () {
                d.$setViewValue(c.value)
            })
        }), d.$render = function () {
            var a = c.value;
            b[0].checked = a == d.$viewValue
        }, c.$observe("value", d.$render)
    }

    function Pb(a, b, c, d) {
        var e = c.ngTrueValue, f = c.ngFalseValue;
        t(e) || (e = !0), t(f) || (f = !1), b.bind("click", function () {
            a.$apply(function () {
                d.$setViewValue(b[0].checked)
            })
        }), d.$render = function () {
            b[0].checked = d.$viewValue
        }, d.$formatters.push(function (a) {
            return a === e
        }), d.$parsers.push(function (a) {
            return a ? e : f
        })
    }

    function Qb(a, b) {
        return a = "ngClass" + a, Hb(function (d, e, f) {
            function g(a) {
                (b === !0 || d.$index % 2 === b) && (j && !J(a, j) && h(j), i(a)), j = H(a)
            }

            function h(a) {
                s(a) && !w(a) && (a = D(a, function (a, b) {
                    return a ? b : void 0
                })), e.removeClass(w(a) ? a.join(" ") : a)
            }

            function i(a) {
                s(a) && !w(a) && (a = D(a, function (a, b) {
                    return a ? b : void 0
                })), a && e.addClass(w(a) ? a.join(" ") : a)
            }

            var j = c;
            d.$watch(f[a], g, !0), f.$observe("class", function (b) {
                var c = d.$eval(f[a]);
                g(c, c)
            }), "ngClass" !== a && d.$watch("$index", function (c, e) {
                var g = 1 & c;
                g !== e & 1 && (g === b ? i(d.$eval(f[a])) : h(d.$eval(f[a])))
            })
        })
    }

    var Rb = function (a) {
        return t(a) ? a.toLowerCase() : a
    }, Sb = function (a) {
        return t(a) ? a.toUpperCase() : a
    }, Tb = function (a) {
        return t(a) ? a.replace(/[A-Z]/g, function (a) {
            return String.fromCharCode(32 | a.charCodeAt(0))
        }) : a
    }, Ub = function (a) {
        return t(a) ? a.replace(/[a-z]/g, function (a) {
            return String.fromCharCode(-33 & a.charCodeAt(0))
        }) : a
    };
    "i" !== "I".toLowerCase() && (Rb = Tb, Sb = Ub);
    var Vb, Wb, Xb, Yb, Zb = l((/msie (\d+)/.exec(Rb(navigator.userAgent)) || [])[1]), $b = [].slice, _b = [].push,
        ac = Object.prototype.toString, bc = a.angular || (a.angular = {}), cc = ["0", "0", "0"];
    n.$inject = [], o.$inject = [];
    var dc = function () {
        return String.prototype.trim ? function (a) {
            return t(a) ? a.trim() : a
        } : function (a) {
            return t(a) ? a.replace(/^\s*/, "").replace(/\s*$/, "") : a
        }
    }();
    Yb = 9 > Zb ? function (a) {
        return a = a.nodeName ? a : a[0], a.scopeName && "HTML" != a.scopeName ? Sb(a.scopeName + ":" + a.nodeName) : a.nodeName
    } : function (a) {
        return a.nodeName ? a.nodeName : a[0].nodeName
    };
    var ec = /[A-Z]/g, fc = {full: "1.0.8", major: 1, minor: 0, dot: 8, codeName: "bubble-burst"}, gc = ha.cache = {},
        hc = ha.expando = "ng-" + (new Date).getTime(), ic = 1, jc = a.document.addEventListener ? function (a, b, c) {
            a.addEventListener(b, c, !1)
        } : function (a, b, c) {
            a.attachEvent("on" + b, c)
        }, kc = a.document.removeEventListener ? function (a, b, c) {
            a.removeEventListener(b, c, !1)
        } : function (a, b, c) {
            a.detachEvent("on" + b, c)
        }, lc = /([\:\-\_]+(.))/g, mc = /^moz([A-Z])/, nc = ha.prototype = {
            ready: function (b) {
                function c() {
                    d || (d = !0, b())
                }

                var d = !1;
                this.bind("DOMContentLoaded", c), ha(a).bind("load", c)
            }, toString: function () {
                var a = [];
                return e(this, function (b) {
                    a.push("" + b)
                }), "[" + a.join(", ") + "]"
            }, eq: function (a) {
                return Vb(a >= 0 ? this[a] : this[this.length + a])
            }, length: 0, push: _b, sort: [].sort, splice: [].splice
        }, oc = {};
    e("multiple,selected,checked,disabled,readOnly,required".split(","), function (a) {
        oc[Rb(a)] = a
    });
    var pc = {};
    e("input,select,option,textarea,button,form".split(","), function (a) {
        pc[Sb(a)] = !0
    }), e({
        data: na, inheritedData: ta, scope: function (a) {
            return ta(a, "$scope")
        }, controller: sa, injector: function (a) {
            return ta(a, "$injector")
        }, removeAttr: function (a, b) {
            a.removeAttribute(b)
        }, hasClass: oa, css: function (a, b, d) {
            if (b = fa(b), !r(d)) {
                var e;
                return 8 >= Zb && (e = a.currentStyle && a.currentStyle[b], "" === e && (e = "auto")), e = e || a.style[b], 8 >= Zb && (e = "" === e ? c : e), e
            }
            a.style[b] = d
        }, attr: function (a, b, d) {
            var e = Rb(b);
            if (oc[e]) {
                if (!r(d)) return a[b] || (a.attributes.getNamedItem(b) || n).specified ? e : c;
                d ? (a[b] = !0, a.setAttribute(b, e)) : (a[b] = !1, a.removeAttribute(e))
            } else if (r(d)) a.setAttribute(b, d); else if (a.getAttribute) {
                var f = a.getAttribute(b, 2);
                return null === f ? c : f
            }
        }, prop: function (a, b, c) {
            return r(c) ? void (a[b] = c) : a[b]
        }, text: k(9 > Zb ? function (a, b) {
            if (1 == a.nodeType) {
                if (q(b)) return a.innerText;
                a.innerText = b
            } else {
                if (q(b)) return a.nodeValue;
                a.nodeValue = b
            }
        } : function (a, b) {
            return q(b) ? a.textContent : void (a.textContent = b)
        }, {$dv: ""}), val: function (a, b) {
            if (q(b)) {
                if ("SELECT" === Yb(a) && a.multiple) {
                    var c = [];
                    return e(a.options, function (a) {
                        a.selected && c.push(a.value || a.text)
                    }), 0 === c.length ? null : c
                }
                return a.value
            }
            a.value = b
        }, html: function (a, b) {
            if (q(b)) return a.innerHTML;
            for (var c = 0, d = a.childNodes; c < d.length; c++) ja(d[c]);
            a.innerHTML = b
        }
    }, function (a, b) {
        ha.prototype[b] = function (b, d) {
            var e, f;
            if ((2 == a.length && a !== oa && a !== sa ? b : d) !== c) {
                for (e = 0; e < this.length; e++) a(this[e], b, d);
                return this
            }
            if (s(b)) {
                for (e = 0; e < this.length; e++) if (a === na) a(this[e], b); else for (f in b) a(this[e], f, b[f]);
                return this
            }
            return this.length ? a(this[0], b, d) : a.$dv
        }
    }), e({
        removeData: la, dealoc: ja, bind: function Gd(a, c, d) {
            var f = ma(a, "events"), g = ma(a, "handle");
            f || ma(a, "events", f = {}), g || ma(a, "handle", g = va(a, f)), e(c.split(" "), function (c) {
                var e = f[c];
                if (!e) {
                    if ("mouseenter" == c || "mouseleave" == c) {
                        var h = b.body.contains || b.body.compareDocumentPosition ? function (a, b) {
                            var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                            return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                        } : function (a, b) {
                            if (b) for (; b = b.parentNode;) if (b === a) return !0;
                            return !1
                        };
                        f[c] = [];
                        var i = {mouseleave: "mouseout", mouseenter: "mouseover"};
                        Gd(a, i[c], function (a) {
                            var b = this, d = a.relatedTarget;
                            (!d || d !== b && !h(b, d)) && g(a, c)
                        })
                    } else jc(a, c, g), f[c] = [];
                    e = f[c]
                }
                e.push(d)
            })
        }, unbind: ka, replaceWith: function (a, b) {
            var c, d = a.parentNode;
            ja(a), e(new ha(b), function (b) {
                c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a), c = b
            })
        }, children: function (a) {
            var b = [];
            return e(a.childNodes, function (a) {
                1 === a.nodeType && b.push(a)
            }), b
        }, contents: function (a) {
            return a.childNodes || []
        }, append: function (a, b) {
            e(new ha(b), function (b) {
                1 === a.nodeType && a.appendChild(b)
            })
        }, prepend: function (a, b) {
            if (1 === a.nodeType) {
                var c = a.firstChild;
                e(new ha(b), function (b) {
                    a.insertBefore(b, c)
                })
            }
        }, wrap: function (a, b) {
            b = Vb(b)[0];
            var c = a.parentNode;
            c && c.replaceChild(b, a), b.appendChild(a)
        }, remove: function (a) {
            ja(a);
            var b = a.parentNode;
            b && b.removeChild(a)
        }, after: function (a, b) {
            var c = a, d = a.parentNode;
            e(new ha(b), function (a) {
                d.insertBefore(a, c.nextSibling), c = a
            })
        }, addClass: qa, removeClass: pa, toggleClass: function (a, b, c) {
            q(c) && (c = !oa(a, b)), (c ? qa : pa)(a, b)
        }, parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        }, next: function (a) {
            if (a.nextElementSibling) return a.nextElementSibling;
            for (var b = a.nextSibling; null != b && 1 !== b.nodeType;) b = b.nextSibling;
            return b
        }, find: function (a, b) {
            return a.getElementsByTagName(b)
        }, clone: ia, triggerHandler: function (a, b) {
            var c = (ma(a, "events") || {})[b];
            e(c, function (b) {
                b.call(a, null)
            })
        }
    }, function (a, b) {
        ha.prototype[b] = function (b, d) {
            for (var e, f = 0; f < this.length; f++) e == c ? (e = a(this[f], b, d), e !== c && (e = Vb(e))) : ra(e, a(this[f], b, d));
            return e == c ? this : e
        }
    }), xa.prototype = {
        put: function (a, b) {
            this[wa(a)] = b
        }, get: function (a) {
            return this[wa(a)]
        }, remove: function (a) {
            var b = this[a = wa(a)];
            return delete this[a], b
        }
    }, ya.prototype = {
        push: function (a, b) {
            var c = this[a = wa(a)];
            c ? c.push(b) : this[a] = [b]
        }, shift: function (a) {
            var b = this[a = wa(a)];
            return b ? 1 == b.length ? (delete this[a], b[0]) : b.shift() : void 0
        }, peek: function (a) {
            var b = this[wa(a)];
            return b ? b[0] : void 0
        }
    };
    var qc = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, rc = /,/, sc = /^\s*(_?)(\S+?)\1\s*$/,
        tc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, uc = "Non-assignable model expression: ";
    Ga.$inject = ["$provide"];
    var vc = /^(x[\:\-_]|data[\:\-_])/i,
        wc = /^([^:]+):\/\/(\w+:{0,1}\w*@)?(\{?[\w\.-]*\}?)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/,
        xc = /^([^\?#]*)?(\?([^#]*))?(#(.*))?$/, yc = xc, zc = {http: 80, https: 443, ftp: 21};
    Sa.prototype = {
        $$replace: !1, absUrl: Va("$$absUrl"), url: function (a, b) {
            if (q(a)) return this.$$url;
            var c = xc.exec(a);
            return c[1] && this.path(decodeURIComponent(c[1])), (c[2] || c[1]) && this.search(c[3] || ""), this.hash(c[5] || "", b), this
        }, protocol: Va("$$protocol"), host: Va("$$host"), port: Va("$$port"), path: Wa("$$path", function (a) {
            return "/" == a.charAt(0) ? a : "/" + a
        }), search: function (a, b) {
            return q(a) ? this.$$search : (r(b) ? null === b ? delete this.$$search[a] : this.$$search[a] = b : this.$$search = t(a) ? T(a) : a, this.$$compose(), this)
        }, hash: Wa("$$hash", o), replace: function () {
            return this.$$replace = !0, this
        }
    }, Ta.prototype = m(Sa.prototype), Ua.prototype = m(Ta.prototype);
    var Ac = {
            "null": function () {
                return null
            }, "true": function () {
                return !0
            }, "false": function () {
                return !1
            }, undefined: n, "+": function (a, b, d, e) {
                return d = d(a, b), e = e(a, b), r(d) ? r(e) ? d + e : d : r(e) ? e : c
            }, "-": function (a, b, c, d) {
                return c = c(a, b), d = d(a, b), (r(c) ? c : 0) - (r(d) ? d : 0)
            }, "*": function (a, b, c, d) {
                return c(a, b) * d(a, b)
            }, "/": function (a, b, c, d) {
                return c(a, b) / d(a, b)
            }, "%": function (a, b, c, d) {
                return c(a, b) % d(a, b)
            }, "^": function (a, b, c, d) {
                return c(a, b) ^ d(a, b)
            }, "=": n, "==": function (a, b, c, d) {
                return c(a, b) == d(a, b)
            }, "!=": function (a, b, c, d) {
                return c(a, b) != d(a, b)
            }, "<": function (a, b, c, d) {
                return c(a, b) < d(a, b)
            }, ">": function (a, b, c, d) {
                return c(a, b) > d(a, b)
            }, "<=": function (a, b, c, d) {
                return c(a, b) <= d(a, b)
            }, ">=": function (a, b, c, d) {
                return c(a, b) >= d(a, b)
            }, "&&": function (a, b, c, d) {
                return c(a, b) && d(a, b)
            }, "||": function (a, b, c, d) {
                return c(a, b) || d(a, b)
            }, "&": function (a, b, c, d) {
                return c(a, b) & d(a, b)
            }, "|": function (a, b, c, d) {
                return d(a, b)(a, b, c(a, b))
            }, "!": function (a, b, c) {
                return !c(a, b)
            }
        }, Bc = {n: "\n", f: "\f", r: "\r", t: "	", v: "", "'": "'", '"': '"'}, Cc = {},
        Dc = a.XMLHttpRequest || function () {
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.6.0")
            } catch (a) {
            }
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.3.0")
            } catch (b) {
            }
            try {
                return new ActiveXObject("Msxml2.XMLHTTP")
            } catch (c) {
            }
            throw new Error("This browser does not support XMLHttpRequest.")
        };
    tb.$inject = ["$provide"], vb.$inject = ["$locale"], wb.$inject = ["$locale"];
    var Ec = ".", Fc = {
        yyyy: zb("FullYear", 4),
        yy: zb("FullYear", 2, 0, !0),
        y: zb("FullYear", 1),
        MMMM: Ab("Month"),
        MMM: Ab("Month", !0),
        MM: zb("Month", 2, 1),
        M: zb("Month", 1, 1),
        dd: zb("Date", 2),
        d: zb("Date", 1),
        HH: zb("Hours", 2),
        H: zb("Hours", 1),
        hh: zb("Hours", 2, -12),
        h: zb("Hours", 1, -12),
        mm: zb("Minutes", 2),
        m: zb("Minutes", 1),
        ss: zb("Seconds", 2),
        s: zb("Seconds", 1),
        EEEE: Ab("Day"),
        EEE: Ab("Day", !0),
        a: Cb,
        Z: Bb
    }, Gc = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, Hc = /^\d+$/;
    Db.$inject = ["$locale"];
    var Ic = p(Rb), Jc = p(Sb);
    Gb.$inject = ["$parse"];
    var Kc = p({
        restrict: "E", compile: function (a, c) {
            return 8 >= Zb && (c.href || c.name || c.$set("href", ""), a.append(b.createComment("IE fix"))), function (a, b) {
                b.bind("click", function (a) {
                    b.attr("href") || a.preventDefault()
                })
            }
        }
    }), Lc = {};
    e(oc, function (a, b) {
        var c = Ha("ng-" + b);
        Lc[c] = function () {
            return {
                priority: 100, compile: function () {
                    return function (a, d, e) {
                        a.$watch(e[c], function (a) {
                            e.$set(b, !!a)
                        })
                    }
                }
            }
        }
    }), e(["src", "href"], function (a) {
        var b = Ha("ng-" + a);
        Lc[b] = function () {
            return {
                priority: 99, link: function (c, d, e) {
                    e.$observe(b, function (b) {
                        b && (e.$set(a, b), Zb && d.prop(a, e[a]))
                    })
                }
            }
        }
    });
    var Mc = {$addControl: n, $removeControl: n, $setValidity: n, $setDirty: n};
    Ib.$inject = ["$element", "$attrs", "$scope"];
    var Nc = function (a) {
            return ["$timeout", function (b) {
                var d = {
                    name: "form", restrict: "E", controller: Ib, compile: function () {
                        return {
                            pre: function (a, d, e, f) {
                                if (!e.action) {
                                    var g = function (a) {
                                        a.preventDefault ? a.preventDefault() : a.returnValue = !1
                                    };
                                    jc(d[0], "submit", g), d.bind("$destroy", function () {
                                        b(function () {
                                            kc(d[0], "submit", g)
                                        }, 0, !1)
                                    })
                                }
                                var h = d.parent().controller("form"), i = e.name || e.ngForm;
                                i && (a[i] = f), h && d.bind("$destroy", function () {
                                    h.$removeControl(f), i && (a[i] = c), k(f, Mc)
                                })
                            }
                        }
                    }
                };
                return a ? k(H(d), {restrict: "EAC"}) : d
            }]
        }, Oc = Nc(), Pc = Nc(!0),
        Qc = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        Rc = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/, Sc = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, Tc = {
            text: Kb,
            number: Lb,
            url: Mb,
            email: Nb,
            radio: Ob,
            checkbox: Pb,
            hidden: n,
            button: n,
            submit: n,
            reset: n
        }, Uc = ["$browser", "$sniffer", function (a, b) {
            return {
                restrict: "E", require: "?ngModel", link: function (c, d, e, f) {
                    f && (Tc[Rb(e.type)] || Tc.text)(c, d, e, f, b, a)
                }
            }
        }], Vc = "ng-valid", Wc = "ng-invalid", Xc = "ng-pristine", Yc = "ng-dirty",
        Zc = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", function (a, b, c, d, f) {
            function g(a, b) {
                b = b ? "-" + Z(b, "-") : "", d.removeClass((a ? Wc : Vc) + b).addClass((a ? Vc : Wc) + b)
            }

            this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$name = c.name;
            var h = f(c.ngModel), i = h.assign;
            if (!i) throw Error(uc + c.ngModel + " (" + R(d) + ")");
            this.$render = n;
            var j = d.inheritedData("$formController") || Mc, k = 0, l = this.$error = {};
            d.addClass(Xc), g(!0), this.$setValidity = function (a, b) {
                l[a] !== !b && (b ? (l[a] && k--, k || (g(!0), this.$valid = !0, this.$invalid = !1)) : (g(!1), this.$invalid = !0, this.$valid = !1, k++), l[a] = !b, g(b, a), j.$setValidity(a, b, this))
            }, this.$setViewValue = function (c) {
                this.$viewValue = c, this.$pristine && (this.$dirty = !0, this.$pristine = !1, d.removeClass(Xc).addClass(Yc), j.$setDirty()), e(this.$parsers, function (a) {
                    c = a(c)
                }), this.$modelValue !== c && (this.$modelValue = c, i(a, c), e(this.$viewChangeListeners, function (a) {
                    try {
                        a()
                    } catch (c) {
                        b(c)
                    }
                }))
            };
            var m = this;
            a.$watch(function () {
                var b = h(a);
                if (m.$modelValue !== b) {
                    var c = m.$formatters, d = c.length;
                    for (m.$modelValue = b; d--;) b = c[d](b);
                    m.$viewValue !== b && (m.$viewValue = b, m.$render())
                }
            })
        }], $c = function () {
            return {
                require: ["ngModel", "^?form"], controller: Zc, link: function (a, b, c, d) {
                    var e = d[0], f = d[1] || Mc;
                    f.$addControl(e), b.bind("$destroy", function () {
                        f.$removeControl(e)
                    })
                }
            }
        }, _c = p({
            require: "ngModel", link: function (a, b, c, d) {
                d.$viewChangeListeners.push(function () {
                    a.$eval(c.ngChange)
                })
            }
        }), ad = function () {
            return {
                require: "?ngModel", link: function (a, b, c, d) {
                    if (d) {
                        c.required = !0;
                        var e = function (a) {
                            return c.required && (Jb(a) || a === !1) ? void d.$setValidity("required", !1) : (d.$setValidity("required", !0), a)
                        };
                        d.$formatters.push(e), d.$parsers.unshift(e), c.$observe("required", function () {
                            e(d.$viewValue)
                        })
                    }
                }
            }
        }, bd = function () {
            return {
                require: "ngModel", link: function (a, b, d, f) {
                    var g = /\/(.*)\//.exec(d.ngList), h = g && new RegExp(g[1]) || d.ngList || ",", i = function (a) {
                        var b = [];
                        return a && e(a.split(h), function (a) {
                            a && b.push(dc(a))
                        }), b
                    };
                    f.$parsers.push(i), f.$formatters.push(function (a) {
                        return w(a) ? a.join(", ") : c
                    })
                }
            }
        }, cd = /^(true|false|\d+)$/, dd = function () {
            return {
                priority: 100, compile: function (a, b) {
                    return cd.test(b.ngValue) ? function (a, b, c) {
                        c.$set("value", a.$eval(c.ngValue))
                    } : function (a, b, c) {
                        a.$watch(c.ngValue, function (a) {
                            c.$set("value", a)
                        })
                    }
                }
            }
        }, ed = Hb(function (a, b, d) {
            b.addClass("ng-binding").data("$binding", d.ngBind), a.$watch(d.ngBind, function (a) {
                b.text(a == c ? "" : a)
            })
        }), fd = ["$interpolate", function (a) {
            return function (b, c, d) {
                var e = a(c.attr(d.$attr.ngBindTemplate));
                c.addClass("ng-binding").data("$binding", e), d.$observe("ngBindTemplate", function (a) {
                    c.text(a)
                })
            }
        }], gd = [function () {
            return function (a, b, c) {
                b.addClass("ng-binding").data("$binding", c.ngBindHtmlUnsafe), a.$watch(c.ngBindHtmlUnsafe, function (a) {
                    b.html(a || "")
                })
            }
        }], hd = Qb("", !0), id = Qb("Odd", 0), jd = Qb("Even", 1), kd = Hb({
            compile: function (a, b) {
                b.$set("ngCloak", c), a.removeClass("ng-cloak")
            }
        }), ld = [function () {
            return {scope: !0, controller: "@"}
        }], md = ["$sniffer", function (a) {
            return {
                priority: 1e3, compile: function () {
                    a.csp = !0
                }
            }
        }], nd = {};
    e("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave submit".split(" "), function (a) {
        var b = Ha("ng-" + a);
        nd[b] = ["$parse", function (c) {
            return function (d, e, f) {
                var g = c(f[b]);
                e.bind(Rb(a), function (a) {
                    d.$apply(function () {
                        g(d, {$event: a})
                    })
                })
            }
        }]
    });
    var od = ["$http", "$templateCache", "$anchorScroll", "$compile", function (a, b, c, d) {
            return {
                restrict: "ECA", terminal: !0, compile: function (e, f) {
                    var g = f.ngInclude || f.src, h = f.onload || "", i = f.autoscroll;
                    return function (e, f) {
                        var j, k = 0, l = function () {
                            j && (j.$destroy(), j = null), f.html("")
                        };
                        e.$watch(g, function (g) {
                            var m = ++k;
                            g ? a.get(g, {cache: b}).success(function (a) {
                                m === k && (j && j.$destroy(), j = e.$new(), f.html(a), d(f.contents())(j), !r(i) || i && !e.$eval(i) || c(), j.$emit("$includeContentLoaded"), e.$eval(h))
                            }).error(function () {
                                m === k && l()
                            }) : l()
                        })
                    }
                }
            }
        }], pd = Hb({
            compile: function () {
                return {
                    pre: function (a, b, c) {
                        a.$eval(c.ngInit)
                    }
                }
            }
        }), qd = Hb({terminal: !0, priority: 1e3}), rd = ["$locale", "$interpolate", function (a, b) {
            var c = /{}/g;
            return {
                restrict: "EA", link: function (d, f, g) {
                    var h = g.count, i = f.attr(g.$attr.when), j = g.offset || 0, k = d.$eval(i), l = {},
                        m = b.startSymbol(), n = b.endSymbol();
                    e(k, function (a, d) {
                        l[d] = b(a.replace(c, m + h + "-" + j + n))
                    }), d.$watch(function () {
                        var b = parseFloat(d.$eval(h));
                        return isNaN(b) ? "" : (b in k || (b = a.pluralCat(b - j)), l[b](d, f, !0))
                    }, function (a) {
                        f.text(a)
                    })
                }
            }
        }], sd = Hb({
            transclude: "element", priority: 1e3, terminal: !0, compile: function (a, b, c) {
                return function (a, b, d) {
                    var e, f, g, h, i = d.ngRepeat, j = i.match(/^\s*(.+)\s+in\s+(.*)\s*$/);
                    if (!j) throw Error("Expected ngRepeat in form of '_item_ in _collection_' but got '" + i + "'.");
                    if (e = j[1], f = j[2], j = e.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/), !j) throw Error("'item' in 'item in collection' should be identifier or (key, value) but got '" + e + "'.");
                    g = j[3] || j[1], h = j[2];
                    var k = new ya;
                    a.$watch(function (a) {
                        var d, e, i, j, l, m, n, o, p = a.$eval(f), q = b, r = new ya;
                        if (w(p)) n = p || []; else {
                            n = [];
                            for (l in p) p.hasOwnProperty(l) && "$" != l.charAt(0) && n.push(l);
                            n.sort()
                        }
                        for (i = n.length - 1, d = 0, e = n.length; e > d; d++) l = p === n ? d : n[d], m = p[l], o = k.shift(m), o ? (j = o.scope, r.push(m, o), d === o.index ? q = o.element : (o.index = d, q.after(o.element), q = o.element)) : j = a.$new(), j[g] = m, h && (j[h] = l), j.$index = d, j.$first = 0 === d, j.$last = d === i, j.$middle = !(j.$first || j.$last), o || c(j, function (a) {
                            q.after(a), o = {scope: j, element: q = a, index: d}, r.push(m, o)
                        });
                        for (l in k) if (k.hasOwnProperty(l)) for (n = k[l]; n.length;) m = n.pop(), m.element.remove(), m.scope.$destroy();
                        k = r
                    })
                }
            }
        }), td = Hb(function (a, b, c) {
            a.$watch(c.ngShow, function (a) {
                b.css("display", Q(a) ? "" : "none")
            })
        }), ud = Hb(function (a, b, c) {
            a.$watch(c.ngHide, function (a) {
                b.css("display", Q(a) ? "none" : "")
            })
        }), vd = Hb(function (a, b, c) {
            a.$watch(c.ngStyle, function (a, c) {
                c && a !== c && e(c, function (a, c) {
                    b.css(c, "")
                }), a && b.css(a)
            }, !0)
        }), wd = p({
            restrict: "EA", require: "ngSwitch", controller: ["$scope", function () {
                this.cases = {}
            }], link: function (a, b, c, d) {
                var e, f, g, h = c.ngSwitch || c.on;
                a.$watch(h, function (h) {
                    f && (g.$destroy(), f.remove(), f = g = null), (e = d.cases["!" + h] || d.cases["?"]) && (a.$eval(c.change), g = a.$new(), e(g, function (a) {
                        f = a, b.append(a)
                    }))
                })
            }
        }), xd = Hb({
            transclude: "element", priority: 500, require: "^ngSwitch", compile: function (a, b, c) {
                return function (a, d, e, f) {
                    f.cases["!" + b.ngSwitchWhen] = c
                }
            }
        }), yd = Hb({
            transclude: "element", priority: 500, require: "^ngSwitch", compile: function (a, b, c) {
                return function (a, b, d, e) {
                    e.cases["?"] = c
                }
            }
        }), zd = Hb({
            controller: ["$transclude", "$element", function (a, b) {
                a(function (a) {
                    b.append(a)
                })
            }]
        }),
        Ad = ["$http", "$templateCache", "$route", "$anchorScroll", "$compile", "$controller", function (a, b, c, d, e, f) {
            return {
                restrict: "ECA", terminal: !0, link: function (a, b, g) {
                    function h() {
                        k && (k.$destroy(), k = null)
                    }

                    function i() {
                        b.html(""), h()
                    }

                    function j() {
                        var g = c.current && c.current.locals, j = g && g.$template;
                        if (j) {
                            b.html(j), h();
                            var m, n = e(b.contents()), o = c.current;
                            k = o.scope = a.$new(), o.controller && (g.$scope = k, m = f(o.controller, g), b.children().data("$ngControllerController", m)), n(k), k.$emit("$viewContentLoaded"), k.$eval(l), d()
                        } else i()
                    }

                    var k, l = g.onload || "";
                    a.$on("$routeChangeSuccess", j), j()
                }
            }
        }], Bd = ["$templateCache", function (a) {
            return {
                restrict: "E", terminal: !0, compile: function (b, c) {
                    if ("text/ng-template" == c.type) {
                        var d = c.id, e = b[0].text;
                        a.put(d, e)
                    }
                }
            }
        }], Cd = p({terminal: !0}), Dd = ["$compile", "$parse", function (a, d) {
            var g = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/,
                h = {$setViewValue: n};
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: ["$element", "$scope", "$attrs", function (a, b, c) {
                    var d, e, f = this, g = {}, i = h;
                    f.databound = c.ngModel, f.init = function (a, b, c) {
                        i = a, d = b, e = c
                    }, f.addOption = function (b) {
                        g[b] = !0, i.$viewValue == b && (a.val(b), e.parent() && e.remove())
                    }, f.removeOption = function (a) {
                        this.hasOption(a) && (delete g[a], i.$viewValue == a && this.renderUnknownOption(a))
                    }, f.renderUnknownOption = function (b) {
                        var c = "? " + wa(b) + " ?";
                        e.val(c), a.prepend(e), a.val(c), e.prop("selected", !0)
                    }, f.hasOption = function (a) {
                        return g.hasOwnProperty(a)
                    }, b.$on("$destroy", function () {
                        f.renderUnknownOption = n
                    })
                }],
                link: function (h, i, j, k) {
                    function l(a, b, c, d) {
                        c.$render = function () {
                            var a = c.$viewValue;
                            d.hasOption(a) ? (y.parent() && y.remove(), b.val(a), "" === a && o.prop("selected", !0)) : q(a) && o ? b.val("") : d.renderUnknownOption(a)
                        }, b.bind("change", function () {
                            a.$apply(function () {
                                y.parent() && y.remove(), c.$setViewValue(b.val())
                            })
                        })
                    }

                    function m(a, b, c) {
                        var d;
                        c.$render = function () {
                            var a = new xa(c.$viewValue);
                            e(b.find("option"), function (b) {
                                b.selected = r(a.get(b.value))
                            })
                        }, a.$watch(function () {
                            J(d, c.$viewValue) || (d = H(c.$viewValue), c.$render())
                        }), b.bind("change", function () {
                            a.$apply(function () {
                                var a = [];
                                e(b.find("option"), function (b) {
                                    b.selected && a.push(b.value)
                                }), c.$setViewValue(a)
                            })
                        })
                    }

                    function n(b, e, h) {
                        function i() {
                            var a, d, g, i, j, r, s, u, y, z, A, B, C, D, E = {"": []}, F = [""], G = h.$modelValue,
                                H = p(b) || [], I = m ? f(H) : H, J = {}, K = !1;
                            for (t && (K = new xa(G)), z = 0; u = I.length, u > z; z++) J[l] = H[m ? J[m] = I[z] : z], a = n(b, J) || "", (d = E[a]) || (d = E[a] = [], F.push(a)), t ? A = K.remove(o(b, J)) != c : (A = G === o(b, J), K = K || A), D = k(b, J), D = D === c ? "" : D, d.push({
                                id: m ? I[z] : z,
                                label: D,
                                selected: A
                            });
                            for (t || (v || null === G ? E[""].unshift({
                                id: "",
                                label: "",
                                selected: !K
                            }) : K || E[""].unshift({id: "?", label: "", selected: !0})), y = 0, s = F.length; s > y; y++) {
                                for (a = F[y], d = E[a], q.length <= y ? (i = {
                                    element: x.clone().attr("label", a),
                                    label: d.label
                                }, j = [i], q.push(j), e.append(i.element)) : (j = q[y], i = j[0], i.label != a && i.element.attr("label", i.label = a)), B = null, z = 0, u = d.length; u > z; z++) g = d[z], (r = j[z + 1]) ? (B = r.element, r.label !== g.label && B.text(r.label = g.label), r.id !== g.id && B.val(r.id = g.id), B[0].selected !== g.selected && B.prop("selected", r.selected = g.selected)) : ("" === g.id && v ? C = v : (C = w.clone()).val(g.id).attr("selected", g.selected).text(g.label), j.push(r = {
                                    element: C,
                                    label: g.label,
                                    id: g.id,
                                    selected: g.selected
                                }), B ? B.after(C) : i.element.append(C), B = C);
                                for (z++; j.length > z;) j.pop().element.remove()
                            }
                            for (; q.length > y;) q.pop()[0].element.remove()
                        }

                        var j;
                        if (!(j = u.match(g))) throw Error("Expected ngOptions in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '" + u + "'.");
                        var k = d(j[2] || j[1]), l = j[4] || j[6], m = j[5], n = d(j[3] || ""), o = d(j[2] ? j[1] : l),
                            p = d(j[7]), q = [[{element: e, label: ""}]];
                        v && (a(v)(b), v.removeClass("ng-scope"), v.remove()), e.html(""), e.bind("change", function () {
                            b.$apply(function () {
                                var a, d, f, g, i, j, k, n, r = p(b) || [], s = {};
                                if (t) for (f = [], j = 0, n = q.length; n > j; j++) for (a = q[j], i = 1, k = a.length; k > i; i++) (g = a[i].element)[0].selected && (d = g.val(), m && (s[m] = d), s[l] = r[d], f.push(o(b, s))); else d = e.val(), "?" == d ? f = c : "" == d ? f = null : (s[l] = r[d], m && (s[m] = d), f = o(b, s));
                                h.$setViewValue(f)
                            })
                        }), h.$render = i, b.$watch(i)
                    }

                    if (k[1]) {
                        for (var o, p = k[0], s = k[1], t = j.multiple, u = j.ngOptions, v = !1, w = Vb(b.createElement("option")), x = Vb(b.createElement("optgroup")), y = w.clone(), z = 0, A = i.children(), B = A.length; B > z; z++) if ("" == A[z].value) {
                            o = v = A.eq(z);
                            break
                        }
                        if (p.init(s, v, y), t && (j.required || j.ngRequired)) {
                            var C = function (a) {
                                return s.$setValidity("required", !j.required || a && a.length), a
                            };
                            s.$parsers.push(C), s.$formatters.unshift(C), j.$observe("required", function () {
                                C(s.$viewValue)
                            })
                        }
                        u ? n(h, i, s) : t ? m(h, i, s) : l(h, i, s, p)
                    }
                }
            }
        }], Ed = ["$interpolate", function (a) {
            var b = {addOption: n, removeOption: n};
            return {
                restrict: "E", priority: 100, compile: function (c, d) {
                    if (q(d.value)) {
                        var e = a(c.text(), !0);
                        e || d.$set("value", c.text())
                    }
                    return function (a, c, d) {
                        var f = "$selectController", g = c.parent(), h = g.data(f) || g.parent().data(f);
                        h && h.databound ? c.prop("selected", !1) : h = b, e ? a.$watch(e, function (a, b) {
                            d.$set("value", a), a !== b && h.removeOption(b), h.addOption(a)
                        }) : h.addOption(d.value), c.bind("$destroy", function () {
                            h.removeOption(d.value)
                        })
                    }
                }
            }
        }], Fd = p({restrict: "E", terminal: !0});
    $(), da(bc), Vb(b).ready(function () {
        X(b, Y)
    })
}(window, document), angular.element(document).find("head").append('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak{display:none !important;}ng\\:form{display:block;}</style>'), function (a, b, c) {
    "use strict";
    b.module("ngResource", ["ng"]).factory("$resource", ["$http", "$parse", function (a, d) {
        function e(a) {
            return f(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
        }

        function f(a, b) {
            return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+")
        }

        function g(a, b) {
            this.template = a += "#", this.defaults = b || {};
            var c = this.urlParams = {};
            k(a.split(/\W/), function (b) {
                b && new RegExp("(^|[^\\\\]):" + b + "\\W").test(a) && (c[b] = !0)
            }), this.template = a.replace(/\\:/g, ":")
        }

        function h(d, e, f) {
            function p(a, b) {
                var c = {};
                return b = l({}, e, b), k(b, function (b, d) {
                    c[d] = b.charAt && "@" == b.charAt(0) ? o(a, b.substr(1)) : b
                }), c
            }

            function q(a) {
                m(a || {}, this)
            }

            var r = new g(d);
            return f = l({}, i, f), k(f, function (d, e) {
                d.method = b.uppercase(d.method);
                var f = "POST" == d.method || "PUT" == d.method || "PATCH" == d.method;
                q[e] = function (b, c, e, g) {
                    var h, i = {}, o = j, s = null;
                    switch (arguments.length) {
                        case 4:
                            s = g, o = e;
                        case 3:
                        case 2:
                            if (!n(c)) {
                                i = b, h = c, o = e;
                                break
                            }
                            if (n(b)) {
                                o = b, s = c;
                                break
                            }
                            o = c, s = e;
                        case 1:
                            n(b) ? o = b : f ? h = b : i = b;
                            break;
                        case 0:
                            break;
                        default:
                            throw"Expected between 0-4 arguments [params, data, success, error], got " + arguments.length + " arguments."
                    }
                    var t = this instanceof q ? this : d.isArray ? [] : new q(h);
                    return a({
                        method: d.method,
                        url: r.url(l({}, p(h, d.params || {}), i)),
                        data: h
                    }).then(function (a) {
                        var b = a.data;
                        b && (d.isArray ? (t.length = 0, k(b, function (a) {
                            t.push(new q(a))
                        })) : m(b, t)), (o || j)(t, a.headers)
                    }, s), t
                }, q.prototype["$" + e] = function (a, b, d) {
                    var g, h = p(this), i = j;
                    switch (arguments.length) {
                        case 3:
                            h = a, i = b, g = d;
                            break;
                        case 2:
                        case 1:
                            n(a) ? (i = a, g = b) : (h = a, i = b || j);
                        case 0:
                            break;
                        default:
                            throw"Expected between 1-3 arguments [params, success, error], got " + arguments.length + " arguments."
                    }
                    var k = f ? this : c;
                    q[e].call(this, h, k, i, g)
                }
            }), q.bind = function (a) {
                return h(d, l({}, e, a), f)
            }, q
        }

        var i = {
            get: {method: "GET"},
            save: {method: "POST"},
            query: {method: "GET", isArray: !0},
            remove: {method: "DELETE"},
            "delete": {method: "DELETE"}
        }, j = b.noop, k = b.forEach, l = b.extend, m = b.copy, n = b.isFunction, o = function (a, b) {
            return d(b)(a)
        };
        return g.prototype = {
            url: function (a) {
                var c, d, g = this, h = this.template;
                a = a || {}, k(this.urlParams, function (f, i) {
                    c = a.hasOwnProperty(i) ? a[i] : g.defaults[i], b.isDefined(c) && null !== c ? (d = e(c), h = h.replace(new RegExp(":" + i + "(\\W)", "g"), d + "$1")) : h = h.replace(new RegExp("(/?):" + i + "(\\W)", "g"), function (a, b, c) {
                        return "/" == c.charAt(0) ? c : b + c
                    })
                }), h = h.replace(/\/?#$/, "");
                var i = [];
                return k(a, function (a, b) {
                    g.urlParams[b] || i.push(f(b) + "=" + f(a))
                }), i.sort(), h = h.replace(/\/*$/, ""), h + (i.length ? "?" + i.join("&") : "")
            }
        }, h
    }])
}(window, window.angular), function (a, b, c) {
    "use strict";
    b.module("ngCookies", ["ng"]).factory("$cookies", ["$rootScope", "$browser", function (a, d) {
        function e() {
            var a, e, f, i;
            for (a in h) k(g[a]) && d.cookies(a, c);
            for (a in g) e = g[a], b.isString(e) ? e !== h[a] && (d.cookies(a, e), i = !0) : b.isDefined(h[a]) ? g[a] = h[a] : delete g[a];
            if (i) {
                i = !1, f = d.cookies();
                for (a in g) g[a] !== f[a] && (k(f[a]) ? delete g[a] : g[a] = f[a], i = !0)
            }
        }

        var f, g = {}, h = {}, i = !1, j = b.copy, k = b.isUndefined;
        return d.addPollFn(function () {
            var b = d.cookies();
            f != b && (f = b, j(b, h), j(b, g), i && a.$apply())
        })(), i = !0, a.$watch(e), g
    }]).factory("$cookieStore", ["$cookies", function (a) {
        return {
            get: function (c) {
                var d = a[c];
                return d ? b.fromJson(d) : d
            }, put: function (c, d) {
                a[c] = b.toJson(d)
            }, remove: function (b) {
                delete a[b]
            }
        }
    }])
}(window, window.angular), function (a, b, c) {
    "use strict";

    function d(a) {
        var b, c = {}, d = a.split(",");
        for (b = 0; b < d.length; b++) c[d[b]] = !0;
        return c
    }

    function e(a, c) {
        function d(a, d, g, h) {
            if (d = b.lowercase(d), w[d]) for (; q.last() && x[q.last()];) e("", q.last());
            v[d] && q.last() == d && e("", d), h = s[d] || !!h, h || q.push(d);
            var i = {};
            g.replace(l, function (a, b, c, d, e) {
                var g = c || d || e || "";
                i[b] = f(g)
            }), c.start && c.start(d, i, h)
        }

        function e(a, d) {
            var e, f = 0;
            if (d = b.lowercase(d)) for (f = q.length - 1; f >= 0 && q[f] != d; f--) ;
            if (f >= 0) {
                for (e = q.length - 1; e >= f; e--) c.end && c.end(q[e]);
                q.length = f
            }
        }

        var g, h, i, q = [], r = a;
        for (q.last = function () {
            return q[q.length - 1]
        }; a;) {
            if (h = !0, q.last() && y[q.last()]) a = a.replace(new RegExp("(.*)<\\s*\\/\\s*" + q.last() + "[^>]*>", "i"), function (a, b) {
                return b = b.replace(o, "$1").replace(p, "$1"), c.chars && c.chars(f(b)), ""
            }), e("", q.last()); else if (0 === a.indexOf("<!--") ? (g = a.indexOf("-->"), g >= 0 && (c.comment && c.comment(a.substring(4, g)), a = a.substring(g + 3), h = !1)) : n.test(a) ? (i = a.match(k), i && (a = a.substring(i[0].length), i[0].replace(k, e), h = !1)) : m.test(a) && (i = a.match(j), i && (a = a.substring(i[0].length), i[0].replace(j, d), h = !1)), h) {
                g = a.indexOf("<");
                var t = 0 > g ? a : a.substring(0, g);
                a = 0 > g ? "" : a.substring(g), c.chars && c.chars(f(t))
            }
            if (a == r) throw"Parse Error: " + a;
            r = a
        }
        e()
    }

    function f(a) {
        return C.innerHTML = a.replace(/</g, "&lt;"), C.innerText || C.textContent || ""
    }

    function g(a) {
        return a.replace(/&/g, "&amp;").replace(r, function (a) {
            return "&#" + a.charCodeAt(0) + ";"
        }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function h(a) {
        var c = !1, d = b.bind(a, a.push);
        return {
            start: function (a, e, f) {
                a = b.lowercase(a), !c && y[a] && (c = a), c || 1 != z[a] || (d("<"), d(a), b.forEach(e, function (a, c) {
                    var e = b.lowercase(c);
                    1 != B[e] || A[e] === !0 && !a.match(q) || (d(" "), d(c), d('="'), d(g(a)), d('"'))
                }), d(f ? "/>" : ">"))
            }, end: function (a) {
                a = b.lowercase(a), c || 1 != z[a] || (d("</"), d(a), d(">")), a == c && (c = !1)
            }, chars: function (a) {
                c || d(g(a))
            }
        }
    }

    var i = function (a) {
            var b = [];
            return e(a, h(b)), b.join("")
        }, j = /^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/,
        k = /^<\s*\/\s*([\w:-]+)[^>]*>/, l = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
        m = /^</, n = /^<\s*\//, o = /<!--(.*?)-->/g, p = /<!\[CDATA\[(.*?)]]>/g, q = /^((ftp|https?):\/\/|mailto:|#)/i,
        r = /([^\#-~| |!])/g, s = d("area,br,col,hr,img,wbr"), t = d("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
        u = d("rp,rt"), v = b.extend({}, u, t),
        w = b.extend({}, t, d("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),
        x = b.extend({}, u, d("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
        y = d("script,style"), z = b.extend({}, s, w, x, v), A = d("background,cite,href,longdesc,src,usemap"),
        B = b.extend({}, A, d("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,span,start,summary,target,title,type,valign,value,vspace,width")),
        C = document.createElement("pre");
    b.module("ngSanitize", []).value("$sanitize", i), b.module("ngSanitize").directive("ngBindHtml", ["$sanitize", function (a) {
        return function (b, c, d) {
            c.addClass("ng-binding").data("$binding", d.ngBindHtml), b.$watch(d.ngBindHtml, function (b) {
                b = a(b), c.html(b || "")
            })
        }
    }]), b.module("ngSanitize").filter("linky", function () {
        var a = /((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s\.\;\,\(\)\{\}\<\>]/, b = /^mailto:/;
        return function (c) {
            if (!c) return c;
            for (var d, e, f, g = c, i = [], j = h(i); d = g.match(a);) e = d[0], d[2] == d[3] && (e = "mailto:" + e), f = d.index, j.chars(g.substr(0, f)), j.start("a", {href: e}), j.chars(d[0].replace(b, "")), j.end("a"), g = g.substring(f + d[0].length);
            return j.chars(g), i.join("")
        }
    })
}(window, window.angular), function () {
    function g(a) {
        throw a
    }

    function aa(a) {
        return function () {
            return this[a]
        }
    }

    function r(a) {
        return function () {
            return a
        }
    }

    function ca() {
    }

    function da(a) {
        a.mb = function () {
            return a.bd ? a.bd : a.bd = new a
        }
    }

    function ea(a) {
        var b = typeof a;
        if ("object" == b) {
            if (!a) return "null";
            if (a instanceof Array) return "array";
            if (a instanceof Object) return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }

    function u(a) {
        return a !== j
    }

    function fa(a) {
        var b = ea(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function v(a) {
        return "string" == typeof a
    }

    function ga(a) {
        return "number" == typeof a
    }

    function ha(a) {
        var b = typeof a;
        return "object" == b && a != l || "function" == b
    }

    function ia(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ja(a, b, c) {
        if (a || g(Error()), 2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                return Array.prototype.unshift.apply(c, d), a.apply(b, c)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }

    function w(a, b, c) {
        return w = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja, w.apply(l, arguments)
    }

    function ka(a, b) {
        function c() {
        }

        c.prototype = b.prototype, a.Vd = b.prototype, a.prototype = new c
    }

    function la(a) {
        if (a = String(a), /^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
            return eval("(" + a + ")")
        } catch (b) {
        }
        g(Error("Invalid JSON string: " + a))
    }

    function ma() {
        this.dc = j
    }

    function na(a, b, c) {
        switch (typeof b) {
            case"string":
                oa(b, c);
                break;
            case"number":
                c.push(isFinite(b) && !isNaN(b) ? b : "null");
                break;
            case"boolean":
                c.push(b);
                break;
            case"undefined":
                c.push("null");
                break;
            case"object":
                if (b == l) {
                    c.push("null");
                    break
                }
                if ("array" == ea(b)) {
                    var d = b.length;
                    c.push("[");
                    for (var e = "", f = 0; d > f; f++) c.push(e), e = b[f], na(a, a.dc ? a.dc.call(b, String(f), e) : e, c), e = ",";
                    c.push("]");
                    break
                }
                c.push("{"), d = "";
                for (f in b) Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], "function" != typeof e && (c.push(d), oa(f, c), c.push(":"), na(a, a.dc ? a.dc.call(b, f, e) : e, c), d = ","));
                c.push("}");
                break;
            case"function":
                break;
            default:
                g(Error("Unknown type: " + typeof b))
        }
    }

    function oa(a, b) {
        b.push('"', a.replace(qa, function (a) {
            if (a in pa) return pa[a];
            var b = a.charCodeAt(0), c = "\\u";
            return 16 > b ? c += "000" : 256 > b ? c += "00" : 4096 > b && (c += "0"), pa[a] = c + b.toString(16)
        }), '"')
    }

    function y(a) {
        if ("undefined" != typeof JSON && u(JSON.stringify)) a = JSON.stringify(a); else {
            var b = [];
            na(new ma, a, b), a = b.join("")
        }
        return a
    }

    function ra(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            e >= 55296 && 56319 >= e && (e -= 55296, d++, z(d < a.length, "Surrogate pair missing trail surrogate."), e = 65536 + (e << 10) + (a.charCodeAt(d) - 56320)), 128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (65536 > e ? b[c++] = e >> 12 | 224 : (b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128), b[c++] = e >> 6 & 63 | 128), b[c++] = 63 & e | 128)
        }
        return b
    }

    function A(a, b, c, d) {
        var e;
        b > d ? e = "at least " + b : d > c && (e = 0 === c ? "none" : "no more than " + c), e && g(Error(a + " failed: Was called with " + d + (1 === d ? " argument." : " arguments.") + " Expects " + e + "."))
    }

    function B(a, b, c) {
        var d = "";
        switch (b) {
            case 1:
                d = c ? "first" : "First";
                break;
            case 2:
                d = c ? "second" : "Second";
                break;
            case 3:
                d = c ? "third" : "Third";
                break;
            case 4:
                d = c ? "fourth" : "Fourth";
                break;
            default:
                sa.assert(o, "errorPrefix_ called with argumentNumber > 4.  Need to update it?")
        }
        return a + " failed: " + (d + " argument ")
    }

    function C(a, b, c, d) {
        (!d || u(c)) && "function" != ea(c) && g(Error(B(a, b, d) + "must be a valid function."))
    }

    function ta(a, b, c) {
        u(c) && (!ha(c) || c === l) && g(Error(B(a, b, k) + "must be a valid context object."))
    }

    function D(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }

    function ua(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b) ? a[b] : void 0
    }

    function xa(a) {
        return v(a) && 0 !== a.length && !va.test(a)
    }

    function ya(a, b, c) {
        (!c || u(b)) && za(B(a, 1, c), b)
    }

    function za(a, b, c, d) {
        if (c || (c = 0), d || (d = []), u(b) || g(Error(a + "contains undefined" + Aa(d))), "function" == ea(b) && g(Error(a + "contains a function" + Aa(d) + " with contents: " + b.toString())), Ba(b) && g(Error(a + "contains " + b.toString() + Aa(d))), c > 1e3 && g(new TypeError(a + "contains a cyclic object value (" + d.slice(0, 100).join(".") + "...)")), v(b) && b.length > 10485760 / 3 && 10485760 < ra(b).length && g(Error(a + "contains a string greater than 10485760 utf8 bytes" + Aa(d) + " ('" + b.substring(0, 50) + "...')")), ha(b)) for (var e in b) D(b, e) && (".priority" !== e && ".value" !== e && ".sv" !== e && !xa(e) && g(Error(a + "contains an invalid key (" + e + ")" + Aa(d) + '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')), d.push(e), za(a, b[e], c + 1, d), d.pop())
    }

    function Aa(a) {
        return 0 == a.length ? "" : " in property '" + a.join(".") + "'"
    }

    function Ca(a, b) {
        ha(b) || g(Error(B(a, 1, o) + " must be an object containing the children to replace.")), ya(a, b, o)
    }

    function Da(a, b, c, d) {
        (!d || u(c)) && c !== l && !ga(c) && !v(c) && (!ha(c) || !D(c, ".sv")) && g(Error(B(a, b, d) + "must be a valid firebase priority (a string, number, or null)."))
    }

    function Ea(a, b, c) {
        if (!c || u(b)) switch (b) {
            case"value":
            case"child_added":
            case"child_removed":
            case"child_changed":
            case"child_moved":
                break;
            default:
                g(Error(B(a, 1, c) + 'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".'))
        }
    }

    function Fa(a, b) {
        u(b) && !xa(b) && g(Error(B(a, 2, k) + 'was an invalid key: "' + b + '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").'))
    }

    function Ga(a, b) {
        (!v(b) || 0 === b.length || wa.test(b)) && g(Error(B(a, 1, o) + 'was an invalid path: "' + b + '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"'))
    }

    function E(a, b) {
        ".info" === F(b) && g(Error(a + " failed: Can't modify data under /.info/"))
    }

    function H(a, b, c, d, e, f, h) {
        this.n = a, this.path = b, this.Ba = c, this.ca = d, this.ua = e, this.za = f, this.Sa = h, u(this.ca) && u(this.za) && u(this.Ba) && g("Query: Can't combine startAt(), endAt(), and limit().")
    }

    function Ia(a) {
        var b = {};
        return u(a.ca) && (b.sp = a.ca), u(a.ua) && (b.sn = a.ua), u(a.za) && (b.ep = a.za), u(a.Sa) && (b.en = a.Sa), u(a.Ba) && (b.l = a.Ba), u(a.ca) && u(a.ua) && a.ca === l && a.ua === l && (b.vf = "l"), b
    }

    function Ha(a, b, c) {
        var d = {};
        return b && c ? (d.cancel = b, C(a, 3, d.cancel, k), d.T = c, ta(a, 4, d.T)) : b && ("object" == typeof b && b !== l ? d.T = b : "function" == typeof b ? d.cancel = b : g(Error(B(a, 3, k) + "must either be a cancel callback or a context object."))), d
    }

    function K(a) {
        if (a instanceof K) return a;
        if (1 == arguments.length) {
            this.m = a.split("/");
            for (var b = 0, c = 0; c < this.m.length; c++) 0 < this.m[c].length && (this.m[b] = this.m[c], b++);
            this.m.length = b, this.Z = 0
        } else this.m = arguments[0], this.Z = arguments[1]
    }

    function F(a) {
        return a.Z >= a.m.length ? l : a.m[a.Z]
    }

    function Ka(a) {
        var b = a.Z;
        return b < a.m.length && b++, new K(a.m, b)
    }

    function La(a, b) {
        var c = F(a);
        return c === l ? b : c === F(b) ? La(Ka(a), Ka(b)) : void g("INTERNAL ERROR: innerPath (" + b + ") is not within outerPath (" + a + ")")
    }

    function Ma() {
        this.children = {}, this.pc = 0, this.value = l
    }

    function Na(a, b, c) {
        this.Ca = a ? a : "", this.Bb = b ? b : l, this.z = c ? c : new Ma
    }

    function L(a, b) {
        for (var c, d = b instanceof K ? b : new K(b), e = a; (c = F(d)) !== l;) e = new Na(c, e, ua(e.z.children, c) || new Ma), d = Ka(d);
        return e
    }

    function M(a, b) {
        z("undefined" != typeof b), a.z.value = b, Oa(a)
    }

    function Pa(a, b, c, d) {
        c && !d && b(a), a.w(function (a) {
            Pa(a, b, k, d)
        }), c && d && b(a)
    }

    function Qa(a, b, c) {
        for (a = c ? a : a.parent(); a !== l;) {
            if (b(a)) return k;
            a = a.parent()
        }
        return o
    }

    function Oa(a) {
        if (a.Bb !== l) {
            var b = a.Bb, c = a.Ca, d = a.f(), e = D(b.z.children, c);
            d && e ? (delete b.z.children[c], b.z.pc--, Oa(b)) : !d && !e && (b.z.children[c] = a.z, b.z.pc++, Oa(b))
        }
    }

    function Ra(a, b) {
        this.Pa = a ? a : Sa, this.ba = b ? b : Ta
    }

    function Sa(a, b) {
        return b > a ? -1 : a > b ? 1 : 0
    }

    function Ua(a, b) {
        for (var c, d = a.ba, e = l; !d.f();) {
            if (c = a.Pa(b, d.key), 0 === c) {
                if (d.left.f()) return e ? e.key : l;
                for (d = d.left; !d.right.f();) d = d.right;
                return d.key
            }
            0 > c ? d = d.left : c > 0 && (e = d, d = d.right)
        }
        g(Error("Attempted to find predecessor key for a nonexistent key.  What gives?"))
    }

    function Va(a, b) {
        for (this.jd = b, this.Rb = []; !a.f();) this.Rb.push(a), a = a.left
    }

    function Wa(a) {
        if (0 === a.Rb.length) return l;
        var b, c = a.Rb.pop();
        for (b = a.jd ? a.jd(c.key, c.value) : {
            key: c.key,
            value: c.value
        }, c = c.right; !c.f();) a.Rb.push(c), c = c.left;
        return b
    }

    function Xa(a, b, c, d, e) {
        this.key = a, this.value = b, this.color = c != l ? c : k, this.left = d != l ? d : Ta, this.right = e != l ? e : Ta
    }

    function Ya(a) {
        return a.left.f() ? a : Ya(a.left)
    }

    function bb(a) {
        return a.left.f() ? Ta : (!a.left.O() && !a.left.left.O() && (a = cb(a)), a = a.copy(l, l, l, bb(a.left), l), Za(a))
    }

    function Za(a) {
        return a.right.O() && !a.left.O() && (a = fb(a)), a.left.O() && a.left.left.O() && (a = db(a)), a.left.O() && a.right.O() && (a = eb(a)), a
    }

    function cb(a) {
        return a = eb(a), a.right.left.O() && (a = a.copy(l, l, l, l, db(a.right)), a = fb(a), a = eb(a)), a
    }

    function fb(a) {
        var b;
        return b = a.copy(l, l, k, l, a.right.left), a.right.copy(l, l, a.color, b, l)
    }

    function db(a) {
        var b;
        return b = a.copy(l, l, k, a.left.right, l), a.left.copy(l, l, a.color, l, b)
    }

    function eb(a) {
        var b, c;
        return b = a.left.copy(l, l, !a.left.color, l, l), c = a.right.copy(l, l, !a.right.color, l, l), a.copy(l, l, !a.color, b, c)
    }

    function gb() {
    }

    function kb() {
    }

    function lb() {
        this.B = [], this.oc = [], this.rd = [], this.Xb = [], this.Xb[0] = 128;
        for (var a = 1; 64 > a; ++a) this.Xb[a] = 0;
        this.reset()
    }

    function mb(a, b) {
        var c;
        c || (c = 0);
        for (var d = a.rd, e = c; c + 64 > e; e += 4) d[e / 4] = b[e] << 24 | b[e + 1] << 16 | b[e + 2] << 8 | b[e + 3];
        for (e = 16; 80 > e; e++) {
            var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
            d[e] = 4294967295 & (f << 1 | f >>> 31)
        }
        c = a.B[0];
        for (var g, h = a.B[1], i = a.B[2], j = a.B[3], k = a.B[4], e = 0; 80 > e; e++) 40 > e ? 20 > e ? (f = j ^ h & (i ^ j), g = 1518500249) : (f = h ^ i ^ j, g = 1859775393) : 60 > e ? (f = h & i | j & (h | i), g = 2400959708) : (f = h ^ i ^ j, g = 3395469782), f = (c << 5 | c >>> 27) + f + k + g + d[e] & 4294967295, k = j, j = i, i = 4294967295 & (h << 30 | h >>> 2), h = c, c = f;
        a.B[0] = a.B[0] + c & 4294967295, a.B[1] = a.B[1] + h & 4294967295, a.B[2] = a.B[2] + i & 4294967295, a.B[3] = a.B[3] + j & 4294967295, a.B[4] = a.B[4] + k & 4294967295
    }

    function nb() {
        this.Oa = {}, this.length = 0
    }

    function qb(a, b, c, d) {
        this.host = a.toLowerCase(), this.domain = this.host.substr(this.host.indexOf(".") + 1), this.ec = b, this.ub = c, this.ea = d || ob.getItem(a) || this.host
    }

    function rb(a, b) {
        b !== a.ea && (a.ea = b, "s-" === a.ea.substr(0, 2) && ob.setItem(a.host, a.ea))
    }

    function wb() {
        return ba.navigator ? ba.navigator.userAgent : l
    }

    function Gb(a, b) {
        if (fa(a) || g(Error("encodeByteArray takes an array as a parameter")), !Eb) {
            Eb = {}, Fb = {};
            for (var c = 0; 65 > c; c++) Eb[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c), Fb[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c)
        }
        for (var c = b ? Fb : Eb, d = [], e = 0; e < a.length; e += 3) {
            var f = a[e], h = e + 1 < a.length, i = h ? a[e + 1] : 0, j = e + 2 < a.length, k = j ? a[e + 2] : 0,
                l = f >> 2, f = (3 & f) << 4 | i >> 4, i = (15 & i) << 2 | k >> 6, k = 63 & k;
            j || (k = 64, h || (i = 64)), d.push(c[l], c[f], c[i], c[k])
        }
        return d.join("")
    }

    function z(a, b) {
        a || g(Error("Firebase INTERNAL ASSERT FAILED:" + b))
    }

    function Jb(a) {
        var b = ra(a), a = new lb;
        a.update(b);
        var b = [], c = 8 * a.Sc;
        56 > a.ob ? a.update(a.Xb, 56 - a.ob) : a.update(a.Xb, 64 - (a.ob - 56));
        for (var d = 63; d >= 56; d--) a.oc[d] = 255 & c, c /= 256;
        for (mb(a, a.oc), d = c = 0; 5 > d; d++) for (var e = 24; e >= 0; e -= 8) b[c++] = a.B[d] >> e & 255;
        return Gb(b)
    }

    function Kb() {
        for (var a = "", b = 0; b < arguments.length; b++) a = fa(arguments[b]) ? a + Kb.apply(l, arguments[b]) : "object" == typeof arguments[b] ? a + y(arguments[b]) : a + arguments[b], a += " ";
        return a
    }

    function Nb() {
        if (Mb === k && (Mb = o, Lb === l && "true" === ob.getItem("logging_enabled") && Ob(k)), Lb) {
            var a = Kb.apply(l, arguments);
            Lb(a)
        }
    }

    function Pb(a) {
        return function () {
            Nb(a, arguments)
        }
    }

    function Qb() {
        if ("undefined" != typeof console) {
            var a = "FIREBASE INTERNAL ERROR: " + Kb.apply(l, arguments);
            "undefined" != typeof console.error ? console.error(a) : console.log(a)
        }
    }

    function Rb() {
        var a = Kb.apply(l, arguments);
        g(Error("FIREBASE FATAL ERROR: " + a))
    }

    function N() {
        if ("undefined" != typeof console) {
            var a = "FIREBASE WARNING: " + Kb.apply(l, arguments);
            "undefined" != typeof console.warn ? console.warn(a) : console.log(a)
        }
    }

    function Ba(a) {
        return ga(a) && (a != a || a == Number.POSITIVE_INFINITY || a == Number.NEGATIVE_INFINITY)
    }

    function Sb(a, b) {
        return a !== b ? a === l ? -1 : b === l ? 1 : typeof a != typeof b ? "number" == typeof a ? -1 : 1 : a > b ? 1 : -1 : 0
    }

    function Tb(a, b) {
        if (a === b) return 0;
        var c = Ub(a), d = Ub(b);
        return c !== l ? d !== l ? c - d : -1 : d !== l ? 1 : b > a ? -1 : 1
    }

    function Vb(a, b) {
        return b && a in b ? b[a] : void g(Error("Missing required key (" + a + ") in object: " + y(b)))
    }

    function Ja(a) {
        if ("object" != typeof a || a === l) return y(a);
        var b, c = [];
        for (b in a) c.push(b);
        c.sort(), b = "{";
        for (var d = 0; d < c.length; d++) 0 !== d && (b += ","), b += y(c[d]), b += ":", b += Ja(a[c[d]]);
        return b + "}"
    }

    function Wb(a, b) {
        if (a.length <= b) return [a];
        for (var c = [], d = 0; d < a.length; d += b) d + b > a ? c.push(a.substring(d, a.length)) : c.push(a.substring(d, d + b));
        return c
    }

    function Xb(a, b) {
        if ("array" == ea(a)) for (var c = 0; c < a.length; ++c) b(c, a[c]); else Yb(a, b)
    }

    function Zb(a) {
        z(!Ba(a));
        var b, c, d, e;
        for (0 === a ? (d = c = 0, b = -(1 / 0) === 1 / a ? 1 : 0) : (b = 0 > a, a = Math.abs(a), a >= Math.pow(2, -1022) ? (d = Math.min(Math.floor(Math.log(a) / Math.LN2), 1023), c = d + 1023, d = Math.round(a * Math.pow(2, 52 - d) - Math.pow(2, 52))) : (c = 0, d = Math.round(a / Math.pow(2, -1074)))), e = [], a = 52; a; a -= 1) e.push(d % 2 ? 1 : 0), d = Math.floor(d / 2);
        for (a = 11; a; a -= 1) e.push(c % 2 ? 1 : 0), c = Math.floor(c / 2);
        for (e.push(b ? 1 : 0), e.reverse(), b = e.join(""), c = "", a = 0; 64 > a; a += 8) d = parseInt(b.substr(a, 8), 2).toString(16), 1 === d.length && (d = "0" + d), c += d;
        return c.toLowerCase()
    }

    function Ub(a) {
        return $b.test(a) && (a = Number(a), a >= -2147483648 && 2147483647 >= a) ? a : l
    }

    function ac(a) {
        try {
            a()
        } catch (b) {
            setTimeout(function () {
                g(b)
            })
        }
    }

    function bc(a, b) {
        this.D = a, z(this.D !== l, "LeafNode shouldn't be created with null value."), this.Za = "undefined" != typeof b ? b : l
    }

    function dc(a, b) {
        return Sb(a.ha, b.ha) || Tb(a.name, b.name)
    }

    function ec(a, b) {
        return Tb(a.name, b.name)
    }

    function fc(a, b) {
        return Tb(a, b)
    }

    function Q(a, b) {
        this.o = a || new Ra(fc), this.Za = "undefined" != typeof b ? b : l
    }

    function gc(a, b, c) {
        Q.call(this, a, c), b === l && (b = new Ra(dc), a.Aa(function (a, c) {
            b = b.na({name: a, ha: c.j()}, c)
        })), this.ta = b
    }

    function R(a, b) {
        if (a === l) return P;
        var c = l;
        if ("object" == typeof a && ".priority" in a ? c = a[".priority"] : "undefined" != typeof b && (c = b), z(c === l || "string" == typeof c || "number" == typeof c || "object" == typeof c && ".sv" in c), "object" == typeof a && ".value" in a && a[".value"] !== l && (a = a[".value"]), "object" != typeof a || ".sv" in a) return new bc(a, c);
        if (a instanceof Array) {
            var d = P;
            return Yb(a, function (b, c) {
                if (D(a, c) && "." !== c.substring(0, 1)) {
                    var e = R(b);
                    (e.N() || !e.f()) && (d = d.G(c, e))
                }
            }), d.Ea(c)
        }
        var e = [], f = {}, g = o;
        Xb(a, function (b, c) {
            if ("string" != typeof c || "." !== c.substring(0, 1)) {
                var d = R(a[c]);
                d.f() || (g = g || d.j() !== l, e.push({name: c, ha: d.j()}), f[c] = d)
            }
        });
        var h = ic(e, f, o);
        if (g) {
            var i = ic(e, f, k);
            return new gc(h, i, c)
        }
        return new Q(h, c)
    }

    function kc(a) {
        this.count = parseInt(Math.log(a + 1) / jc), this.Xc = this.count - 1, this.td = a + 1 & parseInt(Array(this.count + 1).join("1"), 2)
    }

    function ic(a, b, c) {
        function d(d, f) {
            var g = j - d, k = j;
            j -= d;
            var m = a[g].name, g = new Xa(c ? a[g] : m, b[m], f, l, e(g + 1, k));
            h ? h.left = g : i = g, h = g
        }

        function e(d, f) {
            var g = f - d;
            if (0 == g) return l;
            if (1 == g) {
                var g = a[d].name, h = c ? a[d] : g;
                return new Xa(h, b[g], o, l, l)
            }
            var h = parseInt(g / 2) + d, i = e(d, h), j = e(h + 1, f), g = a[h].name, h = c ? a[h] : g;
            return new Xa(h, b[g], o, i, j)
        }

        var f = c ? dc : ec;
        a.sort(f);
        var g, f = new kc(a.length), h = l, i = l, j = a.length;
        for (g = 0; g < f.count; ++g) {
            var m = !(f.td & 1 << f.Xc);
            f.Xc--;
            var n = Math.pow(2, f.count - (g + 1));
            m ? d(n, o) : (d(n, o), d(n, k))
        }
        return g = i, f = c ? dc : fc, g !== l ? new Ra(f, g) : new Ra(f)
    }

    function cc(a) {
        return "number" == typeof a ? "number:" + Zb(a) : "string:" + a
    }

    function S(a, b) {
        this.z = a, this.bc = b
    }

    function mc(a) {
        z("array" == ea(a) && 0 < a.length), this.sd = a, this.sb = {}
    }

    function nc(a, b) {
        var c, d = a.sd;
        a:{
            c = function (a) {
                return a === b
            };
            for (var e = d.length, f = v(d) ? d.split("") : d, g = 0; e > g; g++) if (g in f && c.call(j, f[g])) {
                c = g;
                break a
            }
            c = -1
        }
        z(0 > c ? l : v(d) ? d.charAt(c) : d[c], "Unknown event: " + b)
    }

    function oc() {
        mc.call(this, ["visible"]);
        var a, b;
        if ("undefined" != typeof document && "undefined" != typeof document.addEventListener && ("undefined" != typeof document.hidden ? (b = "visibilitychange", a = "hidden") : "undefined" != typeof document.mozHidden ? (b = "mozvisibilitychange", a = "mozHidden") : "undefined" != typeof document.msHidden ? (b = "msvisibilitychange", a = "msHidden") : "undefined" != typeof document.webkitHidden && (b = "webkitvisibilitychange", a = "webkitHidden")), this.hb = k, b) {
            var c = this;
            document.addEventListener(b, function () {
                var b = !document[a];
                b !== c.hb && (c.hb = b, c.Uc("visible", b))
            }, o)
        }
    }

    function pc(a) {
        this.Gc = a, this.Zb = [], this.Ra = 0, this.qc = -1, this.Ja = l
    }

    function Yb(a, b) {
        for (var c in a) b.call(j, a[c], c, a)
    }

    function qc(a) {
        var b, c = {};
        for (b in a) c[b] = a[b];
        return c
    }

    function rc() {
        this.jb = {}
    }

    function sc(a, b, c) {
        u(c) || (c = 1), D(a.jb, b) || (a.jb[b] = 0), a.jb[b] += c
    }

    function tc(a) {
        this.ud = a, this.Qb = l
    }

    function uc(a, b) {
        this.Pc = {}, this.hc = new tc(a), this.u = b, setTimeout(w(this.gd, this), 10 + 6e4 * Math.random())
    }

    function xc(a) {
        return a = a.toString(), vc[a] || (vc[a] = new rc), vc[a]
    }

    function T(a, b, c) {
        this.rc = a, this.e = Pb(this.rc), this.frames = this.qb = l, this.Rc = 0, this.$ = xc(b), this.Qa = (b.ec ? "wss://" : "ws://") + b.ea + "/.ws?v=5", b.host !== b.ea && (this.Qa = this.Qa + "&ns=" + b.ub), c && (this.Qa = this.Qa + "&s=" + c)
    }

    function Bc(a, b) {
        if (a.frames.push(b), a.frames.length == a.Rc) {
            var c = a.frames.join("");
            a.frames = l, c = "undefined" != typeof JSON && u(JSON.parse) ? JSON.parse(c) : la(c), a.Fd(c)
        }
    }

    function Ac(a) {
        clearInterval(a.qb), a.qb = setInterval(function () {
            a.Y.send("0"), Ac(a)
        }, 45e3)
    }

    function Cc() {
        this.set = {}
    }

    function Dc(a, b) {
        for (var c in a.set) D(a.set, c) && b(c, a.set[c])
    }

    function Gc(a, b, c) {
        this.rc = a, this.e = Pb(a), this.Ud = b, this.$ = xc(b), this.gc = c, this.kb = o, this.Mb = function (a) {
            b.host !== b.ea && (a.ns = b.ub);
            var c, d = [];
            for (c in a) a.hasOwnProperty(c) && d.push(c + "=" + a[c]);
            return (b.ec ? "https://" : "http://") + b.ea + "/.lp?" + d.join("&")
        }
    }

    function Jc(a, b, c, d) {
        if (this.Mb = d, this.ga = c, this.Ic = new Cc, this.Db = [], this.sc = Math.floor(1e8 * Math.random()), this.fc = k, this.jc = Hb(), window[Ec + this.jc] = a, window[Fc + this.jc] = b, a = document.createElement("iframe"), a.style.display = "none", document.body) {
            document.body.appendChild(a);
            try {
                a.contentWindow.document || Nb("No IE domain setting required")
            } catch (e) {
                a.src = "javascript:void((function(){document.open();document.domain='" + document.domain + "';document.close();})())"
            }
        } else g("Document body has not initialized. Wait to initialize Firebase until after the document is ready.");
        a.contentDocument ? a.ya = a.contentDocument : a.contentWindow ? a.ya = a.contentWindow.document : a.document && (a.ya = a.document), this.X = a, a = "", this.X.src && "javascript:" === this.X.src.substr(0, 11) && (a = '<script>document.domain="' + document.domain + '";</script>'), a = "<html><body>" + a + "</body></html>";
        try {
            this.X.ya.open(), this.X.ya.write(a), this.X.ya.close()
        } catch (f) {
            Nb("frame writing exception"), f.stack && Nb(f.stack), Nb(f)
        }
    }

    function Lc(a) {
        if (a.mc && a.fc && a.Ic.count() < (0 < a.Db.length ? 2 : 1)) {
            a.sc++;
            var b = {};
            b.id = a.Dd, b.pw = a.Ed, b.ser = a.sc;
            for (var b = a.Mb(b), c = "", d = 0; 0 < a.Db.length && 1870 >= a.Db[0].Yc.length + 30 + c.length;) {
                var e = a.Db.shift(), c = c + "&seg" + d + "=" + e.Nd + "&ts" + d + "=" + e.Sd + "&d" + d + "=" + e.Yc;
                d++
            }
            var b = b + c, f = a.sc;
            a.Ic.add(f);
            var g = function () {
                a.Ic.remove(f), Lc(a)
            }, h = setTimeout(g, 25e3);
            return Kc(a, b, function () {
                clearTimeout(h), g()
            }), k
        }
        return o
    }

    function Kc(a, b, c) {
        setTimeout(function () {
            try {
                if (a.fc) {
                    var d = a.X.ya.createElement("script");
                    d.type = "text/javascript", d.async = k, d.src = b, d.onload = d.onreadystatechange = function () {
                        var a = d.readyState;
                        a && "loaded" !== a && "complete" !== a || (d.onload = d.onreadystatechange = l, d.parentNode && d.parentNode.removeChild(d), c())
                    }, d.onerror = function () {
                        Nb("Long-poll script failed to load: " + b), a.fc = o, a.close()
                    }, a.X.ya.body.appendChild(d)
                }
            } catch (e) {
            }
        }, 1)
    }

    function Mc() {
        var a = [];
        T && T.isAvailable() ? a.push(T) : Xb(Nc, function (b, c) {
            c && c.isAvailable() && a.push(c)
        }), this.ic = a
    }

    function Oc(a, b, c, d, e, f) {
        this.id = a, this.e = Pb("c:" + this.id + ":"), this.Gc = c, this.yb = d, this.R = e, this.Fc = f, this.K = b, this.Yb = [], this.Vc = 0, this.Tc = new Mc, this.va = 0, this.e("Connection created"), Pc(this)
    }

    function Pc(a) {
        var b, c = a.Tc;
        0 < c.ic.length ? b = c.ic[0] : g(Error("No transports available")), a.L = new b("c:" + a.id + ":" + a.Vc++, a.K);
        var d = Qc(a, a.L), e = Rc(a, a.L);
        a.Kb = a.L, a.Ib = a.L, a.A = l, setTimeout(function () {
            a.L && a.L.open(d, e)
        }, 0)
    }

    function Rc(a, b) {
        return function (c) {
            b === a.L ? (a.L = l, c || 0 !== a.va ? 1 === a.va && a.e("Realtime connection lost.") : (a.e("Realtime connection failed."), "s-" === a.K.ea.substr(0, 2) && (ob.removeItem(a.K.ub), a.K.ea = a.K.host)), a.close()) : b === a.A ? (c = a.A, a.A = l,
            (a.Kb === c || a.Ib === c) && a.close()) : a.e("closing an old connection")
        }
    }

    function Qc(a, b) {
        return function (c) {
            if (2 != a.va) if (b === a.Ib) {
                var d = Vb("t", c), c = Vb("d", c);
                if ("c" == d) {
                    if (d = Vb("t", c), "d" in c) if (c = c.d, "h" === d) {
                        var d = c.ts, e = c.v, f = c.h;
                        a.gc = c.s, rb(a.K, f), 0 == a.va && (a.L.start(), c = a.L, a.e("Realtime connection established."), a.L = c, a.va = 1, a.yb && (a.yb(d), a.yb = l), "5" !== e && N("Protocol version mismatch detected"), c = 1 < a.Tc.ic.length ? a.Tc.ic[1] : l) && (a.A = new c("c:" + a.id + ":" + a.Vc++, a.K, a.gc), a.A.open(Qc(a, a.A), Rc(a, a.A)))
                    } else if ("n" === d) {
                        for (a.e("recvd end transmission on primary"), a.Ib = a.A, c = 0; c < a.Yb.length; ++c) a.Vb(a.Yb[c]);
                        a.Yb = [], Sc(a)
                    } else "s" === d ? (a.e("Connection shutdown command received. Shutting down..."), a.Fc && (a.Fc(c), a.Fc = l), a.R = l, a.close()) : "r" === d ? (a.e("Reset packet received.  New host: " + c), rb(a.K, c), 1 === a.va ? a.close() : (Tc(a), Pc(a))) : Qb("e" === d ? "Server Error: " + c : "Unknown control packet command: " + d)
                } else "d" == d && a.Vb(c)
            } else b === a.A ? (d = Vb("t", c), c = Vb("d", c), "c" == d ? "t" in c && (c = c.t, "a" === c ? (a.A.start(), a.e("sending client ack on secondary"), a.A.send({
                t: "c",
                d: {t: "a", d: {}}
            }), a.e("Ending transmission on primary"), a.L.send({
                t: "c",
                d: {t: "n", d: {}}
            }), a.Kb = a.A, Sc(a)) : "r" === c && (a.e("Got a reset on secondary, closing it"), a.A.close(), (a.Kb === a.A || a.Ib === a.A) && a.close())) : "d" == d ? a.Yb.push(c) : g(Error("Unknown protocol layer: " + d))) : a.e("message on old connection")
        }
    }

    function Sc(a) {
        a.Kb === a.A && a.Ib === a.A && (a.e("cleaning up and promoting a connection: " + a.A.rc), a.L = a.A, a.A = l)
    }

    function Tc(a) {
        a.e("Shutting down all connections"), a.L && (a.L.close(), a.L = l), a.A && (a.A.close(), a.A = l)
    }

    function Vc() {
        if (mc.call(this, ["online"]), this.zb = k, "undefined" != typeof window && "undefined" != typeof window.addEventListener) {
            var a = this;
            window.addEventListener("online", function () {
                a.zb || a.Uc("online", k), a.zb = k
            }, o), window.addEventListener("offline", function () {
                a.zb && a.Uc("online", o), a.zb = o
            }, o)
        }
    }

    function Wc(a, b, c, d, e, f) {
        this.id = Xc++, this.e = Pb("p:" + this.id + ":"), this.Na = k, this.fa = {}, this.U = [], this.Ab = 0, this.xb = [], this.P = o, this.pa = 1e3, this.Wb = b || ca, this.Ub = c || ca, this.wb = d || ca, this.Hc = e || ca, this.yc = f || ca, this.K = a, this.Lc = l, this.Hb = {}, this.Md = 0, this.rb = this.Cc = l, Yc(this, 0), oc.mb().Ya("visible", this.Hd, this), -1 === a.host.indexOf("fblocal") && Vc.mb().Ya("online", this.Gd, this)
    }

    function $c(a, b, c, d, e) {
        a.e("Listen on " + b + " for " + c);
        var f = {p: b}, d = jb(d, function (a) {
            return Ia(a)
        });
        "{}" !== c && (f.q = d), f.h = a.yc(b), a.Da("l", f, function (d) {
            a.e("listen response", d), d = d.s, "ok" !== d && ad(a, b, c), e && e(d)
        })
    }

    function bd(a) {
        var b = a.Ga;
        a.P && b && a.Da("auth", {cred: b.vd}, function (c) {
            var d = c.s, c = c.d || "error";
            "ok" !== d && a.Ga === b && delete a.Ga, a.wb("ok" === d), b.Zc ? "ok" !== d && b.Ob && b.Ob(d, c) : (b.Zc = k, b.W && b.W(d, c))
        })
    }

    function cd(a, b, c, d) {
        b = b.toString(), ad(a, b, c) && a.P && (a.e("Unlisten on " + b + " for " + c), b = {p: b}, d = jb(d, function (a) {
            return Ia(a)
        }), "{}" !== c && (b.q = d), a.Da("u", b))
    }

    function dd(a, b, c, d) {
        a.P ? ed(a, "o", b, c, d) : a.xb.push({Jc: b, action: "o", data: c, C: d})
    }

    function ed(a, b, c, d, e) {
        c = {p: c, d: d}, a.e("onDisconnect " + b, c), a.Da(b, c, function (a) {
            e && setTimeout(function () {
                e(a.s)
            }, 0)
        })
    }

    function fd(a, b, c, d, e, f) {
        c = {p: c, d: d}, u(f) && (c.h = f), a.U.push({
            action: b,
            hd: c,
            C: e
        }), a.Ab++, b = a.U.length - 1, a.P && gd(a, b)
    }

    function gd(a, b) {
        var c = a.U[b].action, d = a.U[b].hd, e = a.U[b].C;
        a.U[b].Jd = a.P, a.Da(c, d, function (d) {
            a.e(c + " response", d), delete a.U[b], a.Ab--, 0 === a.Ab && (a.U = []), e && e(d.s)
        })
    }

    function Yc(a, b) {
        z(!a.ia, "Scheduling a connect when we're already connected/ing?"), a.Ta && clearTimeout(a.Ta), a.Ta = setTimeout(function () {
            if (a.Ta = l, a.Na) {
                a.e("Making a connection attempt"), a.Cc = (new Date).getTime(), a.rb = l;
                var b = w(a.Vb, a), c = w(a.yb, a), d = w(a.dd, a), e = a.id + ":" + Zc++;
                a.ia = new Oc(e, a.K, b, c, d, function (b) {
                    N(b + " (" + a.K.toString() + ")"), a.Na = o
                })
            }
        }, b)
    }

    function ad(a, b, c) {
        b = new K(b).toString(), c || (c = "{}");
        var d = a.fa[b][c];
        return delete a.fa[b][c], d
    }

    function hd() {
        this.o = this.D = l
    }

    function id(a, b, c) {
        if (b.f()) a.D = c, a.o = l; else if (a.D !== l) a.D = a.D.xa(b, c); else {
            a.o == l && (a.o = new Cc);
            var d = F(b);
            a.o.contains(d) || a.o.add(d, new hd), a = a.o.get(d), b = Ka(b), id(a, b, c)
        }
    }

    function jd(a, b) {
        if (b.f()) return a.D = l, a.o = l, k;
        if (a.D !== l) {
            if (a.D.N()) return o;
            var c = a.D;
            return a.D = l, c.w(function (b, c) {
                id(a, new K(b), c)
            }), jd(a, b)
        }
        return a.o !== l ? (c = F(b), b = Ka(b), a.o.contains(c) && jd(a.o.get(c), b) && a.o.remove(c), a.o.f() ? (a.o = l, k) : o) : k
    }

    function kd(a, b, c) {
        a.D !== l ? c(b, a.D) : a.w(function (a, d) {
            var e = new K(b.toString() + "/" + a);
            kd(d, e, c)
        })
    }

    function ld() {
        this.qa = P
    }

    function U(a, b) {
        return a.qa.Q(b)
    }

    function V(a, b, c) {
        a.qa = a.qa.xa(b, c)
    }

    function md() {
        this.ra = new ld, this.I = new ld, this.la = new ld, this.Cb = new Na
    }

    function nd(a, b) {
        for (var c = U(a.ra, b), d = U(a.I, b), e = L(a.Cb, b), f = o, g = e; g !== l;) {
            if (g.k() !== l) {
                f = k;
                break
            }
            g = g.parent()
        }
        return f ? o : (c = od(c, d, e), c !== d ? (V(a.I, b, c), k) : o)
    }

    function od(a, b, c) {
        return c.f() ? a : c.k() !== l ? b : (a = a || P, c.w(function (d) {
            var d = d.name(), e = a.M(d), f = b.M(d), g = L(c, d), e = od(e, f, g);
            a = a.G(d, e)
        }), a)
    }

    function pd(a, b) {
        ib(b, function (b) {
            var c = b.Od, b = L(a.Cb, b.path), d = b.k();
            z(d !== l, "pendingPut should not be null."), d === c && M(b, l)
        })
    }

    function qd() {
        this.Ua = []
    }

    function rd(a, b) {
        if (0 !== b.length) for (var c = 0; c < b.length; c++) a.Ua.push(b[c])
    }

    function sd(a) {
        var b = a.W, c = a.md, d = a.Eb;
        ac(function () {
            b(c, d)
        })
    }

    function W(a, b, c, d) {
        this.type = a, this.sa = b, this.aa = c, this.Eb = d
    }

    function td(a) {
        this.J = a, this.ma = [], this.uc = new qd
    }

    function ud(a, b, c, d, e) {
        a.ma.push({type: b, W: c, cancel: d, T: e});
        var d = [], f = vd(a.i);
        a.pb && f.push(new W("value", a.i));
        for (var g = 0; g < f.length; g++) if (f[g].type === b) {
            var h = new J(a.J.n, a.J.path);
            f[g].aa && (h = h.F(f[g].aa)), d.push({W: e ? w(c, e) : c, md: new S(f[g].sa, h), Eb: f[g].Eb})
        }
        rd(a.uc, d)
    }

    function wd(a, b) {
        for (var c = [], d = 0; d < b.length; d++) {
            var e = b[d], f = e.type, g = new J(a.J.n, a.J.path);
            for (b[d].aa && (g = g.F(b[d].aa)), g = new S(b[d].sa, g), "value" !== e.type || g.nb() ? "value" !== e.type && (f += " " + g.name()) : f += "(" + g.V() + ")", Nb(a.J.n.u.id + ": event:" + a.J.path + ":" + a.J.La() + ":" + f), f = 0; f < a.ma.length; f++) {
                var h = a.ma[f];
                b[d].type === h.type && c.push({W: h.T ? w(h.W, h.T) : h.W, md: g, Eb: e.Eb})
            }
        }
        rd(a.uc, c)
    }

    function vd(a) {
        var b = [];
        if (!a.N()) {
            var c = l;
            a.w(function (a, d) {
                b.push(new W("child_added", d, a, c)), c = a
            })
        }
        return b
    }

    function xd(a) {
        a.pb || (a.pb = k, wd(a, [new W("value", a.i)]))
    }

    function zd(a, b) {
        td.call(this, a), this.i = b
    }

    function Ad(a, b) {
        this.Pb = a, this.Dc = b
    }

    function Bd(a, b, c, d, e) {
        var f = a.Q(c), g = b.Q(c), d = new Ad(d, e), e = Cd(d, c, f, g), g = !f.f() && !g.f() && f.j() !== g.j();
        if (e || g) for (f = c, c = e; f.parent() !== l;) {
            var h = a.Q(f), e = b.Q(f), i = f.parent();
            if (!d.Pb || L(d.Pb, i).k()) {
                var j = b.Q(i), m = [], f = f.Z < f.m.length ? f.m[f.m.length - 1] : l;
                h.f() ? (h = j.da(f, e), m.push(new W("child_added", e, f, h))) : e.f() ? m.push(new W("child_removed", h, f)) : (h = j.da(f, e), g && m.push(new W("child_moved", e, f, h)), c && m.push(new W("child_changed", e, f, h))), d.Dc(i, j, m)
            }
            g && (g = o, c = k), f = i
        }
    }

    function Cd(a, b, c, d) {
        var e, f = [];
        return c === d ? e = o : c.N() && d.N() ? e = c.k() !== d.k() : c.N() ? (Dd(a, b, P, d, f), e = k) : d.N() ? (Dd(a, b, c, P, f), e = k) : e = Dd(a, b, c, d, f), e ? a.Dc(b, d, f) : c.j() !== d.j() && a.Dc(b, d, l), e
    }

    function Dd(a, b, c, d, e) {
        var f, g, h, i, j = o, m = !a.Pb || !L(a.Pb, b).f(), n = [], p = [], q = [], r = [], s = {}, t = {};
        for (f = c.Va(), h = Wa(f), g = d.Va(), i = Wa(g); h !== l || i !== l;) if (c = h === l ? 1 : i === l ? -1 : h.key === i.key ? 0 : dc({
            name: h.key,
            ha: h.value.j()
        }, {name: i.key, ha: i.value.j()}), 0 > c ? (j = ua(s, h.key), u(j) ? (q.push({
            wc: h,
            Qc: n[j]
        }), n[j] = l) : (t[h.key] = p.length, p.push(h)), j = k, h = Wa(f)) : (c > 0 ? (j = ua(t, i.key), u(j) ? (q.push({
            wc: p[j],
            Qc: i
        }), p[j] = l) : (s[i.key] = n.length, n.push(i)), j = k) : (c = b.F(i.key), (c = Cd(a, c, h.value, i.value)) && (r.push(i), j = k), h.value.j() !== i.value.j() && (q.push({
            wc: h,
            Qc: i
        }), j = k), h = Wa(f)), i = Wa(g)), !m && j) return k;
        for (m = 0; m < p.length; m++) (s = p[m]) && (c = b.F(s.key), Cd(a, c, s.value, P), e.push(new W("child_removed", s.value, s.key)));
        for (m = 0; m < n.length; m++) (s = n[m]) && (c = b.F(s.key), p = d.da(s.key, s.value), Cd(a, c, P, s.value), e.push(new W("child_added", s.value, s.key, p)));
        for (m = 0; m < q.length; m++) s = q[m].wc, n = q[m].Qc, c = b.F(n.key), p = d.da(n.key, n.value), e.push(new W("child_moved", n.value, n.key, p)), (c = Cd(a, c, s.value, n.value)) && r.push(n);
        for (m = 0; m < r.length; m++) a = r[m], p = d.da(a.key, a.value), e.push(new W("child_changed", a.value, a.key, p));
        return j
    }

    function Ed() {
        this.S = this.wa = l, this.set = {}
    }

    function Fd(a) {
        return a.contains("default")
    }

    function Gd(a) {
        return a.wa != l && Fd(a)
    }

    function Hd(a, b) {
        td.call(this, a), this.i = P, this.ac(b, vd(b))
    }

    function Id(a, b, c, d) {
        if (a.N()) return l;
        var e = l;
        return (d ? a.vc : a.w).call(a, function (a, d) {
            return Jd(b, a, d) && (e = a, c--, 0 === c) ? k : void 0
        }), e
    }

    function Jd(a, b, c) {
        for (var d = 0; d < a.length; d++) if (!a[d](b, c.j())) return o;
        return k
    }

    function Kd(a, b) {
        this.u = a, this.g = b, this.Tb = b.qa, this.ka = new Na
    }

    function Nd(a, b, c, d, e) {
        var f, g = a.get(b);
        if (f = g) {
            f = o;
            for (var h = g.ma.length - 1; h >= 0; h--) {
                var i = g.ma[h];
                if (!(c && i.type !== c || d && i.W !== d || e && i.T !== e) && (g.ma.splice(h, 1), f = k, c && d)) break
            }
            f = f && !(0 < g.ma.length)
        }
        return (c = f) && a.remove(b), c
    }

    function Od(a, b, c, d, e, f) {
        var g = b.path(), g = L(a.ka, g), c = c ? c.La() : l, h = [];
        if (c && "default" !== c ? Nd(b, c, d, e, f) && h.push(c) : ib(b.keys(), function (a) {
            Nd(b, a, d, e, f) && h.push(a)
        }), b.f() && M(g, l), c = Ld(g), 0 < h.length && !c) {
            for (var i = g, j = g.parent(), c = o; !c && j;) {
                var m = j.k();
                if (m) {
                    z(!Gd(m));
                    var n = i.name(), p = o;
                    Dc(m, function (a, b) {
                        p = b.zc(n) || p
                    }), p && (c = k)
                }
                i = j, j = j.parent()
            }
            if (i = l, !Gd(b)) {
                j = b.wa, b.wa = l;
                var q = [], r = function (b) {
                    var c = b.k();
                    if (c && Fd(c)) q.push(c.path()), c.wa == l && c.setActive(Md(a, c)); else {
                        if (c) {
                            c.wa != l || c.setActive(Md(a, c));
                            var d = {};
                            Dc(c, function (a, b) {
                                b.i.w(function (a) {
                                    D(d, a) || (d[a] = k, a = c.path().F(a), q.push(a))
                                })
                            })
                        }
                        b.w(r)
                    }
                };
                r(g), i = q, j && j()
            }
            return c ? l : i
        }
        return l
    }

    function Pd(a, b, c) {
        Pa(L(a.ka, b), function (a) {
            (a = a.k()) && Dc(a, function (a, b) {
                xd(b)
            })
        }, c, k)
    }

    function Qd(a, b, c) {
        function d(a) {
            do {
                if (g[a.toString()]) return k;
                a = a.parent()
            } while (a !== l);
            return o
        }

        var e = a.Tb, f = a.g.qa;
        a.Tb = f;
        for (var g = {}, h = 0; h < c.length; h++) g[c[h].toString()] = k;
        Bd(e, f, b, a.ka, function (c, e, f) {
            if (b.contains(c)) {
                var g = d(c);
                g && Pd(a, c, o), a.$b(c, e, f), g && Pd(a, c, k)
            } else a.$b(c, e, f)
        }), d(b) && Pd(a, b, k), Rd(a, b)
    }

    function Rd(a, b) {
        var c = L(a.ka, b);
        Pa(c, function (a) {
            (a = a.k()) && Dc(a, function (a, b) {
                b.Fb()
            })
        }, k, k), Qa(c, function (a) {
            (a = a.k()) && Dc(a, function (a, b) {
                b.Fb()
            })
        }, o)
    }

    function Ld(a) {
        return Qa(a, function (a) {
            return a.k() && Gd(a.k())
        })
    }

    function Md(a, b) {
        if (a.u) {
            var c, d = a.u, e = b.path(), f = b.toString(), g = b.$a(), h = b.keys(), i = Fd(b), j = a.u,
                l = function (d) {
                    if ("ok" !== d) {
                        var e = "Unknown Error";
                        "too_big" === d ? e = "The data requested exceeds the maximum size that can be accessed with a single request." : "permission_denied" == d ? e = "Client doesn't have permission to access the desired data." : "unavailable" == d && (e = "The service is unavailable");
                        var f = Error(d + ": " + e);
                        f.code = d.toUpperCase(), N("on() or once() for " + b.path().toString() + " failed: " + f.toString()), b && (Dc(b, function (a, b) {
                            for (var c = 0; c < b.ma.length; c++) {
                                var d = b.ma[c];
                                d.cancel && (d.T ? w(d.cancel, d.T) : d.cancel)(f)
                            }
                        }), Od(a, b))
                    } else c || (i ? Pd(a, b.path(), k) : ib(h, function (a) {
                        (a = b.get(a)) && xd(a)
                    }), Rd(a, b.path()))
                }, m = b.toString(), n = b.path().toString();
            return j.fa[n] = j.fa[n] || {}, z(!j.fa[n][m], "listen() called twice for same path/queryId."), j.fa[n][m] = {
                $a: b.$a(),
                C: l
            }, j.P && $c(j, n, m, b.$a(), l), function () {
                c = k, cd(d, e, f, g)
            }
        }
        return ca
    }

    function Sd(a, b, c, d, e) {
        var f = b.path(), b = a.lb(f, b, d, e), g = P, h = [];
        return Yb(b, function (b, i) {
            var j = new K(i);
            3 === b || 1 === b ? g = g.G(i, d.Q(j)) : (2 === b && h.push({
                path: f.F(i),
                oa: P
            }), h = h.concat(Td(a, d.Q(j), L(c, j), e)))
        }), [{path: f, oa: g}].concat(h)
    }

    function Ud(a, b, c, d) {
        var e;
        a:{
            var f = L(a.ka, b);
            e = f.parent();
            for (var g = []; e !== l;) {
                var h = e.k();
                if (h !== l) {
                    if (Fd(h)) {
                        e = [{path: b, oa: c}];
                        break a
                    }
                    if (h = a.lb(b, h, c, d), f = ua(h, f.name()), 3 === f || 1 === f) {
                        e = [{path: b, oa: c}];
                        break a
                    }
                    2 === f && g.push({path: b, oa: P})
                }
                f = e, e = e.parent()
            }
            e = g
        }
        return 1 != e.length || e[0].oa.f() && !c.f() ? (g = L(a.ka, b), f = g.k(), f !== l ? Fd(f) ? e.push({
            path: b,
            oa: c
        }) : e = e.concat(Sd(a, f, g, c, d)) : e = e.concat(Td(a, c, g, d)), e) : e
    }

    function Td(a, b, c, d) {
        var e = c.k();
        if (e !== l) return Fd(e) ? [{path: c.path(), oa: b}] : Sd(a, e, c, b, d);
        var f = [];
        return c.w(function (c) {
            var e = b.N() ? P : b.M(c.name()), c = Td(a, e, c, d);
            f = f.concat(c)
        }), f
    }

    function Vd(a, b) {
        return a && "object" == typeof a ? (z(".sv" in a, "Unexpected leaf node or priority contents"), b[a[".sv"]]) : a
    }

    function Wd(a, b) {
        var c, d = Vd(a.j(), b);
        if (a.N()) {
            var e = Vd(a.k(), b);
            return e !== a.k() || d !== a.j() ? new bc(e, d) : a
        }
        return c = a, d !== a.j() && (c = c.Ea(d)), a.w(function (a, d) {
            var e = Wd(d, b);
            e !== d && (c = c.G(a, e))
        }), c
    }

    function Xd(a) {
        this.K = a, this.$ = xc(a), this.u = new Wc(this.K, w(this.Wb, this), w(this.Ub, this), w(this.wb, this), w(this.Hc, this), w(this.yc, this));
        var b = w(function () {
            return new uc(this.$, this.u)
        }, this), a = a.toString();
        wc[a] || (wc[a] = b()), this.nd = wc[a], this.fb = new Na, this.gb = new ld, this.g = new md, this.H = new Kd(this.u, this.g.la), this.Ac = new ld, this.Bc = new Kd(l, this.Ac), Yd(this, "connected", o), Yd(this, "authenticated", o), this.R = new hd, this.tc = 0
    }

    function Zd(a) {
        return a = U(a.Ac, new K(".info/serverTimeOffset")).V() || 0, (new Date).getTime() + a
    }

    function $d(a) {
        return a = a = {timestamp: Zd(a)}, a.timestamp = a.timestamp || (new Date).getTime(), a
    }

    function Yd(a, b, c) {
        b = new K("/.info/" + b), V(a.Ac, b, R(c)), Qd(a.Bc, b, [b])
    }

    function ce(a, b, c, d) {
        var e = R(c);
        dd(a.u, b.toString(), e.V(k), function (c) {
            "ok" === c && id(a.R, b, e), X(d, c)
        })
    }

    function de(a) {
        sc(a.$, "deprecated_on_disconnect"), a.nd.Pc.deprecated_on_disconnect = k
    }

    function X(a, b, c) {
        a && ac(function () {
            if ("ok" == b) a(l, c); else {
                var d = (b || "error").toUpperCase(), e = d;
                c && (e += ": " + c), e = Error(e), e.code = d, a(e)
            }
        })
    }

    function ee(a, b) {
        var c = b || a.fb;
        if (b || fe(a, c), c.k() !== l) {
            var d = ge(a, c);
            if (z(0 < d.length), 2 !== d[0].status && 4 !== d[0].status) {
                for (var e = c.path(), f = 0; f < d.length; f++) z(1 === d[f].status, "tryToSendTransactionQueue_: items in queue should all be run."), d[f].status = 2, d[f].kd++;
                c = U(a.g.I, e).hash(), V(a.g.I, e, U(a.g.la, e));
                for (var g = U(a.gb, e).V(k), h = Hb(), i = {}, j = 0; j < d.length; j++) d[j].nc && (i[d[j].path.toString()] = d[j].path);
                var m, n = [];
                for (m in i) n.push(i[m]);
                for (f = 0; f < n.length; f++) M(L(a.g.Cb, n[f]), h);
                a.u.put(e.toString(), g, function (b) {
                    for (a.e("transaction put response", {path: e.toString(), status: b}), f = 0; f < n.length; f++) {
                        var c = L(a.g.Cb, n[f]), g = c.k();
                        z(g !== l, "sendTransactionQueue_: pendingPut should not be null."), g === h && (M(c, l), V(a.g.I, n[f], U(a.g.ra, n[f])))
                    }
                    if ("ok" === b) {
                        for (b = [], f = 0; f < d.length; f++) d[f].status = 3, d[f].C && (c = he(a, d[f].path), b.push(w(d[f].C, l, l, k, c))), d[f].kc();
                        for (fe(a, L(a.fb, e)), ee(a), f = 0; f < b.length; f++) ac(b[f])
                    } else {
                        if ("datastale" === b) for (f = 0; f < d.length; f++) d[f].status = 4 === d[f].status ? 5 : 1; else for (N("transaction at " + e + " failed: " + b), f = 0; f < d.length; f++) d[f].status = 5, d[f].lc = b;
                        b = ae(a, e), Qd(a.H, b, [e])
                    }
                }, c)
            }
        } else c.nb() && c.w(function (b) {
            ee(a, b)
        })
    }

    function ae(a, b) {
        var c = ie(a, b), d = c.path(), e = ge(a, c);
        if (V(a.g.la, d, U(a.g.I, d)), V(a.gb, d, U(a.g.I, d)), 0 !== e.length) {
            for (var f = c = U(a.g.la, d), g = [], h = 0; h < e.length; h++) {
                var i, j = La(d, e[h].path), m = o;
                if (z(j !== l, "rerunTransactionsUnderNode_: relativePath should not be null."), 5 === e[h].status) m = k, i = e[h].lc; else if (1 === e[h].status) if (25 <= e[h].kd) m = k, i = "maxretry"; else {
                    var n = e[h].update(c.Q(j).V());
                    u(n) ? (za("transaction failed: Data returned ", n), n = R(n), c = c.xa(j, n), e[h].nc && (f = f.xa(j, n))) : (m = k, i = "nodata")
                }
                m && (e[h].status = 3, setTimeout(e[h].kc, 0), e[h].C && (m = new J(a, e[h].path), j = new S(c.Q(j), m), "nodata" === i ? g.push(w(e[h].C, l, l, o, j)) : g.push(w(e[h].C, l, Error(i), o, j))))
            }
            for (i = U(a.g.I, d).j(), c = c.Ea(i), f = f.Ea(i), V(a.gb, d, c), V(a.g.la, d, f), fe(a, a.fb), h = 0; h < g.length; h++) ac(g[h]);
            ee(a)
        }
        return d
    }

    function ie(a, b) {
        for (var c, d = a.fb; (c = F(b)) !== l && d.k() === l;) d = L(d, c), b = Ka(b);
        return d
    }

    function ge(a, b) {
        var c = [];
        return je(a, b, c), c.sort(function (a, b) {
            return a.ed - b.ed
        }), c
    }

    function je(a, b, c) {
        var d = b.k();
        if (d !== l) for (var e = 0; e < d.length; e++) c.push(d[e]);
        b.w(function (b) {
            je(a, b, c)
        })
    }

    function fe(a, b) {
        var c = b.k();
        if (c) {
            for (var d = 0, e = 0; e < c.length; e++) 3 !== c[e].status && (c[d] = c[e], d++);
            c.length = d, M(b, 0 < c.length ? c : l)
        }
        b.w(function (b) {
            fe(a, b)
        })
    }

    function be(a, b) {
        var c = ie(a, b).path(), d = L(a.fb, b);
        return Qa(d, function (a) {
            ke(a)
        }), ke(d), Pa(d, function (a) {
            ke(a)
        }), c
    }

    function ke(a) {
        var b = a.k();
        if (b !== l) {
            for (var c = [], d = -1, e = 0; e < b.length; e++) 4 !== b[e].status && (2 === b[e].status ? (z(d === e - 1, "All SENT items should be at beginning of queue."), d = e, b[e].status = 4, b[e].lc = "set") : (z(1 === b[e].status), b[e].kc(), b[e].C && c.push(w(b[e].C, l, Error("set"), o, l))));
            for (-1 === d ? M(a, l) : b.length = d + 1, e = 0; e < c.length; e++) ac(c[e])
        }
    }

    function he(a, b) {
        var c = new J(a, b);
        return new S(U(a.gb, b), c)
    }

    function Y() {
        this.ab = {}
    }

    function $(a, b, c) {
        this.Gb = a, this.S = b, this.Ca = c
    }

    function J() {
        var a, b, c;
        if (arguments[0] instanceof Xd) c = arguments[0], a = arguments[1]; else {
            A("new Firebase", 1, 2, arguments.length);
            var d = arguments[0];
            b = a = "";
            var e = k, f = "";
            if (v(d)) {
                var h = d.indexOf("//");
                if (h >= 0) var i = d.substring(0, h - 1), d = d.substring(h + 2);
                h = d.indexOf("/"), -1 === h && (h = d.length), a = d.substring(0, h);
                var d = d.substring(h + 1), j = a.split(".");
                if (3 == j.length) {
                    if (h = j[2].indexOf(":"), e = h >= 0 ? "https" === i : k, "firebase" === j[1]) Rb(a + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"); else for (b = j[0], f = "", d = ("/" + d).split("/"), i = 0; i < d.length; i++) if (0 < d[i].length) {
                        h = d[i];
                        try {
                            h = decodeURIComponent(h.replace(/\+/g, " "))
                        } catch (m) {
                        }
                        f += "/" + h
                    }
                    b = b.toLowerCase()
                } else b = l
            }
            e || "undefined" != typeof window && window.location && window.location.protocol && -1 !== window.location.protocol.indexOf("https:") && N("Insecure Firebase access from a secure page. Please use https in calls to new Firebase()."), a = new qb(a, e, b), b = new K(f), e = b.toString(), (d = !v(a.host)) || (d = 0 === a.host.length) || (d = !xa(a.ub)) || (d = 0 !== e.length) && (e && (e = e.replace(/^\/*\.info(\/|$)/, "/")), d = !(v(e) && 0 !== e.length && !wa.test(e))), d && g(Error(B("new Firebase", 1, o) + 'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')), arguments[1] ? arguments[1] instanceof Y ? c = arguments[1] : g(Error("Expected a valid Firebase.Context for second argument to new Firebase()")) : c = Y.mb(), e = a.toString(), d = ua(c.ab, e), d || (d = new Xd(a), c.ab[e] = d), c = d, a = b
        }
        H.call(this, c, a)
    }

    function Ob(a, b) {
        z(!b || a === k || a === o, "Can't turn on custom loggers persistently."), a === k ? ("undefined" != typeof console && ("function" == typeof console.log ? Lb = w(console.log, console) : "object" == typeof console.log && (Lb = function (a) {
            console.log(a)
        })), b && ob.setItem("logging_enabled", "true")) : a ? Lb = a : (Lb = l, ob.removeItem("logging_enabled"))
    }

    var j = void 0, k = !0, l = null, o = !1, s, ba = this;
    Math.floor(2147483648 * Math.random()).toString(36);
    var pa = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "	": "\\t",
            "": "\\u000b"
        }, qa = /\uffff/.test("￿") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g, sa = {},
        va = /[\[\].#$\/]/, wa = /[\[\].#$]/;
    H.prototype.Kc = function () {
        return A("Query.ref", 0, 0, arguments.length), new J(this.n, this.path)
    }, H.prototype.ref = H.prototype.Kc, H.prototype.Ya = function (a, b) {
        A("Query.on", 2, 4, arguments.length), Ea("Query.on", a, o), C("Query.on", 2, b, o);
        var c = Ha("Query.on", arguments[2], arguments[3]);
        return this.n.Nb(this, a, b, c.cancel, c.T), b
    }, H.prototype.on = H.prototype.Ya, H.prototype.vb = function (a, b, c) {
        A("Query.off", 0, 3, arguments.length), Ea("Query.off", a, k), C("Query.off", 2, b, k), ta("Query.off", 3, c), this.n.cc(this, a, b, c)
    }, H.prototype.off = H.prototype.vb, H.prototype.Id = function (a, b) {
        function c(g) {
            f && (f = o, e.vb(a, c), b.call(d.T, g))
        }

        A("Query.once", 2, 4, arguments.length), Ea("Query.once", a, o), C("Query.once", 2, b, o);
        var d = Ha("Query.once", arguments[2], arguments[3]), e = this, f = k;
        this.Ya(a, c, function (b) {
            e.vb(a, c), d.cancel && d.cancel.call(d.T, b)
        })
    }, H.prototype.once = H.prototype.Id, H.prototype.Bd = function (a) {
        return A("Query.limit", 1, 1, arguments.length), (!ga(a) || Math.floor(a) !== a || 0 >= a) && g("Query.limit: First argument must be a positive integer."), new H(this.n, this.path, a, this.ca, this.ua, this.za, this.Sa)
    }, H.prototype.limit = H.prototype.Bd, H.prototype.Rd = function (a, b) {
        return A("Query.startAt", 0, 2, arguments.length), Da("Query.startAt", 1, a, k), Fa("Query.startAt", b), u(a) || (b = a = l), new H(this.n, this.path, this.Ba, a, b, this.za, this.Sa)
    }, H.prototype.startAt = H.prototype.Rd, H.prototype.wd = function (a, b) {
        return A("Query.endAt", 0, 2, arguments.length), Da("Query.endAt", 1, a, k), Fa("Query.endAt", b), new H(this.n, this.path, this.Ba, this.ca, this.ua, a, b)
    }, H.prototype.endAt = H.prototype.wd, H.prototype.La = function () {
        var a = Ja(Ia(this));
        return "{}" === a ? "default" : a
    }, s = K.prototype, s.toString = function () {
        for (var a = "", b = this.Z; b < this.m.length; b++) "" !== this.m[b] && (a += "/" + this.m[b]);
        return a || "/"
    }, s.parent = function () {
        if (this.Z >= this.m.length) return l;
        for (var a = [], b = this.Z; b < this.m.length - 1; b++) a.push(this.m[b]);
        return new K(a, 0)
    }, s.F = function (a) {
        for (var b = [], c = this.Z; c < this.m.length; c++) b.push(this.m[c]);
        if (a instanceof K) for (c = a.Z; c < a.m.length; c++) b.push(a.m[c]); else for (a = a.split("/"), c = 0; c < a.length; c++) 0 < a[c].length && b.push(a[c]);
        return new K(b, 0)
    }, s.f = function () {
        return this.Z >= this.m.length
    }, s.contains = function (a) {
        var b = 0;
        if (this.m.length > a.m.length) return o;
        for (; b < this.m.length;) {
            if (this.m[b] !== a.m[b]) return o;
            ++b
        }
        return k
    }, s = Na.prototype, s.k = function () {
        return this.z.value
    }, s.nb = function () {
        return 0 < this.z.pc
    }, s.f = function () {
        return this.k() === l && !this.nb()
    }, s.w = function (a) {
        for (var b in this.z.children) a(new Na(b, this, this.z.children[b]))
    }, s.path = function () {
        return new K(this.Bb === l ? this.Ca : this.Bb.path() + "/" + this.Ca)
    }, s.name = aa("Ca"), s.parent = aa("Bb"), s = Ra.prototype, s.na = function (a, b) {
        return new Ra(this.Pa, this.ba.na(a, b, this.Pa).copy(l, l, o, l, l))
    }, s.remove = function (a) {
        return new Ra(this.Pa, this.ba.remove(a, this.Pa).copy(l, l, o, l, l))
    }, s.get = function (a) {
        for (var b, c = this.ba; !c.f();) {
            if (b = this.Pa(a, c.key), 0 === b) return c.value;
            0 > b ? c = c.left : b > 0 && (c = c.right)
        }
        return l
    }, s.f = function () {
        return this.ba.f()
    }, s.count = function () {
        return this.ba.count()
    }, s.tb = function () {
        return this.ba.tb()
    }, s.Wa = function () {
        return this.ba.Wa()
    }, s.Aa = function (a) {
        return this.ba.Aa(a)
    }, s.Ma = function (a) {
        return this.ba.Ma(a)
    }, s.Va = function (a) {
        return new Va(this.ba, a)
    }, s = Xa.prototype, s.copy = function (a, b, c, d, e) {
        return new Xa(a != l ? a : this.key, b != l ? b : this.value, c != l ? c : this.color, d != l ? d : this.left, e != l ? e : this.right)
    }, s.count = function () {
        return this.left.count() + 1 + this.right.count()
    }, s.f = r(o), s.Aa = function (a) {
        return this.left.Aa(a) || a(this.key, this.value) || this.right.Aa(a)
    }, s.Ma = function (a) {
        return this.right.Ma(a) || a(this.key, this.value) || this.left.Ma(a)
    }, s.tb = function () {
        return Ya(this).key
    }, s.Wa = function () {
        return this.right.f() ? this.key : this.right.Wa()
    }, s.na = function (a, b, c) {
        var d, e;
        return e = this, d = c(a, e.key), e = 0 > d ? e.copy(l, l, l, e.left.na(a, b, c), l) : 0 === d ? e.copy(l, b, l, l, l) : e.copy(l, l, l, l, e.right.na(a, b, c)), Za(e)
    }, s.remove = function (a, b) {
        var c, d;
        if (c = this, 0 > b(a, c.key)) !c.left.f() && !c.left.O() && !c.left.left.O() && (c = cb(c)), c = c.copy(l, l, l, c.left.remove(a, b), l); else {
            if (c.left.O() && (c = db(c)), !c.right.f() && !c.right.O() && !c.right.left.O() && (c = eb(c), c.left.left.O() && (c = db(c), c = eb(c))), 0 === b(a, c.key)) {
                if (c.right.f()) return Ta;
                d = Ya(c.right), c = c.copy(d.key, d.value, l, l, bb(c.right))
            }
            c = c.copy(l, l, l, l, c.right.remove(a, b))
        }
        return Za(c)
    }, s.O = aa("color"), s = gb.prototype, s.copy = function () {
        return this
    }, s.na = function (a, b) {
        return new Xa(a, b, j, j, j)
    }, s.remove = function () {
        return this
    }, s.count = r(0), s.f = r(k), s.Aa = r(o), s.Ma = r(o), s.tb = r(l), s.Wa = r(l), s.O = r(o);
    var Ta = new gb, hb = Array.prototype, ib = hb.forEach ? function (a, b, c) {
        hb.forEach.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = v(a) ? a.split("") : a, f = 0; d > f; f++) f in e && b.call(c, e[f], f, a)
    }, jb = hb.map ? function (a, b, c) {
        return hb.map.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = Array(d), f = v(a) ? a.split("") : a, g = 0; d > g; g++) g in f && (e[g] = b.call(c, f[g], g, a));
        return e
    };
    ka(lb, kb), lb.prototype.reset = function () {
        this.B[0] = 1732584193, this.B[1] = 4023233417, this.B[2] = 2562383102, this.B[3] = 271733878, this.B[4] = 3285377520, this.Sc = this.ob = 0
    }, lb.prototype.update = function (a, b) {
        u(b) || (b = a.length);
        var c = this.oc, d = this.ob, e = 0;
        if (v(a)) for (; b > e;) c[d++] = a.charCodeAt(e++), 64 == d && (mb(this, c), d = 0); else for (; b > e;) c[d++] = a[e++], 64 == d && (mb(this, c), d = 0);
        this.ob = d, this.Sc += b
    }, nb.prototype.setItem = function (a, b) {
        D(this.Oa, a) || (this.length += 1), this.Oa[a] = b
    }, nb.prototype.getItem = function (a) {
        return D(this.Oa, a) ? this.Oa[a] : l
    }, nb.prototype.removeItem = function (a) {
        D(this.Oa, a) && (this.length -= 1, delete this.Oa[a])
    };
    var ob = l;
    try {
        "undefined" != typeof sessionStorage && (sessionStorage.setItem("firebase-sentinel", "cache"), sessionStorage.removeItem("firebase-sentinel"), ob = sessionStorage)
    } catch (pb) {
    }
    ob = ob || new nb, qb.prototype.toString = function () {
        return (this.ec ? "https://" : "http://") + this.host
    };
    var sb, tb, ub, vb;
    vb = ub = tb = sb = o;
    var xb;
    if (xb = wb()) {
        var yb = ba.navigator;
        sb = 0 == xb.indexOf("Opera"), tb = !sb && -1 != xb.indexOf("MSIE"), ub = !sb && -1 != xb.indexOf("WebKit"), vb = !sb && !ub && "Gecko" == yb.product
    }
    var zb = tb, Ab = vb, Bb = ub, Cb;
    if (sb && ba.opera) {
        var Db = ba.opera.version;
        "function" == typeof Db && Db()
    } else Ab ? Cb = /rv\:([^\);]+)(\)|;)/ : zb ? Cb = /MSIE\s+([^\);]+)(\)|;)/ : Bb && (Cb = /WebKit\/(\S+)/), Cb && Cb.exec(wb());
    var Eb = l, Fb = l, Hb, Ib = 1;
    Hb = function () {
        return Ib++
    };
    var Lb = l, Mb = k, $b = /^-?\d{1,10}$/;
    s = bc.prototype, s.N = r(k), s.j = aa("Za"), s.Ea = function (a) {
        return new bc(this.D, a)
    }, s.M = function () {
        return P
    }, s.Q = function (a) {
        return F(a) === l ? this : P
    }, s.da = r(l), s.G = function (a, b) {
        return (new Q).G(a, b).Ea(this.Za)
    }, s.xa = function (a, b) {
        var c = F(a);
        return c === l ? b : this.G(c, P.xa(Ka(a), b))
    }, s.f = r(o), s.Sb = r(0), s.V = function (a) {
        return a && this.j() !== l ? {".value": this.k(), ".priority": this.j()} : this.k()
    }, s.hash = function () {
        var a = "";
        this.j() !== l && (a += "priority:" + cc(this.j()) + ":");
        var b = typeof this.D, a = a + (b + ":"), a = "number" === b ? a + Zb(this.D) : a + this.D;
        return Jb(a)
    }, s.k = aa("D"), s.toString = function () {
        return "string" == typeof this.D ? '"' + this.D + '"' : this.D
    }, s = Q.prototype, s.N = r(o), s.j = aa("Za"), s.Ea = function (a) {
        return new Q(this.o, a)
    }, s.G = function (a, b) {
        var c = this.o.remove(a);
        return b && b.f() && (b = l), b !== l && (c = c.na(a, b)), b && b.j() !== l ? new gc(c, l, this.Za) : new Q(c, this.Za)
    }, s.xa = function (a, b) {
        var c = F(a);
        if (c === l) return b;
        var d = this.M(c).xa(Ka(a), b);
        return this.G(c, d)
    }, s.f = function () {
        return this.o.f()
    }, s.Sb = function () {
        return this.o.count()
    };
    var hc = /^\d+$/;
    s = Q.prototype, s.V = function (a) {
        if (this.f()) return l;
        var b = {}, c = 0, d = 0, e = k;
        if (this.w(function (f, g) {
            b[f] = g.V(a), c++, e && hc.test(f) ? d = Math.max(d, Number(f)) : e = o
        }), !a && e && 2 * c > d) {
            var f, g = [];
            for (f in b) g[f] = b[f];
            return g
        }
        return a && this.j() !== l && (b[".priority"] = this.j()), b
    }, s.hash = function () {
        var a = "";
        return this.j() !== l && (a += "priority:" + cc(this.j()) + ":"), this.w(function (b, c) {
            var d = c.hash();
            "" !== d && (a += ":" + b + ":" + d)
        }), "" === a ? "" : Jb(a)
    }, s.M = function (a) {
        return a = this.o.get(a), a === l ? P : a
    }, s.Q = function (a) {
        var b = F(a);
        return b === l ? this : this.M(b).Q(Ka(a))
    }, s.da = function (a) {
        return Ua(this.o, a)
    }, s.$c = function () {
        return this.o.tb()
    }, s.ad = function () {
        return this.o.Wa()
    }, s.w = function (a) {
        return this.o.Aa(a)
    }, s.vc = function (a) {
        return this.o.Ma(a)
    }, s.Va = function () {
        return this.o.Va()
    }, s.toString = function () {
        var a = "{", b = k;
        return this.w(function (c, d) {
            b ? b = o : a += ", ", a += '"' + c + '" : ' + d.toString()
        }), a += "}"
    };
    var P = new Q;
    ka(gc, Q), s = gc.prototype, s.G = function (a, b) {
        var c = this.M(a), d = this.o, e = this.ta;
        return c !== l && (d = d.remove(a), e = e.remove({
            name: a,
            ha: c.j()
        })), b && b.f() && (b = l), b !== l && (d = d.na(a, b), e = e.na({
            name: a,
            ha: b.j()
        }, b)), new gc(d, e, this.j())
    }, s.da = function (a, b) {
        var c = Ua(this.ta, {name: a, ha: b.j()});
        return c ? c.name : l
    }, s.w = function (a) {
        return this.ta.Aa(function (b, c) {
            return a(b.name, c)
        })
    }, s.vc = function (a) {
        return this.ta.Ma(function (b, c) {
            return a(b.name, c)
        })
    }, s.Va = function () {
        return this.ta.Va(function (a, b) {
            return {key: a.name, value: b}
        })
    }, s.$c = function () {
        return this.ta.f() ? l : this.ta.tb().name
    }, s.ad = function () {
        return this.ta.f() ? l : this.ta.Wa().name
    };
    var jc = Math.log(2);
    S.prototype.V = function () {
        return A("Firebase.DataSnapshot.val", 0, 0, arguments.length), this.z.V()
    }, S.prototype.val = S.prototype.V, S.prototype.xd = function () {
        return A("Firebase.DataSnapshot.exportVal", 0, 0, arguments.length), this.z.V(k)
    }, S.prototype.exportVal = S.prototype.xd, S.prototype.F = function (a) {
        A("Firebase.DataSnapshot.child", 0, 1, arguments.length), ga(a) && (a = String(a)), Ga("Firebase.DataSnapshot.child", a);
        var b = new K(a), c = this.bc.F(b);
        return new S(this.z.Q(b), c)
    }, S.prototype.child = S.prototype.F, S.prototype.zc = function (a) {
        A("Firebase.DataSnapshot.hasChild", 1, 1, arguments.length), Ga("Firebase.DataSnapshot.hasChild", a);
        var b = new K(a);
        return !this.z.Q(b).f()
    }, S.prototype.hasChild = S.prototype.zc, S.prototype.j = function () {
        return A("Firebase.DataSnapshot.getPriority", 0, 0, arguments.length), this.z.j()
    }, S.prototype.getPriority = S.prototype.j, S.prototype.forEach = function (a) {
        if (A("Firebase.DataSnapshot.forEach", 1, 1, arguments.length), C("Firebase.DataSnapshot.forEach", 1, a, o), this.z.N()) return o;
        var b = this;
        return this.z.w(function (c, d) {
            return a(new S(d, b.bc.F(c)))
        })
    }, S.prototype.forEach = S.prototype.forEach, S.prototype.nb = function () {
        return A("Firebase.DataSnapshot.hasChildren", 0, 0, arguments.length), this.z.N() ? o : !this.z.f()
    }, S.prototype.hasChildren = S.prototype.nb, S.prototype.name = function () {
        return A("Firebase.DataSnapshot.name", 0, 0, arguments.length), this.bc.name()
    }, S.prototype.name = S.prototype.name, S.prototype.Sb = function () {
        return A("Firebase.DataSnapshot.numChildren", 0, 0, arguments.length), this.z.Sb()
    }, S.prototype.numChildren = S.prototype.Sb, S.prototype.Kc = function () {
        return A("Firebase.DataSnapshot.ref", 0, 0, arguments.length), this.bc
    }, S.prototype.ref = S.prototype.Kc, mc.prototype.xc = function () {
    }, mc.prototype.Uc = function (a) {
        for (var b = this.sb[a] || [], c = 0; c < b.length; c++) b[c].W.apply(b[c].T, Array.prototype.slice.call(arguments, 1))
    }, mc.prototype.Ya = function (a, b, c) {
        nc(this, a), this.sb[a] = this.sb[a] || [], this.sb[a].push({W: b, T: c}), (a = this.xc(a)) && b.apply(c, a)
    }, mc.prototype.vb = function (a, b, c) {
        nc(this, a);
        for (var a = this.sb[a] || [], d = 0; d < a.length; d++) if (a[d].W === b && (!c || c === a[d].T)) {
            a.splice(d, 1);
            break
        }
    }, ka(oc, mc), da(oc), oc.prototype.xc = function (a) {
        return z("visible" === a), [this.hb]
    }, rc.prototype.get = function () {
        return qc(this.jb)
    }, tc.prototype.get = function () {
        var a = this.ud.get(), b = qc(a);
        if (this.Qb) for (var c in this.Qb) b[c] -= this.Qb[c];
        return this.Qb = a, b
    }, uc.prototype.gd = function () {
        var a, b = this.hc.get(), c = {}, d = o;
        for (a in b) 0 < b[a] && D(this.Pc, a) && (c[a] = b[a], d = k);
        d && (b = this.u, b.P && (c = {c: c}, b.e("reportStats", c), b.Da("s", c))), setTimeout(w(this.gd, this), 6e5 * Math.random())
    };
    var vc = {}, wc = {}, yc = l;
    "undefined" != typeof MozWebSocket ? yc = MozWebSocket : "undefined" != typeof WebSocket && (yc = WebSocket);
    var zc;
    T.prototype.open = function (a, b) {
        this.ga = b, this.Fd = a, this.e("websocket connecting to " + this.Qa), this.Y = new yc(this.Qa), this.kb = o;
        var c = this;
        this.Y.onopen = function () {
            c.e("Websocket connected."), c.kb = k
        }, this.Y.onclose = function () {
            c.e("Websocket connection was disconnected."), c.Y = l, c.Ka()
        }, this.Y.onmessage = function (a) {
            if (c.Y !== l) if (a = a.data, sc(c.$, "bytes_received", a.length), Ac(c), c.frames !== l) Bc(c, a); else {
                a:{
                    if (z(c.frames === l, "We already have a frame buffer"), 6 >= a.length) {
                        var b = Number(a);
                        if (!isNaN(b)) {
                            c.Rc = b, c.frames = [], a = l;
                            break a
                        }
                    }
                    c.Rc = 1, c.frames = []
                }
                a !== l && Bc(c, a)
            }
        }, this.Y.onerror = function (a) {
            c.e("WebSocket error.  Closing connection."), a.data && c.e(a.data), c.Ka()
        }
    }, T.prototype.start = function () {
    }, T.isAvailable = function () {
        var a = o;
        if ("undefined" != typeof navigator && navigator.userAgent) {
            var b = navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);
            b && 1 < b.length && 4.4 > parseFloat(b[1]) && (a = k)
        }
        return !a && yc !== l && !zc
    }, T.prototype.send = function (a) {
        Ac(this), a = y(a), sc(this.$, "bytes_sent", a.length), a = Wb(a, 16384), 1 < a.length && this.Y.send(String(a.length));
        for (var b = 0; b < a.length; b++) this.Y.send(a[b])
    }, T.prototype.Jb = function () {
        this.Ia = k, this.qb && (clearInterval(this.qb), this.qb = l), this.Y && (this.Y.close(), this.Y = l)
    }, T.prototype.Ka = function () {
        this.Ia || (this.e("WebSocket is closing itself"), this.Jb(), this.ga && (this.ga(this.kb), this.ga = l))
    }, T.prototype.close = function () {
        this.Ia || (this.e("WebSocket is being closed"), this.Jb())
    }, s = Cc.prototype, s.add = function (a, b) {
        this.set[a] = b !== l ? b : k
    }, s.contains = function (a) {
        return D(this.set, a)
    }, s.get = function (a) {
        return this.contains(a) ? this.set[a] : j
    }, s.remove = function (a) {
        delete this.set[a]
    }, s.f = function () {
        var a;
        a:{
            for (a in this.set) {
                a = o;
                break a
            }
            a = k
        }
        return a
    }, s.count = function () {
        var a, b = 0;
        for (a in this.set) b++;
        return b
    }, s.keys = function () {
        var a, b = [];
        for (a in this.set) D(this.set, a) && b.push(a);
        return b
    };
    var Ec = "pLPCommand", Fc = "pRTLPCB", Hc, Ic;
    Gc.prototype.open = function (a, b) {
        function c() {
            if (!d.Ia) {
                d.ja = new Jc(function (a, b, c, e, f) {
                    if (sc(d.$, "bytes_received", y(arguments).length), d.ja) if (d.Fa && (clearTimeout(d.Fa), d.Fa = l), d.kb = k, "start" == a) d.id = b, d.fd = c; else if ("close" === a) if (b) {
                        d.ja.fc = o;
                        var h = d.cd;
                        h.qc = b, h.Ja = function () {
                            d.Ka()
                        }, h.qc < h.Ra && (h.Ja(), h.Ja = l)
                    } else d.Ka(); else g(Error("Unrecognized command received: " + a))
                }, function (a, b) {
                    sc(d.$, "bytes_received", y(arguments).length);
                    var c = d.cd;
                    for (c.Zb[a] = b; c.Zb[c.Ra];) {
                        var e = c.Zb[c.Ra];
                        delete c.Zb[c.Ra];
                        for (var f = 0; f < e.length; ++f) if (e[f]) {
                            var g = c;
                            ac(function () {
                                g.Gc(e[f])
                            })
                        }
                        if (c.Ra === c.qc) {
                            c.Ja && (clearTimeout(c.Ja), c.Ja(), c.Ja = l);
                            break
                        }
                        c.Ra++
                    }
                }, function () {
                    d.Ka()
                }, d.Mb);
                var a = {start: "t"};
                a.ser = Math.floor(1e8 * Math.random()),
                d.ja.jc && (a.cb = d.ja.jc), a.v = "5", d.gc && (a.s = d.gc), a = d.Mb(a), d.e("Connecting via long-poll to " + a), Kc(d.ja, a, function () {
                })
            }
        }

        this.Wc = 0, this.R = b, this.cd = new pc(a), this.Ia = o;
        var d = this;
        if (this.Fa = setTimeout(function () {
            d.e("Timed out trying to connect."), d.Ka(), d.Fa = l
        }, 3e4), "complete" === document.readyState) c(); else {
            var e = o, f = function () {
                document.body ? e || (e = k, c()) : setTimeout(f, 10)
            };
            document.addEventListener ? (document.addEventListener("DOMContentLoaded", f, o), window.addEventListener("load", f, o)) : document.attachEvent && (document.attachEvent("onreadystatechange", function () {
                "complete" === document.readyState && f()
            }, o), window.attachEvent("onload", f, o))
        }
    }, Gc.prototype.start = function () {
        var a = this.ja, b = this.fd;
        for (a.Dd = this.id, a.Ed = b, a.mc = k; Lc(a);) ;
        a = this.id, b = this.fd, this.Xa = document.createElement("iframe");
        var c = {dframe: "t"};
        c.id = a, c.pw = b, a = this.Mb(c), this.Xa.src = a, this.Xa.style.display = "none", document.body.appendChild(this.Xa)
    }, Gc.isAvailable = function () {
        return !Ic && !("object" == typeof window && window.chrome && window.chrome.extension && !/^chrome/.test(window.location.href)) && !("object" == typeof Windows && "object" == typeof Windows.Td) && (Hc || k)
    }, Gc.prototype.Jb = function () {
        this.Ia = k, this.ja && (this.ja.close(), this.ja = l), this.Xa && (document.body.removeChild(this.Xa), this.Xa = l), this.Fa && (clearTimeout(this.Fa), this.Fa = l)
    }, Gc.prototype.Ka = function () {
        this.Ia || (this.e("Longpoll is closing itself"), this.Jb(), this.R && (this.R(this.kb), this.R = l))
    }, Gc.prototype.close = function () {
        this.Ia || (this.e("Longpoll is being closed."), this.Jb())
    }, Gc.prototype.send = function (a) {
        a = y(a), sc(this.$, "bytes_sent", a.length);
        for (var a = ra(a), a = Gb(a, k), a = Wb(a, 1840), b = 0; b < a.length; b++) {
            var c = this.ja;
            c.Db.push({Nd: this.Wc, Sd: a.length, Yc: a[b]}), c.mc && Lc(c), this.Wc++
        }
    }, Jc.prototype.close = function () {
        if (this.mc = o, this.X) {
            this.X.ya.body.innerHTML = "";
            var a = this;
            setTimeout(function () {
                a.X !== l && (document.body.removeChild(a.X), a.X = l)
            }, 0)
        }
        var b = this.ga;
        b && (this.ga = l, b())
    };
    var Nc = [Gc, {isAvailable: r(o)}, T];
    Oc.prototype.ld = function (a) {
        a = {t: "d", d: a}, 1 !== this.va && g("Connection is not connected"), this.Kb.send(a)
    }, Oc.prototype.Vb = function (a) {
        this.Gc(a)
    }, Oc.prototype.close = function () {
        2 !== this.va && (this.e("Closing realtime connection."), this.va = 2, Tc(this), this.R && (this.R(), this.R = l))
    }, ka(Vc, mc), da(Vc), Vc.prototype.xc = function (a) {
        return z("online" === a), [this.zb]
    };
    var Xc = 0, Zc = 0;
    s = Wc.prototype, s.Da = function (a, b, c) {
        var d = ++this.Md, a = {r: d, a: a, b: b};
        this.e(y(a)), z(this.P, "sendRequest_ call when we're not connected not allowed."), this.ia.ld(a), c && (this.Hb[d] = c)
    }, s.ib = function (a, b, c) {
        this.Ga = {vd: a, Zc: o, W: b, Ob: c}, this.e("Authenticating using credential: " + this.Ga), bd(this)
    }, s.Lb = function (a) {
        delete this.Ga, this.wb(o), this.P && this.Da("unauth", {}, function (b) {
            a(b.s)
        })
    }, s.Ec = function (a, b) {
        this.P ? ed(this, "oc", a, l, b) : this.xb.push({Jc: a, action: "oc", data: l, C: b})
    }, s.put = function (a, b, c, d) {
        fd(this, "p", a, b, c, d)
    }, s.Vb = function (a) {
        if ("r" in a) {
            this.e("from server: " + y(a));
            var b = a.r, c = this.Hb[b];
            c && (delete this.Hb[b], c(a.b))
        } else "error" in a && g("A server-side error has occurred: " + a.error), "a" in a && (b = a.a, a = a.b, this.e("handleServerMessage", b, a), "d" === b ? this.Wb(a.p, a.d) : "m" === b ? this.Wb(a.p, a.d, k) : "c" === b ? (b = a.p, a = (a = a.q) ? jb(a, function (a) {
            return Ja(a)
        }).join("$") : "{}", (a = ad(this, b, a)) && a.C && a.C("permission_denied")) : "ac" === b ? (b = a.s, a = a.d, c = this.Ga, delete this.Ga, c && c.Ob && c.Ob(b, a), this.wb(o)) : "sd" === b ? this.Lc ? this.Lc(a) : "msg" in a && "undefined" != typeof console && console.log("FIREBASE: " + a.msg.replace("\n", "\nFIREBASE: ")) : Qb("Unrecognized action received from server: " + y(b) + "\nAre you using the latest client?"))
    }, s.yb = function (a) {
        this.e("connection ready"), this.P = k, this.rb = (new Date).getTime(), this.Hc({serverTimeOffset: a - (new Date).getTime()}), bd(this);
        for (var b in this.fa) for (var c in this.fa[b]) a = this.fa[b][c], $c(this, b, c, a.$a, a.C);
        for (b = 0; b < this.U.length; b++) this.U[b] && gd(this, b);
        for (; this.xb.length;) b = this.xb.shift(), ed(this, b.action, b.Jc, b.data, b.C);
        this.Ub(k)
    }, s.Hd = function (a) {
        a && !this.hb && 3e5 === this.pa && (this.e("Window became visible.  Reducing delay."), this.pa = 1e3, this.ia || Yc(this, 0)), this.hb = a
    }, s.Gd = function (a) {
        a ? (this.e("Browser went online.  Reconnecting."), this.pa = 1e3, this.Na = k, this.ia || Yc(this, 0)) : (this.e("Browser went offline.  Killing connection; don't reconnect."), this.Na = o, this.ia && this.ia.close())
    }, s.dd = function () {
        this.e("data client disconnected"), this.P = o, this.ia = l;
        for (var a = 0; a < this.U.length; a++) {
            var b = this.U[a];
            b && "h" in b.hd && b.Jd && (b.C && b.C("disconnect"), delete this.U[a], this.Ab--)
        }
        if (0 === this.Ab && (this.U = []), this.Na) this.hb ? this.rb && (3e4 < (new Date).getTime() - this.rb && (this.pa = 1e3), this.rb = l) : (this.e("Window isn't visible.  Delaying reconnect."), this.pa = 3e5, this.Cc = (new Date).getTime()), a = Math.max(0, this.pa - ((new Date).getTime() - this.Cc)), a *= Math.random(), this.e("Trying to reconnect in " + a + "ms"), Yc(this, a), this.pa = Math.min(3e5, 1.3 * this.pa); else for (var c in this.Hb) delete this.Hb[c];
        this.Ub(o)
    }, s.Ha = function () {
        this.Na = o, this.ia ? this.ia.close() : (this.Ta && (clearTimeout(this.Ta), this.Ta = l), this.P && this.dd())
    }, s.bb = function () {
        this.Na = k, this.pa = 1e3, this.P || Yc(this, 0)
    }, hd.prototype.w = function (a) {
        this.o !== l && Dc(this.o, function (b, c) {
            a(b, c)
        })
    }, ld.prototype.toString = function () {
        return this.qa.toString()
    }, md.prototype.set = function (a, b) {
        var c = this, d = [];
        return ib(b, function (a) {
            var b = a.path, a = a.oa, e = Hb();
            M(L(c.Cb, b), e), V(c.I, b, a), d.push({path: b, Od: e})
        }), d
    }, qd.prototype.Fb = function () {
        for (var a = 0; a < this.Ua.length; a++) if (this.Ua[a]) {
            var b = this.Ua[a];
            this.Ua[a] = l, sd(b)
        }
        this.Ua = []
    }, td.prototype.$b = function (a, b) {
        b = this.ac(a, b), b != l && wd(this, b)
    }, td.prototype.Fb = function () {
        this.uc.Fb()
    }, ka(zd, td), zd.prototype.ac = function (a, b) {
        return this.i = a, this.pb && b != l && b.push(new W("value", this.i)), b
    }, zd.prototype.lb = function () {
        return {}
    }, ka(Ed, Cc), s = Ed.prototype, s.setActive = function (a) {
        this.wa = a
    }, s.defaultView = function () {
        return Fd(this) ? this.get("default") : l
    }, s.path = aa("S"), s.toString = function () {
        return jb(this.keys(), function (a) {
            return "default" === a ? "{}" : a
        }).join("$")
    }, s.$a = function () {
        var a = [];
        return Dc(this, function (b, c) {
            a.push(c.J)
        }), a
    }, ka(Hd, td), Hd.prototype.ac = function (a, b) {
        if (b === l) return b;
        var c = [], d = this.J;
        u(d.ca) && (u(d.ua) && d.ua != l ? c.push(function (a, b) {
            var c = Sb(b, d.ca);
            return c > 0 || 0 === c && 0 <= Tb(a, d.ua)
        }) : c.push(function (a, b) {
            return 0 <= Sb(b, d.ca)
        })), u(d.za) && (u(d.Sa) ? c.push(function (a, b) {
            var c = Sb(b, d.za);
            return 0 > c || 0 === c && 0 >= Tb(a, d.Sa)
        }) : c.push(function (a, b) {
            return 0 >= Sb(b, d.za)
        }));
        var e = l, f = l;
        if (u(this.J.Ba)) if (u(this.J.ca)) {
            if (e = Id(a, c, this.J.Ba, o)) {
                var g = a.M(e).j();
                c.push(function (a, b) {
                    var c = Sb(b, g);
                    return 0 > c || 0 === c && 0 >= Tb(a, e)
                })
            }
        } else if (f = Id(a, c, this.J.Ba, k)) {
            var h = a.M(f).j();
            c.push(function (a, b) {
                var c = Sb(b, h);
                return c > 0 || 0 === c && 0 <= Tb(a, f)
            })
        }
        for (var i = [], j = [], m = [], n = [], p = 0; p < b.length; p++) {
            var q = b[p].aa, r = b[p].sa;
            switch (b[p].type) {
                case"child_added":
                    Jd(c, q, r) && (this.i = this.i.G(q, r), j.push(b[p]));
                    break;
                case"child_removed":
                    this.i.M(q).f() || (this.i = this.i.G(q, l), i.push(b[p]));
                    break;
                case"child_changed":
                    !this.i.M(q).f() && Jd(c, q, r) && (this.i = this.i.G(q, r), n.push(b[p]));
                    break;
                case"child_moved":
                    var s = !this.i.M(q).f(), t = Jd(c, q, r);
                    s ? t ? (this.i = this.i.G(q, r), m.push(b[p])) : (i.push(new W("child_removed", this.i.M(q), q)), this.i = this.i.G(q, l)) : t && (this.i = this.i.G(q, r), j.push(b[p]))
            }
        }
        var v = e || f;
        if (v) {
            var w = (p = f !== l) ? this.i.$c() : this.i.ad(), x = o, y = o, z = this;
            (p ? a.vc : a.w).call(a, function (a, b) {
                return !y && w === l && (y = k), y && x ? k : (x ? (i.push(new W("child_removed", z.i.M(a), a)), z.i = z.i.G(a, l)) : y && (j.push(new W("child_added", b, a)), z.i = z.i.G(a, b)), w === a && (y = k), void (a === v && (x = k)))
            })
        }
        for (p = 0; p < j.length; p++) c = j[p], q = this.i.da(c.aa, c.sa), i.push(new W("child_added", c.sa, c.aa, q));
        for (p = 0; p < m.length; p++) c = m[p], q = this.i.da(c.aa, c.sa), i.push(new W("child_moved", c.sa, c.aa, q));
        for (p = 0; p < n.length; p++) c = n[p], q = this.i.da(c.aa, c.sa), i.push(new W("child_changed", c.sa, c.aa, q));
        return this.pb && 0 < i.length && i.push(new W("value", this.i)), i
    }, Hd.prototype.zc = function (a) {
        return this.i.M(a) !== P
    }, Hd.prototype.lb = function (a, b, c) {
        var d = {};
        this.i.N() || this.i.w(function (a) {
            d[a] = 3
        });
        var e = this.i, c = U(c, new K("")), f = new Na;
        M(L(f, this.J.path), k);
        var b = P.xa(a, b), g = this;
        return Bd(c, b, a, f, function (a, b, c) {
            c !== l && a.toString() === g.J.path.toString() && g.ac(b, c)
        }), this.i.N() ? Yb(d, function (a, b) {
            d[b] = 2
        }) : (this.i.w(function (a) {
            D(d, a) || (d[a] = 1)
        }), Yb(d, function (a, b) {
            g.i.M(b).f() && (d[b] = 2)
        })), this.i = e, d
    }, Kd.prototype.Nb = function (a, b, c, d, e) {
        var f = a.path, g = L(this.ka, f), h = g.k();
        h === l ? (h = new Ed, M(g, h)) : z(!h.f(), "We shouldn't be storing empty QueryMaps");
        var i = a.La();
        if (h.contains(i)) a = h.get(i), ud(a, b, c, d, e); else {
            var j = this.g.qa.Q(f), j = a = "default" === a.La() ? new zd(a, j) : new Hd(a, j);
            if (Gd(h) || Ld(g)) h.add(i, j), h.S || (h.S = j.J.path); else {
                var m, n;
                h.f() || (m = h.toString(), n = h.$a()), h.add(i, j), h.S || (h.S = j.J.path), h.setActive(Md(this, h)), m && n && cd(this.u, h.path(), m, n)
            }
            Gd(h) && Pa(g, function (a) {
                (a = a.k()) && (a.wa && a.wa(), a.wa = l)
            }), ud(a, b, c, d, e), (b = (b = Qa(L(this.ka, f), function (a) {
                var b;
                return (b = a.k()) && (b = a.k().defaultView()) && (b = a.k().defaultView().pb), b ? k : void 0
            }, k)) || this.u === l && !U(this.g, f).f()) && xd(a)
        }
        a.Fb()
    }, Kd.prototype.cc = function (a, b, c, d) {
        var e = L(this.ka, a.path).k();
        return e === l ? l : Od(this, e, a, b, c, d)
    }, Kd.prototype.$b = function (a, b, c) {
        a = L(this.ka, a).k(), a !== l && Dc(a, function (a, d) {
            d.$b(b, c)
        })
    }, Kd.prototype.lb = function (a, b, c, d) {
        var e = {};
        return Dc(b, function (b, f) {
            var g = f.lb(a, c, d);
            Yb(g, function (a, b) {
                e[b] = 3 === a ? 3 : (ua(e, b) || a) === a ? a : 3
            })
        }), c.N() || c.w(function (a) {
            D(e, a) || (e[a] = 4)
        }), e
    }, s = Xd.prototype, s.toString = function () {
        return (this.K.ec ? "https://" : "http://") + this.K.host
    }, s.name = function () {
        return this.K.ub
    }, s.Wb = function (a, b, c) {
        this.tc++;
        var d, e, f = [];
        for (9 <= a.length && a.lastIndexOf(".priority") === a.length - 9 ? (d = new K(a.substring(0, a.length - 9)), e = U(this.g.ra, d).Ea(b), f.push(d)) : c ? (d = new K(a), e = U(this.g.ra, d), Yb(b, function (a, b) {
            var c = new K(b);
            e = e.xa(c, R(a)), f.push(d.F(b))
        })) : (d = new K(a), e = R(b), f.push(d)), a = Ud(this.H, d, e, this.g.I), b = o, c = 0; c < a.length; ++c) {
            var g = a[c], h = this.g, i = g.path;
            V(h.ra, i, g.oa), b = nd(h, i) || b
        }
        b && (d = ae(this, d)), Qd(this.H, d, f)
    }, s.Ub = function (a) {
        if (Yd(this, "connected", a), a === o) {
            this.e("onDisconnectEvents");
            var b = this, c = [], d = $d(this), a = kd, e = new hd;
            kd(this.R, new K(""), function (a, b) {
                id(e, a, Wd(b, d))
            }), a(e, new K(""), function (a, d) {
                var e = Ud(b.H, a, d, b.g.I);
                c.push.apply(c, b.g.set(a, e)), e = be(b, a), ae(b, e), Qd(b.H, e, [a])
            }), pd(this.g, c), this.R = new hd
        }
    }, s.Hc = function (a) {
        var b = this;
        Xb(a, function (a, c) {
            Yd(b, c, a)
        })
    }, s.yc = function (a) {
        return a = new K(a), U(this.g.ra, a).hash()
    }, s.wb = function (a) {
        Yd(this, "authenticated", a)
    }, s.ib = function (a, b, c) {
        "firebaseio-demo.com" === this.K.domain && N("FirebaseRef.auth() not supported on demo (*.firebaseio-demo.com) Firebases. Please use on production (*.firebaseio.com) Firebases only."), this.u.ib(a, function (a, c) {
            X(b, a, c)
        }, function (a, b) {
            if (N("auth() was canceled: " + b), c) {
                var d = Error(b);
                d.code = a.toUpperCase(), c(d)
            }
        })
    }, s.Lb = function (a) {
        this.u.Lb(function (b) {
            X(a, b)
        })
    }, s.eb = function (a, b, c, d) {
        this.e("set", {path: a.toString(), value: b, ha: c});
        var e = $d(this), b = R(b, c), e = Wd(b, e), e = Ud(this.H, a, e, this.g.I), f = this.g.set(a, e), g = this;
        this.u.put(a.toString(), b.V(k), function (b) {
            "ok" !== b && N("set at " + a + " failed: " + b), pd(g.g, f), nd(g.g, a);
            var c = ae(g, a);
            Qd(g.H, c, []), X(d, b)
        }), e = be(this, a), ae(this, e), Qd(this.H, e, [a])
    }, s.update = function (a, b, c) {
        this.e("update", {path: a.toString(), value: b});
        var d, e = U(this.g.la, a), f = k, g = [], h = $d(this), i = [];
        for (d in b) {
            var f = o, l = R(b[d]), l = Wd(l, h), e = e.G(d, l), m = a.F(d);
            g.push(m), l = Ud(this.H, m, l, this.g.I), i = i.concat(this.g.set(a, l))
        }
        if (f) Nb("update() called with empty data.  Don't do anything."), X(c, "ok"); else {
            var n = this;
            fd(this.u, "m", a.toString(), b, function (b) {
                z("ok" === b || "permission_denied" === b, "merge at " + a + " failed."), "ok" !== b && N("update at " + a + " failed: " + b), pd(n.g, i), nd(n.g, a);
                var d = ae(n, a);
                Qd(n.H, d, []), X(c, b)
            }, j), b = be(this, a), ae(this, b), Qd(n.H, b, g)
        }
    }, s.Mc = function (a, b, c) {
        this.e("setPriority", {path: a.toString(), ha: b});
        var d = $d(this), d = Vd(b, d), d = U(this.g.I, a).Ea(d), d = Ud(this.H, a, d, this.g.I), e = this.g.set(a, d),
            f = this;
        this.u.put(a.toString() + "/.priority", b, function (a) {
            pd(f.g, e), X(c, a)
        }), a = ae(this, a), Qd(f.H, a, [])
    }, s.Ec = function (a, b) {
        var c = this;
        this.u.Ec(a.toString(), function (d) {
            "ok" === d && jd(c.R, a), X(b, d)
        })
    }, s.Nb = function (a, b, c, d, e) {
        ".info" === F(a.path) ? this.Bc.Nb(a, b, c, d, e) : this.H.Nb(a, b, c, d, e)
    }, s.cc = function (a, b, c, d) {
        if (".info" === F(a.path)) this.Bc.cc(a, b, c, d); else {
            if (b = this.H.cc(a, b, c, d), c = b !== l) {
                for (var c = this.g, d = a.path, e = [], f = 0; f < b.length; ++f) e[f] = U(c.ra, b[f]);
                for (V(c.ra, d, P), f = 0; f < b.length; ++f) V(c.ra, b[f], e[f]);
                c = nd(c, d)
            }
            c && (z(this.g.la.qa === this.H.Tb, "We should have raised any outstanding events by now.  Else, we'll blow them away."), V(this.g.la, a.path, U(this.g.I, a.path)), this.H.Tb = this.g.la.qa)
        }
    }, s.Ha = function () {
        this.u.Ha()
    }, s.bb = function () {
        this.u.bb()
    }, s.Nc = function (a) {
        if ("undefined" != typeof console) {
            a ? (this.hc || (this.hc = new tc(this.$)), a = this.hc.get()) : a = this.$.get();
            var b, c = a, d = [], e = 0;
            for (b in c) d[e++] = b;
            var f = function (a, b) {
                return Math.max(b.length, a)
            };
            if (d.reduce) b = d.reduce(f, 0); else {
                var g = 0;
                ib(d, function (a) {
                    g = f.call(j, g, a)
                }), b = g
            }
            for (var h in a) {
                for (c = a[h], d = h.length; b + 2 > d; d++) h += " ";
                console.log(h + c)
            }
        }
    }, s.Oc = function (a) {
        sc(this.$, a), this.nd.Pc[a] = k
    }, s.e = function () {
        Nb("r:" + this.u.id + ":", arguments)
    }, da(Y), Y.prototype.Ha = function () {
        for (var a in this.ab) this.ab[a].Ha()
    }, Y.prototype.interrupt = Y.prototype.Ha, Y.prototype.bb = function () {
        for (var a in this.ab) this.ab[a].bb()
    }, Y.prototype.resume = Y.prototype.bb;
    var Z = {
        Ad: function (a) {
            var b = Q.prototype.hash;
            Q.prototype.hash = a;
            var c = bc.prototype.hash;
            return bc.prototype.hash = a, function () {
                Q.prototype.hash = b, bc.prototype.hash = c
            }
        }
    };
    Z.hijackHash = Z.Ad, Z.La = function (a) {
        return a.La()
    }, Z.queryIdentifier = Z.La, Z.Cd = function (a) {
        return a.n.u.fa
    }, Z.listens = Z.Cd, Z.Kd = function (a) {
        return a.n.u.ia
    }, Z.refConnection = Z.Kd, Z.pd = Wc, Z.DataConnection = Z.pd, Wc.prototype.sendRequest = Wc.prototype.Da, Wc.prototype.interrupt = Wc.prototype.Ha, Z.qd = Oc, Z.RealTimeConnection = Z.qd, Oc.prototype.sendRequest = Oc.prototype.ld, Oc.prototype.close = Oc.prototype.close, Z.od = qb, Z.ConnectionTarget = Z.od, Z.yd = function () {
        Hc = zc = k
    }, Z.forceLongPolling = Z.yd, Z.zd = function () {
        Ic = k
    }, Z.forceWebSockets = Z.zd, Z.Qd = function (a, b) {
        a.n.u.Lc = b
    }, Z.setSecurityDebugCallback = Z.Qd, Z.Nc = function (a, b) {
        a.n.Nc(b)
    }, Z.stats = Z.Nc, Z.Oc = function (a, b) {
        a.n.Oc(b)
    }, Z.statsIncrementCounter = Z.Oc, Z.tc = function (a) {
        return a.n.tc
    }, $.prototype.cancel = function (a) {
        A("Firebase.onDisconnect().cancel", 0, 1, arguments.length), C("Firebase.onDisconnect().cancel", 1, a, k), this.Gb.Ec(this.S, a)
    }, $.prototype.cancel = $.prototype.cancel, $.prototype.remove = function (a) {
        A("Firebase.onDisconnect().remove", 0, 1, arguments.length), E("Firebase.onDisconnect().remove", this.S), C("Firebase.onDisconnect().remove", 1, a, k), ce(this.Gb, this.S, l, a)
    }, $.prototype.remove = $.prototype.remove, $.prototype.set = function (a, b) {
        A("Firebase.onDisconnect().set", 1, 2, arguments.length), E("Firebase.onDisconnect().set", this.S), ya("Firebase.onDisconnect().set", a, o), C("Firebase.onDisconnect().set", 2, b, k), ce(this.Gb, this.S, a, b)
    }, $.prototype.set = $.prototype.set, $.prototype.eb = function (a, b, c) {
        A("Firebase.onDisconnect().setWithPriority", 2, 3, arguments.length), E("Firebase.onDisconnect().setWithPriority", this.S), ya("Firebase.onDisconnect().setWithPriority", a, o), Da("Firebase.onDisconnect().setWithPriority", 2, b, o), C("Firebase.onDisconnect().setWithPriority", 3, c, k), (".length" === this.Ca || ".keys" === this.Ca) && g("Firebase.onDisconnect().setWithPriority failed: " + this.Ca + " is a read-only object.");
        var d = this.Gb, e = this.S, f = R(a, b);
        dd(d.u, e.toString(), f.V(k), function (a) {
            "ok" === a && id(d.R, e, f), X(c, a)
        })
    }, $.prototype.setWithPriority = $.prototype.eb, $.prototype.update = function (a, b) {
        A("Firebase.onDisconnect().update", 1, 2, arguments.length), E("Firebase.onDisconnect().update", this.S), Ca("Firebase.onDisconnect().update", a), C("Firebase.onDisconnect().update", 2, b, k);
        var c, d = this.Gb, e = this.S, f = k;
        for (c in a) f = o;
        if (f) Nb("onDisconnect().update() called with empty data.  Don't do anything."), X(b, k); else {
            f = d.u, c = e.toString();
            var g = function (c) {
                if ("ok" === c) for (var f in a) {
                    var g = R(a[f]);
                    id(d.R, e.F(f), g)
                }
                X(b, c)
            };
            f.P ? ed(f, "om", c, a, g) : f.xb.push({Jc: c, action: "om", data: a, C: g})
        }
    }, $.prototype.update = $.prototype.update;
    var le, me = 0, ne = [];
    le = function (a) {
        var b = a === me;
        me = a;
        for (var c = Array(8), d = 7; d >= 0; d--) c[d] = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(a % 64), a = Math.floor(a / 64);
        if (z(0 === a), a = c.join(""), b) {
            for (d = 11; d >= 0 && 63 === ne[d]; d--) ne[d] = 0;
            ne[d]++
        } else for (d = 0; 12 > d; d++) ne[d] = Math.floor(64 * Math.random());
        for (d = 0; 12 > d; d++) a += "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(ne[d]);
        return z(20 === a.length, "NextPushId: Length should be 20."), a
    }, ka(J, H);
    var oe = J, pe = ["Firebase"], qe = ba;
    !(pe[0] in qe) && qe.execScript && qe.execScript("var " + pe[0]);
    for (var re; pe.length && (re = pe.shift());) !pe.length && u(oe) ? qe[re] = oe : qe = qe[re] ? qe[re] : qe[re] = {};
    J.prototype.name = function () {
        return A("Firebase.name", 0, 0, arguments.length), this.path.f() ? l : this.path.Z < this.path.m.length ? this.path.m[this.path.m.length - 1] : l
    }, J.prototype.name = J.prototype.name, J.prototype.F = function (a) {
        if (A("Firebase.child", 1, 1, arguments.length), ga(a)) a = String(a); else if (!(a instanceof K)) if (F(this.path) === l) {
            var b = a;
            b && (b = b.replace(/^\/*\.info(\/|$)/, "/")), Ga("Firebase.child", b)
        } else Ga("Firebase.child", a);
        return new J(this.n, this.path.F(a))
    }, J.prototype.child = J.prototype.F, J.prototype.parent = function () {
        A("Firebase.parent", 0, 0, arguments.length);
        var a = this.path.parent();
        return a === l ? l : new J(this.n, a)
    }, J.prototype.parent = J.prototype.parent, J.prototype.root = function () {
        A("Firebase.ref", 0, 0, arguments.length);
        for (var a = this; a.parent() !== l;) a = a.parent();
        return a
    }, J.prototype.root = J.prototype.root, J.prototype.toString = function () {
        A("Firebase.toString", 0, 0, arguments.length);
        var a;
        if (this.parent() === l) a = this.n.toString(); else {
            a = this.parent().toString() + "/";
            var b = this.name();
            a += encodeURIComponent(String(b))
        }
        return a
    }, J.prototype.toString = J.prototype.toString, J.prototype.set = function (a, b) {
        return A("Firebase.set", 1, 2, arguments.length), E("Firebase.set", this.path), ya("Firebase.set", a, o), C("Firebase.set", 2, b, k), this.n.eb(this.path, a, l, b)
    }, J.prototype.set = J.prototype.set, J.prototype.update = function (a, b) {
        return A("Firebase.update", 1, 2, arguments.length), E("Firebase.update", this.path), Ca("Firebase.update", a), C("Firebase.update", 2, b, k), this.n.update(this.path, a, b)
    }, J.prototype.update = J.prototype.update, J.prototype.eb = function (a, b, c) {
        return A("Firebase.setWithPriority", 2, 3, arguments.length), E("Firebase.setWithPriority", this.path), ya("Firebase.setWithPriority", a, o), Da("Firebase.setWithPriority", 2, b, o), C("Firebase.setWithPriority", 3, c, k), (".length" === this.name() || ".keys" === this.name()) && g("Firebase.setWithPriority failed: " + this.name() + " is a read-only object."), this.n.eb(this.path, a, b, c)
    }, J.prototype.setWithPriority = J.prototype.eb, J.prototype.remove = function (a) {
        A("Firebase.remove", 0, 1, arguments.length), E("Firebase.remove", this.path), C("Firebase.remove", 1, a, k), this.set(l, a)
    }, J.prototype.remove = J.prototype.remove, J.prototype.transaction = function (a, b, c) {
        function d() {
        }

        A("Firebase.transaction", 1, 3, arguments.length), E("Firebase.transaction", this.path), C("Firebase.transaction", 1, a, o), C("Firebase.transaction", 2, b, k), u(c) && "boolean" != typeof c && g(Error(B("Firebase.transaction", 3, k) + "must be a boolean.")), (".length" === this.name() || ".keys" === this.name()) && g("Firebase.transaction failed: " + this.name() + " is a read-only object."), "undefined" == typeof c && (c = k);
        var e = this.n, f = this.path, h = c;
        e.e("transaction on " + f);
        var i = new J(e, f);
        i.Ya("value", d);
        var h = {
            path: f, update: a, C: b, status: l, ed: Hb(), nc: h, kd: 0, kc: function () {
                i.vb("value", d)
            }, lc: l
        }, j = h.update(U(e.gb, f).V());
        if (u(j)) {
            za("transaction failed: Data returned ", j), h.status = 1;
            var m = L(e.fb, f), n = m.k() || [];
            n.push(h), M(m, n), n = "object" == typeof j && j !== l && D(j, ".priority") ? j[".priority"] : U(e.g.I, f).j(), m = $d(e), j = R(j, n), j = Wd(j, m), V(e.gb, f, j), h.nc && (V(e.g.la, f, j), Qd(e.H, f, [f])), ee(e)
        } else h.kc(), h.C && (e = he(e, f), h.C(l, o, e))
    }, J.prototype.transaction = J.prototype.transaction, J.prototype.Mc = function (a, b) {
        A("Firebase.setPriority", 1, 2, arguments.length), E("Firebase.setPriority", this.path), Da("Firebase.setPriority", 1, a, o), C("Firebase.setPriority", 2, b, k), this.n.Mc(this.path, a, b)
    }, J.prototype.setPriority = J.prototype.Mc, J.prototype.push = function (a, b) {
        A("Firebase.push", 0, 2, arguments.length), E("Firebase.push", this.path), ya("Firebase.push", a, k), C("Firebase.push", 2, b, k);
        var c = Zd(this.n), c = le(c), c = this.F(c);
        return "undefined" != typeof a && a !== l && c.set(a, b), c
    }, J.prototype.push = J.prototype.push, J.prototype.ga = function () {
        return new $(this.n, this.path, this.name())
    }, J.prototype.onDisconnect = J.prototype.ga, J.prototype.Ld = function () {
        N("FirebaseRef.removeOnDisconnect() being deprecated. Please use FirebaseRef.onDisconnect().remove() instead."), this.ga().remove(), de(this.n)
    }, J.prototype.removeOnDisconnect = J.prototype.Ld, J.prototype.Pd = function (a) {
        N("FirebaseRef.setOnDisconnect(value) being deprecated. Please use FirebaseRef.onDisconnect().set(value) instead."), this.ga().set(a), de(this.n)
    }, J.prototype.setOnDisconnect = J.prototype.Pd, J.prototype.ib = function (a, b, c) {
        A("Firebase.auth", 1, 3, arguments.length), v(a) || g(Error(B("Firebase.auth", 1, o) + "must be a valid credential (a string).")), C("Firebase.auth", 2, b, k), C("Firebase.auth", 3, b, k), this.n.ib(a, b, c)
    }, J.prototype.auth = J.prototype.ib, J.prototype.Lb = function (a) {
        A("Firebase.unauth", 0, 1, arguments.length), C("Firebase.unauth", 1, a, k), this.n.Lb(a)
    }, J.prototype.unauth = J.prototype.Lb, J.goOffline = function () {
        A("Firebase.goOffline", 0, 0, arguments.length), Y.mb().Ha()
    }, J.goOnline = function () {
        A("Firebase.goOnline", 0, 0, arguments.length), Y.mb().bb()
    }, J.enableLogging = Ob, J.ServerValue = {TIMESTAMP: {".sv": "timestamp"}}, J.INTERNAL = Z, J.Context = Y
}(), angular.module("firebase", []).value("Firebase", Firebase), angular.module("firebase").factory("angularFire", ["$q", "$parse", "$timeout", function (a, b, c) {
    return function (d, e, f) {
        var g = new AngularFire(a, b, c, d);
        return g.associate(e, f)
    }
}]), AngularFire.prototype = {
    associate: function (a, b) {
        var c = this, d = this._q.defer(), e = d.promise;
        return this._fRef.on("value", function (e) {
            var f = e.val(), g = angular.fromJson(angular.toJson(c._parse(b)(a)));
            if (c._initial) {
                c._initial = !1;
                var h = !1, i = Object.prototype.toString;
                if (f && i.call(g) == i.call(f)) if ("[object Array]" == i.call(g)) h = g.concat(f), angular.equals(h, f) || (c._fRef.ref().set(h), f = h); else if ("[object Object]" == i.call(g)) {
                    h = g;
                    for (var j in f) h[j] = f[j];
                    c._fRef.ref().update(h), f = h
                }
                null === f && (c._fRef.ref().set(g), f = g)
            }
            var k = !1;
            d && (k = d, d = !1), c._timeout(function () {
                c._resolve(a, b, k, f)
            })
        }), e
    }, disassociate: function () {
        var a = this;
        a._unregister && a._unregister(), this._fRef.off("value")
    }, _resolve: function (a, b, c, d) {
        var e = this;
        if (null === d) {
            var f = a[b];
            if ("object" == typeof f) {
                var g = Object.prototype.toString;
                d = g.call(f) == g.call([]) ? [] : {}
            }
        }
        this._remoteValue = angular.copy(d), this._parse(b).assign(a, angular.copy(d)), c && (c.resolve(function () {
            e.disassociate()
        }), this._watch(a, b))
    }, _watch: function (a, b) {
        var c = this;
        c._unregister = a.$watch(b, function () {
            if (!c._initial) {
                var d = angular.fromJson(angular.toJson(c._parse(b)(a)));
                if (!angular.equals(d, c._remoteValue)) {
                    var e = Object.prototype.toString;
                    "[object Object]" == e.call(d) ? c._fRef.set ? c._fRef.set(d) : c._fRef.ref().update(d) : c._fRef.ref().set(d)
                }
            }
        }, !0), a.$on("$destroy", function () {
            c.disassociate()
        })
    }, _log: function (a) {
        console && console.log && console.log(a)
    }
}, angular.module("firebase").factory("angularFireCollection", ["$timeout", function (a) {
    return function (b, c) {
        function d(a, b) {
            this.$ref = a.ref(), this.$id = a.name(), this.$index = b, angular.extend(this, {$priority: a.getPriority()}, a.val())
        }

        function e(a) {
            return a ? l[a] + 1 : 0
        }

        function f(a, b) {
            l[b.$id] = a, m.splice(a, 0, b)
        }

        function g(a) {
            var b = l[a];
            m.splice(b, 1), l[a] = void 0
        }

        function h(a, b) {
            m[a] = b
        }

        function i(a, b, c) {
            m.splice(a, 1), m.splice(b, 0, c), j(a, b)
        }

        function j(a, b) {
            var c = m.length;
            b = b || c, b > c && (b = c);
            for (var d = a; b > d; d++) {
                var e = m[d];
                e.$index = l[e.$id] = d
            }
        }

        if ("string" == typeof b) throw new Error("Please provide a Firebase reference instead of a URL, eg: new Firebase(url)");
        var k = [function (a) {
            return null == a.$priority ? 0 : angular.isNumber(a.$priority) ? 1 : angular.isString(a.$priority) ? 2 : void 0
        }, function (a) {
            return a.$priority ? a.$priority : 1 / 0
        }, function (a) {
            return a.$id
        }], l = {}, m = [];
        return c && "function" == typeof c && b.once("value", c), b.on("child_added", function (b, c) {
            a(function () {
                var a = e(c);
                f(a, new d(b, a)), j(a)
            })
        }), b.on("child_removed", function (b) {
            a(function () {
                var a = b.name(), c = l[a];
                g(a), j(c)
            })
        }), b.on("child_changed", function (b, c) {
            a(function () {
                var a = l[b.name()], f = e(c), g = new d(b, a);
                h(a, g), f !== a && i(a, f, g)
            })
        }), b.on("child_moved", function (b, c) {
            a(function () {
                var a = l[b.name()], d = e(c), f = m[a];
                i(a, d, f)
            })
        }), m.getByName = function (a) {
            return m[l[a]]
        }, m.add = function (a, c) {
            var d;
            return d = c ? b.ref().push(a, c) : b.ref().push(a)
        }, m.remove = function (a, b) {
            var c = angular.isString(a) ? m[l[a]] : a;
            b ? c.$ref.remove(b) : c.$ref.remove()
        }, m.update = function (a, b) {
            var c = angular.isString(a) ? m[l[a]] : a, d = {};
            angular.forEach(c, function (a, b) {
                0 !== b.indexOf("$") && (d[b] = a)
            }), b ? c.$ref.set(d, b) : c.$ref.set(d)
        }, m.order = k, m
    }
}]), angular.module("firebase").factory("angularFireAuth", ["$rootScope", "$parse", "$timeout", "$location", "$route", "$q", function (a, b, c, d, e, f) {
    function g(a) {
        var b = a.split(".");
        if (!b instanceof Array || 3 !== b.length) throw new Error("Invalid JWT");
        var c = b[1];
        return window.atob ? JSON.parse(decodeURIComponent(escape(window.atob(c)))) : a
    }

    function h(a, d, e, f) {
        d && c(function () {
            b(d).assign(a, e), f()
        })
    }

    function i(a, b, c) {
        a.authRequired && !c._authenticated && (void 0 === a.pathTo ? c._redirectTo = d.path() : c._redirectTo = a.pathTo === b ? "/" : a.pathTo, d.replace(), d.path(b))
    }

    return {
        initialize: function (b, c) {
            var d = this;
            if ("string" == typeof b) throw new Error("Please provide a Firebase reference instead of a URL, eg: new Firebase(url)");
            if (c = c || {}, this._scope = a, !c.scope) throw new Error("Scope not provided to angularFireAuth!");
            if (this._scope = c.scope, !c.name) throw new Error("Model name not provided to angularFireAuth!");
            if (this._name = c.name, this._cb = function () {
            }, c.callback && "function" == typeof c.callback && (this._cb = c.callback), this._redirectTo = null, this._authenticated = !1, c.path && (e.current && i(e.current, c.path, d), a.$on("$routeChangeStart", function (a, b) {
                i(b, c.path, d)
            })), this._ref = b, c.simple === !1) return void h(this._scope, this._name, null, function () {
            });
            if (!window.FirebaseSimpleLogin) {
                var f = new Error("FirebaseSimpleLogin undefined, did you include firebase-simple-login.js?");
                return void a.$broadcast("angularFireAuth:error", f)
            }
            var g = new FirebaseSimpleLogin(this._ref, function (b, c) {
                d._cb(b, c), b ? a.$broadcast("angularFireAuth:error", b) : c ? d._loggedIn(c) : d._loggedOut()
            });
            this._authClient = g
        }, login: function (b, c) {
            var d = this._watchForLogin();
            switch (b) {
                case"github":
                case"persona":
                case"twitter":
                case"facebook":
                case"password":
                    if (this._authClient) this._authClient.login(b, c); else {
                        var e = new Error("Simple Login not initialized");
                        a.$broadcast("angularFireAuth:error", e)
                    }
                    break;
                default:
                    var f, h = this;
                    try {
                        f = g(b), this._ref.auth(b, function (b) {
                            b ? a.$broadcast("angularFireAuth:error", b) : h._loggedIn(f)
                        })
                    } catch (i) {
                        a.$broadcast("angularFireAuth:error", i)
                    }
            }
            return d
        }, createUser: function (b, d, e, f) {
            var g = this;
            this._authClient.createUser(b, d, function (h, i) {
                try {
                    h ? a.$broadcast("angularFireAuth:error", h) : f || g.login("password", {email: b, password: d})
                } catch (j) {
                    a.$broadcast("angularFireAuth:error", j)
                }
                e && c(function () {
                    e(h, i)
                })
            })
        }, logout: function () {
            this._authClient ? this._authClient.logout() : (this._ref.unauth(), this._loggedOut())
        }, _loggedIn: function (b) {
            var c = this;
            this._authenticated = !0, h(this._scope, this._name, b, function () {
                a.$broadcast("angularFireAuth:login", b), c._redirectTo && (d.replace(), d.path(c._redirectTo), c._redirectTo = null)
            })
        }, _loggedOut: function () {
            this._authenticated = !1, h(this._scope, this._name, null, function () {
                a.$broadcast("angularFireAuth:logout")
            })
        }, _watchForLogin: function () {
            function b(a, b) {
                c(function () {
                    a ? e.reject(a) : e.resolve(b)
                });
                for (var f = 0; f < d.length; f++) d[f]()
            }

            var d = [], e = f.defer();
            return d.push(a.$on("angularFireAuth:login", function (a, c) {
                b(null, c)
            })), d.push(a.$on("angularFireAuth:error", function (a, c) {
                b(c, null)
            })), e.promise
        }
    }
}]);