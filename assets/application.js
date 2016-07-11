!function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document)
            throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = t.length, n = rt.type(t);
        return "function" === n || rt.isWindow(t)?!1 : 1 === t.nodeType && e?!0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }
    function i(t, e, n) {
        if (rt.isFunction(e))
            return rt.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            });
        if (e.nodeType)
            return rt.grep(t, function(t) {
                return t === e !== n
            });
        if ("string" == typeof e) {
            if (ht.test(e))
                return rt.filter(e, t, n);
            e = rt.filter(e, t)
        }
        return rt.grep(t, function(t) {
            return rt.inArray(t, e) >= 0 !== n
        })
    }
    function r(t, e) {
        do 
            t = t[e];
        while (t && 1 !== t.nodeType);
        return t
    }
    function o(t) {
        var e = xt[t] = {};
        return rt.each(t.match(bt) || [], function(t, n) {
            e[n]=!0
        }), e
    }
    function s() {
        ft.addEventListener ? (ft.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (ft.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
    }
    function a() {
        (ft.addEventListener || "load" === event.type || "complete" === ft.readyState) && (s(), rt.ready())
    }
    function l(t, e, n) {
        if (void 0 === n && 1 === t.nodeType) {
            var i = "data-" + e.replace(Et, "-$1").toLowerCase();
            if (n = t.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n?!0 : "false" === n?!1 : "null" === n ? null : + n + "" === n?+n : Ct.test(n) ? rt.parseJSON(n) : n
                } catch (r) {}
                rt.data(t, e, n)
            } else 
                n = void 0
        }
        return n
    }
    function u(t) {
        var e;
        for (e in t)
            if (("data" !== e ||!rt.isEmptyObject(t[e])) && "toJSON" !== e)
                return !1;
        return !0
    }
    function c(t, e, n, i) {
        if (rt.acceptData(t)) {
            var r, o, s = rt.expando, a = t.nodeType, l = a ? rt.cache: t, u = a ? t[s]: t[s] && s;
            if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof e)
                return u || (u = a ? t[s] = G.pop() || rt.guid++ : s), l[u] || (l[u] = a ? {} : {
                    toJSON: rt.noop
                }), "object" != typeof e && "function" != typeof e || (i ? l[u] = rt.extend(l[u], e) : l[u].data = rt.extend(l[u].data, e)), o = l[u], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[rt.camelCase(e)] = n), "string" == typeof e ? (r = o[e], null == r && (r = o[rt.camelCase(e)])) : r = o, r
        }
    }
    function d(t, e, n) {
        if (rt.acceptData(t)) {
            var i, r, o = t.nodeType, s = o ? rt.cache: t, a = o ? t[rt.expando]: rt.expando;
            if (s[a]) {
                if (e && (i = n ? s[a] : s[a].data)) {
                    rt.isArray(e) ? e = e.concat(rt.map(e, rt.camelCase)) : e in i ? e = [e] : (e = rt.camelCase(e), e = e in i ? [e] : e.split(" ")), r = e.length;
                    for (; r--;)
                        delete i[e[r]];
                    if (n?!u(i) : !rt.isEmptyObject(i)
                        )return 
                }(n || (delete s[a].data, u(s[a]))) && (o ? rt.cleanData([t], !0) : nt.deleteExpando || s != s.window ? delete s[a] : s[a] = null)
            }
        }
    }
    function h() {
        return !0
    }
    function p() {
        return !1
    }
    function f() {
        try {
            return ft.activeElement
        } catch (t) {}
    }
    function m(t) {
        var e = Rt.split("|"), n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length;)
                n.createElement(e.pop());
        return n
    }
    function g(t, e) {
        var n, i, r = 0, o = typeof t.getElementsByTagName !== kt ? t.getElementsByTagName(e || "*"): typeof t.querySelectorAll !== kt ? t.querySelectorAll(e || "*"): void 0;
        if (!o)
            for (o = [], n = t.childNodes || t; null != (i = n[r]); r++)
                !e || rt.nodeName(i, e) ? o.push(i) : rt.merge(o, g(i, e));
        return void 0 === e || e && rt.nodeName(t, e) ? rt.merge([t], o) : o
    }
    function v(t) {
        Lt.test(t.type) && (t.defaultChecked = t.checked)
    }
    function y(t, e) {
        return rt.nodeName(t, "table") && rt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }
    function b(t) {
        return t.type = (null !== rt.find.attr(t, "type")) + "/" + t.type, t
    }
    function x(t) {
        var e = Xt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }
    function _(t, e) {
        for (var n, i = 0; null != (n = t[i]); i++)
            rt._data(n, "globalEval", !e || rt._data(e[i], "globalEval"))
    }
    function w(t, e) {
        if (1 === e.nodeType && rt.hasData(t)) {
            var n, i, r, o = rt._data(t), s = rt._data(e, o), a = o.events;
            if (a) {
                delete s.handle, s.events = {};
                for (n in a)
                    for (i = 0, r = a[n].length; r > i; i++)
                        rt.event.add(e, n, a[n][i])
                    }
            s.data && (s.data = rt.extend({}, s.data))
        }
    }
    function k(t, e) {
        var n, i, r;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !nt.noCloneEvent && e[rt.expando]) {
                r = rt._data(e);
                for (i in r.events)
                    rt.removeEvent(e, i, r.handle);
                e.removeAttribute(rt.expando)
            }
            "script" === n && e.text !== t.text ? (b(e).text = t.text, x(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), nt.html5Clone && t.innerHTML&&!rt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Lt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }
    }
    function C(e, n) {
        var i, r = rt(n.createElement(e)).appendTo(n.body), o = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(r[0])) ? i.display: rt.css(r[0], "display");
        return r.detach(), o
    }
    function E(t) {
        var e = ft, n = Zt[t];
        return n || (n = C(t, e), "none" !== n && n || (Jt = (Jt || rt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Jt[0].contentWindow || Jt[0].contentDocument).document, e.write(), e.close(), n = C(t, e), Jt.detach()), Zt[t] = n), n
    }
    function S(t, e) {
        return {
            get: function() {
                var n = t();
                if (null != n)
                    return n ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }
    function T(t, e) {
        if (e in t)
            return e;
        for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, r = he.length; r--;)
            if (e = he[r] + n, e in t)
                return e;
        return i
    }
    function A(t, e) {
        for (var n, i, r, o = [], s = 0, a = t.length; a > s; s++)
            i = t[s], i.style && (o[s] = rt._data(i, "olddisplay"), n = i.style.display, e ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && At(i) && (o[s] = rt._data(i, "olddisplay", E(i.nodeName)))) : (r = At(i), (n && "none" !== n ||!r) && rt._data(i, "olddisplay", r ? n : rt.css(i, "display"))));
        for (s = 0; a > s; s++)
            i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
        return t
    }
    function N(t, e, n) {
        var i = le.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }
    function L(t, e, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2)
            "margin" === n && (s += rt.css(t, n + Tt[o], !0, r)), i ? ("content" === n && (s -= rt.css(t, "padding" + Tt[o], !0, r)), "margin" !== n && (s -= rt.css(t, "border" + Tt[o] + "Width", !0, r))) : (s += rt.css(t, "padding" + Tt[o], !0, r), "padding" !== n && (s += rt.css(t, "border" + Tt[o] + "Width", !0, r)));
        return s
    }
    function F(t, e, n) {
        var i=!0, r = "width" === e ? t.offsetWidth : t.offsetHeight, o = te(t), s = nt.boxSizing && "border-box" === rt.css(t, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = ee(t, e, o), (0 > r || null == r) && (r = t.style[e]), ie.test(r))
                return r;
            i = s && (nt.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
        }
        return r + L(t, e, n || (s ? "border" : "content"), i, o) + "px"
    }
    function D(t, e, n, i, r) {
        return new D.prototype.init(t, e, n, i, r)
    }
    function M() {
        return setTimeout(function() {
            pe = void 0
        }), pe = rt.now()
    }
    function j(t, e) {
        var n, i = {
            height: t
        }, r = 0;
        for (e = e ? 1 : 0; 4 > r; r += 2 - e)
            n = Tt[r], i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }
    function q(t, e, n) {
        for (var i, r = (be[e] || []).concat(be["*"]), o = 0, s = r.length; s > o; o++)
            if (i = r[o].call(n, e, t))
                return i
    }
    function R(t, e, n) {
        var i, r, o, s, a, l, u, c, d = this, h = {}, p = t.style, f = t.nodeType && At(t), m = rt._data(t, "fxshow");
        n.queue || (a = rt._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, d.always(function() {
            d.always(function() {
                a.unqueued--, rt.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height"in e || "width"in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = rt.css(t, "display"), c = "none" === u ? rt._data(t, "olddisplay") || E(t.nodeName) : u, "inline" === c && "none" === rt.css(t, "float") && (nt.inlineBlockNeedsLayout && "inline" !== E(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", nt.shrinkWrapBlocks() || d.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (i in e)
            if (r = e[i], me.exec(r)) {
                if (delete e[i], o = o || "toggle" === r, r === (f ? "hide" : "show")) {
                    if ("show" !== r ||!m || void 0 === m[i])
                        continue;
                        f=!0
                }
                h[i] = m && m[i] || rt.style(t, i)
            } else 
                u = void 0;
        if (rt.isEmptyObject(h))
            "inline" === ("none" === u ? E(t.nodeName) : u) && (p.display = u);
        else {
            m ? "hidden"in m && (f = m.hidden) : m = rt._data(t, "fxshow", {}), o && (m.hidden=!f), f ? rt(t).show() : d.done(function() {
                rt(t).hide()
            }), d.done(function() {
                var e;
                rt._removeData(t, "fxshow");
                for (e in h)
                    rt.style(t, e, h[e])
            });
            for (i in h)
                s = q(f ? m[i] : 0, i, d), i in m || (m[i] = s.start, f && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }
    function P(t, e) {
        var n, i, r, o, s;
        for (n in t)
            if (i = rt.camelCase(n), r = e[i], o = t[n], rt.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), s = rt.cssHooks[i], s && "expand"in s) {
                o = s.expand(o), delete t[i];
                for (n in o)
                    n in t || (t[n] = o[n], e[n] = r)
            } else 
                e[i] = r
    }
    function $(t, e, n) {
        var i, r, o = 0, s = ye.length, a = rt.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (r)
                return !1;
            for (var e = pe || M(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, o = 1 - i, s = 0, l = u.tweens.length; l > s; s++)
                u.tweens[s].run(o);
            return a.notifyWith(t, [u, o, n]), 1 > o && l ? n : (a.resolveWith(t, [u]), !1)
        }, u = a.promise({
            elem: t,
            props: rt.extend({}, e),
            opts: rt.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: e,
            originalOptions: n,
            startTime: pe || M(),
            duration: n.duration,
            tweens: [],
            createTween: function(e, n) {
                var i = rt.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(i), i
            },
            stop: function(e) {
                var n = 0, i = e ? u.tweens.length: 0;
                if (r)
                    return this;
                for (r=!0; i > n; n++)
                    u.tweens[n].run(1);
                return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this
            }
        }), c = u.props;
        for (P(c, u.opts.specialEasing);
        s > o;
        o++)if (i = ye[o].call(u, t, c, u.opts))
            return i;
        return rt.map(c, q, u), rt.isFunction(u.opts.start) && u.opts.start.call(t, u), rt.fx.timer(rt.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function B(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0, o = e.toLowerCase().match(bt) || [];
            if (rt.isFunction(n))
                for (; i = o[r++];)
                    "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }
    function H(t, e, n, i) {
        function r(a) {
            var l;
            return o[a]=!0, rt.each(t[a] || [], function(t, a) {
                var u = a(e, n, i);
                return "string" != typeof u || s || o[u] ? s?!(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var o = {}, s = t === Oe;
        return r(e.dataTypes[0]) ||!o["*"] && r("*")
    }
    function I(t, e) {
        var n, i, r = rt.ajaxSettings.flatOptions || {};
        for (i in e)
            void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
        return n && rt.extend(!0, t, n), t
    }
    function z(t, e, n) {
        for (var i, r, o, s, a = t.contents, l = t.dataTypes; "*" === l[0];)
            l.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
        if (r)
            for (s in a)
                if (a[s] && a[s].test(r)) {
                    l.unshift(s);
                    break
                }
        if (l[0]in n)
            o = l[0];
        else {
            for (s in n) {
                if (!l[0] || t.converters[s + " " + l[0]]) {
                    o = s;
                    break
                }
                i || (i = s)
            }
            o = o || i
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }
    function O(t, e, n, i) {
        var r, o, s, a, l, u = {}, c = t.dataTypes.slice();
        if (c[1])
            for (s in t.converters)
                u[s.toLowerCase()] = t.converters[s];
        for (o = c.shift(); o;)
            if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                if ("*" === o)
                    o = l;
                else if ("*" !== l && l !== o) {
                    if (s = u[l + " " + o] || u["* " + o], !s)
                        for (r in u)
                            if (a = r.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                s===!0 ? s = u[r] : u[r]!==!0 && (o = a[0], c.unshift(a[1]));
                                break
                            }
                            if (s!==!0)
                                if (s && t["throws"])
                                    e = s(e);
                                else 
                                    try {
                                        e = s(e)
                                    } catch (d) {
                                        return {
                                            state: "parsererror",
                                            error: s ? d: "No conversion from " + l + " to " + o
                                        }
                                    }
                                }
        return {
            state: "success",
            data: e
        }
    }
    function W(t, e, n, i) {
        var r;
        if (rt.isArray(e))
            rt.each(e, function(e, r) {
                n || Xe.test(t) ? i(t, r) : W(t + "[" + ("object" == typeof r ? e : "") + "]", r, n, i)
            });
        else if (n || "object" !== rt.type(e))
            i(t, e);
        else 
            for (r in e)
                W(t + "[" + r + "]", e[r], n, i)
            }
    function U() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }
    function V() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }
    function X(t) {
        return rt.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    var G = [], Q = G.slice, Y = G.concat, K = G.push, J = G.indexOf, Z = {}, tt = Z.toString, et = Z.hasOwnProperty, nt = {}, it = "1.11.1", rt = function(t, e) {
        return new rt.fn.init(t, e)
    }, ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, st = /^-ms-/, at = /-([\da-z])/gi, lt = function(t, e) {
        return e.toUpperCase()
    };
    rt.fn = rt.prototype = {
        jquery: it,
        constructor: rt,
        selector: "",
        length: 0,
        toArray: function() {
            return Q.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : Q.call(this)
        },
        pushStack: function(t) {
            var e = rt.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return rt.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(rt.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(Q.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(t) {
            var e = this.length, n =+ t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: K,
        sort: G.sort,
        splice: G.splice
    }, rt.extend = rt.fn.extend = function() {
        var t, e, n, i, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, u=!1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || rt.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
            if (null != (r = arguments[a]))
                for (i in r)
                    t = s[i], n = r[i], s !== n && (u && n && (rt.isPlainObject(n) || (e = rt.isArray(n))) ? (e ? (e=!1, o = t && rt.isArray(t) ? t : []) : o = t && rt.isPlainObject(t) ? t : {}, s[i] = rt.extend(u, o, n)) : void 0 !== n && (s[i] = n));
        return s
    }, rt.extend({
        expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === rt.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === rt.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            return !rt.isArray(t) && t - parseFloat(t) >= 0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t)
                return !1;
            return !0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== rt.type(t) || t.nodeType || rt.isWindow(t))
                return !1;
            try {
                if (t.constructor&&!et.call(t, "constructor")&&!et.call(t.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (n) {
                return !1
            }
            if (nt.ownLast)
                for (e in t)
                    return et.call(t, e);
            for (e in t);
            return void 0 === e || et.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Z[tt.call(t)] || "object" : typeof t
        },
        globalEval: function(e) {
            e && rt.trim(e) && (t.execScript || function(e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function(t) {
            return t.replace(st, "ms-").replace(at, lt)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, i) {
            var r, o = 0, s = t.length, a = n(t);
            if (i) {
                if (a)
                    for (; s > o && (r = e.apply(t[o], i), r!==!1); o++);
                else 
                    for (o in t)
                        if (r = e.apply(t[o], i), r===!1)
                            break
            } else if (a)
                for (; s > o && (r = e.call(t[o], o, t[o]), r!==!1); o++);
            else 
                for (o in t)
                    if (r = e.call(t[o], o, t[o]), r===!1)
                        break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(ot, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? rt.merge(i, "string" == typeof t ? [t] : t) : K.call(i, t)), i
        },
        inArray: function(t, e, n) {
            var i;
            if (e) {
                if (J)
                    return J.call(e, t, n);
                for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in e && e[n] === t)
                        return n
            }
            return - 1
        },
        merge: function(t, e) {
            for (var n =+ e.length, i = 0, r = t.length; n > i;)
                t[r++] = e[i++];
            if (n !== n)
                for (; void 0 !== e[i];)
                    t[r++] = e[i++];
            return t.length = r, t
        },
        grep: function(t, e, n) {
            for (var i, r = [], o = 0, s = t.length, a=!n; s > o; o++)
                i=!e(t[o], o), i !== a && r.push(t[o]);
            return r
        },
        map: function(t, e, i) {
            var r, o = 0, s = t.length, a = n(t), l = [];
            if (a)
                for (; s > o; o++)
                    r = e(t[o], o, i), null != r && l.push(r);
            else 
                for (o in t)
                    r = e(t[o], o, i), null != r && l.push(r);
            return Y.apply([], l)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, r;
            return "string" == typeof e && (r = t[e], e = t, t = r), rt.isFunction(t) ? (n = Q.call(arguments, 2), i = function() {
                return t.apply(e || this, n.concat(Q.call(arguments)))
            }, i.guid = t.guid = t.guid || rt.guid++, i) : void 0
        },
        now: function() {
            return + new Date
        },
        support: nt
    }), rt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        Z["[object " + e + "]"] = e.toLowerCase()
    });
    var ut = function(t) {
        function e(t, e, n, i) {
            var r, o, s, a, l, u, d, p, f, m;
            if ((e ? e.ownerDocument || e : H) !== D && F(e), e = e || D, n = n || [], !t || "string" != typeof t)
                return n;
            if (1 !== (a = e.nodeType) && 9 !== a)
                return [];
            if (j&&!i) {
                if (r = yt.exec(t))
                    if (s = r[1]) {
                        if (9 === a) {
                            if (o = e.getElementById(s), !o ||!o.parentNode)
                                return n;
                                if (o.id === s)
                                    return n.push(o), n
                        } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(s)) && $(e, o) && o.id === s)
                            return n.push(o), n
                    } else {
                        if (r[2])
                            return Z.apply(n, e.getElementsByTagName(t)), n;
                            if ((s = r[3]) && _.getElementsByClassName && e.getElementsByClassName)
                                return Z.apply(n, e.getElementsByClassName(s)), n
                    }
                if (_.qsa && (!q ||!q.test(t))) {
                    if (p = d = B, f = e, m = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (u = E(t), (d = e.getAttribute("id")) ? p = d.replace(xt, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;)
                            u[l] = p + h(u[l]);
                        f = bt.test(t) && c(e.parentNode) || e, m = u.join(",")
                    }
                    if (m)
                        try {
                            return Z.apply(n, f.querySelectorAll(m)), n
                    } catch (g) {} finally {
                        d || e.removeAttribute("id")
                    }
                }
            }
            return T(t.replace(lt, "$1"), e, n, i)
        }
        function n() {
            function t(n, i) {
                return e.push(n + " ") > w.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }
        function i(t) {
            return t[B]=!0, t
        }
        function r(t) {
            var e = D.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }
        function o(t, e) {
            for (var n = t.split("|"), i = t.length; i--;)
                w.attrHandle[n[i]] = e
        }
        function s(t, e) {
            var n = e && t, i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || G) - (~t.sourceIndex || G);
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e)
                        return - 1;
            return t ? 1 : - 1
        }
        function a(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }
        function l(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }
        function u(t) {
            return i(function(e) {
                return e =+ e, i(function(n, i) {
                    for (var r, o = t([], n.length, e), s = o.length; s--;)
                        n[r = o[s]] && (n[r]=!(i[r] = n[r]))
                })
            })
        }
        function c(t) {
            return t && typeof t.getElementsByTagName !== X && t
        }
        function d() {}
        function h(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++)
                i += t[e].value;
            return i
        }
        function p(t, e, n) {
            var i = e.dir, r = n && "parentNode" === i, o = z++;
            return e.first ? function(e, n, o) {
                for (; e = e[i];)
                    if (1 === e.nodeType || r)
                        return t(e, n, o)
            } : function(e, n, s) {
                var a, l, u = [I, o];
                if (s) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || r) && t(e, n, s))
                            return !0
                } else 
                    for (; e = e[i];)
                        if (1 === e.nodeType || r) {
                            if (l = e[B] || (e[B] = {}), (a = l[i]) && a[0] === I && a[1] === o)
                                return u[2] = a[2];
                                if (l[i] = u, u[2] = t(e, n, s))
                                    return !0
                        }
            }
        }
        function f(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var r = t.length; r--;)
                    if (!t[r](e, n, i))
                        return !1;
                return !0
            } : t[0]
        }
        function m(t, n, i) {
            for (var r = 0, o = n.length; o > r; r++)
                e(t, n[r], i);
            return i
        }
        function g(t, e, n, i, r) {
            for (var o, s = [], a = 0, l = t.length, u = null != e; l > a; a++)(o = t[a]) 
                && (n&&!n(o, i, r) || (s.push(o), u && e.push(a)));
            return s
        }
        function v(t, e, n, r, o, s) {
            return r&&!r[B] && (r = v(r)), o&&!o[B] && (o = v(o, s)), i(function(i, s, a, l) {
                var u, c, d, h = [], p = [], f = s.length, v = i || m(e || "*", a.nodeType ? [a] : a, []), y=!t ||!i && e ? v : g(v, h, t, a, l), b = n ? o || (i ? t : f || r) ? [] : s : y;
                if (n && n(y, b, a, l), r)
                    for (u = g(b, p), r(u, [], a, l), c = u.length; c--;)(d = u[c]) 
                        && (b[p[c]]=!(y[p[c]] = d));
                if (i) {
                    if (o || t) {
                        if (o) {
                            for (u = [], c = b.length; c--;)(d = b[c]) 
                                && u.push(y[c] = d);
                            o(null, b = [], u, l)
                        }
                        for (c = b.length; c--;)(d = b[c]) 
                            && (u = o ? et.call(i, d) : h[c])>-1 && (i[u]=!(s[u] = d))
                        }
                } else 
                    b = g(b === s ? b.splice(f, b.length) : b), o ? o(null, s, b, l) : Z.apply(s, b)
            })
        }
        function y(t) {
            for (var e, n, i, r = t.length, o = w.relative[t[0].type], s = o || w.relative[" "], a = o ? 1 : 0, l = p(function(t) {
                return t === e
            }, s, !0), u = p(function(t) {
                return et.call(e, t)>-1
            }, s, !0), c = [function(t, n, i) {
                return !o && (i || n !== A) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i))
            }
            ]; r > a; a++)
                if (n = w.relative[t[a].type])
                    c = [p(f(c), n)];
                else {
                    if (n = w.filter[t[a].type].apply(null, t[a].matches), n[B]) {
                        for (i=++a; r > i&&!w.relative[t[i].type]; i++);
                        return v(a > 1 && f(c), a > 1 && h(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*": ""
                        })).replace(lt, "$1"), n, i > a && y(t.slice(a, i)), r > i && y(t = t.slice(i)), r > i && h(t))
                    }
                    c.push(n)
                }
            return f(c)
        }
        function b(t, n) {
            var r = n.length > 0, o = t.length > 0, s = function(i, s, a, l, u) {
                var c, d, h, p = 0, f = "0", m = i && [], v = [], y = A, b = i || o && w.find.TAG("*", u), x = I += null == y ? 1: Math.random() || .1, _ = b.length;
                for (u && (A = s !== D && s); f !== _ && null != (c = b[f]); f++) {
                    if (o && c) {
                        for (d = 0; h = t[d++];)
                            if (h(c, s, a)) {
                                l.push(c);
                                break
                            }
                        u && (I = x)
                    }
                    r && ((c=!h && c) && p--, i && m.push(c))
                }
                if (p += f, r && f !== p) {
                    for (d = 0; h = n[d++];)
                        h(m, v, s, a);
                    if (i) {
                        if (p > 0)
                            for (; f--;)
                                m[f] || v[f] || (v[f] = K.call(l));
                        v = g(v)
                    }
                    Z.apply(l, v), u&&!i && v.length > 0 && p + n.length > 1 && e.uniqueSort(l)
                }
                return u && (I = x, A = y), m
            };
            return r ? i(s) : s
        }
        var x, _, w, k, C, E, S, T, A, N, L, F, D, M, j, q, R, P, $, B = "sizzle" +- new Date, H = t.document, I = 0, z = 0, O = n(), W = n(), U = n(), V = function(t, e) {
            return t === e && (L=!0), 0
        }, X = "undefined", G = 1<<31, Q = {}.hasOwnProperty, Y = [], K = Y.pop, J = Y.push, Z = Y.push, tt = Y.slice, et = Y.indexOf || function(t) {
            for (var e = 0, n = this.length; n > e; e++)
                if (this[e] === t)
                    return e;
            return - 1
        }, nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", it = "[\\x20\\t\\r\\n\\f]", rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ot = rt.replace("w", "w#"), st = "\\[" + it + "*(" + rt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + it + "*\\]", at = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)", lt = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"), ut = new RegExp("^" + it + "*," + it + "*"), ct = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"), dt = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"), ht = new RegExp(at), pt = new RegExp("^" + ot + "$"), ft = {
            ID: new RegExp("^#(" + rt + ")"),
            CLASS: new RegExp("^\\.(" + rt + ")"),
            TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + st),
            PSEUDO: new RegExp("^" + at),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + nt + ")$", "i"),
            needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
        }, mt = /^(?:input|select|textarea|button)$/i, gt = /^h\d$/i, vt = /^[^{]+\{\s*\[native \w/, yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, bt = /[+~]/, xt = /'|\\/g, _t = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"), wt = function(t, e, n) {
            var i = "0x" + e - 65536;
            return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i>>10 | 55296, 1023 & i | 56320)
        };
        try {
            Z.apply(Y = tt.call(H.childNodes), H.childNodes), Y[H.childNodes.length].nodeType
        } catch (kt) {
            Z = {
                apply: Y.length ? function(t, e) {
                    J.apply(t, tt.call(e))
                }
                : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }
        _ = e.support = {}, C = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, F = e.setDocument = function(t) {
            var e, n = t ? t.ownerDocument || t: H, i = n.defaultView;
            return n !== D && 9 === n.nodeType && n.documentElement ? (D = n, M = n.documentElement, j=!C(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
                F()
            }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
                F()
            })), _.attributes = r(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), _.getElementsByTagName = r(function(t) {
                return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
            }), _.getElementsByClassName = vt.test(n.getElementsByClassName) && r(function(t) {
                return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
            }), _.getById = r(function(t) {
                return M.appendChild(t).id = B, !n.getElementsByName ||!n.getElementsByName(B).length
            }), _.getById ? (w.find.ID = function(t, e) {
                if (typeof e.getElementById !== X && j) {
                    var n = e.getElementById(t);
                    return n && n.parentNode ? [n] : []
                }
            }, w.filter.ID = function(t) {
                var e = t.replace(_t, wt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete w.find.ID, w.filter.ID = function(t) {
                var e = t.replace(_t, wt);
                return function(t) {
                    var n = typeof t.getAttributeNode !== X && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), w.find.TAG = _.getElementsByTagName ? function(t, e) {
                return typeof e.getElementsByTagName !== X ? e.getElementsByTagName(t) : void 0
            } : function(t, e) {
                var n, i = [], r = 0, o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[r++];)
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, w.find.CLASS = _.getElementsByClassName && function(t, e) {
                return typeof e.getElementsByClassName !== X && j ? e.getElementsByClassName(t) : void 0
            }, R = [], q = [], (_.qsa = vt.test(n.querySelectorAll)) && (r(function(t) {
                t.innerHTML = "<select msallowclip=''><option selected=''></option></select>", t.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || q.push("\\[" + it + "*(?:value|" + nt + ")"), t.querySelectorAll(":checked").length || q.push(":checked")
            }), r(function(t) {
                var e = n.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && q.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), q.push(",.*:")
            })), (_.matchesSelector = vt.test(P = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && r(function(t) {
                _.disconnectedMatch = P.call(t, "div"), P.call(t, "[s!='']:x"), R.push("!=", at)
            }), q = q.length && new RegExp(q.join("|")), R = R.length && new RegExp(R.join("|")), e = vt.test(M.compareDocumentPosition), $ = e || vt.test(M.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement: t, i = e && e.parentNode;
                return t === i ||!(!i || 1 !== i.nodeType ||!(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t)
                            return !0;
                return !1
            }, V = e ? function(t, e) {
                if (t === e)
                    return L=!0, 0;
                var i=!t.compareDocumentPosition-!e.compareDocumentPosition;
                return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i ||!_.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === H && $(H, t)?-1 : e === n || e.ownerDocument === H && $(H, e) ? 1 : N ? et.call(N, t) - et.call(N, e) : 0 : 4 & i?-1 : 1)
            } : function(t, e) {
                if (t === e)
                    return L=!0, 0;
                var i, r = 0, o = t.parentNode, a = e.parentNode, l = [t], u = [e];
                if (!o ||!a)
                    return t === n?-1 : e === n ? 1 : o?-1 : a ? 1 : N ? et.call(N, t) - et.call(N, e) : 0;
                if (o === a)
                    return s(t, e);
                for (i = t; i = i.parentNode;)
                    l.unshift(i);
                for (i = e; i = i.parentNode;)
                    u.unshift(i);
                for (; l[r] === u[r];)
                    r++;
                return r ? s(l[r], u[r]) : l[r] === H?-1 : u[r] === H ? 1 : 0
            }, n) : D
        }, e.matches = function(t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== D && F(t), n = n.replace(dt, "='$1']"), _.matchesSelector && j && (!R ||!R.test(n)) && (!q ||!q.test(n)))
                try {
                    var i = P.call(t, n);
                    if (i || _.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                        return i
            } catch (r) {}
            return e(n, D, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== D && F(t), $(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== D && F(t);
            var n = w.attrHandle[e.toLowerCase()], i = n && Q.call(w.attrHandle, e.toLowerCase()) ? n(t, e, !j): void 0;
            return void 0 !== i ? i : _.attributes ||!j ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, n = [], i = 0, r = 0;
            if (L=!_.detectDuplicates, N=!_.sortStable && t.slice(0), t.sort(V), L) {
                for (; e = t[r++];)
                    e === t[r] && (i = n.push(r));
                for (; i--;)
                    t.splice(n[i], 1)
            }
            return N = null, t
        }, k = e.getText = function(t) {
            var e, n = "", i = 0, r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent)
                        return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)
                        n += k(t)
                    } else if (3 === r || 4 === r)
                    return t.nodeValue
            } else 
                for (; e = t[i++];)
                    n += k(e);
            return n
        }, w = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: ft,
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
                ATTR: function(t) {
                    return t[1] = t[1].replace(_t, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(_t, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] =+ (t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] =+ (t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, n=!t[6] && t[2];
                    return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ht.test(n) && (e = E(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(_t, wt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = O[t + " "];
                    return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && O(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== X && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, i) {
                    return function(r) {
                        var o = e.attr(r, t);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i)>-1 : "$=" === n ? i && o.slice( - i.length) === i : "~=" === n ? (" " + o + " ").indexOf(i)>-1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(t, e, n, i, r) {
                    var o = "nth" !== t.slice(0, 3), s = "last" !== t.slice( - 4), a = "of-type" === e;
                    return 1 === i && 0 === r ? function(t) {
                        return !!t.parentNode
                    } : function(e, n, l) {
                        var u, c, d, h, p, f, m = o !== s ? "nextSibling": "previousSibling", g = e.parentNode, v = a && e.nodeName.toLowerCase(), y=!l&&!a;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (d = e; d = d[m];)
                                        if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                            return !1;
                                    f = m = "only" === t&&!f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [s ? g.firstChild: g.lastChild], s && y) {
                                for (c = g[B] || (g[B] = {}), u = c[t] || [], p = u[0] === I && u[1], h = u[0] === I && u[2], d = p && g.childNodes[p]; d=++p && d && d[m] || (h = p = 0) 
                                    || f.pop();
                                )if (1 === d.nodeType&&++h && d === e) {
                                    c[t] = [I, p, h];
                                    break
                                }
                            } else if (y && (u = (e[B] || (e[B] = {}))[t]) && u[0] === I)
                                h = u[1];
                            else 
                                for (; (d=++p && d && d[m] || (h = p = 0) || f.pop()) 
                                    && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType)||!++h || (y && ((d[B] || (d[B] = {}))[t] = [I, h]), d !== e));
                            );
                            return h -= r, h === i || h%i === 0 && h / i >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var r, o = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[B] ? o(n) : o.length > 1 ? (r = [t, t, "", n], w.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                        for (var i, r = o(t, n), s = r.length; s--;)
                            i = et.call(t, r[s]), t[i]=!(e[i] = r[s])
                    }) : function(t) {
                        return o(t, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function(t) {
                    var e = [], n = [], r = S(t.replace(lt, "$1"));
                    return r[B] ? i(function(t, e, n, i) {
                        for (var o, s = r(t, null, i, []), a = t.length; a--;)(o = s[a]) 
                            && (t[a]=!(e[a] = o))
                    }) : function(t, i, o) {
                        return e[0] = t, r(e, null, o, n), !n.pop()
                    }
                }),
                has: i(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: i(function(t) {
                    return function(e) {
                        return (e.textContent || e.innerText || k(e)).indexOf(t)>-1
                    }
                }),
                lang: i(function(t) {
                    return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(_t, wt).toLowerCase(), function(e) {
                        var n;
                        do 
                            if (n = j ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                        while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === M
                },
                focus: function(t) {
                    return t === D.activeElement && (!D.hasFocus || D.hasFocus())&&!!(t.type || t.href||~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled===!1
                },
                disabled: function(t) {
                    return t.disabled===!0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e&&!!t.checked || "option" === e&&!!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected===!0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(t) {
                    return !w.pseudos.empty(t)
                },
                header: function(t) {
                    return gt.test(t.nodeName)
                },
                input: function(t) {
                    return mt.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(t, e) {
                    return [e - 1]
                }),
                eq: u(function(t, e, n) {
                    return [0 > n ? n + e: n]
                }),
                even: u(function(t, e) {
                    for (var n = 0; e > n; n += 2)
                        t.push(n);
                    return t
                }),
                odd: u(function(t, e) {
                    for (var n = 1; e > n; n += 2)
                        t.push(n);
                    return t
                }),
                lt: u(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0;)
                        t.push(i);
                    return t
                }),
                gt: u(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; ++i < e;)
                        t.push(i);
                    return t
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (x in{
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            w.pseudos[x] = a(x);
        for (x in{
            submit: !0,
            reset: !0
        })
            w.pseudos[x] = l(x);
        return d.prototype = w.filters = w.pseudos, w.setFilters = new d, E = e.tokenize = function(t, n) {
            var i, r, o, s, a, l, u, c = W[t + " "];
            if (c)
                return n ? 0 : c.slice(0);
            for (a = t, l = [], u = w.preFilter; a;) {
                i&&!(r = ut.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i=!1, (r = ct.exec(a)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(lt, " ")
                }), a = a.slice(i.length));
                for (s in w.filter)
                    !(r = ft[s].exec(a)) || u[s]&&!(r = u[s](r)) || (i = r.shift(), o.push({
                        value: i,
                        type: s,
                        matches: r
                    }), a = a.slice(i.length));
                if (!i)
                    break
            }
            return n ? a.length : a ? e.error(t) : W(t, l).slice(0)
        }, S = e.compile = function(t, e) {
            var n, i = [], r = [], o = U[t + " "];
            if (!o) {
                for (e || (e = E(t)), n = e.length; n--;)
                    o = y(e[n]), o[B] ? i.push(o) : r.push(o);
                o = U(t, b(r, i)), o.selector = t
            }
            return o
        }, T = e.select = function(t, e, n, i) {
            var r, o, s, a, l, u = "function" == typeof t && t, d=!i && E(t = u.selector || t);
            if (n = n || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && _.getById && 9 === e.nodeType && j && w.relative[o[1].type]) {
                    if (e = (w.find.ID(s.matches[0].replace(_t, wt), e) || [])[0], !e)
                        return n;
                    u && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (r = ft.needsContext.test(t) ? 0 : o.length; r--&&(s = o[r], !w.relative[a = s.type]);)
                    if ((l = w.find[a]) && (i = l(s.matches[0].replace(_t, wt), bt.test(o[0].type) && c(e.parentNode) || e))) {
                        if (o.splice(r, 1), t = i.length && h(o), !t)
                            return Z.apply(n, i), n;
                            break
                    }
            }
            return (u || S(t, d))(i, e, !j, n, bt.test(t) && c(e.parentNode) || e), n
        }, _.sortStable = B.split("").sort(V).join("") === B, _.detectDuplicates=!!L, F(), _.sortDetached = r(function(t) {
            return 1 & t.compareDocumentPosition(D.createElement("div"))
        }), r(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), _.attributes && r(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || o("value", function(t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), r(function(t) {
            return null == t.getAttribute("disabled")
        }) || o(nt, function(t, e, n) {
            var i;
            return n ? void 0 : t[e]===!0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), e
    }(t);
    rt.find = ut, rt.expr = ut.selectors, rt.expr[":"] = rt.expr.pseudos, rt.unique = ut.uniqueSort, rt.text = ut.getText, rt.isXMLDoc = ut.isXML, rt.contains = ut.contains;
    var ct = rt.expr.match.needsContext, dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ht = /^.[^:#\[\.,]*$/;
    rt.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? rt.find.matchesSelector(i, t) ? [i] : [] : rt.find.matches(t, rt.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, rt.fn.extend({
        find: function(t) {
            var e, n = [], i = this, r = i.length;
            if ("string" != typeof t)
                return this.pushStack(rt(t).filter(function() {
                    for (e = 0; r > e; e++)
                        if (rt.contains(i[e], this))
                            return !0
                        }));
            for (e = 0; r > e; e++)
                rt.find(t, i[e], n);
            return n = this.pushStack(r > 1 ? rt.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function(t) {
            return this.pushStack(i(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(i(this, t || [], !0))
        },
        is: function(t) {
            return !!i(this, "string" == typeof t && ct.test(t) ? rt(t) : t || [], !1).length
        }
    });
    var pt, ft = t.document, mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, gt = rt.fn.init = function(t, e) {
        var n, i;
        if (!t)
            return this;
        if ("string" == typeof t) {
            if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : mt.exec(t), !n ||!n[1] && e)
                return !e || e.jquery ? (e || pt).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof rt ? e[0] : e, rt.merge(this, rt.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : ft, !0)), dt.test(n[1]) && rt.isPlainObject(e))
                    for (n in e)
                        rt.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this
            }
            if (i = ft.getElementById(n[2]), i && i.parentNode) {
                if (i.id !== n[2])
                    return pt.find(t);
                this.length = 1, this[0] = i
            }
            return this.context = ft, this.selector = t, this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : rt.isFunction(t) ? "undefined" != typeof pt.ready ? pt.ready(t) : t(rt) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), rt.makeArray(t, this))
    };
    gt.prototype = rt.fn, pt = rt(ft);
    var vt = /^(?:parents|prev(?:Until|All))/, yt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    rt.extend({
        dir: function(t, e, n) {
            for (var i = [], r = t[e]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType ||!rt(r).is(n));
            )1 === r.nodeType && i.push(r), r = r[e];
            return i
        },
        sibling: function(t, e) {
            for (var n = []; t; t = t.nextSibling)
                1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    }), rt.fn.extend({
        has: function(t) {
            var e, n = rt(t, this), i = n.length;
            return this.filter(function() {
                for (e = 0; i > e; e++)
                    if (rt.contains(this, n[e]))
                        return !0
            })
        },
        closest: function(t, e) {
            for (var n, i = 0, r = this.length, o = [], s = ct.test(t) || "string" != typeof t ? rt(t, e || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n)>-1 : 1 === n.nodeType && rt.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? rt.unique(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? rt.inArray(this[0], rt(t)) : rt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : - 1
        },
        add: function(t, e) {
            return this.pushStack(rt.unique(rt.merge(this.get(), rt(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), rt.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return rt.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return rt.dir(t, "parentNode", n)
        },
        next: function(t) {
            return r(t, "nextSibling")
        },
        prev: function(t) {
            return r(t, "previousSibling")
        },
        nextAll: function(t) {
            return rt.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return rt.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return rt.dir(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return rt.dir(t, "previousSibling", n)
        },
        siblings: function(t) {
            return rt.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return rt.sibling(t.firstChild)
        },
        contents: function(t) {
            return rt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : rt.merge([], t.childNodes)
        }
    }, function(t, e) {
        rt.fn[t] = function(n, i) {
            var r = rt.map(this, e, n);
            return "Until" !== t.slice( - 5) && (i = n), i && "string" == typeof i && (r = rt.filter(i, r)), this.length > 1 && (yt[t] || (r = rt.unique(r)), vt.test(t) && (r = r.reverse())), this.pushStack(r)
        }
    });
    var bt = /\S+/g, xt = {};
    rt.Callbacks = function(t) {
        t = "string" == typeof t ? xt[t] || o(t) : rt.extend({}, t);
        var e, n, i, r, s, a, l = [], u=!t.once && [], c = function(o) {
            for (n = t.memory && o, i=!0, s = a || 0, a = 0, r = l.length, e=!0; l && r > s; s++)
                if (l[s].apply(o[0], o[1])===!1 && t.stopOnFalse) {
                    n=!1;
                    break
                }
            e=!1, l && (u ? u.length && c(u.shift()) : n ? l = [] : d.disable())
        }, d = {
            add: function() {
                if (l) {
                    var i = l.length;
                    !function o(e) {
                        rt.each(e, function(e, n) {
                            var i = rt.type(n);
                            "function" === i ? t.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
                        })
                    }(arguments), e ? r = l.length : n && (a = i, c(n))
                }
                return this
            },
            remove: function() {
                return l && rt.each(arguments, function(t, n) {
                    for (var i; (i = rt.inArray(n, l, i))>-1;)
                        l.splice(i, 1), e && (r >= i && r--, s >= i && s--)
                }), this
            },
            has: function(t) {
                return t ? rt.inArray(t, l)>-1 : !(!l ||!l.length)
            },
            empty: function() {
                return l = [], r = 0, this
            },
            disable: function() {
                return l = u = n = void 0, this
            },
            disabled: function() {
                return !l
            },
            lock: function() {
                return u = void 0, n || d.disable(), this
            },
            locked: function() {
                return !u
            },
            fireWith: function(t, n) {
                return !l || i&&!u || (n = n || [], n = [t, n.slice ? n.slice(): n], e ? u.push(n) : c(n)), this
            },
            fire: function() {
                return d.fireWith(this, arguments), this
            },
            fired: function() {
                return !!i
            }
        };
        return d
    }, rt.extend({
        Deferred: function(t) {
            var e = [["resolve", "done", rt.Callbacks("once memory"), "resolved"], ["reject", "fail", rt.Callbacks("once memory"), "rejected"], ["notify", "progress", rt.Callbacks("memory")]], n = "pending", i = {
                state: function() {
                    return n
                },
                always: function() {
                    return r.done(arguments).fail(arguments), this
                },
                then: function() {
                    var t = arguments;
                    return rt.Deferred(function(n) {
                        rt.each(e, function(e, o) {
                            var s = rt.isFunction(t[e]) && t[e];
                            r[o[1]](function() {
                                var t = s && s.apply(this, arguments);
                                t && rt.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                            })
                        }), t = null
                    }).promise()
                },
                promise: function(t) {
                    return null != t ? rt.extend(t, i) : i
                }
            }, r = {};
            return i.pipe = i.then, rt.each(e, function(t, o) {
                var s = o[2], a = o[3];
                i[o[1]] = s.add, a && s.add(function() {
                    n = a
                }, e[1^t][2].disable, e[2][2].lock), r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = s.fireWith
            }), i.promise(r), t && t.call(r, r), r
        },
        when: function(t) {
            var e, n, i, r = 0, o = Q.call(arguments), s = o.length, a = 1 !== s || t && rt.isFunction(t.promise) ? s: 0, l = 1 === a ? t: rt.Deferred(), u = function(t, n, i) {
                return function(r) {
                    n[t] = this, i[t] = arguments.length > 1 ? Q.call(arguments) : r, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                }
            };
            if (s > 1)
                for (e = new Array(s), n = new Array(s), i = new Array(s); s > r; r++)
                    o[r] && rt.isFunction(o[r].promise) ? o[r].promise().done(u(r, i, o)).fail(l.reject).progress(u(r, n, e)) : --a;
            return a || l.resolveWith(i, o), l.promise()
        }
    });
    var _t;
    rt.fn.ready = function(t) {
        return rt.ready.promise().done(t), this
    }, rt.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? rt.readyWait++ : rt.ready(!0)
        },
        ready: function(t) {
            if (t===!0?!--rt.readyWait : !rt.isReady) {
                if (!ft.body)
                    return setTimeout(rt.ready);
                rt.isReady=!0, t!==!0&&--rt.readyWait > 0 || (_t.resolveWith(ft, [rt]), rt.fn.triggerHandler && (rt(ft).triggerHandler("ready"), rt(ft).off("ready")))
            }
        }
    }), rt.ready.promise = function(e) {
        if (!_t)
            if (_t = rt.Deferred(), "complete" === ft.readyState)
                setTimeout(rt.ready);
            else if (ft.addEventListener)
                ft.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1);
            else {
                ft.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
                var n=!1;
                try {
                    n = null == t.frameElement && ft.documentElement
                } catch (i) {}
                n && n.doScroll&&!function r() {
                    if (!rt.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (t) {
                            return setTimeout(r, 50)
                        }
                        s(), rt.ready()
                    }
                }()
            }
        return _t.promise(e)
    };
    var wt, kt = "undefined";
    for (wt in rt(nt))
        break;
    nt.ownLast = "0" !== wt, nt.inlineBlockNeedsLayout=!1, rt(function() {
        var t, e, n, i;
        n = ft.getElementsByTagName("body")[0], n && n.style && (e = ft.createElement("div"), i = ft.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== kt && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
    }), function() {
        var t = ft.createElement("div");
        if (null == nt.deleteExpando) {
            nt.deleteExpando=!0;
            try {
                delete t.test
            } catch (e) {
                nt.deleteExpando=!1
            }
        }
        t = null
    }(), rt.acceptData = function(t) {
        var e = rt.noData[(t.nodeName + " ").toLowerCase()], n =+ t.nodeType || 1;
        return 1 !== n && 9 !== n?!1 : !e || e!==!0 && t.getAttribute("classid") === e
    };
    var Ct = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Et = /([A-Z])/g;
    rt.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return t = t.nodeType ? rt.cache[t[rt.expando]] : t[rt.expando], !!t&&!u(t)
        },
        data: function(t, e, n) {
            return c(t, e, n)
        },
        removeData: function(t, e) {
            return d(t, e)
        },
        _data: function(t, e, n) {
            return c(t, e, n, !0)
        },
        _removeData: function(t, e) {
            return d(t, e, !0)
        }
    }), rt.fn.extend({
        data: function(t, e) {
            var n, i, r, o = this[0], s = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (r = rt.data(o), 1 === o.nodeType&&!rt._data(o, "parsedAttrs"))) {
                    for (n = s.length; n--;)
                        s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = rt.camelCase(i.slice(5)), l(o, i, r[i])));
                    rt._data(o, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function() {
                rt.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                rt.data(this, t, e)
            }) : o ? l(o, t, rt.data(o, t)) : void 0
        },
        removeData: function(t) {
            return this.each(function() {
                rt.removeData(this, t)
            })
        }
    }), rt.extend({
        queue: function(t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = rt._data(t, e), n && (!i || rt.isArray(n) ? i = rt._data(t, e, rt.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = rt.queue(t, e), i = n.length, r = n.shift(), o = rt._queueHooks(t, e), s = function() {
                rt.dequeue(t, e)
            };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return rt._data(t, n) || rt._data(t, n, {
                empty: rt.Callbacks("once memory").add(function() {
                    rt._removeData(t, e + "queue"), rt._removeData(t, n)
                })
            })
        }
    }), rt.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? rt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = rt.queue(this, t, e);
                rt._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && rt.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                rt.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1, r = rt.Deferred(), o = this, s = this.length, a = function() {
                --i || r.resolveWith(o, [o])
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)
                n = rt._data(o[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var St = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Tt = ["Top", "Right", "Bottom", "Left"], At = function(t, e) {
        return t = e || t, "none" === rt.css(t, "display") ||!rt.contains(t.ownerDocument, t)
    }, Nt = rt.access = function(t, e, n, i, r, o, s) {
        var a = 0, l = t.length, u = null == n;
        if ("object" === rt.type(n)) {
            r=!0;
            for (a in n)
                rt.access(t, e, a, n[a], !0, o, s)
        } else if (void 0 !== i && (r=!0, rt.isFunction(i) || (s=!0), u && (s ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) {
            return u.call(rt(t), n)
        })), e))for (; l > a; a++)
            e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
        return r ? t : u ? e.call(t) : l ? e(t[0], n) : o
    }, Lt = /^(?:checkbox|radio)$/i;
    !function() {
        var t = ft.createElement("input"), e = ft.createElement("div"), n = ft.createDocumentFragment();
        if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === e.firstChild.nodeType, nt.tbody=!e.getElementsByTagName("tbody").length, nt.htmlSerialize=!!e.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== ft.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked=!0, n.appendChild(t), nt.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue, n.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent=!0, e.attachEvent && (e.attachEvent("onclick", function() {
            nt.noCloneEvent=!1
        }), e.cloneNode(!0).click()), null == nt.deleteExpando) {
            nt.deleteExpando=!0;
            try {
                delete e.test
            } catch (i) {
                nt.deleteExpando=!1
            }
        }
    }(), function() {
        var e, n, i = ft.createElement("div");
        for (e in{
            submit: !0,
            change: !0,
            focusin: !0
        })
            n = "on" + e, (nt[e + "Bubbles"] = n in t) || (i.setAttribute(n, "t"), nt[e + "Bubbles"] = i.attributes[n].expando===!1);
        i = null
    }();
    var Ft = /^(?:input|select|textarea)$/i, Dt = /^key/, Mt = /^(?:mouse|pointer|contextmenu)|click/, jt = /^(?:focusinfocus|focusoutblur)$/, qt = /^([^.]*)(?:\.(.+)|)$/;
    rt.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, s, a, l, u, c, d, h, p, f, m, g = rt._data(t);
            if (g) {
                for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = rt.guid++), (s = g.events) || (s = g.events = {}), (c = g.handle) || (c = g.handle = function(t) {
                    return typeof rt === kt || t && rt.event.triggered === t.type ? void 0 : rt.event.dispatch.apply(c.elem, arguments)
                }, c.elem = t), e = (e || "").match(bt) || [""], a = e.length; a--;)
                    o = qt.exec(e[a]) || [], p = m = o[1], f = (o[2] || "").split(".").sort(), p && (u = rt.event.special[p] || {}, p = (r ? u.delegateType : u.bindType) || p, u = rt.event.special[p] || {}, d = rt.extend({
                        type: p,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && rt.expr.match.needsContext.test(r),
                        namespace: f.join(".")
                    }, l), (h = s[p]) || (h = s[p] = [], h.delegateCount = 0, u.setup && u.setup.call(t, i, f, c)!==!1 || (t.addEventListener ? t.addEventListener(p, c, !1) : t.attachEvent && t.attachEvent("on" + p, c))), u.add && (u.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, d) : h.push(d), rt.event.global[p]=!0);
                t = null
            }
        },
        remove: function(t, e, n, i, r) {
            var o, s, a, l, u, c, d, h, p, f, m, g = rt.hasData(t) && rt._data(t);
            if (g && (c = g.events)) {
                for (e = (e || "").match(bt) || [""], u = e.length; u--;)
                    if (a = qt.exec(e[u]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p) {
                        for (d = rt.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, h = c[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = h.length; o--;)
                            s = h[o], !r && m !== s.origType || n && n.guid !== s.guid || a&&!a.test(s.namespace) || i && i !== s.selector && ("**" !== i ||!s.selector) || (h.splice(o, 1), s.selector && h.delegateCount--, d.remove && d.remove.call(t, s));
                            l&&!h.length && (d.teardown && d.teardown.call(t, f, g.handle)!==!1 || rt.removeEvent(t, p, g.handle), delete c[p])
                    } else 
                        for (p in c)
                            rt.event.remove(t, p + e[u], n, i, !0);
                rt.isEmptyObject(c) && (delete g.handle, rt._removeData(t, "events"))
            }
        },
        trigger: function(e, n, i, r) {
            var o, s, a, l, u, c, d, h = [i || ft], p = et.call(e, "type") ? e.type: e, f = et.call(e, "namespace") ? e.namespace.split("."): [];
            if (a = c = i = i || ft, 3 !== i.nodeType && 8 !== i.nodeType&&!jt.test(p + rt.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), s = p.indexOf(":") < 0 && "on" + p, e = e[rt.expando] ? e : new rt.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : rt.makeArray(n, [e]), u = rt.event.special[p] || {}, r ||!u.trigger || u.trigger.apply(i, n)!==!1)
                ) {
                if (!r&&!u.noBubble&&!rt.isWindow(i)) {
                    for (l = u.delegateType || p, jt.test(l + p) || (a = a.parentNode); a; a = a.parentNode)
                        h.push(a), c = a;
                    c === (i.ownerDocument || ft) && h.push(c.defaultView || c.parentWindow || t)
                }
                for (d = 0; (a = h[d++])&&!e.isPropagationStopped();)
                    e.type = d > 1 ? l : u.bindType || p, o = (rt._data(a, "events") || {})[e.type] && rt._data(a, "handle"), o && o.apply(a, n), o = s && a[s], o && o.apply && rt.acceptData(a) && (e.result = o.apply(a, n), e.result===!1 && e.preventDefault());
                if (e.type = p, !r&&!e.isDefaultPrevented() && (!u._default || u._default.apply(h.pop(), n)===!1) && rt.acceptData(i) && s && i[p]&&!rt.isWindow(i)) {
                    c = i[s], c && (i[s] = null), rt.event.triggered = p;
                    try {
                        i[p]()
                    } catch (m) {}
                    rt.event.triggered = void 0, c && (i[s] = c)
                }
                return e.result
            }
        },
        dispatch: function(t) {
            t = rt.event.fix(t);
            var e, n, i, r, o, s = [], a = Q.call(arguments), l = (rt._data(this, "events") || {})[t.type] || [], u = rt.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t)!==!1) {
                for (s = rt.event.handlers.call(this, t, l), e = 0; (r = s[e++])&&!t.isPropagationStopped();)
                    for (t.currentTarget = r.elem, o = 0; (i = r.handlers[o++])&&!t.isImmediatePropagationStopped();)
                        t.namespace_re&&!t.namespace_re.test(i.namespace) || (t.handleObj = i, t.data = i.data, n = ((rt.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, a), void 0 !== n && (t.result = n)===!1 && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var n, i, r, o, s = [], a = e.delegateCount, l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled!==!0 || "click" !== t.type)) {
                        for (r = [], o = 0; a > o; o++)
                            i = e[o], n = i.selector + " ", void 0 === r[n] && (r[n] = i.needsContext ? rt(n, this).index(l) >= 0 : rt.find(n, this, null, [l]).length), r[n] && r.push(i);
                            r.length && s.push({
                                elem: l,
                                handlers: r
                            })
                    }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }), s
        },
        fix: function(t) {
            if (t[rt.expando])
                return t;
            var e, n, i, r = t.type, o = t, s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Mt.test(r) ? this.mouseHooks : Dt.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new rt.Event(o), e = i.length; e--;)
                n = i[e], t[n] = o[n];
            return t.target || (t.target = o.srcElement || ft), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey=!!t.metaKey, s.filter ? s.filter(t, o) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, i, r, o = e.button, s = e.fromElement;
                return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || ft, r = i.documentElement, n = i.body, t.pageX = e.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== f() && this.focus)
                        try {
                            return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return rt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return rt.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n, i) {
            var r = rt.extend(new rt.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? rt.event.trigger(r, null, e) : rt.event.dispatch.call(e, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, rt.removeEvent = ft.removeEventListener ? function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    } : function(t, e, n) {
        var i = "on" + e;
        t.detachEvent && (typeof t[i] === kt && (t[i] = null), t.detachEvent(i, n))
    }, rt.Event = function(t, e) {
        return this instanceof rt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue===!1 ? h : p) : this.type = t, e && rt.extend(this, e), this.timeStamp = t && t.timeStamp || rt.now(), void(this[rt.expando]=!0)) : new rt.Event(t, e)
    }, rt.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = h, t && (t.preventDefault ? t.preventDefault() : t.returnValue=!1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = h, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble=!0)
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = h, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, rt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        rt.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this, r = t.relatedTarget, o = t.handleObj;
                return r && (r === i || rt.contains(i, r)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), nt.submitBubbles || (rt.event.special.submit = {
        setup: function() {
            return rt.nodeName(this, "form")?!1 : void rt.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target, n = rt.nodeName(e, "input") || rt.nodeName(e, "button") ? e.form: void 0;
                n&&!rt._data(n, "submitBubbles") && (rt.event.add(n, "submit._submit", function(t) {
                    t._submit_bubble=!0
                }), rt._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode&&!t.isTrigger && rt.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function() {
            return rt.nodeName(this, "form")?!1 : void rt.event.remove(this, "._submit")
        }
    }), nt.changeBubbles || (rt.event.special.change = {
        setup: function() {
            return Ft.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (rt.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed=!0)
            }), rt.event.add(this, "click._change", function(t) {
                this._just_changed&&!t.isTrigger && (this._just_changed=!1), rt.event.simulate("change", this, t, !0)
            })), !1) : void rt.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                Ft.test(e.nodeName)&&!rt._data(e, "changeBubbles") && (rt.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || rt.event.simulate("change", this.parentNode, t, !0)
                }), rt._data(e, "changeBubbles", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return rt.event.remove(this, "._change"), !Ft.test(this.nodeName)
        }
    }), nt.focusinBubbles || rt.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            rt.event.simulate(e, t.target, rt.event.fix(t), !0)
        };
        rt.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this, r = rt._data(i, e);
                r || i.addEventListener(t, n, !0), rt._data(i, e, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this, r = rt._data(i, e) - 1;
                r ? rt._data(i, e, r) : (i.removeEventListener(t, n, !0), rt._removeData(i, e))
            }
        }
    }), rt.fn.extend({
        on: function(t, e, n, i, r) {
            var o, s;
            if ("object" == typeof t) {
                "string" != typeof e && (n = n || e, e = void 0);
                for (o in t)
                    this.on(o, e, n, t[o], r);
                return this
            }
            if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i===!1)
                i = p;
            else if (!i)
                return this;
            return 1 === r && (s = i, i = function(t) {
                return rt().off(t), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = rt.guid++)), this.each(function() {
                rt.event.add(this, t, i, n, e)
            })
        },
        one: function(t, e, n, i) {
            return this.on(t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj)
                return i = t.handleObj, rt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (r in t)
                    this.off(r, e, t[r]);
                return this
            }
            return e!==!1 && "function" != typeof e || (n = e, e = void 0), n===!1 && (n = p), this.each(function() {
                rt.event.remove(this, t, n, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                rt.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? rt.event.trigger(t, e, n, !0) : void 0
        }
    });
    var Rt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Pt = / jQuery\d+="(?:null|\d+)"/g, $t = new RegExp("<(?:" + Rt + ")[\\s/>]", "i"), Bt = /^\s+/, Ht = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, It = /<([\w:]+)/, zt = /<tbody/i, Ot = /<|&#?\w+;/, Wt = /<(?:script|style|link)/i, Ut = /checked\s*(?:[^=]|=\s*.checked.)/i, Vt = /^$|\/(?:java|ecma)script/i, Xt = /^true\/(.*)/, Gt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Qt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: nt.htmlSerialize ? [0, "", ""]: [1, "X<div>", "</div>"]
    }, Yt = m(ft), Kt = Yt.appendChild(ft.createElement("div"));
    Qt.optgroup = Qt.option, Qt.tbody = Qt.tfoot = Qt.colgroup = Qt.caption = Qt.thead, Qt.th = Qt.td, rt.extend({
        clone: function(t, e, n) {
            var i, r, o, s, a, l = rt.contains(t.ownerDocument, t);
            if (nt.html5Clone || rt.isXMLDoc(t) ||!$t.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (Kt.innerHTML = t.outerHTML, Kt.removeChild(o = Kt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || rt.isXMLDoc(t)))
                for (i = g(o), a = g(t), s = 0; null != (r = a[s]); ++s)
                    i[s] && k(r, i[s]);
            if (e)
                if (n)
                    for (a = a || g(t), i = i || g(o), s = 0; null != (r = a[s]); s++)
                        w(r, i[s]);
                else 
                    w(t, o);
            return i = g(o, "script"), i.length > 0 && _(i, !l && g(t, "script")), i = a = r = null, o
        },
        buildFragment: function(t, e, n, i) {
            for (var r, o, s, a, l, u, c, d = t.length, h = m(e), p = [], f = 0; d > f; f++)
                if (o = t[f], o || 0 === o)
                    if ("object" === rt.type(o))
                        rt.merge(p, o.nodeType ? [o] : o);
                    else if (Ot.test(o)) {
                        for (a = a || h.appendChild(e.createElement("div")), l = (It.exec(o) || ["", ""])[1].toLowerCase(), c = Qt[l] || Qt._default, a.innerHTML = c[1] + o.replace(Ht, "<$1></$2>") + c[2], r = c[0]; r--;)
                            a = a.lastChild;
                            if (!nt.leadingWhitespace && Bt.test(o) && p.push(e.createTextNode(Bt.exec(o)[0])), !nt.tbody)
                                for (o = "table" !== l || zt.test(o) ? "<table>" !== c[1] || zt.test(o) ? 0 : a : a.firstChild, r = o && o.childNodes.length; r--;)
                                    rt.nodeName(u = o.childNodes[r], "tbody")&&!u.childNodes.length && o.removeChild(u);
                                    for (rt.merge(p, a.childNodes), a.textContent = ""; a.firstChild;)
                                        a.removeChild(a.firstChild);
                                        a = h.lastChild
                    } else 
                        p.push(e.createTextNode(o));
            for (a && h.removeChild(a), nt.appendChecked || rt.grep(g(p, "input"), v), f = 0; o = p[f++];)
                if ((!i||-1 === rt.inArray(o, i)) && (s = rt.contains(o.ownerDocument, o), a = g(h.appendChild(o), "script"), s && _(a), n))
                    for (r = 0; o = a[r++];)
                        Vt.test(o.type || "") && n.push(o);
            return a = null, h
        },
        cleanData: function(t, e) {
            for (var n, i, r, o, s = 0, a = rt.expando, l = rt.cache, u = nt.deleteExpando, c = rt.event.special; null != (n = t[s]); s++)
                if ((e || rt.acceptData(n)) && (r = n[a], o = r && l[r])) {
                    if (o.events)
                        for (i in o.events)
                            c[i] ? rt.event.remove(n, i) : rt.removeEvent(n, i, o.handle);
                            l[r] && (delete l[r], u ? delete n[a] : typeof n.removeAttribute !== kt ? n.removeAttribute(a) : n[a] = null, G.push(r))
                }
        }
    }), rt.fn.extend({
        text: function(t) {
            return Nt(this, function(t) {
                return void 0 === t ? rt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ft).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var n, i = t ? rt.filter(t, this) : this, r = 0; null != (n = i[r]); r++)
                e || 1 !== n.nodeType || rt.cleanData(g(n)), n.parentNode && (e && rt.contains(n.ownerDocument, n) && _(g(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && rt.cleanData(g(t, !1)); t.firstChild;)
                    t.removeChild(t.firstChild);
                t.options && rt.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null == t?!1 : t, e = null == e ? t : e, this.map(function() {
                return rt.clone(this, t, e)
            })
        },
        html: function(t) {
            return Nt(this, function(t) {
                var e = this[0] || {}, n = 0, i = this.length;
                if (void 0 === t)
                    return 1 === e.nodeType ? e.innerHTML.replace(Pt, "") : void 0;
                if ("string" == typeof t&&!Wt.test(t) && (nt.htmlSerialize ||!$t.test(t)) && (nt.leadingWhitespace ||!Bt.test(t))&&!Qt[(It.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = t.replace(Ht, "<$1></$2>");
                    try {
                        for (; i > n; n++)
                            e = this[n] || {}, 1 === e.nodeType && (rt.cleanData(g(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (r) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, rt.cleanData(g(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = Y.apply([], t);
            var n, i, r, o, s, a, l = 0, u = this.length, c = this, d = u - 1, h = t[0], p = rt.isFunction(h);
            if (p || u > 1 && "string" == typeof h&&!nt.checkClone && Ut.test(h))
                return this.each(function(n) {
                    var i = c.eq(n);
                    p && (t[0] = h.call(this, n, i.html())), i.domManip(t, e)
                });
            if (u && (a = rt.buildFragment(t, this[0].ownerDocument, !1, this), n = a.firstChild, 1 === a.childNodes.length && (a = n), n)) {
                for (o = rt.map(g(a, "script"), b), r = o.length; u > l; l++)
                    i = a, l !== d && (i = rt.clone(i, !0, !0), r && rt.merge(o, g(i, "script"))), e.call(this[l], i, l);
                if (r)
                    for (s = o[o.length - 1].ownerDocument, rt.map(o, x), l = 0; r > l; l++)
                        i = o[l], Vt.test(i.type || "")&&!rt._data(i, "globalEval") && rt.contains(s, i) && (i.src ? rt._evalUrl && rt._evalUrl(i.src) : rt.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Gt, "")));
                a = n = null
            }
            return this
        }
    }), rt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        rt.fn[t] = function(t) {
            for (var n, i = 0, r = [], o = rt(t), s = o.length - 1; s >= i; i++)
                n = i === s ? this : this.clone(!0), rt(o[i])[e](n), K.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Jt, Zt = {};
    !function() {
        var t;
        nt.shrinkWrapBlocks = function() {
            if (null != t)
                return t;
            t=!1;
            var e, n, i;
            return n = ft.getElementsByTagName("body")[0], n && n.style ? (e = ft.createElement("div"), i = ft.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== kt && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(ft.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
        }
    }();
    var te, ee, ne = /^margin/, ie = new RegExp("^(" + St + ")(?!px)[a-z%]+$", "i"), re = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (te = function(t) {
        return t.ownerDocument.defaultView.getComputedStyle(t, null)
    }, ee = function(t, e, n) {
        var i, r, o, s, a = t.style;
        return n = n || te(t), s = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== s || rt.contains(t.ownerDocument, t) || (s = rt.style(t, e)), ie.test(s) && ne.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 === s ? s : s + ""
    }) : ft.documentElement.currentStyle && (te = function(t) {
        return t.currentStyle
    }, ee = function(t, e, n) {
        var i, r, o, s, a = t.style;
        return n = n || te(t), s = n ? n[e] : void 0, null == s && a && a[e] && (s = a[e]), ie.test(s)&&!re.test(e) && (i = a.left, r = t.runtimeStyle, o = r && r.left, o && (r.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : s, s = a.pixelLeft + "px", a.left = i, o && (r.left = o)), void 0 === s ? s : s + "" || "auto"
    }), function() {
        function e() {
            var e, n, i, r;
            n = ft.getElementsByTagName("body")[0], n && n.style && (e = ft.createElement("div"), i = ft.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = s=!1, l=!0, t.getComputedStyle && (o = "1%" !== (t.getComputedStyle(e, null) || {}).top, s = "4px" === (t.getComputedStyle(e, null) || {
                width: "4px"
            }).width, r = e.appendChild(ft.createElement("div")), r.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", e.style.width = "1px", l=!parseFloat((t.getComputedStyle(r, null) || {}).marginRight)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = e.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === r[0].offsetHeight, a && (r[0].style.display = "", r[1].style.display = "none", a = 0 === r[0].offsetHeight), n.removeChild(i));
        }
        var n, i, r, o, s, a, l;
        n = ft.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = n.getElementsByTagName("a")[0], i = r && r.style, i && (i.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === i.opacity, nt.cssFloat=!!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, rt.extend(nt, {
            reliableHiddenOffsets: function() {
                return null == a && e(), a
            },
            boxSizingReliable: function() {
                return null == s && e(), s
            },
            pixelPosition: function() {
                return null == o && e(), o
            },
            reliableMarginRight: function() {
                return null == l && e(), l
            }
        }))
    }(), rt.swap = function(t, e, n, i) {
        var r, o, s = {};
        for (o in e)
            s[o] = t.style[o], t.style[o] = e[o];
        r = n.apply(t, i || []);
        for (o in e)
            t.style[o] = s[o];
        return r
    };
    var oe = /alpha\([^)]*\)/i, se = /opacity\s*=\s*([^)]*)/, ae = /^(none|table(?!-c[ea]).+)/, le = new RegExp("^(" + St + ")(.*)$", "i"), ue = new RegExp("^([+-])=(" + St + ")", "i"), ce = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, de = {
        letterSpacing: "0",
        fontWeight: "400"
    }, he = ["Webkit", "O", "Moz", "ms"];
    rt.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = ee(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
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
        cssProps: {
            "float": nt.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, s, a = rt.camelCase(e), l = t.style;
                if (e = rt.cssProps[a] || (rt.cssProps[a] = T(l, a)), s = rt.cssHooks[e] || rt.cssHooks[a], void 0 === n)
                    return s && "get"in s && void 0 !== (r = s.get(t, !1, i)) ? r : l[e];
                if (o = typeof n, "string" === o && (r = ue.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(rt.css(t, e)), o = "number"), null != n && n === n && ("number" !== o || rt.cssNumber[a] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(s && "set"in s && void 0 === (n = s.set(t, n, i)))
                    ))try {
                    l[e] = n
                } catch (u) {}
            }
        },
        css: function(t, e, n, i) {
            var r, o, s, a = rt.camelCase(e);
            return e = rt.cssProps[a] || (rt.cssProps[a] = T(t.style, a)), s = rt.cssHooks[e] || rt.cssHooks[a], s && "get"in s && (o = s.get(t, !0, n)), void 0 === o && (o = ee(t, e, i)), "normal" === o && e in de && (o = de[e]), "" === n || n ? (r = parseFloat(o), n===!0 || rt.isNumeric(r) ? r || 0 : o) : o
        }
    }), rt.each(["height", "width"], function(t, e) {
        rt.cssHooks[e] = {
            get: function(t, n, i) {
                return n ? ae.test(rt.css(t, "display")) && 0 === t.offsetWidth ? rt.swap(t, ce, function() {
                    return F(t, e, i)
                }) : F(t, e, i) : void 0
            },
            set: function(t, n, i) {
                var r = i && te(t);
                return N(t, n, i ? L(t, e, i, nt.boxSizing && "border-box" === rt.css(t, "boxSizing", !1, r), r) : 0)
            }
        }
    }), nt.opacity || (rt.cssHooks.opacity = {
        get: function(t, e) {
            return se.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var n = t.style, i = t.currentStyle, r = rt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")": "", o = i && i.filter || n.filter || "";
            n.zoom = 1, (e >= 1 || "" === e) && "" === rt.trim(o.replace(oe, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i&&!i.filter) || (n.filter = oe.test(o) ? o.replace(oe, r) : o + " " + r)
        }
    }), rt.cssHooks.marginRight = S(nt.reliableMarginRight, function(t, e) {
        return e ? rt.swap(t, {
            display: "inline-block"
        }, ee, [t, "marginRight"]) : void 0
    }), rt.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        rt.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)
                    r[t + Tt[i] + e] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, ne.test(t) || (rt.cssHooks[t + e].set = N)
    }), rt.fn.extend({
        css: function(t, e) {
            return Nt(this, function(t, e, n) {
                var i, r, o = {}, s = 0;
                if (rt.isArray(e)) {
                    for (i = te(t), r = e.length; r > s; s++)
                        o[e[s]] = rt.css(t, e[s], !1, i);
                    return o
                }
                return void 0 !== n ? rt.style(t, e, n) : rt.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return A(this, !0)
        },
        hide: function() {
            return A(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                At(this) ? rt(this).show() : rt(this).hide()
            })
        }
    }), rt.Tween = D, D.prototype = {
        constructor: D,
        init: function(t, e, n, i, r, o) {
            this.elem = t, this.prop = n, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (rt.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = D.propHooks[this.prop];
            return t && t.get ? t.get(this) : D.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = D.propHooks[this.prop];
            return this.options.duration ? this.pos = e = rt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this
        }
    }, D.prototype.init.prototype = D.prototype, D.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = rt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                rt.fx.step[t.prop] ? rt.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[rt.cssProps[t.prop]] || rt.cssHooks[t.prop]) ? rt.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, rt.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, rt.fx = D.prototype.init, rt.fx.step = {};
    var pe, fe, me = /^(?:toggle|show|hide)$/, ge = new RegExp("^(?:([+-])=|)(" + St + ")([a-z%]*)$", "i"), ve = /queueHooks$/, ye = [R], be = {
        "*": [function(t, e) {
            var n = this.createTween(t, e), i = n.cur(), r = ge.exec(e), o = r && r[3] || (rt.cssNumber[t] ? "" : "px"), s = (rt.cssNumber[t] || "px" !== o&&+i) && ge.exec(rt.css(n.elem, t)), a = 1, l = 20;
            if (s && s[3] !== o) {
                o = o || s[3], r = r || [], s =+ i || 1;
                do 
                    a = a || ".5", s/=a, rt.style(n.elem, t, s + o);
                while (a !== (a = n.cur() / i) && 1 !== a&&--l)
                }
            return r && (s = n.start =+ s||+i || 0, n.unit = o, n.end = r[1] ? s + (r[1] + 1) * r[2] : + r[2]), n
        }
        ]
    };
    rt.Animation = rt.extend($, {
        tweener: function(t, e) {
            rt.isFunction(t) ? (e = t, t = ["*"]): t = t.split(" ");
            for (var n,
            i = 0,
            r = t.length;
            r > i;
            i++)n = t[i],
            be[n] = be[n] || [],
            be[n].unshift(e)
        }, prefilter : function(t, e) {
            e ? ye.unshift(t) : ye.push(t)
        }
    }), rt.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? rt.extend({}, t): {
            complete: n ||!n && e || rt.isFunction(t) && t,
            duration: t,
            easing: n && e || e&&!rt.isFunction(e) && e
        };
        return i.duration = rt.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in rt.fx.speeds ? rt.fx.speeds[i.duration] : rt.fx.speeds._default, null != i.queue && i.queue!==!0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            rt.isFunction(i.old) && i.old.call(this), i.queue && rt.dequeue(this, i.queue)
        }, i
    }, rt.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter(At).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function(t, e, n, i) {
            var r = rt.isEmptyObject(t), o = rt.speed(e, n, i), s = function() {
                var e = $(this, rt.extend({}, t), o);
                (r || rt._data(this, "finish")) && e.stop(!0)
            };
            return s.finish = s, r || o.queue===!1 ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(t, e, n) {
            var i = function(t) {
                var e = t.stop;
                delete t.stop, e(n)
            };
            return "string" != typeof t && (n = e, e = t, t = void 0), e && t!==!1 && this.queue(t || "fx", []), this.each(function() {
                var e=!0, r = null != t && t + "queueHooks", o = rt.timers, s = rt._data(this);
                if (r)
                    s[r] && s[r].stop && i(s[r]);
                else 
                    for (r in s)
                        s[r] && s[r].stop && ve.test(r) && i(s[r]);
                for (r = o.length; r--;)
                    o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e=!1, o.splice(r, 1));
                !e && n || rt.dequeue(this, t)
            })
        },
        finish: function(t) {
            return t!==!1 && (t = t || "fx"), this.each(function() {
                var e, n = rt._data(this), i = n[t + "queue"], r = n[t + "queueHooks"], o = rt.timers, s = i ? i.length: 0;
                for (n.finish=!0, rt.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;)
                    o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; s > e; e++)
                    i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }), rt.each(["toggle", "show", "hide"], function(t, e) {
        var n = rt.fn[e];
        rt.fn[e] = function(t, i, r) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(j(e, !0), t, i, r)
        }
    }), rt.each({
        slideDown: j("show"),
        slideUp: j("hide"),
        slideToggle: j("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        rt.fn[t] = function(t, n, i) {
            return this.animate(e, t, n, i)
        }
    }), rt.timers = [], rt.fx.tick = function() {
        var t, e = rt.timers, n = 0;
        for (pe = rt.now(); n < e.length; n++)
            t = e[n], t() || e[n] !== t || e.splice(n--, 1);
        e.length || rt.fx.stop(), pe = void 0
    }, rt.fx.timer = function(t) {
        rt.timers.push(t), t() ? rt.fx.start() : rt.timers.pop()
    }, rt.fx.interval = 13, rt.fx.start = function() {
        fe || (fe = setInterval(rt.fx.tick, rt.fx.interval))
    }, rt.fx.stop = function() {
        clearInterval(fe), fe = null
    }, rt.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, rt.fn.delay = function(t, e) {
        return t = rt.fx ? rt.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
            var i = setTimeout(e, t);
            n.stop = function() {
                clearTimeout(i)
            }
        })
    }, function() {
        var t, e, n, i, r;
        e = ft.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = e.getElementsByTagName("a")[0], n = ft.createElement("select"), r = n.appendChild(ft.createElement("option")), t = e.getElementsByTagName("input")[0], i.style.cssText = "top:1px", nt.getSetAttribute = "t" !== e.className, nt.style = /top/.test(i.getAttribute("style")), nt.hrefNormalized = "/a" === i.getAttribute("href"), nt.checkOn=!!t.value, nt.optSelected = r.selected, nt.enctype=!!ft.createElement("form").enctype, n.disabled=!0, nt.optDisabled=!r.disabled, t = ft.createElement("input"), t.setAttribute("value", ""), nt.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), nt.radioValue = "t" === t.value
    }();
    var xe = /\r/g;
    rt.fn.extend({
        val: function(t) {
            var e, n, i, r = this[0];
            {
                if (arguments.length)
                    return i = rt.isFunction(t), this.each(function(n) {
                        var r;
                        1 === this.nodeType && (r = i ? t.call(this, n, rt(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : rt.isArray(r) && (r = rt.map(r, function(t) {
                            return null == t ? "" : t + ""
                        })), e = rt.valHooks[this.type] || rt.valHooks[this.nodeName.toLowerCase()], e && "set"in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                    });
                if (r)
                    return e = rt.valHooks[r.type] || rt.valHooks[r.nodeName.toLowerCase()], e && "get"in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(xe, "") : null == n ? "" : n)
            }
        }
    }), rt.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = rt.find.attr(t, "value");
                    return null != e ? e : rt.trim(rt.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, l = 0 > r ? a : o ? r : 0; a > l; l++)
                        if (n = i[l], (n.selected || l === r) && (nt.optDisabled?!n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled ||!rt.nodeName(n.parentNode, "optgroup"))
                            ) {
                        if (e = rt(n).val(), o)
                            return e;
                        s.push(e)
                    }
                    return s
                },
                set: function(t, e) {
                    for (var n, i, r = t.options, o = rt.makeArray(e), s = r.length; s--;)
                        if (i = r[s], rt.inArray(rt.valHooks.option.get(i), o) >= 0)
                            try {
                                i.selected = n=!0
                    } catch (a) {
                        i.scrollHeight
                    } else 
                        i.selected=!1;
                    return n || (t.selectedIndex =- 1), r
                }
            }
        }
    }), rt.each(["radio", "checkbox"], function() {
        rt.valHooks[this] = {
            set: function(t, e) {
                return rt.isArray(e) ? t.checked = rt.inArray(rt(t).val(), e) >= 0 : void 0
            }
        }, nt.checkOn || (rt.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var _e, we, ke = rt.expr.attrHandle, Ce = /^(?:checked|selected)$/i, Ee = nt.getSetAttribute, Se = nt.input;
    rt.fn.extend({
        attr: function(t, e) {
            return Nt(this, rt.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                rt.removeAttr(this, t)
            })
        }
    }), rt.extend({
        attr: function(t, e, n) {
            var i, r, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o)
                return typeof t.getAttribute === kt ? rt.prop(t, e, n) : (1 === o && rt.isXMLDoc(t) || (e = e.toLowerCase(), i = rt.attrHooks[e] || (rt.expr.match.bool.test(e) ? we : _e)), void 0 === n ? i && "get"in i && null !== (r = i.get(t, e)) ? r : (r = rt.find.attr(t, e), null == r ? void 0 : r) : null !== n ? i && "set"in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : void rt.removeAttr(t, e))
        },
        removeAttr: function(t, e) {
            var n, i, r = 0, o = e && e.match(bt);
            if (o && 1 === t.nodeType)
                for (; n = o[r++];)
                    i = rt.propFix[n] || n, rt.expr.match.bool.test(n) ? Se && Ee ||!Ce.test(n) ? t[i]=!1 : t[rt.camelCase("default-" + n)] = t[i]=!1 : rt.attr(t, n, ""), t.removeAttribute(Ee ? n : i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!nt.radioValue && "radio" === e && rt.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        }
    }), we = {
        set: function(t, e, n) {
            return e===!1 ? rt.removeAttr(t, n) : Se && Ee ||!Ce.test(n) ? t.setAttribute(!Ee && rt.propFix[n] || n, n) : t[rt.camelCase("default-" + n)] = t[n]=!0, n
        }
    }, rt.each(rt.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = ke[e] || rt.find.attr;
        ke[e] = Se && Ee ||!Ce.test(e) ? function(t, e, i) {
            var r, o;
            return i || (o = ke[e], ke[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, ke[e] = o), r
        } : function(t, e, n) {
            return n ? void 0 : t[rt.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), Se && Ee || (rt.attrHooks.value = {
        set: function(t, e, n) {
            return rt.nodeName(t, "input") ? void(t.defaultValue = e) : _e && _e.set(t, e, n)
        }
    }), Ee || (_e = {
        set: function(t, e, n) {
            var i = t.getAttributeNode(n);
            return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
        }
    }, ke.id = ke.name = ke.coords = function(t, e, n) {
        var i;
        return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
    }, rt.valHooks.button = {
        get: function(t, e) {
            var n = t.getAttributeNode(e);
            return n && n.specified ? n.value : void 0
        },
        set: _e.set
    }, rt.attrHooks.contenteditable = {
        set: function(t, e, n) {
            _e.set(t, "" === e?!1 : e, n)
        }
    }, rt.each(["width", "height"], function(t, e) {
        rt.attrHooks[e] = {
            set: function(t, n) {
                return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
            }
        }
    })), nt.style || (rt.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var Te = /^(?:input|select|textarea|button|object)$/i, Ae = /^(?:a|area)$/i;
    rt.fn.extend({
        prop: function(t, e) {
            return Nt(this, rt.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = rt.propFix[t] || t, this.each(function() {
                try {
                    this[t] = void 0, delete this[t]
                } catch (e) {}
            })
        }
    }), rt.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, n) {
            var i, r, o, s = t.nodeType;
            if (t && 3 !== s && 8 !== s && 2 !== s)
                return o = 1 !== s ||!rt.isXMLDoc(t), o && (e = rt.propFix[e] || e, r = rt.propHooks[e]), void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get"in r && null !== (i = r.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = rt.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Te.test(t.nodeName) || Ae.test(t.nodeName) && t.href ? 0 : - 1
                }
            }
        }
    }), nt.hrefNormalized || rt.each(["href", "src"], function(t, e) {
        rt.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }), nt.optSelected || (rt.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    }), rt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        rt.propFix[this.toLowerCase()] = this
    }), nt.enctype || (rt.propFix.enctype = "encoding");
    var Ne = /[\t\r\n\f]/g;
    rt.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, s, a = 0, l = this.length, u = "string" == typeof t && t;
            if (rt.isFunction(t))
                return this.each(function(e) {
                    rt(this).addClass(t.call(this, e, this.className))
                });
            if (u)
                for (e = (t || "").match(bt) || []; l > a; a++)
                    if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ne, " ") : " ")) {
                        for (o = 0; r = e[o++];)
                            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            s = rt.trim(i), n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, o, s, a = 0, l = this.length, u = 0 === arguments.length || "string" == typeof t && t;
            if (rt.isFunction(t))
                return this.each(function(e) {
                    rt(this).removeClass(t.call(this, e, this.className))
                });
            if (u)
                for (e = (t || "").match(bt) || []; l > a; a++)
                    if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ne, " ") : "")) {
                        for (o = 0; r = e[o++];)
                            for (; i.indexOf(" " + r + " ") >= 0;)
                                i = i.replace(" " + r + " ", " ");
                                s = t ? rt.trim(i) : "", n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : rt.isFunction(t) ? this.each(function(n) {
                rt(this).toggleClass(t.call(this, n, this.className, e), e)
            }) : this.each(function() {
                if ("string" === n)
                    for (var e, i = 0, r = rt(this), o = t.match(bt) || []; e = o[i++];)
                        r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else 
                    n !== kt && "boolean" !== n || (this.className && rt._data(this, "__className__", this.className), this.className = this.className || t===!1 ? "" : rt._data(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ne, " ").indexOf(e) >= 0)
                    return !0;
            return !1
        }
    }), rt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        rt.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), rt.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    });
    var Le = rt.now(), Fe = /\?/, De = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    rt.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse)
            return t.JSON.parse(e + "");
        var n, i = null, r = rt.trim(e + "");
        return r&&!rt.trim(r.replace(De, function(t, e, r, o) {
            return n && e && (i = 0), 0 === i ? t : (n = r || e, i+=!o-!r, "")
        })) ? Function("return " + r)() : rt.error("Invalid JSON: " + e)
    }, rt.parseXML = function(e) {
        var n, i;
        if (!e || "string" != typeof e)
            return null;
        try {
            t.DOMParser ? (i = new DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
        } catch (r) {
            n = void 0
        }
        return n && n.documentElement&&!n.getElementsByTagName("parsererror").length || rt.error("Invalid XML: " + e), n
    };
    var Me, je, qe = /#.*$/, Re = /([?&])_=[^&]*/, Pe = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, $e = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Be = /^(?:GET|HEAD)$/, He = /^\/\//, Ie = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, ze = {}, Oe = {}, We = "*/".concat("*");
    try {
        je = location.href
    } catch (Ue) {
        je = ft.createElement("a"), je.href = "", je = je.href
    }
    Me = Ie.exec(je.toLowerCase()) || [], rt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: je,
            type: "GET",
            isLocal: $e.test(Me[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": We,
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
                "text json": rt.parseJSON,
                "text xml": rt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? I(I(t, rt.ajaxSettings), e) : I(rt.ajaxSettings, t)
        },
        ajaxPrefilter: B(ze),
        ajaxTransport: B(Oe),
        ajax: function(t, e) {
            function n(t, e, n, i) {
                var r, c, v, y, x, w = e;
                2 !== b && (b = 2, a && clearTimeout(a), u = void 0, s = i || "", _.readyState = t > 0 ? 4 : 0, r = t >= 200 && 300 > t || 304 === t, n && (y = z(d, _, n)), y = O(d, y, _, r), r ? (d.ifModified && (x = _.getResponseHeader("Last-Modified"), x && (rt.lastModified[o] = x), x = _.getResponseHeader("etag"), x && (rt.etag[o] = x)), 204 === t || "HEAD" === d.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = y.state, c = y.data, v = y.error, r=!v)) : (v = w, !t && w || (w = "error", 0 > t && (t = 0))), _.status = t, _.statusText = (e || w) + "", r ? f.resolveWith(h, [c, w, _]) : f.rejectWith(h, [_, w, v]), _.statusCode(g), g = void 0, l && p.trigger(r ? "ajaxSuccess" : "ajaxError", [_, d, r ? c: v]), m.fireWith(h, [_, w]), l && (p.trigger("ajaxComplete", [_, d]), --rt.active || rt.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var i, r, o, s, a, l, u, c, d = rt.ajaxSetup({}, e), h = d.context || d, p = d.context && (h.nodeType || h.jquery) ? rt(h): rt.event, f = rt.Deferred(), m = rt.Callbacks("once memory"), g = d.statusCode || {}, v = {}, y = {}, b = 0, x = "canceled", _ = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (2 === b) {
                        if (!c)
                            for (c = {}; e = Pe.exec(s);)
                                c[e[1].toLowerCase()] = e[2];
                        e = c[t.toLowerCase()]
                    }
                    return null == e ? null : e
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? s : null
                },
                setRequestHeader: function(t, e) {
                    var n = t.toLowerCase();
                    return b || (t = y[n] = y[n] || t, v[t] = e), this
                },
                overrideMimeType: function(t) {
                    return b || (d.mimeType = t), this
                },
                statusCode: function(t) {
                    var e;
                    if (t)
                        if (2 > b)
                            for (e in t)
                                g[e] = [g[e], t[e]];
                        else 
                            _.always(t[_.status]);
                    return this
                },
                abort: function(t) {
                    var e = t || x;
                    return u && u.abort(e), n(0, e), this
                }
            };
            if (f.promise(_).complete = m.add, _.success = _.done, _.error = _.fail, d.url = ((t || d.url || je) + "").replace(qe, "").replace(He, Me[1] + "//"), d.type = e.method || e.type || d.method || d.type, d.dataTypes = rt.trim(d.dataType || "*").toLowerCase().match(bt) || [""], null == d.crossDomain && (i = Ie.exec(d.url.toLowerCase()), d.crossDomain=!(!i || i[1] === Me[1] && i[2] === Me[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Me[3] || ("http:" === Me[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = rt.param(d.data, d.traditional)), H(ze, d, e, _), 2 === b)
                return _;
            l = d.global, l && 0 === rt.active++&&rt.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent=!Be.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Fe.test(o) ? "&" : "?") + d.data, delete d.data), d.cache===!1 && (d.url = Re.test(o) ? o.replace(Re, "$1_=" + Le++) : o + (Fe.test(o) ? "&" : "?") + "_=" + Le++)), d.ifModified && (rt.lastModified[o] && _.setRequestHeader("If-Modified-Since", rt.lastModified[o]), rt.etag[o] && _.setRequestHeader("If-None-Match", rt.etag[o])), (d.data && d.hasContent && d.contentType!==!1 || e.contentType) && _.setRequestHeader("Content-Type", d.contentType), _.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + We + "; q=0.01" : "") : d.accepts["*"]);
            for (r in d.headers)
                _.setRequestHeader(r, d.headers[r]);
            if (d.beforeSend && (d.beforeSend.call(h, _, d)===!1 || 2 === b))
                return _.abort();
            x = "abort";
            for (r in{
                success: 1,
                error: 1,
                complete: 1
            })
                _[r](d[r]);
            if (u = H(Oe, d, e, _)) {
                _.readyState = 1, l && p.trigger("ajaxSend", [_, d]), d.async && d.timeout > 0 && (a = setTimeout(function() {
                    _.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, u.send(v, n)
                } catch (w) {
                    if (!(2 > b))
                        throw w;
                    n( - 1, w)
                }
            } else 
                n( - 1, "No Transport");
            return _
        },
        getJSON: function(t, e, n) {
            return rt.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return rt.get(t, void 0, e, "script")
        }
    }), rt.each(["get", "post"], function(t, e) {
        rt[e] = function(t, n, i, r) {
            return rt.isFunction(n) && (r = r || i, i = n, n = void 0), rt.ajax({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            })
        }
    }), rt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        rt.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), rt._evalUrl = function(t) {
        return rt.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, rt.fn.extend({
        wrapAll: function(t) {
            if (rt.isFunction(t))
                return this.each(function(e) {
                    rt(this).wrapAll(t.call(this, e))
                });
            if (this[0]) {
                var e = rt(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;)
                        t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return rt.isFunction(t) ? this.each(function(e) {
                rt(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = rt(this), n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = rt.isFunction(t);
            return this.each(function(n) {
                rt(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                rt.nodeName(this, "body") || rt(this).replaceWith(this.childNodes)
            }).end()
        }
    }), rt.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 ||!nt.reliableHiddenOffsets() && "none" === (t.style && t.style.display || rt.css(t, "display"))
    }, rt.expr.filters.visible = function(t) {
        return !rt.expr.filters.hidden(t)
    };
    var Ve = /%20/g, Xe = /\[\]$/, Ge = /\r?\n/g, Qe = /^(?:submit|button|image|reset|file)$/i, Ye = /^(?:input|select|textarea|keygen)/i;
    rt.param = function(t, e) {
        var n, i = [], r = function(t, e) {
            e = rt.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (void 0 === e && (e = rt.ajaxSettings && rt.ajaxSettings.traditional), rt.isArray(t) || t.jquery&&!rt.isPlainObject(t)
            )rt.each(t, function() {
            r(this.name, this.value)
        });
        else 
            for (n in t)
                W(n, t[n], e, r);
        return i.join("&").replace(Ve, "+")
    }, rt.fn.extend({
        serialize: function() {
            return rt.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = rt.prop(this, "elements");
                return t ? rt.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name&&!rt(this).is(":disabled") && Ye.test(this.nodeName)&&!Qe.test(t) && (this.checked ||!Lt.test(t))
            }).map(function(t, e) {
                var n = rt(this).val();
                return null == n ? null : rt.isArray(n) ? rt.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Ge, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Ge, "\r\n")
                }
            }).get()
        }
    }), rt.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && U() || V()
    } : U;
    var Ke = 0, Je = {}, Ze = rt.ajaxSettings.xhr();
    t.ActiveXObject && rt(t).on("unload", function() {
        for (var t in Je)
            Je[t](void 0, !0)
    }), nt.cors=!!Ze && "withCredentials"in Ze, Ze = nt.ajax=!!Ze, Ze && rt.ajaxTransport(function(t) {
        if (!t.crossDomain || nt.cors) {
            var e;
            return {
                send: function(n, i) {
                    var r, o = t.xhr(), s=++Ke;
                    if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (r in t.xhrFields)
                            o[r] = t.xhrFields[r];
                    t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (r in n)
                        void 0 !== n[r] && o.setRequestHeader(r, n[r] + "");
                    o.send(t.hasContent && t.data || null), e = function(n, r) {
                        var a, l, u;
                        if (e && (r || 4 === o.readyState))
                            if (delete Je[s], e = void 0, o.onreadystatechange = rt.noop, r)
                                4 !== o.readyState && o.abort();
                            else {
                                u = {}, a = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                                try {
                                    l = o.statusText
                                } catch (c) {
                                    l = ""
                                }
                                a ||!t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = u.text ? 200 : 404
                            }
                        u && i(a, l, u, o.getAllResponseHeaders())
                    }, t.async ? 4 === o.readyState ? setTimeout(e) : o.onreadystatechange = Je[s] = e : e()
                },
                abort: function() {
                    e && e(void 0, !0)
                }
            }
        }
    }), rt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return rt.globalEval(t), t
            }
        }
    }), rt.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache=!1), t.crossDomain && (t.type = "GET", t.global=!1)
    }), rt.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n = ft.head || rt("head")[0] || ft.documentElement;
            return {
                send: function(i, r) {
                    e = ft.createElement("script"), e.async=!0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, n) {
                        (n ||!e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || r(200, "success"))
                    }, n.insertBefore(e, n.firstChild)
                },
                abort: function() {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var tn = [], en = /(=)\?(?=&|$)|\?\?/;
    rt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = tn.pop() || rt.expando + "_" + Le++;
            return this[t]=!0, t
        }
    }), rt.ajaxPrefilter("json jsonp", function(e, n, i) {
        var r, o, s, a = e.jsonp!==!1 && (en.test(e.url) ? "url" : "string" == typeof e.data&&!(e.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = rt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(en, "$1" + r) : e.jsonp!==!1 && (e.url += (Fe.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return s || rt.error(r + " was not called"), s[0]
        }, e.dataTypes[0] = "json", o = t[r], t[r] = function() {
            s = arguments
        }, i.always(function() {
            t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, tn.push(r)), s && rt.isFunction(o) && o(s[0]), s = o = void 0
        }), "script") : void 0
    }), rt.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t)
            return null;
        "boolean" == typeof e && (n = e, e=!1), e = e || ft;
        var i = dt.exec(t), r=!n && [];
        return i ? [e.createElement(i[1])] : (i = rt.buildFragment([t], e, r), r && r.length && rt(r).remove(), rt.merge([], i.childNodes))
    };
    var nn = rt.fn.load;
    rt.fn.load = function(t, e, n) {
        if ("string" != typeof t && nn)
            return nn.apply(this, arguments);
        var i, r, o, s = this, a = t.indexOf(" ");
        return a >= 0 && (i = rt.trim(t.slice(a, t.length)), t = t.slice(0, a)), rt.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && rt.ajax({
            url: t,
            type: o,
            dataType: "html",
            data: e
        }).done(function(t) {
            r = arguments, s.html(i ? rt("<div>").append(rt.parseHTML(t)).find(i) : t)
        }).complete(n && function(t, e) {
            s.each(n, r || [t.responseText, e, t])
        }), this
    }, rt.expr.filters.animated = function(t) {
        return rt.grep(rt.timers, function(e) {
            return t === e.elem
        }).length
    };
    var rn = t.document.documentElement;
    rt.offset = {
        setOffset: function(t, e, n) {
            var i, r, o, s, a, l, u, c = rt.css(t, "position"), d = rt(t), h = {};
            "static" === c && (t.style.position = "relative"), a = d.offset(), o = rt.css(t, "top"), l = rt.css(t, "left"), u = ("absolute" === c || "fixed" === c) && rt.inArray("auto", [o, l])>-1, u ? (i = d.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), rt.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (h.top = e.top - a.top + s), null != e.left && (h.left = e.left - a.left + r), "using"in e ? e.using.call(t, h) : d.css(h)
        }
    }, rt.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                rt.offset.setOffset(this, t, e)
            });
            var e, n, i = {
                top: 0,
                left: 0
            }, r = this[0], o = r && r.ownerDocument;
            if (o)
                return e = o.documentElement, rt.contains(e, r) ? (typeof r.getBoundingClientRect !== kt && (i = r.getBoundingClientRect()), n = X(o), {
                    top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                }) : i
        },
        position: function() {
            if (this[0]) {
                var t, e, n = {
                    top: 0,
                    left: 0
                }, i = this[0];
                return "fixed" === rt.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), rt.nodeName(t[0], "html") || (n = t.offset()), n.top += rt.css(t[0], "borderTopWidth", !0), n.left += rt.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - rt.css(i, "marginTop", !0),
                    left: e.left - n.left - rt.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || rn; t&&!rt.nodeName(t, "html") && "static" === rt.css(t, "position");)
                    t = t.offsetParent;
                return t || rn
            })
        }
    }), rt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = /Y/.test(e);
        rt.fn[t] = function(i) {
            return Nt(this, function(t, i, r) {
                var o = X(t);
                return void 0 === r ? o ? e in o ? o[e] : o.document.documentElement[i] : t[i] : void(o ? o.scrollTo(n ? rt(o).scrollLeft() : r, n ? r : rt(o).scrollTop()) : t[i] = r)
            }, t, i, arguments.length, null)
        }
    }), rt.each(["top", "left"], function(t, e) {
        rt.cssHooks[e] = S(nt.pixelPosition, function(t, n) {
            return n ? (n = ee(t, e), ie.test(n) ? rt(t).position()[e] + "px" : n) : void 0
        })
    }), rt.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        rt.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            rt.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i), s = n || (i===!0 || r===!0 ? "margin" : "border");
                return Nt(this, function(e, n, i) {
                    var r;
                    return rt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? rt.css(e, n, s) : rt.style(e, n, i, s)
                }, e, o ? i : void 0, o, null)
            }
        })
    }), rt.fn.size = function() {
        return this.length
    }, rt.fn.andSelf = rt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return rt
    });
    var on = t.jQuery, sn = t.$;
    return rt.noConflict = function(e) {
        return t.$ === rt && (t.$ = sn), e && t.jQuery === rt && (t.jQuery = on), rt
    }, typeof e === kt && (t.jQuery = t.$ = rt), rt
}), function() {
    var t, e;
    t = window.jQuery || ("function" == typeof require ? require("jquery") : void 0), e = t(document), t.turbo = {
        version: "2.1.0",
        isReady: !1,
        use: function(t, n) {
            return e.off(".turbo").on("" + t + ".turbo", this.onLoad).on("" + n + ".turbo", this.onFetch)
        },
        addCallback: function(n) {
            return t.turbo.isReady && n(t), e.on("turbo:ready", function() {
                return n(t)
            })
        },
        onLoad: function() {
            return t.turbo.isReady=!0, e.trigger("turbo:ready")
        },
        onFetch: function() {
            return t.turbo.isReady=!1
        },
        register: function() {
            return t(this.onLoad), t.fn.ready = this.addCallback
        }
    }, t.turbo.register(), t.turbo.use("page:load", "page:fetch")
}.call(this), function(t, e) {
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var n, i = t(document);
    t.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        CSRFProtection: function(e) {
            var n = t('meta[name="csrf-token"]').attr("content");
            n && e.setRequestHeader("X-CSRF-Token", n)
        },
        refreshCSRFTokens: function() {
            var e = t("meta[name=csrf-token]").attr("content"), n = t("meta[name=csrf-param]").attr("content");
            t('form input[name="' + n + '"]').val(e)
        },
        fire: function(e, n, i) {
            var r = t.Event(n);
            return e.trigger(r, i), r.result!==!1
        },
        confirm: function(t) {
            return confirm(t)
        },
        ajax: function(e) {
            return t.ajax(e)
        },
        href: function(t) {
            return t[0].href
        },
        handleRemote: function(i) {
            var r, o, s, a, l, u;
            if (n.fire(i, "ajax:before")) {
                if (a = i.data("with-credentials") || null, l = i.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, i.is("form")) {
                    r = i.attr("method"), o = i.attr("action"), s = i.serializeArray();
                    var c = i.data("ujs:submit-button");
                    c && (s.push(c), i.data("ujs:submit-button", null))
                } else 
                    i.is(n.inputChangeSelector) ? (r = i.data("method"), o = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get", o = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : (r = i.data("method"), o = n.href(i), s = i.data("params") || null);
                return u = {
                    type: r || "GET",
                    data: s,
                    dataType: l,
                    beforeSend: function(t, r) {
                        return r.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), n.fire(i, "ajax:beforeSend", [t, r]) ? void i.trigger("ajax:send", t) : !1
                    },
                    success: function(t, e, n) {
                        i.trigger("ajax:success", [t, e, n])
                    },
                    complete: function(t, e) {
                        i.trigger("ajax:complete", [t, e])
                    },
                    error: function(t, e, n) {
                        i.trigger("ajax:error", [t, e, n])
                    },
                    crossDomain: n.isCrossDomain(o)
                }, a && (u.xhrFields = {
                    withCredentials: a
                }), o && (u.url = o), n.ajax(u)
            }
            return !1
        },
        isCrossDomain: function(t) {
            var e = document.createElement("a");
            e.href = location.href;
            var n = document.createElement("a");
            try {
                return n.href = t, n.href = n.href, !((!n.protocol || ":" === n.protocol)&&!n.host || e.protocol + "//" + e.host == n.protocol + "//" + n.host)
            } catch (i) {
                return !0
            }
        },
        handleMethod: function(i) {
            var r = n.href(i), o = i.data("method"), s = i.attr("target"), a = t("meta[name=csrf-token]").attr("content"), l = t("meta[name=csrf-param]").attr("content"), u = t('<form method="post" action="' + r + '"></form>'), c = '<input name="_method" value="' + o + '" type="hidden" />';
            l === e || a === e || n.isCrossDomain(r) || (c += '<input name="' + l + '" value="' + a + '" type="hidden" />'), s && u.attr("target", s), u.hide().append(c).appendTo("body"), u.submit()
        },
        formElements: function(e, n) {
            return e.is("form") ? t(e[0].elements).filter(n) : e.find(n)
        },
        disableFormElements: function(e) {
            n.formElements(e, n.disableSelector).each(function() {
                n.disableFormElement(t(this))
            })
        },
        disableFormElement: function(t) {
            var n, i;
            n = t.is("button") ? "html" : "val", i = t.data("disable-with"), t.data("ujs:enable-with", t[n]()), i !== e && t[n](i), t.prop("disabled", !0)
        },
        enableFormElements: function(e) {
            n.formElements(e, n.enableSelector).each(function() {
                n.enableFormElement(t(this))
            })
        },
        enableFormElement: function(t) {
            var e = t.is("button") ? "html": "val";
            t.data("ujs:enable-with") && t[e](t.data("ujs:enable-with")), t.prop("disabled", !1)
        },
        allowAction: function(t) {
            var e, i = t.data("confirm"), r=!1;
            return i ? (n.fire(t, "confirm") && (r = n.confirm(i), e = n.fire(t, "confirm:complete", [r])), r && e) : !0
        },
        blankInputs: function(e, n, i) {
            var r, o, s = t(), a = n || "input,textarea", l = e.find(a);
            return l.each(function() {
                if (r = t(this), o = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : r.val(), !o==!i) {
                    if (r.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + r.attr("name") + '"]').length)
                        return !0;
                    s = s.add(r)
                }
            }), s.length ? s : !1
        },
        nonBlankInputs: function(t, e) {
            return n.blankInputs(t, e, !0)
        },
        stopEverything: function(e) {
            return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
        },
        disableElement: function(t) {
            var i = t.data("disable-with");
            t.data("ujs:enable-with", t.html()), i !== e && t.html(i), t.bind("click.railsDisable", function(t) {
                return n.stopEverything(t)
            })
        },
        enableElement: function(t) {
            t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable")
        }
    }, n.fire(i, "rails:attachBindings") && (t.ajaxPrefilter(function(t, e, i) {
        t.crossDomain || n.CSRFProtection(i)
    }), i.delegate(n.linkDisableSelector, "ajax:complete", function() {
        n.enableElement(t(this))
    }), i.delegate(n.buttonDisableSelector, "ajax:complete", function() {
        n.enableFormElement(t(this))
    }), i.delegate(n.linkClickSelector, "click.rails", function(i) {
        var r = t(this), o = r.data("method"), s = r.data("params"), a = i.metaKey || i.ctrlKey;
        if (!n.allowAction(r))
            return n.stopEverything(i);
        if (!a && r.is(n.linkDisableSelector) && n.disableElement(r), r.data("remote") !== e) {
            if (a && (!o || "GET" === o)&&!s)
                return !0;
            var l = n.handleRemote(r);
            return l===!1 ? n.enableElement(r) : l.error(function() {
                n.enableElement(r)
            }), !1
        }
        return r.data("method") ? (n.handleMethod(r), !1) : void 0
    }), i.delegate(n.buttonClickSelector, "click.rails", function(e) {
        var i = t(this);
        if (!n.allowAction(i))
            return n.stopEverything(e);
        i.is(n.buttonDisableSelector) && n.disableFormElement(i);
        var r = n.handleRemote(i);
        return r===!1 ? n.enableFormElement(i) : r.error(function() {
            n.enableFormElement(i)
        }), !1
    }), i.delegate(n.inputChangeSelector, "change.rails", function(e) {
        var i = t(this);
        return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
    }), i.delegate(n.formSubmitSelector, "submit.rails", function(i) {
        var r, o, s = t(this), a = s.data("remote") !== e;
        if (!n.allowAction(s))
            return n.stopEverything(i);
        if (s.attr("novalidate") == e && (r = n.blankInputs(s, n.requiredInputSelector), r && n.fire(s, "ajax:aborted:required", [r])))
            return n.stopEverything(i);
        if (a) {
            if (o = n.nonBlankInputs(s, n.fileInputSelector)) {
                setTimeout(function() {
                    n.disableFormElements(s)
                }, 13);
                var l = n.fire(s, "ajax:aborted:file", [o]);
                return l || setTimeout(function() {
                    n.enableFormElements(s)
                }, 13), l
            }
            return n.handleRemote(s), !1
        }
        setTimeout(function() {
            n.disableFormElements(s)
        }, 13)
    }), i.delegate(n.formInputClickSelector, "click.rails", function(e) {
        var i = t(this);
        if (!n.allowAction(i))
            return n.stopEverything(e);
        var r = i.attr("name"), o = r ? {
            name: r,
            value: i.val()
        }
        : null;
        i.closest("form").data("ujs:submit-button", o)
    }), i.delegate(n.formSubmitSelector, "ajax:send.rails", function(e) {
        this == e.target && n.disableFormElements(t(this))
    }), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function(e) {
        this == e.target && n.enableFormElements(t(this))
    }), t(function() {
        n.refreshCSRFTokens()
    }))
}(jQuery), function() {
    var t, e, n, i, r, o = {}.hasOwnProperty, s = function(t, e) {
        function n() {
            this.constructor = t
        }
        for (var i in e)
            o.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    };
    i = function() {
        function t() {
            this.options_index = 0, this.parsed = []
        }
        return t.prototype.add_node = function(t) {
            return "OPTGROUP" === t.nodeName.toUpperCase() ? this.add_group(t) : this.add_option(t)
        }, t.prototype.add_group = function(t) {
            var e, n, i, r, o, s;
            for (e = this.parsed.length, this.parsed.push({
                array_index: e,
                group: !0,
                label: this.escapeExpression(t.label),
                children: 0,
                disabled: t.disabled
            }), o = t.childNodes, s = [], i = 0, r = o.length; r > i; i++)
                n = o[i], s.push(this.add_option(n, e, t.disabled));
            return s
        }, t.prototype.add_option = function(t, e, n) {
            return "OPTION" === t.nodeName.toUpperCase() ? ("" !== t.text ? (null != e && (this.parsed[e].children += 1), this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                value: t.value,
                text: t.text,
                html: t.innerHTML,
                selected: t.selected,
                disabled: n===!0 ? n: t.disabled,
                group_array_index: e,
                classes: t.className,
                style: t.style.cssText
            })) : this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                empty: !0
            }), this.options_index += 1) : void 0
        }, t.prototype.escapeExpression = function(t) {
            var e, n;
            return null == t || t===!1 ? "" : /[\&\<\>\"\'\`]/.test(t) ? (e = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            }, n = /&(?!\w+;)|[\<\>\"\'\`]/g, t.replace(n, function(t) {
                return e[t] || "&amp;"
            })) : t
        }, t
    }(), i.select_to_array = function(t) {
        var e, n, r, o, s;
        for (n = new i, s = t.childNodes, r = 0, o = s.length; o > r; r++)
            e = s[r], n.add_node(e);
        return n.parsed
    }, e = function() {
        function t(e, n) {
            this.form_field = e, this.options = null != n ? n : {}, t.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers())
        }
        return t.prototype.set_default_values = function() {
            var t = this;
            return this.click_test_action = function(e) {
                return t.test_active_click(e)
            }, this.activate_action = function(e) {
                return t.activate_field(e)
            }, this.active_field=!1, this.mouse_on_container=!1, this.results_showing=!1, this.result_highlighted = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text ? this.options.allow_single_deselect : !1, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search ||!1, this.enable_split_word_search = null != this.options.enable_split_word_search ? this.options.enable_split_word_search : !0, this.group_search = null != this.options.group_search ? this.options.group_search : !0, this.search_contains = this.options.search_contains ||!1, this.single_backstroke_delete = null != this.options.single_backstroke_delete ? this.options.single_backstroke_delete : !0, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes ||!1, this.display_selected_options = null != this.options.display_selected_options ? this.options.display_selected_options : !0, this.display_disabled_options = null != this.options.display_disabled_options ? this.options.display_disabled_options : !0
        }, t.prototype.set_default_text = function() {
            return this.form_field.getAttribute("data-placeholder") ? this.default_text = this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || t.default_multiple_text : this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || t.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || t.default_no_result_text
        }, t.prototype.mouse_enter = function() {
            return this.mouse_on_container=!0
        }, t.prototype.mouse_leave = function() {
            return this.mouse_on_container=!1
        }, t.prototype.input_focus = function() {
            var t = this;
            if (this.is_multiple) {
                if (!this.active_field)
                    return setTimeout(function() {
                        return t.container_mousedown()
                    }, 50)
            } else if (!this.active_field)
                return this.activate_field()
        }, t.prototype.input_blur = function() {
            var t = this;
            return this.mouse_on_container ? void 0 : (this.active_field=!1, setTimeout(function() {
                return t.blur_test()
            }, 100))
        }, t.prototype.results_option_build = function(t) {
            var e, n, i, r, o;
            for (e = "", o = this.results_data, i = 0, r = o.length; r > i; i++)
                n = o[i], e += n.group ? this.result_add_group(n) : this.result_add_option(n), (null != t ? t.first : void 0) && (n.selected && this.is_multiple ? this.choice_build(n) : n.selected&&!this.is_multiple && this.single_set_selected_text(n.text));
            return e
        }, t.prototype.result_add_option = function(t) {
            var e, n;
            return t.search_match && this.include_option_in_results(t) ? (e = [], t.disabled || t.selected && this.is_multiple || e.push("active-result"), !t.disabled || t.selected && this.is_multiple || e.push("disabled-result"), t.selected && e.push("result-selected"), null != t.group_array_index && e.push("group-option"), "" !== t.classes && e.push(t.classes), n = document.createElement("li"), n.className = e.join(" "), n.style.cssText = t.style, n.setAttribute("data-option-array-index", t.array_index), n.innerHTML = t.search_text, this.outerHTML(n)) : ""
        }, t.prototype.result_add_group = function(t) {
            var e;
            return (t.search_match || t.group_match) && t.active_options > 0 ? (e = document.createElement("li"), e.className = "group-result", e.innerHTML = t.search_text, this.outerHTML(e)) : ""
        }, t.prototype.results_update_field = function() {
            return this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing ? this.winnow_results() : void 0
        }, t.prototype.reset_single_select_options = function() {
            var t, e, n, i, r;
            for (i = this.results_data, r = [], e = 0, n = i.length; n > e; e++)
                t = i[e], t.selected ? r.push(t.selected=!1) : r.push(void 0);
            return r
        }, t.prototype.results_toggle = function() {
            return this.results_showing ? this.results_hide() : this.results_show()
        }, t.prototype.results_search = function() {
            return this.results_showing ? this.winnow_results() : this.results_show()
        }, t.prototype.winnow_results = function() {
            var t, e, n, i, r, o, s, a, l, u, c, d, h;
            for (this.no_results_clear(), r = 0, s = this.get_search_text(), t = s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), i = this.search_contains ? "" : "^", n = new RegExp(i + t, "i"), u = new RegExp(t, "i"), h = this.results_data, c = 0, d = h.length; d > c; c++)
                e = h[c], e.search_match=!1, o = null, this.include_option_in_results(e) && (e.group && (e.group_match=!1, e.active_options = 0), null != e.group_array_index && this.results_data[e.group_array_index] && (o = this.results_data[e.group_array_index], 0 === o.active_options && o.search_match && (r += 1), o.active_options += 1), e.group&&!this.group_search || (e.search_text = e.group ? e.label : e.html, e.search_match = this.search_string_match(e.search_text, n), e.search_match&&!e.group && (r += 1), e.search_match ? (s.length && (a = e.search_text.search(u), l = e.search_text.substr(0, a + s.length) + "</em>" + e.search_text.substr(a + s.length), e.search_text = l.substr(0, a) + "<em>" + l.substr(a)), null != o && (o.group_match=!0)) : null != e.group_array_index && this.results_data[e.group_array_index].search_match && (e.search_match=!0)));
            return this.result_clear_highlight(), 1 > r && s.length ? (this.update_results_content(""), this.no_results(s)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight())
        }, t.prototype.search_string_match = function(t, e) {
            var n, i, r, o;
            if (e.test(t))
                return !0;
            if (this.enable_split_word_search && (t.indexOf(" ") >= 0 || 0 === t.indexOf("[")) && (i = t.replace(/\[|\]/g, "").split(" "), i.length))
                for (r = 0, o = i.length; o > r; r++)
                    if (n = i[r], e.test(n))
                        return !0
        }, t.prototype.choices_count = function() {
            var t, e, n, i;
            if (null != this.selected_option_count)
                return this.selected_option_count;
            for (this.selected_option_count = 0, i = this.form_field.options, e = 0, n = i.length; n > e; e++)
                t = i[e], t.selected && (this.selected_option_count += 1);
            return this.selected_option_count
        }, t.prototype.choices_click = function(t) {
            return t.preventDefault(), this.results_showing || this.is_disabled ? void 0 : this.results_show()
        }, t.prototype.keyup_checker = function(t) {
            var e, n;
            switch (e = null != (n = t.which) ? n : t.keyCode, this.search_field_scale(), e) {
            case 8:
                if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0)
                    return this.keydown_backstroke();
                if (!this.pending_backstroke)
                    return this.result_clear_highlight(), this.results_search();
                break;
            case 13:
                if (t.preventDefault(), this.results_showing)
                    return this.result_select(t);
                break;
            case 27:
                return this.results_showing && this.results_hide(), !0;
            case 9:
            case 38:
            case 40:
            case 16:
            case 91:
            case 17:
                break;
            default:
                return this.results_search()
            }
        }, t.prototype.clipboard_event_checker = function() {
            var t = this;
            return setTimeout(function() {
                return t.results_search()
            }, 50)
        }, t.prototype.container_width = function() {
            return null != this.options.width ? this.options.width : "" + this.form_field.offsetWidth + "px"
        }, t.prototype.include_option_in_results = function(t) {
            return this.is_multiple&&!this.display_selected_options && t.selected?!1 : !this.display_disabled_options && t.disabled?!1 : !t.empty
        }, t.prototype.search_results_touchstart = function(t) {
            return this.touch_started=!0, this.search_results_mouseover(t)
        }, t.prototype.search_results_touchmove = function(t) {
            return this.touch_started=!1, this.search_results_mouseout(t)
        }, t.prototype.search_results_touchend = function(t) {
            return this.touch_started ? this.search_results_mouseup(t) : void 0
        }, t.prototype.outerHTML = function(t) {
            var e;
            return t.outerHTML ? t.outerHTML : (e = document.createElement("div"), e.appendChild(t), e.innerHTML)
        }, t.browser_is_supported = function() {
            return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : /iP(od|hone)/i.test(window.navigator.userAgent)?!1 : !/Android/i.test(window.navigator.userAgent) ||!/Mobile/i.test(window.navigator.userAgent)
        }, t.default_multiple_text = "Select Some Options", t.default_single_text = "Select an Option", t.default_no_result_text = "No results match", t
    }(), t = jQuery, t.fn.extend({
        chosen: function(i) {
            return e.browser_is_supported() ? this.each(function() {
                var e, r;
                e = t(this), r = e.data("chosen"), "destroy" === i && r ? r.destroy() : r || e.data("chosen", new n(this, i))
            }) : this
        }
    }), n = function(e) {
        function n() {
            return r = n.__super__.constructor.apply(this, arguments)
        }
        return s(n, e), n.prototype.setup = function() {
            return this.form_field_jq = t(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl")
        }, n.prototype.set_up_html = function() {
            var e, n;
            return e = ["chosen-container"], e.push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && e.push(this.form_field.className), this.is_rtl && e.push("chosen-rtl"), n = {
                "class": e.join(" "),
                style: "width: " + this.container_width() + ";",
                title: this.form_field.title
            }, this.form_field.id.length && (n.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = t("<div />", n), this.is_multiple ? this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>') : this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior(), this.form_field_jq.trigger("chosen:ready", {
                chosen: this
            })
        }, n.prototype.register_observers = function() {
            var t = this;
            return this.container.bind("mousedown.chosen", function(e) {
                t.container_mousedown(e)
            }), this.container.bind("mouseup.chosen", function(e) {
                t.container_mouseup(e)
            }), this.container.bind("mouseenter.chosen", function(e) {
                t.mouse_enter(e)
            }), this.container.bind("mouseleave.chosen", function(e) {
                t.mouse_leave(e)
            }), this.search_results.bind("mouseup.chosen", function(e) {
                t.search_results_mouseup(e)
            }), this.search_results.bind("mouseover.chosen", function(e) {
                t.search_results_mouseover(e)
            }), this.search_results.bind("mouseout.chosen", function(e) {
                t.search_results_mouseout(e)
            }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function(e) {
                t.search_results_mousewheel(e)
            }), this.search_results.bind("touchstart.chosen", function(e) {
                t.search_results_touchstart(e)
            }), this.search_results.bind("touchmove.chosen", function(e) {
                t.search_results_touchmove(e)
            }), this.search_results.bind("touchend.chosen", function(e) {
                t.search_results_touchend(e)
            }), this.form_field_jq.bind("chosen:updated.chosen", function(e) {
                t.results_update_field(e)
            }), this.form_field_jq.bind("chosen:activate.chosen", function(e) {
                t.activate_field(e)
            }), this.form_field_jq.bind("chosen:open.chosen", function(e) {
                t.container_mousedown(e)
            }), this.form_field_jq.bind("chosen:close.chosen", function(e) {
                t.input_blur(e)
            }), this.search_field.bind("blur.chosen", function(e) {
                t.input_blur(e)
            }), this.search_field.bind("keyup.chosen", function(e) {
                t.keyup_checker(e)
            }), this.search_field.bind("keydown.chosen", function(e) {
                t.keydown_checker(e)
            }), this.search_field.bind("focus.chosen", function(e) {
                t.input_focus(e)
            }), this.search_field.bind("cut.chosen", function(e) {
                t.clipboard_event_checker(e)
            }), this.search_field.bind("paste.chosen", function(e) {
                t.clipboard_event_checker(e)
            }), this.is_multiple ? this.search_choices.bind("click.chosen", function(e) {
                t.choices_click(e)
            }) : this.container.bind("click.chosen", function(t) {
                t.preventDefault()
            })
        }, n.prototype.destroy = function() {
            return t(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
        }, n.prototype.search_field_disabled = function() {
            return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled=!0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled=!1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action))
        }, n.prototype.container_mousedown = function(e) {
            return this.is_disabled || (e && "mousedown" === e.type&&!this.results_showing && e.preventDefault(), null != e && t(e.target).hasClass("search-choice-close")) ? void 0 : (this.active_field ? this.is_multiple ||!e || t(e.target)[0] !== this.selected_item[0]&&!t(e.target).parents("a.chosen-single").length || (e.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), t(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field())
        }, n.prototype.container_mouseup = function(t) {
            return "ABBR" !== t.target.nodeName || this.is_disabled ? void 0 : this.results_reset(t)
        }, n.prototype.search_results_mousewheel = function(t) {
            var e;
            return t.originalEvent && (e =- t.originalEvent.wheelDelta || t.originalEvent.detail), null != e ? (t.preventDefault(), "DOMMouseScroll" === t.type && (e = 40 * e), this.search_results.scrollTop(e + this.search_results.scrollTop())) : void 0
        }, n.prototype.blur_test = function() {
            return !this.active_field && this.container.hasClass("chosen-container-active") ? this.close_field() : void 0
        }, n.prototype.close_field = function() {
            return t(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.active_field=!1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale()
        }, n.prototype.activate_field = function() {
            return this.container.addClass("chosen-container-active"), this.active_field=!0, this.search_field.val(this.search_field.val()), this.search_field.focus()
        }, n.prototype.test_active_click = function(e) {
            var n;
            return n = t(e.target).closest(".chosen-container"), n.length && this.container[0] === n[0] ? this.active_field=!0 : this.close_field()
        }, n.prototype.results_build = function() {
            return this.parsing=!0, this.selected_option_count = null, this.results_data = i.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly=!0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly=!1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({
                first: !0
            })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing=!1
        }, n.prototype.result_do_highlight = function(t) {
            var e, n, i, r, o;
            if (t.length) {
                if (this.result_clear_highlight(), this.result_highlight = t, this.result_highlight.addClass("highlighted"), i = parseInt(this.search_results.css("maxHeight"), 10), o = this.search_results.scrollTop(), r = i + o, n = this.result_highlight.position().top + this.search_results.scrollTop(), e = n + this.result_highlight.outerHeight(), e >= r)
                    return this.search_results.scrollTop(e - i > 0 ? e - i : 0);
                if (o > n)
                    return this.search_results.scrollTop(n)
            }
        }, n.prototype.result_clear_highlight = function() {
            return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
        }, n.prototype.results_show = function() {
            return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                chosen: this
            }), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing=!0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {
                chosen: this
            }))
        }, n.prototype.update_results_content = function(t) {
            return this.search_results.html(t)
        }, n.prototype.results_hide = function() {
            return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {
                chosen: this
            })), this.results_showing=!1
        }, n.prototype.set_tab_index = function() {
            var t;
            return this.form_field.tabIndex ? (t = this.form_field.tabIndex, this.form_field.tabIndex =- 1, this.search_field[0].tabIndex = t) : void 0
        }, n.prototype.set_label_behavior = function() {
            var e = this;
            return this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = t("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0 ? this.form_field_label.bind("click.chosen", function(t) {
                return e.is_multiple ? e.container_mousedown(t) : e.activate_field()
            }) : void 0
        }, n.prototype.show_search_field_default = function() {
            return this.is_multiple && this.choices_count() < 1&&!this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
        }, n.prototype.search_results_mouseup = function(e) {
            var n;
            return n = t(e.target).hasClass("active-result") ? t(e.target) : t(e.target).parents(".active-result").first(), n.length ? (this.result_highlight = n, this.result_select(e), this.search_field.focus()) : void 0
        }, n.prototype.search_results_mouseover = function(e) {
            var n;
            return n = t(e.target).hasClass("active-result") ? t(e.target) : t(e.target).parents(".active-result").first(), n ? this.result_do_highlight(n) : void 0
        }, n.prototype.search_results_mouseout = function(e) {
            return t(e.target).hasClass("active-result") ? this.result_clear_highlight() : void 0
        }, n.prototype.choice_build = function(e) {
            var n, i, r = this;
            return n = t("<li />", {
                "class": "search-choice"
            }).html("<span>" + e.html + "</span>"), e.disabled ? n.addClass("search-choice-disabled") : (i = t("<a />", {
                "class": "search-choice-close",
                "data-option-array-index": e.array_index
            }), i.bind("click.chosen", function(t) {
                return r.choice_destroy_link_click(t)
            }), n.append(i)), this.search_container.before(n)
        }, n.prototype.choice_destroy_link_click = function(e) {
            return e.preventDefault(), e.stopPropagation(), this.is_disabled ? void 0 : this.choice_destroy(t(e.target))
        }, n.prototype.choice_destroy = function(t) {
            return this.result_deselect(t[0].getAttribute("data-option-array-index")) ? (this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(), t.parents("li").first().remove(), this.search_field_scale()) : void 0
        }, n.prototype.results_reset = function() {
            return this.reset_single_select_options(), this.form_field.options[0].selected=!0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field ? this.results_hide() : void 0
        }, n.prototype.results_reset_cleanup = function() {
            return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
        }, n.prototype.result_select = function(t) {
            var e, n;
            return this.result_highlight ? (e = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                chosen: this
            }), !1) : (this.is_multiple ? e.removeClass("active-result") : this.reset_single_select_options(), n = this.results_data[e[0].getAttribute("data-option-array-index")], n.selected=!0, this.form_field.options[n.options_index].selected=!0, this.selected_option_count = null, this.is_multiple ? this.choice_build(n) : this.single_set_selected_text(n.text), (t.metaKey || t.ctrlKey) && this.is_multiple || this.results_hide(), this.search_field.val(""), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", {
                selected: this.form_field.options[n.options_index].value
            }), this.current_selectedIndex = this.form_field.selectedIndex, this.search_field_scale())) : void 0
        }, n.prototype.single_set_selected_text = function(t) {
            return null == t && (t = this.default_text), t === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").text(t)
        }, n.prototype.result_deselect = function(t) {
            var e;
            return e = this.results_data[t], this.form_field.options[e.options_index].disabled?!1 : (e.selected=!1, this.form_field.options[e.options_index].selected=!1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", {
                deselected: this.form_field.options[e.options_index].value
            }), this.search_field_scale(), !0)
        }, n.prototype.single_deselect_control_build = function() {
            return this.allow_single_deselect ? (this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")) : void 0
        }, n.prototype.get_search_text = function() {
            return this.search_field.val() === this.default_text ? "" : t("<div/>").text(t.trim(this.search_field.val())).html()
        }, n.prototype.winnow_results_set_highlight = function() {
            var t, e;
            return e = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), t = e.length ? e.first() : this.search_results.find(".active-result").first(), null != t ? this.result_do_highlight(t) : void 0
        }, n.prototype.no_results = function(e) {
            var n;
            return n = t('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'), n.find("span").first().html(e), this.search_results.append(n), this.form_field_jq.trigger("chosen:no_results", {
                chosen: this
            })
        }, n.prototype.no_results_clear = function() {
            return this.search_results.find(".no-results").remove()
        }, n.prototype.keydown_arrow = function() {
            var t;
            return this.results_showing && this.result_highlight ? (t = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(t) : void 0 : this.results_show()
        }, n.prototype.keyup_arrow = function() {
            var t;
            return this.results_showing || this.is_multiple ? this.result_highlight ? (t = this.result_highlight.prevAll("li.active-result"), t.length ? this.result_do_highlight(t.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight())) : void 0 : this.results_show()
        }, n.prototype.keydown_backstroke = function() {
            var t;
            return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (t = this.search_container.siblings("li.search-choice").last(), t.length&&!t.hasClass("search-choice-disabled") ? (this.pending_backstroke = t, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0)
        }, n.prototype.clear_backstroke = function() {
            return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
        }, n.prototype.keydown_checker = function(t) {
            var e, n;
            switch (e = null != (n = t.which) ? n : t.keyCode, this.search_field_scale(), 8 !== e && this.pending_backstroke && this.clear_backstroke(), e) {
            case 8:
                this.backstroke_length = this.search_field.val().length;
                break;
            case 9:
                this.results_showing&&!this.is_multiple && this.result_select(t), this.mouse_on_container=!1;
                break;
            case 13:
                t.preventDefault();
                break;
            case 38:
                t.preventDefault(), this.keyup_arrow();
                break;
            case 40:
                t.preventDefault(), this.keydown_arrow()
            }
        }, n.prototype.search_field_scale = function() {
            var e, n, i, r, o, s, a, l, u;
            if (this.is_multiple) {
                for (i = 0, a = 0, o = "position:absolute; left: -1000px; top: -1000px; display:none;", s = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"], l = 0, u = s.length; u > l; l++)
                    r = s[l], o += r + ":" + this.search_field.css(r) + ";";
                return e = t("<div />", {
                    style: o
                }), e.text(this.search_field.val()), t("body").append(e), a = e.width() + 25, e.remove(), n = this.container.outerWidth(), a > n - 10 && (a = n - 10), this.search_field.css({
                    width: a + "px"
                })
            }
        }, n
    }(e)
}.call(this), function() {
    (function() {
        (function() {
            this.Turbolinks = {
                supported: function() {
                    return null != window.history.pushState && null != window.requestAnimationFrame
                }(),
                visit: function(e, n) {
                    return t.controller.visit(e, n)
                },
                clearCache: function() {
                    return t.controller.clearCache()
                }
            }
        }).call(this)
    }).call(this);
    var t = this.Turbolinks;
    (function() {
        (function() {
            var e, n;
            t.copyObject = function(t) {
                var e, n, i;
                n = {};
                for (e in t)
                    i = t[e], n[e] = i;
                return n
            }, t.closest = function(t, n) {
                return e.call(t, n)
            }, e = function() {
                var t, e;
                return t = document.documentElement, null != (e = t.closest) ? e : function(t) {
                    var e;
                    for (e = this; e;) {
                        if (e.nodeType === Node.ELEMENT_NODE && n.call(e, t))
                            return e;
                        e = e.parentNode
                    }
                }
            }(), t.defer = function(t) {
                return setTimeout(t, 1)
            }, t.dispatch = function(t, e) {
                var n, i, r, o, s;
                return o = null != e ? e : {}, s = o.target, n = o.cancelable, i = o.data, r = document.createEvent("Events"), r.initEvent(t, !0, n===!0), r.data = null != i ? i : {}, (null != s ? s : document).dispatchEvent(r), r
            }, t.match = function(t, e) {
                return n.call(t, e)
            }, n = function() {
                var t, e, n, i;
                return t = document.documentElement, null != (e = null != (n = null != (i = t.matchesSelector) ? i : t.webkitMatchesSelector) ? n : t.msMatchesSelector) ? e : t.mozMatchesSelector
            }(), t.uuid = function() {
                var t, e, n;
                for (n = "", t = e = 1; 36 >= e; t=++e)
                    n += 9 === t || 14 === t || 19 === t || 24 === t ? "-" : 15 === t ? "4" : 20 === t ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
                return n
            }
        }).call(this), function() {
            t.Location = function() {
                function t(t) {
                    var e, n;
                    null == t && (t = ""), n = document.createElement("a"), n.href = t.toString(), this.absoluteURL = n.href, e = n.hash.length, 2 > e ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, - e), this.anchor = n.hash.slice(1))
                }
                var e, n, i, r;
                return t.wrap = function(t) {
                    return t instanceof this ? t : new this (t)
                }, t.prototype.getOrigin = function() {
                    return this.absoluteURL.split("/", 3).join("/")
                }, t.prototype.getPath = function() {
                    var t, e;
                    return null != (t = null != (e = this.absoluteURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? e[1] : void 0) ? t : "/"
                }, t.prototype.getPathComponents = function() {
                    return this.getPath().split("/").slice(1)
                }, t.prototype.getLastPathComponent = function() {
                    return this.getPathComponents().slice( - 1)[0]
                }, t.prototype.getExtension = function() {
                    var t, e;
                    return null != (t = null != (e = this.getLastPathComponent().match(/\.[^.]*$/)) ? e[0] : void 0) ? t : ""
                }, t.prototype.isHTML = function() {
                    return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/)
                }, t.prototype.isPrefixedBy = function(t) {
                    var e;
                    return e = n(t), this.isEqualTo(t) || r(this.absoluteURL, e)
                }, t.prototype.isEqualTo = function(t) {
                    return this.absoluteURL === (null != t ? t.absoluteURL : void 0)
                }, t.prototype.toCacheKey = function() {
                    return this.requestURL
                }, t.prototype.toJSON = function() {
                    return this.absoluteURL
                }, t.prototype.toString = function() {
                    return this.absoluteURL
                }, t.prototype.valueOf = function() {
                    return this.absoluteURL
                }, n = function(t) {
                    return e(t.getOrigin() + t.getPath())
                }, e = function(t) {
                    return i(t, "/") ? t : t + "/"
                }, r = function(t, e) {
                    return t.slice(0, e.length) === e
                }, i = function(t, e) {
                    return t.slice( - e.length) === e
                }, t
            }()
        }.call(this), function() {
            var e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            };
            t.HttpRequest = function() {
                function n(n, i, r) {
                    this.delegate = n, this.requestCanceled = e(this.requestCanceled, this), this.requestTimedOut = e(this.requestTimedOut, this), this.requestFailed = e(this.requestFailed, this), this.requestLoaded = e(this.requestLoaded, this), this.requestProgressed = e(this.requestProgressed, this), this.url = t.Location.wrap(i).requestURL, this.referrer = t.Location.wrap(r).absoluteURL, this.createXHR()
                }
                return n.NETWORK_FAILURE = 0, n.TIMEOUT_FAILURE =- 1, n.timeout = 60, n.prototype.send = function() {
                    var t;
                    return this.xhr&&!this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent=!0, "function" == typeof(t = this.delegate).requestStarted ? t.requestStarted() : void 0) : void 0
                }, n.prototype.cancel = function() {
                    return this.xhr && this.sent ? this.xhr.abort() : void 0
                }, n.prototype.requestProgressed = function(t) {
                    return t.lengthComputable ? this.setProgress(t.loaded / t.total) : void 0
                }, n.prototype.requestLoaded = function() {
                    return this.endRequest(function(t) {
                        return function() {
                            var e;
                            return 200 <= (e = t.xhr.status) && 300 > e ? t.delegate.requestCompletedWithResponse(t.xhr.responseText, t.xhr.getResponseHeader("Turbolinks-Location")) : (t.failed=!0, t.delegate.requestFailedWithStatusCode(t.xhr.status, t.xhr.responseText))
                        }
                    }(this))
                }, n.prototype.requestFailed = function() {
                    return this.endRequest(function(t) {
                        return function() {
                            return t.failed=!0, t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE)
                        }
                    }(this))
                }, n.prototype.requestTimedOut = function() {
                    return this.endRequest(function(t) {
                        return function() {
                            return t.failed=!0, t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE)
                        }
                    }(this))
                }, n.prototype.requestCanceled = function() {
                    return this.endRequest()
                }, n.prototype.notifyApplicationBeforeRequestStart = function() {
                    return t.dispatch("turbolinks:request-start", {
                        data: {
                            url: this.url,
                            xhr: this.xhr
                        }
                    })
                }, n.prototype.notifyApplicationAfterRequestEnd = function() {
                    return t.dispatch("turbolinks:request-end", {
                        data: {
                            url: this.url,
                            xhr: this.xhr
                        }
                    })
                }, n.prototype.createXHR = function() {
                    return this.xhr = new XMLHttpRequest, this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled
                }, n.prototype.endRequest = function(t) {
                    return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != t && t.call(this), this.destroy()) : void 0
                }, n.prototype.setProgress = function(t) {
                    var e;
                    return this.progress = t, "function" == typeof(e = this.delegate).requestProgressed ? e.requestProgressed(this.progress) : void 0
                }, n.prototype.destroy = function() {
                    var t;
                    return this.setProgress(1), "function" == typeof(t = this.delegate).requestFinished && t.requestFinished(), this.delegate = null, this.xhr = null
                }, n
            }()
        }.call(this), function() {
            var e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            };
            t.ProgressBar = function() {
                function t() {
                    this.trickle = e(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement()
                }
                var n;
                return n = 300, t.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + n + "ms ease-out, opacity " + n / 2 + "ms " + n / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", t.prototype.show = function() {
                    return this.visible ? void 0 : (this.visible=!0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling())
                }, t.prototype.hide = function() {
                    return this.visible&&!this.hiding ? (this.hiding=!0, this.fadeProgressElement(function(t) {
                        return function() {
                            return t.uninstallProgressElement(), t.stopTrickling(), t.visible=!1, t.hiding=!1
                        }
                    }(this))) : void 0
                }, t.prototype.setValue = function(t) {
                    return this.value = t, this.refresh()
                }, t.prototype.installStylesheetElement = function() {
                    return document.head.insertBefore(this.stylesheetElement, document.head.firstChild)
                }, t.prototype.installProgressElement = function() {
                    return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh()
                }, t.prototype.fadeProgressElement = function(t) {
                    return this.progressElement.style.opacity = 0, setTimeout(t, 1.5 * n)
                }, t.prototype.uninstallProgressElement = function() {
                    return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0
                }, t.prototype.startTrickling = function() {
                    return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, n)
                }, t.prototype.stopTrickling = function() {
                    return clearInterval(this.trickleInterval), this.trickleInterval = null
                }, t.prototype.trickle = function() {
                    return this.setValue(this.value + Math.random() / 100)
                }, t.prototype.refresh = function() {
                    return requestAnimationFrame(function(t) {
                        return function() {
                            return t.progressElement.style.width = 10 + 90 * t.value + "%"
                        }
                    }(this))
                }, t.prototype.createStylesheetElement = function() {
                    var t;
                    return t = document.createElement("style"), t.type = "text/css", t.textContent = this.constructor.defaultCSS, t
                }, t.prototype.createProgressElement = function() {
                    var t;
                    return t = document.createElement("div"), t.className = "turbolinks-progress-bar", t
                }, t
            }()
        }.call(this), function() {
            var e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            };
            t.BrowserAdapter = function() {
                function n(n) {
                    this.controller = n, this.showProgressBar = e(this.showProgressBar, this), this.progressBar = new t.ProgressBar
                }
                var i, r, o, s;
                return s = t.HttpRequest, i = s.NETWORK_FAILURE, o = s.TIMEOUT_FAILURE, r = 500, n.prototype.visitProposedToLocationWithAction = function(t, e) {
                    return this.controller.startVisitToLocationWithAction(t, e)
                }, n.prototype.visitStarted = function(t) {
                    return t.issueRequest(), t.changeHistory(), t.loadCachedSnapshot()
                }, n.prototype.visitRequestStarted = function(t) {
                    return this.progressBar.setValue(0), t.hasCachedSnapshot() || "restore" !== t.action ? this.showProgressBarAfterDelay() : this.showProgressBar()
                }, n.prototype.visitRequestProgressed = function(t) {
                    return this.progressBar.setValue(t.progress)
                }, n.prototype.visitRequestCompleted = function(t) {
                    return t.loadResponse()
                }, n.prototype.visitRequestFailedWithStatusCode = function(t, e) {
                    switch (e) {
                    case i:
                    case o:
                        return this.reload();
                    default:
                        return t.loadResponse()
                    }
                }, n.prototype.visitRequestFinished = function() {
                    return this.hideProgressBar()
                }, n.prototype.visitCompleted = function(t) {
                    return t.followRedirect()
                }, n.prototype.pageInvalidated = function() {
                    return this.reload()
                }, n.prototype.showProgressBarAfterDelay = function() {
                    return this.progressBarTimeout = setTimeout(this.showProgressBar, r)
                }, n.prototype.showProgressBar = function() {
                    return this.progressBar.show()
                }, n.prototype.hideProgressBar = function() {
                    return this.progressBar.hide(), clearTimeout(this.progressBarTimeout)
                }, n.prototype.reload = function() {
                    return window.location.reload()
                }, n
            }()
        }.call(this), function() {
            var e, n = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            };
            e=!1, addEventListener("load", function() {
                return t.defer(function() {
                    return e=!0
                })
            }, !1), t.History = function() {
                function i(t) {
                    this.delegate = t, this.onPopState = n(this.onPopState, this)
                }
                return i.prototype.start = function() {
                    return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), this.started=!0)
                }, i.prototype.stop = function() {
                    return this.started ? (removeEventListener("popstate", this.onPopState, !1), this.started=!1) : void 0
                }, i.prototype.push = function(e, n) {
                    return e = t.Location.wrap(e), this.update("push", e, n)
                }, i.prototype.replace = function(e, n) {
                    return e = t.Location.wrap(e), this.update("replace", e, n)
                }, i.prototype.onPopState = function(e) {
                    var n, i, r, o;
                    return this.shouldHandlePopState() && (o = null != (i = e.state) ? i.turbolinks : void 0) ? (n = t.Location.wrap(window.location), r = o.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(n, r)) : void 0
                }, i.prototype.shouldHandlePopState = function() {
                    return e===!0
                }, i.prototype.update = function(t, e, n) {
                    var i;
                    return i = {
                        turbolinks: {
                            restorationIdentifier: n
                        }
                    }, history[t + "State"](i, null, e)
                }, i
            }()
        }.call(this), function() {
            t.Snapshot = function() {
                function e(t) {
                    var e, n;
                    n = t.head, e = t.body, this.head = null != n ? n : document.createElement("head"), this.body = null != e ? e : document.createElement("body")
                }
                return e.wrap = function(t) {
                    return t instanceof this ? t : this.fromHTML(t)
                }, e.fromHTML = function(t) {
                    var e;
                    return e = document.createElement("html"), e.innerHTML = t, this.fromElement(e)
                }, e.fromElement = function(t) {
                    return new this ({
                        head: t.querySelector("head"),
                        body: t.querySelector("body")
                    })
                }, e.prototype.clone = function() {
                    return new e({
                        head: this.head.cloneNode(!0),
                        body: this.body.cloneNode(!0)
                    })
                }, e.prototype.getRootLocation = function() {
                    var e, n;
                    return n = null != (e = this.getSetting("root")) ? e : "/", new t.Location(n)
                }, e.prototype.getCacheControlValue = function() {
                    return this.getSetting("cache-control")
                }, e.prototype.hasAnchor = function(t) {
                    try {
                        return null != this.body.querySelector("[id='" + t + "']")
                    } catch (e) {}
                }, e.prototype.isPreviewable = function() {
                    return "no-preview" !== this.getCacheControlValue()
                }, e.prototype.isCacheable = function() {
                    return "no-cache" !== this.getCacheControlValue()
                }, e.prototype.getSetting = function(t) {
                    var e, n;
                    return n = this.head.querySelectorAll("meta[name='turbolinks-" + t + "']"), e = n[n.length - 1], null != e ? e.getAttribute("content") : void 0
                }, e
            }()
        }.call(this), function() {
            var e = [].slice;
            t.Renderer = function() {
                function t() {}
                var n;
                return t.render = function() {
                    var t, n, i, r;
                    return i = arguments[0], n = arguments[1], t = 3 <= arguments.length ? e.call(arguments, 2) : [], r = function(t, e, n) {
                        n.prototype = t.prototype;
                        var i = new n, r = t.apply(i, e);
                        return Object(r) === r ? r : i
                    }(this, t, function() {}), r.delegate = i, r.render(n), r
                }, t.prototype.renderView = function(t) {
                    return this.delegate.viewWillRender(this.newBody), t(), this.delegate.viewRendered(this.newBody)
                }, t.prototype.invalidateView = function() {
                    return this.delegate.viewInvalidated()
                }, t.prototype.createScriptElement = function(t) {
                    var e;
                    return "false" === t.getAttribute("data-turbolinks-eval") ? t : (e = document.createElement("script"), e.textContent = t.textContent, n(e, t), e)
                }, n = function(t, e) {
                    var n, i, r, o, s, a, l;
                    for (o = e.attributes, a = [], n = 0, i = o.length; i > n; n++)
                        s = o[n], r = s.name, l = s.value, a.push(t.setAttribute(r, l));
                    return a
                }, t
            }()
        }.call(this), function() {
            t.HeadDetails = function() {
                function t(t) {
                    var e, n, o, s, a, l, u;
                    for (this.element = t, this.elements = {}, u = this.element.childNodes, s = 0, l = u.length; l > s; s++)
                        o = u[s], o.nodeType === Node.ELEMENT_NODE && (a = o.outerHTML, n = null != (e = this.elements)[a] ? e[a] : e[a] = {
                            type: r(o),
                            tracked: i(o),
                            elements: []
                        }, n.elements.push(o))
                }
                var e, n, i, r;
                return t.prototype.hasElementWithKey = function(t) {
                    return t in this.elements
                }, t.prototype.getTrackedElementSignature = function() {
                    var t, e;
                    return function() {
                        var n, i;
                        n = this.elements, i = [];
                        for (t in n)
                            e = n[t].tracked, e && i.push(t);
                        return i
                    }.call(this).join("")
                }, t.prototype.getScriptElementsNotInDetails = function(t) {
                    return this.getElementsMatchingTypeNotInDetails("script", t)
                }, t.prototype.getStylesheetElementsNotInDetails = function(t) {
                    return this.getElementsMatchingTypeNotInDetails("stylesheet", t)
                }, t.prototype.getElementsMatchingTypeNotInDetails = function(t, e) {
                    var n, i, r, o, s, a;
                    r = this.elements, s = [];
                    for (i in r)
                        o = r[i], a = o.type, n = o.elements, a !== t || e.hasElementWithKey(i) || s.push(n[0]);
                    return s
                }, t.prototype.getProvisionalElements = function() {
                    var t, e, n, i, r, o, s;
                    n = [], i = this.elements;
                    for (e in i)
                        r = i[e], s = r.type, o = r.tracked, t = r.elements, null != s || o ? t.length > 1 && n.push.apply(n, t.slice(1)) : n.push.apply(n, t);
                    return n
                }, r = function(t) {
                    return e(t) ? "script" : n(t) ? "stylesheet" : void 0
                }, i = function(t) {
                    return "reload" === t.getAttribute("data-turbolinks-track")
                }, e = function(t) {
                    var e;
                    return e = t.tagName.toLowerCase(), "script" === e
                }, n = function(t) {
                    var e;
                    return e = t.tagName.toLowerCase(), "style" === e || "link" === e && "stylesheet" === t.getAttribute("rel")
                }, t
            }()
        }.call(this), function() {
            var e = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var r in e)
                    n.call(e, r) && (t[r] = e[r]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            }, n = {}.hasOwnProperty;
            t.SnapshotRenderer = function(n) {
                function i(e, n) {
                    this.currentSnapshot = e, this.newSnapshot = n, this.currentHeadDetails = new t.HeadDetails(this.currentSnapshot.head), this.newHeadDetails = new t.HeadDetails(this.newSnapshot.head), this.newBody = this.newSnapshot.body
                }
                return e(i, n), i.prototype.render = function(t) {
                    return this.trackedElementsAreIdentical() ? (this.mergeHead(), this.renderView(function(e) {
                        return function() {
                            return e.replaceBody(), e.focusFirstAutofocusableElement(), t()
                        }
                    }(this))) : this.invalidateView()
                }, i.prototype.mergeHead = function() {
                    return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements()
                }, i.prototype.replaceBody = function() {
                    return this.activateBodyScriptElements(), this.importBodyPermanentElements(), this.assignNewBody()
                }, i.prototype.trackedElementsAreIdentical = function() {
                    return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature()
                }, i.prototype.copyNewHeadStylesheetElements = function() {
                    var t, e, n, i, r;
                    for (i = this.getNewHeadStylesheetElements(), r = [], e = 0, n = i.length; n > e; e++)
                        t = i[e], r.push(document.head.appendChild(t));
                    return r
                }, i.prototype.copyNewHeadScriptElements = function() {
                    var t, e, n, i, r;
                    for (i = this.getNewHeadScriptElements(), r = [], e = 0, n = i.length; n > e; e++)
                        t = i[e], r.push(document.head.appendChild(this.createScriptElement(t)));
                    return r
                }, i.prototype.removeCurrentHeadProvisionalElements = function() {
                    var t, e, n, i, r;
                    for (i = this.getCurrentHeadProvisionalElements(), r = [], e = 0, n = i.length; n > e; e++)
                        t = i[e], r.push(document.head.removeChild(t));
                    return r
                }, i.prototype.copyNewHeadProvisionalElements = function() {
                    var t, e, n, i, r;
                    for (i = this.getNewHeadProvisionalElements(), r = [], e = 0, n = i.length; n > e; e++)
                        t = i[e], r.push(document.head.appendChild(t));
                    return r
                }, i.prototype.importBodyPermanentElements = function() {
                    var t, e, n, i, r, o;
                    for (i = this.getNewBodyPermanentElements(), o = [], e = 0, n = i.length; n > e; e++)
                        r = i[e], (t = this.findCurrentBodyPermanentElement(r)) ? o.push(r.parentNode.replaceChild(t, r)) : o.push(void 0);
                    return o
                }, i.prototype.activateBodyScriptElements = function() {
                    var t, e, n, i, r, o;
                    for (i = this.getNewBodyScriptElements(), o = [], e = 0, n = i.length; n > e; e++)
                        r = i[e], t = this.createScriptElement(r), o.push(r.parentNode.replaceChild(t, r));
                    return o
                }, i.prototype.assignNewBody = function() {
                    return document.body = this.newBody
                }, i.prototype.focusFirstAutofocusableElement = function() {
                    var t;
                    return null != (t = this.findFirstAutofocusableElement()) ? t.focus() : void 0
                }, i.prototype.getNewHeadStylesheetElements = function() {
                    return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails)
                }, i.prototype.getNewHeadScriptElements = function() {
                    return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails)
                }, i.prototype.getCurrentHeadProvisionalElements = function() {
                    return this.currentHeadDetails.getProvisionalElements()
                }, i.prototype.getNewHeadProvisionalElements = function() {
                    return this.newHeadDetails.getProvisionalElements()
                }, i.prototype.getNewBodyPermanentElements = function() {
                    return this.newBody.querySelectorAll("[id][data-turbolinks-permanent]")
                }, i.prototype.findCurrentBodyPermanentElement = function(t) {
                    return document.body.querySelector("#" + t.id + "[data-turbolinks-permanent]")
                }, i.prototype.getNewBodyScriptElements = function() {
                    return this.newBody.querySelectorAll("script")
                }, i.prototype.findFirstAutofocusableElement = function() {
                    return document.body.querySelector("[autofocus]")
                }, i
            }(t.Renderer)
        }.call(this), function() {
            var e = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var r in e)
                    n.call(e, r) && (t[r] = e[r]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            }, n = {}.hasOwnProperty;
            t.ErrorRenderer = function(t) {
                function n(t) {
                    this.html = t
                }
                return e(n, t), n.prototype.render = function(t) {
                    return this.renderView(function(e) {
                        return function() {
                            return e.replaceDocumentHTML(), e.activateBodyScriptElements(), t()
                        }
                    }(this))
                }, n.prototype.replaceDocumentHTML = function() {
                    return document.documentElement.innerHTML = this.html
                }, n.prototype.activateBodyScriptElements = function() {
                    var t, e, n, i, r, o;
                    for (i = this.getScriptElements(), o = [], e = 0, n = i.length; n > e; e++)
                        r = i[e], t = this.createScriptElement(r), o.push(r.parentNode.replaceChild(t, r));
                    return o
                }, n.prototype.getScriptElements = function() {
                    return document.documentElement.querySelectorAll("script")
                }, n
            }(t.Renderer)
        }.call(this), function() {
            t.View = function() {
                function e(t) {
                    this.delegate = t, this.element = document.documentElement
                }
                return e.prototype.getRootLocation = function() {
                    return this.getSnapshot().getRootLocation()
                }, e.prototype.getSnapshot = function() {
                    return t.Snapshot.fromElement(this.element)
                }, e.prototype.render = function(t, e) {
                    var n, i, r;
                    return r = t.snapshot, n = t.error, i = t.isPreview, this.markAsPreview(i), null != r ? this.renderSnapshot(r, e) : this.renderError(n, e)
                }, e.prototype.markAsPreview = function(t) {
                    return t ? this.element.setAttribute("data-turbolinks-preview", "") : this.element.removeAttribute("data-turbolinks-preview")
                }, e.prototype.renderSnapshot = function(e, n) {
                    return t.SnapshotRenderer.render(this.delegate, n, this.getSnapshot(), t.Snapshot.wrap(e))
                }, e.prototype.renderError = function(e, n) {
                    return t.ErrorRenderer.render(this.delegate, n, e)
                }, e
            }()
        }.call(this), function() {
            var e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            };
            t.ScrollManager = function() {
                function t(t) {
                    this.delegate = t, this.onScroll = e(this.onScroll, this)
                }
                return t.prototype.start = function() {
                    return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started=!0)
                }, t.prototype.stop = function() {
                    return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started=!1) : void 0
                }, t.prototype.scrollToElement = function(t) {
                    return t.scrollIntoView()
                }, t.prototype.scrollToPosition = function(t) {
                    var e, n;
                    return e = t.x, n = t.y, window.scrollTo(e, n)
                }, t.prototype.onScroll = function() {
                    return this.updatePosition({
                        x: window.pageXOffset,
                        y: window.pageYOffset
                    })
                }, t.prototype.updatePosition = function(t) {
                    var e;
                    return this.position = t, null != (e = this.delegate) ? e.scrollPositionChanged(this.position) : void 0
                }, t
            }()
        }.call(this), function() {
            t.SnapshotCache = function() {
                function e(t) {
                    this.size = t, this.keys = [], this.snapshots = {}
                }
                var n;
                return e.prototype.has = function(t) {
                    var e;
                    return e = n(t), e in this.snapshots
                }, e.prototype.get = function(t) {
                    var e;
                    return this.has(t) ? (e = this.read(t), this.touch(t), e) : void 0
                }, e.prototype.put = function(t, e) {
                    return this.write(t, e), this.touch(t), e
                }, e.prototype.read = function(t) {
                    var e;
                    return e = n(t), this.snapshots[e]
                }, e.prototype.write = function(t, e) {
                    var i;
                    return i = n(t), this.snapshots[i] = e
                }, e.prototype.touch = function(t) {
                    var e, i;
                    return i = n(t), e = this.keys.indexOf(i), e>-1 && this.keys.splice(e, 1), this.keys.unshift(i), this.trim()
                }, e.prototype.trim = function() {
                    var t, e, n, i, r;
                    for (i = this.keys.splice(this.size), r = [], t = 0, n = i.length; n > t; t++)
                        e = i[t], r.push(delete this.snapshots[e]);
                    return r
                }, n = function(e) {
                    return t.Location.wrap(e).toCacheKey()
                }, e
            }()
        }.call(this), function() {
            var e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            };
            t.Visit = function() {
                function n(n, i, r) {
                    this.controller = n, this.action = r, this.performScroll = e(this.performScroll, this), this.identifier = t.uuid(), this.location = t.Location.wrap(i), this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {}
                }
                var i;
                return n.prototype.start = function() {
                    return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0
                }, n.prototype.cancel = function() {
                    var t;
                    return "started" === this.state ? (null != (t = this.request) && t.cancel(), this.cancelRender(), this.state = "canceled") : void 0
                }, n.prototype.complete = function() {
                    var t;
                    return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof(t = this.adapter).visitCompleted && t.visitCompleted(this), this.controller.visitCompleted(this)) : void 0
                }, n.prototype.fail = function() {
                    var t;
                    return "started" === this.state ? (this.state = "failed", "function" == typeof(t = this.adapter).visitFailed ? t.visitFailed(this) : void 0) : void 0
                }, n.prototype.changeHistory = function() {
                    var t, e;
                    return this.historyChanged ? void 0 : (t = this.location.isEqualTo(this.referrer) ? "replace" : this.action, e = i(t), this.controller[e](this.location, this.restorationIdentifier), this.historyChanged=!0)
                }, n.prototype.issueRequest = function() {
                    return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new t.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0
                }, n.prototype.getCachedSnapshot = function() {
                    var t;
                    return !(t = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor&&!t.hasAnchor(this.location.anchor) || "restore" !== this.action&&!t.isPreviewable() ? void 0 : t
                }, n.prototype.hasCachedSnapshot = function() {
                    return null != this.getCachedSnapshot()
                }, n.prototype.loadCachedSnapshot = function() {
                    var t, e;
                    return (e = this.getCachedSnapshot()) ? (t = this.shouldIssueRequest(), this.render(function() {
                        var n;
                        return this.cacheSnapshot(), this.controller.render({
                            snapshot: e,
                            isPreview: t
                        }, this.performScroll), "function" == typeof(n = this.adapter).visitRendered && n.visitRendered(this), t ? void 0 : this.complete()
                    })) : void 0
                }, n.prototype.loadResponse = function() {
                    return null != this.response ? this.render(function() {
                        var t, e;
                        return this.cacheSnapshot(), this.request.failed ? (this.controller.render({
                            error: this.response
                        }, this.performScroll), "function" == typeof(t = this.adapter).visitRendered && t.visitRendered(this), this.fail()) : (this.controller.render({
                            snapshot: this.response
                        }, this.performScroll), "function" == typeof(e = this.adapter).visitRendered && e.visitRendered(this), this.complete())
                    }) : void 0
                }, n.prototype.followRedirect = function() {
                    return this.redirectedToLocation&&!this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect=!0) : void 0
                }, n.prototype.requestStarted = function() {
                    var t;
                    return this.recordTimingMetric("requestStart"), "function" == typeof(t = this.adapter).visitRequestStarted ? t.visitRequestStarted(this) : void 0
                }, n.prototype.requestProgressed = function(t) {
                    var e;
                    return this.progress = t, "function" == typeof(e = this.adapter).visitRequestProgressed ? e.visitRequestProgressed(this) : void 0
                }, n.prototype.requestCompletedWithResponse = function(e, n) {
                    return this.response = e, null != n && (this.redirectedToLocation = t.Location.wrap(n)), this.adapter.visitRequestCompleted(this)
                }, n.prototype.requestFailedWithStatusCode = function(t, e) {
                    return this.response = e, this.adapter.visitRequestFailedWithStatusCode(this, t)
                }, n.prototype.requestFinished = function() {
                    var t;
                    return this.recordTimingMetric("requestEnd"), "function" == typeof(t = this.adapter).visitRequestFinished ? t.visitRequestFinished(this) : void 0
                }, n.prototype.performScroll = function() {
                    return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled=!0)
                }, n.prototype.scrollToRestoredPosition = function() {
                    var t, e;
                    return t = null != (e = this.restorationData) ? e.scrollPosition : void 0, null != t ? (this.controller.scrollToPosition(t), !0) : void 0
                }, n.prototype.scrollToAnchor = function() {
                    return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0
                }, n.prototype.scrollToTop = function() {
                    return this.controller.scrollToPosition({
                        x: 0,
                        y: 0
                    })
                }, n.prototype.recordTimingMetric = function(t) {
                    var e;
                    return null != (e = this.timingMetrics)[t] ? e[t] : e[t] = (new Date).getTime()
                }, n.prototype.getTimingMetrics = function() {
                    return t.copyObject(this.timingMetrics)
                }, i = function(t) {
                    switch (t) {
                    case"replace":
                        return "replaceHistoryWithLocationAndRestorationIdentifier";
                    case"advance":
                    case"restore":
                        return "pushHistoryWithLocationAndRestorationIdentifier"
                    }
                }, n.prototype.shouldIssueRequest = function() {
                    return "restore" === this.action?!this.hasCachedSnapshot() : !0
                }, n.prototype.cacheSnapshot = function() {
                    return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached=!0)
                }, n.prototype.render = function(t) {
                    return this.cancelRender(), this.frame = requestAnimationFrame(function(e) {
                        return function() {
                            return e.frame = null, t.call(e)
                        }
                    }(this))
                }, n.prototype.cancelRender = function() {
                    return this.frame ? cancelAnimationFrame(this.frame) : void 0
                }, n
            }()
        }.call(this), function() {
            var e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            };
            t.Controller = function() {
                function n() {
                    this.clickBubbled = e(this.clickBubbled, this), this.clickCaptured = e(this.clickCaptured, this), this.pageLoaded = e(this.pageLoaded, this), this.history = new t.History(this), this.view = new t.View(this), this.scrollManager = new t.ScrollManager(this), this.restorationData = {}, this.clearCache()
                }
                return n.prototype.start = function() {
                    return t.supported&&!this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started=!0, this.enabled=!0) : void 0
                }, n.prototype.disable = function() {
                    return this.enabled=!1
                }, n.prototype.stop = function() {
                    return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started=!1) : void 0
                }, n.prototype.clearCache = function() {
                    return this.cache = new t.SnapshotCache(10)
                }, n.prototype.visit = function(e, n) {
                    var i, r;
                    return null == n && (n = {}), e = t.Location.wrap(e), this.applicationAllowsVisitingLocation(e) ? this.locationIsVisitable(e) ? (i = null != (r = n.action) ? r : "advance", this.adapter.visitProposedToLocationWithAction(e, i)) : window.location = e : void 0
                }, n.prototype.startVisitToLocationWithAction = function(e, n, i) {
                    var r;
                    return t.supported ? (r = this.getRestorationDataForIdentifier(i), this.startVisit(e, n, {
                        restorationData: r
                    })) : window.location = e
                }, n.prototype.startHistory = function() {
                    return this.location = t.Location.wrap(window.location), this.restorationIdentifier = t.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier)
                }, n.prototype.stopHistory = function() {
                    return this.history.stop()
                }, n.prototype.pushHistoryWithLocationAndRestorationIdentifier = function(e, n) {
                    return this.restorationIdentifier = n, this.location = t.Location.wrap(e), this.history.push(this.location, this.restorationIdentifier)
                }, n.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function(e, n) {
                    return this.restorationIdentifier = n, this.location = t.Location.wrap(e), this.history.replace(this.location, this.restorationIdentifier)
                }, n.prototype.historyPoppedToLocationWithRestorationIdentifier = function(e, n) {
                    var i;
                    return this.restorationIdentifier = n, this.enabled ? (i = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(e, "restore", {
                        restorationIdentifier: this.restorationIdentifier,
                        restorationData: i,
                        historyChanged: !0
                    }), this.location = t.Location.wrap(e)) : this.adapter.pageInvalidated()
                }, n.prototype.getCachedSnapshotForLocation = function(t) {
                    var e;
                    return e = this.cache.get(t), e ? e.clone() : void 0
                }, n.prototype.shouldCacheSnapshot = function() {
                    return this.view.getSnapshot().isCacheable()
                }, n.prototype.cacheSnapshot = function() {
                    var t;
                    return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), t = this.view.getSnapshot(), this.cache.put(this.lastRenderedLocation, t.clone())) : void 0
                }, n.prototype.scrollToAnchor = function(t) {
                    var e;
                    return (e = document.getElementById(t)) ? this.scrollToElement(e) : this.scrollToPosition({
                        x: 0,
                        y: 0
                    })
                }, n.prototype.scrollToElement = function(t) {
                    return this.scrollManager.scrollToElement(t)
                }, n.prototype.scrollToPosition = function(t) {
                    return this.scrollManager.scrollToPosition(t)
                }, n.prototype.scrollPositionChanged = function(t) {
                    var e;
                    return e = this.getCurrentRestorationData(), e.scrollPosition = t
                }, n.prototype.render = function(t, e) {
                    return this.view.render(t, e)
                }, n.prototype.viewInvalidated = function() {
                    return this.adapter.pageInvalidated()
                }, n.prototype.viewWillRender = function(t) {
                    return this.notifyApplicationBeforeRender(t)
                }, n.prototype.viewRendered = function() {
                    return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender()
                }, n.prototype.pageLoaded = function() {
                    return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad()
                }, n.prototype.clickCaptured = function() {
                    return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1)
                }, n.prototype.clickBubbled = function(t) {
                    var e, n, i;
                    return this.enabled && this.clickEventIsSignificant(t) && (n = this.getVisitableLinkForNode(t.target)) && (i = this.getVisitableLocationForLink(n)) && this.applicationAllowsFollowingLinkToLocation(n, i) ? (t.preventDefault(), e = this.getActionForLink(n), this.visit(i, {
                        action: e
                    })) : void 0
                }, n.prototype.applicationAllowsFollowingLinkToLocation = function(t, e) {
                    var n;
                    return n = this.notifyApplicationAfterClickingLinkToLocation(t, e), !n.defaultPrevented
                }, n.prototype.applicationAllowsVisitingLocation = function(t) {
                    var e;
                    return e = this.notifyApplicationBeforeVisitingLocation(t), !e.defaultPrevented
                }, n.prototype.notifyApplicationAfterClickingLinkToLocation = function(e, n) {
                    return t.dispatch("turbolinks:click", {
                        target: e,
                        data: {
                            url: n.absoluteURL
                        },
                        cancelable: !0
                    })
                }, n.prototype.notifyApplicationBeforeVisitingLocation = function(e) {
                    return t.dispatch("turbolinks:before-visit", {
                        data: {
                            url: e.absoluteURL
                        },
                        cancelable: !0
                    })
                }, n.prototype.notifyApplicationAfterVisitingLocation = function(e) {
                    return t.dispatch("turbolinks:visit", {
                        data: {
                            url: e.absoluteURL
                        }
                    })
                }, n.prototype.notifyApplicationBeforeCachingSnapshot = function() {
                    return t.dispatch("turbolinks:before-cache")
                }, n.prototype.notifyApplicationBeforeRender = function(e) {
                    return t.dispatch("turbolinks:before-render", {
                        data: {
                            newBody: e
                        }
                    })
                }, n.prototype.notifyApplicationAfterRender = function() {
                    return t.dispatch("turbolinks:render")
                }, n.prototype.notifyApplicationAfterPageLoad = function(e) {
                    return null == e && (e = {}), t.dispatch("turbolinks:load", {
                        data: {
                            url: this.location.absoluteURL,
                            timing: e
                        }
                    })
                }, n.prototype.startVisit = function(t, e, n) {
                    var i;
                    return null != (i = this.currentVisit) && i.cancel(), this.currentVisit = this.createVisit(t, e, n), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(t)
                }, n.prototype.createVisit = function(e, n, i) {
                    var r, o, s, a, l;
                    return o = null != i ? i : {}, a = o.restorationIdentifier, s = o.restorationData, r = o.historyChanged, l = new t.Visit(this, e, n), l.restorationIdentifier = null != a ? a : t.uuid(), l.restorationData = t.copyObject(s), l.historyChanged = r, l.referrer = this.location, l
                }, n.prototype.visitCompleted = function(t) {
                    return this.notifyApplicationAfterPageLoad(t.getTimingMetrics())
                }, n.prototype.clickEventIsSignificant = function(t) {
                    return !(t.defaultPrevented || t.target.isContentEditable || t.which > 1 || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey)
                }, n.prototype.getVisitableLinkForNode = function(e) {
                    return this.nodeIsVisitable(e) ? t.closest(e, "a[href]:not([target])") : void 0
                }, n.prototype.getVisitableLocationForLink = function(e) {
                    var n;
                    return n = new t.Location(e.getAttribute("href")), this.locationIsVisitable(n) ? n : void 0
                }, n.prototype.getActionForLink = function(t) {
                    var e;
                    return null != (e = t.getAttribute("data-turbolinks-action")) ? e : "advance"
                }, n.prototype.nodeIsVisitable = function(e) {
                    var n;
                    return (n = t.closest(e, "[data-turbolinks]")) ? "false" !== n.getAttribute("data-turbolinks") : !0
                }, n.prototype.locationIsVisitable = function(t) {
                    return t.isPrefixedBy(this.view.getRootLocation()) && t.isHTML()
                }, n.prototype.getCurrentRestorationData = function() {
                    return this.getRestorationDataForIdentifier(this.restorationIdentifier)
                }, n.prototype.getRestorationDataForIdentifier = function(t) {
                    var e;
                    return null != (e = this.restorationData)[t] ? e[t] : e[t] = {}
                }, n
            }()
        }.call(this), function() {
            var e, n, i;
            t.start = function() {
                return n() ? (null == t.controller && (t.controller = e()), t.controller.start()) : void 0
            }, n = function() {
                return null == window.Turbolinks && (window.Turbolinks = t), i()
            }, e = function() {
                var e;
                return e = new t.Controller, e.adapter = new t.BrowserAdapter(e), e
            }, i = function() {
                return window.Turbolinks === t
            }, i() && t.start()
        }.call(this)
    }).call(this), "object" == typeof module && module.exports ? module.exports = t : "function" == typeof define && define.amd && define(t)
}.call(this), function() {
    var t, e, n, i, r, o, s, a, l = [].slice, u = {}.hasOwnProperty, c = function(t, e) {
        function n() {
            this.constructor = t
        }
        for (var i in e)
            u.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    };
    s = function() {}, e = function() {
        function t() {}
        return t.prototype.addEventListener = t.prototype.on, t.prototype.on = function(t, e) {
            return this._callbacks = this._callbacks || {}, this._callbacks[t] || (this._callbacks[t] = []), this._callbacks[t].push(e), this
        }, t.prototype.emit = function() {
            var t, e, n, i, r, o;
            if (i = arguments[0], t = 2 <= arguments.length ? l.call(arguments, 1) : [], this._callbacks = this._callbacks || {}, n = this._callbacks[i])
                for (r = 0, o = n.length; o > r; r++)
                    e = n[r], e.apply(this, t);
            return this
        }, t.prototype.removeListener = t.prototype.off, t.prototype.removeAllListeners = t.prototype.off, t.prototype.removeEventListener = t.prototype.off, t.prototype.off = function(t, e) {
            var n, i, r, o, s;
            if (!this._callbacks || 0 === arguments.length)
                return this._callbacks = {}, this;
            if (i = this._callbacks[t], !i)
                return this;
            if (1 === arguments.length)
                return delete this._callbacks[t], this;
            for (r = o = 0, s = i.length; s > o; r=++o)
                if (n = i[r], n === e) {
                    i.splice(r, 1);
                    break
                }
            return this
        }, t
    }(), t = function(t) {
        function n(t, e) {
            var r, o, s;
            if (this.element = t, this.version = n.version, this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, ""), this.clickableElements = [], this.listeners = [], this.files = [], "string" == typeof this.element && (this.element = document.querySelector(this.element)), !this.element || null == this.element.nodeType)
                throw new Error("Invalid dropzone element.");
            if (this.element.dropzone)
                throw new Error("Dropzone already attached.");
            if (n.instances.push(this), this.element.dropzone = this, r = null != (s = n.optionsForElement(this.element)) ? s : {}, this.options = i({}, this.defaultOptions, r, null != e ? e : {}), this.options.forceFallback ||!n.isBrowserSupported())
                return this.options.fallback.call(this);
            if (null == this.options.url && (this.options.url = this.element.getAttribute("action")), !this.options.url)
                throw new Error("No URL provided.");
            if (this.options.acceptedFiles && this.options.acceptedMimeTypes)
                throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
            this.options.acceptedMimeTypes && (this.options.acceptedFiles = this.options.acceptedMimeTypes, delete this.options.acceptedMimeTypes), this.options.method = this.options.method.toUpperCase(), (o = this.getExistingFallback()) && o.parentNode && o.parentNode.removeChild(o), this.options.previewsContainer!==!1 && (this.options.previewsContainer ? this.previewsContainer = n.getElement(this.options.previewsContainer, "previewsContainer") : this.previewsContainer = this.element), this.options.clickable && (this.options.clickable===!0 ? this.clickableElements = [this.element] : this.clickableElements = n.getElements(this.options.clickable, "clickable")), this.init()
        }
        var i, r;
        return c(n, t), n.prototype.Emitter = e, n.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"], n.prototype.defaultOptions = {
            url: null,
            method: "post",
            withCredentials: !1,
            parallelUploads: 2,
            uploadMultiple: !1,
            maxFilesize: 256,
            paramName: "file",
            createImageThumbnails: !0,
            maxThumbnailFilesize: 10,
            thumbnailWidth: 120,
            thumbnailHeight: 120,
            filesizeBase: 1e3,
            maxFiles: null,
            params: {},
            clickable: !0,
            ignoreHiddenFiles: !0,
            acceptedFiles: null,
            acceptedMimeTypes: null,
            autoProcessQueue: !0,
            autoQueue: !0,
            addRemoveLinks: !1,
            previewsContainer: null,
            hiddenInputContainer: "body",
            capture: null,
            renameFilename: null,
            dictDefaultMessage: "Drop files here to upload",
            dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
            dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
            dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
            dictInvalidFileType: "You can't upload files of this type.",
            dictResponseError: "Server responded with {{statusCode}} code.",
            dictCancelUpload: "Cancel upload",
            dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
            dictRemoveFile: "Remove file",
            dictRemoveFileConfirmation: null,
            dictMaxFilesExceeded: "You can not upload any more files.",
            accept: function(t, e) {
                return e()
            },
            init: function() {
                return s
            },
            forceFallback: !1,
            fallback: function() {
                var t, e, i, r, o, s;
                for (this.element.className = "" + this.element.className + " dz-browser-not-supported", s = this.element.getElementsByTagName("div"), r = 0, o = s.length; o > r; r++)
                    t = s[r], /(^| )dz-message($| )/.test(t.className) && (e = t, t.className = "dz-message");
                return e || (e = n.createElement('<div class="dz-message"><span></span></div>'), this.element.appendChild(e)), i = e.getElementsByTagName("span")[0], i && (null != i.textContent ? i.textContent = this.options.dictFallbackMessage : null != i.innerText && (i.innerText = this.options.dictFallbackMessage)), this.element.appendChild(this.getFallbackForm())
            },
            resize: function(t) {
                var e, n, i;
                return e = {
                    srcX: 0,
                    srcY: 0,
                    srcWidth: t.width,
                    srcHeight: t.height
                }, n = t.width / t.height, e.optWidth = this.options.thumbnailWidth, e.optHeight = this.options.thumbnailHeight, null == e.optWidth && null == e.optHeight ? (e.optWidth = e.srcWidth, e.optHeight = e.srcHeight) : null == e.optWidth ? e.optWidth = n * e.optHeight : null == e.optHeight && (e.optHeight = 1 / n * e.optWidth), i = e.optWidth / e.optHeight, t.height < e.optHeight || t.width < e.optWidth ? (e.trgHeight = e.srcHeight, e.trgWidth = e.srcWidth) : n > i ? (e.srcHeight = t.height, e.srcWidth = e.srcHeight * i) : (e.srcWidth = t.width, e.srcHeight = e.srcWidth / i), e.srcX = (t.width - e.srcWidth) / 2, e.srcY = (t.height - e.srcHeight) / 2, e
            },
            drop: function() {
                return this.element.classList.remove("dz-drag-hover")
            },
            dragstart: s,
            dragend: function() {
                return this.element.classList.remove("dz-drag-hover")
            },
            dragenter: function() {
                return this.element.classList.add("dz-drag-hover")
            },
            dragover: function() {
                return this.element.classList.add("dz-drag-hover")
            },
            dragleave: function() {
                return this.element.classList.remove("dz-drag-hover")
            },
            paste: s,
            reset: function() {
                return this.element.classList.remove("dz-started")
            },
            addedfile: function(t) {
                var e, i, r, o, s, a, l, u, c, d, h, p, f;
                if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), this.previewsContainer) {
                    for (t.previewElement = n.createElement(this.options.previewTemplate.trim()), t.previewTemplate = t.previewElement, this.previewsContainer.appendChild(t.previewElement), d = t.previewElement.querySelectorAll("[data-dz-name]"), o = 0, l = d.length; l > o; o++)
                        e = d[o], e.textContent = this._renameFilename(t.name);
                    for (h = t.previewElement.querySelectorAll("[data-dz-size]"), s = 0, u = h.length; u > s; s++)
                        e = h[s], e.innerHTML = this.filesize(t.size);
                    for (this.options.addRemoveLinks && (t._removeLink = n.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>' + this.options.dictRemoveFile + "</a>"), t.previewElement.appendChild(t._removeLink)), i = function(e) {
                        return function(i) {
                            return i.preventDefault(), i.stopPropagation(), t.status === n.UPLOADING ? n.confirm(e.options.dictCancelUploadConfirmation, function() {
                                return e.removeFile(t)
                            }) : e.options.dictRemoveFileConfirmation ? n.confirm(e.options.dictRemoveFileConfirmation, function() {
                                return e.removeFile(t)
                            }) : e.removeFile(t)
                        }
                    }(this), p = t.previewElement.querySelectorAll("[data-dz-remove]"), f = [], a = 0, c = p.length; c > a; a++)
                        r = p[a], f.push(r.addEventListener("click", i));
                    return f
                }
            },
            removedfile: function(t) {
                var e;
                return t.previewElement && null != (e = t.previewElement) && e.parentNode.removeChild(t.previewElement), this._updateMaxFilesReachedClass()
            },
            thumbnail: function(t, e) {
                var n, i, r, o;
                if (t.previewElement) {
                    for (t.previewElement.classList.remove("dz-file-preview"), o = t.previewElement.querySelectorAll("[data-dz-thumbnail]"), i = 0, r = o.length; r > i; i++)
                        n = o[i], n.alt = t.name, n.src = e;
                    return setTimeout(function() {
                        return function() {
                            return t.previewElement.classList.add("dz-image-preview")
                        }
                    }(this), 1)
                }
            },
            error: function(t, e) {
                var n, i, r, o, s;
                if (t.previewElement) {
                    for (t.previewElement.classList.add("dz-error"), "String" != typeof e && e.error && (e = e.error), o = t.previewElement.querySelectorAll("[data-dz-errormessage]"), s = [], i = 0, r = o.length; r > i; i++)
                        n = o[i], s.push(n.textContent = e);
                    return s
                }
            },
            errormultiple: s,
            processing: function(t) {
                return t.previewElement && (t.previewElement.classList.add("dz-processing"), t._removeLink) ? t._removeLink.textContent = this.options.dictCancelUpload : void 0
            },
            processingmultiple: s,
            uploadprogress: function(t, e) {
                var n, i, r, o, s;
                if (t.previewElement) {
                    for (o = t.previewElement.querySelectorAll("[data-dz-uploadprogress]"), s = [], i = 0, r = o.length; r > i; i++)
                        n = o[i], "PROGRESS" === n.nodeName ? s.push(n.value = e) : s.push(n.style.width = "" + e + "%");
                    return s
                }
            },
            totaluploadprogress: s,
            sending: s,
            sendingmultiple: s,
            success: function(t) {
                return t.previewElement ? t.previewElement.classList.add("dz-success") : void 0
            },
            successmultiple: s,
            canceled: function(t) {
                return this.emit("error", t, "Upload canceled.")
            },
            canceledmultiple: s,
            complete: function(t) {
                return t._removeLink && (t._removeLink.textContent = this.options.dictRemoveFile), t.previewElement ? t.previewElement.classList.add("dz-complete") : void 0
            },
            completemultiple: s,
            maxfilesexceeded: s,
            maxfilesreached: s,
            queuecomplete: s,
            addedfiles: s,
            previewTemplate: '<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>'
        }, i = function() {
            var t, e, n, i, r, o, s;
            for (i = arguments[0], n = 2 <= arguments.length ? l.call(arguments, 1) : [], o = 0, s = n.length; s > o; o++) {
                e = n[o];
                for (t in e)
                    r = e[t], i[t] = r
            }
            return i
        }, n.prototype.getAcceptedFiles = function() {
            var t, e, n, i, r;
            for (i = this.files, r = [], e = 0, n = i.length; n > e; e++)
                t = i[e], t.accepted && r.push(t);
            return r
        }, n.prototype.getRejectedFiles = function() {
            var t, e, n, i, r;
            for (i = this.files, r = [], e = 0, n = i.length; n > e; e++)
                t = i[e], t.accepted || r.push(t);
            return r
        }, n.prototype.getFilesWithStatus = function(t) {
            var e, n, i, r, o;
            for (r = this.files, o = [], n = 0, i = r.length; i > n; n++)
                e = r[n], e.status === t && o.push(e);
            return o
        }, n.prototype.getQueuedFiles = function() {
            return this.getFilesWithStatus(n.QUEUED)
        }, n.prototype.getUploadingFiles = function() {
            return this.getFilesWithStatus(n.UPLOADING)
        }, n.prototype.getAddedFiles = function() {
            return this.getFilesWithStatus(n.ADDED)
        }, n.prototype.getActiveFiles = function() {
            var t, e, i, r, o;
            for (r = this.files, o = [], e = 0, i = r.length; i > e; e++)
                t = r[e], t.status !== n.UPLOADING && t.status !== n.QUEUED || o.push(t);
            return o
        }, n.prototype.init = function() {
            var t, e, i, r, o, s, a;
            for ("form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data"), this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message") && this.element.appendChild(n.createElement('<div class="dz-default dz-message"><span>' + this.options.dictDefaultMessage + "</span></div>")), this.clickableElements.length && (i = function(t) {
                return function() {
                    return t.hiddenFileInput && t.hiddenFileInput.parentNode.removeChild(t.hiddenFileInput), t.hiddenFileInput = document.createElement("input"), t.hiddenFileInput.setAttribute("type", "file"), (null == t.options.maxFiles || t.options.maxFiles > 1) && t.hiddenFileInput.setAttribute("multiple", "multiple"), t.hiddenFileInput.className = "dz-hidden-input", null != t.options.acceptedFiles && t.hiddenFileInput.setAttribute("accept", t.options.acceptedFiles), null != t.options.capture && t.hiddenFileInput.setAttribute("capture", t.options.capture), t.hiddenFileInput.style.visibility = "hidden", t.hiddenFileInput.style.position = "absolute", t.hiddenFileInput.style.top = "0", t.hiddenFileInput.style.left = "0", t.hiddenFileInput.style.height = "0", t.hiddenFileInput.style.width = "0", document.querySelector(t.options.hiddenInputContainer).appendChild(t.hiddenFileInput), t.hiddenFileInput.addEventListener("change", function() {
                        var e, n, r, o;
                        if (n = t.hiddenFileInput.files, n.length)
                            for (r = 0, o = n.length; o > r; r++)
                                e = n[r], t.addFile(e);
                        return t.emit("addedfiles", n), i()
                    })
                }
            }(this))(), this.URL = null != (s = window.URL) ? s : window.webkitURL, a = this.events, r = 0, o = a.length; o > r; r++)
                t = a[r], this.on(t, this.options[t]);
            return this.on("uploadprogress", function(t) {
                return function() {
                    return t.updateTotalUploadProgress()
                }
            }(this)), this.on("removedfile", function(t) {
                return function() {
                    return t.updateTotalUploadProgress()
                }
            }(this)), this.on("canceled", function(t) {
                return function(e) {
                    return t.emit("complete", e)
                }
            }(this)), this.on("complete", function(t) {
                return function() {
                    return 0 === t.getAddedFiles().length && 0 === t.getUploadingFiles().length && 0 === t.getQueuedFiles().length ? setTimeout(function() {
                        return t.emit("queuecomplete")
                    }, 0) : void 0
                }
            }(this)), e = function(t) {
                return t.stopPropagation(), t.preventDefault ? t.preventDefault() : t.returnValue=!1
            }, this.listeners = [{
                element: this.element,
                events: {
                    dragstart: function(t) {
                        return function(e) {
                            return t.emit("dragstart", e)
                        }
                    }(this),
                    dragenter: function(t) {
                        return function(n) {
                            return e(n), t.emit("dragenter", n)
                        }
                    }(this),
                    dragover: function(t) {
                        return function(n) {
                            var i;
                            try {
                                i = n.dataTransfer.effectAllowed
                            } catch (r) {}
                            return n.dataTransfer.dropEffect = "move" === i || "linkMove" === i ? "move" : "copy", e(n), t.emit("dragover", n)
                        }
                    }(this),
                    dragleave: function(t) {
                        return function(e) {
                            return t.emit("dragleave", e)
                        }
                    }(this),
                    drop: function(t) {
                        return function(n) {
                            return e(n), t.drop(n)
                        }
                    }(this),
                    dragend: function(t) {
                        return function(e) {
                            return t.emit("dragend", e)
                        }
                    }(this)
                }
            }
            ], this.clickableElements.forEach(function(t) {
                return function(e) {
                    return t.listeners.push({
                        element: e,
                        events: {
                            click: function(i) {
                                return (e !== t.element || i.target === t.element || n.elementInside(i.target, t.element.querySelector(".dz-message"))) && t.hiddenFileInput.click(), !0
                            }
                        }
                    })
                }
            }(this)), this.enable(), this.options.init.call(this)
        }, n.prototype.destroy = function() {
            var t;
            return this.disable(), this.removeAllFiles(!0), (null != (t = this.hiddenFileInput) ? t.parentNode : void 0) && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), this.hiddenFileInput = null), delete this.element.dropzone, n.instances.splice(n.instances.indexOf(this), 1)
        }, n.prototype.updateTotalUploadProgress = function() {
            var t, e, n, i, r, o, s, a;
            if (i = 0, n = 0, t = this.getActiveFiles(), t.length) {
                for (a = this.getActiveFiles(), o = 0, s = a.length; s > o; o++)
                    e = a[o], i += e.upload.bytesSent, n += e.upload.total;
                r = 100 * i / n
            } else 
                r = 100;
            return this.emit("totaluploadprogress", r, n, i)
        }, n.prototype._getParamName = function(t) {
            return "function" == typeof this.options.paramName ? this.options.paramName(t) : "" + this.options.paramName + (this.options.uploadMultiple ? "[" + t + "]" : "")
        }, n.prototype._renameFilename = function(t) {
            return "function" != typeof this.options.renameFilename ? t : this.options.renameFilename(t)
        }, n.prototype.getFallbackForm = function() {
            var t, e, i, r;
            return (t = this.getExistingFallback()) ? t : (i = '<div class="dz-fallback">', this.options.dictFallbackText && (i += "<p>" + this.options.dictFallbackText + "</p>"), i += '<input type="file" name="' + this._getParamName(0) + '" ' + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + ' /><input type="submit" value="Upload!"></div>', e = n.createElement(i), "FORM" !== this.element.tagName ? (r = n.createElement('<form action="' + this.options.url + '" enctype="multipart/form-data" method="' + this.options.method + '"></form>'), r.appendChild(e)) : (this.element.setAttribute("enctype", "multipart/form-data"), this.element.setAttribute("method", this.options.method)), null != r ? r : e)
        }, n.prototype.getExistingFallback = function() {
            var t, e, n, i, r, o;
            for (e = function(t) {
                var e, n, i;
                for (n = 0, i = t.length; i > n; n++)
                    if (e = t[n], /(^| )fallback($| )/.test(e.className))
                        return e
            }, o = ["div", "form"], i = 0, r = o.length; r > i; i++)
                if (n = o[i], t = e(this.element.getElementsByTagName(n)))
                    return t
        }, n.prototype.setupEventListeners = function() {
            var t, e, n, i, r, o, s;
            for (o = this.listeners, s = [], i = 0, r = o.length; r > i; i++)
                t = o[i], s.push(function() {
                    var i, r;
                    i = t.events, r = [];
                    for (e in i)
                        n = i[e], r.push(t.element.addEventListener(e, n, !1));
                        return r
                    }());
            return s
        }, n.prototype.removeEventListeners = function() {
            var t, e, n, i, r, o, s;
            for (o = this.listeners, s = [], i = 0, r = o.length; r > i; i++)
                t = o[i], s.push(function() {
                    var i, r;
                    i = t.events, r = [];
                    for (e in i)
                        n = i[e], r.push(t.element.removeEventListener(e, n, !1));
                        return r
                    }());
            return s
        }, n.prototype.disable = function() {
            var t, e, n, i, r;
            for (this.clickableElements.forEach(function(t) {
                return t.classList.remove("dz-clickable")
            }), this.removeEventListeners(), i = this.files, r = [], e = 0, n = i.length; n > e; e++)
                t = i[e], r.push(this.cancelUpload(t));
            return r
        }, n.prototype.enable = function() {
            return this.clickableElements.forEach(function(t) {
                return t.classList.add("dz-clickable")
            }), this.setupEventListeners()
        }, n.prototype.filesize = function(t) {
            var e, n, i, r, o, s, a, l;
            if (i = 0, r = "b", t > 0) {
                for (s = ["TB", "GB", "MB", "KB", "b"], n = a = 0, l = s.length; l > a; n=++a)
                    if (o = s[n], e = Math.pow(this.options.filesizeBase, 4 - n) / 10, t >= e) {
                        i = t / Math.pow(this.options.filesizeBase, 4 - n), r = o;
                        break
                    }
                i = Math.round(10 * i) / 10
            }
            return "<strong>" + i + "</strong> " + r
        }, n.prototype._updateMaxFilesReachedClass = function() {
            return null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached")
        }, n.prototype.drop = function(t) {
            var e, n;
            t.dataTransfer && (this.emit("drop", t), e = t.dataTransfer.files, this.emit("addedfiles", e), e.length && (n = t.dataTransfer.items, n && n.length && null != n[0].webkitGetAsEntry ? this._addFilesFromItems(n) : this.handleFiles(e)))
        }, n.prototype.paste = function(t) {
            var e, n;
            if (null != (null != t && null != (n = t.clipboardData) ? n.items : void 0))
                return this.emit("paste", t), e = t.clipboardData.items, e.length ? this._addFilesFromItems(e) : void 0
        }, n.prototype.handleFiles = function(t) {
            var e, n, i, r;
            for (r = [], n = 0, i = t.length; i > n; n++)
                e = t[n], r.push(this.addFile(e));
            return r
        }, n.prototype._addFilesFromItems = function(t) {
            var e, n, i, r, o;
            for (o = [], i = 0, r = t.length; r > i; i++)
                n = t[i], null != n.webkitGetAsEntry && (e = n.webkitGetAsEntry()) ? e.isFile ? o.push(this.addFile(n.getAsFile())) : e.isDirectory ? o.push(this._addFilesFromDirectory(e, e.name)) : o.push(void 0) : null != n.getAsFile && (null == n.kind || "file" === n.kind) ? o.push(this.addFile(n.getAsFile())) : o.push(void 0);
            return o
        }, n.prototype._addFilesFromDirectory = function(t, e) {
            var n, i, r;
            return n = t.createReader(), i = function(t) {
                return "undefined" != typeof console && null !== console && "function" == typeof console.log ? console.log(t) : void 0
            }, (r = function(t) {
                return function() {
                    return n.readEntries(function(n) {
                        var i, o, s;
                        if (n.length > 0) {
                            for (o = 0, s = n.length; s > o; o++)
                                i = n[o], i.isFile ? i.file(function(n) {
                                    return t.options.ignoreHiddenFiles && "." === n.name.substring(0, 1) ? void 0 : (n.fullPath = "" + e + "/" + n.name, t.addFile(n))
                                }) : i.isDirectory && t._addFilesFromDirectory(i, "" + e + "/" + i.name);
                            r()
                        }
                        return null
                    }, i)
                }
            }(this))()
        }, n.prototype.accept = function(t, e) {
            return t.size > 1024 * this.options.maxFilesize * 1024 ? e(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(t.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : n.isValidFile(t, this.options.acceptedFiles) ? null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (e(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), this.emit("maxfilesexceeded", t)) : this.options.accept.call(this, t, e) : e(this.options.dictInvalidFileType)
        }, n.prototype.addFile = function(t) {
            return t.upload = {
                progress: 0,
                total: t.size,
                bytesSent: 0
            }, this.files.push(t), t.status = n.ADDED, this.emit("addedfile", t), this._enqueueThumbnail(t), this.accept(t, function(e) {
                return function(n) {
                    return n ? (t.accepted=!1, e._errorProcessing([t], n)) : (t.accepted=!0, e.options.autoQueue && e.enqueueFile(t)), e._updateMaxFilesReachedClass()
                }
            }(this))
        }, n.prototype.enqueueFiles = function(t) {
            var e, n, i;
            for (n = 0, i = t.length; i > n; n++)
                e = t[n], this.enqueueFile(e);
            return null
        }, n.prototype.enqueueFile = function(t) {
            if (t.status !== n.ADDED || t.accepted!==!0)
                throw new Error("This file can't be queued because it has already been processed or was rejected.");
            return t.status = n.QUEUED, this.options.autoProcessQueue ? setTimeout(function(t) {
                return function() {
                    return t.processQueue()
                }
            }(this), 0) : void 0
        }, n.prototype._thumbnailQueue = [], n.prototype._processingThumbnail=!1, n.prototype._enqueueThumbnail = function(t) {
            return this.options.createImageThumbnails && t.type.match(/image.*/) && t.size <= 1024 * this.options.maxThumbnailFilesize * 1024 ? (this._thumbnailQueue.push(t), setTimeout(function(t) {
                return function() {
                    return t._processThumbnailQueue()
                }
            }(this), 0)) : void 0
        }, n.prototype._processThumbnailQueue = function() {
            return this._processingThumbnail || 0 === this._thumbnailQueue.length ? void 0 : (this._processingThumbnail=!0, this.createThumbnail(this._thumbnailQueue.shift(), function(t) {
                return function() {
                    return t._processingThumbnail=!1, t._processThumbnailQueue()
                }
            }(this)))
        }, n.prototype.removeFile = function(t) {
            return t.status === n.UPLOADING && this.cancelUpload(t), this.files = a(this.files, t), this.emit("removedfile", t), 0 === this.files.length ? this.emit("reset") : void 0
        }, n.prototype.removeAllFiles = function(t) {
            var e, i, r, o;
            for (null == t && (t=!1), o = this.files.slice(), i = 0, r = o.length; r > i; i++)
                e = o[i], (e.status !== n.UPLOADING || t) && this.removeFile(e);
            return null
        }, n.prototype.createThumbnail = function(t, e) {
            var n;
            return n = new FileReader, n.onload = function(i) {
                return function() {
                    return "image/svg+xml" === t.type ? (i.emit("thumbnail", t, n.result), void(null != e && e())) : i.createThumbnailFromUrl(t, n.result, e)
                }
            }(this), n.readAsDataURL(t)
        }, n.prototype.createThumbnailFromUrl = function(t, e, n, i) {
            var r;
            return r = document.createElement("img"), i && (r.crossOrigin = i), r.onload = function(e) {
                return function() {
                    var i, s, a, l, u, c, d, h;
                    return t.width = r.width, t.height = r.height, a = e.options.resize.call(e, t), null == a.trgWidth && (a.trgWidth = a.optWidth), null == a.trgHeight && (a.trgHeight = a.optHeight), i = document.createElement("canvas"), s = i.getContext("2d"), i.width = a.trgWidth, i.height = a.trgHeight, o(s, r, null != (u = a.srcX) ? u : 0, null != (c = a.srcY) ? c : 0, a.srcWidth, a.srcHeight, null != (d = a.trgX) ? d : 0, null != (h = a.trgY) ? h : 0, a.trgWidth, a.trgHeight), l = i.toDataURL("image/png"), e.emit("thumbnail", t, l), null != n ? n() : void 0
                }
            }(this), null != n && (r.onerror = n), r.src = e
        }, n.prototype.processQueue = function() {
            var t, e, n, i;
            if (e = this.options.parallelUploads, n = this.getUploadingFiles().length, t = n, !(n >= e) && (i = this.getQueuedFiles(), i.length > 0)) {
                if (this.options.uploadMultiple)
                    return this.processFiles(i.slice(0, e - n));
                for (; e > t;) {
                    if (!i.length)
                        return;
                    this.processFile(i.shift()), t++
                }
            }
        }, n.prototype.processFile = function(t) {
            return this.processFiles([t])
        }, n.prototype.processFiles = function(t) {
            var e, i, r;
            for (i = 0, r = t.length; r > i; i++)
                e = t[i], e.processing=!0, e.status = n.UPLOADING, this.emit("processing", e);
            return this.options.uploadMultiple && this.emit("processingmultiple", t), this.uploadFiles(t)
        }, n.prototype._getFilesWithXhr = function(t) {
            var e, n;
            return n = function() {
                var n, i, r, o;
                for (r = this.files, o = [], n = 0, i = r.length; i > n; n++)
                    e = r[n], e.xhr === t && o.push(e);
                return o
            }.call(this)
        }, n.prototype.cancelUpload = function(t) {
            var e, i, r, o, s, a, l;
            if (t.status === n.UPLOADING) {
                for (i = this._getFilesWithXhr(t.xhr), r = 0, s = i.length; s > r; r++)
                    e = i[r], e.status = n.CANCELED;
                for (t.xhr.abort(), o = 0, a = i.length; a > o; o++)
                    e = i[o], this.emit("canceled", e);
                this.options.uploadMultiple && this.emit("canceledmultiple", i)
            } else (l = t.status) 
                !== n.ADDED && l !== n.QUEUED || (t.status = n.CANCELED, this.emit("canceled", t), this.options.uploadMultiple && this.emit("canceledmultiple", [t]));
            return this.options.autoProcessQueue ? this.processQueue() : void 0
        }, r = function() {
            var t, e;
            return e = arguments[0], t = 2 <= arguments.length ? l.call(arguments, 1) : [], "function" == typeof e ? e.apply(this, t) : e
        }, n.prototype.uploadFile = function(t) {
            return this.uploadFiles([t])
        }, n.prototype.uploadFiles = function(t) {
            var e, o, s, a, l, u, c, d, h, p, f, m, g, v, y, b, x, _, w, k, C, E, S, T, A, N, L, F, D, M, j, q, R, P;
            for (w = new XMLHttpRequest, k = 0, T = t.length; T > k; k++)
                e = t[k], e.xhr = w;
            m = r(this.options.method, t), x = r(this.options.url, t), w.open(m, x, !0), w.withCredentials=!!this.options.withCredentials, y = null, s = function(n) {
                return function() {
                    var i, r, o;
                    for (o = [], i = 0, r = t.length; r > i; i++)
                        e = t[i], o.push(n._errorProcessing(t, y || n.options.dictResponseError.replace("{{statusCode}}", w.status), w));
                    return o
                }
            }(this), b = function(n) {
                return function(i) {
                    var r, o, s, a, l, u, c, d, h;
                    if (null != i)
                        for (o = 100 * i.loaded / i.total, s = 0, u = t.length; u > s; s++)
                            e = t[s], e.upload = {
                                progress: o,
                                total: i.total,
                                bytesSent: i.loaded
                            };
                    else {
                        for (r=!0, o = 100, a = 0, c = t.length; c > a; a++)
                            e = t[a], 100 === e.upload.progress && e.upload.bytesSent === e.upload.total || (r=!1), e.upload.progress = o, e.upload.bytesSent = e.upload.total;
                        if (r)
                            return 
                    }
                    for (h = [], l = 0, d = t.length; d > l; l++)
                        e = t[l], h.push(n.emit("uploadprogress", e, o, e.upload.bytesSent));
                    return h
                }
            }(this), w.onload = function(e) {
                return function(i) {
                    var r;
                    if (t[0].status !== n.CANCELED && 4 === w.readyState) {
                        if (y = w.responseText, w.getResponseHeader("content-type")&&~w.getResponseHeader("content-type").indexOf("application/json"))
                            try {
                                y = JSON.parse(y)
                            } catch (o) {
                            i = o, y = "Invalid JSON response from server."
                        }
                        return b(), 200 <= (r = w.status) && 300 > r ? e._finished(t, y, i) : s()
                    }
                }
            }(this), w.onerror = function() {
                return function() {
                    return t[0].status !== n.CANCELED ? s() : void 0
                }
            }(this), v = null != (D = w.upload) ? D : w, v.onprogress = b, u = {
                Accept: "application/json",
                "Cache-Control": "no-cache",
                "X-Requested-With": "XMLHttpRequest"
            }, this.options.headers && i(u, this.options.headers);
            for (a in u)
                l = u[a], l && w.setRequestHeader(a, l);
            if (o = new FormData, this.options.params) {
                M = this.options.params;
                for (f in M)
                    _ = M[f], o.append(f, _)
            }
            for (C = 0, A = t.length; A > C; C++)
                e = t[C], this.emit("sending", e, w, o);
            if (this.options.uploadMultiple && this.emit("sendingmultiple", t, w, o), "FORM" === this.element.tagName)
                for (j = this.element.querySelectorAll("input, textarea, select, button"), E = 0, N = j.length; N > E; E++)
                    if (d = j[E], h = d.getAttribute("name"), p = d.getAttribute("type"), "SELECT" === d.tagName && d.hasAttribute("multiple"))
                        for (q = d.options, S = 0, L = q.length; L > S; S++)
                            g = q[S], g.selected && o.append(h, g.value);
                    else (!p || "checkbox" !== (R = p.toLowerCase()) && "radio" !== R || d.checked) 
                        && o.append(h, d.value);
            for (c = F = 0, P = t.length - 1; P >= 0 ? P >= F : F >= P; c = P >= 0?++F : --F)
                o.append(this._getParamName(c), t[c], this._renameFilename(t[c].name));
            return this.submitRequest(w, o, t)
        }, n.prototype.submitRequest = function(t, e) {
            return t.send(e)
        }, n.prototype._finished = function(t, e, i) {
            var r, o, s;
            for (o = 0, s = t.length; s > o; o++)
                r = t[o], r.status = n.SUCCESS, this.emit("success", r, e, i), this.emit("complete", r);
            return this.options.uploadMultiple && (this.emit("successmultiple", t, e, i), this.emit("completemultiple", t)), this.options.autoProcessQueue ? this.processQueue() : void 0
        }, n.prototype._errorProcessing = function(t, e, i) {
            var r, o, s;
            for (o = 0, s = t.length; s > o; o++)
                r = t[o], r.status = n.ERROR, this.emit("error", r, e, i), this.emit("complete", r);
            return this.options.uploadMultiple && (this.emit("errormultiple", t, e, i), this.emit("completemultiple", t)), this.options.autoProcessQueue ? this.processQueue() : void 0
        }, n
    }(e), t.version = "4.3.0", t.options = {}, t.optionsForElement = function(e) {
        return e.getAttribute("id") ? t.options[n(e.getAttribute("id"))] : void 0
    }, t.instances = [], t.forElement = function(t) {
        if ("string" == typeof t && (t = document.querySelector(t)), null == (null != t ? t.dropzone : void 0))
            throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
        return t.dropzone
    }, t.autoDiscover=!0, t.discover = function() {
        var e, n, i, r, o, s;
        for (document.querySelectorAll ? i = document.querySelectorAll(".dropzone") : (i = [], e = function(t) {
            var e, n, r, o;
            for (o = [], n = 0, r = t.length; r > n; n++)
                e = t[n], /(^| )dropzone($| )/.test(e.className) ? o.push(i.push(e)) : o.push(void 0);
            return o
        }, e(document.getElementsByTagName("div")), e(document.getElementsByTagName("form"))), s = [], r = 0, o = i.length; o > r; r++)
            n = i[r], t.optionsForElement(n)!==!1 ? s.push(new t(n)) : s.push(void 0);
        return s
    }, t.blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i], t.isBrowserSupported = function() {
        var e, n, i, r, o;
        if (e=!0, window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector)
            if ("classList"in document.createElement("a"))
                for (o = t.blacklistedBrowsers, i = 0, r = o.length; r > i; i++)
                    n = o[i], n.test(navigator.userAgent) && (e=!1);
            else 
                e=!1;
        else 
            e=!1;
        return e
    }, a = function(t, e) {
        var n, i, r, o;
        for (o = [], i = 0, r = t.length; r > i; i++)
            n = t[i], n !== e && o.push(n);
        return o
    }, n = function(t) {
        return t.replace(/[\-_](\w)/g, function(t) {
            return t.charAt(1).toUpperCase()
        })
    }, t.createElement = function(t) {
        var e;
        return e = document.createElement("div"), e.innerHTML = t, e.childNodes[0]
    }, t.elementInside = function(t, e) {
        if (t === e)
            return !0;
        for (; t = t.parentNode;)
            if (t === e)
                return !0;
        return !1
    }, t.getElement = function(t, e) {
        var n;
        if ("string" == typeof t ? n = document.querySelector(t) : null != t.nodeType && (n = t), null == n)
            throw new Error("Invalid `" + e + "` option provided. Please provide a CSS selector or a plain HTML element.");
        return n
    }, t.getElements = function(t, e) {
        var n, i, r, o, s, a, l, u;
        if (t instanceof Array) {
            r = [];
            try {
                for (o = 0, a = t.length; a > o; o++)
                    i = t[o], r.push(this.getElement(i, e))
                } catch (c) {
                n = c, r = null
            }
        } else if ("string" == typeof t)
            for (r = [], u = document.querySelectorAll(t),
            s = 0, l = u.length; l > s; s++)
                i = u[s], r.push(i);
        else 
            null != t.nodeType && (r = [t]);
        if (null == r ||!r.length)
            throw new Error("Invalid `" + e + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
        return r
    }, t.confirm = function(t, e, n) {
        return window.confirm(t) ? e() : null != n ? n() : void 0
    }, t.isValidFile = function(t, e) {
        var n, i, r, o, s;
        if (!e)
            return !0;
        for (e = e.split(","), i = t.type, n = i.replace(/\/.*$/, ""), o = 0, s = e.length; s > o; o++)
            if (r = e[o], r = r.trim(), "." === r.charAt(0)) {
                if ( - 1 !== t.name.toLowerCase().indexOf(r.toLowerCase(), t.name.length - r.length))
                    return !0
            } else if (/\/\*$/.test(r)) {
                if (n === r.replace(/\/.*$/, ""))
                    return !0
            } else if (i === r)
                return !0;
        return !1
    }, "undefined" != typeof jQuery && null !== jQuery && (jQuery.fn.dropzone = function(e) {
        return this.each(function() {
            return new t(this, e)
        })
    }), "undefined" != typeof module && null !== module ? module.exports = t : window.Dropzone = t, t.ADDED = "added", t.QUEUED = "queued", t.ACCEPTED = t.QUEUED, t.UPLOADING = "uploading", t.PROCESSING = t.UPLOADING, t.CANCELED = "canceled", t.ERROR = "error", t.SUCCESS = "success", r = function(t) {
        var e, n, i, r, o, s, a, l, u, c;
        for (a = t.naturalWidth, s = t.naturalHeight, n = document.createElement("canvas"), n.width = 1, n.height = s, i = n.getContext("2d"), i.drawImage(t, 0, 0), r = i.getImageData(0, 0, 1, s).data, c = 0, o = s, l = s; l > c;)
            e = r[4 * (l - 1) + 3], 0 === e ? o = l : c = l, l = o + c>>1;
        return u = l / s, 0 === u ? 1 : u
    }, o = function(t, e, n, i, o, s, a, l, u, c) {
        var d;
        return d = r(e), t.drawImage(e, n, i, o, s, a, l, u, c / d)
    }, i = function(t, e) {
        var n, i, r, o, s, a, l, u, c;
        if (r=!1, c=!0, i = t.document, u = i.documentElement, n = i.addEventListener ? "addEventListener" : "attachEvent", l = i.addEventListener ? "removeEventListener" : "detachEvent", a = i.addEventListener ? "" : "on", o = function(n) {
            return "readystatechange" !== n.type || "complete" === i.readyState ? (("load" === n.type ? t : i)[l](a + n.type, o, !1), !r && (r=!0) ? e.call(t, n.type || n) : void 0) : void 0
        }, s = function() {
            var t;
            try {
                u.doScroll("left")
            } catch (e) {
                return t = e, void setTimeout(s, 50)
            }
            return o("poll")
        }, "complete" !== i.readyState) {
            if (i.createEventObject && u.doScroll) {
                try {
                    c=!t.frameElement
                } catch (d) {}
                c && s()
            }
            return i[n](a + "DOMContentLoaded", o, !1), i[n](a + "readystatechange", o, !1), t[n](a + "load", o, !1)
        }
    }, t._autoDiscoverFunction = function() {
        return t.autoDiscover ? t.discover() : void 0
    }, i(window, t._autoDiscoverFunction)
}.call(this), function(t) {
    var e, n, i = "0.4.2", r = "hasOwnProperty", o = /[\.\/]/, s = /\s*,\s*/, a = "*", l = function(t, e) {
        return t - e
    }, u = {
        n: {}
    }, c = function() {
        for (var t = 0, e = this.length; e > t; t++)
            if ("undefined" != typeof this[t])
                return this[t]
    }, d = function() {
        for (var t = this.length; --t;)
            if ("undefined" != typeof this[t])
                return this[t]
    }, h = function(t, i) {
        t = String(t);
        var r, o = n, s = Array.prototype.slice.call(arguments, 2), a = h.listeners(t), u = 0, p = [], f = {}, m = [], g = e;
        m.firstDefined = c, m.lastDefined = d, e = t, n = 0;
        for (var v = 0, y = a.length; y > v; v++)
            "zIndex"in a[v] && (p.push(a[v].zIndex), a[v].zIndex < 0 && (f[a[v].zIndex] = a[v]));
        for (p.sort(l); p[u] < 0;)
            if (r = f[p[u++]], m.push(r.apply(i, s)), n)
                return n = o, m;
        for (v = 0; y > v; v++)
            if (r = a[v], "zIndex"in r)
                if (r.zIndex == p[u]) {
                    if (m.push(r.apply(i, s)), n)
                        break;
                        do 
                            if (u++, r = f[p[u]], r && m.push(r.apply(i, s)), n)
                                break;
                                while (r)
                                } else 
                                    f[r.zIndex] = r;
                        else if (m.push(r.apply(i, s)), n)
                            break;
                            return n = o, e = g, m
            };
    h._events = u, h.listeners = function(t) {
        var e, n, i, r, s, l, c, d, h = t.split(o), p = u, f = [p], m = [];
        for (r = 0, s = h.length; s > r; r++) {
            for (d = [], l = 0, c = f.length; c > l; l++)
                for (p = f[l].n, n = [p[h[r]], p[a]], i = 2; i--;)
                    e = n[i], e && (d.push(e), m = m.concat(e.f || []));
            f = d
        }
        return m
    }, h.on = function(t, e) {
        if (t = String(t), "function" != typeof e)
            return function() {};
        for (var n = t.split(s), i = 0, r = n.length; r > i; i++)
            !function(t) {
                for (var n, i = t.split(o), r = u, s = 0, a = i.length; a > s; s++)
                    r = r.n, r = r.hasOwnProperty(i[s]) && r[i[s]] || (r[i[s]] = {
                        n: {}
                    });
                    for (r.f = r.f || [], s = 0, a = r.f.length; a > s; s++)
                        if (r.f[s] == e) {
                            n=!0;
                            break
                        }
                        !n && r.f.push(e)
                    }(n[i]);
        return function(t) {
            + t ==+ t && (e.zIndex =+ t)
        }
    }, h.f = function(t) {
        var e = [].slice.call(arguments, 1);
        return function() {
            h.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)))
        }
    }, h.stop = function() {
        n = 1
    }, h.nt = function(t) {
        return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(e) : e
    }, h.nts = function() {
        return e.split(o)
    }, h.off = h.unbind = function(t, e) {
        if (!t)
            return void(h._events = u = {
                n: {}
            });
        var n = t.split(s);
        if (n.length > 1)
            for (var i = 0, l = n.length; l > i; i++)
                h.off(n[i], e);
        else {
            n = t.split(o);
            var c, d, p, i, l, f, m, g = [u];
            for (i = 0, l = n.length; l > i; i++)
                for (f = 0; f < g.length; f += p.length - 2) {
                    if (p = [f, 1], c = g[f].n, n[i] != a)
                        c[n[i]] && p.push(c[n[i]]);
                    else 
                        for (d in c)
                            c[r](d) && p.push(c[d]);
                            g.splice.apply(g, p)
                        }
            for (i = 0, l = g.length; l > i; i++)
                for (c = g[i]; c.n;) {
                    if (e) {
                        if (c.f) {
                            for (f = 0, m = c.f.length; m > f; f++)
                                if (c.f[f] == e) {
                                    c.f.splice(f, 1);
                                    break
                                }
                                !c.f.length && delete c.f
                        }
                        for (d in c.n)
                            if (c.n[r](d) && c.n[d].f) {
                                var v = c.n[d].f;
                                for (f = 0, m = v.length; m > f; f++)
                                    if (v[f] == e) {
                                        v.splice(f, 1);
                                        break
                                    }
                                    !v.length && delete c.n[d].f
                            }
                    } else {
                        delete c.f;
                        for (d in c.n)
                            c.n[r](d) && c.n[d].f && delete c.n[d].f
                    }
                    c = c.n
                }
            }
    }, h.once = function(t, e) {
        var n = function() {
            return h.unbind(t, n), e.apply(this, arguments)
        };
        return h.on(t, n)
    }, h.version = i, h.toString = function() {
        return "You are running Eve " + i
    }, "undefined" != typeof module && module.exports ? module.exports = h : "function" == typeof define && define.amd ? define("eve", [], function() {
        return h
    }) : t.eve = h
}(this), function(t, e) {
    if ("function" == typeof define && define.amd)
        define(["eve"], function(n) {
            return e(t, n)
        });
    else if ("undefined" != typeof exports) {
        var n = require("eve");
        module.exports = e(t, n)
    } else 
        e(t, t.eve)
}(window || this, function(t, e) {
    var n = function(e) {
        var n = {}, i = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(t) {
            setTimeout(t, 16)
        }, r = Array.isArray || function(t) {
            return t instanceof Array || "[object Array]" == Object.prototype.toString.call(t)
        }, o = 0, s = "M" + ( + new Date).toString(36), a = function() {
            return s + (o++).toString(36)
        }, l = Date.now || function() {
            return + new Date
        }, u = function(t) {
            var e = this;
            if (null == t)
                return e.s;
            var n = e.s - t;
            e.b += e.dur * n, e.B += e.dur * n, e.s = t
        }, c = function(t) {
            var e = this;
            return null == t ? e.spd : void(e.spd = t)
        }, d = function(t) {
            var e = this;
            return null == t ? e.dur : (e.s = e.s * t / e.dur, void(e.dur = t))
        }, h = function() {
            var t = this;
            delete n[t.id], t.update(), e("mina.stop." + t.id, t)
        }, p = function() {
            var t = this;
            t.pdif || (delete n[t.id], t.update(), t.pdif = t.get() - t.b)
        }, f = function() {
            var t = this;
            t.pdif && (t.b = t.get() - t.pdif, delete t.pdif, n[t.id] = t)
        }, m = function() {
            var t, e = this;
            if (r(e.start)) {
                t = [];
                for (var n = 0, i = e.start.length; i > n; n++)
                    t[n] =+ e.start[n] + (e.end[n] - e.start[n]) * e.easing(e.s)
            } else 
                t =+ e.start + (e.end - e.start) * e.easing(e.s);
            e.set(t)
        }, g = function() {
            var t = 0;
            for (var r in n)
                if (n.hasOwnProperty(r)) {
                    var o = n[r], s = o.get();
                    t++, o.s = (s - o.b) / (o.dur / o.spd), o.s >= 1 && (delete n[r], o.s = 1, t--, function(t) {
                        setTimeout(function() {
                            e("mina.finish." + t.id, t)
                        })
                    }(o)), o.update()
                }
            t && i(g)
        }, v = function(t, e, r, o, s, l, y) {
            var b = {
                id: a(),
                start: t,
                end: e,
                b: r,
                s: 0,
                dur: o - r,
                spd: 1,
                get: s,
                set: l,
                easing: y || v.linear,
                status: u,
                speed: c,
                duration: d,
                stop: h,
                pause: p,
                resume: f,
                update: m
            };
            n[b.id] = b;
            var x, _ = 0;
            for (x in n)
                if (n.hasOwnProperty(x) && (_++, 2 == _))
                    break;
            return 1 == _ && i(g), b
        };
        return v.time = l, v.getById = function(t) {
            return n[t] || null
        }, v.linear = function(t) {
            return t
        }, v.easeout = function(t) {
            return Math.pow(t, 1.7)
        }, v.easein = function(t) {
            return Math.pow(t, .48)
        }, v.easeinout = function(t) {
            if (1 == t)
                return 1;
            if (0 == t)
                return 0;
            var e = .48 - t / 1.04, n = Math.sqrt(.1734 + e * e), i = n - e, r = Math.pow(Math.abs(i), 1 / 3) * (0 > i?-1 : 1), o =- n - e, s = Math.pow(Math.abs(o), 1 / 3) * (0 > o?-1 : 1), a = r + s + .5;
            return 3 * (1 - a) * a * a + a * a * a
        }, v.backin = function(t) {
            if (1 == t)
                return 1;
            var e = 1.70158;
            return t * t * ((e + 1) * t - e)
        }, v.backout = function(t) {
            if (0 == t)
                return 0;
            t -= 1;
            var e = 1.70158;
            return t * t * ((e + 1) * t + e) + 1
        }, v.elastic = function(t) {
            return t==!!t ? t : Math.pow(2, - 10 * t) * Math.sin((t - .075) * (2 * Math.PI) / .3) + 1
        }, v.bounce = function(t) {
            var e, n = 7.5625, i = 2.75;
            return 1 / i > t ? e = n * t * t : 2 / i > t ? (t -= 1.5 / i, e = n * t * t + .75) : 2.5 / i > t ? (t -= 2.25 / i, e = n * t * t + .9375) : (t -= 2.625 / i, e = n * t * t + .984375), e
        }, t.mina = v, v
    }("undefined" == typeof e ? function() {} : e), i = function(t) {
        function n(t, e) {
            if (t) {
                if (t.nodeType)
                    return w(t);
                if (r(t, "array") && n.set)
                    return n.set.apply(n, t);
                if (t instanceof y)
                    return t;
                if (null == e)
                    return t = C.doc.querySelector(String(t)), w(t)
            }
            return t = null == t ? "100%" : t, e = null == e ? "100%" : e, new _(t, e)
        }
        function i(t, e) {
            if (e) {
                if ("#text" == t && (t = C.doc.createTextNode(e.text || e["#text"] || "")), "#comment" == t && (t = C.doc.createComment(e.text || e["#text"] || "")), "string" == typeof t && (t = i(t)), "string" == typeof e)
                    return 1 == t.nodeType ? "xlink:" == e.substring(0, 6) ? t.getAttributeNS(U, e.substring(6)) : "xml:" == e.substring(0, 4) ? t.getAttributeNS(V, e.substring(4)) : t.getAttribute(e) : "text" == e ? t.nodeValue : null;
                if (1 == t.nodeType) {
                    for (var n in e)
                        if (e[E](n)) {
                            var r = S(e[n]);
                            r ? "xlink:" == n.substring(0, 6) ? t.setAttributeNS(U, n.substring(6), r) : "xml:" == n.substring(0, 4) ? t.setAttributeNS(V, n.substring(4), r) : t.setAttribute(n, r) : t.removeAttribute(n)
                        }
                } else 
                    "text"in e && (t.nodeValue = e.text)
            } else 
                t = C.doc.createElementNS(V, t);
            return t
        }
        function r(t, e) {
            return e = S.prototype.toLowerCase.call(e), "finite" == e ? isFinite(t) : "array" == e && (t instanceof Array || Array.isArray && Array.isArray(t))?!0 : "null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || q.call(t).slice(8, - 1).toLowerCase() == e
        }
        function o(t) {
            if ("function" == typeof t || Object(t) !== t)
                return t;
            var e = new t.constructor;
            for (var n in t)
                t[E](n) && (e[n] = o(t[n]));
            return e
        }
        function s(t, e) {
            for (var n = 0, i = t.length; i > n; n++)
                if (t[n] === e)
                    return t.push(t.splice(n, 1)[0])
        }
        function a(t, e, n) {
            function i() {
                var r = Array.prototype.slice.call(arguments, 0), o = r.join("\u2400"), a = i.cache = i.cache || {}, l = i.count = i.count || [];
                return a[E](o) ? (s(l, o), n ? n(a[o]) : a[o]) : (l.length >= 1e3 && delete a[l.shift()], l.push(o), a[o] = t.apply(e, r), n ? n(a[o]) : a[o])
            }
            return i
        }
        function l(t, e, n, i, r, o) {
            if (null == r) {
                var s = t - n, a = e - i;
                return s || a ? (180 + 180 * N.atan2( - a, - s) / M + 360)%360 : 0
            }
            return l(t, e, r, o) - l(n, i, r, o)
        }
        function u(t) {
            return t%360 * M / 180
        }
        function c(t) {
            return 180 * t / M%360
        }
        function d(t) {
            var e = [];
            return t = t.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function(t, n, i) {
                return i = i.split(/\s*,\s*|\s+/), "rotate" == n && 1 == i.length && i.push(0, 0), "scale" == n && (i.length > 2 ? i = i.slice(0, 2) : 2 == i.length && i.push(0, 0), 1 == i.length && i.push(i[0], 0, 0)), "skewX" == n ? e.push(["m", 1, 0, N.tan(u(i[0])), 1, 0, 0]) : "skewY" == n ? e.push(["m", 1, N.tan(u(i[0])), 0, 1, 0, 0]) : e.push([n.charAt(0)].concat(i)), t
            }), e
        }
        function h(t, e) {
            var i = tt(t), r = new n.Matrix;
            if (i)
                for (var o = 0, s = i.length; s > o; o++) {
                    var a, l, u, c, d, h = i[o], p = h.length, f = S(h[0]).toLowerCase(), m = h[0] != f, g = m ? r.invert(): 0;
                    "t" == f && 2 == p ? r.translate(h[1], 0) : "t" == f && 3 == p ? m ? (a = g.x(0, 0), l = g.y(0, 0), u = g.x(h[1], h[2]), c = g.y(h[1], h[2]), r.translate(u - a, c - l)) : r.translate(h[1], h[2]) : "r" == f ? 2 == p ? (d = d || e, r.rotate(h[1], d.x + d.width / 2, d.y + d.height / 2)) : 4 == p && (m ? (u = g.x(h[2], h[3]), c = g.y(h[2], h[3]), r.rotate(h[1], u, c)) : r.rotate(h[1], h[2], h[3])) : "s" == f ? 2 == p || 3 == p ? (d = d || e, r.scale(h[1], h[p - 1], d.x + d.width / 2, d.y + d.height / 2)) : 4 == p ? m ? (u = g.x(h[2], h[3]), c = g.y(h[2], h[3]), r.scale(h[1], h[1], u, c)) : r.scale(h[1], h[1], h[2], h[3]) : 5 == p && (m ? (u = g.x(h[3], h[4]), c = g.y(h[3], h[4]), r.scale(h[1], h[2], u, c)) : r.scale(h[1], h[2], h[3], h[4])) : "m" == f && 7 == p && r.add(h[1], h[2], h[3], h[4], h[5], h[6])
                }
            return r
        }
        function p(t) {
            var e = t.node.ownerSVGElement && w(t.node.ownerSVGElement) || t.node.parentNode && w(t.node.parentNode) || n.select("svg") || n(0, 0), i = e.select("defs"), r = null == i?!1 : i.node;
            return r || (r = x("defs", e.node).node), r
        }
        function f(t) {
            return t.node.ownerSVGElement && w(t.node.ownerSVGElement) || n.select("svg")
        }
        function m(t, e, n) {
            function r(t) {
                if (null == t)
                    return j;
                if (t ==+ t)
                    return t;
                i(u, {
                    width: t
                });
                try {
                    return u.getBBox().width
                } catch (e) {
                    return 0
                }
            }
            function o(t) {
                if (null == t)
                    return j;
                if (t ==+ t)
                    return t;
                i(u, {
                    height: t
                });
                try {
                    return u.getBBox().height
                } catch (e) {
                    return 0
                }
            }
            function s(i, r) {
                null == e ? l[i] = r(t.attr(i) || 0) : i == e && (l = r(null == n ? t.attr(i) || 0 : n))
            }
            var a = f(t).node, l = {}, u = a.querySelector(".svg---mgr");
            switch (u || (u = i("rect"), i(u, {
                x: - 9e9,
                y: - 9e9,
                width: 10,
                height: 10,
                "class": "svg---mgr",
                fill: "none"
            }), a.appendChild(u)), t.type) {
            case"rect":
                s("rx", r), s("ry", o);
            case"image":
                s("width", r), s("height", o);
            case"text":
                s("x", r), s("y", o);
                break;
            case"circle":
                s("cx", r), s("cy", o), s("r", r);
                break;
            case"ellipse":
                s("cx", r), s("cy", o), s("rx", r), s("ry", o);
                break;
            case"line":
                s("x1", r), s("x2", r), s("y1", o), s("y2", o);
                break;
            case"marker":
                s("refX", r), s("markerWidth", r), s("refY", o), s("markerHeight", o);
                break;
            case"radialGradient":
                s("fx", r), s("fy", o);
                break;
            case"tspan":
                s("dx", r), s("dy", o);
                break;
            default:
                s(e, r)
            }
            return a.removeChild(u), l
        }
        function v(t) {
            r(t, "array") || (t = Array.prototype.slice.call(arguments, 0));
            for (var e = 0, n = 0, i = this.node; this[e];)
                delete this[e++];
            for (e = 0; e < t.length; e++)
                "set" == t[e].type ? t[e].forEach(function(t) {
                    i.appendChild(t.node)
                }) : i.appendChild(t[e].node);
            var o = i.childNodes;
            for (e = 0; e < o.length; e++)
                this[n++] = w(o[e]);
            return this
        }
        function y(t) {
            if (t.snap in X)
                return X[t.snap];
            var e;
            try {
                e = t.ownerSVGElement
            } catch (n) {}
            this.node = t, e && (this.paper = new _(e)), this.type = t.tagName || t.nodeName;
            var i = this.id = W(this);
            if (this.anims = {}, this._ = {
                transform: []
            }, t.snap = i, X[i] = this, "g" == this.type && (this.add = v), this.type in{
                g: 1,
                mask: 1,
                pattern: 1,
                symbol: 1
            })
                for (var r in _.prototype)
                    _.prototype[E](r) && (this[r] = _.prototype[r])
        }
        function b(t) {
            this.node = t
        }
        function x(t, e) {
            var n = i(t);
            e.appendChild(n);
            var r = w(n);
            return r
        }
        function _(t, e) {
            var n, r, o, s = _.prototype;
            if (t && "svg" == t.tagName) {
                if (t.snap in X)
                    return X[t.snap];
                var a = t.ownerDocument;
                n = new y(t), r = t.getElementsByTagName("desc")[0], o = t.getElementsByTagName("defs")[0], r || (r = i("desc"), r.appendChild(a.createTextNode("Created with Snap")), n.node.appendChild(r)), o || (o = i("defs"), n.node.appendChild(o)), n.defs = o;
                for (var l in s)
                    s[E](l) && (n[l] = s[l]);
                n.paper = n.root = n
            } else 
                n = x("svg", C.doc.body), i(n.node, {
                    height: e,
                    version: 1.1,
                    width: t,
                    xmlns: V
                });
            return n
        }
        function w(t) {
            return t ? t instanceof y || t instanceof b ? t : t.tagName && "svg" == t.tagName.toLowerCase() ? new _(t) : t.tagName && "object" == t.tagName.toLowerCase() && "image/svg+xml" == t.type ? new _(t.contentDocument.getElementsByTagName("svg")[0]) : new y(t) : t
        }
        function k(t, e) {
            for (var n = 0, i = t.length; i > n; n++) {
                var r = {
                    type: t[n].type,
                    attr: t[n].attr()
                }, o = t[n].children();
                e.push(r), o.length && k(o, r.childNodes = [])
            }
        }
        n.version = "0.4.0", n.toString = function() {
            return "Snap v" + this.version
        }, n._ = {};
        var C = {
            win: t.window,
            doc: t.window.document
        };
        n._.glob = C;
        var E = "hasOwnProperty", S = String, T = parseFloat, A = parseInt, N = Math, L = N.max, F = N.min, D = N.abs, M = (N.pow, N.PI), j = (N.round, ""), q = Object.prototype.toString, R = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i, P = (n._.separator = /[,\s]+/, /[\s]*,[\s]*/), $ = {
            hs: 1,
            rg: 1
        }, B = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi, H = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi, I = /(-?\d*\.?\d*(?:e[\-+]?\\d+)?)[\s]*,?[\s]*/gi, z = 0, O = "S" + ( + new Date).toString(36), W = function(t) {
            return (t && t.type ? t.type : j) + O + (z++).toString(36)
        }, U = "http://www.w3.org/1999/xlink", V = "http://www.w3.org/2000/svg", X = {};
        n.url = function(t) {
            return "url('#" + t + "')"
        };
        n._.$ = i, n._.id = W, n.format = function() {
            var t = /\{([^\}]+)\}/g, e = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, n = function(t, n, i) {
                var r = i;
                return n.replace(e, function(t, e, n, i, o) {
                    e = e || i, r && (e in r && (r = r[e]), "function" == typeof r && o && (r = r()))
                }), r = (null == r || r == i ? t : r) + ""
            };
            return function(e, i) {
                return S(e).replace(t, function(t, e) {
                    return n(t, e, i)
                })
            }
        }(), n._.clone = o, n._.cacher = a, n.rad = u, n.deg = c, n.sin = function(t) {
            return N.sin(n.rad(t))
        }, n.tan = function(t) {
            return N.tan(n.rad(t))
        }, n.cos = function(t) {
            return N.cos(n.rad(t))
        }, n.asin = function(t) {
            return n.deg(N.asin(t))
        }, n.acos = function(t) {
            return n.deg(N.acos(t))
        }, n.atan = function(t) {
            return n.deg(N.atan(t))
        }, n.atan2 = function(t) {
            return n.deg(N.atan2(t))
        }, n.angle = l, n.len = function(t, e, i, r) {
            return Math.sqrt(n.len2(t, e, i, r))
        }, n.len2 = function(t, e, n, i) {
            return (t - n) * (t - n) + (e - i) * (e - i)
        }, n.closestPoint = function(t, e, n) {
            function i(t) {
                var i = t.x - e, r = t.y - n;
                return i * i + r * r
            }
            for (var r, o, s, a, l = t.node, u = l.getTotalLength(), c = u / l.pathSegList.numberOfItems * .125, d = 1 / 0, h = 0; u >= h; h += c)(a = i(s = l.getPointAtLength(h))
                ) < d && (r = s, o = h, d = a);
            for (c*=.5; c > .5;) {
                var p, f, m, g, v, y;
                (m = o - c) >= 0 && (v = i(p = l.getPointAtLength(m))) < d ? (r = p, o = m, d = v) : (g = o + c) <= u && (y = i(f = l.getPointAtLength(g))) < d ? (r = f, o = g, d = y) : c*=.5
            }
            return r = {
                x: r.x,
                y: r.y,
                length: o,
                distance: Math.sqrt(d)
            }
        }, n.is = r, n.snapTo = function(t, e, n) {
            if (n = r(n, "finite") ? n : 10, r(t, "array")) {
                for (var i = t.length; i--;)
                    if (D(t[i] - e) <= n)
                        return t[i]
            } else {
                t =+ t;
                var o = e%t;
                if (n > o)
                    return e - o;
                if (o > t - n)
                    return e - o + t
            }
            return e
        }, n.getRGB = a(function(t) {
            if (!t || (t = S(t)).indexOf("-") + 1)
                return {
                    r: - 1,
                    g: - 1,
                    b: - 1,
                    hex: "none",
                    error: 1,
                    toString: K
                };
            if ("none" == t)
                return {
                    r: - 1,
                    g: - 1,
                    b: - 1,
                    hex: "none",
                    toString: K
                };
            if (!($[E](t.toLowerCase().substring(0, 2)) || "#" == t.charAt()) && (t = G(t)), !t)
                return {
                    r: - 1,
                    g: - 1,
                    b: - 1,
                    hex: "none",
                    error: 1,
                    toString: K
                };
            var e, i, o, s, a, l, u = t.match(R);
            return u ? (u[2] && (o = A(u[2].substring(5), 16), i = A(u[2].substring(3, 5), 16), e = A(u[2].substring(1, 3), 16)), u[3] && (o = A((a = u[3].charAt(3)) + a, 16), i = A((a = u[3].charAt(2)) + a, 16), e = A((a = u[3].charAt(1)) + a, 16)), u[4] && (l = u[4].split(P), e = T(l[0]), "%" == l[0].slice( - 1) && (e*=2.55), i = T(l[1]), "%" == l[1].slice( - 1) && (i*=2.55), o = T(l[2]), "%" == l[2].slice( - 1) && (o*=2.55), "rgba" == u[1].toLowerCase().slice(0, 4) && (s = T(l[3])), l[3] && "%" == l[3].slice( - 1) && (s/=100)), u[5] ? (l = u[5].split(P), e = T(l[0]), "%" == l[0].slice( - 1) && (e/=100), i = T(l[1]), "%" == l[1].slice( - 1) && (i/=100), o = T(l[2]), "%" == l[2].slice( - 1) && (o/=100), ("deg" == l[0].slice( - 3) || "\xb0" == l[0].slice( - 1)) && (e/=360), "hsba" == u[1].toLowerCase().slice(0, 4) && (s = T(l[3])), l[3] && "%" == l[3].slice( - 1) && (s/=100), n.hsb2rgb(e, i, o, s)) : u[6] ? (l = u[6].split(P), e = T(l[0]), "%" == l[0].slice( - 1) && (e/=100), i = T(l[1]), "%" == l[1].slice( - 1) && (i/=100), o = T(l[2]), "%" == l[2].slice( - 1) && (o/=100), ("deg" == l[0].slice( - 3) || "\xb0" == l[0].slice( - 1)) && (e/=360), "hsla" == u[1].toLowerCase().slice(0, 4) && (s = T(l[3])), l[3] && "%" == l[3].slice( - 1) && (s/=100), n.hsl2rgb(e, i, o, s)) : (e = F(N.round(e), 255), i = F(N.round(i), 255), o = F(N.round(o), 255), s = F(L(s, 0), 1), u = {
                r: e,
                g: i,
                b: o,
                toString: K
            }, u.hex = "#" + (16777216 | o | i<<8 | e<<16).toString(16).slice(1), u.opacity = r(s, "finite") ? s : 1, u)) : {
                r: - 1,
                g: - 1,
                b: - 1,
                hex: "none",
                error: 1,
                toString: K
            }
        }, n), n.hsb = a(function(t, e, i) {
            return n.hsb2rgb(t, e, i).hex
        }), n.hsl = a(function(t, e, i) {
            return n.hsl2rgb(t, e, i).hex
        }), n.rgb = a(function(t, e, n, i) {
            if (r(i, "finite")) {
                var o = N.round;
                return "rgba(" + [o(t), o(e), o(n), + i.toFixed(2)] + ")"
            }
            return "#" + (16777216 | n | e<<8 | t<<16).toString(16).slice(1)
        });
        var G = function(t) {
            var e = C.doc.getElementsByTagName("head")[0] || C.doc.getElementsByTagName("svg")[0], n = "rgb(255, 0, 0)";
            return (G = a(function(t) {
                if ("red" == t.toLowerCase())
                    return n;
                e.style.color = n, e.style.color = t;
                var i = C.doc.defaultView.getComputedStyle(e, j).getPropertyValue("color");
                return i == n ? null : i
            }))(t)
        }, Q = function() {
            return "hsb(" + [this.h, this.s, this.b] + ")"
        }, Y = function() {
            return "hsl(" + [this.h, this.s, this.l] + ")"
        }, K = function() {
            return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
        }, J = function(t, e, i) {
            if (null == e && r(t, "object") && "r"in t && "g"in t && "b"in t && (i = t.b, e = t.g, t = t.r), null == e && r(t, string)) {
                var o = n.getRGB(t);
                t = o.r, e = o.g, i = o.b
            }
            return (t > 1 || e > 1 || i > 1) && (t/=255, e/=255, i/=255), [t, e, i]
        }, Z = function(t, e, i, o) {
            t = N.round(255 * t), e = N.round(255 * e), i = N.round(255 * i);
            var s = {
                r: t,
                g: e,
                b: i,
                opacity: r(o, "finite") ? o: 1,
                hex: n.rgb(t, e, i),
                toString: K
            };
            return r(o, "finite") && (s.opacity = o), s
        };
        n.color = function(t) {
            var e;
            return r(t, "object") && "h"in t && "s"in t && "b"in t ? (e = n.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : r(t, "object") && "h"in t && "s"in t && "l"in t ? (e = n.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : (r(t, "string") && (t = n.getRGB(t)), r(t, "object") && "r"in t && "g"in t && "b"in t&&!("error"in t) ? (e = n.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = n.rgb2hsb(t), t.v = e.b) : (t = {
                hex: "none"
            }, t.r = t.g = t.b = t.h = t.s = t.v = t.l =- 1, t.error = 1)), t.toString = K, t
        }, n.hsb2rgb = function(t, e, n, i) {
            r(t, "object") && "h"in t && "s"in t && "b"in t && (n = t.b, e = t.s, i = t.o, t = t.h), t*=360;
            var o, s, a, l, u;
            return t = t%360 / 60, u = n * e, l = u * (1 - D(t%2 - 1)), o = s = a = n - u, t=~~t, o += [u, l, 0, 0, l, u][t], s += [l, u, u, l, 0, 0][t], a += [0, 0, l, u, u, l][t], Z(o, s, a, i)
        }, n.hsl2rgb = function(t, e, n, i) {
            r(t, "object") && "h"in t && "s"in t && "l"in t && (n = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || n > 1) && (t/=360, e/=100, n/=100), t*=360;
            var o, s, a, l, u;
            return t = t%360 / 60, u = 2 * e * (.5 > n ? n : 1 - n), l = u * (1 - D(t%2 - 1)), o = s = a = n - u / 2, t=~~t, o += [u, l, 0, 0, l, u][t], s += [l, u, u, l, 0, 0][t], a += [0, 0, l, u, u, l][t], Z(o, s, a, i)
        }, n.rgb2hsb = function(t, e, n) {
            n = J(t, e, n), t = n[0], e = n[1], n = n[2];
            var i, r, o, s;
            return o = L(t, e, n), s = o - F(t, e, n), i = 0 == s ? null : o == t ? (e - n) / s : o == e ? (n - t) / s + 2 : (t - e) / s + 4, i = (i + 360)%6 * 60 / 360, r = 0 == s ? 0 : s / o, {
                h: i,
                s: r,
                b: o,
                toString: Q
            }
        }, n.rgb2hsl = function(t, e, n) {
            n = J(t, e, n), t = n[0], e = n[1], n = n[2];
            var i, r, o, s, a, l;
            return s = L(t, e, n), a = F(t, e, n), l = s - a, i = 0 == l ? null : s == t ? (e - n) / l : s == e ? (n - t) / l + 2 : (t - e) / l + 4, i = (i + 360)%6 * 60 / 360, o = (s + a) / 2, r = 0 == l ? 0 : .5 > o ? l / (2 * o) : l / (2 - 2 * o), {
                h: i,
                s: r,
                l: o,
                toString: Y
            }
        }, n.parsePathString = function(t) {
            if (!t)
                return null;
            var e = n.path(t);
            if (e.arr)
                return n.path.clone(e.arr);
            var i = {
                a: 7,
                c: 6,
                o: 2,
                h: 1,
                l: 2,
                m: 2,
                r: 4,
                q: 4,
                s: 4,
                t: 2,
                v: 1,
                u: 3,
                z: 0
            }, o = [];
            return r(t, "array") && r(t[0], "array") && (o = n.path.clone(t)), o.length || S(t).replace(B, function(t, e, n) {
                var r = [], s = e.toLowerCase();
                if (n.replace(I, function(t, e) {
                    e && r.push( + e)
                }), "m" == s && r.length > 2 && (o.push([e].concat(r.splice(0, 2))), s = "l", e = "m" == e ? "l" : "L"), "o" == s && 1 == r.length && o.push([e, r[0]]), "r" == s)
                    o.push([e].concat(r));
                else 
                    for (; r.length >= i[s] && (o.push([e].concat(r.splice(0, i[s]))), i[s]););
            }), o.toString = n.path.toString, e.arr = n.path.clone(o), o
        };
        var tt = n.parseTransformString = function(t) {
            if (!t)
                return null;
            var e = [];
            return r(t, "array") && r(t[0], "array") && (e = n.path.clone(t)), e.length || S(t).replace(H, function(t, n, i) {
                var r = [];
                n.toLowerCase();
                i.replace(I, function(t, e) {
                    e && r.push( + e)
                }), e.push([n].concat(r))
            }), e.toString = n.path.toString, e
        };
        n._.svgTransform2string = d, n._.rgTransform = /^[a-z][\s]*-?\.?\d/i, n._.transform2matrix = h, n._unit2px = m;
        C.doc.contains || C.doc.compareDocumentPosition ? function(t, e) {
            var n = 9 == t.nodeType ? t.documentElement: t, i = e && e.parentNode;
            return t == i ||!(!i || 1 != i.nodeType ||!(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
        } : function(t, e) {
            if (e)
                for (; e;)
                    if (e = e.parentNode, e == t)
                        return !0;
            return !1
        };
        n._.getSomeDefs = p, n._.getSomeSVG = f, n.select = function(t) {
            return t = S(t).replace(/([^\\]):/g, "$1\\:"), w(C.doc.querySelector(t))
        }, n.selectAll = function(t) {
            for (var e = C.doc.querySelectorAll(t), i = (n.set || Array)(), r = 0; r < e.length; r++)
                i.push(w(e[r]));
            return i
        }, setInterval(function() {
            for (var t in X)
                if (X[E](t)) {
                    var e = X[t], n = e.node;
                    ("svg" != e.type&&!n.ownerSVGElement || "svg" == e.type && (!n.parentNode || "ownerSVGElement"in n.parentNode&&!n.ownerSVGElement)) && delete X[t]
                }
        }, 1e4), y.prototype.attr = function(t, n) {
            var i = this, o = i.node;
            if (!t) {
                if (1 != o.nodeType)
                    return {
                        text: o.nodeValue
                    };
                for (var s = o.attributes, a = {}, l = 0, u = s.length; u > l; l++)
                    a[s[l].nodeName] = s[l].nodeValue;
                return a
            }
            if (r(t, "string")) {
                if (!(arguments.length > 1))
                    return e("snap.util.getattr." + t, i).firstDefined();
                var c = {};
                c[t] = n, t = c
            }
            for (var d in t)
                t[E](d) && e("snap.util.attr." + d, i, t[d]);
            return i
        }, n.parse = function(t) {
            var e = C.doc.createDocumentFragment(), n=!0, i = C.doc.createElement("div");
            if (t = S(t), t.match(/^\s*<\s*svg(?:\s|>)/) || (t = "<svg>" + t + "</svg>", n=!1), i.innerHTML = t, t = i.getElementsByTagName("svg")[0])
                if (n)
                    e = t;
                else 
                    for (; t.firstChild;)
                        e.appendChild(t.firstChild);
            return new b(e)
        }, n.fragment = function() {
            for (var t = Array.prototype.slice.call(arguments, 0), e = C.doc.createDocumentFragment(), i = 0, r = t.length; r > i; i++) {
                var o = t[i];
                o.node && o.node.nodeType && e.appendChild(o.node), o.nodeType && e.appendChild(o), "string" == typeof o && e.appendChild(n.parse(o).node)
            }
            return new b(e)
        }, n._.make = x, n._.wrap = w, _.prototype.el = function(t, e) {
            var n = x(t, this.node);
            return e && n.attr(e), n
        }, y.prototype.children = function() {
            for (var t = [], e = this.node.childNodes, i = 0, r = e.length; r > i; i++)
                t[i] = n(e[i]);
            return t
        }, y.prototype.toJSON = function() {
            var t = [];
            return k([this], t), t[0]
        }, e.on("snap.util.getattr", function() {
            var t = e.nt();
            t = t.substring(t.lastIndexOf(".") + 1);
            var n = t.replace(/[A-Z]/g, function(t) {
                return "-" + t.toLowerCase()
            });
            return et[E](n) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(n) : i(this.node, t)
        });
        var et = {
            "alignment-baseline": 0,
            "baseline-shift": 0,
            clip: 0,
            "clip-path": 0,
            "clip-rule": 0,
            color: 0,
            "color-interpolation": 0,
            "color-interpolation-filters": 0,
            "color-profile": 0,
            "color-rendering": 0,
            cursor: 0,
            direction: 0,
            display: 0,
            "dominant-baseline": 0,
            "enable-background": 0,
            fill: 0,
            "fill-opacity": 0,
            "fill-rule": 0,
            filter: 0,
            "flood-color": 0,
            "flood-opacity": 0,
            font: 0,
            "font-family": 0,
            "font-size": 0,
            "font-size-adjust": 0,
            "font-stretch": 0,
            "font-style": 0,
            "font-variant": 0,
            "font-weight": 0,
            "glyph-orientation-horizontal": 0,
            "glyph-orientation-vertical": 0,
            "image-rendering": 0,
            kerning: 0,
            "letter-spacing": 0,
            "lighting-color": 0,
            marker: 0,
            "marker-end": 0,
            "marker-mid": 0,
            "marker-start": 0,
            mask: 0,
            opacity: 0,
            overflow: 0,
            "pointer-events": 0,
            "shape-rendering": 0,
            "stop-color": 0,
            "stop-opacity": 0,
            stroke: 0,
            "stroke-dasharray": 0,
            "stroke-dashoffset": 0,
            "stroke-linecap": 0,
            "stroke-linejoin": 0,
            "stroke-miterlimit": 0,
            "stroke-opacity": 0,
            "stroke-width": 0,
            "text-anchor": 0,
            "text-decoration": 0,
            "text-rendering": 0,
            "unicode-bidi": 0,
            visibility: 0,
            "word-spacing": 0,
            "writing-mode": 0
        };
        e.on("snap.util.attr", function(t) {
            var n = e.nt(), r = {};
            n = n.substring(n.lastIndexOf(".") + 1), r[n] = t;
            var o = n.replace(/-(\w)/gi, function(t, e) {
                return e.toUpperCase()
            }), s = n.replace(/[A-Z]/g, function(t) {
                return "-" + t.toLowerCase()
            });
            et[E](s) ? this.node.style[o] = null == t ? j : t : i(this.node, r)
        }), function() {}(_.prototype), n.ajax = function(t, n, i, o) {
            var s = new XMLHttpRequest, a = W();
            if (s) {
                if (r(n, "function"))
                    o = i, i = n, n = null;
                else if (r(n, "object")) {
                    var l = [];
                    for (var u in n)
                        n.hasOwnProperty(u) && l.push(encodeURIComponent(u) + "=" + encodeURIComponent(n[u]));
                    n = l.join("&")
                }
                return s.open(n ? "POST" : "GET", t, !0), n && (s.setRequestHeader("X-Requested-With", "XMLHttpRequest"), s.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), i && (e.once("snap.ajax." + a + ".0", i), e.once("snap.ajax." + a + ".200", i), e.once("snap.ajax." + a + ".304", i)), s.onreadystatechange = function() {
                    4 == s.readyState && e("snap.ajax." + a + "." + s.status, o, s)
                }, 4 == s.readyState ? s : (s.send(n), s)
            }
        }, n.load = function(t, e, i) {
            n.ajax(t, function(t) {
                var r = n.parse(t.responseText);
                i ? e.call(i, r) : e(r)
            })
        };
        var nt = function(t) {
            var e = t.getBoundingClientRect(), n = t.ownerDocument, i = n.body, r = n.documentElement, o = r.clientTop || i.clientTop || 0, s = r.clientLeft || i.clientLeft || 0, a = e.top + (g.win.pageYOffset || r.scrollTop || i.scrollTop) - o, l = e.left + (g.win.pageXOffset || r.scrollLeft || i.scrollLeft) - s;
            return {
                y: a,
                x: l
            }
        };
        return n.getElementByPoint = function(t, e) {
            var n = this, i = (n.canvas, C.doc.elementFromPoint(t, e));
            if (C.win.opera && "svg" == i.tagName) {
                var r = nt(i), o = i.createSVGRect();
                o.x = t - r.x, o.y = e - r.y, o.width = o.height = 1;
                var s = i.getIntersectionList(o, null);
                s.length && (i = s[s.length - 1])
            }
            return i ? w(i) : null
        }, n.plugin = function(t) {
            t(n, y, _, C, b)
        }, C.win.Snap = n, n
    }(t || this);
    return i.plugin(function(i, r, o, s, a) {
        function l(t, e) {
            if (null == e) {
                var n=!0;
                if (e = "linearGradient" == t.type || "radialGradient" == t.type ? t.node.getAttribute("gradientTransform") : "pattern" == t.type ? t.node.getAttribute("patternTransform") : t.node.getAttribute("transform"), !e)
                    return new i.Matrix;
                e = i._.svgTransform2string(e)
            } else 
                e = i._.rgTransform.test(e) ? f(e).replace(/\.{3}|\u2026/g, t._.transform || "") : i._.svgTransform2string(e), p(e, "array") && (e = i.path ? i.path.toString.call(e) : f(e)), t._.transform = e;
            var r = i._.transform2matrix(e, t.getBBox(1));
            return n ? r : void(t.matrix = r)
        }
        function u(t) {
            function e(t, e) {
                var n = g(t.node, e);
                n = n && n.match(o), n = n && n[2], n && "#" == n.charAt() && (n = n.substring(1), n && (a[n] = (a[n] || []).concat(function(n) {
                    var i = {};
                    i[e] = URL(n), g(t.node, i)
                })))
            }
            function n(t) {
                var e = g(t.node, "xlink:href");
                e && "#" == e.charAt() && (e = e.substring(1), e && (a[e] = (a[e] || []).concat(function(e) {
                    t.attr("xlink:href", "#" + e)
                })))
            }
            for (var i, r = t.selectAll("*"), o = /^\s*url\(("|'|)(.*)\1\)\s*$/, s = [], a = {}, l = 0, u = r.length; u > l; l++) {
                i = r[l], e(i, "fill"), e(i, "stroke"), e(i, "filter"), e(i, "mask"), e(i, "clip-path"), n(i);
                var c = g(i.node, "id");
                c && (g(i.node, {
                    id: i.id
                }), s.push({
                    old: c,
                    id: i.id
                }))
            }
            for (l = 0, u = s.length; u > l; l++) {
                var d = a[s[l].old];
                if (d)
                    for (var h = 0, p = d.length; p > h; h++)
                        d[h](s[l].id)
            }
        }
        function c(t, e, n) {
            return function(i) {
                var r = i.slice(t, e);
                return 1 == r.length && (r = r[0]), n ? n(r) : r
            }
        }
        function d(t) {
            return function() {
                var e = t ? "<" + this.type: "", n = this.node.attributes, i = this.node.childNodes;
                if (t)
                    for (var r = 0, o = n.length; o > r; r++)
                        e += " " + n[r].name + '="' + n[r].value.replace(/"/g, '\\"') + '"';
                if (i.length) {
                    for (t && (e += ">"), r = 0, o = i.length; o > r; r++)
                        3 == i[r].nodeType ? e += i[r].nodeValue : 1 == i[r].nodeType && (e += x(i[r]).toString());
                    t && (e += "</" + this.type + ">")
                } else 
                    t && (e += "/>");
                return e
            }
        }
        var h = r.prototype, p = i.is, f = String, m = i._unit2px, g = i._.$, v = i._.make, y = i._.getSomeDefs, b = "hasOwnProperty", x = i._.wrap;
        h.getBBox = function(t) {
            if (!i.Matrix ||!i.path)
                return this.node.getBBox();
            var e = this, n = new i.Matrix;
            if (e.removed)
                return i._.box();
            for (; "use" == e.type;)
                if (t || (n = n.add(e.transform().localMatrix.translate(e.attr("x") || 0, e.attr("y") || 0))), e.original)
                    e = e.original;
                else {
                    var r = e.attr("xlink:href");
                    e = e.original = e.node.ownerDocument.getElementById(r.substring(r.indexOf("#") + 1))
                }
            var o = e._, s = i.path.get[e.type] || i.path.get.deflt;
            try {
                return t ? (o.bboxwt = s ? i.path.getBBox(e.realPath = s(e)) : i._.box(e.node.getBBox()), i._.box(o.bboxwt)) : (e.realPath = s(e), e.matrix = e.transform().localMatrix, o.bbox = i.path.getBBox(i.path.map(e.realPath, n.add(e.matrix))), i._.box(o.bbox))
            } catch (a) {
                return i._.box()
            }
        };
        var _ = function() {
            return this.string
        };
        h.transform = function(t) {
            var e = this._;
            if (null == t) {
                for (var n, r = this, o = new i.Matrix(this.node.getCTM()), s = l(this), a = [s], u = new i.Matrix, c = s.toTransformString(), d = f(s) == f(this.matrix) ? f(e.transform) : c; "svg" != r.type && (r = r.parent());)
                    a.push(l(r));
                for (n = a.length; n--;)
                    u.add(a[n]);
                return {
                    string: d,
                    globalMatrix: o,
                    totalMatrix: u,
                    localMatrix: s,
                    diffMatrix: o.clone().add(s.invert()),
                    global: o.toTransformString(),
                    total: u.toTransformString(),
                    local: c,
                    toString: _
                }
            }
            return t instanceof i.Matrix ? (this.matrix = t, this._.transform = t.toTransformString()) : l(this, t), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? g(this.node, {
                gradientTransform: this.matrix
            }) : "pattern" == this.type ? g(this.node, {
                patternTransform: this.matrix
            }) : g(this.node, {
                transform: this.matrix
            })), this
        }, h.parent = function() {
            return x(this.node.parentNode)
        }, h.append = h.add = function(t) {
            if (t) {
                if ("set" == t.type) {
                    var e = this;
                    return t.forEach(function(t) {
                        e.add(t)
                    }), this
                }
                t = x(t), this.node.appendChild(t.node), t.paper = this.paper
            }
            return this
        }, h.appendTo = function(t) {
            return t && (t = x(t), t.append(this)), this
        }, h.prepend = function(t) {
            if (t) {
                if ("set" == t.type) {
                    var e, n = this;
                    return t.forEach(function(t) {
                        e ? e.after(t) : n.prepend(t), e = t
                    }), this
                }
                t = x(t);
                var i = t.parent();
                this.node.insertBefore(t.node, this.node.firstChild), this.add && this.add(), t.paper = this.paper, this.parent() && this.parent().add(), i && i.add()
            }
            return this
        }, h.prependTo = function(t) {
            return t = x(t), t.prepend(this), this
        }, h.before = function(t) {
            if ("set" == t.type) {
                var e = this;
                return t.forEach(function(t) {
                    var n = t.parent();
                    e.node.parentNode.insertBefore(t.node, e.node), n && n.add()
                }), this.parent().add(), this
            }
            t = x(t);
            var n = t.parent();
            return this.node.parentNode.insertBefore(t.node, this.node), this.parent() && this.parent().add(), n && n.add(), t.paper = this.paper, this
        }, h.after = function(t) {
            t = x(t);
            var e = t.parent();
            return this.node.nextSibling ? this.node.parentNode.insertBefore(t.node, this.node.nextSibling) : this.node.parentNode.appendChild(t.node), this.parent() && this.parent().add(), e && e.add(), t.paper = this.paper, this
        }, h.insertBefore = function(t) {
            t = x(t);
            var e = this.parent();
            return t.node.parentNode.insertBefore(this.node, t.node), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
        }, h.insertAfter = function(t) {
            t = x(t);
            var e = this.parent();
            return t.node.parentNode.insertBefore(this.node, t.node.nextSibling), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
        }, h.remove = function() {
            var t = this.parent();
            return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed=!0, t && t.add(), this
        }, h.select = function(t) {
            return x(this.node.querySelector(t))
        }, h.selectAll = function(t) {
            for (var e = this.node.querySelectorAll(t), n = (i.set || Array)(), r = 0; r < e.length; r++)
                n.push(x(e[r]));
            return n
        }, h.asPX = function(t, e) {
            return null == e && (e = this.attr(t)), + m(this, t, e)
        }, h.use = function() {
            var t, e = this.node.id;
            return e || (e = this.id, g(this.node, {
                id: e
            })), t = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? v(this.type, this.node.parentNode) : v("use", this.node.parentNode), g(t.node, {
                "xlink:href": "#" + e
            }), t.original = this, t
        }, h.clone = function() {
            var t = x(this.node.cloneNode(!0));
            return g(t.node, "id") && g(t.node, {
                id: t.id
            }), u(t), t.insertAfter(this), t
        }, h.toDefs = function() {
            var t = y(this);
            return t.appendChild(this.node), this
        }, h.pattern = h.toPattern = function(t, e, n, i) {
            var r = v("pattern", y(this));
            return null == t && (t = this.getBBox()), p(t, "object") && "x"in t && (e = t.y, n = t.width, i = t.height, t = t.x), g(r.node, {
                x: t,
                y: e,
                width: n,
                height: i,
                patternUnits: "userSpaceOnUse",
                id: r.id,
                viewBox: [t, e, n, i].join(" ")
            }), r.node.appendChild(this.node), r
        }, h.marker = function(t, e, n, i, r, o) {
            var s = v("marker", y(this));
            return null == t && (t = this.getBBox()), p(t, "object") && "x"in t && (e = t.y, n = t.width, i = t.height, r = t.refX || t.cx, o = t.refY || t.cy, t = t.x), g(s.node, {
                viewBox: [t, e, n, i].join(" "),
                markerWidth: n,
                markerHeight: i,
                orient: "auto",
                refX: r || 0,
                refY: o || 0,
                id: s.id
            }), s.node.appendChild(this.node), s
        };
        var w = function(t, e, i, r) {
            "function" != typeof i || i.length || (r = i, i = n.linear), this.attr = t, this.dur = e, i && (this.easing = i), r && (this.callback = r)
        };
        i._.Animation = w, i.animation = function(t, e, n, i) {
            return new w(t, e, n, i)
        }, h.inAnim = function() {
            var t = this, e = [];
            for (var n in t.anims)
                t.anims[b](n)&&!function(t) {
                    e.push({
                        anim: new w(t._attrs, t.dur, t.easing, t._callback),
                        mina: t,
                        curStatus: t.status(),
                        status: function(e) {
                            return t.status(e)
                        },
                        stop: function() {
                            t.stop()
                        }
                    })
                }(t.anims[n]);
            return e
        }, i.animate = function(t, i, r, o, s, a) {
            "function" != typeof s || s.length || (a = s, s = n.linear);
            var l = n.time(), u = n(t, i, l, l + o, n.time, r, s);
            return a && e.once("mina.finish." + u.id, a), u
        }, h.stop = function() {
            for (var t = this.inAnim(), e = 0, n = t.length; n > e; e++)
                t[e].stop();
            return this
        }, h.animate = function(t, i, r, o) {
            "function" != typeof r || r.length || (o = r, r = n.linear), t instanceof w && (o = t.callback, r = t.easing, i = t.dur, t = t.attr);
            var s, a, l, u, d = [], h = [], m = {}, g = this;
            for (var v in t)
                if (t[b](v)) {
                    g.equal ? (u = g.equal(v, f(t[v])), s = u.from, a = u.to, l = u.f) : (s =+ g.attr(v), a =+ t[v]);
                    var y = p(s, "array") ? s.length: 1;
                    m[v] = c(d.length, d.length + y, l), d = d.concat(s), h = h.concat(a)
                }
            var x = n.time(), _ = n(d, h, x, x + i, n.time, function(t) {
                var e = {};
                for (var n in m)
                    m[b](n) && (e[n] = m[n](t));
                g.attr(e)
            }, r);
            return g.anims[_.id] = _, _._attrs = t, _._callback = o, e("snap.animcreated." + g.id, _), e.once("mina.finish." + _.id, function() {
                delete g.anims[_.id], o && o.call(g)
            }), e.once("mina.stop." + _.id, function() {
                delete g.anims[_.id]
            }), g
        };
        var k = {};
        h.data = function(t, n) {
            var r = k[this.id] = k[this.id] || {};
            if (0 == arguments.length)
                return e("snap.data.get." + this.id, this, r, null), r;
            if (1 == arguments.length) {
                if (i.is(t, "object")) {
                    for (var o in t)
                        t[b](o) && this.data(o, t[o]);
                    return this
                }
                return e("snap.data.get." + this.id, this, r[t], t), r[t]
            }
            return r[t] = n, e("snap.data.set." + this.id, this, n, t), this
        }, h.removeData = function(t) {
            return null == t ? k[this.id] = {} : k[this.id] && delete k[this.id][t], this
        }, h.outerSVG = h.toString = d(1), h.innerSVG = d(), h.toDataURL = function() {
            if (t && t.btoa) {
                var e = this.getBBox(), n = i.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
                    x: + e.x.toFixed(3),
                    y: + e.y.toFixed(3),
                    width: + e.width.toFixed(3),
                    height: + e.height.toFixed(3),
                    contents: this.outerSVG()
                });
                return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(n)))
            }
        }, a.prototype.select = h.select, a.prototype.selectAll = h.selectAll
    }), i.plugin(function(t) {
        function e(t, e, i, r, o, s) {
            return null == e && "[object SVGMatrix]" == n.call(t) ? (this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.e = t.e, void(this.f = t.f)) : void(null != t ? (this.a =+ t, this.b =+ e, this.c =+ i, this.d =+ r, this.e =+ o, this.f =+ s) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0))
        }
        var n = Object.prototype.toString, i = String, r = Math, o = "";
        !function(n) {
            function s(t) {
                return t[0] * t[0] + t[1] * t[1]
            }
            function a(t) {
                var e = r.sqrt(s(t));
                t[0] && (t[0]/=e), t[1] && (t[1]/=e)
            }
            n.add = function(t, n, i, r, o, s) {
                var a, l, u, c, d = [[], [], []], h = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]], p = [[t, i, o], [n, r, s], [0, 0, 1]];
                for (t && t instanceof e && (p = [[t.a, t.c, t.e], [t.b, t.d, t.f], [0, 0, 1]]), a = 0; 3 > a; a++)
                    for (l = 0; 3 > l; l++) {
                        for (c = 0, u = 0; 3 > u; u++)
                            c += h[a][u] * p[u][l];
                            d[a][l] = c
                    }
                return this.a = d[0][0], this.b = d[1][0], this.c = d[0][1], this.d = d[1][1], this.e = d[0][2], this.f = d[1][2], this
            }, n.invert = function() {
                var t = this, n = t.a * t.d - t.b * t.c;
                return new e(t.d / n, - t.b / n, - t.c / n, t.a / n, (t.c * t.f - t.d * t.e) / n, (t.b * t.e - t.a * t.f) / n)
            }, n.clone = function() {
                return new e(this.a, this.b, this.c, this.d, this.e, this.f)
            }, n.translate = function(t, e) {
                return this.add(1, 0, 0, 1, t, e)
            }, n.scale = function(t, e, n, i) {
                return null == e && (e = t), (n || i) && this.add(1, 0, 0, 1, n, i), this.add(t, 0, 0, e, 0, 0), (n || i) && this.add(1, 0, 0, 1, - n, - i), this
            }, n.rotate = function(e, n, i) {
                e = t.rad(e), n = n || 0, i = i || 0;
                var o =+ r.cos(e).toFixed(9), s =+ r.sin(e).toFixed(9);
                return this.add(o, s, - s, o, n, i), this.add(1, 0, 0, 1, - n, - i)
            }, n.x = function(t, e) {
                return t * this.a + e * this.c + this.e
            }, n.y = function(t, e) {
                return t * this.b + e * this.d + this.f
            }, n.get = function(t) {
                return + this[i.fromCharCode(97 + t)].toFixed(4)
            }, n.toString = function() {
                return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
            }, n.offset = function() {
                return [this.e.toFixed(4), this.f.toFixed(4)]
            }, n.determinant = function() {
                return this.a * this.d - this.b * this.c
            }, n.split = function() {
                var e = {};
                e.dx = this.e, e.dy = this.f;
                var n = [[this.a, this.c], [this.b, this.d]];
                e.scalex = r.sqrt(s(n[0])), a(n[0]), e.shear = n[0][0] * n[1][0] + n[0][1] * n[1][1], n[1] = [n[1][0] - n[0][0] * e.shear, n[1][1] - n[0][1] * e.shear], e.scaley = r.sqrt(s(n[1])), a(n[1]), e.shear/=e.scaley, this.determinant() < 0 && (e.scalex =- e.scalex);
                var i =- n[0][1], o = n[1][1];
                return 0 > o ? (e.rotate = t.deg(r.acos(o)), 0 > i && (e.rotate = 360 - e.rotate)) : e.rotate = t.deg(r.asin(i)), e.isSimple=!( + e.shear.toFixed(9) || e.scalex.toFixed(9) != e.scaley.toFixed(9) && e.rotate), e.isSuperSimple=!+e.shear.toFixed(9) && e.scalex.toFixed(9) == e.scaley.toFixed(9)&&!e.rotate, e.noRotation=!+e.shear.toFixed(9)&&!e.rotate, e
            }, n.toTransformString = function(t) {
                var e = t || this.split();
                return + e.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (e.scalex =+ e.scalex.toFixed(4), e.scaley =+ e.scaley.toFixed(4), e.rotate =+ e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [ + e.dx.toFixed(4), + e.dy.toFixed(4)] : o) + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : o) + (e.rotate ? "r" + [ + e.rotate.toFixed(4), 0, 0] : o))
            }
        }(e.prototype), t.Matrix = e, t.matrix = function(t, n, i, r, o, s) {
            return new e(t, n, i, r, o, s)
        }
    }), i.plugin(function(t, n, i, r, o) {
        function s(i) {
            return function(r) {
                if (e.stop(), r instanceof o && 1 == r.node.childNodes.length && ("radialGradient" == r.node.firstChild.tagName || "linearGradient" == r.node.firstChild.tagName || "pattern" == r.node.firstChild.tagName) && (r = r.node.firstChild, p(this).appendChild(r), r = d(r)), r instanceof n)
                    if ("radialGradient" == r.type || "linearGradient" == r.type || "pattern" == r.type) {
                        r.node.id || m(r.node, {
                            id: r.id
                        });
                        var s = g(r.node.id)
                    } else 
                        s = r.attr(i);
                else if (s = t.color(r), s.error) {
                    var a = t(p(this).ownerSVGElement).gradient(r);
                    a ? (a.node.id || m(a.node, {
                        id: a.id
                    }), s = g(a.node.id)) : s = r
                } else 
                    s = v(s);
                var l = {};
                l[i] = s, m(this.node, l), this.node.style[i] = b
            }
        }
        function a(t) {
            e.stop(), t ==+ t && (t += "px"), this.node.style.fontSize = t
        }
        function l(t) {
            for (var e = [], n = t.childNodes, i = 0, r = n.length; r > i; i++) {
                var o = n[i];
                3 == o.nodeType && e.push(o.nodeValue), "tspan" == o.tagName && (1 == o.childNodes.length && 3 == o.firstChild.nodeType ? e.push(o.firstChild.nodeValue) : e.push(l(o)))
            }
            return e
        }
        function u() {
            return e.stop(), this.node.style.fontSize
        }
        var c = t._.make, d = t._.wrap, h = t.is, p = t._.getSomeDefs, f = /^url\(#?([^)]+)\)$/, m = t._.$, g = t.url, v = String, y = t._.separator, b = "";
        e.on("snap.util.attr.mask", function(t) {
            if (t instanceof n || t instanceof o) {
                if (e.stop(), t instanceof o && 1 == t.node.childNodes.length && (t = t.node.firstChild, p(this).appendChild(t), t = d(t)), "mask" == t.type)
                    var i = t;
                else 
                    i = c("mask", p(this)), i.node.appendChild(t.node);
                !i.node.id && m(i.node, {
                    id: i.id
                }), m(this.node, {
                    mask: g(i.id)
                })
            }
        }), function(t) {
            e.on("snap.util.attr.clip", t), e.on("snap.util.attr.clip-path", t), e.on("snap.util.attr.clipPath", t)
        }(function(t) {
            if (t instanceof n || t instanceof o) {
                if (e.stop(), "clipPath" == t.type)
                    var i = t;
                else 
                    i = c("clipPath", p(this)), i.node.appendChild(t.node), !i.node.id && m(i.node, {
                        id: i.id
                    });
                m(this.node, {
                    "clip-path": g(i.node.id || i.id)
                })
            }
        }), e.on("snap.util.attr.fill", s("fill")), e.on("snap.util.attr.stroke", s("stroke"));
        var x = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
        e.on("snap.util.grad.parse", function(t) {
            t = v(t);
            var e = t.match(x);
            if (!e)
                return null;
            var n = e[1], i = e[2], r = e[3];
            return i = i.split(/\s*,\s*/).map(function(t) {
                return + t == t?+t : t
            }), 1 == i.length && 0 == i[0] && (i = []), r = r.split("-"), r = r.map(function(t) {
                t = t.split(":");
                var e = {
                    color: t[0]
                };
                return t[1] && (e.offset = parseFloat(t[1])), e
            }), {
                type: n,
                params: i,
                stops: r
            }
        }), e.on("snap.util.attr.d", function(n) {
            e.stop(), h(n, "array") && h(n[0], "array") && (n = t.path.toString.call(n)), n = v(n), n.match(/[ruo]/i) && (n = t.path.toAbsolute(n)), m(this.node, {
                d: n
            })
        })( - 1), e.on("snap.util.attr.#text", function(t) {
            e.stop(), t = v(t);
            for (var n = r.doc.createTextNode(t); this.node.firstChild;)
                this.node.removeChild(this.node.firstChild);
            this.node.appendChild(n)
        })( - 1), e.on("snap.util.attr.path", function(t) {
            e.stop(), this.attr({
                d: t
            })
        })( - 1), e.on("snap.util.attr.class", function(t) {
            e.stop(), this.node.className.baseVal = t
        })( - 1), e.on("snap.util.attr.viewBox", function(t) {
            var n;
            n = h(t, "object") && "x"in t ? [t.x, t.y, t.width, t.height].join(" ") : h(t, "array") ? t.join(" ") : t, m(this.node, {
                viewBox: n
            }), e.stop()
        })( - 1), e.on("snap.util.attr.transform", function(t) {
            this.transform(t), e.stop()
        })( - 1), e.on("snap.util.attr.r", function(t) {
            "rect" == this.type && (e.stop(), m(this.node, {
                rx: t,
                ry: t
            }))
        })( - 1), e.on("snap.util.attr.textpath", function(t) {
            if (e.stop(), "text" == this.type) {
                var i, r, o;
                if (!t && this.textPath) {
                    for (r = this.textPath; r.node.firstChild;)
                        this.node.appendChild(r.node.firstChild);
                    return r.remove(), void delete this.textPath
                }
                if (h(t, "string")) {
                    var s = p(this), a = d(s.parentNode).path(t);
                    s.appendChild(a.node), i = a.id, a.attr({
                        id: i
                    })
                } else 
                    t = d(t), t instanceof n && (i = t.attr("id"), i || (i = t.id, t.attr({
                        id: i
                    })));
                if (i)
                    if (r = this.textPath, o = this.node, r)
                        r.attr({
                            "xlink:href": "#" + i
                        });
                    else {
                        for (r = m("textPath", {
                            "xlink:href": "#" + i
                        }); o.firstChild;)
                            r.appendChild(o.firstChild);
                            o.appendChild(r), this.textPath = d(r)
                        }
                }
        })( - 1), e.on("snap.util.attr.text", function(t) {
            if ("text" == this.type) {
                for (var n = this.node, i = function(t) {
                    var e = m("tspan");
                    if (h(t, "array"))
                        for (var n = 0; n < t.length; n++)
                            e.appendChild(i(t[n]));
                    else 
                        e.appendChild(r.doc.createTextNode(t));
                    return e.normalize && e.normalize(), e
                }; n.firstChild;)
                    n.removeChild(n.firstChild);
                for (var o = i(t); o.firstChild;)
                    n.appendChild(o.firstChild)
            }
            e.stop()
        })( - 1), e.on("snap.util.attr.fontSize", a)( - 1), e.on("snap.util.attr.font-size", a)( - 1), e.on("snap.util.getattr.transform", function() {
            return e.stop(), this.transform()
        })( - 1), e.on("snap.util.getattr.textpath", function() {
            return e.stop(), this.textPath
        })( - 1), function() {
            function n(n) {
                return function() {
                    e.stop();
                    var i = r.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + n);
                    return "none" == i ? i : t(r.doc.getElementById(i.match(f)[1]))
                }
            }
            function i(t) {
                return function(n) {
                    e.stop();
                    var i = "marker" + t.charAt(0).toUpperCase() + t.substring(1);
                    if ("" == n ||!n)
                        return void(this.node.style[i] = "none");
                    if ("marker" == n.type) {
                        var r = n.node.id;
                        return r || m(n.node, {
                            id: n.id
                        }), void(this.node.style[i] = g(r))
                    }
                }
            }
            e.on("snap.util.getattr.marker-end", n("end"))( - 1), e.on("snap.util.getattr.markerEnd", n("end"))( - 1), e.on("snap.util.getattr.marker-start", n("start"))( - 1), e.on("snap.util.getattr.markerStart", n("start"))( - 1), e.on("snap.util.getattr.marker-mid", n("mid"))( - 1), e.on("snap.util.getattr.markerMid", n("mid"))( - 1), e.on("snap.util.attr.marker-end", i("end"))( - 1), e.on("snap.util.attr.markerEnd", i("end"))( - 1), e.on("snap.util.attr.marker-start", i("start"))( - 1), e.on("snap.util.attr.markerStart", i("start"))( - 1), e.on("snap.util.attr.marker-mid", i("mid"))( - 1), e.on("snap.util.attr.markerMid", i("mid"))( - 1)
        }(), e.on("snap.util.getattr.r", function() {
            return "rect" == this.type && m(this.node, "rx") == m(this.node, "ry") ? (e.stop(), m(this.node, "rx")) : void 0
        })( - 1), e.on("snap.util.getattr.text", function() {
            if ("text" == this.type || "tspan" == this.type) {
                e.stop();
                var t = l(this.node);
                return 1 == t.length ? t[0] : t
            }
        })( - 1), e.on("snap.util.getattr.#text", function() {
            return this.node.textContent
        })( - 1), e.on("snap.util.getattr.viewBox", function() {
            e.stop();
            var n = m(this.node, "viewBox");
            return n ? (n = n.split(y), t._.box( + n[0], + n[1], + n[2], + n[3])) : void 0
        })( - 1), e.on("snap.util.getattr.points", function() {
            var t = m(this.node, "points");
            return e.stop(), t ? t.split(y) : void 0
        })( - 1), e.on("snap.util.getattr.path", function() {
            var t = m(this.node, "d");
            return e.stop(), t
        })( - 1), e.on("snap.util.getattr.class", function() {
            return this.node.className.baseVal
        })( - 1), e.on("snap.util.getattr.fontSize", u)( - 1), e.on("snap.util.getattr.font-size", u)( - 1)
    }), i.plugin(function(t, e) {
        var n = /\S+/g, i = String, r = e.prototype;
        r.addClass = function(t) {
            var e, r, o, s, a = i(t || "").match(n) || [], l = this.node, u = l.className.baseVal, c = u.match(n) || [];
            if (a.length) {
                for (e = 0; o = a[e++];)
                    r = c.indexOf(o), ~r || c.push(o);
                s = c.join(" "), u != s && (l.className.baseVal = s)
            }
            return this
        }, r.removeClass = function(t) {
            var e, r, o, s, a = i(t || "").match(n) || [], l = this.node, u = l.className.baseVal, c = u.match(n) || [];
            if (c.length) {
                for (e = 0; o = a[e++];)
                    r = c.indexOf(o), ~r && c.splice(r, 1);
                s = c.join(" "), u != s && (l.className.baseVal = s)
            }
            return this
        }, r.hasClass = function(t) {
            var e = this.node, i = e.className.baseVal, r = i.match(n) || [];
            return !!~r.indexOf(t)
        }, r.toggleClass = function(t, e) {
            if (null != e)
                return e ? this.addClass(t) : this.removeClass(t);
            var i, r, o, s, a = (t || "").match(n) || [], l = this.node, u = l.className.baseVal, c = u.match(n) || [];
            for (i = 0; o = a[i++];)
                r = c.indexOf(o), ~r ? c.splice(r, 1) : c.push(o);
            return s = c.join(" "), u != s && (l.className.baseVal = s), this
        }
    }), i.plugin(function() {
        function t(t) {
            return t
        }
        function n(t) {
            return function(e) {
                return + e.toFixed(3) + t
            }
        }
        var i = {
            "+": function(t, e) {
                return t + e
            },
            "-": function(t, e) {
                return t - e
            },
            "/": function(t, e) {
                return t / e
            },
            "*": function(t, e) {
                return t * e
            }
        }, r = String, o = /[a-z]+$/i, s = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
        e.on("snap.util.attr", function(t) {
            var n = r(t).match(s);
            if (n) {
                var a = e.nt(), l = a.substring(a.lastIndexOf(".") + 1), u = this.attr(l), c = {};
                e.stop();
                var d = n[3] || "", h = u.match(o), p = i[n[1]];
                if (h && h == d ? t = p(parseFloat(u), + n[2]) : (u = this.asPX(l), t = p(this.asPX(l), this.asPX(l, n[2] + d))), isNaN(u) || isNaN(t))
                    return;
                c[l] = t, this.attr(c)
            }
        })( - 10), e.on("snap.util.equal", function(a, l) {
            var u = r(this.attr(a) || ""), c = r(l).match(s);
            if (c) {
                e.stop();
                var d = c[3] || "", h = u.match(o), p = i[c[1]];
                return h && h == d ? {
                    from: parseFloat(u),
                    to: p(parseFloat(u), + c[2]),
                    f: n(h)
                } : (u = this.asPX(a), {
                    from: u,
                    to: p(u, this.asPX(a, c[2] + d)),
                    f: t
                })
            }
        })( - 10)
    }), i.plugin(function(n, i, r, o) {
        var s = r.prototype, a = n.is;
        s.rect = function(t, e, n, i, r, o) {
            var s;
            return null == o && (o = r), a(t, "object") && "[object Object]" == t ? s = t : null != t && (s = {
                x: t,
                y: e,
                width: n,
                height: i
            }, null != r && (s.rx = r, s.ry = o)), this.el("rect", s)
        }, s.circle = function(t, e, n) {
            var i;
            return a(t, "object") && "[object Object]" == t ? i = t : null != t && (i = {
                cx: t,
                cy: e,
                r: n
            }), this.el("circle", i)
        };
        var l = function() {
            function t() {
                this.parentNode.removeChild(this)
            }
            return function(e, n) {
                var i = o.doc.createElement("img"), r = o.doc.body;
                i.style.cssText = "position:absolute;left:-9999em;top:-9999em", i.onload = function() {
                    n.call(i), i.onload = i.onerror = null, r.removeChild(i)
                }, i.onerror = t, r.appendChild(i), i.src = e
            }
        }();
        s.image = function(t, e, i, r, o) {
            var s = this.el("image");
            if (a(t, "object") && "src"in t)
                s.attr(t);
            else if (null != t) {
                var u = {
                    "xlink:href": t,
                    preserveAspectRatio: "none"
                };
                null != e && null != i && (u.x = e, u.y = i), null != r && null != o ? (u.width = r, u.height = o) : l(t, function() {
                    n._.$(s.node, {
                        width: this.offsetWidth,
                        height: this.offsetHeight
                    })
                }), n._.$(s.node, u)
            }
            return s
        }, s.ellipse = function(t, e, n, i) {
            var r;
            return a(t, "object") && "[object Object]" == t ? r = t : null != t && (r = {
                cx: t,
                cy: e,
                rx: n,
                ry: i
            }), this.el("ellipse", r)
        }, s.path = function(t) {
            var e;
            return a(t, "object")&&!a(t, "array") ? e = t : t && (e = {
                d: t
            }), this.el("path", e)
        }, s.group = s.g = function(t) {
            var e = this.el("g");
            return 1 == arguments.length && t&&!t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e
        }, s.svg = function(t, e, n, i, r, o, s, l) {
            var u = {};
            return a(t, "object") && null == e ? u = t : (null != t && (u.x = t), null != e && (u.y = e), null != n && (u.width = n), null != i && (u.height = i), null != r && null != o && null != s && null != l && (u.viewBox = [r, o, s, l])), this.el("svg", u)
        }, s.mask = function(t) {
            var e = this.el("mask");
            return 1 == arguments.length && t&&!t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e
        }, s.ptrn = function(t, e, n, i, r, o, s, l) {
            if (a(t, "object"))
                var u = t;
            else 
                u = {
                    patternUnits: "userSpaceOnUse"
                }, t && (u.x = t), e && (u.y = e), null != n && (u.width = n), null != i && (u.height = i), null != r && null != o && null != s && null != l ? u.viewBox = [r, o, s, l] : u.viewBox = [t || 0, e || 0, n || 0, i || 0];
            return this.el("pattern", u)
        }, s.use = function(t) {
            return null != t ? (t instanceof i && (t.attr("id") || t.attr({
                id: n._.id(t)
            }), t = t.attr("id")), "#" == String(t).charAt() && (t = t.substring(1)), this.el("use", {
                "xlink:href": "#" + t
            })) : i.prototype.use.call(this)
        }, s.symbol = function(t, e, n, i) {
            var r = {};
            return null != t && null != e && null != n && null != i && (r.viewBox = [t, e, n, i]), this.el("symbol", r)
        }, s.text = function(t, e, n) {
            var i = {};
            return a(t, "object") ? i = t : null != t && (i = {
                x: t,
                y: e,
                text: n || ""
            }), this.el("text", i)
        }, s.line = function(t, e, n, i) {
            var r = {};
            return a(t, "object") ? r = t : null != t && (r = {
                x1: t,
                x2: n,
                y1: e,
                y2: i
            }), this.el("line", r)
        }, s.polyline = function(t) {
            arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
            var e = {};
            return a(t, "object")&&!a(t, "array") ? e = t : null != t && (e = {
                points: t
            }), this.el("polyline", e)
        }, s.polygon = function(t) {
            arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
            var e = {};
            return a(t, "object")&&!a(t, "array") ? e = t : null != t && (e = {
                points: t
            }), this.el("polygon", e)
        }, function() {
            function i() {
                return this.selectAll("stop")
            }
            function r(t, e) {
                var i = c("stop"), r = {
                    offset: + e + "%"
                };
                return t = n.color(t), r["stop-color"] = t.hex, t.opacity < 1 && (r["stop-opacity"] = t.opacity), c(i, r), this.node.appendChild(i), this
            }
            function o() {
                if ("linearGradient" == this.type) {
                    var t = c(this.node, "x1") || 0, e = c(this.node, "x2") || 1, i = c(this.node, "y1") || 0, r = c(this.node, "y2") || 0;
                    return n._.box(t, i, math.abs(e - t), math.abs(r - i))
                }
                var o = this.node.cx || .5, s = this.node.cy || .5, a = this.node.r || 0;
                return n._.box(o - a, s - a, 2 * a, 2 * a)
            }
            function a(t, n) {
                function i(t, e) {
                    for (var n = (e - d) / (t - h), i = h; t > i; i++)
                        s[i].offset =+ ( + d + n * (i - h)).toFixed(2);
                    h = t, d = e
                }
                var r, o = e("snap.util.grad.parse", null, n).firstDefined();
                if (!o)
                    return null;
                o.params.unshift(t), r = "l" == o.type.toLowerCase() ? l.apply(0, o.params) : u.apply(0, o.params), o.type != o.type.toLowerCase() && c(r.node, {
                    gradientUnits: "userSpaceOnUse"
                });
                var s = o.stops, a = s.length, d = 0, h = 0;
                a--;
                for (var p = 0; a > p; p++)
                    "offset"in s[p] && i(p, s[p].offset);
                for (s[a].offset = s[a].offset || 100, i(a, s[a].offset)
                    , p = 0;
                a >= p;
                p++) {
                    var f = s[p];
                    r.addStop(f.color, f.offset)
                }
                return r
            }
            function l(t, e, s, a, l) {
                var u = n._.make("linearGradient", t);
                return u.stops = i, u.addStop = r, u.getBBox = o, null != e && c(u.node, {
                    x1: e,
                    y1: s,
                    x2: a,
                    y2: l
                }), u
            }
            function u(t, e, s, a, l, u) {
                var d = n._.make("radialGradient", t);
                return d.stops = i, d.addStop = r, d.getBBox = o, null != e && c(d.node, {
                    cx: e,
                    cy: s,
                    r: a
                }), null != l && null != u && c(d.node, {
                    fx: l,
                    fy: u
                }), d
            }
            var c = n._.$;
            s.gradient = function(t) {
                return a(this.defs, t)
            }, s.gradientLinear = function(t, e, n, i) {
                return l(this.defs, t, e, n, i)
            }, s.gradientRadial = function(t, e, n, i, r) {
                return u(this.defs, t, e, n, i, r)
            }, s.toString = function() {
                var t, e = this.node.ownerDocument, i = e.createDocumentFragment(), r = e.createElement("div"), o = this.node.cloneNode(!0);
                return i.appendChild(r), r.appendChild(o), n._.$(o, {
                    xmlns: "http://www.w3.org/2000/svg"
                }), t = r.innerHTML, i.removeChild(i.firstChild), t
            }, s.toDataURL = function() {
                return t && t.btoa ? "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this))) : void 0
            }, s.clear = function() {
                for (var t, e = this.node.firstChild; e;)
                    t = e.nextSibling, "defs" != e.tagName ? e.parentNode.removeChild(e) : s.clear.call({
                        node: e
                    }), e = t
            }
        }()
    }), i.plugin(function(t, e) {
        function n(t) {
            var e = n.ps = n.ps || {};
            return e[t] ? e[t].sleep = 100 : e[t] = {
                sleep: 100
            }, setTimeout(function() {
                for (var n in e)
                    e[R](n) && n != t && (e[n].sleep--, !e[n].sleep && delete e[n])
            }), e[t]
        }
        function i(t, e, n, i) {
            return null == t && (t = e = n = i = 0), null == e && (e = t.y, n = t.width, i = t.height, t = t.x), {
                x: t,
                y: e,
                width: n,
                w: n,
                height: i,
                h: i,
                x2: t + n,
                y2: e + i,
                cx: t + n / 2,
                cy: e + i / 2,
                r1: B.min(n, i) / 2,
                r2: B.max(n, i) / 2,
                r0: B.sqrt(n * n + i * i) / 2,
                path: w(t, e, n, i),
                vb: [t, e, n, i].join(" ")
            }
        }
        function r() {
            return this.join(",").replace(P, "$1")
        }
        function o(t) {
            var e = q(t);
            return e.toString = r, e
        }
        function s(t, e, n, i, r, o, s, a, u) {
            return null == u ? p(t, e, n, i, r, o, s, a) : l(t, e, n, i, r, o, s, a, f(t, e, n, i, r, o, s, a, u))
        }
        function a(n, i) {
            function r(t) {
                return + ( + t).toFixed(3)
            }
            return t._.cacher(function(t, o, a) {
                t instanceof e && (t = t.attr("d")), t = L(t);
                for (var u, c, d, h, p, f = "", m = {}, g = 0, v = 0, y = t.length; y > v; v++) {
                    if (d = t[v], "M" == d[0])
                        u =+ d[1], c =+ d[2];
                    else {
                        if (h = s(u, c, d[1], d[2], d[3], d[4], d[5], d[6]), g + h > o) {
                            if (i&&!m.start) {
                                if (p = s(u, c, d[1], d[2], d[3], d[4], d[5], d[6], o - g), f += ["C" + r(p.start.x), r(p.start.y), r(p.m.x), r(p.m.y), r(p.x), r(p.y)], a)
                                    return f;
                                m.start = f, f = ["M" + r(p.x), r(p.y) + "C" + r(p.n.x), r(p.n.y), r(p.end.x), r(p.end.y), r(d[5]), r(d[6])].join(), g += h, u =+ d[5], c =+ d[6];
                                continue
                            }
                            if (!n&&!i)
                                return p = s(u, c, d[1], d[2], d[3], d[4], d[5], d[6], o - g)
                            }
                        g += h, u =+ d[5], c =+ d[6]
                    }
                    f += d.shift() + d
                }
                return m.end = f, p = n ? g : i ? m : l(u, c, d[0], d[1], d[2], d[3], d[4], d[5], 1)
            }, null, t._.clone)
        }
        function l(t, e, n, i, r, o, s, a, l) {
            var u = 1 - l, c = O(u, 3), d = O(u, 2), h = l * l, p = h * l, f = c * t + 3 * d * l * n + 3 * u * l * l * r + p * s, m = c * e + 3 * d * l * i + 3 * u * l * l * o + p * a, g = t + 2 * l * (n - t) + h * (r - 2 * n + t), v = e + 2 * l * (i - e) + h * (o - 2 * i + e), y = n + 2 * l * (r - n) + h * (s - 2 * r + n), b = i + 2 * l * (o - i) + h * (a - 2 * o + i), x = u * t + l * n, _ = u * e + l * i, w = u * r + l * s, k = u * o + l * a, C = 90 - 180 * B.atan2(g - y, v - b) / H;
            return {
                x: f,
                y: m,
                m: {
                    x: g,
                    y: v
                },
                n: {
                    x: y,
                    y: b
                },
                start: {
                    x: x,
                    y: _
                },
                end: {
                    x: w,
                    y: k
                },
                alpha: C
            }
        }
        function u(e, n, r, o, s, a, l, u) {
            t.is(e, "array") || (e = [e, n, r, o, s, a, l, u]);
            var c = N.apply(null, e);
            return i(c.min.x, c.min.y, c.max.x - c.min.x, c.max.y - c.min.y)
        }
        function c(t, e, n) {
            return e >= t.x && e <= t.x + t.width && n >= t.y && n <= t.y + t.height
        }
        function d(t, e) {
            return t = i(t), e = i(e), c(e, t.x, t.y) || c(e, t.x2, t.y) || c(e, t.x, t.y2) || c(e, t.x2, t.y2) || c(t, e.x, e.y) || c(t, e.x2, e.y) || c(t, e.x, e.y2) || c(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
        }
        function h(t, e, n, i, r) {
            var o =- 3 * e + 9 * n - 9 * i + 3 * r, s = t * o + 6 * e - 12 * n + 6 * i;
            return t * s - 3 * e + 3 * n
        }
        function p(t, e, n, i, r, o, s, a, l) {
            null == l && (l = 1), l = l > 1 ? 1 : 0 > l ? 0 : l;
            for (var u = l / 2, c = 12, d = [ - .1252, .1252, - .3678, .3678, - .5873, .5873, - .7699, .7699, - .9041, .9041, - .9816, .9816], p = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], f = 0, m = 0; c > m; m++) {
                var g = u * d[m] + u, v = h(g, t, n, r, s), y = h(g, e, i, o, a), b = v * v + y * y;
                f += p[m] * B.sqrt(b)
            }
            return u * f
        }
        function f(t, e, n, i, r, o, s, a, l) {
            if (!(0 > l || p(t, e, n, i, r, o, s, a) < l)) {
                var u, c = 1, d = c / 2, h = c - d, f = .01;
                for (u = p(t, e, n, i, r, o, s, a, h); W(u - l) > f;)
                    d/=2, h += (l > u ? 1 : - 1) * d, u = p(t, e, n, i, r, o, s, a, h);
                return h
            }
        }
        function m(t, e, n, i, r, o, s, a) {
            if (!(z(t, n) < I(r, s) || I(t, n) > z(r, s) || z(e, i) < I(o, a) || I(e, i) > z(o, a))) {
                var l = (t * i - e * n) * (r - s) - (t - n) * (r * a - o * s), u = (t * i - e * n) * (o - a) - (e - i) * (r * a - o * s), c = (t - n) * (o - a) - (e - i) * (r - s);
                if (c) {
                    var d = l / c, h = u / c, p =+ d.toFixed(2), f =+ h.toFixed(2);
                    if (!(p<+I(t, n).toFixed(2) || p>+z(t, n).toFixed(2) || p<+I(r, s).toFixed(2) || p>+z(r, s).toFixed(2) || f<+I(e, i).toFixed(2) || f>+z(e, i).toFixed(2) || f<+I(o, a).toFixed(2) || f>+z(o, a).toFixed(2)))
                        return {
                            x: d,
                            y: h
                        }
                }
            }
        }
        function g(t, e, n) {
            var i = u(t), r = u(e);
            if (!d(i, r))
                return n ? 0 : [];
            for (var o = p.apply(0, t), s = p.apply(0, e), a=~~(o / 8), c=~~(s / 8), h = [], f = [], g = {}, v = n ? 0 : [], y = 0; a + 1 > y; y++) {
                var b = l.apply(0, t.concat(y / a));
                h.push({
                    x: b.x,
                    y: b.y,
                    t: y / a
                })
            }
            for (y = 0; c + 1 > y; y++)
                b = l.apply(0, e.concat(y / c)), f.push({
                    x: b.x,
                    y: b.y,
                    t: y / c
                });
            for (y = 0; a > y; y++)
                for (var x = 0; c > x; x++) {
                    var _ = h[y], w = h[y + 1], k = f[x], C = f[x + 1], E = W(w.x - _.x) < .001 ? "y": "x", S = W(C.x - k.x) < .001 ? "y": "x", T = m(_.x, _.y, w.x, w.y, k.x, k.y, C.x, C.y);
                    if (T) {
                        if (g[T.x.toFixed(4)] == T.y.toFixed(4))
                            continue;
                            g[T.x.toFixed(4)] = T.y.toFixed(4);
                            var A = _.t + W((T[E] - _[E]) / (w[E] - _[E])) * (w.t - _.t), N = k.t + W((T[S] - k[S]) / (C[S] - k[S])) * (C.t - k.t);
                            A >= 0 && 1 >= A && N >= 0 && 1 >= N && (n ? v++ : v.push({
                                x: T.x,
                                y: T.y,
                                t1: A,
                                t2: N
                            }))
                        }
                }
            return v
        }
        function v(t, e) {
            return b(t, e)
        }
        function y(t, e) {
            return b(t, e, 1)
        }
        function b(t, e, n) {
            t = L(t), e = L(e);
            for (var i, r, o, s, a, l, u, c, d, h, p = n ? 0 : [], f = 0, m = t.length; m > f; f++) {
                var v = t[f];
                if ("M" == v[0])
                    i = a = v[1], r = l = v[2];
                else {
                    "C" == v[0] ? (d = [i, r].concat(v.slice(1)), i = d[6], r = d[7]) : (d = [i, r, i, r, a, l, a, l], i = a, r = l);
                    for (var y = 0, b = e.length; b > y; y++) {
                        var x = e[y];
                        if ("M" == x[0])
                            o = u = x[1], s = c = x[2];
                        else {
                            "C" == x[0] ? (h = [o, s].concat(x.slice(1)), o = h[6], s = h[7]) : (h = [o, s, o, s, u, c, u, c], o = u, s = c);
                            var _ = g(d, h, n);
                            if (n)
                                p += _;
                            else {
                                for (var w = 0, k = _.length; k > w; w++)
                                    _[w].segment1 = f, _[w].segment2 = y, _[w].bez1 = d, _[w].bez2 = h;
                                p = p.concat(_)
                            }
                        }
                    }
                }
            }
            return p
        }
        function x(t, e, n) {
            var i = _(t);
            return c(i, e, n) && b(t, [["M", e, n], ["H", i.x2 + 10]], 1)%2 == 1
        }
        function _(t) {
            var e = n(t);
            if (e.bbox)
                return q(e.bbox);
            if (!t)
                return i();
            t = L(t);
            for (var r, o = 0, s = 0, a = [], l = [], u = 0, c = t.length; c > u; u++)
                if (r = t[u], "M" == r[0])
                    o = r[1], s = r[2], a.push(o), l.push(s);
                else {
                    var d = N(o, s, r[1], r[2], r[3], r[4], r[5], r[6]);
                    a = a.concat(d.min.x, d.max.x), l = l.concat(d.min.y, d.max.y), o = r[5], s = r[6]
                }
            var h = I.apply(0, a), p = I.apply(0, l), f = z.apply(0, a), m = z.apply(0, l), g = i(h, p, f - h, m - p);
            return e.bbox = q(g), g
        }
        function w(t, e, n, i, o) {
            if (o)
                return [["M", + t + + o, e], ["l", n - 2 * o, 0], ["a", o, o, 0, 0, 1, o, o], ["l", 0, i - 2 * o], ["a", o, o, 0, 0, 1, - o, o], ["l", 2 * o - n, 0], ["a", o, o, 0, 0, 1, - o, - o], ["l", 0, 2 * o - i], ["a", o, o, 0, 0, 1, o, - o], ["z"]];
            var s = [["M", t, e], ["l", n, 0], ["l", 0, i], ["l", - n, 0], ["z"]];
            return s.toString = r, s
        }
        function k(t, e, n, i, o) {
            if (null == o && null == i && (i = n), t =+ t, e =+ e, n =+ n, i =+ i, null != o)
                var s = Math.PI / 180, a = t + n * Math.cos( - i * s), l = t + n * Math.cos( - o * s), u = e + n * Math.sin( - i * s), c = e + n * Math.sin( - o * s), d = [["M", a, u], ["A", n, n, 0, + (o - i > 180), 0, l, c]];
            else 
                d = [["M", t, e], ["m", 0, - i], ["a", n, i, 0, 1, 1, 0, 2 * i], ["a", n, i, 0, 1, 1, 0, - 2 * i], ["z"]];
            return d.toString = r, d
        }
        function C(e) {
            var i = n(e), s = String.prototype.toLowerCase;
            if (i.rel)
                return o(i.rel);
            t.is(e, "array") && t.is(e && e[0], "array") || (e = t.parsePathString(e));
            var a = [], l = 0, u = 0, c = 0, d = 0, h = 0;
            "M" == e[0][0] && (l = e[0][1], u = e[0][2], c = l, d = u, h++, a.push(["M", l, u]));
            for (var p = h, f = e.length; f > p; p++) {
                var m = a[p] = [], g = e[p];
                if (g[0] != s.call(g[0]))
                    switch (m[0] = s.call(g[0]), m[0]) {
                    case"a":
                        m[1] = g[1], m[2] = g[2], m[3] = g[3], m[4] = g[4], m[5] = g[5], m[6] =+ (g[6] - l).toFixed(3), m[7] =+ (g[7] - u).toFixed(3);
                        break;
                    case"v":
                        m[1] =+ (g[1] - u).toFixed(3);
                        break;
                    case"m":
                        c = g[1], d = g[2];
                    default:
                        for (var v = 1, y = g.length; y > v; v++)
                            m[v] =+ (g[v] - (v%2 ? l : u)).toFixed(3)
                        } else {
                    m = a[p] = [], "m" == g[0] && (c = g[1] + l, d = g[2] + u);
                    for (var b = 0, x = g.length; x > b; b++)
                        a[p][b] = g[b]
                        }
                var _ = a[p].length;
                switch (a[p][0]) {
                case"z":
                    l = c, u = d;
                    break;
                case"h":
                    l+=+a[p][_ - 1];
                    break;
                case"v":
                    u+=+a[p][_ - 1];
                    break;
                default:
                    l+=+a[p][_ - 2], u+=+a[p][_ - 1]
                }
            }
            return a.toString = r, i.rel = o(a), a
        }
        function E(e) {
            var i = n(e);
            if (i.abs)
                return o(i.abs);
            if (j(e, "array") && j(e && e[0], "array") || (e = t.parsePathString(e)), !e ||!e.length)
                return [["M", 0, 0]];
            var s, a = [], l = 0, u = 0, c = 0, d = 0, h = 0;
            "M" == e[0][0] && (l =+ e[0][1], u =+ e[0][2], c = l, d = u, h++, a[0] = ["M", l, u]);
            for (var p, f, m = 3 == e.length && "M" == e[0][0] && "R" == e[1][0].toUpperCase() && "Z" == e[2][0].toUpperCase(), g = h, v = e.length; v > g; g++) {
                if (a.push(p = []), f = e[g], s = f[0], s != s.toUpperCase())
                    switch (p[0] = s.toUpperCase(), p[0]) {
                    case"A":
                        p[1] = f[1], p[2] = f[2], p[3] = f[3], p[4] = f[4], p[5] = f[5], p[6] =+ f[6] + l, p[7] =+ f[7] + u;
                        break;
                    case"V":
                        p[1] =+ f[1] + u;
                        break;
                    case"H":
                        p[1] =+ f[1] + l;
                        break;
                    case"R":
                        for (var y = [l, u].concat(f.slice(1)), b = 2, x = y.length; x > b; b++)
                            y[b] =+ y[b] + l, y[++b] =+ y[b] + u;
                            a.pop(), a = a.concat(D(y, m));
                            break;
                        case"O":
                            a.pop(), y = k(l, u, f[1], f[2]), y.push(y[0]), a = a.concat(y);
                            break;
                        case"U":
                            a.pop(), a = a.concat(k(l, u, f[1], f[2], f[3])), p = ["U"].concat(a[a.length - 1].slice( - 2));
                            break;
                        case"M":
                            c =+ f[1] + l, d =+ f[2] + u;
                        default:
                            for (b = 1, x = f.length; x > b; b++)
                                p[b] =+ f[b] + (b%2 ? l : u)
                            } else if ("R" == s)
                    y = [l, u].concat(f.slice(1)), a.pop(), a = a.concat(D(y, m)), p = ["R"].concat(f.slice( - 2));
                else if ("O" == s)
                    a.pop(), y = k(l, u, f[1], f[2]), y.push(y[0]), a = a.concat(y);
                else if ("U" == s)
                    a.pop(), a = a.concat(k(l, u, f[1], f[2], f[3])), p = ["U"].concat(a[a.length - 1].slice( - 2));
                else 
                    for (var _ = 0, w = f.length; w > _; _++)
                        p[_] = f[_];
                if (s = s.toUpperCase(), "O" != s)
                    switch (p[0]) {
                    case"Z":
                        l =+ c, u =+ d;
                        break;
                    case"H":
                        l = p[1];
                        break;
                    case"V":
                        u = p[1];
                        break;
                    case"M":
                        c = p[p.length - 2], d = p[p.length - 1];
                    default:
                        l = p[p.length - 2], u = p[p.length - 1]
                    }
                }
            return a.toString = r, i.abs = o(a), a
        }
        function S(t, e, n, i) {
            return [t, e, n, i, n, i]
        }
        function T(t, e, n, i, r, o) {
            var s = 1 / 3, a = 2 / 3;
            return [s * t + a * n, s * e + a * i, s * r + a * n, s * o + a * i, r, o]
        }
        function A(e, n, i, r, o, s, a, l, u, c) {
            var d, h = 120 * H / 180, p = H / 180 * ( + o || 0), f = [], m = t._.cacher(function(t, e, n) {
                var i = t * B.cos(n) - e * B.sin(n), r = t * B.sin(n) + e * B.cos(n);
                return {
                    x: i,
                    y: r
                }
            });
            if (c)
                C = c[0], E = c[1], w = c[2], k = c[3];
            else {
                d = m(e, n, - p), e = d.x, n = d.y, d = m(l, u, - p), l = d.x, u = d.y;
                var g = (B.cos(H / 180 * o), B.sin(H / 180 * o), (e - l) / 2), v = (n - u) / 2, y = g * g / (i * i) + v * v / (r * r);
                y > 1 && (y = B.sqrt(y), i = y * i, r = y * r);
                var b = i * i, x = r * r, _ = (s == a?-1 : 1) * B.sqrt(W((b * x - b * v * v - x * g * g) / (b * v * v + x * g * g))), w = _ * i * v / r + (e + l) / 2, k = _*-r * g / i + (n + u) / 2, C = B.asin(((n - k) / r).toFixed(9)), E = B.asin(((u - k) / r).toFixed(9));
                C = w > e ? H - C : C, E = w > l ? H - E : E, 0 > C && (C = 2 * H + C), 0 > E && (E = 2 * H + E), a && C > E && (C -= 2 * H), !a && E > C && (E -= 2 * H)
            }
            var S = E - C;
            if (W(S) > h) {
                var T = E, N = l, L = u;
                E = C + h * (a && E > C ? 1 : - 1), l = w + i * B.cos(E), u = k + r * B.sin(E), f = A(l, u, i, r, o, 0, a, N, L, [E, T, w, k])
            }
            S = E - C;
            var F = B.cos(C), D = B.sin(C), M = B.cos(E), j = B.sin(E), q = B.tan(S / 4), R = 4 / 3 * i * q, P = 4 / 3 * r * q, $ = [e, n], I = [e + R * D, n - P * F], z = [l + R * j, u - P * M], O = [l, u];
            if (I[0] = 2 * $[0] - I[0], I[1] = 2 * $[1] - I[1], c)
                return [I, z, O].concat(f);
            f = [I, z, O].concat(f).join().split(",");
            for (var U = [], V = 0, X = f.length; X > V; V++)
                U[V] = V%2 ? m(f[V - 1], f[V], p).y : m(f[V], f[V + 1], p).x;
            return U
        }
        function N(t, e, n, i, r, o, s, a) {
            for (var l, u, c, d, h, p, f, m, g = [], v = [[], []], y = 0; 2 > y; ++y)
                if (0 == y ? (u = 6 * t - 12 * n + 6 * r, l =- 3 * t + 9 * n - 9 * r + 3 * s, c = 3 * n - 3 * t) : (u = 6 * e - 12 * i + 6 * o, l =- 3 * e + 9 * i - 9 * o + 3 * a, c = 3 * i - 3 * e), W(l) < 1e-12) {
                    if (W(u) < 1e-12)
                        continue;
                        d =- c / u, d > 0 && 1 > d && g.push(d)
                } else 
                    f = u * u - 4 * c * l, m = B.sqrt(f), 0 > f || (h = ( - u + m) / (2 * l), h > 0 && 1 > h && g.push(h), p = ( - u - m) / (2 * l), p > 0 && 1 > p && g.push(p));
            for (var b, x = g.length, _ = x; x--;)
                d = g[x], b = 1 - d, v[0][x] = b * b * b * t + 3 * b * b * d * n + 3 * b * d * d * r + d * d * d * s, v[1][x] = b * b * b * e + 3 * b * b * d * i + 3 * b * d * d * o + d * d * d * a;
            return v[0][_] = t, v[1][_] = e, v[0][_ + 1] = s, v[1][_ + 1] = a, v[0].length = v[1].length = _ + 2, {
                min: {
                    x: I.apply(0, v[0]),
                    y: I.apply(0, v[1])
                },
                max: {
                    x: z.apply(0, v[0]),
                    y: z.apply(0, v[1])
                }
            }
        }
        function L(t, e) {
            var i=!e && n(t);
            if (!e && i.curve)
                return o(i.curve);
            for (var r = E(t), s = e && E(e), a = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null
            }, l = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null
            }, u = (function(t, e, n) {
                var i, r;
                if (!t)
                    return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                switch (!(t[0]in{
                    T: 1,
                    Q: 1
                }) && (e.qx = e.qy = null), t[0]) {
                case"M":
                    e.X = t[1], e.Y = t[2];
                    break;
                case"A":
                    t = ["C"].concat(A.apply(0, [e.x, e.y].concat(t.slice(1))));
                    break;
                case"S":
                    "C" == n || "S" == n ? (i = 2 * e.x - e.bx, r = 2 * e.y - e.by) : (i = e.x, r = e.y), t = ["C", i, r].concat(t.slice(1));
                    break;
                case"T":
                    "Q" == n || "T" == n ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"].concat(T(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                    break;
                case"Q":
                    e.qx = t[1], e.qy = t[2], t = ["C"].concat(T(e.x, e.y, t[1], t[2], t[3], t[4]));
                    break;
                case"L":
                    t = ["C"].concat(S(e.x, e.y, t[1], t[2]));
                    break;
                case"H":
                    t = ["C"].concat(S(e.x, e.y, t[1], e.y));
                    break;
                case"V":
                    t = ["C"].concat(S(e.x, e.y, e.x, t[1]));
                    break;
                case"Z":
                    t = ["C"].concat(S(e.x, e.y, e.X, e.Y))
                }
                return t
            }), c = function(t, e) {
                if (t[e].length > 7) {
                    t[e].shift();
                    for (var n = t[e]; n.length;)
                        h[e] = "A", s && (p[e] = "A"), t.splice(e++, 0, ["C"].concat(n.splice(0, 6)));
                    t.splice(e, 1), v = z(r.length, s && s.length || 0)
                }
            }, d = function(t, e, n, i, o) {
                t && e && "M" == t[o][0] && "M" != e[o][0] && (e.splice(o, 0, ["M", i.x, i.y]), n.bx = 0, n.by = 0, n.x = t[o][1], n.y = t[o][2], v = z(r.length, s && s.length || 0))
            }, h = [], p = [], f = "", m = "", g = 0, v = z(r.length, s && s.length || 0); v > g; g++) {
                r[g] && (f = r[g][0]), "C" != f && (h[g] = f, g && (m = h[g - 1])), r[g] = u(r[g], a, m), "A" != h[g] && "C" == f && (h[g] = "C"), c(r, g), s && (s[g] && (f = s[g][0]), "C" != f && (p[g] = f, g && (m = p[g - 1])), s[g] = u(s[g], l, m), "A" != p[g] && "C" == f && (p[g] = "C"), c(s, g)), d(r, s, a, l, g), d(s, r, l, a, g);
                var y = r[g], b = s && s[g], x = y.length, _ = s && b.length;
                a.x = y[x - 2], a.y = y[x - 1], a.bx = $(y[x - 4]) || a.x, a.by = $(y[x - 3]) || a.y, l.bx = s && ($(b[_ - 4]) || l.x), l.by = s && ($(b[_ - 3]) || l.y), l.x = s && b[_ - 2], l.y = s && b[_ - 1]
            }
            return s || (i.curve = o(r)), s ? [r, s] : r
        }
        function F(t, e) {
            if (!e)
                return t;
            var n, i, r, o, s, a, l;
            for (t = L(t), r = 0, s = t.length; s > r; r++)
                for (l = t[r], o = 1, a = l.length; a > o; o += 2)
                    n = e.x(l[o], l[o + 1]), i = e.y(l[o], l[o + 1]), l[o] = n, l[o + 1] = i;
            return t
        }
        function D(t, e) {
            for (var n = [], i = 0, r = t.length; r - 2*!e > i; i += 2) {
                var o = [{
                    x: + t[i - 2],
                    y: + t[i - 1]
                }, {
                    x: + t[i],
                    y: + t[i + 1]
                }, {
                    x: + t[i + 2],
                    y: + t[i + 3]
                }, {
                    x: + t[i + 4],
                    y: + t[i + 5]
                }
                ];
                e ? i ? r - 4 == i ? o[3] = {
                    x: + t[0],
                    y: + t[1]
                } : r - 2 == i && (o[2] = {
                    x: + t[0],
                    y: + t[1]
                }, o[3] = {
                    x: + t[2],
                    y: + t[3]
                }) : o[0] = {
                    x: + t[r - 2],
                    y: + t[r - 1]
                } : r - 4 == i ? o[3] = o[2] : i || (o[0] = {
                    x: + t[i],
                    y: + t[i + 1]
                }), n.push(["C", ( - o[0].x + 6 * o[1].x + o[2].x) / 6, ( - o[0].y + 6 * o[1].y + o[2].y) / 6, (o[1].x + 6 * o[2].x - o[3].x) / 6, (o[1].y + 6 * o[2].y - o[3].y) / 6, o[2].x, o[2].y])
            }
            return n
        }
        var M = e.prototype, j = t.is, q = t._.clone, R = "hasOwnProperty", P = /,?([a-z]),?/gi, $ = parseFloat, B = Math, H = B.PI, I = B.min, z = B.max, O = B.pow, W = B.abs, U = a(1), V = a(), X = a(0, 1), G = t._unit2px, Q = {
            path: function(t) {
                return t.attr("path")
            },
            circle: function(t) {
                var e = G(t);
                return k(e.cx, e.cy, e.r)
            },
            ellipse: function(t) {
                var e = G(t);
                return k(e.cx || 0, e.cy || 0, e.rx, e.ry)
            },
            rect: function(t) {
                var e = G(t);
                return w(e.x || 0, e.y || 0, e.width, e.height, e.rx, e.ry)
            },
            image: function(t) {
                var e = G(t);
                return w(e.x || 0, e.y || 0, e.width, e.height)
            },
            line: function(t) {
                return "M" + [t.attr("x1") || 0, t.attr("y1") || 0, t.attr("x2"), t.attr("y2")]
            },
            polyline: function(t) {
                return "M" + t.attr("points")
            },
            polygon: function(t) {
                return "M" + t.attr("points") + "z"
            },
            deflt: function(t) {
                var e = t.node.getBBox();
                return w(e.x, e.y, e.width, e.height)
            }
        };
        t.path = n, t.path.getTotalLength = U, t.path.getPointAtLength = V, t.path.getSubpath = function(t, e, n) {
            if (this.getTotalLength(t) - n < 1e-6)
                return X(t, e).end;
            var i = X(t, n, 1);
            return e ? X(i, e).end : i
        }, M.getTotalLength = function() {
            return this.node.getTotalLength ? this.node.getTotalLength() : void 0
        }, M.getPointAtLength = function(t) {
            return V(this.attr("d"), t)
        }, M.getSubpath = function(e, n) {
            return t.path.getSubpath(this.attr("d"), e, n)
        }, t._.box = i, t.path.findDotsAtSegment = l, t.path.bezierBBox = u, t.path.isPointInsideBBox = c, t.closest = function(e, n, r, o) {
            for (var s = 100, a = i(e - s / 2, n - s / 2, s, s), l = [], u = r[0].hasOwnProperty("x") ? function(t) {
                return {
                    x: r[t].x,
                    y: r[t].y
                }
            } : function(t) {
                return {
                    x: r[t],
                    y: o[t]
                }
            }, d = 0; 1e6 >= s&&!d;) {
                for (var h = 0, p = r.length; p > h; h++) {
                    var f = u(h);
                    if (c(a, f.x, f.y)) {
                        d++, l.push(f);
                        break
                    }
                }
                d || (s*=2, a = i(e - s / 2, n - s / 2, s, s))
            }
            if (1e6 != s) {
                var m, g = 1 / 0;
                for (h = 0, p = l.length; p > h; h++) {
                    var v = t.len(e, n, l[h].x, l[h].y);
                    g > v && (g = v, l[h].len = v, m = l[h])
                }
                return m
            }
        }, t.path.isBBoxIntersect = d, t.path.intersection = v, t.path.intersectionNumber = y, t.path.isPointInside = x, t.path.getBBox = _, t.path.get = Q, t.path.toRelative = C, t.path.toAbsolute = E, t.path.toCubic = L, t.path.map = F, t.path.toString = r, t.path.clone = o
    }), i.plugin(function(t) {
        var i = Math.max, r = Math.min, o = function(t) {
            if (this.items = [], this.bindings = {}, this.length = 0, this.type = "set",
            t)
                for (var e = 0, n = t.length; n > e; e++)
                    t[e] && (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
        }, s = o.prototype;
        s.push = function() {
            for (var t, e, n = 0, i = arguments.length; i > n; n++)
                t = arguments[n], t && (e = this.items.length, this[e] = this.items[e] = t, this.length++);
            return this
        }, s.pop = function() {
            return this.length && delete this[this.length--], this.items.pop()
        }, s.forEach = function(t, e) {
            for (var n = 0, i = this.items.length; i > n; n++)
                if (t.call(e, this.items[n], n)===!1)
                    return this;
            return this
        }, s.animate = function(i, r, o, s) {
            "function" != typeof o || o.length || (s = o, o = n.linear), i instanceof t._.Animation && (s = i.callback, o = i.easing, r = o.dur, i = i.attr);
            var a = arguments;
            if (t.is(i, "array") && t.is(a[a.length - 1], "array"))
                var l=!0;
            var u, c = function() {
                u ? this.b = u : u = this.b
            }, d = 0, h = this, p = s && function() {
                ++d == h.length && s.call(this)
            };
            return this.forEach(function(t, n) {
                e.once("snap.animcreated." + t.id, c), l ? a[n] && t.animate.apply(t, a[n]) : t.animate(i, r, o, p)
            })
        }, s.remove = function() {
            for (; this.length;)
                this.pop().remove();
            return this
        }, s.bind = function(t, e, n) {
            var i = {};
            if ("function" == typeof e)
                this.bindings[t] = e;
            else {
                var r = n || t;
                this.bindings[t] = function(t) {
                    i[r] = t, e.attr(i)
                }
            }
            return this
        }, s.attr = function(t) {
            var e = {};
            for (var n in t)
                this.bindings[n] ? this.bindings[n](t[n]) : e[n] = t[n];
            for (var i = 0, r = this.items.length; r > i; i++)
                this.items[i].attr(e);
            return this
        }, s.clear = function() {
            for (; this.length;)
                this.pop()
        }, s.splice = function(t, e) {
            t = 0 > t ? i(this.length + t, 0) : t, e = i(0, r(this.length - t, e));
            var n, s = [], a = [], l = [];
            for (n = 2; n < arguments.length; n++)
                l.push(arguments[n]);
            for (n = 0; e > n; n++)
                a.push(this[t + n]);
            for (; n < this.length - t; n++)
                s.push(this[t + n]);
            var u = l.length;
            for (n = 0; n < u + s.length; n++)
                this.items[t + n] = this[t + n] = u > n ? l[n] : s[n - u];
            for (n = this.items.length = this.length -= e - u; this[n];)
                delete this[n++];
            return new o(a)
        }, s.exclude = function(t) {
            for (var e = 0, n = this.length; n > e; e++)
                if (this[e] == t)
                    return this.splice(e, 1), !0;
            return !1
        }, s.insertAfter = function(t) {
            for (var e = this.items.length; e--;)
                this.items[e].insertAfter(t);
            return this
        }, s.getBBox = function() {
            for (var t = [], e = [], n = [], o = [], s = this.items.length; s--;)
                if (!this.items[s].removed) {
                    var a = this.items[s].getBBox();
                    t.push(a.x), e.push(a.y), n.push(a.x + a.width), o.push(a.y + a.height)
                }
            return t = r.apply(0, t), e = r.apply(0, e), n = i.apply(0, n), o = i.apply(0, o), {
                x: t,
                y: e,
                x2: n,
                y2: o,
                width: n - t,
                height: o - e,
                cx: t + (n - t) / 2,
                cy: e + (o - e) / 2
            }
        }, s.clone = function(t) {
            t = new o;
            for (var e = 0, n = this.items.length; n > e; e++)
                t.push(this.items[e].clone());
            return t
        }, s.toString = function() {
            return "Snap\u2018s set"
        }, s.type = "set", t.Set = o, t.set = function() {
            var t = new o;
            return arguments.length && t.push.apply(t, Array.prototype.slice.call(arguments, 0)), t
        }
    }), i.plugin(function(t, n) {
        function i(t) {
            var e = t[0];
            switch (e.toLowerCase()) {
            case"t":
                return [e, 0, 0];
            case"m":
                return [e, 1, 0, 0, 1, 0, 0];
            case"r":
                return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
            case"s":
                return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
            }
        }
        function r(e, n, r) {
            n = m(n).replace(/\.{3}|\u2026/g, e), e = t.parseTransformString(e) || [], n = t.parseTransformString(n) || [];
            for (var o, s, a, l, d = Math.max(e.length, n.length), h = [], p = [], f = 0; d > f; f++) {
                if (a = e[f] || i(n[f]), l = n[f] || i(a), a[0] != l[0] || "r" == a[0].toLowerCase() && (a[2] != l[2] || a[3] != l[3]) || "s" == a[0].toLowerCase() && (a[3] != l[3] || a[4] != l[4])) {
                    e = t._.transform2matrix(e, r()), n = t._.transform2matrix(n, r()), h = [["m", e.a, e.b, e.c, e.d, e.e, e.f]], p = [["m", n.a, n.b, n.c, n.d, n.e, n.f]];
                    break
                }
                for (h[f] = [], p[f] = [], o = 0, s = Math.max(a.length, l.length);
                s > o;
                o++)o in a && (h[f][o] = a[o]), o in l && (p[f][o] = l[o])
            }
            return {
                from: c(h),
                to: c(p),
                f: u(h)
            }
        }
        function o(t) {
            return t
        }
        function s(t) {
            return function(e) {
                return + e.toFixed(3) + t
            }
        }
        function a(t) {
            return t.join(" ")
        }
        function l(e) {
            return t.rgb(e[0], e[1], e[2])
        }
        function u(t) {
            var e, n, i, r, o, s, a = 0, l = [];
            for (e = 0, n = t.length; n > e; e++) {
                for (o = "[", s = ['"' + t[e][0] + '"'], i = 1, r = t[e].length; r > i; i++)
                    s[i] = "val[" + a++ + "]";
                o += s + "]", l[e] = o
            }
            return Function("val", "return Snap.path.toString.call([" + l + "])")
        }
        function c(t) {
            for (var e = [], n = 0, i = t.length; i > n; n++)
                for (var r = 1, o = t[n].length; o > r; r++)
                    e.push(t[n][r]);
            return e
        }
        function d(t) {
            return isFinite(parseFloat(t))
        }
        function h(e, n) {
            return t.is(e, "array") && t.is(n, "array") ? e.toString() == n.toString() : !1
        }
        var p = {}, f = /[a-z]+$/i, m = String;
        p.stroke = p.fill = "colour", n.prototype.equal = function(t, n) {
            return e("snap.util.equal", this, t, n).firstDefined()
        }, e.on("snap.util.equal", function(e, n) {
            var i, g, v = m(this.attr(e) || ""), y = this;
            if (d(v) && d(n))
                return {
                    from: parseFloat(v),
                    to: parseFloat(n),
                    f: o
                };
            if ("colour" == p[e])
                return i = t.color(v), g = t.color(n), {
                    from: [i.r, i.g, i.b, i.opacity],
                    to: [g.r, g.g, g.b, g.opacity],
                    f: l
                };
            if ("viewBox" == e)
                return i = this.attr(e).vb.split(" ").map(Number), g = n.split(" ").map(Number), {
                    from: i,
                    to: g,
                    f: a
                };
            if ("transform" == e || "gradientTransform" == e || "patternTransform" == e)
                return n instanceof t.Matrix && (n = n.toTransformString()), t._.rgTransform.test(n) || (n = t._.svgTransform2string(n)), r(v, n, function() {
                    return y.getBBox(1)
                });
            if ("d" == e || "path" == e)
                return i = t.path.toCubic(v, n), {
                    from: c(i[0]),
                    to: c(i[1]),
                    f: u(i[0])
                };
            if ("points" == e)
                return i = m(v).split(t._.separator), g = m(n).split(t._.separator), {
                    from: i,
                    to: g,
                    f: function(t) {
                        return t
                    }
                };
            var b = v.match(f), x = m(n).match(f);
            return b && h(b, x) ? {
                from: parseFloat(v),
                to: parseFloat(n),
                f: s(b)
            } : {
                from: this.asPX(e),
                to: this.asPX(e, n),
                f: o
            }
        })
    }), i.plugin(function(t, n, i, r) {
        for (var o = n.prototype, s = "hasOwnProperty", a = ("createTouch"in r.doc), l = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], u = {
            mousedown: "touchstart",
            mousemove: "touchmove",
            mouseup: "touchend"
        }, c = (function(t, e) {
            var n = "y" == t ? "scrollTop": "scrollLeft", i = e && e.node ? e.node.ownerDocument: r.doc;
            return i[n in i.documentElement ? "documentElement": "body"][n]
        }), d = function() {
            return this.originalEvent.preventDefault()
        }, h = function() {
            return this.originalEvent.stopPropagation()
        }, p = function(t, e, n, i) {
            var r = a && u[e] ? u[e]: e, o = function(r) {
                var o = c("y", i), l = c("x", i);
                if (a && u[s](e))
                    for (var p = 0, f = r.targetTouches && r.targetTouches.length; f > p; p++)
                        if (r.targetTouches[p].target == t || t.contains(r.targetTouches[p].target)) {
                            var m = r;
                            r = r.targetTouches[p], r.originalEvent = m, r.preventDefault = d, r.stopPropagation = h;
                            break
                        }
                var g = r.clientX + l, v = r.clientY + o;
                return n.call(i, r, g, v)
            };
            return e !== r && t.addEventListener(e, o, !1), t.addEventListener(r, o, !1), function() {
                return e !== r && t.removeEventListener(e, o, !1), t.removeEventListener(r, o, !1), !0
            }
        }, f = [], m = function(t) {
            for (var n, i = t.clientX, r = t.clientY, o = c("y"), s = c("x"), l = f.length; l--;) {
                if (n = f[l], a) {
                    for (var u, d = t.touches && t.touches.length; d--;)
                        if (u = t.touches[d], u.identifier == n.el._drag.id || n.el.node.contains(u.target)) {
                            i = u.clientX, r = u.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
                            break
                        }
                } else 
                    t.preventDefault();
                var h = n.el.node;
                h.nextSibling, h.parentNode, h.style.display;
                i += s, r += o, e("snap.drag.move." + n.el.id, n.move_scope || n.el, i - n.el._drag.x, r - n.el._drag.y, i, r, t)
            }
        }, g = function(n) {
            t.unmousemove(m).unmouseup(g);
            for (var i, r = f.length; r--;)
                i = f[r], i.el._drag = {}, e("snap.drag.end." + i.el.id, i.end_scope || i.start_scope || i.move_scope || i.el, n), e.off("snap.drag.*." + i.el.id);
            f = []
        }, v = l.length; v--;)
            !function(e) {
                t[e] = o[e] = function(n, i) {
                    if (t.is(n, "function"))
                        this.events = this.events || [], this.events.push({
                            name: e,
                            f: n,
                            unbind: p(this.node || document, e, n, i || this)
                        });
                    else 
                        for (var r = 0, o = this.events.length; o > r; r++)
                            if (this.events[r].name == e)
                                try {
                                    this.events[r].f.call(this)
                                } catch (s) {}
                                return this
                            }, t["un" + e] = o["un" + e] = function(t) {
                                for (var n = this.events || [], i = n.length; i--;)
                                    if (n[i].name == e && (n[i].f == t ||!t))
                                        return n[i].unbind(), n.splice(i, 1), !n.length && delete this.events, this;
                                        return this
                                    }
                                }(l[v]);
        o.hover = function(t, e, n, i) {
            return this.mouseover(t, n).mouseout(e, i || n)
        }, o.unhover = function(t, e) {
            return this.unmouseover(t).unmouseout(e)
        };
        var y = [];
        o.drag = function(n, i, r, o, s, a) {
            function l(l, u, d) {
                (l.originalEvent || l).preventDefault(), c._drag.x = u, c._drag.y = d, c._drag.id = l.identifier, !f.length && t.mousemove(m).mouseup(g), f.push({
                    el: c,
                    move_scope: o,
                    start_scope: s,
                    end_scope: a
                }), i && e.on("snap.drag.start." + c.id, i), n && e.on("snap.drag.move." + c.id, n), r && e.on("snap.drag.end." + c.id, r), e("snap.drag.start." + c.id, s || o || c, u, d, l)
            }
            function u(t, n, i) {
                e("snap.draginit." + c.id, c, t, n, i)
            }
            var c = this;
            if (!arguments.length) {
                var d;
                return c.drag(function(t, e) {
                    this.attr({
                        transform: d + (d ? "T" : "t") + [t, e]
                    })
                }, function() {
                    d = this.transform().local
                })
            }
            return e.on("snap.draginit." + c.id, l), c._drag = {}, y.push({
                el: c,
                start: l,
                init: u
            }), c.mousedown(u), c
        }, o.undrag = function() {
            for (var n = y.length; n--;)
                y[n].el == this && (this.unmousedown(y[n].init), y.splice(n, 1), e.unbind("snap.drag.*." + this.id), e.unbind("snap.draginit." + this.id));
            return !y.length && t.unmousemove(m).unmouseup(g), this
        }
    }), i.plugin(function(t, n, i) {
        var r = (n.prototype, i.prototype), o = /^\s*url\((.+)\)/, s = String, a = t._.$;
        t.filter = {}, r.filter = function(e) {
            var i = this;
            "svg" != i.type && (i = i.paper);
            var r = t.parse(s(e)), o = t._.id(), l = (i.node.offsetWidth, i.node.offsetHeight, a("filter"));
            return a(l, {
                id: o,
                filterUnits: "userSpaceOnUse"
            }), l.appendChild(r.node), i.defs.appendChild(l), new n(l)
        }, e.on("snap.util.getattr.filter", function() {
            e.stop();
            var n = a(this.node, "filter");
            if (n) {
                var i = s(n).match(o);
                return i && t.select(i[1])
            }
        }), e.on("snap.util.attr.filter", function(i) {
            if (i instanceof n && "filter" == i.type) {
                e.stop();
                var r = i.node.id;
                r || (a(i.node, {
                    id: i.id
                }), r = i.id), a(this.node, {
                    filter: t.url(r)
                })
            }
            i && "none" != i || (e.stop(), this.node.removeAttribute("filter"))
        }), t.filter.blur = function(e, n) {
            null == e && (e = 2);
            var i = null == n ? e: [e, n];
            return t.format('<feGaussianBlur stdDeviation="{def}"/>', {
                def: i
            })
        }, t.filter.blur.toString = function() {
            return this ()
        }, t.filter.shadow = function(e, n, i, r, o) {
            return "string" == typeof i && (r = i, o = r, i = 4), "string" != typeof r && (o = r, r = "#000"), r = r || "#000", null == i && (i = 4), null == o && (o = 1), null == e && (e = 0, n = 2), null == n && (n = e), r = t.color(r), t.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
                color: r,
                dx: e,
                dy: n,
                blur: i,
                opacity: o
            })
        }, t.filter.shadow.toString = function() {
            return this ()
        }, t.filter.grayscale = function(e) {
            return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
                a: .2126 + .7874 * (1 - e),
                b: .7152 - .7152 * (1 - e),
                c: .0722 - .0722 * (1 - e),
                d: .2126 - .2126 * (1 - e),
                e: .7152 + .2848 * (1 - e),
                f: .0722 - .0722 * (1 - e),
                g: .2126 - .2126 * (1 - e),
                h: .0722 + .9278 * (1 - e)
            })
        }, t.filter.grayscale.toString = function() {
            return this ()
        }, t.filter.sepia = function(e) {
            return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
                a: .393 + .607 * (1 - e),
                b: .769 - .769 * (1 - e),
                c: .189 - .189 * (1 - e),
                d: .349 - .349 * (1 - e),
                e: .686 + .314 * (1 - e),
                f: .168 - .168 * (1 - e),
                g: .272 - .272 * (1 - e),
                h: .534 - .534 * (1 - e),
                i: .131 + .869 * (1 - e)
            })
        }, t.filter.sepia.toString = function() {
            return this ()
        }, t.filter.saturate = function(e) {
            return null == e && (e = 1), t.format('<feColorMatrix type="saturate" values="{amount}"/>', {
                amount: 1 - e
            })
        }, t.filter.saturate.toString = function() {
            return this ()
        }, t.filter.hueRotate = function(e) {
            return e = e || 0, t.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
                angle: e
            })
        }, t.filter.hueRotate.toString = function() {
            return this ()
        }, t.filter.invert = function(e) {
            return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
                amount: e,
                amount2: 1 - e
            })
        }, t.filter.invert.toString = function() {
            return this ()
        }, t.filter.brightness = function(e) {
            return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
                amount: e
            })
        }, t.filter.brightness.toString = function() {
            return this ()
        }, t.filter.contrast = function(e) {
            return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
                amount: e,
                amount2: .5 - e / 2
            })
        }, t.filter.contrast.toString = function() {
            return this ()
        }
    }), i.plugin(function(t, e) {
        var n = t._.box, i = t.is, r = /^[^a-z]*([tbmlrc])/i, o = function() {
            return "T" + this.dx + "," + this.dy
        };
        e.prototype.getAlign = function(t, e) {
            null == e && i(t, "string") && (e = t, t = null), t = t || this.paper;
            var s = t.getBBox ? t.getBBox(): n(t), a = this.getBBox(), l = {};
            switch (e = e && e.match(r), e = e ? e[1].toLowerCase() : "c") {
            case"t":
                l.dx = 0, l.dy = s.y - a.y;
                break;
            case"b":
                l.dx = 0, l.dy = s.y2 - a.y2;
                break;
            case"m":
                l.dx = 0, l.dy = s.cy - a.cy;
                break;
            case"l":
                l.dx = s.x - a.x, l.dy = 0;
                break;
            case"r":
                l.dx = s.x2 - a.x2, l.dy = 0;
                break;
            default:
                l.dx = s.cx - a.cx, l.dy = 0
            }
            return l.toString = o, l
        }, e.prototype.align = function(t, e) {
            return this.transform("..." + this.getAlign(t, e))
        }
    }), i
});
var Pizza = {
    version: "0.2.1",
    settings: {
        donut: !1,
        donut_inner_ratio: .4,
        percent_offset: 35,
        show_text: !0,
        animation_speed: 500,
        always_show_text: !1,
        show_grid: !0,
        bar_spacer: 100,
        bar_intervals: 6,
        animation_type: "elastic"
    },
    NS: "http://www.w3.org/2000/svg",
    init: function(t, e) {
        var n = this;
        this.scope = t || document.body;
        var i = $("[data-pie-id], [data-line-id], [data-bar-id]", this.scope);
        $.extend(!0, this.settings, e), i.length > 0 ? i.each(function() {
            return n.build($(this), e)
        }) : ($(this.scope).is("[data-pie-id]") || $(this.scope).is("[data-line-id]") || $(this.scope).is("[data-bar-id]")) && this.build($(this.scope), e), this.events()
    },
    events: function() {
        var t = this;
        $(window).off(".pizza").on("resize.pizza", t.throttle(function() {
            t.init()
        }, 500)), $(this.scope).off(".pizza"), this.pie_events(), this.line_events(), this.bar_events()
    },
    build: function(t, e) {
        t.data("settings", $.extend({}, this.settings, e, t.data("options"))), this.data(t, e || {}), t.data("pie-id") ? this.update_DOM(this.pie(t)) : t.data("line-id") ? this.update_DOM(this.line(t)) : t.data("bar-id") && this.update_DOM(this.bar(t))
    },
    data: function(t, e) {
        var n = [];
        return $("li", t).each(function() {
            var t = $(this);
            e.data ? n.push({
                value: e.data[t.index()],
                text: t.data("text"),
                color: t.css("color"),
                segment: t
            }) : n.push({
                x: t.data("x"),
                y: t.data("y"),
                value: t.data("value"),
                text: t.data("text"),
                color: t.css("color"),
                segment: t
            })
        }), t.data("graph-data", n)
    },
    update_DOM: function(t) {
        var e = t[0], n = t[1];
        return $(this.identifier(e)).html(n)
    },
    animate: function(t, e, n, i, r) {
        var r = r || 1.05;
        t.hover(function(t) {
            var o = Snap(t.target), s = Snap(o.node.nextSibling);
            o.animate({
                transform: "s" + r + " " + r + " " + e + " " + n
            }, i.animation_speed, mina[i.animation_type]), /text/.test(s.node.nodeName) && (s.touchend(function() {
                Snap(o).animate({
                    transform: "s" + r + " " + r + " " + e + " " + n
                }, i.animation_speed, mina[i.animation_type])
            }), i.show_text && (s.animate({
                opacity: 1
            }, i.animation_speed), s.touchend(function() {
                s.animate({
                    opacity: 1
                }, i.animation_speed)
            })))
        }, function(t) {
            var r = Snap(t.target), o = Snap(r.node.nextSibling);
            r.animate({
                transform: "s1 1 " + e + " " + n
            }, i.animation_speed, mina[i.animation_type]), /text/.test(o.node.nodeName) && o.animate({
                opacity: 0
            }, i.animation_speed)
        })
    },
    parse_options: function(t, e, n) {
        for (var i = t.match(/{{(percent|value)}}/g), r = "", o = 0; o < i.length; o++) 
            / percent / i.test(i[o]) && (r = t.replace(i[o], [Math.ceil(e), "%"].join(""))), /value/i.test(i[o]) && (r = r.replace(i[o], n));
        return r
    },
    svg: function(t, e) {
        var n = $(this.identifier(t)), i = $("svg", n), r = n.width(), o = t.attr("data-pie-id"), s = n.height();
        if (i.length > 0)
            i = i[0];
        else {
            var i = this.svg_obj("svg");
            i.width = r, i.height = s
        }
        if (o)
            var a = "-" + e.percent_offset + " -" + e.percent_offset + " " + (r + 1.5 * e.percent_offset) + " " + (r + 1.5 * e.percent_offset);
        else 
            var a = "-" + e.percent_offset + " -" + e.percent_offset + " " + (r + 1.6 * e.percent_offset) + " " + (s + 1.6 * e.percent_offset);
        return this.set_attr(i, {
            width: "100%",
            height: "100%",
            viewBox: a
        }), i
    },
    identifier: function(t) {
        return id = t.data("pie-id") || t.data("bar-id") || t.data("line-id"), "#" + id
    },
    throttle: function(t, e) {
        var n = null;
        return function() {
            var i = this, r = arguments;
            clearTimeout(n), n = setTimeout(function() {
                t.apply(i, r)
            }, e)
        }
    },
    svg_obj: function(t) {
        return document.createElementNS(this.NS, t)
    },
    ticks: function(t, e, n) {
        var r = e - t, o = Math.pow(10, Math.floor(Math.log(r / n) / Math.LN10)), s = n / r * o;
        .15 >= s ? o*=10 : .35 >= s ? o*=5 : .75 >= s && (o*=2);
        var a = Math.ceil(t / o) * o, l = Math.floor(e / o) * o + .5 * o, u = [];
        for (i = a; i < l; i += o)
            u.push(i);
        return u
    },
    set_attr: function(t, e) {
        for (attr in e)
            t.setAttribute(attr, e[attr]);
        return this
    },
    flip: function(t, e) {
        t.setAttribute("transform", "translate(0, " + e + ") scale(1, -1)")
    }
};
$.extend(Pizza, {
    bar: function(t) {
        var e = t.data("settings"), n = this.svg(t, e), i = t.data("graph-data"), r = 0, o = $(this.identifier(t)), s = o.outerWidth(), a = o.outerHeight(), l = min = 0, u = 0, c = e.bar_spacer * (e.bar_spacer / s), d = (s - i.length * c) / i.length;
        10 > d && (c = 1, d = (s - i.length * c) / i.length);
        for (var h = 0; h < i.length; h++)
            l < i[h].value && (l = i[h].value), min > i[h].value && (min = i[h].value), u += i[h].value;
        var p = $("g[data-id=bars]", n);
        if (p.length > 0)
            var f = p[0];
        else {
            var f = this.svg_obj("g");
            f.setAttribute("data-id", "bars")
        }
        e.show_grid && this.assemble_grid(n, min, l, s, a, e), f.setAttribute("transform", "translate(0, " + a + ") scale(1, -1)");
        for (var h = 0; h < i.length; h++) {
            var m = a * (i[h].value / l), g = $("rect[data-id=r" + h + "]", f);
            if (g.length > 0)
                var v = g[0];
            else {
                var v = this.svg_obj("rect");
                v.setAttribute("data-id", "r" + h)
            }
            if (0 === r)
                var y = r;
            else 
                var y = r + c;
            v.setAttribute("data-y", m), this.set_attr(v, {
                x: y,
                y: 0,
                width: d,
                height: 0,
                fill: i[h].color,
                stroke: e.stroke_color,
                strokeWidth: e.stroke_width
            }), Snap(v).animate({
                height: m
            }, 1500, mina[e.animation_type]), r = y + d, p.length < 1 && (f.appendChild(v), this.animate_bar(Snap(v), m, e))
        }
        return p.length < 1 && n.appendChild(f), [t, n]
    },
    animate_bar: function(t, e, n) {
        var i = ($(t), e + 15);
        t.hover(function(t) {
            var e = Snap(t.target);
            e.animate({
                height: i
            }, n.animation_speed, mina[n.animation_type])
        }, function(t) {
            var i = Snap(t.target);
            i.animate({
                height: e
            }, n.animation_speed, mina[n.animation_type])
        })
    },
    assemble_grid: function(t, e, n, r, o, s) {
        var a = $("g[data-id=bars]", t);
        if (a.length > 0)
            var l = $("g[data-id=grid]", t)[0], u = $("g[data-id=labels]", t)[0];
        else {
            var l = this.svg_obj("g"), u = this.svg_obj("g");
            l.setAttribute("data-id", "grid"), u.setAttribute("data-id", "labels")
        }
        for (var c = this.ticks(e, n, s.bar_intervals), d = i = c.length, h = o / (d - 1), p = 0; i--;) {
            if (a.length > 0)
                var f = $("line[data-id=l" + i + "]", l)[0], m = $("text[data-id=t" + i + "]", u)[0];
            else {
                var f = this.svg_obj("line"), m = this.svg_obj("text");
                f.setAttribute("data-id", "l" + i), m.setAttribute("data-id", "t" + i)
            }
            var g = p + h;
            this.set_attr(f, {
                x1: 0,
                x2: r,
                y1: g,
                y2: g,
                stroke: "gray",
                "stroke-width": 1,
                "stroke-dasharray": "5,5"
            }).set_attr(m, {
                x: - 8,
                y: g + 5,
                "text-anchor": "end"
            }), m.innerHTML = c[i], a.length < 1 && (l.appendChild(f), u.appendChild(m)), p = g
        }
        l.setAttribute("transform", "translate(0, -" + p / d + ")"), u.setAttribute("transform", "translate(0, -" + p / d + ")"), a.length < 1 && (t.appendChild(l), t.appendChild(u))
    },
    bar_events: function() {
        $(this.scope).on("mouseenter.pizza mouseleave.pizza touchstart.pizza", "[data-bar-id] li", function(t) {
            var e = $(this).parent(), n = $("#" + e.attr("data-bar-id") + " rect[data-id=r" + $(this).index() + "]")[0], i = $(this).parent().data("settings"), r = parseInt(n.getAttribute("data-y"), 10) + 15;
            /start/i.test(t.type) && $(n).siblings("rect").each(function() {
                this.nodeName && Snap(n).animate({
                    height: n.getAttribute("data-y")
                }, i.animation_speed, mina[i.animation_type])
            }), /enter|start/i.test(t.type) ? Snap(n).animate({
                height: r
            }, i.animation_speed, mina[i.animation_type]) : Snap(n).animate({
                height: n.getAttribute("data-y")
            }, i.animation_speed, mina[i.animation_type])
        })
    }
}), $.extend(Pizza, {
    line: function(t) {
        for (var e = t.data("settings"), n = this.svg(t, e), i = $(this.identifier(t)), r = i.outerWidth(), o = i.outerHeight(), s = t.data("graph-data"), a = max_y = min_x = min_y = total_x = total_y = 0, l = s.length, u = "", l = 0; l < s.length; l++)
            s[l].x > a && (a = s[l].x), s[l].y > max_y && (max_y = s[l].y), min_x > s[l].x && (min_x = s[l].x), min_y > s[l].y && (min_y = s[l].y), total_x += s[l].x, total_y += s[l].y;
        var c = $("g[data-id=line]", n);
        if (c.length > 0)
            var d = $("g[data-id=line]", n)[0], h = $("g[data-id=points]", n)[0], p = $("path[data-id=path]", d)[0];
        else {
            var p = this.svg_obj("path"), d = this.svg_obj("g"), h = this.svg_obj("g");
            d.setAttribute("data-id", "line"), h.setAttribute("data-id", "points"), p.setAttribute("data-id", "path")
        }
        for (var l = 0; l < s.length; l++) {
            if (c.length > 0)
                var f = $("circle[data-id=c" + l + "]", h)[0];
            else {
                var f = this.svg_obj("circle");
                f.setAttribute("data-id", "c" + l)
            }
            var m = s[l].x / a * r, g = s[l].y / max_y * o;
            u += m + "," + g + " ", this.set_attr(f, {
                cx: m,
                cy: g,
                r: 0,
                fill: s[l.color],
                "data-value": s[l].x + ", " + s[l].y,
                "data-tooltip": "",
                title: s[l].x + ", " + s[l].y,
                "class": "has-tip tip-top"
            }), Snap(f).animate({
                r: 4
            }, 1500, mina[e.animation_type]), this.animate(Snap(f), m, g, e, 2), c.length < 1 && h.appendChild(f)
        }
        this.flip(h, o), this.flip(d, o), e.show_grid && (this.assemble_grid_x(n, min_x, a, r, o, e), this.assemble_grid_y(n, min_y, max_y, r, o, e));
        var v = this.points_to_path(u);
        return this.set_attr(p, {
            d: v,
            fill: "none",
            stroke: "black",
            "stroke-width": 2
        }), c.length < 1 && (d.appendChild(p), n.appendChild(d)), c.length < 1 && n.appendChild(h), [t, n]
    },
    assemble_grid_x: function(t, e, n, r, o, s) {
        var a = $("g[data-id=gridx]", t);
        if (a.length > 0)
            var l = a[0], u = $("g[data-id=labelx]", t)[0];
        else {
            var l = this.svg_obj("g"), u = this.svg_obj("g");
            l.setAttribute("data-id", "gridx"), u.setAttribute("data-id", "labelx")
        }
        for (var c = this.ticks(e, n, s.bar_intervals).reverse(), d = i = c.length, h = 0, p = r / (d - 1); i--;) {
            if (a.length > 0)
                var f = $("line[data-id=l" + i + "]", l)[0], m = $("text[data-id=t" + i + "]", u)[0];
            else {
                var f = this.svg_obj("line"), m = this.svg_obj("text");
                f.setAttribute("data-id", "l" + i), m.setAttribute("data-id", "t" + i)
            }
            var g = h + p;
            this.set_attr(f, {
                x1: g,
                x2: g,
                y1: 0,
                y2: o,
                stroke: "gray",
                "stroke-width": 1,
                "stroke-dasharray": "5,5"
            }).set_attr(m, {
                y: o + 20,
                x: g - p,
                "text-anchor": "middle"
            }), a.length < 1 && (m.innerHTML = c[i], u.appendChild(m), l.appendChild(f)), h = g
        }
        l.setAttribute("transform", "translate(-" + p + ", 0)"), a.length < 1 && (t.appendChild(l), t.appendChild(u))
    },
    assemble_grid_y: function(t, e, n, r, o, s) {
        var a = $("g[data-id=gridy]", t);
        if (a.length > 0)
            var l = a[0], u = $("g[data-id=labely]", t)[0];
        else {
            var l = this.svg_obj("g"), u = this.svg_obj("g");
            l.setAttribute("data-id", "gridy"), u.setAttribute("data-id", "labely")
        }
        for (var c = this.ticks(e, n, s.bar_intervals), d = i = c.length, h = 0; i--;) {
            if (a.length > 0)
                var p = $("line[data-id=l" + i + "]", l)[0], f = $("text[data-id=t" + i + "]", u)[0];
            else {
                var p = this.svg_obj("line"), f = this.svg_obj("text");
                p.setAttribute("data-id", "l" + i), f.setAttribute("data-id", "t" + i)
            }
            var m = h + o / (d - 1);
            this.set_attr(p, {
                x1: 0,
                x2: r,
                y1: m,
                y2: m,
                stroke: "gray",
                "stroke-width": 1,
                "stroke-dasharray": "5,5"
            }).set_attr(f, {
                x: - 8,
                y: m + 5,
                "text-anchor": "end"
            }), a.length < 1 && (u.appendChild(f), l.appendChild(p), f.innerHTML = c[i]), h = m
        }
        l.setAttribute("transform", "translate(0, -" + h / d + ")"), u.setAttribute("transform", "translate(0, -" + h / d + ")"), a.length < 1 && (t.appendChild(l), t.appendChild(u))
    },
    points_to_path: function(t) {
        var t = t.split(/\s+|,/), e = t.shift(), n = t.shift();
        "M" + e + "," + n + "L" + t.join(" ");
        return ["M" + e + "," + n + "L"].concat(t).join(" ")
    },
    line_events: function() {
        $(this.scope).on("mouseenter.pizza mouseleave.pizza touchstart.pizza", "[data-line-id] li", function(t) {
            var e = $(this).parent(), n = $("#" + e.data("line-id") + ' circle[data-id="c' + $(this).index() + '"]')[0], i = $(this).parent().data("settings");
            /start/i.test(t.type) && $(n).siblings("circle").each(function() {
                this.nodeName && Snap(n).animate({
                    transform: "s1 1 " + n.getAttribute("cx") + " " + n.getAttribute("cy")
                }, i.animation_speed, mina[i.animation_type])
            }), /enter|start/i.test(t.type) ? (Snap(n).animate({
                transform: "s2 2 " + n.getAttribute("cx") + " " + n.getAttribute("cy")
            }, i.animation_speed, mina[i.animation_type]), $(n).trigger("mouseenter")) : (Snap(n).animate({
                transform: "s1 1 " + n.getAttribute("cx") + " " + n.getAttribute("cy")
            }, i.animation_speed, mina[i.animation_type]), $(n).trigger("mouseout"))
        })
    }
}), $.extend(Pizza, {
    pie: function(t) {
        for (var e = t.data("settings"), n = this.svg(t, e), i = t.data("graph-data"), r = 0, o = [], s = 0, a = $(this.identifier(t)), l = a.outerWidth(), u = 0; u < i.length; u++)
            r += i[u].value;
        for (var u = 0; u < i.length; u++)
            o[u] = i[u].value / r * Math.PI * 2;
        1 == o.length && (o[0] = 2 * Math.PI - 1e-4);
        for (var u = 0; u < i.length; u++) {
            var c = s + o[u], d = l / 2, h = l / 2, p = l / 2 * .85;
            if (!e.donut) {
                var f = d + p * Math.sin(s), m = h - p * Math.cos(s), g = d + p * Math.sin(c), v = h - p * Math.cos(c), y = 0;
                c - s > Math.PI && (y = 1);
                var b = "M" + d + "," + h + " L" + f + "," + m + " A" + p + "," + p + " 0 " + y + " 1 " + g + "," + v + " Z"
            }
            var x = $('path[data-id="s' + u + '"]', n);
            if (x.length > 0)
                var _ = x[0];
            else 
                var _ = this.svg_obj("path");
            var w = i[u].value / r * 100, k = $('text[data-id="s' + u + '"]', n);
            if (k.length > 0) {
                var C = k[0];
                C.setAttribute("x", d + (p + e.percent_offset) * Math.sin(s + o[u] / 2)), C.setAttribute("y", h - (p + e.percent_offset) * Math.cos(s + o[u] / 2))
            } else {
                if (i[u].text)
                    var E = this.parse_options(i[u].text, w, i[u].value);
                else 
                    var E = Math.ceil(w) + "%";
                var C = this.svg_obj("text");
                C.setAttribute("x", d + (p + e.percent_offset) * Math.sin(s + o[u] / 2)), C.setAttribute("y", h - (p + e.percent_offset) * Math.cos(s + o[u] / 2)), C.innerHTML = E
            }
            C.setAttribute("text-anchor", "middle"), e.always_show_text ? Snap(C).animate({
                opacity: 1
            }, e.animation_speed) : Snap(C).attr({
                opacity: 0
            }, e.animation_speed), C.setAttribute("data-id", "s" + u), e.donut ? this.annular_sector(_, {
                centerX: d,
                centerY: h,
                startDegrees: s,
                endDegrees: c,
                innerRadius: p * e.donut_inner_ratio,
                outerRadius: p
            }) : _.setAttribute("d", b), this.set_attr(_, {
                fill: i[u].color,
                stroke: e.stroke_color,
                strokeWidth: e.stroke_width,
                "data-cx": d,
                "data-cy": h,
                "data-id": "s" + u
            });
            var S = $("g[data-id=g" + u + "]", n);
            if (S.length < 1) {
                var T = this.svg_obj("g");
                T.setAttribute("data-id", "g" + u), T.appendChild(_), T.appendChild(C), n.appendChild(T), this.animate(Snap(_), d, h, e)
            }
            s = c
        }
        return [t, n]
    },
    annular_sector: function(t, e) {
        function n(t) {
            var e = {
                cx: t.centerX || 0,
                cy: t.centerY || 0,
                startRadians: t.startDegrees || 0,
                closeRadians: t.endDegrees || 0
            }, n = void 0 !== t.thickness ? t.thickness : 100;
            return void 0 !== t.innerRadius ? e.r1 = t.innerRadius : void 0 !== t.outerRadius ? e.r1 = t.outerRadius - n : e.r1 = 200 - n, void 0 !== t.outerRadius ? e.r2 = t.outerRadius : e.r2 = e.r1 + n, e.r1 < 0 && (e.r1 = 0), e.r2 < 0 && (e.r2 = 0), e
        }
        var i = n(e), r = [[i.cx + i.r2 * Math.sin(i.startRadians), i.cy - i.r2 * Math.cos(i.startRadians)], [i.cx + i.r2 * Math.sin(i.closeRadians), i.cy - i.r2 * Math.cos(i.closeRadians)], [i.cx + i.r1 * Math.sin(i.closeRadians), i.cy - i.r1 * Math.cos(i.closeRadians)], [i.cx + i.r1 * Math.sin(i.startRadians), i.cy - i.r1 * Math.cos(i.startRadians)]], o = i.closeRadians - i.startRadians, s = o%(2 * Math.PI) > Math.PI ? 1: 0, a = [];
        a.push("M" + r[0].join()), a.push("A" + [i.r2, i.r2, 0, s, 1, r[1]].join()), a.push("L" + r[2].join()), a.push("A" + [i.r1, i.r1, 0, s, 0, r[3]].join()), a.push("z"), t.setAttribute("d", a.join(" "))
    },
    pie_events: function() {
        $(this.scope).on("mouseenter.pizza mouseleave.pizza touchstart.pizza", "[data-pie-id] li", function(t) {
            var e = $(this).parent(), n = $("#" + e.attr("data-pie-id") + ' path[data-id="s' + $(this).index() + '"]')[0], i = n.nextSibling, r = $(this).parent().data("settings");
            /start/i.test(t.type) && $(n).siblings("path").each(function() {
                this.nodeName && (Snap(n).animate({
                    transform: "s1 1 " + n.getAttribute("data-cx") + " " + n.getAttribute("data-cy")
                }, r.animation_speed, mina[r.animation_type]), Snap($(this).next()[0]).animate({
                    opacity: 0
                }, r.animation_speed))
            }), /enter|start/i.test(t.type) ? (Snap(n).animate({
                transform: "s1.05 1.05 " + n.getAttribute("data-cx") + " " + n.getAttribute("data-cy")
            }, r.animation_speed, mina[r.animation_type]), r.show_text && Snap(i).animate({
                opacity: 1
            }, r.animation_speed)) : (Snap(n).animate({
                transform: "s1 1 " + n.getAttribute("data-cx") + " " + n.getAttribute("data-cy")
            }, r.animation_speed, mina[r.animation_type]), Snap(i).animate({
                opacity: 0
            }, r.animation_speed))
        })
    }
}), function(t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.NProgress = e()
}(this, function() {
    function t(t, e, n) {
        return e > t ? e : t > n ? n : t
    }
    function e(t) {
        return 100 * ( - 1 + t)
    }
    function n(t, n, i) {
        var r;
        return r = "translate3d" === u.positionUsing ? {
            transform: "translate3d(" + e(t) + "%,0,0)"
        } : "translate" === u.positionUsing ? {
            transform: "translate(" + e(t) + "%,0)"
        } : {
            "margin-left": e(t) + "%"
        }, r.transition = "all " + n + "ms " + i, r
    }
    function i(t, e) {
        var n = "string" == typeof t ? t: s(t);
        return n.indexOf(" " + e + " ") >= 0
    }
    function r(t, e) {
        var n = s(t), r = n + e;
        i(n, e) || (t.className = r.substring(1))
    }
    function o(t, e) {
        var n, r = s(t);
        i(t, e) && (n = r.replace(" " + e + " ", " "), t.className = n.substring(1, n.length - 1))
    }
    function s(t) {
        return (" " + (t.className || "") + " ").replace(/\s+/gi, " ")
    }
    function a(t) {
        t && t.parentNode && t.parentNode.removeChild(t)
    }
    var l = {};
    l.version = "0.1.6";
    var u = l.settings = {
        minimum: .08,
        easing: "ease",
        positionUsing: "",
        speed: 200,
        trickle: !0,
        trickleRate: .02,
        trickleSpeed: 800,
        showSpinner: !0,
        barSelector: '[role="bar"]',
        spinnerSelector: '[role="spinner"]',
        parent: "body",
        template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    l.configure = function(t) {
        var e, n;
        for (e in t)
            n = t[e], void 0 !== n && t.hasOwnProperty(e) && (u[e] = n);
        return this
    }, l.status = null, l.set = function(e) {
        var i = l.isStarted();
        e = t(e, u.minimum, 1), l.status = 1 === e ? null : e;
        var r = l.render(!i), o = r.querySelector(u.barSelector), s = u.speed, a = u.easing;
        return r.offsetWidth, c(function(t) {
            "" === u.positionUsing && (u.positionUsing = l.getPositioningCSS()), d(o, n(e, s, a)), 1 === e ? (d(r, {
                transition: "none",
                opacity: 1
            }), r.offsetWidth, setTimeout(function() {
                d(r, {
                    transition: "all " + s + "ms linear",
                    opacity: 0
                }), setTimeout(function() {
                    l.remove(), t()
                }, s)
            }, s)) : setTimeout(t, s)
        }), this
    }, l.isStarted = function() {
        return "number" == typeof l.status
    }, l.start = function() {
        l.status || l.set(0);
        var t = function() {
            setTimeout(function() {
                l.status && (l.trickle(), t())
            }, u.trickleSpeed)
        };
        return u.trickle && t(), this
    }, l.done = function(t) {
        return t || l.status ? l.inc(.3 + .5 * Math.random()).set(1) : this
    }, l.inc = function(e) {
        var n = l.status;
        return n ? ("number" != typeof e && (e = (1 - n) * t(Math.random() * n, .1, .95)), n = t(n + e, 0, .994), l.set(n)) : l.start()
    }, l.trickle = function() {
        return l.inc(Math.random() * u.trickleRate)
    }, function() {
        var t = 0, e = 0;
        l.promise = function(n) {
            return n && "resolved" != n.state() ? (0 == e && l.start(), t++, e++, n.always(function() {
                e--, 0 == e ? (t = 0, l.done()) : l.set((t - e) / t)
            }), this) : this
        }
    }(), l.render = function(t) {
        if (l.isRendered())
            return document.getElementById("nprogress");
        r(document.documentElement, "nprogress-busy");
        var n = document.createElement("div");
        n.id = "nprogress", n.innerHTML = u.template;
        var i, o = n.querySelector(u.barSelector), s = t ? "-100": e(l.status || 0), c = document.querySelector(u.parent);
        return d(o, {
            transition: "all 0 linear",
            transform: "translate3d(" + s + "%,0,0)"
        }), u.showSpinner || (i = n.querySelector(u.spinnerSelector), i && a(i)), c != document.body && r(c, "nprogress-custom-parent"), c.appendChild(n), n
    }, l.remove = function() {
        o(document.documentElement, "nprogress-busy"), o(document.querySelector(u.parent), "nprogress-custom-parent");
        var t = document.getElementById("nprogress");
        t && a(t)
    }, l.isRendered = function() {
        return !!document.getElementById("nprogress")
    }, l.getPositioningCSS = function() {
        var t = document.body.style, e = "WebkitTransform"in t ? "Webkit": "MozTransform"in t ? "Moz": "msTransform"in t ? "ms": "OTransform"in t ? "O": "";
        return e + "Perspective"in t ? "translate3d" : e + "Transform"in t ? "translate" : "margin"
    };
    var c = function() {
        function t() {
            var n = e.shift();
            n && n(t)
        }
        var e = [];
        return function(n) {
            e.push(n), 1 == e.length && t()
        }
    }(), d = function() {
        function t(t) {
            return t.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(t, e) {
                return e.toUpperCase()
            })
        }
        function e(t) {
            var e = document.body.style;
            if (t in e)
                return t;
            for (var n, i = r.length, o = t.charAt(0).toUpperCase() + t.slice(1); i--;)
                if (n = r[i] + o, n in e)
                    return n;
            return t
        }
        function n(n) {
            return n = t(n), o[n] || (o[n] = e(n))
        }
        function i(t, e, i) {
            e = n(e), t.style[e] = i
        }
        var r = ["Webkit", "O", "Moz", "ms"], o = {};
        return function(t, e) {
            var n, r, o = arguments;
            if (2 == o.length)
                for (n in e)
                    r = e[n], void 0 !== r && e.hasOwnProperty(n) && i(t, n, r);
            else 
                i(t, o[1], o[2])
        }
    }();
    return l
}), jQuery(function() {
    jQuery(document).on("page:fetch", function() {
        NProgress.start()
    }), jQuery(document).on("page:receive", function() {
        NProgress.set(.7)
    }), jQuery(document).on("page:change", function() {
        NProgress.done()
    }), jQuery(document).on("page:restore", function() {
        NProgress.remove()
    })
}), jQuery(function() {
    jQuery(document).on("ajaxStart", function() {
        NProgress.start()
    }), jQuery(document).on("ajaxStop", function() {
        NProgress.done()
    })
}), function() {
    window.Escarole = {}, Escarole.utils = {
        bindAddFieldsBehavior: function(t, e) {
            return null == e && (e = []), $("form").on("click", ".add_fields", function(n) {
                var i, r, o;
                return o = (new Date).getTime(), r = new RegExp($(this).data("id"), "g"), i = $(this).data("fields").replace(r, o), t.append(i), n.preventDefault(), $.each(e, function(t, e) {
                    return e($(i))
                })
            })
        },
        bindAddCustomBehavior: function(t, e) {
            return null == e && (e = "unit"), t.append("<option data-custom-thing=true>+ Add custom " + e + "</option>"), Escarole.utils.watchForAddCustom(t)
        },
        watchForAddCustom: function(t) {
            return t.on("change", function() {
                var t, e, n, i, r;
                return i = $(this).parent().html(), t = $(this).find("option:selected"), n = $(this).data("alternative-fields"), t.data("custom-thing") ? ($(this).parent().append(n), $(this).remove(), r = $("<div>" + n + "</div>").find("input[type='text']").attr("id"), e = $("#" + r), e.data("select-list", i), e.focus(), Escarole.utils.watchForEscape(e)) : void 0
            })
        },
        switchBackToSelect: function(t) {
            var e, n;
            return n = $("<div>" + t.data("select-list") + "</div>").find("select").clone().wrap("<div>").parent(), t.parent().append(n.html()), t.parent().find("input").remove(), e = $("select#" + $(n.html()).attr("id")), t.remove(), e
        },
        watchForEscape: function(t) {
            return t.on("blur", function() {
                var t;
                return void 0 === $(this).val() || "" === $(this).val() ? (t = Escarole.utils.switchBackToSelect($(this)), Escarole.utils.watchForAddCustom(t)) : void 0;
            }), t.on("keyup", function(t) {
                var e;
                return 27 === t.keyCode ? (e = Escarole.utils.switchBackToSelect($(this)), Escarole.utils.watchForAddCustom(e)) : void 0
            })
        }
    }
}.call(this), function() {
    jQuery(function() {
        var t;
        Escarole.utils.bindAddCustomBehavior($("#inventory_item_inventory_item_category_id"), "category"), Escarole.utils.bindAddCustomBehavior($("#inventory_item_manufacturer_id"), "manufacturer"), Escarole.utils.bindAddCustomBehavior($("#inventory_item_supplier_id"), "supplier"), Escarole.utils.bindAddCustomBehavior($("#inventory_item_other_unit_id"), "custom unit"), (t = function() {
            var t, e, n, i;
            n = void 0, i = void 0, t = void 0, e = void 0, n = function(t, e) {
                return $(e).data("name") < $(t).data("name") ? 1 : - 1
            }, i = function(t, e) {
                return $(e).data("name") > $(t).data("name") ? 1 : - 1
            }, t = function(t, e) {
                return $(e).data("category") < $(t).data("category") ? 1 : - 1
            }, e = function(t, e) {
                return $(e).data("category") > $(t).data("category") ? 1 : - 1
            }, $("#searchByName").keyup(function() {
                var t;
                t = $(this).val().toLowerCase(), "" === t ? $(".inventory-list > li").removeClass("hide") : $(".inventory-list > li").each(function() {
                    var e;
                    e = $(this).data("name"), e.indexOf(t) >= 0 ? $(this).removeClass("hide") : $(this).addClass("hide")
                })
            }), $("#sort-menu").change(function() {
                switch (this.value) {
                case"name_asc":
                    $(".inventory-list li").sort(n).appendTo(".inventory-list");
                    break;
                case"name_desc":
                    $(".inventory-list li").sort(i).appendTo(".inventory-list");
                    break;
                case"category_asc":
                    $(".inventory-list li").sort(t).appendTo(".inventory-list");
                    break;
                case"category_desc":
                    $(".inventory-list li").sort(e).appendTo(".inventory-list")
                }
            })
        })()
    })
}.call(this), function() {
    jQuery(function() {
        return $(".new_invite_request").submit(function(t) {
            return t.preventDefault(), $(t.target).find('input[type="submit"]').attr("disabled", "disabled"), $.post(t.target.action, $(t.target).serialize()).done(function(t) {
                return $(".new_invite_request").before("<h2>" + t.message + "</h2>").remove()
            }).fail(function(e) {
                return $(t.target).find('input[type="submit"]').removeAttr("disabled"), $.each(e.responseJSON.errors, function(e, n) {
                    return $(t.target).find(".form-error").remove(), $(t.target).find("#invite_request_" + e).after("<div class='form-error'>" + n + "</div>")
                })
            })
        })
    })
}.call(this), function() {
    jQuery(function() {
        var t, e, n, i, r;
        Pizza.init(), e = function() {
            return $(".dorpdown select").chosen()
        }, i = function(t) {
            var e, n, i, r, o, s;
            return e = t.find("option:selected"), i = ["weight", "volume"].map(function(n) {
                return e.data("has-" + n + "-unit")===!0 ? t.data("options-for-" + n + "-unit") : void 0
            }), o = "<option value='" + e.data("other-unit") + "'>" + e.data("other-unit") + "</option>", e.data("has-other-unit")===!0 && i.push(o), s = "<div>" + i.join("") + "</div>", r = $(s).find("option"), n = t.parent().siblings().find("select.units"), n.empty().append(r).find("option[value='" + e.data("selected-unit") + "']").attr("selected", !0)
        }, t = function(t) {
            return t.find("select.dorpdown.ingredients").each(function(t, e) {
                var n;
                return n = $("#" + $(e).attr("id")), i(n), n.on("change", function() {
                    return i($(this))
                })
            })
        }, r = function(t) {
            var e, n;
            return e = [], n = t.attr("href"), $(".recipe input[type=checkbox]").each(function(t, n) {
                return $(n).prop("checked") ? e.push($(n).attr("id")) : void 0
            }), window.location.href = n + "?recipe_ids=" + e.join(",")
        }, $("form").on("click", ".remove_fields", function(t) {
            return $(this).prev("input[type=hidden]").val("1"), $(this).closest("li.ingredient").hide(), t.preventDefault()
        }), Escarole.utils.bindAddFieldsBehavior($("ul.recipe-ingredients"), [e, t]), $("#delete-multiple").on("click", function(t) {
            return t.preventDefault(), r($(this))
        }), $("#share-multiple").on("click", function(t) {
            return t.preventDefault(), r($(this))
        }), $(".recipe input[type=checkbox]").change(function() {
            var t;
            return $(this).prop("checked") ? $(".action-left .action-group").removeClass("disabled") : (t=!1, $(".recipe input[type=checkbox]").each(function(e, n) {
                return $(n).prop("checked") ? (t=!0, !1) : void 0
            }), t===!1 ? $(".action-left .action-group").addClass("disabled") : void 0)
        }), e(), t($("li.ingredient")), Escarole.utils.bindAddCustomBehavior($("#recipe_weight_unit"), "unit"), (n = function() {
            var t, e, n, i, r, o, s;
            t = void 0, e = void 0, n = void 0, i = void 0, r = void 0, o = void 0, s = void 0, t = void 0, e = void 0, n = void 0, i = void 0, r = void 0, o = void 0, s = void 0, o = function(t, e) {
                return $(e).data("name") < $(t).data("name") ? 1 : - 1
            }, s = function(t, e) {
                return $(e).data("name") > $(t).data("name") ? 1 : - 1
            }, e = function(t, e) {
                var n, i;
                return n = void 0, i = void 0, n = $(t).data("costofgoods") ? $(t).data("costofgoods") : 0, i = $(e).data("costofgoods") ? $(e).data("costofgoods") : 0, n > i ? 1 : - 1
            }, n = function(t, e) {
                var n, i;
                return n = void 0, i = void 0, n = $(t).data("costofgoods") ? $(t).data("costofgoods") : 0, i = $(e).data("costofgoods") ? $(e).data("costofgoods") : 0, i > n ? 1 : - 1
            }, i = function(t, e) {
                var n, i;
                return n = void 0, i = void 0, n = $(t).data("menuprice") ? $(t).data("menuprice") : 0, i = $(e).data("menuprice") ? $(e).data("menuprice") : 0, n > i ? 1 : - 1
            }, r = function(t, e) {
                var n, i;
                return n = void 0, i = void 0, n = $(t).data("menuprice") ? $(t).data("menuprice") : 0, i = $(e).data("menuprice") ? $(e).data("menuprice") : 0, i > n ? 1 : - 1
            }, t = function(t, e) {
                return $(e).data("category") < $(t).data("category") ? 1 : - 1
            }, $("#searchByName").keyup(function() {
                var t;
                t = $(this).val().toLowerCase(), "" === t ? $(".recipe-list > li").removeClass("hide") : $(".recipe-list > li").each(function() {
                    var e;
                    e = $(this).data("name"), e.indexOf(t) >= 0 ? $(this).removeClass("hide") : $(this).addClass("hide")
                })
            }), $("#sort-menu").change(function() {
                switch (this.value) {
                case"name_asc":
                    $(".recipe-list li").sort(o).appendTo(".recipe-list");
                    break;
                case"name_desc":
                    $(".recipe-list li").sort(s).appendTo(".recipe-list");
                    break;
                case"cost_of_goods_asc":
                    $(".recipe-list li").sort(e).appendTo(".recipe-list");
                    break;
                case"cost_of_goods_desc":
                    $(".recipe-list li").sort(n).appendTo(".recipe-list");
                    break;
                case"menu_price_asc":
                    $(".recipe-list li").sort(i).appendTo(".recipe-list");
                    break;
                case"menu_price_desc":
                    $(".recipe-list li").sort(r).appendTo(".recipe-list");
                    break;
                case"category":
                    $(".recipe-list li").sort(t).appendTo(".recipe-list")
                }
            })
        })()
    })
}.call(this), function() {
    var t;
    t = function() {
        var t;
        return Dropzone.options.importDropzone = {
            paramName: "import",
            init: function() {
                return this.on("success", function(t, e) {
                    var n;
                    return e.items.length > 0 ? (n = $("<ul></ul>"), $.each(e.items, function(t, e) {
                        var i, r;
                        return r = e.valid===!0 ? "Imported" : "Invalid", i = e.errors.length > 0 ? e.errors : "", n.append("<li>" + r + ": " + e.name + " " + i + "</li>")
                    }), $("#import-response").show(), $("#import-response").append("<p>" + e.items.length + " items</p>"), $("#import-response").append(n.html())) : ($("#import-response").show(), $("#import-response").append("<p>Nothing to import. Give me something new.</p>"))
                })
            }
        }, t = {
            speed: 10,
            gy: function(t) {
                var e;
                if (e = t.offsetTop, t.offsetParent)
                    for (; t = t.offsetParent;)
                        e += t.offsetTop;
                return e
            },
            scrollTop: function() {
                var t, e;
                return t = document.body, e = document.documentElement, t && t.scrollTop ? t.scrollTop : e && e.scrollTop ? e.scrollTop : window.pageYOffset ? window.pageYOffset : 0
            },
            add: function(t, e, n) {
                return t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent ? t.attachEvent("on" + e, n) : void 0
            },
            end: function(t) {
                return window.event ? (window.event.cancelBubble=!0, void(window.event.returnValue=!1)) : void(t.preventDefault && t.stopPropagation && (t.preventDefault(), t.stopPropagation()))
            },
            scroll: function(e) {
                var n, i, r;
                r = window.innerHeight || document.documentElement.clientHeight, i = document.body.scrollHeight, n = t.scrollTop(), r > i - e && (e = i - r), n += e > n ? Math.ceil((e - n) / t.speed) : (e - n) / t.speed, window.scrollTo(0, n), n !== e && t.previousPos !== n || clearInterval(t.interval), t.previousPos = n
            },
            init: function() {
                t.add(window, "load", t.render)
            },
            render: function() {
                var e, n, i;
                for (t.end(this), n = document.getElementsByClassName("scroller"), i = 0; i < n.length;)
                    e = n[i], !e.href||-1 === e.href.indexOf("#") || e.href.indexOf("#") === e.href.length - 1 || e.pathname !== location.pathname && "/" + e.pathname !== location.pathname || t.add(e, "click", function() {
                        var e, i, r;
                        if (t.end(this), i = this.hash.substr(1), r = document.getElementById(i), !r)
                            for (e = 0; e < n.length;) {
                                if (n[e].name === i) {
                                    r = n[e];
                                    break
                                }
                                e++
                            }
                            r && (clearInterval(t.interval), t.interval = setInterval(function() {
                                t.scroll(t.gy(r))
                            }, 10))
                        }), i++
            }
        }, t.init()
    }, $(document).ready(t), $(document).on("page:load", t)
}.call(this);

