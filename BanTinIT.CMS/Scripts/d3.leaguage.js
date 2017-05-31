/*!  2015-11-10 */
function highlightPath(a) {
    var b = d3.select("g.team." + a)[0][0];
    b.parentNode.appendChild(b),
    d3.select("text.legend." + a).transition().duration(200).style("font-weight", "bold"),
    d3.select('path.inner[data-team="' + a + '"]').transition().duration(200).style("stroke-width", "4px").style("opacity", .9),
    d3.select('path.outer[data-team="' + a + '"]').transition().duration(200).style("stroke-opacity", .9)
}
function unHighlightPath(a) {
    d3.select("text.legend." + a).transition().duration(200).style("font-weight", "normal"),
    d3.select('path.inner[data-team="' + a + '"]').transition().duration(200).style("stroke-width", "2px").style("opacity", .7),
    d3.select('path.outer[data-team="' + a + '"]').transition().duration(200).style("stroke-opacity", 0)
}
function getYearForFile(a) {
    var b = a + 1;
    return ("0" + a % 100).slice(-2) + ("0" + b % 100).slice(-2)
}
function showYear() {
    var a = $("#year").data("year")
      , b = a + 1;
    $("#yeartext").text(a + "-" + b)
}
function ordinal_suffix_of(a) {
    var b = a % 10;
    return 1 == b && 11 != a ? a + "st" : 2 == b && 12 != a ? a + "nd" : 3 == b && 13 != a ? a + "rd" : a + "th"
}
!function(a, b) {
    function c(a) {
        var b = oa[a] = {};
        return $.each(a.split(ba), function(a, c) {
            b[c] = !0
        }),
        b
    }
    function d(a, c, d) {
        if (d === b && 1 === a.nodeType) {
            var e = "data-" + c.replace(qa, "-$1").toLowerCase();
            if (d = a.getAttribute(e),
            "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null  : +d + "" === d ? +d : pa.test(d) ? $.parseJSON(d) : d
                } catch (f) {}
                $.data(a, c, d)
            } else
                d = b
        }
        return d
    }
    function e(a) {
        var b;
        for (b in a)
            if (("data" !== b || !$.isEmptyObject(a[b])) && "toJSON" !== b)
                return !1;
        return !0
    }
    function f() {
        return !1
    }
    function g() {
        return !0
    }
    function h(a) {
        return !a || !a.parentNode || 11 === a.parentNode.nodeType
    }
    function i(a, b) {
        do
            a = a[b];
        while (a && 1 !== a.nodeType);return a
    }
    function j(a, b, c) {
        if (b = b || 0,
        $.isFunction(b))
            return $.grep(a, function(a, d) {
                var e = !!b.call(a, d, a);
                return e === c
            });
        if (b.nodeType)
            return $.grep(a, function(a, d) {
                return a === b === c
            });
        if ("string" == typeof b) {
            var d = $.grep(a, function(a) {
                return 1 === a.nodeType
            });
            if (Ka.test(b))
                return $.filter(b, d, !c);
            b = $.filter(b, d)
        }
        return $.grep(a, function(a, d) {
            return $.inArray(a, b) >= 0 === c
        })
    }
    function k(a) {
        var b = Na.split("|")
          , c = a.createDocumentFragment();
        if (c.createElement)
            for (; b.length; )
                c.createElement(b.pop());
        return c
    }
    function l(a, b) {
        return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b))
    }
    function m(a, b) {
        if (1 === b.nodeType && $.hasData(a)) {
            var c, d, e, f = $._data(a), g = $._data(b, f), h = f.events;
            if (h) {
                delete g.handle,
                g.events = {};
                for (c in h)
                    for (d = 0,
                    e = h[c].length; e > d; d++)
                        $.event.add(b, c, h[c][d])
            }
            g.data && (g.data = $.extend({}, g.data))
        }
    }
    function n(a, b) {
        var c;
        1 === b.nodeType && (b.clearAttributes && b.clearAttributes(),
        b.mergeAttributes && b.mergeAttributes(a),
        c = b.nodeName.toLowerCase(),
        "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML),
        $.support.html5Clone && a.innerHTML && !$.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Xa.test(a.type) ? (b.defaultChecked = b.checked = a.checked,
        b.value !== a.value && (b.value = a.value)) : "option" === c ? b.selected = a.defaultSelected : "input" === c || "textarea" === c ? b.defaultValue = a.defaultValue : "script" === c && b.text !== a.text && (b.text = a.text),
        b.removeAttribute($.expando))
    }
    function o(a) {
        return "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName("*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll("*") : []
    }
    function p(a) {
        Xa.test(a.type) && (a.defaultChecked = a.checked)
    }
    function q(a, b) {
        if (b in a)
            return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = rb.length; e--; )
            if (b = rb[e] + c,
            b in a)
                return b;
        return d
    }
    function r(a, b) {
        return a = b || a,
        "none" === $.css(a, "display") || !$.contains(a.ownerDocument, a)
    }
    function s(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; g > f; f++)
            c = a[f],
            c.style && (e[f] = $._data(c, "olddisplay"),
            b ? (!e[f] && "none" === c.style.display && (c.style.display = ""),
            "" === c.style.display && r(c) && (e[f] = $._data(c, "olddisplay", w(c.nodeName)))) : (d = cb(c, "display"),
            !e[f] && "none" !== d && $._data(c, "olddisplay", d)));
        for (f = 0; g > f; f++)
            c = a[f],
            c.style && (b && "none" !== c.style.display && "" !== c.style.display || (c.style.display = b ? e[f] || "" : "none"));
        return a
    }
    function t(a, b, c) {
        var d = kb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function u(a, b, c, d) {
        for (var e = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, f = 0; 4 > e; e += 2)
            "margin" === c && (f += $.css(a, c + qb[e], !0)),
            d ? ("content" === c && (f -= parseFloat(cb(a, "padding" + qb[e])) || 0),
            "margin" !== c && (f -= parseFloat(cb(a, "border" + qb[e] + "Width")) || 0)) : (f += parseFloat(cb(a, "padding" + qb[e])) || 0,
            "padding" !== c && (f += parseFloat(cb(a, "border" + qb[e] + "Width")) || 0));
        return f
    }
    function v(a, b, c) {
        var d = "width" === b ? a.offsetWidth : a.offsetHeight
          , e = !0
          , f = $.support.boxSizing && "border-box" === $.css(a, "boxSizing");
        if (0 >= d || null  == d) {
            if (d = cb(a, b),
            (0 > d || null  == d) && (d = a.style[b]),
            lb.test(d))
                return d;
            e = f && ($.support.boxSizingReliable || d === a.style[b]),
            d = parseFloat(d) || 0
        }
        return d + u(a, b, c || (f ? "border" : "content"), e) + "px"
    }
    function w(a) {
        if (nb[a])
            return nb[a];
        var b = $("<" + a + ">").appendTo(P.body)
          , c = b.css("display");
        return b.remove(),
        ("none" === c || "" === c) && (db = P.body.appendChild(db || $.extend(P.createElement("iframe"), {
            frameBorder: 0,
            width: 0,
            height: 0
        })),
        eb && db.createElement || (eb = (db.contentWindow || db.contentDocument).document,
        eb.write("<!doctype html><html><body>"),
        eb.close()),
        b = eb.body.appendChild(eb.createElement(a)),
        c = cb(b, "display"),
        P.body.removeChild(db)),
        nb[a] = c,
        c
    }
    function x(a, b, c, d) {
        var e;
        if ($.isArray(b))
            $.each(b, function(b, e) {
                c || ub.test(a) ? d(a, e) : x(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== $.type(b))
            d(a, b);
        else
            for (e in b)
                x(a + "[" + e + "]", b[e], c, d)
    }
    function y(a) {
        return function(b, c) {
            "string" != typeof b && (c = b,
            b = "*");
            var d, e, f, g = b.toLowerCase().split(ba), h = 0, i = g.length;
            if ($.isFunction(c))
                for (; i > h; h++)
                    d = g[h],
                    f = /^\+/.test(d),
                    f && (d = d.substr(1) || "*"),
                    e = a[d] = a[d] || [],
                    e[f ? "unshift" : "push"](c)
        }
    }
    function z(a, c, d, e, f, g) {
        f = f || c.dataTypes[0],
        g = g || {},
        g[f] = !0;
        for (var h, i = a[f], j = 0, k = i ? i.length : 0, l = a === Kb; k > j && (l || !h); j++)
            h = i[j](c, d, e),
            "string" == typeof h && (!l || g[h] ? h = b : (c.dataTypes.unshift(h),
            h = z(a, c, d, e, h, g)));
        return (l || !h) && !g["*"] && (h = z(a, c, d, e, "*", g)),
        h
    }
    function A(a, c) {
        var d, e, f = $.ajaxSettings.flatOptions || {};
        for (d in c)
            c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
        e && $.extend(!0, a, e)
    }
    function B(a, c, d) {
        var e, f, g, h, i = a.contents, j = a.dataTypes, k = a.responseFields;
        for (f in k)
            f in d && (c[k[f]] = d[f]);
        for (; "*" === j[0]; )
            j.shift(),
            e === b && (e = a.mimeType || c.getResponseHeader("content-type"));
        if (e)
            for (f in i)
                if (i[f] && i[f].test(e)) {
                    j.unshift(f);
                    break
                }
        if (j[0] in d)
            g = j[0];
        else {
            for (f in d) {
                if (!j[0] || a.converters[f + " " + j[0]]) {
                    g = f;
                    break
                }
                h || (h = f)
            }
            g = g || h
        }
        return g ? (g !== j[0] && j.unshift(g),
        d[g]) : void 0
    }
    function C(a, b) {
        var c, d, e, f, g = a.dataTypes.slice(), h = g[0], i = {}, j = 0;
        if (a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        g[1])
            for (c in a.converters)
                i[c.toLowerCase()] = a.converters[c];
        for (; e = g[++j]; )
            if ("*" !== e) {
                if ("*" !== h && h !== e) {
                    if (c = i[h + " " + e] || i["* " + e],
                    !c)
                        for (d in i)
                            if (f = d.split(" "),
                            f[1] === e && (c = i[h + " " + f[0]] || i["* " + f[0]])) {
                                c === !0 ? c = i[d] : i[d] !== !0 && (e = f[0],
                                g.splice(j--, 0, e));
                                break
                            }
                    if (c !== !0)
                        if (c && a["throws"])
                            b = c(b);
                        else
                            try {
                                b = c(b)
                            } catch (k) {
                                return {
                                    state: "parsererror",
                                    error: c ? k : "No conversion from " + h + " to " + e
                                }
                            }
                }
                h = e
            }
        return {
            state: "success",
            data: b
        }
    }
    function D() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    function E() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    function F() {
        return setTimeout(function() {
            Vb = b
        }, 0),
        Vb = $.now()
    }
    function G(a, b) {
        $.each(b, function(b, c) {
            for (var d = (_b[b] || []).concat(_b["*"]), e = 0, f = d.length; f > e; e++)
                if (d[e].call(a, b, c))
                    return
        })
    }
    function H(a, b, c) {
        var d, e = 0, f = $b.length, g = $.Deferred().always(function() {
            delete h.elem
        }), h = function() {
            for (var b = Vb || F(), c = Math.max(0, i.startTime + i.duration - b), d = c / i.duration || 0, e = 1 - d, f = 0, h = i.tweens.length; h > f; f++)
                i.tweens[f].run(e);
            return g.notifyWith(a, [i, e, c]),
            1 > e && h ? c : (g.resolveWith(a, [i]),
            !1)
        }
        , i = g.promise({
            elem: a,
            props: $.extend({}, b),
            opts: $.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Vb || F(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c, d) {
                var e = $.Tween(a, i.opts, b, c, i.opts.specialEasing[b] || i.opts.easing);
                return i.tweens.push(e),
                e
            },
            stop: function(b) {
                for (var c = 0, d = b ? i.tweens.length : 0; d > c; c++)
                    i.tweens[c].run(1);
                return b ? g.resolveWith(a, [i, b]) : g.rejectWith(a, [i, b]),
                this
            }
        }), j = i.props;
        for (I(j, i.opts.specialEasing); f > e; e++)
            if (d = $b[e].call(i, a, j, i.opts))
                return d;
        return G(i, j),
        $.isFunction(i.opts.start) && i.opts.start.call(a, i),
        $.fx.timer($.extend(h, {
            anim: i,
            queue: i.opts.queue,
            elem: a
        })),
        i.progress(i.opts.progress).done(i.opts.done, i.opts.complete).fail(i.opts.fail).always(i.opts.always)
    }
    function I(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = $.camelCase(c),
            e = b[d],
            f = a[c],
            $.isArray(f) && (e = f[1],
            f = a[c] = f[0]),
            c !== d && (a[d] = f,
            delete a[c]),
            g = $.cssHooks[d],
            g && "expand" in g) {
                f = g.expand(f),
                delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c],
                    b[c] = e)
            } else
                b[d] = e
    }
    function J(a, b, c) {
        var d, e, f, g, h, i, j, k, l, m = this, n = a.style, o = {}, p = [], q = a.nodeType && r(a);
        c.queue || (k = $._queueHooks(a, "fx"),
        null  == k.unqueued && (k.unqueued = 0,
        l = k.empty.fire,
        k.empty.fire = function() {
            k.unqueued || l()
        }
        ),
        k.unqueued++,
        m.always(function() {
            m.always(function() {
                k.unqueued--,
                $.queue(a, "fx").length || k.empty.fire()
            })
        })),
        1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY],
        "inline" === $.css(a, "display") && "none" === $.css(a, "float") && ($.support.inlineBlockNeedsLayout && "inline" !== w(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")),
        c.overflow && (n.overflow = "hidden",
        $.support.shrinkWrapBlocks || m.done(function() {
            n.overflow = c.overflow[0],
            n.overflowX = c.overflow[1],
            n.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (f = b[d],
            Xb.exec(f)) {
                if (delete b[d],
                i = i || "toggle" === f,
                f === (q ? "hide" : "show"))
                    continue;p.push(d)
            }
        if (g = p.length) {
            h = $._data(a, "fxshow") || $._data(a, "fxshow", {}),
            "hidden" in h && (q = h.hidden),
            i && (h.hidden = !q),
            q ? $(a).show() : m.done(function() {
                $(a).hide()
            }),
            m.done(function() {
                var b;
                $.removeData(a, "fxshow", !0);
                for (b in o)
                    $.style(a, b, o[b])
            });
            for (d = 0; g > d; d++)
                e = p[d],
                j = m.createTween(e, q ? h[e] : 0),
                o[e] = h[e] || $.style(a, e),
                e in h || (h[e] = j.start,
                q && (j.end = j.start,
                j.start = "width" === e || "height" === e ? 1 : 0))
        }
    }
    function K(a, b, c, d, e) {
        return new K.prototype.init(a,b,c,d,e)
    }
    function L(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b)
            c = qb[e],
            d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a),
        d
    }
    function M(a) {
        return $.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    var N, O, P = a.document, Q = a.location, R = a.navigator, S = a.jQuery, T = a.$, U = Array.prototype.push, V = Array.prototype.slice, W = Array.prototype.indexOf, X = Object.prototype.toString, Y = Object.prototype.hasOwnProperty, Z = String.prototype.trim, $ = function(a, b) {
        return new $.fn.init(a,b,N)
    }
    , _ = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, aa = /\S/, ba = /\s+/, ca = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, da = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, ea = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, fa = /^[\],:{}\s]*$/, ga = /(?:^|:|,)(?:\s*\[)+/g, ha = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, ia = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, ja = /^-ms-/, ka = /-([\da-z])/gi, la = function(a, b) {
        return (b + "").toUpperCase()
    }
    , ma = function() {
        P.addEventListener ? (P.removeEventListener("DOMContentLoaded", ma, !1),
        $.ready()) : "complete" === P.readyState && (P.detachEvent("onreadystatechange", ma),
        $.ready())
    }
    , na = {};
    $.fn = $.prototype = {
        constructor: $,
        init: function(a, c, d) {
            var e, f, g;
            if (!a)
                return this;
            if (a.nodeType)
                return this.context = this[0] = a,
                this.length = 1,
                this;
            if ("string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null , a, null ] : da.exec(a),
                e && (e[1] || !c)) {
                    if (e[1])
                        return c = c instanceof $ ? c[0] : c,
                        g = c && c.nodeType ? c.ownerDocument || c : P,
                        a = $.parseHTML(e[1], g, !0),
                        ea.test(e[1]) && $.isPlainObject(c) && this.attr.call(a, c, !0),
                        $.merge(this, a);
                    if (f = P.getElementById(e[2]),
                    f && f.parentNode) {
                        if (f.id !== e[2])
                            return d.find(a);
                        this.length = 1,
                        this[0] = f
                    }
                    return this.context = P,
                    this.selector = a,
                    this
                }
                return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a)
            }
            return $.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector,
            this.context = a.context),
            $.makeArray(a, this))
        },
        selector: "",
        jquery: "1.8.3",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return V.call(this)
        },
        get: function(a) {
            return null  == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
        },
        pushStack: function(a, b, c) {
            var d = $.merge(this.constructor(), a);
            return d.prevObject = this,
            d.context = this.context,
            "find" === b ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"),
            d
        },
        each: function(a, b) {
            return $.each(this, a, b)
        },
        ready: function(a) {
            return $.ready.promise().done(a),
            this
        },
        eq: function(a) {
            return a = +a,
            -1 === a ? this.slice(a) : this.slice(a, a + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(V.apply(this, arguments), "slice", V.call(arguments).join(","))
        },
        map: function(a) {
            return this.pushStack($.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null )
        },
        push: U,
        sort: [].sort,
        splice: [].splice
    },
    $.fn.init.prototype = $.fn,
    $.extend = $.fn.extend = function() {
        var a, c, d, e, f, g, h = arguments[0] || {}, i = 1, j = arguments.length, k = !1;
        for ("boolean" == typeof h && (k = h,
        h = arguments[1] || {},
        i = 2),
        "object" != typeof h && !$.isFunction(h) && (h = {}),
        j === i && (h = this,
        --i); j > i; i++)
            if (null  != (a = arguments[i]))
                for (c in a)
                    d = h[c],
                    e = a[c],
                    h !== e && (k && e && ($.isPlainObject(e) || (f = $.isArray(e))) ? (f ? (f = !1,
                    g = d && $.isArray(d) ? d : []) : g = d && $.isPlainObject(d) ? d : {},
                    h[c] = $.extend(k, g, e)) : e !== b && (h[c] = e));
        return h
    }
    ,
    $.extend({
        noConflict: function(b) {
            return a.$ === $ && (a.$ = T),
            b && a.jQuery === $ && (a.jQuery = S),
            $
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? $.readyWait++ : $.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? !--$.readyWait : !$.isReady) {
                if (!P.body)
                    return setTimeout($.ready, 1);
                $.isReady = !0,
                a !== !0 && --$.readyWait > 0 || (O.resolveWith(P, [$]),
                $.fn.trigger && $(P).trigger("ready").off("ready"))
            }
        },
        isFunction: function(a) {
            return "function" === $.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === $.type(a)
        }
        ,
        isWindow: function(a) {
            return null  != a && a == a.window
        },
        isNumeric: function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        },
        type: function(a) {
            return null  == a ? String(a) : na[X.call(a)] || "object"
        },
        isPlainObject: function(a) {
            if (!a || "object" !== $.type(a) || a.nodeType || $.isWindow(a))
                return !1;
            try {
                if (a.constructor && !Y.call(a, "constructor") && !Y.call(a.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (c) {
                return !1
            }
            var d;
            for (d in a)
                ;
            return d === b || Y.call(a, d)
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        error: function(a) {
            throw new Error(a)
        },
        parseHTML: function(a, b, c) {
            var d;
            return a && "string" == typeof a ? ("boolean" == typeof b && (c = b,
            b = 0),
            b = b || P,
            (d = ea.exec(a)) ? [b.createElement(d[1])] : (d = $.buildFragment([a], b, c ? null  : []),
            $.merge([], (d.cacheable ? $.clone(d.fragment) : d.fragment).childNodes))) : null 
        },
        parseJSON: function(b) {
            return b && "string" == typeof b ? (b = $.trim(b),
            a.JSON && a.JSON.parse ? a.JSON.parse(b) : fa.test(b.replace(ha, "@").replace(ia, "]").replace(ga, "")) ? new Function("return " + b)() : void $.error("Invalid JSON: " + b)) : null 
        },
        parseXML: function(c) {
            var d, e;
            if (!c || "string" != typeof c)
                return null ;
            try {
                a.DOMParser ? (e = new DOMParser,
                d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"),
                d.async = "false",
                d.loadXML(c))
            } catch (f) {
                d = b
            }
            return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && $.error("Invalid XML: " + c),
            d
        },
        noop: function() {},
        globalEval: function(b) {
            b && aa.test(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            }
            )(b)
        },
        camelCase: function(a) {
            return a.replace(ja, "ms-").replace(ka, la)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, c, d) {
            var e, f = 0, g = a.length, h = g === b || $.isFunction(a);
            if (d)
                if (h) {
                    for (e in a)
                        if (c.apply(a[e], d) === !1)
                            break
                } else
                    for (; g > f && c.apply(a[f++], d) !== !1; )
                        ;
            else if (h) {
                for (e in a)
                    if (c.call(a[e], e, a[e]) === !1)
                        break
            } else
                for (; g > f && c.call(a[f], f, a[f++]) !== !1; )
                    ;
            return a
        },
        trim: Z && !Z.call("\ufeff ") ? function(a) {
            return null  == a ? "" : Z.call(a)
        }
         : function(a) {
            return null  == a ? "" : (a + "").replace(ca, "")
        }
        ,
        makeArray: function(a, b) {
            var c, d = b || [];
            return null  != a && (c = $.type(a),
            null  == a.length || "string" === c || "function" === c || "regexp" === c || $.isWindow(a) ? U.call(d, a) : $.merge(d, a)),
            d
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (W)
                    return W.call(b, a, c);
                for (d = b.length,
                c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a)
                        return c
            }
            return -1
        },
        merge: function(a, c) {
            var d = c.length
              , e = a.length
              , f = 0;
            if ("number" == typeof d)
                for (; d > f; f++)
                    a[e++] = c[f];
            else
                for (; c[f] !== b; )
                    a[e++] = c[f++];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            var d, e = [], f = 0, g = a.length;
            for (c = !!c; g > f; f++)
                d = !!b(a[f], f),
                c !== d && e.push(a[f]);
            return e
        },
        map: function(a, c, d) {
            var e, f, g = [], h = 0, i = a.length, j = a instanceof $ || i !== b && "number" == typeof i && (i > 0 && a[0] && a[i - 1] || 0 === i || $.isArray(a));
            if (j)
                for (; i > h; h++)
                    e = c(a[h], h, d),
                    null  != e && (g[g.length] = e);
            else
                for (f in a)
                    e = c(a[f], f, d),
                    null  != e && (g[g.length] = e);
            return g.concat.apply([], g)
        },
        guid: 1,
        proxy: function(a, c) {
            var d, e, f;
            return "string" == typeof c && (d = a[c],
            c = a,
            a = d),
            $.isFunction(a) ? (e = V.call(arguments, 2),
            f = function() {
                return a.apply(c, e.concat(V.call(arguments)))
            }
            ,
            f.guid = a.guid = a.guid || $.guid++,
            f) : b
        },
        access: function(a, c, d, e, f, g, h) {
            var i, j = null  == d, k = 0, l = a.length;
            if (d && "object" == typeof d) {
                for (k in d)
                    $.access(a, c, k, d[k], 1, g, e);
                f = 1
            } else if (e !== b) {
                if (i = h === b && $.isFunction(e),
                j && (i ? (i = c,
                c = function(a, b, c) {
                    return i.call($(a), c)
                }
                ) : (c.call(a, e),
                c = null )),
                c)
                    for (; l > k; k++)
                        c(a[k], d, i ? e.call(a[k], k, c(a[k], d)) : e, h);
                f = 1
            }
            return f ? a : j ? c.call(a) : l ? c(a[0], d) : g
        },
        now: function() {
            return (new Date).getTime()
        }
    }),
    $.ready.promise = function(b) {
        if (!O)
            if (O = $.Deferred(),
            "complete" === P.readyState)
                setTimeout($.ready, 1);
            else if (P.addEventListener)
                P.addEventListener("DOMContentLoaded", ma, !1),
                a.addEventListener("load", $.ready, !1);
            else {
                P.attachEvent("onreadystatechange", ma),
                a.attachEvent("onload", $.ready);
                var c = !1;
                try {
                    c = null  == a.frameElement && P.documentElement
                } catch (d) {}
                c && c.doScroll && function e() {
                    if (!$.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (a) {
                            return setTimeout(e, 50)
                        }
                        $.ready()
                    }
                }()
            }
        return O.promise(b)
    }
    ,
    $.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
        na["[object " + b + "]"] = b.toLowerCase()
    }),
    N = $(P);
    var oa = {};
    $.Callbacks = function(a) {
        a = "string" == typeof a ? oa[a] || c(a) : $.extend({}, a);
        var d, e, f, g, h, i, j = [], k = !a.once && [], l = function(b) {
            for (d = a.memory && b,
            e = !0,
            i = g || 0,
            g = 0,
            h = j.length,
            f = !0; j && h > i; i++)
                if (j[i].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                    d = !1;
                    break
                }
            f = !1,
            j && (k ? k.length && l(k.shift()) : d ? j = [] : m.disable())
        }
        , m = {
            add: function() {
                if (j) {
                    var b = j.length;
                    !function c(b) {
                        $.each(b, function(b, d) {
                            var e = $.type(d);
                            "function" === e ? (!a.unique || !m.has(d)) && j.push(d) : d && d.length && "string" !== e && c(d)
                        })
                    }(arguments),
                    f ? h = j.length : d && (g = b,
                    l(d))
                }
                return this
            },
            remove: function() {
                return j && $.each(arguments, function(a, b) {
                    for (var c; (c = $.inArray(b, j, c)) > -1; )
                        j.splice(c, 1),
                        f && (h >= c && h--,
                        i >= c && i--)
                }),
                this
            },
            has: function(a) {
                return $.inArray(a, j) > -1
            },
            empty: function() {
                return j = [],
                this
            },
            disable: function() {
                return j = k = d = b,
                this
            },
            disabled: function() {
                return !j
            },
            lock: function() {
                return k = b,
                d || m.disable(),
                this
            },
            locked: function() {
                return !k
            },
            fireWith: function(a, b) {
                return b = b || [],
                b = [a, b.slice ? b.slice() : b],
                j && (!e || k) && (f ? k.push(b) : l(b)),
                this
            },
            fire: function() {
                return m.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!e
            }
        };
        return m
    }
    ,
    $.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", $.Callbacks("once memory"), "resolved"], ["reject", "fail", $.Callbacks("once memory"), "rejected"], ["notify", "progress", $.Callbacks("memory")]]
              , c = "pending"
              , d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return $.Deferred(function(c) {
                        $.each(b, function(b, d) {
                            var f = d[0]
                              , g = a[b];
                            e[d[1]]($.isFunction(g) ? function() {
                                var a = g.apply(this, arguments);
                                a && $.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f + "With"](this === e ? c : this, [a])
                            }
                             : c[f])
                        }),
                        a = null 
                    }).promise()
                },
                promise: function(a) {
                    return null  != a ? $.extend(a, d) : d
                }
            }
              , e = {};
            return d.pipe = d.then,
            $.each(b, function(a, f) {
                var g = f[2]
                  , h = f[3];
                d[f[1]] = g.add,
                h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock),
                e[f[0]] = g.fire,
                e[f[0] + "With"] = g.fireWith
            }),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function(a) {
            var b, c, d, e = 0, f = V.call(arguments), g = f.length, h = 1 !== g || a && $.isFunction(a.promise) ? g : 0, i = 1 === h ? a : $.Deferred(), j = function(a, c, d) {
                return function(e) {
                    c[a] = this,
                    d[a] = arguments.length > 1 ? V.call(arguments) : e,
                    d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                }
            }
            ;
            if (g > 1)
                for (b = new Array(g),
                c = new Array(g),
                d = new Array(g); g > e; e++)
                    f[e] && $.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f),
            i.promise()
        }
    }),
    $.support = function() {
        var b, c, d, e, f, g, h, i, j, k, l, m = P.createElement("div");
        if (m.setAttribute("className", "t"),
        m.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        c = m.getElementsByTagName("*"),
        d = m.getElementsByTagName("a")[0],
        !c || !d || !c.length)
            return {};
        e = P.createElement("select"),
        f = e.appendChild(P.createElement("option")),
        g = m.getElementsByTagName("input")[0],
        d.style.cssText = "top:1px;float:left;opacity:.5",
        b = {
            leadingWhitespace: 3 === m.firstChild.nodeType,
            tbody: !m.getElementsByTagName("tbody").length,
            htmlSerialize: !!m.getElementsByTagName("link").length,
            style: /top/.test(d.getAttribute("style")),
            hrefNormalized: "/a" === d.getAttribute("href"),
            opacity: /^0.5/.test(d.style.opacity),
            cssFloat: !!d.style.cssFloat,
            checkOn: "on" === g.value,
            optSelected: f.selected,
            getSetAttribute: "t" !== m.className,
            enctype: !!P.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== P.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === P.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        },
        g.checked = !0,
        b.noCloneChecked = g.cloneNode(!0).checked,
        e.disabled = !0,
        b.optDisabled = !f.disabled;
        try {
            delete m.test
        } catch (n) {
            b.deleteExpando = !1
        }
        if (!m.addEventListener && m.attachEvent && m.fireEvent && (m.attachEvent("onclick", l = function() {
            b.noCloneEvent = !1
        }
        ),
        m.cloneNode(!0).fireEvent("onclick"),
        m.detachEvent("onclick", l)),
        g = P.createElement("input"),
        g.value = "t",
        g.setAttribute("type", "radio"),
        b.radioValue = "t" === g.value,
        g.setAttribute("checked", "checked"),
        g.setAttribute("name", "t"),
        m.appendChild(g),
        h = P.createDocumentFragment(),
        h.appendChild(m.lastChild),
        b.checkClone = h.cloneNode(!0).cloneNode(!0).lastChild.checked,
        b.appendChecked = g.checked,
        h.removeChild(g),
        h.appendChild(m),
        m.attachEvent)
            for (j in {
                submit: !0,
                change: !0,
                focusin: !0
            })
                i = "on" + j,
                k = i in m,
                k || (m.setAttribute(i, "return;"),
                k = "function" == typeof m[i]),
                b[j + "Bubbles"] = k;
        return $(function() {
            var c, d, e, f, g = "padding:0;margin:0;border:0;display:block;overflow:hidden;", h = P.getElementsByTagName("body")[0];
            h && (c = P.createElement("div"),
            c.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",
            h.insertBefore(c, h.firstChild),
            d = P.createElement("div"),
            c.appendChild(d),
            d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            e = d.getElementsByTagName("td"),
            e[0].style.cssText = "padding:0;margin:0;border:0;display:none",
            k = 0 === e[0].offsetHeight,
            e[0].style.display = "",
            e[1].style.display = "none",
            b.reliableHiddenOffsets = k && 0 === e[0].offsetHeight,
            d.innerHTML = "",
            d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
            b.boxSizing = 4 === d.offsetWidth,
            b.doesNotIncludeMarginInBodyOffset = 1 !== h.offsetTop,
            a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(d, null ) || {}).top,
            b.boxSizingReliable = "4px" === (a.getComputedStyle(d, null ) || {
                width: "4px"
            }).width,
            f = P.createElement("div"),
            f.style.cssText = d.style.cssText = g,
            f.style.marginRight = f.style.width = "0",
            d.style.width = "1px",
            d.appendChild(f),
            b.reliableMarginRight = !parseFloat((a.getComputedStyle(f, null ) || {}).marginRight)),
            "undefined" != typeof d.style.zoom && (d.innerHTML = "",
            d.style.cssText = g + "width:1px;padding:1px;display:inline;zoom:1",
            b.inlineBlockNeedsLayout = 3 === d.offsetWidth,
            d.style.display = "block",
            d.style.overflow = "visible",
            d.innerHTML = "<div></div>",
            d.firstChild.style.width = "5px",
            b.shrinkWrapBlocks = 3 !== d.offsetWidth,
            c.style.zoom = 1),
            h.removeChild(c),
            c = d = e = f = null )
        }),
        h.removeChild(m),
        c = d = e = f = g = h = m = null ,
        b
    }();
    var pa = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/
      , qa = /([A-Z])/g;
    $.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + ($.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(a) {
            return a = a.nodeType ? $.cache[a[$.expando]] : a[$.expando],
            !!a && !e(a)
        },
        data: function(a, c, d, e) {
            if ($.acceptData(a)) {
                var f, g, h = $.expando, i = "string" == typeof c, j = a.nodeType, k = j ? $.cache : a, l = j ? a[h] : a[h] && h;
                if (l && k[l] && (e || k[l].data) || !i || d !== b)
                    return l || (j ? a[h] = l = $.deletedIds.pop() || $.guid++ : l = h),
                    k[l] || (k[l] = {},
                    j || (k[l].toJSON = $.noop)),
                    ("object" == typeof c || "function" == typeof c) && (e ? k[l] = $.extend(k[l], c) : k[l].data = $.extend(k[l].data, c)),
                    f = k[l],
                    e || (f.data || (f.data = {}),
                    f = f.data),
                    d !== b && (f[$.camelCase(c)] = d),
                    i ? (g = f[c],
                    null  == g && (g = f[$.camelCase(c)])) : g = f,
                    g
            }
        },
        removeData: function(a, b, c) {
            if ($.acceptData(a)) {
                var d, f, g, h = a.nodeType, i = h ? $.cache : a, j = h ? a[$.expando] : $.expando;
                if (i[j]) {
                    if (b && (d = c ? i[j] : i[j].data)) {
                        $.isArray(b) || (b in d ? b = [b] : (b = $.camelCase(b),
                        b = b in d ? [b] : b.split(" ")));
                        for (f = 0,
                        g = b.length; g > f; f++)
                            delete d[b[f]];
                        if (!(c ? e : $.isEmptyObject)(d))
                            return
                    }
                    (c || (delete i[j].data,
                    e(i[j]))) && (h ? $.cleanData([a], !0) : $.support.deleteExpando || i != i.window ? delete i[j] : i[j] = null )
                }
            }
        },
        _data: function(a, b, c) {
            return $.data(a, b, c, !0)
        },
        acceptData: function(a) {
            var b = a.nodeName && $.noData[a.nodeName.toLowerCase()];
            return !b || b !== !0 && a.getAttribute("classid") === b
        }
    }),
    $.fn.extend({
        data: function(a, c) {
            var e, f, g, h, i, j = this[0], k = 0, l = null ;
            if (a === b) {
                if (this.length && (l = $.data(j),
                1 === j.nodeType && !$._data(j, "parsedAttrs"))) {
                    for (g = j.attributes,
                    i = g.length; i > k; k++)
                        h = g[k].name,
                        h.indexOf("data-") || (h = $.camelCase(h.substring(5)),
                        d(j, h, l[h]));
                    $._data(j, "parsedAttrs", !0)
                }
                return l
            }
            return "object" == typeof a ? this.each(function() {
                $.data(this, a)
            }) : (e = a.split(".", 2),
            e[1] = e[1] ? "." + e[1] : "",
            f = e[1] + "!",
            $.access(this, function(c) {
                return c === b ? (l = this.triggerHandler("getData" + f, [e[0]]),
                l === b && j && (l = $.data(j, a),
                l = d(j, a, l)),
                l === b && e[1] ? this.data(e[0]) : l) : (e[1] = c,
                void this.each(function() {
                    var b = $(this);
                    b.triggerHandler("setData" + f, e),
                    $.data(this, a, c),
                    b.triggerHandler("changeData" + f, e)
                }))
            }, null , c, arguments.length > 1, null , !1))
        },
        removeData: function(a) {
            return this.each(function() {
                $.removeData(this, a)
            })
        }
    }),
    $.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue",
            d = $._data(a, b),
            c && (!d || $.isArray(c) ? d = $._data(a, b, $.makeArray(c)) : d.push(c)),
            d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = $.queue(a, b)
              , d = c.length
              , e = c.shift()
              , f = $._queueHooks(a, b)
              , g = function() {
                $.dequeue(a, b)
            }
            ;
            "inprogress" === e && (e = c.shift(),
            d--),
            e && ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return $._data(a, c) || $._data(a, c, {
                empty: $.Callbacks("once memory").add(function() {
                    $.removeData(a, b + "queue", !0),
                    $.removeData(a, c, !0)
                })
            })
        }
    }),
    $.fn.extend({
        queue: function(a, c) {
            var d = 2;
            return "string" != typeof a && (c = a,
            a = "fx",
            d--),
            arguments.length < d ? $.queue(this[0], a) : c === b ? this : this.each(function() {
                var b = $.queue(this, a, c);
                $._queueHooks(this, a),
                "fx" === a && "inprogress" !== b[0] && $.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                $.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            return a = $.fx ? $.fx.speeds[a] || a : a,
            b = b || "fx",
            this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            var d, e = 1, f = $.Deferred(), g = this, h = this.length, i = function() {
                --e || f.resolveWith(g, [g])
            }
            ;
            for ("string" != typeof a && (c = a,
            a = b),
            a = a || "fx"; h--; )
                d = $._data(g[h], a + "queueHooks"),
                d && d.empty && (e++,
                d.empty.add(i));
            return i(),
            f.promise(c)
        }
    });
    var ra, sa, ta, ua = /[\t\r\n]/g, va = /\r/g, wa = /^(?:button|input)$/i, xa = /^(?:button|input|object|select|textarea)$/i, ya = /^a(?:rea|)$/i, za = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, Aa = $.support.getSetAttribute;
    $.fn.extend({
        attr: function(a, b) {
            return $.access(this, $.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                $.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return $.access(this, $.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = $.propFix[a] || a,
            this.each(function() {
                try {
                    this[a] = b,
                    delete this[a]
                } catch (c) {}
            })
        },
        addClass: function(a) {
            var b, c, d, e, f, g, h;
            if ($.isFunction(a))
                return this.each(function(b) {
                    $(this).addClass(a.call(this, b, this.className))
                });
            if (a && "string" == typeof a)
                for (b = a.split(ba),
                c = 0,
                d = this.length; d > c; c++)
                    if (e = this[c],
                    1 === e.nodeType)
                        if (e.className || 1 !== b.length) {
                            for (f = " " + e.className + " ",
                            g = 0,
                            h = b.length; h > g; g++)
                                f.indexOf(" " + b[g] + " ") < 0 && (f += b[g] + " ");
                            e.className = $.trim(f)
                        } else
                            e.className = a;
            return this
        },
        removeClass: function(a) {
            var c, d, e, f, g, h, i;
            if ($.isFunction(a))
                return this.each(function(b) {
                    $(this).removeClass(a.call(this, b, this.className))
                });
            if (a && "string" == typeof a || a === b)
                for (c = (a || "").split(ba),
                h = 0,
                i = this.length; i > h; h++)
                    if (e = this[h],
                    1 === e.nodeType && e.className) {
                        for (d = (" " + e.className + " ").replace(ua, " "),
                        f = 0,
                        g = c.length; g > f; f++)
                            for (; d.indexOf(" " + c[f] + " ") >= 0; )
                                d = d.replace(" " + c[f] + " ", " ");
                        e.className = a ? $.trim(d) : ""
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a
              , d = "boolean" == typeof b;
            return $.isFunction(a) ? this.each(function(c) {
                $(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function() {
                if ("string" === c)
                    for (var e, f = 0, g = $(this), h = b, i = a.split(ba); e = i[f++]; )
                        h = d ? h : !g.hasClass(e),
                        g[h ? "addClass" : "removeClass"](e);
                else
                    ("undefined" === c || "boolean" === c) && (this.className && $._data(this, "__className__", this.className),
                    this.className = this.className || a === !1 ? "" : $._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ua, " ").indexOf(b) >= 0)
                    return !0;
            return !1
        },
        val: function(a) {
            var c, d, e, f = this[0];
            {
                if (arguments.length)
                    return e = $.isFunction(a),
                    this.each(function(d) {
                        var f, g = $(this);
                        1 === this.nodeType && (f = e ? a.call(this, d, g.val()) : a,
                        null  == f ? f = "" : "number" == typeof f ? f += "" : $.isArray(f) && (f = $.map(f, function(a) {
                            return null  == a ? "" : a + ""
                        })),
                        c = $.valHooks[this.type] || $.valHooks[this.nodeName.toLowerCase()],
                        c && "set" in c && c.set(this, f, "value") !== b || (this.value = f))
                    });
                if (f)
                    return c = $.valHooks[f.type] || $.valHooks[f.nodeName.toLowerCase()],
                    c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value,
                    "string" == typeof d ? d.replace(va, "") : null  == d ? "" : d)
            }
        }
    }),
    $.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null  : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i],
                        (c.selected || i === e) && ($.support.optDisabled ? !c.disabled : null  === c.getAttribute("disabled")) && (!c.parentNode.disabled || !$.nodeName(c.parentNode, "optgroup"))) {
                            if (b = $(c).val(),
                            f)
                                return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c = $.makeArray(b);
                    return $(a).find("option").each(function() {
                        this.selected = $.inArray($(this).val(), c) >= 0
                    }),
                    c.length || (a.selectedIndex = -1),
                    c
                }
            }
        },
        attrFn: {},
        attr: function(a, c, d, e) {
            var f, g, h, i = a.nodeType;
            if (a && 3 !== i && 8 !== i && 2 !== i)
                return e && $.isFunction($.fn[c]) ? $(a)[c](d) : "undefined" == typeof a.getAttribute ? $.prop(a, c, d) : (h = 1 !== i || !$.isXMLDoc(a),
                h && (c = c.toLowerCase(),
                g = $.attrHooks[c] || (za.test(c) ? sa : ra)),
                d !== b ? null  === d ? void $.removeAttr(a, c) : g && "set" in g && h && (f = g.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""),
                d) : g && "get" in g && h && null  !== (f = g.get(a, c)) ? f : (f = a.getAttribute(c),
                null  === f ? b : f))
        },
        removeAttr: function(a, b) {
            var c, d, e, f, g = 0;
            if (b && 1 === a.nodeType)
                for (d = b.split(ba); g < d.length; g++)
                    e = d[g],
                    e && (c = $.propFix[e] || e,
                    f = za.test(e),
                    f || $.attr(a, e, ""),
                    a.removeAttribute(Aa ? e : c),
                    f && c in a && (a[c] = !1))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (wa.test(a.nodeName) && a.parentNode)
                        $.error("type property can't be changed");
                    else if (!$.support.radioValue && "radio" === b && $.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            },
            value: {
                get: function(a, b) {
                    return ra && $.nodeName(a, "button") ? ra.get(a, b) : b in a ? a.value : null 
                },
                set: function(a, b, c) {
                    return ra && $.nodeName(a, "button") ? ra.set(a, b, c) : void (a.value = b)
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(a, c, d) {
            var e, f, g, h = a.nodeType;
            if (a && 3 !== h && 8 !== h && 2 !== h)
                return g = 1 !== h || !$.isXMLDoc(a),
                g && (c = $.propFix[c] || c,
                f = $.propHooks[c]),
                d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null  !== (e = f.get(a, c)) ? e : a[c]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : xa.test(a.nodeName) || ya.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }),
    sa = {
        get: function(a, c) {
            var d, e = $.prop(a, c);
            return e === !0 || "boolean" != typeof e && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        },
        set: function(a, b, c) {
            var d;
            return b === !1 ? $.removeAttr(a, c) : (d = $.propFix[c] || c,
            d in a && (a[d] = !0),
            a.setAttribute(c, c.toLowerCase())),
            c
        }
    },
    Aa || (ta = {
        name: !0,
        id: !0,
        coords: !0
    },
    ra = $.valHooks.button = {
        get: function(a, c) {
            var d;
            return d = a.getAttributeNode(c),
            d && (ta[c] ? "" !== d.value : d.specified) ? d.value : b
        },
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || (d = P.createAttribute(c),
            a.setAttributeNode(d)),
            d.value = b + ""
        }
    },
    $.each(["width", "height"], function(a, b) {
        $.attrHooks[b] = $.extend($.attrHooks[b], {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"),
                c) : void 0
            }
        })
    }),
    $.attrHooks.contenteditable = {
        get: ra.get,
        set: function(a, b, c) {
            "" === b && (b = "false"),
            ra.set(a, b, c)
        }
    }),
    $.support.hrefNormalized || $.each(["href", "src", "width", "height"], function(a, c) {
        $.attrHooks[c] = $.extend($.attrHooks[c], {
            get: function(a) {
                var d = a.getAttribute(c, 2);
                return null  === d ? b : d
            }
        })
    }),
    $.support.style || ($.attrHooks.style = {
        get: function(a) {
            return a.style.cssText.toLowerCase() || b
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    }),
    $.support.optSelected || ($.propHooks.selected = $.extend($.propHooks.selected, {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex,
            b.parentNode && b.parentNode.selectedIndex),
            null 
        }
    })),
    $.support.enctype || ($.propFix.enctype = "encoding"),
    $.support.checkOn || $.each(["radio", "checkbox"], function() {
        $.valHooks[this] = {
            get: function(a) {
                return null  === a.getAttribute("value") ? "on" : a.value
            }
        }
    }),
    $.each(["radio", "checkbox"], function() {
        $.valHooks[this] = $.extend($.valHooks[this], {
            set: function(a, b) {
                return $.isArray(b) ? a.checked = $.inArray($(a).val(), b) >= 0 : void 0
            }
        })
    });
    var Ba = /^(?:textarea|input|select)$/i
      , Ca = /^([^\.]*|)(?:\.(.+)|)$/
      , Da = /(?:^|\s)hover(\.\S+|)\b/
      , Ea = /^key/
      , Fa = /^(?:mouse|contextmenu)|click/
      , Ga = /^(?:focusinfocus|focusoutblur)$/
      , Ha = function(a) {
        return $.event.special.hover ? a : a.replace(Da, "mouseenter$1 mouseleave$1")
    }
    ;
    $.event = {
        add: function(a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, p, q;
            if (3 !== a.nodeType && 8 !== a.nodeType && c && d && (g = $._data(a))) {
                for (d.handler && (o = d,
                d = o.handler,
                f = o.selector),
                d.guid || (d.guid = $.guid++),
                i = g.events,
                i || (g.events = i = {}),
                h = g.handle,
                h || (g.handle = h = function(a) {
                    return "undefined" == typeof $ || a && $.event.triggered === a.type ? b : $.event.dispatch.apply(h.elem, arguments)
                }
                ,
                h.elem = a),
                c = $.trim(Ha(c)).split(" "),
                j = 0; j < c.length; j++)
                    k = Ca.exec(c[j]) || [],
                    l = k[1],
                    m = (k[2] || "").split(".").sort(),
                    q = $.event.special[l] || {},
                    l = (f ? q.delegateType : q.bindType) || l,
                    q = $.event.special[l] || {},
                    n = $.extend({
                        type: l,
                        origType: k[1],
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: f,
                        needsContext: f && $.expr.match.needsContext.test(f),
                        namespace: m.join(".")
                    }, o),
                    p = i[l],
                    p || (p = i[l] = [],
                    p.delegateCount = 0,
                    q.setup && q.setup.call(a, e, m, h) !== !1 || (a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h))),
                    q.add && (q.add.call(a, n),
                    n.handler.guid || (n.handler.guid = d.guid)),
                    f ? p.splice(p.delegateCount++, 0, n) : p.push(n),
                    $.event.global[l] = !0;
                a = null 
            }
        },
        global: {},
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = $.hasData(a) && $._data(a);
            if (q && (m = q.events)) {
                for (b = $.trim(Ha(b || "")).split(" "),
                f = 0; f < b.length; f++)
                    if (g = Ca.exec(b[f]) || [],
                    h = i = g[1],
                    j = g[2],
                    h) {
                        for (n = $.event.special[h] || {},
                        h = (d ? n.delegateType : n.bindType) || h,
                        o = m[h] || [],
                        k = o.length,
                        j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null ,
                        l = 0; l < o.length; l++)
                            p = o[l],
                            (e || i === p.origType) && (!c || c.guid === p.guid) && (!j || j.test(p.namespace)) && (!d || d === p.selector || "**" === d && p.selector) && (o.splice(l--, 1),
                            p.selector && o.delegateCount--,
                            n.remove && n.remove.call(a, p));
                        0 === o.length && k !== o.length && ((!n.teardown || n.teardown.call(a, j, q.handle) === !1) && $.removeEvent(a, h, q.handle),
                        delete m[h])
                    } else
                        for (h in m)
                            $.event.remove(a, h + b[f], c, d, !0);
                $.isEmptyObject(m) && (delete q.handle,
                $.removeData(a, "events", !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(c, d, e, f) {
            if (!e || 3 !== e.nodeType && 8 !== e.nodeType) {
                var g, h, i, j, k, l, m, n, o, p, q = c.type || c, r = [];
                if (Ga.test(q + $.event.triggered))
                    return;
                if (q.indexOf("!") >= 0 && (q = q.slice(0, -1),
                h = !0),
                q.indexOf(".") >= 0 && (r = q.split("."),
                q = r.shift(),
                r.sort()),
                (!e || $.event.customEvent[q]) && !$.event.global[q])
                    return;
                if (c = "object" == typeof c ? c[$.expando] ? c : new $.Event(q,c) : new $.Event(q),
                c.type = q,
                c.isTrigger = !0,
                c.exclusive = h,
                c.namespace = r.join("."),
                c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null ,
                l = q.indexOf(":") < 0 ? "on" + q : "",
                !e) {
                    g = $.cache;
                    for (i in g)
                        g[i].events && g[i].events[q] && $.event.trigger(c, d, g[i].handle.elem, !0);
                    return
                }
                if (c.result = b,
                c.target || (c.target = e),
                d = null  != d ? $.makeArray(d) : [],
                d.unshift(c),
                m = $.event.special[q] || {},
                m.trigger && m.trigger.apply(e, d) === !1)
                    return;
                if (o = [[e, m.bindType || q]],
                !f && !m.noBubble && !$.isWindow(e)) {
                    for (p = m.delegateType || q,
                    j = Ga.test(p + q) ? e : e.parentNode,
                    k = e; j; j = j.parentNode)
                        o.push([j, p]),
                        k = j;
                    k === (e.ownerDocument || P) && o.push([k.defaultView || k.parentWindow || a, p])
                }
                for (i = 0; i < o.length && !c.isPropagationStopped(); i++)
                    j = o[i][0],
                    c.type = o[i][1],
                    n = ($._data(j, "events") || {})[c.type] && $._data(j, "handle"),
                    n && n.apply(j, d),
                    n = l && j[l],
                    n && $.acceptData(j) && n.apply && n.apply(j, d) === !1 && c.preventDefault();
                return c.type = q,
                !f && !c.isDefaultPrevented() && (!m._default || m._default.apply(e.ownerDocument, d) === !1) && ("click" !== q || !$.nodeName(e, "a")) && $.acceptData(e) && l && e[q] && ("focus" !== q && "blur" !== q || 0 !== c.target.offsetWidth) && !$.isWindow(e) && (k = e[l],
                k && (e[l] = null ),
                $.event.triggered = q,
                e[q](),
                $.event.triggered = b,
                k && (e[l] = k)),
                c.result
            }
        },
        dispatch: function(c) {
            c = $.event.fix(c || a.event);
            var d, e, f, g, h, i, j, k, l, m = ($._data(this, "events") || {})[c.type] || [], n = m.delegateCount, o = V.call(arguments), p = !c.exclusive && !c.namespace, q = $.event.special[c.type] || {}, r = [];
            if (o[0] = c,
            c.delegateTarget = this,
            !q.preDispatch || q.preDispatch.call(this, c) !== !1) {
                if (n && (!c.button || "click" !== c.type))
                    for (f = c.target; f != this; f = f.parentNode || this)
                        if (f.disabled !== !0 || "click" !== c.type) {
                            for (h = {},
                            j = [],
                            d = 0; n > d; d++)
                                k = m[d],
                                l = k.selector,
                                h[l] === b && (h[l] = k.needsContext ? $(l, this).index(f) >= 0 : $.find(l, this, null , [f]).length),
                                h[l] && j.push(k);
                            j.length && r.push({
                                elem: f,
                                matches: j
                            })
                        }
                for (m.length > n && r.push({
                    elem: this,
                    matches: m.slice(n)
                }),
                d = 0; d < r.length && !c.isPropagationStopped(); d++)
                    for (i = r[d],
                    c.currentTarget = i.elem,
                    e = 0; e < i.matches.length && !c.isImmediatePropagationStopped(); e++)
                        k = i.matches[e],
                        (p || !c.namespace && !k.namespace || c.namespace_re && c.namespace_re.test(k.namespace)) && (c.data = k.data,
                        c.handleObj = k,
                        g = (($.event.special[k.origType] || {}).handle || k.handler).apply(i.elem, o),
                        g !== b && (c.result = g,
                        g === !1 && (c.preventDefault(),
                        c.stopPropagation())));
                return q.postDispatch && q.postDispatch.call(this, c),
                c.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null  == a.which && (a.which = null  != b.charCode ? b.charCode : b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, c) {
                var d, e, f, g = c.button, h = c.fromElement;
                return null  == a.pageX && null  != c.clientX && (d = a.target.ownerDocument || P,
                e = d.documentElement,
                f = d.body,
                a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0),
                a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)),
                !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h),
                !a.which && g !== b && (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
                a
            }
        },
        fix: function(a) {
            if (a[$.expando])
                return a;
            var b, c, d = a, e = $.event.fixHooks[a.type] || {}, f = e.props ? this.props.concat(e.props) : this.props;
            for (a = $.Event(d),
            b = f.length; b; )
                c = f[--b],
                a[c] = d[c];
            return a.target || (a.target = d.srcElement || P),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            a.metaKey = !!a.metaKey,
            e.filter ? e.filter(a, d) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(a, b, c) {
                    $.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function(a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null )
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = $.extend(new $.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? $.event.trigger(e, null , b) : $.event.dispatch.call(b, e),
            e.isDefaultPrevented() && c.preventDefault()
        }
    },
    $.event.handle = $.event.dispatch,
    $.removeEvent = P.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }
     : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null ),
        a.detachEvent(d, c))
    }
    ,
    $.Event = function(a, b) {
        return this instanceof $.Event ? (a && a.type ? (this.originalEvent = a,
        this.type = a.type,
        this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? g : f) : this.type = a,
        b && $.extend(this, b),
        this.timeStamp = a && a.timeStamp || $.now(),
        this[$.expando] = !0,
        void 0) : new $.Event(a,b)
    }
    ,
    $.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = g;
            var a = this.originalEvent;
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = g;
            var a = this.originalEvent;
            a && (a.stopPropagation && a.stopPropagation(),
            a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = g,
            this.stopPropagation()
        },
        isDefaultPrevented: f,
        isPropagationStopped: f,
        isImmediatePropagationStopped: f
    },
    $.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        $.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                f.selector;
                return (!e || e !== d && !$.contains(d, e)) && (a.type = f.origType,
                c = f.handler.apply(this, arguments),
                a.type = b),
                c
            }
        }
    }),
    $.support.submitBubbles || ($.event.special.submit = {
        setup: function() {
            return $.nodeName(this, "form") ? !1 : void $.event.add(this, "click._submit keypress._submit", function(a) {
                var c = a.target
                  , d = $.nodeName(c, "input") || $.nodeName(c, "button") ? c.form : b;
                d && !$._data(d, "_submit_attached") && ($.event.add(d, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }),
                $._data(d, "_submit_attached", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble,
            this.parentNode && !a.isTrigger && $.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return $.nodeName(this, "form") ? !1 : void $.event.remove(this, "._submit")
        }
    }),
    $.support.changeBubbles || ($.event.special.change = {
        setup: function() {
            return Ba.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && ($.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }),
            $.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1),
                $.event.simulate("change", this, a, !0)
            })),
            !1) : void $.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                Ba.test(b.nodeName) && !$._data(b, "_change_attached") && ($.event.add(b, "change._change", function(a) {
                    this.parentNode && !a.isSimulated && !a.isTrigger && $.event.simulate("change", this.parentNode, a, !0)
                }),
                $._data(b, "_change_attached", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return $.event.remove(this, "._change"),
            !Ba.test(this.nodeName)
        }
    }),
    $.support.focusinBubbles || $.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = 0
          , d = function(a) {
            $.event.simulate(b, a.target, $.event.fix(a), !0)
        }
        ;
        $.event.special[b] = {
            setup: function() {
                0 === c++ && P.addEventListener(a, d, !0)
            },
            teardown: function() {
                0 === --c && P.removeEventListener(a, d, !0)
            }
        }
    }),
    $.fn.extend({
        on: function(a, c, d, e, g) {
            var h, i;
            if ("object" == typeof a) {
                "string" != typeof c && (d = d || c,
                c = b);
                for (i in a)
                    this.on(i, c, d, a[i], g);
                return this
            }
            if (null  == d && null  == e ? (e = c,
            d = c = b) : null  == e && ("string" == typeof c ? (e = d,
            d = b) : (e = d,
            d = c,
            c = b)),
            e === !1)
                e = f;
            else if (!e)
                return this;
            return 1 === g && (h = e,
            e = function(a) {
                return $().off(a),
                h.apply(this, arguments)
            }
            ,
            e.guid = h.guid || (h.guid = $.guid++)),
            this.each(function() {
                $.event.add(this, a, e, d, c)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, c, d) {
            var e, g;
            if (a && a.preventDefault && a.handleObj)
                return e = a.handleObj,
                $(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler),
                this;
            if ("object" == typeof a) {
                for (g in a)
                    this.off(g, c, a[g]);
                return this
            }
            return (c === !1 || "function" == typeof c) && (d = c,
            c = b),
            d === !1 && (d = f),
            this.each(function() {
                $.event.remove(this, a, d, c)
            })
        },
        bind: function(a, b, c) {
            return this.on(a, null , b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null , b)
        },
        live: function(a, b, c) {
            return $(this.context).on(a, this.selector, b, c),
            this
        },
        die: function(a, b) {
            return $(this.context).off(a, this.selector || "**", b),
            this
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        },
        trigger: function(a, b) {
            return this.each(function() {
                $.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            return this[0] ? $.event.trigger(a, b, this[0], !0) : void 0
        },
        toggle: function(a) {
            var b = arguments
              , c = a.guid || $.guid++
              , d = 0
              , e = function(c) {
                var e = ($._data(this, "lastToggle" + a.guid) || 0) % d;
                return $._data(this, "lastToggle" + a.guid, e + 1),
                c.preventDefault(),
                b[e].apply(this, arguments) || !1
            }
            ;
            for (e.guid = c; d < b.length; )
                b[d++].guid = c;
            return this.click(e)
        },
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }),
    $.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        $.fn[b] = function(a, c) {
            return null  == c && (c = a,
            a = null ),
            arguments.length > 0 ? this.on(b, null , a, c) : this.trigger(b)
        }
        ,
        Ea.test(b) && ($.event.fixHooks[b] = $.event.keyHooks),
        Fa.test(b) && ($.event.fixHooks[b] = $.event.mouseHooks)
    }),
    function(a, b) {
        function c(a, b, c, d) {
            c = c || [],
            b = b || F;
            var e, f, g, h, i = b.nodeType;
            if (!a || "string" != typeof a)
                return c;
            if (1 !== i && 9 !== i)
                return [];
            if (g = v(b),
            !g && !d && (e = ca.exec(a)))
                if (h = e[1]) {
                    if (9 === i) {
                        if (f = b.getElementById(h),
                        !f || !f.parentNode)
                            return c;
                        if (f.id === h)
                            return c.push(f),
                            c
                    } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(h)) && w(b, f) && f.id === h)
                        return c.push(f),
                        c
                } else {
                    if (e[2])
                        return K.apply(c, L.call(b.getElementsByTagName(a), 0)),
                        c;
                    if ((h = e[3]) && ma && b.getElementsByClassName)
                        return K.apply(c, L.call(b.getElementsByClassName(h), 0)),
                        c
                }
            return p(a.replace(Z, "$1"), b, c, d, g)
        }
        function d(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function e(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function f(a) {
            return N(function(b) {
                return b = +b,
                N(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; )
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function g(a, b, c) {
            if (a === b)
                return c;
            for (var d = a.nextSibling; d; ) {
                if (d === b)
                    return -1;
                d = d.nextSibling
            }
            return 1
        }
        function h(a, b) {
            var d, e, f, g, h, i, j, k = Q[D][a + " "];
            if (k)
                return b ? 0 : k.slice(0);
            for (h = a,
            i = [],
            j = t.preFilter; h; ) {
                (!d || (e = _.exec(h))) && (e && (h = h.slice(e[0].length) || h),
                i.push(f = [])),
                d = !1,
                (e = aa.exec(h)) && (f.push(d = new E(e.shift())),
                h = h.slice(d.length),
                d.type = e[0].replace(Z, " "));
                for (g in t.filter)
                    (e = ha[g].exec(h)) && (!j[g] || (e = j[g](e))) && (f.push(d = new E(e.shift())),
                    h = h.slice(d.length),
                    d.type = g,
                    d.matches = e);
                if (!d)
                    break
            }
            return b ? h.length : h ? c.error(a) : Q(a, i).slice(0)
        }
        function i(a, b, c) {
            var d = b.dir
              , e = c && "parentNode" === b.dir
              , f = I++;
            return b.first ? function(b, c, f) {
                for (; b = b[d]; )
                    if (e || 1 === b.nodeType)
                        return a(b, c, f)
            }
             : function(b, c, g) {
                if (g) {
                    for (; b = b[d]; )
                        if ((e || 1 === b.nodeType) && a(b, c, g))
                            return b
                } else
                    for (var h, i = H + " " + f + " ", j = i + r; b = b[d]; )
                        if (e || 1 === b.nodeType) {
                            if ((h = b[D]) === j)
                                return b.sizset;
                            if ("string" == typeof h && 0 === h.indexOf(i)) {
                                if (b.sizset)
                                    return b
                            } else {
                                if (b[D] = j,
                                a(b, c, g))
                                    return b.sizset = !0,
                                    b;
                                b.sizset = !1
                            }
                        }
            }
        }
        function j(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--; )
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            }
             : a[0]
        }
        function k(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null  != b; i > h; h++)
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f),
                j && b.push(h));
            return g
        }
        function l(a, b, c, d, e, f) {
            return d && !d[D] && (d = l(d)),
            e && !e[D] && (e = l(e, f)),
            N(function(f, g, h, i) {
                var j, l, m, n = [], p = [], q = g.length, r = f || o(b || "*", h.nodeType ? [h] : h, []), s = !a || !f && b ? r : k(r, n, a, h, i), t = c ? e || (f ? a : q || d) ? [] : g : s;
                if (c && c(s, t, h, i),
                d)
                    for (j = k(t, p),
                    d(j, [], h, i),
                    l = j.length; l--; )
                        (m = j[l]) && (t[p[l]] = !(s[p[l]] = m));
                if (f) {
                    if (e || a) {
                        if (e) {
                            for (j = [],
                            l = t.length; l--; )
                                (m = t[l]) && j.push(s[l] = m);
                            e(null , t = [], j, i)
                        }
                        for (l = t.length; l--; )
                            (m = t[l]) && (j = e ? M.call(f, m) : n[l]) > -1 && (f[j] = !(g[j] = m))
                    }
                } else
                    t = k(t === g ? t.splice(q, t.length) : t),
                    e ? e(null , g, t, i) : K.apply(g, t)
            })
        }
        function m(a) {
            for (var b, c, d, e = a.length, f = t.relative[a[0].type], g = f || t.relative[" "], h = f ? 1 : 0, k = i(function(a) {
                return a === b
            }, g, !0), n = i(function(a) {
                return M.call(b, a) > -1
            }, g, !0), o = [function(a, c, d) {
                return !f && (d || c !== A) || ((b = c).nodeType ? k(a, c, d) : n(a, c, d))
            }
            ]; e > h; h++)
                if (c = t.relative[a[h].type])
                    o = [i(j(o), c)];
                else {
                    if (c = t.filter[a[h].type].apply(null , a[h].matches),
                    c[D]) {
                        for (d = ++h; e > d && !t.relative[a[d].type]; d++)
                            ;
                        return l(h > 1 && j(o), h > 1 && a.slice(0, h - 1).join("").replace(Z, "$1"), c, d > h && m(a.slice(h, d)), e > d && m(a = a.slice(d)), e > d && a.join(""))
                    }
                    o.push(c)
                }
            return j(o)
        }
        function n(a, b) {
            var d = b.length > 0
              , e = a.length > 0
              , f = function(g, h, i, j, l) {
                var m, n, o, p = [], q = 0, s = "0", u = g && [], v = null  != l, w = A, x = g || e && t.find.TAG("*", l && h.parentNode || h), y = H += null  == w ? 1 : Math.E;
                for (v && (A = h !== F && h,
                r = f.el); null  != (m = x[s]); s++) {
                    if (e && m) {
                        for (n = 0; o = a[n]; n++)
                            if (o(m, h, i)) {
                                j.push(m);
                                break
                            }
                        v && (H = y,
                        r = ++f.el)
                    }
                    d && ((m = !o && m) && q--,
                    g && u.push(m))
                }
                if (q += s,
                d && s !== q) {
                    for (n = 0; o = b[n]; n++)
                        o(u, p, h, i);
                    if (g) {
                        if (q > 0)
                            for (; s--; )
                                !u[s] && !p[s] && (p[s] = J.call(j));
                        p = k(p)
                    }
                    K.apply(j, p),
                    v && !g && p.length > 0 && q + b.length > 1 && c.uniqueSort(j)
                }
                return v && (H = y,
                A = w),
                u
            }
            ;
            return f.el = 0,
            d ? N(f) : f
        }
        function o(a, b, d) {
            for (var e = 0, f = b.length; f > e; e++)
                c(a, b[e], d);
            return d
        }
        function p(a, b, c, d, e) {
            var f, g, i, j, k, l = h(a);
            l.length;
            if (!d && 1 === l.length) {
                if (g = l[0] = l[0].slice(0),
                g.length > 2 && "ID" === (i = g[0]).type && 9 === b.nodeType && !e && t.relative[g[1].type]) {
                    if (b = t.find.ID(i.matches[0].replace(ga, ""), b, e)[0],
                    !b)
                        return c;
                    a = a.slice(g.shift().length)
                }
                for (f = ha.POS.test(a) ? -1 : g.length - 1; f >= 0 && (i = g[f],
                !t.relative[j = i.type]); f--)
                    if ((k = t.find[j]) && (d = k(i.matches[0].replace(ga, ""), da.test(g[0].type) && b.parentNode || b, e))) {
                        if (g.splice(f, 1),
                        a = d.length && g.join(""),
                        !a)
                            return K.apply(c, L.call(d, 0)),
                            c;
                        break
                    }
            }
            return x(a, l)(d, b, e, c, da.test(a)),
            c
        }
        function q() {}
        var r, s, t, u, v, w, x, y, z, A, B = !0, C = "undefined", D = ("sizcache" + Math.random()).replace(".", ""), E = String, F = a.document, G = F.documentElement, H = 0, I = 0, J = [].pop, K = [].push, L = [].slice, M = [].indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (this[b] === a)
                    return b;
            return -1
        }
        , N = function(a, b) {
            return a[D] = null  == b || b,
            a
        }
        , O = function() {
            var a = {}
              , b = [];
            return N(function(c, d) {
                return b.push(c) > t.cacheLength && delete a[b.shift()],
                a[c + " "] = d
            }, a)
        }
        , P = O(), Q = O(), R = O(), S = "[\\x20\\t\\r\\n\\f]", T = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", U = T.replace("w", "w#"), V = "([*^$|!~]?=)", W = "\\[" + S + "*(" + T + ")" + S + "*(?:" + V + S + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + U + ")|)|)" + S + "*\\]", X = ":(" + T + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + W + ")|[^:]|\\\\.)*|.*))\\)|)", Y = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + S + "*((?:-\\d)?\\d*)" + S + "*\\)|)(?=[^-]|$)", Z = new RegExp("^" + S + "+|((?:^|[^\\\\])(?:\\\\.)*)" + S + "+$","g"), _ = new RegExp("^" + S + "*," + S + "*"), aa = new RegExp("^" + S + "*([\\x20\\t\\r\\n\\f>+~])" + S + "*"), ba = new RegExp(X), ca = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, da = /[\x20\t\r\n\f]*[+~]/, ea = /h\d/i, fa = /input|select|textarea|button/i, ga = /\\(?!\\)/g, ha = {
            ID: new RegExp("^#(" + T + ")"),
            CLASS: new RegExp("^\\.(" + T + ")"),
            NAME: new RegExp("^\\[name=['\"]?(" + T + ")['\"]?\\]"),
            TAG: new RegExp("^(" + T.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + X),
            POS: new RegExp(Y,"i"),
            CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + S + "*(even|odd|(([+-]|)(\\d*)n|)" + S + "*(?:([+-]|)" + S + "*(\\d+)|))" + S + "*\\)|)","i"),
            needsContext: new RegExp("^" + S + "*[>+~]|" + Y,"i")
        }, ia = function(a) {
            var b = F.createElement("div");
            try {
                return a(b)
            } catch (c) {
                return !1
            } finally {
                b = null 
            }
        }
        , ja = ia(function(a) {
            return a.appendChild(F.createComment("")),
            !a.getElementsByTagName("*").length
        }), ka = ia(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            a.firstChild && typeof a.firstChild.getAttribute !== C && "#" === a.firstChild.getAttribute("href")
        }), la = ia(function(a) {
            a.innerHTML = "<select></select>";
            var b = typeof a.lastChild.getAttribute("multiple");
            return "boolean" !== b && "string" !== b
        }), ma = ia(function(a) {
            return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
            a.getElementsByClassName && a.getElementsByClassName("e").length ? (a.lastChild.className = "e",
            2 === a.getElementsByClassName("e").length) : !1
        }), na = ia(function(a) {
            a.id = D + 0,
            a.innerHTML = "<a name='" + D + "'></a><div name='" + D + "'></div>",
            G.insertBefore(a, G.firstChild);
            var b = F.getElementsByName && F.getElementsByName(D).length === 2 + F.getElementsByName(D + 0).length;
            return s = !F.getElementById(D),
            G.removeChild(a),
            b
        });
        try {
            L.call(G.childNodes, 0)[0].nodeType
        } catch (oa) {
            L = function(a) {
                for (var b, c = []; b = this[a]; a++)
                    c.push(b);
                return c
            }
        }
        c.matches = function(a, b) {
            return c(a, null , null , b)
        }
        ,
        c.matchesSelector = function(a, b) {
            return c(b, null , null , [a]).length > 0
        }
        ,
        u = c.getText = function(a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += u(a)
                } else if (3 === e || 4 === e)
                    return a.nodeValue
            } else
                for (; b = a[d]; d++)
                    c += u(b);
            return c
        }
        ,
        v = c.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }
        ,
        w = c.contains = G.contains ? function(a, b) {
            var c = 9 === a.nodeType ? a.documentElement : a
              , d = b && b.parentNode;
            return a === d || !!(d && 1 === d.nodeType && c.contains && c.contains(d))
        }
         : G.compareDocumentPosition ? function(a, b) {
            return b && !!(16 & a.compareDocumentPosition(b))
        }
         : function(a, b) {
            for (; b = b.parentNode; )
                if (b === a)
                    return !0;
            return !1
        }
        ,
        c.attr = function(a, b) {
            var c, d = v(a);
            return d || (b = b.toLowerCase()),
            (c = t.attrHandle[b]) ? c(a) : d || la ? a.getAttribute(b) : (c = a.getAttributeNode(b),
            c ? "boolean" == typeof a[b] ? a[b] ? b : null  : c.specified ? c.value : null  : null )
        }
        ,
        t = c.selectors = {
            cacheLength: 50,
            createPseudo: N,
            match: ha,
            attrHandle: ka ? {} : {
                href: function(a) {
                    return a.getAttribute("href", 2)
                },
                type: function(a) {
                    return a.getAttribute("type")
                }
            },
            find: {
                ID: s ? function(a, b, c) {
                    if (typeof b.getElementById !== C && !c) {
                        var d = b.getElementById(a);
                        return d && d.parentNode ? [d] : []
                    }
                }
                 : function(a, c, d) {
                    if (typeof c.getElementById !== C && !d) {
                        var e = c.getElementById(a);
                        return e ? e.id === a || typeof e.getAttributeNode !== C && e.getAttributeNode("id").value === a ? [e] : b : []
                    }
                }
                ,
                TAG: ja ? function(a, b) {
                    return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
                }
                 : function(a, b) {
                    var c = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (var d, e = [], f = 0; d = c[f]; f++)
                            1 === d.nodeType && e.push(d);
                        return e
                    }
                    return c
                }
                ,
                NAME: na && function(a, b) {
                    return typeof b.getElementsByName !== C ? b.getElementsByName(name) : void 0
                }
                ,
                CLASS: ma && function(a, b, c) {
                    return typeof b.getElementsByClassName === C || c ? void 0 : b.getElementsByClassName(a)
                }
            },
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
                ATTR: function(a) {
                    return a[1] = a[1].replace(ga, ""),
                    a[3] = (a[4] || a[5] || "").replace(ga, ""),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1] ? (a[2] || c.error(a[0]),
                    a[3] = +(a[3] ? a[4] + (a[5] || 1) : 2 * ("even" === a[2] || "odd" === a[2])),
                    a[4] = +(a[6] + a[7] || "odd" === a[2])) : a[2] && c.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var b, c;
                    return ha.CHILD.test(a[0]) ? null  : (a[3] ? a[2] = a[3] : (b = a[4]) && (ba.test(b) && (c = h(b, !0)) && (c = b.indexOf(")", b.length - c) - b.length) && (b = b.slice(0, c),
                    a[0] = a[0].slice(0, c)),
                    a[2] = b),
                    a.slice(0, 3))
                }
            },
            filter: {
                ID: s ? function(a) {
                    return a = a.replace(ga, ""),
                    function(b) {
                        return b.getAttribute("id") === a
                    }
                }
                 : function(a) {
                    return a = a.replace(ga, ""),
                    function(b) {
                        var c = typeof b.getAttributeNode !== C && b.getAttributeNode("id");
                        return c && c.value === a
                    }
                }
                ,
                TAG: function(a) {
                    return "*" === a ? function() {
                        return !0
                    }
                     : (a = a.replace(ga, "").toLowerCase(),
                    function(b) {
                        return b.nodeName && b.nodeName.toLowerCase() === a
                    }
                    )
                },
                CLASS: function(a) {
                    var b = P[D][a + " "];
                    return b || (b = new RegExp("(^|" + S + ")" + a + "(" + S + "|$)")) && P(a, function(a) {
                        return b.test(a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, d) {
                    return function(e, f) {
                        var g = c.attr(e, a);
                        return null  == g ? "!=" === b : b ? (g += "",
                        "=" === b ? g === d : "!=" === b ? g !== d : "^=" === b ? d && 0 === g.indexOf(d) : "*=" === b ? d && g.indexOf(d) > -1 : "$=" === b ? d && g.substr(g.length - d.length) === d : "~=" === b ? (" " + g + " ").indexOf(d) > -1 : "|=" === b ? g === d || g.substr(0, d.length + 1) === d + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d) {
                    return "nth" === a ? function(a) {
                        var b, e, f = a.parentNode;
                        if (1 === c && 0 === d)
                            return !0;
                        if (f)
                            for (e = 0,
                            b = f.firstChild; b && (1 !== b.nodeType || (e++,
                            a !== b)); b = b.nextSibling)
                                ;
                        return e -= d,
                        e === c || e % c === 0 && e / c >= 0
                    }
                     : function(b) {
                        var c = b;
                        switch (a) {
                        case "only":
                        case "first":
                            for (; c = c.previousSibling; )
                                if (1 === c.nodeType)
                                    return !1;
                            if ("first" === a)
                                return !0;
                            c = b;
                        case "last":
                            for (; c = c.nextSibling; )
                                if (1 === c.nodeType)
                                    return !1;
                            return !0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var d, e = t.pseudos[a] || t.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
                    return e[D] ? e(b) : e.length > 1 ? (d = [a, a, "", b],
                    t.setFilters.hasOwnProperty(a.toLowerCase()) ? N(function(a, c) {
                        for (var d, f = e(a, b), g = f.length; g--; )
                            d = M.call(a, f[g]),
                            a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, d)
                    }
                    ) : e
                }
            },
            pseudos: {
                not: N(function(a) {
                    var b = []
                      , c = []
                      , d = x(a.replace(Z, "$1"));
                    return d[D] ? N(function(a, b, c, e) {
                        for (var f, g = d(a, null , e, []), h = a.length; h--; )
                            (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a,
                        d(b, null , f, c),
                        !c.pop()
                    }
                }),
                has: N(function(a) {
                    return function(b) {
                        return c(a, b).length > 0
                    }
                }),
                contains: N(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || u(b)).indexOf(a) > -1
                    }
                }),
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                parent: function(a) {
                    return !t.pseudos.empty(a)
                },
                empty: function(a) {
                    var b;
                    for (a = a.firstChild; a; ) {
                        if (a.nodeName > "@" || 3 === (b = a.nodeType) || 4 === b)
                            return !1;
                        a = a.nextSibling
                    }
                    return !0
                },
                header: function(a) {
                    return ea.test(a.nodeName)
                },
                text: function(a) {
                    var b, c;
                    return "input" === a.nodeName.toLowerCase() && "text" === (b = a.type) && (null  == (c = a.getAttribute("type")) || c.toLowerCase() === b)
                },
                radio: d("radio"),
                checkbox: d("checkbox"),
                file: d("file"),
                password: d("password"),
                image: d("image"),
                submit: e("submit"),
                reset: e("reset"),
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                input: function(a) {
                    return fa.test(a.nodeName)
                },
                focus: function(a) {
                    var b = a.ownerDocument;
                    return a === b.activeElement && (!b.hasFocus || b.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                active: function(a) {
                    return a === a.ownerDocument.activeElement
                },
                first: f(function() {
                    return [0]
                }),
                last: f(function(a, b) {
                    return [b - 1]
                }),
                eq: f(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: f(function(a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                odd: f(function(a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                lt: f(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; )
                        a.push(d);
                    return a
                }),
                gt: f(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; )
                        a.push(d);
                    return a
                })
            }
        },
        y = G.compareDocumentPosition ? function(a, b) {
            return a === b ? (z = !0,
            0) : (a.compareDocumentPosition && b.compareDocumentPosition ? 4 & a.compareDocumentPosition(b) : a.compareDocumentPosition) ? -1 : 1
        }
         : function(a, b) {
            if (a === b)
                return z = !0,
                0;
            if (a.sourceIndex && b.sourceIndex)
                return a.sourceIndex - b.sourceIndex;
            var c, d, e = [], f = [], h = a.parentNode, i = b.parentNode, j = h;
            if (h === i)
                return g(a, b);
            if (!h)
                return -1;
            if (!i)
                return 1;
            for (; j; )
                e.unshift(j),
                j = j.parentNode;
            for (j = i; j; )
                f.unshift(j),
                j = j.parentNode;
            c = e.length,
            d = f.length;
            for (var k = 0; c > k && d > k; k++)
                if (e[k] !== f[k])
                    return g(e[k], f[k]);
            return k === c ? g(a, f[k], -1) : g(e[k], b, 1)
        }
        ,
        [0, 0].sort(y),
        B = !z,
        c.uniqueSort = function(a) {
            var b, c = [], d = 1, e = 0;
            if (z = B,
            a.sort(y),
            z) {
                for (; b = a[d]; d++)
                    b === a[d - 1] && (e = c.push(d));
                for (; e--; )
                    a.splice(c[e], 1)
            }
            return a
        }
        ,
        c.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }
        ,
        x = c.compile = function(a, b) {
            var c, d = [], e = [], f = R[D][a + " "];
            if (!f) {
                for (b || (b = h(a)),
                c = b.length; c--; )
                    f = m(b[c]),
                    f[D] ? d.push(f) : e.push(f);
                f = R(a, n(e, d))
            }
            return f
        }
        ,
        F.querySelectorAll && function() {
            var a, b = p, d = /'|\\/g, e = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, f = [":focus"], g = [":active"], i = G.matchesSelector || G.mozMatchesSelector || G.webkitMatchesSelector || G.oMatchesSelector || G.msMatchesSelector;
            ia(function(a) {
                a.innerHTML = "<select><option selected=''></option></select>",
                a.querySelectorAll("[selected]").length || f.push("\\[" + S + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
                a.querySelectorAll(":checked").length || f.push(":checked")
            }),
            ia(function(a) {
                a.innerHTML = "<p test=''></p>",
                a.querySelectorAll("[test^='']").length && f.push("[*^$]=" + S + "*(?:\"\"|'')"),
                a.innerHTML = "<input type='hidden'/>",
                a.querySelectorAll(":enabled").length || f.push(":enabled", ":disabled")
            }),
            f = new RegExp(f.join("|")),
            p = function(a, c, e, g, i) {
                if (!g && !i && !f.test(a)) {
                    var j, k, l = !0, m = D, n = c, o = 9 === c.nodeType && a;
                    if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
                        for (j = h(a),
                        (l = c.getAttribute("id")) ? m = l.replace(d, "\\$&") : c.setAttribute("id", m),
                        m = "[id='" + m + "'] ",
                        k = j.length; k--; )
                            j[k] = m + j[k].join("");
                        n = da.test(a) && c.parentNode || c,
                        o = j.join(",")
                    }
                    if (o)
                        try {
                            return K.apply(e, L.call(n.querySelectorAll(o), 0)),
                            e
                        } catch (p) {} finally {
                            l || c.removeAttribute("id")
                        }
                }
                return b(a, c, e, g, i)
            }
            ,
            i && (ia(function(b) {
                a = i.call(b, "div");
                try {
                    i.call(b, "[test!='']:sizzle"),
                    g.push("!=", X)
                } catch (c) {}
            }),
            g = new RegExp(g.join("|")),
            c.matchesSelector = function(b, d) {
                if (d = d.replace(e, "='$1']"),
                !v(b) && !g.test(d) && !f.test(d))
                    try {
                        var h = i.call(b, d);
                        if (h || a || b.document && 11 !== b.document.nodeType)
                            return h
                    } catch (j) {}
                return c(d, null , null , [b]).length > 0
            }
            )
        }(),
        t.pseudos.nth = t.pseudos.eq,
        t.filters = q.prototype = t.pseudos,
        t.setFilters = new q,
        c.attr = $.attr,
        $.find = c,
        $.expr = c.selectors,
        $.expr[":"] = $.expr.pseudos,
        $.unique = c.uniqueSort,
        $.text = c.getText,
        $.isXMLDoc = c.isXML,
        $.contains = c.contains
    }(a);
    var Ia = /Until$/
      , Ja = /^(?:parents|prev(?:Until|All))/
      , Ka = /^.[^:#\[\.,]*$/
      , La = $.expr.match.needsContext
      , Ma = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    $.fn.extend({
        find: function(a) {
            var b, c, d, e, f, g, h = this;
            if ("string" != typeof a)
                return $(a).filter(function() {
                    for (b = 0,
                    c = h.length; c > b; b++)
                        if ($.contains(h[b], this))
                            return !0
                });
            for (g = this.pushStack("", "find", a),
            b = 0,
            c = this.length; c > b; b++)
                if (d = g.length,
                $.find(a, this[b], g),
                b > 0)
                    for (e = d; e < g.length; e++)
                        for (f = 0; d > f; f++)
                            if (g[f] === g[e]) {
                                g.splice(e--, 1);
                                break
                            }
            return g
        },
        has: function(a) {
            var b, c = $(a, this), d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if ($.contains(this, c[b]))
                        return !0
            })
        },
        not: function(a) {
            return this.pushStack(j(this, a, !1), "not", a)
        },
        filter: function(a) {
            return this.pushStack(j(this, a, !0), "filter", a)
        },
        is: function(a) {
            return !!a && ("string" == typeof a ? La.test(a) ? $(a, this.context).index(this[0]) >= 0 : $.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = La.test(a) || "string" != typeof a ? $(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c.ownerDocument && c !== b && 11 !== c.nodeType; ) {
                    if (g ? g.index(c) > -1 : $.find.matchesSelector(c, a)) {
                        f.push(c);
                        break
                    }
                    c = c.parentNode
                }
            return f = f.length > 1 ? $.unique(f) : f,
            this.pushStack(f, "closest", a)
        },
        index: function(a) {
            return a ? "string" == typeof a ? $.inArray(this[0], $(a)) : $.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(a, b) {
            var c = "string" == typeof a ? $(a, b) : $.makeArray(a && a.nodeType ? [a] : a)
              , d = $.merge(this.get(), c);
            return this.pushStack(h(c[0]) || h(d[0]) ? d : $.unique(d))
        },
        addBack: function(a) {
            return this.add(null  == a ? this.prevObject : this.prevObject.filter(a))
        }
    }),
    $.fn.andSelf = $.fn.addBack,
    $.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null 
        },
        parents: function(a) {
            return $.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return $.dir(a, "parentNode", c)
        },
        next: function(a) {
            return i(a, "nextSibling")
        },
        prev: function(a) {
            return i(a, "previousSibling")
        },
        nextAll: function(a) {
            return $.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return $.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return $.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return $.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return $.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return $.sibling(a.firstChild)
        },
        contents: function(a) {
            return $.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : $.merge([], a.childNodes)
        }
    }, function(a, b) {
        $.fn[a] = function(c, d) {
            var e = $.map(this, b, c);
            return Ia.test(a) || (d = c),
            d && "string" == typeof d && (e = $.filter(d, e)),
            e = this.length > 1 && !Ma[a] ? $.unique(e) : e,
            this.length > 1 && Ja.test(a) && (e = e.reverse()),
            this.pushStack(e, a, V.call(arguments).join(","))
        }
    }),
    $.extend({
        filter: function(a, b, c) {
            return c && (a = ":not(" + a + ")"),
            1 === b.length ? $.find.matchesSelector(b[0], a) ? [b[0]] : [] : $.find.matches(a, b)
        },
        dir: function(a, c, d) {
            for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !$(f).is(d)); )
                1 === f.nodeType && e.push(f),
                f = f[c];
            return e
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    var Na = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , Oa = / jQuery\d+="(?:null|\d+)"/g
      , Pa = /^\s+/
      , Qa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , Ra = /<([\w:]+)/
      , Sa = /<tbody/i
      , Ta = /<|&#?\w+;/
      , Ua = /<(?:script|style|link)/i
      , Va = /<(?:script|object|embed|option|style)/i
      , Wa = new RegExp("<(?:" + Na + ")[\\s/>]","i")
      , Xa = /^(?:checkbox|radio)$/
      , Ya = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Za = /\/(java|ecma)script/i
      , $a = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g
      , _a = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    }
      , ab = k(P)
      , bb = ab.appendChild(P.createElement("div"));
    _a.optgroup = _a.option,
    _a.tbody = _a.tfoot = _a.colgroup = _a.caption = _a.thead,
    _a.th = _a.td,
    $.support.htmlSerialize || (_a._default = [1, "X<div>", "</div>"]),
    $.fn.extend({
        text: function(a) {
            return $.access(this, function(a) {
                return a === b ? $.text(this) : this.empty().append((this[0] && this[0].ownerDocument || P).createTextNode(a))
            }, null , a, arguments.length)
        },
        wrapAll: function(a) {
            if ($.isFunction(a))
                return this.each(function(b) {
                    $(this).wrapAll(a.call(this, b))
                });
            if (this[0]) {
                var b = $(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]),
                b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType; )
                        a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return $.isFunction(a) ? this.each(function(b) {
                $(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = $(this)
                  , c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = $.isFunction(a);
            return this.each(function(c) {
                $(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                $.nodeName(this, "body") || $(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(a) {
                (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(a) {
                (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(a, this.firstChild)
            })
        },
        before: function() {
            if (!h(this[0]))
                return this.domManip(arguments, !1, function(a) {
                    this.parentNode.insertBefore(a, this)
                });
            if (arguments.length) {
                var a = $.clean(arguments);
                return this.pushStack($.merge(a, this), "before", this.selector)
            }
        },
        after: function() {
            if (!h(this[0]))
                return this.domManip(arguments, !1, function(a) {
                    this.parentNode.insertBefore(a, this.nextSibling)
                });
            if (arguments.length) {
                var a = $.clean(arguments);
                return this.pushStack($.merge(this, a), "after", this.selector)
            }
        },
        remove: function(a, b) {
            for (var c, d = 0; null  != (c = this[d]); d++)
                (!a || $.filter(a, [c]).length) && (!b && 1 === c.nodeType && ($.cleanData(c.getElementsByTagName("*")),
                $.cleanData([c])),
                c.parentNode && c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null  != (a = this[b]); b++)
                for (1 === a.nodeType && $.cleanData(a.getElementsByTagName("*")); a.firstChild; )
                    a.removeChild(a.firstChild);
            return this
        },
        clone: function(a, b) {
            return a = null  == a ? !1 : a,
            b = null  == b ? a : b,
            this.map(function() {
                return $.clone(this, a, b)
            })
        },
        html: function(a) {
            return $.access(this, function(a) {
                var c = this[0] || {}
                  , d = 0
                  , e = this.length;
                if (a === b)
                    return 1 === c.nodeType ? c.innerHTML.replace(Oa, "") : b;
                if ("string" == typeof a && !Ua.test(a) && ($.support.htmlSerialize || !Wa.test(a)) && ($.support.leadingWhitespace || !Pa.test(a)) && !_a[(Ra.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Qa, "<$1></$2>");
                    try {
                        for (; e > d; d++)
                            c = this[d] || {},
                            1 === c.nodeType && ($.cleanData(c.getElementsByTagName("*")),
                            c.innerHTML = a);
                        c = 0
                    } catch (f) {}
                }
                c && this.empty().append(a)
            }, null , a, arguments.length)
        },
        replaceWith: function(a) {
            return h(this[0]) ? this.length ? this.pushStack($($.isFunction(a) ? a() : a), "replaceWith", a) : this : $.isFunction(a) ? this.each(function(b) {
                var c = $(this)
                  , d = c.html();
                c.replaceWith(a.call(this, b, d))
            }) : ("string" != typeof a && (a = $(a).detach()),
            this.each(function() {
                var b = this.nextSibling
                  , c = this.parentNode;
                $(this).remove(),
                b ? $(b).before(a) : $(c).append(a)
            }))
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, c, d) {
            a = [].concat.apply([], a);
            var e, f, g, h, i = 0, j = a[0], k = [], m = this.length;
            if (!$.support.checkClone && m > 1 && "string" == typeof j && Ya.test(j))
                return this.each(function() {
                    $(this).domManip(a, c, d)
                });
            if ($.isFunction(j))
                return this.each(function(e) {
                    var f = $(this);
                    a[0] = j.call(this, e, c ? f.html() : b),
                    f.domManip(a, c, d)
                });
            if (this[0]) {
                if (e = $.buildFragment(a, this, k),
                g = e.fragment,
                f = g.firstChild,
                1 === g.childNodes.length && (g = f),
                f)
                    for (c = c && $.nodeName(f, "tr"),
                    h = e.cacheable || m - 1; m > i; i++)
                        d.call(c && $.nodeName(this[i], "table") ? l(this[i], "tbody") : this[i], i === h ? g : $.clone(g, !0, !0));
                g = f = null ,
                k.length && $.each(k, function(a, b) {
                    b.src ? $.ajax ? $.ajax({
                        url: b.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : $.error("no ajax") : $.globalEval((b.text || b.textContent || b.innerHTML || "").replace($a, "")),
                    b.parentNode && b.parentNode.removeChild(b)
                })
            }
            return this
        }
    }),
    $.buildFragment = function(a, c, d) {
        var e, f, g, h = a[0];
        return c = c || P,
        c = !c.nodeType && c[0] || c,
        c = c.ownerDocument || c,
        1 === a.length && "string" == typeof h && h.length < 512 && c === P && "<" === h.charAt(0) && !Va.test(h) && ($.support.checkClone || !Ya.test(h)) && ($.support.html5Clone || !Wa.test(h)) && (f = !0,
        e = $.fragments[h],
        g = e !== b),
        e || (e = c.createDocumentFragment(),
        $.clean(a, c, e, d),
        f && ($.fragments[h] = g && e)),
        {
            fragment: e,
            cacheable: f
        }
    }
    ,
    $.fragments = {},
    $.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        $.fn[a] = function(c) {
            var d, e = 0, f = [], g = $(c), h = g.length, i = 1 === this.length && this[0].parentNode;
            if ((null  == i || i && 11 === i.nodeType && 1 === i.childNodes.length) && 1 === h)
                return g[b](this[0]),
                this;
            for (; h > e; e++)
                d = (e > 0 ? this.clone(!0) : this).get(),
                $(g[e])[b](d),
                f = f.concat(d);
            return this.pushStack(f, a, g.selector)
        }
    }),
    $.extend({
        clone: function(a, b, c) {
            var d, e, f, g;
            if ($.support.html5Clone || $.isXMLDoc(a) || !Wa.test("<" + a.nodeName + ">") ? g = a.cloneNode(!0) : (bb.innerHTML = a.outerHTML,
            bb.removeChild(g = bb.firstChild)),
            !($.support.noCloneEvent && $.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || $.isXMLDoc(a)))
                for (n(a, g),
                d = o(a),
                e = o(g),
                f = 0; d[f]; ++f)
                    e[f] && n(d[f], e[f]);
            if (b && (m(a, g),
            c))
                for (d = o(a),
                e = o(g),
                f = 0; d[f]; ++f)
                    m(d[f], e[f]);
            return d = e = null ,
            g
        },
        clean: function(a, b, c, d) {
            var e, f, g, h, i, j, l, m, n, o, q, r = b === P && ab, s = [];
            for (b && "undefined" != typeof b.createDocumentFragment || (b = P),
            e = 0; null  != (g = a[e]); e++)
                if ("number" == typeof g && (g += ""),
                g) {
                    if ("string" == typeof g)
                        if (Ta.test(g)) {
                            for (r = r || k(b),
                            l = b.createElement("div"),
                            r.appendChild(l),
                            g = g.replace(Qa, "<$1></$2>"),
                            h = (Ra.exec(g) || ["", ""])[1].toLowerCase(),
                            i = _a[h] || _a._default,
                            j = i[0],
                            l.innerHTML = i[1] + g + i[2]; j--; )
                                l = l.lastChild;
                            if (!$.support.tbody)
                                for (m = Sa.test(g),
                                n = "table" !== h || m ? "<table>" !== i[1] || m ? [] : l.childNodes : l.firstChild && l.firstChild.childNodes,
                                f = n.length - 1; f >= 0; --f)
                                    $.nodeName(n[f], "tbody") && !n[f].childNodes.length && n[f].parentNode.removeChild(n[f]);
                            !$.support.leadingWhitespace && Pa.test(g) && l.insertBefore(b.createTextNode(Pa.exec(g)[0]), l.firstChild),
                            g = l.childNodes,
                            l.parentNode.removeChild(l)
                        } else
                            g = b.createTextNode(g);
                    g.nodeType ? s.push(g) : $.merge(s, g)
                }
            if (l && (g = l = r = null ),
            !$.support.appendChecked)
                for (e = 0; null  != (g = s[e]); e++)
                    $.nodeName(g, "input") ? p(g) : "undefined" != typeof g.getElementsByTagName && $.grep(g.getElementsByTagName("input"), p);
            if (c)
                for (o = function(a) {
                    return !a.type || Za.test(a.type) ? d ? d.push(a.parentNode ? a.parentNode.removeChild(a) : a) : c.appendChild(a) : void 0
                }
                ,
                e = 0; null  != (g = s[e]); e++)
                    $.nodeName(g, "script") && o(g) || (c.appendChild(g),
                    "undefined" != typeof g.getElementsByTagName && (q = $.grep($.merge([], g.getElementsByTagName("script")), o),
                    s.splice.apply(s, [e + 1, 0].concat(q)),
                    e += q.length));
            return s
        },
        cleanData: function(a, b) {
            for (var c, d, e, f, g = 0, h = $.expando, i = $.cache, j = $.support.deleteExpando, k = $.event.special; null  != (e = a[g]); g++)
                if ((b || $.acceptData(e)) && (d = e[h],
                c = d && i[d])) {
                    if (c.events)
                        for (f in c.events)
                            k[f] ? $.event.remove(e, f) : $.removeEvent(e, f, c.handle);
                    i[d] && (delete i[d],
                    j ? delete e[h] : e.removeAttribute ? e.removeAttribute(h) : e[h] = null ,
                    $.deletedIds.push(d))
                }
        }
    }),
    function() {
        var a, b;
        $.uaMatch = function(a) {
            a = a.toLowerCase();
            var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
            return {
                browser: b[1] || "",
                version: b[2] || "0"
            }
        }
        ,
        a = $.uaMatch(R.userAgent),
        b = {},
        a.browser && (b[a.browser] = !0,
        b.version = a.version),
        b.chrome ? b.webkit = !0 : b.webkit && (b.safari = !0),
        $.browser = b,
        $.sub = function() {
            function a(b, c) {
                return new a.fn.init(b,c)
            }
            $.extend(!0, a, this),
            a.superclass = this,
            a.fn = a.prototype = this(),
            a.fn.constructor = a,
            a.sub = this.sub,
            a.fn.init = function(c, d) {
                return d && d instanceof $ && !(d instanceof a) && (d = a(d)),
                $.fn.init.call(this, c, d, b)
            }
            ,
            a.fn.init.prototype = a.fn;
            var b = a(P);
            return a
        }
    }();
    var cb, db, eb, fb = /alpha\([^)]*\)/i, gb = /opacity=([^)]*)/, hb = /^(top|right|bottom|left)$/, ib = /^(none|table(?!-c[ea]).+)/, jb = /^margin/, kb = new RegExp("^(" + _ + ")(.*)$","i"), lb = new RegExp("^(" + _ + ")(?!px)[a-z%]+$","i"), mb = new RegExp("^([-+])=(" + _ + ")","i"), nb = {
        BODY: "block"
    }, ob = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, pb = {
        letterSpacing: 0,
        fontWeight: 400
    }, qb = ["Top", "Right", "Bottom", "Left"], rb = ["Webkit", "O", "Moz", "ms"], sb = $.fn.toggle;
    $.fn.extend({
        css: function(a, c) {
            return $.access(this, function(a, c, d) {
                return d !== b ? $.style(a, c, d) : $.css(a, c)
            }, a, c, arguments.length > 1)
        },
        show: function() {
            return s(this, !0)
        },
        hide: function() {
            return s(this)
        },
        toggle: function(a, b) {
            var c = "boolean" == typeof a;
            return $.isFunction(a) && $.isFunction(b) ? sb.apply(this, arguments) : this.each(function() {
                (c ? a : r(this)) ? $(this).show() : $(this).hide()
            })
        }
    }),
    $.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = cb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
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
            "float": $.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, i = $.camelCase(c), j = a.style;
                if (c = $.cssProps[i] || ($.cssProps[i] = q(j, i)),
                h = $.cssHooks[c] || $.cssHooks[i],
                d === b)
                    return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
                if (g = typeof d,
                "string" === g && (f = mb.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat($.css(a, c)),
                g = "number"),
                !(null  == d || "number" === g && isNaN(d) || ("number" === g && !$.cssNumber[i] && (d += "px"),
                h && "set" in h && (d = h.set(a, d, e)) === b)))
                    try {
                        j[c] = d
                    } catch (k) {}
            }
        },
        css: function(a, c, d, e) {
            var f, g, h, i = $.camelCase(c);
            return c = $.cssProps[i] || ($.cssProps[i] = q(a.style, i)),
            h = $.cssHooks[c] || $.cssHooks[i],
            h && "get" in h && (f = h.get(a, !0, e)),
            f === b && (f = cb(a, c)),
            "normal" === f && c in pb && (f = pb[c]),
            d || e !== b ? (g = parseFloat(f),
            d || $.isNumeric(g) ? g || 0 : f) : f
        },
        swap: function(a, b, c) {
            var d, e, f = {};
            for (e in b)
                f[e] = a.style[e],
                a.style[e] = b[e];
            d = c.call(a);
            for (e in b)
                a.style[e] = f[e];
            return d
        }
    }),
    a.getComputedStyle ? cb = function(b, c) {
        var d, e, f, g, h = a.getComputedStyle(b, null ), i = b.style;
        return h && (d = h.getPropertyValue(c) || h[c],
        "" === d && !$.contains(b.ownerDocument, b) && (d = $.style(b, c)),
        lb.test(d) && jb.test(c) && (e = i.width,
        f = i.minWidth,
        g = i.maxWidth,
        i.minWidth = i.maxWidth = i.width = d,
        d = h.width,
        i.width = e,
        i.minWidth = f,
        i.maxWidth = g)),
        d
    }
     : P.documentElement.currentStyle && (cb = function(a, b) {
        var c, d, e = a.currentStyle && a.currentStyle[b], f = a.style;
        return null  == e && f && f[b] && (e = f[b]),
        lb.test(e) && !hb.test(b) && (c = f.left,
        d = a.runtimeStyle && a.runtimeStyle.left,
        d && (a.runtimeStyle.left = a.currentStyle.left),
        f.left = "fontSize" === b ? "1em" : e,
        e = f.pixelLeft + "px",
        f.left = c,
        d && (a.runtimeStyle.left = d)),
        "" === e ? "auto" : e
    }
    ),
    $.each(["height", "width"], function(a, b) {
        $.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? 0 === a.offsetWidth && ib.test(cb(a, "display")) ? $.swap(a, ob, function() {
                    return v(a, b, d)
                }) : v(a, b, d) : void 0
            },
            set: function(a, c, d) {
                return t(a, c, d ? u(a, b, d, $.support.boxSizing && "border-box" === $.css(a, "boxSizing")) : 0)
            }
        }
    }),
    $.support.opacity || ($.cssHooks.opacity = {
        get: function(a, b) {
            return gb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style
              , d = a.currentStyle
              , e = $.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : ""
              , f = d && d.filter || c.filter || "";
            c.zoom = 1,
            b >= 1 && "" === $.trim(f.replace(fb, "")) && c.removeAttribute && (c.removeAttribute("filter"),
            d && !d.filter) || (c.filter = fb.test(f) ? f.replace(fb, e) : f + " " + e)
        }
    }),
    $(function() {
        $.support.reliableMarginRight || ($.cssHooks.marginRight = {
            get: function(a, b) {
                return $.swap(a, {
                    display: "inline-block"
                }, function() {
                    return b ? cb(a, "marginRight") : void 0
                })
            }
        }),
        !$.support.pixelPosition && $.fn.position && $.each(["top", "left"], function(a, b) {
            $.cssHooks[b] = {
                get: function(a, c) {
                    if (c) {
                        var d = cb(a, b);
                        return lb.test(d) ? $(a).position()[b] + "px" : d
                    }
                }
            }
        })
    }),
    $.expr && $.expr.filters && ($.expr.filters.hidden = function(a) {
        return 0 === a.offsetWidth && 0 === a.offsetHeight || !$.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || cb(a, "display"))
    }
    ,
    $.expr.filters.visible = function(a) {
        return !$.expr.filters.hidden(a)
    }
    ),
    $.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        $.cssHooks[a + b] = {
            expand: function(c) {
                var d, e = "string" == typeof c ? c.split(" ") : [c], f = {};
                for (d = 0; 4 > d; d++)
                    f[a + qb[d] + b] = e[d] || e[d - 2] || e[0];
                return f
            }
        },
        jb.test(a) || ($.cssHooks[a + b].set = t)
    });
    var tb = /%20/g
      , ub = /\[\]$/
      , vb = /\r?\n/g
      , wb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i
      , xb = /^(?:select|textarea)/i;
    $.fn.extend({
        serialize: function() {
            return $.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? $.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || xb.test(this.nodeName) || wb.test(this.type))
            }).map(function(a, b) {
                var c = $(this).val();
                return null  == c ? null  : $.isArray(c) ? $.map(c, function(a, c) {
                    return {
                        name: b.name,
                        value: a.replace(vb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(vb, "\r\n")
                }
            }).get()
        }
    }),
    $.param = function(a, c) {
        var d, e = [], f = function(a, b) {
            b = $.isFunction(b) ? b() : null  == b ? "" : b,
            e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        }
        ;
        if (c === b && (c = $.ajaxSettings && $.ajaxSettings.traditional),
        $.isArray(a) || a.jquery && !$.isPlainObject(a))
            $.each(a, function() {
                f(this.name, this.value)
            });
        else
            for (d in a)
                x(d, a[d], c, f);
        return e.join("&").replace(tb, "+")
    }
    ;
    var yb, zb, Ab = /#.*$/, Bb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Cb = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, Db = /^(?:GET|HEAD)$/, Eb = /^\/\//, Fb = /\?/, Gb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, Hb = /([?&])_=[^&]*/, Ib = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Jb = $.fn.load, Kb = {}, Lb = {}, Mb = ["*/"] + ["*"];
    try {
        zb = Q.href
    } catch (Nb) {
        zb = P.createElement("a"),
        zb.href = "",
        zb = zb.href
    }
    yb = Ib.exec(zb.toLowerCase()) || [],
    $.fn.load = function(a, c, d) {
        if ("string" != typeof a && Jb)
            return Jb.apply(this, arguments);
        if (!this.length)
            return this;
        var e, f, g, h = this, i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i, a.length),
        a = a.slice(0, i)),
        $.isFunction(c) ? (d = c,
        c = b) : c && "object" == typeof c && (f = "POST"),
        $.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: c,
            complete: function(a, b) {
                d && h.each(d, g || [a.responseText, b, a])
            }
        }).done(function(a) {
            g = arguments,
            h.html(e ? $("<div>").append(a.replace(Gb, "")).find(e) : a)
        }),
        this
    }
    ,
    $.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        $.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    $.each(["get", "post"], function(a, c) {
        $[c] = function(a, d, e, f) {
            return $.isFunction(d) && (f = f || e,
            e = d,
            d = b),
            $.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: f
            })
        }
    }),
    $.extend({
        getScript: function(a, c) {
            return $.get(a, b, c, "script")
        },
        getJSON: function(a, b, c) {
            return $.get(a, b, c, "json")
        },
        ajaxSetup: function(a, b) {
            return b ? A(a, $.ajaxSettings) : (b = a,
            a = $.ajaxSettings),
            A(a, b),
            a
        },
        ajaxSettings: {
            url: zb,
            isLocal: Cb.test(yb[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Mb
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": $.parseJSON,
                "text xml": $.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: y(Kb),
        ajaxTransport: y(Lb),
        ajax: function(a, c) {
            function d(a, c, d, g) {
                var j, l, s, t, v, x = c;
                2 !== u && (u = 2,
                i && clearTimeout(i),
                h = b,
                f = g || "",
                w.readyState = a > 0 ? 4 : 0,
                d && (t = B(m, w, d)),
                a >= 200 && 300 > a || 304 === a ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"),
                v && ($.lastModified[e] = v),
                v = w.getResponseHeader("Etag"),
                v && ($.etag[e] = v)),
                304 === a ? (x = "notmodified",
                j = !0) : (j = C(m, t),
                x = j.state,
                l = j.data,
                s = j.error,
                j = !s)) : (s = x,
                (!x || a) && (x = "error",
                0 > a && (a = 0))),
                w.status = a,
                w.statusText = (c || x) + "",
                j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]),
                w.statusCode(r),
                r = b,
                k && o.trigger("ajax" + (j ? "Success" : "Error"), [w, m, j ? l : s]),
                q.fireWith(n, [w, x]),
                k && (o.trigger("ajaxComplete", [w, m]),
                --$.active || $.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (c = a,
            a = b),
            c = c || {};
            var e, f, g, h, i, j, k, l, m = $.ajaxSetup({}, c), n = m.context || m, o = n !== m && (n.nodeType || n instanceof $) ? $(n) : $.event, p = $.Deferred(), q = $.Callbacks("once memory"), r = m.statusCode || {}, s = {}, t = {}, u = 0, v = "canceled", w = {
                readyState: 0,
                setRequestHeader: function(a, b) {
                    if (!u) {
                        var c = a.toLowerCase();
                        a = t[c] = t[c] || a,
                        s[a] = b
                    }
                    return this
                },
                getAllResponseHeaders: function() {
                    return 2 === u ? f : null 
                },
                getResponseHeader: function(a) {
                    var c;
                    if (2 === u) {
                        if (!g)
                            for (g = {}; c = Bb.exec(f); )
                                g[c[1].toLowerCase()] = c[2];
                        c = g[a.toLowerCase()]
                    }
                    return c === b ? null  : c
                },
                overrideMimeType: function(a) {
                    return u || (m.mimeType = a),
                    this
                },
                abort: function(a) {
                    return a = a || v,
                    h && h.abort(a),
                    d(0, a),
                    this
                }
            };
            if (p.promise(w),
            w.success = w.done,
            w.error = w.fail,
            w.complete = q.add,
            w.statusCode = function(a) {
                if (a) {
                    var b;
                    if (2 > u)
                        for (b in a)
                            r[b] = [r[b], a[b]];
                    else
                        b = a[w.status],
                        w.always(b)
                }
                return this
            }
            ,
            m.url = ((a || m.url) + "").replace(Ab, "").replace(Eb, yb[1] + "//"),
            m.dataTypes = $.trim(m.dataType || "*").toLowerCase().split(ba),
            null  == m.crossDomain && (j = Ib.exec(m.url.toLowerCase()),
            m.crossDomain = !(!j || j[1] === yb[1] && j[2] === yb[2] && (j[3] || ("http:" === j[1] ? 80 : 443)) == (yb[3] || ("http:" === yb[1] ? 80 : 443)))),
            m.data && m.processData && "string" != typeof m.data && (m.data = $.param(m.data, m.traditional)),
            z(Kb, m, c, w),
            2 === u)
                return w;
            if (k = m.global,
            m.type = m.type.toUpperCase(),
            m.hasContent = !Db.test(m.type),
            k && 0 === $.active++ && $.event.trigger("ajaxStart"),
            !m.hasContent && (m.data && (m.url += (Fb.test(m.url) ? "&" : "?") + m.data,
            delete m.data),
            e = m.url,
            m.cache === !1)) {
                var x = $.now()
                  , y = m.url.replace(Hb, "$1_=" + x);
                m.url = y + (y === m.url ? (Fb.test(m.url) ? "&" : "?") + "_=" + x : "")
            }
            (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType),
            m.ifModified && (e = e || m.url,
            $.lastModified[e] && w.setRequestHeader("If-Modified-Since", $.lastModified[e]),
            $.etag[e] && w.setRequestHeader("If-None-Match", $.etag[e])),
            w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Mb + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers)
                w.setRequestHeader(l, m.headers[l]);
            if (!m.beforeSend || m.beforeSend.call(n, w, m) !== !1 && 2 !== u) {
                v = "abort";
                for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    w[l](m[l]);
                if (h = z(Lb, m, c, w)) {
                    w.readyState = 1,
                    k && o.trigger("ajaxSend", [w, m]),
                    m.async && m.timeout > 0 && (i = setTimeout(function() {
                        w.abort("timeout")
                    }, m.timeout));
                    try {
                        u = 1,
                        h.send(s, d)
                    } catch (A) {
                        if (!(2 > u))
                            throw A;
                        d(-1, A)
                    }
                } else
                    d(-1, "No Transport");
                return w
            }
            return w.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Ob = []
      , Pb = /\?/
      , Qb = /(=)\?(?=&|$)|\?\?/
      , Rb = $.now();
    $.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Ob.pop() || $.expando + "_" + Rb++;
            return this[a] = !0,
            a
        }
    }),
    $.ajaxPrefilter("json jsonp", function(c, d, e) {
        var f, g, h, i = c.data, j = c.url, k = c.jsonp !== !1, l = k && Qb.test(j), m = k && !l && "string" == typeof i && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Qb.test(i);
        return "jsonp" === c.dataTypes[0] || l || m ? (f = c.jsonpCallback = $.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback,
        g = a[f],
        l ? c.url = j.replace(Qb, "$1" + f) : m ? c.data = i.replace(Qb, "$1" + f) : k && (c.url += (Pb.test(j) ? "&" : "?") + c.jsonp + "=" + f),
        c.converters["script json"] = function() {
            return h || $.error(f + " was not called"),
            h[0]
        }
        ,
        c.dataTypes[0] = "json",
        a[f] = function() {
            h = arguments
        }
        ,
        e.always(function() {
            a[f] = g,
            c[f] && (c.jsonpCallback = d.jsonpCallback,
            Ob.push(f)),
            h && $.isFunction(g) && g(h[0]),
            h = g = b
        }),
        "script") : void 0
    }),
    $.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(a) {
                return $.globalEval(a),
                a
            }
        }
    }),
    $.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1),
        a.crossDomain && (a.type = "GET",
        a.global = !1)
    }),
    $.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var c, d = P.head || P.getElementsByTagName("head")[0] || P.documentElement;
            return {
                send: function(e, f) {
                    c = P.createElement("script"),
                    c.async = "async",
                    a.scriptCharset && (c.charset = a.scriptCharset),
                    c.src = a.url,
                    c.onload = c.onreadystatechange = function(a, e) {
                        (e || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null ,
                        d && c.parentNode && d.removeChild(c),
                        c = b,
                        e || f(200, "success"))
                    }
                    ,
                    d.insertBefore(c, d.firstChild)
                },
                abort: function() {
                    c && c.onload(0, 1)
                }
            }
        }
    });
    var Sb, Tb = a.ActiveXObject ? function() {
        for (var a in Sb)
            Sb[a](0, 1)
    }
     : !1, Ub = 0;
    $.ajaxSettings.xhr = a.ActiveXObject ? function() {
        return !this.isLocal && D() || E()
    }
     : D,
    function(a) {
        $.extend($.support, {
            ajax: !!a,
            cors: !!a && "withCredentials" in a
        })
    }($.ajaxSettings.xhr()),
    $.support.ajax && $.ajaxTransport(function(c) {
        if (!c.crossDomain || $.support.cors) {
            var d;
            return {
                send: function(e, f) {
                    var g, h, i = c.xhr();
                    if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async),
                    c.xhrFields)
                        for (h in c.xhrFields)
                            i[h] = c.xhrFields[h];
                    c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType),
                    !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (h in e)
                            i.setRequestHeader(h, e[h])
                    } catch (j) {}
                    i.send(c.hasContent && c.data || null ),
                    d = function(a, e) {
                        var h, j, k, l, m;
                        try {
                            if (d && (e || 4 === i.readyState))
                                if (d = b,
                                g && (i.onreadystatechange = $.noop,
                                Tb && delete Sb[g]),
                                e)
                                    4 !== i.readyState && i.abort();
                                else {
                                    h = i.status,
                                    k = i.getAllResponseHeaders(),
                                    l = {},
                                    m = i.responseXML,
                                    m && m.documentElement && (l.xml = m);
                                    try {
                                        l.text = i.responseText
                                    } catch (n) {}
                                    try {
                                        j = i.statusText
                                    } catch (n) {
                                        j = ""
                                    }
                                    h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404
                                }
                        } catch (o) {
                            e || f(-1, o)
                        }
                        l && f(h, j, l, k)
                    }
                    ,
                    c.async ? 4 === i.readyState ? setTimeout(d, 0) : (g = ++Ub,
                    Tb && (Sb || (Sb = {},
                    $(a).unload(Tb)),
                    Sb[g] = d),
                    i.onreadystatechange = d) : d()
                },
                abort: function() {
                    d && d(0, 1)
                }
            }
        }
    });
    var Vb, Wb, Xb = /^(?:toggle|show|hide)$/, Yb = new RegExp("^(?:([-+])=|)(" + _ + ")([a-z%]*)$","i"), Zb = /queueHooks$/, $b = [J], _b = {
        "*": [function(a, b) {
            var c, d, e = this.createTween(a, b), f = Yb.exec(b), g = e.cur(), h = +g || 0, i = 1, j = 20;
            if (f) {
                if (c = +f[2],
                d = f[3] || ($.cssNumber[a] ? "" : "px"),
                "px" !== d && h) {
                    h = $.css(e.elem, a, !0) || c || 1;
                    do
                        i = i || ".5",
                        h /= i,
                        $.style(e.elem, a, h + d);
                    while (i !== (i = e.cur() / g) && 1 !== i && --j)
                }
                e.unit = d,
                e.start = h,
                e.end = f[1] ? h + (f[1] + 1) * c : c
            }
            return e
        }
        ]
    };
    $.Animation = $.extend(H, {
        tweener: function(a, b) {
            $.isFunction(a) ? (b = a,
            a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d],
                _b[c] = _b[c] || [],
                _b[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? $b.unshift(a) : $b.push(a)
        }
    }),
    $.Tween = K,
    K.prototype = {
        constructor: K,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || "swing",
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || ($.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = K.propHooks[this.prop];
            return a && a.get ? a.get(this) : K.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = K.propHooks[this.prop];
            return this.options.duration ? this.pos = b = $.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : K.propHooks._default.set(this),
            this
        }
    },
    K.prototype.init.prototype = K.prototype,
    K.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null  == a.elem[a.prop] || a.elem.style && null  != a.elem.style[a.prop] ? (b = $.css(a.elem, a.prop, !1, ""),
                b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                $.fx.step[a.prop] ? $.fx.step[a.prop](a) : a.elem.style && (null  != a.elem.style[$.cssProps[a.prop]] || $.cssHooks[a.prop]) ? $.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    },
    K.propHooks.scrollTop = K.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    $.each(["toggle", "show", "hide"], function(a, b) {
        var c = $.fn[b];
        $.fn[b] = function(d, e, f) {
            return null  == d || "boolean" == typeof d || !a && $.isFunction(d) && $.isFunction(e) ? c.apply(this, arguments) : this.animate(L(b, !0), d, e, f)
        }
    }),
    $.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(r).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = $.isEmptyObject(a)
              , f = $.speed(b, c, d)
              , g = function() {
                var b = H(this, $.extend({}, a), f);
                e && b.stop(!0)
            }
            ;
            return e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, c, d) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop,
                b(d)
            }
            ;
            return "string" != typeof a && (d = c,
            c = a,
            a = b),
            c && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0
                  , c = null  != a && a + "queueHooks"
                  , f = $.timers
                  , g = $._data(this);
                if (c)
                    g[c] && g[c].stop && e(g[c]);
                else
                    for (c in g)
                        g[c] && g[c].stop && Zb.test(c) && e(g[c]);
                for (c = f.length; c--; )
                    f[c].elem === this && (null  == a || f[c].queue === a) && (f[c].anim.stop(d),
                    b = !1,
                    f.splice(c, 1));
                (b || !d) && $.dequeue(this, a)
            })
        }
    }),
    $.each({
        slideDown: L("show"),
        slideUp: L("hide"),
        slideToggle: L("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        $.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    $.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? $.extend({}, a) : {
            complete: c || !c && b || $.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !$.isFunction(b) && b
        };
        return d.duration = $.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in $.fx.speeds ? $.fx.speeds[d.duration] : $.fx.speeds._default,
        (null  == d.queue || d.queue === !0) && (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function() {
            $.isFunction(d.old) && d.old.call(this),
            d.queue && $.dequeue(this, d.queue)
        }
        ,
        d
    }
    ,
    $.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    },
    $.timers = [],
    $.fx = K.prototype.init,
    $.fx.tick = function() {
        var a, c = $.timers, d = 0;
        for (Vb = $.now(); d < c.length; d++)
            a = c[d],
            !a() && c[d] === a && c.splice(d--, 1);
        c.length || $.fx.stop(),
        Vb = b
    }
    ,
    $.fx.timer = function(a) {
        a() && $.timers.push(a) && !Wb && (Wb = setInterval($.fx.tick, $.fx.interval))
    }
    ,
    $.fx.interval = 13,
    $.fx.stop = function() {
        clearInterval(Wb),
        Wb = null 
    }
    ,
    $.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    $.fx.step = {},
    $.expr && $.expr.filters && ($.expr.filters.animated = function(a) {
        return $.grep($.timers, function(b) {
            return a === b.elem
        }).length
    }
    );
    var ac = /^(?:body|html)$/i;
    $.fn.offset = function(a) {
        if (arguments.length)
            return a === b ? this : this.each(function(b) {
                $.offset.setOffset(this, a, b)
            });
        var c, d, e, f, g, h, i, j = {
            top: 0,
            left: 0
        }, k = this[0], l = k && k.ownerDocument;
        if (l)
            return (d = l.body) === k ? $.offset.bodyOffset(k) : (c = l.documentElement,
            $.contains(c, k) ? ("undefined" != typeof k.getBoundingClientRect && (j = k.getBoundingClientRect()),
            e = M(l),
            f = c.clientTop || d.clientTop || 0,
            g = c.clientLeft || d.clientLeft || 0,
            h = e.pageYOffset || c.scrollTop,
            i = e.pageXOffset || c.scrollLeft,
            {
                top: j.top + h - f,
                left: j.left + i - g
            }) : j)
    }
    ,
    $.offset = {
        bodyOffset: function(a) {
            var b = a.offsetTop
              , c = a.offsetLeft;
            return $.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat($.css(a, "marginTop")) || 0,
            c += parseFloat($.css(a, "marginLeft")) || 0),
            {
                top: b,
                left: c
            }
        },
        setOffset: function(a, b, c) {
            var d = $.css(a, "position");
            "static" === d && (a.style.position = "relative");
            var e, f, g = $(a), h = g.offset(), i = $.css(a, "top"), j = $.css(a, "left"), k = ("absolute" === d || "fixed" === d) && $.inArray("auto", [i, j]) > -1, l = {}, m = {};
            k ? (m = g.position(),
            e = m.top,
            f = m.left) : (e = parseFloat(i) || 0,
            f = parseFloat(j) || 0),
            $.isFunction(b) && (b = b.call(a, c, h)),
            null  != b.top && (l.top = b.top - h.top + e),
            null  != b.left && (l.left = b.left - h.left + f),
            "using" in b ? b.using.call(a, l) : g.css(l)
        }
    },
    $.fn.extend({
        position: function() {
            if (this[0]) {
                var a = this[0]
                  , b = this.offsetParent()
                  , c = this.offset()
                  , d = ac.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
                return c.top -= parseFloat($.css(a, "marginTop")) || 0,
                c.left -= parseFloat($.css(a, "marginLeft")) || 0,
                d.top += parseFloat($.css(b[0], "borderTopWidth")) || 0,
                d.left += parseFloat($.css(b[0], "borderLeftWidth")) || 0,
                {
                    top: c.top - d.top,
                    left: c.left - d.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || P.body; a && !ac.test(a.nodeName) && "static" === $.css(a, "position"); )
                    a = a.offsetParent;
                return a || P.body
            })
        }
    }),
    $.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, c) {
        var d = /Y/.test(c);
        $.fn[a] = function(e) {
            return $.access(this, function(a, e, f) {
                var g = M(a);
                return f === b ? g ? c in g ? g[c] : g.document.documentElement[e] : a[e] : void (g ? g.scrollTo(d ? $(g).scrollLeft() : f, d ? f : $(g).scrollTop()) : a[e] = f)
            }, a, e, arguments.length, null )
        }
    }),
    $.each({
        Height: "height",
        Width: "width"
    }, function(a, c) {
        $.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        }, function(d, e) {
            $.fn[e] = function(e, f) {
                var g = arguments.length && (d || "boolean" != typeof e)
                  , h = d || (e === !0 || f === !0 ? "margin" : "border");
                return $.access(this, function(c, d, e) {
                    var f;
                    return $.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement,
                    Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? $.css(c, d, e, h) : $.style(c, d, e, h)
                }, c, g ? e : b, g, null )
            }
        })
    }),
    a.jQuery = a.$ = $,
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return $
    })
}(window),
d3 = function() {
    function a(a) {
        return null  != a && !isNaN(a)
    }
    function c(a) {
        return a.length
    }
    function d(a) {
        for (var b = 1; a * b % 1; )
            b *= 10;
        return b
    }
    function e(a, b) {
        try {
            for (var c in b)
                Object.defineProperty(a.prototype, c, {
                    value: b[c],
                    enumerable: !1
                })
        } catch (d) {
            a.prototype = b
        }
    }
    function f() {}
    function g() {}
    function h(a, b, c) {
        return function() {
            var d = c.apply(b, arguments);
            return d === b ? a : d
        }
    }
    function i() {}
    function j(a) {
        function b() {
            for (var b, d = c, e = -1, f = d.length; ++e < f; )
                (b = d[e].on) && b.apply(this, arguments);
            return a
        }
        var c = []
          , d = new f;
        return b.on = function(b, e) {
            var f, g = d.get(b);
            return arguments.length < 2 ? g && g.on : (g && (g.on = null ,
            c = c.slice(0, f = c.indexOf(g)).concat(c.slice(f + 1)),
            d.remove(b)),
            e && c.push(d.set(b, {
                on: e
            })),
            a)
        }
        ,
        b
    }
    function k() {
        hf.event.stopPropagation(),
        hf.event.preventDefault()
    }
    function l() {
        for (var a, b = hf.event; a = b.sourceEvent; )
            b = a;
        return b
    }
    function m(a, b) {
        function c() {
            a.on(b, null )
        }
        a.on(b, function() {
            k(),
            c()
        }, !0),
        setTimeout(c, 0)
    }
    function n(a) {
        for (var b = new i, c = 0, d = arguments.length; ++c < d; )
            b[arguments[c]] = j(b);
        return b.of = function(c, d) {
            return function(e) {
                try {
                    var f = e.sourceEvent = hf.event;
                    e.target = a,
                    hf.event = e,
                    b[e.type].apply(c, d)
                } finally {
                    hf.event = f
                }
            }
        }
        ,
        b
    }
    function o(a, b) {
        var c = a.ownerSVGElement || a;
        if (c.createSVGPoint) {
            var d = c.createSVGPoint();
            if (0 > rf && (kf.scrollX || kf.scrollY)) {
                c = hf.select(jf.body).append("svg").style("position", "absolute").style("top", 0).style("left", 0);
                var e = c[0][0].getScreenCTM();
                rf = !(e.f || e.e),
                c.remove()
            }
            return rf ? (d.x = b.pageX,
            d.y = b.pageY) : (d.x = b.clientX,
            d.y = b.clientY),
            d = d.matrixTransform(a.getScreenCTM().inverse()),
            [d.x, d.y]
        }
        var f = a.getBoundingClientRect();
        return [b.clientX - f.left - a.clientLeft, b.clientY - f.top - a.clientTop]
    }
    function p(a) {
        for (var b = -1, c = a.length, d = []; ++b < c; )
            d.push(a[b]);
        return d
    }
    function q(a) {
        return Array.prototype.slice.call(a)
    }
    function r(a) {
        return uf(a, Af),
        a
    }
    function s(a) {
        return function() {
            return vf(a, this)
        }
    }
    function t(a) {
        return function() {
            return wf(a, this)
        }
    }
    function u(a, b) {
        function c() {
            this.removeAttribute(a)
        }
        function d() {
            this.removeAttributeNS(a.space, a.local)
        }
        function e() {
            this.setAttribute(a, b)
        }
        function f() {
            this.setAttributeNS(a.space, a.local, b)
        }
        function g() {
            var c = b.apply(this, arguments);
            null  == c ? this.removeAttribute(a) : this.setAttribute(a, c)
        }
        function h() {
            var c = b.apply(this, arguments);
            null  == c ? this.removeAttributeNS(a.space, a.local) : this.setAttributeNS(a.space, a.local, c)
        }
        return a = hf.ns.qualify(a),
        null  == b ? a.local ? d : c : "function" == typeof b ? a.local ? h : g : a.local ? f : e
    }
    function v(a) {
        return a.trim().replace(/\s+/g, " ")
    }
    function w(a) {
        return RegExp("(?:^|\\s+)" + hf.requote(a) + "(?:\\s+|$)", "g")
    }
    function x(a, b) {
        function c() {
            for (var c = -1; ++c < e; )
                a[c](this, b)
        }
        function d() {
            for (var c = -1, d = b.apply(this, arguments); ++c < e; )
                a[c](this, d)
        }
        a = a.trim().split(/\s+/).map(y);
        var e = a.length;
        return "function" == typeof b ? d : c
    }
    function y(a) {
        var b = w(a);
        return function(c, d) {
            if (e = c.classList)
                return d ? e.add(a) : e.remove(a);
            var e = c.getAttribute("class") || "";
            d ? (b.lastIndex = 0,
            b.test(e) || c.setAttribute("class", v(e + " " + a))) : c.setAttribute("class", v(e.replace(b, " ")))
        }
    }
    function z(a, b, c) {
        function d() {
            this.style.removeProperty(a)
        }
        function e() {
            this.style.setProperty(a, b, c)
        }
        function f() {
            var d = b.apply(this, arguments);
            null  == d ? this.style.removeProperty(a) : this.style.setProperty(a, d, c)
        }
        return null  == b ? d : "function" == typeof b ? f : e
    }
    function A(a, b) {
        function c() {
            delete this[a]
        }
        function d() {
            this[a] = b
        }
        function e() {
            var c = b.apply(this, arguments);
            null  == c ? delete this[a] : this[a] = c
        }
        return null  == b ? c : "function" == typeof b ? e : d
    }
    function B(a) {
        return {
            __data__: a
        }
    }
    function C(a) {
        return function() {
            return zf(this, a)
        }
    }
    function D(a) {
        return arguments.length || (a = hf.ascending),
        function(b, c) {
            return !b - !c || a(b.__data__, c.__data__)
        }
    }
    function E() {}
    function F(a, b, c) {
        function d() {
            var b = this[g];
            b && (this.removeEventListener(a, b, b.$),
            delete this[g])
        }
        function e() {
            var e = i(b, sf(arguments));
            d.call(this),
            this.addEventListener(a, this[g] = e, e.$ = c),
            e._ = b
        }
        function f() {
            var b, c = RegExp("^__on([^.]+)" + hf.requote(a) + "$");
            for (var d in this)
                if (b = d.match(c)) {
                    var e = this[d];
                    this.removeEventListener(b[1], e, e.$),
                    delete this[d]
                }
        }
        var g = "__on" + a
          , h = a.indexOf(".")
          , i = G;
        h > 0 && (a = a.substring(0, h));
        var j = Df.get(a);
        return j && (a = j,
        i = H),
        h ? b ? e : d : b ? E : f
    }
    function G(a, b) {
        return function(c) {
            var d = hf.event;
            hf.event = c,
            b[0] = this.__data__;
            try {
                a.apply(this, b)
            } finally {
                hf.event = d
            }
        }
    }
    function H(a, b) {
        var c = G(a, b);
        return function(a) {
            var b = this
              , d = a.relatedTarget;
            d && (d === b || 8 & d.compareDocumentPosition(b)) || c.call(b, a)
        }
    }
    function I(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            for (var e, f = a[c], g = 0, h = f.length; h > g; g++)
                (e = f[g]) && b(e, g, c);
        return a
    }
    function J(a) {
        return uf(a, Ef),
        a
    }
    function K() {}
    function L(a, b, c) {
        return new M(a,b,c)
    }
    function M(a, b, c) {
        this.h = a,
        this.s = b,
        this.l = c
    }
    function N(a, b, c) {
        function d(a) {
            return a > 360 ? a -= 360 : 0 > a && (a += 360),
            60 > a ? f + (g - f) * a / 60 : 180 > a ? g : 240 > a ? f + (g - f) * (240 - a) / 60 : f
        }
        function e(a) {
            return Math.round(255 * d(a))
        }
        var f, g;
        return a = isNaN(a) ? 0 : (a %= 360) < 0 ? a + 360 : a,
        b = isNaN(b) ? 0 : 0 > b ? 0 : b > 1 ? 1 : b,
        c = 0 > c ? 0 : c > 1 ? 1 : c,
        g = .5 >= c ? c * (1 + b) : c + b - c * b,
        f = 2 * c - g,
        ca(e(a + 120), e(a), e(a - 120))
    }
    function O(a) {
        return a > 0 ? 1 : 0 > a ? -1 : 0
    }
    function P(a) {
        return Math.acos(Math.max(-1, Math.min(1, a)))
    }
    function Q(a) {
        return a > 1 ? Kf / 2 : -1 > a ? -Kf / 2 : Math.asin(a)
    }
    function R(a) {
        return (Math.exp(a) - Math.exp(-a)) / 2
    }
    function S(a) {
        return (Math.exp(a) + Math.exp(-a)) / 2
    }
    function T(a) {
        return (a = Math.sin(a / 2)) * a
    }
    function U(a, b, c) {
        return new V(a,b,c)
    }
    function V(a, b, c) {
        this.h = a,
        this.c = b,
        this.l = c
    }
    function W(a, b, c) {
        return isNaN(a) && (a = 0),
        isNaN(b) && (b = 0),
        X(c, Math.cos(a *= Mf) * b, Math.sin(a) * b)
    }
    function X(a, b, c) {
        return new Y(a,b,c)
    }
    function Y(a, b, c) {
        this.l = a,
        this.a = b,
        this.b = c
    }
    function Z(a, b, c) {
        var d = (a + 16) / 116
          , e = d + b / 500
          , f = d - c / 200;
        return e = _(e) * Qf,
        d = _(d) * Rf,
        f = _(f) * Sf,
        ca(ba(3.2404542 * e - 1.5371385 * d - .4985314 * f), ba(-.969266 * e + 1.8760108 * d + .041556 * f), ba(.0556434 * e - .2040259 * d + 1.0572252 * f))
    }
    function $(a, b, c) {
        return a > 0 ? U(Math.atan2(c, b) * Nf, Math.sqrt(b * b + c * c), a) : U(NaN, NaN, a)
    }
    function _(a) {
        return a > .206893034 ? a * a * a : (a - 4 / 29) / 7.787037
    }
    function aa(a) {
        return a > .008856 ? Math.pow(a, 1 / 3) : 7.787037 * a + 4 / 29
    }
    function ba(a) {
        return Math.round(255 * (.00304 >= a ? 12.92 * a : 1.055 * Math.pow(a, 1 / 2.4) - .055))
    }
    function ca(a, b, c) {
        return new da(a,b,c)
    }
    function da(a, b, c) {
        this.r = a,
        this.g = b,
        this.b = c
    }
    function ea(a) {
        return 16 > a ? "0" + Math.max(0, a).toString(16) : Math.min(255, a).toString(16)
    }
    function fa(a, b, c) {
        var d, e, f, g = 0, h = 0, i = 0;
        if (d = /([a-z]+)\((.*)\)/i.exec(a))
            switch (e = d[2].split(","),
            d[1]) {
            case "hsl":
                return c(parseFloat(e[0]), parseFloat(e[1]) / 100, parseFloat(e[2]) / 100);
            case "rgb":
                return b(ja(e[0]), ja(e[1]), ja(e[2]))
            }
        return (f = Vf.get(a)) ? b(f.r, f.g, f.b) : (null  != a && "#" === a.charAt(0) && (4 === a.length ? (g = a.charAt(1),
        g += g,
        h = a.charAt(2),
        h += h,
        i = a.charAt(3),
        i += i) : 7 === a.length && (g = a.substring(1, 3),
        h = a.substring(3, 5),
        i = a.substring(5, 7)),
        g = parseInt(g, 16),
        h = parseInt(h, 16),
        i = parseInt(i, 16)),
        b(g, h, i))
    }
    function ga(a, b, c) {
        var d, e, f = Math.min(a /= 255, b /= 255, c /= 255), g = Math.max(a, b, c), h = g - f, i = (g + f) / 2;
        return h ? (e = .5 > i ? h / (g + f) : h / (2 - g - f),
        d = a == g ? (b - c) / h + (c > b ? 6 : 0) : b == g ? (c - a) / h + 2 : (a - b) / h + 4,
        d *= 60) : (d = NaN,
        e = i > 0 && 1 > i ? 0 : d),
        L(d, e, i)
    }
    function ha(a, b, c) {
        a = ia(a),
        b = ia(b),
        c = ia(c);
        var d = aa((.4124564 * a + .3575761 * b + .1804375 * c) / Qf)
          , e = aa((.2126729 * a + .7151522 * b + .072175 * c) / Rf)
          , f = aa((.0193339 * a + .119192 * b + .9503041 * c) / Sf);
        return X(116 * e - 16, 500 * (d - e), 200 * (e - f))
    }
    function ia(a) {
        return (a /= 255) <= .04045 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4)
    }
    function ja(a) {
        var b = parseFloat(a);
        return "%" === a.charAt(a.length - 1) ? Math.round(2.55 * b) : b
    }
    function ka(a) {
        return "function" == typeof a ? a : function() {
            return a
        }
    }
    function la(a) {
        return a
    }
    function ma(a) {
        return 1 === a.length ? function(b, c) {
            a(null  == b ? c : null )
        }
         : a
    }
    function na(a, b) {
        function c(a, c, f) {
            arguments.length < 3 && (f = c,
            c = null );
            var g = hf.xhr(a, b, f);
            return g.row = function(a) {
                return arguments.length ? g.response(null  == (c = a) ? d : e(a)) : c
            }
            ,
            g.row(c)
        }
        function d(a) {
            return c.parse(a.responseText)
        }
        function e(a) {
            return function(b) {
                return c.parse(b.responseText, a)
            }
        }
        function f(b) {
            return b.map(h).join(a)
        }
        function h(a) {
            return i.test(a) ? '"' + a.replace(/\"/g, '""') + '"' : a
        }
        var i = RegExp('["' + a + "\n]")
          , j = a.charCodeAt(0);
        return c.parse = function(a, b) {
            var d;
            return c.parseRows(a, function(a, c) {
                if (d)
                    return d(a, c - 1);
                var e = Function("d", "return {" + a.map(function(a, b) {
                    return JSON.stringify(a) + ": d[" + b + "]"
                }).join(",") + "}");
                d = b ? function(a, c) {
                    return b(e(a), c)
                }
                 : e
            })
        }
        ,
        c.parseRows = function(a, b) {
            function c() {
                if (k >= i)
                    return g;
                if (e)
                    return e = !1,
                    f;
                var b = k;
                if (34 === a.charCodeAt(b)) {
                    for (var c = b; c++ < i; )
                        if (34 === a.charCodeAt(c)) {
                            if (34 !== a.charCodeAt(c + 1))
                                break;
                            ++c
                        }
                    k = c + 2;
                    var d = a.charCodeAt(c + 1);
                    return 13 === d ? (e = !0,
                    10 === a.charCodeAt(c + 2) && ++k) : 10 === d && (e = !0),
                    a.substring(b + 1, c).replace(/""/g, '"')
                }
                for (; i > k; ) {
                    var d = a.charCodeAt(k++)
                      , h = 1;
                    if (10 === d)
                        e = !0;
                    else if (13 === d)
                        e = !0,
                        10 === a.charCodeAt(k) && (++k,
                        ++h);
                    else if (d !== j)
                        continue;return a.substring(b, k - h)
                }
                return a.substring(b)
            }
            for (var d, e, f = {}, g = {}, h = [], i = a.length, k = 0, l = 0; (d = c()) !== g; ) {
                for (var m = []; d !== f && d !== g; )
                    m.push(d),
                    d = c();
                (!b || (m = b(m, l++))) && h.push(m)
            }
            return h
        }
        ,
        c.format = function(b) {
            if (Array.isArray(b[0]))
                return c.formatRows(b);
            var d = new g
              , e = [];
            return b.forEach(function(a) {
                for (var b in a)
                    d.has(b) || e.push(d.add(b))
            }),
            [e.map(h).join(a)].concat(b.map(function(b) {
                return e.map(function(a) {
                    return h(b[a])
                }).join(a)
            })).join("\n")
        }
        ,
        c.formatRows = function(a) {
            return a.map(f).join("\n")
        }
        ,
        c
    }
    function oa() {
        for (var a, b = Date.now(), c = $f; c; )
            a = b - c.then,
            a >= c.delay && (c.flush = c.callback(a)),
            c = c.next;
        var d = pa() - b;
        d > 24 ? (isFinite(d) && (clearTimeout(Xf),
        Xf = setTimeout(oa, d)),
        Wf = 0) : (Wf = 1,
        _f(oa))
    }
    function pa() {
        for (var a = null , b = $f, c = 1 / 0; b; )
            b.flush ? (delete Zf[b.callback.id],
            b = a ? a.next = b.next : $f = b.next) : (c = Math.min(c, b.then + b.delay),
            b = (a = b).next);
        return c
    }
    function qa(a, b) {
        var c = Math.pow(10, 3 * Math.abs(8 - b));
        return {
            scale: b > 8 ? function(a) {
                return a / c
            }
             : function(a) {
                return a * c
            }
            ,
            symbol: a
        }
    }
    function ra(a, b) {
        return b - (a ? Math.ceil(Math.log(a) / Math.LN10) : 1)
    }
    function sa(a) {
        return a + ""
    }
    function ta(a, b) {
        a && jg.hasOwnProperty(a.type) && jg[a.type](a, b)
    }
    function ua(a, b, c) {
        var d, e = -1, f = a.length - c;
        for (b.lineStart(); ++e < f; )
            d = a[e],
            b.point(d[0], d[1]);
        b.lineEnd()
    }
    function va(a, b) {
        var c = -1
          , d = a.length;
        for (b.polygonStart(); ++c < d; )
            ua(a[c], b, 1);
        b.polygonEnd()
    }
    function wa() {
        function a(a, b) {
            a *= Mf,
            b = b * Mf / 2 + Kf / 4;
            var c = a - d
              , g = Math.cos(b)
              , h = Math.sin(b)
              , i = f * h
              , j = lg
              , k = mg
              , l = e * g + i * Math.cos(c)
              , m = i * Math.sin(c);
            lg = j * l - k * m,
            mg = k * l + j * m,
            d = a,
            e = g,
            f = h
        }
        var b, c, d, e, f;
        ng.point = function(g, h) {
            ng.point = a,
            d = (b = g) * Mf,
            e = Math.cos(h = (c = h) * Mf / 2 + Kf / 4),
            f = Math.sin(h)
        }
        ,
        ng.lineEnd = function() {
            a(b, c)
        }
    }
    function xa(a) {
        function b(a, b) {
            d > a && (d = a),
            a > f && (f = a),
            e > b && (e = b),
            b > g && (g = b)
        }
        function c() {
            h.point = h.lineEnd = E
        }
        var d, e, f, g, h = {
            point: b,
            lineStart: E,
            lineEnd: E,
            polygonStart: function() {
                h.lineEnd = c
            },
            polygonEnd: function() {
                h.point = b
            }
        };
        return function(b) {
            return g = f = -(d = e = 1 / 0),
            hf.geo.stream(b, a(h)),
            [[d, e], [f, g]]
        }
    }
    function ya(a, b) {
        if (!og) {
            ++pg,
            a *= Mf;
            var c = Math.cos(b *= Mf);
            qg += (c * Math.cos(a) - qg) / pg,
            rg += (c * Math.sin(a) - rg) / pg,
            sg += (Math.sin(b) - sg) / pg
        }
    }
    function za() {
        var a, b;
        og = 1,
        Aa(),
        og = 2;
        var c = tg.point;
        tg.point = function(d, e) {
            c(a = d, b = e)
        }
        ,
        tg.lineEnd = function() {
            tg.point(a, b),
            Ba(),
            tg.lineEnd = Ba
        }
    }
    function Aa() {
        function a(a, e) {
            a *= Mf;
            var f = Math.cos(e *= Mf)
              , g = f * Math.cos(a)
              , h = f * Math.sin(a)
              , i = Math.sin(e)
              , j = Math.atan2(Math.sqrt((j = c * i - d * h) * j + (j = d * g - b * i) * j + (j = b * h - c * g) * j), b * g + c * h + d * i);
            pg += j,
            qg += j * (b + (b = g)),
            rg += j * (c + (c = h)),
            sg += j * (d + (d = i))
        }
        var b, c, d;
        og > 1 || (1 > og && (og = 1,
        pg = qg = rg = sg = 0),
        tg.point = function(e, f) {
            e *= Mf;
            var g = Math.cos(f *= Mf);
            b = g * Math.cos(e),
            c = g * Math.sin(e),
            d = Math.sin(f),
            tg.point = a
        }
        )
    }
    function Ba() {
        tg.point = ya
    }
    function Ca(a) {
        var b = a[0]
          , c = a[1]
          , d = Math.cos(c);
        return [d * Math.cos(b), d * Math.sin(b), Math.sin(c)]
    }
    function Da(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
    }
    function Ea(a, b) {
        return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]
    }
    function Fa(a, b) {
        a[0] += b[0],
        a[1] += b[1],
        a[2] += b[2]
    }
    function Ga(a, b) {
        return [a[0] * b, a[1] * b, a[2] * b]
    }
    function Ha(a) {
        var b = Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
        a[0] /= b,
        a[1] /= b,
        a[2] /= b
    }
    function Ia() {
        return !0
    }
    function Ja(a) {
        return [Math.atan2(a[1], a[0]), Math.asin(Math.max(-1, Math.min(1, a[2])))]
    }
    function Ka(a, b) {
        return Math.abs(a[0] - b[0]) < Lf && Math.abs(a[1] - b[1]) < Lf
    }
    function La(a, b, c, d, e) {
        var f = []
          , g = [];
        if (a.forEach(function(a) {
            if (!((b = a.length - 1) <= 0)) {
                var b, c = a[0], d = a[b];
                if (Ka(c, d)) {
                    e.lineStart();
                    for (var h = 0; b > h; ++h)
                        e.point((c = a[h])[0], c[1]);
                    return void e.lineEnd()
                }
                var i = {
                    point: c,
                    points: a,
                    other: null ,
                    visited: !1,
                    entry: !0,
                    subject: !0
                }
                  , j = {
                    point: c,
                    points: [c],
                    other: i,
                    visited: !1,
                    entry: !1,
                    subject: !1
                };
                i.other = j,
                f.push(i),
                g.push(j),
                i = {
                    point: d,
                    points: [d],
                    other: null ,
                    visited: !1,
                    entry: !1,
                    subject: !0
                },
                j = {
                    point: d,
                    points: [d],
                    other: i,
                    visited: !1,
                    entry: !0,
                    subject: !1
                },
                i.other = j,
                f.push(i),
                g.push(j)
            }
        }),
        g.sort(b),
        Ma(f),
        Ma(g),
        f.length) {
            if (c)
                for (var h = 1, i = !c(g[0].point), j = g.length; j > h; ++h)
                    g[h].entry = i = !i;
            for (var k, l, m, n = f[0]; ; ) {
                for (k = n; k.visited; )
                    if ((k = k.next) === n)
                        return;
                l = k.points,
                e.lineStart();
                do {
                    if (k.visited = k.other.visited = !0,
                    k.entry) {
                        if (k.subject)
                            for (var h = 0; h < l.length; h++)
                                e.point((m = l[h])[0], m[1]);
                        else
                            d(k.point, k.next.point, 1, e);
                        k = k.next
                    } else {
                        if (k.subject) {
                            l = k.prev.points;
                            for (var h = l.length; --h >= 0; )
                                e.point((m = l[h])[0], m[1])
                        } else
                            d(k.point, k.prev.point, -1, e);
                        k = k.prev
                    }
                    k = k.other,
                    l = k.points
                } while (!k.visited);e.lineEnd()
            }
        }
    }
    function Ma(a) {
        if (b = a.length) {
            for (var b, c, d = 0, e = a[0]; ++d < b; )
                e.next = c = a[d],
                c.prev = e,
                e = c;
            e.next = c = a[0],
            c.prev = e
        }
    }
    function Na(a, b, c) {
        return function(d) {
            function e(b, c) {
                a(b, c) && d.point(b, c)
            }
            function f(a, b) {
                q.point(a, b)
            }
            function g() {
                r.point = f,
                q.lineStart()
            }
            function h() {
                r.point = e,
                q.lineEnd()
            }
            function i(a, b) {
                t.point(a, b),
                p.push([a, b])
            }
            function j() {
                t.lineStart(),
                p = []
            }
            function k() {
                i(p[0][0], p[0][1]),
                t.lineEnd();
                var a, b = t.clean(), c = s.buffer(), e = c.length;
                if (!e)
                    return o = !0,
                    n += Qa(p, -1),
                    void (p = null );
                if (p = null ,
                1 & b) {
                    a = c[0],
                    m += Qa(a, 1);
                    var f, e = a.length - 1, g = -1;
                    for (d.lineStart(); ++g < e; )
                        d.point((f = a[g])[0], f[1]);
                    return void d.lineEnd()
                }
                e > 1 && 2 & b && c.push(c.pop().concat(c.shift())),
                l.push(c.filter(Oa))
            }
            var l, m, n, o, p, q = b(d), r = {
                point: e,
                lineStart: g,
                lineEnd: h,
                polygonStart: function() {
                    r.point = i,
                    r.lineStart = j,
                    r.lineEnd = k,
                    o = !1,
                    n = m = 0,
                    l = [],
                    d.polygonStart()
                },
                polygonEnd: function() {
                    r.point = e,
                    r.lineStart = g,
                    r.lineEnd = h,
                    l = hf.merge(l),
                    l.length ? La(l, Ra, null , c, d) : (-Lf > m || o && -Lf > n) && (d.lineStart(),
                    c(null , null , 1, d),
                    d.lineEnd()),
                    d.polygonEnd(),
                    l = null 
                },
                sphere: function() {
                    d.polygonStart(),
                    d.lineStart(),
                    c(null , null , 1, d),
                    d.lineEnd(),
                    d.polygonEnd()
                }
            }, s = Pa(), t = b(s);
            return r
        }
    }
    function Oa(a) {
        return a.length > 1
    }
    function Pa() {
        var a, b = [];
        return {
            lineStart: function() {
                b.push(a = [])
            },
            point: function(b, c) {
                a.push([b, c])
            },
            lineEnd: E,
            buffer: function() {
                var c = b;
                return b = [],
                a = null ,
                c
            },
            rejoin: function() {
                b.length > 1 && b.push(b.pop().concat(b.shift()))
            }
        }
    }
    function Qa(a, b) {
        if (!(c = a.length))
            return 0;
        for (var c, d, e, f = 0, g = 0, h = a[0], i = h[0], j = h[1], k = Math.cos(j), l = Math.atan2(b * Math.sin(i) * k, Math.sin(j)), m = 1 - b * Math.cos(i) * k, n = l; ++f < c; )
            h = a[f],
            k = Math.cos(j = h[1]),
            d = Math.atan2(b * Math.sin(i = h[0]) * k, Math.sin(j)),
            e = 1 - b * Math.cos(i) * k,
            Math.abs(m - 2) < Lf && Math.abs(e - 2) < Lf || (Math.abs(e) < Lf || Math.abs(m) < Lf || (Math.abs(Math.abs(d - l) - Kf) < Lf ? e + m > 2 && (g += 4 * (d - l)) : g += Math.abs(m - 2) < Lf ? 4 * (d - n) : ((3 * Kf + d - l) % (2 * Kf) - Kf) * (m + e)),
            n = l,
            l = d,
            m = e);
        return g
    }
    function Ra(a, b) {
        return ((a = a.point)[0] < 0 ? a[1] - Kf / 2 - Lf : Kf / 2 - a[1]) - ((b = b.point)[0] < 0 ? b[1] - Kf / 2 - Lf : Kf / 2 - b[1])
    }
    function Sa(a) {
        var b, c = NaN, d = NaN, e = NaN;
        return {
            lineStart: function() {
                a.lineStart(),
                b = 1
            },
            point: function(f, g) {
                var h = f > 0 ? Kf : -Kf
                  , i = Math.abs(f - c);
                Math.abs(i - Kf) < Lf ? (a.point(c, d = (d + g) / 2 > 0 ? Kf / 2 : -Kf / 2),
                a.point(e, d),
                a.lineEnd(),
                a.lineStart(),
                a.point(h, d),
                a.point(f, d),
                b = 0) : e !== h && i >= Kf && (Math.abs(c - e) < Lf && (c -= e * Lf),
                Math.abs(f - h) < Lf && (f -= h * Lf),
                d = Ta(c, d, f, g),
                a.point(e, d),
                a.lineEnd(),
                a.lineStart(),
                a.point(h, d),
                b = 0),
                a.point(c = f, d = g),
                e = h
            },
            lineEnd: function() {
                a.lineEnd(),
                c = d = NaN
            },
            clean: function() {
                return 2 - b
            }
        }
    }
    function Ta(a, b, c, d) {
        var e, f, g = Math.sin(a - c);
        return Math.abs(g) > Lf ? Math.atan((Math.sin(b) * (f = Math.cos(d)) * Math.sin(c) - Math.sin(d) * (e = Math.cos(b)) * Math.sin(a)) / (e * f * g)) : (b + d) / 2
    }
    function Ua(a, b, c, d) {
        var e;
        if (null  == a)
            e = c * Kf / 2,
            d.point(-Kf, e),
            d.point(0, e),
            d.point(Kf, e),
            d.point(Kf, 0),
            d.point(Kf, -e),
            d.point(0, -e),
            d.point(-Kf, -e),
            d.point(-Kf, 0),
            d.point(-Kf, e);
        else if (Math.abs(a[0] - b[0]) > Lf) {
            var f = (a[0] < b[0] ? 1 : -1) * Kf;
            e = c * f / 2,
            d.point(-f, e),
            d.point(0, e),
            d.point(f, e)
        } else
            d.point(b[0], b[1])
    }
    function Va(a) {
        function b(a, b) {
            return Math.cos(a) * Math.cos(b) > f
        }
        function c(a) {
            var c, f, i, j, k;
            return {
                lineStart: function() {
                    j = i = !1,
                    k = 1
                },
                point: function(l, m) {
                    var n, o = [l, m], p = b(l, m), q = g ? p ? 0 : e(l, m) : p ? e(l + (0 > l ? Kf : -Kf), m) : 0;
                    if (!c && (j = i = p) && a.lineStart(),
                    p !== i && (n = d(c, o),
                    (Ka(c, n) || Ka(o, n)) && (o[0] += Lf,
                    o[1] += Lf,
                    p = b(o[0], o[1]))),
                    p !== i)
                        k = 0,
                        p ? (a.lineStart(),
                        n = d(o, c),
                        a.point(n[0], n[1])) : (n = d(c, o),
                        a.point(n[0], n[1]),
                        a.lineEnd()),
                        c = n;
                    else if (h && c && g ^ p) {
                        var r;
                        q & f || !(r = d(o, c, !0)) || (k = 0,
                        g ? (a.lineStart(),
                        a.point(r[0][0], r[0][1]),
                        a.point(r[1][0], r[1][1]),
                        a.lineEnd()) : (a.point(r[1][0], r[1][1]),
                        a.lineEnd(),
                        a.lineStart(),
                        a.point(r[0][0], r[0][1])))
                    }
                    !p || c && Ka(c, o) || a.point(o[0], o[1]),
                    c = o,
                    i = p,
                    f = q
                },
                lineEnd: function() {
                    i && a.lineEnd(),
                    c = null 
                },
                clean: function() {
                    return k | (j && i) << 1
                }
            }
        }
        function d(a, b, c) {
            var d = Ca(a)
              , e = Ca(b)
              , g = [1, 0, 0]
              , h = Ea(d, e)
              , i = Da(h, h)
              , j = h[0]
              , k = i - j * j;
            if (!k)
                return !c && a;
            var l = f * i / k
              , m = -f * j / k
              , n = Ea(g, h)
              , o = Ga(g, l)
              , p = Ga(h, m);
            Fa(o, p);
            var q = n
              , r = Da(o, q)
              , s = Da(q, q)
              , t = r * r - s * (Da(o, o) - 1);
            if (!(0 > t)) {
                var u = Math.sqrt(t)
                  , v = Ga(q, (-r - u) / s);
                if (Fa(v, o),
                v = Ja(v),
                !c)
                    return v;
                var w, x = a[0], y = b[0], z = a[1], A = b[1];
                x > y && (w = x,
                x = y,
                y = w);
                var B = y - x
                  , C = Math.abs(B - Kf) < Lf
                  , D = C || Lf > B;
                if (!C && z > A && (w = z,
                z = A,
                A = w),
                D ? C ? z + A > 0 ^ v[1] < (Math.abs(v[0] - x) < Lf ? z : A) : z <= v[1] && v[1] <= A : B > Kf ^ (x <= v[0] && v[0] <= y)) {
                    var E = Ga(q, (-r + u) / s);
                    return Fa(E, o),
                    [v, Ja(E)]
                }
            }
        }
        function e(b, c) {
            var d = g ? a : Kf - a
              , e = 0;
            return -d > b ? e |= 1 : b > d && (e |= 2),
            -d > c ? e |= 4 : c > d && (e |= 8),
            e
        }
        var f = Math.cos(a)
          , g = f > 0
          , h = Math.abs(f) > Lf
          , i = gb(a, 6 * Mf);
        return Na(b, c, i)
    }
    function Wa(a, c, d, e) {
        function f(b, e) {
            return Math.abs(b[0] - a) < Lf ? e > 0 ? 0 : 3 : Math.abs(b[0] - d) < Lf ? e > 0 ? 2 : 1 : Math.abs(b[1] - c) < Lf ? e > 0 ? 1 : 0 : e > 0 ? 3 : 2
        }
        function g(a, b) {
            return h(a.point, b.point)
        }
        function h(a, b) {
            var c = f(a, 1)
              , d = f(b, 1);
            return c !== d ? c - d : 0 === c ? b[1] - a[1] : 1 === c ? a[0] - b[0] : 2 === c ? a[1] - b[1] : b[0] - a[0]
        }
        function i(b, f) {
            var g = f[0] - b[0]
              , h = f[1] - b[1]
              , i = [0, 1];
            return Math.abs(g) < Lf && Math.abs(h) < Lf ? a <= b[0] && b[0] <= d && c <= b[1] && b[1] <= e : Xa(a - b[0], g, i) && Xa(b[0] - d, -g, i) && Xa(c - b[1], h, i) && Xa(b[1] - e, -h, i) ? (i[1] < 1 && (f[0] = b[0] + i[1] * g,
            f[1] = b[1] + i[1] * h),
            i[0] > 0 && (b[0] += i[0] * g,
            b[1] += i[0] * h),
            !0) : !1
        }
        return function(j) {
            function k(b) {
                var g = f(b, -1)
                  , h = l([0 === g || 3 === g ? a : d, g > 1 ? e : c]);
                return h
            }
            function l(a) {
                for (var c = 0, d = u.length, e = a[1], f = 0; d > f; ++f)
                    for (var g = 1, h = u[f], i = h.length, j = h[0]; i > g; ++g)
                        b = h[g],
                        j[1] <= e ? b[1] > e && m(j, b, a) > 0 && ++c : b[1] <= e && m(j, b, a) < 0 && --c,
                        j = b;
                return 0 !== c
            }
            function m(a, b, c) {
                return (b[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (b[1] - a[1])
            }
            function n(b, g, i, j) {
                var k = 0
                  , l = 0;
                if (null  == b || (k = f(b, i)) !== (l = f(g, i)) || h(b, g) < 0 ^ i > 0) {
                    do
                        j.point(0 === k || 3 === k ? a : d, k > 1 ? e : c);
                    while ((k = (k + i + 4) % 4) !== l)
                } else
                    j.point(g[0], g[1])
            }
            function o(b, f) {
                return b >= a && d >= b && f >= c && e >= f
            }
            function p(a, b) {
                o(a, b) && j.point(a, b)
            }
            function q() {
                F.point = s,
                u && u.push(v = []),
                C = !0,
                B = !1,
                z = A = NaN
            }
            function r() {
                t && (s(w, x),
                y && B && E.rejoin(),
                t.push(E.buffer())),
                F.point = p,
                B && j.lineEnd()
            }
            function s(a, b) {
                a = Math.max(-vg, Math.min(vg, a)),
                b = Math.max(-vg, Math.min(vg, b));
                var c = o(a, b);
                if (u && v.push([a, b]),
                C)
                    w = a,
                    x = b,
                    y = c,
                    C = !1,
                    c && (j.lineStart(),
                    j.point(a, b));
                else if (c && B)
                    j.point(a, b);
                else {
                    var d = [z, A]
                      , e = [a, b];
                    i(d, e) ? (B || (j.lineStart(),
                    j.point(d[0], d[1])),
                    j.point(e[0], e[1]),
                    c || j.lineEnd()) : (j.lineStart(),
                    j.point(a, b))
                }
                z = a,
                A = b,
                B = c
            }
            var t, u, v, w, x, y, z, A, B, C, D = j, E = Pa(), F = {
                point: p,
                lineStart: q,
                lineEnd: r,
                polygonStart: function() {
                    j = E,
                    t = [],
                    u = []
                },
                polygonEnd: function() {
                    j = D,
                    (t = hf.merge(t)).length ? (j.polygonStart(),
                    La(t, g, k, n, j),
                    j.polygonEnd()) : l([a, c]) && (j.polygonStart(),
                    j.lineStart(),
                    n(null , null , 1, j),
                    j.lineEnd(),
                    j.polygonEnd()),
                    t = u = v = null 
                }
            };
            return F
        }
    }
    function Xa(a, b, c) {
        if (Math.abs(b) < Lf)
            return 0 >= a;
        var d = a / b;
        if (b > 0) {
            if (d > c[1])
                return !1;
            d > c[0] && (c[0] = d)
        } else {
            if (d < c[0])
                return !1;
            d < c[1] && (c[1] = d)
        }
        return !0
    }
    function Ya(a, b) {
        function c(c, d) {
            return c = a(c, d),
            b(c[0], c[1])
        }
        return a.invert && b.invert && (c.invert = function(c, d) {
            return c = b.invert(c, d),
            c && a.invert(c[0], c[1])
        }
        ),
        c
    }
    function Za(a) {
        function b(b) {
            function d(c, d) {
                c = a(c, d),
                b.point(c[0], c[1])
            }
            function f() {
                k = NaN,
                p.point = g,
                b.lineStart()
            }
            function g(d, f) {
                var g = Ca([d, f])
                  , h = a(d, f);
                c(k, l, j, m, n, o, k = h[0], l = h[1], j = d, m = g[0], n = g[1], o = g[2], e, b),
                b.point(k, l)
            }
            function h() {
                p.point = d,
                b.lineEnd()
            }
            function i() {
                var a, d, i, q, r, s, t;
                f(),
                p.point = function(b, c) {
                    g(a = b, d = c),
                    i = k,
                    q = l,
                    r = m,
                    s = n,
                    t = o,
                    p.point = g
                }
                ,
                p.lineEnd = function() {
                    c(k, l, j, m, n, o, i, q, a, r, s, t, e, b),
                    p.lineEnd = h,
                    h()
                }
            }
            var j, k, l, m, n, o, p = {
                point: d,
                lineStart: f,
                lineEnd: h,
                polygonStart: function() {
                    b.polygonStart(),
                    p.lineStart = i
                },
                polygonEnd: function() {
                    b.polygonEnd(),
                    p.lineStart = f
                }
            };
            return p
        }
        function c(b, e, f, g, h, i, j, k, l, m, n, o, p, q) {
            var r = j - b
              , s = k - e
              , t = r * r + s * s;
            if (t > 4 * d && p--) {
                var u = g + m
                  , v = h + n
                  , w = i + o
                  , x = Math.sqrt(u * u + v * v + w * w)
                  , y = Math.asin(w /= x)
                  , z = Math.abs(Math.abs(w) - 1) < Lf ? (f + l) / 2 : Math.atan2(v, u)
                  , A = a(z, y)
                  , B = A[0]
                  , C = A[1]
                  , D = B - b
                  , E = C - e
                  , F = s * D - r * E;
                (F * F / t > d || Math.abs((r * D + s * E) / t - .5) > .3) && (c(b, e, f, g, h, i, B, C, z, u /= x, v /= x, w, p, q),
                q.point(B, C),
                c(B, C, z, u, v, w, j, k, l, m, n, o, p, q))
            }
        }
        var d = .5
          , e = 16;
        return b.precision = function(a) {
            return arguments.length ? (e = (d = a * a) > 0 && 16,
            b) : Math.sqrt(d)
        }
        ,
        b
    }
    function $a(a) {
        return _a(function() {
            return a
        })()
    }
    function _a(a) {
        function b(a) {
            return a = g(a[0] * Mf, a[1] * Mf),
            [a[0] * k + h, i - a[1] * k]
        }
        function c(a) {
            return a = g.invert((a[0] - h) / k, (i - a[1]) / k),
            a && [a[0] * Nf, a[1] * Nf]
        }
        function d() {
            g = Ya(f = cb(p, q, r), e);
            var a = e(n, o);
            return h = l - a[0] * k,
            i = m + a[1] * k,
            b
        }
        var e, f, g, h, i, j = Za(function(a, b) {
            return a = e(a, b),
            [a[0] * k + h, i - a[1] * k]
        }), k = 150, l = 480, m = 250, n = 0, o = 0, p = 0, q = 0, r = 0, s = ug, t = la, u = null , v = null ;
        return b.stream = function(a) {
            return ab(f, s(j(t(a))))
        }
        ,
        b.clipAngle = function(a) {
            return arguments.length ? (s = null  == a ? (u = a,
            ug) : Va((u = +a) * Mf),
            b) : u
        }
        ,
        b.clipExtent = function(a) {
            return arguments.length ? (v = a,
            t = null  == a ? la : Wa(a[0][0], a[0][1], a[1][0], a[1][1]),
            b) : v
        }
        ,
        b.scale = function(a) {
            return arguments.length ? (k = +a,
            d()) : k
        }
        ,
        b.translate = function(a) {
            return arguments.length ? (l = +a[0],
            m = +a[1],
            d()) : [l, m]
        }
        ,
        b.center = function(a) {
            return arguments.length ? (n = a[0] % 360 * Mf,
            o = a[1] % 360 * Mf,
            d()) : [n * Nf, o * Nf]
        }
        ,
        b.rotate = function(a) {
            return arguments.length ? (p = a[0] % 360 * Mf,
            q = a[1] % 360 * Mf,
            r = a.length > 2 ? a[2] % 360 * Mf : 0,
            d()) : [p * Nf, q * Nf, r * Nf]
        }
        ,
        hf.rebind(b, j, "precision"),
        function() {
            return e = a.apply(this, arguments),
            b.invert = e.invert && c,
            d()
        }
    }
    function ab(a, b) {
        return {
            point: function(c, d) {
                d = a(c * Mf, d * Mf),
                c = d[0],
                b.point(c > Kf ? c - 2 * Kf : -Kf > c ? c + 2 * Kf : c, d[1])
            },
            sphere: function() {
                b.sphere()
            },
            lineStart: function() {
                b.lineStart()
            },
            lineEnd: function() {
                b.lineEnd()
            },
            polygonStart: function() {
                b.polygonStart()
            },
            polygonEnd: function() {
                b.polygonEnd()
            }
        }
    }
    function bb(a, b) {
        return [a, b]
    }
    function cb(a, b, c) {
        return a ? b || c ? Ya(eb(a), fb(b, c)) : eb(a) : b || c ? fb(b, c) : bb
    }
    function db(a) {
        return function(b, c) {
            return b += a,
            [b > Kf ? b - 2 * Kf : -Kf > b ? b + 2 * Kf : b, c]
        }
    }
    function eb(a) {
        var b = db(a);
        return b.invert = db(-a),
        b
    }
    function fb(a, b) {
        function c(a, b) {
            var c = Math.cos(b)
              , h = Math.cos(a) * c
              , i = Math.sin(a) * c
              , j = Math.sin(b)
              , k = j * d + h * e;
            return [Math.atan2(i * f - k * g, h * d - j * e), Math.asin(Math.max(-1, Math.min(1, k * f + i * g)))]
        }
        var d = Math.cos(a)
          , e = Math.sin(a)
          , f = Math.cos(b)
          , g = Math.sin(b);
        return c.invert = function(a, b) {
            var c = Math.cos(b)
              , h = Math.cos(a) * c
              , i = Math.sin(a) * c
              , j = Math.sin(b)
              , k = j * f - i * g;
            return [Math.atan2(i * f + j * g, h * d + k * e), Math.asin(Math.max(-1, Math.min(1, k * d - h * e)))]
        }
        ,
        c
    }
    function gb(a, b) {
        var c = Math.cos(a)
          , d = Math.sin(a);
        return function(e, f, g, h) {
            null  != e ? (e = hb(c, e),
            f = hb(c, f),
            (g > 0 ? f > e : e > f) && (e += 2 * g * Kf)) : (e = a + 2 * g * Kf,
            f = a);
            for (var i, j = g * b, k = e; g > 0 ? k > f : f > k; k -= j)
                h.point((i = Ja([c, -d * Math.cos(k), -d * Math.sin(k)]))[0], i[1])
        }
    }
    function hb(a, b) {
        var c = Ca(b);
        c[0] -= a,
        Ha(c);
        var d = P(-c[1]);
        return ((-c[2] < 0 ? -d : d) + 2 * Math.PI - Lf) % (2 * Math.PI)
    }
    function ib(a, b, c) {
        var d = hf.range(a, b - Lf, c).concat(b);
        return function(a) {
            return d.map(function(b) {
                return [a, b]
            })
        }
    }
    function jb(a, b, c) {
        var d = hf.range(a, b - Lf, c).concat(b);
        return function(a) {
            return d.map(function(b) {
                return [b, a]
            })
        }
    }
    function kb(a) {
        return a.source
    }
    function lb(a) {
        return a.target
    }
    function mb(a, b, c, d) {
        var e = Math.cos(b)
          , f = Math.sin(b)
          , g = Math.cos(d)
          , h = Math.sin(d)
          , i = e * Math.cos(a)
          , j = e * Math.sin(a)
          , k = g * Math.cos(c)
          , l = g * Math.sin(c)
          , m = 2 * Math.asin(Math.sqrt(T(d - b) + e * g * T(c - a)))
          , n = 1 / Math.sin(m)
          , o = m ? function(a) {
            var b = Math.sin(a *= m) * n
              , c = Math.sin(m - a) * n
              , d = c * i + b * k
              , e = c * j + b * l
              , g = c * f + b * h;
            return [Math.atan2(e, d) * Nf, Math.atan2(g, Math.sqrt(d * d + e * e)) * Nf]
        }
         : function() {
            return [a * Nf, b * Nf]
        }
        ;
        return o.distance = m,
        o
    }
    function nb() {
        function a(a, e) {
            var f = Math.sin(e *= Mf)
              , g = Math.cos(e)
              , h = Math.abs((a *= Mf) - b)
              , i = Math.cos(h);
            wg += Math.atan2(Math.sqrt((h = g * Math.sin(h)) * h + (h = d * f - c * g * i) * h), c * f + d * g * i),
            b = a,
            c = f,
            d = g
        }
        var b, c, d;
        xg.point = function(e, f) {
            b = e * Mf,
            c = Math.sin(f *= Mf),
            d = Math.cos(f),
            xg.point = a
        }
        ,
        xg.lineEnd = function() {
            xg.point = xg.lineEnd = E
        }
    }
    function ob(a) {
        var b = 0
          , c = Kf / 3
          , d = _a(a)
          , e = d(b, c);
        return e.parallels = function(a) {
            return arguments.length ? d(b = a[0] * Kf / 180, c = a[1] * Kf / 180) : [180 * (b / Kf), 180 * (c / Kf)]
        }
        ,
        e
    }
    function pb(a, b) {
        function c(a, b) {
            var c = Math.sqrt(f - 2 * e * Math.sin(b)) / e;
            return [c * Math.sin(a *= e), g - c * Math.cos(a)]
        }
        var d = Math.sin(a)
          , e = (d + Math.sin(b)) / 2
          , f = 1 + d * (2 * e - d)
          , g = Math.sqrt(f) / e;
        return c.invert = function(a, b) {
            var c = g - b;
            return [Math.atan2(a, c) / e, Math.asin((f - (a * a + c * c) * e * e) / (2 * e))]
        }
        ,
        c
    }
    function qb(a, b) {
        var c = a(b[0])
          , d = a([.5 * (b[0][0] + b[1][0]), b[0][1]])
          , e = a([b[1][0], b[0][1]])
          , f = a(b[1])
          , g = d[1] - c[1]
          , h = d[0] - c[0]
          , i = e[1] - d[1]
          , j = e[0] - d[0]
          , k = g / h
          , l = i / j
          , m = .5 * (k * l * (c[1] - e[1]) + l * (c[0] + d[0]) - k * (d[0] + e[0])) / (l - k)
          , n = (.5 * (c[0] + d[0]) - m) / k + .5 * (c[1] + d[1])
          , o = f[0] - m
          , p = f[1] - n
          , q = c[0] - m
          , r = c[1] - n
          , s = o * o + p * p
          , t = q * q + r * r
          , u = Math.atan2(p, o)
          , v = Math.atan2(r, q);
        return function(b) {
            var c = b[0] - m
              , d = b[1] - n
              , e = c * c + d * d
              , f = Math.atan2(d, c);
            return e > s && t > e && f > u && v > f ? a.invert(b) : void 0
        }
    }
    function rb() {
        function a(a, b) {
            zg += e * a - d * b,
            d = a,
            e = b
        }
        var b, c, d, e;
        Ag.point = function(f, g) {
            Ag.point = a,
            b = d = f,
            c = e = g
        }
        ,
        Ag.lineEnd = function() {
            a(b, c)
        }
    }
    function sb() {
        function a(a, b) {
            g.push("M", a, ",", b, f)
        }
        function b(a, b) {
            g.push("M", a, ",", b),
            h.point = c
        }
        function c(a, b) {
            g.push("L", a, ",", b)
        }
        function d() {
            h.point = a
        }
        function e() {
            g.push("Z")
        }
        var f = yb(4.5)
          , g = []
          , h = {
            point: a,
            lineStart: function() {
                h.point = b
            },
            lineEnd: d,
            polygonStart: function() {
                h.lineEnd = e
            },
            polygonEnd: function() {
                h.lineEnd = d,
                h.point = a
            },
            pointRadius: function(a) {
                return f = yb(a),
                h
            },
            result: function() {
                if (g.length) {
                    var a = g.join("");
                    return g = [],
                    a
                }
            }
        };
        return h
    }
    function tb(a, b) {
        og || (qg += a,
        rg += b,
        ++sg)
    }
    function ub() {
        function a(a, d) {
            var e = a - b
              , f = d - c
              , g = Math.sqrt(e * e + f * f);
            qg += g * (b + a) / 2,
            rg += g * (c + d) / 2,
            sg += g,
            b = a,
            c = d
        }
        var b, c;
        if (1 !== og) {
            if (!(1 > og))
                return;
            og = 1,
            qg = rg = sg = 0
        }
        Bg.point = function(d, e) {
            Bg.point = a,
            b = d,
            c = e
        }
    }
    function vb() {
        Bg.point = tb
    }
    function wb() {
        function a(a, b) {
            var c = e * a - d * b;
            qg += c * (d + a),
            rg += c * (e + b),
            sg += 3 * c,
            d = a,
            e = b
        }
        var b, c, d, e;
        2 > og && (og = 2,
        qg = rg = sg = 0),
        Bg.point = function(f, g) {
            Bg.point = a,
            b = d = f,
            c = e = g
        }
        ,
        Bg.lineEnd = function() {
            a(b, c)
        }
    }
    function xb(a) {
        function b(b, c) {
            a.moveTo(b, c),
            a.arc(b, c, g, 0, 2 * Kf)
        }
        function c(b, c) {
            a.moveTo(b, c),
            h.point = d
        }
        function d(b, c) {
            a.lineTo(b, c)
        }
        function e() {
            h.point = b
        }
        function f() {
            a.closePath()
        }
        var g = 4.5
          , h = {
            point: b,
            lineStart: function() {
                h.point = c
            },
            lineEnd: e,
            polygonStart: function() {
                h.lineEnd = f
            },
            polygonEnd: function() {
                h.lineEnd = e,
                h.point = b
            },
            pointRadius: function(a) {
                return g = a,
                h
            },
            result: E
        };
        return h
    }
    function yb(a) {
        return "m0," + a + "a" + a + "," + a + " 0 1,1 0," + -2 * a + "a" + a + "," + a + " 0 1,1 0," + 2 * a + "z"
    }
    function zb(a) {
        var b = Za(function(b, c) {
            return a([b * Nf, c * Nf])
        });
        return function(a) {
            return a = b(a),
            {
                point: function(b, c) {
                    a.point(b * Mf, c * Mf)
                },
                sphere: function() {
                    a.sphere()
                },
                lineStart: function() {
                    a.lineStart()
                },
                lineEnd: function() {
                    a.lineEnd()
                },
                polygonStart: function() {
                    a.polygonStart()
                },
                polygonEnd: function() {
                    a.polygonEnd()
                }
            }
        }
    }
    function Ab(a, b) {
        function c(b, c) {
            var d = Math.cos(b)
              , e = Math.cos(c)
              , f = a(d * e);
            return [f * e * Math.sin(b), f * Math.sin(c)]
        }
        return c.invert = function(a, c) {
            var d = Math.sqrt(a * a + c * c)
              , e = b(d)
              , f = Math.sin(e)
              , g = Math.cos(e);
            return [Math.atan2(a * f, d * g), Math.asin(d && c * f / d)]
        }
        ,
        c
    }
    function Bb(a, b) {
        function c(a, b) {
            var c = Math.abs(Math.abs(b) - Kf / 2) < Lf ? 0 : g / Math.pow(e(b), f);
            return [c * Math.sin(f * a), g - c * Math.cos(f * a)]
        }
        var d = Math.cos(a)
          , e = function(a) {
            return Math.tan(Kf / 4 + a / 2)
        }
          , f = a === b ? Math.sin(a) : Math.log(d / Math.cos(b)) / Math.log(e(b) / e(a))
          , g = d * Math.pow(e(a), f) / f;
        return f ? (c.invert = function(a, b) {
            var c = g - b
              , d = O(f) * Math.sqrt(a * a + c * c);
            return [Math.atan2(a, c) / f, 2 * Math.atan(Math.pow(g / d, 1 / f)) - Kf / 2]
        }
        ,
        c) : Db
    }
    function Cb(a, b) {
        function c(a, b) {
            var c = f - b;
            return [c * Math.sin(e * a), f - c * Math.cos(e * a)]
        }
        var d = Math.cos(a)
          , e = a === b ? Math.sin(a) : (d - Math.cos(b)) / (b - a)
          , f = d / e + a;
        return Math.abs(e) < Lf ? bb : (c.invert = function(a, b) {
            var c = f - b;
            return [Math.atan2(a, c) / e, f - O(e) * Math.sqrt(a * a + c * c)]
        }
        ,
        c)
    }
    function Db(a, b) {
        return [a, Math.log(Math.tan(Kf / 4 + b / 2))]
    }
    function Eb(a) {
        var b, c = $a(a), d = c.scale, e = c.translate, f = c.clipExtent;
        return c.scale = function() {
            var a = d.apply(c, arguments);
            return a === c ? b ? c.clipExtent(null ) : c : a
        }
        ,
        c.translate = function() {
            var a = e.apply(c, arguments);
            return a === c ? b ? c.clipExtent(null ) : c : a
        }
        ,
        c.clipExtent = function(a) {
            var g = f.apply(c, arguments);
            if (g === c) {
                if (b = null  == a) {
                    var h = Kf * d()
                      , i = e();
                    f([[i[0] - h, i[1] - h], [i[0] + h, i[1] + h]])
                }
            } else
                b && (g = null );
            return g
        }
        ,
        c.clipExtent(null )
    }
    function Fb(a, b) {
        var c = Math.cos(b) * Math.sin(a);
        return [Math.log((1 + c) / (1 - c)) / 2, Math.atan2(Math.tan(b), Math.cos(a))]
    }
    function Gb(a) {
        function b(b) {
            function g() {
                j.push("M", f(a(k), h))
            }
            for (var i, j = [], k = [], l = -1, m = b.length, n = ka(c), o = ka(d); ++l < m; )
                e.call(this, i = b[l], l) ? k.push([+n.call(this, i, l), +o.call(this, i, l)]) : k.length && (g(),
                k = []);
            return k.length && g(),
            j.length ? j.join("") : null 
        }
        var c = Hb
          , d = Ib
          , e = Ia
          , f = Jb
          , g = f.key
          , h = .7;
        return b.x = function(a) {
            return arguments.length ? (c = a,
            b) : c
        }
        ,
        b.y = function(a) {
            return arguments.length ? (d = a,
            b) : d
        }
        ,
        b.defined = function(a) {
            return arguments.length ? (e = a,
            b) : e
        }
        ,
        b.interpolate = function(a) {
            return arguments.length ? (g = "function" == typeof a ? f = a : (f = Hg.get(a) || Jb).key,
            b) : g
        }
        ,
        b.tension = function(a) {
            return arguments.length ? (h = a,
            b) : h
        }
        ,
        b
    }
    function Hb(a) {
        return a[0]
    }
    function Ib(a) {
        return a[1]
    }
    function Jb(a) {
        return a.join("L")
    }
    function Kb(a) {
        return Jb(a) + "Z"
    }
    function Lb(a) {
        for (var b = 0, c = a.length, d = a[0], e = [d[0], ",", d[1]]; ++b < c; )
            e.push("V", (d = a[b])[1], "H", d[0]);
        return e.join("")
    }
    function Mb(a) {
        for (var b = 0, c = a.length, d = a[0], e = [d[0], ",", d[1]]; ++b < c; )
            e.push("H", (d = a[b])[0], "V", d[1]);
        return e.join("")
    }
    function Nb(a, b) {
        return a.length < 4 ? Jb(a) : a[1] + Qb(a.slice(1, a.length - 1), Rb(a, b))
    }
    function Ob(a, b) {
        return a.length < 3 ? Jb(a) : a[0] + Qb((a.push(a[0]),
        a), Rb([a[a.length - 2]].concat(a, [a[1]]), b))
    }
    function Pb(a, b) {
        return a.length < 3 ? Jb(a) : a[0] + Qb(a, Rb(a, b))
    }
    function Qb(a, b) {
        if (b.length < 1 || a.length != b.length && a.length != b.length + 2)
            return Jb(a);
        var c = a.length != b.length
          , d = ""
          , e = a[0]
          , f = a[1]
          , g = b[0]
          , h = g
          , i = 1;
        if (c && (d += "Q" + (f[0] - 2 * g[0] / 3) + "," + (f[1] - 2 * g[1] / 3) + "," + f[0] + "," + f[1],
        e = a[1],
        i = 2),
        b.length > 1) {
            h = b[1],
            f = a[i],
            i++,
            d += "C" + (e[0] + g[0]) + "," + (e[1] + g[1]) + "," + (f[0] - h[0]) + "," + (f[1] - h[1]) + "," + f[0] + "," + f[1];
            for (var j = 2; j < b.length; j++,
            i++)
                f = a[i],
                h = b[j],
                d += "S" + (f[0] - h[0]) + "," + (f[1] - h[1]) + "," + f[0] + "," + f[1]
        }
        if (c) {
            var k = a[i];
            d += "Q" + (f[0] + 2 * h[0] / 3) + "," + (f[1] + 2 * h[1] / 3) + "," + k[0] + "," + k[1]
        }
        return d
    }
    function Rb(a, b) {
        for (var c, d = [], e = (1 - b) / 2, f = a[0], g = a[1], h = 1, i = a.length; ++h < i; )
            c = f,
            f = g,
            g = a[h],
            d.push([e * (g[0] - c[0]), e * (g[1] - c[1])]);
        return d
    }
    function Sb(a) {
        if (a.length < 3)
            return Jb(a);
        var b = 1
          , c = a.length
          , d = a[0]
          , e = d[0]
          , f = d[1]
          , g = [e, e, e, (d = a[1])[0]]
          , h = [f, f, f, d[1]]
          , i = [e, ",", f];
        for (Xb(i, g, h); ++b < c; )
            d = a[b],
            g.shift(),
            g.push(d[0]),
            h.shift(),
            h.push(d[1]),
            Xb(i, g, h);
        for (b = -1; ++b < 2; )
            g.shift(),
            g.push(d[0]),
            h.shift(),
            h.push(d[1]),
            Xb(i, g, h);
        return i.join("")
    }
    function Tb(a) {
        if (a.length < 4)
            return Jb(a);
        for (var b, c = [], d = -1, e = a.length, f = [0], g = [0]; ++d < 3; )
            b = a[d],
            f.push(b[0]),
            g.push(b[1]);
        for (c.push(Wb(Kg, f) + "," + Wb(Kg, g)),
        --d; ++d < e; )
            b = a[d],
            f.shift(),
            f.push(b[0]),
            g.shift(),
            g.push(b[1]),
            Xb(c, f, g);
        return c.join("")
    }
    function Ub(a) {
        for (var b, c, d = -1, e = a.length, f = e + 4, g = [], h = []; ++d < 4; )
            c = a[d % e],
            g.push(c[0]),
            h.push(c[1]);
        for (b = [Wb(Kg, g), ",", Wb(Kg, h)],
        --d; ++d < f; )
            c = a[d % e],
            g.shift(),
            g.push(c[0]),
            h.shift(),
            h.push(c[1]),
            Xb(b, g, h);
        return b.join("")
    }
    function Vb(a, b) {
        var c = a.length - 1;
        if (c)
            for (var d, e, f = a[0][0], g = a[0][1], h = a[c][0] - f, i = a[c][1] - g, j = -1; ++j <= c; )
                d = a[j],
                e = j / c,
                d[0] = b * d[0] + (1 - b) * (f + e * h),
                d[1] = b * d[1] + (1 - b) * (g + e * i);
        return Sb(a)
    }
    function Wb(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]
    }
    function Xb(a, b, c) {
        a.push("C", Wb(Ig, b), ",", Wb(Ig, c), ",", Wb(Jg, b), ",", Wb(Jg, c), ",", Wb(Kg, b), ",", Wb(Kg, c))
    }
    function Yb(a, b) {
        return (b[1] - a[1]) / (b[0] - a[0])
    }
    function Zb(a) {
        for (var b = 0, c = a.length - 1, d = [], e = a[0], f = a[1], g = d[0] = Yb(e, f); ++b < c; )
            d[b] = (g + (g = Yb(e = f, f = a[b + 1]))) / 2;
        return d[b] = g,
        d
    }
    function $b(a) {
        for (var b, c, d, e, f = [], g = Zb(a), h = -1, i = a.length - 1; ++h < i; )
            b = Yb(a[h], a[h + 1]),
            Math.abs(b) < 1e-6 ? g[h] = g[h + 1] = 0 : (c = g[h] / b,
            d = g[h + 1] / b,
            e = c * c + d * d,
            e > 9 && (e = 3 * b / Math.sqrt(e),
            g[h] = e * c,
            g[h + 1] = e * d));
        for (h = -1; ++h <= i; )
            e = (a[Math.min(i, h + 1)][0] - a[Math.max(0, h - 1)][0]) / (6 * (1 + g[h] * g[h])),
            f.push([e || 0, g[h] * e || 0]);
        return f
    }
    function _b(a) {
        return a.length < 3 ? Jb(a) : a[0] + Qb(a, $b(a))
    }
    function ac(a, b, c, d) {
        var e, f, g, h, i, j, k;
        return e = d[a],
        f = e[0],
        g = e[1],
        e = d[b],
        h = e[0],
        i = e[1],
        e = d[c],
        j = e[0],
        k = e[1],
        (k - g) * (h - f) - (i - g) * (j - f) > 0
    }
    function bc(a, b, c) {
        return (c[0] - b[0]) * (a[1] - b[1]) < (c[1] - b[1]) * (a[0] - b[0])
    }
    function cc(a, b, c, d) {
        var e = a[0]
          , f = c[0]
          , g = b[0] - e
          , h = d[0] - f
          , i = a[1]
          , j = c[1]
          , k = b[1] - i
          , l = d[1] - j
          , m = (h * (i - j) - l * (e - f)) / (l * g - h * k);
        return [e + m * g, i + m * k]
    }
    function dc(a, b) {
        var c = {
            list: a.map(function(a, b) {
                return {
                    index: b,
                    x: a[0],
                    y: a[1]
                }
            }).sort(function(a, b) {
                return a.y < b.y ? -1 : a.y > b.y ? 1 : a.x < b.x ? -1 : a.x > b.x ? 1 : 0
            }),
            bottomSite: null 
        }
          , d = {
            list: [],
            leftEnd: null ,
            rightEnd: null ,
            init: function() {
                d.leftEnd = d.createHalfEdge(null , "l"),
                d.rightEnd = d.createHalfEdge(null , "l"),
                d.leftEnd.r = d.rightEnd,
                d.rightEnd.l = d.leftEnd,
                d.list.unshift(d.leftEnd, d.rightEnd)
            },
            createHalfEdge: function(a, b) {
                return {
                    edge: a,
                    side: b,
                    vertex: null ,
                    l: null ,
                    r: null 
                }
            },
            insert: function(a, b) {
                b.l = a,
                b.r = a.r,
                a.r.l = b,
                a.r = b
            },
            leftBound: function(a) {
                var b = d.leftEnd;
                do
                    b = b.r;
                while (b != d.rightEnd && e.rightOf(b, a));return b = b.l
            },
            del: function(a) {
                a.l.r = a.r,
                a.r.l = a.l,
                a.edge = null 
            },
            right: function(a) {
                return a.r
            },
            left: function(a) {
                return a.l
            },
            leftRegion: function(a) {
                return null  == a.edge ? c.bottomSite : a.edge.region[a.side]
            },
            rightRegion: function(a) {
                return null  == a.edge ? c.bottomSite : a.edge.region[Lg[a.side]]
            }
        }
          , e = {
            bisect: function(a, b) {
                var c = {
                    region: {
                        l: a,
                        r: b
                    },
                    ep: {
                        l: null ,
                        r: null 
                    }
                }
                  , d = b.x - a.x
                  , e = b.y - a.y
                  , f = d > 0 ? d : -d
                  , g = e > 0 ? e : -e;
                return c.c = a.x * d + a.y * e + .5 * (d * d + e * e),
                f > g ? (c.a = 1,
                c.b = e / d,
                c.c /= d) : (c.b = 1,
                c.a = d / e,
                c.c /= e),
                c
            },
            intersect: function(a, b) {
                var c = a.edge
                  , d = b.edge;
                if (!c || !d || c.region.r == d.region.r)
                    return null ;
                var e = c.a * d.b - c.b * d.a;
                if (Math.abs(e) < 1e-10)
                    return null ;
                var f, g, h = (c.c * d.b - d.c * c.b) / e, i = (d.c * c.a - c.c * d.a) / e, j = c.region.r, k = d.region.r;
                j.y < k.y || j.y == k.y && j.x < k.x ? (f = a,
                g = c) : (f = b,
                g = d);
                var l = h >= g.region.r.x;
                return l && "l" === f.side || !l && "r" === f.side ? null  : {
                    x: h,
                    y: i
                }
            },
            rightOf: function(a, b) {
                var c = a.edge
                  , d = c.region.r
                  , e = b.x > d.x;
                if (e && "l" === a.side)
                    return 1;
                if (!e && "r" === a.side)
                    return 0;
                if (1 === c.a) {
                    var f = b.y - d.y
                      , g = b.x - d.x
                      , h = 0
                      , i = 0;
                    if (!e && c.b < 0 || e && c.b >= 0 ? i = h = f >= c.b * g : (i = b.x + b.y * c.b > c.c,
                    c.b < 0 && (i = !i),
                    i || (h = 1)),
                    !h) {
                        var j = d.x - c.region.l.x;
                        i = c.b * (g * g - f * f) < j * f * (1 + 2 * g / j + c.b * c.b),
                        c.b < 0 && (i = !i)
                    }
                } else {
                    var k = c.c - c.a * b.x
                      , l = b.y - k
                      , m = b.x - d.x
                      , n = k - d.y;
                    i = l * l > m * m + n * n
                }
                return "l" === a.side ? i : !i
            },
            endPoint: function(a, c, d) {
                a.ep[c] = d,
                a.ep[Lg[c]] && b(a)
            },
            distance: function(a, b) {
                var c = a.x - b.x
                  , d = a.y - b.y;
                return Math.sqrt(c * c + d * d)
            }
        }
          , f = {
            list: [],
            insert: function(a, b, c) {
                a.vertex = b,
                a.ystar = b.y + c;
                for (var d = 0, e = f.list, g = e.length; g > d; d++) {
                    var h = e[d];
                    if (!(a.ystar > h.ystar || a.ystar == h.ystar && b.x > h.vertex.x))
                        break
                }
                e.splice(d, 0, a)
            },
            del: function(a) {
                for (var b = 0, c = f.list, d = c.length; d > b && c[b] != a; ++b)
                    ;
                c.splice(b, 1)
            },
            empty: function() {
                return 0 === f.list.length
            },
            nextEvent: function(a) {
                for (var b = 0, c = f.list, d = c.length; d > b; ++b)
                    if (c[b] == a)
                        return c[b + 1];
                return null 
            },
            min: function() {
                var a = f.list[0];
                return {
                    x: a.vertex.x,
                    y: a.ystar
                }
            },
            extractMin: function() {
                return f.list.shift()
            }
        };
        d.init(),
        c.bottomSite = c.list.shift();
        for (var g, h, i, j, k, l, m, n, o, p, q, r, s, t = c.list.shift(); ; )
            if (f.empty() || (g = f.min()),
            t && (f.empty() || t.y < g.y || t.y == g.y && t.x < g.x))
                h = d.leftBound(t),
                i = d.right(h),
                m = d.rightRegion(h),
                r = e.bisect(m, t),
                l = d.createHalfEdge(r, "l"),
                d.insert(h, l),
                p = e.intersect(h, l),
                p && (f.del(h),
                f.insert(h, p, e.distance(p, t))),
                h = l,
                l = d.createHalfEdge(r, "r"),
                d.insert(h, l),
                p = e.intersect(l, i),
                p && f.insert(l, p, e.distance(p, t)),
                t = c.list.shift();
            else {
                if (f.empty())
                    break;
                h = f.extractMin(),
                j = d.left(h),
                i = d.right(h),
                k = d.right(i),
                m = d.leftRegion(h),
                n = d.rightRegion(i),
                q = h.vertex,
                e.endPoint(h.edge, h.side, q),
                e.endPoint(i.edge, i.side, q),
                d.del(h),
                f.del(i),
                d.del(i),
                s = "l",
                m.y > n.y && (o = m,
                m = n,
                n = o,
                s = "r"),
                r = e.bisect(m, n),
                l = d.createHalfEdge(r, s),
                d.insert(j, l),
                e.endPoint(r, Lg[s], q),
                p = e.intersect(j, l),
                p && (f.del(j),
                f.insert(j, p, e.distance(p, m))),
                p = e.intersect(l, k),
                p && f.insert(l, p, e.distance(p, m))
            }
        for (h = d.right(d.leftEnd); h != d.rightEnd; h = d.right(h))
            b(h.edge)
    }
    function ec(a) {
        return a.x
    }
    function fc(a) {
        return a.y
    }
    function gc() {
        return {
            leaf: !0,
            nodes: [],
            point: null ,
            x: null ,
            y: null 
        }
    }
    function hc(a, b, c, d, e, f) {
        if (!a(b, c, d, e, f)) {
            var g = .5 * (c + e)
              , h = .5 * (d + f)
              , i = b.nodes;
            i[0] && hc(a, i[0], c, d, g, h),
            i[1] && hc(a, i[1], g, d, e, h),
            i[2] && hc(a, i[2], c, h, g, f),
            i[3] && hc(a, i[3], g, h, e, f)
        }
    }
    function ic(a, b) {
        a = hf.rgb(a),
        b = hf.rgb(b);
        var c = a.r
          , d = a.g
          , e = a.b
          , f = b.r - c
          , g = b.g - d
          , h = b.b - e;
        return function(a) {
            return "#" + ea(Math.round(c + f * a)) + ea(Math.round(d + g * a)) + ea(Math.round(e + h * a))
        }
    }
    function jc(a) {
        var b = [a.a, a.b]
          , c = [a.c, a.d]
          , d = lc(b)
          , e = kc(b, c)
          , f = lc(mc(c, b, -e)) || 0;
        b[0] * c[1] < c[0] * b[1] && (b[0] *= -1,
        b[1] *= -1,
        d *= -1,
        e *= -1),
        this.rotate = (d ? Math.atan2(b[1], b[0]) : Math.atan2(-c[0], c[1])) * Nf,
        this.translate = [a.e, a.f],
        this.scale = [d, f],
        this.skew = f ? Math.atan2(e, f) * Nf : 0
    }
    function kc(a, b) {
        return a[0] * b[0] + a[1] * b[1]
    }
    function lc(a) {
        var b = Math.sqrt(kc(a, a));
        return b && (a[0] /= b,
        a[1] /= b),
        b
    }
    function mc(a, b, c) {
        return a[0] += c * b[0],
        a[1] += c * b[1],
        a
    }
    function nc(a, b) {
        return b -= a = +a,
        function(c) {
            return a + b * c
        }
    }
    function oc(a, b) {
        var c, d = [], e = [], f = hf.transform(a), g = hf.transform(b), h = f.translate, i = g.translate, j = f.rotate, k = g.rotate, l = f.skew, m = g.skew, n = f.scale, o = g.scale;
        return h[0] != i[0] || h[1] != i[1] ? (d.push("translate(", null , ",", null , ")"),
        e.push({
            i: 1,
            x: nc(h[0], i[0])
        }, {
            i: 3,
            x: nc(h[1], i[1])
        })) : i[0] || i[1] ? d.push("translate(" + i + ")") : d.push(""),
        j != k ? (j - k > 180 ? k += 360 : k - j > 180 && (j += 360),
        e.push({
            i: d.push(d.pop() + "rotate(", null , ")") - 2,
            x: nc(j, k)
        })) : k && d.push(d.pop() + "rotate(" + k + ")"),
        l != m ? e.push({
            i: d.push(d.pop() + "skewX(", null , ")") - 2,
            x: nc(l, m)
        }) : m && d.push(d.pop() + "skewX(" + m + ")"),
        n[0] != o[0] || n[1] != o[1] ? (c = d.push(d.pop() + "scale(", null , ",", null , ")"),
        e.push({
            i: c - 4,
            x: nc(n[0], o[0])
        }, {
            i: c - 2,
            x: nc(n[1], o[1])
        })) : (1 != o[0] || 1 != o[1]) && d.push(d.pop() + "scale(" + o + ")"),
        c = e.length,
        function(a) {
            for (var b, f = -1; ++f < c; )
                d[(b = e[f]).i] = b.x(a);
            return d.join("")
        }
    }
    function pc(a, b) {
        var c, d = {}, e = {};
        for (c in a)
            c in b ? d[c] = sc(c)(a[c], b[c]) : e[c] = a[c];
        for (c in b)
            c in a || (e[c] = b[c]);
        return function(a) {
            for (c in d)
                e[c] = d[c](a);
            return e
        }
    }
    function qc(a, b) {
        var c, d, e, f, g, h = 0, i = 0, j = [], k = [];
        for (a += "",
        b += "",
        Ng.lastIndex = 0,
        d = 0; c = Ng.exec(b); ++d)
            c.index && j.push(b.substring(h, i = c.index)),
            k.push({
                i: j.length,
                x: c[0]
            }),
            j.push(null ),
            h = Ng.lastIndex;
        for (h < b.length && j.push(b.substring(h)),
        d = 0,
        f = k.length; (c = Ng.exec(a)) && f > d; ++d)
            if (g = k[d],
            g.x == c[0]) {
                if (g.i)
                    if (null  == j[g.i + 1])
                        for (j[g.i - 1] += g.x,
                        j.splice(g.i, 1),
                        e = d + 1; f > e; ++e)
                            k[e].i--;
                    else
                        for (j[g.i - 1] += g.x + j[g.i + 1],
                        j.splice(g.i, 2),
                        e = d + 1; f > e; ++e)
                            k[e].i -= 2;
                else if (null  == j[g.i + 1])
                    j[g.i] = g.x;
                else
                    for (j[g.i] = g.x + j[g.i + 1],
                    j.splice(g.i + 1, 1),
                    e = d + 1; f > e; ++e)
                        k[e].i--;
                k.splice(d, 1),
                f--,
                d--
            } else
                g.x = nc(parseFloat(c[0]), parseFloat(g.x));
        for (; f > d; )
            g = k.pop(),
            null  == j[g.i + 1] ? j[g.i] = g.x : (j[g.i] = g.x + j[g.i + 1],
            j.splice(g.i + 1, 1)),
            f--;
        return 1 === j.length ? null  == j[0] ? k[0].x : function() {
            return b
        }
         : function(a) {
            for (d = 0; f > d; ++d)
                j[(g = k[d]).i] = g.x(a);
            return j.join("")
        }
    }
    function rc(a, b) {
        for (var c, d = hf.interpolators.length; --d >= 0 && !(c = hf.interpolators[d](a, b)); )
            ;
        return c
    }
    function sc(a) {
        return "transform" == a ? oc : rc
    }
    function tc(a, b) {
        var c, d = [], e = [], f = a.length, g = b.length, h = Math.min(a.length, b.length);
        for (c = 0; h > c; ++c)
            d.push(rc(a[c], b[c]));
        for (; f > c; ++c)
            e[c] = a[c];
        for (; g > c; ++c)
            e[c] = b[c];
        return function(a) {
            for (c = 0; h > c; ++c)
                e[c] = d[c](a);
            return e
        }
    }
    function uc(a) {
        return function(b) {
            return 0 >= b ? 0 : b >= 1 ? 1 : a(b)
        }
    }
    function vc(a) {
        return function(b) {
            return 1 - a(1 - b)
        }
    }
    function wc(a) {
        return function(b) {
            return .5 * (.5 > b ? a(2 * b) : 2 - a(2 - 2 * b))
        }
    }
    function xc(a) {
        return a * a
    }
    function yc(a) {
        return a * a * a
    }
    function zc(a) {
        if (0 >= a)
            return 0;
        if (a >= 1)
            return 1;
        var b = a * a
          , c = b * a;
        return 4 * (.5 > a ? c : 3 * (a - b) + c - .75)
    }
    function Ac(a) {
        return function(b) {
            return Math.pow(b, a)
        }
    }
    function Bc(a) {
        return 1 - Math.cos(a * Kf / 2)
    }
    function Cc(a) {
        return Math.pow(2, 10 * (a - 1))
    }
    function Dc(a) {
        return 1 - Math.sqrt(1 - a * a)
    }
    function Ec(a, b) {
        var c;
        return arguments.length < 2 && (b = .45),
        arguments.length ? c = b / (2 * Kf) * Math.asin(1 / a) : (a = 1,
        c = b / 4),
        function(d) {
            return 1 + a * Math.pow(2, 10 * -d) * Math.sin(2 * (d - c) * Kf / b)
        }
    }
    function Fc(a) {
        return a || (a = 1.70158),
        function(b) {
            return b * b * ((a + 1) * b - a)
        }
    }
    function Gc(a) {
        return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
    }
    function Hc(a, b) {
        a = hf.hcl(a),
        b = hf.hcl(b);
        var c = a.h
          , d = a.c
          , e = a.l
          , f = b.h - c
          , g = b.c - d
          , h = b.l - e;
        return isNaN(g) && (g = 0,
        d = isNaN(d) ? b.c : d),
        isNaN(f) ? (f = 0,
        c = isNaN(c) ? b.h : c) : f > 180 ? f -= 360 : -180 > f && (f += 360),
        function(a) {
            return W(c + f * a, d + g * a, e + h * a) + ""
        }
    }
    function Ic(a, b) {
        a = hf.hsl(a),
        b = hf.hsl(b);
        var c = a.h
          , d = a.s
          , e = a.l
          , f = b.h - c
          , g = b.s - d
          , h = b.l - e;
        return isNaN(g) && (g = 0,
        d = isNaN(d) ? b.s : d),
        isNaN(f) ? (f = 0,
        c = isNaN(c) ? b.h : c) : f > 180 ? f -= 360 : -180 > f && (f += 360),
        function(a) {
            return N(c + f * a, d + g * a, e + h * a) + ""
        }
    }
    function Jc(a, b) {
        a = hf.lab(a),
        b = hf.lab(b);
        var c = a.l
          , d = a.a
          , e = a.b
          , f = b.l - c
          , g = b.a - d
          , h = b.b - e;
        return function(a) {
            return Z(c + f * a, d + g * a, e + h * a) + ""
        }
    }
    function Kc(a, b) {
        return b -= a,
        function(c) {
            return Math.round(a + b * c)
        }
    }
    function Lc(a, b) {
        return b = b - (a = +a) ? 1 / (b - a) : 0,
        function(c) {
            return (c - a) * b
        }
    }
    function Mc(a, b) {
        return b = b - (a = +a) ? 1 / (b - a) : 0,
        function(c) {
            return Math.max(0, Math.min(1, (c - a) * b))
        }
    }
    function Nc(a) {
        for (var b = a.source, c = a.target, d = Pc(b, c), e = [b]; b !== d; )
            b = b.parent,
            e.push(b);
        for (var f = e.length; c !== d; )
            e.splice(f, 0, c),
            c = c.parent;
        return e
    }
    function Oc(a) {
        for (var b = [], c = a.parent; null  != c; )
            b.push(a),
            a = c,
            c = c.parent;
        return b.push(a),
        b
    }
    function Pc(a, b) {
        if (a === b)
            return a;
        for (var c = Oc(a), d = Oc(b), e = c.pop(), f = d.pop(), g = null ; e === f; )
            g = e,
            e = c.pop(),
            f = d.pop();
        return g
    }
    function Qc(a) {
        a.fixed |= 2
    }
    function Rc(a) {
        a.fixed &= -7
    }
    function Sc(a) {
        a.fixed |= 4,
        a.px = a.x,
        a.py = a.y
    }
    function Tc(a) {
        a.fixed &= -5
    }
    function Uc(a, b, c) {
        var d = 0
          , e = 0;
        if (a.charge = 0,
        !a.leaf)
            for (var f, g = a.nodes, h = g.length, i = -1; ++i < h; )
                f = g[i],
                null  != f && (Uc(f, b, c),
                a.charge += f.charge,
                d += f.charge * f.cx,
                e += f.charge * f.cy);
        if (a.point) {
            a.leaf || (a.point.x += Math.random() - .5,
            a.point.y += Math.random() - .5);
            var j = b * c[a.point.index];
            a.charge += a.pointCharge = j,
            d += j * a.point.x,
            e += j * a.point.y
        }
        a.cx = d / a.charge,
        a.cy = e / a.charge
    }
    function Vc(a, b) {
        return hf.rebind(a, b, "sort", "children", "value"),
        a.nodes = a,
        a.links = Zc,
        a
    }
    function Wc(a) {
        return a.children
    }
    function Xc(a) {
        return a.value
    }
    function Yc(a, b) {
        return b.value - a.value
    }
    function Zc(a) {
        return hf.merge(a.map(function(a) {
            return (a.children || []).map(function(b) {
                return {
                    source: a,
                    target: b
                }
            })
        }))
    }
    function $c(a) {
        return a.x
    }
    function _c(a) {
        return a.y
    }
    function ad(a, b, c) {
        a.y0 = b,
        a.y = c
    }
    function bd(a) {
        return hf.range(a.length)
    }
    function cd(a) {
        for (var b = -1, c = a[0].length, d = []; ++b < c; )
            d[b] = 0;
        return d
    }
    function dd(a) {
        for (var b, c = 1, d = 0, e = a[0][1], f = a.length; f > c; ++c)
            (b = a[c][1]) > e && (d = c,
            e = b);
        return d
    }
    function ed(a) {
        return a.reduce(fd, 0)
    }
    function fd(a, b) {
        return a + b[1]
    }
    function gd(a, b) {
        return hd(a, Math.ceil(Math.log(b.length) / Math.LN2 + 1))
    }
    function hd(a, b) {
        for (var c = -1, d = +a[0], e = (a[1] - d) / b, f = []; ++c <= b; )
            f[c] = e * c + d;
        return f
    }
    function id(a) {
        return [hf.min(a), hf.max(a)]
    }
    function jd(a, b) {
        return a.parent == b.parent ? 1 : 2
    }
    function kd(a) {
        var b = a.children;
        return b && b.length ? b[0] : a._tree.thread
    }
    function ld(a) {
        var b, c = a.children;
        return c && (b = c.length) ? c[b - 1] : a._tree.thread
    }
    function md(a, b) {
        var c = a.children;
        if (c && (e = c.length))
            for (var d, e, f = -1; ++f < e; )
                b(d = md(c[f], b), a) > 0 && (a = d);
        return a
    }
    function nd(a, b) {
        return a.x - b.x
    }
    function od(a, b) {
        return b.x - a.x
    }
    function pd(a, b) {
        return a.depth - b.depth
    }
    function qd(a, b) {
        function c(a, d) {
            var e = a.children;
            if (e && (g = e.length))
                for (var f, g, h = null , i = -1; ++i < g; )
                    f = e[i],
                    c(f, h),
                    h = f;
            b(a, d)
        }
        c(a, null )
    }
    function rd(a) {
        for (var b, c = 0, d = 0, e = a.children, f = e.length; --f >= 0; )
            b = e[f]._tree,
            b.prelim += c,
            b.mod += c,
            c += b.shift + (d += b.change)
    }
    function sd(a, b, c) {
        a = a._tree,
        b = b._tree;
        var d = c / (b.number - a.number);
        a.change += d,
        b.change -= d,
        b.shift += c,
        b.prelim += c,
        b.mod += c
    }
    function td(a, b, c) {
        return a._tree.ancestor.parent == b.parent ? a._tree.ancestor : c
    }
    function ud(a, b) {
        return a.value - b.value
    }
    function vd(a, b) {
        var c = a._pack_next;
        a._pack_next = b,
        b._pack_prev = a,
        b._pack_next = c,
        c._pack_prev = b
    }
    function wd(a, b) {
        a._pack_next = b,
        b._pack_prev = a
    }
    function xd(a, b) {
        var c = b.x - a.x
          , d = b.y - a.y
          , e = a.r + b.r;
        return e * e - c * c - d * d > .001
    }
    function yd(a) {
        function b(a) {
            k = Math.min(a.x - a.r, k),
            l = Math.max(a.x + a.r, l),
            m = Math.min(a.y - a.r, m),
            n = Math.max(a.y + a.r, n)
        }
        if ((c = a.children) && (j = c.length)) {
            var c, d, e, f, g, h, i, j, k = 1 / 0, l = -1 / 0, m = 1 / 0, n = -1 / 0;
            if (c.forEach(zd),
            d = c[0],
            d.x = -d.r,
            d.y = 0,
            b(d),
            j > 1 && (e = c[1],
            e.x = e.r,
            e.y = 0,
            b(e),
            j > 2))
                for (f = c[2],
                Cd(d, e, f),
                b(f),
                vd(d, f),
                d._pack_prev = f,
                vd(f, e),
                e = d._pack_next,
                g = 3; j > g; g++) {
                    Cd(d, e, f = c[g]);
                    var o = 0
                      , p = 1
                      , q = 1;
                    for (h = e._pack_next; h !== e; h = h._pack_next,
                    p++)
                        if (xd(h, f)) {
                            o = 1;
                            break
                        }
                    if (1 == o)
                        for (i = d._pack_prev; i !== h._pack_prev && !xd(i, f); i = i._pack_prev,
                        q++)
                            ;
                    o ? (q > p || p == q && e.r < d.r ? wd(d, e = h) : wd(d = i, e),
                    g--) : (vd(d, f),
                    e = f,
                    b(f))
                }
            var r = (k + l) / 2
              , s = (m + n) / 2
              , t = 0;
            for (g = 0; j > g; g++)
                f = c[g],
                f.x -= r,
                f.y -= s,
                t = Math.max(t, f.r + Math.sqrt(f.x * f.x + f.y * f.y));
            a.r = t,
            c.forEach(Ad)
        }
    }
    function zd(a) {
        a._pack_next = a._pack_prev = a
    }
    function Ad(a) {
        delete a._pack_next,
        delete a._pack_prev
    }
    function Bd(a, b, c, d) {
        var e = a.children;
        if (a.x = b += d * a.x,
        a.y = c += d * a.y,
        a.r *= d,
        e)
            for (var f = -1, g = e.length; ++f < g; )
                Bd(e[f], b, c, d)
    }
    function Cd(a, b, c) {
        var d = a.r + c.r
          , e = b.x - a.x
          , f = b.y - a.y;
        if (d && (e || f)) {
            var g = b.r + c.r
              , h = e * e + f * f;
            g *= g,
            d *= d;
            var i = .5 + (d - g) / (2 * h)
              , j = Math.sqrt(Math.max(0, 2 * g * (d + h) - (d -= h) * d - g * g)) / (2 * h);
            c.x = a.x + i * e + j * f,
            c.y = a.y + i * f - j * e
        } else
            c.x = a.x + d,
            c.y = a.y
    }
    function Dd(a) {
        return 1 + hf.max(a, function(a) {
            return a.y
        })
    }
    function Ed(a) {
        return a.reduce(function(a, b) {
            return a + b.x
        }, 0) / a.length
    }
    function Fd(a) {
        var b = a.children;
        return b && b.length ? Fd(b[0]) : a
    }
    function Gd(a) {
        var b, c = a.children;
        return c && (b = c.length) ? Gd(c[b - 1]) : a
    }
    function Hd(a) {
        return {
            x: a.x,
            y: a.y,
            dx: a.dx,
            dy: a.dy
        }
    }
    function Id(a, b) {
        var c = a.x + b[3]
          , d = a.y + b[0]
          , e = a.dx - b[1] - b[3]
          , f = a.dy - b[0] - b[2];
        return 0 > e && (c += e / 2,
        e = 0),
        0 > f && (d += f / 2,
        f = 0),
        {
            x: c,
            y: d,
            dx: e,
            dy: f
        }
    }
    function Jd(a) {
        var b = a[0]
          , c = a[a.length - 1];
        return c > b ? [b, c] : [c, b]
    }
    function Kd(a) {
        return a.rangeExtent ? a.rangeExtent() : Jd(a.range())
    }
    function Ld(a, b, c, d) {
        var e = c(a[0], a[1])
          , f = d(b[0], b[1]);
        return function(a) {
            return f(e(a))
        }
    }
    function Md(a, b) {
        var c, d = 0, e = a.length - 1, f = a[d], g = a[e];
        return f > g && (c = d,
        d = e,
        e = c,
        c = f,
        f = g,
        g = c),
        (b = b(g - f)) && (a[d] = b.floor(f),
        a[e] = b.ceil(g)),
        a
    }
    function Nd(a, b, c, d) {
        var e = []
          , f = []
          , g = 0
          , h = Math.min(a.length, b.length) - 1;
        for (a[h] < a[0] && (a = a.slice().reverse(),
        b = b.slice().reverse()); ++g <= h; )
            e.push(c(a[g - 1], a[g])),
            f.push(d(b[g - 1], b[g]));
        return function(b) {
            var c = hf.bisect(a, b, 1, h) - 1;
            return f[c](e[c](b))
        }
    }
    function Od(a, b, c, d) {
        function e() {
            var e = Math.min(a.length, b.length) > 2 ? Nd : Ld
              , i = d ? Mc : Lc;
            return g = e(a, b, i, c),
            h = e(b, a, i, rc),
            f
        }
        function f(a) {
            return g(a)
        }
        var g, h;
        return f.invert = function(a) {
            return h(a)
        }
        ,
        f.domain = function(b) {
            return arguments.length ? (a = b.map(Number),
            e()) : a
        }
        ,
        f.range = function(a) {
            return arguments.length ? (b = a,
            e()) : b
        }
        ,
        f.rangeRound = function(a) {
            return f.range(a).interpolate(Kc)
        }
        ,
        f.clamp = function(a) {
            return arguments.length ? (d = a,
            e()) : d
        }
        ,
        f.interpolate = function(a) {
            return arguments.length ? (c = a,
            e()) : c
        }
        ,
        f.ticks = function(b) {
            return Sd(a, b)
        }
        ,
        f.tickFormat = function(b, c) {
            return Td(a, b, c)
        }
        ,
        f.nice = function() {
            return Md(a, Qd),
            e()
        }
        ,
        f.copy = function() {
            return Od(a, b, c, d)
        }
        ,
        e()
    }
    function Pd(a, b) {
        return hf.rebind(a, b, "range", "rangeRound", "interpolate", "clamp")
    }
    function Qd(a) {
        return a = Math.pow(10, Math.round(Math.log(a) / Math.LN10) - 1),
        a && {
            floor: function(b) {
                return Math.floor(b / a) * a
            },
            ceil: function(b) {
                return Math.ceil(b / a) * a
            }
        }
    }
    function Rd(a, b) {
        var c = Jd(a)
          , d = c[1] - c[0]
          , e = Math.pow(10, Math.floor(Math.log(d / b) / Math.LN10))
          , f = b / d * e;
        return .15 >= f ? e *= 10 : .35 >= f ? e *= 5 : .75 >= f && (e *= 2),
        c[0] = Math.ceil(c[0] / e) * e,
        c[1] = Math.floor(c[1] / e) * e + .5 * e,
        c[2] = e,
        c
    }
    function Sd(a, b) {
        return hf.range.apply(hf, Rd(a, b))
    }
    function Td(a, b, c) {
        var d = -Math.floor(Math.log(Rd(a, b)[2]) / Math.LN10 + .01);
        return hf.format(c ? c.replace(eg, function(a, b, c, e, f, g, h, i, j, k) {
            return [b, c, e, f, g, h, i, j || "." + (d - 2 * ("%" === k)), k].join("")
        }) : ",." + d + "f")
    }
    function Ud(a, b, c, d) {
        function e(b) {
            return a(c(b))
        }
        return e.invert = function(b) {
            return d(a.invert(b))
        }
        ,
        e.domain = function(b) {
            return arguments.length ? (b[0] < 0 ? (c = Xd,
            d = Yd) : (c = Vd,
            d = Wd),
            a.domain(b.map(c)),
            e) : a.domain().map(d)
        }
        ,
        e.base = function(a) {
            return arguments.length ? (b = +a,
            e) : b
        }
        ,
        e.nice = function() {
            return a.domain(Md(a.domain(), Zd(b))),
            e
        }
        ,
        e.ticks = function() {
            var e = Jd(a.domain())
              , f = [];
            if (e.every(isFinite)) {
                var g = Math.log(b)
                  , h = Math.floor(e[0] / g)
                  , i = Math.ceil(e[1] / g)
                  , j = d(e[0])
                  , k = d(e[1])
                  , l = b % 1 ? 2 : b;
                if (c === Xd)
                    for (f.push(-Math.pow(b, -h)); h++ < i; )
                        for (var m = l - 1; m > 0; m--)
                            f.push(-Math.pow(b, -h) * m);
                else {
                    for (; i > h; h++)
                        for (var m = 1; l > m; m++)
                            f.push(Math.pow(b, h) * m);
                    f.push(Math.pow(b, h))
                }
                for (h = 0; f[h] < j; h++)
                    ;
                for (i = f.length; f[i - 1] > k; i--)
                    ;
                f = f.slice(h, i)
            }
            return f
        }
        ,
        e.tickFormat = function(a, f) {
            if (arguments.length < 2 && (f = Wg),
            !arguments.length)
                return f;
            var g, h = Math.log(b), i = Math.max(.1, a / e.ticks().length), j = c === Xd ? (g = -1e-12,
            Math.floor) : (g = 1e-12,
            Math.ceil);
            return function(a) {
                return a / d(h * j(c(a) / h + g)) <= i ? f(a) : ""
            }
        }
        ,
        e.copy = function() {
            return Ud(a.copy(), b, c, d)
        }
        ,
        Pd(e, a)
    }
    function Vd(a) {
        return Math.log(0 > a ? 0 : a)
    }
    function Wd(a) {
        return Math.exp(a)
    }
    function Xd(a) {
        return -Math.log(a > 0 ? 0 : -a)
    }
    function Yd(a) {
        return -Math.exp(-a)
    }
    function Zd(a) {
        a = Math.log(a);
        var b = {
            floor: function(b) {
                return Math.floor(b / a) * a
            },
            ceil: function(b) {
                return Math.ceil(b / a) * a
            }
        };
        return function() {
            return b
        }
    }
    function $d(a, b) {
        function c(b) {
            return a(d(b))
        }
        var d = _d(b)
          , e = _d(1 / b);
        return c.invert = function(b) {
            return e(a.invert(b))
        }
        ,
        c.domain = function(b) {
            return arguments.length ? (a.domain(b.map(d)),
            c) : a.domain().map(e)
        }
        ,
        c.ticks = function(a) {
            return Sd(c.domain(), a)
        }
        ,
        c.tickFormat = function(a, b) {
            return Td(c.domain(), a, b)
        }
        ,
        c.nice = function() {
            return c.domain(Md(c.domain(), Qd))
        }
        ,
        c.exponent = function(a) {
            if (!arguments.length)
                return b;
            var f = c.domain();
            return d = _d(b = a),
            e = _d(1 / b),
            c.domain(f)
        }
        ,
        c.copy = function() {
            return $d(a.copy(), b)
        }
        ,
        Pd(c, a)
    }
    function _d(a) {
        return function(b) {
            return 0 > b ? -Math.pow(-b, a) : Math.pow(b, a)
        }
    }
    function ae(a, b) {
        function c(b) {
            return g[((e.get(b) || e.set(b, a.push(b))) - 1) % g.length]
        }
        function d(b, c) {
            return hf.range(a.length).map(function(a) {
                return b + c * a
            })
        }
        var e, g, h;
        return c.domain = function(d) {
            if (!arguments.length)
                return a;
            a = [],
            e = new f;
            for (var g, h = -1, i = d.length; ++h < i; )
                e.has(g = d[h]) || e.set(g, a.push(g));
            return c[b.t].apply(c, b.a)
        }
        ,
        c.range = function(a) {
            return arguments.length ? (g = a,
            h = 0,
            b = {
                t: "range",
                a: arguments
            },
            c) : g
        }
        ,
        c.rangePoints = function(e, f) {
            arguments.length < 2 && (f = 0);
            var i = e[0]
              , j = e[1]
              , k = (j - i) / (Math.max(1, a.length - 1) + f);
            return g = d(a.length < 2 ? (i + j) / 2 : i + k * f / 2, k),
            h = 0,
            b = {
                t: "rangePoints",
                a: arguments
            },
            c
        }
        ,
        c.rangeBands = function(e, f, i) {
            arguments.length < 2 && (f = 0),
            arguments.length < 3 && (i = f);
            var j = e[1] < e[0]
              , k = e[j - 0]
              , l = e[1 - j]
              , m = (l - k) / (a.length - f + 2 * i);
            return g = d(k + m * i, m),
            j && g.reverse(),
            h = m * (1 - f),
            b = {
                t: "rangeBands",
                a: arguments
            },
            c
        }
        ,
        c.rangeRoundBands = function(e, f, i) {
            arguments.length < 2 && (f = 0),
            arguments.length < 3 && (i = f);
            var j = e[1] < e[0]
              , k = e[j - 0]
              , l = e[1 - j]
              , m = Math.floor((l - k) / (a.length - f + 2 * i))
              , n = l - k - (a.length - f) * m;
            return g = d(k + Math.round(n / 2), m),
            j && g.reverse(),
            h = Math.round(m * (1 - f)),
            b = {
                t: "rangeRoundBands",
                a: arguments
            },
            c
        }
        ,
        c.rangeBand = function() {
            return h
        }
        ,
        c.rangeExtent = function() {
            return Jd(b.a[0])
        }
        ,
        c.copy = function() {
            return ae(a, b)
        }
        ,
        c.domain(a)
    }
    function be(a, b) {
        function c() {
            var c = 0
              , f = b.length;
            for (e = []; ++c < f; )
                e[c - 1] = hf.quantile(a, c / f);
            return d
        }
        function d(a) {
            return isNaN(a = +a) ? NaN : b[hf.bisect(e, a)]
        }
        var e;
        return d.domain = function(b) {
            return arguments.length ? (a = b.filter(function(a) {
                return !isNaN(a)
            }).sort(hf.ascending),
            c()) : a
        }
        ,
        d.range = function(a) {
            return arguments.length ? (b = a,
            c()) : b
        }
        ,
        d.quantiles = function() {
            return e
        }
        ,
        d.copy = function() {
            return be(a, b)
        }
        ,
        c()
    }
    function ce(a, b, c) {
        function d(b) {
            return c[Math.max(0, Math.min(g, Math.floor(f * (b - a))))]
        }
        function e() {
            return f = c.length / (b - a),
            g = c.length - 1,
            d
        }
        var f, g;
        return d.domain = function(c) {
            return arguments.length ? (a = +c[0],
            b = +c[c.length - 1],
            e()) : [a, b]
        }
        ,
        d.range = function(a) {
            return arguments.length ? (c = a,
            e()) : c
        }
        ,
        d.copy = function() {
            return ce(a, b, c)
        }
        ,
        e()
    }
    function de(a, b) {
        function c(c) {
            return b[hf.bisect(a, c)]
        }
        return c.domain = function(b) {
            return arguments.length ? (a = b,
            c) : a
        }
        ,
        c.range = function(a) {
            return arguments.length ? (b = a,
            c) : b
        }
        ,
        c.copy = function() {
            return de(a, b)
        }
        ,
        c
    }
    function ee(a) {
        function b(a) {
            return +a
        }
        return b.invert = b,
        b.domain = b.range = function(c) {
            return arguments.length ? (a = c.map(b),
            b) : a
        }
        ,
        b.ticks = function(b) {
            return Sd(a, b)
        }
        ,
        b.tickFormat = function(b, c) {
            return Td(a, b, c)
        }
        ,
        b.copy = function() {
            return ee(a)
        }
        ,
        b
    }
    function fe(a) {
        return a.innerRadius
    }
    function ge(a) {
        return a.outerRadius
    }
    function he(a) {
        return a.startAngle
    }
    function ie(a) {
        return a.endAngle
    }
    function je(a) {
        for (var b, c, d, e = -1, f = a.length; ++e < f; )
            b = a[e],
            c = b[0],
            d = b[1] + _g,
            b[0] = c * Math.cos(d),
            b[1] = c * Math.sin(d);
        return a
    }
    function ke(a) {
        function b(b) {
            function i() {
                p.push("M", h(a(r), l), k, j(a(q.reverse()), l), "Z")
            }
            for (var m, n, o, p = [], q = [], r = [], s = -1, t = b.length, u = ka(c), v = ka(e), w = c === d ? function() {
                return n
            }
             : ka(d), x = e === f ? function() {
                return o
            }
             : ka(f); ++s < t; )
                g.call(this, m = b[s], s) ? (q.push([n = +u.call(this, m, s), o = +v.call(this, m, s)]),
                r.push([+w.call(this, m, s), +x.call(this, m, s)])) : q.length && (i(),
                q = [],
                r = []);
            return q.length && i(),
            p.length ? p.join("") : null 
        }
        var c = Hb
          , d = Hb
          , e = 0
          , f = Ib
          , g = Ia
          , h = Jb
          , i = h.key
          , j = h
          , k = "L"
          , l = .7;
        return b.x = function(a) {
            return arguments.length ? (c = d = a,
            b) : d
        }
        ,
        b.x0 = function(a) {
            return arguments.length ? (c = a,
            b) : c
        }
        ,
        b.x1 = function(a) {
            return arguments.length ? (d = a,
            b) : d
        }
        ,
        b.y = function(a) {
            return arguments.length ? (e = f = a,
            b) : f
        }
        ,
        b.y0 = function(a) {
            return arguments.length ? (e = a,
            b) : e
        }
        ,
        b.y1 = function(a) {
            return arguments.length ? (f = a,
            b) : f
        }
        ,
        b.defined = function(a) {
            return arguments.length ? (g = a,
            b) : g
        }
        ,
        b.interpolate = function(a) {
            return arguments.length ? (i = "function" == typeof a ? h = a : (h = Hg.get(a) || Jb).key,
            j = h.reverse || h,
            k = h.closed ? "M" : "L",
            b) : i
        }
        ,
        b.tension = function(a) {
            return arguments.length ? (l = a,
            b) : l
        }
        ,
        b
    }
    function le(a) {
        return a.radius
    }
    function me(a) {
        return [a.x, a.y]
    }
    function ne(a) {
        return function() {
            var b = a.apply(this, arguments)
              , c = b[0]
              , d = b[1] + _g;
            return [c * Math.cos(d), c * Math.sin(d)]
        }
    }
    function oe() {
        return 64
    }
    function pe() {
        return "circle"
    }
    function qe(a) {
        var b = Math.sqrt(a / Kf);
        return "M0," + b + "A" + b + "," + b + " 0 1,1 0," + -b + "A" + b + "," + b + " 0 1,1 0," + b + "Z"
    }
    function re(a, b) {
        return uf(a, fh),
        a.id = b,
        a
    }
    function se(a, b, c, d) {
        var e = a.id;
        return I(a, "function" == typeof c ? function(a, f, g) {
            a.__transition__[e].tween.set(b, d(c.call(a, a.__data__, f, g)))
        }
         : (c = d(c),
        function(a) {
            a.__transition__[e].tween.set(b, c)
        }
        ))
    }
    function te(a) {
        return null  == a && (a = ""),
        function() {
            this.textContent = a
        }
    }
    function ue(a, b, c, d) {
        var e = a.__transition__ || (a.__transition__ = {
            active: 0,
            count: 0
        })
          , g = e[c];
        if (!g) {
            var h = d.time;
            return g = e[c] = {
                tween: new f,
                event: hf.dispatch("start", "end"),
                time: h,
                ease: d.ease,
                delay: d.delay,
                duration: d.duration
            },
            ++e.count,
            hf.timer(function(d) {
                function f(d) {
                    return e.active > c ? j() : (e.active = c,
                    m.start.call(a, k, b),
                    g.tween.forEach(function(c, d) {
                        (d = d.call(a, k, b)) && p.push(d)
                    }),
                    i(d) || hf.timer(i, 0, h),
                    1)
                }
                function i(d) {
                    if (e.active !== c)
                        return j();
                    for (var f = (d - n) / o, g = l(f), h = p.length; h > 0; )
                        p[--h].call(a, g);
                    return f >= 1 ? (j(),
                    m.end.call(a, k, b),
                    1) : void 0
                }
                function j() {
                    return --e.count ? delete e[c] : delete a.__transition__,
                    1
                }
                var k = a.__data__
                  , l = g.ease
                  , m = g.event
                  , n = g.delay
                  , o = g.duration
                  , p = [];
                return d >= n ? f(d) : hf.timer(f, n, h),
                1
            }, 0, h),
            g
        }
    }
    function ve(a, b) {
        a.attr("transform", function(a) {
            return "translate(" + b(a) + ",0)"
        })
    }
    function we(a, b) {
        a.attr("transform", function(a) {
            return "translate(0," + b(a) + ")"
        })
    }
    function xe(a, b, c) {
        if (d = [],
        c && b.length > 1) {
            for (var d, e, f, g = Jd(a.domain()), h = -1, i = b.length, j = (b[1] - b[0]) / ++c; ++h < i; )
                for (e = c; --e > 0; )
                    (f = +b[h] - e * j) >= g[0] && d.push(f);
            for (--h,
            e = 0; ++e < c && (f = +b[h] + e * j) < g[1]; )
                d.push(f)
        }
        return d
    }
    function ye() {
        this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
    }
    function ze(a, b, c) {
        function d(b) {
            var c = a(b)
              , d = f(c, 1);
            return d - b > b - c ? c : d
        }
        function e(c) {
            return b(c = a(new mh(c - 1)), 1),
            c
        }
        function f(a, c) {
            return b(a = new mh(+a), c),
            a
        }
        function g(a, d, f) {
            var g = e(a)
              , h = [];
            if (f > 1)
                for (; d > g; )
                    c(g) % f || h.push(new Date(+g)),
                    b(g, 1);
            else
                for (; d > g; )
                    h.push(new Date(+g)),
                    b(g, 1);
            return h
        }
        function h(a, b, c) {
            try {
                mh = ye;
                var d = new ye;
                return d._ = a,
                g(d, b, c)
            } finally {
                mh = Date
            }
        }
        a.floor = a,
        a.round = d,
        a.ceil = e,
        a.offset = f,
        a.range = g;
        var i = a.utc = Ae(a);
        return i.floor = i,
        i.round = Ae(d),
        i.ceil = Ae(e),
        i.offset = Ae(f),
        i.range = h,
        a
    }
    function Ae(a) {
        return function(b, c) {
            try {
                mh = ye;
                var d = new ye;
                return d._ = b,
                a(d, c)._
            } finally {
                mh = Date
            }
        }
    }
    function Be(a, b, c, d) {
        for (var e, f, g = 0, h = b.length, i = c.length; h > g; ) {
            if (d >= i)
                return -1;
            if (e = b.charCodeAt(g++),
            37 === e) {
                if (f = Eh[b.charAt(g++)],
                !f || (d = f(a, c, d)) < 0)
                    return -1
            } else if (e != c.charCodeAt(d++))
                return -1
        }
        return d
    }
    function Ce(a) {
        return RegExp("^(?:" + a.map(hf.requote).join("|") + ")", "i")
    }
    function De(a) {
        for (var b = new f, c = -1, d = a.length; ++c < d; )
            b.set(a[c].toLowerCase(), c);
        return b
    }
    function Ee(a, b, c) {
        a += "";
        var d = a.length;
        return c > d ? Array(c - d + 1).join(b) + a : a
    }
    function Fe(a, b, c) {
        xh.lastIndex = 0;
        var d = xh.exec(b.substring(c));
        return d ? c += d[0].length : -1
    }
    function Ge(a, b, c) {
        wh.lastIndex = 0;
        var d = wh.exec(b.substring(c));
        return d ? c += d[0].length : -1
    }
    function He(a, b, c) {
        Ah.lastIndex = 0;
        var d = Ah.exec(b.substring(c));
        return d ? (a.m = Bh.get(d[0].toLowerCase()),
        c += d[0].length) : -1
    }
    function Ie(a, b, c) {
        yh.lastIndex = 0;
        var d = yh.exec(b.substring(c));
        return d ? (a.m = zh.get(d[0].toLowerCase()),
        c += d[0].length) : -1
    }
    function Je(a, b, c) {
        return Be(a, "" + Dh.c, b, c)
    }
    function Ke(a, b, c) {
        return Be(a, "" + Dh.x, b, c)
    }
    function Le(a, b, c) {
        return Be(a, "" + Dh.X, b, c)
    }
    function Me(a, b, c) {
        Fh.lastIndex = 0;
        var d = Fh.exec(b.substring(c, c + 4));
        return d ? (a.y = +d[0],
        c += d[0].length) : -1
    }
    function Ne(a, b, c) {
        Fh.lastIndex = 0;
        var d = Fh.exec(b.substring(c, c + 2));
        return d ? (a.y = Oe(+d[0]),
        c += d[0].length) : -1
    }
    function Oe(a) {
        return a + (a > 68 ? 1900 : 2e3)
    }
    function Pe(a, b, c) {
        Fh.lastIndex = 0;
        var d = Fh.exec(b.substring(c, c + 2));
        return d ? (a.m = d[0] - 1,
        c += d[0].length) : -1
    }
    function Qe(a, b, c) {
        Fh.lastIndex = 0;
        var d = Fh.exec(b.substring(c, c + 2));
        return d ? (a.d = +d[0],
        c += d[0].length) : -1
    }
    function Re(a, b, c) {
        Fh.lastIndex = 0;
        var d = Fh.exec(b.substring(c, c + 2));
        return d ? (a.H = +d[0],
        c += d[0].length) : -1
    }
    function Se(a, b, c) {
        Fh.lastIndex = 0;
        var d = Fh.exec(b.substring(c, c + 2));
        return d ? (a.M = +d[0],
        c += d[0].length) : -1
    }
    function Te(a, b, c) {
        Fh.lastIndex = 0;
        var d = Fh.exec(b.substring(c, c + 2));
        return d ? (a.S = +d[0],
        c += d[0].length) : -1
    }
    function Ue(a, b, c) {
        Fh.lastIndex = 0;
        var d = Fh.exec(b.substring(c, c + 3));
        return d ? (a.L = +d[0],
        c += d[0].length) : -1
    }
    function Ve(a, b, c) {
        var d = Gh.get(b.substring(c, c += 2).toLowerCase());
        return null  == d ? -1 : (a.p = d,
        c)
    }
    function We(a) {
        var b = a.getTimezoneOffset()
          , c = b > 0 ? "-" : "+"
          , d = ~~(Math.abs(b) / 60)
          , e = Math.abs(b) % 60;
        return c + Ee(d, "0", 2) + Ee(e, "0", 2)
    }
    function Xe(a) {
        return a.toISOString()
    }
    function Ye(a, b, c) {
        function d(b) {
            return a(b)
        }
        return d.invert = function(b) {
            return Ze(a.invert(b))
        }
        ,
        d.domain = function(b) {
            return arguments.length ? (a.domain(b),
            d) : a.domain().map(Ze)
        }
        ,
        d.nice = function(a) {
            return d.domain(Md(d.domain(), function() {
                return a
            }))
        }
        ,
        d.ticks = function(c, e) {
            var f = Jd(d.domain());
            if ("function" != typeof c) {
                var g = f[1] - f[0]
                  , h = g / c
                  , i = hf.bisect(Ih, h);
                if (i == Ih.length)
                    return b.year(f, c);
                if (!i)
                    return a.ticks(c).map(Ze);
                Math.log(h / Ih[i - 1]) < Math.log(Ih[i] / h) && --i,
                c = b[i],
                e = c[1],
                c = c[0].range
            }
            return c(f[0], new Date(+f[1] + 1), e)
        }
        ,
        d.tickFormat = function() {
            return c
        }
        ,
        d.copy = function() {
            return Ye(a.copy(), b, c)
        }
        ,
        Pd(d, a)
    }
    function Ze(a) {
        return new Date(a)
    }
    function $e(a) {
        return function(b) {
            for (var c = a.length - 1, d = a[c]; !d[1](b); )
                d = a[--c];
            return d[0](b)
        }
    }
    function _e(a) {
        var b = new Date(a,0,1);
        return b.setFullYear(a),
        b
    }
    function af(a) {
        var b = a.getFullYear()
          , c = _e(b)
          , d = _e(b + 1);
        return b + (a - c) / (d - c)
    }
    function bf(a) {
        var b = new Date(Date.UTC(a, 0, 1));
        return b.setUTCFullYear(a),
        b
    }
    function cf(a) {
        var b = a.getUTCFullYear()
          , c = bf(b)
          , d = bf(b + 1);
        return b + (a - c) / (d - c)
    }
    function df(a) {
        return a.responseText
    }
    function ef(a) {
        return JSON.parse(a.responseText)
    }
    function ff(a) {
        var b = jf.createRange();
        return b.selectNode(jf.body),
        b.createContextualFragment(a.responseText)
    }
    function gf(a) {
        return a.responseXML
    }
    var hf = {
        version: "3.1.6"
    };
    Date.now || (Date.now = function() {
        return +new Date
    }
    );
    var jf = document
      , kf = window;
    try {
        jf.createElement("div").style.setProperty("opacity", 0, "")
    } catch (lf) {
        var mf = kf.CSSStyleDeclaration.prototype
          , nf = mf.setProperty;
        mf.setProperty = function(a, b, c) {
            nf.call(this, a, b + "", c)
        }
    }
    hf.ascending = function(a, b) {
        return b > a ? -1 : a > b ? 1 : a >= b ? 0 : NaN
    }
    ,
    hf.descending = function(a, b) {
        return a > b ? -1 : b > a ? 1 : b >= a ? 0 : NaN
    }
    ,
    hf.min = function(a, b) {
        var c, d, e = -1, f = a.length;
        if (1 === arguments.length) {
            for (; ++e < f && (null  == (c = a[e]) || c != c); )
                c = void 0;
            for (; ++e < f; )
                null  != (d = a[e]) && c > d && (c = d)
        } else {
            for (; ++e < f && (null  == (c = b.call(a, a[e], e)) || c != c); )
                c = void 0;
            for (; ++e < f; )
                null  != (d = b.call(a, a[e], e)) && c > d && (c = d)
        }
        return c
    }
    ,
    hf.max = function(a, b) {
        var c, d, e = -1, f = a.length;
        if (1 === arguments.length) {
            for (; ++e < f && (null  == (c = a[e]) || c != c); )
                c = void 0;
            for (; ++e < f; )
                null  != (d = a[e]) && d > c && (c = d)
        } else {
            for (; ++e < f && (null  == (c = b.call(a, a[e], e)) || c != c); )
                c = void 0;
            for (; ++e < f; )
                null  != (d = b.call(a, a[e], e)) && d > c && (c = d)
        }
        return c
    }
    ,
    hf.extent = function(a, b) {
        var c, d, e, f = -1, g = a.length;
        if (1 === arguments.length) {
            for (; ++f < g && (null  == (c = e = a[f]) || c != c); )
                c = e = void 0;
            for (; ++f < g; )
                null  != (d = a[f]) && (c > d && (c = d),
                d > e && (e = d))
        } else {
            for (; ++f < g && (null  == (c = e = b.call(a, a[f], f)) || c != c); )
                c = void 0;
            for (; ++f < g; )
                null  != (d = b.call(a, a[f], f)) && (c > d && (c = d),
                d > e && (e = d))
        }
        return [c, e]
    }
    ,
    hf.sum = function(a, b) {
        var c, d = 0, e = a.length, f = -1;
        if (1 === arguments.length)
            for (; ++f < e; )
                isNaN(c = +a[f]) || (d += c);
        else
            for (; ++f < e; )
                isNaN(c = +b.call(a, a[f], f)) || (d += c);
        return d
    }
    ,
    hf.mean = function(b, c) {
        var d, e = b.length, f = 0, g = -1, h = 0;
        if (1 === arguments.length)
            for (; ++g < e; )
                a(d = b[g]) && (f += (d - f) / ++h);
        else
            for (; ++g < e; )
                a(d = c.call(b, b[g], g)) && (f += (d - f) / ++h);
        return h ? f : void 0
    }
    ,
    hf.quantile = function(a, b) {
        var c = (a.length - 1) * b + 1
          , d = Math.floor(c)
          , e = +a[d - 1]
          , f = c - d;
        return f ? e + f * (a[d] - e) : e
    }
    ,
    hf.median = function(b, c) {
        return arguments.length > 1 && (b = b.map(c)),
        b = b.filter(a),
        b.length ? hf.quantile(b.sort(hf.ascending), .5) : void 0
    }
    ,
    hf.bisector = function(a) {
        return {
            left: function(b, c, d, e) {
                for (arguments.length < 3 && (d = 0),
                arguments.length < 4 && (e = b.length); e > d; ) {
                    var f = d + e >>> 1;
                    a.call(b, b[f], f) < c ? d = f + 1 : e = f
                }
                return d
            },
            right: function(b, c, d, e) {
                for (arguments.length < 3 && (d = 0),
                arguments.length < 4 && (e = b.length); e > d; ) {
                    var f = d + e >>> 1;
                    c < a.call(b, b[f], f) ? e = f : d = f + 1
                }
                return d
            }
        }
    }
    ;
    var of = hf.bisector(function(a) {
        return a
    });
    hf.bisectLeft = of.left,
    hf.bisect = hf.bisectRight = of.right,
    hf.shuffle = function(a) {
        for (var b, c, d = a.length; d; )
            c = Math.random() * d-- | 0,
            b = a[d],
            a[d] = a[c],
            a[c] = b;
        return a
    }
    ,
    hf.permute = function(a, b) {
        for (var c = [], d = -1, e = b.length; ++d < e; )
            c[d] = a[b[d]];
        return c
    }
    ,
    hf.zip = function() {
        if (!(e = arguments.length))
            return [];
        for (var a = -1, b = hf.min(arguments, c), d = Array(b); ++a < b; )
            for (var e, f = -1, g = d[a] = Array(e); ++f < e; )
                g[f] = arguments[f][a];
        return d
    }
    ,
    hf.transpose = function(a) {
        return hf.zip.apply(hf, a)
    }
    ,
    hf.keys = function(a) {
        var b = [];
        for (var c in a)
            b.push(c);
        return b
    }
    ,
    hf.values = function(a) {
        var b = [];
        for (var c in a)
            b.push(a[c]);
        return b
    }
    ,
    hf.entries = function(a) {
        var b = [];
        for (var c in a)
            b.push({
                key: c,
                value: a[c]
            });
        return b
    }
    ,
    hf.merge = function(a) {
        return Array.prototype.concat.apply([], a)
    }
    ,
    hf.range = function(a, b, c) {
        if (arguments.length < 3 && (c = 1,
        arguments.length < 2 && (b = a,
        a = 0)),
        1 / 0 === (b - a) / c)
            throw Error("infinite range");
        var e, f = [], g = d(Math.abs(c)), h = -1;
        if (a *= g,
        b *= g,
        c *= g,
        0 > c)
            for (; (e = a + c * ++h) > b; )
                f.push(e / g);
        else
            for (; (e = a + c * ++h) < b; )
                f.push(e / g);
        return f
    }
    ,
    hf.map = function(a) {
        var b = new f;
        for (var c in a)
            b.set(c, a[c]);
        return b
    }
    ,
    e(f, {
        has: function(a) {
            return pf + a in this
        },
        get: function(a) {
            return this[pf + a]
        },
        set: function(a, b) {
            return this[pf + a] = b
        },
        remove: function(a) {
            return a = pf + a,
            a in this && delete this[a]
        },
        keys: function() {
            var a = [];
            return this.forEach(function(b) {
                a.push(b)
            }),
            a
        },
        values: function() {
            var a = [];
            return this.forEach(function(b, c) {
                a.push(c)
            }),
            a
        },
        entries: function() {
            var a = [];
            return this.forEach(function(b, c) {
                a.push({
                    key: b,
                    value: c
                })
            }),
            a
        },
        forEach: function(a) {
            for (var b in this)
                b.charCodeAt(0) === qf && a.call(this, b.substring(1), this[b])
        }
    });
    var pf = "\x00"
      , qf = pf.charCodeAt(0);
    hf.nest = function() {
        function a(b, h, i) {
            if (i >= g.length)
                return d ? d.call(e, h) : c ? h.sort(c) : h;
            for (var j, k, l, m, n = -1, o = h.length, p = g[i++], q = new f; ++n < o; )
                (m = q.get(j = p(k = h[n]))) ? m.push(k) : q.set(j, [k]);
            return b ? (k = b(),
            l = function(c, d) {
                k.set(c, a(b, d, i))
            }
            ) : (k = {},
            l = function(c, d) {
                k[c] = a(b, d, i)
            }
            ),
            q.forEach(l),
            k
        }
        function b(a, c) {
            if (c >= g.length)
                return a;
            var d = []
              , e = h[c++];
            return a.forEach(function(a, e) {
                d.push({
                    key: a,
                    values: b(e, c)
                })
            }),
            e ? d.sort(function(a, b) {
                return e(a.key, b.key)
            }) : d
        }
        var c, d, e = {}, g = [], h = [];
        return e.map = function(b, c) {
            return a(c, b, 0)
        }
        ,
        e.entries = function(c) {
            return b(a(hf.map, c, 0), 0)
        }
        ,
        e.key = function(a) {
            return g.push(a),
            e
        }
        ,
        e.sortKeys = function(a) {
            return h[g.length - 1] = a,
            e
        }
        ,
        e.sortValues = function(a) {
            return c = a,
            e
        }
        ,
        e.rollup = function(a) {
            return d = a,
            e
        }
        ,
        e
    }
    ,
    hf.set = function(a) {
        var b = new g;
        if (a)
            for (var c = 0; c < a.length; c++)
                b.add(a[c]);
        return b
    }
    ,
    e(g, {
        has: function(a) {
            return pf + a in this
        },
        add: function(a) {
            return this[pf + a] = !0,
            a
        },
        remove: function(a) {
            return a = pf + a,
            a in this && delete this[a]
        },
        values: function() {
            var a = [];
            return this.forEach(function(b) {
                a.push(b)
            }),
            a
        },
        forEach: function(a) {
            for (var b in this)
                b.charCodeAt(0) === qf && a.call(this, b.substring(1))
        }
    }),
    hf.behavior = {},
    hf.rebind = function(a, b) {
        for (var c, d = 1, e = arguments.length; ++d < e; )
            a[c = arguments[d]] = h(a, b, b[c]);
        return a
    }
    ,
    hf.dispatch = function() {
        for (var a = new i, b = -1, c = arguments.length; ++b < c; )
            a[arguments[b]] = j(a);
        return a
    }
    ,
    i.prototype.on = function(a, b) {
        var c = a.indexOf(".")
          , d = "";
        if (c >= 0 && (d = a.substring(c + 1),
        a = a.substring(0, c)),
        a)
            return arguments.length < 2 ? this[a].on(d) : this[a].on(d, b);
        if (2 === arguments.length) {
            if (null  == b)
                for (a in this)
                    this.hasOwnProperty(a) && this[a].on(d, null );
            return this
        }
    }
    ,
    hf.event = null ,
    hf.mouse = function(a) {
        return o(a, l())
    }
    ;
    var rf = /WebKit/.test(kf.navigator.userAgent) ? -1 : 0
      , sf = q;
    try {
        sf(jf.documentElement.childNodes)[0].nodeType
    } catch (tf) {
        sf = p
    }
    var uf = [].__proto__ ? function(a, b) {
        a.__proto__ = b
    }
     : function(a, b) {
        for (var c in b)
            a[c] = b[c]
    }
    ;
    hf.touches = function(a, b) {
        return arguments.length < 2 && (b = l().touches),
        b ? sf(b).map(function(b) {
            var c = o(a, b);
            return c.identifier = b.identifier,
            c
        }) : []
    }
    ,
    hf.behavior.drag = function() {
        function a() {
            this.on("mousedown.drag", b).on("touchstart.drag", b)
        }
        function b() {
            function a() {
                var a = g.parentNode;
                return null  != j ? hf.touches(a).filter(function(a) {
                    return a.identifier === j
                })[0] : hf.mouse(a)
            }
            function b() {
                if (!g.parentNode)
                    return e();
                var b = a()
                  , c = b[0] - l[0]
                  , d = b[1] - l[1];
                n |= c | d,
                l = b,
                k(),
                h({
                    type: "drag",
                    x: b[0] + f[0],
                    y: b[1] + f[1],
                    dx: c,
                    dy: d
                })
            }
            function e() {
                h({
                    type: "dragend"
                }),
                n && (k(),
                hf.event.target === i && m(o, "click")),
                o.on(null  != j ? "touchmove.drag-" + j : "mousemove.drag", null ).on(null  != j ? "touchend.drag-" + j : "mouseup.drag", null )
            }
            var f, g = this, h = c.of(g, arguments), i = hf.event.target, j = hf.event.touches ? hf.event.changedTouches[0].identifier : null , l = a(), n = 0, o = hf.select(kf).on(null  != j ? "touchmove.drag-" + j : "mousemove.drag", b).on(null  != j ? "touchend.drag-" + j : "mouseup.drag", e, !0);
            d ? (f = d.apply(g, arguments),
            f = [f.x - l[0], f.y - l[1]]) : f = [0, 0],
            null  == j && k(),
            h({
                type: "dragstart"
            })
        }
        var c = n(a, "drag", "dragstart", "dragend")
          , d = null ;
        return a.origin = function(b) {
            return arguments.length ? (d = b,
            a) : d
        }
        ,
        hf.rebind(a, c, "on")
    }
    ;
    var vf = function(a, b) {
        return b.querySelector(a)
    }
      , wf = function(a, b) {
        return b.querySelectorAll(a)
    }
      , xf = jf.documentElement
      , yf = xf.matchesSelector || xf.webkitMatchesSelector || xf.mozMatchesSelector || xf.msMatchesSelector || xf.oMatchesSelector
      , zf = function(a, b) {
        return yf.call(a, b)
    }
    ;
    "function" == typeof Sizzle && (vf = function(a, b) {
        return Sizzle(a, b)[0] || null 
    }
    ,
    wf = function(a, b) {
        return Sizzle.uniqueSort(Sizzle(a, b));
    }
    ,
    zf = Sizzle.matchesSelector),
    hf.selection = function() {
        return Ff
    }
    ;
    var Af = hf.selection.prototype = [];
    Af.select = function(a) {
        var b, c, d, e, f = [];
        "function" != typeof a && (a = s(a));
        for (var g = -1, h = this.length; ++g < h; ) {
            f.push(b = []),
            b.parentNode = (d = this[g]).parentNode;
            for (var i = -1, j = d.length; ++i < j; )
                (e = d[i]) ? (b.push(c = a.call(e, e.__data__, i)),
                c && "__data__" in e && (c.__data__ = e.__data__)) : b.push(null )
        }
        return r(f)
    }
    ,
    Af.selectAll = function(a) {
        var b, c, d = [];
        "function" != typeof a && (a = t(a));
        for (var e = -1, f = this.length; ++e < f; )
            for (var g = this[e], h = -1, i = g.length; ++h < i; )
                (c = g[h]) && (d.push(b = sf(a.call(c, c.__data__, h))),
                b.parentNode = c);
        return r(d)
    }
    ;
    var Bf = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    };
    hf.ns = {
        prefix: Bf,
        qualify: function(a) {
            var b = a.indexOf(":")
              , c = a;
            return b >= 0 && (c = a.substring(0, b),
            a = a.substring(b + 1)),
            Bf.hasOwnProperty(c) ? {
                space: Bf[c],
                local: a
            } : a
        }
    },
    Af.attr = function(a, b) {
        if (arguments.length < 2) {
            if ("string" == typeof a) {
                var c = this.node();
                return a = hf.ns.qualify(a),
                a.local ? c.getAttributeNS(a.space, a.local) : c.getAttribute(a)
            }
            for (b in a)
                this.each(u(b, a[b]));
            return this
        }
        return this.each(u(a, b))
    }
    ,
    hf.requote = function(a) {
        return a.replace(Cf, "\\$&")
    }
    ;
    var Cf = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
    Af.classed = function(a, b) {
        if (arguments.length < 2) {
            if ("string" == typeof a) {
                var c = this.node()
                  , d = (a = a.trim().split(/^|\s+/g)).length
                  , e = -1;
                if (b = c.classList) {
                    for (; ++e < d; )
                        if (!b.contains(a[e]))
                            return !1
                } else
                    for (b = c.getAttribute("class"); ++e < d; )
                        if (!w(a[e]).test(b))
                            return !1;
                return !0
            }
            for (b in a)
                this.each(x(b, a[b]));
            return this
        }
        return this.each(x(a, b))
    }
    ,
    Af.style = function(a, b, c) {
        var d = arguments.length;
        if (3 > d) {
            if ("string" != typeof a) {
                2 > d && (b = "");
                for (c in a)
                    this.each(z(c, a[c], b));
                return this
            }
            if (2 > d)
                return kf.getComputedStyle(this.node(), null ).getPropertyValue(a);
            c = ""
        }
        return this.each(z(a, b, c))
    }
    ,
    Af.property = function(a, b) {
        if (arguments.length < 2) {
            if ("string" == typeof a)
                return this.node()[a];
            for (b in a)
                this.each(A(b, a[b]));
            return this
        }
        return this.each(A(a, b))
    }
    ,
    Af.text = function(a) {
        return arguments.length ? this.each("function" == typeof a ? function() {
            var b = a.apply(this, arguments);
            this.textContent = null  == b ? "" : b
        }
         : null  == a ? function() {
            this.textContent = ""
        }
         : function() {
            this.textContent = a
        }
        ) : this.node().textContent
    }
    ,
    Af.html = function(a) {
        return arguments.length ? this.each("function" == typeof a ? function() {
            var b = a.apply(this, arguments);
            this.innerHTML = null  == b ? "" : b
        }
         : null  == a ? function() {
            this.innerHTML = ""
        }
         : function() {
            this.innerHTML = a
        }
        ) : this.node().innerHTML
    }
    ,
    Af.append = function(a) {
        function b() {
            return this.appendChild(jf.createElementNS(this.namespaceURI, a))
        }
        function c() {
            return this.appendChild(jf.createElementNS(a.space, a.local))
        }
        return a = hf.ns.qualify(a),
        this.select(a.local ? c : b)
    }
    ,
    Af.insert = function(a, b) {
        function c(c, d) {
            return this.insertBefore(jf.createElementNS(this.namespaceURI, a), b.call(this, c, d))
        }
        function d(c, d) {
            return this.insertBefore(jf.createElementNS(a.space, a.local), b.call(this, c, d))
        }
        return a = hf.ns.qualify(a),
        "function" != typeof b && (b = s(b)),
        this.select(a.local ? d : c)
    }
    ,
    Af.remove = function() {
        return this.each(function() {
            var a = this.parentNode;
            a && a.removeChild(this)
        })
    }
    ,
    Af.data = function(a, b) {
        function c(a, c) {
            var d, e, g, h = a.length, l = c.length, m = Math.min(h, l), n = Array(l), o = Array(l), p = Array(h);
            if (b) {
                var q, r = new f, s = new f, t = [];
                for (d = -1; ++d < h; )
                    q = b.call(e = a[d], e.__data__, d),
                    r.has(q) ? p[d] = e : r.set(q, e),
                    t.push(q);
                for (d = -1; ++d < l; )
                    q = b.call(c, g = c[d], d),
                    (e = r.get(q)) ? (n[d] = e,
                    e.__data__ = g) : s.has(q) || (o[d] = B(g)),
                    s.set(q, g),
                    r.remove(q);
                for (d = -1; ++d < h; )
                    r.has(t[d]) && (p[d] = a[d])
            } else {
                for (d = -1; ++d < m; )
                    e = a[d],
                    g = c[d],
                    e ? (e.__data__ = g,
                    n[d] = e) : o[d] = B(g);
                for (; l > d; ++d)
                    o[d] = B(c[d]);
                for (; h > d; ++d)
                    p[d] = a[d]
            }
            o.update = n,
            o.parentNode = n.parentNode = p.parentNode = a.parentNode,
            i.push(o),
            j.push(n),
            k.push(p)
        }
        var d, e, g = -1, h = this.length;
        if (!arguments.length) {
            for (a = Array(h = (d = this[0]).length); ++g < h; )
                (e = d[g]) && (a[g] = e.__data__);
            return a
        }
        var i = J([])
          , j = r([])
          , k = r([]);
        if ("function" == typeof a)
            for (; ++g < h; )
                c(d = this[g], a.call(d, d.parentNode.__data__, g));
        else
            for (; ++g < h; )
                c(d = this[g], a);
        return j.enter = function() {
            return i
        }
        ,
        j.exit = function() {
            return k
        }
        ,
        j
    }
    ,
    Af.datum = function(a) {
        return arguments.length ? this.property("__data__", a) : this.property("__data__")
    }
    ,
    Af.filter = function(a) {
        var b, c, d, e = [];
        "function" != typeof a && (a = C(a));
        for (var f = 0, g = this.length; g > f; f++) {
            e.push(b = []),
            b.parentNode = (c = this[f]).parentNode;
            for (var h = 0, i = c.length; i > h; h++)
                (d = c[h]) && a.call(d, d.__data__, h) && b.push(d)
        }
        return r(e)
    }
    ,
    Af.order = function() {
        for (var a = -1, b = this.length; ++a < b; )
            for (var c, d = this[a], e = d.length - 1, f = d[e]; --e >= 0; )
                (c = d[e]) && (f && f !== c.nextSibling && f.parentNode.insertBefore(c, f),
                f = c);
        return this
    }
    ,
    Af.sort = function(a) {
        a = D.apply(this, arguments);
        for (var b = -1, c = this.length; ++b < c; )
            this[b].sort(a);
        return this.order()
    }
    ,
    Af.on = function(a, b, c) {
        var d = arguments.length;
        if (3 > d) {
            if ("string" != typeof a) {
                2 > d && (b = !1);
                for (c in a)
                    this.each(F(c, a[c], b));
                return this
            }
            if (2 > d)
                return (d = this.node()["__on" + a]) && d._;
            c = !1
        }
        return this.each(F(a, b, c))
    }
    ;
    var Df = hf.map({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    });
    Df.forEach(function(a) {
        "on" + a in jf && Df.remove(a)
    }),
    Af.each = function(a) {
        return I(this, function(b, c, d) {
            a.call(b, b.__data__, c, d)
        })
    }
    ,
    Af.call = function(a) {
        var b = sf(arguments);
        return a.apply(b[0] = this, b),
        this
    }
    ,
    Af.empty = function() {
        return !this.node()
    }
    ,
    Af.node = function() {
        for (var a = 0, b = this.length; b > a; a++)
            for (var c = this[a], d = 0, e = c.length; e > d; d++) {
                var f = c[d];
                if (f)
                    return f
            }
        return null 
    }
    ;
    var Ef = [];
    hf.selection.enter = J,
    hf.selection.enter.prototype = Ef,
    Ef.append = Af.append,
    Ef.insert = Af.insert,
    Ef.empty = Af.empty,
    Ef.node = Af.node,
    Ef.select = function(a) {
        for (var b, c, d, e, f, g = [], h = -1, i = this.length; ++h < i; ) {
            d = (e = this[h]).update,
            g.push(b = []),
            b.parentNode = e.parentNode;
            for (var j = -1, k = e.length; ++j < k; )
                (f = e[j]) ? (b.push(d[j] = c = a.call(e.parentNode, f.__data__, j)),
                c.__data__ = f.__data__) : b.push(null )
        }
        return r(g)
    }
    ,
    Af.transition = function() {
        var a, b, c = ch || ++gh, d = [], e = Object.create(hh);
        e.time = Date.now();
        for (var f = -1, g = this.length; ++f < g; ) {
            d.push(a = []);
            for (var h = this[f], i = -1, j = h.length; ++i < j; )
                (b = h[i]) && ue(b, i, c, e),
                a.push(b)
        }
        return re(d, c)
    }
    ,
    hf.select = function(a) {
        var b = ["string" == typeof a ? vf(a, jf) : a];
        return b.parentNode = xf,
        r([b])
    }
    ,
    hf.selectAll = function(a) {
        var b = sf("string" == typeof a ? wf(a, jf) : a);
        return b.parentNode = xf,
        r([b])
    }
    ;
    var Ff = hf.select(xf);
    hf.behavior.zoom = function() {
        function a() {
            this.on("mousedown.zoom", h).on("mousemove.zoom", j).on(If + ".zoom", i).on("dblclick.zoom", l).on("touchstart.zoom", o).on("touchmove.zoom", p).on("touchend.zoom", o)
        }
        function b(a) {
            return [(a[0] - x[0]) / y, (a[1] - x[1]) / y]
        }
        function c(a) {
            return [a[0] * y + x[0], a[1] * y + x[1]]
        }
        function d(a) {
            y = Math.max(z[0], Math.min(z[1], a))
        }
        function e(a, b) {
            b = c(b),
            x[0] += a[0] - b[0],
            x[1] += a[1] - b[1]
        }
        function f() {
            t && t.domain(s.range().map(function(a) {
                return (a - x[0]) / y
            }).map(s.invert)),
            v && v.domain(u.range().map(function(a) {
                return (a - x[1]) / y
            }).map(u.invert))
        }
        function g(a) {
            f(),
            hf.event.preventDefault(),
            a({
                type: "zoom",
                scale: y,
                translate: x
            })
        }
        function h() {
            function a() {
                i = 1,
                e(hf.mouse(d), l),
                g(f)
            }
            function c() {
                i && k(),
                j.on("mousemove.zoom", null ).on("mouseup.zoom", null ),
                i && hf.event.target === h && m(j, "click.zoom")
            }
            var d = this
              , f = A.of(d, arguments)
              , h = hf.event.target
              , i = 0
              , j = hf.select(kf).on("mousemove.zoom", a).on("mouseup.zoom", c)
              , l = b(hf.mouse(d));
            kf.focus(),
            k()
        }
        function i() {
            q || (q = b(hf.mouse(this))),
            d(Math.pow(2, .002 * Gf()) * y),
            e(hf.mouse(this), q),
            g(A.of(this, arguments))
        }
        function j() {
            q = null 
        }
        function l() {
            var a = hf.mouse(this)
              , c = b(a)
              , f = Math.log(y) / Math.LN2;
            d(Math.pow(2, hf.event.shiftKey ? Math.ceil(f) - 1 : Math.floor(f) + 1)),
            e(a, c),
            g(A.of(this, arguments))
        }
        function o() {
            var a = hf.touches(this)
              , c = Date.now();
            if (r = y,
            q = {},
            a.forEach(function(a) {
                q[a.identifier] = b(a)
            }),
            k(),
            1 === a.length) {
                if (500 > c - w) {
                    var f = a[0]
                      , h = b(a[0]);
                    d(2 * y),
                    e(f, h),
                    g(A.of(this, arguments))
                }
                w = c
            }
        }
        function p() {
            var a = hf.touches(this)
              , b = a[0]
              , c = q[b.identifier];
            if (f = a[1]) {
                var f, h = q[f.identifier];
                b = [(b[0] + f[0]) / 2, (b[1] + f[1]) / 2],
                c = [(c[0] + h[0]) / 2, (c[1] + h[1]) / 2],
                d(hf.event.scale * r)
            }
            e(b, c),
            w = null ,
            g(A.of(this, arguments))
        }
        var q, r, s, t, u, v, w, x = [0, 0], y = 1, z = Hf, A = n(a, "zoom");
        return a.translate = function(b) {
            return arguments.length ? (x = b.map(Number),
            f(),
            a) : x
        }
        ,
        a.scale = function(b) {
            return arguments.length ? (y = +b,
            f(),
            a) : y
        }
        ,
        a.scaleExtent = function(b) {
            return arguments.length ? (z = null  == b ? Hf : b.map(Number),
            a) : z
        }
        ,
        a.x = function(b) {
            return arguments.length ? (t = b,
            s = b.copy(),
            x = [0, 0],
            y = 1,
            a) : t
        }
        ,
        a.y = function(b) {
            return arguments.length ? (v = b,
            u = b.copy(),
            x = [0, 0],
            y = 1,
            a) : v
        }
        ,
        hf.rebind(a, A, "on")
    }
    ;
    var Gf, Hf = [0, 1 / 0], If = "onwheel" in jf ? (Gf = function() {
        return -hf.event.deltaY * (hf.event.deltaMode ? 120 : 1)
    }
    ,
    "wheel") : "onmousewheel" in jf ? (Gf = function() {
        return hf.event.wheelDelta
    }
    ,
    "mousewheel") : (Gf = function() {
        return -hf.event.detail
    }
    ,
    "MozMousePixelScroll");
    K.prototype.toString = function() {
        return this.rgb() + ""
    }
    ,
    hf.hsl = function(a, b, c) {
        return 1 === arguments.length ? a instanceof M ? L(a.h, a.s, a.l) : fa("" + a, ga, L) : L(+a, +b, +c)
    }
    ;
    var Jf = M.prototype = new K;
    Jf.brighter = function(a) {
        return a = Math.pow(.7, arguments.length ? a : 1),
        L(this.h, this.s, this.l / a)
    }
    ,
    Jf.darker = function(a) {
        return a = Math.pow(.7, arguments.length ? a : 1),
        L(this.h, this.s, a * this.l)
    }
    ,
    Jf.rgb = function() {
        return N(this.h, this.s, this.l)
    }
    ;
    var Kf = Math.PI
      , Lf = 1e-6
      , Mf = Kf / 180
      , Nf = 180 / Kf;
    hf.hcl = function(a, b, c) {
        return 1 === arguments.length ? a instanceof V ? U(a.h, a.c, a.l) : a instanceof Y ? $(a.l, a.a, a.b) : $((a = ha((a = hf.rgb(a)).r, a.g, a.b)).l, a.a, a.b) : U(+a, +b, +c)
    }
    ;
    var Of = V.prototype = new K;
    Of.brighter = function(a) {
        return U(this.h, this.c, Math.min(100, this.l + Pf * (arguments.length ? a : 1)))
    }
    ,
    Of.darker = function(a) {
        return U(this.h, this.c, Math.max(0, this.l - Pf * (arguments.length ? a : 1)))
    }
    ,
    Of.rgb = function() {
        return W(this.h, this.c, this.l).rgb()
    }
    ,
    hf.lab = function(a, b, c) {
        return 1 === arguments.length ? a instanceof Y ? X(a.l, a.a, a.b) : a instanceof V ? W(a.l, a.c, a.h) : ha((a = hf.rgb(a)).r, a.g, a.b) : X(+a, +b, +c)
    }
    ;
    var Pf = 18
      , Qf = .95047
      , Rf = 1
      , Sf = 1.08883
      , Tf = Y.prototype = new K;
    Tf.brighter = function(a) {
        return X(Math.min(100, this.l + Pf * (arguments.length ? a : 1)), this.a, this.b)
    }
    ,
    Tf.darker = function(a) {
        return X(Math.max(0, this.l - Pf * (arguments.length ? a : 1)), this.a, this.b)
    }
    ,
    Tf.rgb = function() {
        return Z(this.l, this.a, this.b)
    }
    ,
    hf.rgb = function(a, b, c) {
        return 1 === arguments.length ? a instanceof da ? ca(a.r, a.g, a.b) : fa("" + a, ca, N) : ca(~~a, ~~b, ~~c)
    }
    ;
    var Uf = da.prototype = new K;
    Uf.brighter = function(a) {
        a = Math.pow(.7, arguments.length ? a : 1);
        var b = this.r
          , c = this.g
          , d = this.b
          , e = 30;
        return b || c || d ? (b && e > b && (b = e),
        c && e > c && (c = e),
        d && e > d && (d = e),
        ca(Math.min(255, Math.floor(b / a)), Math.min(255, Math.floor(c / a)), Math.min(255, Math.floor(d / a)))) : ca(e, e, e)
    }
    ,
    Uf.darker = function(a) {
        return a = Math.pow(.7, arguments.length ? a : 1),
        ca(Math.floor(a * this.r), Math.floor(a * this.g), Math.floor(a * this.b))
    }
    ,
    Uf.hsl = function() {
        return ga(this.r, this.g, this.b)
    }
    ,
    Uf.toString = function() {
        return "#" + ea(this.r) + ea(this.g) + ea(this.b)
    }
    ;
    var Vf = hf.map({
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
    });
    Vf.forEach(function(a, b) {
        Vf.set(a, fa(b, ca, N))
    }),
    hf.functor = ka,
    hf.xhr = function(a, b, c) {
        function d() {
            var a = i.status;
            !a && i.responseText || a >= 200 && 300 > a || 304 === a ? f.load.call(e, h.call(e, i)) : f.error.call(e, i)
        }
        var e = {}
          , f = hf.dispatch("progress", "load", "error")
          , g = {}
          , h = la
          , i = new (kf.XDomainRequest && /^(http(s)?:)?\/\//.test(a) ? XDomainRequest : XMLHttpRequest);
        return "onload" in i ? i.onload = i.onerror = d : i.onreadystatechange = function() {
            i.readyState > 3 && d()
        }
        ,
        i.onprogress = function(a) {
            var b = hf.event;
            hf.event = a;
            try {
                f.progress.call(e, i)
            } finally {
                hf.event = b
            }
        }
        ,
        e.header = function(a, b) {
            return a = (a + "").toLowerCase(),
            arguments.length < 2 ? g[a] : (null  == b ? delete g[a] : g[a] = b + "",
            e)
        }
        ,
        e.mimeType = function(a) {
            return arguments.length ? (b = null  == a ? null  : a + "",
            e) : b
        }
        ,
        e.response = function(a) {
            return h = a,
            e
        }
        ,
        ["get", "post"].forEach(function(a) {
            e[a] = function() {
                return e.send.apply(e, [a].concat(sf(arguments)))
            }
        }),
        e.send = function(c, d, f) {
            if (2 === arguments.length && "function" == typeof d && (f = d,
            d = null ),
            i.open(c, a, !0),
            null  == b || "accept" in g || (g.accept = b + ",*/*"),
            i.setRequestHeader)
                for (var h in g)
                    i.setRequestHeader(h, g[h]);
            return null  != b && i.overrideMimeType && i.overrideMimeType(b),
            null  != f && e.on("error", f).on("load", function(a) {
                f(null , a)
            }),
            i.send(null  == d ? null  : d),
            e
        }
        ,
        e.abort = function() {
            return i.abort(),
            e
        }
        ,
        hf.rebind(e, f, "on"),
        2 === arguments.length && "function" == typeof b && (c = b,
        b = null ),
        null  == c ? e : e.get(ma(c))
    }
    ,
    hf.csv = na(",", "text/csv"),
    hf.tsv = na("	", "text/tab-separated-values");
    var Wf, Xf, Yf = 0, Zf = {}, $f = null ;
    hf.timer = function(a, b, c) {
        if (arguments.length < 3) {
            if (arguments.length < 2)
                b = 0;
            else if (!isFinite(b))
                return;
            c = Date.now()
        }
        var d = Zf[a.id];
        d && d.callback === a ? (d.then = c,
        d.delay = b) : Zf[a.id = ++Yf] = $f = {
            callback: a,
            then: c,
            delay: b,
            next: $f
        },
        Wf || (Xf = clearTimeout(Xf),
        Wf = 1,
        _f(oa))
    }
    ,
    hf.timer.flush = function() {
        for (var a, b = Date.now(), c = $f; c; )
            a = b - c.then,
            c.delay || (c.flush = c.callback(a)),
            c = c.next;
        pa()
    }
    ;
    var _f = kf.requestAnimationFrame || kf.webkitRequestAnimationFrame || kf.mozRequestAnimationFrame || kf.oRequestAnimationFrame || kf.msRequestAnimationFrame || function(a) {
        setTimeout(a, 17)
    }
      , ag = "."
      , bg = ","
      , cg = [3, 3]
      , dg = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(qa);
    hf.formatPrefix = function(a, b) {
        var c = 0;
        return a && (0 > a && (a *= -1),
        b && (a = hf.round(a, ra(a, b))),
        c = 1 + Math.floor(1e-12 + Math.log(a) / Math.LN10),
        c = Math.max(-24, Math.min(24, 3 * Math.floor((0 >= c ? c + 1 : c - 1) / 3)))),
        dg[8 + c / 3]
    }
    ,
    hf.round = function(a, b) {
        return b ? Math.round(a * (b = Math.pow(10, b))) / b : Math.round(a)
    }
    ,
    hf.format = function(a) {
        var b = eg.exec(a)
          , c = b[1] || " "
          , d = b[2] || ">"
          , e = b[3] || ""
          , f = b[4] || ""
          , g = b[5]
          , h = +b[6]
          , i = b[7]
          , j = b[8]
          , k = b[9]
          , l = 1
          , m = ""
          , n = !1;
        switch (j && (j = +j.substring(1)),
        (g || "0" === c && "=" === d) && (g = c = "0",
        d = "=",
        i && (h -= Math.floor((h - 1) / 4))),
        k) {
        case "n":
            i = !0,
            k = "g";
            break;
        case "%":
            l = 100,
            m = "%",
            k = "f";
            break;
        case "p":
            l = 100,
            m = "%",
            k = "r";
            break;
        case "b":
        case "o":
        case "x":
        case "X":
            f && (f = "0" + k.toLowerCase());
        case "c":
        case "d":
            n = !0,
            j = 0;
            break;
        case "s":
            l = -1,
            k = "r"
        }
        "#" === f && (f = ""),
        "r" != k || j || (k = "g"),
        null  != j && ("g" == k ? j = Math.max(1, Math.min(21, j)) : ("e" == k || "f" == k) && (j = Math.max(0, Math.min(20, j)))),
        k = fg.get(k) || sa;
        var o = g && i;
        return function(a) {
            if (n && a % 1)
                return "";
            var b = 0 > a || 0 === a && 0 > 1 / a ? (a = -a,
            "-") : e;
            if (0 > l) {
                var p = hf.formatPrefix(a, j);
                a = p.scale(a),
                m = p.symbol
            } else
                a *= l;
            a = k(a, j),
            !g && i && (a = gg(a));
            var q = f.length + a.length + (o ? 0 : b.length)
              , r = h > q ? Array(q = h - q + 1).join(c) : "";
            return o && (a = gg(r + a)),
            ag && a.replace(".", ag),
            b += f,
            ("<" === d ? b + a + r : ">" === d ? r + b + a : "^" === d ? r.substring(0, q >>= 1) + b + a + r.substring(q) : b + (o ? a : r + a)) + m
        }
    }
    ;
    var eg = /(?:([^{])?([<>=^]))?([+\- ])?(#)?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i
      , fg = hf.map({
        b: function(a) {
            return a.toString(2)
        },
        c: function(a) {
            return String.fromCharCode(a)
        },
        o: function(a) {
            return a.toString(8)
        },
        x: function(a) {
            return a.toString(16)
        },
        X: function(a) {
            return a.toString(16).toUpperCase()
        },
        g: function(a, b) {
            return a.toPrecision(b)
        },
        e: function(a, b) {
            return a.toExponential(b)
        },
        f: function(a, b) {
            return a.toFixed(b)
        },
        r: function(a, b) {
            return (a = hf.round(a, ra(a, b))).toFixed(Math.max(0, Math.min(20, ra(a * (1 + 1e-15), b))))
        }
    })
      , gg = la;
    if (cg) {
        var hg = cg.length;
        gg = function(a) {
            for (var b = a.lastIndexOf("."), c = b >= 0 ? "." + a.substring(b + 1) : (b = a.length,
            ""), d = [], e = 0, f = cg[0]; b > 0 && f > 0; )
                d.push(a.substring(b -= f, b + f)),
                f = cg[e = (e + 1) % hg];
            return d.reverse().join(bg || "") + c
        }
    }
    hf.geo = {},
    hf.geo.stream = function(a, b) {
        a && ig.hasOwnProperty(a.type) ? ig[a.type](a, b) : ta(a, b)
    }
    ;
    var ig = {
        Feature: function(a, b) {
            ta(a.geometry, b)
        },
        FeatureCollection: function(a, b) {
            for (var c = a.features, d = -1, e = c.length; ++d < e; )
                ta(c[d].geometry, b)
        }
    }
      , jg = {
        Sphere: function(a, b) {
            b.sphere()
        },
        Point: function(a, b) {
            var c = a.coordinates;
            b.point(c[0], c[1])
        },
        MultiPoint: function(a, b) {
            for (var c, d = a.coordinates, e = -1, f = d.length; ++e < f; )
                c = d[e],
                b.point(c[0], c[1])
        },
        LineString: function(a, b) {
            ua(a.coordinates, b, 0)
        },
        MultiLineString: function(a, b) {
            for (var c = a.coordinates, d = -1, e = c.length; ++d < e; )
                ua(c[d], b, 0)
        },
        Polygon: function(a, b) {
            va(a.coordinates, b)
        },
        MultiPolygon: function(a, b) {
            for (var c = a.coordinates, d = -1, e = c.length; ++d < e; )
                va(c[d], b)
        },
        GeometryCollection: function(a, b) {
            for (var c = a.geometries, d = -1, e = c.length; ++d < e; )
                ta(c[d], b)
        }
    };
    hf.geo.area = function(a) {
        return kg = 0,
        hf.geo.stream(a, ng),
        kg
    }
    ;
    var kg, lg, mg, ng = {
        sphere: function() {
            kg += 4 * Kf
        },
        point: E,
        lineStart: E,
        lineEnd: E,
        polygonStart: function() {
            lg = 1,
            mg = 0,
            ng.lineStart = wa
        },
        polygonEnd: function() {
            var a = 2 * Math.atan2(mg, lg);
            kg += 0 > a ? 4 * Kf + a : a,
            ng.lineStart = ng.lineEnd = ng.point = E
        }
    };
    hf.geo.bounds = xa(la),
    hf.geo.centroid = function(a) {
        og = pg = qg = rg = sg = 0,
        hf.geo.stream(a, tg);
        var b;
        return pg && Math.abs(b = Math.sqrt(qg * qg + rg * rg + sg * sg)) > Lf ? [Math.atan2(rg, qg) * Nf, Math.asin(Math.max(-1, Math.min(1, sg / b))) * Nf] : void 0
    }
    ;
    var og, pg, qg, rg, sg, tg = {
        sphere: function() {
            2 > og && (og = 2,
            pg = qg = rg = sg = 0)
        },
        point: ya,
        lineStart: Aa,
        lineEnd: Ba,
        polygonStart: function() {
            2 > og && (og = 2,
            pg = qg = rg = sg = 0),
            tg.lineStart = za
        },
        polygonEnd: function() {
            tg.lineStart = Aa
        }
    }, ug = Na(Ia, Sa, Ua), vg = 1e9;
    hf.geo.projection = $a,
    hf.geo.projectionMutator = _a,
    (hf.geo.equirectangular = function() {
        return $a(bb)
    }
    ).raw = bb.invert = bb,
    hf.geo.rotation = function(a) {
        function b(b) {
            return b = a(b[0] * Mf, b[1] * Mf),
            b[0] *= Nf,
            b[1] *= Nf,
            b
        }
        return a = cb(a[0] % 360 * Mf, a[1] * Mf, a.length > 2 ? a[2] * Mf : 0),
        b.invert = function(b) {
            return b = a.invert(b[0] * Mf, b[1] * Mf),
            b[0] *= Nf,
            b[1] *= Nf,
            b
        }
        ,
        b
    }
    ,
    hf.geo.circle = function() {
        function a() {
            var a = "function" == typeof d ? d.apply(this, arguments) : d
              , b = cb(-a[0] * Mf, -a[1] * Mf, 0).invert
              , e = [];
            return c(null , null , 1, {
                point: function(a, c) {
                    e.push(a = b(a, c)),
                    a[0] *= Nf,
                    a[1] *= Nf
                }
            }),
            {
                type: "Polygon",
                coordinates: [e]
            }
        }
        var b, c, d = [0, 0], e = 6;
        return a.origin = function(b) {
            return arguments.length ? (d = b,
            a) : d
        }
        ,
        a.angle = function(d) {
            return arguments.length ? (c = gb((b = +d) * Mf, e * Mf),
            a) : b
        }
        ,
        a.precision = function(d) {
            return arguments.length ? (c = gb(b * Mf, (e = +d) * Mf),
            a) : e
        }
        ,
        a.angle(90)
    }
    ,
    hf.geo.distance = function(a, b) {
        var c, d = (b[0] - a[0]) * Mf, e = a[1] * Mf, f = b[1] * Mf, g = Math.sin(d), h = Math.cos(d), i = Math.sin(e), j = Math.cos(e), k = Math.sin(f), l = Math.cos(f);
        return Math.atan2(Math.sqrt((c = l * g) * c + (c = j * k - i * l * h) * c), i * k + j * l * h)
    }
    ,
    hf.geo.graticule = function() {
        function a() {
            return {
                type: "MultiLineString",
                coordinates: b()
            }
        }
        function b() {
            return hf.range(Math.ceil(f / q) * q, e, q).map(m).concat(hf.range(Math.ceil(j / r) * r, i, r).map(n)).concat(hf.range(Math.ceil(d / o) * o, c, o).filter(function(a) {
                return Math.abs(a % q) > Lf
            }).map(k)).concat(hf.range(Math.ceil(h / p) * p, g, p).filter(function(a) {
                return Math.abs(a % r) > Lf
            }).map(l))
        }
        var c, d, e, f, g, h, i, j, k, l, m, n, o = 10, p = o, q = 90, r = 360, s = 2.5;
        return a.lines = function() {
            return b().map(function(a) {
                return {
                    type: "LineString",
                    coordinates: a
                }
            })
        }
        ,
        a.outline = function() {
            return {
                type: "Polygon",
                coordinates: [m(f).concat(n(i).slice(1), m(e).reverse().slice(1), n(j).reverse().slice(1))]
            }
        }
        ,
        a.extent = function(b) {
            return arguments.length ? a.majorExtent(b).minorExtent(b) : a.minorExtent()
        }
        ,
        a.majorExtent = function(b) {
            return arguments.length ? (f = +b[0][0],
            e = +b[1][0],
            j = +b[0][1],
            i = +b[1][1],
            f > e && (b = f,
            f = e,
            e = b),
            j > i && (b = j,
            j = i,
            i = b),
            a.precision(s)) : [[f, j], [e, i]]
        }
        ,
        a.minorExtent = function(b) {
            return arguments.length ? (d = +b[0][0],
            c = +b[1][0],
            h = +b[0][1],
            g = +b[1][1],
            d > c && (b = d,
            d = c,
            c = b),
            h > g && (b = h,
            h = g,
            g = b),
            a.precision(s)) : [[d, h], [c, g]]
        }
        ,
        a.step = function(b) {
            return arguments.length ? a.majorStep(b).minorStep(b) : a.minorStep()
        }
        ,
        a.majorStep = function(b) {
            return arguments.length ? (q = +b[0],
            r = +b[1],
            a) : [q, r]
        }
        ,
        a.minorStep = function(b) {
            return arguments.length ? (o = +b[0],
            p = +b[1],
            a) : [o, p]
        }
        ,
        a.precision = function(b) {
            return arguments.length ? (s = +b,
            k = ib(h, g, 90),
            l = jb(d, c, s),
            m = ib(j, i, 90),
            n = jb(f, e, s),
            a) : s
        }
        ,
        a.majorExtent([[-180, -90 + Lf], [180, 90 - Lf]]).minorExtent([[-180, -80 - Lf], [180, 80 + Lf]])
    }
    ,
    hf.geo.greatArc = function() {
        function a() {
            return {
                type: "LineString",
                coordinates: [b || d.apply(this, arguments), c || e.apply(this, arguments)]
            }
        }
        var b, c, d = kb, e = lb;
        return a.distance = function() {
            return hf.geo.distance(b || d.apply(this, arguments), c || e.apply(this, arguments))
        }
        ,
        a.source = function(c) {
            return arguments.length ? (d = c,
            b = "function" == typeof c ? null  : c,
            a) : d
        }
        ,
        a.target = function(b) {
            return arguments.length ? (e = b,
            c = "function" == typeof b ? null  : b,
            a) : e
        }
        ,
        a.precision = function() {
            return arguments.length ? a : 0
        }
        ,
        a
    }
    ,
    hf.geo.interpolate = function(a, b) {
        return mb(a[0] * Mf, a[1] * Mf, b[0] * Mf, b[1] * Mf)
    }
    ,
    hf.geo.length = function(a) {
        return wg = 0,
        hf.geo.stream(a, xg),
        wg
    }
    ;
    var wg, xg = {
        sphere: E,
        point: E,
        lineStart: nb,
        lineEnd: E,
        polygonStart: E,
        polygonEnd: E
    };
    (hf.geo.conicEqualArea = function() {
        return ob(pb)
    }
    ).raw = pb,
    hf.geo.albersUsa = function() {
        function a(a) {
            return b(a)(a)
        }
        function b(a) {
            var b = a[0]
              , c = a[1];
            return c > 50 ? g : -140 > b ? h : 21 > c ? i : f
        }
        var c, d, e, f = hf.geo.conicEqualArea().rotate([98, 0]).center([0, 38]).parallels([29.5, 45.5]), g = hf.geo.conicEqualArea().rotate([160, 0]).center([0, 60]).parallels([55, 65]), h = hf.geo.conicEqualArea().rotate([160, 0]).center([0, 20]).parallels([8, 18]), i = hf.geo.conicEqualArea().rotate([60, 0]).center([0, 10]).parallels([8, 18]);
        return a.invert = function(a) {
            return c(a) || d(a) || e(a) || f.invert(a)
        }
        ,
        a.scale = function(b) {
            return arguments.length ? (f.scale(b),
            g.scale(.6 * b),
            h.scale(b),
            i.scale(1.5 * b),
            a.translate(f.translate())) : f.scale()
        }
        ,
        a.translate = function(b) {
            if (!arguments.length)
                return f.translate();
            var j = f.scale()
              , k = b[0]
              , l = b[1];
            return f.translate(b),
            g.translate([k - .4 * j, l + .17 * j]),
            h.translate([k - .19 * j, l + .2 * j]),
            i.translate([k + .58 * j, l + .43 * j]),
            c = qb(g, [[-180, 50], [-130, 72]]),
            d = qb(h, [[-164, 18], [-154, 24]]),
            e = qb(i, [[-67.5, 17.5], [-65, 19]]),
            a
        }
        ,
        a.scale(1e3)
    }
    ;
    var yg, zg, Ag = {
        point: E,
        lineStart: E,
        lineEnd: E,
        polygonStart: function() {
            zg = 0,
            Ag.lineStart = rb
        },
        polygonEnd: function() {
            Ag.lineStart = Ag.lineEnd = Ag.point = E,
            yg += Math.abs(zg / 2)
        }
    }, Bg = {
        point: tb,
        lineStart: ub,
        lineEnd: vb,
        polygonStart: function() {
            Bg.lineStart = wb
        },
        polygonEnd: function() {
            Bg.point = tb,
            Bg.lineStart = ub,
            Bg.lineEnd = vb
        }
    };
    hf.geo.path = function() {
        function a(a) {
            return a && hf.geo.stream(a, d(e.pointRadius("function" == typeof f ? +f.apply(this, arguments) : f))),
            e.result()
        }
        var b, c, d, e, f = 4.5;
        return a.area = function(a) {
            return yg = 0,
            hf.geo.stream(a, d(Ag)),
            yg
        }
        ,
        a.centroid = function(a) {
            return og = qg = rg = sg = 0,
            hf.geo.stream(a, d(Bg)),
            sg ? [qg / sg, rg / sg] : void 0
        }
        ,
        a.bounds = function(a) {
            return xa(d)(a)
        }
        ,
        a.projection = function(c) {
            return arguments.length ? (d = (b = c) ? c.stream || zb(c) : la,
            a) : b
        }
        ,
        a.context = function(b) {
            return arguments.length ? (e = null  == (c = b) ? new sb : new xb(b),
            a) : c
        }
        ,
        a.pointRadius = function(b) {
            return arguments.length ? (f = "function" == typeof b ? b : +b,
            a) : f
        }
        ,
        a.projection(hf.geo.albersUsa()).context(null )
    }
    ,
    hf.geo.albers = function() {
        return hf.geo.conicEqualArea().parallels([29.5, 45.5]).rotate([98, 0]).center([0, 38]).scale(1e3)
    }
    ;
    var Cg = Ab(function(a) {
        return Math.sqrt(2 / (1 + a))
    }, function(a) {
        return 2 * Math.asin(a / 2)
    });
    (hf.geo.azimuthalEqualArea = function() {
        return $a(Cg)
    }
    ).raw = Cg;
    var Dg = Ab(function(a) {
        var b = Math.acos(a);
        return b && b / Math.sin(b)
    }, la);
    (hf.geo.azimuthalEquidistant = function() {
        return $a(Dg)
    }
    ).raw = Dg,
    (hf.geo.conicConformal = function() {
        return ob(Bb)
    }
    ).raw = Bb,
    (hf.geo.conicEquidistant = function() {
        return ob(Cb)
    }
    ).raw = Cb;
    var Eg = Ab(function(a) {
        return 1 / a
    }, Math.atan);
    (hf.geo.gnomonic = function() {
        return $a(Eg)
    }
    ).raw = Eg,
    Db.invert = function(a, b) {
        return [a, 2 * Math.atan(Math.exp(b)) - Kf / 2]
    }
    ,
    (hf.geo.mercator = function() {
        return Eb(Db)
    }
    ).raw = Db;
    var Fg = Ab(function() {
        return 1
    }, Math.asin);
    (hf.geo.orthographic = function() {
        return $a(Fg)
    }
    ).raw = Fg;
    var Gg = Ab(function(a) {
        return 1 / (1 + a)
    }, function(a) {
        return 2 * Math.atan(a)
    });
    (hf.geo.stereographic = function() {
        return $a(Gg)
    }
    ).raw = Gg,
    Fb.invert = function(a, b) {
        return [Math.atan2(R(a), Math.cos(b)), Q(Math.sin(b) / S(a))]
    }
    ,
    (hf.geo.transverseMercator = function() {
        return Eb(Fb)
    }
    ).raw = Fb,
    hf.geom = {},
    hf.svg = {},
    hf.svg.line = function() {
        return Gb(la)
    }
    ;
    var Hg = hf.map({
        linear: Jb,
        "linear-closed": Kb,
        "step-before": Lb,
        "step-after": Mb,
        basis: Sb,
        "basis-open": Tb,
        "basis-closed": Ub,
        bundle: Vb,
        cardinal: Pb,
        "cardinal-open": Nb,
        "cardinal-closed": Ob,
        monotone: _b
    });
    Hg.forEach(function(a, b) {
        b.key = a,
        b.closed = /-closed$/.test(a)
    });
    var Ig = [0, 2 / 3, 1 / 3, 0]
      , Jg = [0, 1 / 3, 2 / 3, 0]
      , Kg = [0, 1 / 6, 2 / 3, 1 / 6];
    hf.geom.hull = function(a) {
        function b(a) {
            if (a.length < 3)
                return [];
            var b, e, f, g, h, i, j, k, l, m, n, o, p = ka(c), q = ka(d), r = a.length, s = r - 1, t = [], u = [], v = 0;
            if (p === Hb && d === Ib)
                b = a;
            else
                for (f = 0,
                b = []; r > f; ++f)
                    b.push([+p.call(this, e = a[f], f), +q.call(this, e, f)]);
            for (f = 1; r > f; ++f)
                (b[f][1] < b[v][1] || b[f][1] == b[v][1] && b[f][0] < b[v][0]) && (v = f);
            for (f = 0; r > f; ++f)
                f !== v && (i = b[f][1] - b[v][1],
                h = b[f][0] - b[v][0],
                t.push({
                    angle: Math.atan2(i, h),
                    index: f
                }));
            for (t.sort(function(a, b) {
                return a.angle - b.angle
            }),
            n = t[0].angle,
            m = t[0].index,
            l = 0,
            f = 1; s > f; ++f) {
                if (g = t[f].index,
                n == t[f].angle) {
                    if (h = b[m][0] - b[v][0],
                    i = b[m][1] - b[v][1],
                    j = b[g][0] - b[v][0],
                    k = b[g][1] - b[v][1],
                    h * h + i * i >= j * j + k * k) {
                        t[f].index = -1;
                        continue
                    }
                    t[l].index = -1
                }
                n = t[f].angle,
                l = f,
                m = g
            }
            for (u.push(v),
            f = 0,
            g = 0; 2 > f; ++g)
                t[g].index > -1 && (u.push(t[g].index),
                f++);
            for (o = u.length; s > g; ++g)
                if (!(t[g].index < 0)) {
                    for (; !ac(u[o - 2], u[o - 1], t[g].index, b); )
                        --o;
                    u[o++] = t[g].index
                }
            var w = [];
            for (f = o - 1; f >= 0; --f)
                w.push(a[u[f]]);
            return w
        }
        var c = Hb
          , d = Ib;
        return arguments.length ? b(a) : (b.x = function(a) {
            return arguments.length ? (c = a,
            b) : c
        }
        ,
        b.y = function(a) {
            return arguments.length ? (d = a,
            b) : d
        }
        ,
        b)
    }
    ,
    hf.geom.polygon = function(a) {
        return a.area = function() {
            for (var b = 0, c = a.length, d = a[c - 1][1] * a[0][0] - a[c - 1][0] * a[0][1]; ++b < c; )
                d += a[b - 1][1] * a[b][0] - a[b - 1][0] * a[b][1];
            return .5 * d
        }
        ,
        a.centroid = function(b) {
            var c, d, e = -1, f = a.length, g = 0, h = 0, i = a[f - 1];
            for (arguments.length || (b = -1 / (6 * a.area())); ++e < f; )
                c = i,
                i = a[e],
                d = c[0] * i[1] - i[0] * c[1],
                g += (c[0] + i[0]) * d,
                h += (c[1] + i[1]) * d;
            return [g * b, h * b]
        }
        ,
        a.clip = function(b) {
            for (var c, d, e, f, g, h, i = -1, j = a.length, k = a[j - 1]; ++i < j; ) {
                for (c = b.slice(),
                b.length = 0,
                f = a[i],
                g = c[(e = c.length) - 1],
                d = -1; ++d < e; )
                    h = c[d],
                    bc(h, k, f) ? (bc(g, k, f) || b.push(cc(g, h, k, f)),
                    b.push(h)) : bc(g, k, f) && b.push(cc(g, h, k, f)),
                    g = h;
                k = f
            }
            return b
        }
        ,
        a
    }
    ,
    hf.geom.delaunay = function(a) {
        var b = a.map(function() {
            return []
        })
          , c = [];
        return dc(a, function(c) {
            b[c.region.l.index].push(a[c.region.r.index])
        }),
        b.forEach(function(b, d) {
            var e = a[d]
              , f = e[0]
              , g = e[1];
            b.forEach(function(a) {
                a.angle = Math.atan2(a[0] - f, a[1] - g)
            }),
            b.sort(function(a, b) {
                return a.angle - b.angle
            });
            for (var h = 0, i = b.length - 1; i > h; h++)
                c.push([e, b[h], b[h + 1]])
        }),
        c
    }
    ,
    hf.geom.voronoi = function(a) {
        function b(a) {
            var b, d, g, h = a.map(function() {
                return []
            }), i = ka(e), j = ka(f), k = a.length, l = 1e6;
            if (i === Hb && j === Ib)
                b = a;
            else
                for (b = [],
                g = 0; k > g; ++g)
                    b.push([+i.call(this, d = a[g], g), +j.call(this, d, g)]);
            if (dc(b, function(a) {
                var b, c, d, e, f, g;
                1 === a.a && a.b >= 0 ? (b = a.ep.r,
                c = a.ep.l) : (b = a.ep.l,
                c = a.ep.r),
                1 === a.a ? (f = b ? b.y : -l,
                d = a.c - a.b * f,
                g = c ? c.y : l,
                e = a.c - a.b * g) : (d = b ? b.x : -l,
                f = a.c - a.a * d,
                e = c ? c.x : l,
                g = a.c - a.a * e);
                var i = [d, f]
                  , j = [e, g];
                h[a.region.l.index].push(i, j),
                h[a.region.r.index].push(i, j)
            }),
            h = h.map(function(a, c) {
                var d = b[c][0]
                  , e = b[c][1]
                  , f = a.map(function(a) {
                    return Math.atan2(a[0] - d, a[1] - e)
                })
                  , g = hf.range(a.length).sort(function(a, b) {
                    return f[a] - f[b]
                });
                return g.filter(function(a, b) {
                    return !b || f[a] - f[g[b - 1]] > Lf
                }).map(function(b) {
                    return a[b]
                })
            }),
            h.forEach(function(a, c) {
                var d = a.length;
                if (!d)
                    return a.push([-l, -l], [-l, l], [l, l], [l, -l]);
                if (!(d > 2)) {
                    var e = b[c]
                      , f = a[0]
                      , g = a[1]
                      , h = e[0]
                      , i = e[1]
                      , j = f[0]
                      , k = f[1]
                      , m = g[0]
                      , n = g[1]
                      , o = Math.abs(m - j)
                      , p = n - k;
                    if (Math.abs(p) < Lf) {
                        var q = k > i ? -l : l;
                        a.push([-l, q], [l, q])
                    } else if (Lf > o) {
                        var r = j > h ? -l : l;
                        a.push([r, -l], [r, l])
                    } else {
                        var q = (j - h) * (n - k) > (m - j) * (k - i) ? l : -l
                          , s = Math.abs(p) - o;
                        Math.abs(s) < Lf ? a.push([0 > p ? q : -q, q]) : (s > 0 && (q *= -1),
                        a.push([-l, q], [l, q]))
                    }
                }
            }),
            c)
                for (g = 0; k > g; ++g)
                    c(h[g]);
            for (g = 0; k > g; ++g)
                h[g].point = a[g];
            return h
        }
        var c, d = null , e = Hb, f = Ib;
        return arguments.length ? b(a) : (b.x = function(a) {
            return arguments.length ? (e = a,
            b) : e
        }
        ,
        b.y = function(a) {
            return arguments.length ? (f = a,
            b) : f
        }
        ,
        b.size = function(a) {
            return arguments.length ? (null  == a ? c = null  : (d = [+a[0], +a[1]],
            c = hf.geom.polygon([[0, 0], [0, d[1]], d, [d[0], 0]]).clip),
            b) : d
        }
        ,
        b.links = function(a) {
            var b, c, d, g = a.map(function() {
                return []
            }), h = [], i = ka(e), j = ka(f), k = a.length;
            if (i === Hb && j === Ib)
                b = a;
            else
                for (d = 0; k > d; ++d)
                    b.push([+i.call(this, c = a[d], d), +j.call(this, c, d)]);
            return dc(b, function(b) {
                var c = b.region.l.index
                  , d = b.region.r.index;
                g[c][d] || (g[c][d] = g[d][c] = !0,
                h.push({
                    source: a[c],
                    target: a[d]
                }))
            }),
            h
        }
        ,
        b.triangles = function(a) {
            if (e === Hb && f === Ib)
                return hf.geom.delaunay(a);
            var b, c, d, g, h, i = ka(e), j = ka(f);
            for (g = 0,
            b = [],
            h = a.length; h > g; ++g)
                c = [+i.call(this, d = a[g], g), +j.call(this, d, g)],
                c.data = d,
                b.push(c);
            return hf.geom.delaunay(b).map(function(a) {
                return a.map(function(a) {
                    return a.data
                })
            })
        }
        ,
        b)
    }
    ;
    var Lg = {
        l: "r",
        r: "l"
    };
    hf.geom.quadtree = function(a, b, c, d, e) {
        function f(a) {
            function f(a, b, c, d, e, f, g, h) {
                if (!isNaN(c) && !isNaN(d))
                    if (a.leaf) {
                        var i = a.x
                          , k = a.y;
                        if (null  != i)
                            if (Math.abs(i - c) + Math.abs(k - d) < .01)
                                j(a, b, c, d, e, f, g, h);
                            else {
                                var l = a.point;
                                a.x = a.y = a.point = null ,
                                j(a, l, i, k, e, f, g, h),
                                j(a, b, c, d, e, f, g, h)
                            }
                        else
                            a.x = c,
                            a.y = d,
                            a.point = b
                    } else
                        j(a, b, c, d, e, f, g, h)
            }
            function j(a, b, c, d, e, g, h, i) {
                var j = .5 * (e + h)
                  , k = .5 * (g + i)
                  , l = c >= j
                  , m = d >= k
                  , n = (m << 1) + l;
                a.leaf = !1,
                a = a.nodes[n] || (a.nodes[n] = gc()),
                l ? e = j : h = j,
                m ? g = k : i = k,
                f(a, b, c, d, e, g, h, i)
            }
            var k, l, m, n, o, p, q, r, s, t = ka(h), u = ka(i);
            if (null  != b)
                p = b,
                q = c,
                r = d,
                s = e;
            else if (r = s = -(p = q = 1 / 0),
            l = [],
            m = [],
            o = a.length,
            g)
                for (n = 0; o > n; ++n)
                    k = a[n],
                    k.x < p && (p = k.x),
                    k.y < q && (q = k.y),
                    k.x > r && (r = k.x),
                    k.y > s && (s = k.y),
                    l.push(k.x),
                    m.push(k.y);
            else
                for (n = 0; o > n; ++n) {
                    var v = +t(k = a[n], n)
                      , w = +u(k, n);
                    p > v && (p = v),
                    q > w && (q = w),
                    v > r && (r = v),
                    w > s && (s = w),
                    l.push(v),
                    m.push(w)
                }
            var x = r - p
              , y = s - q;
            x > y ? s = q + x : r = p + y;
            var z = gc();
            if (z.add = function(a) {
                f(z, a, +t(a, ++n), +u(a, n), p, q, r, s)
            }
            ,
            z.visit = function(a) {
                hc(a, z, p, q, r, s)
            }
            ,
            n = -1,
            null  == b) {
                for (; ++n < o; )
                    f(z, a[n], l[n], m[n], p, q, r, s);
                --n
            } else
                a.forEach(z.add);
            return l = m = a = k = null ,
            z
        }
        var g, h = Hb, i = Ib;
        return (g = arguments.length) ? (h = ec,
        i = fc,
        3 === g && (e = c,
        d = b,
        c = b = 0),
        f(a)) : (f.x = function(a) {
            return arguments.length ? (h = a,
            f) : h
        }
        ,
        f.y = function(a) {
            return arguments.length ? (i = a,
            f) : i
        }
        ,
        f.size = function(a) {
            return arguments.length ? (null  == a ? b = c = d = e = null  : (b = c = 0,
            d = +a[0],
            e = +a[1]),
            f) : null  == b ? null  : [d, e]
        }
        ,
        f)
    }
    ,
    hf.interpolateRgb = ic,
    hf.transform = function(a) {
        var b = jf.createElementNS(hf.ns.prefix.svg, "g");
        return (hf.transform = function(a) {
            b.setAttribute("transform", a);
            var c = b.transform.baseVal.consolidate();
            return new jc(c ? c.matrix : Mg)
        }
        )(a)
    }
    ,
    jc.prototype.toString = function() {
        return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
    }
    ;
    var Mg = {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0
    };
    hf.interpolateNumber = nc,
    hf.interpolateTransform = oc,
    hf.interpolateObject = pc,
    hf.interpolateString = qc;
    var Ng = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
    hf.interpolate = rc,
    hf.interpolators = [function(a, b) {
        var c = typeof b;
        return ("string" === c || c !== typeof a ? Vf.has(b) || /^(#|rgb\(|hsl\()/.test(b) ? ic : qc : b instanceof K ? ic : "object" === c ? Array.isArray(b) ? tc : pc : nc)(a, b)
    }
    ],
    hf.interpolateArray = tc;
    var Og = function() {
        return la
    }
      , Pg = hf.map({
        linear: Og,
        poly: Ac,
        quad: function() {
            return xc
        },
        cubic: function() {
            return yc
        },
        sin: function() {
            return Bc
        },
        exp: function() {
            return Cc
        },
        circle: function() {
            return Dc
        },
        elastic: Ec,
        back: Fc,
        bounce: function() {
            return Gc
        }
    })
      , Qg = hf.map({
        "in": la,
        out: vc,
        "in-out": wc,
        "out-in": function(a) {
            return wc(vc(a))
        }
    });
    hf.ease = function(a) {
        var b = a.indexOf("-")
          , c = b >= 0 ? a.substring(0, b) : a
          , d = b >= 0 ? a.substring(b + 1) : "in";
        return c = Pg.get(c) || Og,
        d = Qg.get(d) || la,
        uc(d(c.apply(null , Array.prototype.slice.call(arguments, 1))))
    }
    ,
    hf.interpolateHcl = Hc,
    hf.interpolateHsl = Ic,
    hf.interpolateLab = Jc,
    hf.interpolateRound = Kc,
    hf.layout = {},
    hf.layout.bundle = function() {
        return function(a) {
            for (var b = [], c = -1, d = a.length; ++c < d; )
                b.push(Nc(a[c]));
            return b
        }
    }
    ,
    hf.layout.chord = function() {
        function a() {
            var a, j, l, m, n, o = {}, p = [], q = hf.range(f), r = [];
            for (c = [],
            d = [],
            a = 0,
            m = -1; ++m < f; ) {
                for (j = 0,
                n = -1; ++n < f; )
                    j += e[m][n];
                p.push(j),
                r.push(hf.range(f)),
                a += j
            }
            for (g && q.sort(function(a, b) {
                return g(p[a], p[b])
            }),
            h && r.forEach(function(a, b) {
                a.sort(function(a, c) {
                    return h(e[b][a], e[b][c])
                })
            }),
            a = (2 * Kf - k * f) / a,
            j = 0,
            m = -1; ++m < f; ) {
                for (l = j,
                n = -1; ++n < f; ) {
                    var s = q[m]
                      , t = r[s][n]
                      , u = e[s][t]
                      , v = j
                      , w = j += u * a;
                    o[s + "-" + t] = {
                        index: s,
                        subindex: t,
                        startAngle: v,
                        endAngle: w,
                        value: u
                    }
                }
                d[s] = {
                    index: s,
                    startAngle: l,
                    endAngle: j,
                    value: (j - l) / a
                },
                j += k
            }
            for (m = -1; ++m < f; )
                for (n = m - 1; ++n < f; ) {
                    var x = o[m + "-" + n]
                      , y = o[n + "-" + m];
                    (x.value || y.value) && c.push(x.value < y.value ? {
                        source: y,
                        target: x
                    } : {
                        source: x,
                        target: y
                    })
                }
            i && b()
        }
        function b() {
            c.sort(function(a, b) {
                return i((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2)
            })
        }
        var c, d, e, f, g, h, i, j = {}, k = 0;
        return j.matrix = function(a) {
            return arguments.length ? (f = (e = a) && e.length,
            c = d = null ,
            j) : e
        }
        ,
        j.padding = function(a) {
            return arguments.length ? (k = a,
            c = d = null ,
            j) : k
        }
        ,
        j.sortGroups = function(a) {
            return arguments.length ? (g = a,
            c = d = null ,
            j) : g
        }
        ,
        j.sortSubgroups = function(a) {
            return arguments.length ? (h = a,
            c = null ,
            j) : h
        }
        ,
        j.sortChords = function(a) {
            return arguments.length ? (i = a,
            c && b(),
            j) : i
        }
        ,
        j.chords = function() {
            return c || a(),
            c
        }
        ,
        j.groups = function() {
            return d || a(),
            d
        }
        ,
        j
    }
    ,
    hf.layout.force = function() {
        function a(a) {
            return function(b, c, d, e) {
                if (b.point !== a) {
                    var f = b.cx - a.x
                      , g = b.cy - a.y
                      , h = 1 / Math.sqrt(f * f + g * g);
                    if (p > (e - c) * h) {
                        var i = b.charge * h * h;
                        return a.px -= f * i,
                        a.py -= g * i,
                        !0
                    }
                    if (b.point && isFinite(h)) {
                        var i = b.pointCharge * h * h;
                        a.px -= f * i,
                        a.py -= g * i
                    }
                }
                return !b.charge
            }
        }
        function b(a) {
            a.px = hf.event.x,
            a.py = hf.event.y,
            h.resume()
        }
        var c, d, e, f, g, h = {}, i = hf.dispatch("start", "tick", "end"), j = [1, 1], k = .9, l = Rg, m = Sg, n = -30, o = .1, p = .8, q = [], r = [];
        return h.tick = function() {
            if ((d *= .99) < .005)
                return i.end({
                    type: "end",
                    alpha: d = 0
                }),
                !0;
            var b, c, h, l, m, p, s, t, u, v = q.length, w = r.length;
            for (c = 0; w > c; ++c)
                h = r[c],
                l = h.source,
                m = h.target,
                t = m.x - l.x,
                u = m.y - l.y,
                (p = t * t + u * u) && (p = d * f[c] * ((p = Math.sqrt(p)) - e[c]) / p,
                t *= p,
                u *= p,
                m.x -= t * (s = l.weight / (m.weight + l.weight)),
                m.y -= u * s,
                l.x += t * (s = 1 - s),
                l.y += u * s);
            if ((s = d * o) && (t = j[0] / 2,
            u = j[1] / 2,
            c = -1,
            s))
                for (; ++c < v; )
                    h = q[c],
                    h.x += (t - h.x) * s,
                    h.y += (u - h.y) * s;
            if (n)
                for (Uc(b = hf.geom.quadtree(q), d, g),
                c = -1; ++c < v; )
                    (h = q[c]).fixed || b.visit(a(h));
            for (c = -1; ++c < v; )
                h = q[c],
                h.fixed ? (h.x = h.px,
                h.y = h.py) : (h.x -= (h.px - (h.px = h.x)) * k,
                h.y -= (h.py - (h.py = h.y)) * k);
            i.tick({
                type: "tick",
                alpha: d
            })
        }
        ,
        h.nodes = function(a) {
            return arguments.length ? (q = a,
            h) : q
        }
        ,
        h.links = function(a) {
            return arguments.length ? (r = a,
            h) : r
        }
        ,
        h.size = function(a) {
            return arguments.length ? (j = a,
            h) : j
        }
        ,
        h.linkDistance = function(a) {
            return arguments.length ? (l = "function" == typeof a ? a : +a,
            h) : l
        }
        ,
        h.distance = h.linkDistance,
        h.linkStrength = function(a) {
            return arguments.length ? (m = "function" == typeof a ? a : +a,
            h) : m
        }
        ,
        h.friction = function(a) {
            return arguments.length ? (k = +a,
            h) : k
        }
        ,
        h.charge = function(a) {
            return arguments.length ? (n = "function" == typeof a ? a : +a,
            h) : n
        }
        ,
        h.gravity = function(a) {
            return arguments.length ? (o = +a,
            h) : o
        }
        ,
        h.theta = function(a) {
            return arguments.length ? (p = +a,
            h) : p
        }
        ,
        h.alpha = function(a) {
            return arguments.length ? (a = +a,
            d ? d = a > 0 ? a : 0 : a > 0 && (i.start({
                type: "start",
                alpha: d = a
            }),
            hf.timer(h.tick)),
            h) : d
        }
        ,
        h.start = function() {
            function a(a, d) {
                for (var e, f = b(c), g = -1, h = f.length; ++g < h; )
                    if (!isNaN(e = f[g][a]))
                        return e;
                return Math.random() * d
            }
            function b() {
                if (!i) {
                    for (i = [],
                    d = 0; o > d; ++d)
                        i[d] = [];
                    for (d = 0; p > d; ++d) {
                        var a = r[d];
                        i[a.source.index].push(a.target),
                        i[a.target.index].push(a.source)
                    }
                }
                return i[c]
            }
            var c, d, i, k, o = q.length, p = r.length, s = j[0], t = j[1];
            for (c = 0; o > c; ++c)
                (k = q[c]).index = c,
                k.weight = 0;
            for (c = 0; p > c; ++c)
                k = r[c],
                "number" == typeof k.source && (k.source = q[k.source]),
                "number" == typeof k.target && (k.target = q[k.target]),
                ++k.source.weight,
                ++k.target.weight;
            for (c = 0; o > c; ++c)
                k = q[c],
                isNaN(k.x) && (k.x = a("x", s)),
                isNaN(k.y) && (k.y = a("y", t)),
                isNaN(k.px) && (k.px = k.x),
                isNaN(k.py) && (k.py = k.y);
            if (e = [],
            "function" == typeof l)
                for (c = 0; p > c; ++c)
                    e[c] = +l.call(this, r[c], c);
            else
                for (c = 0; p > c; ++c)
                    e[c] = l;
            if (f = [],
            "function" == typeof m)
                for (c = 0; p > c; ++c)
                    f[c] = +m.call(this, r[c], c);
            else
                for (c = 0; p > c; ++c)
                    f[c] = m;
            if (g = [],
            "function" == typeof n)
                for (c = 0; o > c; ++c)
                    g[c] = +n.call(this, q[c], c);
            else
                for (c = 0; o > c; ++c)
                    g[c] = n;
            return h.resume()
        }
        ,
        h.resume = function() {
            return h.alpha(.1)
        }
        ,
        h.stop = function() {
            return h.alpha(0)
        }
        ,
        h.drag = function() {
            return c || (c = hf.behavior.drag().origin(la).on("dragstart.force", Qc).on("drag.force", b).on("dragend.force", Rc)),
            arguments.length ? void this.on("mouseover.force", Sc).on("mouseout.force", Tc).call(c) : c
        }
        ,
        hf.rebind(h, i, "on")
    }
    ;
    var Rg = 20
      , Sg = 1;
    hf.layout.hierarchy = function() {
        function a(b, g, h) {
            var i = e.call(c, b, g);
            if (b.depth = g,
            h.push(b),
            i && (j = i.length)) {
                for (var j, k, l = -1, m = b.children = [], n = 0, o = g + 1; ++l < j; )
                    k = a(i[l], o, h),
                    k.parent = b,
                    m.push(k),
                    n += k.value;
                d && m.sort(d),
                f && (b.value = n)
            } else
                f && (b.value = +f.call(c, b, g) || 0);
            return b
        }
        function b(a, d) {
            var e = a.children
              , g = 0;
            if (e && (h = e.length))
                for (var h, i = -1, j = d + 1; ++i < h; )
                    g += b(e[i], j);
            else
                f && (g = +f.call(c, a, d) || 0);
            return f && (a.value = g),
            g
        }
        function c(b) {
            var c = [];
            return a(b, 0, c),
            c
        }
        var d = Yc
          , e = Wc
          , f = Xc;
        return c.sort = function(a) {
            return arguments.length ? (d = a,
            c) : d
        }
        ,
        c.children = function(a) {
            return arguments.length ? (e = a,
            c) : e
        }
        ,
        c.value = function(a) {
            return arguments.length ? (f = a,
            c) : f
        }
        ,
        c.revalue = function(a) {
            return b(a, 0),
            a
        }
        ,
        c
    }
    ,
    hf.layout.partition = function() {
        function a(b, c, d, e) {
            var f = b.children;
            if (b.x = c,
            b.y = b.depth * e,
            b.dx = d,
            b.dy = e,
            f && (g = f.length)) {
                var g, h, i, j = -1;
                for (d = b.value ? d / b.value : 0; ++j < g; )
                    a(h = f[j], c, i = h.value * d, e),
                    c += i
            }
        }
        function b(a) {
            var c = a.children
              , d = 0;
            if (c && (e = c.length))
                for (var e, f = -1; ++f < e; )
                    d = Math.max(d, b(c[f]));
            return 1 + d
        }
        function c(c, f) {
            var g = d.call(this, c, f);
            return a(g[0], 0, e[0], e[1] / b(g[0])),
            g
        }
        var d = hf.layout.hierarchy()
          , e = [1, 1];
        return c.size = function(a) {
            return arguments.length ? (e = a,
            c) : e
        }
        ,
        Vc(c, d)
    }
    ,
    hf.layout.pie = function() {
        function a(f) {
            var g = f.map(function(c, d) {
                return +b.call(a, c, d)
            })
              , h = +("function" == typeof d ? d.apply(this, arguments) : d)
              , i = (("function" == typeof e ? e.apply(this, arguments) : e) - h) / hf.sum(g)
              , j = hf.range(f.length);
            null  != c && j.sort(c === Tg ? function(a, b) {
                return g[b] - g[a]
            }
             : function(a, b) {
                return c(f[a], f[b])
            }
            );
            var k = [];
            return j.forEach(function(a) {
                var b;
                k[a] = {
                    data: f[a],
                    value: b = g[a],
                    startAngle: h,
                    endAngle: h += b * i
                }
            }),
            k
        }
        var b = Number
          , c = Tg
          , d = 0
          , e = 2 * Kf;
        return a.value = function(c) {
            return arguments.length ? (b = c,
            a) : b
        }
        ,
        a.sort = function(b) {
            return arguments.length ? (c = b,
            a) : c
        }
        ,
        a.startAngle = function(b) {
            return arguments.length ? (d = b,
            a) : d
        }
        ,
        a.endAngle = function(b) {
            return arguments.length ? (e = b,
            a) : e
        }
        ,
        a
    }
    ;
    var Tg = {};
    hf.layout.stack = function() {
        function a(h, i) {
            var j = h.map(function(c, d) {
                return b.call(a, c, d)
            })
              , k = j.map(function(b) {
                return b.map(function(b, c) {
                    return [f.call(a, b, c), g.call(a, b, c)]
                })
            })
              , l = c.call(a, k, i);
            j = hf.permute(j, l),
            k = hf.permute(k, l);
            var m, n, o, p = d.call(a, k, i), q = j.length, r = j[0].length;
            for (n = 0; r > n; ++n)
                for (e.call(a, j[0][n], o = p[n], k[0][n][1]),
                m = 1; q > m; ++m)
                    e.call(a, j[m][n], o += k[m - 1][n][1], k[m][n][1]);
            return h
        }
        var b = la
          , c = bd
          , d = cd
          , e = ad
          , f = $c
          , g = _c;
        return a.values = function(c) {
            return arguments.length ? (b = c,
            a) : b
        }
        ,
        a.order = function(b) {
            return arguments.length ? (c = "function" == typeof b ? b : Ug.get(b) || bd,
            a) : c
        }
        ,
        a.offset = function(b) {
            return arguments.length ? (d = "function" == typeof b ? b : Vg.get(b) || cd,
            a) : d
        }
        ,
        a.x = function(b) {
            return arguments.length ? (f = b,
            a) : f
        }
        ,
        a.y = function(b) {
            return arguments.length ? (g = b,
            a) : g
        }
        ,
        a.out = function(b) {
            return arguments.length ? (e = b,
            a) : e
        }
        ,
        a
    }
    ;
    var Ug = hf.map({
        "inside-out": function(a) {
            var b, c, d = a.length, e = a.map(dd), f = a.map(ed), g = hf.range(d).sort(function(a, b) {
                return e[a] - e[b]
            }), h = 0, i = 0, j = [], k = [];
            for (b = 0; d > b; ++b)
                c = g[b],
                i > h ? (h += f[c],
                j.push(c)) : (i += f[c],
                k.push(c));
            return k.reverse().concat(j)
        },
        reverse: function(a) {
            return hf.range(a.length).reverse()
        },
        "default": bd
    })
      , Vg = hf.map({
        silhouette: function(a) {
            var b, c, d, e = a.length, f = a[0].length, g = [], h = 0, i = [];
            for (c = 0; f > c; ++c) {
                for (b = 0,
                d = 0; e > b; b++)
                    d += a[b][c][1];
                d > h && (h = d),
                g.push(d)
            }
            for (c = 0; f > c; ++c)
                i[c] = (h - g[c]) / 2;
            return i
        },
        wiggle: function(a) {
            var b, c, d, e, f, g, h, i, j, k = a.length, l = a[0], m = l.length, n = [];
            for (n[0] = i = j = 0,
            c = 1; m > c; ++c) {
                for (b = 0,
                e = 0; k > b; ++b)
                    e += a[b][c][1];
                for (b = 0,
                f = 0,
                h = l[c][0] - l[c - 1][0]; k > b; ++b) {
                    for (d = 0,
                    g = (a[b][c][1] - a[b][c - 1][1]) / (2 * h); b > d; ++d)
                        g += (a[d][c][1] - a[d][c - 1][1]) / h;
                    f += g * a[b][c][1]
                }
                n[c] = i -= e ? f / e * h : 0,
                j > i && (j = i)
            }
            for (c = 0; m > c; ++c)
                n[c] -= j;
            return n
        },
        expand: function(a) {
            var b, c, d, e = a.length, f = a[0].length, g = 1 / e, h = [];
            for (c = 0; f > c; ++c) {
                for (b = 0,
                d = 0; e > b; b++)
                    d += a[b][c][1];
                if (d)
                    for (b = 0; e > b; b++)
                        a[b][c][1] /= d;
                else
                    for (b = 0; e > b; b++)
                        a[b][c][1] = g
            }
            for (c = 0; f > c; ++c)
                h[c] = 0;
            return h
        },
        zero: cd
    });
    hf.layout.histogram = function() {
        function a(a, f) {
            for (var g, h, i = [], j = a.map(c, this), k = d.call(this, j, f), l = e.call(this, k, j, f), f = -1, m = j.length, n = l.length - 1, o = b ? 1 : 1 / m; ++f < n; )
                g = i[f] = [],
                g.dx = l[f + 1] - (g.x = l[f]),
                g.y = 0;
            if (n > 0)
                for (f = -1; ++f < m; )
                    h = j[f],
                    h >= k[0] && h <= k[1] && (g = i[hf.bisect(l, h, 1, n) - 1],
                    g.y += o,
                    g.push(a[f]));
            return i
        }
        var b = !0
          , c = Number
          , d = id
          , e = gd;
        return a.value = function(b) {
            return arguments.length ? (c = b,
            a) : c
        }
        ,
        a.range = function(b) {
            return arguments.length ? (d = ka(b),
            a) : d
        }
        ,
        a.bins = function(b) {
            return arguments.length ? (e = "number" == typeof b ? function(a) {
                return hd(a, b)
            }
             : ka(b),
            a) : e
        }
        ,
        a.frequency = function(c) {
            return arguments.length ? (b = !!c,
            a) : b
        }
        ,
        a
    }
    ,
    hf.layout.tree = function() {
        function a(a, e) {
            function f(a, b) {
                var d = a.children
                  , e = a._tree;
                if (d && (g = d.length)) {
                    for (var g, i, j, k = d[0], l = k, m = -1; ++m < g; )
                        j = d[m],
                        f(j, i),
                        l = h(j, i, l),
                        i = j;
                    rd(a);
                    var n = .5 * (k._tree.prelim + j._tree.prelim);
                    b ? (e.prelim = b._tree.prelim + c(a, b),
                    e.mod = e.prelim - n) : e.prelim = n
                } else
                    b && (e.prelim = b._tree.prelim + c(a, b))
            }
            function g(a, b) {
                a.x = a._tree.prelim + b;
                var c = a.children;
                if (c && (d = c.length)) {
                    var d, e = -1;
                    for (b += a._tree.mod; ++e < d; )
                        g(c[e], b)
                }
            }
            function h(a, b, d) {
                if (b) {
                    for (var e, f = a, g = a, h = b, i = a.parent.children[0], j = f._tree.mod, k = g._tree.mod, l = h._tree.mod, m = i._tree.mod; h = ld(h),
                    f = kd(f),
                    h && f; )
                        i = kd(i),
                        g = ld(g),
                        g._tree.ancestor = a,
                        e = h._tree.prelim + l - f._tree.prelim - j + c(h, f),
                        e > 0 && (sd(td(h, a, d), a, e),
                        j += e,
                        k += e),
                        l += h._tree.mod,
                        j += f._tree.mod,
                        m += i._tree.mod,
                        k += g._tree.mod;
                    h && !ld(g) && (g._tree.thread = h,
                    g._tree.mod += l - k),
                    f && !kd(i) && (i._tree.thread = f,
                    i._tree.mod += j - m,
                    d = a)
                }
                return d
            }
            var i = b.call(this, a, e)
              , j = i[0];
            qd(j, function(a, b) {
                a._tree = {
                    ancestor: a,
                    prelim: 0,
                    mod: 0,
                    change: 0,
                    shift: 0,
                    number: b ? b._tree.number + 1 : 0
                }
            }),
            f(j),
            g(j, -j._tree.prelim);
            var k = md(j, od)
              , l = md(j, nd)
              , m = md(j, pd)
              , n = k.x - c(k, l) / 2
              , o = l.x + c(l, k) / 2
              , p = m.depth || 1;
            return qd(j, function(a) {
                a.x = (a.x - n) / (o - n) * d[0],
                a.y = a.depth / p * d[1],
                delete a._tree
            }),
            i
        }
        var b = hf.layout.hierarchy().sort(null ).value(null )
          , c = jd
          , d = [1, 1];
        return a.separation = function(b) {
            return arguments.length ? (c = b,
            a) : c
        }
        ,
        a.size = function(b) {
            return arguments.length ? (d = b,
            a) : d
        }
        ,
        Vc(a, b)
    }
    ,
    hf.layout.pack = function() {
        function a(a, e) {
            var f = b.call(this, a, e)
              , g = f[0];
            g.x = 0,
            g.y = 0,
            qd(g, function(a) {
                a.r = Math.sqrt(a.value)
            }),
            qd(g, yd);
            var h = d[0]
              , i = d[1]
              , j = Math.max(2 * g.r / h, 2 * g.r / i);
            if (c > 0) {
                var k = c * j / 2;
                qd(g, function(a) {
                    a.r += k
                }),
                qd(g, yd),
                qd(g, function(a) {
                    a.r -= k
                }),
                j = Math.max(2 * g.r / h, 2 * g.r / i)
            }
            return Bd(g, h / 2, i / 2, 1 / j),
            f
        }
        var b = hf.layout.hierarchy().sort(ud)
          , c = 0
          , d = [1, 1];
        return a.size = function(b) {
            return arguments.length ? (d = b,
            a) : d
        }
        ,
        a.padding = function(b) {
            return arguments.length ? (c = +b,
            a) : c
        }
        ,
        Vc(a, b)
    }
    ,
    hf.layout.cluster = function() {
        function a(a, e) {
            var f, g = b.call(this, a, e), h = g[0], i = 0;
            qd(h, function(a) {
                var b = a.children;
                b && b.length ? (a.x = Ed(b),
                a.y = Dd(b)) : (a.x = f ? i += c(a, f) : 0,
                a.y = 0,
                f = a)
            });
            var j = Fd(h)
              , k = Gd(h)
              , l = j.x - c(j, k) / 2
              , m = k.x + c(k, j) / 2;
            return qd(h, function(a) {
                a.x = (a.x - l) / (m - l) * d[0],
                a.y = (1 - (h.y ? a.y / h.y : 1)) * d[1]
            }),
            g
        }
        var b = hf.layout.hierarchy().sort(null ).value(null )
          , c = jd
          , d = [1, 1];
        return a.separation = function(b) {
            return arguments.length ? (c = b,
            a) : c
        }
        ,
        a.size = function(b) {
            return arguments.length ? (d = b,
            a) : d
        }
        ,
        Vc(a, b)
    }
    ,
    hf.layout.treemap = function() {
        function a(a, b) {
            for (var c, d, e = -1, f = a.length; ++e < f; )
                d = (c = a[e]).value * (0 > b ? 0 : b),
                c.area = isNaN(d) || 0 >= d ? 0 : d
        }
        function b(c) {
            var f = c.children;
            if (f && f.length) {
                var g, h, i, j = l(c), k = [], m = f.slice(), o = 1 / 0, p = "slice" === n ? j.dx : "dice" === n ? j.dy : "slice-dice" === n ? 1 & c.depth ? j.dy : j.dx : Math.min(j.dx, j.dy);
                for (a(m, j.dx * j.dy / c.value),
                k.area = 0; (i = m.length) > 0; )
                    k.push(g = m[i - 1]),
                    k.area += g.area,
                    "squarify" !== n || (h = d(k, p)) <= o ? (m.pop(),
                    o = h) : (k.area -= k.pop().area,
                    e(k, p, j, !1),
                    p = Math.min(j.dx, j.dy),
                    k.length = k.area = 0,
                    o = 1 / 0);
                k.length && (e(k, p, j, !0),
                k.length = k.area = 0),
                f.forEach(b)
            }
        }
        function c(b) {
            var d = b.children;
            if (d && d.length) {
                var f, g = l(b), h = d.slice(), i = [];
                for (a(h, g.dx * g.dy / b.value),
                i.area = 0; f = h.pop(); )
                    i.push(f),
                    i.area += f.area,
                    null  != f.z && (e(i, f.z ? g.dx : g.dy, g, !h.length),
                    i.length = i.area = 0);
                d.forEach(c)
            }
        }
        function d(a, b) {
            for (var c, d = a.area, e = 0, f = 1 / 0, g = -1, h = a.length; ++g < h; )
                (c = a[g].area) && (f > c && (f = c),
                c > e && (e = c));
            return d *= d,
            b *= b,
            d ? Math.max(b * e * o / d, d / (b * f * o)) : 1 / 0
        }
        function e(a, b, c, d) {
            var e, f = -1, g = a.length, h = c.x, j = c.y, k = b ? i(a.area / b) : 0;
            if (b == c.dx) {
                for ((d || k > c.dy) && (k = c.dy); ++f < g; )
                    e = a[f],
                    e.x = h,
                    e.y = j,
                    e.dy = k,
                    h += e.dx = Math.min(c.x + c.dx - h, k ? i(e.area / k) : 0);
                e.z = !0,
                e.dx += c.x + c.dx - h,
                c.y += k,
                c.dy -= k
            } else {
                for ((d || k > c.dx) && (k = c.dx); ++f < g; )
                    e = a[f],
                    e.x = h,
                    e.y = j,
                    e.dx = k,
                    j += e.dy = Math.min(c.y + c.dy - j, k ? i(e.area / k) : 0);
                e.z = !1,
                e.dy += c.y + c.dy - j,
                c.x += k,
                c.dx -= k
            }
        }
        function f(d) {
            var e = g || h(d)
              , f = e[0];
            return f.x = 0,
            f.y = 0,
            f.dx = j[0],
            f.dy = j[1],
            g && h.revalue(f),
            a([f], f.dx * f.dy / f.value),
            (g ? c : b)(f),
            m && (g = e),
            e
        }
        var g, h = hf.layout.hierarchy(), i = Math.round, j = [1, 1], k = null , l = Hd, m = !1, n = "squarify", o = .5 * (1 + Math.sqrt(5));
        return f.size = function(a) {
            return arguments.length ? (j = a,
            f) : j
        }
        ,
        f.padding = function(a) {
            function b(b) {
                var c = a.call(f, b, b.depth);
                return null  == c ? Hd(b) : Id(b, "number" == typeof c ? [c, c, c, c] : c)
            }
            function c(b) {
                return Id(b, a)
            }
            if (!arguments.length)
                return k;
            var d;
            return l = null  == (k = a) ? Hd : "function" == (d = typeof a) ? b : "number" === d ? (a = [a, a, a, a],
            c) : c,
            f
        }
        ,
        f.round = function(a) {
            return arguments.length ? (i = a ? Math.round : Number,
            f) : i != Number
        }
        ,
        f.sticky = function(a) {
            return arguments.length ? (m = a,
            g = null ,
            f) : m
        }
        ,
        f.ratio = function(a) {
            return arguments.length ? (o = a,
            f) : o
        }
        ,
        f.mode = function(a) {
            return arguments.length ? (n = a + "",
            f) : n
        }
        ,
        Vc(f, h)
    }
    ,
    hf.random = {
        normal: function(a, b) {
            var c = arguments.length;
            return 2 > c && (b = 1),
            1 > c && (a = 0),
            function() {
                var c, d, e;
                do
                    c = 2 * Math.random() - 1,
                    d = 2 * Math.random() - 1,
                    e = c * c + d * d;
                while (!e || e > 1);return a + b * c * Math.sqrt(-2 * Math.log(e) / e)
            }
        },
        logNormal: function() {
            var a = hf.random.normal.apply(hf, arguments);
            return function() {
                return Math.exp(a())
            }
        },
        irwinHall: function(a) {
            return function() {
                for (var b = 0, c = 0; a > c; c++)
                    b += Math.random();
                return b / a
            }
        }
    },
    hf.scale = {},
    hf.scale.linear = function() {
        return Od([0, 1], [0, 1], rc, !1)
    }
    ,
    hf.scale.log = function() {
        return Ud(hf.scale.linear().domain([0, Math.LN10]), 10, Vd, Wd)
    }
    ;
    var Wg = hf.format(".0e");
    hf.scale.pow = function() {
        return $d(hf.scale.linear(), 1)
    }
    ,
    hf.scale.sqrt = function() {
        return hf.scale.pow().exponent(.5)
    }
    ,
    hf.scale.ordinal = function() {
        return ae([], {
            t: "range",
            a: [[]]
        })
    }
    ,
    hf.scale.category10 = function() {
        return hf.scale.ordinal().range(Xg)
    }
    ,
    hf.scale.category20 = function() {
        return hf.scale.ordinal().range(Yg)
    }
    ,
    hf.scale.category20b = function() {
        return hf.scale.ordinal().range(Zg)
    }
    ,
    hf.scale.category20c = function() {
        return hf.scale.ordinal().range($g)
    }
    ;
    var Xg = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"]
      , Yg = ["#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5", "#8c564b", "#c49c94", "#e377c2", "#f7b6d2", "#7f7f7f", "#c7c7c7", "#bcbd22", "#dbdb8d", "#17becf", "#9edae5"]
      , Zg = ["#393b79", "#5254a3", "#6b6ecf", "#9c9ede", "#637939", "#8ca252", "#b5cf6b", "#cedb9c", "#8c6d31", "#bd9e39", "#e7ba52", "#e7cb94", "#843c39", "#ad494a", "#d6616b", "#e7969c", "#7b4173", "#a55194", "#ce6dbd", "#de9ed6"]
      , $g = ["#3182bd", "#6baed6", "#9ecae1", "#c6dbef", "#e6550d", "#fd8d3c", "#fdae6b", "#fdd0a2", "#31a354", "#74c476", "#a1d99b", "#c7e9c0", "#756bb1", "#9e9ac8", "#bcbddc", "#dadaeb", "#636363", "#969696", "#bdbdbd", "#d9d9d9"];
    hf.scale.quantile = function() {
        return be([], [])
    }
    ,
    hf.scale.quantize = function() {
        return ce(0, 1, [0, 1])
    }
    ,
    hf.scale.threshold = function() {
        return de([.5], [0, 1])
    }
    ,
    hf.scale.identity = function() {
        return ee([0, 1])
    }
    ,
    hf.svg.arc = function() {
        function a() {
            var a = b.apply(this, arguments)
              , f = c.apply(this, arguments)
              , g = d.apply(this, arguments) + _g
              , h = e.apply(this, arguments) + _g
              , i = (g > h && (i = g,
            g = h,
            h = i),
            h - g)
              , j = Kf > i ? "0" : "1"
              , k = Math.cos(g)
              , l = Math.sin(g)
              , m = Math.cos(h)
              , n = Math.sin(h);
            return i >= ah ? a ? "M0," + f + "A" + f + "," + f + " 0 1,1 0," + -f + "A" + f + "," + f + " 0 1,1 0," + f + "M0," + a + "A" + a + "," + a + " 0 1,0 0," + -a + "A" + a + "," + a + " 0 1,0 0," + a + "Z" : "M0," + f + "A" + f + "," + f + " 0 1,1 0," + -f + "A" + f + "," + f + " 0 1,1 0," + f + "Z" : a ? "M" + f * k + "," + f * l + "A" + f + "," + f + " 0 " + j + ",1 " + f * m + "," + f * n + "L" + a * m + "," + a * n + "A" + a + "," + a + " 0 " + j + ",0 " + a * k + "," + a * l + "Z" : "M" + f * k + "," + f * l + "A" + f + "," + f + " 0 " + j + ",1 " + f * m + "," + f * n + "L0,0Z"
        }
        var b = fe
          , c = ge
          , d = he
          , e = ie;
        return a.innerRadius = function(c) {
            return arguments.length ? (b = ka(c),
            a) : b
        }
        ,
        a.outerRadius = function(b) {
            return arguments.length ? (c = ka(b),
            a) : c
        }
        ,
        a.startAngle = function(b) {
            return arguments.length ? (d = ka(b),
            a) : d
        }
        ,
        a.endAngle = function(b) {
            return arguments.length ? (e = ka(b),
            a) : e
        }
        ,
        a.centroid = function() {
            var a = (b.apply(this, arguments) + c.apply(this, arguments)) / 2
              , f = (d.apply(this, arguments) + e.apply(this, arguments)) / 2 + _g;
            return [Math.cos(f) * a, Math.sin(f) * a]
        }
        ,
        a
    }
    ;
    var _g = -Kf / 2
      , ah = 2 * Kf - 1e-6;
    hf.svg.line.radial = function() {
        var a = Gb(je);
        return a.radius = a.x,
        delete a.x,
        a.angle = a.y,
        delete a.y,
        a
    }
    ,
    Lb.reverse = Mb,
    Mb.reverse = Lb,
    hf.svg.area = function() {
        return ke(la)
    }
    ,
    hf.svg.area.radial = function() {
        var a = ke(je);
        return a.radius = a.x,
        delete a.x,
        a.innerRadius = a.x0,
        delete a.x0,
        a.outerRadius = a.x1,
        delete a.x1,
        a.angle = a.y,
        delete a.y,
        a.startAngle = a.y0,
        delete a.y0,
        a.endAngle = a.y1,
        delete a.y1,
        a
    }
    ,
    hf.svg.chord = function() {
        function a(a, h) {
            var i = b(this, f, a, h)
              , j = b(this, g, a, h);
            return "M" + i.p0 + d(i.r, i.p1, i.a1 - i.a0) + (c(i, j) ? e(i.r, i.p1, i.r, i.p0) : e(i.r, i.p1, j.r, j.p0) + d(j.r, j.p1, j.a1 - j.a0) + e(j.r, j.p1, i.r, i.p0)) + "Z"
        }
        function b(a, b, c, d) {
            var e = b.call(a, c, d)
              , f = h.call(a, e, d)
              , g = i.call(a, e, d) + _g
              , k = j.call(a, e, d) + _g;
            return {
                r: f,
                a0: g,
                a1: k,
                p0: [f * Math.cos(g), f * Math.sin(g)],
                p1: [f * Math.cos(k), f * Math.sin(k)]
            }
        }
        function c(a, b) {
            return a.a0 == b.a0 && a.a1 == b.a1
        }
        function d(a, b, c) {
            return "A" + a + "," + a + " 0 " + +(c > Kf) + ",1 " + b
        }
        function e(a, b, c, d) {
            return "Q 0,0 " + d
        }
        var f = kb
          , g = lb
          , h = le
          , i = he
          , j = ie;
        return a.radius = function(b) {
            return arguments.length ? (h = ka(b),
            a) : h
        }
        ,
        a.source = function(b) {
            return arguments.length ? (f = ka(b),
            a) : f
        }
        ,
        a.target = function(b) {
            return arguments.length ? (g = ka(b),
            a) : g
        }
        ,
        a.startAngle = function(b) {
            return arguments.length ? (i = ka(b),
            a) : i
        }
        ,
        a.endAngle = function(b) {
            return arguments.length ? (j = ka(b),
            a) : j
        }
        ,
        a
    }
    ,
    hf.svg.diagonal = function() {
        function a(a, e) {
            var f = b.call(this, a, e)
              , g = c.call(this, a, e)
              , h = (f.y + g.y) / 2
              , i = [f, {
                x: f.x,
                y: h
            }, {
                x: g.x,
                y: h
            }, g];
            return i = i.map(d),
            "M" + i[0] + "C" + i[1] + " " + i[2] + " " + i[3]
        }
        var b = kb
          , c = lb
          , d = me;
        return a.source = function(c) {
            return arguments.length ? (b = ka(c),
            a) : b
        }
        ,
        a.target = function(b) {
            return arguments.length ? (c = ka(b),
            a) : c
        }
        ,
        a.projection = function(b) {
            return arguments.length ? (d = b,
            a) : d
        }
        ,
        a
    }
    ,
    hf.svg.diagonal.radial = function() {
        var a = hf.svg.diagonal()
          , b = me
          , c = a.projection;
        return a.projection = function(a) {
            return arguments.length ? c(ne(b = a)) : b
        }
        ,
        a
    }
    ,
    hf.svg.symbol = function() {
        function a(a, d) {
            return (bh.get(b.call(this, a, d)) || qe)(c.call(this, a, d))
        }
        var b = pe
          , c = oe;
        return a.type = function(c) {
            return arguments.length ? (b = ka(c),
            a) : b
        }
        ,
        a.size = function(b) {
            return arguments.length ? (c = ka(b),
            a) : c
        }
        ,
        a
    }
    ;
    var bh = hf.map({
        circle: qe,
        cross: function(a) {
            var b = Math.sqrt(a / 5) / 2;
            return "M" + -3 * b + "," + -b + "H" + -b + "V" + -3 * b + "H" + b + "V" + -b + "H" + 3 * b + "V" + b + "H" + b + "V" + 3 * b + "H" + -b + "V" + b + "H" + -3 * b + "Z"
        },
        diamond: function(a) {
            var b = Math.sqrt(a / (2 * eh))
              , c = b * eh;
            return "M0," + -b + "L" + c + ",0 0," + b + " " + -c + ",0Z"
        },
        square: function(a) {
            var b = Math.sqrt(a) / 2;
            return "M" + -b + "," + -b + "L" + b + "," + -b + " " + b + "," + b + " " + -b + "," + b + "Z"
        },
        "triangle-down": function(a) {
            var b = Math.sqrt(a / dh)
              , c = b * dh / 2;
            return "M0," + c + "L" + b + "," + -c + " " + -b + "," + -c + "Z"
        },
        "triangle-up": function(a) {
            var b = Math.sqrt(a / dh)
              , c = b * dh / 2;
            return "M0," + -c + "L" + b + "," + c + " " + -b + "," + c + "Z"
        }
    });
    hf.svg.symbolTypes = bh.keys();
    var ch, dh = Math.sqrt(3), eh = Math.tan(30 * Mf), fh = [], gh = 0, hh = {
        ease: zc,
        delay: 0,
        duration: 250
    };
    fh.call = Af.call,
    fh.empty = Af.empty,
    fh.node = Af.node,
    hf.transition = function(a) {
        return arguments.length ? ch ? a.transition() : a : Ff.transition()
    }
    ,
    hf.transition.prototype = fh,
    fh.select = function(a) {
        var b, c, d, e = this.id, f = [];
        "function" != typeof a && (a = s(a));
        for (var g = -1, h = this.length; ++g < h; ) {
            f.push(b = []);
            for (var i = this[g], j = -1, k = i.length; ++j < k; )
                (d = i[j]) && (c = a.call(d, d.__data__, j)) ? ("__data__" in d && (c.__data__ = d.__data__),
                ue(c, j, e, d.__transition__[e]),
                b.push(c)) : b.push(null )
        }
        return re(f, e)
    }
    ,
    fh.selectAll = function(a) {
        var b, c, d, e, f, g = this.id, h = [];
        "function" != typeof a && (a = t(a));
        for (var i = -1, j = this.length; ++i < j; )
            for (var k = this[i], l = -1, m = k.length; ++l < m; )
                if (d = k[l]) {
                    f = d.__transition__[g],
                    c = a.call(d, d.__data__, l),
                    h.push(b = []);
                    for (var n = -1, o = c.length; ++n < o; )
                        ue(e = c[n], n, g, f),
                        b.push(e)
                }
        return re(h, g)
    }
    ,
    fh.filter = function(a) {
        var b, c, d, e = [];
        "function" != typeof a && (a = C(a));
        for (var f = 0, g = this.length; g > f; f++) {
            e.push(b = []);
            for (var c = this[f], h = 0, i = c.length; i > h; h++)
                (d = c[h]) && a.call(d, d.__data__, h) && b.push(d)
        }
        return re(e, this.id, this.time).ease(this.ease())
    }
    ,
    fh.tween = function(a, b) {
        var c = this.id;
        return arguments.length < 2 ? this.node().__transition__[c].tween.get(a) : I(this, null  == b ? function(b) {
            b.__transition__[c].tween.remove(a)
        }
         : function(d) {
            d.__transition__[c].tween.set(a, b)
        }
        )
    }
    ,
    fh.attr = function(a, b) {
        function c() {
            this.removeAttribute(h)
        }
        function d() {
            this.removeAttributeNS(h.space, h.local)
        }
        function e(a) {
            return null  == a ? c : (a += "",
            function() {
                var b, c = this.getAttribute(h);
                return c !== a && (b = g(c, a),
                function(a) {
                    this.setAttribute(h, b(a))
                }
                )
            }
            )
        }
        function f(a) {
            return null  == a ? d : (a += "",
            function() {
                var b, c = this.getAttributeNS(h.space, h.local);
                return c !== a && (b = g(c, a),
                function(a) {
                    this.setAttributeNS(h.space, h.local, b(a))
                }
                )
            }
            )
        }
        if (arguments.length < 2) {
            for (b in a)
                this.attr(b, a[b]);
            return this
        }
        var g = sc(a)
          , h = hf.ns.qualify(a);
        return se(this, "attr." + a, b, h.local ? f : e)
    }
    ,
    fh.attrTween = function(a, b) {
        function c(a, c) {
            var d = b.call(this, a, c, this.getAttribute(e));
            return d && function(a) {
                this.setAttribute(e, d(a))
            }
        }
        function d(a, c) {
            var d = b.call(this, a, c, this.getAttributeNS(e.space, e.local));
            return d && function(a) {
                this.setAttributeNS(e.space, e.local, d(a))
            }
        }
        var e = hf.ns.qualify(a);
        return this.tween("attr." + a, e.local ? d : c)
    }
    ,
    fh.style = function(a, b, c) {
        function d() {
            this.style.removeProperty(a)
        }
        function e(b) {
            return null  == b ? d : (b += "",
            function() {
                var d, e = kf.getComputedStyle(this, null ).getPropertyValue(a);
                return e !== b && (d = g(e, b),
                function(b) {
                    this.style.setProperty(a, d(b), c)
                }
                )
            }
            )
        }
        var f = arguments.length;
        if (3 > f) {
            if ("string" != typeof a) {
                2 > f && (b = "");
                for (c in a)
                    this.style(c, a[c], b);
                return this
            }
            c = ""
        }
        var g = sc(a);
        return se(this, "style." + a, b, e)
    }
    ,
    fh.styleTween = function(a, b, c) {
        function d(d, e) {
            var f = b.call(this, d, e, kf.getComputedStyle(this, null ).getPropertyValue(a));
            return f && function(b) {
                this.style.setProperty(a, f(b), c)
            }
        }
        return arguments.length < 3 && (c = ""),
        this.tween("style." + a, d)
    }
    ,
    fh.text = function(a) {
        return se(this, "text", a, te)
    }
    ,
    fh.remove = function() {
        return this.each("end.transition", function() {
            var a;
            !this.__transition__ && (a = this.parentNode) && a.removeChild(this)
        })
    }
    ,
    fh.ease = function(a) {
        var b = this.id;
        return arguments.length < 1 ? this.node().__transition__[b].ease : ("function" != typeof a && (a = hf.ease.apply(hf, arguments)),
        I(this, function(c) {
            c.__transition__[b].ease = a
        }))
    }
    ,
    fh.delay = function(a) {
        var b = this.id;
        return I(this, "function" == typeof a ? function(c, d, e) {
            c.__transition__[b].delay = 0 | a.call(c, c.__data__, d, e)
        }
         : (a |= 0,
        function(c) {
            c.__transition__[b].delay = a
        }
        ))
    }
    ,
    fh.duration = function(a) {
        var b = this.id;
        return I(this, "function" == typeof a ? function(c, d, e) {
            c.__transition__[b].duration = Math.max(1, 0 | a.call(c, c.__data__, d, e))
        }
         : (a = Math.max(1, 0 | a),
        function(c) {
            c.__transition__[b].duration = a
        }
        ))
    }
    ,
    fh.each = function(a, b) {
        var c = this.id;
        if (arguments.length < 2) {
            var d = hh
              , e = ch;
            ch = c,
            I(this, function(b, d, e) {
                hh = b.__transition__[c],
                a.call(b, b.__data__, d, e)
            }),
            hh = d,
            ch = e
        } else
            I(this, function(d) {
                d.__transition__[c].event.on(a, b)
            });
        return this
    }
    ,
    fh.transition = function() {
        for (var a, b, c, d, e = this.id, f = ++gh, g = [], h = 0, i = this.length; i > h; h++) {
            g.push(a = []);
            for (var b = this[h], j = 0, k = b.length; k > j; j++)
                (c = b[j]) && (d = Object.create(c.__transition__[e]),
                d.delay += d.duration,
                ue(c, j, f, d)),
                a.push(c)
        }
        return re(g, f)
    }
    ,
    hf.svg.axis = function() {
        function a(a) {
            a.each(function() {
                var a, l = hf.select(this), m = null  == j ? c.ticks ? c.ticks.apply(c, i) : c.domain() : j, n = null  == b ? c.tickFormat ? c.tickFormat.apply(c, i) : String : b, o = xe(c, m, k), p = l.selectAll(".tick.minor").data(o, String), q = p.enter().insert("line", ".tick").attr("class", "tick minor").style("opacity", 1e-6), r = hf.transition(p.exit()).style("opacity", 1e-6).remove(), s = hf.transition(p).style("opacity", 1), t = l.selectAll(".tick.major").data(m, String), u = t.enter().insert("g", "path").attr("class", "tick major").style("opacity", 1e-6), v = hf.transition(t.exit()).style("opacity", 1e-6).remove(), w = hf.transition(t).style("opacity", 1), x = Kd(c), y = l.selectAll(".domain").data([0]), z = (y.enter().append("path").attr("class", "domain"),
                hf.transition(y)), A = c.copy(), B = this.__chart__ || A;
                this.__chart__ = A,
                u.append("line"),
                u.append("text");
                var C = u.select("line")
                  , D = w.select("line")
                  , E = t.select("text").text(n)
                  , F = u.select("text")
                  , G = w.select("text");
                switch (d) {
                case "bottom":
                    a = ve,
                    q.attr("y2", f),
                    s.attr("x2", 0).attr("y2", f),
                    C.attr("y2", e),
                    F.attr("y", Math.max(e, 0) + h),
                    D.attr("x2", 0).attr("y2", e),
                    G.attr("x", 0).attr("y", Math.max(e, 0) + h),
                    E.attr("dy", ".71em").style("text-anchor", "middle"),
                    z.attr("d", "M" + x[0] + "," + g + "V0H" + x[1] + "V" + g);
                    break;
                case "top":
                    a = ve,
                    q.attr("y2", -f),
                    s.attr("x2", 0).attr("y2", -f),
                    C.attr("y2", -e),
                    F.attr("y", -(Math.max(e, 0) + h)),
                    D.attr("x2", 0).attr("y2", -e),
                    G.attr("x", 0).attr("y", -(Math.max(e, 0) + h)),
                    E.attr("dy", "0em").style("text-anchor", "middle"),
                    z.attr("d", "M" + x[0] + "," + -g + "V0H" + x[1] + "V" + -g);
                    break;
                case "left":
                    a = we,
                    q.attr("x2", -f),
                    s.attr("x2", -f).attr("y2", 0),
                    C.attr("x2", -e),
                    F.attr("x", -(Math.max(e, 0) + h)),
                    D.attr("x2", -e).attr("y2", 0),
                    G.attr("x", -(Math.max(e, 0) + h)).attr("y", 0),
                    E.attr("dy", ".32em").style("text-anchor", "end"),
                    z.attr("d", "M" + -g + "," + x[0] + "H0V" + x[1] + "H" + -g);
                    break;
                case "right":
                    a = we,
                    q.attr("x2", f),
                    s.attr("x2", f).attr("y2", 0),
                    C.attr("x2", e),
                    F.attr("x", Math.max(e, 0) + h),
                    D.attr("x2", e).attr("y2", 0),
                    G.attr("x", Math.max(e, 0) + h).attr("y", 0),
                    E.attr("dy", ".32em").style("text-anchor", "start"),
                    z.attr("d", "M" + g + "," + x[0] + "H0V" + x[1] + "H" + g)
                }
                if (c.ticks)
                    u.call(a, B),
                    w.call(a, A),
                    v.call(a, A),
                    q.call(a, B),
                    s.call(a, A),
                    r.call(a, A);
                else {
                    var H = A.rangeBand() / 2
                      , I = function(a) {
                        return A(a) + H
                    }
                    ;
                    u.call(a, I),
                    w.call(a, I)
                }
            })
        }
        var b, c = hf.scale.linear(), d = ih, e = 6, f = 6, g = 6, h = 3, i = [10], j = null , k = 0;
        return a.scale = function(b) {
            return arguments.length ? (c = b,
            a) : c
        }
        ,
        a.orient = function(b) {
            return arguments.length ? (d = b in jh ? b + "" : ih,
            a) : d
        }
        ,
        a.ticks = function() {
            return arguments.length ? (i = arguments,
            a) : i
        }
        ,
        a.tickValues = function(b) {
            return arguments.length ? (j = b,
            a) : j
        }
        ,
        a.tickFormat = function(c) {
            return arguments.length ? (b = c,
            a) : b
        }
        ,
        a.tickSize = function(b, c) {
            if (!arguments.length)
                return e;
            var d = arguments.length - 1;
            return e = +b,
            f = d > 1 ? +c : e,
            g = d > 0 ? +arguments[d] : e,
            a
        }
        ,
        a.tickPadding = function(b) {
            return arguments.length ? (h = +b,
            a) : h
        }
        ,
        a.tickSubdivide = function(b) {
            return arguments.length ? (k = +b,
            a) : k
        }
        ,
        a
    }
    ;
    var ih = "bottom"
      , jh = {
        top: 1,
        right: 1,
        bottom: 1,
        left: 1
    };
    hf.svg.brush = function() {
        function a(f) {
            f.each(function() {
                var f, g = hf.select(this), k = g.selectAll(".background").data([0]), l = g.selectAll(".extent").data([0]), m = g.selectAll(".resize").data(j, String);
                g.style("pointer-events", "all").on("mousedown.brush", e).on("touchstart.brush", e),
                k.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"),
                l.enter().append("rect").attr("class", "extent").style("cursor", "move"),
                m.enter().append("g").attr("class", function(a) {
                    return "resize " + a
                }).style("cursor", function(a) {
                    return kh[a]
                }).append("rect").attr("x", function(a) {
                    return /[ew]$/.test(a) ? -3 : null 
                }).attr("y", function(a) {
                    return /^[ns]/.test(a) ? -3 : null 
                }).attr("width", 6).attr("height", 6).style("visibility", "hidden"),
                m.style("display", a.empty() ? "none" : null ),
                m.exit().remove(),
                h && (f = Kd(h),
                k.attr("x", f[0]).attr("width", f[1] - f[0]),
                c(g)),
                i && (f = Kd(i),
                k.attr("y", f[0]).attr("height", f[1] - f[0]),
                d(g)),
                b(g)
            })
        }
        function b(a) {
            a.selectAll(".resize").attr("transform", function(a) {
                return "translate(" + l[+/e$/.test(a)][0] + "," + l[+/^s/.test(a)][1] + ")"
            })
        }
        function c(a) {
            a.select(".extent").attr("x", l[0][0]),
            a.selectAll(".extent,.n>rect,.s>rect").attr("width", l[1][0] - l[0][0])
        }
        function d(a) {
            a.select(".extent").attr("y", l[0][1]),
            a.selectAll(".extent,.e>rect,.w>rect").attr("height", l[1][1] - l[0][1])
        }
        function e() {
            function e() {
                var a = hf.event.changedTouches;
                return a ? hf.touches(s, a)[0] : hf.mouse(s)
            }
            function j() {
                32 == hf.event.keyCode && (z || (q = null ,
                A[0] -= l[1][0],
                A[1] -= l[1][1],
                z = 2),
                k())
            }
            function m() {
                32 == hf.event.keyCode && 2 == z && (A[0] += l[1][0],
                A[1] += l[1][1],
                z = 0,
                k())
            }
            function n() {
                var a = e()
                  , f = !1;
                r && (a[0] += r[0],
                a[1] += r[1]),
                z || (hf.event.altKey ? (q || (q = [(l[0][0] + l[1][0]) / 2, (l[0][1] + l[1][1]) / 2]),
                A[0] = l[+(a[0] < q[0])][0],
                A[1] = l[+(a[1] < q[1])][1]) : q = null ),
                x && o(a, h, 0) && (c(v),
                f = !0),
                y && o(a, i, 1) && (d(v),
                f = !0),
                f && (b(v),
                u({
                    type: "brush",
                    mode: z ? "move" : "resize"
                }))
            }
            function o(a, b, c) {
                var d, e, g = Kd(b), h = g[0], i = g[1], j = A[c], k = l[1][c] - l[0][c];
                return z && (h -= j,
                i -= k + j),
                d = Math.max(h, Math.min(i, a[c])),
                z ? e = (d += j) + k : (q && (j = Math.max(h, Math.min(i, 2 * q[c] - d))),
                d > j ? (e = d,
                d = j) : e = j),
                l[0][c] !== d || l[1][c] !== e ? (f = null ,
                l[0][c] = d,
                l[1][c] = e,
                !0) : void 0
            }
            function p() {
                n(),
                v.style("pointer-events", "all").selectAll(".resize").style("display", a.empty() ? "none" : null ),
                hf.select("body").style("cursor", null ),
                B.on("mousemove.brush", null ).on("mouseup.brush", null ).on("touchmove.brush", null ).on("touchend.brush", null ).on("keydown.brush", null ).on("keyup.brush", null ),
                u({
                    type: "brushend"
                }),
                k()
            }
            var q, r, s = this, t = hf.select(hf.event.target), u = g.of(s, arguments), v = hf.select(s), w = t.datum(), x = !/^(n|s)$/.test(w) && h, y = !/^(e|w)$/.test(w) && i, z = t.classed("extent"), A = e(), B = hf.select(kf).on("mousemove.brush", n).on("mouseup.brush", p).on("touchmove.brush", n).on("touchend.brush", p).on("keydown.brush", j).on("keyup.brush", m);
            if (z)
                A[0] = l[0][0] - A[0],
                A[1] = l[0][1] - A[1];
            else if (w) {
                var C = +/w$/.test(w)
                  , D = +/^n/.test(w);
                r = [l[1 - C][0] - A[0], l[1 - D][1] - A[1]],
                A[0] = l[C][0],
                A[1] = l[D][1]
            } else
                hf.event.altKey && (q = A.slice());
            v.style("pointer-events", "none").selectAll(".resize").style("display", null ),
            hf.select("body").style("cursor", t.style("cursor")),
            u({
                type: "brushstart"
            }),
            n(),
            k()
        }
        var f, g = n(a, "brushstart", "brush", "brushend"), h = null , i = null , j = lh[0], l = [[0, 0], [0, 0]];
        return a.x = function(b) {
            return arguments.length ? (h = b,
            j = lh[!h << 1 | !i],
            a) : h
        }
        ,
        a.y = function(b) {
            return arguments.length ? (i = b,
            j = lh[!h << 1 | !i],
            a) : i
        }
        ,
        a.extent = function(b) {
            var c, d, e, g, j;
            return arguments.length ? (f = [[0, 0], [0, 0]],
            h && (c = b[0],
            d = b[1],
            i && (c = c[0],
            d = d[0]),
            f[0][0] = c,
            f[1][0] = d,
            h.invert && (c = h(c),
            d = h(d)),
            c > d && (j = c,
            c = d,
            d = j),
            l[0][0] = 0 | c,
            l[1][0] = 0 | d),
            i && (e = b[0],
            g = b[1],
            h && (e = e[1],
            g = g[1]),
            f[0][1] = e,
            f[1][1] = g,
            i.invert && (e = i(e),
            g = i(g)),
            e > g && (j = e,
            e = g,
            g = j),
            l[0][1] = 0 | e,
            l[1][1] = 0 | g),
            a) : (b = f || l,
            h && (c = b[0][0],
            d = b[1][0],
            f || (c = l[0][0],
            d = l[1][0],
            h.invert && (c = h.invert(c),
            d = h.invert(d)),
            c > d && (j = c,
            c = d,
            d = j))),
            i && (e = b[0][1],
            g = b[1][1],
            f || (e = l[0][1],
            g = l[1][1],
            i.invert && (e = i.invert(e),
            g = i.invert(g)),
            e > g && (j = e,
            e = g,
            g = j))),
            h && i ? [[c, e], [d, g]] : h ? [c, d] : i && [e, g])
        }
        ,
        a.clear = function() {
            return f = null ,
            l[0][0] = l[0][1] = l[1][0] = l[1][1] = 0,
            a
        }
        ,
        a.empty = function() {
            return h && l[0][0] === l[1][0] || i && l[0][1] === l[1][1]
        }
        ,
        hf.rebind(a, g, "on")
    }
    ;
    var kh = {
        n: "ns-resize",
        e: "ew-resize",
        s: "ns-resize",
        w: "ew-resize",
        nw: "nwse-resize",
        ne: "nesw-resize",
        se: "nwse-resize",
        sw: "nesw-resize"
    }
      , lh = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []];
    hf.time = {};
    var mh = Date
      , nh = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    ye.prototype = {
        getDate: function() {
            return this._.getUTCDate()
        },
        getDay: function() {
            return this._.getUTCDay()
        },
        getFullYear: function() {
            return this._.getUTCFullYear()
        },
        getHours: function() {
            return this._.getUTCHours()
        },
        getMilliseconds: function() {
            return this._.getUTCMilliseconds()
        },
        getMinutes: function() {
            return this._.getUTCMinutes()
        },
        getMonth: function() {
            return this._.getUTCMonth()
        },
        getSeconds: function() {
            return this._.getUTCSeconds()
        },
        getTime: function() {
            return this._.getTime();
        },
        getTimezoneOffset: function() {
            return 0
        },
        valueOf: function() {
            return this._.valueOf()
        },
        setDate: function() {
            oh.setUTCDate.apply(this._, arguments)
        },
        setDay: function() {
            oh.setUTCDay.apply(this._, arguments)
        },
        setFullYear: function() {
            oh.setUTCFullYear.apply(this._, arguments)
        },
        setHours: function() {
            oh.setUTCHours.apply(this._, arguments)
        },
        setMilliseconds: function() {
            oh.setUTCMilliseconds.apply(this._, arguments)
        },
        setMinutes: function() {
            oh.setUTCMinutes.apply(this._, arguments)
        },
        setMonth: function() {
            oh.setUTCMonth.apply(this._, arguments)
        },
        setSeconds: function() {
            oh.setUTCSeconds.apply(this._, arguments)
        },
        setTime: function() {
            oh.setTime.apply(this._, arguments)
        }
    };
    var oh = Date.prototype
      , ph = "%a %b %e %X %Y"
      , qh = "%m/%d/%Y"
      , rh = "%H:%M:%S"
      , sh = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      , th = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      , uh = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      , vh = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    hf.time.year = ze(function(a) {
        return a = hf.time.day(a),
        a.setMonth(0, 1),
        a
    }, function(a, b) {
        a.setFullYear(a.getFullYear() + b)
    }, function(a) {
        return a.getFullYear()
    }),
    hf.time.years = hf.time.year.range,
    hf.time.years.utc = hf.time.year.utc.range,
    hf.time.day = ze(function(a) {
        var b = new mh(1970,0);
        return b.setFullYear(a.getFullYear(), a.getMonth(), a.getDate()),
        b
    }, function(a, b) {
        a.setDate(a.getDate() + b)
    }, function(a) {
        return a.getDate() - 1
    }),
    hf.time.days = hf.time.day.range,
    hf.time.days.utc = hf.time.day.utc.range,
    hf.time.dayOfYear = function(a) {
        var b = hf.time.year(a);
        return Math.floor((a - b - 6e4 * (a.getTimezoneOffset() - b.getTimezoneOffset())) / 864e5)
    }
    ,
    nh.forEach(function(a, b) {
        a = a.toLowerCase(),
        b = 7 - b;
        var c = hf.time[a] = ze(function(a) {
            return (a = hf.time.day(a)).setDate(a.getDate() - (a.getDay() + b) % 7),
            a
        }, function(a, b) {
            a.setDate(a.getDate() + 7 * Math.floor(b))
        }, function(a) {
            var c = hf.time.year(a).getDay();
            return Math.floor((hf.time.dayOfYear(a) + (c + b) % 7) / 7) - (c !== b)
        });
        hf.time[a + "s"] = c.range,
        hf.time[a + "s"].utc = c.utc.range,
        hf.time[a + "OfYear"] = function(a) {
            var c = hf.time.year(a).getDay();
            return Math.floor((hf.time.dayOfYear(a) + (c + b) % 7) / 7)
        }
    }),
    hf.time.week = hf.time.sunday,
    hf.time.weeks = hf.time.sunday.range,
    hf.time.weeks.utc = hf.time.sunday.utc.range,
    hf.time.weekOfYear = hf.time.sundayOfYear,
    hf.time.format = function(a) {
        function b(b) {
            for (var d, e, f, g = [], h = -1, i = 0; ++h < c; )
                37 === a.charCodeAt(h) && (g.push(a.substring(i, h)),
                null  != (e = Ch[d = a.charAt(++h)]) && (d = a.charAt(++h)),
                (f = Dh[d]) && (d = f(b, null  == e ? "e" === d ? " " : "0" : e)),
                g.push(d),
                i = h + 1);
            return g.push(a.substring(i, h)),
            g.join("")
        }
        var c = a.length;
        return b.parse = function(b) {
            var c = {
                y: 1900,
                m: 0,
                d: 1,
                H: 0,
                M: 0,
                S: 0,
                L: 0
            }
              , d = Be(c, a, b, 0);
            if (d != b.length)
                return null ;
            "p" in c && (c.H = c.H % 12 + 12 * c.p);
            var e = new mh;
            return e.setFullYear(c.y, c.m, c.d),
            e.setHours(c.H, c.M, c.S, c.L),
            e
        }
        ,
        b.toString = function() {
            return a
        }
        ,
        b
    }
    ;
    var wh = Ce(sh)
      , xh = Ce(th)
      , yh = Ce(uh)
      , zh = De(uh)
      , Ah = Ce(vh)
      , Bh = De(vh)
      , Ch = {
        "-": "",
        _: " ",
        0: "0"
    }
      , Dh = {
        a: function(a) {
            return th[a.getDay()]
        },
        A: function(a) {
            return sh[a.getDay()]
        },
        b: function(a) {
            return vh[a.getMonth()]
        },
        B: function(a) {
            return uh[a.getMonth()]
        },
        c: hf.time.format(ph),
        d: function(a, b) {
            return Ee(a.getDate(), b, 2)
        },
        e: function(a, b) {
            return Ee(a.getDate(), b, 2)
        },
        H: function(a, b) {
            return Ee(a.getHours(), b, 2)
        },
        I: function(a, b) {
            return Ee(a.getHours() % 12 || 12, b, 2)
        },
        j: function(a, b) {
            return Ee(1 + hf.time.dayOfYear(a), b, 3)
        },
        L: function(a, b) {
            return Ee(a.getMilliseconds(), b, 3)
        },
        m: function(a, b) {
            return Ee(a.getMonth() + 1, b, 2)
        },
        M: function(a, b) {
            return Ee(a.getMinutes(), b, 2)
        },
        p: function(a) {
            return a.getHours() >= 12 ? "PM" : "AM"
        },
        S: function(a, b) {
            return Ee(a.getSeconds(), b, 2)
        },
        U: function(a, b) {
            return Ee(hf.time.sundayOfYear(a), b, 2)
        },
        w: function(a) {
            return a.getDay()
        },
        W: function(a, b) {
            return Ee(hf.time.mondayOfYear(a), b, 2)
        },
        x: hf.time.format(qh),
        X: hf.time.format(rh),
        y: function(a, b) {
            return Ee(a.getFullYear() % 100, b, 2)
        },
        Y: function(a, b) {
            return Ee(a.getFullYear() % 1e4, b, 4)
        },
        Z: We,
        "%": function() {
            return "%"
        }
    }
      , Eh = {
        a: Fe,
        A: Ge,
        b: He,
        B: Ie,
        c: Je,
        d: Qe,
        e: Qe,
        H: Re,
        I: Re,
        L: Ue,
        m: Pe,
        M: Se,
        p: Ve,
        S: Te,
        x: Ke,
        X: Le,
        y: Ne,
        Y: Me
    }
      , Fh = /^\s*\d+/
      , Gh = hf.map({
        am: 0,
        pm: 1
    });
    hf.time.format.utc = function(a) {
        function b(a) {
            try {
                mh = ye;
                var b = new mh;
                return b._ = a,
                c(b)
            } finally {
                mh = Date
            }
        }
        var c = hf.time.format(a);
        return b.parse = function(a) {
            try {
                mh = ye;
                var b = c.parse(a);
                return b && b._
            } finally {
                mh = Date
            }
        }
        ,
        b.toString = c.toString,
        b
    }
    ;
    var Hh = hf.time.format.utc("%Y-%m-%dT%H:%M:%S.%LZ");
    hf.time.format.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? Xe : Hh,
    Xe.parse = function(a) {
        var b = new Date(a);
        return isNaN(b) ? null  : b
    }
    ,
    Xe.toString = Hh.toString,
    hf.time.second = ze(function(a) {
        return new mh(1e3 * Math.floor(a / 1e3))
    }, function(a, b) {
        a.setTime(a.getTime() + 1e3 * Math.floor(b))
    }, function(a) {
        return a.getSeconds()
    }),
    hf.time.seconds = hf.time.second.range,
    hf.time.seconds.utc = hf.time.second.utc.range,
    hf.time.minute = ze(function(a) {
        return new mh(6e4 * Math.floor(a / 6e4))
    }, function(a, b) {
        a.setTime(a.getTime() + 6e4 * Math.floor(b))
    }, function(a) {
        return a.getMinutes()
    }),
    hf.time.minutes = hf.time.minute.range,
    hf.time.minutes.utc = hf.time.minute.utc.range,
    hf.time.hour = ze(function(a) {
        var b = a.getTimezoneOffset() / 60;
        return new mh(36e5 * (Math.floor(a / 36e5 - b) + b))
    }, function(a, b) {
        a.setTime(a.getTime() + 36e5 * Math.floor(b))
    }, function(a) {
        return a.getHours()
    }),
    hf.time.hours = hf.time.hour.range,
    hf.time.hours.utc = hf.time.hour.utc.range,
    hf.time.month = ze(function(a) {
        return a = hf.time.day(a),
        a.setDate(1),
        a
    }, function(a, b) {
        a.setMonth(a.getMonth() + b)
    }, function(a) {
        return a.getMonth()
    }),
    hf.time.months = hf.time.month.range,
    hf.time.months.utc = hf.time.month.utc.range;
    var Ih = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6]
      , Jh = [[hf.time.second, 1], [hf.time.second, 5], [hf.time.second, 15], [hf.time.second, 30], [hf.time.minute, 1], [hf.time.minute, 5], [hf.time.minute, 15], [hf.time.minute, 30], [hf.time.hour, 1], [hf.time.hour, 3], [hf.time.hour, 6], [hf.time.hour, 12], [hf.time.day, 1], [hf.time.day, 2], [hf.time.week, 1], [hf.time.month, 1], [hf.time.month, 3], [hf.time.year, 1]]
      , Kh = [[hf.time.format("%Y"), Ia], [hf.time.format("%B"), function(a) {
        return a.getMonth()
    }
    ], [hf.time.format("%b %d"), function(a) {
        return 1 != a.getDate()
    }
    ], [hf.time.format("%a %d"), function(a) {
        return a.getDay() && 1 != a.getDate()
    }
    ], [hf.time.format("%I %p"), function(a) {
        return a.getHours()
    }
    ], [hf.time.format("%I:%M"), function(a) {
        return a.getMinutes()
    }
    ], [hf.time.format(":%S"), function(a) {
        return a.getSeconds()
    }
    ], [hf.time.format(".%L"), function(a) {
        return a.getMilliseconds()
    }
    ]]
      , Lh = hf.scale.linear()
      , Mh = $e(Kh);
    Jh.year = function(a, b) {
        return Lh.domain(a.map(af)).ticks(b).map(_e)
    }
    ,
    hf.time.scale = function() {
        return Ye(hf.scale.linear(), Jh, Mh)
    }
    ;
    var Nh = Jh.map(function(a) {
        return [a[0].utc, a[1]]
    })
      , Oh = [[hf.time.format.utc("%Y"), Ia], [hf.time.format.utc("%B"), function(a) {
        return a.getUTCMonth()
    }
    ], [hf.time.format.utc("%b %d"), function(a) {
        return 1 != a.getUTCDate()
    }
    ], [hf.time.format.utc("%a %d"), function(a) {
        return a.getUTCDay() && 1 != a.getUTCDate()
    }
    ], [hf.time.format.utc("%I %p"), function(a) {
        return a.getUTCHours()
    }
    ], [hf.time.format.utc("%I:%M"), function(a) {
        return a.getUTCMinutes()
    }
    ], [hf.time.format.utc(":%S"), function(a) {
        return a.getUTCSeconds()
    }
    ], [hf.time.format.utc(".%L"), function(a) {
        return a.getUTCMilliseconds()
    }
    ]]
      , Ph = $e(Oh);
    return Nh.year = function(a, b) {
        return Lh.domain(a.map(cf)).ticks(b).map(bf)
    }
    ,
    hf.time.scale.utc = function() {
        return Ye(hf.scale.linear(), Nh, Ph)
    }
    ,
    hf.text = function() {
        return hf.xhr.apply(hf, arguments).response(df)
    }
    ,
    hf.json = function(a, b) {
        return hf.xhr(a, "application/json", b).response(ef)
    }
    ,
    hf.html = function(a, b) {
        return hf.xhr(a, "text/html", b).response(ff)
    }
    ,
    hf.xml = function() {
        return hf.xhr.apply(hf, arguments).response(gf)
    }
    ,
    hf
}(),
function(a) {
    function b(a, b) {
        return function(c) {
            return i(a.call(this, c), b)
        }
    }
    function c(a) {
        return function(b) {
            return this.lang().ordinal(a.call(this, b))
        }
    }
    function d() {}
    function e(a) {
        g(this, a)
    }
    function f(a) {
        var b = this._data = {}
          , c = a.years || a.year || a.y || 0
          , d = a.months || a.month || a.M || 0
          , e = a.weeks || a.week || a.w || 0
          , f = a.days || a.day || a.d || 0
          , g = a.hours || a.hour || a.h || 0
          , i = a.minutes || a.minute || a.m || 0
          , j = a.seconds || a.second || a.s || 0
          , k = a.milliseconds || a.millisecond || a.ms || 0;
        this._milliseconds = k + 1e3 * j + 6e4 * i + 36e5 * g,
        this._days = f + 7 * e,
        this._months = d + 12 * c,
        b.milliseconds = k % 1e3,
        j += h(k / 1e3),
        b.seconds = j % 60,
        i += h(j / 60),
        b.minutes = i % 60,
        g += h(i / 60),
        b.hours = g % 24,
        f += h(g / 24),
        f += 7 * e,
        b.days = f % 30,
        d += h(f / 30),
        b.months = d % 12,
        c += h(d / 12),
        b.years = c
    }
    function g(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    }
    function h(a) {
        return 0 > a ? Math.ceil(a) : Math.floor(a)
    }
    function i(a, b) {
        for (var c = a + ""; c.length < b; )
            c = "0" + c;
        return c
    }
    function j(a, b, c) {
        var d, e = b._milliseconds, f = b._days, g = b._months;
        e && a._d.setTime(+a + e * c),
        f && a.date(a.date() + f * c),
        g && (d = a.date(),
        a.date(1).month(a.month() + g * c).date(Math.min(d, a.daysInMonth())))
    }
    function k(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }
    function l(a, b) {
        var c, d = Math.min(a.length, b.length), e = Math.abs(a.length - b.length), f = 0;
        for (c = 0; d > c; c++)
            ~~a[c] !== ~~b[c] && f++;
        return f + e
    }
    function m(a, b) {
        return b.abbr = a,
        J[a] || (J[a] = new d),
        J[a].set(b),
        J[a]
    }
    function n(a) {
        return a ? (!J[a] && K && require("./lang/" + a),
        J[a]) : F.fn._lang
    }
    function o(a) {
        return a.match(/\[.*\]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
    }
    function p(a) {
        var b, c, d = a.match(M);
        for (b = 0,
        c = d.length; c > b; b++)
            ea[d[b]] ? d[b] = ea[d[b]] : d[b] = o(d[b]);
        return function(e) {
            var f = "";
            for (b = 0; c > b; b++)
                f += "function" == typeof d[b].call ? d[b].call(e, a) : d[b];
            return f
        }
    }
    function q(a, b) {
        function c(b) {
            return a.lang().longDateFormat(b) || b
        }
        for (var d = 5; d-- && N.test(b); )
            b = b.replace(N, c);
        return ba[b] || (ba[b] = p(b)),
        ba[b](a)
    }
    function r(a) {
        switch (a) {
        case "DDDD":
            return Q;
        case "YYYY":
            return R;
        case "YYYYY":
            return S;
        case "S":
        case "SS":
        case "SSS":
        case "DDD":
            return P;
        case "MMM":
        case "MMMM":
        case "dd":
        case "ddd":
        case "dddd":
        case "a":
        case "A":
            return T;
        case "X":
            return W;
        case "Z":
        case "ZZ":
            return U;
        case "T":
            return V;
        case "MM":
        case "DD":
        case "YY":
        case "HH":
        case "hh":
        case "mm":
        case "ss":
        case "M":
        case "D":
        case "d":
        case "H":
        case "h":
        case "m":
        case "s":
            return O;
        default:
            return new RegExp(a.replace("\\", ""))
        }
    }
    function s(a, b, c) {
        var d, e = c._a;
        switch (a) {
        case "M":
        case "MM":
            e[1] = null  == b ? 0 : ~~b - 1;
            break;
        case "MMM":
        case "MMMM":
            d = n(c._l).monthsParse(b),
            null  != d ? e[1] = d : c._isValid = !1;
            break;
        case "D":
        case "DD":
        case "DDD":
        case "DDDD":
            null  != b && (e[2] = ~~b);
            break;
        case "YY":
            e[0] = ~~b + (~~b > 68 ? 1900 : 2e3);
            break;
        case "YYYY":
        case "YYYYY":
            e[0] = ~~b;
            break;
        case "a":
        case "A":
            c._isPm = "pm" === (b + "").toLowerCase();
            break;
        case "H":
        case "HH":
        case "h":
        case "hh":
            e[3] = ~~b;
            break;
        case "m":
        case "mm":
            e[4] = ~~b;
            break;
        case "s":
        case "ss":
            e[5] = ~~b;
            break;
        case "S":
        case "SS":
        case "SSS":
            e[6] = ~~(1e3 * ("0." + b));
            break;
        case "X":
            c._d = new Date(1e3 * parseFloat(b));
            break;
        case "Z":
        case "ZZ":
            c._useUTC = !0,
            d = (b + "").match($),
            d && d[1] && (c._tzh = ~~d[1]),
            d && d[2] && (c._tzm = ~~d[2]),
            d && "+" === d[0] && (c._tzh = -c._tzh,
            c._tzm = -c._tzm)
        }
        null  == b && (c._isValid = !1)
    }
    function t(a) {
        var b, c, d = [];
        if (!a._d) {
            for (b = 0; 7 > b; b++)
                a._a[b] = d[b] = null  == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
            d[3] += a._tzh || 0,
            d[4] += a._tzm || 0,
            c = new Date(0),
            a._useUTC ? (c.setUTCFullYear(d[0], d[1], d[2]),
            c.setUTCHours(d[3], d[4], d[5], d[6])) : (c.setFullYear(d[0], d[1], d[2]),
            c.setHours(d[3], d[4], d[5], d[6])),
            a._d = c
        }
    }
    function u(a) {
        var b, c, d = a._f.match(M), e = a._i;
        for (a._a = [],
        b = 0; b < d.length; b++)
            c = (r(d[b]).exec(e) || [])[0],
            c && (e = e.slice(e.indexOf(c) + c.length)),
            ea[d[b]] && s(d[b], c, a);
        a._isPm && a._a[3] < 12 && (a._a[3] += 12),
        a._isPm === !1 && 12 === a._a[3] && (a._a[3] = 0),
        t(a)
    }
    function v(a) {
        for (var b, c, d, f, h = 99; a._f.length; ) {
            if (b = g({}, a),
            b._f = a._f.pop(),
            u(b),
            c = new e(b),
            c.isValid()) {
                d = c;
                break
            }
            f = l(b._a, c.toArray()),
            h > f && (h = f,
            d = c)
        }
        g(a, d)
    }
    function w(a) {
        var b, c = a._i;
        if (X.exec(c)) {
            for (a._f = "YYYY-MM-DDT",
            b = 0; 4 > b; b++)
                if (Z[b][1].exec(c)) {
                    a._f += Z[b][0];
                    break
                }
            U.exec(c) && (a._f += " Z"),
            u(a)
        } else
            a._d = new Date(c)
    }
    function x(b) {
        var c = b._i
          , d = L.exec(c);
        c === a ? b._d = new Date : d ? b._d = new Date(+d[1]) : "string" == typeof c ? w(b) : k(c) ? (b._a = c.slice(0),
        t(b)) : b._d = c instanceof Date ? new Date(+c) : new Date(c)
    }
    function y(a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d)
    }
    function z(a, b, c) {
        var d = I(Math.abs(a) / 1e3)
          , e = I(d / 60)
          , f = I(e / 60)
          , g = I(f / 24)
          , h = I(g / 365)
          , i = 45 > d && ["s", d] || 1 === e && ["m"] || 45 > e && ["mm", e] || 1 === f && ["h"] || 22 > f && ["hh", f] || 1 === g && ["d"] || 25 >= g && ["dd", g] || 45 >= g && ["M"] || 345 > g && ["MM", I(g / 30)] || 1 === h && ["y"] || ["yy", h];
        return i[2] = b,
        i[3] = a > 0,
        i[4] = c,
        y.apply({}, i)
    }
    function A(a, b, c) {
        var d = c - b
          , e = c - a.day();
        return e > d && (e -= 7),
        d - 7 > e && (e += 7),
        Math.ceil(F(a).add("d", e).dayOfYear() / 7)
    }
    function B(a) {
        var b = a._i
          , c = a._f;
        return null  === b || "" === b ? null  : ("string" == typeof b && (a._i = b = n().preparse(b)),
        F.isMoment(b) ? (a = g({}, b),
        a._d = new Date(+b._d)) : c ? k(c) ? v(a) : u(a) : x(a),
        new e(a))
    }
    function C(a, b) {
        F.fn[a] = F.fn[a + "s"] = function(a) {
            var c = this._isUTC ? "UTC" : "";
            return null  != a ? (this._d["set" + c + b](a),
            this) : this._d["get" + c + b]()
        }
    }
    function D(a) {
        F.duration.fn[a] = function() {
            return this._data[a]
        }
    }
    function E(a, b) {
        F.duration.fn["as" + a] = function() {
            return +this / b
        }
    }
    for (var F, G, H = "2.0.0", I = Math.round, J = {}, K = "undefined" != typeof module && module.exports, L = /^\/?Date\((\-?\d+)/i, M = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g, N = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, O = /\d\d?/, P = /\d{1,3}/, Q = /\d{3}/, R = /\d{1,4}/, S = /[+\-]?\d{1,6}/, T = /[0-9]*[a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF]+\s*?[\u0600-\u06FF]+/i, U = /Z|[\+\-]\d\d:?\d\d/i, V = /T/i, W = /[\+\-]?\d+(\.\d{1,3})?/, X = /^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/, Y = "YYYY-MM-DDTHH:mm:ssZ", Z = [["HH:mm:ss.S", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], $ = /([\+\-]|\d\d)/gi, _ = "Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"), aa = {
        Milliseconds: 1,
        Seconds: 1e3,
        Minutes: 6e4,
        Hours: 36e5,
        Days: 864e5,
        Months: 2592e6,
        Years: 31536e6
    }, ba = {}, ca = "DDD w W M D d".split(" "), da = "M D H h m s w W".split(" "), ea = {
        M: function() {
            return this.month() + 1
        },
        MMM: function(a) {
            return this.lang().monthsShort(this, a)
        },
        MMMM: function(a) {
            return this.lang().months(this, a)
        },
        D: function() {
            return this.date()
        },
        DDD: function() {
            return this.dayOfYear()
        },
        d: function() {
            return this.day()
        },
        dd: function(a) {
            return this.lang().weekdaysMin(this, a)
        },
        ddd: function(a) {
            return this.lang().weekdaysShort(this, a)
        },
        dddd: function(a) {
            return this.lang().weekdays(this, a)
        },
        w: function() {
            return this.week()
        },
        W: function() {
            return this.isoWeek()
        },
        YY: function() {
            return i(this.year() % 100, 2)
        },
        YYYY: function() {
            return i(this.year(), 4)
        },
        YYYYY: function() {
            return i(this.year(), 5)
        },
        a: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !0)
        },
        A: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !1)
        },
        H: function() {
            return this.hours()
        },
        h: function() {
            return this.hours() % 12 || 12
        },
        m: function() {
            return this.minutes()
        },
        s: function() {
            return this.seconds()
        },
        S: function() {
            return ~~(this.milliseconds() / 100)
        },
        SS: function() {
            return i(~~(this.milliseconds() / 10), 2)
        },
        SSS: function() {
            return i(this.milliseconds(), 3)
        },
        Z: function() {
            var a = -this.zone()
              , b = "+";
            return 0 > a && (a = -a,
            b = "-"),
            b + i(~~(a / 60), 2) + ":" + i(~~a % 60, 2)
        },
        ZZ: function() {
            var a = -this.zone()
              , b = "+";
            return 0 > a && (a = -a,
            b = "-"),
            b + i(~~(10 * a / 6), 4)
        },
        X: function() {
            return this.unix()
        }
    }; ca.length; )
        G = ca.pop(),
        ea[G + "o"] = c(ea[G]);
    for (; da.length; )
        G = da.pop(),
        ea[G + G] = b(ea[G], 2);
    for (ea.DDDD = b(ea.DDD, 3),
    d.prototype = {
        set: function(a) {
            var b, c;
            for (c in a)
                b = a[c],
                "function" == typeof b ? this[c] = b : this["_" + c] = b
        },
        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months: function(a) {
            return this._months[a.month()]
        },
        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort: function(a) {
            return this._monthsShort[a.month()]
        },
        monthsParse: function(a) {
            var b, c, d;
            for (this._monthsParse || (this._monthsParse = []),
            b = 0; 12 > b; b++)
                if (this._monthsParse[b] || (c = F([2e3, b]),
                d = "^" + this.months(c, "") + "|^" + this.monthsShort(c, ""),
                this._monthsParse[b] = new RegExp(d.replace(".", ""),"i")),
                this._monthsParse[b].test(a))
                    return b
        },
        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays: function(a) {
            return this._weekdays[a.day()]
        },
        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort: function(a) {
            return this._weekdaysShort[a.day()]
        },
        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin: function(a) {
            return this._weekdaysMin[a.day()]
        },
        _longDateFormat: {
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D YYYY",
            LLL: "MMMM D YYYY LT",
            LLLL: "dddd, MMMM D YYYY LT"
        },
        longDateFormat: function(a) {
            var b = this._longDateFormat[a];
            return !b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(a) {
                return a.slice(1)
            }),
            this._longDateFormat[a] = b),
            b
        },
        meridiem: function(a, b, c) {
            return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
        },
        _calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[last] dddd [at] LT",
            sameElse: "L"
        },
        calendar: function(a, b) {
            var c = this._calendar[a];
            return "function" == typeof c ? c.apply(b) : c
        },
        _relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        relativeTime: function(a, b, c, d) {
            var e = this._relativeTime[c];
            return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a)
        },
        pastFuture: function(a, b) {
            var c = this._relativeTime[a > 0 ? "future" : "past"];
            return "function" == typeof c ? c(b) : c.replace(/%s/i, b)
        },
        ordinal: function(a) {
            return this._ordinal.replace("%d", a)
        },
        _ordinal: "%d",
        preparse: function(a) {
            return a
        },
        postformat: function(a) {
            return a
        },
        week: function(a) {
            return A(a, this._week.dow, this._week.doy)
        },
        _week: {
            dow: 0,
            doy: 6
        }
    },
    F = function(a, b, c) {
        return B({
            _i: a,
            _f: b,
            _l: c,
            _isUTC: !1
        })
    }
    ,
    F.utc = function(a, b, c) {
        return B({
            _useUTC: !0,
            _isUTC: !0,
            _l: c,
            _i: a,
            _f: b
        })
    }
    ,
    F.unix = function(a) {
        return F(1e3 * a)
    }
    ,
    F.duration = function(a, b) {
        var c, d = F.isDuration(a), e = "number" == typeof a, g = d ? a._data : e ? {} : a;
        return e && (b ? g[b] = a : g.milliseconds = a),
        c = new f(g),
        d && a.hasOwnProperty("_lang") && (c._lang = a._lang),
        c
    }
    ,
    F.version = H,
    F.defaultFormat = Y,
    F.lang = function(a, b) {
        return a ? (b ? m(a, b) : J[a] || n(a),
        void (F.duration.fn._lang = F.fn._lang = n(a))) : F.fn._lang._abbr
    }
    ,
    F.langData = function(a) {
        return a && a._lang && a._lang._abbr && (a = a._lang._abbr),
        n(a)
    }
    ,
    F.isMoment = function(a) {
        return a instanceof e
    }
    ,
    F.isDuration = function(a) {
        return a instanceof f
    }
    ,
    F.fn = e.prototype = {
        clone: function() {
            return F(this)
        },
        valueOf: function() {
            return +this._d
        },
        unix: function() {
            return Math.floor(+this._d / 1e3)
        },
        toString: function() {
            return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        },
        toDate: function() {
            return this._d
        },
        toJSON: function() {
            return F.utc(this).format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        },
        toArray: function() {
            var a = this;
            return [a.year(), a.month(), a.date(), a.hours(), a.minutes(), a.seconds(), a.milliseconds()]
        },
        isValid: function() {
            return null  == this._isValid && (this._a ? this._isValid = !l(this._a, (this._isUTC ? F.utc(this._a) : F(this._a)).toArray()) : this._isValid = !isNaN(this._d.getTime())),
            !!this._isValid
        },
        utc: function() {
            return this._isUTC = !0,
            this
        },
        local: function() {
            return this._isUTC = !1,
            this
        },
        format: function(a) {
            var b = q(this, a || F.defaultFormat);
            return this.lang().postformat(b)
        },
        add: function(a, b) {
            var c;
            return c = "string" == typeof a ? F.duration(+b, a) : F.duration(a, b),
            j(this, c, 1),
            this
        },
        subtract: function(a, b) {
            var c;
            return c = "string" == typeof a ? F.duration(+b, a) : F.duration(a, b),
            j(this, c, -1),
            this
        },
        diff: function(a, b, c) {
            var d, e, f = this._isUTC ? F(a).utc() : F(a).local(), g = 6e4 * (this.zone() - f.zone());
            return b && (b = b.replace(/s$/, "")),
            "year" === b || "month" === b ? (d = 432e5 * (this.daysInMonth() + f.daysInMonth()),
            e = 12 * (this.year() - f.year()) + (this.month() - f.month()),
            e += (this - F(this).startOf("month") - (f - F(f).startOf("month"))) / d,
            "year" === b && (e /= 12)) : (d = this - f - g,
            e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? d / 864e5 : "week" === b ? d / 6048e5 : d),
            c ? e : h(e)
        },
        from: function(a, b) {
            return F.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)
        },
        fromNow: function(a) {
            return this.from(F(), a)
        },
        calendar: function() {
            var a = this.diff(F().startOf("day"), "days", !0)
              , b = -6 > a ? "sameElse" : -1 > a ? "lastWeek" : 0 > a ? "lastDay" : 1 > a ? "sameDay" : 2 > a ? "nextDay" : 7 > a ? "nextWeek" : "sameElse";
            return this.format(this.lang().calendar(b, this))
        },
        isLeapYear: function() {
            var a = this.year();
            return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
        },
        isDST: function() {
            return this.zone() < F([this.year()]).zone() || this.zone() < F([this.year(), 5]).zone()
        },
        day: function(a) {
            var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null  == a ? b : this.add({
                d: a - b
            })
        },
        startOf: function(a) {
            switch (a = a.replace(/s$/, "")) {
            case "year":
                this.month(0);
            case "month":
                this.date(1);
            case "week":
            case "day":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
            }
            return "week" === a && this.day(0),
            this
        },
        endOf: function(a) {
            return this.startOf(a).add(a.replace(/s?$/, "s"), 1).subtract("ms", 1)
        },
        isAfter: function(a, b) {
            return b = "undefined" != typeof b ? b : "millisecond",
            +this.clone().startOf(b) > +F(a).startOf(b)
        },
        isBefore: function(a, b) {
            return b = "undefined" != typeof b ? b : "millisecond",
            +this.clone().startOf(b) < +F(a).startOf(b)
        },
        isSame: function(a, b) {
            return b = "undefined" != typeof b ? b : "millisecond",
            +this.clone().startOf(b) === +F(a).startOf(b)
        },
        zone: function() {
            return this._isUTC ? 0 : this._d.getTimezoneOffset()
        },
        daysInMonth: function() {
            return F.utc([this.year(), this.month() + 1, 0]).date()
        },
        dayOfYear: function(a) {
            var b = I((F(this).startOf("day") - F(this).startOf("year")) / 864e5) + 1;
            return null  == a ? b : this.add("d", a - b)
        },
        isoWeek: function(a) {
            var b = A(this, 1, 4);
            return null  == a ? b : this.add("d", 7 * (a - b))
        },
        week: function(a) {
            var b = this.lang().week(this);
            return null  == a ? b : this.add("d", 7 * (a - b))
        },
        lang: function(b) {
            return b === a ? this._lang : (this._lang = n(b),
            this)
        }
    },
    G = 0; G < _.length; G++)
        C(_[G].toLowerCase().replace(/s$/, ""), _[G]);
    C("year", "FullYear"),
    F.fn.days = F.fn.day,
    F.fn.weeks = F.fn.week,
    F.fn.isoWeeks = F.fn.isoWeek,
    F.duration.fn = f.prototype = {
        weeks: function() {
            return h(this.days() / 7)
        },
        valueOf: function() {
            return this._milliseconds + 864e5 * this._days + 2592e6 * this._months
        },
        humanize: function(a) {
            var b = +this
              , c = z(b, !a, this.lang());
            return a && (c = this.lang().pastFuture(b, c)),
            this.lang().postformat(c)
        },
        lang: F.fn.lang
    };
    for (G in aa)
        aa.hasOwnProperty(G) && (E(G, aa[G]),
        D(G.toLowerCase()));
    E("Weeks", 6048e5),
    F.lang("en", {
        ordinal: function(a) {
            var b = a % 10
              , c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            return a + c
        }
    }),
    K && (module.exports = F),
    "undefined" == typeof ender && (this.moment = F),
    "function" == typeof define && define.amd && define("moment", [], function() {
        return F
    })
}
.call(this),
$(document).ready(function() {
    if ("undefined" != typeof addthis && (addthis.init(),
    window.onload = function() {
        $(".addthis_toolbox").show()
    }
    ),
    !document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")) {
        var a = "Oh no - this application won't work in your web browser. Sorry, please try again in";
        return a += " a modern browser like ",
        a += " <a href='http://windows.microsoft.com/en-GB/internet-explorer/download-ie'>Internet Explorer 9/10</a>, ",
        a += " <a href='http://www.google.com/chrome'>Chrome</a>,",
        a += " <a href='http://www.mozilla.org/en-US/firefox/new/'>Firefox</a>,",
        a += " or <a href='https://www.apple.com/safari/'>Safari</a>.",
        $("#vis").html(a),
        $(".about").hide(),
        !1
    }
    $(".control").show();
    var b = 1993
      , c = 2015
      , d = c
      , e = "E0";
    $("#year").data("year", c),
    showYear(c);
    var f = {
        top: 30,
        right: 110,
        bottom: 20,
        left: 30
    }
      , g = parseInt(d3.select(".container").style("width").replace("px", ""))
      , h = 600
      , i = d3.select("#vis").append("svg").attr("width", g + f.left + f.right).attr("height", h + f.top + f.bottom)
      , j = d3.select("#vis").append("div").attr("class", "tooltip fade top in").html('<div class="tooltip-arrow"></div><div class="tooltip-inner">HELLO WORLD</div></div>').style("opacity", 0);
    d3.json("/Content/E0.json", function(a, k) {
        function l(a) {
            $(".option").off(),
            $(".ranking").off(),
            $(".previous, .next").off();
            var b = $("#year").data("year")
              , c = $("#league").val();
            c = "E0";
            var l = (getYearForFile(b) + "-" + c + ".json",
            k[getYearForFile(b)])
              , n = l.results
              , o = l.games
              , p = "points" === $(".ranking.active").data("ranking")
              , q = n.length
              , r = "E0" === c ? 38 : 46
              , s = d3.max([r, d3.max(n, function(a) {
                return a.points.length
            })])
              , t = d3.max(n, function(a) {
                return d3.max(a.points)
            });
            x = d3.scale.linear().domain([0, s]).range([f.left, g - f.right]),
            y_points = d3.scale.linear().domain([0, t]).range([h - 20, f.top]),
            y_position = d3.scale.linear().domain([q, 0]).range([h - 20, f.top]);
            var u = d3.svg.axis().scale(x).orient("bottom").tickValues(d3.range(1, s + 1))
              , v = d3.svg.axis().orient("left");
            p ? (v.scale(y_points),
            v.ticks(20)) : (v.scale(y_position),
            v.tickValues(d3.range(0, q)),
            v.tickFormat(function(a) {
                return a + 1
            })),
            v.tickSize(6, 3, 0);
            var w = i.selectAll("g.x.axis").data([1])
              , y = i.selectAll("g.y.axis").data([1]);
            w.enter().append("g").attr("class", "x axis").attr("transform", "translate(0," + (h - 20) + ")").append("text").attr("x", g / 2).attr("dy", "3em").text("Games played"),
            y.enter().append("g").attr("class", "y axis").attr("transform", "translate(" + f.left + ",0)").append("text").attr("class", "yAxisLabel").attr("y", 0).attr("dy", "1em").style("text-anchor", "middle"),
            i.select(".x.axis").call(u),
            i.select(".y.axis").transition().duration(1e3).call(v),
            i.select(".y.axis").select("text.yAxisLabel").text(function(a) {
                return p ? "Points" : "Position"
            });
            var z = d3.svg.line().x(function(a, b) {
                return x(b + 1)
            }).y(function(a, b) {
                return p ? y_points(a || 0) : y_position(a || 0)
            })
              , A = function(a) {
                var b = d3.scale.quantile().domain([0, 1]).range(d3.range(1, s + 1));
                return function(c) {
                    return z(a.slice(0, b(c)))
                }
            }
              , B = i.selectAll("g.team").data(n, function(a) {
                return a.code
            })
              , C = B.enter().append("g").attr("class", function(a) {
                return "team " + a.code
            });
            C.append("path").attr("class", function(a) {
                return "outer " + a.code
            }).attr("data-team", function(a) {
                return a.code
            }),
            C.append("path").attr("class", function(a) {
                return "inner " + a.code
            }).attr("data-team", function(a) {
                return a.code
            }),
            C.append("rect").attr("class", function(a) {
                return a.code + " legendbox"
            }).attr("x", g - f.right + f.left - 20).attr("y", function(a, b) {
                return "undefined" != typeof a.position[a.position.length - 1] ? y_position(a.position[a.position.length - 1]) - 10 : -1e4
            }).attr("rx", 4).attr("ry", 4).attr("width", f.right + 5).attr("height", 20),
            C.append("text").attr("class", function(a) {
                return a.code + " legend"
            }).attr("x", g - f.left - f.right + 50).attr("y", function(a, b) {
                return "undefined" != typeof a.position[a.position.length - 1] ? y_position(a.position[a.position.length - 1]) + 3 : -1e4
            }).attr("opacity", 0).attr("dy", ".2em").text(function(a, b) {
                return a.name
            });
            var D = B.selectAll("circle.match").data(function(a) {
                for (var b = [], c = 0; c < a.points.length; c++) {
                    var d = {
                        points: a.points[c],
                        position: a.position[c],
                        id: a.games[c],
                        gameno: c,
                        thisteam: a.name,
                        code: a.code
                    };
                    b.push(d)
                }
                return b
            });
            B.selectAll("circle.match").transition().duration(300).attr("cx", function(a, b) {
                return x(b + 1)
            }).attr("cy", function(a, b) {
                return p ? y_points(a.points) : "undefined" != typeof a.position ? y_position(a.position) : -1e3
            }).attr("opacity", .8);
            var E = (D.enter().append("circle").attr("class", function(a) {
                return a.code + " match"
            }).attr("opacity", 0).attr("r", 2.5).attr("cx", function(a, b) {
                return x(b + 1)
            }).attr("cy", function(a, b) {
                return p ? y_points(a.points) : "undefined" != typeof a.position ? y_position(a.position) : -1e3
            }),
            B.select("path.outer"))
              , F = B.select("path.inner")
              , G = B.select("text.legend")
              , H = B.select("rect.legendbox");
            a ? (E.transition().duration(1e3).attrTween("d", function(a) {
                return A(p ? a.points : a.position)
            }).each("end", function() {
                d3.select(this).on("mouseover", function(a) {
                    highlightPath(a.code)
                }).on("mouseout", function(a) {
                    unHighlightPath(a.code)
                })
            }),
            F.transition().duration(1e3).attrTween("d", function(a) {
                return A(p ? a.points : a.position)
            }).each("end", function() {
                d3.select(this).on("mouseover", function(a) {
                    highlightPath(a.code)
                }).on("mouseout", function(a) {
                    unHighlightPath(a.code)
                })
            })) : (E.on("mouseover", null ).on("mouseout", null ).transition().duration(1e3).attr("d", function(a) {
                return z(p ? a.points : a.position)
            }).attr("class", function(a) {
                return "outer " + a.code
            }).each("end", function() {
                d3.select(this).on("mouseover", function(a) {
                    highlightPath(a.code)
                }).on("mouseout", function(a) {
                    unHighlightPath(a.code)
                })
            }),
            F.on("mouseover", null ).on("mouseout", null ).transition().duration(1e3).attr("d", function(a) {
                return z(p ? a.points : a.position)
            }).attr("class", function(a) {
                return "inner " + a.code
            }).each("end", function() {
                d3.select(this).on("mouseover", function(a) {
                    highlightPath(a.code)
                }).on("mouseout", function(a) {
                    unHighlightPath(a.code)
                })
            })),
            B.selectAll("circle.match").on("mouseover", null ).on("mouseout", null ).transition().duration(function(b, c) {
                return a ? c * (2e3 / s) : 1e3
            }).attr("cx", function(a, b) {
                return x(b + 1)
            }).attr("cy", function(a, b) {
                return p ? y_points(a.points) : "undefined" != typeof a.position ? y_position(a.position) : -1e3
            }).attr("opacity", .8).each("end", function() {
                d3.select(this).on("mouseover", function(a, b) {
                    if (highlightPath(a.code),
                    -1 == a.id)
                        var c = "Start of season";
                    else {
                        var d = o[a.id]
                          , c = "<strong>" + a.thisteam + ": Game " + (a.gameno + 1) + "</strong><br/>";
                        c += moment(d.date).format("dddd D MMMM YYYY") + "<br/>";
                        var e = a.thisteam === d.hometeam;
                        c += d.FTHG === d.FTAG ? "Drew with " : d.FTHG > d.FTAG ? e ? "Beat " : "Lost to " : e ? "Lost to " : "Beat ",
                        c += e ? d.awayteam : d.hometeam,
                        c += " " + d.FTHG + "-" + d.FTAG + "<br/>"
                    }
                    if (a.gameno + 1 === s) {
                        var f = parseInt(a.position) + 1;
                        c += "Ended season " + ordinal_suffix_of(f),
                        c += "<br/>with " + a.points + " points"
                    } else
                        c += a.points + " points",
                        "undefined" != typeof a.position && (c += ", position " + (a.position + 1));
                    d3.select(".tooltip-inner").html(c);
                    var g = d3.select(this).attr("cx") - $(".tooltip").outerWidth() / 2
                      , h = d3.select(this).attr("cy") - $(".tooltip").outerHeight();
                    j.transition().duration(100).style("opacity", .9),
                    j.style("left", g + "px").style("top", h + "px")
                }).on("mouseout", function(a, b) {
                    unHighlightPath(a.code),
                    d3.select(".tooltip").transition().duration(100).style("opacity", 1e-6)
                })
            }),
            D.exit().remove(),
            G.on("mouseover", null ).on("mouseout", null ).transition().duration(1e3).attr("y", function(a, b) {
                return "undefined" != typeof a.position[a.position.length - 1] ? y_position(a.position[a.position.length - 1]) + 3 : -1e4
            }).attr("opacity", .9).each("end", function() {
                d3.select(this).on("mouseover", function(a) {
                    highlightPath(a.code)
                }).on("mouseout", function(a) {
                    unHighlightPath(a.code)
                })
            }),
            H.on("mouseover", null ).on("mouseout", null ).transition().duration(1e3).attr("y", function(a, b) {
                return "undefined" != typeof a.position[a.position.length - 1] ? y_position(a.position[a.position.length - 1]) - 10 : -1e4
            }).attr("opacity", .3).each("end", function() {
                d3.select(this).on("mouseover", function(a) {
                    highlightPath(a.code)
                }).on("mouseout", function(a) {
                    unHighlightPath(a.code)
                })
            }),
            B.exit().attr("transform", "translate(0,0)"),
            B.exit().transition().duration(1e3).attr("transform", function(a, b) {
                var d = a.position[a.position.length - 1]
                  , e = d > 10 || "E0" === c ? 1.5 * h : -1e3;
                return "translate(0," + e + ")"
            }),
            B.exit().transition().delay(1e3).remove(),
            setTimeout(function() {
                m()
            }, 1100),
            d = b,
            e = c
        }
        function m() {
            $(".option").off(),
            $(".ranking").off(),
            $(".previous, .next").off(),
            $(".option").on("change", function() {
                l(!0)
            }),
            $(".ranking").click(function(a) {
                a.preventDefault(),
                $(".ranking").removeClass("active"),
                $(this).addClass("active"),
                l(!1)
            }),
            $(".previous, .next").click(function(a) {
                if (a.preventDefault(),
                $(this).hasClass("previous")) {
                    var d = $("#year").data("year") - 1;
                    b > d ? d = b : null 
                } else {
                    var d = $("#year").data("year") + 1;
                    d > c ? d = c : null 
                }
                d === c ? $("#next").fadeTo(500, 0) : d === b ? $("#prev").fadeTo(500, 0) : ($("#next").fadeTo(500, 1),
                $("#prev").fadeTo(500, 1)),
                $("#year").data("year", d),
                showYear(),
                l(!1)
            })
        }
        l(!0)
    })
});
