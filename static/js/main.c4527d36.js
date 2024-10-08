/*! For license information please see main.c4527d36.js.LICENSE.txt */
(() => {
    var e = {
            463: (e, t, n) => {
                "use strict";
                var r = n(791),
                    a = n(296);

                function i(e) {
                    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                var o = new Set,
                    s = {};

                function l(e, t) {
                    u(e, t), u(e + "Capture", t)
                }

                function u(e, t) {
                    for (s[e] = t, e = 0; e < t.length; e++) o.add(t[e])
                }
                var c = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
                    d = Object.prototype.hasOwnProperty,
                    f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                    h = {},
                    p = {};

                function m(e, t, n, r, a, i, o) {
                    this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o
                }
                var g = {};
                "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
                    g[e] = new m(e, 0, !1, e, null, !1, !1)
                })), [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"]
                ].forEach((function(e) {
                    var t = e[0];
                    g[t] = new m(t, 1, !1, e[1], null, !1, !1)
                })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
                    g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1)
                })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
                    g[e] = new m(e, 2, !1, e, null, !1, !1)
                })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
                    g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1)
                })), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
                    g[e] = new m(e, 3, !0, e, null, !1, !1)
                })), ["capture", "download"].forEach((function(e) {
                    g[e] = new m(e, 4, !1, e, null, !1, !1)
                })), ["cols", "rows", "size", "span"].forEach((function(e) {
                    g[e] = new m(e, 6, !1, e, null, !1, !1)
                })), ["rowSpan", "start"].forEach((function(e) {
                    g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1)
                }));
                var v = /[\-:]([a-z])/g;

                function y(e) {
                    return e[1].toUpperCase()
                }

                function b(e, t, n, r) {
                    var a = g.hasOwnProperty(t) ? g[t] : null;
                    (null !== a ? 0 !== a.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function(e, t, n, r) {
                        if (null === t || "undefined" === typeof t || function(e, t, n, r) {
                                if (null !== n && 0 === n.type) return !1;
                                switch (typeof t) {
                                    case "function":
                                    case "symbol":
                                        return !0;
                                    case "boolean":
                                        return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                                    default:
                                        return !1
                                }
                            }(e, t, n, r)) return !0;
                        if (r) return !1;
                        if (null !== n) switch (n.type) {
                            case 3:
                                return !t;
                            case 4:
                                return !1 === t;
                            case 5:
                                return isNaN(t);
                            case 6:
                                return isNaN(t) || 1 > t
                        }
                        return !1
                    }(t, n, a, r) && (n = null), r || null === a ? function(e) {
                        return !!d.call(p, e) || !d.call(h, e) && (f.test(e) ? p[e] = !0 : (h[e] = !0, !1))
                    }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = null === n ? 3 !== a.type && "" : n : (t = a.attributeName, r = a.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (a = a.type) || 4 === a && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
                }
                "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
                    var t = e.replace(v, y);
                    g[t] = new m(t, 1, !1, e, null, !1, !1)
                })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
                    var t = e.replace(v, y);
                    g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
                })), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
                    var t = e.replace(v, y);
                    g[t] = new m(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
                })), ["tabIndex", "crossOrigin"].forEach((function(e) {
                    g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1)
                })), g.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function(e) {
                    g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0)
                }));
                var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                    x = Symbol.for("react.element"),
                    S = Symbol.for("react.portal"),
                    k = Symbol.for("react.fragment"),
                    C = Symbol.for("react.strict_mode"),
                    j = Symbol.for("react.profiler"),
                    E = Symbol.for("react.provider"),
                    P = Symbol.for("react.context"),
                    T = Symbol.for("react.forward_ref"),
                    _ = Symbol.for("react.suspense"),
                    N = Symbol.for("react.suspense_list"),
                    A = Symbol.for("react.memo"),
                    I = Symbol.for("react.lazy");
                Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
                var R = Symbol.for("react.offscreen");
                Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
                var O = Symbol.iterator;

                function D(e) {
                    return null === e || "object" !== typeof e ? null : "function" === typeof(e = O && e[O] || e["@@iterator"]) ? e : null
                }
                var L, z = Object.assign;

                function F(e) {
                    if (void 0 === L) try {
                        throw Error()
                    } catch (n) {
                        var t = n.stack.trim().match(/\n( *(at )?)/);
                        L = t && t[1] || ""
                    }
                    return "\n" + L + e
                }
                var M = !1;

                function G(e, t) {
                    if (!e || M) return "";
                    M = !0;
                    var n = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    try {
                        if (t)
                            if (t = function() {
                                    throw Error()
                                }, Object.defineProperty(t.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), "object" === typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(t, [])
                                } catch (u) {
                                    var r = u
                                }
                                Reflect.construct(e, [], t)
                            } else {
                                try {
                                    t.call()
                                } catch (u) {
                                    r = u
                                }
                                e.call(t.prototype)
                            }
                        else {
                            try {
                                throw Error()
                            } catch (u) {
                                r = u
                            }
                            e()
                        }
                    } catch (u) {
                        if (u && r && "string" === typeof u.stack) {
                            for (var a = u.stack.split("\n"), i = r.stack.split("\n"), o = a.length - 1, s = i.length - 1; 1 <= o && 0 <= s && a[o] !== i[s];) s--;
                            for (; 1 <= o && 0 <= s; o--, s--)
                                if (a[o] !== i[s]) {
                                    if (1 !== o || 1 !== s)
                                        do {
                                            if (o--, 0 > --s || a[o] !== i[s]) {
                                                var l = "\n" + a[o].replace(" at new ", " at ");
                                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
                                            }
                                        } while (1 <= o && 0 <= s);
                                    break
                                }
                        }
                    } finally {
                        M = !1, Error.prepareStackTrace = n
                    }
                    return (e = e ? e.displayName || e.name : "") ? F(e) : ""
                }

                function U(e) {
                    switch (e.tag) {
                        case 5:
                            return F(e.type);
                        case 16:
                            return F("Lazy");
                        case 13:
                            return F("Suspense");
                        case 19:
                            return F("SuspenseList");
                        case 0:
                        case 2:
                        case 15:
                            return e = G(e.type, !1);
                        case 11:
                            return e = G(e.type.render, !1);
                        case 1:
                            return e = G(e.type, !0);
                        default:
                            return ""
                    }
                }

                function H(e) {
                    if (null == e) return null;
                    if ("function" === typeof e) return e.displayName || e.name || null;
                    if ("string" === typeof e) return e;
                    switch (e) {
                        case k:
                            return "Fragment";
                        case S:
                            return "Portal";
                        case j:
                            return "Profiler";
                        case C:
                            return "StrictMode";
                        case _:
                            return "Suspense";
                        case N:
                            return "SuspenseList"
                    }
                    if ("object" === typeof e) switch (e.$$typeof) {
                        case P:
                            return (e.displayName || "Context") + ".Consumer";
                        case E:
                            return (e._context.displayName || "Context") + ".Provider";
                        case T:
                            var t = e.render;
                            return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                        case A:
                            return null !== (t = e.displayName || null) ? t : H(e.type) || "Memo";
                        case I:
                            t = e._payload, e = e._init;
                            try {
                                return H(e(t))
                            } catch (n) {}
                    }
                    return null
                }

                function W(e) {
                    var t = e.type;
                    switch (e.tag) {
                        case 24:
                            return "Cache";
                        case 9:
                            return (t.displayName || "Context") + ".Consumer";
                        case 10:
                            return (t._context.displayName || "Context") + ".Provider";
                        case 18:
                            return "DehydratedFragment";
                        case 11:
                            return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                        case 7:
                            return "Fragment";
                        case 5:
                            return t;
                        case 4:
                            return "Portal";
                        case 3:
                            return "Root";
                        case 6:
                            return "Text";
                        case 16:
                            return H(t);
                        case 8:
                            return t === C ? "StrictMode" : "Mode";
                        case 22:
                            return "Offscreen";
                        case 12:
                            return "Profiler";
                        case 21:
                            return "Scope";
                        case 13:
                            return "Suspense";
                        case 19:
                            return "SuspenseList";
                        case 25:
                            return "TracingMarker";
                        case 1:
                        case 0:
                        case 17:
                        case 2:
                        case 14:
                        case 15:
                            if ("function" === typeof t) return t.displayName || t.name || null;
                            if ("string" === typeof t) return t
                    }
                    return null
                }

                function B(e) {
                    switch (typeof e) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                        case "object":
                            return e;
                        default:
                            return ""
                    }
                }

                function $(e) {
                    var t = e.type;
                    return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
                }

                function V(e) {
                    e._valueTracker || (e._valueTracker = function(e) {
                        var t = $(e) ? "checked" : "value",
                            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                            r = "" + e[t];
                        if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
                            var a = n.get,
                                i = n.set;
                            return Object.defineProperty(e, t, {
                                configurable: !0,
                                get: function() {
                                    return a.call(this)
                                },
                                set: function(e) {
                                    r = "" + e, i.call(this, e)
                                }
                            }), Object.defineProperty(e, t, {
                                enumerable: n.enumerable
                            }), {
                                getValue: function() {
                                    return r
                                },
                                setValue: function(e) {
                                    r = "" + e
                                },
                                stopTracking: function() {
                                    e._valueTracker = null, delete e[t]
                                }
                            }
                        }
                    }(e))
                }

                function q(e) {
                    if (!e) return !1;
                    var t = e._valueTracker;
                    if (!t) return !0;
                    var n = t.getValue(),
                        r = "";
                    return e && (r = $(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
                }

                function K(e) {
                    if ("undefined" === typeof(e = e || ("undefined" !== typeof document ? document : void 0))) return null;
                    try {
                        return e.activeElement || e.body
                    } catch (t) {
                        return e.body
                    }
                }

                function Q(e, t) {
                    var n = t.checked;
                    return z({}, t, {
                        defaultChecked: void 0,
                        defaultValue: void 0,
                        value: void 0,
                        checked: null != n ? n : e._wrapperState.initialChecked
                    })
                }

                function Y(e, t) {
                    var n = null == t.defaultValue ? "" : t.defaultValue,
                        r = null != t.checked ? t.checked : t.defaultChecked;
                    n = B(null != t.value ? t.value : n), e._wrapperState = {
                        initialChecked: r,
                        initialValue: n,
                        controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                    }
                }

                function X(e, t) {
                    null != (t = t.checked) && b(e, "checked", t, !1)
                }

                function J(e, t) {
                    X(e, t);
                    var n = B(t.value),
                        r = t.type;
                    if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                    else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
                    t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, B(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
                }

                function Z(e, t, n) {
                    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                        var r = t.type;
                        if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
                        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
                    }
                    "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
                }

                function ee(e, t, n) {
                    "number" === t && K(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
                }
                var te = Array.isArray;

                function ne(e, t, n, r) {
                    if (e = e.options, t) {
                        t = {};
                        for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
                        for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0)
                    } else {
                        for (n = "" + B(n), t = null, a = 0; a < e.length; a++) {
                            if (e[a].value === n) return e[a].selected = !0, void(r && (e[a].defaultSelected = !0));
                            null !== t || e[a].disabled || (t = e[a])
                        }
                        null !== t && (t.selected = !0)
                    }
                }

                function re(e, t) {
                    if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
                    return z({}, t, {
                        value: void 0,
                        defaultValue: void 0,
                        children: "" + e._wrapperState.initialValue
                    })
                }

                function ae(e, t) {
                    var n = t.value;
                    if (null == n) {
                        if (n = t.children, t = t.defaultValue, null != n) {
                            if (null != t) throw Error(i(92));
                            if (te(n)) {
                                if (1 < n.length) throw Error(i(93));
                                n = n[0]
                            }
                            t = n
                        }
                        null == t && (t = ""), n = t
                    }
                    e._wrapperState = {
                        initialValue: B(n)
                    }
                }

                function ie(e, t) {
                    var n = B(t.value),
                        r = B(t.defaultValue);
                    null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
                }

                function oe(e) {
                    var t = e.textContent;
                    t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
                }

                function se(e) {
                    switch (e) {
                        case "svg":
                            return "http://www.w3.org/2000/svg";
                        case "math":
                            return "http://www.w3.org/1998/Math/MathML";
                        default:
                            return "http://www.w3.org/1999/xhtml"
                    }
                }

                function le(e, t) {
                    return null == e || "http://www.w3.org/1999/xhtml" === e ? se(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
                }
                var ue, ce, de = (ce = function(e, t) {
                    if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t;
                    else {
                        for ((ue = ue || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ue.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                        for (; t.firstChild;) e.appendChild(t.firstChild)
                    }
                }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) {
                    MSApp.execUnsafeLocalFunction((function() {
                        return ce(e, t)
                    }))
                } : ce);

                function fe(e, t) {
                    if (t) {
                        var n = e.firstChild;
                        if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
                    }
                    e.textContent = t
                }
                var he = {
                        animationIterationCount: !0,
                        aspectRatio: !0,
                        borderImageOutset: !0,
                        borderImageSlice: !0,
                        borderImageWidth: !0,
                        boxFlex: !0,
                        boxFlexGroup: !0,
                        boxOrdinalGroup: !0,
                        columnCount: !0,
                        columns: !0,
                        flex: !0,
                        flexGrow: !0,
                        flexPositive: !0,
                        flexShrink: !0,
                        flexNegative: !0,
                        flexOrder: !0,
                        gridArea: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowSpan: !0,
                        gridRowStart: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnSpan: !0,
                        gridColumnStart: !0,
                        fontWeight: !0,
                        lineClamp: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        tabSize: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0,
                        fillOpacity: !0,
                        floodOpacity: !0,
                        stopOpacity: !0,
                        strokeDasharray: !0,
                        strokeDashoffset: !0,
                        strokeMiterlimit: !0,
                        strokeOpacity: !0,
                        strokeWidth: !0
                    },
                    pe = ["Webkit", "ms", "Moz", "O"];

                function me(e, t, n) {
                    return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || he.hasOwnProperty(e) && he[e] ? ("" + t).trim() : t + "px"
                }

                function ge(e, t) {
                    for (var n in e = e.style, t)
                        if (t.hasOwnProperty(n)) {
                            var r = 0 === n.indexOf("--"),
                                a = me(n, t[n], r);
                            "float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a
                        }
                }
                Object.keys(he).forEach((function(e) {
                    pe.forEach((function(t) {
                        t = t + e.charAt(0).toUpperCase() + e.substring(1), he[t] = he[e]
                    }))
                }));
                var ve = z({
                    menuitem: !0
                }, {
                    area: !0,
                    base: !0,
                    br: !0,
                    col: !0,
                    embed: !0,
                    hr: !0,
                    img: !0,
                    input: !0,
                    keygen: !0,
                    link: !0,
                    meta: !0,
                    param: !0,
                    source: !0,
                    track: !0,
                    wbr: !0
                });

                function ye(e, t) {
                    if (t) {
                        if (ve[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(i(137, e));
                        if (null != t.dangerouslySetInnerHTML) {
                            if (null != t.children) throw Error(i(60));
                            if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(i(61))
                        }
                        if (null != t.style && "object" !== typeof t.style) throw Error(i(62))
                    }
                }

                function be(e, t) {
                    if (-1 === e.indexOf("-")) return "string" === typeof t.is;
                    switch (e) {
                        case "annotation-xml":
                        case "color-profile":
                        case "font-face":
                        case "font-face-src":
                        case "font-face-uri":
                        case "font-face-format":
                        case "font-face-name":
                        case "missing-glyph":
                            return !1;
                        default:
                            return !0
                    }
                }
                var we = null;

                function xe(e) {
                    return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
                }
                var Se = null,
                    ke = null,
                    Ce = null;

                function je(e) {
                    if (e = ba(e)) {
                        if ("function" !== typeof Se) throw Error(i(280));
                        var t = e.stateNode;
                        t && (t = xa(t), Se(e.stateNode, e.type, t))
                    }
                }

                function Ee(e) {
                    ke ? Ce ? Ce.push(e) : Ce = [e] : ke = e
                }

                function Pe() {
                    if (ke) {
                        var e = ke,
                            t = Ce;
                        if (Ce = ke = null, je(e), t)
                            for (e = 0; e < t.length; e++) je(t[e])
                    }
                }

                function Te(e, t) {
                    return e(t)
                }

                function _e() {}
                var Ne = !1;

                function Ae(e, t, n) {
                    if (Ne) return e(t, n);
                    Ne = !0;
                    try {
                        return Te(e, t, n)
                    } finally {
                        Ne = !1, (null !== ke || null !== Ce) && (_e(), Pe())
                    }
                }

                function Ie(e, t) {
                    var n = e.stateNode;
                    if (null === n) return null;
                    var r = xa(n);
                    if (null === r) return null;
                    n = r[t];
                    e: switch (t) {
                        case "onClick":
                        case "onClickCapture":
                        case "onDoubleClick":
                        case "onDoubleClickCapture":
                        case "onMouseDown":
                        case "onMouseDownCapture":
                        case "onMouseMove":
                        case "onMouseMoveCapture":
                        case "onMouseUp":
                        case "onMouseUpCapture":
                        case "onMouseEnter":
                            (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                            break e;
                        default:
                            e = !1
                    }
                    if (e) return null;
                    if (n && "function" !== typeof n) throw Error(i(231, t, typeof n));
                    return n
                }
                var Re = !1;
                if (c) try {
                    var Oe = {};
                    Object.defineProperty(Oe, "passive", {
                        get: function() {
                            Re = !0
                        }
                    }), window.addEventListener("test", Oe, Oe), window.removeEventListener("test", Oe, Oe)
                } catch (ce) {
                    Re = !1
                }

                function De(e, t, n, r, a, i, o, s, l) {
                    var u = Array.prototype.slice.call(arguments, 3);
                    try {
                        t.apply(n, u)
                    } catch (c) {
                        this.onError(c)
                    }
                }
                var Le = !1,
                    ze = null,
                    Fe = !1,
                    Me = null,
                    Ge = {
                        onError: function(e) {
                            Le = !0, ze = e
                        }
                    };

                function Ue(e, t, n, r, a, i, o, s, l) {
                    Le = !1, ze = null, De.apply(Ge, arguments)
                }

                function He(e) {
                    var t = e,
                        n = e;
                    if (e.alternate)
                        for (; t.return;) t = t.return;
                    else {
                        e = t;
                        do {
                            0 !== (4098 & (t = e).flags) && (n = t.return), e = t.return
                        } while (e)
                    }
                    return 3 === t.tag ? n : null
                }

                function We(e) {
                    if (13 === e.tag) {
                        var t = e.memoizedState;
                        if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
                    }
                    return null
                }

                function Be(e) {
                    if (He(e) !== e) throw Error(i(188))
                }

                function $e(e) {
                    return null !== (e = function(e) {
                        var t = e.alternate;
                        if (!t) {
                            if (null === (t = He(e))) throw Error(i(188));
                            return t !== e ? null : e
                        }
                        for (var n = e, r = t;;) {
                            var a = n.return;
                            if (null === a) break;
                            var o = a.alternate;
                            if (null === o) {
                                if (null !== (r = a.return)) {
                                    n = r;
                                    continue
                                }
                                break
                            }
                            if (a.child === o.child) {
                                for (o = a.child; o;) {
                                    if (o === n) return Be(a), e;
                                    if (o === r) return Be(a), t;
                                    o = o.sibling
                                }
                                throw Error(i(188))
                            }
                            if (n.return !== r.return) n = a, r = o;
                            else {
                                for (var s = !1, l = a.child; l;) {
                                    if (l === n) {
                                        s = !0, n = a, r = o;
                                        break
                                    }
                                    if (l === r) {
                                        s = !0, r = a, n = o;
                                        break
                                    }
                                    l = l.sibling
                                }
                                if (!s) {
                                    for (l = o.child; l;) {
                                        if (l === n) {
                                            s = !0, n = o, r = a;
                                            break
                                        }
                                        if (l === r) {
                                            s = !0, r = o, n = a;
                                            break
                                        }
                                        l = l.sibling
                                    }
                                    if (!s) throw Error(i(189))
                                }
                            }
                            if (n.alternate !== r) throw Error(i(190))
                        }
                        if (3 !== n.tag) throw Error(i(188));
                        return n.stateNode.current === n ? e : t
                    }(e)) ? Ve(e) : null
                }

                function Ve(e) {
                    if (5 === e.tag || 6 === e.tag) return e;
                    for (e = e.child; null !== e;) {
                        var t = Ve(e);
                        if (null !== t) return t;
                        e = e.sibling
                    }
                    return null
                }
                var qe = a.unstable_scheduleCallback,
                    Ke = a.unstable_cancelCallback,
                    Qe = a.unstable_shouldYield,
                    Ye = a.unstable_requestPaint,
                    Xe = a.unstable_now,
                    Je = a.unstable_getCurrentPriorityLevel,
                    Ze = a.unstable_ImmediatePriority,
                    et = a.unstable_UserBlockingPriority,
                    tt = a.unstable_NormalPriority,
                    nt = a.unstable_LowPriority,
                    rt = a.unstable_IdlePriority,
                    at = null,
                    it = null;
                var ot = Math.clz32 ? Math.clz32 : function(e) {
                        return e >>>= 0, 0 === e ? 32 : 31 - (st(e) / lt | 0) | 0
                    },
                    st = Math.log,
                    lt = Math.LN2;
                var ut = 64,
                    ct = 4194304;

                function dt(e) {
                    switch (e & -e) {
                        case 1:
                            return 1;
                        case 2:
                            return 2;
                        case 4:
                            return 4;
                        case 8:
                            return 8;
                        case 16:
                            return 16;
                        case 32:
                            return 32;
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return 4194240 & e;
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                            return 130023424 & e;
                        case 134217728:
                            return 134217728;
                        case 268435456:
                            return 268435456;
                        case 536870912:
                            return 536870912;
                        case 1073741824:
                            return 1073741824;
                        default:
                            return e
                    }
                }

                function ft(e, t) {
                    var n = e.pendingLanes;
                    if (0 === n) return 0;
                    var r = 0,
                        a = e.suspendedLanes,
                        i = e.pingedLanes,
                        o = 268435455 & n;
                    if (0 !== o) {
                        var s = o & ~a;
                        0 !== s ? r = dt(s) : 0 !== (i &= o) && (r = dt(i))
                    } else 0 !== (o = n & ~a) ? r = dt(o) : 0 !== i && (r = dt(i));
                    if (0 === r) return 0;
                    if (0 !== t && t !== r && 0 === (t & a) && ((a = r & -r) >= (i = t & -t) || 16 === a && 0 !== (4194240 & i))) return t;
                    if (0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes))
                        for (e = e.entanglements, t &= r; 0 < t;) a = 1 << (n = 31 - ot(t)), r |= e[n], t &= ~a;
                    return r
                }

                function ht(e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 4:
                            return t + 250;
                        case 8:
                        case 16:
                        case 32:
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return t + 5e3;
                        default:
                            return -1
                    }
                }

                function pt(e) {
                    return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
                }

                function mt() {
                    var e = ut;
                    return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e
                }

                function gt(e) {
                    for (var t = [], n = 0; 31 > n; n++) t.push(e);
                    return t
                }

                function vt(e, t, n) {
                    e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - ot(t)] = n
                }

                function yt(e, t) {
                    var n = e.entangledLanes |= t;
                    for (e = e.entanglements; n;) {
                        var r = 31 - ot(n),
                            a = 1 << r;
                        a & t | e[r] & t && (e[r] |= t), n &= ~a
                    }
                }
                var bt = 0;

                function wt(e) {
                    return 1 < (e &= -e) ? 4 < e ? 0 !== (268435455 & e) ? 16 : 536870912 : 4 : 1
                }
                var xt, St, kt, Ct, jt, Et = !1,
                    Pt = [],
                    Tt = null,
                    _t = null,
                    Nt = null,
                    At = new Map,
                    It = new Map,
                    Rt = [],
                    Ot = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

                function Dt(e, t) {
                    switch (e) {
                        case "focusin":
                        case "focusout":
                            Tt = null;
                            break;
                        case "dragenter":
                        case "dragleave":
                            _t = null;
                            break;
                        case "mouseover":
                        case "mouseout":
                            Nt = null;
                            break;
                        case "pointerover":
                        case "pointerout":
                            At.delete(t.pointerId);
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                            It.delete(t.pointerId)
                    }
                }

                function Lt(e, t, n, r, a, i) {
                    return null === e || e.nativeEvent !== i ? (e = {
                        blockedOn: t,
                        domEventName: n,
                        eventSystemFlags: r,
                        nativeEvent: i,
                        targetContainers: [a]
                    }, null !== t && (null !== (t = ba(t)) && St(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== a && -1 === t.indexOf(a) && t.push(a), e)
                }

                function zt(e) {
                    var t = ya(e.target);
                    if (null !== t) {
                        var n = He(t);
                        if (null !== n)
                            if (13 === (t = n.tag)) {
                                if (null !== (t = We(n))) return e.blockedOn = t, void jt(e.priority, (function() {
                                    kt(n)
                                }))
                            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                    }
                    e.blockedOn = null
                }

                function Ft(e) {
                    if (null !== e.blockedOn) return !1;
                    for (var t = e.targetContainers; 0 < t.length;) {
                        var n = Qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                        if (null !== n) return null !== (t = ba(n)) && St(t), e.blockedOn = n, !1;
                        var r = new(n = e.nativeEvent).constructor(n.type, n);
                        we = r, n.target.dispatchEvent(r), we = null, t.shift()
                    }
                    return !0
                }

                function Mt(e, t, n) {
                    Ft(e) && n.delete(t)
                }

                function Gt() {
                    Et = !1, null !== Tt && Ft(Tt) && (Tt = null), null !== _t && Ft(_t) && (_t = null), null !== Nt && Ft(Nt) && (Nt = null), At.forEach(Mt), It.forEach(Mt)
                }

                function Ut(e, t) {
                    e.blockedOn === t && (e.blockedOn = null, Et || (Et = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, Gt)))
                }

                function Ht(e) {
                    function t(t) {
                        return Ut(t, e)
                    }
                    if (0 < Pt.length) {
                        Ut(Pt[0], e);
                        for (var n = 1; n < Pt.length; n++) {
                            var r = Pt[n];
                            r.blockedOn === e && (r.blockedOn = null)
                        }
                    }
                    for (null !== Tt && Ut(Tt, e), null !== _t && Ut(_t, e), null !== Nt && Ut(Nt, e), At.forEach(t), It.forEach(t), n = 0; n < Rt.length; n++)(r = Rt[n]).blockedOn === e && (r.blockedOn = null);
                    for (; 0 < Rt.length && null === (n = Rt[0]).blockedOn;) zt(n), null === n.blockedOn && Rt.shift()
                }
                var Wt = w.ReactCurrentBatchConfig,
                    Bt = !0;

                function $t(e, t, n, r) {
                    var a = bt,
                        i = Wt.transition;
                    Wt.transition = null;
                    try {
                        bt = 1, qt(e, t, n, r)
                    } finally {
                        bt = a, Wt.transition = i
                    }
                }

                function Vt(e, t, n, r) {
                    var a = bt,
                        i = Wt.transition;
                    Wt.transition = null;
                    try {
                        bt = 4, qt(e, t, n, r)
                    } finally {
                        bt = a, Wt.transition = i
                    }
                }

                function qt(e, t, n, r) {
                    if (Bt) {
                        var a = Qt(e, t, n, r);
                        if (null === a) Br(e, t, r, Kt, n), Dt(e, r);
                        else if (function(e, t, n, r, a) {
                                switch (t) {
                                    case "focusin":
                                        return Tt = Lt(Tt, e, t, n, r, a), !0;
                                    case "dragenter":
                                        return _t = Lt(_t, e, t, n, r, a), !0;
                                    case "mouseover":
                                        return Nt = Lt(Nt, e, t, n, r, a), !0;
                                    case "pointerover":
                                        var i = a.pointerId;
                                        return At.set(i, Lt(At.get(i) || null, e, t, n, r, a)), !0;
                                    case "gotpointercapture":
                                        return i = a.pointerId, It.set(i, Lt(It.get(i) || null, e, t, n, r, a)), !0
                                }
                                return !1
                            }(a, e, t, n, r)) r.stopPropagation();
                        else if (Dt(e, r), 4 & t && -1 < Ot.indexOf(e)) {
                            for (; null !== a;) {
                                var i = ba(a);
                                if (null !== i && xt(i), null === (i = Qt(e, t, n, r)) && Br(e, t, r, Kt, n), i === a) break;
                                a = i
                            }
                            null !== a && r.stopPropagation()
                        } else Br(e, t, r, null, n)
                    }
                }
                var Kt = null;

                function Qt(e, t, n, r) {
                    if (Kt = null, null !== (e = ya(e = xe(r))))
                        if (null === (t = He(e))) e = null;
                        else if (13 === (n = t.tag)) {
                        if (null !== (e = We(t))) return e;
                        e = null
                    } else if (3 === n) {
                        if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
                        e = null
                    } else t !== e && (e = null);
                    return Kt = e, null
                }

                function Yt(e) {
                    switch (e) {
                        case "cancel":
                        case "click":
                        case "close":
                        case "contextmenu":
                        case "copy":
                        case "cut":
                        case "auxclick":
                        case "dblclick":
                        case "dragend":
                        case "dragstart":
                        case "drop":
                        case "focusin":
                        case "focusout":
                        case "input":
                        case "invalid":
                        case "keydown":
                        case "keypress":
                        case "keyup":
                        case "mousedown":
                        case "mouseup":
                        case "paste":
                        case "pause":
                        case "play":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointerup":
                        case "ratechange":
                        case "reset":
                        case "resize":
                        case "seeked":
                        case "submit":
                        case "touchcancel":
                        case "touchend":
                        case "touchstart":
                        case "volumechange":
                        case "change":
                        case "selectionchange":
                        case "textInput":
                        case "compositionstart":
                        case "compositionend":
                        case "compositionupdate":
                        case "beforeblur":
                        case "afterblur":
                        case "beforeinput":
                        case "blur":
                        case "fullscreenchange":
                        case "focus":
                        case "hashchange":
                        case "popstate":
                        case "select":
                        case "selectstart":
                            return 1;
                        case "drag":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "mousemove":
                        case "mouseout":
                        case "mouseover":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "scroll":
                        case "toggle":
                        case "touchmove":
                        case "wheel":
                        case "mouseenter":
                        case "mouseleave":
                        case "pointerenter":
                        case "pointerleave":
                            return 4;
                        case "message":
                            switch (Je()) {
                                case Ze:
                                    return 1;
                                case et:
                                    return 4;
                                case tt:
                                case nt:
                                    return 16;
                                case rt:
                                    return 536870912;
                                default:
                                    return 16
                            }
                        default:
                            return 16
                    }
                }
                var Xt = null,
                    Jt = null,
                    Zt = null;

                function en() {
                    if (Zt) return Zt;
                    var e, t, n = Jt,
                        r = n.length,
                        a = "value" in Xt ? Xt.value : Xt.textContent,
                        i = a.length;
                    for (e = 0; e < r && n[e] === a[e]; e++);
                    var o = r - e;
                    for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
                    return Zt = a.slice(e, 1 < t ? 1 - t : void 0)
                }

                function tn(e) {
                    var t = e.keyCode;
                    return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
                }

                function nn() {
                    return !0
                }

                function rn() {
                    return !1
                }

                function an(e) {
                    function t(t, n, r, a, i) {
                        for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = a, this.target = i, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(a) : a[o]);
                        return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? nn : rn, this.isPropagationStopped = rn, this
                    }
                    return z(t.prototype, {
                        preventDefault: function() {
                            this.defaultPrevented = !0;
                            var e = this.nativeEvent;
                            e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn)
                        },
                        stopPropagation: function() {
                            var e = this.nativeEvent;
                            e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn)
                        },
                        persist: function() {},
                        isPersistent: nn
                    }), t
                }
                var on, sn, ln, un = {
                        eventPhase: 0,
                        bubbles: 0,
                        cancelable: 0,
                        timeStamp: function(e) {
                            return e.timeStamp || Date.now()
                        },
                        defaultPrevented: 0,
                        isTrusted: 0
                    },
                    cn = an(un),
                    dn = z({}, un, {
                        view: 0,
                        detail: 0
                    }),
                    fn = an(dn),
                    hn = z({}, dn, {
                        screenX: 0,
                        screenY: 0,
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        getModifierState: jn,
                        button: 0,
                        buttons: 0,
                        relatedTarget: function(e) {
                            return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                        },
                        movementX: function(e) {
                            return "movementX" in e ? e.movementX : (e !== ln && (ln && "mousemove" === e.type ? (on = e.screenX - ln.screenX, sn = e.screenY - ln.screenY) : sn = on = 0, ln = e), on)
                        },
                        movementY: function(e) {
                            return "movementY" in e ? e.movementY : sn
                        }
                    }),
                    pn = an(hn),
                    mn = an(z({}, hn, {
                        dataTransfer: 0
                    })),
                    gn = an(z({}, dn, {
                        relatedTarget: 0
                    })),
                    vn = an(z({}, un, {
                        animationName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    yn = z({}, un, {
                        clipboardData: function(e) {
                            return "clipboardData" in e ? e.clipboardData : window.clipboardData
                        }
                    }),
                    bn = an(yn),
                    wn = an(z({}, un, {
                        data: 0
                    })),
                    xn = {
                        Esc: "Escape",
                        Spacebar: " ",
                        Left: "ArrowLeft",
                        Up: "ArrowUp",
                        Right: "ArrowRight",
                        Down: "ArrowDown",
                        Del: "Delete",
                        Win: "OS",
                        Menu: "ContextMenu",
                        Apps: "ContextMenu",
                        Scroll: "ScrollLock",
                        MozPrintableKey: "Unidentified"
                    },
                    Sn = {
                        8: "Backspace",
                        9: "Tab",
                        12: "Clear",
                        13: "Enter",
                        16: "Shift",
                        17: "Control",
                        18: "Alt",
                        19: "Pause",
                        20: "CapsLock",
                        27: "Escape",
                        32: " ",
                        33: "PageUp",
                        34: "PageDown",
                        35: "End",
                        36: "Home",
                        37: "ArrowLeft",
                        38: "ArrowUp",
                        39: "ArrowRight",
                        40: "ArrowDown",
                        45: "Insert",
                        46: "Delete",
                        112: "F1",
                        113: "F2",
                        114: "F3",
                        115: "F4",
                        116: "F5",
                        117: "F6",
                        118: "F7",
                        119: "F8",
                        120: "F9",
                        121: "F10",
                        122: "F11",
                        123: "F12",
                        144: "NumLock",
                        145: "ScrollLock",
                        224: "Meta"
                    },
                    kn = {
                        Alt: "altKey",
                        Control: "ctrlKey",
                        Meta: "metaKey",
                        Shift: "shiftKey"
                    };

                function Cn(e) {
                    var t = this.nativeEvent;
                    return t.getModifierState ? t.getModifierState(e) : !!(e = kn[e]) && !!t[e]
                }

                function jn() {
                    return Cn
                }
                var En = z({}, dn, {
                        key: function(e) {
                            if (e.key) {
                                var t = xn[e.key] || e.key;
                                if ("Unidentified" !== t) return t
                            }
                            return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Sn[e.keyCode] || "Unidentified" : ""
                        },
                        code: 0,
                        location: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        repeat: 0,
                        locale: 0,
                        getModifierState: jn,
                        charCode: function(e) {
                            return "keypress" === e.type ? tn(e) : 0
                        },
                        keyCode: function(e) {
                            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        },
                        which: function(e) {
                            return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        }
                    }),
                    Pn = an(En),
                    Tn = an(z({}, hn, {
                        pointerId: 0,
                        width: 0,
                        height: 0,
                        pressure: 0,
                        tangentialPressure: 0,
                        tiltX: 0,
                        tiltY: 0,
                        twist: 0,
                        pointerType: 0,
                        isPrimary: 0
                    })),
                    _n = an(z({}, dn, {
                        touches: 0,
                        targetTouches: 0,
                        changedTouches: 0,
                        altKey: 0,
                        metaKey: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        getModifierState: jn
                    })),
                    Nn = an(z({}, un, {
                        propertyName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    An = z({}, hn, {
                        deltaX: function(e) {
                            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                        },
                        deltaY: function(e) {
                            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                        },
                        deltaZ: 0,
                        deltaMode: 0
                    }),
                    In = an(An),
                    Rn = [9, 13, 27, 32],
                    On = c && "CompositionEvent" in window,
                    Dn = null;
                c && "documentMode" in document && (Dn = document.documentMode);
                var Ln = c && "TextEvent" in window && !Dn,
                    zn = c && (!On || Dn && 8 < Dn && 11 >= Dn),
                    Fn = String.fromCharCode(32),
                    Mn = !1;

                function Gn(e, t) {
                    switch (e) {
                        case "keyup":
                            return -1 !== Rn.indexOf(t.keyCode);
                        case "keydown":
                            return 229 !== t.keyCode;
                        case "keypress":
                        case "mousedown":
                        case "focusout":
                            return !0;
                        default:
                            return !1
                    }
                }

                function Un(e) {
                    return "object" === typeof(e = e.detail) && "data" in e ? e.data : null
                }
                var Hn = !1;
                var Wn = {
                    color: !0,
                    date: !0,
                    datetime: !0,
                    "datetime-local": !0,
                    email: !0,
                    month: !0,
                    number: !0,
                    password: !0,
                    range: !0,
                    search: !0,
                    tel: !0,
                    text: !0,
                    time: !0,
                    url: !0,
                    week: !0
                };

                function Bn(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return "input" === t ? !!Wn[e.type] : "textarea" === t
                }

                function $n(e, t, n, r) {
                    Ee(r), 0 < (t = Vr(t, "onChange")).length && (n = new cn("onChange", "change", null, n, r), e.push({
                        event: n,
                        listeners: t
                    }))
                }
                var Vn = null,
                    qn = null;

                function Kn(e) {
                    Fr(e, 0)
                }

                function Qn(e) {
                    if (q(wa(e))) return e
                }

                function Yn(e, t) {
                    if ("change" === e) return t
                }
                var Xn = !1;
                if (c) {
                    var Jn;
                    if (c) {
                        var Zn = "oninput" in document;
                        if (!Zn) {
                            var er = document.createElement("div");
                            er.setAttribute("oninput", "return;"), Zn = "function" === typeof er.oninput
                        }
                        Jn = Zn
                    } else Jn = !1;
                    Xn = Jn && (!document.documentMode || 9 < document.documentMode)
                }

                function tr() {
                    Vn && (Vn.detachEvent("onpropertychange", nr), qn = Vn = null)
                }

                function nr(e) {
                    if ("value" === e.propertyName && Qn(qn)) {
                        var t = [];
                        $n(t, qn, e, xe(e)), Ae(Kn, t)
                    }
                }

                function rr(e, t, n) {
                    "focusin" === e ? (tr(), qn = n, (Vn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr()
                }

                function ar(e) {
                    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Qn(qn)
                }

                function ir(e, t) {
                    if ("click" === e) return Qn(t)
                }

                function or(e, t) {
                    if ("input" === e || "change" === e) return Qn(t)
                }
                var sr = "function" === typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
                };

                function lr(e, t) {
                    if (sr(e, t)) return !0;
                    if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
                    var n = Object.keys(e),
                        r = Object.keys(t);
                    if (n.length !== r.length) return !1;
                    for (r = 0; r < n.length; r++) {
                        var a = n[r];
                        if (!d.call(t, a) || !sr(e[a], t[a])) return !1
                    }
                    return !0
                }

                function ur(e) {
                    for (; e && e.firstChild;) e = e.firstChild;
                    return e
                }

                function cr(e, t) {
                    var n, r = ur(e);
                    for (e = 0; r;) {
                        if (3 === r.nodeType) {
                            if (n = e + r.textContent.length, e <= t && n >= t) return {
                                node: r,
                                offset: t - e
                            };
                            e = n
                        }
                        e: {
                            for (; r;) {
                                if (r.nextSibling) {
                                    r = r.nextSibling;
                                    break e
                                }
                                r = r.parentNode
                            }
                            r = void 0
                        }
                        r = ur(r)
                    }
                }

                function dr(e, t) {
                    return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? dr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
                }

                function fr() {
                    for (var e = window, t = K(); t instanceof e.HTMLIFrameElement;) {
                        try {
                            var n = "string" === typeof t.contentWindow.location.href
                        } catch (r) {
                            n = !1
                        }
                        if (!n) break;
                        t = K((e = t.contentWindow).document)
                    }
                    return t
                }

                function hr(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
                }

                function pr(e) {
                    var t = fr(),
                        n = e.focusedElem,
                        r = e.selectionRange;
                    if (t !== n && n && n.ownerDocument && dr(n.ownerDocument.documentElement, n)) {
                        if (null !== r && hr(n))
                            if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                            else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                            e = e.getSelection();
                            var a = n.textContent.length,
                                i = Math.min(r.start, a);
                            r = void 0 === r.end ? i : Math.min(r.end, a), !e.extend && i > r && (a = r, r = i, i = a), a = cr(n, i);
                            var o = cr(n, r);
                            a && o && (1 !== e.rangeCount || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && ((t = t.createRange()).setStart(a.node, a.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)))
                        }
                        for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
                            element: e,
                            left: e.scrollLeft,
                            top: e.scrollTop
                        });
                        for ("function" === typeof n.focus && n.focus(), n = 0; n < t.length; n++)(e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top
                    }
                }
                var mr = c && "documentMode" in document && 11 >= document.documentMode,
                    gr = null,
                    vr = null,
                    yr = null,
                    br = !1;

                function wr(e, t, n) {
                    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                    br || null == gr || gr !== K(r) || ("selectionStart" in (r = gr) && hr(r) ? r = {
                        start: r.selectionStart,
                        end: r.selectionEnd
                    } : r = {
                        anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                        anchorOffset: r.anchorOffset,
                        focusNode: r.focusNode,
                        focusOffset: r.focusOffset
                    }, yr && lr(yr, r) || (yr = r, 0 < (r = Vr(vr, "onSelect")).length && (t = new cn("onSelect", "select", null, t, n), e.push({
                        event: t,
                        listeners: r
                    }), t.target = gr)))
                }

                function xr(e, t) {
                    var n = {};
                    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
                }
                var Sr = {
                        animationend: xr("Animation", "AnimationEnd"),
                        animationiteration: xr("Animation", "AnimationIteration"),
                        animationstart: xr("Animation", "AnimationStart"),
                        transitionend: xr("Transition", "TransitionEnd")
                    },
                    kr = {},
                    Cr = {};

                function jr(e) {
                    if (kr[e]) return kr[e];
                    if (!Sr[e]) return e;
                    var t, n = Sr[e];
                    for (t in n)
                        if (n.hasOwnProperty(t) && t in Cr) return kr[e] = n[t];
                    return e
                }
                c && (Cr = document.createElement("div").style, "AnimationEvent" in window || (delete Sr.animationend.animation, delete Sr.animationiteration.animation, delete Sr.animationstart.animation), "TransitionEvent" in window || delete Sr.transitionend.transition);
                var Er = jr("animationend"),
                    Pr = jr("animationiteration"),
                    Tr = jr("animationstart"),
                    _r = jr("transitionend"),
                    Nr = new Map,
                    Ar = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

                function Ir(e, t) {
                    Nr.set(e, t), l(t, [e])
                }
                for (var Rr = 0; Rr < Ar.length; Rr++) {
                    var Or = Ar[Rr];
                    Ir(Or.toLowerCase(), "on" + (Or[0].toUpperCase() + Or.slice(1)))
                }
                Ir(Er, "onAnimationEnd"), Ir(Pr, "onAnimationIteration"), Ir(Tr, "onAnimationStart"), Ir("dblclick", "onDoubleClick"), Ir("focusin", "onFocus"), Ir("focusout", "onBlur"), Ir(_r, "onTransitionEnd"), u("onMouseEnter", ["mouseout", "mouseover"]), u("onMouseLeave", ["mouseout", "mouseover"]), u("onPointerEnter", ["pointerout", "pointerover"]), u("onPointerLeave", ["pointerout", "pointerover"]), l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
                var Dr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                    Lr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));

                function zr(e, t, n) {
                    var r = e.type || "unknown-event";
                    e.currentTarget = n,
                        function(e, t, n, r, a, o, s, l, u) {
                            if (Ue.apply(this, arguments), Le) {
                                if (!Le) throw Error(i(198));
                                var c = ze;
                                Le = !1, ze = null, Fe || (Fe = !0, Me = c)
                            }
                        }(r, t, void 0, e), e.currentTarget = null
                }

                function Fr(e, t) {
                    t = 0 !== (4 & t);
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n],
                            a = r.event;
                        r = r.listeners;
                        e: {
                            var i = void 0;
                            if (t)
                                for (var o = r.length - 1; 0 <= o; o--) {
                                    var s = r[o],
                                        l = s.instance,
                                        u = s.currentTarget;
                                    if (s = s.listener, l !== i && a.isPropagationStopped()) break e;
                                    zr(a, s, u), i = l
                                } else
                                    for (o = 0; o < r.length; o++) {
                                        if (l = (s = r[o]).instance, u = s.currentTarget, s = s.listener, l !== i && a.isPropagationStopped()) break e;
                                        zr(a, s, u), i = l
                                    }
                        }
                    }
                    if (Fe) throw e = Me, Fe = !1, Me = null, e
                }

                function Mr(e, t) {
                    var n = t[ma];
                    void 0 === n && (n = t[ma] = new Set);
                    var r = e + "__bubble";
                    n.has(r) || (Wr(t, e, 2, !1), n.add(r))
                }

                function Gr(e, t, n) {
                    var r = 0;
                    t && (r |= 4), Wr(n, e, r, t)
                }
                var Ur = "_reactListening" + Math.random().toString(36).slice(2);

                function Hr(e) {
                    if (!e[Ur]) {
                        e[Ur] = !0, o.forEach((function(t) {
                            "selectionchange" !== t && (Lr.has(t) || Gr(t, !1, e), Gr(t, !0, e))
                        }));
                        var t = 9 === e.nodeType ? e : e.ownerDocument;
                        null === t || t[Ur] || (t[Ur] = !0, Gr("selectionchange", !1, t))
                    }
                }

                function Wr(e, t, n, r) {
                    switch (Yt(t)) {
                        case 1:
                            var a = $t;
                            break;
                        case 4:
                            a = Vt;
                            break;
                        default:
                            a = qt
                    }
                    n = a.bind(null, t, n, e), a = void 0, !Re || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0), r ? void 0 !== a ? e.addEventListener(t, n, {
                        capture: !0,
                        passive: a
                    }) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, {
                        passive: a
                    }) : e.addEventListener(t, n, !1)
                }

                function Br(e, t, n, r, a) {
                    var i = r;
                    if (0 === (1 & t) && 0 === (2 & t) && null !== r) e: for (;;) {
                        if (null === r) return;
                        var o = r.tag;
                        if (3 === o || 4 === o) {
                            var s = r.stateNode.containerInfo;
                            if (s === a || 8 === s.nodeType && s.parentNode === a) break;
                            if (4 === o)
                                for (o = r.return; null !== o;) {
                                    var l = o.tag;
                                    if ((3 === l || 4 === l) && ((l = o.stateNode.containerInfo) === a || 8 === l.nodeType && l.parentNode === a)) return;
                                    o = o.return
                                }
                            for (; null !== s;) {
                                if (null === (o = ya(s))) return;
                                if (5 === (l = o.tag) || 6 === l) {
                                    r = i = o;
                                    continue e
                                }
                                s = s.parentNode
                            }
                        }
                        r = r.return
                    }
                    Ae((function() {
                        var r = i,
                            a = xe(n),
                            o = [];
                        e: {
                            var s = Nr.get(e);
                            if (void 0 !== s) {
                                var l = cn,
                                    u = e;
                                switch (e) {
                                    case "keypress":
                                        if (0 === tn(n)) break e;
                                    case "keydown":
                                    case "keyup":
                                        l = Pn;
                                        break;
                                    case "focusin":
                                        u = "focus", l = gn;
                                        break;
                                    case "focusout":
                                        u = "blur", l = gn;
                                        break;
                                    case "beforeblur":
                                    case "afterblur":
                                        l = gn;
                                        break;
                                    case "click":
                                        if (2 === n.button) break e;
                                    case "auxclick":
                                    case "dblclick":
                                    case "mousedown":
                                    case "mousemove":
                                    case "mouseup":
                                    case "mouseout":
                                    case "mouseover":
                                    case "contextmenu":
                                        l = pn;
                                        break;
                                    case "drag":
                                    case "dragend":
                                    case "dragenter":
                                    case "dragexit":
                                    case "dragleave":
                                    case "dragover":
                                    case "dragstart":
                                    case "drop":
                                        l = mn;
                                        break;
                                    case "touchcancel":
                                    case "touchend":
                                    case "touchmove":
                                    case "touchstart":
                                        l = _n;
                                        break;
                                    case Er:
                                    case Pr:
                                    case Tr:
                                        l = vn;
                                        break;
                                    case _r:
                                        l = Nn;
                                        break;
                                    case "scroll":
                                        l = fn;
                                        break;
                                    case "wheel":
                                        l = In;
                                        break;
                                    case "copy":
                                    case "cut":
                                    case "paste":
                                        l = bn;
                                        break;
                                    case "gotpointercapture":
                                    case "lostpointercapture":
                                    case "pointercancel":
                                    case "pointerdown":
                                    case "pointermove":
                                    case "pointerout":
                                    case "pointerover":
                                    case "pointerup":
                                        l = Tn
                                }
                                var c = 0 !== (4 & t),
                                    d = !c && "scroll" === e,
                                    f = c ? null !== s ? s + "Capture" : null : s;
                                c = [];
                                for (var h, p = r; null !== p;) {
                                    var m = (h = p).stateNode;
                                    if (5 === h.tag && null !== m && (h = m, null !== f && (null != (m = Ie(p, f)) && c.push($r(p, m, h)))), d) break;
                                    p = p.return
                                }
                                0 < c.length && (s = new l(s, u, null, n, a), o.push({
                                    event: s,
                                    listeners: c
                                }))
                            }
                        }
                        if (0 === (7 & t)) {
                            if (l = "mouseout" === e || "pointerout" === e, (!(s = "mouseover" === e || "pointerover" === e) || n === we || !(u = n.relatedTarget || n.fromElement) || !ya(u) && !u[pa]) && (l || s) && (s = a.window === a ? a : (s = a.ownerDocument) ? s.defaultView || s.parentWindow : window, l ? (l = r, null !== (u = (u = n.relatedTarget || n.toElement) ? ya(u) : null) && (u !== (d = He(u)) || 5 !== u.tag && 6 !== u.tag) && (u = null)) : (l = null, u = r), l !== u)) {
                                if (c = pn, m = "onMouseLeave", f = "onMouseEnter", p = "mouse", "pointerout" !== e && "pointerover" !== e || (c = Tn, m = "onPointerLeave", f = "onPointerEnter", p = "pointer"), d = null == l ? s : wa(l), h = null == u ? s : wa(u), (s = new c(m, p + "leave", l, n, a)).target = d, s.relatedTarget = h, m = null, ya(a) === r && ((c = new c(f, p + "enter", u, n, a)).target = h, c.relatedTarget = d, m = c), d = m, l && u) e: {
                                    for (f = u, p = 0, h = c = l; h; h = qr(h)) p++;
                                    for (h = 0, m = f; m; m = qr(m)) h++;
                                    for (; 0 < p - h;) c = qr(c),
                                    p--;
                                    for (; 0 < h - p;) f = qr(f),
                                    h--;
                                    for (; p--;) {
                                        if (c === f || null !== f && c === f.alternate) break e;
                                        c = qr(c), f = qr(f)
                                    }
                                    c = null
                                }
                                else c = null;
                                null !== l && Kr(o, s, l, c, !1), null !== u && null !== d && Kr(o, d, u, c, !0)
                            }
                            if ("select" === (l = (s = r ? wa(r) : window).nodeName && s.nodeName.toLowerCase()) || "input" === l && "file" === s.type) var g = Yn;
                            else if (Bn(s))
                                if (Xn) g = or;
                                else {
                                    g = ar;
                                    var v = rr
                                }
                            else(l = s.nodeName) && "input" === l.toLowerCase() && ("checkbox" === s.type || "radio" === s.type) && (g = ir);
                            switch (g && (g = g(e, r)) ? $n(o, g, n, a) : (v && v(e, s, r), "focusout" === e && (v = s._wrapperState) && v.controlled && "number" === s.type && ee(s, "number", s.value)), v = r ? wa(r) : window, e) {
                                case "focusin":
                                    (Bn(v) || "true" === v.contentEditable) && (gr = v, vr = r, yr = null);
                                    break;
                                case "focusout":
                                    yr = vr = gr = null;
                                    break;
                                case "mousedown":
                                    br = !0;
                                    break;
                                case "contextmenu":
                                case "mouseup":
                                case "dragend":
                                    br = !1, wr(o, n, a);
                                    break;
                                case "selectionchange":
                                    if (mr) break;
                                case "keydown":
                                case "keyup":
                                    wr(o, n, a)
                            }
                            var y;
                            if (On) e: {
                                switch (e) {
                                    case "compositionstart":
                                        var b = "onCompositionStart";
                                        break e;
                                    case "compositionend":
                                        b = "onCompositionEnd";
                                        break e;
                                    case "compositionupdate":
                                        b = "onCompositionUpdate";
                                        break e
                                }
                                b = void 0
                            }
                            else Hn ? Gn(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
                            b && (zn && "ko" !== n.locale && (Hn || "onCompositionStart" !== b ? "onCompositionEnd" === b && Hn && (y = en()) : (Jt = "value" in (Xt = a) ? Xt.value : Xt.textContent, Hn = !0)), 0 < (v = Vr(r, b)).length && (b = new wn(b, e, null, n, a), o.push({
                                event: b,
                                listeners: v
                            }), y ? b.data = y : null !== (y = Un(n)) && (b.data = y))), (y = Ln ? function(e, t) {
                                switch (e) {
                                    case "compositionend":
                                        return Un(t);
                                    case "keypress":
                                        return 32 !== t.which ? null : (Mn = !0, Fn);
                                    case "textInput":
                                        return (e = t.data) === Fn && Mn ? null : e;
                                    default:
                                        return null
                                }
                            }(e, n) : function(e, t) {
                                if (Hn) return "compositionend" === e || !On && Gn(e, t) ? (e = en(), Zt = Jt = Xt = null, Hn = !1, e) : null;
                                switch (e) {
                                    case "paste":
                                    default:
                                        return null;
                                    case "keypress":
                                        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                            if (t.char && 1 < t.char.length) return t.char;
                                            if (t.which) return String.fromCharCode(t.which)
                                        }
                                        return null;
                                    case "compositionend":
                                        return zn && "ko" !== t.locale ? null : t.data
                                }
                            }(e, n)) && (0 < (r = Vr(r, "onBeforeInput")).length && (a = new wn("onBeforeInput", "beforeinput", null, n, a), o.push({
                                event: a,
                                listeners: r
                            }), a.data = y))
                        }
                        Fr(o, t)
                    }))
                }

                function $r(e, t, n) {
                    return {
                        instance: e,
                        listener: t,
                        currentTarget: n
                    }
                }

                function Vr(e, t) {
                    for (var n = t + "Capture", r = []; null !== e;) {
                        var a = e,
                            i = a.stateNode;
                        5 === a.tag && null !== i && (a = i, null != (i = Ie(e, n)) && r.unshift($r(e, i, a)), null != (i = Ie(e, t)) && r.push($r(e, i, a))), e = e.return
                    }
                    return r
                }

                function qr(e) {
                    if (null === e) return null;
                    do {
                        e = e.return
                    } while (e && 5 !== e.tag);
                    return e || null
                }

                function Kr(e, t, n, r, a) {
                    for (var i = t._reactName, o = []; null !== n && n !== r;) {
                        var s = n,
                            l = s.alternate,
                            u = s.stateNode;
                        if (null !== l && l === r) break;
                        5 === s.tag && null !== u && (s = u, a ? null != (l = Ie(n, i)) && o.unshift($r(n, l, s)) : a || null != (l = Ie(n, i)) && o.push($r(n, l, s))), n = n.return
                    }
                    0 !== o.length && e.push({
                        event: t,
                        listeners: o
                    })
                }
                var Qr = /\r\n?/g,
                    Yr = /\u0000|\uFFFD/g;

                function Xr(e) {
                    return ("string" === typeof e ? e : "" + e).replace(Qr, "\n").replace(Yr, "")
                }

                function Jr(e, t, n) {
                    if (t = Xr(t), Xr(e) !== t && n) throw Error(i(425))
                }

                function Zr() {}
                var ea = null,
                    ta = null;

                function na(e, t) {
                    return "textarea" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
                }
                var ra = "function" === typeof setTimeout ? setTimeout : void 0,
                    aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
                    ia = "function" === typeof Promise ? Promise : void 0,
                    oa = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof ia ? function(e) {
                        return ia.resolve(null).then(e).catch(sa)
                    } : ra;

                function sa(e) {
                    setTimeout((function() {
                        throw e
                    }))
                }

                function la(e, t) {
                    var n = t,
                        r = 0;
                    do {
                        var a = n.nextSibling;
                        if (e.removeChild(n), a && 8 === a.nodeType)
                            if ("/$" === (n = a.data)) {
                                if (0 === r) return e.removeChild(a), void Ht(t);
                                r--
                            } else "$" !== n && "$?" !== n && "$!" !== n || r++;
                        n = a
                    } while (n);
                    Ht(t)
                }

                function ua(e) {
                    for (; null != e; e = e.nextSibling) {
                        var t = e.nodeType;
                        if (1 === t || 3 === t) break;
                        if (8 === t) {
                            if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
                            if ("/$" === t) return null
                        }
                    }
                    return e
                }

                function ca(e) {
                    e = e.previousSibling;
                    for (var t = 0; e;) {
                        if (8 === e.nodeType) {
                            var n = e.data;
                            if ("$" === n || "$!" === n || "$?" === n) {
                                if (0 === t) return e;
                                t--
                            } else "/$" === n && t++
                        }
                        e = e.previousSibling
                    }
                    return null
                }
                var da = Math.random().toString(36).slice(2),
                    fa = "__reactFiber$" + da,
                    ha = "__reactProps$" + da,
                    pa = "__reactContainer$" + da,
                    ma = "__reactEvents$" + da,
                    ga = "__reactListeners$" + da,
                    va = "__reactHandles$" + da;

                function ya(e) {
                    var t = e[fa];
                    if (t) return t;
                    for (var n = e.parentNode; n;) {
                        if (t = n[pa] || n[fa]) {
                            if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                                for (e = ca(e); null !== e;) {
                                    if (n = e[fa]) return n;
                                    e = ca(e)
                                }
                            return t
                        }
                        n = (e = n).parentNode
                    }
                    return null
                }

                function ba(e) {
                    return !(e = e[fa] || e[pa]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
                }

                function wa(e) {
                    if (5 === e.tag || 6 === e.tag) return e.stateNode;
                    throw Error(i(33))
                }

                function xa(e) {
                    return e[ha] || null
                }
                var Sa = [],
                    ka = -1;

                function Ca(e) {
                    return {
                        current: e
                    }
                }

                function ja(e) {
                    0 > ka || (e.current = Sa[ka], Sa[ka] = null, ka--)
                }

                function Ea(e, t) {
                    ka++, Sa[ka] = e.current, e.current = t
                }
                var Pa = {},
                    Ta = Ca(Pa),
                    _a = Ca(!1),
                    Na = Pa;

                function Aa(e, t) {
                    var n = e.type.contextTypes;
                    if (!n) return Pa;
                    var r = e.stateNode;
                    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
                    var a, i = {};
                    for (a in n) i[a] = t[a];
                    return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
                }

                function Ia(e) {
                    return null !== (e = e.childContextTypes) && void 0 !== e
                }

                function Ra() {
                    ja(_a), ja(Ta)
                }

                function Oa(e, t, n) {
                    if (Ta.current !== Pa) throw Error(i(168));
                    Ea(Ta, t), Ea(_a, n)
                }

                function Da(e, t, n) {
                    var r = e.stateNode;
                    if (t = t.childContextTypes, "function" !== typeof r.getChildContext) return n;
                    for (var a in r = r.getChildContext())
                        if (!(a in t)) throw Error(i(108, W(e) || "Unknown", a));
                    return z({}, n, r)
                }

                function La(e) {
                    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Pa, Na = Ta.current, Ea(Ta, e), Ea(_a, _a.current), !0
                }

                function za(e, t, n) {
                    var r = e.stateNode;
                    if (!r) throw Error(i(169));
                    n ? (e = Da(e, t, Na), r.__reactInternalMemoizedMergedChildContext = e, ja(_a), ja(Ta), Ea(Ta, e)) : ja(_a), Ea(_a, n)
                }
                var Fa = null,
                    Ma = !1,
                    Ga = !1;

                function Ua(e) {
                    null === Fa ? Fa = [e] : Fa.push(e)
                }

                function Ha() {
                    if (!Ga && null !== Fa) {
                        Ga = !0;
                        var e = 0,
                            t = bt;
                        try {
                            var n = Fa;
                            for (bt = 1; e < n.length; e++) {
                                var r = n[e];
                                do {
                                    r = r(!0)
                                } while (null !== r)
                            }
                            Fa = null, Ma = !1
                        } catch (a) {
                            throw null !== Fa && (Fa = Fa.slice(e + 1)), qe(Ze, Ha), a
                        } finally {
                            bt = t, Ga = !1
                        }
                    }
                    return null
                }
                var Wa = [],
                    Ba = 0,
                    $a = null,
                    Va = 0,
                    qa = [],
                    Ka = 0,
                    Qa = null,
                    Ya = 1,
                    Xa = "";

                function Ja(e, t) {
                    Wa[Ba++] = Va, Wa[Ba++] = $a, $a = e, Va = t
                }

                function Za(e, t, n) {
                    qa[Ka++] = Ya, qa[Ka++] = Xa, qa[Ka++] = Qa, Qa = e;
                    var r = Ya;
                    e = Xa;
                    var a = 32 - ot(r) - 1;
                    r &= ~(1 << a), n += 1;
                    var i = 32 - ot(t) + a;
                    if (30 < i) {
                        var o = a - a % 5;
                        i = (r & (1 << o) - 1).toString(32), r >>= o, a -= o, Ya = 1 << 32 - ot(t) + a | n << a | r, Xa = i + e
                    } else Ya = 1 << i | n << a | r, Xa = e
                }

                function ei(e) {
                    null !== e.return && (Ja(e, 1), Za(e, 1, 0))
                }

                function ti(e) {
                    for (; e === $a;) $a = Wa[--Ba], Wa[Ba] = null, Va = Wa[--Ba], Wa[Ba] = null;
                    for (; e === Qa;) Qa = qa[--Ka], qa[Ka] = null, Xa = qa[--Ka], qa[Ka] = null, Ya = qa[--Ka], qa[Ka] = null
                }
                var ni = null,
                    ri = null,
                    ai = !1,
                    ii = null;

                function oi(e, t) {
                    var n = Iu(5, null, null, 0);
                    n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
                }

                function si(e, t) {
                    switch (e.tag) {
                        case 5:
                            var n = e.type;
                            return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, ni = e, ri = ua(t.firstChild), !0);
                        case 6:
                            return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, ni = e, ri = null, !0);
                        case 13:
                            return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Qa ? {
                                id: Ya,
                                overflow: Xa
                            } : null, e.memoizedState = {
                                dehydrated: t,
                                treeContext: n,
                                retryLane: 1073741824
                            }, (n = Iu(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, ni = e, ri = null, !0);
                        default:
                            return !1
                    }
                }

                function li(e) {
                    return 0 !== (1 & e.mode) && 0 === (128 & e.flags)
                }

                function ui(e) {
                    if (ai) {
                        var t = ri;
                        if (t) {
                            var n = t;
                            if (!si(e, t)) {
                                if (li(e)) throw Error(i(418));
                                t = ua(n.nextSibling);
                                var r = ni;
                                t && si(e, t) ? oi(r, n) : (e.flags = -4097 & e.flags | 2, ai = !1, ni = e)
                            }
                        } else {
                            if (li(e)) throw Error(i(418));
                            e.flags = -4097 & e.flags | 2, ai = !1, ni = e
                        }
                    }
                }

                function ci(e) {
                    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                    ni = e
                }

                function di(e) {
                    if (e !== ni) return !1;
                    if (!ai) return ci(e), ai = !0, !1;
                    var t;
                    if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !na(e.type, e.memoizedProps)), t && (t = ri)) {
                        if (li(e)) throw fi(), Error(i(418));
                        for (; t;) oi(e, t), t = ua(t.nextSibling)
                    }
                    if (ci(e), 13 === e.tag) {
                        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(i(317));
                        e: {
                            for (e = e.nextSibling, t = 0; e;) {
                                if (8 === e.nodeType) {
                                    var n = e.data;
                                    if ("/$" === n) {
                                        if (0 === t) {
                                            ri = ua(e.nextSibling);
                                            break e
                                        }
                                        t--
                                    } else "$" !== n && "$!" !== n && "$?" !== n || t++
                                }
                                e = e.nextSibling
                            }
                            ri = null
                        }
                    } else ri = ni ? ua(e.stateNode.nextSibling) : null;
                    return !0
                }

                function fi() {
                    for (var e = ri; e;) e = ua(e.nextSibling)
                }

                function hi() {
                    ri = ni = null, ai = !1
                }

                function pi(e) {
                    null === ii ? ii = [e] : ii.push(e)
                }
                var mi = w.ReactCurrentBatchConfig;

                function gi(e, t) {
                    if (e && e.defaultProps) {
                        for (var n in t = z({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
                        return t
                    }
                    return t
                }
                var vi = Ca(null),
                    yi = null,
                    bi = null,
                    wi = null;

                function xi() {
                    wi = bi = yi = null
                }

                function Si(e) {
                    var t = vi.current;
                    ja(vi), e._currentValue = t
                }

                function ki(e, t, n) {
                    for (; null !== e;) {
                        var r = e.alternate;
                        if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
                        e = e.return
                    }
                }

                function Ci(e, t) {
                    yi = e, wi = bi = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (ws = !0), e.firstContext = null)
                }

                function ji(e) {
                    var t = e._currentValue;
                    if (wi !== e)
                        if (e = {
                                context: e,
                                memoizedValue: t,
                                next: null
                            }, null === bi) {
                            if (null === yi) throw Error(i(308));
                            bi = e, yi.dependencies = {
                                lanes: 0,
                                firstContext: e
                            }
                        } else bi = bi.next = e;
                    return t
                }
                var Ei = null;

                function Pi(e) {
                    null === Ei ? Ei = [e] : Ei.push(e)
                }

                function Ti(e, t, n, r) {
                    var a = t.interleaved;
                    return null === a ? (n.next = n, Pi(t)) : (n.next = a.next, a.next = n), t.interleaved = n, _i(e, r)
                }

                function _i(e, t) {
                    e.lanes |= t;
                    var n = e.alternate;
                    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
                    return 3 === n.tag ? n.stateNode : null
                }
                var Ni = !1;

                function Ai(e) {
                    e.updateQueue = {
                        baseState: e.memoizedState,
                        firstBaseUpdate: null,
                        lastBaseUpdate: null,
                        shared: {
                            pending: null,
                            interleaved: null,
                            lanes: 0
                        },
                        effects: null
                    }
                }

                function Ii(e, t) {
                    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                        baseState: e.baseState,
                        firstBaseUpdate: e.firstBaseUpdate,
                        lastBaseUpdate: e.lastBaseUpdate,
                        shared: e.shared,
                        effects: e.effects
                    })
                }

                function Ri(e, t) {
                    return {
                        eventTime: e,
                        lane: t,
                        tag: 0,
                        payload: null,
                        callback: null,
                        next: null
                    }
                }

                function Oi(e, t, n) {
                    var r = e.updateQueue;
                    if (null === r) return null;
                    if (r = r.shared, 0 !== (2 & _l)) {
                        var a = r.pending;
                        return null === a ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, _i(e, n)
                    }
                    return null === (a = r.interleaved) ? (t.next = t, Pi(r)) : (t.next = a.next, a.next = t), r.interleaved = t, _i(e, n)
                }

                function Di(e, t, n) {
                    if (null !== (t = t.updateQueue) && (t = t.shared, 0 !== (4194240 & n))) {
                        var r = t.lanes;
                        n |= r &= e.pendingLanes, t.lanes = n, yt(e, n)
                    }
                }

                function Li(e, t) {
                    var n = e.updateQueue,
                        r = e.alternate;
                    if (null !== r && n === (r = r.updateQueue)) {
                        var a = null,
                            i = null;
                        if (null !== (n = n.firstBaseUpdate)) {
                            do {
                                var o = {
                                    eventTime: n.eventTime,
                                    lane: n.lane,
                                    tag: n.tag,
                                    payload: n.payload,
                                    callback: n.callback,
                                    next: null
                                };
                                null === i ? a = i = o : i = i.next = o, n = n.next
                            } while (null !== n);
                            null === i ? a = i = t : i = i.next = t
                        } else a = i = t;
                        return n = {
                            baseState: r.baseState,
                            firstBaseUpdate: a,
                            lastBaseUpdate: i,
                            shared: r.shared,
                            effects: r.effects
                        }, void(e.updateQueue = n)
                    }
                    null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
                }

                function zi(e, t, n, r) {
                    var a = e.updateQueue;
                    Ni = !1;
                    var i = a.firstBaseUpdate,
                        o = a.lastBaseUpdate,
                        s = a.shared.pending;
                    if (null !== s) {
                        a.shared.pending = null;
                        var l = s,
                            u = l.next;
                        l.next = null, null === o ? i = u : o.next = u, o = l;
                        var c = e.alternate;
                        null !== c && ((s = (c = c.updateQueue).lastBaseUpdate) !== o && (null === s ? c.firstBaseUpdate = u : s.next = u, c.lastBaseUpdate = l))
                    }
                    if (null !== i) {
                        var d = a.baseState;
                        for (o = 0, c = u = l = null, s = i;;) {
                            var f = s.lane,
                                h = s.eventTime;
                            if ((r & f) === f) {
                                null !== c && (c = c.next = {
                                    eventTime: h,
                                    lane: 0,
                                    tag: s.tag,
                                    payload: s.payload,
                                    callback: s.callback,
                                    next: null
                                });
                                e: {
                                    var p = e,
                                        m = s;
                                    switch (f = t, h = n, m.tag) {
                                        case 1:
                                            if ("function" === typeof(p = m.payload)) {
                                                d = p.call(h, d, f);
                                                break e
                                            }
                                            d = p;
                                            break e;
                                        case 3:
                                            p.flags = -65537 & p.flags | 128;
                                        case 0:
                                            if (null === (f = "function" === typeof(p = m.payload) ? p.call(h, d, f) : p) || void 0 === f) break e;
                                            d = z({}, d, f);
                                            break e;
                                        case 2:
                                            Ni = !0
                                    }
                                }
                                null !== s.callback && 0 !== s.lane && (e.flags |= 64, null === (f = a.effects) ? a.effects = [s] : f.push(s))
                            } else h = {
                                eventTime: h,
                                lane: f,
                                tag: s.tag,
                                payload: s.payload,
                                callback: s.callback,
                                next: null
                            }, null === c ? (u = c = h, l = d) : c = c.next = h, o |= f;
                            if (null === (s = s.next)) {
                                if (null === (s = a.shared.pending)) break;
                                s = (f = s).next, f.next = null, a.lastBaseUpdate = f, a.shared.pending = null
                            }
                        }
                        if (null === c && (l = d), a.baseState = l, a.firstBaseUpdate = u, a.lastBaseUpdate = c, null !== (t = a.shared.interleaved)) {
                            a = t;
                            do {
                                o |= a.lane, a = a.next
                            } while (a !== t)
                        } else null === i && (a.shared.lanes = 0);
                        zl |= o, e.lanes = o, e.memoizedState = d
                    }
                }

                function Fi(e, t, n) {
                    if (e = t.effects, t.effects = null, null !== e)
                        for (t = 0; t < e.length; t++) {
                            var r = e[t],
                                a = r.callback;
                            if (null !== a) {
                                if (r.callback = null, r = n, "function" !== typeof a) throw Error(i(191, a));
                                a.call(r)
                            }
                        }
                }
                var Mi = (new r.Component).refs;

                function Gi(e, t, n, r) {
                    n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : z({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
                }
                var Ui = {
                    isMounted: function(e) {
                        return !!(e = e._reactInternals) && He(e) === e
                    },
                    enqueueSetState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = tu(),
                            a = nu(e),
                            i = Ri(r, a);
                        i.payload = t, void 0 !== n && null !== n && (i.callback = n), null !== (t = Oi(e, i, a)) && (ru(t, e, a, r), Di(t, e, a))
                    },
                    enqueueReplaceState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = tu(),
                            a = nu(e),
                            i = Ri(r, a);
                        i.tag = 1, i.payload = t, void 0 !== n && null !== n && (i.callback = n), null !== (t = Oi(e, i, a)) && (ru(t, e, a, r), Di(t, e, a))
                    },
                    enqueueForceUpdate: function(e, t) {
                        e = e._reactInternals;
                        var n = tu(),
                            r = nu(e),
                            a = Ri(n, r);
                        a.tag = 2, void 0 !== t && null !== t && (a.callback = t), null !== (t = Oi(e, a, r)) && (ru(t, e, r, n), Di(t, e, r))
                    }
                };

                function Hi(e, t, n, r, a, i, o) {
                    return "function" === typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, i, o) : !t.prototype || !t.prototype.isPureReactComponent || (!lr(n, r) || !lr(a, i))
                }

                function Wi(e, t, n) {
                    var r = !1,
                        a = Pa,
                        i = t.contextType;
                    return "object" === typeof i && null !== i ? i = ji(i) : (a = Ia(t) ? Na : Ta.current, i = (r = null !== (r = t.contextTypes) && void 0 !== r) ? Aa(e, a) : Pa), t = new t(n, i), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = Ui, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = i), t
                }

                function Bi(e, t, n, r) {
                    e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ui.enqueueReplaceState(t, t.state, null)
                }

                function $i(e, t, n, r) {
                    var a = e.stateNode;
                    a.props = n, a.state = e.memoizedState, a.refs = Mi, Ai(e);
                    var i = t.contextType;
                    "object" === typeof i && null !== i ? a.context = ji(i) : (i = Ia(t) ? Na : Ta.current, a.context = Aa(e, i)), a.state = e.memoizedState, "function" === typeof(i = t.getDerivedStateFromProps) && (Gi(e, t, i, n), a.state = e.memoizedState), "function" === typeof t.getDerivedStateFromProps || "function" === typeof a.getSnapshotBeforeUpdate || "function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount || (t = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), t !== a.state && Ui.enqueueReplaceState(a, a.state, null), zi(e, n, a, r), a.state = e.memoizedState), "function" === typeof a.componentDidMount && (e.flags |= 4194308)
                }

                function Vi(e, t, n) {
                    if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
                        if (n._owner) {
                            if (n = n._owner) {
                                if (1 !== n.tag) throw Error(i(309));
                                var r = n.stateNode
                            }
                            if (!r) throw Error(i(147, e));
                            var a = r,
                                o = "" + e;
                            return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === o ? t.ref : (t = function(e) {
                                var t = a.refs;
                                t === Mi && (t = a.refs = {}), null === e ? delete t[o] : t[o] = e
                            }, t._stringRef = o, t)
                        }
                        if ("string" !== typeof e) throw Error(i(284));
                        if (!n._owner) throw Error(i(290, e))
                    }
                    return e
                }

                function qi(e, t) {
                    throw e = Object.prototype.toString.call(t), Error(i(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
                }

                function Ki(e) {
                    return (0, e._init)(e._payload)
                }

                function Qi(e) {
                    function t(t, n) {
                        if (e) {
                            var r = t.deletions;
                            null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
                        }
                    }

                    function n(n, r) {
                        if (!e) return null;
                        for (; null !== r;) t(n, r), r = r.sibling;
                        return null
                    }

                    function r(e, t) {
                        for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
                        return e
                    }

                    function a(e, t) {
                        return (e = Ou(e, t)).index = 0, e.sibling = null, e
                    }

                    function o(t, n, r) {
                        return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n)
                    }

                    function s(t) {
                        return e && null === t.alternate && (t.flags |= 2), t
                    }

                    function l(e, t, n, r) {
                        return null === t || 6 !== t.tag ? ((t = Fu(n, e.mode, r)).return = e, t) : ((t = a(t, n)).return = e, t)
                    }

                    function u(e, t, n, r) {
                        var i = n.type;
                        return i === k ? d(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === i || "object" === typeof i && null !== i && i.$$typeof === I && Ki(i) === t.type) ? ((r = a(t, n.props)).ref = Vi(e, t, n), r.return = e, r) : ((r = Du(n.type, n.key, n.props, null, e.mode, r)).ref = Vi(e, t, n), r.return = e, r)
                    }

                    function c(e, t, n, r) {
                        return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Mu(n, e.mode, r)).return = e, t) : ((t = a(t, n.children || [])).return = e, t)
                    }

                    function d(e, t, n, r, i) {
                        return null === t || 7 !== t.tag ? ((t = Lu(n, e.mode, r, i)).return = e, t) : ((t = a(t, n)).return = e, t)
                    }

                    function f(e, t, n) {
                        if ("string" === typeof t && "" !== t || "number" === typeof t) return (t = Fu("" + t, e.mode, n)).return = e, t;
                        if ("object" === typeof t && null !== t) {
                            switch (t.$$typeof) {
                                case x:
                                    return (n = Du(t.type, t.key, t.props, null, e.mode, n)).ref = Vi(e, null, t), n.return = e, n;
                                case S:
                                    return (t = Mu(t, e.mode, n)).return = e, t;
                                case I:
                                    return f(e, (0, t._init)(t._payload), n)
                            }
                            if (te(t) || D(t)) return (t = Lu(t, e.mode, n, null)).return = e, t;
                            qi(e, t)
                        }
                        return null
                    }

                    function h(e, t, n, r) {
                        var a = null !== t ? t.key : null;
                        if ("string" === typeof n && "" !== n || "number" === typeof n) return null !== a ? null : l(e, t, "" + n, r);
                        if ("object" === typeof n && null !== n) {
                            switch (n.$$typeof) {
                                case x:
                                    return n.key === a ? u(e, t, n, r) : null;
                                case S:
                                    return n.key === a ? c(e, t, n, r) : null;
                                case I:
                                    return h(e, t, (a = n._init)(n._payload), r)
                            }
                            if (te(n) || D(n)) return null !== a ? null : d(e, t, n, r, null);
                            qi(e, n)
                        }
                        return null
                    }

                    function p(e, t, n, r, a) {
                        if ("string" === typeof r && "" !== r || "number" === typeof r) return l(t, e = e.get(n) || null, "" + r, a);
                        if ("object" === typeof r && null !== r) {
                            switch (r.$$typeof) {
                                case x:
                                    return u(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                                case S:
                                    return c(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                                case I:
                                    return p(e, t, n, (0, r._init)(r._payload), a)
                            }
                            if (te(r) || D(r)) return d(t, e = e.get(n) || null, r, a, null);
                            qi(t, r)
                        }
                        return null
                    }

                    function m(a, i, s, l) {
                        for (var u = null, c = null, d = i, m = i = 0, g = null; null !== d && m < s.length; m++) {
                            d.index > m ? (g = d, d = null) : g = d.sibling;
                            var v = h(a, d, s[m], l);
                            if (null === v) {
                                null === d && (d = g);
                                break
                            }
                            e && d && null === v.alternate && t(a, d), i = o(v, i, m), null === c ? u = v : c.sibling = v, c = v, d = g
                        }
                        if (m === s.length) return n(a, d), ai && Ja(a, m), u;
                        if (null === d) {
                            for (; m < s.length; m++) null !== (d = f(a, s[m], l)) && (i = o(d, i, m), null === c ? u = d : c.sibling = d, c = d);
                            return ai && Ja(a, m), u
                        }
                        for (d = r(a, d); m < s.length; m++) null !== (g = p(d, a, m, s[m], l)) && (e && null !== g.alternate && d.delete(null === g.key ? m : g.key), i = o(g, i, m), null === c ? u = g : c.sibling = g, c = g);
                        return e && d.forEach((function(e) {
                            return t(a, e)
                        })), ai && Ja(a, m), u
                    }

                    function g(a, s, l, u) {
                        var c = D(l);
                        if ("function" !== typeof c) throw Error(i(150));
                        if (null == (l = c.call(l))) throw Error(i(151));
                        for (var d = c = null, m = s, g = s = 0, v = null, y = l.next(); null !== m && !y.done; g++, y = l.next()) {
                            m.index > g ? (v = m, m = null) : v = m.sibling;
                            var b = h(a, m, y.value, u);
                            if (null === b) {
                                null === m && (m = v);
                                break
                            }
                            e && m && null === b.alternate && t(a, m), s = o(b, s, g), null === d ? c = b : d.sibling = b, d = b, m = v
                        }
                        if (y.done) return n(a, m), ai && Ja(a, g), c;
                        if (null === m) {
                            for (; !y.done; g++, y = l.next()) null !== (y = f(a, y.value, u)) && (s = o(y, s, g), null === d ? c = y : d.sibling = y, d = y);
                            return ai && Ja(a, g), c
                        }
                        for (m = r(a, m); !y.done; g++, y = l.next()) null !== (y = p(m, a, g, y.value, u)) && (e && null !== y.alternate && m.delete(null === y.key ? g : y.key), s = o(y, s, g), null === d ? c = y : d.sibling = y, d = y);
                        return e && m.forEach((function(e) {
                            return t(a, e)
                        })), ai && Ja(a, g), c
                    }
                    return function e(r, i, o, l) {
                        if ("object" === typeof o && null !== o && o.type === k && null === o.key && (o = o.props.children), "object" === typeof o && null !== o) {
                            switch (o.$$typeof) {
                                case x:
                                    e: {
                                        for (var u = o.key, c = i; null !== c;) {
                                            if (c.key === u) {
                                                if ((u = o.type) === k) {
                                                    if (7 === c.tag) {
                                                        n(r, c.sibling), (i = a(c, o.props.children)).return = r, r = i;
                                                        break e
                                                    }
                                                } else if (c.elementType === u || "object" === typeof u && null !== u && u.$$typeof === I && Ki(u) === c.type) {
                                                    n(r, c.sibling), (i = a(c, o.props)).ref = Vi(r, c, o), i.return = r, r = i;
                                                    break e
                                                }
                                                n(r, c);
                                                break
                                            }
                                            t(r, c), c = c.sibling
                                        }
                                        o.type === k ? ((i = Lu(o.props.children, r.mode, l, o.key)).return = r, r = i) : ((l = Du(o.type, o.key, o.props, null, r.mode, l)).ref = Vi(r, i, o), l.return = r, r = l)
                                    }
                                    return s(r);
                                case S:
                                    e: {
                                        for (c = o.key; null !== i;) {
                                            if (i.key === c) {
                                                if (4 === i.tag && i.stateNode.containerInfo === o.containerInfo && i.stateNode.implementation === o.implementation) {
                                                    n(r, i.sibling), (i = a(i, o.children || [])).return = r, r = i;
                                                    break e
                                                }
                                                n(r, i);
                                                break
                                            }
                                            t(r, i), i = i.sibling
                                        }(i = Mu(o, r.mode, l)).return = r,
                                        r = i
                                    }
                                    return s(r);
                                case I:
                                    return e(r, i, (c = o._init)(o._payload), l)
                            }
                            if (te(o)) return m(r, i, o, l);
                            if (D(o)) return g(r, i, o, l);
                            qi(r, o)
                        }
                        return "string" === typeof o && "" !== o || "number" === typeof o ? (o = "" + o, null !== i && 6 === i.tag ? (n(r, i.sibling), (i = a(i, o)).return = r, r = i) : (n(r, i), (i = Fu(o, r.mode, l)).return = r, r = i), s(r)) : n(r, i)
                    }
                }
                var Yi = Qi(!0),
                    Xi = Qi(!1),
                    Ji = {},
                    Zi = Ca(Ji),
                    eo = Ca(Ji),
                    to = Ca(Ji);

                function no(e) {
                    if (e === Ji) throw Error(i(174));
                    return e
                }

                function ro(e, t) {
                    switch (Ea(to, t), Ea(eo, e), Ea(Zi, Ji), e = t.nodeType) {
                        case 9:
                        case 11:
                            t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
                            break;
                        default:
                            t = le(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                    }
                    ja(Zi), Ea(Zi, t)
                }

                function ao() {
                    ja(Zi), ja(eo), ja(to)
                }

                function io(e) {
                    no(to.current);
                    var t = no(Zi.current),
                        n = le(t, e.type);
                    t !== n && (Ea(eo, e), Ea(Zi, n))
                }

                function oo(e) {
                    eo.current === e && (ja(Zi), ja(eo))
                }
                var so = Ca(0);

                function lo(e) {
                    for (var t = e; null !== t;) {
                        if (13 === t.tag) {
                            var n = t.memoizedState;
                            if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
                        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                            if (0 !== (128 & t.flags)) return t
                        } else if (null !== t.child) {
                            t.child.return = t, t = t.child;
                            continue
                        }
                        if (t === e) break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e) return null;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                    return null
                }
                var uo = [];

                function co() {
                    for (var e = 0; e < uo.length; e++) uo[e]._workInProgressVersionPrimary = null;
                    uo.length = 0
                }
                var fo = w.ReactCurrentDispatcher,
                    ho = w.ReactCurrentBatchConfig,
                    po = 0,
                    mo = null,
                    go = null,
                    vo = null,
                    yo = !1,
                    bo = !1,
                    wo = 0,
                    xo = 0;

                function So() {
                    throw Error(i(321))
                }

                function ko(e, t) {
                    if (null === t) return !1;
                    for (var n = 0; n < t.length && n < e.length; n++)
                        if (!sr(e[n], t[n])) return !1;
                    return !0
                }

                function Co(e, t, n, r, a, o) {
                    if (po = o, mo = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, fo.current = null === e || null === e.memoizedState ? ss : ls, e = n(r, a), bo) {
                        o = 0;
                        do {
                            if (bo = !1, wo = 0, 25 <= o) throw Error(i(301));
                            o += 1, vo = go = null, t.updateQueue = null, fo.current = us, e = n(r, a)
                        } while (bo)
                    }
                    if (fo.current = os, t = null !== go && null !== go.next, po = 0, vo = go = mo = null, yo = !1, t) throw Error(i(300));
                    return e
                }

                function jo() {
                    var e = 0 !== wo;
                    return wo = 0, e
                }

                function Eo() {
                    var e = {
                        memoizedState: null,
                        baseState: null,
                        baseQueue: null,
                        queue: null,
                        next: null
                    };
                    return null === vo ? mo.memoizedState = vo = e : vo = vo.next = e, vo
                }

                function Po() {
                    if (null === go) {
                        var e = mo.alternate;
                        e = null !== e ? e.memoizedState : null
                    } else e = go.next;
                    var t = null === vo ? mo.memoizedState : vo.next;
                    if (null !== t) vo = t, go = e;
                    else {
                        if (null === e) throw Error(i(310));
                        e = {
                            memoizedState: (go = e).memoizedState,
                            baseState: go.baseState,
                            baseQueue: go.baseQueue,
                            queue: go.queue,
                            next: null
                        }, null === vo ? mo.memoizedState = vo = e : vo = vo.next = e
                    }
                    return vo
                }

                function To(e, t) {
                    return "function" === typeof t ? t(e) : t
                }

                function _o(e) {
                    var t = Po(),
                        n = t.queue;
                    if (null === n) throw Error(i(311));
                    n.lastRenderedReducer = e;
                    var r = go,
                        a = r.baseQueue,
                        o = n.pending;
                    if (null !== o) {
                        if (null !== a) {
                            var s = a.next;
                            a.next = o.next, o.next = s
                        }
                        r.baseQueue = a = o, n.pending = null
                    }
                    if (null !== a) {
                        o = a.next, r = r.baseState;
                        var l = s = null,
                            u = null,
                            c = o;
                        do {
                            var d = c.lane;
                            if ((po & d) === d) null !== u && (u = u.next = {
                                lane: 0,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null
                            }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
                            else {
                                var f = {
                                    lane: d,
                                    action: c.action,
                                    hasEagerState: c.hasEagerState,
                                    eagerState: c.eagerState,
                                    next: null
                                };
                                null === u ? (l = u = f, s = r) : u = u.next = f, mo.lanes |= d, zl |= d
                            }
                            c = c.next
                        } while (null !== c && c !== o);
                        null === u ? s = r : u.next = l, sr(r, t.memoizedState) || (ws = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = u, n.lastRenderedState = r
                    }
                    if (null !== (e = n.interleaved)) {
                        a = e;
                        do {
                            o = a.lane, mo.lanes |= o, zl |= o, a = a.next
                        } while (a !== e)
                    } else null === a && (n.lanes = 0);
                    return [t.memoizedState, n.dispatch]
                }

                function No(e) {
                    var t = Po(),
                        n = t.queue;
                    if (null === n) throw Error(i(311));
                    n.lastRenderedReducer = e;
                    var r = n.dispatch,
                        a = n.pending,
                        o = t.memoizedState;
                    if (null !== a) {
                        n.pending = null;
                        var s = a = a.next;
                        do {
                            o = e(o, s.action), s = s.next
                        } while (s !== a);
                        sr(o, t.memoizedState) || (ws = !0), t.memoizedState = o, null === t.baseQueue && (t.baseState = o), n.lastRenderedState = o
                    }
                    return [o, r]
                }

                function Ao() {}

                function Io(e, t) {
                    var n = mo,
                        r = Po(),
                        a = t(),
                        o = !sr(r.memoizedState, a);
                    if (o && (r.memoizedState = a, ws = !0), r = r.queue, Bo(Do.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || null !== vo && 1 & vo.memoizedState.tag) {
                        if (n.flags |= 2048, Mo(9, Oo.bind(null, n, r, a, t), void 0, null), null === Nl) throw Error(i(349));
                        0 !== (30 & po) || Ro(n, t, a)
                    }
                    return a
                }

                function Ro(e, t, n) {
                    e.flags |= 16384, e = {
                        getSnapshot: t,
                        value: n
                    }, null === (t = mo.updateQueue) ? (t = {
                        lastEffect: null,
                        stores: null
                    }, mo.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
                }

                function Oo(e, t, n, r) {
                    t.value = n, t.getSnapshot = r, Lo(t) && zo(e)
                }

                function Do(e, t, n) {
                    return n((function() {
                        Lo(t) && zo(e)
                    }))
                }

                function Lo(e) {
                    var t = e.getSnapshot;
                    e = e.value;
                    try {
                        var n = t();
                        return !sr(e, n)
                    } catch (r) {
                        return !0
                    }
                }

                function zo(e) {
                    var t = _i(e, 1);
                    null !== t && ru(t, e, 1, -1)
                }

                function Fo(e) {
                    var t = Eo();
                    return "function" === typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: To,
                        lastRenderedState: e
                    }, t.queue = e, e = e.dispatch = ns.bind(null, mo, e), [t.memoizedState, e]
                }

                function Mo(e, t, n, r) {
                    return e = {
                        tag: e,
                        create: t,
                        destroy: n,
                        deps: r,
                        next: null
                    }, null === (t = mo.updateQueue) ? (t = {
                        lastEffect: null,
                        stores: null
                    }, mo.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
                }

                function Go() {
                    return Po().memoizedState
                }

                function Uo(e, t, n, r) {
                    var a = Eo();
                    mo.flags |= e, a.memoizedState = Mo(1 | t, n, void 0, void 0 === r ? null : r)
                }

                function Ho(e, t, n, r) {
                    var a = Po();
                    r = void 0 === r ? null : r;
                    var i = void 0;
                    if (null !== go) {
                        var o = go.memoizedState;
                        if (i = o.destroy, null !== r && ko(r, o.deps)) return void(a.memoizedState = Mo(t, n, i, r))
                    }
                    mo.flags |= e, a.memoizedState = Mo(1 | t, n, i, r)
                }

                function Wo(e, t) {
                    return Uo(8390656, 8, e, t)
                }

                function Bo(e, t) {
                    return Ho(2048, 8, e, t)
                }

                function $o(e, t) {
                    return Ho(4, 2, e, t)
                }

                function Vo(e, t) {
                    return Ho(4, 4, e, t)
                }

                function qo(e, t) {
                    return "function" === typeof t ? (e = e(), t(e), function() {
                        t(null)
                    }) : null !== t && void 0 !== t ? (e = e(), t.current = e, function() {
                        t.current = null
                    }) : void 0
                }

                function Ko(e, t, n) {
                    return n = null !== n && void 0 !== n ? n.concat([e]) : null, Ho(4, 4, qo.bind(null, t, e), n)
                }

                function Qo() {}

                function Yo(e, t) {
                    var n = Po();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && ko(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
                }

                function Xo(e, t) {
                    var n = Po();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && ko(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
                }

                function Jo(e, t, n) {
                    return 0 === (21 & po) ? (e.baseState && (e.baseState = !1, ws = !0), e.memoizedState = n) : (sr(n, t) || (n = mt(), mo.lanes |= n, zl |= n, e.baseState = !0), t)
                }

                function Zo(e, t) {
                    var n = bt;
                    bt = 0 !== n && 4 > n ? n : 4, e(!0);
                    var r = ho.transition;
                    ho.transition = {};
                    try {
                        e(!1), t()
                    } finally {
                        bt = n, ho.transition = r
                    }
                }

                function es() {
                    return Po().memoizedState
                }

                function ts(e, t, n) {
                    var r = nu(e);
                    if (n = {
                            lane: r,
                            action: n,
                            hasEagerState: !1,
                            eagerState: null,
                            next: null
                        }, rs(e)) as(t, n);
                    else if (null !== (n = Ti(e, t, n, r))) {
                        ru(n, e, r, tu()), is(n, t, r)
                    }
                }

                function ns(e, t, n) {
                    var r = nu(e),
                        a = {
                            lane: r,
                            action: n,
                            hasEagerState: !1,
                            eagerState: null,
                            next: null
                        };
                    if (rs(e)) as(t, a);
                    else {
                        var i = e.alternate;
                        if (0 === e.lanes && (null === i || 0 === i.lanes) && null !== (i = t.lastRenderedReducer)) try {
                            var o = t.lastRenderedState,
                                s = i(o, n);
                            if (a.hasEagerState = !0, a.eagerState = s, sr(s, o)) {
                                var l = t.interleaved;
                                return null === l ? (a.next = a, Pi(t)) : (a.next = l.next, l.next = a), void(t.interleaved = a)
                            }
                        } catch (u) {}
                        null !== (n = Ti(e, t, a, r)) && (ru(n, e, r, a = tu()), is(n, t, r))
                    }
                }

                function rs(e) {
                    var t = e.alternate;
                    return e === mo || null !== t && t === mo
                }

                function as(e, t) {
                    bo = yo = !0;
                    var n = e.pending;
                    null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
                }

                function is(e, t, n) {
                    if (0 !== (4194240 & n)) {
                        var r = t.lanes;
                        n |= r &= e.pendingLanes, t.lanes = n, yt(e, n)
                    }
                }
                var os = {
                        readContext: ji,
                        useCallback: So,
                        useContext: So,
                        useEffect: So,
                        useImperativeHandle: So,
                        useInsertionEffect: So,
                        useLayoutEffect: So,
                        useMemo: So,
                        useReducer: So,
                        useRef: So,
                        useState: So,
                        useDebugValue: So,
                        useDeferredValue: So,
                        useTransition: So,
                        useMutableSource: So,
                        useSyncExternalStore: So,
                        useId: So,
                        unstable_isNewReconciler: !1
                    },
                    ss = {
                        readContext: ji,
                        useCallback: function(e, t) {
                            return Eo().memoizedState = [e, void 0 === t ? null : t], e
                        },
                        useContext: ji,
                        useEffect: Wo,
                        useImperativeHandle: function(e, t, n) {
                            return n = null !== n && void 0 !== n ? n.concat([e]) : null, Uo(4194308, 4, qo.bind(null, t, e), n)
                        },
                        useLayoutEffect: function(e, t) {
                            return Uo(4194308, 4, e, t)
                        },
                        useInsertionEffect: function(e, t) {
                            return Uo(4, 2, e, t)
                        },
                        useMemo: function(e, t) {
                            var n = Eo();
                            return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
                        },
                        useReducer: function(e, t, n) {
                            var r = Eo();
                            return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                                pending: null,
                                interleaved: null,
                                lanes: 0,
                                dispatch: null,
                                lastRenderedReducer: e,
                                lastRenderedState: t
                            }, r.queue = e, e = e.dispatch = ts.bind(null, mo, e), [r.memoizedState, e]
                        },
                        useRef: function(e) {
                            return e = {
                                current: e
                            }, Eo().memoizedState = e
                        },
                        useState: Fo,
                        useDebugValue: Qo,
                        useDeferredValue: function(e) {
                            return Eo().memoizedState = e
                        },
                        useTransition: function() {
                            var e = Fo(!1),
                                t = e[0];
                            return e = Zo.bind(null, e[1]), Eo().memoizedState = e, [t, e]
                        },
                        useMutableSource: function() {},
                        useSyncExternalStore: function(e, t, n) {
                            var r = mo,
                                a = Eo();
                            if (ai) {
                                if (void 0 === n) throw Error(i(407));
                                n = n()
                            } else {
                                if (n = t(), null === Nl) throw Error(i(349));
                                0 !== (30 & po) || Ro(r, t, n)
                            }
                            a.memoizedState = n;
                            var o = {
                                value: n,
                                getSnapshot: t
                            };
                            return a.queue = o, Wo(Do.bind(null, r, o, e), [e]), r.flags |= 2048, Mo(9, Oo.bind(null, r, o, n, t), void 0, null), n
                        },
                        useId: function() {
                            var e = Eo(),
                                t = Nl.identifierPrefix;
                            if (ai) {
                                var n = Xa;
                                t = ":" + t + "R" + (n = (Ya & ~(1 << 32 - ot(Ya) - 1)).toString(32) + n), 0 < (n = wo++) && (t += "H" + n.toString(32)), t += ":"
                            } else t = ":" + t + "r" + (n = xo++).toString(32) + ":";
                            return e.memoizedState = t
                        },
                        unstable_isNewReconciler: !1
                    },
                    ls = {
                        readContext: ji,
                        useCallback: Yo,
                        useContext: ji,
                        useEffect: Bo,
                        useImperativeHandle: Ko,
                        useInsertionEffect: $o,
                        useLayoutEffect: Vo,
                        useMemo: Xo,
                        useReducer: _o,
                        useRef: Go,
                        useState: function() {
                            return _o(To)
                        },
                        useDebugValue: Qo,
                        useDeferredValue: function(e) {
                            return Jo(Po(), go.memoizedState, e)
                        },
                        useTransition: function() {
                            return [_o(To)[0], Po().memoizedState]
                        },
                        useMutableSource: Ao,
                        useSyncExternalStore: Io,
                        useId: es,
                        unstable_isNewReconciler: !1
                    },
                    us = {
                        readContext: ji,
                        useCallback: Yo,
                        useContext: ji,
                        useEffect: Bo,
                        useImperativeHandle: Ko,
                        useInsertionEffect: $o,
                        useLayoutEffect: Vo,
                        useMemo: Xo,
                        useReducer: No,
                        useRef: Go,
                        useState: function() {
                            return No(To)
                        },
                        useDebugValue: Qo,
                        useDeferredValue: function(e) {
                            var t = Po();
                            return null === go ? t.memoizedState = e : Jo(t, go.memoizedState, e)
                        },
                        useTransition: function() {
                            return [No(To)[0], Po().memoizedState]
                        },
                        useMutableSource: Ao,
                        useSyncExternalStore: Io,
                        useId: es,
                        unstable_isNewReconciler: !1
                    };

                function cs(e, t) {
                    try {
                        var n = "",
                            r = t;
                        do {
                            n += U(r), r = r.return
                        } while (r);
                        var a = n
                    } catch (i) {
                        a = "\nError generating stack: " + i.message + "\n" + i.stack
                    }
                    return {
                        value: e,
                        source: t,
                        stack: a,
                        digest: null
                    }
                }

                function ds(e, t, n) {
                    return {
                        value: e,
                        source: null,
                        stack: null != n ? n : null,
                        digest: null != t ? t : null
                    }
                }

                function fs(e, t) {
                    try {
                        console.error(t.value)
                    } catch (n) {
                        setTimeout((function() {
                            throw n
                        }))
                    }
                }
                var hs = "function" === typeof WeakMap ? WeakMap : Map;

                function ps(e, t, n) {
                    (n = Ri(-1, n)).tag = 3, n.payload = {
                        element: null
                    };
                    var r = t.value;
                    return n.callback = function() {
                        $l || ($l = !0, Vl = r), fs(0, t)
                    }, n
                }

                function ms(e, t, n) {
                    (n = Ri(-1, n)).tag = 3;
                    var r = e.type.getDerivedStateFromError;
                    if ("function" === typeof r) {
                        var a = t.value;
                        n.payload = function() {
                            return r(a)
                        }, n.callback = function() {
                            fs(0, t)
                        }
                    }
                    var i = e.stateNode;
                    return null !== i && "function" === typeof i.componentDidCatch && (n.callback = function() {
                        fs(0, t), "function" !== typeof r && (null === ql ? ql = new Set([this]) : ql.add(this));
                        var e = t.stack;
                        this.componentDidCatch(t.value, {
                            componentStack: null !== e ? e : ""
                        })
                    }), n
                }

                function gs(e, t, n) {
                    var r = e.pingCache;
                    if (null === r) {
                        r = e.pingCache = new hs;
                        var a = new Set;
                        r.set(t, a)
                    } else void 0 === (a = r.get(t)) && (a = new Set, r.set(t, a));
                    a.has(n) || (a.add(n), e = Eu.bind(null, e, t, n), t.then(e, e))
                }

                function vs(e) {
                    do {
                        var t;
                        if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
                        e = e.return
                    } while (null !== e);
                    return null
                }

                function ys(e, t, n, r, a) {
                    return 0 === (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Ri(-1, 1)).tag = 2, Oi(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e)
                }
                var bs = w.ReactCurrentOwner,
                    ws = !1;

                function xs(e, t, n, r) {
                    t.child = null === e ? Xi(t, null, n, r) : Yi(t, e.child, n, r)
                }

                function Ss(e, t, n, r, a) {
                    n = n.render;
                    var i = t.ref;
                    return Ci(t, a), r = Co(e, t, n, r, i, a), n = jo(), null === e || ws ? (ai && n && ei(t), t.flags |= 1, xs(e, t, r, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, $s(e, t, a))
                }

                function ks(e, t, n, r, a) {
                    if (null === e) {
                        var i = n.type;
                        return "function" !== typeof i || Ru(i) || void 0 !== i.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Du(n.type, null, r, t, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = i, Cs(e, t, i, r, a))
                    }
                    if (i = e.child, 0 === (e.lanes & a)) {
                        var o = i.memoizedProps;
                        if ((n = null !== (n = n.compare) ? n : lr)(o, r) && e.ref === t.ref) return $s(e, t, a)
                    }
                    return t.flags |= 1, (e = Ou(i, r)).ref = t.ref, e.return = t, t.child = e
                }

                function Cs(e, t, n, r, a) {
                    if (null !== e) {
                        var i = e.memoizedProps;
                        if (lr(i, r) && e.ref === t.ref) {
                            if (ws = !1, t.pendingProps = r = i, 0 === (e.lanes & a)) return t.lanes = e.lanes, $s(e, t, a);
                            0 !== (131072 & e.flags) && (ws = !0)
                        }
                    }
                    return Ps(e, t, n, r, a)
                }

                function js(e, t, n) {
                    var r = t.pendingProps,
                        a = r.children,
                        i = null !== e ? e.memoizedState : null;
                    if ("hidden" === r.mode)
                        if (0 === (1 & t.mode)) t.memoizedState = {
                            baseLanes: 0,
                            cachePool: null,
                            transitions: null
                        }, Ea(Ol, Rl), Rl |= n;
                        else {
                            if (0 === (1073741824 & n)) return e = null !== i ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                                baseLanes: e,
                                cachePool: null,
                                transitions: null
                            }, t.updateQueue = null, Ea(Ol, Rl), Rl |= e, null;
                            t.memoizedState = {
                                baseLanes: 0,
                                cachePool: null,
                                transitions: null
                            }, r = null !== i ? i.baseLanes : n, Ea(Ol, Rl), Rl |= r
                        }
                    else null !== i ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Ea(Ol, Rl), Rl |= r;
                    return xs(e, t, a, n), t.child
                }

                function Es(e, t) {
                    var n = t.ref;
                    (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
                }

                function Ps(e, t, n, r, a) {
                    var i = Ia(n) ? Na : Ta.current;
                    return i = Aa(t, i), Ci(t, a), n = Co(e, t, n, r, i, a), r = jo(), null === e || ws ? (ai && r && ei(t), t.flags |= 1, xs(e, t, n, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, $s(e, t, a))
                }

                function Ts(e, t, n, r, a) {
                    if (Ia(n)) {
                        var i = !0;
                        La(t)
                    } else i = !1;
                    if (Ci(t, a), null === t.stateNode) Bs(e, t), Wi(t, n, r), $i(t, n, r, a), r = !0;
                    else if (null === e) {
                        var o = t.stateNode,
                            s = t.memoizedProps;
                        o.props = s;
                        var l = o.context,
                            u = n.contextType;
                        "object" === typeof u && null !== u ? u = ji(u) : u = Aa(t, u = Ia(n) ? Na : Ta.current);
                        var c = n.getDerivedStateFromProps,
                            d = "function" === typeof c || "function" === typeof o.getSnapshotBeforeUpdate;
                        d || "function" !== typeof o.UNSAFE_componentWillReceiveProps && "function" !== typeof o.componentWillReceiveProps || (s !== r || l !== u) && Bi(t, o, r, u), Ni = !1;
                        var f = t.memoizedState;
                        o.state = f, zi(t, r, o, a), l = t.memoizedState, s !== r || f !== l || _a.current || Ni ? ("function" === typeof c && (Gi(t, n, c, r), l = t.memoizedState), (s = Ni || Hi(t, n, s, r, f, l, u)) ? (d || "function" !== typeof o.UNSAFE_componentWillMount && "function" !== typeof o.componentWillMount || ("function" === typeof o.componentWillMount && o.componentWillMount(), "function" === typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()), "function" === typeof o.componentDidMount && (t.flags |= 4194308)) : ("function" === typeof o.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), o.props = r, o.state = l, o.context = u, r = s) : ("function" === typeof o.componentDidMount && (t.flags |= 4194308), r = !1)
                    } else {
                        o = t.stateNode, Ii(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : gi(t.type, s), o.props = u, d = t.pendingProps, f = o.context, "object" === typeof(l = n.contextType) && null !== l ? l = ji(l) : l = Aa(t, l = Ia(n) ? Na : Ta.current);
                        var h = n.getDerivedStateFromProps;
                        (c = "function" === typeof h || "function" === typeof o.getSnapshotBeforeUpdate) || "function" !== typeof o.UNSAFE_componentWillReceiveProps && "function" !== typeof o.componentWillReceiveProps || (s !== d || f !== l) && Bi(t, o, r, l), Ni = !1, f = t.memoizedState, o.state = f, zi(t, r, o, a);
                        var p = t.memoizedState;
                        s !== d || f !== p || _a.current || Ni ? ("function" === typeof h && (Gi(t, n, h, r), p = t.memoizedState), (u = Ni || Hi(t, n, u, r, f, p, l) || !1) ? (c || "function" !== typeof o.UNSAFE_componentWillUpdate && "function" !== typeof o.componentWillUpdate || ("function" === typeof o.componentWillUpdate && o.componentWillUpdate(r, p, l), "function" === typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, p, l)), "function" === typeof o.componentDidUpdate && (t.flags |= 4), "function" === typeof o.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" !== typeof o.componentDidUpdate || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" !== typeof o.getSnapshotBeforeUpdate || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), o.props = r, o.state = p, o.context = l, r = u) : ("function" !== typeof o.componentDidUpdate || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" !== typeof o.getSnapshotBeforeUpdate || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
                    }
                    return _s(e, t, n, r, i, a)
                }

                function _s(e, t, n, r, a, i) {
                    Es(e, t);
                    var o = 0 !== (128 & t.flags);
                    if (!r && !o) return a && za(t, n, !1), $s(e, t, i);
                    r = t.stateNode, bs.current = t;
                    var s = o && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
                    return t.flags |= 1, null !== e && o ? (t.child = Yi(t, e.child, null, i), t.child = Yi(t, null, s, i)) : xs(e, t, s, i), t.memoizedState = r.state, a && za(t, n, !0), t.child
                }

                function Ns(e) {
                    var t = e.stateNode;
                    t.pendingContext ? Oa(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Oa(0, t.context, !1), ro(e, t.containerInfo)
                }

                function As(e, t, n, r, a) {
                    return hi(), pi(a), t.flags |= 256, xs(e, t, n, r), t.child
                }
                var Is, Rs, Os, Ds, Ls = {
                    dehydrated: null,
                    treeContext: null,
                    retryLane: 0
                };

                function zs(e) {
                    return {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    }
                }

                function Fs(e, t, n) {
                    var r, a = t.pendingProps,
                        o = so.current,
                        s = !1,
                        l = 0 !== (128 & t.flags);
                    if ((r = l) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)), r ? (s = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (o |= 1), Ea(so, 1 & o), null === e) return ui(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 === (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (l = a.children, e = a.fallback, s ? (a = t.mode, s = t.child, l = {
                        mode: "hidden",
                        children: l
                    }, 0 === (1 & a) && null !== s ? (s.childLanes = 0, s.pendingProps = l) : s = zu(l, a, 0, null), e = Lu(e, a, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = zs(n), t.memoizedState = Ls, e) : Ms(t, l));
                    if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated)) return function(e, t, n, r, a, o, s) {
                        if (n) return 256 & t.flags ? (t.flags &= -257, Gs(e, t, s, r = ds(Error(i(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, a = t.mode, r = zu({
                            mode: "visible",
                            children: r.children
                        }, a, 0, null), (o = Lu(o, a, s, null)).flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, 0 !== (1 & t.mode) && Yi(t, e.child, null, s), t.child.memoizedState = zs(s), t.memoizedState = Ls, o);
                        if (0 === (1 & t.mode)) return Gs(e, t, s, null);
                        if ("$!" === a.data) {
                            if (r = a.nextSibling && a.nextSibling.dataset) var l = r.dgst;
                            return r = l, Gs(e, t, s, r = ds(o = Error(i(419)), r, void 0))
                        }
                        if (l = 0 !== (s & e.childLanes), ws || l) {
                            if (null !== (r = Nl)) {
                                switch (s & -s) {
                                    case 4:
                                        a = 2;
                                        break;
                                    case 16:
                                        a = 8;
                                        break;
                                    case 64:
                                    case 128:
                                    case 256:
                                    case 512:
                                    case 1024:
                                    case 2048:
                                    case 4096:
                                    case 8192:
                                    case 16384:
                                    case 32768:
                                    case 65536:
                                    case 131072:
                                    case 262144:
                                    case 524288:
                                    case 1048576:
                                    case 2097152:
                                    case 4194304:
                                    case 8388608:
                                    case 16777216:
                                    case 33554432:
                                    case 67108864:
                                        a = 32;
                                        break;
                                    case 536870912:
                                        a = 268435456;
                                        break;
                                    default:
                                        a = 0
                                }
                                0 !== (a = 0 !== (a & (r.suspendedLanes | s)) ? 0 : a) && a !== o.retryLane && (o.retryLane = a, _i(e, a), ru(r, e, a, -1))
                            }
                            return gu(), Gs(e, t, s, r = ds(Error(i(421))))
                        }
                        return "$?" === a.data ? (t.flags |= 128, t.child = e.child, t = Tu.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, ri = ua(a.nextSibling), ni = t, ai = !0, ii = null, null !== e && (qa[Ka++] = Ya, qa[Ka++] = Xa, qa[Ka++] = Qa, Ya = e.id, Xa = e.overflow, Qa = t), t = Ms(t, r.children), t.flags |= 4096, t)
                    }(e, t, l, a, r, o, n);
                    if (s) {
                        s = a.fallback, l = t.mode, r = (o = e.child).sibling;
                        var u = {
                            mode: "hidden",
                            children: a.children
                        };
                        return 0 === (1 & l) && t.child !== o ? ((a = t.child).childLanes = 0, a.pendingProps = u, t.deletions = null) : (a = Ou(o, u)).subtreeFlags = 14680064 & o.subtreeFlags, null !== r ? s = Ou(r, s) : (s = Lu(s, l, n, null)).flags |= 2, s.return = t, a.return = t, a.sibling = s, t.child = a, a = s, s = t.child, l = null === (l = e.child.memoizedState) ? zs(n) : {
                            baseLanes: l.baseLanes | n,
                            cachePool: null,
                            transitions: l.transitions
                        }, s.memoizedState = l, s.childLanes = e.childLanes & ~n, t.memoizedState = Ls, a
                    }
                    return e = (s = e.child).sibling, a = Ou(s, {
                        mode: "visible",
                        children: a.children
                    }), 0 === (1 & t.mode) && (a.lanes = n), a.return = t, a.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = a, t.memoizedState = null, a
                }

                function Ms(e, t) {
                    return (t = zu({
                        mode: "visible",
                        children: t
                    }, e.mode, 0, null)).return = e, e.child = t
                }

                function Gs(e, t, n, r) {
                    return null !== r && pi(r), Yi(t, e.child, null, n), (e = Ms(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
                }

                function Us(e, t, n) {
                    e.lanes |= t;
                    var r = e.alternate;
                    null !== r && (r.lanes |= t), ki(e.return, t, n)
                }

                function Hs(e, t, n, r, a) {
                    var i = e.memoizedState;
                    null === i ? e.memoizedState = {
                        isBackwards: t,
                        rendering: null,
                        renderingStartTime: 0,
                        last: r,
                        tail: n,
                        tailMode: a
                    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = a)
                }

                function Ws(e, t, n) {
                    var r = t.pendingProps,
                        a = r.revealOrder,
                        i = r.tail;
                    if (xs(e, t, r.children, n), 0 !== (2 & (r = so.current))) r = 1 & r | 2, t.flags |= 128;
                    else {
                        if (null !== e && 0 !== (128 & e.flags)) e: for (e = t.child; null !== e;) {
                            if (13 === e.tag) null !== e.memoizedState && Us(e, n, t);
                            else if (19 === e.tag) Us(e, n, t);
                            else if (null !== e.child) {
                                e.child.return = e, e = e.child;
                                continue
                            }
                            if (e === t) break e;
                            for (; null === e.sibling;) {
                                if (null === e.return || e.return === t) break e;
                                e = e.return
                            }
                            e.sibling.return = e.return, e = e.sibling
                        }
                        r &= 1
                    }
                    if (Ea(so, r), 0 === (1 & t.mode)) t.memoizedState = null;
                    else switch (a) {
                        case "forwards":
                            for (n = t.child, a = null; null !== n;) null !== (e = n.alternate) && null === lo(e) && (a = n), n = n.sibling;
                            null === (n = a) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Hs(t, !1, a, n, i);
                            break;
                        case "backwards":
                            for (n = null, a = t.child, t.child = null; null !== a;) {
                                if (null !== (e = a.alternate) && null === lo(e)) {
                                    t.child = a;
                                    break
                                }
                                e = a.sibling, a.sibling = n, n = a, a = e
                            }
                            Hs(t, !0, n, null, i);
                            break;
                        case "together":
                            Hs(t, !1, null, null, void 0);
                            break;
                        default:
                            t.memoizedState = null
                    }
                    return t.child
                }

                function Bs(e, t) {
                    0 === (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2)
                }

                function $s(e, t, n) {
                    if (null !== e && (t.dependencies = e.dependencies), zl |= t.lanes, 0 === (n & t.childLanes)) return null;
                    if (null !== e && t.child !== e.child) throw Error(i(153));
                    if (null !== t.child) {
                        for (n = Ou(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Ou(e, e.pendingProps)).return = t;
                        n.sibling = null
                    }
                    return t.child
                }

                function Vs(e, t) {
                    if (!ai) switch (e.tailMode) {
                        case "hidden":
                            t = e.tail;
                            for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                            null === n ? e.tail = null : n.sibling = null;
                            break;
                        case "collapsed":
                            n = e.tail;
                            for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                            null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                    }
                }

                function qs(e) {
                    var t = null !== e.alternate && e.alternate.child === e.child,
                        n = 0,
                        r = 0;
                    if (t)
                        for (var a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= 14680064 & a.subtreeFlags, r |= 14680064 & a.flags, a.return = e, a = a.sibling;
                    else
                        for (a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
                    return e.subtreeFlags |= r, e.childLanes = n, t
                }

                function Ks(e, t, n) {
                    var r = t.pendingProps;
                    switch (ti(t), t.tag) {
                        case 2:
                        case 16:
                        case 15:
                        case 0:
                        case 11:
                        case 7:
                        case 8:
                        case 12:
                        case 9:
                        case 14:
                            return qs(t), null;
                        case 1:
                        case 17:
                            return Ia(t.type) && Ra(), qs(t), null;
                        case 3:
                            return r = t.stateNode, ao(), ja(_a), ja(Ta), co(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (di(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 === (256 & t.flags) || (t.flags |= 1024, null !== ii && (su(ii), ii = null))), Rs(e, t), qs(t), null;
                        case 5:
                            oo(t);
                            var a = no(to.current);
                            if (n = t.type, null !== e && null != t.stateNode) Os(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                            else {
                                if (!r) {
                                    if (null === t.stateNode) throw Error(i(166));
                                    return qs(t), null
                                }
                                if (e = no(Zi.current), di(t)) {
                                    r = t.stateNode, n = t.type;
                                    var o = t.memoizedProps;
                                    switch (r[fa] = t, r[ha] = o, e = 0 !== (1 & t.mode), n) {
                                        case "dialog":
                                            Mr("cancel", r), Mr("close", r);
                                            break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Mr("load", r);
                                            break;
                                        case "video":
                                        case "audio":
                                            for (a = 0; a < Dr.length; a++) Mr(Dr[a], r);
                                            break;
                                        case "source":
                                            Mr("error", r);
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Mr("error", r), Mr("load", r);
                                            break;
                                        case "details":
                                            Mr("toggle", r);
                                            break;
                                        case "input":
                                            Y(r, o), Mr("invalid", r);
                                            break;
                                        case "select":
                                            r._wrapperState = {
                                                wasMultiple: !!o.multiple
                                            }, Mr("invalid", r);
                                            break;
                                        case "textarea":
                                            ae(r, o), Mr("invalid", r)
                                    }
                                    for (var l in ye(n, o), a = null, o)
                                        if (o.hasOwnProperty(l)) {
                                            var u = o[l];
                                            "children" === l ? "string" === typeof u ? r.textContent !== u && (!0 !== o.suppressHydrationWarning && Jr(r.textContent, u, e), a = ["children", u]) : "number" === typeof u && r.textContent !== "" + u && (!0 !== o.suppressHydrationWarning && Jr(r.textContent, u, e), a = ["children", "" + u]) : s.hasOwnProperty(l) && null != u && "onScroll" === l && Mr("scroll", r)
                                        } switch (n) {
                                        case "input":
                                            V(r), Z(r, o, !0);
                                            break;
                                        case "textarea":
                                            V(r), oe(r);
                                            break;
                                        case "select":
                                        case "option":
                                            break;
                                        default:
                                            "function" === typeof o.onClick && (r.onclick = Zr)
                                    }
                                    r = a, t.updateQueue = r, null !== r && (t.flags |= 4)
                                } else {
                                    l = 9 === a.nodeType ? a : a.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = se(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = l.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = l.createElement(n, {
                                        is: r.is
                                    }) : (e = l.createElement(n), "select" === n && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[fa] = t, e[ha] = r, Is(e, t, !1, !1), t.stateNode = e;
                                    e: {
                                        switch (l = be(n, r), n) {
                                            case "dialog":
                                                Mr("cancel", e), Mr("close", e), a = r;
                                                break;
                                            case "iframe":
                                            case "object":
                                            case "embed":
                                                Mr("load", e), a = r;
                                                break;
                                            case "video":
                                            case "audio":
                                                for (a = 0; a < Dr.length; a++) Mr(Dr[a], e);
                                                a = r;
                                                break;
                                            case "source":
                                                Mr("error", e), a = r;
                                                break;
                                            case "img":
                                            case "image":
                                            case "link":
                                                Mr("error", e), Mr("load", e), a = r;
                                                break;
                                            case "details":
                                                Mr("toggle", e), a = r;
                                                break;
                                            case "input":
                                                Y(e, r), a = Q(e, r), Mr("invalid", e);
                                                break;
                                            case "option":
                                            default:
                                                a = r;
                                                break;
                                            case "select":
                                                e._wrapperState = {
                                                    wasMultiple: !!r.multiple
                                                }, a = z({}, r, {
                                                    value: void 0
                                                }), Mr("invalid", e);
                                                break;
                                            case "textarea":
                                                ae(e, r), a = re(e, r), Mr("invalid", e)
                                        }
                                        for (o in ye(n, a), u = a)
                                            if (u.hasOwnProperty(o)) {
                                                var c = u[o];
                                                "style" === o ? ge(e, c) : "dangerouslySetInnerHTML" === o ? null != (c = c ? c.__html : void 0) && de(e, c) : "children" === o ? "string" === typeof c ? ("textarea" !== n || "" !== c) && fe(e, c) : "number" === typeof c && fe(e, "" + c) : "suppressContentEditableWarning" !== o && "suppressHydrationWarning" !== o && "autoFocus" !== o && (s.hasOwnProperty(o) ? null != c && "onScroll" === o && Mr("scroll", e) : null != c && b(e, o, c, l))
                                            } switch (n) {
                                            case "input":
                                                V(e), Z(e, r, !1);
                                                break;
                                            case "textarea":
                                                V(e), oe(e);
                                                break;
                                            case "option":
                                                null != r.value && e.setAttribute("value", "" + B(r.value));
                                                break;
                                            case "select":
                                                e.multiple = !!r.multiple, null != (o = r.value) ? ne(e, !!r.multiple, o, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                                                break;
                                            default:
                                                "function" === typeof a.onClick && (e.onclick = Zr)
                                        }
                                        switch (n) {
                                            case "button":
                                            case "input":
                                            case "select":
                                            case "textarea":
                                                r = !!r.autoFocus;
                                                break e;
                                            case "img":
                                                r = !0;
                                                break e;
                                            default:
                                                r = !1
                                        }
                                    }
                                    r && (t.flags |= 4)
                                }
                                null !== t.ref && (t.flags |= 512, t.flags |= 2097152)
                            }
                            return qs(t), null;
                        case 6:
                            if (e && null != t.stateNode) Ds(e, t, e.memoizedProps, r);
                            else {
                                if ("string" !== typeof r && null === t.stateNode) throw Error(i(166));
                                if (n = no(to.current), no(Zi.current), di(t)) {
                                    if (r = t.stateNode, n = t.memoizedProps, r[fa] = t, (o = r.nodeValue !== n) && null !== (e = ni)) switch (e.tag) {
                                        case 3:
                                            Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                                            break;
                                        case 5:
                                            !0 !== e.memoizedProps.suppressHydrationWarning && Jr(r.nodeValue, n, 0 !== (1 & e.mode))
                                    }
                                    o && (t.flags |= 4)
                                } else(r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[fa] = t, t.stateNode = r
                            }
                            return qs(t), null;
                        case 13:
                            if (ja(so), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                                if (ai && null !== ri && 0 !== (1 & t.mode) && 0 === (128 & t.flags)) fi(), hi(), t.flags |= 98560, o = !1;
                                else if (o = di(t), null !== r && null !== r.dehydrated) {
                                    if (null === e) {
                                        if (!o) throw Error(i(318));
                                        if (!(o = null !== (o = t.memoizedState) ? o.dehydrated : null)) throw Error(i(317));
                                        o[fa] = t
                                    } else hi(), 0 === (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                                    qs(t), o = !1
                                } else null !== ii && (su(ii), ii = null), o = !0;
                                if (!o) return 65536 & t.flags ? t : null
                            }
                            return 0 !== (128 & t.flags) ? (t.lanes = n, t) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 0 !== (1 & t.mode) && (null === e || 0 !== (1 & so.current) ? 0 === Dl && (Dl = 3) : gu())), null !== t.updateQueue && (t.flags |= 4), qs(t), null);
                        case 4:
                            return ao(), Rs(e, t), null === e && Hr(t.stateNode.containerInfo), qs(t), null;
                        case 10:
                            return Si(t.type._context), qs(t), null;
                        case 19:
                            if (ja(so), null === (o = t.memoizedState)) return qs(t), null;
                            if (r = 0 !== (128 & t.flags), null === (l = o.rendering))
                                if (r) Vs(o, !1);
                                else {
                                    if (0 !== Dl || null !== e && 0 !== (128 & e.flags))
                                        for (e = t.child; null !== e;) {
                                            if (null !== (l = lo(e))) {
                                                for (t.flags |= 128, Vs(o, !1), null !== (r = l.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) e = r, (o = n).flags &= 14680066, null === (l = o.alternate) ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = l.childLanes, o.lanes = l.lanes, o.child = l.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = l.memoizedProps, o.memoizedState = l.memoizedState, o.updateQueue = l.updateQueue, o.type = l.type, e = l.dependencies, o.dependencies = null === e ? null : {
                                                    lanes: e.lanes,
                                                    firstContext: e.firstContext
                                                }), n = n.sibling;
                                                return Ea(so, 1 & so.current | 2), t.child
                                            }
                                            e = e.sibling
                                        }
                                    null !== o.tail && Xe() > Wl && (t.flags |= 128, r = !0, Vs(o, !1), t.lanes = 4194304)
                                }
                            else {
                                if (!r)
                                    if (null !== (e = lo(l))) {
                                        if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Vs(o, !0), null === o.tail && "hidden" === o.tailMode && !l.alternate && !ai) return qs(t), null
                                    } else 2 * Xe() - o.renderingStartTime > Wl && 1073741824 !== n && (t.flags |= 128, r = !0, Vs(o, !1), t.lanes = 4194304);
                                o.isBackwards ? (l.sibling = t.child, t.child = l) : (null !== (n = o.last) ? n.sibling = l : t.child = l, o.last = l)
                            }
                            return null !== o.tail ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Xe(), t.sibling = null, n = so.current, Ea(so, r ? 1 & n | 2 : 1 & n), t) : (qs(t), null);
                        case 22:
                        case 23:
                            return fu(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 0 !== (1 & t.mode) ? 0 !== (1073741824 & Rl) && (qs(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : qs(t), null;
                        case 24:
                        case 25:
                            return null
                    }
                    throw Error(i(156, t.tag))
                }

                function Qs(e, t) {
                    switch (ti(t), t.tag) {
                        case 1:
                            return Ia(t.type) && Ra(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 3:
                            return ao(), ja(_a), ja(Ta), co(), 0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
                        case 5:
                            return oo(t), null;
                        case 13:
                            if (ja(so), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                                if (null === t.alternate) throw Error(i(340));
                                hi()
                            }
                            return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 19:
                            return ja(so), null;
                        case 4:
                            return ao(), null;
                        case 10:
                            return Si(t.type._context), null;
                        case 22:
                        case 23:
                            return fu(), null;
                        default:
                            return null
                    }
                }
                Is = function(e, t) {
                    for (var n = t.child; null !== n;) {
                        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
                        else if (4 !== n.tag && null !== n.child) {
                            n.child.return = n, n = n.child;
                            continue
                        }
                        if (n === t) break;
                        for (; null === n.sibling;) {
                            if (null === n.return || n.return === t) return;
                            n = n.return
                        }
                        n.sibling.return = n.return, n = n.sibling
                    }
                }, Rs = function() {}, Os = function(e, t, n, r) {
                    var a = e.memoizedProps;
                    if (a !== r) {
                        e = t.stateNode, no(Zi.current);
                        var i, o = null;
                        switch (n) {
                            case "input":
                                a = Q(e, a), r = Q(e, r), o = [];
                                break;
                            case "select":
                                a = z({}, a, {
                                    value: void 0
                                }), r = z({}, r, {
                                    value: void 0
                                }), o = [];
                                break;
                            case "textarea":
                                a = re(e, a), r = re(e, r), o = [];
                                break;
                            default:
                                "function" !== typeof a.onClick && "function" === typeof r.onClick && (e.onclick = Zr)
                        }
                        for (c in ye(n, r), n = null, a)
                            if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                                if ("style" === c) {
                                    var l = a[c];
                                    for (i in l) l.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
                                } else "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (s.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
                        for (c in r) {
                            var u = r[c];
                            if (l = null != a ? a[c] : void 0, r.hasOwnProperty(c) && u !== l && (null != u || null != l))
                                if ("style" === c)
                                    if (l) {
                                        for (i in l) !l.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                                        for (i in u) u.hasOwnProperty(i) && l[i] !== u[i] && (n || (n = {}), n[i] = u[i])
                                    } else n || (o || (o = []), o.push(c, n)), n = u;
                            else "dangerouslySetInnerHTML" === c ? (u = u ? u.__html : void 0, l = l ? l.__html : void 0, null != u && l !== u && (o = o || []).push(c, u)) : "children" === c ? "string" !== typeof u && "number" !== typeof u || (o = o || []).push(c, "" + u) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (s.hasOwnProperty(c) ? (null != u && "onScroll" === c && Mr("scroll", e), o || l === u || (o = [])) : (o = o || []).push(c, u))
                        }
                        n && (o = o || []).push("style", n);
                        var c = o;
                        (t.updateQueue = c) && (t.flags |= 4)
                    }
                }, Ds = function(e, t, n, r) {
                    n !== r && (t.flags |= 4)
                };
                var Ys = !1,
                    Xs = !1,
                    Js = "function" === typeof WeakSet ? WeakSet : Set,
                    Zs = null;

                function el(e, t) {
                    var n = e.ref;
                    if (null !== n)
                        if ("function" === typeof n) try {
                            n(null)
                        } catch (r) {
                            ju(e, t, r)
                        } else n.current = null
                }

                function tl(e, t, n) {
                    try {
                        n()
                    } catch (r) {
                        ju(e, t, r)
                    }
                }
                var nl = !1;

                function rl(e, t, n) {
                    var r = t.updateQueue;
                    if (null !== (r = null !== r ? r.lastEffect : null)) {
                        var a = r = r.next;
                        do {
                            if ((a.tag & e) === e) {
                                var i = a.destroy;
                                a.destroy = void 0, void 0 !== i && tl(t, n, i)
                            }
                            a = a.next
                        } while (a !== r)
                    }
                }

                function al(e, t) {
                    if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                        var n = t = t.next;
                        do {
                            if ((n.tag & e) === e) {
                                var r = n.create;
                                n.destroy = r()
                            }
                            n = n.next
                        } while (n !== t)
                    }
                }

                function il(e) {
                    var t = e.ref;
                    if (null !== t) {
                        var n = e.stateNode;
                        e.tag, e = n, "function" === typeof t ? t(e) : t.current = e
                    }
                }

                function ol(e) {
                    var t = e.alternate;
                    null !== t && (e.alternate = null, ol(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (t = e.stateNode) && (delete t[fa], delete t[ha], delete t[ma], delete t[ga], delete t[va])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
                }

                function sl(e) {
                    return 5 === e.tag || 3 === e.tag || 4 === e.tag
                }

                function ll(e) {
                    e: for (;;) {
                        for (; null === e.sibling;) {
                            if (null === e.return || sl(e.return)) return null;
                            e = e.return
                        }
                        for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                            if (2 & e.flags) continue e;
                            if (null === e.child || 4 === e.tag) continue e;
                            e.child.return = e, e = e.child
                        }
                        if (!(2 & e.flags)) return e.stateNode
                    }
                }

                function ul(e, t, n) {
                    var r = e.tag;
                    if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = Zr));
                    else if (4 !== r && null !== (e = e.child))
                        for (ul(e, t, n), e = e.sibling; null !== e;) ul(e, t, n), e = e.sibling
                }

                function cl(e, t, n) {
                    var r = e.tag;
                    if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
                    else if (4 !== r && null !== (e = e.child))
                        for (cl(e, t, n), e = e.sibling; null !== e;) cl(e, t, n), e = e.sibling
                }
                var dl = null,
                    fl = !1;

                function hl(e, t, n) {
                    for (n = n.child; null !== n;) pl(e, t, n), n = n.sibling
                }

                function pl(e, t, n) {
                    if (it && "function" === typeof it.onCommitFiberUnmount) try {
                        it.onCommitFiberUnmount(at, n)
                    } catch (s) {}
                    switch (n.tag) {
                        case 5:
                            Xs || el(n, t);
                        case 6:
                            var r = dl,
                                a = fl;
                            dl = null, hl(e, t, n), fl = a, null !== (dl = r) && (fl ? (e = dl, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : dl.removeChild(n.stateNode));
                            break;
                        case 18:
                            null !== dl && (fl ? (e = dl, n = n.stateNode, 8 === e.nodeType ? la(e.parentNode, n) : 1 === e.nodeType && la(e, n), Ht(e)) : la(dl, n.stateNode));
                            break;
                        case 4:
                            r = dl, a = fl, dl = n.stateNode.containerInfo, fl = !0, hl(e, t, n), dl = r, fl = a;
                            break;
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (!Xs && (null !== (r = n.updateQueue) && null !== (r = r.lastEffect))) {
                                a = r = r.next;
                                do {
                                    var i = a,
                                        o = i.destroy;
                                    i = i.tag, void 0 !== o && (0 !== (2 & i) || 0 !== (4 & i)) && tl(n, t, o), a = a.next
                                } while (a !== r)
                            }
                            hl(e, t, n);
                            break;
                        case 1:
                            if (!Xs && (el(n, t), "function" === typeof(r = n.stateNode).componentWillUnmount)) try {
                                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
                            } catch (s) {
                                ju(n, t, s)
                            }
                            hl(e, t, n);
                            break;
                        case 21:
                            hl(e, t, n);
                            break;
                        case 22:
                            1 & n.mode ? (Xs = (r = Xs) || null !== n.memoizedState, hl(e, t, n), Xs = r) : hl(e, t, n);
                            break;
                        default:
                            hl(e, t, n)
                    }
                }

                function ml(e) {
                    var t = e.updateQueue;
                    if (null !== t) {
                        e.updateQueue = null;
                        var n = e.stateNode;
                        null === n && (n = e.stateNode = new Js), t.forEach((function(t) {
                            var r = _u.bind(null, e, t);
                            n.has(t) || (n.add(t), t.then(r, r))
                        }))
                    }
                }

                function gl(e, t) {
                    var n = t.deletions;
                    if (null !== n)
                        for (var r = 0; r < n.length; r++) {
                            var a = n[r];
                            try {
                                var o = e,
                                    s = t,
                                    l = s;
                                e: for (; null !== l;) {
                                    switch (l.tag) {
                                        case 5:
                                            dl = l.stateNode, fl = !1;
                                            break e;
                                        case 3:
                                        case 4:
                                            dl = l.stateNode.containerInfo, fl = !0;
                                            break e
                                    }
                                    l = l.return
                                }
                                if (null === dl) throw Error(i(160));
                                pl(o, s, a), dl = null, fl = !1;
                                var u = a.alternate;
                                null !== u && (u.return = null), a.return = null
                            } catch (c) {
                                ju(a, t, c)
                            }
                        }
                    if (12854 & t.subtreeFlags)
                        for (t = t.child; null !== t;) vl(t, e), t = t.sibling
                }

                function vl(e, t) {
                    var n = e.alternate,
                        r = e.flags;
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (gl(t, e), yl(e), 4 & r) {
                                try {
                                    rl(3, e, e.return), al(3, e)
                                } catch (g) {
                                    ju(e, e.return, g)
                                }
                                try {
                                    rl(5, e, e.return)
                                } catch (g) {
                                    ju(e, e.return, g)
                                }
                            }
                            break;
                        case 1:
                            gl(t, e), yl(e), 512 & r && null !== n && el(n, n.return);
                            break;
                        case 5:
                            if (gl(t, e), yl(e), 512 & r && null !== n && el(n, n.return), 32 & e.flags) {
                                var a = e.stateNode;
                                try {
                                    fe(a, "")
                                } catch (g) {
                                    ju(e, e.return, g)
                                }
                            }
                            if (4 & r && null != (a = e.stateNode)) {
                                var o = e.memoizedProps,
                                    s = null !== n ? n.memoizedProps : o,
                                    l = e.type,
                                    u = e.updateQueue;
                                if (e.updateQueue = null, null !== u) try {
                                    "input" === l && "radio" === o.type && null != o.name && X(a, o), be(l, s);
                                    var c = be(l, o);
                                    for (s = 0; s < u.length; s += 2) {
                                        var d = u[s],
                                            f = u[s + 1];
                                        "style" === d ? ge(a, f) : "dangerouslySetInnerHTML" === d ? de(a, f) : "children" === d ? fe(a, f) : b(a, d, f, c)
                                    }
                                    switch (l) {
                                        case "input":
                                            J(a, o);
                                            break;
                                        case "textarea":
                                            ie(a, o);
                                            break;
                                        case "select":
                                            var h = a._wrapperState.wasMultiple;
                                            a._wrapperState.wasMultiple = !!o.multiple;
                                            var p = o.value;
                                            null != p ? ne(a, !!o.multiple, p, !1) : h !== !!o.multiple && (null != o.defaultValue ? ne(a, !!o.multiple, o.defaultValue, !0) : ne(a, !!o.multiple, o.multiple ? [] : "", !1))
                                    }
                                    a[ha] = o
                                } catch (g) {
                                    ju(e, e.return, g)
                                }
                            }
                            break;
                        case 6:
                            if (gl(t, e), yl(e), 4 & r) {
                                if (null === e.stateNode) throw Error(i(162));
                                a = e.stateNode, o = e.memoizedProps;
                                try {
                                    a.nodeValue = o
                                } catch (g) {
                                    ju(e, e.return, g)
                                }
                            }
                            break;
                        case 3:
                            if (gl(t, e), yl(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
                                Ht(t.containerInfo)
                            } catch (g) {
                                ju(e, e.return, g)
                            }
                            break;
                        case 4:
                        default:
                            gl(t, e), yl(e);
                            break;
                        case 13:
                            gl(t, e), yl(e), 8192 & (a = e.child).flags && (o = null !== a.memoizedState, a.stateNode.isHidden = o, !o || null !== a.alternate && null !== a.alternate.memoizedState || (Hl = Xe())), 4 & r && ml(e);
                            break;
                        case 22:
                            if (d = null !== n && null !== n.memoizedState, 1 & e.mode ? (Xs = (c = Xs) || d, gl(t, e), Xs = c) : gl(t, e), yl(e), 8192 & r) {
                                if (c = null !== e.memoizedState, (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                                    for (Zs = e, d = e.child; null !== d;) {
                                        for (f = Zs = d; null !== Zs;) {
                                            switch (p = (h = Zs).child, h.tag) {
                                                case 0:
                                                case 11:
                                                case 14:
                                                case 15:
                                                    rl(4, h, h.return);
                                                    break;
                                                case 1:
                                                    el(h, h.return);
                                                    var m = h.stateNode;
                                                    if ("function" === typeof m.componentWillUnmount) {
                                                        r = h, n = h.return;
                                                        try {
                                                            t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount()
                                                        } catch (g) {
                                                            ju(r, n, g)
                                                        }
                                                    }
                                                    break;
                                                case 5:
                                                    el(h, h.return);
                                                    break;
                                                case 22:
                                                    if (null !== h.memoizedState) {
                                                        Sl(f);
                                                        continue
                                                    }
                                            }
                                            null !== p ? (p.return = h, Zs = p) : Sl(f)
                                        }
                                        d = d.sibling
                                    }
                                e: for (d = null, f = e;;) {
                                    if (5 === f.tag) {
                                        if (null === d) {
                                            d = f;
                                            try {
                                                a = f.stateNode, c ? "function" === typeof(o = a.style).setProperty ? o.setProperty("display", "none", "important") : o.display = "none" : (l = f.stateNode, s = void 0 !== (u = f.memoizedProps.style) && null !== u && u.hasOwnProperty("display") ? u.display : null, l.style.display = me("display", s))
                                            } catch (g) {
                                                ju(e, e.return, g)
                                            }
                                        }
                                    } else if (6 === f.tag) {
                                        if (null === d) try {
                                            f.stateNode.nodeValue = c ? "" : f.memoizedProps
                                        } catch (g) {
                                            ju(e, e.return, g)
                                        }
                                    } else if ((22 !== f.tag && 23 !== f.tag || null === f.memoizedState || f === e) && null !== f.child) {
                                        f.child.return = f, f = f.child;
                                        continue
                                    }
                                    if (f === e) break e;
                                    for (; null === f.sibling;) {
                                        if (null === f.return || f.return === e) break e;
                                        d === f && (d = null), f = f.return
                                    }
                                    d === f && (d = null), f.sibling.return = f.return, f = f.sibling
                                }
                            }
                            break;
                        case 19:
                            gl(t, e), yl(e), 4 & r && ml(e);
                        case 21:
                    }
                }

                function yl(e) {
                    var t = e.flags;
                    if (2 & t) {
                        try {
                            e: {
                                for (var n = e.return; null !== n;) {
                                    if (sl(n)) {
                                        var r = n;
                                        break e
                                    }
                                    n = n.return
                                }
                                throw Error(i(160))
                            }
                            switch (r.tag) {
                                case 5:
                                    var a = r.stateNode;
                                    32 & r.flags && (fe(a, ""), r.flags &= -33), cl(e, ll(e), a);
                                    break;
                                case 3:
                                case 4:
                                    var o = r.stateNode.containerInfo;
                                    ul(e, ll(e), o);
                                    break;
                                default:
                                    throw Error(i(161))
                            }
                        }
                        catch (s) {
                            ju(e, e.return, s)
                        }
                        e.flags &= -3
                    }
                    4096 & t && (e.flags &= -4097)
                }

                function bl(e, t, n) {
                    Zs = e, wl(e, t, n)
                }

                function wl(e, t, n) {
                    for (var r = 0 !== (1 & e.mode); null !== Zs;) {
                        var a = Zs,
                            i = a.child;
                        if (22 === a.tag && r) {
                            var o = null !== a.memoizedState || Ys;
                            if (!o) {
                                var s = a.alternate,
                                    l = null !== s && null !== s.memoizedState || Xs;
                                s = Ys;
                                var u = Xs;
                                if (Ys = o, (Xs = l) && !u)
                                    for (Zs = a; null !== Zs;) l = (o = Zs).child, 22 === o.tag && null !== o.memoizedState ? kl(a) : null !== l ? (l.return = o, Zs = l) : kl(a);
                                for (; null !== i;) Zs = i, wl(i, t, n), i = i.sibling;
                                Zs = a, Ys = s, Xs = u
                            }
                            xl(e)
                        } else 0 !== (8772 & a.subtreeFlags) && null !== i ? (i.return = a, Zs = i) : xl(e)
                    }
                }

                function xl(e) {
                    for (; null !== Zs;) {
                        var t = Zs;
                        if (0 !== (8772 & t.flags)) {
                            var n = t.alternate;
                            try {
                                if (0 !== (8772 & t.flags)) switch (t.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Xs || al(5, t);
                                        break;
                                    case 1:
                                        var r = t.stateNode;
                                        if (4 & t.flags && !Xs)
                                            if (null === n) r.componentDidMount();
                                            else {
                                                var a = t.elementType === t.type ? n.memoizedProps : gi(t.type, n.memoizedProps);
                                                r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                            } var o = t.updateQueue;
                                        null !== o && Fi(t, o, r);
                                        break;
                                    case 3:
                                        var s = t.updateQueue;
                                        if (null !== s) {
                                            if (n = null, null !== t.child) switch (t.child.tag) {
                                                case 5:
                                                case 1:
                                                    n = t.child.stateNode
                                            }
                                            Fi(t, s, n)
                                        }
                                        break;
                                    case 5:
                                        var l = t.stateNode;
                                        if (null === n && 4 & t.flags) {
                                            n = l;
                                            var u = t.memoizedProps;
                                            switch (t.type) {
                                                case "button":
                                                case "input":
                                                case "select":
                                                case "textarea":
                                                    u.autoFocus && n.focus();
                                                    break;
                                                case "img":
                                                    u.src && (n.src = u.src)
                                            }
                                        }
                                        break;
                                    case 6:
                                    case 4:
                                    case 12:
                                    case 19:
                                    case 17:
                                    case 21:
                                    case 22:
                                    case 23:
                                    case 25:
                                        break;
                                    case 13:
                                        if (null === t.memoizedState) {
                                            var c = t.alternate;
                                            if (null !== c) {
                                                var d = c.memoizedState;
                                                if (null !== d) {
                                                    var f = d.dehydrated;
                                                    null !== f && Ht(f)
                                                }
                                            }
                                        }
                                        break;
                                    default:
                                        throw Error(i(163))
                                }
                                Xs || 512 & t.flags && il(t)
                            } catch (h) {
                                ju(t, t.return, h)
                            }
                        }
                        if (t === e) {
                            Zs = null;
                            break
                        }
                        if (null !== (n = t.sibling)) {
                            n.return = t.return, Zs = n;
                            break
                        }
                        Zs = t.return
                    }
                }

                function Sl(e) {
                    for (; null !== Zs;) {
                        var t = Zs;
                        if (t === e) {
                            Zs = null;
                            break
                        }
                        var n = t.sibling;
                        if (null !== n) {
                            n.return = t.return, Zs = n;
                            break
                        }
                        Zs = t.return
                    }
                }

                function kl(e) {
                    for (; null !== Zs;) {
                        var t = Zs;
                        try {
                            switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    var n = t.return;
                                    try {
                                        al(4, t)
                                    } catch (l) {
                                        ju(t, n, l)
                                    }
                                    break;
                                case 1:
                                    var r = t.stateNode;
                                    if ("function" === typeof r.componentDidMount) {
                                        var a = t.return;
                                        try {
                                            r.componentDidMount()
                                        } catch (l) {
                                            ju(t, a, l)
                                        }
                                    }
                                    var i = t.return;
                                    try {
                                        il(t)
                                    } catch (l) {
                                        ju(t, i, l)
                                    }
                                    break;
                                case 5:
                                    var o = t.return;
                                    try {
                                        il(t)
                                    } catch (l) {
                                        ju(t, o, l)
                                    }
                            }
                        } catch (l) {
                            ju(t, t.return, l)
                        }
                        if (t === e) {
                            Zs = null;
                            break
                        }
                        var s = t.sibling;
                        if (null !== s) {
                            s.return = t.return, Zs = s;
                            break
                        }
                        Zs = t.return
                    }
                }
                var Cl, jl = Math.ceil,
                    El = w.ReactCurrentDispatcher,
                    Pl = w.ReactCurrentOwner,
                    Tl = w.ReactCurrentBatchConfig,
                    _l = 0,
                    Nl = null,
                    Al = null,
                    Il = 0,
                    Rl = 0,
                    Ol = Ca(0),
                    Dl = 0,
                    Ll = null,
                    zl = 0,
                    Fl = 0,
                    Ml = 0,
                    Gl = null,
                    Ul = null,
                    Hl = 0,
                    Wl = 1 / 0,
                    Bl = null,
                    $l = !1,
                    Vl = null,
                    ql = null,
                    Kl = !1,
                    Ql = null,
                    Yl = 0,
                    Xl = 0,
                    Jl = null,
                    Zl = -1,
                    eu = 0;

                function tu() {
                    return 0 !== (6 & _l) ? Xe() : -1 !== Zl ? Zl : Zl = Xe()
                }

                function nu(e) {
                    return 0 === (1 & e.mode) ? 1 : 0 !== (2 & _l) && 0 !== Il ? Il & -Il : null !== mi.transition ? (0 === eu && (eu = mt()), eu) : 0 !== (e = bt) ? e : e = void 0 === (e = window.event) ? 16 : Yt(e.type)
                }

                function ru(e, t, n, r) {
                    if (50 < Xl) throw Xl = 0, Jl = null, Error(i(185));
                    vt(e, n, r), 0 !== (2 & _l) && e === Nl || (e === Nl && (0 === (2 & _l) && (Fl |= n), 4 === Dl && lu(e, Il)), au(e, r), 1 === n && 0 === _l && 0 === (1 & t.mode) && (Wl = Xe() + 500, Ma && Ha()))
                }

                function au(e, t) {
                    var n = e.callbackNode;
                    ! function(e, t) {
                        for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
                            var o = 31 - ot(i),
                                s = 1 << o,
                                l = a[o]; - 1 === l ? 0 !== (s & n) && 0 === (s & r) || (a[o] = ht(s, t)) : l <= t && (e.expiredLanes |= s), i &= ~s
                        }
                    }(e, t);
                    var r = ft(e, e === Nl ? Il : 0);
                    if (0 === r) null !== n && Ke(n), e.callbackNode = null, e.callbackPriority = 0;
                    else if (t = r & -r, e.callbackPriority !== t) {
                        if (null != n && Ke(n), 1 === t) 0 === e.tag ? function(e) {
                            Ma = !0, Ua(e)
                        }(uu.bind(null, e)) : Ua(uu.bind(null, e)), oa((function() {
                            0 === (6 & _l) && Ha()
                        })), n = null;
                        else {
                            switch (wt(r)) {
                                case 1:
                                    n = Ze;
                                    break;
                                case 4:
                                    n = et;
                                    break;
                                case 16:
                                default:
                                    n = tt;
                                    break;
                                case 536870912:
                                    n = rt
                            }
                            n = Nu(n, iu.bind(null, e))
                        }
                        e.callbackPriority = t, e.callbackNode = n
                    }
                }

                function iu(e, t) {
                    if (Zl = -1, eu = 0, 0 !== (6 & _l)) throw Error(i(327));
                    var n = e.callbackNode;
                    if (ku() && e.callbackNode !== n) return null;
                    var r = ft(e, e === Nl ? Il : 0);
                    if (0 === r) return null;
                    if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = vu(e, r);
                    else {
                        t = r;
                        var a = _l;
                        _l |= 2;
                        var o = mu();
                        for (Nl === e && Il === t || (Bl = null, Wl = Xe() + 500, hu(e, t));;) try {
                            bu();
                            break
                        } catch (l) {
                            pu(e, l)
                        }
                        xi(), El.current = o, _l = a, null !== Al ? t = 0 : (Nl = null, Il = 0, t = Dl)
                    }
                    if (0 !== t) {
                        if (2 === t && (0 !== (a = pt(e)) && (r = a, t = ou(e, a))), 1 === t) throw n = Ll, hu(e, 0), lu(e, r), au(e, Xe()), n;
                        if (6 === t) lu(e, r);
                        else {
                            if (a = e.current.alternate, 0 === (30 & r) && ! function(e) {
                                    for (var t = e;;) {
                                        if (16384 & t.flags) {
                                            var n = t.updateQueue;
                                            if (null !== n && null !== (n = n.stores))
                                                for (var r = 0; r < n.length; r++) {
                                                    var a = n[r],
                                                        i = a.getSnapshot;
                                                    a = a.value;
                                                    try {
                                                        if (!sr(i(), a)) return !1
                                                    } catch (s) {
                                                        return !1
                                                    }
                                                }
                                        }
                                        if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
                                        else {
                                            if (t === e) break;
                                            for (; null === t.sibling;) {
                                                if (null === t.return || t.return === e) return !0;
                                                t = t.return
                                            }
                                            t.sibling.return = t.return, t = t.sibling
                                        }
                                    }
                                    return !0
                                }(a) && (2 === (t = vu(e, r)) && (0 !== (o = pt(e)) && (r = o, t = ou(e, o))), 1 === t)) throw n = Ll, hu(e, 0), lu(e, r), au(e, Xe()), n;
                            switch (e.finishedWork = a, e.finishedLanes = r, t) {
                                case 0:
                                case 1:
                                    throw Error(i(345));
                                case 2:
                                case 5:
                                    Su(e, Ul, Bl);
                                    break;
                                case 3:
                                    if (lu(e, r), (130023424 & r) === r && 10 < (t = Hl + 500 - Xe())) {
                                        if (0 !== ft(e, 0)) break;
                                        if (((a = e.suspendedLanes) & r) !== r) {
                                            tu(), e.pingedLanes |= e.suspendedLanes & a;
                                            break
                                        }
                                        e.timeoutHandle = ra(Su.bind(null, e, Ul, Bl), t);
                                        break
                                    }
                                    Su(e, Ul, Bl);
                                    break;
                                case 4:
                                    if (lu(e, r), (4194240 & r) === r) break;
                                    for (t = e.eventTimes, a = -1; 0 < r;) {
                                        var s = 31 - ot(r);
                                        o = 1 << s, (s = t[s]) > a && (a = s), r &= ~o
                                    }
                                    if (r = a, 10 < (r = (120 > (r = Xe() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * jl(r / 1960)) - r)) {
                                        e.timeoutHandle = ra(Su.bind(null, e, Ul, Bl), r);
                                        break
                                    }
                                    Su(e, Ul, Bl);
                                    break;
                                default:
                                    throw Error(i(329))
                            }
                        }
                    }
                    return au(e, Xe()), e.callbackNode === n ? iu.bind(null, e) : null
                }

                function ou(e, t) {
                    var n = Gl;
                    return e.current.memoizedState.isDehydrated && (hu(e, t).flags |= 256), 2 !== (e = vu(e, t)) && (t = Ul, Ul = n, null !== t && su(t)), e
                }

                function su(e) {
                    null === Ul ? Ul = e : Ul.push.apply(Ul, e)
                }

                function lu(e, t) {
                    for (t &= ~Ml, t &= ~Fl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
                        var n = 31 - ot(t),
                            r = 1 << n;
                        e[n] = -1, t &= ~r
                    }
                }

                function uu(e) {
                    if (0 !== (6 & _l)) throw Error(i(327));
                    ku();
                    var t = ft(e, 0);
                    if (0 === (1 & t)) return au(e, Xe()), null;
                    var n = vu(e, t);
                    if (0 !== e.tag && 2 === n) {
                        var r = pt(e);
                        0 !== r && (t = r, n = ou(e, r))
                    }
                    if (1 === n) throw n = Ll, hu(e, 0), lu(e, t), au(e, Xe()), n;
                    if (6 === n) throw Error(i(345));
                    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Su(e, Ul, Bl), au(e, Xe()), null
                }

                function cu(e, t) {
                    var n = _l;
                    _l |= 1;
                    try {
                        return e(t)
                    } finally {
                        0 === (_l = n) && (Wl = Xe() + 500, Ma && Ha())
                    }
                }

                function du(e) {
                    null !== Ql && 0 === Ql.tag && 0 === (6 & _l) && ku();
                    var t = _l;
                    _l |= 1;
                    var n = Tl.transition,
                        r = bt;
                    try {
                        if (Tl.transition = null, bt = 1, e) return e()
                    } finally {
                        bt = r, Tl.transition = n, 0 === (6 & (_l = t)) && Ha()
                    }
                }

                function fu() {
                    Rl = Ol.current, ja(Ol)
                }

                function hu(e, t) {
                    e.finishedWork = null, e.finishedLanes = 0;
                    var n = e.timeoutHandle;
                    if (-1 !== n && (e.timeoutHandle = -1, aa(n)), null !== Al)
                        for (n = Al.return; null !== n;) {
                            var r = n;
                            switch (ti(r), r.tag) {
                                case 1:
                                    null !== (r = r.type.childContextTypes) && void 0 !== r && Ra();
                                    break;
                                case 3:
                                    ao(), ja(_a), ja(Ta), co();
                                    break;
                                case 5:
                                    oo(r);
                                    break;
                                case 4:
                                    ao();
                                    break;
                                case 13:
                                case 19:
                                    ja(so);
                                    break;
                                case 10:
                                    Si(r.type._context);
                                    break;
                                case 22:
                                case 23:
                                    fu()
                            }
                            n = n.return
                        }
                    if (Nl = e, Al = e = Ou(e.current, null), Il = Rl = t, Dl = 0, Ll = null, Ml = Fl = zl = 0, Ul = Gl = null, null !== Ei) {
                        for (t = 0; t < Ei.length; t++)
                            if (null !== (r = (n = Ei[t]).interleaved)) {
                                n.interleaved = null;
                                var a = r.next,
                                    i = n.pending;
                                if (null !== i) {
                                    var o = i.next;
                                    i.next = a, r.next = o
                                }
                                n.pending = r
                            } Ei = null
                    }
                    return e
                }

                function pu(e, t) {
                    for (;;) {
                        var n = Al;
                        try {
                            if (xi(), fo.current = os, yo) {
                                for (var r = mo.memoizedState; null !== r;) {
                                    var a = r.queue;
                                    null !== a && (a.pending = null), r = r.next
                                }
                                yo = !1
                            }
                            if (po = 0, vo = go = mo = null, bo = !1, wo = 0, Pl.current = null, null === n || null === n.return) {
                                Dl = 1, Ll = t, Al = null;
                                break
                            }
                            e: {
                                var o = e,
                                    s = n.return,
                                    l = n,
                                    u = t;
                                if (t = Il, l.flags |= 32768, null !== u && "object" === typeof u && "function" === typeof u.then) {
                                    var c = u,
                                        d = l,
                                        f = d.tag;
                                    if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                                        var h = d.alternate;
                                        h ? (d.updateQueue = h.updateQueue, d.memoizedState = h.memoizedState, d.lanes = h.lanes) : (d.updateQueue = null, d.memoizedState = null)
                                    }
                                    var p = vs(s);
                                    if (null !== p) {
                                        p.flags &= -257, ys(p, s, l, 0, t), 1 & p.mode && gs(o, c, t), u = c;
                                        var m = (t = p).updateQueue;
                                        if (null === m) {
                                            var g = new Set;
                                            g.add(u), t.updateQueue = g
                                        } else m.add(u);
                                        break e
                                    }
                                    if (0 === (1 & t)) {
                                        gs(o, c, t), gu();
                                        break e
                                    }
                                    u = Error(i(426))
                                } else if (ai && 1 & l.mode) {
                                    var v = vs(s);
                                    if (null !== v) {
                                        0 === (65536 & v.flags) && (v.flags |= 256), ys(v, s, l, 0, t), pi(cs(u, l));
                                        break e
                                    }
                                }
                                o = u = cs(u, l),
                                4 !== Dl && (Dl = 2),
                                null === Gl ? Gl = [o] : Gl.push(o),
                                o = s;do {
                                    switch (o.tag) {
                                        case 3:
                                            o.flags |= 65536, t &= -t, o.lanes |= t, Li(o, ps(0, u, t));
                                            break e;
                                        case 1:
                                            l = u;
                                            var y = o.type,
                                                b = o.stateNode;
                                            if (0 === (128 & o.flags) && ("function" === typeof y.getDerivedStateFromError || null !== b && "function" === typeof b.componentDidCatch && (null === ql || !ql.has(b)))) {
                                                o.flags |= 65536, t &= -t, o.lanes |= t, Li(o, ms(o, l, t));
                                                break e
                                            }
                                    }
                                    o = o.return
                                } while (null !== o)
                            }
                            xu(n)
                        } catch (w) {
                            t = w, Al === n && null !== n && (Al = n = n.return);
                            continue
                        }
                        break
                    }
                }

                function mu() {
                    var e = El.current;
                    return El.current = os, null === e ? os : e
                }

                function gu() {
                    0 !== Dl && 3 !== Dl && 2 !== Dl || (Dl = 4), null === Nl || 0 === (268435455 & zl) && 0 === (268435455 & Fl) || lu(Nl, Il)
                }

                function vu(e, t) {
                    var n = _l;
                    _l |= 2;
                    var r = mu();
                    for (Nl === e && Il === t || (Bl = null, hu(e, t));;) try {
                        yu();
                        break
                    } catch (a) {
                        pu(e, a)
                    }
                    if (xi(), _l = n, El.current = r, null !== Al) throw Error(i(261));
                    return Nl = null, Il = 0, Dl
                }

                function yu() {
                    for (; null !== Al;) wu(Al)
                }

                function bu() {
                    for (; null !== Al && !Qe();) wu(Al)
                }

                function wu(e) {
                    var t = Cl(e.alternate, e, Rl);
                    e.memoizedProps = e.pendingProps, null === t ? xu(e) : Al = t, Pl.current = null
                }

                function xu(e) {
                    var t = e;
                    do {
                        var n = t.alternate;
                        if (e = t.return, 0 === (32768 & t.flags)) {
                            if (null !== (n = Ks(n, t, Rl))) return void(Al = n)
                        } else {
                            if (null !== (n = Qs(n, t))) return n.flags &= 32767, void(Al = n);
                            if (null === e) return Dl = 6, void(Al = null);
                            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
                        }
                        if (null !== (t = t.sibling)) return void(Al = t);
                        Al = t = e
                    } while (null !== t);
                    0 === Dl && (Dl = 5)
                }

                function Su(e, t, n) {
                    var r = bt,
                        a = Tl.transition;
                    try {
                        Tl.transition = null, bt = 1,
                            function(e, t, n, r) {
                                do {
                                    ku()
                                } while (null !== Ql);
                                if (0 !== (6 & _l)) throw Error(i(327));
                                n = e.finishedWork;
                                var a = e.finishedLanes;
                                if (null === n) return null;
                                if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(i(177));
                                e.callbackNode = null, e.callbackPriority = 0;
                                var o = n.lanes | n.childLanes;
                                if (function(e, t) {
                                        var n = e.pendingLanes & ~t;
                                        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
                                        var r = e.eventTimes;
                                        for (e = e.expirationTimes; 0 < n;) {
                                            var a = 31 - ot(n),
                                                i = 1 << a;
                                            t[a] = 0, r[a] = -1, e[a] = -1, n &= ~i
                                        }
                                    }(e, o), e === Nl && (Al = Nl = null, Il = 0), 0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags) || Kl || (Kl = !0, Nu(tt, (function() {
                                        return ku(), null
                                    }))), o = 0 !== (15990 & n.flags), 0 !== (15990 & n.subtreeFlags) || o) {
                                    o = Tl.transition, Tl.transition = null;
                                    var s = bt;
                                    bt = 1;
                                    var l = _l;
                                    _l |= 4, Pl.current = null,
                                        function(e, t) {
                                            if (ea = Bt, hr(e = fr())) {
                                                if ("selectionStart" in e) var n = {
                                                    start: e.selectionStart,
                                                    end: e.selectionEnd
                                                };
                                                else e: {
                                                    var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                                    if (r && 0 !== r.rangeCount) {
                                                        n = r.anchorNode;
                                                        var a = r.anchorOffset,
                                                            o = r.focusNode;
                                                        r = r.focusOffset;
                                                        try {
                                                            n.nodeType, o.nodeType
                                                        } catch (x) {
                                                            n = null;
                                                            break e
                                                        }
                                                        var s = 0,
                                                            l = -1,
                                                            u = -1,
                                                            c = 0,
                                                            d = 0,
                                                            f = e,
                                                            h = null;
                                                        t: for (;;) {
                                                            for (var p; f !== n || 0 !== a && 3 !== f.nodeType || (l = s + a), f !== o || 0 !== r && 3 !== f.nodeType || (u = s + r), 3 === f.nodeType && (s += f.nodeValue.length), null !== (p = f.firstChild);) h = f, f = p;
                                                            for (;;) {
                                                                if (f === e) break t;
                                                                if (h === n && ++c === a && (l = s), h === o && ++d === r && (u = s), null !== (p = f.nextSibling)) break;
                                                                h = (f = h).parentNode
                                                            }
                                                            f = p
                                                        }
                                                        n = -1 === l || -1 === u ? null : {
                                                            start: l,
                                                            end: u
                                                        }
                                                    } else n = null
                                                }
                                                n = n || {
                                                    start: 0,
                                                    end: 0
                                                }
                                            } else n = null;
                                            for (ta = {
                                                    focusedElem: e,
                                                    selectionRange: n
                                                }, Bt = !1, Zs = t; null !== Zs;)
                                                if (e = (t = Zs).child, 0 !== (1028 & t.subtreeFlags) && null !== e) e.return = t, Zs = e;
                                                else
                                                    for (; null !== Zs;) {
                                                        t = Zs;
                                                        try {
                                                            var m = t.alternate;
                                                            if (0 !== (1024 & t.flags)) switch (t.tag) {
                                                                case 0:
                                                                case 11:
                                                                case 15:
                                                                case 5:
                                                                case 6:
                                                                case 4:
                                                                case 17:
                                                                    break;
                                                                case 1:
                                                                    if (null !== m) {
                                                                        var g = m.memoizedProps,
                                                                            v = m.memoizedState,
                                                                            y = t.stateNode,
                                                                            b = y.getSnapshotBeforeUpdate(t.elementType === t.type ? g : gi(t.type, g), v);
                                                                        y.__reactInternalSnapshotBeforeUpdate = b
                                                                    }
                                                                    break;
                                                                case 3:
                                                                    var w = t.stateNode.containerInfo;
                                                                    1 === w.nodeType ? w.textContent = "" : 9 === w.nodeType && w.documentElement && w.removeChild(w.documentElement);
                                                                    break;
                                                                default:
                                                                    throw Error(i(163))
                                                            }
                                                        } catch (x) {
                                                            ju(t, t.return, x)
                                                        }
                                                        if (null !== (e = t.sibling)) {
                                                            e.return = t.return, Zs = e;
                                                            break
                                                        }
                                                        Zs = t.return
                                                    }
                                            m = nl, nl = !1
                                        }(e, n), vl(n, e), pr(ta), Bt = !!ea, ta = ea = null, e.current = n, bl(n, e, a), Ye(), _l = l, bt = s, Tl.transition = o
                                } else e.current = n;
                                if (Kl && (Kl = !1, Ql = e, Yl = a), o = e.pendingLanes, 0 === o && (ql = null), function(e) {
                                        if (it && "function" === typeof it.onCommitFiberRoot) try {
                                            it.onCommitFiberRoot(at, e, void 0, 128 === (128 & e.current.flags))
                                        } catch (t) {}
                                    }(n.stateNode), au(e, Xe()), null !== t)
                                    for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, {
                                        componentStack: a.stack,
                                        digest: a.digest
                                    });
                                if ($l) throw $l = !1, e = Vl, Vl = null, e;
                                0 !== (1 & Yl) && 0 !== e.tag && ku(), o = e.pendingLanes, 0 !== (1 & o) ? e === Jl ? Xl++ : (Xl = 0, Jl = e) : Xl = 0, Ha()
                            }(e, t, n, r)
                    } finally {
                        Tl.transition = a, bt = r
                    }
                    return null
                }

                function ku() {
                    if (null !== Ql) {
                        var e = wt(Yl),
                            t = Tl.transition,
                            n = bt;
                        try {
                            if (Tl.transition = null, bt = 16 > e ? 16 : e, null === Ql) var r = !1;
                            else {
                                if (e = Ql, Ql = null, Yl = 0, 0 !== (6 & _l)) throw Error(i(331));
                                var a = _l;
                                for (_l |= 4, Zs = e.current; null !== Zs;) {
                                    var o = Zs,
                                        s = o.child;
                                    if (0 !== (16 & Zs.flags)) {
                                        var l = o.deletions;
                                        if (null !== l) {
                                            for (var u = 0; u < l.length; u++) {
                                                var c = l[u];
                                                for (Zs = c; null !== Zs;) {
                                                    var d = Zs;
                                                    switch (d.tag) {
                                                        case 0:
                                                        case 11:
                                                        case 15:
                                                            rl(8, d, o)
                                                    }
                                                    var f = d.child;
                                                    if (null !== f) f.return = d, Zs = f;
                                                    else
                                                        for (; null !== Zs;) {
                                                            var h = (d = Zs).sibling,
                                                                p = d.return;
                                                            if (ol(d), d === c) {
                                                                Zs = null;
                                                                break
                                                            }
                                                            if (null !== h) {
                                                                h.return = p, Zs = h;
                                                                break
                                                            }
                                                            Zs = p
                                                        }
                                                }
                                            }
                                            var m = o.alternate;
                                            if (null !== m) {
                                                var g = m.child;
                                                if (null !== g) {
                                                    m.child = null;
                                                    do {
                                                        var v = g.sibling;
                                                        g.sibling = null, g = v
                                                    } while (null !== g)
                                                }
                                            }
                                            Zs = o
                                        }
                                    }
                                    if (0 !== (2064 & o.subtreeFlags) && null !== s) s.return = o, Zs = s;
                                    else e: for (; null !== Zs;) {
                                        if (0 !== (2048 & (o = Zs).flags)) switch (o.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                rl(9, o, o.return)
                                        }
                                        var y = o.sibling;
                                        if (null !== y) {
                                            y.return = o.return, Zs = y;
                                            break e
                                        }
                                        Zs = o.return
                                    }
                                }
                                var b = e.current;
                                for (Zs = b; null !== Zs;) {
                                    var w = (s = Zs).child;
                                    if (0 !== (2064 & s.subtreeFlags) && null !== w) w.return = s, Zs = w;
                                    else e: for (s = b; null !== Zs;) {
                                        if (0 !== (2048 & (l = Zs).flags)) try {
                                            switch (l.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    al(9, l)
                                            }
                                        } catch (S) {
                                            ju(l, l.return, S)
                                        }
                                        if (l === s) {
                                            Zs = null;
                                            break e
                                        }
                                        var x = l.sibling;
                                        if (null !== x) {
                                            x.return = l.return, Zs = x;
                                            break e
                                        }
                                        Zs = l.return
                                    }
                                }
                                if (_l = a, Ha(), it && "function" === typeof it.onPostCommitFiberRoot) try {
                                    it.onPostCommitFiberRoot(at, e)
                                } catch (S) {}
                                r = !0
                            }
                            return r
                        } finally {
                            bt = n, Tl.transition = t
                        }
                    }
                    return !1
                }

                function Cu(e, t, n) {
                    e = Oi(e, t = ps(0, t = cs(n, t), 1), 1), t = tu(), null !== e && (vt(e, 1, t), au(e, t))
                }

                function ju(e, t, n) {
                    if (3 === e.tag) Cu(e, e, n);
                    else
                        for (; null !== t;) {
                            if (3 === t.tag) {
                                Cu(t, e, n);
                                break
                            }
                            if (1 === t.tag) {
                                var r = t.stateNode;
                                if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === ql || !ql.has(r))) {
                                    t = Oi(t, e = ms(t, e = cs(n, e), 1), 1), e = tu(), null !== t && (vt(t, 1, e), au(t, e));
                                    break
                                }
                            }
                            t = t.return
                        }
                }

                function Eu(e, t, n) {
                    var r = e.pingCache;
                    null !== r && r.delete(t), t = tu(), e.pingedLanes |= e.suspendedLanes & n, Nl === e && (Il & n) === n && (4 === Dl || 3 === Dl && (130023424 & Il) === Il && 500 > Xe() - Hl ? hu(e, 0) : Ml |= n), au(e, t)
                }

                function Pu(e, t) {
                    0 === t && (0 === (1 & e.mode) ? t = 1 : (t = ct, 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
                    var n = tu();
                    null !== (e = _i(e, t)) && (vt(e, t, n), au(e, n))
                }

                function Tu(e) {
                    var t = e.memoizedState,
                        n = 0;
                    null !== t && (n = t.retryLane), Pu(e, n)
                }

                function _u(e, t) {
                    var n = 0;
                    switch (e.tag) {
                        case 13:
                            var r = e.stateNode,
                                a = e.memoizedState;
                            null !== a && (n = a.retryLane);
                            break;
                        case 19:
                            r = e.stateNode;
                            break;
                        default:
                            throw Error(i(314))
                    }
                    null !== r && r.delete(t), Pu(e, n)
                }

                function Nu(e, t) {
                    return qe(e, t)
                }

                function Au(e, t, n, r) {
                    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
                }

                function Iu(e, t, n, r) {
                    return new Au(e, t, n, r)
                }

                function Ru(e) {
                    return !(!(e = e.prototype) || !e.isReactComponent)
                }

                function Ou(e, t) {
                    var n = e.alternate;
                    return null === n ? ((n = Iu(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                        lanes: t.lanes,
                        firstContext: t.firstContext
                    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
                }

                function Du(e, t, n, r, a, o) {
                    var s = 2;
                    if (r = e, "function" === typeof e) Ru(e) && (s = 1);
                    else if ("string" === typeof e) s = 5;
                    else e: switch (e) {
                        case k:
                            return Lu(n.children, a, o, t);
                        case C:
                            s = 8, a |= 8;
                            break;
                        case j:
                            return (e = Iu(12, n, t, 2 | a)).elementType = j, e.lanes = o, e;
                        case _:
                            return (e = Iu(13, n, t, a)).elementType = _, e.lanes = o, e;
                        case N:
                            return (e = Iu(19, n, t, a)).elementType = N, e.lanes = o, e;
                        case R:
                            return zu(n, a, o, t);
                        default:
                            if ("object" === typeof e && null !== e) switch (e.$$typeof) {
                                case E:
                                    s = 10;
                                    break e;
                                case P:
                                    s = 9;
                                    break e;
                                case T:
                                    s = 11;
                                    break e;
                                case A:
                                    s = 14;
                                    break e;
                                case I:
                                    s = 16, r = null;
                                    break e
                            }
                            throw Error(i(130, null == e ? e : typeof e, ""))
                    }
                    return (t = Iu(s, n, t, a)).elementType = e, t.type = r, t.lanes = o, t
                }

                function Lu(e, t, n, r) {
                    return (e = Iu(7, e, r, t)).lanes = n, e
                }

                function zu(e, t, n, r) {
                    return (e = Iu(22, e, r, t)).elementType = R, e.lanes = n, e.stateNode = {
                        isHidden: !1
                    }, e
                }

                function Fu(e, t, n) {
                    return (e = Iu(6, e, null, t)).lanes = n, e
                }

                function Mu(e, t, n) {
                    return (t = Iu(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
                        containerInfo: e.containerInfo,
                        pendingChildren: null,
                        implementation: e.implementation
                    }, t
                }

                function Gu(e, t, n, r, a) {
                    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = gt(0), this.expirationTimes = gt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gt(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null
                }

                function Uu(e, t, n, r, a, i, o, s, l) {
                    return e = new Gu(e, t, n, s, l), 1 === t ? (t = 1, !0 === i && (t |= 8)) : t = 0, i = Iu(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
                        element: r,
                        isDehydrated: n,
                        cache: null,
                        transitions: null,
                        pendingSuspenseBoundaries: null
                    }, Ai(i), e
                }

                function Hu(e) {
                    if (!e) return Pa;
                    e: {
                        if (He(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(i(170));
                        var t = e;do {
                            switch (t.tag) {
                                case 3:
                                    t = t.stateNode.context;
                                    break e;
                                case 1:
                                    if (Ia(t.type)) {
                                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                                        break e
                                    }
                            }
                            t = t.return
                        } while (null !== t);
                        throw Error(i(171))
                    }
                    if (1 === e.tag) {
                        var n = e.type;
                        if (Ia(n)) return Da(e, n, t)
                    }
                    return t
                }

                function Wu(e, t, n, r, a, i, o, s, l) {
                    return (e = Uu(n, r, !0, e, 0, i, 0, s, l)).context = Hu(null), n = e.current, (i = Ri(r = tu(), a = nu(n))).callback = void 0 !== t && null !== t ? t : null, Oi(n, i, a), e.current.lanes = a, vt(e, a, r), au(e, r), e
                }

                function Bu(e, t, n, r) {
                    var a = t.current,
                        i = tu(),
                        o = nu(a);
                    return n = Hu(n), null === t.context ? t.context = n : t.pendingContext = n, (t = Ri(i, o)).payload = {
                        element: e
                    }, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = Oi(a, t, o)) && (ru(e, a, o, i), Di(e, a, o)), o
                }

                function $u(e) {
                    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
                }

                function Vu(e, t) {
                    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                        var n = e.retryLane;
                        e.retryLane = 0 !== n && n < t ? n : t
                    }
                }

                function qu(e, t) {
                    Vu(e, t), (e = e.alternate) && Vu(e, t)
                }
                Cl = function(e, t, n) {
                    if (null !== e)
                        if (e.memoizedProps !== t.pendingProps || _a.current) ws = !0;
                        else {
                            if (0 === (e.lanes & n) && 0 === (128 & t.flags)) return ws = !1,
                                function(e, t, n) {
                                    switch (t.tag) {
                                        case 3:
                                            Ns(t), hi();
                                            break;
                                        case 5:
                                            io(t);
                                            break;
                                        case 1:
                                            Ia(t.type) && La(t);
                                            break;
                                        case 4:
                                            ro(t, t.stateNode.containerInfo);
                                            break;
                                        case 10:
                                            var r = t.type._context,
                                                a = t.memoizedProps.value;
                                            Ea(vi, r._currentValue), r._currentValue = a;
                                            break;
                                        case 13:
                                            if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (Ea(so, 1 & so.current), t.flags |= 128, null) : 0 !== (n & t.child.childLanes) ? Fs(e, t, n) : (Ea(so, 1 & so.current), null !== (e = $s(e, t, n)) ? e.sibling : null);
                                            Ea(so, 1 & so.current);
                                            break;
                                        case 19:
                                            if (r = 0 !== (n & t.childLanes), 0 !== (128 & e.flags)) {
                                                if (r) return Ws(e, t, n);
                                                t.flags |= 128
                                            }
                                            if (null !== (a = t.memoizedState) && (a.rendering = null, a.tail = null, a.lastEffect = null), Ea(so, so.current), r) break;
                                            return null;
                                        case 22:
                                        case 23:
                                            return t.lanes = 0, js(e, t, n)
                                    }
                                    return $s(e, t, n)
                                }(e, t, n);
                            ws = 0 !== (131072 & e.flags)
                        }
                    else ws = !1, ai && 0 !== (1048576 & t.flags) && Za(t, Va, t.index);
                    switch (t.lanes = 0, t.tag) {
                        case 2:
                            var r = t.type;
                            Bs(e, t), e = t.pendingProps;
                            var a = Aa(t, Ta.current);
                            Ci(t, n), a = Co(null, t, r, e, a, n);
                            var o = jo();
                            return t.flags |= 1, "object" === typeof a && null !== a && "function" === typeof a.render && void 0 === a.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ia(r) ? (o = !0, La(t)) : o = !1, t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null, Ai(t), a.updater = Ui, t.stateNode = a, a._reactInternals = t, $i(t, r, e, n), t = _s(null, t, r, !0, o, n)) : (t.tag = 0, ai && o && ei(t), xs(null, t, a, n), t = t.child), t;
                        case 16:
                            r = t.elementType;
                            e: {
                                switch (Bs(e, t), e = t.pendingProps, r = (a = r._init)(r._payload), t.type = r, a = t.tag = function(e) {
                                        if ("function" === typeof e) return Ru(e) ? 1 : 0;
                                        if (void 0 !== e && null !== e) {
                                            if ((e = e.$$typeof) === T) return 11;
                                            if (e === A) return 14
                                        }
                                        return 2
                                    }(r), e = gi(r, e), a) {
                                    case 0:
                                        t = Ps(null, t, r, e, n);
                                        break e;
                                    case 1:
                                        t = Ts(null, t, r, e, n);
                                        break e;
                                    case 11:
                                        t = Ss(null, t, r, e, n);
                                        break e;
                                    case 14:
                                        t = ks(null, t, r, gi(r.type, e), n);
                                        break e
                                }
                                throw Error(i(306, r, ""))
                            }
                            return t;
                        case 0:
                            return r = t.type, a = t.pendingProps, Ps(e, t, r, a = t.elementType === r ? a : gi(r, a), n);
                        case 1:
                            return r = t.type, a = t.pendingProps, Ts(e, t, r, a = t.elementType === r ? a : gi(r, a), n);
                        case 3:
                            e: {
                                if (Ns(t), null === e) throw Error(i(387));r = t.pendingProps,
                                a = (o = t.memoizedState).element,
                                Ii(e, t),
                                zi(t, r, null, n);
                                var s = t.memoizedState;
                                if (r = s.element, o.isDehydrated) {
                                    if (o = {
                                            element: r,
                                            isDehydrated: !1,
                                            cache: s.cache,
                                            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                                            transitions: s.transitions
                                        }, t.updateQueue.baseState = o, t.memoizedState = o, 256 & t.flags) {
                                        t = As(e, t, r, n, a = cs(Error(i(423)), t));
                                        break e
                                    }
                                    if (r !== a) {
                                        t = As(e, t, r, n, a = cs(Error(i(424)), t));
                                        break e
                                    }
                                    for (ri = ua(t.stateNode.containerInfo.firstChild), ni = t, ai = !0, ii = null, n = Xi(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                                } else {
                                    if (hi(), r === a) {
                                        t = $s(e, t, n);
                                        break e
                                    }
                                    xs(e, t, r, n)
                                }
                                t = t.child
                            }
                            return t;
                        case 5:
                            return io(t), null === e && ui(t), r = t.type, a = t.pendingProps, o = null !== e ? e.memoizedProps : null, s = a.children, na(r, a) ? s = null : null !== o && na(r, o) && (t.flags |= 32), Es(e, t), xs(e, t, s, n), t.child;
                        case 6:
                            return null === e && ui(t), null;
                        case 13:
                            return Fs(e, t, n);
                        case 4:
                            return ro(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Yi(t, null, r, n) : xs(e, t, r, n), t.child;
                        case 11:
                            return r = t.type, a = t.pendingProps, Ss(e, t, r, a = t.elementType === r ? a : gi(r, a), n);
                        case 7:
                            return xs(e, t, t.pendingProps, n), t.child;
                        case 8:
                        case 12:
                            return xs(e, t, t.pendingProps.children, n), t.child;
                        case 10:
                            e: {
                                if (r = t.type._context, a = t.pendingProps, o = t.memoizedProps, s = a.value, Ea(vi, r._currentValue), r._currentValue = s, null !== o)
                                    if (sr(o.value, s)) {
                                        if (o.children === a.children && !_a.current) {
                                            t = $s(e, t, n);
                                            break e
                                        }
                                    } else
                                        for (null !== (o = t.child) && (o.return = t); null !== o;) {
                                            var l = o.dependencies;
                                            if (null !== l) {
                                                s = o.child;
                                                for (var u = l.firstContext; null !== u;) {
                                                    if (u.context === r) {
                                                        if (1 === o.tag) {
                                                            (u = Ri(-1, n & -n)).tag = 2;
                                                            var c = o.updateQueue;
                                                            if (null !== c) {
                                                                var d = (c = c.shared).pending;
                                                                null === d ? u.next = u : (u.next = d.next, d.next = u), c.pending = u
                                                            }
                                                        }
                                                        o.lanes |= n, null !== (u = o.alternate) && (u.lanes |= n), ki(o.return, n, t), l.lanes |= n;
                                                        break
                                                    }
                                                    u = u.next
                                                }
                                            } else if (10 === o.tag) s = o.type === t.type ? null : o.child;
                                            else if (18 === o.tag) {
                                                if (null === (s = o.return)) throw Error(i(341));
                                                s.lanes |= n, null !== (l = s.alternate) && (l.lanes |= n), ki(s, n, t), s = o.sibling
                                            } else s = o.child;
                                            if (null !== s) s.return = o;
                                            else
                                                for (s = o; null !== s;) {
                                                    if (s === t) {
                                                        s = null;
                                                        break
                                                    }
                                                    if (null !== (o = s.sibling)) {
                                                        o.return = s.return, s = o;
                                                        break
                                                    }
                                                    s = s.return
                                                }
                                            o = s
                                        }
                                xs(e, t, a.children, n),
                                t = t.child
                            }
                            return t;
                        case 9:
                            return a = t.type, r = t.pendingProps.children, Ci(t, n), r = r(a = ji(a)), t.flags |= 1, xs(e, t, r, n), t.child;
                        case 14:
                            return a = gi(r = t.type, t.pendingProps), ks(e, t, r, a = gi(r.type, a), n);
                        case 15:
                            return Cs(e, t, t.type, t.pendingProps, n);
                        case 17:
                            return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : gi(r, a), Bs(e, t), t.tag = 1, Ia(r) ? (e = !0, La(t)) : e = !1, Ci(t, n), Wi(t, r, a), $i(t, r, a, n), _s(null, t, r, !0, e, n);
                        case 19:
                            return Ws(e, t, n);
                        case 22:
                            return js(e, t, n)
                    }
                    throw Error(i(156, t.tag))
                };
                var Ku = "function" === typeof reportError ? reportError : function(e) {
                    console.error(e)
                };

                function Qu(e) {
                    this._internalRoot = e
                }

                function Yu(e) {
                    this._internalRoot = e
                }

                function Xu(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
                }

                function Ju(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
                }

                function Zu() {}

                function ec(e, t, n, r, a) {
                    var i = n._reactRootContainer;
                    if (i) {
                        var o = i;
                        if ("function" === typeof a) {
                            var s = a;
                            a = function() {
                                var e = $u(o);
                                s.call(e)
                            }
                        }
                        Bu(t, o, e, a)
                    } else o = function(e, t, n, r, a) {
                        if (a) {
                            if ("function" === typeof r) {
                                var i = r;
                                r = function() {
                                    var e = $u(o);
                                    i.call(e)
                                }
                            }
                            var o = Wu(t, r, e, 0, null, !1, 0, "", Zu);
                            return e._reactRootContainer = o, e[pa] = o.current, Hr(8 === e.nodeType ? e.parentNode : e), du(), o
                        }
                        for (; a = e.lastChild;) e.removeChild(a);
                        if ("function" === typeof r) {
                            var s = r;
                            r = function() {
                                var e = $u(l);
                                s.call(e)
                            }
                        }
                        var l = Uu(e, 0, !1, null, 0, !1, 0, "", Zu);
                        return e._reactRootContainer = l, e[pa] = l.current, Hr(8 === e.nodeType ? e.parentNode : e), du((function() {
                            Bu(t, l, n, r)
                        })), l
                    }(n, t, e, a, r);
                    return $u(o)
                }
                Yu.prototype.render = Qu.prototype.render = function(e) {
                    var t = this._internalRoot;
                    if (null === t) throw Error(i(409));
                    Bu(e, t, null, null)
                }, Yu.prototype.unmount = Qu.prototype.unmount = function() {
                    var e = this._internalRoot;
                    if (null !== e) {
                        this._internalRoot = null;
                        var t = e.containerInfo;
                        du((function() {
                            Bu(null, e, null, null)
                        })), t[pa] = null
                    }
                }, Yu.prototype.unstable_scheduleHydration = function(e) {
                    if (e) {
                        var t = Ct();
                        e = {
                            blockedOn: null,
                            target: e,
                            priority: t
                        };
                        for (var n = 0; n < Rt.length && 0 !== t && t < Rt[n].priority; n++);
                        Rt.splice(n, 0, e), 0 === n && zt(e)
                    }
                }, xt = function(e) {
                    switch (e.tag) {
                        case 3:
                            var t = e.stateNode;
                            if (t.current.memoizedState.isDehydrated) {
                                var n = dt(t.pendingLanes);
                                0 !== n && (yt(t, 1 | n), au(t, Xe()), 0 === (6 & _l) && (Wl = Xe() + 500, Ha()))
                            }
                            break;
                        case 13:
                            du((function() {
                                var t = _i(e, 1);
                                if (null !== t) {
                                    var n = tu();
                                    ru(t, e, 1, n)
                                }
                            })), qu(e, 1)
                    }
                }, St = function(e) {
                    if (13 === e.tag) {
                        var t = _i(e, 134217728);
                        if (null !== t) ru(t, e, 134217728, tu());
                        qu(e, 134217728)
                    }
                }, kt = function(e) {
                    if (13 === e.tag) {
                        var t = nu(e),
                            n = _i(e, t);
                        if (null !== n) ru(n, e, t, tu());
                        qu(e, t)
                    }
                }, Ct = function() {
                    return bt
                }, jt = function(e, t) {
                    var n = bt;
                    try {
                        return bt = e, t()
                    } finally {
                        bt = n
                    }
                }, Se = function(e, t, n) {
                    switch (t) {
                        case "input":
                            if (J(e, n), t = n.name, "radio" === n.type && null != t) {
                                for (n = e; n.parentNode;) n = n.parentNode;
                                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                    var r = n[t];
                                    if (r !== e && r.form === e.form) {
                                        var a = xa(r);
                                        if (!a) throw Error(i(90));
                                        q(r), J(r, a)
                                    }
                                }
                            }
                            break;
                        case "textarea":
                            ie(e, n);
                            break;
                        case "select":
                            null != (t = n.value) && ne(e, !!n.multiple, t, !1)
                    }
                }, Te = cu, _e = du;
                var tc = {
                        usingClientEntryPoint: !1,
                        Events: [ba, wa, xa, Ee, Pe, cu]
                    },
                    nc = {
                        findFiberByHostInstance: ya,
                        bundleType: 0,
                        version: "18.2.0",
                        rendererPackageName: "react-dom"
                    },
                    rc = {
                        bundleType: nc.bundleType,
                        version: nc.version,
                        rendererPackageName: nc.rendererPackageName,
                        rendererConfig: nc.rendererConfig,
                        overrideHookState: null,
                        overrideHookStateDeletePath: null,
                        overrideHookStateRenamePath: null,
                        overrideProps: null,
                        overridePropsDeletePath: null,
                        overridePropsRenamePath: null,
                        setErrorHandler: null,
                        setSuspenseHandler: null,
                        scheduleUpdate: null,
                        currentDispatcherRef: w.ReactCurrentDispatcher,
                        findHostInstanceByFiber: function(e) {
                            return null === (e = $e(e)) ? null : e.stateNode
                        },
                        findFiberByHostInstance: nc.findFiberByHostInstance || function() {
                            return null
                        },
                        findHostInstancesForRefresh: null,
                        scheduleRefresh: null,
                        scheduleRoot: null,
                        setRefreshHandler: null,
                        getCurrentFiber: null,
                        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
                    };
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                    var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                    if (!ac.isDisabled && ac.supportsFiber) try {
                        at = ac.inject(rc), it = ac
                    } catch (ce) {}
                }
                t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc, t.createPortal = function(e, t) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    if (!Xu(t)) throw Error(i(200));
                    return function(e, t, n) {
                        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                        return {
                            $$typeof: S,
                            key: null == r ? null : "" + r,
                            children: e,
                            containerInfo: t,
                            implementation: n
                        }
                    }(e, t, null, n)
                }, t.createRoot = function(e, t) {
                    if (!Xu(e)) throw Error(i(299));
                    var n = !1,
                        r = "",
                        a = Ku;
                    return null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (a = t.onRecoverableError)), t = Uu(e, 1, !1, null, 0, n, 0, r, a), e[pa] = t.current, Hr(8 === e.nodeType ? e.parentNode : e), new Qu(t)
                }, t.findDOMNode = function(e) {
                    if (null == e) return null;
                    if (1 === e.nodeType) return e;
                    var t = e._reactInternals;
                    if (void 0 === t) {
                        if ("function" === typeof e.render) throw Error(i(188));
                        throw e = Object.keys(e).join(","), Error(i(268, e))
                    }
                    return e = null === (e = $e(t)) ? null : e.stateNode
                }, t.flushSync = function(e) {
                    return du(e)
                }, t.hydrate = function(e, t, n) {
                    if (!Ju(t)) throw Error(i(200));
                    return ec(null, e, t, !0, n)
                }, t.hydrateRoot = function(e, t, n) {
                    if (!Xu(e)) throw Error(i(405));
                    var r = null != n && n.hydratedSources || null,
                        a = !1,
                        o = "",
                        s = Ku;
                    if (null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (a = !0), void 0 !== n.identifierPrefix && (o = n.identifierPrefix), void 0 !== n.onRecoverableError && (s = n.onRecoverableError)), t = Wu(t, null, e, 1, null != n ? n : null, a, 0, o, s), e[pa] = t.current, Hr(e), r)
                        for (e = 0; e < r.length; e++) a = (a = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a);
                    return new Yu(t)
                }, t.render = function(e, t, n) {
                    if (!Ju(t)) throw Error(i(200));
                    return ec(null, e, t, !1, n)
                }, t.unmountComponentAtNode = function(e) {
                    if (!Ju(e)) throw Error(i(40));
                    return !!e._reactRootContainer && (du((function() {
                        ec(null, null, e, !1, (function() {
                            e._reactRootContainer = null, e[pa] = null
                        }))
                    })), !0)
                }, t.unstable_batchedUpdates = cu, t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
                    if (!Ju(n)) throw Error(i(200));
                    if (null == e || void 0 === e._reactInternals) throw Error(i(38));
                    return ec(e, t, n, !1, r)
                }, t.version = "18.2.0-next-9e3b772b8-20220608"
            },
            250: (e, t, n) => {
                "use strict";
                var r = n(164);
                t.createRoot = r.createRoot, t.hydrateRoot = r.hydrateRoot
            },
            164: (e, t, n) => {
                "use strict";
                ! function e() {
                    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (t) {
                        console.error(t)
                    }
                }(), e.exports = n(463)
            },
            225: function(e, t, n) {
                ! function(e, t) {
                    "use strict";

                    function n(e) {
                        return e * Math.PI / 180
                    }

                    function r(e, t, n) {
                        return e > n ? n : e < t ? t : e
                    }

                    function a(e, t) {
                        return t / 100 * e
                    }

                    function i(e, t) {
                        return e + t / 2
                    }

                    function o(e, t) {
                        var r = n(e);
                        return {
                            dx: t * Math.cos(r),
                            dy: t * Math.sin(r)
                        }
                    }

                    function s(e) {
                        return "number" === typeof e
                    }

                    function l(e, t) {
                        return "function" === typeof e ? e(t) : e
                    }

                    function u(e, t) {
                        var n = Object.assign({}, t, e);
                        for (var r in t) void 0 === e[r] && (n[r] = t[r]);
                        return n
                    }

                    function c(e) {
                        for (var t = 0, n = 0; n < e.length; n++) t += e[n].value;
                        return t
                    }

                    function d(e) {
                        for (var t = e.data, n = e.lengthAngle, i = e.totalValue, o = e.paddingAngle, s = e.startAngle, l = i || c(t), u = r(n, -360, 360), d = 360 === Math.abs(u) ? t.length : t.length - 1, f = Math.abs(o) * Math.sign(n), h = u - f * d, p = 0, m = [], g = 0; g < t.length; g++) {
                            var v = t[g],
                                y = 0 === l ? 0 : v.value / l * 100,
                                b = a(h, y),
                                w = p + s;
                            p = p + b + f, m.push(Object.assign({
                                percentage: y,
                                startAngle: w,
                                degrees: b
                            }, v))
                        }
                        return m
                    }

                    function f(e, t) {
                        if (null == e) return {};
                        var n, r, a = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                        return a
                    }

                    function h(e) {
                        var n = e.renderLabel,
                            r = e.labelProps,
                            a = n(r);
                        if ("string" === typeof a || "number" === typeof a) {
                            r.dataEntry, r.dataIndex;
                            var i = f(r, ["dataEntry", "dataIndex"]);
                            return t.createElement("text", Object.assign({
                                dominantBaseline: "central"
                            }, i), a)
                        }
                        return t.isValidElement(a) ? a : null
                    }

                    function p(e) {
                        var t = 1e14;
                        return Math.round((e + Number.EPSILON) * t) / t
                    }

                    function m(e) {
                        var t = e.labelPosition,
                            n = e.lineWidth,
                            r = p(e.labelHorizontalShift);
                        return 0 === r ? "middle" : t > 100 ? r > 0 ? "start" : "end" : t < 100 - n ? r > 0 ? "end" : "start" : "middle"
                    }

                    function g(e, t) {
                        return e.map((function(e, n) {
                            var r, s = null != (r = l(t.segmentsShift, n)) ? r : 0,
                                u = a(t.radius, t.labelPosition) + s,
                                c = o(i(e.startAngle, e.degrees), u),
                                d = c.dx,
                                f = c.dy;
                            return {
                                x: t.center[0],
                                y: t.center[1],
                                dx: d,
                                dy: f,
                                textAnchor: m({
                                    labelPosition: t.labelPosition,
                                    lineWidth: t.lineWidth,
                                    labelHorizontalShift: d
                                }),
                                dataEntry: e,
                                dataIndex: n,
                                style: l(t.labelStyle, n)
                            }
                        }))
                    }

                    function v(e, n) {
                        var r = n.label;
                        if (r) return g(e, n).map((function(e, n) {
                            return t.createElement(h, {
                                key: "label-" + (e.dataEntry.key || n),
                                renderLabel: r,
                                labelProps: e
                            })
                        }))
                    }
                    var y = function(e, t, n, r, a) {
                        var i = a - r;
                        if (0 === i) return [];
                        var o = n * Math.cos(r) + e,
                            s = n * Math.sin(r) + t,
                            l = n * Math.cos(a) + e,
                            u = n * Math.sin(a) + t;
                        return [
                            ["M", o, s],
                            ["A", n, n, 0, Math.abs(i) <= Math.PI ? "0" : "1", i < 0 ? "0" : "1", l, u]
                        ]
                    };

                    function b(e, t, a, i, o) {
                        var s = r(i, -359.999, 359.999);
                        return y(e, t, o, n(a), n(a + s)).map((function(e) {
                            return e.join(" ")
                        })).join(" ")
                    }

                    function w(e) {
                        var r, l, u = e.cx,
                            c = e.cy,
                            d = e.lengthAngle,
                            h = e.lineWidth,
                            p = e.radius,
                            m = e.shift,
                            g = void 0 === m ? 0 : m,
                            v = e.reveal,
                            y = e.rounded,
                            w = e.startAngle,
                            x = e.title,
                            S = f(e, ["cx", "cy", "lengthAngle", "lineWidth", "radius", "shift", "reveal", "rounded", "startAngle", "title"]),
                            k = p - h / 2,
                            C = o(i(w, d), g),
                            j = b(u + C.dx, c + C.dy, w, d, k);
                        if (s(v)) {
                            var E = n(k) * d;
                            l = (r = Math.abs(E)) - a(r, v)
                        }
                        return t.createElement("path", Object.assign({
                            d: j,
                            fill: "none",
                            strokeWidth: h,
                            strokeDasharray: r,
                            strokeDashoffset: l,
                            strokeLinecap: y ? "round" : void 0
                        }, S), x && t.createElement("title", null, x))
                    }

                    function x(e, t, n) {
                        var r = "stroke-dashoffset " + e + "ms " + t;
                        return n && n.transition && (r = r + "," + n.transition), {
                            transition: r
                        }
                    }

                    function S(e) {
                        return e.animate && !s(e.reveal) ? 100 : e.reveal
                    }

                    function k(e, t) {
                        return e && function(n) {
                            e(n, t)
                        }
                    }

                    function C(e, n, r) {
                        var i = null != r ? r : S(n),
                            o = n.radius,
                            s = n.center,
                            u = s[0],
                            c = s[1],
                            d = a(o, n.lineWidth),
                            f = e.map((function(e, r) {
                                var a = l(n.segmentsStyle, r);
                                return t.createElement(w, {
                                    cx: u,
                                    cy: c,
                                    key: e.key || r,
                                    lengthAngle: e.degrees,
                                    lineWidth: d,
                                    radius: o,
                                    rounded: n.rounded,
                                    reveal: i,
                                    shift: l(n.segmentsShift, r),
                                    startAngle: e.startAngle,
                                    title: e.title,
                                    style: Object.assign({}, a, n.animate && x(n.animationDuration, n.animationEasing, a)),
                                    stroke: e.color,
                                    tabIndex: n.segmentsTabIndex,
                                    onBlur: k(n.onBlur, r),
                                    onClick: k(n.onClick, r),
                                    onFocus: k(n.onFocus, r),
                                    onKeyDown: k(n.onKeyDown, r),
                                    onMouseOver: k(n.onMouseOver, r),
                                    onMouseOut: k(n.onMouseOut, r)
                                })
                            }));
                        return n.background && f.unshift(t.createElement(w, {
                            cx: u,
                            cy: c,
                            key: "bg",
                            lengthAngle: n.lengthAngle,
                            lineWidth: d,
                            radius: o,
                            rounded: n.rounded,
                            startAngle: n.startAngle,
                            stroke: n.background
                        })), f
                    }
                    var j = {
                        animationDuration: 500,
                        animationEasing: "ease-out",
                        center: [50, 50],
                        data: [],
                        labelPosition: 50,
                        lengthAngle: 360,
                        lineWidth: 100,
                        paddingAngle: 0,
                        radius: 50,
                        startAngle: 0,
                        viewBoxSize: [100, 100]
                    };

                    function E(e) {
                        var n = u(e, j),
                            r = t.useState(n.animate ? 0 : null),
                            a = r[0],
                            i = r[1];
                        t.useEffect((function() {
                            n.animate && i(null)
                        }), []);
                        var o = d(n);
                        return t.createElement("svg", {
                            viewBox: "0 0 " + n.viewBoxSize[0] + " " + n.viewBoxSize[1],
                            width: "100%",
                            height: "100%",
                            className: n.className,
                            style: n.style
                        }, C(o, n, a), v(o, n), n.children)
                    }
                    e.PieChart = E, e.pieChartDefaultProps = j
                }(t, n(791))
            },
            374: (e, t, n) => {
                "use strict";
                var r = n(791),
                    a = Symbol.for("react.element"),
                    i = Symbol.for("react.fragment"),
                    o = Object.prototype.hasOwnProperty,
                    s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                    l = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function u(e, t, n) {
                    var r, i = {},
                        u = null,
                        c = null;
                    for (r in void 0 !== n && (u = "" + n), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (c = t.ref), t) o.call(t, r) && !l.hasOwnProperty(r) && (i[r] = t[r]);
                    if (e && e.defaultProps)
                        for (r in t = e.defaultProps) void 0 === i[r] && (i[r] = t[r]);
                    return {
                        $$typeof: a,
                        type: e,
                        key: u,
                        ref: c,
                        props: i,
                        _owner: s.current
                    }
                }
                t.Fragment = i, t.jsx = u, t.jsxs = u
            },
            117: (e, t) => {
                "use strict";
                var n = Symbol.for("react.element"),
                    r = Symbol.for("react.portal"),
                    a = Symbol.for("react.fragment"),
                    i = Symbol.for("react.strict_mode"),
                    o = Symbol.for("react.profiler"),
                    s = Symbol.for("react.provider"),
                    l = Symbol.for("react.context"),
                    u = Symbol.for("react.forward_ref"),
                    c = Symbol.for("react.suspense"),
                    d = Symbol.for("react.memo"),
                    f = Symbol.for("react.lazy"),
                    h = Symbol.iterator;
                var p = {
                        isMounted: function() {
                            return !1
                        },
                        enqueueForceUpdate: function() {},
                        enqueueReplaceState: function() {},
                        enqueueSetState: function() {}
                    },
                    m = Object.assign,
                    g = {};

                function v(e, t, n) {
                    this.props = e, this.context = t, this.refs = g, this.updater = n || p
                }

                function y() {}

                function b(e, t, n) {
                    this.props = e, this.context = t, this.refs = g, this.updater = n || p
                }
                v.prototype.isReactComponent = {}, v.prototype.setState = function(e, t) {
                    if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                    this.updater.enqueueSetState(this, e, t, "setState")
                }, v.prototype.forceUpdate = function(e) {
                    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
                }, y.prototype = v.prototype;
                var w = b.prototype = new y;
                w.constructor = b, m(w, v.prototype), w.isPureReactComponent = !0;
                var x = Array.isArray,
                    S = Object.prototype.hasOwnProperty,
                    k = {
                        current: null
                    },
                    C = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function j(e, t, r) {
                    var a, i = {},
                        o = null,
                        s = null;
                    if (null != t)
                        for (a in void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (o = "" + t.key), t) S.call(t, a) && !C.hasOwnProperty(a) && (i[a] = t[a]);
                    var l = arguments.length - 2;
                    if (1 === l) i.children = r;
                    else if (1 < l) {
                        for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
                        i.children = u
                    }
                    if (e && e.defaultProps)
                        for (a in l = e.defaultProps) void 0 === i[a] && (i[a] = l[a]);
                    return {
                        $$typeof: n,
                        type: e,
                        key: o,
                        ref: s,
                        props: i,
                        _owner: k.current
                    }
                }

                function E(e) {
                    return "object" === typeof e && null !== e && e.$$typeof === n
                }
                var P = /\/+/g;

                function T(e, t) {
                    return "object" === typeof e && null !== e && null != e.key ? function(e) {
                        var t = {
                            "=": "=0",
                            ":": "=2"
                        };
                        return "$" + e.replace(/[=:]/g, (function(e) {
                            return t[e]
                        }))
                    }("" + e.key) : t.toString(36)
                }

                function _(e, t, a, i, o) {
                    var s = typeof e;
                    "undefined" !== s && "boolean" !== s || (e = null);
                    var l = !1;
                    if (null === e) l = !0;
                    else switch (s) {
                        case "string":
                        case "number":
                            l = !0;
                            break;
                        case "object":
                            switch (e.$$typeof) {
                                case n:
                                case r:
                                    l = !0
                            }
                    }
                    if (l) return o = o(l = e), e = "" === i ? "." + T(l, 0) : i, x(o) ? (a = "", null != e && (a = e.replace(P, "$&/") + "/"), _(o, t, a, "", (function(e) {
                        return e
                    }))) : null != o && (E(o) && (o = function(e, t) {
                        return {
                            $$typeof: n,
                            type: e.type,
                            key: t,
                            ref: e.ref,
                            props: e.props,
                            _owner: e._owner
                        }
                    }(o, a + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(P, "$&/") + "/") + e)), t.push(o)), 1;
                    if (l = 0, i = "" === i ? "." : i + ":", x(e))
                        for (var u = 0; u < e.length; u++) {
                            var c = i + T(s = e[u], u);
                            l += _(s, t, a, c, o)
                        } else if (c = function(e) {
                                return null === e || "object" !== typeof e ? null : "function" === typeof(e = h && e[h] || e["@@iterator"]) ? e : null
                            }(e), "function" === typeof c)
                            for (e = c.call(e), u = 0; !(s = e.next()).done;) l += _(s = s.value, t, a, c = i + T(s, u++), o);
                        else if ("object" === s) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                    return l
                }

                function N(e, t, n) {
                    if (null == e) return e;
                    var r = [],
                        a = 0;
                    return _(e, r, "", "", (function(e) {
                        return t.call(n, e, a++)
                    })), r
                }

                function A(e) {
                    if (-1 === e._status) {
                        var t = e._result;
                        (t = t()).then((function(t) {
                            0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
                        }), (function(t) {
                            0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
                        })), -1 === e._status && (e._status = 0, e._result = t)
                    }
                    if (1 === e._status) return e._result.default;
                    throw e._result
                }
                var I = {
                        current: null
                    },
                    R = {
                        transition: null
                    },
                    O = {
                        ReactCurrentDispatcher: I,
                        ReactCurrentBatchConfig: R,
                        ReactCurrentOwner: k
                    };
                t.Children = {
                    map: N,
                    forEach: function(e, t, n) {
                        N(e, (function() {
                            t.apply(this, arguments)
                        }), n)
                    },
                    count: function(e) {
                        var t = 0;
                        return N(e, (function() {
                            t++
                        })), t
                    },
                    toArray: function(e) {
                        return N(e, (function(e) {
                            return e
                        })) || []
                    },
                    only: function(e) {
                        if (!E(e)) throw Error("React.Children.only expected to receive a single React element child.");
                        return e
                    }
                }, t.Component = v, t.Fragment = a, t.Profiler = o, t.PureComponent = b, t.StrictMode = i, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O, t.cloneElement = function(e, t, r) {
                    if (null === e || void 0 === e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                    var a = m({}, e.props),
                        i = e.key,
                        o = e.ref,
                        s = e._owner;
                    if (null != t) {
                        if (void 0 !== t.ref && (o = t.ref, s = k.current), void 0 !== t.key && (i = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
                        for (u in t) S.call(t, u) && !C.hasOwnProperty(u) && (a[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u])
                    }
                    var u = arguments.length - 2;
                    if (1 === u) a.children = r;
                    else if (1 < u) {
                        l = Array(u);
                        for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
                        a.children = l
                    }
                    return {
                        $$typeof: n,
                        type: e.type,
                        key: i,
                        ref: o,
                        props: a,
                        _owner: s
                    }
                }, t.createContext = function(e) {
                    return (e = {
                        $$typeof: l,
                        _currentValue: e,
                        _currentValue2: e,
                        _threadCount: 0,
                        Provider: null,
                        Consumer: null,
                        _defaultValue: null,
                        _globalName: null
                    }).Provider = {
                        $$typeof: s,
                        _context: e
                    }, e.Consumer = e
                }, t.createElement = j, t.createFactory = function(e) {
                    var t = j.bind(null, e);
                    return t.type = e, t
                }, t.createRef = function() {
                    return {
                        current: null
                    }
                }, t.forwardRef = function(e) {
                    return {
                        $$typeof: u,
                        render: e
                    }
                }, t.isValidElement = E, t.lazy = function(e) {
                    return {
                        $$typeof: f,
                        _payload: {
                            _status: -1,
                            _result: e
                        },
                        _init: A
                    }
                }, t.memo = function(e, t) {
                    return {
                        $$typeof: d,
                        type: e,
                        compare: void 0 === t ? null : t
                    }
                }, t.startTransition = function(e) {
                    var t = R.transition;
                    R.transition = {};
                    try {
                        e()
                    } finally {
                        R.transition = t
                    }
                }, t.unstable_act = function() {
                    throw Error("act(...) is not supported in production builds of React.")
                }, t.useCallback = function(e, t) {
                    return I.current.useCallback(e, t)
                }, t.useContext = function(e) {
                    return I.current.useContext(e)
                }, t.useDebugValue = function() {}, t.useDeferredValue = function(e) {
                    return I.current.useDeferredValue(e)
                }, t.useEffect = function(e, t) {
                    return I.current.useEffect(e, t)
                }, t.useId = function() {
                    return I.current.useId()
                }, t.useImperativeHandle = function(e, t, n) {
                    return I.current.useImperativeHandle(e, t, n)
                }, t.useInsertionEffect = function(e, t) {
                    return I.current.useInsertionEffect(e, t)
                }, t.useLayoutEffect = function(e, t) {
                    return I.current.useLayoutEffect(e, t)
                }, t.useMemo = function(e, t) {
                    return I.current.useMemo(e, t)
                }, t.useReducer = function(e, t, n) {
                    return I.current.useReducer(e, t, n)
                }, t.useRef = function(e) {
                    return I.current.useRef(e)
                }, t.useState = function(e) {
                    return I.current.useState(e)
                }, t.useSyncExternalStore = function(e, t, n) {
                    return I.current.useSyncExternalStore(e, t, n)
                }, t.useTransition = function() {
                    return I.current.useTransition()
                }, t.version = "18.2.0"
            },
            791: (e, t, n) => {
                "use strict";
                e.exports = n(117)
            },
            184: (e, t, n) => {
                "use strict";
                e.exports = n(374)
            },
            813: (e, t) => {
                "use strict";

                function n(e, t) {
                    var n = e.length;
                    e.push(t);
                    e: for (; 0 < n;) {
                        var r = n - 1 >>> 1,
                            a = e[r];
                        if (!(0 < i(a, t))) break e;
                        e[r] = t, e[n] = a, n = r
                    }
                }

                function r(e) {
                    return 0 === e.length ? null : e[0]
                }

                function a(e) {
                    if (0 === e.length) return null;
                    var t = e[0],
                        n = e.pop();
                    if (n !== t) {
                        e[0] = n;
                        e: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
                            var s = 2 * (r + 1) - 1,
                                l = e[s],
                                u = s + 1,
                                c = e[u];
                            if (0 > i(l, n)) u < a && 0 > i(c, l) ? (e[r] = c, e[u] = n, r = u) : (e[r] = l, e[s] = n, r = s);
                            else {
                                if (!(u < a && 0 > i(c, n))) break e;
                                e[r] = c, e[u] = n, r = u
                            }
                        }
                    }
                    return t
                }

                function i(e, t) {
                    var n = e.sortIndex - t.sortIndex;
                    return 0 !== n ? n : e.id - t.id
                }
                if ("object" === typeof performance && "function" === typeof performance.now) {
                    var o = performance;
                    t.unstable_now = function() {
                        return o.now()
                    }
                } else {
                    var s = Date,
                        l = s.now();
                    t.unstable_now = function() {
                        return s.now() - l
                    }
                }
                var u = [],
                    c = [],
                    d = 1,
                    f = null,
                    h = 3,
                    p = !1,
                    m = !1,
                    g = !1,
                    v = "function" === typeof setTimeout ? setTimeout : null,
                    y = "function" === typeof clearTimeout ? clearTimeout : null,
                    b = "undefined" !== typeof setImmediate ? setImmediate : null;

                function w(e) {
                    for (var t = r(c); null !== t;) {
                        if (null === t.callback) a(c);
                        else {
                            if (!(t.startTime <= e)) break;
                            a(c), t.sortIndex = t.expirationTime, n(u, t)
                        }
                        t = r(c)
                    }
                }

                function x(e) {
                    if (g = !1, w(e), !m)
                        if (null !== r(u)) m = !0, R(S);
                        else {
                            var t = r(c);
                            null !== t && O(x, t.startTime - e)
                        }
                }

                function S(e, n) {
                    m = !1, g && (g = !1, y(E), E = -1), p = !0;
                    var i = h;
                    try {
                        for (w(n), f = r(u); null !== f && (!(f.expirationTime > n) || e && !_());) {
                            var o = f.callback;
                            if ("function" === typeof o) {
                                f.callback = null, h = f.priorityLevel;
                                var s = o(f.expirationTime <= n);
                                n = t.unstable_now(), "function" === typeof s ? f.callback = s : f === r(u) && a(u), w(n)
                            } else a(u);
                            f = r(u)
                        }
                        if (null !== f) var l = !0;
                        else {
                            var d = r(c);
                            null !== d && O(x, d.startTime - n), l = !1
                        }
                        return l
                    } finally {
                        f = null, h = i, p = !1
                    }
                }
                "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
                var k, C = !1,
                    j = null,
                    E = -1,
                    P = 5,
                    T = -1;

                function _() {
                    return !(t.unstable_now() - T < P)
                }

                function N() {
                    if (null !== j) {
                        var e = t.unstable_now();
                        T = e;
                        var n = !0;
                        try {
                            n = j(!0, e)
                        } finally {
                            n ? k() : (C = !1, j = null)
                        }
                    } else C = !1
                }
                if ("function" === typeof b) k = function() {
                    b(N)
                };
                else if ("undefined" !== typeof MessageChannel) {
                    var A = new MessageChannel,
                        I = A.port2;
                    A.port1.onmessage = N, k = function() {
                        I.postMessage(null)
                    }
                } else k = function() {
                    v(N, 0)
                };

                function R(e) {
                    j = e, C || (C = !0, k())
                }

                function O(e, n) {
                    E = v((function() {
                        e(t.unstable_now())
                    }), n)
                }
                t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
                    e.callback = null
                }, t.unstable_continueExecution = function() {
                    m || p || (m = !0, R(S))
                }, t.unstable_forceFrameRate = function(e) {
                    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < e ? Math.floor(1e3 / e) : 5
                }, t.unstable_getCurrentPriorityLevel = function() {
                    return h
                }, t.unstable_getFirstCallbackNode = function() {
                    return r(u)
                }, t.unstable_next = function(e) {
                    switch (h) {
                        case 1:
                        case 2:
                        case 3:
                            var t = 3;
                            break;
                        default:
                            t = h
                    }
                    var n = h;
                    h = t;
                    try {
                        return e()
                    } finally {
                        h = n
                    }
                }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            e = 3
                    }
                    var n = h;
                    h = e;
                    try {
                        return t()
                    } finally {
                        h = n
                    }
                }, t.unstable_scheduleCallback = function(e, a, i) {
                    var o = t.unstable_now();
                    switch ("object" === typeof i && null !== i ? i = "number" === typeof(i = i.delay) && 0 < i ? o + i : o : i = o, e) {
                        case 1:
                            var s = -1;
                            break;
                        case 2:
                            s = 250;
                            break;
                        case 5:
                            s = 1073741823;
                            break;
                        case 4:
                            s = 1e4;
                            break;
                        default:
                            s = 5e3
                    }
                    return e = {
                        id: d++,
                        callback: a,
                        priorityLevel: e,
                        startTime: i,
                        expirationTime: s = i + s,
                        sortIndex: -1
                    }, i > o ? (e.sortIndex = i, n(c, e), null === r(u) && e === r(c) && (g ? (y(E), E = -1) : g = !0, O(x, i - o))) : (e.sortIndex = s, n(u, e), m || p || (m = !0, R(S))), e
                }, t.unstable_shouldYield = _, t.unstable_wrapCallback = function(e) {
                    var t = h;
                    return function() {
                        var n = h;
                        h = t;
                        try {
                            return e.apply(this, arguments)
                        } finally {
                            h = n
                        }
                    }
                }
            },
            296: (e, t, n) => {
                "use strict";
                e.exports = n(813)
            },
            613: e => {
                e.exports = function(e, t, n, r) {
                    var a = n ? n.call(r, e, t) : void 0;
                    if (void 0 !== a) return !!a;
                    if (e === t) return !0;
                    if ("object" !== typeof e || !e || "object" !== typeof t || !t) return !1;
                    var i = Object.keys(e),
                        o = Object.keys(t);
                    if (i.length !== o.length) return !1;
                    for (var s = Object.prototype.hasOwnProperty.bind(t), l = 0; l < i.length; l++) {
                        var u = i[l];
                        if (!s(u)) return !1;
                        var c = e[u],
                            d = t[u];
                        if (!1 === (a = n ? n.call(r, c, d, u) : void 0) || void 0 === a && c !== d) return !1
                    }
                    return !0
                }
            }
        },
        t = {};

    function n(r) {
        var a = t[r];
        if (void 0 !== a) return a.exports;
        var i = t[r] = {
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.exports
    }
    n.m = e, n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {
            a: t
        }), t
    }, (() => {
        var e, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
        n.t = function(r, a) {
            if (1 & a && (r = this(r)), 8 & a) return r;
            if ("object" === typeof r && r) {
                if (4 & a && r.__esModule) return r;
                if (16 & a && "function" === typeof r.then) return r
            }
            var i = Object.create(null);
            n.r(i);
            var o = {};
            e = e || [null, t({}), t([]), t(t)];
            for (var s = 2 & a && r;
                "object" == typeof s && !~e.indexOf(s); s = t(s)) Object.getOwnPropertyNames(s).forEach((e => o[e] = () => r[e]));
            return o.default = () => r, n.d(i, o), i
        }
    })(), n.d = (e, t) => {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, n.f = {}, n.e = e => Promise.all(Object.keys(n.f).reduce(((t, r) => (n.f[r](e, t), t)), [])), n.u = e => "static/js/" + e + ".466df198.chunk.js", n.miniCssF = e => {}, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        var e = {},
            t = "gsmeter:";
        n.l = (r, a, i, o) => {
            if (e[r]) e[r].push(a);
            else {
                var s, l;
                if (void 0 !== i)
                    for (var u = document.getElementsByTagName("script"), c = 0; c < u.length; c++) {
                        var d = u[c];
                        if (d.getAttribute("src") == r || d.getAttribute("data-webpack") == t + i) {
                            s = d;
                            break
                        }
                    }
                s || (l = !0, (s = document.createElement("script")).charset = "utf-8", s.timeout = 120, n.nc && s.setAttribute("nonce", n.nc), s.setAttribute("data-webpack", t + i), s.src = r), e[r] = [a];
                var f = (t, n) => {
                        s.onerror = s.onload = null, clearTimeout(h);
                        var a = e[r];
                        if (delete e[r], s.parentNode && s.parentNode.removeChild(s), a && a.forEach((e => e(n))), t) return t(n)
                    },
                    h = setTimeout(f.bind(null, void 0, {
                        type: "timeout",
                        target: s
                    }), 12e4);
                s.onerror = f.bind(null, s.onerror), s.onload = f.bind(null, s.onload), l && document.head.appendChild(s)
            }
        }
    })(), n.r = e => {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.p = "/", (() => {
        var e = {
            179: 0
        };
        n.f.j = (t, r) => {
            var a = n.o(e, t) ? e[t] : void 0;
            if (0 !== a)
                if (a) r.push(a[2]);
                else {
                    var i = new Promise(((n, r) => a = e[t] = [n, r]));
                    r.push(a[2] = i);
                    var o = n.p + n.u(t),
                        s = new Error;
                    n.l(o, (r => {
                        if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                            var i = r && ("load" === r.type ? "missing" : r.type),
                                o = r && r.target && r.target.src;
                            s.message = "Loading chunk " + t + " failed.\n(" + i + ": " + o + ")", s.name = "ChunkLoadError", s.type = i, s.request = o, a[1](s)
                        }
                    }), "chunk-" + t, t)
                }
        };
        var t = (t, r) => {
                var a, i, o = r[0],
                    s = r[1],
                    l = r[2],
                    u = 0;
                if (o.some((t => 0 !== e[t]))) {
                    for (a in s) n.o(s, a) && (n.m[a] = s[a]);
                    if (l) l(n)
                }
                for (t && t(r); u < o.length; u++) i = o[u], n.o(e, i) && e[i] && e[i][0](), e[i] = 0
            },
            r = self.webpackChunkgsmeter = self.webpackChunkgsmeter || [];
        r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
    })(), n.nc = void 0, (() => {
        "use strict";
        var e = n(791),
            t = n.t(e, 2),
            r = n(250);
        n.p;
        var a, i = n(164),
            o = n.t(i, 2);

        function s() {
            return s = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, s.apply(this, arguments)
        }! function(e) {
            e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
        }(a || (a = {}));
        const l = "popstate";

        function u(e, t) {
            if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t)
        }

        function c(e, t) {
            if (!e) {
                "undefined" !== typeof console && console.warn(t);
                try {
                    throw new Error(t)
                } catch (n) {}
            }
        }

        function d(e, t) {
            return {
                usr: e.state,
                key: e.key,
                idx: t
            }
        }

        function f(e, t, n, r) {
            return void 0 === n && (n = null), s({
                pathname: "string" === typeof e ? e : e.pathname,
                search: "",
                hash: ""
            }, "string" === typeof t ? p(t) : t, {
                state: n,
                key: t && t.key || r || Math.random().toString(36).substr(2, 8)
            })
        }

        function h(e) {
            let {
                pathname: t = "/",
                search: n = "",
                hash: r = ""
            } = e;
            return n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n), r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r), t
        }

        function p(e) {
            let t = {};
            if (e) {
                let n = e.indexOf("#");
                n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
                let r = e.indexOf("?");
                r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
            }
            return t
        }

        function m(e, t, n, r) {
            void 0 === r && (r = {});
            let {
                window: i = document.defaultView,
                v5Compat: o = !1
            } = r, c = i.history, p = a.Pop, m = null, g = v();

            function v() {
                return (c.state || {
                    idx: null
                }).idx
            }

            function y() {
                p = a.Pop;
                let e = v(),
                    t = null == e ? null : e - g;
                g = e, m && m({
                    action: p,
                    location: w.location,
                    delta: t
                })
            }

            function b(e) {
                let t = "null" !== i.location.origin ? i.location.origin : i.location.href,
                    n = "string" === typeof e ? e : h(e);
                return u(t, "No window.location.(origin|href) available to create URL for href: " + n), new URL(n, t)
            }
            null == g && (g = 0, c.replaceState(s({}, c.state, {
                idx: g
            }), ""));
            let w = {
                get action() {
                    return p
                },
                get location() {
                    return e(i, c)
                },
                listen(e) {
                    if (m) throw new Error("A history only accepts one active listener");
                    return i.addEventListener(l, y), m = e, () => {
                        i.removeEventListener(l, y), m = null
                    }
                },
                createHref: e => t(i, e),
                createURL: b,
                encodeLocation(e) {
                    let t = b(e);
                    return {
                        pathname: t.pathname,
                        search: t.search,
                        hash: t.hash
                    }
                },
                push: function(e, t) {
                    p = a.Push;
                    let r = f(w.location, e, t);
                    n && n(r, e), g = v() + 1;
                    let s = d(r, g),
                        l = w.createHref(r);
                    try {
                        c.pushState(s, "", l)
                    } catch (u) {
                        if (u instanceof DOMException && "DataCloneError" === u.name) throw u;
                        i.location.assign(l)
                    }
                    o && m && m({
                        action: p,
                        location: w.location,
                        delta: 1
                    })
                },
                replace: function(e, t) {
                    p = a.Replace;
                    let r = f(w.location, e, t);
                    n && n(r, e), g = v();
                    let i = d(r, g),
                        s = w.createHref(r);
                    c.replaceState(i, "", s), o && m && m({
                        action: p,
                        location: w.location,
                        delta: 0
                    })
                },
                go: e => c.go(e)
            };
            return w
        }
        var g;
        ! function(e) {
            e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
        }(g || (g = {}));
        new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

        function v(e, t, n) {
            void 0 === n && (n = "/");
            let r = A(("string" === typeof t ? p(t) : t).pathname || "/", n);
            if (null == r) return null;
            let a = y(e);
            ! function(e) {
                e.sort(((e, t) => e.score !== t.score ? t.score - e.score : function(e, t) {
                    let n = e.length === t.length && e.slice(0, -1).every(((e, n) => e === t[n]));
                    return n ? e[e.length - 1] - t[t.length - 1] : 0
                }(e.routesMeta.map((e => e.childrenIndex)), t.routesMeta.map((e => e.childrenIndex)))))
            }(a);
            let i = null;
            for (let o = 0; null == i && o < a.length; ++o) i = T(a[o], N(r));
            return i
        }

        function y(e, t, n, r) {
            void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = "");
            let a = (e, a, i) => {
                let o = {
                    relativePath: void 0 === i ? e.path || "" : i,
                    caseSensitive: !0 === e.caseSensitive,
                    childrenIndex: a,
                    route: e
                };
                o.relativePath.startsWith("/") && (u(o.relativePath.startsWith(r), 'Absolute route path "' + o.relativePath + '" nested under path "' + r + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), o.relativePath = o.relativePath.slice(r.length));
                let s = L([r, o.relativePath]),
                    l = n.concat(o);
                e.children && e.children.length > 0 && (u(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + s + '".'), y(e.children, t, l, s)), (null != e.path || e.index) && t.push({
                    path: s,
                    score: P(s, e.index),
                    routesMeta: l
                })
            };
            return e.forEach(((e, t) => {
                var n;
                if ("" !== e.path && null != (n = e.path) && n.includes("?"))
                    for (let r of b(e.path)) a(e, t, r);
                else a(e, t)
            })), t
        }

        function b(e) {
            let t = e.split("/");
            if (0 === t.length) return [];
            let [n, ...r] = t, a = n.endsWith("?"), i = n.replace(/\?$/, "");
            if (0 === r.length) return a ? [i, ""] : [i];
            let o = b(r.join("/")),
                s = [];
            return s.push(...o.map((e => "" === e ? i : [i, e].join("/")))), a && s.push(...o), s.map((t => e.startsWith("/") && "" === t ? "/" : t))
        }
        const w = /^:\w+$/,
            x = 3,
            S = 2,
            k = 1,
            C = 10,
            j = -2,
            E = e => "*" === e;

        function P(e, t) {
            let n = e.split("/"),
                r = n.length;
            return n.some(E) && (r += j), t && (r += S), n.filter((e => !E(e))).reduce(((e, t) => e + (w.test(t) ? x : "" === t ? k : C)), r)
        }

        function T(e, t) {
            let {
                routesMeta: n
            } = e, r = {}, a = "/", i = [];
            for (let o = 0; o < n.length; ++o) {
                let e = n[o],
                    s = o === n.length - 1,
                    l = "/" === a ? t : t.slice(a.length) || "/",
                    u = _({
                        path: e.relativePath,
                        caseSensitive: e.caseSensitive,
                        end: s
                    }, l);
                if (!u) return null;
                Object.assign(r, u.params);
                let c = e.route;
                i.push({
                    params: r,
                    pathname: L([a, u.pathname]),
                    pathnameBase: z(L([a, u.pathnameBase])),
                    route: c
                }), "/" !== u.pathnameBase && (a = L([a, u.pathnameBase]))
            }
            return i
        }

        function _(e, t) {
            "string" === typeof e && (e = {
                path: e,
                caseSensitive: !1,
                end: !0
            });
            let [n, r] = function(e, t, n) {
                void 0 === t && (t = !1);
                void 0 === n && (n = !0);
                c("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
                let r = [],
                    a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:(\w+)(\?)?/g, ((e, t, n) => (r.push({
                        paramName: t,
                        isOptional: null != n
                    }), n ? "/?([^\\/]+)?" : "/([^\\/]+)")));
                e.endsWith("*") ? (r.push({
                    paramName: "*"
                }), a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? a += "\\/*$" : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
                let i = new RegExp(a, t ? void 0 : "i");
                return [i, r]
            }(e.path, e.caseSensitive, e.end), a = t.match(n);
            if (!a) return null;
            let i = a[0],
                o = i.replace(/(.)\/+$/, "$1"),
                s = a.slice(1);
            return {
                params: r.reduce(((e, t, n) => {
                    let {
                        paramName: r,
                        isOptional: a
                    } = t;
                    if ("*" === r) {
                        let e = s[n] || "";
                        o = i.slice(0, i.length - e.length).replace(/(.)\/+$/, "$1")
                    }
                    const l = s[n];
                    return e[r] = a && !l ? void 0 : function(e, t) {
                        try {
                            return decodeURIComponent(e)
                        } catch (n) {
                            return c(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + n + ")."), e
                        }
                    }(l || "", r), e
                }), {}),
                pathname: i,
                pathnameBase: o,
                pattern: e
            }
        }

        function N(e) {
            try {
                return decodeURI(e)
            } catch (t) {
                return c(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e
            }
        }

        function A(e, t) {
            if ("/" === t) return e;
            if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
            let n = t.endsWith("/") ? t.length - 1 : t.length,
                r = e.charAt(n);
            return r && "/" !== r ? null : e.slice(n) || "/"
        }

        function I(e, t, n, r) {
            return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the `to." + n + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        }

        function R(e) {
            return e.filter(((e, t) => 0 === t || e.route.path && e.route.path.length > 0))
        }

        function O(e) {
            return R(e).map(((t, n) => n === e.length - 1 ? t.pathname : t.pathnameBase))
        }

        function D(e, t, n, r) {
            let a;
            void 0 === r && (r = !1), "string" === typeof e ? a = p(e) : (a = s({}, e), u(!a.pathname || !a.pathname.includes("?"), I("?", "pathname", "search", a)), u(!a.pathname || !a.pathname.includes("#"), I("#", "pathname", "hash", a)), u(!a.search || !a.search.includes("#"), I("#", "search", "hash", a)));
            let i, o = "" === e || "" === a.pathname,
                l = o ? "/" : a.pathname;
            if (null == l) i = n;
            else if (r) {
                let e = t[t.length - 1].replace(/^\//, "").split("/");
                if (l.startsWith("..")) {
                    let t = l.split("/");
                    for (;
                        ".." === t[0];) t.shift(), e.pop();
                    a.pathname = t.join("/")
                }
                i = "/" + e.join("/")
            } else {
                let e = t.length - 1;
                if (l.startsWith("..")) {
                    let t = l.split("/");
                    for (;
                        ".." === t[0];) t.shift(), e -= 1;
                    a.pathname = t.join("/")
                }
                i = e >= 0 ? t[e] : "/"
            }
            let c = function(e, t) {
                    void 0 === t && (t = "/");
                    let {
                        pathname: n,
                        search: r = "",
                        hash: a = ""
                    } = "string" === typeof e ? p(e) : e, i = n ? n.startsWith("/") ? n : function(e, t) {
                        let n = t.replace(/\/+$/, "").split("/");
                        return e.split("/").forEach((e => {
                            ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e)
                        })), n.length > 1 ? n.join("/") : "/"
                    }(n, t) : t;
                    return {
                        pathname: i,
                        search: F(r),
                        hash: M(a)
                    }
                }(a, i),
                d = l && "/" !== l && l.endsWith("/"),
                f = (o || "." === l) && n.endsWith("/");
            return c.pathname.endsWith("/") || !d && !f || (c.pathname += "/"), c
        }
        const L = e => e.join("/").replace(/\/\/+/g, "/"),
            z = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
            F = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
            M = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "";
        Error;

        function G(e) {
            return null != e && "number" === typeof e.status && "string" === typeof e.statusText && "boolean" === typeof e.internal && "data" in e
        }
        const U = ["post", "put", "patch", "delete"],
            H = (new Set(U), ["get", ...U]);
        new Set(H), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
        Symbol("deferred");

        function W() {
            return W = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, W.apply(this, arguments)
        }
        const B = e.createContext(null);
        const $ = e.createContext(null);
        const V = e.createContext(null);
        const q = e.createContext(null);
        const K = e.createContext({
            outlet: null,
            matches: [],
            isDataRoute: !1
        });
        const Q = e.createContext(null);

        function Y() {
            return null != e.useContext(q)
        }

        function X() {
            return Y() || u(!1), e.useContext(q).location
        }

        function J(t) {
            e.useContext(V).static || e.useLayoutEffect(t)
        }

        function Z() {
            let {
                isDataRoute: t
            } = e.useContext(K);
            return t ? function() {
                let {
                    router: t
                } = ue(se.UseNavigateStable), n = de(le.UseNavigateStable), r = e.useRef(!1);
                return J((() => {
                    r.current = !0
                })), e.useCallback((function(e, a) {
                    void 0 === a && (a = {}), r.current && ("number" === typeof e ? t.navigate(e) : t.navigate(e, W({
                        fromRouteId: n
                    }, a)))
                }), [t, n])
            }() : function() {
                Y() || u(!1);
                let t = e.useContext(B),
                    {
                        basename: n,
                        navigator: r
                    } = e.useContext(V),
                    {
                        matches: a
                    } = e.useContext(K),
                    {
                        pathname: i
                    } = X(),
                    o = JSON.stringify(O(a)),
                    s = e.useRef(!1);
                return J((() => {
                    s.current = !0
                })), e.useCallback((function(e, a) {
                    if (void 0 === a && (a = {}), !s.current) return;
                    if ("number" === typeof e) return void r.go(e);
                    let l = D(e, JSON.parse(o), i, "path" === a.relative);
                    null == t && "/" !== n && (l.pathname = "/" === l.pathname ? n : L([n, l.pathname])), (a.replace ? r.replace : r.push)(l, a.state, a)
                }), [n, r, o, i, t])
            }()
        }

        function ee(t, n) {
            let {
                relative: r
            } = void 0 === n ? {} : n, {
                matches: a
            } = e.useContext(K), {
                pathname: i
            } = X(), o = JSON.stringify(O(a));
            return e.useMemo((() => D(t, JSON.parse(o), i, "path" === r)), [t, o, i, r])
        }

        function te(t, n, r) {
            Y() || u(!1);
            let {
                navigator: i
            } = e.useContext(V), {
                matches: o
            } = e.useContext(K), s = o[o.length - 1], l = s ? s.params : {}, c = (s && s.pathname, s ? s.pathnameBase : "/");
            s && s.route;
            let d, f = X();
            if (n) {
                var h;
                let e = "string" === typeof n ? p(n) : n;
                "/" === c || (null == (h = e.pathname) ? void 0 : h.startsWith(c)) || u(!1), d = e
            } else d = f;
            let m = d.pathname || "/",
                g = v(t, {
                    pathname: "/" === c ? m : m.slice(c.length) || "/"
                });
            let y = oe(g && g.map((e => Object.assign({}, e, {
                params: Object.assign({}, l, e.params),
                pathname: L([c, i.encodeLocation ? i.encodeLocation(e.pathname).pathname : e.pathname]),
                pathnameBase: "/" === e.pathnameBase ? c : L([c, i.encodeLocation ? i.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
            }))), o, r);
            return n && y ? e.createElement(q.Provider, {
                value: {
                    location: W({
                        pathname: "/",
                        search: "",
                        hash: "",
                        state: null,
                        key: "default"
                    }, d),
                    navigationType: a.Pop
                }
            }, y) : y
        }

        function ne() {
            let t = function() {
                    var t;
                    let n = e.useContext(Q),
                        r = ce(le.UseRouteError),
                        a = de(le.UseRouteError);
                    if (n) return n;
                    return null == (t = r.errors) ? void 0 : t[a]
                }(),
                n = G(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t),
                r = t instanceof Error ? t.stack : null,
                a = "rgba(200,200,200, 0.5)",
                i = {
                    padding: "0.5rem",
                    backgroundColor: a
                };
            return e.createElement(e.Fragment, null, e.createElement("h2", null, "Unexpected Application Error!"), e.createElement("h3", {
                style: {
                    fontStyle: "italic"
                }
            }, n), r ? e.createElement("pre", {
                style: i
            }, r) : null, null)
        }
        const re = e.createElement(ne, null);
        class ae extends e.Component {
            constructor(e) {
                super(e), this.state = {
                    location: e.location,
                    revalidation: e.revalidation,
                    error: e.error
                }
            }
            static getDerivedStateFromError(e) {
                return {
                    error: e
                }
            }
            static getDerivedStateFromProps(e, t) {
                return t.location !== e.location || "idle" !== t.revalidation && "idle" === e.revalidation ? {
                    error: e.error,
                    location: e.location,
                    revalidation: e.revalidation
                } : {
                    error: e.error || t.error,
                    location: t.location,
                    revalidation: e.revalidation || t.revalidation
                }
            }
            componentDidCatch(e, t) {
                console.error("React Router caught the following error during render", e, t)
            }
            render() {
                return this.state.error ? e.createElement(K.Provider, {
                    value: this.props.routeContext
                }, e.createElement(Q.Provider, {
                    value: this.state.error,
                    children: this.props.component
                })) : this.props.children
            }
        }

        function ie(t) {
            let {
                routeContext: n,
                match: r,
                children: a
            } = t, i = e.useContext(B);
            return i && i.static && i.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = r.route.id), e.createElement(K.Provider, {
                value: n
            }, a)
        }

        function oe(t, n, r) {
            var a;
            if (void 0 === n && (n = []), void 0 === r && (r = null), null == t) {
                var i;
                if (null == (i = r) || !i.errors) return null;
                t = r.matches
            }
            let o = t,
                s = null == (a = r) ? void 0 : a.errors;
            if (null != s) {
                let e = o.findIndex((e => e.route.id && (null == s ? void 0 : s[e.route.id])));
                e >= 0 || u(!1), o = o.slice(0, Math.min(o.length, e + 1))
            }
            return o.reduceRight(((t, a, i) => {
                let l = a.route.id ? null == s ? void 0 : s[a.route.id] : null,
                    u = null;
                r && (u = a.route.errorElement || re);
                let c = n.concat(o.slice(0, i + 1)),
                    d = () => {
                        let n;
                        return n = l ? u : a.route.Component ? e.createElement(a.route.Component, null) : a.route.element ? a.route.element : t, e.createElement(ie, {
                            match: a,
                            routeContext: {
                                outlet: t,
                                matches: c,
                                isDataRoute: null != r
                            },
                            children: n
                        })
                    };
                return r && (a.route.ErrorBoundary || a.route.errorElement || 0 === i) ? e.createElement(ae, {
                    location: r.location,
                    revalidation: r.revalidation,
                    component: u,
                    error: l,
                    children: d(),
                    routeContext: {
                        outlet: null,
                        matches: c,
                        isDataRoute: !0
                    }
                }) : d()
            }), null)
        }
        var se = function(e) {
                return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
            }(se || {}),
            le = function(e) {
                return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
            }(le || {});

        function ue(t) {
            let n = e.useContext(B);
            return n || u(!1), n
        }

        function ce(t) {
            let n = e.useContext($);
            return n || u(!1), n
        }

        function de(t) {
            let n = function(t) {
                    let n = e.useContext(K);
                    return n || u(!1), n
                }(),
                r = n.matches[n.matches.length - 1];
            return r.route.id || u(!1), r.route.id
        }
        t.startTransition;

        function fe(e) {
            u(!1)
        }

        function he(t) {
            let {
                basename: n = "/",
                children: r = null,
                location: i,
                navigationType: o = a.Pop,
                navigator: s,
                static: l = !1
            } = t;
            Y() && u(!1);
            let c = n.replace(/^\/*/, "/"),
                d = e.useMemo((() => ({
                    basename: c,
                    navigator: s,
                    static: l
                })), [c, s, l]);
            "string" === typeof i && (i = p(i));
            let {
                pathname: f = "/",
                search: h = "",
                hash: m = "",
                state: g = null,
                key: v = "default"
            } = i, y = e.useMemo((() => {
                let e = A(f, c);
                return null == e ? null : {
                    location: {
                        pathname: e,
                        search: h,
                        hash: m,
                        state: g,
                        key: v
                    },
                    navigationType: o
                }
            }), [c, f, h, m, g, v, o]);
            return null == y ? null : e.createElement(V.Provider, {
                value: d
            }, e.createElement(q.Provider, {
                children: r,
                value: y
            }))
        }

        function pe(e) {
            let {
                children: t,
                location: n
            } = e;
            return te(me(t), n)
        }
        new Promise((() => {}));
        e.Component;

        function me(t, n) {
            void 0 === n && (n = []);
            let r = [];
            return e.Children.forEach(t, ((t, a) => {
                if (!e.isValidElement(t)) return;
                let i = [...n, a];
                if (t.type === e.Fragment) return void r.push.apply(r, me(t.props.children, i));
                t.type !== fe && u(!1), t.props.index && t.props.children && u(!1);
                let o = {
                    id: t.props.id || i.join("-"),
                    caseSensitive: t.props.caseSensitive,
                    element: t.props.element,
                    Component: t.props.Component,
                    index: t.props.index,
                    path: t.props.path,
                    loader: t.props.loader,
                    action: t.props.action,
                    errorElement: t.props.errorElement,
                    ErrorBoundary: t.props.ErrorBoundary,
                    hasErrorBoundary: null != t.props.ErrorBoundary || null != t.props.errorElement,
                    shouldRevalidate: t.props.shouldRevalidate,
                    handle: t.props.handle,
                    lazy: t.props.lazy
                };
                t.props.children && (o.children = me(t.props.children, i)), r.push(o)
            })), r
        }

        function ge() {
            return ge = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, ge.apply(this, arguments)
        }

        function ve(e, t) {
            if (null == e) return {};
            var n, r, a = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a
        }
        new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
        const ye = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
            be = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"];
        const we = e.createContext({
            isTransitioning: !1
        });
        new Map;
        const xe = t.startTransition;
        o.flushSync;

        function Se(t) {
            let {
                basename: n,
                children: r,
                future: a,
                window: i
            } = t, o = e.useRef();
            var s;
            null == o.current && (o.current = (void 0 === (s = {
                window: i,
                v5Compat: !0
            }) && (s = {}), m((function(e, t) {
                let {
                    pathname: n,
                    search: r,
                    hash: a
                } = e.location;
                return f("", {
                    pathname: n,
                    search: r,
                    hash: a
                }, t.state && t.state.usr || null, t.state && t.state.key || "default")
            }), (function(e, t) {
                return "string" === typeof t ? t : h(t)
            }), null, s)));
            let l = o.current,
                [u, c] = e.useState({
                    action: l.action,
                    location: l.location
                }),
                {
                    v7_startTransition: d
                } = a || {},
                p = e.useCallback((e => {
                    d && xe ? xe((() => c(e))) : c(e)
                }), [c, d]);
            return e.useLayoutEffect((() => l.listen(p)), [l, p]), e.createElement(he, {
                basename: n,
                children: r,
                location: u.location,
                navigationType: u.action,
                navigator: l
            })
        }
        const ke = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement,
            Ce = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
            je = e.forwardRef((function(t, n) {
                let r, {
                        onClick: a,
                        relative: i,
                        reloadDocument: o,
                        replace: s,
                        state: l,
                        target: c,
                        to: d,
                        preventScrollReset: f,
                        unstable_viewTransition: p
                    } = t,
                    m = ve(t, ye),
                    {
                        basename: g
                    } = e.useContext(V),
                    v = !1;
                if ("string" === typeof d && Ce.test(d) && (r = d, ke)) try {
                    let e = new URL(window.location.href),
                        t = d.startsWith("//") ? new URL(e.protocol + d) : new URL(d),
                        n = A(t.pathname, g);
                    t.origin === e.origin && null != n ? d = n + t.search + t.hash : v = !0
                } catch (w) {}
                let y = function(t, n) {
                        let {
                            relative: r
                        } = void 0 === n ? {} : n;
                        Y() || u(!1);
                        let {
                            basename: a,
                            navigator: i
                        } = e.useContext(V), {
                            hash: o,
                            pathname: s,
                            search: l
                        } = ee(t, {
                            relative: r
                        }), c = s;
                        return "/" !== a && (c = "/" === s ? a : L([a, s])), i.createHref({
                            pathname: c,
                            search: l,
                            hash: o
                        })
                    }(d, {
                        relative: i
                    }),
                    b = function(t, n) {
                        let {
                            target: r,
                            replace: a,
                            state: i,
                            preventScrollReset: o,
                            relative: s,
                            unstable_viewTransition: l
                        } = void 0 === n ? {} : n, u = Z(), c = X(), d = ee(t, {
                            relative: s
                        });
                        return e.useCallback((e => {
                            if (function(e, t) {
                                    return 0 === e.button && (!t || "_self" === t) && ! function(e) {
                                        return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                                    }(e)
                                }(e, r)) {
                                e.preventDefault();
                                let n = void 0 !== a ? a : h(c) === h(d);
                                u(t, {
                                    replace: n,
                                    state: i,
                                    preventScrollReset: o,
                                    relative: s,
                                    unstable_viewTransition: l
                                })
                            }
                        }), [c, u, d, a, i, r, t, o, s, l])
                    }(d, {
                        replace: s,
                        state: l,
                        target: c,
                        preventScrollReset: f,
                        relative: i,
                        unstable_viewTransition: p
                    });
                return e.createElement("a", ge({}, m, {
                    href: r || y,
                    onClick: v || o ? a : function(e) {
                        a && a(e), e.defaultPrevented || b(e)
                    },
                    ref: n,
                    target: c
                }))
            }));
        const Ee = e.forwardRef((function(t, n) {
            let {
                "aria-current": r = "page",
                caseSensitive: a = !1,
                className: i = "",
                end: o = !1,
                style: s,
                to: l,
                unstable_viewTransition: c,
                children: d
            } = t, f = ve(t, be), h = ee(l, {
                relative: f.relative
            }), p = X(), m = e.useContext($), {
                navigator: g
            } = e.useContext(V), v = null != m && function(t, n) {
                void 0 === n && (n = {});
                let r = e.useContext(we);
                null == r && u(!1);
                let {
                    basename: a
                } = _e(Pe.useViewTransitionState), i = ee(t, {
                    relative: n.relative
                });
                if (!r.isTransitioning) return !1;
                let o = A(r.currentLocation.pathname, a) || r.currentLocation.pathname,
                    s = A(r.nextLocation.pathname, a) || r.nextLocation.pathname;
                return null != _(i.pathname, s) || null != _(i.pathname, o)
            }(h) && !0 === c, y = g.encodeLocation ? g.encodeLocation(h).pathname : h.pathname, b = p.pathname, w = m && m.navigation && m.navigation.location ? m.navigation.location.pathname : null;
            a || (b = b.toLowerCase(), w = w ? w.toLowerCase() : null, y = y.toLowerCase());
            const x = "/" !== y && y.endsWith("/") ? y.length - 1 : y.length;
            let S, k = b === y || !o && b.startsWith(y) && "/" === b.charAt(x),
                C = null != w && (w === y || !o && w.startsWith(y) && "/" === w.charAt(y.length)),
                j = {
                    isActive: k,
                    isPending: C,
                    isTransitioning: v
                },
                E = k ? r : void 0;
            S = "function" === typeof i ? i(j) : [i, k ? "active" : null, C ? "pending" : null, v ? "transitioning" : null].filter(Boolean).join(" ");
            let P = "function" === typeof s ? s(j) : s;
            return e.createElement(je, ge({}, f, {
                "aria-current": E,
                className: S,
                ref: n,
                style: P,
                to: l,
                unstable_viewTransition: c
            }), "function" === typeof d ? d(j) : d)
        }));
        var Pe, Te;

        function _e(t) {
            let n = e.useContext(B);
            return n || u(!1), n
        }(function(e) {
            e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
        })(Pe || (Pe = {})),
        function(e) {
            e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
        }(Te || (Te = {}));
        var Ne = n(184);
        const Ae = function() {
            return (0, Ne.jsxs)("div", {
                className: "sidebar",
                children: [(0, Ne.jsxs)("div", {
                    className: "header__logo-box",
                    children: [(0, Ne.jsx)("h1", {
                        children: "gs meter"
                    }), (0, Ne.jsx)("img", {
                        src: "/insight-iitb-logo.png",
                        alt: "insight",
                        className: "logo"
                    })]
                }), (0, Ne.jsxs)("ul", {
                    className: "navigation-menu",
                    children: [(0, Ne.jsx)("li", {
                        children: (0, Ne.jsx)(Ee, {
                            to: "/",
                            className: "navigation-links",
                            activeclassname: "active",
                            children: "Introduction"
                        })
                    }), (0, Ne.jsx)("li", {
                        children: (0, Ne.jsx)(Ee, {
                            to: "/acadsug",
                            className: "navigation-links",
                            activeclassname: "active",
                            children: "Acads UG"
                        })
                    }), (0, Ne.jsx)("li", {
                        children: (0, Ne.jsx)(Ee, {
                            to: "/acadspg",
                            className: "navigation-links",
                            activeclassname: "active",
                            children: "Acads PG"
                        })
                    }), (0, Ne.jsx)("li", {
                        children: (0, Ne.jsx)(Ee, {
                            to: "/hostel",
                            className: "navigation-links",
                            activeclassname: "active",
                            children: "Hostel"
                        })
                    }), (0, Ne.jsx)("li", {
                        children: (0, Ne.jsx)(Ee, {
                            to: "/sports",
                            className: "navigation-links",
                            activeclassname: "active",
                            children: "Sports"
                        })
                    }), (0, Ne.jsx)("li", {
                        children: (0, Ne.jsx)(Ee, {
                            to: "/technical",
                            className: "navigation-links",
                            activeclassname: "active",
                            children: "Technical"
                        })
                    }), (0, Ne.jsx)("li", {
                        children: (0, Ne.jsx)(Ee, {
                            to: "/culturals",
                            className: "navigation-links",
                            activeclassname: "active",
                            children: "Culturals"
                        })
                    })]
                })]
            })
        };
        const Ie = function() {
            return (0, Ne.jsx)(Ne.Fragment, {
                children: (0, Ne.jsx)("div", {
                    className: "container",
                    children: (0, Ne.jsxs)("footer", {
                        className: "d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top",
                        children: [(0, Ne.jsxs)("div", {
                            className: "col-md-4 d-flex align-items-center",
                            children: [(0, Ne.jsx)("a", {
                                href: "/",
                                className: "mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1",
                                children: (0, Ne.jsx)("svg", {
                                    className: "bi",
                                    width: "30",
                                    height: "24"
                                })
                            }), (0, Ne.jsx)("span", {
                                className: "text-muted",
                                children: "\xa9 2024 Insight, IIT Bombay"
                            })]
                        }), (0, Ne.jsxs)("ul", {
                            className: "nav col-md-4 justify-content-end list-unstyled d-flex",
                            children: [(0, Ne.jsx)("li", {
                                className: "ms-3",
                                children: (0, Ne.jsx)("a", {
                                    className: "text-muted",
                                    href: "https://twitter.com/insightiitb",
                                    target: "_blank",
                                    children: (0, Ne.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "16",
                                        height: "16",
                                        fill: "currentColor",
                                        className: "bi bi-twitter",
                                        viewBox: "0 0 16 16",
                                        children: (0, Ne.jsx)("path", {
                                            d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15"
                                        })
                                    })
                                })
                            }), (0, Ne.jsx)("li", {
                                className: "ms-3",
                                children: (0, Ne.jsx)("a", {
                                    className: "text-muted",
                                    href: "https://www.instagram.com/insight.iitb/",
                                    target: "_blank",
                                    children: (0, Ne.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "16",
                                        height: "16",
                                        fill: "currentColor",
                                        className: "bi bi-instagram",
                                        viewBox: "0 0 16 16",
                                        children: (0, Ne.jsx)("path", {
                                            d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                                        })
                                    })
                                })
                            }), (0, Ne.jsx)("li", {
                                className: "ms-3",
                                children: (0, Ne.jsx)("a", {
                                    className: "text-muted",
                                    href: "https://www.facebook.com/insight.iitbombay/",
                                    target: "_blank",
                                    children: (0, Ne.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "16",
                                        height: "16",
                                        fill: "currentColor",
                                        className: "bi bi-facebook",
                                        viewBox: "0 0 16 16",
                                        children: (0, Ne.jsx)("path", {
                                            d: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
                                        })
                                    })
                                })
                            })]
                        })]
                    })
                })
            })
        };
        const Re = function() {
            return (0, Ne.jsx)("nav", {
                className: "navbar navbar-expand-lg bg-light fixed-top",
                children: (0, Ne.jsxs)("div", {
                    className: "container-fluid",
                    children: [(0, Ne.jsx)("a", {
                        className: "navbar-brand",
                        href: "/",
                        children: (0, Ne.jsx)("h1", {
                            className: "nav-heading",
                            children: "Gs meter"
                        })
                    }), (0, Ne.jsx)("button", {
                        className: "navbar-toggler",
                        type: "button",
                        "data-bs-toggle": "collapse",
                        "data-bs-target": "#navbarSupportedContent",
                        "aria-controls": "navbarSupportedContent",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation",
                        children: (0, Ne.jsx)("span", {
                            className: "navbar-toggler-icon"
                        })
                    }), (0, Ne.jsx)("div", {
                        className: "collapse navbar-collapse",
                        id: "navbarSupportedContent",
                        children: (0, Ne.jsxs)("ul", {
                            className: "navbar-nav me-auto mb-2 mb-lg-0",
                            children: [(0, Ne.jsx)("li", {
                                className: "nav-item",
                                children: (0, Ne.jsx)(Ee, {
                                    to: "/",
                                    className: "nav-link",
                                    activeclassname: "active",
                                    children: "Home"
                                })
                            }), (0, Ne.jsx)("li", {
                                className: "nav-item",
                                children: (0, Ne.jsx)(Ee, {
                                    to: "/acadsug",
                                    className: "nav-link",
                                    activeclassname: "active",
                                    children: "Acads UG"
                                })
                            }), (0, Ne.jsx)("li", {
                                className: "nav-item",
                                children: (0, Ne.jsx)(Ee, {
                                    to: "/acadspg",
                                    className: "nav-link",
                                    activeclassname: "active",
                                    children: "Acads PG"
                                })
                            }), (0, Ne.jsx)("li", {
                                className: "nav-item",
                                children: (0, Ne.jsx)(Ee, {
                                    to: "/hostel",
                                    className: "nav-link",
                                    activeclassname: "active",
                                    children: "Hostel"
                                })
                            }), (0, Ne.jsx)("li", {
                                className: "nav-item",
                                children: (0, Ne.jsx)(Ee, {
                                    to: "/sports",
                                    className: "nav-link",
                                    activeclassname: "active",
                                    children: "Sports"
                                })
                            }), (0, Ne.jsx)("li", {
                                className: "nav-item",
                                children: (0, Ne.jsx)(Ee, {
                                    to: "/technical",
                                    className: "nav-link",
                                    activeclassname: "active",
                                    children: "Technical"
                                })
                            }), (0, Ne.jsx)("li", {
                                className: "nav-item",
                                children: (0, Ne.jsx)(Ee, {
                                    to: "/culturals",
                                    className: "nav-link",
                                    activeclassname: "active",
                                    children: "Culturals"
                                })
                            })]
                        })
                    })]
                })
            })
        };

        function Oe(e, t) {
            return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        var De = function() {
            return De = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            }, De.apply(this, arguments)
        };
        Object.create;

        function Le(e, t, n) {
            if (n || 2 === arguments.length)
                for (var r, a = 0, i = t.length; a < i; a++) !r && a in t || (r || (r = Array.prototype.slice.call(t, 0, a)), r[a] = t[a]);
            return e.concat(r || Array.prototype.slice.call(t))
        }
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var ze = n(613),
            Fe = n.n(ze),
            Me = "-ms-",
            Ge = "-moz-",
            Ue = "-webkit-",
            He = "comm",
            We = "rule",
            Be = "decl",
            $e = "@import",
            Ve = "@keyframes",
            qe = "@layer",
            Ke = Math.abs,
            Qe = String.fromCharCode,
            Ye = Object.assign;

        function Xe(e) {
            return e.trim()
        }

        function Je(e, t) {
            return (e = t.exec(e)) ? e[0] : e
        }

        function Ze(e, t, n) {
            return e.replace(t, n)
        }

        function et(e, t) {
            return e.indexOf(t)
        }

        function tt(e, t) {
            return 0 | e.charCodeAt(t)
        }

        function nt(e, t, n) {
            return e.slice(t, n)
        }

        function rt(e) {
            return e.length
        }

        function at(e) {
            return e.length
        }

        function it(e, t) {
            return t.push(e), e
        }

        function ot(e, t) {
            return e.filter((function(e) {
                return !Je(e, t)
            }))
        }
        var st = 1,
            lt = 1,
            ut = 0,
            ct = 0,
            dt = 0,
            ft = "";

        function ht(e, t, n, r, a, i, o, s) {
            return {
                value: e,
                root: t,
                parent: n,
                type: r,
                props: a,
                children: i,
                line: st,
                column: lt,
                length: o,
                return: "",
                siblings: s
            }
        }

        function pt(e, t) {
            return Ye(ht("", null, null, "", null, null, 0, e.siblings), e, {
                length: -e.length
            }, t)
        }

        function mt(e) {
            for (; e.root;) e = pt(e.root, {
                children: [e]
            });
            it(e, e.siblings)
        }

        function gt() {
            return dt = ct > 0 ? tt(ft, --ct) : 0, lt--, 10 === dt && (lt = 1, st--), dt
        }

        function vt() {
            return dt = ct < ut ? tt(ft, ct++) : 0, lt++, 10 === dt && (lt = 1, st++), dt
        }

        function yt() {
            return tt(ft, ct)
        }

        function bt() {
            return ct
        }

        function wt(e, t) {
            return nt(ft, e, t)
        }

        function xt(e) {
            switch (e) {
                case 0:
                case 9:
                case 10:
                case 13:
                case 32:
                    return 5;
                case 33:
                case 43:
                case 44:
                case 47:
                case 62:
                case 64:
                case 126:
                case 59:
                case 123:
                case 125:
                    return 4;
                case 58:
                    return 3;
                case 34:
                case 39:
                case 40:
                case 91:
                    return 2;
                case 41:
                case 93:
                    return 1
            }
            return 0
        }

        function St(e) {
            return st = lt = 1, ut = rt(ft = e), ct = 0, []
        }

        function kt(e) {
            return ft = "", e
        }

        function Ct(e) {
            return Xe(wt(ct - 1, Pt(91 === e ? e + 2 : 40 === e ? e + 1 : e)))
        }

        function jt(e) {
            for (;
                (dt = yt()) && dt < 33;) vt();
            return xt(e) > 2 || xt(dt) > 3 ? "" : " "
        }

        function Et(e, t) {
            for (; --t && vt() && !(dt < 48 || dt > 102 || dt > 57 && dt < 65 || dt > 70 && dt < 97););
            return wt(e, bt() + (t < 6 && 32 == yt() && 32 == vt()))
        }

        function Pt(e) {
            for (; vt();) switch (dt) {
                case e:
                    return ct;
                case 34:
                case 39:
                    34 !== e && 39 !== e && Pt(dt);
                    break;
                case 40:
                    41 === e && Pt(e);
                    break;
                case 92:
                    vt()
            }
            return ct
        }

        function Tt(e, t) {
            for (; vt() && e + dt !== 57 && (e + dt !== 84 || 47 !== yt()););
            return "/*" + wt(t, ct - 1) + "*" + Qe(47 === e ? e : vt())
        }

        function _t(e) {
            for (; !xt(yt());) vt();
            return wt(e, ct)
        }

        function Nt(e, t) {
            for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
            return n
        }

        function At(e, t, n, r) {
            switch (e.type) {
                case qe:
                    if (e.children.length) break;
                case $e:
                case Be:
                    return e.return = e.return || e.value;
                case He:
                    return "";
                case Ve:
                    return e.return = e.value + "{" + Nt(e.children, r) + "}";
                case We:
                    if (!rt(e.value = e.props.join(","))) return ""
            }
            return rt(n = Nt(e.children, r)) ? e.return = e.value + "{" + n + "}" : ""
        }

        function It(e, t, n) {
            switch (function(e, t) {
                    return 45 ^ tt(e, 0) ? (((t << 2 ^ tt(e, 0)) << 2 ^ tt(e, 1)) << 2 ^ tt(e, 2)) << 2 ^ tt(e, 3) : 0
                }(e, t)) {
                case 5103:
                    return Ue + "print-" + e + e;
                case 5737:
                case 4201:
                case 3177:
                case 3433:
                case 1641:
                case 4457:
                case 2921:
                case 5572:
                case 6356:
                case 5844:
                case 3191:
                case 6645:
                case 3005:
                case 6391:
                case 5879:
                case 5623:
                case 6135:
                case 4599:
                case 4855:
                case 4215:
                case 6389:
                case 5109:
                case 5365:
                case 5621:
                case 3829:
                    return Ue + e + e;
                case 4789:
                    return Ge + e + e;
                case 5349:
                case 4246:
                case 4810:
                case 6968:
                case 2756:
                    return Ue + e + Ge + e + Me + e + e;
                case 5936:
                    switch (tt(e, t + 11)) {
                        case 114:
                            return Ue + e + Me + Ze(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
                        case 108:
                            return Ue + e + Me + Ze(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
                        case 45:
                            return Ue + e + Me + Ze(e, /[svh]\w+-[tblr]{2}/, "lr") + e
                    }
                case 6828:
                case 4268:
                case 2903:
                    return Ue + e + Me + e + e;
                case 6165:
                    return Ue + e + Me + "flex-" + e + e;
                case 5187:
                    return Ue + e + Ze(e, /(\w+).+(:[^]+)/, Ue + "box-$1$2" + Me + "flex-$1$2") + e;
                case 5443:
                    return Ue + e + Me + "flex-item-" + Ze(e, /flex-|-self/g, "") + (Je(e, /flex-|baseline/) ? "" : Me + "grid-row-" + Ze(e, /flex-|-self/g, "")) + e;
                case 4675:
                    return Ue + e + Me + "flex-line-pack" + Ze(e, /align-content|flex-|-self/g, "") + e;
                case 5548:
                    return Ue + e + Me + Ze(e, "shrink", "negative") + e;
                case 5292:
                    return Ue + e + Me + Ze(e, "basis", "preferred-size") + e;
                case 6060:
                    return Ue + "box-" + Ze(e, "-grow", "") + Ue + e + Me + Ze(e, "grow", "positive") + e;
                case 4554:
                    return Ue + Ze(e, /([^-])(transform)/g, "$1" + Ue + "$2") + e;
                case 6187:
                    return Ze(Ze(Ze(e, /(zoom-|grab)/, Ue + "$1"), /(image-set)/, Ue + "$1"), e, "") + e;
                case 5495:
                case 3959:
                    return Ze(e, /(image-set\([^]*)/, Ue + "$1$`$1");
                case 4968:
                    return Ze(Ze(e, /(.+:)(flex-)?(.*)/, Ue + "box-pack:$3" + Me + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Ue + e + e;
                case 4200:
                    if (!Je(e, /flex-|baseline/)) return Me + "grid-column-align" + nt(e, t) + e;
                    break;
                case 2592:
                case 3360:
                    return Me + Ze(e, "template-", "") + e;
                case 4384:
                case 3616:
                    return n && n.some((function(e, n) {
                        return t = n, Je(e.props, /grid-\w+-end/)
                    })) ? ~et(e + (n = n[t].value), "span") ? e : Me + Ze(e, "-start", "") + e + Me + "grid-row-span:" + (~et(n, "span") ? Je(n, /\d+/) : +Je(n, /\d+/) - +Je(e, /\d+/)) + ";" : Me + Ze(e, "-start", "") + e;
                case 4896:
                case 4128:
                    return n && n.some((function(e) {
                        return Je(e.props, /grid-\w+-start/)
                    })) ? e : Me + Ze(Ze(e, "-end", "-span"), "span ", "") + e;
                case 4095:
                case 3583:
                case 4068:
                case 2532:
                    return Ze(e, /(.+)-inline(.+)/, Ue + "$1$2") + e;
                case 8116:
                case 7059:
                case 5753:
                case 5535:
                case 5445:
                case 5701:
                case 4933:
                case 4677:
                case 5533:
                case 5789:
                case 5021:
                case 4765:
                    if (rt(e) - 1 - t > 6) switch (tt(e, t + 1)) {
                        case 109:
                            if (45 !== tt(e, t + 4)) break;
                        case 102:
                            return Ze(e, /(.+:)(.+)-([^]+)/, "$1" + Ue + "$2-$3$1" + Ge + (108 == tt(e, t + 3) ? "$3" : "$2-$3")) + e;
                        case 115:
                            return ~et(e, "stretch") ? It(Ze(e, "stretch", "fill-available"), t, n) + e : e
                    }
                    break;
                case 5152:
                case 5920:
                    return Ze(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, (function(t, n, r, a, i, o, s) {
                        return Me + n + ":" + r + s + (a ? Me + n + "-span:" + (i ? o : +o - +r) + s : "") + e
                    }));
                case 4949:
                    if (121 === tt(e, t + 6)) return Ze(e, ":", ":" + Ue) + e;
                    break;
                case 6444:
                    switch (tt(e, 45 === tt(e, 14) ? 18 : 11)) {
                        case 120:
                            return Ze(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + Ue + (45 === tt(e, 14) ? "inline-" : "") + "box$3$1" + Ue + "$2$3$1" + Me + "$2box$3") + e;
                        case 100:
                            return Ze(e, ":", ":" + Me) + e
                    }
                    break;
                case 5719:
                case 2647:
                case 2135:
                case 3927:
                case 2391:
                    return Ze(e, "scroll-", "scroll-snap-") + e
            }
            return e
        }

        function Rt(e, t, n, r) {
            if (e.length > -1 && !e.return) switch (e.type) {
                case Be:
                    return void(e.return = It(e.value, e.length, n));
                case Ve:
                    return Nt([pt(e, {
                        value: Ze(e.value, "@", "@" + Ue)
                    })], r);
                case We:
                    if (e.length) return function(e, t) {
                        return e.map(t).join("")
                    }(n = e.props, (function(t) {
                        switch (Je(t, r = /(::plac\w+|:read-\w+)/)) {
                            case ":read-only":
                            case ":read-write":
                                mt(pt(e, {
                                    props: [Ze(t, /:(read-\w+)/, ":" + Ge + "$1")]
                                })), mt(pt(e, {
                                    props: [t]
                                })), Ye(e, {
                                    props: ot(n, r)
                                });
                                break;
                            case "::placeholder":
                                mt(pt(e, {
                                    props: [Ze(t, /:(plac\w+)/, ":" + Ue + "input-$1")]
                                })), mt(pt(e, {
                                    props: [Ze(t, /:(plac\w+)/, ":" + Ge + "$1")]
                                })), mt(pt(e, {
                                    props: [Ze(t, /:(plac\w+)/, Me + "input-$1")]
                                })), mt(pt(e, {
                                    props: [t]
                                })), Ye(e, {
                                    props: ot(n, r)
                                })
                        }
                        return ""
                    }))
            }
        }

        function Ot(e) {
            return kt(Dt("", null, null, null, [""], e = St(e), 0, [0], e))
        }

        function Dt(e, t, n, r, a, i, o, s, l) {
            for (var u = 0, c = 0, d = o, f = 0, h = 0, p = 0, m = 1, g = 1, v = 1, y = 0, b = "", w = a, x = i, S = r, k = b; g;) switch (p = y, y = vt()) {
                case 40:
                    if (108 != p && 58 == tt(k, d - 1)) {
                        -1 != et(k += Ze(Ct(y), "&", "&\f"), "&\f") && (v = -1);
                        break
                    }
                case 34:
                case 39:
                case 91:
                    k += Ct(y);
                    break;
                case 9:
                case 10:
                case 13:
                case 32:
                    k += jt(p);
                    break;
                case 92:
                    k += Et(bt() - 1, 7);
                    continue;
                case 47:
                    switch (yt()) {
                        case 42:
                        case 47:
                            it(zt(Tt(vt(), bt()), t, n, l), l);
                            break;
                        default:
                            k += "/"
                    }
                    break;
                case 123 * m:
                    s[u++] = rt(k) * v;
                case 125 * m:
                case 59:
                case 0:
                    switch (y) {
                        case 0:
                        case 125:
                            g = 0;
                        case 59 + c:
                            -1 == v && (k = Ze(k, /\f/g, "")), h > 0 && rt(k) - d && it(h > 32 ? Ft(k + ";", r, n, d - 1, l) : Ft(Ze(k, " ", "") + ";", r, n, d - 2, l), l);
                            break;
                        case 59:
                            k += ";";
                        default:
                            if (it(S = Lt(k, t, n, u, c, a, s, b, w = [], x = [], d, i), i), 123 === y)
                                if (0 === c) Dt(k, t, S, S, w, i, d, s, x);
                                else switch (99 === f && 110 === tt(k, 3) ? 100 : f) {
                                    case 100:
                                    case 108:
                                    case 109:
                                    case 115:
                                        Dt(e, S, S, r && it(Lt(e, S, S, 0, 0, a, s, b, a, w = [], d, x), x), a, x, d, s, r ? w : x);
                                        break;
                                    default:
                                        Dt(k, S, S, S, [""], x, 0, s, x)
                                }
                    }
                    u = c = h = 0, m = v = 1, b = k = "", d = o;
                    break;
                case 58:
                    d = 1 + rt(k), h = p;
                default:
                    if (m < 1)
                        if (123 == y) --m;
                        else if (125 == y && 0 == m++ && 125 == gt()) continue;
                    switch (k += Qe(y), y * m) {
                        case 38:
                            v = c > 0 ? 1 : (k += "\f", -1);
                            break;
                        case 44:
                            s[u++] = (rt(k) - 1) * v, v = 1;
                            break;
                        case 64:
                            45 === yt() && (k += Ct(vt())), f = yt(), c = d = rt(b = k += _t(bt())), y++;
                            break;
                        case 45:
                            45 === p && 2 == rt(k) && (m = 0)
                    }
            }
            return i
        }

        function Lt(e, t, n, r, a, i, o, s, l, u, c, d) {
            for (var f = a - 1, h = 0 === a ? i : [""], p = at(h), m = 0, g = 0, v = 0; m < r; ++m)
                for (var y = 0, b = nt(e, f + 1, f = Ke(g = o[m])), w = e; y < p; ++y)(w = Xe(g > 0 ? h[y] + " " + b : Ze(b, /&\f/g, h[y]))) && (l[v++] = w);
            return ht(e, t, n, 0 === a ? We : s, l, u, c, d)
        }

        function zt(e, t, n, r) {
            return ht(e, t, n, He, Qe(dt), nt(e, 2, -2), 0, r)
        }

        function Ft(e, t, n, r, a) {
            return ht(e, t, n, Be, nt(e, 0, r), nt(e, r + 1, -1), r, a)
        }
        var Mt = {
                animationIterationCount: 1,
                aspectRatio: 1,
                borderImageOutset: 1,
                borderImageSlice: 1,
                borderImageWidth: 1,
                boxFlex: 1,
                boxFlexGroup: 1,
                boxOrdinalGroup: 1,
                columnCount: 1,
                columns: 1,
                flex: 1,
                flexGrow: 1,
                flexPositive: 1,
                flexShrink: 1,
                flexNegative: 1,
                flexOrder: 1,
                gridRow: 1,
                gridRowEnd: 1,
                gridRowSpan: 1,
                gridRowStart: 1,
                gridColumn: 1,
                gridColumnEnd: 1,
                gridColumnSpan: 1,
                gridColumnStart: 1,
                msGridRow: 1,
                msGridRowSpan: 1,
                msGridColumn: 1,
                msGridColumnSpan: 1,
                fontWeight: 1,
                lineHeight: 1,
                opacity: 1,
                order: 1,
                orphans: 1,
                tabSize: 1,
                widows: 1,
                zIndex: 1,
                zoom: 1,
                WebkitLineClamp: 1,
                fillOpacity: 1,
                floodOpacity: 1,
                stopOpacity: 1,
                strokeDasharray: 1,
                strokeDashoffset: 1,
                strokeMiterlimit: 1,
                strokeOpacity: 1,
                strokeWidth: 1
            },
            Gt = "undefined" != typeof process && void 0 !== {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0
            } && ({
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0
            }.REACT_APP_SC_ATTR || {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0
            }.SC_ATTR) || "data-styled",
            Ut = "undefined" != typeof window && "HTMLElement" in window,
            Ht = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0
            } && void 0 !== {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0
            }.REACT_APP_SC_DISABLE_SPEEDY && "" !== {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0
            }.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0
            }.REACT_APP_SC_DISABLE_SPEEDY && {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0
            }.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0
            } && void 0 !== {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0
            }.SC_DISABLE_SPEEDY && "" !== {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0
            }.SC_DISABLE_SPEEDY && ("false" !== {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0
            }.SC_DISABLE_SPEEDY && {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0
            }.SC_DISABLE_SPEEDY)),
            Wt = (new Set, Object.freeze([])),
            Bt = Object.freeze({});

        function $t(e, t, n) {
            return void 0 === n && (n = Bt), e.theme !== n.theme && e.theme || t || n.theme
        }
        var Vt = new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]),
            qt = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
            Kt = /(^-|-$)/g;

        function Qt(e) {
            return e.replace(qt, "-").replace(Kt, "")
        }
        var Yt = /(a)(d)/gi,
            Xt = function(e) {
                return String.fromCharCode(e + (e > 25 ? 39 : 97))
            };

        function Jt(e) {
            var t, n = "";
            for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = Xt(t % 52) + n;
            return (Xt(t % 52) + n).replace(Yt, "$1-$2")
        }
        var Zt, en = function(e, t) {
                for (var n = t.length; n;) e = 33 * e ^ t.charCodeAt(--n);
                return e
            },
            tn = function(e) {
                return en(5381, e)
            };

        function nn(e) {
            return Jt(tn(e) >>> 0)
        }

        function rn(e) {
            return e.displayName || e.name || "Component"
        }

        function an(e) {
            return "string" == typeof e && !0
        }
        var on = "function" == typeof Symbol && Symbol.for,
            sn = on ? Symbol.for("react.memo") : 60115,
            ln = on ? Symbol.for("react.forward_ref") : 60112,
            un = {
                childContextTypes: !0,
                contextType: !0,
                contextTypes: !0,
                defaultProps: !0,
                displayName: !0,
                getDefaultProps: !0,
                getDerivedStateFromError: !0,
                getDerivedStateFromProps: !0,
                mixins: !0,
                propTypes: !0,
                type: !0
            },
            cn = {
                name: !0,
                length: !0,
                prototype: !0,
                caller: !0,
                callee: !0,
                arguments: !0,
                arity: !0
            },
            dn = {
                $$typeof: !0,
                compare: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0,
                type: !0
            },
            fn = ((Zt = {})[ln] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }, Zt[sn] = dn, Zt);

        function hn(e) {
            return ("type" in (t = e) && t.type.$$typeof) === sn ? dn : "$$typeof" in e ? fn[e.$$typeof] : un;
            var t
        }
        var pn = Object.defineProperty,
            mn = Object.getOwnPropertyNames,
            gn = Object.getOwnPropertySymbols,
            vn = Object.getOwnPropertyDescriptor,
            yn = Object.getPrototypeOf,
            bn = Object.prototype;

        function wn(e, t, n) {
            if ("string" != typeof t) {
                if (bn) {
                    var r = yn(t);
                    r && r !== bn && wn(e, r, n)
                }
                var a = mn(t);
                gn && (a = a.concat(gn(t)));
                for (var i = hn(e), o = hn(t), s = 0; s < a.length; ++s) {
                    var l = a[s];
                    if (!(l in cn || n && n[l] || o && l in o || i && l in i)) {
                        var u = vn(t, l);
                        try {
                            pn(e, l, u)
                        } catch (e) {}
                    }
                }
            }
            return e
        }

        function xn(e) {
            return "function" == typeof e
        }

        function Sn(e) {
            return "object" == typeof e && "styledComponentId" in e
        }

        function kn(e, t) {
            return e && t ? "".concat(e, " ").concat(t) : e || t || ""
        }

        function Cn(e, t) {
            if (0 === e.length) return "";
            for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r];
            return n
        }

        function jn(e) {
            return null !== e && "object" == typeof e && e.constructor.name === Object.name && !("props" in e && e.$$typeof)
        }

        function En(e, t, n) {
            if (void 0 === n && (n = !1), !n && !jn(e) && !Array.isArray(e)) return t;
            if (Array.isArray(t))
                for (var r = 0; r < t.length; r++) e[r] = En(e[r], t[r]);
            else if (jn(t))
                for (var r in t) e[r] = En(e[r], t[r]);
            return e
        }

        function Pn(e, t) {
            Object.defineProperty(e, "toString", {
                value: t
            })
        }

        function Tn(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : ""))
        }
        var _n = function() {
                function e(e) {
                    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e
                }
                return e.prototype.indexOfGroup = function(e) {
                    for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
                    return t
                }, e.prototype.insertRules = function(e, t) {
                    if (e >= this.groupSizes.length) {
                        for (var n = this.groupSizes, r = n.length, a = r; e >= a;)
                            if ((a <<= 1) < 0) throw Tn(16, "".concat(e));
                        this.groupSizes = new Uint32Array(a), this.groupSizes.set(n), this.length = a;
                        for (var i = r; i < a; i++) this.groupSizes[i] = 0
                    }
                    for (var o = this.indexOfGroup(e + 1), s = (i = 0, t.length); i < s; i++) this.tag.insertRule(o, t[i]) && (this.groupSizes[e]++, o++)
                }, e.prototype.clearGroup = function(e) {
                    if (e < this.length) {
                        var t = this.groupSizes[e],
                            n = this.indexOfGroup(e),
                            r = n + t;
                        this.groupSizes[e] = 0;
                        for (var a = n; a < r; a++) this.tag.deleteRule(n)
                    }
                }, e.prototype.getGroup = function(e) {
                    var t = "";
                    if (e >= this.length || 0 === this.groupSizes[e]) return t;
                    for (var n = this.groupSizes[e], r = this.indexOfGroup(e), a = r + n, i = r; i < a; i++) t += "".concat(this.tag.getRule(i)).concat("/*!sc*/\n");
                    return t
                }, e
            }(),
            Nn = new Map,
            An = new Map,
            In = 1,
            Rn = function(e) {
                if (Nn.has(e)) return Nn.get(e);
                for (; An.has(In);) In++;
                var t = In++;
                return Nn.set(e, t), An.set(t, e), t
            },
            On = function(e, t) {
                In = t + 1, Nn.set(e, t), An.set(t, e)
            },
            Dn = "style[".concat(Gt, "][").concat("data-styled-version", '="').concat("6.1.1", '"]'),
            Ln = new RegExp("^".concat(Gt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),
            zn = function(e, t, n) {
                for (var r, a = n.split(","), i = 0, o = a.length; i < o; i++)(r = a[i]) && e.registerName(t, r)
            },
            Fn = function(e, t) {
                for (var n, r = (null !== (n = t.textContent) && void 0 !== n ? n : "").split("/*!sc*/\n"), a = [], i = 0, o = r.length; i < o; i++) {
                    var s = r[i].trim();
                    if (s) {
                        var l = s.match(Ln);
                        if (l) {
                            var u = 0 | parseInt(l[1], 10),
                                c = l[2];
                            0 !== u && (On(c, u), zn(e, c, l[3]), e.getTag().insertRules(u, a)), a.length = 0
                        } else a.push(s)
                    }
                }
            };

        function Mn() {
            return n.nc
        }
        var Gn = function(e) {
                var t = document.head,
                    n = e || t,
                    r = document.createElement("style"),
                    a = function(e) {
                        var t = Array.from(e.querySelectorAll("style[".concat(Gt, "]")));
                        return t[t.length - 1]
                    }(n),
                    i = void 0 !== a ? a.nextSibling : null;
                r.setAttribute(Gt, "active"), r.setAttribute("data-styled-version", "6.1.1");
                var o = Mn();
                return o && r.setAttribute("nonce", o), n.insertBefore(r, i), r
            },
            Un = function() {
                function e(e) {
                    this.element = Gn(e), this.element.appendChild(document.createTextNode("")), this.sheet = function(e) {
                        if (e.sheet) return e.sheet;
                        for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
                            var a = t[n];
                            if (a.ownerNode === e) return a
                        }
                        throw Tn(17)
                    }(this.element), this.length = 0
                }
                return e.prototype.insertRule = function(e, t) {
                    try {
                        return this.sheet.insertRule(t, e), this.length++, !0
                    } catch (e) {
                        return !1
                    }
                }, e.prototype.deleteRule = function(e) {
                    this.sheet.deleteRule(e), this.length--
                }, e.prototype.getRule = function(e) {
                    var t = this.sheet.cssRules[e];
                    return t && t.cssText ? t.cssText : ""
                }, e
            }(),
            Hn = function() {
                function e(e) {
                    this.element = Gn(e), this.nodes = this.element.childNodes, this.length = 0
                }
                return e.prototype.insertRule = function(e, t) {
                    if (e <= this.length && e >= 0) {
                        var n = document.createTextNode(t);
                        return this.element.insertBefore(n, this.nodes[e] || null), this.length++, !0
                    }
                    return !1
                }, e.prototype.deleteRule = function(e) {
                    this.element.removeChild(this.nodes[e]), this.length--
                }, e.prototype.getRule = function(e) {
                    return e < this.length ? this.nodes[e].textContent : ""
                }, e
            }(),
            Wn = function() {
                function e(e) {
                    this.rules = [], this.length = 0
                }
                return e.prototype.insertRule = function(e, t) {
                    return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0)
                }, e.prototype.deleteRule = function(e) {
                    this.rules.splice(e, 1), this.length--
                }, e.prototype.getRule = function(e) {
                    return e < this.length ? this.rules[e] : ""
                }, e
            }(),
            Bn = Ut,
            $n = {
                isServer: !Ut,
                useCSSOMInjection: !Ht
            },
            Vn = function() {
                function e(e, t, n) {
                    void 0 === e && (e = Bt), void 0 === t && (t = {});
                    var r = this;
                    this.options = De(De({}, $n), e), this.gs = t, this.names = new Map(n), this.server = !!e.isServer, !this.server && Ut && Bn && (Bn = !1, function(e) {
                        for (var t = document.querySelectorAll(Dn), n = 0, r = t.length; n < r; n++) {
                            var a = t[n];
                            a && "active" !== a.getAttribute(Gt) && (Fn(e, a), a.parentNode && a.parentNode.removeChild(a))
                        }
                    }(this)), Pn(this, (function() {
                        return function(e) {
                            for (var t = e.getTag(), n = t.length, r = "", a = function(n) {
                                    var a = function(e) {
                                        return An.get(e)
                                    }(n);
                                    if (void 0 === a) return "continue";
                                    var i = e.names.get(a),
                                        o = t.getGroup(n);
                                    if (void 0 === i || 0 === o.length) return "continue";
                                    var s = "".concat(Gt, ".g").concat(n, '[id="').concat(a, '"]'),
                                        l = "";
                                    void 0 !== i && i.forEach((function(e) {
                                        e.length > 0 && (l += "".concat(e, ","))
                                    })), r += "".concat(o).concat(s, '{content:"').concat(l, '"}').concat("/*!sc*/\n")
                                }, i = 0; i < n; i++) a(i);
                            return r
                        }(r)
                    }))
                }
                return e.registerId = function(e) {
                    return Rn(e)
                }, e.prototype.reconstructWithOptions = function(t, n) {
                    return void 0 === n && (n = !0), new e(De(De({}, this.options), t), this.gs, n && this.names || void 0)
                }, e.prototype.allocateGSInstance = function(e) {
                    return this.gs[e] = (this.gs[e] || 0) + 1
                }, e.prototype.getTag = function() {
                    return this.tag || (this.tag = (e = function(e) {
                        var t = e.useCSSOMInjection,
                            n = e.target;
                        return e.isServer ? new Wn(n) : t ? new Un(n) : new Hn(n)
                    }(this.options), new _n(e)));
                    var e
                }, e.prototype.hasNameForId = function(e, t) {
                    return this.names.has(e) && this.names.get(e).has(t)
                }, e.prototype.registerName = function(e, t) {
                    if (Rn(e), this.names.has(e)) this.names.get(e).add(t);
                    else {
                        var n = new Set;
                        n.add(t), this.names.set(e, n)
                    }
                }, e.prototype.insertRules = function(e, t, n) {
                    this.registerName(e, t), this.getTag().insertRules(Rn(e), n)
                }, e.prototype.clearNames = function(e) {
                    this.names.has(e) && this.names.get(e).clear()
                }, e.prototype.clearRules = function(e) {
                    this.getTag().clearGroup(Rn(e)), this.clearNames(e)
                }, e.prototype.clearTag = function() {
                    this.tag = void 0
                }, e
            }(),
            qn = /&/g,
            Kn = /^\s*\/\/.*$/gm;

        function Qn(e, t) {
            return e.map((function(e) {
                return "rule" === e.type && (e.value = "".concat(t, " ").concat(e.value), e.value = e.value.replaceAll(",", ",".concat(t, " ")), e.props = e.props.map((function(e) {
                    return "".concat(t, " ").concat(e)
                }))), Array.isArray(e.children) && "@keyframes" !== e.type && (e.children = Qn(e.children, t)), e
            }))
        }

        function Yn(e) {
            var t, n, r, a = void 0 === e ? Bt : e,
                i = a.options,
                o = void 0 === i ? Bt : i,
                s = a.plugins,
                l = void 0 === s ? Wt : s,
                u = function(e, r, a) {
                    return a === n || a.startsWith(n) && a.endsWith(n) && a.replaceAll(n, "").length > 0 ? ".".concat(t) : e
                },
                c = l.slice();
            c.push((function(e) {
                e.type === We && e.value.includes("&") && (e.props[0] = e.props[0].replace(qn, n).replace(r, u))
            })), o.prefix && c.push(Rt), c.push(At);
            var d = function(e, a, i, s) {
                void 0 === a && (a = ""), void 0 === i && (i = ""), void 0 === s && (s = "&"), t = s, n = a, r = new RegExp("\\".concat(n, "\\b"), "g");
                var l = e.replace(Kn, ""),
                    u = Ot(i || a ? "".concat(i, " ").concat(a, " { ").concat(l, " }") : l);
                o.namespace && (u = Qn(u, o.namespace));
                var d, f = [];
                return Nt(u, function(e) {
                    var t = at(e);
                    return function(n, r, a, i) {
                        for (var o = "", s = 0; s < t; s++) o += e[s](n, r, a, i) || "";
                        return o
                    }
                }(c.concat((d = function(e) {
                    return f.push(e)
                }, function(e) {
                    e.root || (e = e.return) && d(e)
                })))), f
            };
            return d.hash = l.length ? l.reduce((function(e, t) {
                return t.name || Tn(15), en(e, t.name)
            }), 5381).toString() : "", d
        }
        var Xn = new Vn,
            Jn = Yn(),
            Zn = e.createContext({
                shouldForwardProp: void 0,
                styleSheet: Xn,
                stylis: Jn
            }),
            er = (Zn.Consumer, e.createContext(void 0));

        function tr() {
            return (0, e.useContext)(Zn)
        }

        function nr(t) {
            var n = (0, e.useState)(t.stylisPlugins),
                r = n[0],
                a = n[1],
                i = tr().styleSheet,
                o = (0, e.useMemo)((function() {
                    var e = i;
                    return t.sheet ? e = t.sheet : t.target && (e = e.reconstructWithOptions({
                        target: t.target
                    }, !1)), t.disableCSSOMInjection && (e = e.reconstructWithOptions({
                        useCSSOMInjection: !1
                    })), e
                }), [t.disableCSSOMInjection, t.sheet, t.target, i]),
                s = (0, e.useMemo)((function() {
                    return Yn({
                        options: {
                            namespace: t.namespace,
                            prefix: t.enableVendorPrefixes
                        },
                        plugins: r
                    })
                }), [t.enableVendorPrefixes, t.namespace, r]);
            (0, e.useEffect)((function() {
                Fe()(r, t.stylisPlugins) || a(t.stylisPlugins)
            }), [t.stylisPlugins]);
            var l = (0, e.useMemo)((function() {
                return {
                    shouldForwardProp: t.shouldForwardProp,
                    styleSheet: o,
                    stylis: s
                }
            }), [t.shouldForwardProp, o, s]);
            return e.createElement(Zn.Provider, {
                value: l
            }, e.createElement(er.Provider, {
                value: s
            }, t.children))
        }
        var rr = function() {
                function e(e, t) {
                    var n = this;
                    this.inject = function(e, t) {
                        void 0 === t && (t = Jn);
                        var r = n.name + t.hash;
                        e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, "@keyframes"))
                    }, this.name = e, this.id = "sc-keyframes-".concat(e), this.rules = t, Pn(this, (function() {
                        throw Tn(12, String(n.name))
                    }))
                }
                return e.prototype.getName = function(e) {
                    return void 0 === e && (e = Jn), this.name + e.hash
                }, e
            }(),
            ar = function(e) {
                return e >= "A" && e <= "Z"
            };

        function ir(e) {
            for (var t = "", n = 0; n < e.length; n++) {
                var r = e[n];
                if (1 === n && "-" === r && "-" === e[0]) return e;
                ar(r) ? t += "-" + r.toLowerCase() : t += r
            }
            return t.startsWith("ms-") ? "-" + t : t
        }
        var or = function(e) {
                return null == e || !1 === e || "" === e
            },
            sr = function(e) {
                var t, n, r = [];
                for (var a in e) {
                    var i = e[a];
                    e.hasOwnProperty(a) && !or(i) && (Array.isArray(i) && i.isCss || xn(i) ? r.push("".concat(ir(a), ":"), i, ";") : jn(i) ? r.push.apply(r, Le(Le(["".concat(a, " {")], sr(i), !1), ["}"], !1)) : r.push("".concat(ir(a), ": ").concat((t = a, null == (n = i) || "boolean" == typeof n || "" === n ? "" : "number" != typeof n || 0 === n || t in Mt || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")))
                }
                return r
            };

        function lr(e, t, n, r) {
            return or(e) ? [] : Sn(e) ? [".".concat(e.styledComponentId)] : xn(e) ? !xn(a = e) || a.prototype && a.prototype.isReactComponent || !t ? [e] : lr(e(t), t, n, r) : e instanceof rr ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : jn(e) ? sr(e) : Array.isArray(e) ? Array.prototype.concat.apply(Wt, e.map((function(e) {
                return lr(e, t, n, r)
            }))) : [e.toString()];
            var a
        }

        function ur(e) {
            for (var t = 0; t < e.length; t += 1) {
                var n = e[t];
                if (xn(n) && !Sn(n)) return !1
            }
            return !0
        }
        var cr = tn("6.1.1"),
            dr = function() {
                function e(e, t, n) {
                    this.rules = e, this.staticRulesId = "", this.isStatic = (void 0 === n || n.isStatic) && ur(e), this.componentId = t, this.baseHash = en(cr, t), this.baseStyle = n, Vn.registerId(t)
                }
                return e.prototype.generateAndInjectStyles = function(e, t, n) {
                    var r = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, t, n) : "";
                    if (this.isStatic && !n.hash)
                        if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) r = kn(r, this.staticRulesId);
                        else {
                            var a = Cn(lr(this.rules, e, t, n)),
                                i = Jt(en(this.baseHash, a) >>> 0);
                            if (!t.hasNameForId(this.componentId, i)) {
                                var o = n(a, ".".concat(i), void 0, this.componentId);
                                t.insertRules(this.componentId, i, o)
                            }
                            r = kn(r, i), this.staticRulesId = i
                        }
                    else {
                        for (var s = en(this.baseHash, n.hash), l = "", u = 0; u < this.rules.length; u++) {
                            var c = this.rules[u];
                            if ("string" == typeof c) l += c;
                            else if (c) {
                                var d = Cn(lr(c, e, t, n));
                                s = en(s, d + u), l += d
                            }
                        }
                        if (l) {
                            var f = Jt(s >>> 0);
                            t.hasNameForId(this.componentId, f) || t.insertRules(this.componentId, f, n(l, ".".concat(f), void 0, this.componentId)), r = kn(r, f)
                        }
                    }
                    return r
                }, e
            }(),
            fr = e.createContext(void 0);
        fr.Consumer;
        var hr = {};
        new Set;

        function pr(t, n, r) {
            var a = Sn(t),
                i = t,
                o = !an(t),
                s = n.attrs,
                l = void 0 === s ? Wt : s,
                u = n.componentId,
                c = void 0 === u ? function(e, t) {
                    var n = "string" != typeof e ? "sc" : Qt(e);
                    hr[n] = (hr[n] || 0) + 1;
                    var r = "".concat(n, "-").concat(nn("6.1.1" + n + hr[n]));
                    return t ? "".concat(t, "-").concat(r) : r
                }(n.displayName, n.parentComponentId) : u,
                d = n.displayName,
                f = void 0 === d ? function(e) {
                    return an(e) ? "styled.".concat(e) : "Styled(".concat(rn(e), ")")
                }(t) : d,
                h = n.displayName && n.componentId ? "".concat(Qt(n.displayName), "-").concat(n.componentId) : n.componentId || c,
                p = a && i.attrs ? i.attrs.concat(l).filter(Boolean) : l,
                m = n.shouldForwardProp;
            if (a && i.shouldForwardProp) {
                var g = i.shouldForwardProp;
                if (n.shouldForwardProp) {
                    var v = n.shouldForwardProp;
                    m = function(e, t) {
                        return g(e, t) && v(e, t)
                    }
                } else m = g
            }
            var y = new dr(r, h, a ? i.componentStyle : void 0);

            function b(t, n) {
                return function(t, n, r) {
                    var a = t.attrs,
                        i = t.componentStyle,
                        o = t.defaultProps,
                        s = t.foldedComponentIds,
                        l = t.styledComponentId,
                        u = t.target,
                        c = e.useContext(fr),
                        d = tr(),
                        f = t.shouldForwardProp || d.shouldForwardProp,
                        h = function(e, t, n) {
                            for (var r, a = De(De({}, t), {
                                    className: void 0,
                                    theme: n
                                }), i = 0; i < e.length; i += 1) {
                                var o = xn(r = e[i]) ? r(a) : r;
                                for (var s in o) a[s] = "className" === s ? kn(a[s], o[s]) : "style" === s ? De(De({}, a[s]), o[s]) : o[s]
                            }
                            return t.className && (a.className = kn(a.className, t.className)), a
                        }(a, n, $t(n, c, o) || Bt),
                        p = h.as || u,
                        m = {};
                    for (var g in h) void 0 === h[g] || "$" === g[0] || "as" === g || "theme" === g || ("forwardedAs" === g ? m.as = h.forwardedAs : f && !f(g, p) || (m[g] = h[g]));
                    var v = function(e, t) {
                            var n = tr();
                            return e.generateAndInjectStyles(t, n.styleSheet, n.stylis)
                        }(i, h),
                        y = kn(s, l);
                    return v && (y += " " + v), h.className && (y += " " + h.className), m[an(p) && !Vt.has(p) ? "class" : "className"] = y, m.ref = r, (0, e.createElement)(p, m)
                }(w, t, n)
            }
            b.displayName = f;
            var w = e.forwardRef(b);
            return w.attrs = p, w.componentStyle = y, w.displayName = f, w.shouldForwardProp = m, w.foldedComponentIds = a ? kn(i.foldedComponentIds, i.styledComponentId) : "", w.styledComponentId = h, w.target = a ? i.target : t, Object.defineProperty(w, "defaultProps", {
                get: function() {
                    return this._foldedDefaultProps
                },
                set: function(e) {
                    this._foldedDefaultProps = a ? function(e) {
                        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                        for (var r = 0, a = t; r < a.length; r++) En(e, a[r], !0);
                        return e
                    }({}, i.defaultProps, e) : e
                }
            }), Pn(w, (function() {
                return ".".concat(w.styledComponentId)
            })), o && wn(w, t, {
                attrs: !0,
                componentStyle: !0,
                displayName: !0,
                foldedComponentIds: !0,
                shouldForwardProp: !0,
                styledComponentId: !0,
                target: !0
            }), w
        }

        function mr(e, t) {
            for (var n = [e[0]], r = 0, a = t.length; r < a; r += 1) n.push(t[r], e[r + 1]);
            return n
        }
        var gr = function(e) {
            return Object.assign(e, {
                isCss: !0
            })
        };

        function vr(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            if (xn(e) || jn(e)) return gr(lr(mr(Wt, Le([e], t, !0))));
            var r = e;
            return 0 === t.length && 1 === r.length && "string" == typeof r[0] ? lr(r) : gr(lr(mr(r, t)))
        }

        function yr(e, t, n) {
            if (void 0 === n && (n = Bt), !t) throw Tn(1, t);
            var r = function(r) {
                for (var a = [], i = 1; i < arguments.length; i++) a[i - 1] = arguments[i];
                return e(t, n, vr.apply(void 0, Le([r], a, !1)))
            };
            return r.attrs = function(r) {
                return yr(e, t, De(De({}, n), {
                    attrs: Array.prototype.concat(n.attrs, r).filter(Boolean)
                }))
            }, r.withConfig = function(r) {
                return yr(e, t, De(De({}, n), r))
            }, r
        }
        var br = function(e) {
                return yr(pr, e)
            },
            wr = br;
        Vt.forEach((function(e) {
            wr[e] = br(e)
        }));
        ! function() {
            function e(e, t) {
                this.rules = e, this.componentId = t, this.isStatic = ur(e), Vn.registerId(this.componentId + 1)
            }
            e.prototype.createStyles = function(e, t, n, r) {
                var a = r(Cn(lr(this.rules, t, n, r)), ""),
                    i = this.componentId + e;
                n.insertRules(i, i, a)
            }, e.prototype.removeStyles = function(e, t) {
                t.clearRules(this.componentId + e)
            }, e.prototype.renderStyles = function(e, t, n, r) {
                e > 2 && Vn.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, t, n, r)
            }
        }();
        var xr;
        (function() {
            function t() {
                var t = this;
                this._emitSheetCSS = function() {
                    var e = t.instance.toString(),
                        n = Mn(),
                        r = Cn([n && 'nonce="'.concat(n, '"'), "".concat(Gt, '="true"'), "".concat("data-styled-version", '="').concat("6.1.1", '"')].filter(Boolean), " ");
                    return "<style ".concat(r, ">").concat(e, "</style>")
                }, this.getStyleTags = function() {
                    if (t.sealed) throw Tn(2);
                    return t._emitSheetCSS()
                }, this.getStyleElement = function() {
                    var n;
                    if (t.sealed) throw Tn(2);
                    var r = ((n = {})[Gt] = "", n["data-styled-version"] = "6.1.1", n.dangerouslySetInnerHTML = {
                            __html: t.instance.toString()
                        }, n),
                        a = Mn();
                    return a && (r.nonce = a), [e.createElement("style", De({}, r, {
                        key: "sc-0-0"
                    }))]
                }, this.seal = function() {
                    t.sealed = !0
                }, this.instance = new Vn({
                    isServer: !0
                }), this.sealed = !1
            }
            t.prototype.collectStyles = function(t) {
                if (this.sealed) throw Tn(2);
                return e.createElement(nr, {
                    sheet: this.instance
                }, t)
            }, t.prototype.interleaveWithNodeStream = function(e) {
                throw Tn(3)
            }
        })(), "__sc-".concat(Gt, "__");
        const Sr = wr.h1(xr || (xr = Oe(['\n  // font-family: "Oswald", sans-serif;\n  font-family: "Hedvig Letters Serif", serif;\n  text-transform: uppercase;\n  font-size: 3.6rem;\n  margin-bottom: 1rem;\n'])));
        const kr = function(e) {
            let {
                lastUpdated: t,
                children: n
            } = e;
            return (0, Ne.jsxs)("div", {
                className: "TitleBox",
                children: [(0, Ne.jsx)(Sr, {
                    children: n
                }), t && (0, Ne.jsxs)("p", {
                    className: "date",
                    children: ["Last Updated: ", t]
                })]
            })
        };
        var Cr, jr, Er, Pr, Tr, _r, Nr;
        const Ar = wr.p(Cr || (Cr = Oe(['\n  font-family: "Hedvig Letters Serif", serif;\n  font-size: 2.8rem;\n  font-weight: 600;\n  margin: 0;\n  display: inline-block;\n']))),
            Ir = wr.p(jr || (jr = Oe(['\n  font-family: "Hedvig Letters Serif", serif;\n  font-size: 3.4rem;\n  font-weight: 750;\n  margin: 0;\n  text-align: center; /* Added to center the text */\n']))),
            Rr = wr.p(Er || (Er = Oe(['\n  font-family: "Hedvig Letters Serif", serif;\n  text-transform: uppercase;\n  font-size: 1.8rem;\n  font-weight: 750;\n  margin-bottom: 1rem;\n  display: inline-block;\n  margin-left: 1rem;\n']))),
            Or = wr.ul(Pr || (Pr = Oe(['\n  font-family: "Quattrocento Sans", sans-serif;\n  list-style: none;\n  font-size: 2rem;\n  font-weight: 500;\n']))),
            Dr = wr.ul(Tr || (Tr = Oe(['\n  font-family: "Quattrocento Sans", sans-serif;\n  font-size: 2rem;\n  font-weight: 500;\n']))),
            Lr = wr.ul(_r || (_r = Oe(['\n  font-family: "Quattrocento Sans", sans-serif;\n  list-style: none;\n  font-size: 2.15rem;\n  font-weight: 400;\n']))),
            zr = wr.p(Nr || (Nr = Oe(['\n  font-family: "Hedvig Letters Serif", serif;\n  font-size: 2.8rem;\n  font-weight: 400;\n  margin: 0;\n  display: inline-block;\n'])));
        const Fr = function() {
            return (0, Ne.jsxs)("div", {
                className: "container--main",
                children: [(0, Ne.jsx)(kr, {
                    children: "The GS Meter"
                }), (0, Ne.jsx)(Lr, {
                    children: "The GS meter maintained by the Insight team is a platform through which every student of IIT Bombay can stay up-to-date with the progress made by the General Secretaries for the points on their manifestos. The aim is to increase accountability by maintaining a public platform that tracks the progress of the elected representatives throughout the year."
                }), (0, Ne.jsx)(Lr, {
                    children: "If you find any discrepancies in the information presented on this website, please drop a mail to insight@iitb.ac.in specifying the General Secretary, along with the change in status of the manifesto point(s) and any relevant proof, if applicable."
                }), (0, Ne.jsx)(zr, {
                    children: "Guide"
                }), (0, Ne.jsxs)(Dr, {
                    children: [(0, Ne.jsx)("li", {
                        children: "The meaning of symbols is specified at the top of each page"
                    }), (0, Ne.jsx)("li", {
                        children: "You can click on the manifesto points for further elaboration if one has been provided by the concerned General Secretary"
                    }), (0, Ne.jsx)("li", {
                        children: 'At the end of each page, there is also a section called "Off Manifesto Points" for points that were not present on the manifesto but have been undertaken, if provided by the concerned General Secretary'
                    }), (0, Ne.jsx)("li", {
                        children: "The pie chart at the top of each page displays the overall progress each General Secretary has made with regard to their manifesto"
                    })]
                }), (0, Ne.jsx)(Lr, {
                    children: "Note: This, as of October 2024, is the mid-tenure GS Meter and some initiatives by the GSecs might have been planned for later. A point marked as incomplete or ongoing/completed to some extent could be marked complete later in the tenure. Feel free to reach out to us via our social media handles or webmail for any clarifications."
                }), (0, Ne.jsx)("br", {}), (0, Ne.jsx)(Ie, {})]
            })
        };
        var Mr = n(225);
        const Gr = function(e) {
            let {
                name: t,
                imgsrc: n,
                por: r,
                manlink: a,
                chartsrc: i,
                completed: o,
                Ongoing: s,
                unclear: l,
                notstarted: u
            } = e;
            const c = [{
                title: "Not Yet Started",
                value: u,
                color: "#FF470C"
            }, {
                title: "Ongoing/completed to some extent",
                value: s,
                color: "#FFCC66"
            }, {
                title: "Completed",
                value: o,
                color: "#2BC48A"
            }, {
                title: "Incomplete",
                value: l,
                color: "#0073c2"
            }];
            return (0, Ne.jsxs)("div", {
                className: "parent-image-container",
                children: [(0, Ne.jsxs)("div", {
                    className: "image-container",
                    children: [(0, Ne.jsx)("img", {
                        src: n,
                        alt: "",
                        className: "image-container__image-box"
                    }), (0, Ne.jsxs)("div", {
                        className: "image_container__text-box",
                        children: [(0, Ne.jsxs)("p", {
                            className: "main-text",
                            children: [(0, Ne.jsx)("span", {
                                className: "main-text--name",
                                children: t
                            }), (0, Ne.jsx)("span", {
                                className: "main-text--post",
                                children: r
                            })]
                        }), (0, Ne.jsxs)("a", {
                            href: a,
                            className: "main-text--link",
                            target: "_blank",
                            children: ["View Manifesto ", (0, Ne.jsx)("i", {
                                className: "uil uil-arrow-right"
                            })]
                        })]
                    })]
                }), (0, Ne.jsx)("div", {
                    className: "piechart",
                    children: (0, Ne.jsx)(Mr.PieChart, {
                        data: c,
                        lineWidth: 50,
                        animate: !0,
                        label: e => {
                            let {
                                dataEntry: t
                            } = e;
                            return 0 != t.value ? "".concat(t.value, "%") : null
                        },
                        labelStyle: e => ({
                            fontSize: ".8rem",
                            fontFamily: "Quattrocento Sans",
                            fontWeight: "bold"
                        }),
                        labelPosition: 75
                    })
                })]
            })
        };
        const Ur = function(t) {
            const [n, r] = (0, e.useState)(!1);
            return (0, Ne.jsxs)("div", {
                children: [(0, Ne.jsx)("div", {
                    className: "accordian--main",
                    onClick: () => r((e => !e)),
                    children: (0, Ne.jsxs)("div", {
                        className: "points-flex",
                        children: [(0, Ne.jsx)("i", {
                            className: "uil uil-times red"
                        }), (0, Ne.jsx)("div", {
                            children: t.children
                        })]
                    })
                }), (0, Ne.jsx)("div", {
                    className: "accordian--reply",
                    style: {
                        display: n && "block"
                    },
                    children: t.reply ? t.reply : "Not Done"
                })]
            })
        };
        // const Hr = function(e) {
        //     let {
        //         children: t
        //     } = e;
        //     return (0, Ne.jsxs)("div", {
        //         className: "points-flex",
        //         children: [(0, Ne.jsx)("i", {
        //             className: "uil uil-check green"
        //         }), (0, Ne.jsx)("div", {
        //             children: t
        //         })]
        //     })
        // };
        const Hr = function(t) {
            const [n, r] = (0, e.useState)(!1);
            return (0, Ne.jsxs)("div", {
                children: [
                    (0, Ne.jsx)("div", {
                        className: "accordian--main",
                        onClick: () => r(e => !e),
                        children: (0, Ne.jsxs)("div", {
                            className: "points-flex",
                            children: [
                                (0, Ne.jsx)("i", {
                                    className: "uil uil-check green"
                                }), 
                                (0, Ne.jsx)("div", {
                                    children: t.children
                                })
                            ]
                        })
                    }), 
                    (0, Ne.jsx)("div", {
                        className: "accordian--reply",
                        style: {
                            display: n ? "block" : "none"
                        },
                        children: t.reply ? t.reply : "Completed"
                    })
                ]
            });
        };
        
        const Wr = function(t) {
            const [n, r] = (0, e.useState)(!1);
            return (0, Ne.jsxs)("div", {
                children: [(0, Ne.jsx)("div", {
                    className: "accordian--main",
                    onClick: () => r((e => !e)),
                    children: (0, Ne.jsxs)("div", {
                        className: "points-flex",
                        children: [(0, Ne.jsx)("i", {
                            className: "uil uil-arrow-growth yellow"
                        }), (0, Ne.jsx)("div", {
                            children: t.children
                        })]
                    })
                }), (0, Ne.jsx)("div", {
                    className: "accordian--reply",
                    style: {
                        display: n && "block"
                    },
                    children: t.reply ? t.reply : "Work Under Progress"
                })]
            })
        };
        const Br = function() {
            return (0, Ne.jsxs)("div", {
                className: "indicators-container",
                children: [(0, Ne.jsxs)("span", {
                    children: [(0, Ne.jsx)("i", {
                        className: "uil uil-check green"
                    }), " Completed"]
                }), (0, Ne.jsxs)("span", {
                    children: [(0, Ne.jsx)("i", {
                        className: "uil uil-arrow-growth yellow"
                    }), " Ongoing/completed to some extent"]
                }), (0, Ne.jsxs)("span", {
                    children: [(0, Ne.jsx)("i", {
                        className: "uil uil-times red"
                    }), " Not Yet Started"]
                })]
            })
        };
        const $r = function(e) {
            let {
                toShow: t
            } = e;
            return 1 == t ? (0, Ne.jsxs)("div", {
                children: [(0, Ne.jsx)(Ir, {
                    children: ""
                }), (0, Ne.jsx)(Or, {
                    children: ""
                }), (0, Ne.jsx)(Or, {
                    children: ""
                }), (0, Ne.jsx)(Or, {
                    children: ""
                }), (0, Ne.jsx)(Or, {
                    children: ""
                }), (0, Ne.jsx)("br", {})]
            }) : 2 == t ? (0, Ne.jsxs)("div", {
                children: [(0, Ne.jsx)(Ir, {
                    children: ""
                }), (0, Ne.jsx)(Or, {
                    children: ""
                }), (0, Ne.jsx)(Or, {
                    children: ""
                }), (0, Ne.jsx)(Or, {
                    children: ""
                }), (0, Ne.jsx)(Or, {
                    children: ""
                }), (0, Ne.jsx)("br", {})]
            }) : (0, Ne.jsxs)("div", {
                children: [(0, Ne.jsx)(Ir, {
                    children: ""
                }), (0, Ne.jsx)(Or, {
                    children: ""
                }), (0, Ne.jsx)(Or, {
                    children: ""
                }), (0, Ne.jsx)(Or, {
                    children: ""
                }), (0, Ne.jsx)("br", {})]
            })
        };

        function Vr(e) {
            let {
                images: t
            } = e;
            return (0, Ne.jsx)("div", {
                children: t.map(((e, t) => (0, Ne.jsxs)("div", {
                    children: [(0, Ne.jsx)("h2", {
                        children: e.title
                    }), (0, Ne.jsxs)("p", {
                        style: {
                            fontWeight: "600"
                        },
                        children: [" ", ]
                    }), (0, Ne.jsx)("div", {
                        style: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        },
                        children: (0, Ne.jsx)("img", {
                            src: e.url,
                            alt: e.title,
                            style: {
                                width: "80%",
                                height: "auto"
                            }
                        })
                    })]
                }, t)))
            })
        }
        const qr = function(e) {
            let {
                titles: t,
                plots: n,
                responses: r
            } = e;
            const a = t.map(((e, t) => ({
                title: e,
                url: n[t],
                response: r[t]
            })));
            return (0, Ne.jsx)("div", {
                children: (0, Ne.jsx)(Vr, {
                    images: a
                })
            })
        };
        const Kr = function() {
            return (0, Ne.jsxs)("div", {
                className: "container--main",
                children: [(0, Ne.jsx)(kr, {
                    lastUpdated: "04/10/2024",
                    children: "Gssa Meter"
                }), (0, Ne.jsx)(Gr, {
                    name: "Siddharth Farkiya",
                    manlink: "https://drive.google.com/file/d/1VLPLVrevA4rJe72XDw_ERrq8Mx1D5XAc/view?usp=drive_link",
                    imgsrc: "/Siddharth_Farkiya.jpg",
                    por: "General Secretary, Sports Affairs ",
                    completed: 23.3,
                    Ongoing: 40.0,
                    notstarted: 36.7,
                    unclear: 0
                }), (0, Ne.jsx)(Br, {}), (0, Ne.jsx)(kr, {
                    children: "INITIATIVES "
                }), (0, Ne.jsx)(Ar, {
                    children: " Fit Campus,Happy Campus | "
                }), (0, Ne.jsx)(Rr, {
                    children: "Strive for Vitality"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsxs)(Hr, {
                        reply: "",
                        children: "Conduct fitness oriented body scans on National Sports Day, coupled with awareness camps to focus on injury prevention and conditioning"
                    }), (0, Ne.jsx)(Hr, {
                        children: "Launch 'SpooFit', an innovative sports league that redefines conventional sports with a strategic and lighthearted twist like Foot Volley, Pickleball, Triunity Chess"
                    }), (0, Ne.jsx)(Ur, {
                        reply: "Will be conducted in later part",
                        children: "Move towards the goal of Net Zero Sporting Events by players planting saplings post events, in collaboration with NSS and Sustainability Cell"
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: (0, Ne.jsx)("strong", {
                        children: "Anyone Can Sport  | "
                    })
                }), (0, Ne.jsx)(Rr, {
                    children: "Drive Towards Inclusivity for all"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Ur, {
                        reply:"Discussions has taken place with a few of the sports officers. Will be conducted in later part of the tenure.",
                        children: "Push for year-long training sessions ‘Novice Nook’ by coaches for beginners in all"
                    }), (0, Ne.jsx)(Wr, {
                        reply: "Workshop will be conducted in later half of October in association with Aavhan. iSURP projects haven't been completed.",
                        children: "Foster academic-sport integration by pushing for seminars and academic courses on Sports Analytics and iSURP projects in collaboration with UGAC"
                    }), (0, Ne.jsx)(Ur, {
                        reply: "Work has not started for this initiative.",
                        children: "Introduce Speakathon and Sport-o-Mania, sporting-based discussions and case competitions in sporting events igniting fresher perspectives for student engagement"
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: (0, Ne.jsx)("strong", {
                        children: "Honouring the Legacy | "
                    })
                }), (0, Ne.jsx)(Rr, {
                    children: " Connecting through the years"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Ur, {
                        reply: "In preliminary discussions with the Dean ACR",
                        children: "Establish an exclusive alumni-driven gymkhana sports fund under the Dean-ACR office specifically dedicated to teams in every sport and to aid in their development"
                    }), (0, Ne.jsx)(Wr, {
                        reply: "Preparations are underway, will be in the last week of October",
                        children: "Unveil the grand ‘Soirée des Alums’ - a nostalgia-filled alumni sports weekend,celebrating camaraderie through exhilarating exhibition matches and meet-n-greets"
                    }), (0, Ne.jsx)(Wr, {
                        reply:"The first video has been shot . The trailer has also been released, more videos will be shot in the future.",
                        children: "Introduce 'Noir Chronicles', a captivating platform inviting players and alumni to weave their tales of sporting glory and experiences in the legacy of IITB sports"
                    }), (0, Ne.jsx)(Hr, {
                        reply:"",
                        children: "Archive past Inter-IIT & GC records in IITB Sports App to preserve sports legacies"
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: (0, Ne.jsx)("strong", {
                        children: "FACILITIES & INFRASTRUCTURE | "
                    })
                }), (0, Ne.jsx)(Rr, {
                    children: " Building Bridges"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Wr, {
                        reply: "The approval has been sent to the administration for the sandpit. The budget and approval for the other facilities will be done post monsoon.",
                        children: "Push for construction of new sand pit, laying up of Tennis Ball Cricket pitches, surfacing of Basketball courts and installation of iron meshes near the Hockey field."
                    }), (0, Ne.jsx)(Wr, {
                        reply:"The approval has been sent to the administration.",
                        children: "Push for transforming the existing hockey ground into an artificial turf facility and changing the swimming pool starting blocks to enhance safety and performance"
                    }), (0, Ne.jsx)(Wr, {
                        reply:"The space for the shop has been approved, tender is to be floated. Speaker system wil be installed in squash courts.",
                        children: "Follow up on the Sports Shop in New SAC & speaker system in the Squash Courts."
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: (0, Ne.jsx)("strong", {
                        children: "NSO, INTER IIT & INSTITUTE TEAMS | "
                    })
                }), (0, Ne.jsx)(Rr, {
                    children: " Achieving Excellence"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Ur, {
                        reply: "Will be done during Inter IIT camp ",
                        children: "FitFables: Present a revealing glimpse into the behind-the-scenes of the intense Inter-IIT training regime, highlighting players' dedication and coaches' expertise"
                    }), (0, Ne.jsx)(Hr, {
                        reply: "",
                        children: "Initiate NSO Frisbee and Kabaddi programs for diversified engagement"
                    }), (0, Ne.jsx)(Ur, {
                        reply: "Contingent leaders have been selected and inter team workout session will be starting in October. Inter nso championship championship will take place later on in the tenure.",
                        children: "Initiate Inter-NSO fitness championship & paired Inter-Team structured workout. sessions, along with bi-monthly friendly matches between our teams"
                    }), (0, Ne.jsx)(Ur, {
                        reply: "Will happen after Inter IIT",
                        children: "Establish Blackcats of the Year, commemorating podium finishes, complimented by a perennial Hall of Fame honouring the Most Valuable Players, celebrating excellence every year"
                    }), (0, Ne.jsx)(Ur, {
                        reply: "Will happen after Inter IIT",
                        children: "Host a reflective contingent High Tea to felicitate the returning sports’ performers"
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: (0, Ne.jsx)("strong", {
                        children: "GIRLS' SPORTS | "
                    })
                }), (0, Ne.jsx)(Rr, {
                    children: " EmpowHer"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Wr, {
                        reply: "Session has been conducting during Girl's weight training workshop. More sessions, workshops will be conducted in the tenure.",
                        children: "Launch bi-monthly Yoga workshops dedicated to effective menstrual pain relief"
                    }), (0, Ne.jsx)(Wr, {
                        reply: "Request has been sent to the admin",
                        children: "Push for a female gym trainer to address the needs of the female students on campus, and establish scheduled regular gym induction sessions for newcomers"
                    }), (0, Ne.jsx)(Hr, {
                        reply: "",
                        children: "Conduct “Quincena’, a 14-day spanned workshop biannually including weight. training, self-defence and zumba for holistic development of female enthusiasts"
                    })]


                }), (0, Ne.jsx)(Ar, {
                    children: (0, Ne.jsx)("strong", {
                        children: "PG SPORTS & HOSTELS | "
                    })
                }), (0, Ne.jsx)(Rr, {
                    children: " Fostering Community"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Wr, {
                        reply:"Work is underway, will be conducted in October",
                        children: "Debut the 'Skill Spectra Series' featuring diverse skill-tier mini-leagues alongside 'Sports Odyssey', an intro video promoting inclusivity for PG freshers"
                    }), (0, Ne.jsx)(Ur, {
                        reply: "Will be in conducted in later part of the tenure, after monsoon.",
                        children: "Push for decentralised workshops in collaboration with hostel councils"
                    })]


                }), (0, Ne.jsx)(Ar, {
                    children: (0, Ne.jsx)("strong", {
                        children: "EVENTS & CLUBS | "
                    })
                }), (0, Ne.jsx)(Rr, {
                    children: " Elevating Sports"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Wr, {
                        reply: "Self defense workshop was conducted for girls.More sessions will be conducted in later part of the tenure",
                        children: "Conduct a survival training workshop called ‘S.A.F.E. : Safety and Awareness’ For Excellence’ for emergency situation response"
                    }), (0, Ne.jsx)(Ur, {
                        reply: "Preliminary discussions and work have started for runner's club, the event will happen in January ",
                        children: "Revive Cyclists’ Clubs and follow up on Runners’ Club to promote fitness and community engagement"
                    }), (0, Ne.jsx)(Wr, {
                        reply: "Proposal had been sent, however the sport was rejected. Updated proposal sent subsequently.",
                        children: "Sport of the Month: Reintroduce non-conventional sports & games like Fencing, GO, and Curling through workshops, cultivating diverse athletic exploration"
                    })]
                }), (0, Ne.jsx)(kr, {
                    children: "MANAGEMENT& OUTREACH "
                }), (0, Ne.jsx)(Ar, {
                    children: "Operational Excellence"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Wr, {
                        reply: "App has been made and is in the testing stage",
                        children: "Follow up on digitalisation of venue booking process for events by displaying  dynamic court availability status on IITB Sports App to be launched on Play Store and App Store"
                    }), (0, Ne.jsx)(Hr, {
                        reply: "",
                        children: "Elevate IITB sports with a comprehensive handbook, addressing common queries through detailed facility information, vendor details and recommended equipments"
                    }), (0, Ne.jsx)(Ur, {
                        reply: "Work has not started for this initiative",
                        children: "Revive prediction contests for world-wide sporting events to engage enthusiasts"
                    }), (0, Ne.jsx)(Hr, {
                        children: "Implement a Weekend Convener Training Program that includes sessions on designing, video editing, and basic technical skills to enhance self-sufficiency"
                    })]

                
                }), (0, Ne.jsx)(kr, {
                    children: "OFF MANIFESTO POINTS"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Hr, {
                        children: "Conduction of Contingent trek celebrating 100 days to Inter IIT"
                    }), (0, Ne.jsx)(Hr, {
                        children: "Increase shoe subsidy by 100%"
                    })]
                }), (0, Ne.jsx)($r, {
                    toShow: 0
                }), (0, Ne.jsx)(qr, {
                    titles: [""],
                    plots: Array.from({
                        length: 11
                    }, ((e, t) => "")),
                    responses: [117, 102, 100, 100, 100, 98, 88, 91, 88, 11, "52.5(Average respondants Per Sport)"]
                }), (0, Ne.jsx)(Ie, {})]
            })
        };
        const Qr = function() {
            return (0, Ne.jsxs)("div", {
                className: "container--main",
                children: [(0, Ne.jsx)(kr, {
                    lastUpdated: "04/10/2024",
                    children: "GSTA Meter"
                }), (0, Ne.jsx)(Gr, {
                    name: "Hardi Desai",
                    manlink: "https://drive.google.com/file/d/1Xx5NtLBgWdACQ2GD1EtvJ2aeT5xFrBO9/view?usp=drive_link",
                    imgsrc: "/gsta.jpg",
                    chartsrc: "/tech.png",
                    por: "General Secretary Technical Affairs",
                    completed: 13.3,
                    notstarted: 43.3,
                    Ongoing: 43.3,
                    unclear: 0
                }), (0, Ne.jsx)(Br, {}), (0, Ne.jsx)(Ar, {
                    children: "Inventory & Resources"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Wr, {
                        reply:"The council informed insight that booking system is completed and the inventory is also compiled. However as the Gymkhana server is down from some days, we can't push the code to make it live. We are yet to receive any proofs for verification.",
                        children: "Centralized Inventory : List all issuable inventory of various clubs on the ITC website with an integrated booking system to keep track of inventory borrowed."
                    }), (0, Ne.jsx)(Wr, {
                        reply: "The servers have been ordered from IoE funds, however they have not been delivered because of lack of proper space. Earlier, we decided to get the space in DESE building, but the HoD has changed and they are not allowing the space now.",
                        children: "Push for setting up an accessible GPU cluster to boost the computational power available, thereby enabling and accelerating AI/ML and other simulation-based student projects."
                    }), (0, Ne.jsx)(Ur, {
                        reply:"The council hasn't started the application process.",
                        children: "Establish branches of IEEE Societies in domains such as robotics and automation, power and energy, and vehicular technology to foster international networking opportunities."
                    }), (0, Ne.jsx)(Wr, {
                        reply:"The data has been collected for all tech teams, and other resources are also in place. The design is still in process",
                        children: "Tech101 Booklet: Create an infographic guide including tech team details, a roadmap to tech startups, job preparation resources, institute IP policy, and STP guidance"
                    }), (0, Ne.jsx)(Ur, {
                        reply:"The council informed us that the list to order the books has been made and the book lending system is also ready, the gymkhana server is down so it can't be made live now. However, we are yet to receive any proofs for verification.",
                        children: "Put together a book lending system in TL to enrich the hobby of technical reading "
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: "Projects & Competitions"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Ur, {
                        reply:"Council informd Insight that teams have been made for SiH, IQC; WnCC will soon hold a session about ICPC; No progress about Climate science olympiad. However, we are yet to receive any proofs for verification.",
                        children: " Encourage formation of teams consisting of club members and enthusiasts to participate in quizzing competitions, and hackathons such as the Climate Science Olympiad, ICPC, IQC"
                    }), (0, Ne.jsx)(Ur, {
                        reply: "Not started",
                        children: "Push for a one-stop Institute Projects Portal consolidating project applications and documentation from various channels such as clubs, professors, institute alumni, and CoEs"
                    }), (0, Ne.jsx)(Hr, {
                        reply: "Established brownie points for ITSP projects involving social entrepreneurship. Have not been publicised as the brand 'Sahaay'",
                        children: "Sahaay Projects: A line of projects in ITSP dedicated to helping the specially-abled, elderly, and a society with outreach support from bodies like Abhyuday and Hostel Affairs Council"
                    }), (0, Ne.jsx)(Wr, {
                        reply:"Collected the IPs list from Dean R&D's office, still seeking permission from faculties to use those IPs",
                        children: "Collaborate with faculty to take existing IPs and bring in students to find a product-market fit"
                    }), (0, Ne.jsx)(Wr, {
                        reply: "Council informed Insight that zero Waste has been established, and they are working with sustainability cell to effectively process the mess waste in biogas plant. However, we are yet to receive any proofs for verification.",
                        children: "Follow up on Team Zero Waste to work on projects towards attaining IGBC Net-Zero Campus status and further take support from Sustainability Cell to help implement in hostels"
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: "TECH FOR INSTI																				"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Wr, {
                        reply: "Preparations have been made, will be made public in the GC opening ceremony",
                        children: "Prepare detailed guidelines for hostel tech rooms that include a tentative GC calendar, minimum inventory list, and a tentative budget to receive early funding approval "
                    }), (0, Ne.jsx)(Ur, {
                        reply: "Council informed Insight that the clubs have agreed to introduce these GCs, but details and PS are yet to be decided However, we are yet to receive any proofs for verification.",
                        children: "Introduce new GCs in emerging domains like Quant, Game Development, Blockchain, Product Design to align with recent Inter IIT problem statements"
                    }), (0, Ne.jsx)(Ur, {
                        reply:"Not started",
                        children: " Push for cooperation with all institute bodies to provide data for a refined generative InstiGPT model to answer doubts and trivia in an easily navigable manner"
                    }), (0, Ne.jsx)(Wr, {
                        reply:"InstiX trying to collaborate with CSO for the security system",
                        children: 'Popularise the "Made by ITC" brand on projects taken up by bodies such as InstiX, Sandbox in collaboration with institute bodies like the Sports Council and the Hostel Affairs Council'
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: "COMMUNITY BUILDING"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Wr, {
                        reply: "Ongoing/completed to some extent",
                        children: "Take forward WISE with a booklet and social media series to spread awareness about job opportunities, scholarships, competitions from various organizations targeted towards women."
                    }), (0, Ne.jsx)(Ur, {
                        reply:"Not started",
                        children: " Conduct Science Fair alongside Tech R&D Expo with live experiments and interactive zones to give more recognition and reach to pure science clubs"
                    }), (0, Ne.jsx)(Ur, {
                        reply:"Not started",
                        children: "Introduce Tech Discussion Forum on InstiApp to promote open discussion on topics such as tech intern experiences, tech resource recommendations, & opinions on tech-related products "
                    })]

                }), (0, Ne.jsx)(Ar, {
                    children: "TECH TEAMS"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Wr, {
                        reply:"Meetings with alumni contacted through Dean ACR has been done, and they agreed to fund the tech teams for funding travel",
                        children: "Follow up with Dean R&D, ACR to seek opportunities for CSR support for tech teams"
                    }), (0, Ne.jsx)(Ur, {
                        reply:"Orientation will be held in November",
                        children: "Organise STPC Orientation to increase awareness about the program and thereby enable more number of teams focusing on competition participation"
                    }), (0, Ne.jsx)(Wr, {
                        reply:"The council informed us Autodesk softwares will be provided to the teams. However, we are yet to receive any proofs for verification.",
                        children: "Collaborate with companies to provide free professional software access to tech teams"
                    }), (0, Ne.jsx)(Wr, {
                        reply:"We are yet to receive any proofs for verification.",
                        children: "Put together an exhaustive list of IIT Bombay-registered vendors to reduce reimbursement bottlenecks "
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: "PG TECH"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Wr, {
                        reply: "The list of centres has been compiled but the visit to centres is left",
                        children: "Conduct visits to Centres of Excellence and labs inside the institute as an extension to freshers' orientation to provide insights into advanced research and hands-on facilities"
                    }), (0, Ne.jsx)(Ur, {
                        reply:"Not started",
                        children: "Ink and Think: Discussions on research papers and books to be conducted by pure science clubs to inculcate critical thinking and foster knowledge-sharing"
                    }), (0, Ne.jsx)(Hr, {
                        reply:"",
                        children: "TL Open Day for PG Freshers, providing a practical introduction to the diverse tools and resources available at Tinkerers' Lab"
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: "INTER - IIT TECH MEET"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Ur, {
                        reply: "Not started",
                        children: "Conduct Scientific Storytelling and Product Pitch boot camp for Inter IIT contingent to refine presentation and pitching skills, thus enhancing performance in final presentations"
                    }), (0, Ne.jsx)(Ur, {
                        reply: "Not started",
                        children: "Push for post-Inter IIT relationship building with companies providing PS to give further opportunities to participating members, such as internships and workshops "
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: "ALUMNI OUTREACH"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Hr, {
                        reply: "Compiled the list of alumni willing to collaborate with the tech teams",
                        children: "Establish an alumni database and enable a targeted approach for them to join in as technical advisors to relatively new and developing tech teams and tech communities "
                    }), (0, Ne.jsx)(Ur, {
                        reply: "Not started",
                        children: "ITC Newsletter: Send out a biannual newsletter to alumni about tech teams and technical achievements, TL projects and ITSP to enhance outreach and alumni engagement "
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: "MANAGERIAL REFORMS"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Wr, {
                        reply:"Ongoing/completed to some extent",
                        children: "ITC Charter: Define the objectives and functions of each entity under ITC, ensuring clarity, and coherence within the team to avoid domain clashes and foster a holistic vision"
                    }), (0, Ne.jsx)(Hr, {
                        reply: "",
                        children: "Procure an advance budget from the institute based on documentation of expected team-wise expenses in ITSP after the first review meet to minimize reimbursement delays "
                    })]
                }), (0, Ne.jsx)($r, {
                    toShow: 0
                }), (0, Ne.jsx)(qr, {
                    titles: [""],
                    plots: Array.from({
                        length: 11
                    }, ((e, t) => "")),
                    responses: [78, 62, 60, 51, 49, 46, 40, 37, 41, 37, "35.85 (Average per club)"]
                })]
            })
        };
        const Yr = function() {
            return (0, Ne.jsxs)("div", {
                className: "container--main",
                children: [(0, Ne.jsx)(kr, {
                    lastUpdated: "04/10/2024",
                    children: "Gsaa Meter"
                }), (0, Ne.jsx)(Gr, {
                    name: "Arjun Saikumar Simha",
                    manlink: "https://drive.google.com/file/d/10zn7jYd4WPkdT0XKOEG_sUXZYUs4VHBu/view?usp=drive_link",
                    chartsrc: "/ACADug.png",
                    imgsrc: "/ArjunSimha.jpg",
                    por: "General Secretary Academic Affairs UG",
                    completed: 27.6,
                    notstarted: 44.8,
                    Ongoing: 27.6,
                    unclear: 0
                }), (0, Ne.jsx)(Br, {}), (0, Ne.jsx)(Ar, {
                    children: "Key Initiatives"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Ur, {
                        reply: "Not started",
                        children: 'Initiate a comprehensive Career Building Program assisting students to identify which career domain they might be interested in and help them build a profile suitable to their interests.'
                    }), (0, Ne.jsx)(Ur, {
                        reply: "The council mentioned that the Dean had verbally agreed in principle to obtain the names of students who had applied for scholarships.",
                        children: "Push to extend even semester fee payment deadline for students who apply for institute scholarships to avoid offline registration, late registration fines, and missing out on in-demand elective courses."
                    }), (0, Ne.jsx)(Wr, {
                        reply: "The council reported that a proposal had been made and was awaiting signatures from the Deans FIA, AP, and SA.",
                        children: "Propose the introduction of student-run crash courses under a Course Buddy Program to tutor students and improve academic performance in specific course re-examinations."
                    }), (0, Ne.jsx)(Ur, {
                        reply: "Not started",
                        children: "Push to introduce Interdisciplinary RnD Project Courses from Centres of Excellence like C-MINDS, similar to DH307 offered by KCDH."
                    }), (0, Ne.jsx)(Ur, {
                        reply: "Not started",
                        children: "Pioneer the creation of the IIT Bombay Undergraduate Research Journal to provide a platform for innovative UG research to be published and promoted within industries."
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: "INFORMATION DISSEMINATION AND AWARENESS "
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Wr, {
                        reply: "Ongoing/completed to some extent",
                        children: "Formalize and restructure a 'My Branch at IITB' video series in collaboration with the institute administration to help students make an informed decision before beginning JOSAA Counselling."
                    }), (0, Ne.jsx)(Ur, {
                        reply: "The council indicated that research funding is ongoing.",
                        children: "Incorporate the procedure, eligibility criterion, requirements, and scope of research for UG students to avail funding to present at research conferences into the UG information booklet."
                    }), (0, Ne.jsx)(Hr, {
                        children: "Publish an academic policy newsletter to keep students informed about the various institute-level decisions approved in the Senate."
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: "ACADEMIC AND POLICY REFORMS "
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Wr, {
                        reply: "The council stated that the proposal had been submitted to the UGPC.",
                        children: "Push to allow credit limit extensions for students in ARP on a case-to-case basis."
                    }), (0, Ne.jsx)(Hr, {
                        children: "Push to redefine Category V to provide credit limit flexibility & prevent degree extension by reducing the number of semesters in which credit restrictions are imposed on students."
                    }), (0, Ne.jsx)(Wr, {
                        reply: "The council noted that the initiative had been implemented in the Mechanical and Chemical Engineering departments.",
                        children: "Continue pushing to formalize the structure and scope of department-level committees which ensure uniformity in course content and grading policies across different sections in a course."
                    }), (0, Ne.jsx)(Hr, {
                        reply: "The council confirmed that they were collaborating with the Department General Secretaries instead of the DAMP teams.",
                        children: "Reimplement a student-led feedback mechanism to identify and solve academic pain points within the new academic curriculum in collaboration with the D-AMP teams."
                    }), (0, Ne.jsx)(Wr, {
                        reply: " The council stated that the proposal had been submitted.",
                        children: "Propose to increase the pre-final year retagging window to increase the time available to change course tags and avoid discrepancies prior to placements and IDDDP applications."
                    }), (0, Ne.jsx)(Ur, {
                        reply: "Not started",
                        children: "Propose to allow IDC students to pre-register for allowed courses as electives run in slot 12-15."
                    }), (0, Ne.jsx)(Wr, {
                        reply: "The council stated that the proposal had been submitted.",
                        children: "Push to allow running of summer courses for courses that no longer exist in the new curriculum even if the number of enrolled students is less than 5."
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: "Web and Infrastructure"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Ur, {
                        reply: "Not started",
                        children: "Propose to add a Rate My Professor section on ResoBin to help students provide and receive filtered feedback on professors based on a variety of parameters."
                    }), (0, Ne.jsx)(Ur, {
                        reply: "Not started",
                        children: "Develop a portal to provide updates on the status of the applications and academic documents submitted for approval."
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: "PROMOTION OF WORK EXPERIENCE AND RESEARCH"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Ur, {
                        reply: "Not started",
                        children: 'Implement Research Pathways – a program to help students refine their research interests by simplifying sub-fields of various disciplines and connecting them with experienced seniors in those areas.'
                    }), (0, Ne.jsx)(Hr, {
                        children: "Organize an institute-wide Industrial Hackathon to encourage student-led technical research, focusing on industrial relevance, with opportunities to showcase projects and win prizes."
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: "CAREER CELL"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsxs)(Ur, {
                        reply: "Not started",
                        children: "Develop a preparation program for startup jobs designed for UG students interested in pursuing career opportunities in startups."
                    }), (0, Ne.jsx)(Wr, {
                        reply: "The council mentioned that a new booklet was being prepared for GRE, GMAT, MFin, and MBA programs.",
                        children: 'Revamp the GRAD Booklet to include information about M.Fin and MBA programs and provide a roadmap for GRE and GMAT preparation.'
                    }), (0, Ne.jsx)(Hr, {
                        children: 'Initiate "Career Pivot Series" – a series of sessions to help students navigate uncertainty in changing their career paths or domains catering to their professional aspirations.'
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: "STUDENT SUPPORT SERVICES"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Ur, {
                        reply: "Not started",
                        children: 'Launch "LHC Central" – a repository of academic help videos for various courses, created by students, aimed at improving conceptual clarity and addressing doubts.'
                    }), (0, Ne.jsx)(Wr, {
                        reply: "Ongoing/completed to some extent",
                        children: "Build on existing efforts to curate and publish a comprehensive academic query booklet."
                    }), (0, Ne.jsxs)(Hr, {
                        children: "Broaden the scope of ExCel sessions to offer academic help in regional languages."
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: "CLUBS"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Hr, {
                        children: "Introduce a Quant Trading Division under the Investment Team to enable members to gain practical experience and create resources to help students in pursuing quantitative finance."
                    }), (0, Ne.jsx)(Ur, {
                        reply: "Not started",
                        children: "Organize a Consulting Symposium to provide exposure to students in international policy making, impact, political, and ESG consulting under Consult Club."
                    }), (0, Ne.jsx)(Ur, {
                        reply: "Not started",
                        children: "Curate an Analytics Career Guide informing students about various job profiles in analytics and include guided business analytics case demonstrations to aid in preparation."
                    }), (0, Ne.jsx)(Hr, {
                        children: "Release Industry Primers to showcase the popular trends, growth drivers, and recent news in diverse industries to help students stay up-to-date with current affairs and developments."
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: "Off-Manifesto Initiatives"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Wr, {
                        reply: "Ongoing/completed to some extent",
                        children: "Students with FR grades in Additional Learning Courses to be eligible for institute medals"
                    }), (0, Ne.jsx)(Hr, {
                        children: "Got HS3XX and ES250 to run as a summer course for the first time in 3 years"
                    }), (0, Ne.jsx)(Hr, {
                        children: "Changed the credit limit in the final semester, allowing students even with less than 54 credits remaining to graduate override their category credit limit in order to graduate on time"
                    }), (0, Ne.jsx)(Hr, {
                        children: "Allow students to take up NPTEL or self study courses for core courses even if they are not in extension for discontinued courses which have no equivalent currently"
                    })]
                }), (0, Ne.jsx)($r, {
                    toShow: 2
                }), (0, Ne.jsx)(qr, {
                    titles: [""],
                    plots: Array.from({
                        length: 15
                    }, ((e, t) => "")),
                    responses: [138, 123, 122, "105.83 (Average responses per body)", 108, 104, 105, 104, 107, 107, 108, 107, 113, 93, 84]
                }), (0, Ne.jsx)(Ie, {})]
            })
        };
        const Xr = function() {
            return (0, Ne.jsxs)("div", {
                className: "container--main",
                children: [(0, Ne.jsx)(kr, {
                    lastUpdated: "04/10/2024",
                    children: "Gsaa Meter"
                }), (0, Ne.jsx)(Gr, {
                    name: "Kunal Kailash Sharma",
                    manlink: "https://drive.google.com/file/d/1gmJPE6h_nEeQBFHVjtA1S0XD_Gx9g18k/view?usp=sharing",
                    imgsrc: "/gsaaPg.jpg",
                    por: "General Secretary Academic Affairs PG",
                    chartsrc: "",
                    completed: 6.7,
                    notstarted: 73.3,
                    Ongoing: 20.0,
                    unclear: 0
                }), (0, Ne.jsx)(Br, {}), (0, Ne.jsx)(Ar, {
                    children: "SKILL DEVELOPMENT"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Wr, {
                        reply: "The first of the events is planned to take place in the coming week. ",
                        children: "Organize a set of workshops on management and soft skills for PG students. "
                    }), (0, Ne.jsx)(Ur, {
                        reply: "Planned for later in the tenure as the council has to reach out to relevant stakeholders.",
                        children: "Propose the addition of training videos for SAIF or DRONA."
                    }), (0, Ne.jsx)(Wr, {
                        reply: "Student acceleration programs that are skill development sessions are planned to be organised later in the tenure.",
                        children: "Organising placement related skill development workshops for PG students."
                    }), (0, Ne.jsx)(Ur, {
                        reply: "Spoken to Dean RnD regarding this initiative.",
                        children: "Pushing for signing MOUs with online learning platform for getting discounted or free self-paced courses."
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: "ACADEMICS/R&D"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Ur, {
                        reply: "Currently, the library gives access to papers when individual requests are made; however, open access for all students is still in progress.",
                        children: "Propose the inclusion of more journals for the access to researchers."
                    }), (0, Ne.jsx)(Wr, {
                        reply: "International conference portal made online. Others grievances can usually be addressed on a case-to-case basis.",
                        children: "Ensure procedural documentation of common academic related grievances in administration."
                    }), (0, Ne.jsx)(Ur, {
                        reply: "Changing the curriculum change requires multiple stakeholder involvement and will take time.",
                        children: "Push for proposing the inclusion of a mandatory “Al in research” course in MTech & MSc curriculum review."
                    }), (0, Ne.jsx)(Ur, {
                        reply: "Hard to pursue on a development level for every department.",
                        children: "Push for department level MOUs with local government colleges to resolve the difficulty and uncertainties faced by PMRF students to fulfil external TA requirements."
                    }), (0, Ne.jsx)(Ur, {
                        reply: "Not started yet.",
                        children: "Proposing the addition of specialisation in PhD Degree depending on the bucketed list of subjects done by the students."
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: "Research Conclave"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Ur, {
                        reply: "Similar events have been planned for Techconnect. ",
                        children: "To introduce a Research Tank to foster the collaboration between industry and academia."
                    }), (0, Ne.jsx)(Wr, {
                        reply: "The handbook is the first step to a journal; work on it has started. Will happen based on TechConnect. ",
                        children: "Aim to start an IITB Research Journal as similar to MIT Press."
                    }), (0, Ne.jsx)(Ur, {
                        reply: "Wanted to do a model based competition. Not started yet.",
                        children: "To Introduce software and Hardware based research hackathons similar to Smart India Hackathons."
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: "Placements/Internships"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Ur, {
                        reply: "Not started yet.",
                        children: "Launch a video series on PGAC YouTube channel to provide placement/Internship guidance by already placed students and alumnus. "
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: "Cross-Department Knowledge Transfer"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Ur, {
                        reply: "Not started yet.",
                        children: "To follow-up on ReslEx portal (research information exchange portal) that will facilitate inter and intra departmental research facility information to completion and to newly include database of attended conferences campus wide."
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: "Policies for Funding"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Ur, {
                        reply: "Immediate opportunities are posted on webmail. Documentation of recurring funding opportunities will be collected. ",
                        children: "To document the funding opportunities with regards to the conferences for all PG students."
                    }), (0, Ne.jsx)(Ur, {
                        reply: "Has been reported to Dean AP and is currently done on a case-to-case basis.",
                        children: "Propose a policy for continuation of stipend during his/her leave if it exceeds 30 days/ annum in case of mishappening."
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: "Policies for Academics "
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Hr, {
                        reply:"The retagging window was increased for students in collaboration with GSAA UG. ",
                        children: "Increasing the windows given for retagging of the courses for MTechs students before placement season."
                    }), (0, Ne.jsx)(Ur, {
                        reply: "The policy was drafted in the previous tenure. Follow-up is yet to be done.",
                        children: "Follow-up the policy on APS restructuring in order to reduce the duration of PhD."
                    }), (0, Ne.jsx)(Ur, {
                        reply: "Not started yet ",
                        children: "Pushing for updating of departmental websites by including research scholars’ profiles and adding equipments and instruments details."
                    }), (0, Ne.jsx)(Wr, {
                        reply: "The proposal has been followed up with the Senate. ",
                        children: "Follow-up on the ongoing policy for direct PhD students for obtaining an additional master’s degree."
                    }), (0, Ne.jsx)(Ur, {
                        reply: "It does not fall directly under the purview of the council, but it can be pushed for with the help of DGSecs. ",
                        children: "Pushing for the updating of the Department Constitution."
                    }), (0, Ne.jsx)(Ur, {
                        reply: "HoD's let students to know the list of courses allowed every semester.",
                        children: "Follow-up on pre-approval of NPTEL courses for each academic unit every semester."
                    }), (0, Ne.jsx)(Ur, {
                        reply: "Currently, IRCC ensures this happens for the required students however the council will try to push for a policy.",
                        children: "Proposing a policy to ensure the continuity of the admissible stipend of TAP students afler completion/Termination of the project."
                    }), (0, Ne.jsx)(Ur, {
                        reply: "The feasibility of the point has been checked by the council and guides cannot be changed for TAP students. ",
                        children: "Documentation of change of supervisor guidelines for TAP/FA students."
                    }), (0, Ne.jsx)(Ur, {
                        reply: "The point has been looked into by the council, and currently, only DGSecs can nominate AURAAs to be present in the meetings but not as permanent members.",
                        children: "Proposing the policy of inclusion of AURAAs in DPGC Meetings."
                    }), (0, Ne.jsx)(Ur, {
                        reply: "The council plans to talk with Dean SA.",
                        children: "To propose scrap committee formation for clearing chemical and hardware-based waste product across all the departments."
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: "Mental Health "
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Hr, {
                        reply: "Mentees have been alloted and groups have been formed. ",
                        children: "Introducing 1 to 1 mentorship programme foreign students."
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: "Follow-ups"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Ur, {
                        reply: "Not started yet.  ",
                        children: "To follow up on streamlining the recent stipend increase for TAP category students and ensure auto-upgradation from JRF to SRF conversion."
                    }), (0, Ne.jsx)(Wr, {
                        reply: "Communication with Dean AP has been initiated. Sample draft certificates are in progress and then will go to HoDs.",
                        children: "To follow up on proposal of TAship certificate to provide the proof for internship and placement at institute level."
                    }), (0, Ne.jsx)(Ur, {
                        reply: "The proposal was not successful at the senate after joint efforts from ex-GSAA PG and current.",
                        children: "To follow up the proposal for Mtech options (by coursework and/or by thesis)."
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: "Off Manifesto Points"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Wr, {
                        reply: "The primary role of the council is to organise TechConnect and assist in research initiatives. ",
                        children: "Proposed constitution of IITB research council under IRCC. "
                    }), (0, Ne.jsx)(Wr, {
                        reply: "Speaker has been decided for the event. ",
                        children: "Conducting an event on women's safety: safe city app (POSH)."
                    }), (0, Ne.jsx)(Wr, {
                        reply: "In collaboration with GSTA. ",
                        children: "Adding rulebooks in the chatbots instigpt to help reduce student grievences."
                    }), (0, Ne.jsx)(Wr, {
                        reply:"The GSAA PG sent a mail regarding this to Dean SA in August",
                        children: "Proposed setting up of digital notice boards near IDC, the entrance of the infinity corridor and the vicinity of LHC/SOM to improve event visibility. "
                    }), (0, Ne.jsx)(Wr, {
                        reply: "Ongoing/Completed to some extent",
                        children: "Proposing a draft for running summer courses for PG students. "
                    })]
                }), (0, Ne.jsx)($r, {
                    toShow: 0
                }), (0, Ne.jsx)(Or, {
                    children: ""
                }), (0, Ne.jsx)(qr, {
                    titles: [""],
                    plots: Array.from({
                        length: 10
                    }, ((e, t) => "")),
                    responses: [19, 18, 18, 16, 18, 16, 16, 17, 17, 16]
                }), (0, Ne.jsx)(Ie, {})]
            })
        };
        const Jr = function() {
            return (0, Ne.jsxs)("div", {
                className: "container--main",
                children: [(0, Ne.jsx)(kr, {
                    lastUpdated: "04/10/2024",
                    children: "Gsha Meter"
                }), (0, Ne.jsx)(Gr, {
                    name: "Vikash Swami",
                    manlink: "https://drive.google.com/file/d/1uSrWdnf76pmENlC5HoFwqcIxrQTu56Pi/view?usp=sharing",
                    imgsrc: "/gsha.jpg",
                    por: "General Secretary Hostel Affairs",
                    chartsrc: "/hostel.png",
                    completed: 23.3,
                    notstarted: 16.7,
                    Ongoing: 60.0,
                    unclear: 0
                }), (0, Ne.jsx)(Br, {}), (0, Ne.jsx)(Ar, {
                    children: "Eateries and Mess"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Wr, {
                        reply:"It will be constructed in the H14 extension as part of a bigger project in the area.",
                        children: "Push for the establishment of a New Mess facility between Hostel 13 & 14"
                    }), (0, Ne.jsx)(Hr, {
                        reply:"Vending machines have been installed and are operational in several hostels; have been approved for academic areas and the process is underway.",
                        children: "Install 24x7 Vending Machines along with remote purchasing via a mobile application for snacks, beverages, & healthy options in hostel & academic area"
                    }), (0, Ne.jsx)(Hr, {
                        reply:"The construction is underway. The tender has been floated and vendors are applying; it should be operational in November",
                        children: "Follow up on the completion of the LHC Food Court featuring charging outlets, refreshments, & seating area for students to relax in between classes"
                    }), (0, Ne.jsx)(Wr, {
                        reply:"Amul has been given permission for a dairy shop, on-ground work to be started by mid-october.",
                        children: "Set up a new store selling day-to-day Dairy Products to promote healthy snacking"
                    }), (0, Ne.jsx)(Wr, {
                        reply:"Ongoing/completed to some extent",
                        children: "Follow up on the implementation of a centralized Institute Eateries Portal to integrate & streamline ordering from various canteens across the institute"
                    }), (0, Ne.jsx)(Wr, {
                        reply:"The council is in talks with potential vendors ",
                        children: "Propose setting up Cloud Kitchen based food outlets in Project Evergreen"
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: "TRANSPORTATION"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Wr, {
                        reply: "In conversation with the vendor, who has agreed to supply more EVs however, they are waiting for the multilevel parking to be completed.",
                        children: "Ensure the introduction of E-Scooters & more E-Shuttles while expanding overall operational time to enable 24x7 transportation service in the institute"
                    }), (0, Ne.jsx)(Ur, {
                        reply:"The talks have been initiated with the startup but they would need to do some research",
                        children: "Introduce the concept of Battery Replacement with spare charged batteries to increase overall on-road availability of E-Shuttles in addition of new routes"
                    }), (0, Ne.jsx)(Wr, {
                        reply:"Installation of signage boards has been done, the rest however is still in works. In hostel areas, traffic roadway markings will be done after hostel construction.",
                        children: "Increase campus road safety by installing convex mirrors, follow up on safety signage boards, traffic roadway markings on all roads of the institute"
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: "Transparency and Accountability"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Hr, {
                        children: "Publish minutes of HGSC, Network and computing, Maintenance-Mess Committee meetings"
                    }), (0, Ne.jsx)(Hr, {
                        children: "Follow up on setting up of the Student grievance cell (develop a portal for addressing issues with feedback)"
                    }), (0, Ne.jsx)(Wr, {
                        children: "Follow up on the formation of the hostel constitution"
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: "HOSPITAL & PUBLIC HEALTH"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Wr, {
                        reply:"A committee has been formed to overlook the digitalisation of the hospital, PoA and vendor has been finalized.",
                        children: "Follow up on Digital Appointments, Health Management Information Systems & Digital Prescriptions by pushing for IIT Bombay Hospital digitalization"
                    }), (0, Ne.jsx)(Wr, {
                        reply:"Ongoing/completed to some extent",
                        children: "Follow up on the installation of Sanitary Pad Vending Machines & Hand Dryers at major areas in the institute and Incinerator Machines for their safe disposal"
                    }), (0, Ne.jsx)(Wr, {
                        reply:"Ongoing/completed to some extent",
                        children: "Push for completion of PHO Digitalization to streamline room cleaning request, cleanliness verification of hostel areas, common areas & raising sanitation complaints"
                    }), (0, Ne.jsx)(Ur, {
                        reply:"The council is in liaison with the administration to follow up on this.",
                        children: "Conduct a Full Body Health Checkup, including eye testing, hearing audiometry tests, complete blood count tests to boost the overall health of students"
                    }), (0, Ne.jsx)(Ur, {
                        reply:"Instead of a portal, a comprehensive form is being developed which will be linked to a central hospital digitalized portal, for which the PoA and vendor has been finalized.",
                        children: "Develop a new comprehensive Hospital Feedback & Complaint Portal to address the issues and grievances faced by the students"
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: "INSTITUTE-WIDE FACILITIES"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Ur, {
                        reply:"For 12-13-14 redevelopment project is in the works and new cycle shop will be made there; further the H3 repair shop space willl be redeveloped and the new vendor has been finalized.",
                        children: "Establish a new Cycle Repair Shop near H12-13-14 to cater to needs of the students"
                    }), (0, Ne.jsx)(Wr, {
                        reply:"Ongoing/completed to some extent",
                        children: "Propose the establishment of a Centralized Laundry Service to cater to general & special needs of people like dry cleaning, suction cleaning, & steam cleaning"
                    }), (0, Ne.jsx)(Hr, {
                        reply: "A portal where the waitlist can also be seen is live.",
                        children: "Follow up on the implementation of Married Research Scholar Portal to ease the flat allotment process for married PhD students"
                    }), (0, Ne.jsx)(Wr, {
                        reply:"Ongoing/completed to some extent",
                        children: "Push for the integration of various hostel affairs related portals with MyIITB for centralized access"
                    }), (0, Ne.jsx)(Wr, {
                        reply:"Ongoing/completed to some extent",
                        children: "Promote the adoption of the AMS & establish new digital workflows to streamline standard procedures & permission processes in major institute offices"
                    }), (0, Ne.jsx)(Wr, {
                        reply:"The tender is being worked on. The space has been constructed.",
                        children: "Follow up on establishing a new Hair Salon for institute populous"
                    }), (0, Ne.jsx)(Wr, {
                        reply:"It is being constructed in parts of the institute, starting with H1. Two automatic doors have been installed",
                        children: "Push for establishing more Inclusive Infrastructure like ramps, handrails, automatic doors, special needs washrooms to aid student ease & mobility"
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: "SECURITY"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Ur, {
                        reply:"Not started",
                        children: "Propose the monitoring of vehicle entry-exit by introducing License Plate Scanning System to record vehicle details and maintain an accessible digital database"
                    }), (0, Ne.jsx)(Wr, {
                        reply:"Ongoing/completed to some extent",
                        children: "Ensure Emergency Alarm & PA Systems are installed & running for all hostels and Mock Safety Drills are conducted for early evacuation in case of hazardous situations"
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: "SUSTAINABLE & AESTHETIC CAMPUS"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Wr, {
                        reply:"The proposal has been approved by A Dean SA",
                        children: "Implement a Water Overflow Protection System to reduce wastage in water tanks."
                    }), (0, Ne.jsx)(Hr, {
                        reply:"There is a proposal to write hostel names through bushes",
                        children: "Follow up on the installation of Digital Display Boards at various locations within the institute and Boathouse Renovation for institute beautification"
                    }), (0, Ne.jsx)(Wr, {
                        reply:"Ongoing/completed to some extent",
                        children: "Propose the construction of aesthetic structures like Sculptures, Vertical Gardens while promoting Plantation Drive to beautify the existing campus infrastructure"
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: "Miscellaneous"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Hr, {
                        reply:"Tender has been floated. Vendors will be finalized before end-sems.",
                        children: "Follow up with hostel 9, 11, 17, 18 & Tansa councils to set up night canteens"
                    }), (0, Ne.jsx)(Hr, {
                        children: "Draft a new Handbook to include procedures & duties of EMD, Estate department, & PHO to ensure greater accountability & procedural awareness"
                    }), (0, Ne.jsx)(Wr, {
                        reply:"The construction has already begun, was halted because of monsoons",
                        children: "Push for the execution of Umbrella Project consisting of road & cycle track renovation and follow up on the construction of Cycle Stand & Shed in each hostel"
                    }), (0, Ne.jsx)(Hr, {
                        reply:"Completed in some hostels already",
                        children: "Push for the expansion of IITB Wireless coverage to all hostels"
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: "Off Manifesto Points"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Wr, {
                        reply:"Ongoing/completed to some extent",
                        children: "Establish dedicated EV stops with sheds to support sustainable transport and convenience"
                    }), (0, Ne.jsx)(Wr, {
                        reply:"Ongoing/completed to some extent",
                        children: "Install dustbin holders in all hostels to prevent dustbin tumbling, ensuring better stability and hence cleanliness"
                    }), (0, Ne.jsx)(Wr, {
                        reply:"Ongoing/completed to some extent",
                        children: "Develop aesthetic seating areas for general discussions, enhancing campus interaction and visual appeal."
                    }),(0, Ne.jsx)(Hr, {
                        children: "Organising open house meetings in Hostels"
                    })]
                }), (0, Ne.jsx)($r, {
                    toShow: 0
                }), (0, Ne.jsx)(qr, {
                    titles: [""],
                    plots: Array.from({
                        length: 10
                    }, ((e, t) => "")),
                    responses: ["", 122, 121, 120, 124, 123, 121, 121, 122, 122]
                }), (0, Ne.jsx)(Ie, {})]
            })
        };
        const Zr = function() {
            return (0, Ne.jsxs)("div", {
                className: "container--main",
                children: [(0, Ne.jsx)(kr, {
                    lastUpdated: "04/10/2024",
                    children: "Gsca Meter"
                }), (0, Ne.jsx)(Gr, {
                    name: "Ishaan Abhyankar",
                    manlink: "https://drive.google.com/file/d/1DKyBrpEwVDP9y8UzZM0x_BrCY13NsOH_/view?usp=drive_link",
                    imgsrc: "/ishaanGSCA.jpg",
                    por: "General Secretary Cultural Affairs ",
                    completed: 20.0,
                    notstarted: 36.0,
                    Ongoing: 44.0,
                    unclear: 0
                }), (0, Ne.jsx)(Br, {}), (0, Ne.jsx)(Ar, {
                    children: "PROFESSIONAL OPPORTUNITIES | "
                }), (0, Ne.jsx)(Rr, {
                    children: "BEYOND THE WALLS"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Ur, {
                        reply: "The council will not be able to complete it. The Dean Student Affairs had denied permission to conduct it when they had reached out during the summer.",
                        children: 'Thrive: Facilitate professional opportunities for students in the form of Live Your Passion, awarded for completing ICSP projects and stand-out efforts'
                    }), (0, Ne.jsx)(Ur, {
                        reply: "The council has decided to conduct it only during the second semester.",
                        children: "Keynote: Organize fortnightly talk sessions in both semesters featuring prominent, cultural personalities, fostering insightful discussions across various genres"
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: "SOCIAL IMPACT | "
                }), (0, Ne.jsx)(Rr, {
                    children: "Cult-For-A-Cause"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Wr, {
                        reply: "The council has drafted a proposal in collaboration with NSS as of 2nd October 2024.",
                        children: 'Paathshala: Reinitiate collaboration with NSS IIT Bombay for outreach initiatives focused on providing cultural classes to underprivileged students across communities.'
                    }), (0, Ne.jsx)(Wr, {
                        reply: "A street play was organized in front of Domino's on 29 August 2024. No plays have been conducted outside of the institute yet. The council is planning to conduct them at Happy Streets on 6 October 2024.",
                        children: "Beyond the Gates: Organize Street plays and flash mobs at various iconic Mumbai locales, with a special emphasis on raising awareness for various social causes"
                    })]

                }), (0, Ne.jsx)(Ar, {
                    children: "HOSTEL & PG CULTURE | "
                }), (0, Ne.jsx)(Rr, {
                    children: "Cult Coming To You"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Wr, {
                        reply: "The council has drafted a proposal for the SWC and it was submitted on 2nd October 2024. The events are planned for at least some hostels around 11-13 October 2024 on account of Mental Health Day on 11 October 2024.",
                        children: "Mood Mural: Collaborate with the Student Wellness Centre to organize hostel wall painting events, fostering bonding, and creating more lively and beautiful living environments"
                    }), (0, Ne.jsx)(Wr, {
                        reply: "An open mic was conducted in H18 in August. The council is planning to cover other hostels later",
                        children: "Sarhad Paar: Arrange open mics across hostels to enhance artistic expression while improving inter-hostel bonding and giving performers a chance to practice."
                    }), (0, Ne.jsx)(Hr, {
                        reply: "",
                        children: "Awareness: Host a comprehensive GC briefing session for all cultural councillors to build awareness about the various available resources, leading to higher-quality entries."
                    }), (0, Ne.jsx)(Ur, {
                        reply: "Tea parties will happen at the end of the semester. The council has already discussed with the hostel councils of H12, H13 and H14.",
                        children: "Utilize tea parties organized in PG Hostels to host jamming sessions and photo booths in collaboration with the hostel councils."
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: "INNOVATION | "
                }), (0, Ne.jsx)(Rr, {
                    children: "Pioneering Culturals"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Hr, {
                        reply: "This event happened as part of 'Carve-a-thon' conducted as part of PG Cult Informals 1 on 31st August. ",
                        children: "Culinary Lens: Initiate collaboration between Photography and Culinary clubs to capture food art via photography, offering exposure to both photographers and food artists"
                    }), (0, Ne.jsx)(Ur, {
                        reply: "It hasn't started since flagships of most cultural genres will happen during the second semester.",
                        children: "Behind the Curtains: Create club-wise mini-documentaries covering behind-the-scenes of flagships for long-term content aggregation and showcase in later events"
                    }), (0, Ne.jsx)(Hr, {
                        reply: "Professor RK Pant performed during PG Culturals orientation",
                        children: "Faculty Fusion: Push for faculty performances in orientations to bridge the gap between them and freshers thus encouraging student participation and inclusivity"
                    }), (0, Ne.jsx)(Hr, {
                        reply: "",
                        children: "Cult Gyan: Create a genre-wise and overall point-tracking mechanism to encourage multi- genre participation and help determine Cultural Freshmen of the Year"
                    })]


                }), (0, Ne.jsx)(Ar, {
                    children: "WEB & PUBLICITY | "
                }), (0, Ne.jsx)(Rr, {
                    children: "Broadcasting Culturals"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Ur, {
                        reply: "PAF and Freshiezza haven't happened yet.",
                        children: "Boost spot merchandise sales with instant customization options and live stalls during major events like PAF & Freshiezza, aiming to enhance post-event publicity "
                    }), (0, Ne.jsx)(Wr, {
                        reply: "The participant database management system is ready to maintain records of participation of students in various club activities but data is yet to be uploaded on the website.",
                        children: 'Introduce a participant database management system to maintain organized records to aid resume verification and generate e-certificates for workshops/competitions.'
                    }), (0, Ne.jsx)(Hr, {
                        reply: "",
                        children: "Release cultural calendar on the ICC website, and also include an iCal and VCS for convenience and to give timely reminders for all students."
                    }), (0, Ne.jsx)(Ur, {
                        reply: "The council is planning to do it for Freshiezza.",
                        children: "Revamp publicity with AR-enhanced posters, eco-conscious installations, and AR- activated photobooths to deliver immersive and interactive glimpses of events."
                    })]
                }), (0, Ne.jsx)(Ar, {
                    children: "INFRASTRUCTURE & TRAINING |"
                }), (0, Ne.jsx)(Rr, {
                    children: "Seamless Culturals"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Wr, {
                        reply: "The council is planning to procure this inventory using the funds from the Nandan Nilekani proposal. The proposal has been presented to the Dean but funds haven't been received yet.",
                        children: "Push for acquiring inventory like theatre lights, sewing machines, and cupboards."
                    }), (0, Ne.jsx)(Wr, {
                        reply: "The council is planning to procure this inventory using the funds from the Nandan Nilekani proposal. The proposal has been presented to the Dean but funds haven't been received yet.",
                        children: "Procure inventory like cameras and storage devices for ICC's publicity and marketing team to assist with content creation and expand an in-house content library."
                    }), (0, Ne.jsx)(Wr, {
                        reply: "The council has arranged a carpenter to build ramps. The council said it will be done by the second week of October.",
                        children: "Improve accessibility of SAC rooms for specially-abled persons via ramps."
                    }), (0, Ne.jsx)(Wr, {
                        reply: "The council is planning to echo-proof the theatre room using the funds from the Nandan Nilekani proposal. The proposal has been presented to the Dean but funds haven't been received yet. The soundproofing of the music room will be done using the ICC budget.",
                        children: "Push for soundproofing in the Music Room and echo-proofing in the Theatre Room."
                    }), (0, Ne.jsx)(Ur, {
                        reply: "The council is planning to conduct it in the week of 1 October-7 October 2024.",
                        children: "Conduct workshops on delicate inventory handling for newly acquired items, promoting safe and efficient use while encouraging responsible handling practices."
                    })]
                
                }), (0, Ne.jsx)(Ar, {
                    children: "FOLLOW-UPS | "
                }), (0, Ne.jsx)(Rr, {
                    children: "Continuing Culturals"
                }), (0, Ne.jsxs)(Or, {
                    children: [(0, Ne.jsx)(Ur, {
                        reply: "Not started",
                        children: "Freelance Cult: Set up a freelancing portal for all relevant cultural clubs to provide opportunities of value to students."
                    }), (0, Ne.jsx)(Wr, {
                        reply: "The council had submitted a proposal for NSO Fashion during May 2024. 4 months will be required for its implemetation and hence it wasn't included in the NSO activities  of the UG'24 batch.",
                        children: "Push for the inclusion of NSO Fashion Design, NSO Filmmaking, and NSO Debate."
                    }), (0, Ne.jsx)(Ur, {
                        reply: "Inter IIT is to be conducted in December.",
                        children: "Organize a team dinner before Inter-IIT for contingents to break the ice and raise morale."
                    }), (0, Ne.jsx)(Wr, {
                        reply: "Yoga room has been whitewashed and painted as of 2 October 2024.",
                        children: "Follow up on the refurbishment of the Old SAC Yoga Room, adding ambience, seating arrangement, bookshelves, and mic stands with adequate storage space to cater to the requirements of various clubs."
                    })]
                
                }), (0, Ne.jsx)($r, {
                    toShow: 0
                }), (0, Ne.jsx)(qr, {
                    titles: [""],
                    plots: Array.from({
                        length: 10
                    }, ((e, t) => "")),
                    responses: [74, 54, 56, 53, 54, 49, 51, 17, 47, "33.7 (Average responses per club)"]
                }), (0, Ne.jsx)(Ie, {})]
            })
        };

        function ea() {
            return (0, Ne.jsxs)("div", {
                className: "container--main",
                children: [(0, Ne.jsx)(Gr, {
                    name: "Divya Mrinal",
                    manlink: "https://drive.google.com/drive/folders/1WId3MhG6sZo0XGrM3NG0b79_cglhM340",
                    imgsrc: "",
                    por: "General Secretary Cultural Affairs "
                }), (0, Ne.jsx)(Br, {}), (0, Ne.jsx)("div", {
                    className: "piechart",
                    children: (0, Ne.jsx)(Mr.PieChart, {
                        data: [{
                            title: "Not Yet Started",
                            value: 41.5,
                            color: "#FF470C"
                        }, {
                            title: "Ongoing/completed to some extent",
                            value: 26.8,
                            color: "#FFCC66"
                        }, {
                            title: "Completed",
                            value: 31.7,
                            color: "#2BC48A"
                        }, {
                            title: "Incomplete",
                            value: 0,
                            color: "#0073c2"
                        }],
                        lineWidth: 50
                    })
                }), ";"]
            })
        }
        const ta = function() {
                return (0, Ne.jsx)("div", {
                    className: "App",
                    children: (0, Ne.jsxs)(Se, {
                        children: [(0, Ne.jsx)(Re, {}), (0, Ne.jsx)(Ae, {}), (0, Ne.jsxs)(pe, {
                            children: [(0, Ne.jsx)(fe, {
                                path: "/",
                                element: (0, Ne.jsx)(Fr, {})
                            }), (0, Ne.jsx)(fe, {
                                path: "/culturals",
                                element: (0, Ne.jsx)(Zr, {})
                            }), (0, Ne.jsx)(fe, {
                                path: "/sports",
                                element: (0, Ne.jsx)(Kr, {})
                            }), (0, Ne.jsx)(fe, {
                                path: "/acadsug",
                                element: (0, Ne.jsx)(Yr, {})
                            }), (0, Ne.jsx)(fe, {
                                path: "/acadspg",
                                element: (0, Ne.jsx)(Xr, {})
                            }), (0, Ne.jsx)(fe, {
                                path: "/hostel",
                                element: (0, Ne.jsx)(Jr, {})
                            }), (0, Ne.jsx)(fe, {
                                path: "/technical",
                                element: (0, Ne.jsx)(Qr, {})
                            }), (0, Ne.jsx)(fe, {
                                path: "/exp",
                                element: (0, Ne.jsx)(ea, {})
                            })]
                        })]
                    })
                })
            },
            na = e => {
                e && e instanceof Function && n.e(787).then(n.bind(n, 787)).then((t => {
                    let {
                        getCLS: n,
                        getFID: r,
                        getFCP: a,
                        getLCP: i,
                        getTTFB: o
                    } = t;
                    n(e), r(e), a(e), i(e), o(e)
                }))
            };
        r.createRoot(document.getElementById("root")).render((0, Ne.jsx)(e.StrictMode, {
            children: (0, Ne.jsx)(ta, {})
        })), na()
    })()
})();
//# sourceMappingURL=main.c4527d36.js.map
