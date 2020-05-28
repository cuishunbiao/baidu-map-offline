window.TILE_VERSION = {
    "ditu": {
        "normal": {
            "version": "088",
            "updateDate": "20200429"
        },
        "satellite": {
            "version": "009",
            "updateDate": "20200429"
        },
        "normalTraffic": {
            "version": "081",
            "updateDate": "20200429"
        },
        "satelliteTraffic": {
            "version": "083",
            "updateDate": "20200429"
        },
        "mapJS": {
            "version": "104",
            "updateDate": "20200429"
        },
        "satelliteStreet": {
            "version": "083",
            "updateDate": "20200429"
        },
        "earthVector": {
            "version": "001",
            "updateDate": "20200429"
        }
    },
    "webapp": {
        "high_normal": {
            "version": "001",
            "updateDate": "20200429"
        },
        "lower_normal": {
            "version": "002",
            "updateDate": "20200429"
        }
    },
    "api_for_mobile": {
        "vector": {
            "version": "002",
            "updateDate": "20200429"
        },
        "vectorIcon": {
            "version": "002",
            "updateDate": "20200429"
        }
    }
};
window.BMAP_AUTHENTIC_KEY = "";
(function() {
    console.log('offline file');
    function aa(a) {
        throw a;
    }
    var l = void 0
      , p = !0
      , q = null
      , t = !1;
    function u() {
        return function() {}
    }
    function ba(a) {
        return function(b) {
            this[a] = b
        }
    }
    function x(a) {
        return function() {
            return this[a]
        }
    }
    function da(a) {
        return function() {
            return a
        }
    }
    var fa, ga = [];
    function ha(a) {
        return function() {
            return ga[a].apply(this, arguments)
        }
    }
    function ia(a, b) {
        return ga[a] = b
    }
    var ja, z = ja = z || {
        version: "1.3.4"
    };
    z.da = "$BAIDU$";
    window[z.da] = window[z.da] || {};
    z.object = z.object || {};
    z.extend = z.object.extend = function(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    }
    ;
    z.U = z.U || {};
    z.U.ea = function(a) {
        return "string" == typeof a || a instanceof String ? document.getElementById(a) : a && a.nodeName && (1 == a.nodeType || 9 == a.nodeType) ? a : q
    }
    ;
    z.ea = z.Cc = z.U.ea;
    z.U.$ = function(a) {
        a = z.U.ea(a);
        if (a === q)
            return a;
        a.style.display = "none";
        return a
    }
    ;
    z.$ = z.U.$;
    z.lang = z.lang || {};
    z.lang.tg = function(a) {
        return "[object String]" == Object.prototype.toString.call(a)
    }
    ;
    z.tg = z.lang.tg;
    z.lang.FD = function(a) {
        if ("[object Object]" === Object.prototype.toString.call(a)) {
            for (var b in a)
                return t;
            return p
        }
        return t
    }
    ;
    z.FD = z.lang.FD;
    z.U.Fj = function(a) {
        return z.lang.tg(a) ? document.getElementById(a) : a
    }
    ;
    z.Fj = z.U.Fj;
    z.U.getElementsByClassName = function(a, b) {
        var c;
        if (a.getElementsByClassName)
            c = a.getElementsByClassName(b);
        else {
            var e = a;
            e == q && (e = document);
            c = [];
            var e = e.getElementsByTagName("*"), f = e.length, g = RegExp("(^|\\s)" + b + "(\\s|$)"), i, k;
            for (k = i = 0; i < f; i++)
                g.test(e[i].className) && (c[k] = e[i],
                k++)
        }
        return c
    }
    ;
    z.getElementsByClassName = z.U.getElementsByClassName;
    z.U.contains = function(a, b) {
        var c = z.U.Fj
          , a = c(a)
          , b = c(b);
        return a.contains ? a != b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16)
    }
    ;
    z.fa = z.fa || {};
    /msie (\d+\.\d)/i.test(navigator.userAgent) && (z.fa.na = z.na = document.documentMode || +RegExp.$1);
    var ka = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        rowspan: "rowSpan",
        valign: "vAlign",
        usemap: "useMap",
        frameborder: "frameBorder"
    };
    8 > z.fa.na ? (ka["for"] = "htmlFor",
    ka["class"] = "className") : (ka.htmlFor = "for",
    ka.className = "class");
    z.U.aG = ka;
    z.U.CE = function(a, b, c) {
        a = z.U.ea(a);
        if (a === q)
            return a;
        if ("style" == b)
            a.style.cssText = c;
        else {
            b = z.U.aG[b] || b;
            a.setAttribute(b, c)
        }
        return a
    }
    ;
    z.CE = z.U.CE;
    z.U.DE = function(a, b) {
        a = z.U.ea(a);
        if (a === q)
            return a;
        for (var c in b)
            z.U.CE(a, c, b[c]);
        return a
    }
    ;
    z.DE = z.U.DE;
    z.Kk = z.Kk || {};
    (function() {
        var a = RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
        z.Kk.trim = function(b) {
            return ("" + b).replace(a, "")
        }
    }
    )();
    z.trim = z.Kk.trim;
    z.Kk.zo = function(a, b) {
        var a = "" + a
          , c = Array.prototype.slice.call(arguments, 1)
          , e = Object.prototype.toString;
        if (c.length) {
            c = c.length == 1 ? b !== q && /\[object Array\]|\[object Object\]/.test(e.call(b)) ? b : c : c;
            return a.replace(/#\{(.+?)\}/g, function(a, b) {
                var i = c[b];
                "[object Function]" == e.call(i) && (i = i(b));
                return "undefined" == typeof i ? "" : i
            })
        }
        return a
    }
    ;
    z.zo = z.Kk.zo;
    z.U.qc = function(a, b) {
        a = z.U.ea(a);
        if (a === q)
            return a;
        for (var c = a.className.split(/\s+/), e = b.split(/\s+/), f, g = e.length, i, k = 0; k < g; ++k) {
            i = 0;
            for (f = c.length; i < f; ++i)
                if (c[i] == e[k]) {
                    c.splice(i, 1);
                    break
                }
        }
        a.className = c.join(" ");
        return a
    }
    ;
    z.qc = z.U.qc;
    z.U.ex = function(a, b, c) {
        a = z.U.ea(a);
        if (a === q)
            return a;
        var e;
        if (a.insertAdjacentHTML)
            a.insertAdjacentHTML(b, c);
        else {
            e = a.ownerDocument.createRange();
            b = b.toUpperCase();
            if (b == "AFTERBEGIN" || b == "BEFOREEND") {
                e.selectNodeContents(a);
                e.collapse(b == "AFTERBEGIN")
            } else {
                b = b == "BEFOREBEGIN";
                e[b ? "setStartBefore" : "setEndAfter"](a);
                e.collapse(b)
            }
            e.insertNode(e.createContextualFragment(c))
        }
        return a
    }
    ;
    z.ex = z.U.ex;
    z.U.show = function(a) {
        a = z.U.ea(a);
        if (a === q)
            return a;
        a.style.display = "";
        return a
    }
    ;
    z.show = z.U.show;
    z.U.XC = function(a) {
        a = z.U.ea(a);
        return a === q ? a : a.nodeType == 9 ? a : a.ownerDocument || a.document
    }
    ;
    z.U.eb = function(a, b) {
        a = z.U.ea(a);
        if (a === q)
            return a;
        for (var c = b.split(/\s+/), e = a.className, f = " " + e + " ", g = 0, i = c.length; g < i; g++)
            f.indexOf(" " + c[g] + " ") < 0 && (e = e + (" " + c[g]));
        a.className = e;
        return a
    }
    ;
    z.eb = z.U.eb;
    z.U.XA = z.U.XA || {};
    z.U.Cl = z.U.Cl || [];
    z.U.Cl.filter = function(a, b, c) {
        for (var e = 0, f = z.U.Cl, g; g = f[e]; e++)
            if (g = g[c])
                b = g(a, b);
        return b
    }
    ;
    z.Kk.RN = function(a) {
        return a.indexOf("-") < 0 && a.indexOf("_") < 0 ? a : a.replace(/[-_][^-_]/g, function(a) {
            return a.charAt(1).toUpperCase()
        })
    }
    ;
    z.U.L_ = function(a) {
        z.U.xs(a, "expand") ? z.U.qc(a, "expand") : z.U.eb(a, "expand")
    }
    ;
    z.U.xs = function(a) {
        if (arguments.length <= 0 || typeof a === "function")
            return this;
        if (this.size() <= 0)
            return t;
        var a = a.replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, " "), b = a.split(" "), c;
        z.forEach(this, function(a) {
            for (var a = a.className, f = 0; f < b.length; f++)
                if (!~(" " + a + " ").indexOf(" " + b[f] + " ")) {
                    c = t;
                    return
                }
            c !== t && (c = p)
        });
        return c
    }
    ;
    z.U.sg = function(a, b) {
        var c = z.U
          , a = c.ea(a);
        if (a === q)
            return a;
        var b = z.Kk.RN(b)
          , e = a.style[b];
        if (!e)
            var f = c.XA[b]
              , e = a.currentStyle || (z.fa.na ? a.style : getComputedStyle(a, q))
              , e = f && f.get ? f.get(a, e) : e[f || b];
        if (f = c.Cl)
            e = f.filter(b, e, "get");
        return e
    }
    ;
    z.sg = z.U.sg;
    /opera\/(\d+\.\d)/i.test(navigator.userAgent) && (z.fa.opera = +RegExp.$1);
    z.fa.HL = /webkit/i.test(navigator.userAgent);
    z.fa.fY = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent);
    z.fa.MD = "CSS1Compat" == document.compatMode;
    z.U.ka = function(a) {
        a = z.U.ea(a);
        if (a === q)
            return a;
        var b = z.U.XC(a)
          , c = z.fa
          , e = z.U.sg;
        c.fY > 0 && b.getBoxObjectFor && e(a, "position");
        var f = {
            left: 0,
            top: 0
        }, g;
        if (a == (c.na && !c.MD ? b.body : b.documentElement))
            return f;
        if (a.getBoundingClientRect) {
            a = a.getBoundingClientRect();
            f.left = Math.floor(a.left) + Math.max(b.documentElement.scrollLeft, b.body.scrollLeft);
            f.top = Math.floor(a.top) + Math.max(b.documentElement.scrollTop, b.body.scrollTop);
            f.left = f.left - b.documentElement.clientLeft;
            f.top = f.top - b.documentElement.clientTop;
            a = b.body;
            b = parseInt(e(a, "borderLeftWidth"));
            e = parseInt(e(a, "borderTopWidth"));
            if (c.na && !c.MD) {
                f.left = f.left - (isNaN(b) ? 2 : b);
                f.top = f.top - (isNaN(e) ? 2 : e)
            }
        } else {
            g = a;
            do {
                f.left = f.left + g.offsetLeft;
                f.top = f.top + g.offsetTop;
                if (c.HL > 0 && e(g, "position") == "fixed") {
                    f.left = f.left + b.body.scrollLeft;
                    f.top = f.top + b.body.scrollTop;
                    break
                }
                g = g.offsetParent
            } while (g && g != a);if (c.opera > 0 || c.HL > 0 && e(a, "position") == "absolute")
                f.top = f.top - b.body.offsetTop;
            for (g = a.offsetParent; g && g != b.body; ) {
                f.left = f.left - g.scrollLeft;
                if (!c.opera || g.tagName != "TR")
                    f.top = f.top - g.scrollTop;
                g = g.offsetParent
            }
        }
        return f
    }
    ;
    /firefox\/(\d+\.\d)/i.test(navigator.userAgent) && (z.fa.Qe = +RegExp.$1);
    /BIDUBrowser/i.test(navigator.userAgent) && (z.fa.O1 = p);
    var la = navigator.userAgent;
    /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(la) && !/chrome/i.test(la) && (z.fa.Ox = +(RegExp.$1 || RegExp.$2));
    /chrome\/(\d+\.\d)/i.test(navigator.userAgent) && (z.fa.$v = +RegExp.$1);
    z.kc = z.kc || {};
    z.kc.Mb = function(a, b) {
        var c, e, f = a.length;
        if ("function" == typeof b)
            for (e = 0; e < f; e++) {
                c = a[e];
                c = b.call(a, c, e);
                if (c === t)
                    break
            }
        return a
    }
    ;
    z.Mb = z.kc.Mb;
    z.lang.da = function() {
        return "TANGRAM__" + (window[z.da]._counter++).toString(36)
    }
    ;
    window[z.da]._counter = window[z.da]._counter || 1;
    window[z.da]._instances = window[z.da]._instances || {};
    z.lang.Hs = function(a) {
        return "[object Function]" == Object.prototype.toString.call(a)
    }
    ;
    z.lang.Ga = function(a) {
        this.da = a || z.lang.da();
        window[z.da]._instances[this.da] = this
    }
    ;
    window[z.da]._instances = window[z.da]._instances || {};
    z.lang.Ga.prototype.Sh = ha(0);
    z.lang.Ga.prototype.toString = function() {
        return "[object " + (this.SP || "Object") + "]"
    }
    ;
    z.lang.$t = function(a, b) {
        this.type = a;
        this.returnValue = p;
        this.target = b || q;
        this.currentTarget = q
    }
    ;
    z.lang.Ga.prototype.addEventListener = function(a, b, c) {
        if (z.lang.Hs(b)) {
            !b.Vk && (b.Vk = {});
            !this.wi && (this.wi = {});
            var e = this.wi, f;
            if (typeof c == "string" && c) {
                /[^\w\-]/.test(c) && aa("nonstandard key:" + c);
                f = b.Vw = c
            }
            a.indexOf("on") != 0 && (a = "on" + a);
            typeof e[a] != "object" && (e[a] = {});
            typeof b.Vk[a] != "object" && (b.Vk[a] = {});
            f = f || z.lang.da();
            b.Vk[a].Vw = f;
            e[a][f] = b
        }
    }
    ;
    z.lang.Ga.prototype.removeEventListener = function(a, b) {
        a.indexOf("on") != 0 && (a = "on" + a);
        if (z.lang.Hs(b)) {
            if (!b.Vk || !b.Vk[a])
                return;
            b = b.Vk[a].Vw
        } else if (!z.lang.tg(b))
            return;
        !this.wi && (this.wi = {});
        var c = this.wi;
        c[a] && c[a][b] && delete c[a][b]
    }
    ;
    z.lang.Ga.prototype.dispatchEvent = function(a, b) {
        z.lang.tg(a) && (a = new z.lang.$t(a));
        !this.wi && (this.wi = {});
        var b = b || {}, c;
        for (c in b)
            a[c] = b[c];
        var e = this.wi
          , f = a.type;
        a.target = a.target || this;
        a.currentTarget = this;
        f.indexOf("on") != 0 && (f = "on" + f);
        z.lang.Hs(this[f]) && this[f].apply(this, arguments);
        if (typeof e[f] == "object")
            for (c in e[f])
                e[f][c].apply(this, arguments);
        return a.returnValue
    }
    ;
    z.lang.wa = function(a, b, c) {
        var e, f, g = a.prototype;
        f = new Function;
        f.prototype = b.prototype;
        f = a.prototype = new f;
        for (e in g)
            f[e] = g[e];
        a.prototype.constructor = a;
        a.y_ = b.prototype;
        if ("string" == typeof c)
            f.SP = c
    }
    ;
    z.wa = z.lang.wa;
    z.lang.Mc = function(a) {
        return window[z.da]._instances[a] || q
    }
    ;
    z.platform = z.platform || {};
    z.platform.AL = /macintosh/i.test(navigator.userAgent);
    z.platform.V3 = /MicroMessenger/i.test(navigator.userAgent);
    z.platform.IL = /windows/i.test(navigator.userAgent);
    z.platform.oY = /x11/i.test(navigator.userAgent);
    z.platform.ij = /android/i.test(navigator.userAgent);
    /android (\d+(\.\d)?)/i.test(navigator.userAgent) && (z.platform.rB = z.rB = RegExp.$1);
    z.platform.hY = /ipad/i.test(navigator.userAgent);
    z.platform.HD = /iphone/i.test(navigator.userAgent);
    function ma(a, b) {
        a.domEvent = b = window.event || b;
        a.clientX = b.clientX || b.pageX;
        a.clientY = b.clientY || b.pageY;
        a.offsetX = b.offsetX || b.layerX;
        a.offsetY = b.offsetY || b.layerY;
        a.screenX = b.screenX;
        a.screenY = b.screenY;
        a.ctrlKey = b.ctrlKey || b.metaKey;
        a.shiftKey = b.shiftKey;
        a.altKey = b.altKey;
        if (b.touches) {
            a.touches = [];
            for (var c = 0; c < b.touches.length; c++)
                a.touches.push({
                    clientX: b.touches[c].clientX,
                    clientY: b.touches[c].clientY,
                    screenX: b.touches[c].screenX,
                    screenY: b.touches[c].screenY,
                    pageX: b.touches[c].pageX,
                    pageY: b.touches[c].pageY,
                    target: b.touches[c].target,
                    identifier: b.touches[c].identifier
                })
        }
        if (b.changedTouches) {
            a.changedTouches = [];
            for (c = 0; c < b.changedTouches.length; c++)
                a.changedTouches.push({
                    clientX: b.changedTouches[c].clientX,
                    clientY: b.changedTouches[c].clientY,
                    screenX: b.changedTouches[c].screenX,
                    screenY: b.changedTouches[c].screenY,
                    pageX: b.changedTouches[c].pageX,
                    pageY: b.changedTouches[c].pageY,
                    target: b.changedTouches[c].target,
                    identifier: b.changedTouches[c].identifier
                })
        }
        if (b.targetTouches) {
            a.targetTouches = [];
            for (c = 0; c < b.targetTouches.length; c++)
                a.targetTouches.push({
                    clientX: b.targetTouches[c].clientX,
                    clientY: b.targetTouches[c].clientY,
                    screenX: b.targetTouches[c].screenX,
                    screenY: b.targetTouches[c].screenY,
                    pageX: b.targetTouches[c].pageX,
                    pageY: b.targetTouches[c].pageY,
                    target: b.targetTouches[c].target,
                    identifier: b.targetTouches[c].identifier
                })
        }
        a.rotation = b.rotation;
        a.scale = b.scale;
        return a
    }
    z.lang.sw = function(a) {
        var b = window[z.da];
        b.XR && delete b.XR[a]
    }
    ;
    z.event = {};
    z.V = z.event.V = function(a, b, c) {
        if (!(a = z.ea(a)))
            return a;
        b = b.replace(/^on/, "");
        a.addEventListener ? a.addEventListener(b, c, t) : a.attachEvent && a.attachEvent("on" + b, c);
        return a
    }
    ;
    z.bd = z.event.bd = function(a, b, c) {
        if (!(a = z.ea(a)))
            return a;
        b = b.replace(/^on/, "");
        a.removeEventListener ? a.removeEventListener(b, c, t) : a.detachEvent && a.detachEvent("on" + b, c);
        return a
    }
    ;
    z.U.xs = function(a, b) {
        if (!a || !a.className || typeof a.className != "string")
            return t;
        var c = -1;
        try {
            c = a.className == b || a.className.search(RegExp("(\\s|^)" + b + "(\\s|$)"))
        } catch (e) {
            return t
        }
        return c > -1
    }
    ;
    z.lK = function() {
        function a(a) {
            document.addEventListener && (this.element = a,
            this.oK = this.tk ? "touchstart" : "mousedown",
            this.EC = this.tk ? "touchmove" : "mousemove",
            this.DC = this.tk ? "touchend" : "mouseup",
            this.ih = t,
            this.Gt = this.Ft = 0,
            this.element.addEventListener(this.oK, this, t),
            ja.V(this.element, "mousedown", u()),
            this.handleEvent(q))
        }
        a.prototype = {
            tk: "ontouchstart"in window || "createTouch"in document,
            start: function(a) {
                na(a);
                this.ih = t;
                this.Ft = this.tk ? a.touches[0].clientX : a.clientX;
                this.Gt = this.tk ? a.touches[0].clientY : a.clientY;
                this.element.addEventListener(this.EC, this, t);
                this.element.addEventListener(this.DC, this, t)
            },
            move: function(a) {
                oa(a);
                var c = this.tk ? a.touches[0].clientY : a.clientY;
                if (10 < Math.abs((this.tk ? a.touches[0].clientX : a.clientX) - this.Ft) || 10 < Math.abs(c - this.Gt))
                    this.ih = p
            },
            end: function(a) {
                oa(a);
                this.ih || (a = document.createEvent("Event"),
                a.initEvent("tap", t, p),
                this.element.dispatchEvent(a));
                this.element.removeEventListener(this.EC, this, t);
                this.element.removeEventListener(this.DC, this, t)
            },
            handleEvent: function(a) {
                if (a)
                    switch (a.type) {
                    case this.oK:
                        this.start(a);
                        break;
                    case this.EC:
                        this.move(a);
                        break;
                    case this.DC:
                        this.end(a)
                    }
            }
        };
        return function(b) {
            return new a(b)
        }
    }();
    var D = window.BMap || {};
    D.version = "3.0";
    D.F1 = 0.34 > Math.random();
    0 <= D.version.indexOf("#") && (D.version = "3.0");
    D.Vq = [];
    D.Xe = function(a) {
        this.Vq.push(a)
    }
    ;
    D.Lq = [];
    D.zk = function(a) {
        this.Lq.push(a)
    }
    ;
    D.iU = D.apiLoad || u();
    D.l0 = D.verify || function() {
        D.version && D.version >= 1.5 && pa(D.md + "?qt=verify&ak=" + qa, function(a) {
            if (a && a.error !== 0) {
                if (typeof map !== "undefined") {
                    map.Qa().innerHTML = "";
                    map.wi = {}
                }
                D = q;
                var b = "\u767e\u5ea6\u672a\u6388\u6743\u4f7f\u7528\u5730\u56feAPI\uff0c\u53ef\u80fd\u662f\u56e0\u4e3a\u60a8\u63d0\u4f9b\u7684\u5bc6\u94a5\u4e0d\u662f\u6709\u6548\u7684\u767e\u5ea6LBS\u5f00\u653e\u5e73\u53f0\u5bc6\u94a5\uff0c\u6216\u6b64\u5bc6\u94a5\u672a\u5bf9\u672c\u5e94\u7528\u7684\u767e\u5ea6\u5730\u56feJavaScriptAPI\u6388\u6743\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002";
                switch (a.error) {
                case 101:
                    b = "\u5f00\u53d1\u8005\u7981\u7528\u4e86\u8be5ak\u7684jsapi\u670d\u52a1\u6743\u9650\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002";
                    break;
                case 102:
                    b = "\u5f00\u53d1\u8005Referer\u4e0d\u6b63\u786e\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002"
                }
                alert(b)
            }
        })
    }
    ;
    var qa = window.BMAP_AUTHENTIC_KEY;
    window.BMAP_AUTHENTIC_KEY = q;
    var sa = window.BMap_loadScriptTime
      , ta = (new Date).getTime()
      , ua = q
      , wa = p
      , xa = 5042
      , ya = 5002
      , Aa = 5003
      , Ba = "load_mapclick"
      , Ca = 5038
      , Da = 5041
      , Fa = 5047
      , Ga = 5036
      , Ha = 5039
      , Ia = 5037
      , Ja = 5040
      , Ka = 5011
      , La = 7E3;
    var Ma = 0;
    function Na(a, b) {
        if (a = z.ea(a)) {
            var c = this;
            z.lang.Ga.call(c);
            b = b || {};
            c.R = {
                EB: 200,
                Vb: p,
                xw: t,
                tC: p,
                vo: p,
                wo: b.enableWheelZoom || t,
                jK: p,
                wC: p,
                Zr: p,
                Yr: p,
                AC: p,
                to: b.enable3DBuilding || t,
                Gc: 25,
                y0: 240,
                WT: 450,
                wc: H.wc,
                Fd: H.Fd,
                Is: !!b.Is,
                gc: Math.round(b.minZoom) || 1,
                nc: Math.round(b.maxZoom) || 19,
                Ta: b.mapType || Oa,
                V4: t,
                gK: b.drawer || Ma,
                ww: p,
                vw: 500,
                aW: b.enableHighResolution !== t,
                vC: b.enableMapClick !== t,
                devicePixelRatio: b.devicePixelRatio || window.devicePixelRatio || 1,
                lF: 99,
                we: b.mapStyle || q,
                vY: b.logoControl === t ? t : p,
                pU: [],
                R1: b.beforeClickIcon || q,
                pg: t,
                gk: t,
                oo: t,
                fE: p,
                pC: b.enableBizAuthLogo === t ? t : p
            };
            c.R.we && (this.TX(c.R.we.controls),
            this.vL(c.R.we.geotableId));
            c.R.we && c.R.we.styleId && c.q3(c.R.we.styleId);
            c.R.HB = {
                dark: {
                    backColor: "#2D2D2D",
                    textColor: "#bfbfbf",
                    iconUrl: "dicons"
                },
                normal: {
                    backColor: "#F3F1EC",
                    textColor: "#c61b1b",
                    iconUrl: "icons"
                },
                light: {
                    backColor: "#EBF8FC",
                    textColor: "#017fb4",
                    iconUrl: "licons"
                }
            };
            b.enableAutoResize && (c.R.Yr = b.enableAutoResize);
            b.enableStreetEntrance === t && (c.R.AC = b.enableStreetEntrance);
            b.enableDeepZoom === t && (c.R.jK = b.enableDeepZoom);
            var e = c.R.pU;
            if (I())
                for (var f = 0, g = e.length; f < g; f++)
                    if (z.fa[e[f]]) {
                        c.R.devicePixelRatio = 1;
                        break
                    }
            e = -1 < navigator.userAgent.toLowerCase().indexOf("android");
            f = -1 < navigator.userAgent.toLowerCase().indexOf("mqqbrowser");
            if (-1 < navigator.userAgent.toLowerCase().indexOf("UCBrowser") || e && f)
                c.R.lF = 99;
            c.Ya = a;
            c.QA(a);
            a.unselectable = "on";
            a.innerHTML = "";
            a.appendChild(c.za());
            b.size && this.Ae(b.size);
            e = c.Cb();
            c.width = e.width;
            c.height = e.height;
            c.offsetX = 0;
            c.offsetY = 0;
            c.platform = a.firstChild;
            c.xe = c.platform.firstChild;
            c.xe.style.width = c.width + "px";
            c.xe.style.height = c.height + "px";
            c.Wd = {};
            c.oe = new J(0,0);
            c.Zb = new J(0,0);
            c.Va = 3;
            c.zc = 0;
            c.SB = q;
            c.RB = q;
            c.Qb = "";
            c.aw = "";
            c.Ah = {};
            c.Ah.custom = {};
            c.yi = {};
            c.Wa = 0;
            b.useWebGL === t && Pa(t);
            c.W = new Qa(a,{
                kf: "api",
                bS: p
            });
            c.W.$();
            c.W.IE(c);
            b = b || {};
            e = c.Ta = c.R.Ta;
            c.Ic = e.qk();
            e === Ra && Sa(ya);
            e === Ua && Sa(Aa);
            e = c.R;
            e.jO = Math.round(b.minZoom);
            e.iO = Math.round(b.maxZoom);
            c.su();
            c.aa = {
                Hc: t,
                lc: 0,
                Ns: 0,
                NL: 0,
                Z3: 0,
                wB: t,
                rE: -1,
                qe: []
            };
            c.platform.style.cursor = c.R.wc;
            for (f = 0; f < D.Vq.length; f++)
                D.Vq[f](c);
            c.aa.rE = f;
            c.ga();
            K.load("map", function() {
                c.kb()
            });
            c.R.vC && (setTimeout(function() {
                Sa(Ba)
            }, 1E3),
            K.load("mapclick", function() {
                window.MPC_Mgr = window.MPC_Mgr || {};
                window.MPC_Mgr[c.da] = new Va(c)
            }, p));
            Wa() && K.load("oppc", function() {
                c.hu()
            });
            I() && K.load("opmb", function() {
                c.hu()
            });
            a = q;
            c.dB = []
        }
    }
    z.lang.wa(Na, z.lang.Ga, "Map");
    z.extend(Na.prototype, {
        za: function() {
            var a = O("div")
              , b = a.style;
            b.overflow = "visible";
            b.position = "absolute";
            b.zIndex = "0";
            b.top = b.left = "0px";
            var b = O("div", {
                "class": "BMap_mask"
            })
              , c = b.style;
            c.position = "absolute";
            c.top = c.left = "0px";
            c.zIndex = "9";
            c.overflow = "hidden";
            c.WebkitUserSelect = "none";
            a.appendChild(b);
            return a
        },
        QA: function(a) {
            var b = a.style;
            b.overflow = "hidden";
            "absolute" !== Xa(a).position && (b.position = "relative",
            b.zIndex = 0);
            b.backgroundColor = "#F3F1EC";
            b.color = "#000";
            b.textAlign = "left"
        },
        ga: function() {
            var a = this;
            a.Un = function() {
                var b = a.Cb();
                if (a.width !== b.width || a.height !== b.height) {
                    var c = new P(a.width,a.height)
                      , e = new Q("onbeforeresize");
                    e.size = c;
                    a.dispatchEvent(e);
                    a.Xj((b.width - a.width) / 2, (b.height - a.height) / 2);
                    a.xe.style.width = (a.width = b.width) + "px";
                    a.xe.style.height = (a.height = b.height) + "px";
                    c = new Q("onresize");
                    c.size = b;
                    a.dispatchEvent(c)
                }
            }
            ;
            a.R.Yr && (a.aa.Ml = setInterval(a.Un, 80))
        },
        Xj: function(a, b, c, e) {
            var f = this.va().Yb(this.ja())
              , g = this.Ic
              , i = p;
            c && J.zL(c) && (this.oe = new J(c.lng,c.lat),
            i = t);
            if (c = c && e ? g.ci(c, this.Qb) : this.Zb)
                if (this.Zb = new J(c.lng + a * f,c.lat - b * f),
                (a = g.hh(this.Zb, this.Qb)) && i)
                    this.oe = a
        },
        Dg: function(a, b) {
            if (Ya(a) && (this.su(),
            this.dispatchEvent(new Q("onzoomstart")),
            a = this.wn(a).zoom,
            a !== this.Va)) {
                this.zc = this.Va;
                this.Va = a;
                var c;
                b ? c = b : this.dh() && (c = this.dh().ka());
                c && (c = this.Rb(c, this.zc),
                this.Xj(this.width / 2 - c.x, this.height / 2 - c.y, this.Gb(c, this.zc), p));
                this.dispatchEvent(new Q("onzoomstartcode"))
            }
        },
        Pc: function(a) {
            this.Dg(a)
        },
        sF: function(a) {
            this.Dg(this.Va + 1, a)
        },
        tF: function(a) {
            this.Dg(this.Va - 1, a)
        },
        ki: function(a) {
            a instanceof J && (this.Zb = this.Ic.ci(a, this.Qb),
            this.oe = J.zL(a) ? new J(a.lng,a.lat) : this.Ic.hh(this.Zb, this.Qb))
        },
        yg: function(a, b) {
            a = Math.round(a) || 0;
            b = Math.round(b) || 0;
            this.Xj(-a, -b)
        },
        tr: function(a) {
            a && Za(a.Fe) && (a.Fe(this),
            this.dispatchEvent(new Q("onaddcontrol",a)))
        },
        XM: function(a) {
            a && Za(a.remove) && (a.remove(),
            this.dispatchEvent(new Q("onremovecontrol",a)))
        },
        Yn: function(a) {
            a && Za(a.xa) && (a.xa(this),
            this.dispatchEvent(new Q("onaddcontextmenu",a)))
        },
        bp: function(a) {
            a && Za(a.remove) && (this.dispatchEvent(new Q("onremovecontextmenu",a)),
            a.remove())
        },
        Oa: function(a) {
            a && Za(a.Fe) && (a.Fe(this),
            this.dispatchEvent(new Q("onaddoverlay",a)))
        },
        Sb: function(a) {
            a && Za(a.remove) && (a.remove(),
            this.dispatchEvent(new Q("onremoveoverlay",a)))
        },
        CJ: function() {
            this.dispatchEvent(new Q("onclearoverlays"))
        },
        Me: function(a) {
            a && this.dispatchEvent(new Q("onaddtilelayer",a))
        },
        Wf: function(a) {
            a && this.dispatchEvent(new Q("onremovetilelayer",a))
        },
        Bg: function(a) {
            if (this.Ta !== a) {
                this.R.yY && this.WZ(a);
                var b = new Q("onsetmaptype");
                b.M4 = this.Ta;
                this.Ta = this.R.Ta = a;
                this.Ic = this.Ta.qk();
                this.Xj(0, 0, this.Bb(), p);
                this.su();
                var c = this.wn(this.ja()).zoom;
                this.Dg(c);
                this.dispatchEvent(b);
                b = new Q("onmaptypechange");
                b.Va = c;
                b.Ta = a;
                this.dispatchEvent(b);
                (a === $a || a === Ua) && Sa(Aa)
            }
        },
        WZ: function(a) {
            a === $a || a === Ua ? (this.Sx(p),
            this.oN(t),
            this.R.pg = t,
            this.R.gk = t) : (this.Sx(t),
            this.oN(p),
            this.R.pg = p,
            this.R.gk = p)
        },
        rf: function(a) {
            var b = this;
            if (a instanceof J)
                b.ki(a, {
                    noAnimation: p
                });
            else if (ab(a))
                if (b.Ta === Ra) {
                    var c = H.AB[a];
                    c && (pt = c.o,
                    b.rf(pt))
                } else {
                    var e = this.dH();
                    e.vt(function(c) {
                        0 === e.fm() && 2 === e.La.result.type && (b.rf(c.pk(0).point),
                        Ra.kk(a) && b.FE(a))
                    });
                    e.search(a, {
                        log: "center"
                    })
                }
        },
        Dd: function(a, b) {
            "[object Undefined]" !== Object.prototype.toString.call(b) && (b = parseInt(b));
            D.Qp("cus.fire", "time", {
                z_loadscripttime: ta - sa
            });
            var c = this;
            if (ab(a))
                if (c.Ta === Ra) {
                    var e = H.AB[a];
                    e && (pt = e.o,
                    c.Dd(pt, b))
                } else {
                    var f = c.dH();
                    f.vt(function(e) {
                        if (0 === f.fm() && (2 === f.La.result.type || 11 === f.La.result.type)) {
                            var e = e.pk(0).point
                              , g = b || bb.Bw(f.La.content.level, c);
                            c.Dd(e, g);
                            Ra.kk(a) && c.FE(a)
                        }
                    });
                    f.search(a, {
                        log: "center"
                    })
                }
            else if (a instanceof J && b) {
                b = c.wn(b).zoom;
                c.zc = c.Va || b;
                c.Va = b;
                e = c.oe;
                c.oe = new J(a.lng,a.lat);
                c.Zb = c.Ic.ci(c.oe, c.Qb);
                c.SB = c.SB || c.Va;
                c.RB = c.RB || c.oe;
                var g = new Q("onload")
                  , i = new Q("onloadcode");
                g.point = new J(a.lng,a.lat);
                g.pixel = c.Rb(c.oe, c.Va);
                g.zoom = b;
                c.loaded || (c.loaded = p,
                c.dispatchEvent(g),
                ua || (ua = cb()));
                c.dispatchEvent(i);
                g = new Q("onmoveend");
                g.kz = "centerAndZoom";
                e.Wb(c.oe) || c.dispatchEvent(g);
                c.dispatchEvent(new Q("onmoveend"));
                c.zc !== c.Va && (e = new Q("onzoomend"),
                e.kz = "centerAndZoom",
                c.dispatchEvent(e));
                c.R.to && c.to()
            }
        },
        dH: function() {
            this.aa.ZL || (this.aa.ZL = new db(1));
            return this.aa.ZL
        },
        reset: function() {
            this.Dd(this.RB, this.SB, p)
        },
        enableDragging: function() {
            this.R.Vb = p
        },
        disableDragging: function() {
            this.R.Vb = t
        },
        enableInertialDragging: function() {
            this.R.ww = p
        },
        disableInertialDragging: function() {
            this.R.ww = t
        },
        enableScrollWheelZoom: function() {
            this.R.wo = p
        },
        disableScrollWheelZoom: function() {
            this.R.wo = t
        },
        enableContinuousZoom: function() {
            this.R.vo = p
        },
        disableContinuousZoom: function() {
            this.R.vo = t
        },
        enableDoubleClickZoom: function() {
            this.R.tC = p
        },
        disableDoubleClickZoom: function() {
            this.R.tC = t
        },
        enableKeyboard: function() {
            this.R.xw = p
        },
        disableKeyboard: function() {
            this.R.xw = t
        },
        enablePinchToZoom: function() {
            this.R.Zr = p
        },
        disablePinchToZoom: function() {
            this.R.Zr = t
        },
        enableAutoResize: function() {
            this.R.Yr = p;
            this.Un();
            this.aa.Ml || (this.aa.Ml = setInterval(this.Un, 80))
        },
        disableAutoResize: function() {
            this.R.Yr = t;
            this.aa.Ml && (clearInterval(this.aa.Ml),
            this.aa.Ml = q)
        },
        enableBizAuthLogo: function() {
            this.R.pC = p;
            this.fo && this.fo.show()
        },
        disableBizAuthLogo: function() {
            this.R.pC = t;
            this.fo && this.fo.$()
        },
        to: function() {
            this.R.to = p;
            this.dn || (this.dn = new BuildingLayer({
                z2: p
            }),
            this.Me(this.dn))
        },
        BV: function() {
            this.R.to = t;
            this.dn && (this.Wf(this.dn),
            this.dn = q,
            delete this.dn)
        },
        Cb: function() {
            return this.Lr && this.Lr instanceof P ? new P(this.Lr.width,this.Lr.height) : new P(this.Ya.clientWidth,this.Ya.clientHeight)
        },
        Ae: function(a) {
            a && a instanceof P ? (this.Lr = a,
            this.Ya.style.width = a.width + "px",
            this.Ya.style.height = a.height + "px") : this.Lr = q
        },
        Bb: x("oe"),
        ja: x("Va"),
        PU: function() {
            this.Un()
        },
        wn: function(a) {
            var b = this.R.gc
              , c = this.R.nc
              , e = t
              , a = Math.round(a);
            a < b && (e = p,
            a = b);
            a > c && (e = p,
            a = c);
            return {
                zoom: a,
                FC: e
            }
        },
        Qa: x("Ya"),
        Rb: function(a, b) {
            b = b || this.ja();
            return this.Ic.Rb(a, b, this.Zb, this.Cb(), this.Qb)
        },
        Gb: function(a, b) {
            b = b || this.ja();
            return this.Ic.Gb(a, b, this.Zb, this.Cb(), this.Qb)
        },
        We: function(a, b) {
            if (a) {
                var c = this.Rb(new J(a.lng,a.lat), b);
                c.x -= this.offsetX;
                c.y -= this.offsetY;
                return c
            }
        },
        BY: function(a, b) {
            b = b || this.ja();
            return this.Ic.CY(a, b, this.Zb, this.Cb(), this.Qb)
        },
        AY: function(a, b) {
            if (a) {
                var c = this.BY(new J(a.lng,a.lat), b);
                c.x -= this.offsetX;
                c.y -= this.offsetY;
                return c
            }
        },
        IM: function(a, b) {
            if (a) {
                var c = new R(a.x,a.y);
                c.x += this.offsetX;
                c.y += this.offsetY;
                return this.Gb(c, b)
            }
        },
        pointToPixelFor3D: function(a, b) {
            var c = map.Qb;
            this.Ta === Ra && c && eb.IJ(a, this, b)
        },
        D4: function(a, b) {
            var c = map.Qb;
            this.Ta === Ra && c && eb.HJ(a, this, b)
        },
        E4: function(a, b) {
            var c = this
              , e = map.Qb;
            c.Ta === Ra && e && eb.IJ(a, c, function(a) {
                a.x -= c.offsetX;
                a.y -= c.offsetY;
                b && b(a)
            })
        },
        B4: function(a, b) {
            var c = map.Qb;
            this.Ta === Ra && c && (a.x += this.offsetX,
            a.y += this.offsetY,
            eb.HJ(a, this, b))
        },
        se: function(a) {
            if (!this.hx())
                return new fb;
            var b = a || {}
              , a = b.margins || [0, 0, 0, 0]
              , c = b.zoom || q
              , b = this.Gb({
                x: a[3],
                y: this.height - a[2]
            }, c)
              , a = this.Gb({
                x: this.width - a[1],
                y: a[0]
            }, c);
            return new fb(b,a)
        },
        hx: function() {
            return !!this.loaded
        },
        eR: function(a, b) {
            for (var c = this.va(), e = b.margins || [10, 10, 10, 10], f = b.zoomFactor || 0, g = e[1] + e[3], e = e[0] + e[2], i = c.lf(), k = c = c.Re(); k >= i; k--) {
                var m = this.va().Yb(k);
                if (a.dF().lng / m < this.width - g && a.dF().lat / m < this.height - e)
                    break
            }
            k += f;
            k < i && (k = i);
            k > c && (k = c);
            return k
        },
        ws: function(a, b) {
            var c = {
                center: this.Bb(),
                zoom: this.ja()
            };
            if (!a || !a instanceof fb && 0 === a.length || a instanceof fb && a.kj())
                return c;
            var e = [];
            a instanceof fb ? (e.push(a.Of()),
            e.push(a.Te())) : e = a.slice(0);
            for (var b = b || {}, f = [], g = 0, i = e.length; g < i; g++)
                f.push(this.Ic.ci(e[g], this.Qb));
            e = new fb;
            for (g = f.length - 1; 0 <= g; g--)
                e.extend(f[g]);
            if (e.kj())
                return c;
            c = e.Bb();
            f = this.eR(e, b);
            b.margins && (e = b.margins,
            g = (e[1] - e[3]) / 2,
            e = (e[0] - e[2]) / 2,
            i = this.va().Yb(f),
            b.offset && (g = b.offset.width,
            e = b.offset.height),
            c.lng += i * g,
            c.lat += i * e);
            c = this.Ic.hh(c, this.Qb);
            return {
                center: c,
                zoom: f
            }
        },
        oh: function(a, b) {
            var c;
            c = a && a.center ? a : this.ws(a, b);
            var b = b || {}
              , e = b.delay || 200;
            if (c.zoom === this.Va && b.enableAnimation !== t) {
                var f = this;
                setTimeout(function() {
                    f.ki(c.center, {
                        duration: 210
                    })
                }, e)
            } else
                this.Dd(c.center, c.zoom)
        },
        Pf: x("Wd"),
        dh: function() {
            return this.aa.rb && this.aa.rb.Za() ? this.aa.rb : q
        },
        getDistance: function(a, b) {
            if (a && b) {
                if (a.Wb(b))
                    return 0;
                var c = 0
                  , c = S.mk(a, b);
                if (c === q || c === l)
                    c = 0;
                return c
            }
        },
        Nw: function() {
            var a = []
              , b = this.Ba
              , c = this.Ce;
            if (b)
                for (var e in b)
                    b[e]instanceof gb && a.push(b[e]);
            if (c) {
                e = 0;
                for (b = c.length; e < b; e++)
                    a.push(c[e])
            }
            return a
        },
        va: x("Ta"),
        uX: x("Bd"),
        hu: function() {
            for (var a = this.aa.rE; a < D.Vq.length; a++)
                D.Vq[a](this);
            this.aa.rE = a
        },
        FE: function(a) {
            this.Qb = Ra.kk(a);
            this.aw = Ra.DK(this.Qb);
            this.Ta === Ra && this.Ic instanceof hb && (this.Ic.Ui = this.Qb)
        },
        setDefaultCursor: function(a) {
            this.R.wc = a;
            this.platform && (this.platform.style.cursor = this.R.wc)
        },
        getDefaultCursor: function() {
            return this.R.wc
        },
        setDraggingCursor: function(a) {
            this.R.Fd = a
        },
        getDraggingCursor: function() {
            return this.R.Fd
        },
        $w: function() {
            return this.R.aW && 1.5 <= this.R.devicePixelRatio
        },
        jB: function(a, b) {
            b ? this.Ah[b] || (this.Ah[b] = {}) : b = "custom";
            a.tag = b;
            a instanceof ib && (this.Ah[b][a.da] = a,
            a.xa(this));
            var c = this;
            K.load("hotspot", function() {
                c.hu()
            }, p)
        },
        tZ: function(a, b) {
            b || (b = "custom");
            this.Ah[b][a.da] && delete this.Ah[b][a.da]
        },
        cw: function(a) {
            a || (a = "custom");
            this.Ah[a] = {}
        },
        su: function() {
            var a = this.Ta.lf()
              , b = this.Ta.Re()
              , c = this.R;
            c.gc = c.jO || a;
            c.nc = c.iO || b;
            c.gc < a && (c.gc = a);
            c.nc > b && (c.nc = b)
        },
        setMinZoom: function(a) {
            a = Math.round(a);
            a > this.R.nc && (a = this.R.nc);
            this.R.jO = a;
            this.KI()
        },
        setMaxZoom: function(a) {
            a = Math.round(a);
            a < this.R.gc && (a = this.R.gc);
            this.R.iO = a;
            this.KI()
        },
        KI: function() {
            this.su();
            var a = this.R;
            this.Va < a.gc ? this.Pc(a.gc) : this.Va > a.nc && this.Pc(a.nc);
            var b = new Q("onzoomspanchange");
            b.gc = a.gc;
            b.nc = a.nc;
            this.dispatchEvent(b)
        },
        s3: x("dB"),
        getKey: function() {
            return qa
        },
        YZ: function(a) {
            function b(a) {
                c.u_ = a;
                var b = D.md + "custom/v2/mapstyle"
                  , g = "version=4&ak=" + qa + "&"
                  , g = g + "is_all=true&is_new=1&" + ("styles=" + encodeURIComponent(c.WE(a, f)));
                jb(b, g, window[e + "cb"])
            }
            var c = this
              , e = this.da;
            D.Qp("cus.fire", "count", "z_setmapstylev2count");
            this.Sx(t);
            this.R.yY = p;
            this.addEventListener("hidecopyright", function() {
                c.ck.$();
                c.R.oo = !!a.customEditor;
                c.R.oo === t && c.EE(new P(1,1))
            });
            c.ck && c.ck.$();
            this.R.oo = !!a.customEditor;
            this.R.k5 = !!a.sharing;
            this.R.Q4 = !!a.preview;
            this.R.oo === t && this.EE(new P(1,1));
            K.load("hotspot", function() {
                c.hu()
            }, p);
            window[e + "zoomRegion"] = {};
            window.U5 = [];
            window[e + "zoomStyleBody"] = [];
            window[e + "zoomFrontStyle"] = {};
            var f = this.ja();
            z.extend({}, a);
            window[e + "cb"] = function(a) {
                a = JSON.parse(a);
                0 === a.status && (3 === a.data.style.length ? (window[e + "_bmap_baseFs"] = a.data.style,
                window[e + "StyleBody"] = a.data.style[2]) : window[e + "StyleBody"] = a.data.style,
                c.eO(),
                c.$X())
            }
            ;
            if (a.styleId) {
                var g = "jsapi";
                a.sharing ? g = "sharing" : a.preview && (g = "preview");
                this.TW(a.styleId, g, b)
            } else
                b(a.styleJson);
            window.iconSetInfo_high || pa(D.url.proto + D.url.domain.TILE_ONLINE_URLS[0] + "/sty/icons_na2x.js?udt=20190108&v=001&from=jsapi")
        },
        TW: function(a, b, c) {
            var e = this
              , f = this.da
              , g = (1E5 * Math.random()).toFixed(0);
            window[f + "_cbk_si_phpui" + g] = function(a) {
                var b = [];
                a.result && (0 === a.result.error && a.content && 0 === a.content.status) && (b = e.Cx(a.content.data.json));
                c && c(b)
            }
            ;
            window[f + "_cbk_si_api" + g] = function(a) {
                var b = [];
                0 === a.status && (b = a.info ? e.Cx(a.info.json) : e.Cx(a.data.json));
                c && c(b)
            }
            ;
            var i = "/apiconsole/custommap/";
            switch (b) {
            case "jsapi":
                i = D.md + "?qt=custom_map&v=3.0";
                i += "&style_id=" + a + "&type=publish&ak=" + qa;
                i += "&callback=" + f + "_cbk_si_phpui" + g;
                break;
            case "sharing":
                i = i + "getSharingJson" + ("?styleid=" + a + "&type=edit") + ("&ck=" + f + "_cbk_si_api" + g);
                break;
            case "preview":
                i = i + "getJson" + ("?styleid=" + a + "&type=edit") + ("&ck=" + f + "_cbk_si_api" + g)
            }
            pa(i)
        },
        vV: function() {
            Array.prototype.map || (Array.prototype.map = function(a, b) {
                var c, e, f;
                this == q && aa(new TypeError(" this is null or not defined"));
                var g = Object(this)
                  , i = g.length >>> 0;
                "[object Function]" != Object.prototype.toString.call(a) && aa(new TypeError(a + " is not a function"));
                b && (c = b);
                e = Array(i);
                for (f = 0; f < i; ) {
                    var k;
                    f in g && (k = g[f],
                    k = a.call(c, k, f, g),
                    e[f] = k);
                    f++
                }
                return e
            }
            )
        },
        Cx: function(a) {
            if (a === q || "" === a)
                return [];
            this.vV();
            var b = {
                t: "featureType",
                e: "elementType",
                v: "visibility",
                c: "color",
                l: "lightness",
                s: "saturation",
                w: "weight",
                z: "level",
                h: "hue",
                f: "fontsize",
                zri: "curZoomRegionId",
                zr: "curZoomRegion"
            }
              , c = {
                all: "all",
                g: "geometry",
                "g.f": "geometry.fill",
                "g.s": "geometry.stroke",
                l: "labels",
                "l.t.f": "labels.text.fill",
                "l.t.s": "labels.text.stroke",
                "l.t": "labels.text",
                "l.i": "labels.icon"
            };
            return a.split(",").map(function(a) {
                var a = a.split("|").map(function(a) {
                    var e = b[a.split(":")[0]]
                      , a = c[a.split(":")[1]] ? c[a.split(":")[1]] : a.split(":")[1];
                    switch (a) {
                    case "poi":
                        a = "poilabel";
                        break;
                    case "districtlabel":
                        a = "districtlabel"
                    }
                    var f = {};
                    f[e] = a;
                    return f
                })
                  , f = a[0]
                  , g = 1;
                a[1].elementType && (g = 2,
                z.extend(f, a[1]));
                for (var i = {}; g < a.length; g++)
                    z.extend(i, a[g]);
                return z.extend(f, {
                    stylers: i
                })
            })
        },
        zX: function() {
            return this.Ye.eg
        },
        f3: function(a, b) {
            var c = this
              , e = this.da
              , f = (1E5 * Math.random()).toFixed(0);
            window[e + "_cbk" + f] = function(b) {
                b = JSON.parse(b);
                b = 3 === b.data.style.length ? b.data.style[2] : b.data.style;
                c.a0(b, a);
                c.eO(a);
                b = new Q("onzoomfeatureload" + a);
                c.dispatchEvent(b);
                delete window[e + "_cbk" + f]
            }
            ;
            var g = D.md + "custom/v2/mapstyle"
              , i = "ak=" + qa + "&"
              , i = i + "is_all=true&is_new=1&";
            b.styleJson ? i += "styles=" + encodeURIComponent(this.WE(b.styleJson, parseInt(a, 10))) : b.styleId && (i += "styles=" + encodeURIComponent(c.WE(c.u_, parseInt(a, 10))));
            jb(g, i, window[e + "_cbk" + f])
        },
        EE: function(a, b) {
            var c = new Q("oncopyrightoffsetchange",{
                WD: a,
                jV: b
            });
            this.R.MJ = b;
            this.dispatchEvent(c)
        },
        mt: function(a) {
            var b = this;
            window.MPC_Mgr && window.MPC_Mgr[b.da] && window.MPC_Mgr[b.da].close();
            b.R.vC = t;
            D.Qp("cus.fire", "count", "z_setmapstylecount");
            if (a) {
                b = this;
                a.styleJson && (a.styleStr = b.v_(a.styleJson));
                I() && z.fa.Ox ? setTimeout(function() {
                    b.R.we = a;
                    b.dispatchEvent(new Q("onsetcustomstyles",a))
                }, 50) : (this.R.we = a,
                this.dispatchEvent(new Q("onsetcustomstyles",a)),
                this.vL(b.R.we.geotableId));
                var c = {
                    style: a.style
                };
                a.features && 0 < a.features.length && (c.features = p);
                a.styleJson && 0 < a.styleJson.length && (c.styleJson = p);
                Sa(5050, c);
                a.style && (c = b.R.HB[a.style] ? b.R.HB[a.style].backColor : b.R.HB.normal.backColor) && (this.Qa().style.backgroundColor = c)
            }
        },
        TX: function(a) {
            this.controls || (this.controls = {
                navigationControl: new kb,
                scaleControl: new lb,
                overviewMapControl: new mb,
                mapTypeControl: new nb
            });
            var b = this, c;
            for (c in this.controls)
                b.XM(b.controls[c]);
            a = a || [];
            z.kc.Mb(a, function(a) {
                b.tr(b.controls[a])
            })
        },
        vL: function(a) {
            a ? this.Jr && this.Jr.zf === a || (this.Wf(this.Jr),
            this.Jr = new ob({
                geotableId: a
            }),
            this.Me(this.Jr)) : this.Wf(this.Jr)
        },
        Nd: function() {
            var a = this.ja() >= this.R.lF && this.va() === Oa && 18 >= this.ja()
              , b = t;
            try {
                document.createElement("canvas").getContext("2d"),
                b = p
            } catch (c) {
                b = t
            }
            return a && b
        },
        getCurrentCity: function() {
            return {
                name: this.Xg,
                code: this.wr
            }
        },
        qs: function() {
            this.W.Bn();
            return this.W
        },
        XX: function(a) {
            Oa.setMaxZoom(a.maxZoom || 19);
            var b = new Q("oninitindoorlayer");
            b.Ue = a;
            this.dispatchEvent(b);
            this.R.pg = t
        },
        $X: function(a) {
            if (this.R.pg) {
                var b = new Q("onupdatestyles");
                this.dispatchEvent(b)
            } else
                b = new Q("oninitindoorlayer"),
                b.Ue = a,
                this.dispatchEvent(b),
                this.R.pg = p,
                this.R.gk = p
        },
        Sx: function(a) {
            this.R.fE = a;
            this.Ye.Jb || (this.Ye.Jb = this.Ye.mj[0].Jb);
            this.Ye.Jb.parentElement.style.display = a ? "block" : "none"
        },
        oN: function(a) {
            this.Ye.eg.style.display = a ? "block" : "none"
        },
        setPanorama: function(a) {
            this.W = a;
            this.W.IE(this)
        },
        WE: function(a, b) {
            for (var c = this.da, e = {
                featureType: "t",
                elementType: "e",
                visibility: "v",
                color: "c",
                lightness: "l",
                saturation: "s",
                weight: "w",
                level: "z",
                hue: "h",
                fontsize: "f"
            }, f = {
                all: "all",
                geometry: "g",
                "geometry.fill": "g.f",
                "geometry.stroke": "g.s",
                labels: "l",
                "labels.text.fill": "l.t.f",
                "labels.text.stroke": "l.t.s",
                "labels.text": "l.t",
                "labels.icon": "l.i"
            }, g = [], i = this.Ta.lf(); i <= this.Ta.Re(); i++)
                window[c + "zoomFrontStyle"][i] = {};
            window[c + "zoomFrontStyle"].main = {};
            for (var i = 0, k; k = a[i]; i++)
                if (!this.iY(k)) {
                    b = this.NW(k, b);
                    if (("land" === k.featureType || "all" === k.featureType || "background" === k.featureType) && "string" === typeof k.elementType && ("geometry" === k.elementType || "geometry.fill" === k.elementType || "all" === k.elementType) && k.stylers)
                        k.stylers.color && (window[c + "zoomFrontStyle"][b].bmapLandColor = k.stylers.color),
                        k.stylers.visibility && "off" === k.stylers.visibility && (window[c + "zoomFrontStyle"][b].bmapLandColor = "#00000000");
                    "railway" === k.featureType && ("string" === typeof k.elementType && k.stylers) && (k.stylers.color && ("geometry" === k.elementType && (window[c + "zoomFrontStyle"][b].bmapRailwayFillColor = k.stylers.color,
                    window[c + "zoomFrontStyle"][b].bmapRailwayStrokeColor = k.stylers.color),
                    "geometry.fill" === k.elementType && (window[c + "zoomFrontStyle"][b].bmapRailwayFillColor = k.stylers.color),
                    "geometry.stroke" === k.elementType && (window[c + "zoomFrontStyle"][b].bmapRailwayStrokeColor = k.stylers.color)),
                    k.stylers.visibility && (window[c + "zoomFrontStyle"][b].bmapRailwayVisibility = k.stylers.visibility));
                    "roadarrow" === k.featureType && ("labels.icon" === k.elementType && k.stylers) && (window[c + "zoomFrontStyle"][b].bmapRoadarrowVisibility = k.stylers.visibility);
                    var m = {};
                    z.extend(m, k);
                    k = m.stylers;
                    delete m.stylers;
                    z.extend(m, k);
                    k = [];
                    for (var n in e)
                        if (m[n] && !this.eY(n))
                            if ("elementType" === n)
                                k.push(e[n] + ":" + f[m[n]]);
                            else {
                                switch (m[n]) {
                                case "poilabel":
                                    m[n] = "poi";
                                    break;
                                case "districtlabel":
                                    m[n] = "label"
                                }
                                k.push(e[n] + ":" + m[n])
                            }
                    2 < k.length && g.push(k.join("|"))
                }
            return g.join(",")
        },
        v_: function(a) {
            for (var b = {
                featureType: "t",
                elementType: "e",
                visibility: "v",
                color: "c",
                lightness: "l",
                saturation: "s",
                weight: "w",
                zoom: "z",
                hue: "h"
            }, c = {
                all: "all",
                geometry: "g",
                "geometry.fill": "g.f",
                "geometry.stroke": "g.s",
                labels: "l",
                "labels.text.fill": "l.t.f",
                "labels.text.stroke": "l.t.s",
                "lables.text": "l.t",
                "labels.icon": "l.i"
            }, e = [], f = 0, g; g = a[f]; f++) {
                var i = g.stylers;
                delete g.stylers;
                z.extend(g, i);
                var i = [], k;
                for (k in b)
                    if (g[k])
                        if ("elementType" === k)
                            i.push(b[k] + ":" + c[g[k]]);
                        else {
                            switch (g[k]) {
                            case "poilabel":
                                g[k] = "poi";
                                break;
                            case "districtlabel":
                                g[k] = "label"
                            }
                            i.push(b[k] + ":" + g[k])
                        }
                2 < i.length && e.push(i.join("|"))
            }
            return e.join(",")
        },
        NW: function(a) {
            a = a.stylers.level;
            return a === l ? "main" : parseInt(a, 10)
        },
        iY: function(a) {
            var b = {};
            z.extend(b, a.stylers);
            delete b.curZoomRegionId;
            delete b.curZoomRegion;
            delete b.level;
            return z.FD(b) ? p : t
        },
        R3: function(a, b) {
            var c = a.stylers.level;
            return c === l ? p : c === b + "" ? p : t
        },
        eY: function(a) {
            return {
                curZoomRegionId: p,
                curZoomRegion: p
            }[a] ? p : t
        },
        t3: function(a, b) {
            var c = a.stylers.level
              , e = {};
            z.extend(e, b);
            c !== l && (e[parseInt(c, 10)] = p);
            return e
        },
        a0: function(a, b) {
            var c = this.da;
            window[c + "zoomStyleBody"][b] = a;
            if (!window[c + "zoomRegion"][b])
                for (var e = this.Ta.lf(), f = this.Ta.Re(); e <= f; e++)
                    window[c + "zoomRegion"][e] || (window[c + "zoomStyleBody"][e] = a)
        },
        eO: function() {
            var a = this.da;
            if (window[a + "zoomFrontStyle"].main.bmapRoadarrowVisibility)
                for (var b = this.Ta.lf(); b <= this.Ta.Re(); b++)
                    window[a + "zoomFrontStyle"][b].bmapRoadarrowVisibility || (window[a + "zoomFrontStyle"][b].bmapRoadarrowVisibility = window[a + "zoomFrontStyle"].main.bmapRoadarrowVisibility);
            if (window[a + "zoomFrontStyle"].main.bmapLandColor)
                for (b = this.Ta.lf(); b <= this.Ta.Re(); b++)
                    window[a + "zoomFrontStyle"][b].bmapLandColor || (window[a + "zoomFrontStyle"][b].bmapLandColor = window[a + "zoomFrontStyle"].main.bmapLandColor);
            if (window[a + "zoomFrontStyle"].main.bmapRailwayFillColor)
                for (b = this.Ta.lf(); b <= this.Ta.Re(); b++)
                    window[a + "zoomFrontStyle"][b].bmapRailwayFillColor || (window[a + "zoomFrontStyle"][b].bmapRailwayFillColor = window[a + "zoomFrontStyle"].main.bmapRailwayFillColor);
            if (window[a + "zoomFrontStyle"].main.bmapRailwayStrokeColor)
                for (b = this.Ta.lf(); b <= this.Ta.Re(); b++)
                    window[a + "zoomFrontStyle"][b].bmapRailwayStrokeColor || (window[a + "zoomFrontStyle"][b].bmapRailwayStrokeColor = window[a + "zoomFrontStyle"].main.bmapRailwayStrokeColor);
            if (window[a + "zoomFrontStyle"].main.bmapRailwayVisibility)
                for (b = this.Ta.lf(); b <= this.Ta.Re(); b++)
                    window[a + "zoomFrontStyle"][b].bmapRailwayVisibility || (window[a + "zoomFrontStyle"][b].bmapRailwayVisibility = window[a + "zoomFrontStyle"].main.bmapRailwayVisibility)
        },
        U1: function(a, b) {
            var c = {};
            z.extend(c, a);
            if (c[b]) {
                for (var e = this.Ta.lf(), f = this.Ta.Re(); e <= f; e++)
                    if (!c[e]) {
                        c[e] = p;
                        break
                    }
                delete c[b]
            }
            return c
        },
        P3: function(a) {
            return a.Gs || "0" === a.uid ? t : p
        },
        TU: function() {
            delete this.yi.jZ
        },
        Z1: function() {
            this.yi = {}
        },
        Xn: function(a, b, c) {
            if (!this.R.oo)
                return t;
            a = a || "sp" + this.aa.n5++;
            if (b && 0 !== b.length)
                return c = c || {},
                this.yi[a] = this.yi[a] || {
                    polygon: [],
                    polyline: []
                },
                this.yi = this.yi || {},
                this.yi[a][c.type].push({
                    RE: b,
                    Ub: c.Ub,
                    type: c.type,
                    style: c.style
                }),
                a
        },
        pF: function(a) {
            return pb / Math.pow(2, 18 - a)
        }
    });
    var pb = 4.007545274461451E7;
    function Sa(a, b) {
        if (a) {
            var b = b || {}, c = "", e;
            for (e in b)
                c = c + "&" + e + "=" + encodeURIComponent(b[e]);
            var f = function(a) {
                a && (qb = p,
                setTimeout(function() {
                    rb.src = D.md + "images/blank.gif?" + a.src
                }, 50))
            }
              , g = function() {
                var a = sb.shift();
                a && f(a)
            };
            e = (1E8 * Math.random()).toFixed(0);
            qb ? sb.push({
                src: "product=jsapi&sub_product=jsapi&v=" + D.version + "&sub_product_v=" + D.version + "&t=" + e + "&code=" + a + "&da_src=" + a + c
            }) : f({
                src: "product=jsapi&sub_product=jsapi&v=" + D.version + "&sub_product_v=" + D.version + "&t=" + e + "&code=" + a + "&da_src=" + a + c
            });
            tb || (z.V(rb, "load", function() {
                qb = t;
                g()
            }),
            z.V(rb, "error", function() {
                qb = t;
                g()
            }),
            tb = p)
        }
    }
    var qb, tb, sb = [], rb = new Image;
    Sa(5E3, {
        device_pixel_ratio: window.devicePixelRatio,
        platform: navigator.platform
    });
    D.pL = {
        TILE_BASE_URLS: ["gss0.bdstatic.com/5bwHcj7lABFU8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFV8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFS8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFT8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFY8t_jkk_Z1zRvfdw6buu"],
        TILE_ONLINE_URLS: ["maponline0.bdimg.com", "maponline1.bdimg.com", "maponline2.bdimg.com", "maponline3.bdimg.com"],
        TIlE_PERSPECT_URLS: ["gss0.bdstatic.com/-OR1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-ON1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-OZ1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-OV1cTe9KgQFm2e88IuM_a"],
        geolocControl: "gsp0.baidu.com/8LkJsjOpB1gCo2Kml5_Y_D3",
        TILES_YUN_HOST: ["gsp0.baidu.com/-eR1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eN1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eZ1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eV1bSahKgkFkRGko9WTAnF6hhy"],
        traffic: "gsp0.baidu.com/7_AZsjOpB1gCo2Kml5_Y_DAcsMJiwa",
        iw_pano: "gss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_",
        message: "gsp0.baidu.com/7vo0bSba2gU2pMbgoY3K",
        baidumap: "gsp0.baidu.com/80MWsjip0QIZ8tyhnq",
        wuxian: "gsp0.baidu.com/6a1OdTeaKgQFm2e88IuM_a",
        pano: ["gss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_", "gss0.bdstatic.com/5LUZemfa_QUU8t7mm9GUKT-xh_", "gss0.bdstatic.com/5LUZemja_QUU8t7mm9GUKT-xh_"],
        main_domain_nocdn: {
            baidu: "gsp0.baidu.com/9_Q4sjOpB1gCo2Kml5_Y_D3",
            other: "api.map.baidu.com"
        },
        main_domain_cdn: {
            baidu: ["gss0.bdstatic.com/9_Q4vHSd2RZ3otebn9fN2DJv", "gss0.baidu.com/9_Q4vXSd2RZ3otebn9fN2DJv", "gss0.bdstatic.com/9_Q4vnSd2RZ3otebn9fN2DJv"],
            other: ["api.map.baidu.com"],
            webmap: ["gss0.baidu.com/6b1IcTe9R1gBo1vgoIiO_jowehsv"]
        },
        map_click: "gsp0.baidu.com/80MWbzKh2wt3n2qy8IqW0jdnxx1xbK",
        vector_traffic: "gss0.bdstatic.com/8aZ1cTe9KgQIm2_p8IuM_a"
    };
    D.KX = {
        TILE_BASE_URLS: ["shangetu0.map.bdimg.com", "shangetu1.map.bdimg.com", "shangetu2.map.bdimg.com", "shangetu3.map.bdimg.com", "shangetu4.map.bdimg.com"],
        TILE_ONLINE_URLS: ["maponline0.bdimg.com", "maponline1.bdimg.com", "maponline2.bdimg.com", "maponline3.bdimg.com"],
        TIlE_PERSPECT_URLS: ["d0.map.baidu.com", "d1.map.baidu.com", "d2.map.baidu.com", "d3.map.baidu.com"],
        geolocControl: "loc.map.baidu.com",
        TILES_YUN_HOST: ["g0.api.map.baidu.com", "g1.api.map.baidu.com", "g2.api.map.baidu.com", "g3.api.map.baidu.com"],
        traffic: "its.map.baidu.com:8002",
        iw_pano: "mapsv0.bdimg.com",
        message: "j.map.baidu.com",
        baidumap: "map.baidu.com",
        wuxian: "wuxian.baidu.com",
        pano: ["mapsv0.bdimg.com", "mapsv1.bdimg.com"],
        main_domain_nocdn: {
            baidu: "api.map.baidu.com"
        },
        main_domain_cdn: {
            baidu: ["api0.map.bdimg.com", "api1.map.bdimg.com", "api2.map.bdimg.com"],
            webmap: ["webmap0.map.bdimg.com"]
        },
        map_click: "mapclick.map.baidu.com",
        vector_traffic: "or.map.bdimg.com"
    };
    D.b0 = {
        "0": {
            proto: "http://",
            domain: D.KX
        },
        1: {
            proto: "https://",
            domain: D.pL
        },
        2: {
            proto: "https://",
            domain: D.pL
        }
    };
    window.BMAP_PROTOCOL && "https" === window.BMAP_PROTOCOL && (window.HOST_TYPE = 2);
    D.Pt = window.HOST_TYPE || "0";
    D.url = D.b0[D.Pt];
    D.Vo = D.url.proto + D.url.domain.baidumap + "/";
    D.md = D.url.proto + ("2" == D.Pt ? D.url.domain.main_domain_nocdn.other : D.url.domain.main_domain_nocdn.baidu) + "/";
    //D.oa = D.url.proto + ("2" == D.Pt ? D.url.domain.main_domain_cdn.other[0] : D.url.domain.main_domain_nocdn.baidu) + "/";
    D.oa = mapConfig.home;
    D.Si = D.url.proto + D.url.domain.main_domain_cdn.webmap[0] + "/";
    D.Yh = function(a, b) {
        var c, e, b = b || "";
        switch (a) {
        case "main_domain_nocdn":
            c = D.md + b;
            break;
        case "main_domain_cdn":
            c = D.oa + b;
            break;
        default:
            e = D.url.domain[a],
            "[object Array]" == Object.prototype.toString.call(e) ? (c = [],
            z.kc.Mb(e, function(a, e) {
                c[e] = D.url.proto + a + "/" + b
            })) : c = D.url.proto + D.url.domain[a] + "/" + b
        }
        return c
    }
    ;
    function ub(a) {
        var b = {
            duration: 1E3,
            Gc: 30,
            qo: 0,
            bc: vb.VL,
            Ys: u()
        };
        this.Zf = [];
        if (a)
            for (var c in a)
                b[c] = a[c];
        this.m = b;
        if (Ya(b.qo)) {
            var e = this;
            setTimeout(function() {
                e.start()
            }, b.qo)
        } else
            b.qo != wb && this.start()
    }
    var wb = "INFINITE";
    ub.prototype.start = function() {
        this.ju = cb();
        this.jz = this.ju + this.m.duration;
        xb(this)
    }
    ;
    ub.prototype.add = function(a) {
        this.Zf.push(a)
    }
    ;
    function xb(a) {
        var b = cb();
        b >= a.jz ? (Za(a.m.za) && a.m.za(a.m.bc(1)),
        Za(a.m.finish) && a.m.finish(),
        0 < a.Zf.length && (b = a.Zf[0],
        b.Zf = [].concat(a.Zf.slice(1)),
        b.start())) : (a.Px = a.m.bc((b - a.ju) / a.m.duration),
        Za(a.m.za) && a.m.za(a.Px),
        a.YE || (a.or = setTimeout(function() {
            xb(a)
        }, 1E3 / a.m.Gc)))
    }
    ub.prototype.stop = function(a) {
        this.YE = p;
        for (var b = 0; b < this.Zf.length; b++)
            this.Zf[b].stop(),
            this.Zf[b] = q;
        this.Zf.length = 0;
        this.or && (clearTimeout(this.or),
        this.or = q);
        this.m.Ys(this.Px);
        a && (this.jz = this.ju,
        xb(this))
    }
    ;
    ub.prototype.cancel = ha(1);
    var vb = {
        VL: function(a) {
            return a
        },
        reverse: function(a) {
            return 1 - a
        },
        nC: function(a) {
            return a * a
        },
        lC: function(a) {
            return Math.pow(a, 3)
        },
        Wr: function(a) {
            return -(a * (a - 2))
        },
        hK: function(a) {
            return Math.pow(a - 1, 3) + 1
        },
        mC: function(a) {
            return 0.5 > a ? 2 * a * a : -2 * (a - 2) * a - 1
        },
        p2: function(a) {
            return 0.5 > a ? 4 * Math.pow(a, 3) : 4 * Math.pow(a - 1, 3) + 1
        },
        q2: function(a) {
            return (1 - Math.cos(Math.PI * a)) / 2
        }
    };
    vb["ease-in"] = vb.nC;
    vb["ease-out"] = vb.Wr;
    var H = {
        wF: 34,
        xF: 21,
        yF: new P(21,32),
        zO: new P(10,32),
        yO: new P(24,36),
        xO: new P(12,36),
        uF: new P(13,1),
        sa: D.oa + "images/",
        J3: "http://api0.map.bdimg.com/images/",
        vF: D.oa + "images/markers_new.png",
        vO: 24,
        wO: 73,
        AB: {
            "\u5317\u4eac": {
                Fx: "bj",
                o: new J(116.403874,39.914889)
            },
            "\u4e0a\u6d77": {
                Fx: "sh",
                o: new J(121.487899,31.249162)
            },
            "\u6df1\u5733": {
                Fx: "sz",
                o: new J(114.025974,22.546054)
            },
            "\u5e7f\u5dde": {
                Fx: "gz",
                o: new J(113.30765,23.120049)
            }
        },
        fontFamily: "arial,sans-serif"
    };
    z.fa.Qe ? (z.extend(H, {
        UJ: "url(" + H.sa + "ruler.cur),crosshair",
        wc: "-moz-grab",
        Fd: "-moz-grabbing"
    }),
    z.platform.IL && (H.fontFamily = "arial,simsun,sans-serif")) : z.fa.$v || z.fa.Ox ? z.extend(H, {
        UJ: "url(" + H.sa + "ruler.cur) 2 6,crosshair",
        wc: "url(" + H.sa + "openhand.cur) 8 8,default",
        Fd: "url(" + H.sa + "closedhand.cur) 8 8,move"
    }) : z.extend(H, {
        UJ: "url(" + H.sa + "ruler.cur),crosshair",
        wc: "url(" + H.sa + "openhand.cur),default",
        Fd: "url(" + H.sa + "closedhand.cur),move"
    });
    function yb(a, b) {
        var c = a.style;
        c.left = b[0] + "px";
        c.top = b[1] + "px"
    }
    function zb(a) {
        0 < z.fa.na ? a.unselectable = "on" : a.style.MozUserSelect = "none"
    }
    function Ab(a) {
        return a && a.parentNode && 11 !== a.parentNode.nodeType
    }
    function Bb(a, b) {
        z.U.ex(a, "beforeEnd", b);
        return a.lastChild
    }
    function Cb(a) {
        for (var b = {
            left: 0,
            top: 0
        }; a && a.offsetParent; )
            b.left += a.offsetLeft,
            b.top += a.offsetTop,
            a = a.offsetParent;
        return b
    }
    function na(a) {
        a = window.event || a;
        a.stopPropagation ? a.stopPropagation() : a.cancelBubble = p
    }
    function Db(a) {
        a = window.event || a;
        a.preventDefault ? a.preventDefault() : a.returnValue = t;
        return t
    }
    function oa(a) {
        na(a);
        return Db(a)
    }
    function Eb() {
        var a = document.documentElement
          , b = document.body;
        return a && (a.scrollTop || a.scrollLeft) ? [a.scrollTop, a.scrollLeft] : b ? [b.scrollTop, b.scrollLeft] : [0, 0]
    }
    function Fb(a, b) {
        if (a && b)
            return Math.round(Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)))
    }
    function Gb(a, b) {
        var c = [], b = b || function(a) {
            return a
        }
        , e;
        for (e in a)
            c.push(e + "=" + b(a[e]));
        return c.join("&")
    }
    function O(a, b, c) {
        var e = document.createElement(a);
        c && (e = document.createElementNS(c, a));
        return z.U.DE(e, b || {})
    }
    function Xa(a) {
        if (a.currentStyle)
            return a.currentStyle;
        if (a.ownerDocument && a.ownerDocument.defaultView)
            return a.ownerDocument.defaultView.getComputedStyle(a, q)
    }
    function Za(a) {
        return "function" === typeof a
    }
    function Ya(a) {
        return "number" === typeof a
    }
    function ab(a) {
        return "string" == typeof a
    }
    function Hb(a) {
        return "undefined" != typeof a
    }
    function Ib(a) {
        return "object" == typeof a
    }
    var Jb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function Kb(a) {
        for (var b = "", c = 0; c < a.length; c++) {
            var e = a.charCodeAt(c) << 1
              , f = e = e.toString(2);
            8 > e.length && (f = "00000000" + e,
            f = f.substr(e.length, 8));
            b += f
        }
        a = 5 - b.length % 5;
        e = [];
        for (c = 0; c < a; c++)
            e[c] = "0";
        b = e.join("") + b;
        f = [];
        for (c = 0; c < b.length / 5; c++)
            e = b.substr(5 * c, 5),
            f.push(String.fromCharCode(parseInt(e, 2) + 50));
        return f.join("") + a.toString()
    }
    function Lb(a) {
        var b = "", c, e, f = "", g, i = "", k = 0;
        g = /[^A-Za-z0-9\+\/\=]/g;
        if (!a || g.exec(a))
            return a;
        a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do
            c = Jb.indexOf(a.charAt(k++)),
            e = Jb.indexOf(a.charAt(k++)),
            g = Jb.indexOf(a.charAt(k++)),
            i = Jb.indexOf(a.charAt(k++)),
            c = c << 2 | e >> 4,
            e = (e & 15) << 4 | g >> 2,
            f = (g & 3) << 6 | i,
            b += String.fromCharCode(c),
            64 != g && (b += String.fromCharCode(e)),
            64 != i && (b += String.fromCharCode(f));
        while (k < a.length);return b
    }
    var Q = z.lang.$t;
    function I() {
        return !(!z.platform.HD && !z.platform.hY && !z.platform.ij)
    }
    function Wa() {
        return !(!z.platform.IL && !z.platform.AL && !z.platform.oY)
    }
    function cb() {
        return (new Date).getTime()
    }
    function Mb() {
        var a = document.body.appendChild(O("div"));
        a.innerHTML = '<v:shape id="vml_tester1" adj="1" />';
        var b = a.firstChild;
        if (!b.style)
            return t;
        b.style.behavior = "url(#default#VML)";
        b = b ? "object" === typeof b.adj : p;
        a.parentNode.removeChild(a);
        return b
    }
    function Nb() {
        return !!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.1")
    }
    function Ob() {
        return !!O("canvas").getContext
    }
    function U(a) {
        return a * Math.PI / 180
    }
    D.uY = function() {
        var a = p
          , b = p
          , c = p
          , e = p
          , f = 0
          , g = 0
          , i = 0
          , k = 0;
        return {
            cQ: function() {
                f += 1;
                a && (a = t,
                setTimeout(function() {
                    Sa(5054, {
                        pic: f
                    });
                    a = p;
                    f = 0
                }, 1E4))
            },
            T0: function() {
                g += 1;
                b && (b = t,
                setTimeout(function() {
                    Sa(5055, {
                        move: g
                    });
                    b = p;
                    g = 0
                }, 1E4))
            },
            V0: function() {
                i += 1;
                c && (c = t,
                setTimeout(function() {
                    Sa(5056, {
                        zoom: i
                    });
                    c = p;
                    i = 0
                }, 1E4))
            },
            U0: function(a) {
                k += a;
                e && (e = t,
                setTimeout(function() {
                    Sa(5057, {
                        tile: k
                    });
                    e = p;
                    k = 0
                }, 5E3))
            }
        }
    }();
    D.Gp = {
        MF: "#83a1ff",
        Ip: "#808080"
    };
    function Pb(a, b, c) {
        b.ZD || (b.ZD = [],
        b.handle = {});
        b.ZD.push({
            filter: c,
            cs: a
        });
        b.addEventListener || (b.addEventListener = function(a, c) {
            b.attachEvent("on" + a, c)
        }
        );
        b.handle.click || (b.addEventListener("click", function(a) {
            for (var c = a.target || a.srcElement; c != b; ) {
                Qb(b.ZD, function(b, i) {
                    RegExp(i.filter).test(c.getAttribute("filter")) && i.cs.call(c, a, c.getAttribute("filter"))
                });
                c = c.parentNode
            }
        }, t),
        b.handle.click = p)
    }
    function Qb(a, b) {
        for (var c = 0, e = a.length; c < e; c++)
            b(c, a[c])
    }
    void function(a, b, c) {
        void function(a, b, c) {
            function i(a) {
                if (!a.po) {
                    for (var c = p, e = [], g = a.wZ, k = 0; g && k < g.length; k++) {
                        var m = g[k]
                          , n = ea[m] = ea[m] || {};
                        if (n.po || n == a)
                            e.push(n.Mc);
                        else {
                            c = t;
                            if (!n.wV && (m = (va.get("alias") || {})[m] || m + ".js",
                            !N[m])) {
                                N[m] = p;
                                var o = b.createElement("script")
                                  , s = b.getElementsByTagName("script")[0];
                                o.async = p;
                                o.src = m;
                                s.parentNode.insertBefore(o, s)
                            }
                            n.ky = n.ky || {};
                            n.ky[a.name] = a
                        }
                    }
                    if (c) {
                        a.po = p;
                        a.PJ && (a.Mc = a.PJ.apply(a, e));
                        for (var v in a.ky)
                            i(a.ky[v])
                    }
                }
            }
            function k(a) {
                return (a || new Date) - F
            }
            function m(a, b, c) {
                if (a) {
                    "string" == typeof a && (c = b,
                    b = a,
                    a = L);
                    try {
                        a == L ? (M[b] = M[b] || [],
                        M[b].unshift(c)) : a.addEventListener ? a.addEventListener(b, c, t) : a.attachEvent && a.attachEvent("on" + b, c)
                    } catch (e) {}
                }
            }
            function n(a, b, c) {
                if (a) {
                    "string" == typeof a && (c = b,
                    b = a,
                    a = L);
                    try {
                        if (a == L) {
                            var e = M[b];
                            if (e)
                                for (var f = e.length; f--; )
                                    e[f] === c && e.splice(f, 1)
                        } else
                            a.removeEventListener ? a.removeEventListener(b, c, t) : a.detachEvent && a.detachEvent("on" + b, c)
                    } catch (g) {}
                }
            }
            function o(a) {
                var b = M[a]
                  , c = 0;
                if (b) {
                    for (var e = [], f = arguments, g = 1; g < f.length; g++)
                        e.push(f[g]);
                    for (g = b.length; g--; )
                        b[g].apply(this, e) && c++;
                    return c
                }
            }
            function s(a, b) {
                if (a && b) {
                    var c = new Image(1,1), e = [], f = "img_" + +new Date, g;
                    for (g in b)
                        b[g] && e.push(g + "=" + encodeURIComponent(b[g]));
                    L[f] = c;
                    c.onload = c.onerror = function() {
                        L[f] = c = c.onload = c.onerror = q;
                        delete L[f]
                    }
                    ;
                    c.src = a + "?" + e.join("&")
                }
            }
            function v() {
                var a = arguments
                  , b = a[0];
                if (this.OJ || /^(on|un|set|get|create)$/.test(b)) {
                    for (var b = y.prototype[b], c = [], e = 1, f = a.length; e < f; e++)
                        c.push(a[e]);
                    "function" == typeof b && b.apply(this, c)
                } else
                    this.lJ.push(a)
            }
            function w(a, b) {
                var c = {}, e;
                for (e in a)
                    a.hasOwnProperty(e) && (c[e] = a[e]);
                for (e in b)
                    b.hasOwnProperty(e) && (c[e] = b[e]);
                return c
            }
            function y(a) {
                this.name = a;
                this.as = {
                    protocolParameter: {
                        postUrl: q,
                        protocolParameter: q
                    }
                };
                this.lJ = [];
                this.alog = L
            }
            function A(a) {
                a = a || "default";
                if ("*" == a) {
                    var a = [], b;
                    for (b in T)
                        a.push(T[b]);
                    return a
                }
                (b = T[a]) || (b = T[a] = new y(a));
                return b
            }
            var B = c.alog;
            if (!B || !B.po) {
                var C = b.all && a.attachEvent
                  , F = B && B.QD || +new Date
                  , E = a.c4 || (+new Date).toString(36) + Math.random().toString(36).substr(2, 3)
                  , G = 0
                  , N = {}
                  , L = function(a) {
                    var b = arguments, c, e, f, g;
                    if ("define" == a || "require" == a) {
                        for (e = 1; e < b.length; e++)
                            switch (typeof b[e]) {
                            case "string":
                                c = b[e];
                                break;
                            case "object":
                                f = b[e];
                                break;
                            case "function":
                                g = b[e]
                            }
                        "require" == a && (c && !f && (f = [c]),
                        c = q);
                        c = !c ? "#" + G++ : c;
                        e = ea[c] = ea[c] || {};
                        e.po || (e.name = c,
                        e.wZ = f,
                        e.PJ = g,
                        "define" == a && (e.wV = p),
                        i(e))
                    } else
                        "function" == typeof a ? a(L) : ("" + a).replace(/^(?:([\w$_]+)\.)?(\w+)$/, function(a, c, e) {
                            b[0] = e;
                            v.apply(L.hF(c), b)
                        })
                }
                  , M = {}
                  , T = {}
                  , ea = {
                    I1: {
                        name: "alog",
                        po: p,
                        Mc: L
                    }
                };
                y.prototype.start = y.prototype.create = function(a) {
                    if (!this.OJ) {
                        "object" == typeof a && this.set(a);
                        this.OJ = new Date;
                        for (this.bs("create", this); a = this.lJ.shift(); )
                            v.apply(this, a)
                    }
                }
                ;
                y.prototype.send = function(a, b) {
                    var c = w({
                        ts: k().toString(36),
                        t: a,
                        sid: E
                    }, this.as);
                    if ("object" == typeof b)
                        c = w(c, b);
                    else {
                        var e = arguments;
                        switch (a) {
                        case "pageview":
                            e[1] && (c.page = e[1]);
                            e[2] && (c.title = e[2]);
                            break;
                        case "event":
                            e[1] && (c.eventCategory = e[1]);
                            e[2] && (c.eventAction = e[2]);
                            e[3] && (c.eventLabel = e[3]);
                            e[4] && (c.eventValue = e[4]);
                            break;
                        case "timing":
                            e[1] && (c.timingCategory = e[1]);
                            e[2] && (c.timingVar = e[2]);
                            e[3] && (c.timingValue = e[3]);
                            e[4] && (c.timingLabel = e[4]);
                            break;
                        case "exception":
                            e[1] && (c.exDescription = e[1]);
                            e[2] && (c.exFatal = e[2]);
                            break;
                        default:
                            return
                        }
                    }
                    this.bs("send", c);
                    var f;
                    if (e = this.as.protocolParameter) {
                        var g = {};
                        for (f in c)
                            e[f] !== q && (g[e[f] || f] = c[f]);
                        f = g
                    } else
                        f = c;
                    s(this.as.postUrl, f)
                }
                ;
                y.prototype.set = function(a, b) {
                    if ("string" == typeof a)
                        "protocolParameter" == a && (b = w({
                            postUrl: q,
                            protocolParameter: q
                        }, b)),
                        this.as[a] = b;
                    else if ("object" == typeof a)
                        for (var c in a)
                            this.set(c, a[c])
                }
                ;
                y.prototype.get = function(a, b) {
                    var c = this.as[a];
                    "function" == typeof b && b(c);
                    return c
                }
                ;
                y.prototype.bs = function(a, b) {
                    return L.bs(this.name + "." + a, b)
                }
                ;
                y.prototype.V = function(a, b) {
                    L.V(this.name + "." + a, b)
                }
                ;
                y.prototype.bd = function(a, b) {
                    L.bd(this.name + "." + a, b)
                }
                ;
                L.name = "alog";
                L.Ub = E;
                L.po = p;
                L.timestamp = k;
                L.bd = n;
                L.V = m;
                L.bs = o;
                L.hF = A;
                L("init");
                var ca = y.prototype;
                V(ca, {
                    start: ca.start,
                    create: ca.create,
                    send: ca.send,
                    set: ca.set,
                    get: ca.get,
                    on: ca.V,
                    un: ca.bd,
                    fire: ca.bs
                });
                var va = A();
                va.set("protocolParameter", {
                    H1: q
                });
                if (B) {
                    ca = [].concat(B.xb || [], B.ft || []);
                    B.xb = B.ft = q;
                    for (var za in L)
                        L.hasOwnProperty(za) && (B[za] = L[za]);
                    L.xb = L.ft = {
                        push: function(a) {
                            L.apply(L, a)
                        }
                    };
                    for (B = 0; B < ca.length; B++)
                        L.apply(L, ca[B])
                }
                c.alog = L;
                C && m(b, "mouseup", function(a) {
                    a = a.target || a.srcElement;
                    1 == a.nodeType && /^ajavascript:/i.test(a.tagName + a.href)
                });
                var Ea = t;
                a.onerror = function(a, b, e, f) {
                    var i = p;
                    !b && /^script error/i.test(a) && (Ea ? i = t : Ea = p);
                    i && c.alog("exception.send", "exception", {
                        Us: a,
                        PD: b,
                        Ps: e,
                        Sl: f
                    });
                    return t
                }
                ;
                c.alog("exception.on", "catch", function(a) {
                    c.alog("exception.send", "exception", {
                        Us: a.Us,
                        PD: a.path,
                        Ps: a.Ps,
                        method: a.method,
                        sK: "catch"
                    })
                })
            }
        }(a, b, c);
        void function(a, b, c) {
            var i = "18_3";
            I() && (i = "18_4");
            var k = "http://static.tieba.baidu.com";
            "https:" === a.location.protocol && (k = "https://gsp0.baidu.com/5aAHeD3nKhI2p27j8IqW0jdnxx1xbK");
            var m = Math.random
              , k = k + "/tb/pms/img/st.gif"
              , n = {
                mh: "0.1"
            }
              , o = {
                mh: "0.1"
            }
              , s = {
                mh: "0.1"
            }
              , v = {
                mh: "0"
            };
            if (n && n.mh && m() < n.mh) {
                var w = c.alog.hF("monkey"), y, n = a.screen, A = b.referrer;
                w.set("ver", 5);
                w.set("pid", 241);
                n && w.set("px", n.width + "*" + n.height);
                w.set("ref", A);
                c.alog("monkey.on", "create", function() {
                    y = c.alog.timestamp;
                    w.set("protocolParameter", {
                        reports: q
                    })
                });
                c.alog("monkey.on", "send", function(a) {
                    "pageview" == a.t && (a.cmd = "open");
                    a.now && (a.ts = y(a.now).toString(36),
                    a.now = "")
                });
                c.alog("monkey.create", {
                    page: i,
                    pid: "241",
                    p: "18",
                    dv: 6,
                    postUrl: k,
                    reports: {
                        refer: 1
                    }
                });
                c.alog("monkey.send", "pageview", {
                    now: +new Date
                })
            }
            if (o && o.mh && m() < o.mh) {
                var B = t;
                a.onerror = function(a, b, e, f) {
                    var i = p;
                    !b && /^script error/i.test(a) && (B ? i = t : B = p);
                    i && c.alog("exception.send", "exception", {
                        Us: a,
                        PD: b,
                        Ps: e,
                        Sl: f
                    });
                    return t
                }
                ;
                c.alog("exception.on", "catch", function(a) {
                    c.alog("exception.send", "exception", {
                        Us: a.Us,
                        PD: a.path,
                        Ps: a.Ps,
                        method: a.method,
                        sK: "catch"
                    })
                });
                c.alog("exception.create", {
                    postUrl: k,
                    dv: 7,
                    page: i,
                    pid: "170",
                    p: "18"
                })
            }
            s && (s.mh && m() < s.mh) && (c.alog("cus.on", "time", function(a) {
                var b = {}, e = t, f;
                if ("[object Object]" === a.toString()) {
                    for (var i in a)
                        "page" == i ? b.page = a[i] : (f = parseInt(a[i]),
                        0 < f && /^z_/.test(i) && (e = p,
                        b[i] = f));
                    e && c.alog("cus.send", "time", b)
                }
            }),
            c.alog("cus.on", "count", function(a) {
                var b = {}
                  , e = t;
                "string" === typeof a && (a = [a]);
                if (a instanceof Array)
                    for (var f = 0; f < a.length; f++)
                        /^z_/.test(a[f]) ? (e = p,
                        b[a[f]] = 1) : /^page:/.test(a[f]) && (b.page = a[f].substring(5));
                e && c.alog("cus.send", "count", b)
            }),
            c.alog("cus.create", {
                dv: 3,
                postUrl: k,
                page: i,
                p: "18"
            }));
            if (v && v.mh && m() < v.mh) {
                var C = ["Moz", "O", "ms", "Webkit"]
                  , F = ["-webkit-", "-moz-", "-o-", "-ms-"]
                  , E = function() {
                    return typeof b.createElement !== "function" ? b.createElement(arguments[0]) : b.createElement.apply(b, arguments)
                }
                  , G = E("dpFeatureTest").style
                  , N = function(a) {
                    return L(a, l, l)
                }
                  , L = function(a, b, c) {
                    var e = a.charAt(0).toUpperCase() + a.slice(1)
                      , f = (a + " " + C.join(e + " ") + e).split(" ");
                    if (typeof b === "string" || typeof b === "undefined")
                        return M(f, b);
                    f = (a + " " + C.join(e + " ") + e).split(" ");
                    a: {
                        var a = f, g;
                        for (g in a)
                            if (a[g]in b) {
                                if (c === t) {
                                    b = a[g];
                                    break a
                                }
                                g = b[a[g]];
                                b = typeof g === "function" ? fnBind(g, c || b) : g;
                                break a
                            }
                        b = t
                    }
                    return b
                }
                  , M = function(a, b) {
                    var c, e, f;
                    e = a.length;
                    for (c = 0; c < e; c++) {
                        f = a[c];
                        ~("" + f).indexOf("-") && (f = T(f));
                        if (G[f] !== l)
                            return b == "pfx" ? f : p
                    }
                    return t
                }
                  , T = function(a) {
                    return a.replace(/([a-z])-([a-z])/g, function(a, b, c) {
                        return b + c.toUpperCase()
                    }).replace(/^-/, "")
                }
                  , ea = function(a, b, c) {
                    if (a.indexOf("@") === 0)
                        return atRule(a);
                    a.indexOf("-") != -1 && (a = T(a));
                    return !b ? L(a, "pfx") : L(a, b, c)
                }
                  , ca = function() {
                    var a = E("canvas");
                    return !(!a.getContext || !a.getContext("2d"))
                }
                  , va = function() {
                    var a = E("div");
                    return "draggable"in a || "ondragstart"in a && "ondrop"in a
                }
                  , za = function() {
                    try {
                        localStorage.setItem("localStorage", "localStorage");
                        localStorage.removeItem("localStorage");
                        return p
                    } catch (a) {
                        return t
                    }
                }
                  , Ea = function() {
                    return "content"in b.createElement("template")
                }
                  , ra = function() {
                    return "createShadowRoot"in b.createElement("a")
                }
                  , Ta = function() {
                    return "registerElement"in b
                }
                  , re = function() {
                    return "import"in b.createElement("link")
                }
                  , Oc = function() {
                    return "getItems"in b
                }
                  , Ii = function() {
                    return "EventSource"in window
                }
                  , se = function(a, b) {
                    var c = new Image;
                    c.onload = function() {
                        b(a, c.width > 0 && c.height > 0)
                    }
                    ;
                    c.onerror = function() {
                        b(a, t)
                    }
                    ;
                    c.src = "data:image/webp;base64," + {
                        f4: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
                        e4: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
                        alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
                        Zj: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
                    }[a]
                }
                  , te = function(a, b) {
                    return Ub.Uh["WebP-" + a] = b
                }
                  , Ji = function() {
                    return "openDatabase"in a
                }
                  , Ki = function() {
                    return "performance"in a && "timing"in a.performance
                }
                  , Li = function() {
                    return "performance"in a && "mark"in a.performance
                }
                  , Mi = function() {
                    return !(!Array.prototype || !Array.prototype.every || !Array.prototype.filter || !Array.prototype.forEach || !Array.prototype.indexOf || !Array.prototype.lastIndexOf || !Array.prototype.map || !Array.prototype.some || !Array.prototype.reduce || !Array.prototype.reduceRight || !Array.isArray)
                }
                  , Ni = function() {
                    return "Promise"in a && "cast"in a.Jp && "resolve"in a.Jp && "reject"in a.Jp && "all"in a.Jp && "race"in a.Jp && function() {
                        var b;
                        new a.Jp(function(a) {
                            b = a
                        }
                        );
                        return typeof b === "function"
                    }()
                }
                  , Oi = function() {
                    var b = !!a.G0
                      , c = a.XMLHttpRequest && "withCredentials"in new XMLHttpRequest;
                    return !!a.K0 && b && c
                }
                  , Pi = function() {
                    return "geolocation"in navigator
                }
                  , Qi = function() {
                    var b = E("canvas")
                      , c = "probablySupportsContext"in b ? "probablySupportsContext" : "supportsContext";
                    return c in b ? b[c]("webgl") || b[c]("experimental-webgl") : "WebGLRenderingContext"in a
                }
                  , Ri = function() {
                    return !!b.createElementNS && !!b.createElementNS("http://www.w3.org/2000/svg", "svg").e2
                }
                  , Si = function() {
                    return !!a.R0
                }
                  , Ti = function() {
                    return "WebSocket"in a && a.O0.C0 === 2
                }
                  , Ui = function() {
                    return !!b.createElement("video").canPlayType
                }
                  , Vi = function() {
                    return !!b.createElement("audio").canPlayType
                }
                  , Wi = function() {
                    return !!(a.history && "pushState"in a.history)
                }
                  , Xi = function() {
                    return !(!a.E0 || !a.F0)
                }
                  , Yi = function() {
                    return "postMessage"in window
                }
                  , Zi = function() {
                    return !!a.webkitNotifications || "Notification"in a && "permission"in a.SO && "requestPermission"in a.SO
                }
                  , $i = function() {
                    for (var b = ["webkit", "moz", "o", "ms"], c = a.requestAnimationFrame, f = 0; f < b.length && !c; ++f)
                        c = a[b[f] + "RequestAnimationFrame"];
                    return !!c
                }
                  , aj = function() {
                    return "JSON"in a && "parse"in JSON && "stringify"in JSON
                }
                  , bj = function() {
                    return !(!ea("exitFullscreen", b, t) && !ea("cancelFullScreen", b, t))
                }
                  , cj = function() {
                    return !!ea("Intl", a)
                }
                  , dj = function() {
                    return N("flexBasis")
                }
                  , ej = function() {
                    return !!N("perspective")
                }
                  , fj = function() {
                    return N("shapeOutside")
                }
                  , gj = function() {
                    var a = E("div");
                    a.style.cssText = F.join("filter:blur(2px); ");
                    return !!a.style.length && (b.documentMode === l || b.documentMode > 9)
                }
                  , hj = function() {
                    return "XMLHttpRequest"in a && "withCredentials"in new XMLHttpRequest
                }
                  , ij = function() {
                    return E("progress").max !== l
                }
                  , jj = function() {
                    return E("meter").max !== l
                }
                  , kj = function() {
                    return "sendBeacon"in navigator
                }
                  , lj = function() {
                    return N("borderRadius")
                }
                  , mj = function() {
                    return N("boxShadow")
                }
                  , nj = function() {
                    var a = E("div").style;
                    a.cssText = F.join("opacity:.55;");
                    return /^0.55$/.test(a.opacity)
                }
                  , oj = function() {
                    return M(["textShadow"], l)
                }
                  , pj = function() {
                    return N("animationName")
                }
                  , qj = function() {
                    return N("transition")
                }
                  , rj = function() {
                    return navigator.userAgent.indexOf("Android 2.") === -1 && N("transform")
                }
                  , Ub = {
                    Uh: {},
                    ra: function(a, b, c) {
                        this.Uh[a] = b.apply(this, [].slice.call(arguments, 2))
                    },
                    Cd: function(a, b) {
                        a.apply(this, [].slice.call(arguments, 1))
                    },
                    BZ: function() {
                        this.ra("bdrs", lj);
                        this.ra("bxsd", mj);
                        this.ra("opat", nj);
                        this.ra("txsd", oj);
                        this.ra("anim", pj);
                        this.ra("trsi", qj);
                        this.ra("trfm", rj);
                        this.ra("flex", dj);
                        this.ra("3dtr", ej);
                        this.ra("shpe", fj);
                        this.ra("fltr", gj);
                        this.ra("cavs", ca);
                        this.ra("dgdp", va);
                        this.ra("locs", za);
                        this.ra("wctem", Ea);
                        this.ra("wcsdd", ra);
                        this.ra("wccse", Ta);
                        this.ra("wchti", re);
                        this.Cd(se, "lossy", te);
                        this.Cd(se, "lossless", te);
                        this.Cd(se, "alpha", te);
                        this.Cd(se, "animation", te);
                        this.ra("wsql", Ji);
                        this.ra("natm", Ki);
                        this.ra("ustm", Li);
                        this.ra("arra", Mi);
                        this.ra("prms", Ni);
                        this.ra("xhr2", Oi);
                        this.ra("wbgl", Qi);
                        this.ra("geol", Pi);
                        this.ra("svg", Ri);
                        this.ra("work", Si);
                        this.ra("wbsk", Ti);
                        this.ra("vido", Ui);
                        this.ra("audo", Vi);
                        this.ra("hsty", Wi);
                        this.ra("file", Xi);
                        this.ra("psmg", Yi);
                        this.ra("wknf", Zi);
                        this.ra("rqaf", $i);
                        this.ra("json", aj);
                        this.ra("flsc", bj);
                        this.ra("i18n", cj);
                        this.ra("cors", hj);
                        this.ra("prog", ij);
                        this.ra("metr", jj);
                        this.ra("becn", kj);
                        this.ra("mcrd", Oc);
                        this.ra("esrc", Ii)
                    }
                }
                  , w = c.alog.hF("feature");
                w.V("commit", function() {
                    Ub.BZ();
                    var a = setInterval(function() {
                        if ("WebP-lossy"in Ub.Uh && "WebP-lossless"in Ub.Uh && "WebP-alpha"in Ub.Uh && "WebP-animation"in Ub.Uh) {
                            for (var b in Ub.Uh)
                                Ub.Uh[b] = Ub.Uh[b] ? "y" : "n";
                            w.send("feature", Ub.Uh);
                            clearInterval(a)
                        }
                    }, 500)
                });
                c.alog("feature.create", {
                    n2: 4,
                    I4: k,
                    page: i,
                    xb: "18"
                });
                c.alog("feature.fire", "commit")
            }
        }(a, b, c)
    }(window, document, D);
    D.Qp = D.alog || u();
    D.alog("cus.fire", "count", "z_loadscriptcount");
    "https:" === location.protocol && D.alog("cus.fire", "count", "z_httpscount");
    function Rb(a) {
        var b = window.TILE_VERSION
          , c = "20190410";
        b && b.ditu && (b = b.ditu,
        b[a] && b[a].updateDate && (c = b[a].updateDate));
        return c
    }
    ;function pa(a, b) {
      if (/^http/.test(a)) return; //修改  屏蔽ak验证，若调用外部资源直接返回
        if (b) {
            var c = (1E5 * Math.random()).toFixed(0);
            D._rd["_cbk" + c] = function(a) {
                b && b(a);
                delete D._rd["_cbk" + c]
            }
            ;
            a += "&callback=BMap._rd._cbk" + c
        }

        var e = O("script", {
            type: "text/javascript"
        });
        e.charset = "utf-8";
        e.src = a;
        e.addEventListener ? e.addEventListener("load", function(a) {
            a = a.target;
            a.parentNode.removeChild(a)
        }, t) : e.attachEvent && e.attachEvent("onreadystatechange", function() {
            var a = window.event.srcElement;
            a && ("loaded" == a.readyState || "complete" == a.readyState) && a.parentNode.removeChild(a)
        });
        setTimeout(function() {
            document.getElementsByTagName("head")[0].appendChild(e);
            e = q
        }, 1)
    }
    ;var Sb = {
        map: "s4ts2v",
        common: "tb1flg",
        style: "bx3kak",
        tile: "p2y1kg",
        groundoverlay: "dydfiy",
        pointcollection: "od0xyd",
        marker: "1xcujz",
        symbol: "0oyp4i",
        canvablepath: "rnq0qn",
        vmlcontext: "rehowv",
        markeranimation: "tz2oku",
        poly: "r0rrow",
        draw: "puoock",
        drawbysvg: "axjyr0",
        drawbyvml: "13izel",
        drawbycanvas: "hy5gho",
        infowindow: "hctoot",
        oppc: "po5d1n",
        opmb: "jnm0or",
        menu: "304wgm",
        control: "w5vno3",
        navictrl: "ggmfyx",
        geoctrl: "n2ejql",
        copyrightctrl: "hk1a3a",
        citylistcontrol: "dok303",
        scommon: "ajnftx",
        local: "5kjoww",
        route: "osr1ur",
        othersearch: "qo5yo5",
        mapclick: "1nznx3",
        buslinesearch: "q242up",
        hotspot: "mom3u2",
        autocomplete: "231ibc",
        coordtrans: "eiwg3d",
        coordtransutils: "duelju",
        convertor: "5f0xpp",
        clayer: "lzof5y",
        pservice: "4m4svg",
        pcommon: "ggxvcd",
        panorama: "5oinji",
        panoramaflash: "izv5hj"
    };
    z.by = function() {
        function a(a) {
            return e && !!c[b + a + "_" + Sb[a]]
        }
        var b = "BMap_"
          , c = window.localStorage
          , e = "localStorage"in window && c !== q && c !== l;
        return {
            jY: e,
            set: function(a, g) {
                if (e) {
                    for (var i = b + a + "_", k = c.length, m; k--; )
                        m = c.key(k),
                        -1 < m.indexOf(i) && c.removeItem(m);
                    try {
                        c.setItem(b + a + "_" + Sb[a], g)
                    } catch (n) {
                        c.clear()
                    }
                }
            },
            get: function(f) {
                return e && a(f) ? c.getItem(b + f + "_" + Sb[f]) : t
            },
            zJ: a
        }
    }();
    function K() {}
    z.object.extend(K, {
        uj: {
            NF: -1,
            gP: 0,
            Cp: 1
        },
        GK: function() {
            var a = "canvablepath";
            if (!I() || !Ob())
                Nb() || (Mb() ? a = "vmlcontext" : Ob());
            return {
                tile: ["style"],
                control: [],
                marker: ["symbol"],
                symbol: ["canvablepath", "common"],
                canvablepath: "canvablepath" === a ? [] : [a],
                vmlcontext: [],
                style: [],
                poly: ["marker", "drawbycanvas", "drawbysvg", "drawbyvml"],
                drawbysvg: ["draw"],
                drawbyvml: ["draw"],
                drawbycanvas: ["draw"],
                infowindow: ["common", "marker"],
                menu: [],
                oppc: [],
                opmb: [],
                scommon: [],
                local: ["scommon"],
                route: ["scommon"],
                othersearch: ["scommon"],
                autocomplete: ["scommon"],
                citylistcontrol: ["autocomplete"],
                mapclick: ["scommon"],
                buslinesearch: ["route"],
                hotspot: [],
                coordtransutils: ["coordtrans"],
                convertor: [],
                clayer: ["tile"],
                pservice: [],
                pcommon: ["style", "pservice"],
                panorama: ["pcommon"],
                panoramaflash: ["pcommon"]
            }
        },
        L4: {},
        EF: {
            rP: D.oa + "getmodules?v=3.0",
            NT: 5E3
        },
        UB: t,
        Pd: {
            ml: {},
            Xm: [],
            sv: []
        },
        load: function(a, b, c) {
            var e = this.mb(a);
            if (e.Ke == this.uj.Cp)
                c && b();
            else {
                if (e.Ke == this.uj.NF) {
                    this.EJ(a);
                    this.TM(a);
                    var f = this;
                  f.UB == t && (f.UB = p,
                    setTimeout(function () {
                      for (var a = [], b = 0, c = f.Pd.Xm.length; b < c; b++) {
                        var e = f.Pd.Xm[b]
                          , n = "";
                        ja.by.zJ(e) ? n = ja.by.get(e) : (n = "",
                          a.push(e + "_" + Sb[e]));
                        f.Pd.sv.push({
                          kM: e,
                          cE: n
                        })
                      }
                      f.UB = t;
                      f.Pd.Xm.length = 0;
                      console.log(a);   //打印所需模块  
                      if (a.length > 0) {
                        for (i = 0; i < a.length; i++) {
                          mf = mapConfig.home + 'modules/' + a[i] + '.js';
                          pa(mf);
                          console.log('加载模块文件:' + mf); //IE error
                        }
                      } else {
                        f.nK()
                      }
                      //0 == a.length ? f.nK() : pa(f.EF.rP + "&mod=" + a.join(","))
                    }, 1));
                    e.Ke = this.uj.gP
                }
                e.ou.push(b)
            }
        },
        EJ: function(a) {
            if (a && this.GK()[a])
                for (var a = this.GK()[a], b = 0; b < a.length; b++)
                    this.EJ(a[b]),
                    this.Pd.ml[a[b]] || this.TM(a[b])
        },
        TM: function(a) {
            for (var b = 0; b < this.Pd.Xm.length; b++)
                if (this.Pd.Xm[b] == a)
                    return;
            this.Pd.Xm.push(a)
        },
        AZ: function(a, b) {
            var c = this.mb(a);
            try {
                eval(b)
            } catch (e) {
                return
            }
            c.Ke = this.uj.Cp;
            for (var f = 0, g = c.ou.length; f < g; f++)
                c.ou[f]();
            c.ou.length = 0
        },
        zJ: function(a, b) {
            var c = this;
            c.timeout = setTimeout(function() {
                c.Pd.ml[a].Ke != c.uj.Cp ? (c.remove(a),
                c.load(a, b)) : clearTimeout(c.timeout)
            }, c.EF.NT)
        },
        mb: function(a) {
            this.Pd.ml[a] || (this.Pd.ml[a] = {},
            this.Pd.ml[a].Ke = this.uj.NF,
            this.Pd.ml[a].ou = []);
            return this.Pd.ml[a]
        },
        remove: function(a) {
            delete this.mb(a)
        },
        MU: function(a, b) {
            for (var c = this.Pd.sv, e = p, f = 0, g = c.length; f < g; f++)
                "" == c[f].cE && (c[f].kM == a ? c[f].cE = b : e = t);
            e && this.nK()
        },
        nK: function() {
            for (var a = this.Pd.sv, b = 0, c = a.length; b < c; b++)
                this.AZ(a[b].kM, a[b].cE);
            this.Pd.sv.length = 0
        }
    });
    function R(a, b) {
        this.x = a || 0;
        this.y = b || 0;
        this.x = this.x;
        this.y = this.y
    }
    R.prototype.Wb = function(a) {
        return a && a.x == this.x && a.y == this.y
    }
    ;
    function P(a, b) {
        this.width = a || 0;
        this.height = b || 0
    }
    P.prototype.Wb = function(a) {
        return a && this.width == a.width && this.height == a.height
    }
    ;
    function jb(a, b, c) {
        var e = new XMLHttpRequest;
        e.open("POST", a, p);
        e.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        e.timeout = 1E4;
        e.ontimeout = u();
        e.onreadystatechange = function() {
            4 === this.readyState && 200 === this.status && c && c(e.responseText)
        }
        ;
        e.send(b)
    }
    ;function ib(a, b) {
        a && (this.Kb = a,
        this.da = "spot" + ib.da++,
        b = b || {},
        this.Tg = b.text || "",
        this.Yu = b.offsets ? b.offsets.slice(0) : [5, 5, 5, 5],
        this.bB = b.userData || q,
        this.Ch = b.minZoom || q,
        this.Ef = b.maxZoom || q)
    }
    ib.da = 0;
    z.extend(ib.prototype, {
        xa: function(a) {
            this.Ch == q && (this.Ch = a.R.gc);
            this.Ef == q && (this.Ef = a.R.nc)
        },
        ua: function(a) {
            a instanceof J && (this.Kb = a)
        },
        ka: x("Kb"),
        wt: ba("Tg"),
        mD: x("Tg"),
        setUserData: ba("bB"),
        getUserData: x("bB")
    });
    function Tb() {
        this.M = q;
        this.Lb = "control";
        this.Sa = this.qJ = p
    }
    z.lang.wa(Tb, z.lang.Ga, "Control");
    z.extend(Tb.prototype, {
        initialize: function(a) {
            this.M = a;
            if (this.P)
                return a.Ya.appendChild(this.P),
                this.P
        },
        Fe: function(a) {
            !this.P && (this.initialize && Za(this.initialize)) && (this.P = this.initialize(a));
            this.m = this.m || {
                Ag: t
            };
            this.QA();
            this.er();
            this.P && (this.P.Dq = this)
        },
        QA: function() {
            var a = this.P;
            if (a) {
                var b = a.style;
                b.position = "absolute";
                b.zIndex = this.lu || "10";
                b.MozUserSelect = "none";
                b.WebkitTextSizeAdjust = "none";
                this.m.Ag || z.U.eb(a, "BMap_noprint");
                I() || z.V(a, "contextmenu", oa)
            }
        },
        remove: function() {
            this.M = q;
            this.P && (this.P.parentNode && this.P.parentNode.removeChild(this.P),
            this.P = this.P.Dq = q)
        },
        Ea: function() {
            this.P = Bb(this.M.Ya, "<div unselectable='on'></div>");
            this.Sa == t && z.U.$(this.P);
            return this.P
        },
        er: function() {
            this.rc(this.m.anchor)
        },
        rc: function(a) {
            if (this.J1 || !Ya(a) || isNaN(a) || a < Vb || 3 < a)
                a = this.defaultAnchor;
            this.m = this.m || {
                Ag: t
            };
            this.m.Da = this.m.Da || this.defaultOffset;
            var b = this.m.anchor;
            this.m.anchor = a;
            if (this.P) {
                var c = this.P
                  , e = this.m.Da.width
                  , f = this.m.Da.height;
                c.style.left = c.style.top = c.style.right = c.style.bottom = "auto";
                switch (a) {
                case Vb:
                    c.style.top = f + "px";
                    c.style.left = e + "px";
                    break;
                case Wb:
                    c.style.top = f + "px";
                    c.style.right = e + "px";
                    break;
                case Xb:
                    c.style.bottom = f + "px";
                    c.style.left = e + "px";
                    break;
                case 3:
                    c.style.bottom = f + "px",
                    c.style.right = e + "px"
                }
                c = ["TL", "TR", "BL", "BR"];
                z.U.qc(this.P, "anchor" + c[b]);
                z.U.eb(this.P, "anchor" + c[a])
            }
        },
        PC: function() {
            return this.m.anchor
        },
        getContainer: x("P"),
        Kd: function(a) {
            a instanceof P && (this.m = this.m || {
                Ag: t
            },
            this.m.Da = new P(a.width,a.height),
            this.P && this.rc(this.m.anchor))
        },
        aj: function() {
            return this.m.Da
        },
        Xc: x("P"),
        show: function() {
            this.Sa != p && (this.Sa = p,
            this.P && z.U.show(this.P))
        },
        $: function() {
            this.Sa != t && (this.Sa = t,
            this.P && z.U.$(this.P))
        },
        isPrintable: function() {
            return !!this.m.Ag
        },
        Nc: function() {
            return !this.P && !this.M ? t : !!this.Sa
        }
    });
    var Vb = 0
      , Wb = 1
      , Xb = 2;
    function kb(a) {
        Tb.call(this);
        a = a || {};
        this.m = {
            Ag: t,
            QE: a.showZoomInfo || p,
            anchor: a.anchor,
            Da: a.offset,
            type: a.type,
            $V: a.enableGeolocation || t
        };
        this.defaultAnchor = I() ? 3 : Vb;
        this.defaultOffset = new P(10,10);
        this.rc(a.anchor);
        this.Hm(a.type);
        this.wf()
    }
    z.lang.wa(kb, Tb, "NavigationControl");
    z.extend(kb.prototype, {
        initialize: function(a) {
            this.M = a;
            return this.P
        },
        Hm: function(a) {
            this.m.type = Ya(a) && 0 <= a && 3 >= a ? a : 0
        },
        Ko: function() {
            return this.m.type
        },
        wf: function() {
            var a = this;
            K.load("navictrl", function() {
                a.vf()
            })
        }
    });
    function Yb(a) {
        Tb.call(this);
        a = a || {};
        this.m = {
            anchor: a.anchor || Xb,
            Da: a.offset || new P(10,30),
            k_: a.showAddressBar !== t,
            s2: a.enableAutoLocation || t,
            cM: a.locationIcon || q
        };
        var b = this;
        this.lu = 1200;
        b.e0 = [];
        this.me = [];
        K.load("geoctrl", function() {
            (function e() {
                if (0 !== b.me.length) {
                    var a = b.me.shift();
                    b[a.method].apply(b, a.arguments);
                    e()
                }
            }
            )();
            b.qP()
        });
        Sa(La)
    }
    z.lang.wa(Yb, Tb, "GeolocationControl");
    z.extend(Yb.prototype, {
        location: function() {
            this.me.push({
                method: "location",
                arguments: arguments
            })
        },
        getAddressComponent: da(q)
    });
    function Zb(a) {
        Tb.call(this);
        a = a || {};
        this.m = {
            Ag: t,
            anchor: a.anchor,
            Da: a.offset
        };
        this.dc = [];
        this.defaultAnchor = Xb;
        this.defaultOffset = new P(5,2);
        this.rc(a.anchor);
        this.qJ = t;
        this.wf()
    }
    z.lang.wa(Zb, Tb, "CopyrightControl");
    z.object.extend(Zb.prototype, {
        initialize: function(a) {
            this.M = a;
            return this.P
        },
        Ov: function(a) {
            if (a && Ya(a.id) && !isNaN(a.id)) {
                var b = {
                    bounds: q,
                    content: ""
                }, c;
                for (c in a)
                    b[c] = a[c];
                if (a = this.am(a.id))
                    for (var e in b)
                        a[e] = b[e];
                else
                    this.dc.push(b)
            }
        },
        am: function(a) {
            for (var b = 0, c = this.dc.length; b < c; b++)
                if (this.dc[b].id == a)
                    return this.dc[b]
        },
        WC: x("dc"),
        sE: function(a) {
            for (var b = 0, c = this.dc.length; b < c; b++)
                this.dc[b].id == a && (r = this.dc.splice(b, 1),
                b--,
                c = this.dc.length)
        },
        wf: function() {
            var a = this;
            K.load("copyrightctrl", function() {
                a.vf()
            })
        }
    });
    function mb(a) {
        Tb.call(this);
        a = a || {};
        this.m = {
            Ag: t,
            size: a.size || new P(150,150),
            padding: 5,
            Za: a.isOpen === p ? p : t,
            w0: 4,
            Da: a.offset,
            anchor: a.anchor
        };
        this.defaultAnchor = 3;
        this.defaultOffset = new P(0,0);
        this.Vp = this.Wp = 13;
        this.rc(a.anchor);
        this.Ae(this.m.size);
        this.wf()
    }
    z.lang.wa(mb, Tb, "OverviewMapControl");
    z.extend(mb.prototype, {
        initialize: function(a) {
            this.M = a;
            return this.P
        },
        rc: function(a) {
            Tb.prototype.rc.call(this, a)
        },
        pe: function() {
            this.pe.Jn = p;
            this.m.Za = !this.m.Za;
            this.P || (this.pe.Jn = t)
        },
        Ae: function(a) {
            a instanceof P || (a = new P(150,150));
            a.width = 0 < a.width ? a.width : 150;
            a.height = 0 < a.height ? a.height : 150;
            this.m.size = a
        },
        Cb: function() {
            return this.m.size
        },
        Za: function() {
            return this.m.Za
        },
        wf: function() {
            var a = this;
            K.load("control", function() {
                a.vf()
            })
        }
    });
    function $b(a) {
        Tb.call(this);
        a = a || {};
        this.defaultAnchor = Vb;
        this.KU = a.canCheckSize === t ? t : p;
        this.Ui = "";
        this.defaultOffset = new P(10,10);
        this.onChangeBefore = [];
        this.onChangeAfter = [];
        this.onChangeSuccess = [];
        this.m = {
            Ag: t,
            Da: a.offset || this.defaultOffset,
            anchor: a.anchor || this.defaultAnchor,
            expand: !!a.expand
        };
        a.onChangeBefore && Za(a.onChangeBefore) && this.onChangeBefore.push(a.onChangeBefore);
        a.onChangeAfter && Za(a.onChangeAfter) && this.onChangeAfter.push(a.onChangeAfter);
        a.onChangeSuccess && Za(a.onChangeSuccess) && this.onChangeSuccess.push(a.onChangeSuccess);
        this.rc(a.anchor);
        this.wf()
    }
    z.lang.wa($b, Tb, "CityListControl");
    z.object.extend($b.prototype, {
        initialize: function(a) {
            this.M = a;
            return this.P
        },
        wf: function() {
            var a = this;
            K.load("citylistcontrol", function() {
                a.vf()
            }, p)
        }
    });
    function lb(a) {
        Tb.call(this);
        a = a || {};
        this.m = {
            Ag: t,
            color: "black",
            cd: "metric",
            Da: a.offset
        };
        this.defaultAnchor = Xb;
        this.defaultOffset = new P(81,18);
        this.rc(a.anchor);
        this.Kh = {
            metric: {
                name: "metric",
                GJ: 1,
                uL: 1E3,
                cO: "\u7c73",
                dO: "\u516c\u91cc"
            },
            us: {
                name: "us",
                GJ: 3.2808,
                uL: 5280,
                cO: "\u82f1\u5c3a",
                dO: "\u82f1\u91cc"
            }
        };
        this.Kh[this.m.cd] || (this.m.cd = "metric");
        this.jI = q;
        this.JH = {};
        this.wf()
    }
    z.lang.wa(lb, Tb, "ScaleControl");
    z.object.extend(lb.prototype, {
        initialize: function(a) {
            this.M = a;
            return this.P
        },
        Ek: function(a) {
            this.m.color = a + ""
        },
        O2: function() {
            return this.m.color
        },
        ME: function(a) {
            this.m.cd = this.Kh[a] && this.Kh[a].name || this.m.cd
        },
        yX: function() {
            return this.m.cd
        },
        wf: function() {
            var a = this;
            K.load("control", function() {
                a.vf()
            })
        }
    });
    var ac = 0;
    function nb(a) {
        Tb.call(this);
        a = a || {};
        this.defaultAnchor = Wb;
        this.defaultOffset = new P(10,10);
        this.m = {
            Ag: t,
            gh: [Oa, $a, Ua, Ra],
            uV: ["B_DIMENSIONAL_MAP", "B_SATELLITE_MAP", "B_NORMAL_MAP"],
            type: a.type || ac,
            Da: a.offset || this.defaultOffset,
            dW: p
        };
        this.rc(a.anchor);
        "[object Array]" == Object.prototype.toString.call(a.mapTypes) && (this.m.gh = a.mapTypes.slice(0));
        this.wf()
    }
    z.lang.wa(nb, Tb, "MapTypeControl");
    z.object.extend(nb.prototype, {
        initialize: function(a) {
            this.M = a;
            return this.P
        },
        dy: function(a) {
            this.M.zn = a
        },
        wf: function() {
            var a = this;
            K.load("control", function() {
                a.vf()
            }, p)
        }
    });
    function bc(a) {
        Tb.call(this);
        a = a || {};
        this.m = {
            Ag: t,
            Da: a.offset,
            anchor: a.anchor
        };
        this.Hi = t;
        this.wv = q;
        this.SH = new cc({
            kf: "api"
        });
        this.TH = new dc(q,{
            kf: "api"
        });
        this.defaultAnchor = Wb;
        this.defaultOffset = new P(10,10);
        this.rc(a.anchor);
        this.wf();
        Sa(xa)
    }
    z.lang.wa(bc, Tb, "PanoramaControl");
    z.extend(bc.prototype, {
        initialize: function(a) {
            this.M = a;
            return this.P
        },
        wf: function() {
            var a = this;
            K.load("control", function() {
                a.vf()
            })
        }
    });
    function ec(a) {
        z.lang.Ga.call(this);
        this.m = {
            Ya: q,
            cursor: "default"
        };
        this.m = z.extend(this.m, a);
        this.Lb = "contextmenu";
        this.M = q;
        this.Aa = [];
        this.Gf = [];
        this.De = [];
        this.ow = this.Fr = q;
        this.Bh = t;
        var b = this;
        K.load("menu", function() {
            b.kb()
        })
    }
    z.lang.wa(ec, z.lang.Ga, "ContextMenu");
    z.object.extend(ec.prototype, {
        xa: function(a, b) {
            this.M = a;
            this.rl = b || q
        },
        remove: function() {
            this.M = this.rl = q
        },
        Pv: function(a) {
            if (a && !("menuitem" != a.Lb || "" == a.Tg || 0 >= a.Pi)) {
                for (var b = 0, c = this.Aa.length; b < c; b++)
                    if (this.Aa[b] === a)
                        return;
                this.Aa.push(a);
                this.Gf.push(a)
            }
        },
        removeItem: function(a) {
            if (a && "menuitem" == a.Lb) {
                for (var b = 0, c = this.Aa.length; b < c; b++)
                    this.Aa[b] === a && (this.Aa[b].remove(),
                    this.Aa.splice(b, 1),
                    c--);
                b = 0;
                for (c = this.Gf.length; b < c; b++)
                    this.Gf[b] === a && (this.Gf[b].remove(),
                    this.Gf.splice(b, 1),
                    c--)
            }
        },
        mB: function() {
            this.Aa.push({
                Lb: "divider",
                Bj: this.De.length
            });
            this.De.push({
                U: q
            })
        },
        uE: function(a) {
            if (this.De[a]) {
                for (var b = 0, c = this.Aa.length; b < c; b++)
                    this.Aa[b] && ("divider" == this.Aa[b].Lb && this.Aa[b].Bj == a) && (this.Aa.splice(b, 1),
                    c--),
                    this.Aa[b] && ("divider" == this.Aa[b].Lb && this.Aa[b].Bj > a) && this.Aa[b].Bj--;
                this.De.splice(a, 1)
            }
        },
        Xc: x("P"),
        show: function() {
            this.Bh != p && (this.Bh = p)
        },
        $: function() {
            this.Bh != t && (this.Bh = t)
        },
        PZ: function(a) {
            a && (this.m.cursor = a)
        },
        getItem: function(a) {
            return this.Gf[a]
        }
    });
    var fc = H.sa + "menu_zoom_in.png"
      , gc = H.sa + "menu_zoom_out.png";
    function hc(a, b, c) {
        if (a && Za(b)) {
            z.lang.Ga.call(this);
            this.m = {
                width: 100,
                id: "",
                km: ""
            };
            c = c || {};
            this.m.width = 1 * c.width ? c.width : 100;
            this.m.id = c.id ? c.id : "";
            this.m.km = c.iconUrl ? c.iconUrl : "";
            this.Tg = a + "";
            this.Ny = b;
            this.M = q;
            this.Lb = "menuitem";
            this.lr = this.Nu = this.P = this.wh = q;
            this.zh = p;
            var e = this;
            K.load("menu", function() {
                e.kb()
            })
        }
    }
    z.lang.wa(hc, z.lang.Ga, "MenuItem");
    z.object.extend(hc.prototype, {
        xa: function(a, b) {
            this.M = a;
            this.wh = b
        },
        remove: function() {
            this.M = this.wh = q
        },
        wt: function(a) {
            a && (this.Tg = a + "")
        },
        Tb: function(a) {
            a && (this.m.km = a)
        },
        Xc: x("P"),
        enable: function() {
            this.zh = p
        },
        disable: function() {
            this.zh = t
        }
    });
    function fb(a, b) {
        a && !b && (b = a);
        this.Ge = this.Vd = this.Le = this.Xd = this.Dl = this.pl = q;
        a && (this.Dl = new J(a.lng,a.lat),
        this.pl = new J(b.lng,b.lat),
        this.Le = a.lng,
        this.Xd = a.lat,
        this.Ge = b.lng,
        this.Vd = b.lat)
    }
    z.object.extend(fb.prototype, {
        kj: function() {
            return !this.Dl || !this.pl
        },
        Wb: function(a) {
            return !(a instanceof fb) || this.kj() ? t : this.Te().Wb(a.Te()) && this.Of().Wb(a.Of())
        },
        Te: x("Dl"),
        Of: x("pl"),
        aV: function(a) {
            return !(a instanceof fb) || this.kj() || a.kj() ? t : a.Le > this.Le && a.Ge < this.Ge && a.Xd > this.Xd && a.Vd < this.Vd
        },
        Bb: function() {
            return this.kj() ? q : new J((this.Le + this.Ge) / 2,(this.Xd + this.Vd) / 2)
        },
        Es: function(a) {
            if (!(a instanceof fb) || Math.max(a.Le, a.Ge) < Math.min(this.Le, this.Ge) || Math.min(a.Le, a.Ge) > Math.max(this.Le, this.Ge) || Math.max(a.Xd, a.Vd) < Math.min(this.Xd, this.Vd) || Math.min(a.Xd, a.Vd) > Math.max(this.Xd, this.Vd))
                return q;
            var b = Math.max(this.Le, a.Le)
              , c = Math.min(this.Ge, a.Ge)
              , e = Math.max(this.Xd, a.Xd)
              , a = Math.min(this.Vd, a.Vd);
            return new fb(new J(b,e),new J(c,a))
        },
        Br: function(a) {
            return !(a instanceof J) || this.kj() ? t : a.lng >= this.Le && a.lng <= this.Ge && a.lat >= this.Xd && a.lat <= this.Vd
        },
        extend: function(a) {
            if (a instanceof J) {
                var b = a.lng
                  , a = a.lat;
                this.Dl || (this.Dl = new J(0,0));
                this.pl || (this.pl = new J(0,0));
                if (!this.Le || this.Le > b)
                    this.Dl.lng = this.Le = b;
                if (!this.Ge || this.Ge < b)
                    this.pl.lng = this.Ge = b;
                if (!this.Xd || this.Xd > a)
                    this.Dl.lat = this.Xd = a;
                if (!this.Vd || this.Vd < a)
                    this.pl.lat = this.Vd = a
            }
        },
        dF: function() {
            return this.kj() ? new J(0,0) : new J(Math.abs(this.Ge - this.Le),Math.abs(this.Vd - this.Xd))
        }
    });
    function J(a, b) {
        isNaN(a) && (a = Lb(a),
        a = isNaN(a) ? 0 : a);
        ab(a) && (a = parseFloat(a));
        isNaN(b) && (b = Lb(b),
        b = isNaN(b) ? 0 : b);
        ab(b) && (b = parseFloat(b));
        this.lng = a;
        this.lat = b
    }
    J.zL = function(a) {
        return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat
    }
    ;
    J.prototype.Wb = function(a) {
        return a && this.lat == a.lat && this.lng == a.lng
    }
    ;
    function ic() {}
    ic.prototype.vg = function() {
        aa("lngLatToPoint\u65b9\u6cd5\u672a\u5b9e\u73b0")
    }
    ;
    ic.prototype.oj = function() {
        aa("pointToLngLat\u65b9\u6cd5\u672a\u5b9e\u73b0")
    }
    ;
    function jc() {}
    ;var eb = {
        IJ: function(a, b, c) {
            K.load("coordtransutils", function() {
                eb.lU(a, b, c)
            }, p)
        },
        HJ: function(a, b, c) {
            K.load("coordtransutils", function() {
                eb.kU(a, b, c)
            }, p)
        }
    };
    function kc() {
        this.Ra = [];
        var a = this;
        K.load("convertor", function() {
            a.oP()
        })
    }
    z.wa(kc, z.lang.Ga, "Convertor");
    z.extend(kc.prototype, {
        translate: function(a, b, c, e) {
            this.Ra.push({
                method: "translate",
                arguments: [a, b, c, e]
            })
        }
    });
    V(kc.prototype, {
        translate: kc.prototype.translate
    });
    function S() {}
    S.prototype = new ic;
    z.extend(S, {
        JO: 6370996.81,
        RF: [1.289059486E7, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
        cu: [86, 60, 45, 30, 15, 0],
        PO: [[1.410526172116255E-8, 8.98305509648872E-6, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 1.73379812E7], [-7.435856389565537E-9, 8.983055097726239E-6, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 1.026014486E7], [-3.030883460898826E-8, 8.98305509983578E-6, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37], [-1.981981304930552E-8, 8.983055099779535E-6, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06], [3.09191371068437E-9, 8.983055096812155E-6, 6.995724062E-5, 23.10934304144901, -2.3663490511E-4, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4], [2.890871144776878E-9, 8.983055095805407E-6, -3.068298E-8, 7.47137025468032, -3.53937994E-6, -0.02145144861037, -1.234426596E-5, 1.0322952773E-4, -3.23890364E-6, 826088.5]],
        OF: [[-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5], [8.277824516172526E-4, 111320.7020463578, 6.477955746671607E8, -4.082003173641316E9, 1.077490566351142E10, -1.517187553151559E10, 1.205306533862167E10, -5.124939663577472E9, 9.133119359512032E8, 67.5], [0.00337398766765, 111320.7020202162, 4481351.045890365, -2.339375119931662E7, 7.968221547186455E7, -1.159649932797253E8, 9.723671115602145E7, -4.366194633752821E7, 8477230.501135234, 52.5], [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5], [-3.441963504368392E-4, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5], [-3.218135878613132E-4, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]],
        U2: function(a, b) {
            if (!a || !b)
                return 0;
            var c, e, a = this.fc(a);
            if (!a)
                return 0;
            c = this.Mk(a.lng);
            e = this.Mk(a.lat);
            b = this.fc(b);
            return !b ? 0 : this.te(c, this.Mk(b.lng), e, this.Mk(b.lat))
        },
        mk: function(a, b) {
            if (!a || !b)
                return 0;
            a.lng = this.cD(a.lng, -180, 180);
            a.lat = this.iD(a.lat, -74, 74);
            b.lng = this.cD(b.lng, -180, 180);
            b.lat = this.iD(b.lat, -74, 74);
            return this.te(this.Mk(a.lng), this.Mk(b.lng), this.Mk(a.lat), this.Mk(b.lat))
        },
        fc: function(a) {
            if (a === q || a === l)
                return new J(0,0);
            var b, c;
            b = new J(Math.abs(a.lng),Math.abs(a.lat));
            for (var e = 0; e < this.RF.length; e++)
                if (b.lat >= this.RF[e]) {
                    c = this.PO[e];
                    break
                }
            a = this.JJ(a, c);
            return a = new J(a.lng,a.lat)
        },
        gb: function(a) {
            if (a === q || a === l || 180 < a.lng || -180 > a.lng || 90 < a.lat || -90 > a.lat)
                return new J(0,0);
            var b, c;
            a.lng = this.cD(a.lng, -180, 180);
            a.lat = this.iD(a.lat, -85, 85);
            b = new J(a.lng,a.lat);
            for (var e = 0; e < this.cu.length; e++)
                if (b.lat >= this.cu[e]) {
                    c = this.OF[e];
                    break
                }
            if (!c)
                for (e = 0; e < this.cu.length; e++)
                    if (b.lat <= -this.cu[e]) {
                        c = this.OF[e];
                        break
                    }
            a = this.JJ(a, c);
            return a = new J(a.lng,a.lat)
        },
        JJ: function(a, b) {
            if (a && b) {
                var c = b[0] + b[1] * Math.abs(a.lng)
                  , e = Math.abs(a.lat) / b[9]
                  , e = b[2] + b[3] * e + b[4] * e * e + b[5] * e * e * e + b[6] * e * e * e * e + b[7] * e * e * e * e * e + b[8] * e * e * e * e * e * e
                  , c = c * (0 > a.lng ? -1 : 1)
                  , e = e * (0 > a.lat ? -1 : 1);
                return new J(c,e)
            }
        },
        te: function(a, b, c, e) {
            return this.JO * Math.acos(Math.sin(c) * Math.sin(e) + Math.cos(c) * Math.cos(e) * Math.cos(b - a))
        },
        Mk: function(a) {
            return Math.PI * a / 180
        },
        u5: function(a) {
            return 180 * a / Math.PI
        },
        iD: function(a, b, c) {
            b != q && (a = Math.max(a, b));
            c != q && (a = Math.min(a, c));
            return a
        },
        cD: function(a, b, c) {
            for (; a > c; )
                a -= c - b;
            for (; a < b; )
                a += c - b;
            return a
        }
    });
    z.extend(S.prototype, {
        ci: function(a) {
            return S.gb(a)
        },
        vg: function(a) {
            a = S.gb(a);
            return new R(a.lng,a.lat)
        },
        hh: function(a) {
            return S.fc(a)
        },
        oj: function(a) {
            a = new J(a.x,a.y);
            return S.fc(a)
        },
        Rb: function(a, b, c, e, f) {
            if (a)
                return a = this.ci(a, f),
                b = this.Yb(b),
                new R(Math.round((a.lng - c.lng) / b + e.width / 2),Math.round((c.lat - a.lat) / b + e.height / 2))
        },
        CY: function(a, b, c, e) {
            if (a)
                return b = this.Yb(b),
                new R(Math.round((a.lng - c.lng) / b + e.width / 2),Math.round((c.lat - a.lat) / b + e.height / 2))
        },
        Gb: function(a, b, c, e, f) {
            if (a)
                return b = this.Yb(b),
                this.hh(new J(c.lng + b * (a.x - e.width / 2),c.lat - b * (a.y - e.height / 2)), f)
        },
        Yb: function(a) {
            return Math.pow(2, 18 - a)
        }
    });
    function hb() {
        this.Ui = "bj"
    }
    hb.prototype = new S;
    z.extend(hb.prototype, {
        ci: function(a, b) {
            return this.$P(b, S.gb(a))
        },
        hh: function(a, b) {
            return S.fc(this.aQ(b, a))
        },
        lngLatToPointFor3D: function(a, b) {
            var c = this
              , e = S.gb(a);
            K.load("coordtrans", function() {
                var a = jc.gD(c.Ui || "bj", e)
                  , a = new R(a.x,a.y);
                b && b(a)
            }, p)
        },
        pointToLngLatFor3D: function(a, b) {
            var c = this
              , e = new J(a.x,a.y);
            K.load("coordtrans", function() {
                var a = jc.dD(c.Ui || "bj", e)
                  , a = new J(a.lng,a.lat)
                  , a = S.fc(a);
                b && b(a)
            }, p)
        },
        $P: function(a, b) {
            if (K.mb("coordtrans").Ke == K.uj.Cp) {
                var c = jc.gD(a || "bj", b);
                return new J(c.x,c.y)
            }
            K.load("coordtrans", u());
            return new J(0,0)
        },
        aQ: function(a, b) {
            if (K.mb("coordtrans").Ke == K.uj.Cp) {
                var c = jc.dD(a || "bj", b);
                return new J(c.lng,c.lat)
            }
            K.load("coordtrans", u());
            return new J(0,0)
        },
        Yb: function(a) {
            return Math.pow(2, 20 - a)
        }
    });
    function lc() {
        this.Lb = "overlay"
    }
    z.lang.wa(lc, z.lang.Ga, "Overlay");
    lc.sk = function(a) {
        a *= 1;
        return !a ? 0 : -1E5 * a << 1
    }
    ;
    z.extend(lc.prototype, {
        Fe: function(a) {
            if (!this.ba && Za(this.initialize) && (this.ba = this.initialize(a)))
                this.ba.style.WebkitUserSelect = "none";
            this.draw()
        },
        initialize: function() {
            aa("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        draw: function() {
            aa("draw\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        remove: function() {
            this.ba && this.ba.parentNode && this.ba.parentNode.removeChild(this.ba);
            this.ba = q;
            this.dispatchEvent(new Q("onremove"))
        },
        $: function() {
            this.ba && z.U.$(this.ba)
        },
        show: function() {
            this.ba && z.U.show(this.ba)
        },
        Nc: function() {
            return !this.ba || "none" == this.ba.style.display || "hidden" == this.ba.style.visibility ? t : p
        }
    });
    D.Xe(function(a) {
        function b(a, b) {
            var c = O("div")
              , i = c.style;
            i.position = "absolute";
            i.top = i.left = i.width = i.height = "0";
            i.zIndex = b;
            a.appendChild(c);
            return c
        }
        var c = a.aa;
        c.Oc = a.Oc = b(a.platform, 200);
        a.Wd.IC = b(c.Oc, 800);
        a.Wd.YD = b(c.Oc, 700);
        a.Wd.tK = b(c.Oc, 600);
        a.Wd.RD = b(c.Oc, 500);
        a.Wd.gM = b(c.Oc, 400);
        a.Wd.hM = b(c.Oc, 300);
        a.Wd.oO = b(c.Oc, 201);
        a.Wd.Qs = b(c.Oc, 200)
    });
    function gb() {
        z.lang.Ga.call(this);
        lc.call(this);
        this.map = q;
        this.Sa = p;
        this.Db = q;
        this.DG = 0
    }
    z.lang.wa(gb, lc, "OverlayInternal");
    z.extend(gb.prototype, {
        initialize: function(a) {
            this.map = a;
            z.lang.Ga.call(this, this.da);
            return q
        },
        Jw: x("map"),
        draw: u(),
        vj: u(),
        remove: function() {
            this.map = q;
            z.lang.sw(this.da);
            lc.prototype.remove.call(this)
        },
        $: function() {
            this.Sa !== t && (this.Sa = t)
        },
        show: function() {
            this.Sa !== p && (this.Sa = p)
        },
        Nc: function() {
            return !this.ba ? t : !!this.Sa
        },
        Qa: x("ba"),
        mN: function(a) {
            var a = a || {}, b;
            for (b in a)
                this.K[b] = a[b]
        },
        qp: ba("zIndex"),
        Yi: function() {
            this.K.Yi = p
        },
        DV: function() {
            this.K.Yi = t
        },
        Yn: ba("hg"),
        bp: function() {
            this.hg = q
        }
    });
    function mc() {
        this.map = q;
        this.Ba = {};
        this.Ce = []
    }
    D.Xe(function(a) {
        var b = new mc;
        b.map = a;
        a.Ba = b.Ba;
        a.Ce = b.Ce;
        a.addEventListener("load", function(a) {
            b.draw(a)
        });
        a.addEventListener("moveend", function(a) {
            b.draw(a)
        });
        z.fa.na && 8 > z.fa.na || "BackCompat" === document.compatMode ? a.addEventListener("zoomend", function(a) {
            setTimeout(function() {
                b.draw(a)
            }, 20)
        }) : a.addEventListener("zoomend", function(a) {
            b.draw(a)
        });
        a.addEventListener("maptypechange", function(a) {
            b.draw(a)
        });
        a.addEventListener("addoverlay", function(a) {
            a = a.target;
            if (a instanceof gb)
                b.Ba[a.da] || (b.Ba[a.da] = a);
            else {
                for (var e = t, f = 0, g = b.Ce.length; f < g; f++)
                    if (b.Ce[f] === a) {
                        e = p;
                        break
                    }
                e || b.Ce.push(a)
            }
        });
        a.addEventListener("removeoverlay", function(a) {
            a = a.target;
            if (a instanceof gb)
                delete b.Ba[a.da];
            else
                for (var e = 0, f = b.Ce.length; e < f; e++)
                    if (b.Ce[e] === a) {
                        b.Ce.splice(e, 1);
                        break
                    }
        });
        a.addEventListener("clearoverlays", function() {
            this.Vc();
            for (var a in b.Ba)
                b.Ba[a].K.Yi && (b.Ba[a].remove(),
                delete b.Ba[a]);
            a = 0;
            for (var e = b.Ce.length; a < e; a++)
                b.Ce[a].enableMassClear !== t && (b.Ce[a].remove(),
                b.Ce[a] = q,
                b.Ce.splice(a, 1),
                a--,
                e--)
        });
        a.addEventListener("infowindowopen", function() {
            var a = this.Db;
            a && (z.U.$(a.xc),
            z.U.$(a.ac))
        });
        a.addEventListener("movestart", function() {
            this.dh() && this.dh().pI()
        });
        a.addEventListener("moveend", function() {
            this.dh() && this.dh().eI()
        })
    });
    mc.prototype.draw = function(a) {
        if (D.Fp) {
            var b = D.Fp.is(this.map);
            "canvas" === b.Lb && b.canvas && b.VP(b.canvas.getContext("2d"))
        }
        for (var c in this.Ba)
            this.Ba[c].draw(a);
        z.kc.Mb(this.Ce, function(a) {
            a.draw()
        });
        this.map.aa.rb && this.map.aa.rb.ua();
        D.Fp && b.KE()
    }
    ;
    function nc(a) {
        gb.call(this);
        a = a || {};
        this.K = {
            strokeColor: a.strokeColor || "#3a6bdb",
            oc: a.strokeWeight || 5,
            sd: a.strokeOpacity || 0.65,
            strokeStyle: a.strokeStyle || "solid",
            Yi: a.enableMassClear === t ? t : p,
            ok: q,
            dm: q,
            hf: a.enableEditing === p ? p : t,
            lM: 5,
            c0: t,
            ef: a.enableClicking === t ? t : p,
            $h: a.icons && 0 < a.icons.length ? a.icons : q,
            xW: a.geodesic === p ? p : t
        };
        0 >= this.K.oc && (this.K.oc = 5);
        if (0 > this.K.sd || 1 < this.K.sd)
            this.K.sd = 0.65;
        if (0 > this.K.qg || 1 < this.K.qg)
            this.K.qg = 0.65;
        "solid" != this.K.strokeStyle && "dashed" != this.K.strokeStyle && (this.K.strokeStyle = "solid");
        this.ba = q;
        this.ku = new fb(0,0);
        this.cf = [];
        this.pc = [];
        this.Ua = {}
    }
    z.lang.wa(nc, gb, "Graph");
    nc.Gw = function(a) {
        var b = [];
        if (!a)
            return b;
        ab(a) && z.kc.Mb(a.split(";"), function(a) {
            a = a.split(",");
            b.push(new J(a[0],a[1]))
        });
        "[object Array]" == Object.prototype.toString.apply(a) && 0 < a.length && (b = a);
        return b
    }
    ;
    nc.iE = [0.09, 0.0050, 1.0E-4, 1.0E-5];
    z.extend(nc.prototype, {
        initialize: function(a) {
            this.map = a;
            return q
        },
        draw: u(),
        cr: function(a) {
            this.cf.length = 0;
            this.la = nc.Gw(a).slice(0);
            this.th()
        },
        ie: function(a) {
            this.cr(a)
        },
        th: function() {
            if (this.la) {
                var a = this;
                a.ku = new fb;
                z.kc.Mb(this.la, function(b) {
                    a.ku.extend(b)
                })
            }
        },
        Se: x("la"),
        Gm: function(a, b) {
            b && this.la[a] && (this.cf.length = 0,
            this.la[a] = new J(b.lng,b.lat),
            this.th())
        },
        setStrokeColor: function(a) {
            this.K.strokeColor = a
        },
        qX: function() {
            return this.K.strokeColor
        },
        pp: function(a) {
            0 < a && (this.K.oc = a)
        },
        WK: function() {
            return this.K.oc
        },
        np: function(a) {
            a == l || (1 < a || 0 > a) || (this.K.sd = a)
        },
        rX: function() {
            return this.K.sd
        },
        kt: function(a) {
            1 < a || 0 > a || (this.K.qg = a)
        },
        LW: function() {
            return this.K.qg
        },
        op: function(a) {
            "solid" != a && "dashed" != a || (this.K.strokeStyle = a)
        },
        VK: function() {
            return this.K.strokeStyle
        },
        setFillColor: function(a) {
            this.K.fillColor = a || ""
        },
        KW: function() {
            return this.K.fillColor
        },
        se: x("ku"),
        remove: function() {
            this.map && this.map.removeEventListener("onmousemove", this.Ku);
            gb.prototype.remove.call(this);
            this.cf.length = 0
        },
        hf: function() {
            if (!(2 > this.la.length)) {
                this.K.hf = p;
                var a = this;
                K.load("poly", function() {
                    a.Il()
                }, p)
            }
        },
        CV: function() {
            this.K.hf = t;
            var a = this;
            K.load("poly", function() {
                a.bk()
            }, p)
        },
        HW: function() {
            return this.K.hf
        },
        OW: function() {
            for (var a = [], b = 0; b < this.la.length - 1; b++)
                var c = this.FU(this.la[b], this.la[b + 1])
                  , a = a.concat(c);
            return a = a.concat(this.la[this.la.length - 1])
        },
        FU: function(a, b) {
            if (a.Wb(b))
                return [a];
            var c = S.te(U(a.lng), U(a.lat), U(b.lng), U(b.lat))
              , c = S.mk(a, b);
            if (25E4 > c)
                return [a];
            var e = []
              , c = Math.round(c / 15E4)
              , f = this.tJ(a, b);
            e.push(a);
            for (var g = 0; g < c; g++) {
                var i = this.uJ(a, b, g / c, f);
                e.push(i)
            }
            e.push(b);
            return e
        },
        uJ: function(a, b, c, e) {
            var f = U(a.lat)
              , g = U(b.lat)
              , a = U(a.lng)
              , i = U(b.lng)
              , b = Math.sin((1 - c) * e) / Math.sin(e)
              , c = Math.sin(c * e) / Math.sin(e)
              , e = b * Math.cos(f) * Math.cos(a) + c * Math.cos(g) * Math.cos(i)
              , a = b * Math.cos(f) * Math.sin(a) + c * Math.cos(g) * Math.sin(i);
            return new J(180 * (Math.atan2(a, e) / Math.PI),180 * (Math.atan2(b * Math.sin(f) + c * Math.sin(g), Math.sqrt(Math.pow(e, 2) + Math.pow(a, 2))) / Math.PI))
        },
        tJ: function(a, b) {
            var c = U(a.lat)
              , e = U(b.lat);
            return Math.acos(Math.sin(c) * Math.sin(e) + Math.cos(c) * Math.cos(e) * Math.cos(Math.abs(U(b.lng) - U(a.lng))))
        }
    });
    function oc(a) {
        gb.call(this);
        this.ba = this.map = q;
        this.K = {
            width: 0,
            height: 0,
            Da: new P(0,0),
            opacity: 1,
            background: "transparent",
            mx: 1,
            TL: "#000",
            tY: "solid",
            point: q
        };
        this.mN(a);
        this.point = this.K.point
    }
    z.lang.wa(oc, gb, "Division");
    z.extend(oc.prototype, {
        vj: function() {
            var a = this.K
              , b = this.content
              , c = ['<div class="BMap_Division" style="position:absolute;'];
            c.push("width:" + a.width + "px;display:block;");
            c.push("overflow:hidden;");
            "none" != a.borderColor && c.push("border:" + a.mx + "px " + a.tY + " " + a.TL + ";");
            c.push("opacity:" + a.opacity + "; filter:(opacity=" + 100 * a.opacity + ")");
            c.push("background:" + a.background + ";");
            c.push('z-index:60;">');
            c.push(b);
            c.push("</div>");
            this.ba = Bb(this.map.Pf().YD, c.join(""))
        },
        initialize: function(a) {
            this.map = a;
            this.vj();
            this.ba && z.V(this.ba, I() ? "touchstart" : "mousedown", function(a) {
                na(a)
            });
            return this.ba
        },
        draw: function() {
            var a = this.map.We(this.K.point);
            this.K.Da = new P(-Math.round(this.K.width / 2) - Math.round(this.K.mx),-Math.round(this.K.height / 2) - Math.round(this.K.mx));
            this.ba.style.left = a.x + this.K.Da.width + "px";
            this.ba.style.top = a.y + this.K.Da.height + "px"
        },
        ka: function() {
            return this.K.point
        },
        i1: function() {
            return this.map.Rb(this.ka())
        },
        ua: function(a) {
            this.K.point = a;
            this.draw()
        },
        QZ: function(a, b) {
            this.K.width = Math.round(a);
            this.K.height = Math.round(b);
            this.ba && (this.ba.style.width = this.K.width + "px",
            this.ba.style.height = this.K.height + "px",
            this.draw())
        }
    });
    function pc(a, b, c) {
        a && b && (this.imageUrl = a,
        this.size = b,
        a = new P(Math.floor(b.width / 2),Math.floor(b.height / 2)),
        c = c || {},
        a = c.anchor || a,
        b = c.imageOffset || new P(0,0),
        this.imageSize = c.imageSize,
        this.anchor = a,
        this.imageOffset = b,
        this.infoWindowAnchor = c.infoWindowAnchor || this.anchor,
        this.printImageUrl = c.printImageUrl || "")
    }
    z.extend(pc.prototype, {
        nN: function(a) {
            a && (this.imageUrl = a)
        },
        g_: function(a) {
            a && (this.printImageUrl = a)
        },
        Ae: function(a) {
            a && (this.size = new P(a.width,a.height))
        },
        rc: function(a) {
            a && (this.anchor = new P(a.width,a.height))
        },
        lt: function(a) {
            a && (this.imageOffset = new P(a.width,a.height))
        },
        VZ: function(a) {
            a && (this.infoWindowAnchor = new P(a.width,a.height))
        },
        SZ: function(a) {
            a && (this.imageSize = new P(a.width,a.height))
        },
        toString: da("Icon")
    });
    function qc(a, b) {
        if (a) {
            b = b || {};
            this.style = {
                anchor: b.anchor || new P(0,0),
                fillColor: b.fillColor || "#000",
                qg: b.fillOpacity || 0,
                scale: b.scale || 1,
                rotation: b.rotation || 0,
                strokeColor: b.strokeColor || "#000",
                sd: b.strokeOpacity || 1,
                oc: b.strokeWeight
            };
            this.Lb = "number" === typeof a ? a : "UserDefined";
            this.xi = this.style.anchor;
            this.Iq = new P(0,0);
            this.anchor = q;
            this.DA = a;
            var c = this;
            K.load("symbol", function() {
                c.bn()
            }, p)
        }
    }
    z.extend(qc.prototype, {
        setPath: ba("DA"),
        setAnchor: function(a) {
            this.xi = this.style.anchor = a
        },
        setRotation: function(a) {
            this.style.rotation = a
        },
        setScale: function(a) {
            this.style.scale = a
        },
        setStrokeWeight: function(a) {
            this.style.oc = a
        },
        setStrokeColor: function(a) {
            a = z.yr.KB(a, this.style.sd);
            this.style.strokeColor = a
        },
        setStrokeOpacity: function(a) {
            this.style.sd = a
        },
        setFillOpacity: function(a) {
            this.style.qg = a
        },
        setFillColor: function(a) {
            this.style.fillColor = a
        }
    });
    function rc(a, b, c, e) {
        a && (this.cv = {},
        this.rK = e ? !!e : t,
        this.Tc = [],
        this.z_ = a instanceof qc ? a : q,
        this.YH = b === l ? p : !!(b.indexOf("%") + 1),
        this.Oj = isNaN(parseFloat(b)) ? 1 : this.YH ? parseFloat(b) / 100 : parseFloat(b),
        this.ZH = !!(c.indexOf("%") + 1),
        this.repeat = c != l ? this.ZH ? parseFloat(c) / 100 : parseFloat(c) : 0)
    }
    ;function sc(a, b) {
        z.lang.Ga.call(this);
        this.content = a;
        this.map = q;
        b = b || {};
        this.K = {
            width: b.width || 0,
            height: b.height || 0,
            maxWidth: b.maxWidth || 730,
            Da: b.offset || new P(0,0),
            title: b.title || "",
            $D: b.maxContent || "",
            $g: b.enableMaximize || t,
            Xr: b.enableAutoPan === t ? t : p,
            rC: b.enableCloseOnClick === t ? t : p,
            margin: b.margin || [10, 10, 40, 10],
            GB: b.collisions || [[10, 10], [10, 10], [10, 10], [10, 10]],
            NX: t,
            RY: b.onClosing || da(p),
            kK: t,
            xC: b.enableParano === p ? p : t,
            message: b.message,
            zC: b.enableSearchTool === p ? p : t,
            Ww: b.headerContent || "",
            sC: b.enableContentScroll || t
        };
        if (0 != this.K.width && (220 > this.K.width && (this.K.width = 220),
        730 < this.K.width))
            this.K.width = 730;
        if (0 != this.K.height && (60 > this.K.height && (this.K.height = 60),
        650 < this.K.height))
            this.K.height = 650;
        if (0 != this.K.maxWidth && (220 > this.K.maxWidth && (this.K.maxWidth = 220),
        730 < this.K.maxWidth))
            this.K.maxWidth = 730;
        this.be = t;
        this.si = H.sa;
        this.sb = q;
        var c = this;
        K.load("infowindow", function() {
            c.kb()
        })
    }
    z.lang.wa(sc, z.lang.Ga, "InfoWindow");
    z.extend(sc.prototype, {
        setWidth: function(a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220),
            730 < a && (a = 730)),
            this.K.width = a)
        },
        setHeight: function(a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (60 > a && (a = 60),
            650 < a && (a = 650)),
            this.K.height = a)
        },
        sN: function(a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220),
            730 < a && (a = 730)),
            this.K.maxWidth = a)
        },
        Bc: function(a) {
            this.K.title = a
        },
        getTitle: function() {
            return this.K.title
        },
        ad: ba("content"),
        lk: x("content"),
        nt: function(a) {
            this.K.$D = a + ""
        },
        he: u(),
        Xr: function() {
            this.K.Xr = p
        },
        disableAutoPan: function() {
            this.K.Xr = t
        },
        enableCloseOnClick: function() {
            this.K.rC = p
        },
        disableCloseOnClick: function() {
            this.K.rC = t
        },
        $g: function() {
            this.K.$g = p
        },
        uw: function() {
            this.K.$g = t
        },
        show: function() {
            this.Sa = p
        },
        $: function() {
            this.Sa = t
        },
        close: function() {
            this.$()
        },
        px: function() {
            this.be = p
        },
        restore: function() {
            this.be = t
        },
        Nc: function() {
            return this.Za()
        },
        Za: da(t),
        ka: function() {
            if (this.sb && this.sb.ka)
                return this.sb.ka()
        },
        aj: function() {
            return this.K.Da
        }
    });
    Na.prototype.Zc = function(a, b) {
        if (a instanceof sc && b instanceof J) {
            var c = this.aa;
            c.pm ? c.pm.ua(b) : (c.pm = new W(b,{
                icon: new pc(H.sa + "blank.gif",{
                    width: 1,
                    height: 1
                }),
                offset: new P(0,0),
                clickable: t
            }),
            c.pm.TQ = 1);
            this.Oa(c.pm);
            c.pm.Zc(a)
        }
    }
    ;
    Na.prototype.Vc = function() {
        var a = this.aa.rb || this.aa.gl;
        a && a.sb && a.sb.Vc()
    }
    ;
    gb.prototype.Zc = function(a) {
        this.map && (this.map.Vc(),
        a.Sa = p,
        this.map.aa.gl = a,
        a.sb = this,
        z.lang.Ga.call(a, a.da))
    }
    ;
    gb.prototype.Vc = function() {
        this.map && this.map.aa.gl && (this.map.aa.gl.Sa = t,
        z.lang.sw(this.map.aa.gl.da),
        this.map.aa.gl = q)
    }
    ;
    function tc(a, b) {
        gb.call(this);
        this.content = a;
        this.ba = this.map = q;
        b = b || {};
        this.K = {
            width: 0,
            Da: b.offset || new P(0,0),
            vp: {
                backgroundColor: "#fff",
                border: "1px solid #f00",
                padding: "1px",
                whiteSpace: "nowrap",
                font: "12px " + H.fontFamily,
                zIndex: "80",
                MozUserSelect: "none"
            },
            position: b.position || q,
            Yi: b.enableMassClear === t ? t : p,
            ef: p,
            left: b.left === p ? p : t,
            right: b.right === p ? p : t
        };
        0 > this.K.width && (this.K.width = 0);
        Hb(b.enableClicking) && (this.K.ef = b.enableClicking);
        this.point = this.K.position;
        var c = this;
        K.load("marker", function() {
            c.kb()
        })
    }
    z.lang.wa(tc, gb, "Label");
    z.extend(tc.prototype, {
        ka: function() {
            return this.Su ? this.Su.ka() : this.point
        },
        ua: function(a) {
            a instanceof J && !this.Kw() && (this.point = this.K.position = new J(a.lng,a.lat))
        },
        ad: ba("content"),
        JE: function(a) {
            0 <= a && 1 >= a && (this.K.opacity = a)
        },
        Kd: function(a) {
            a instanceof P && (this.K.Da = new P(a.width,a.height))
        },
        aj: function() {
            return this.K.Da
        },
        Ld: function(a) {
            a = a || {};
            this.K.vp = z.extend(this.K.vp, a)
        },
        ni: function(a) {
            return this.Ld(a)
        },
        Bc: function(a) {
            this.K.title = a || ""
        },
        getTitle: function() {
            return this.K.title
        },
        rN: function(a) {
            this.point = (this.Su = a) ? this.K.position = a.ka() : this.K.position = q
        },
        Kw: function() {
            return this.Su || q
        },
        lk: x("content")
    });
    function uc(a, b) {
        if (0 !== arguments.length) {
            gb.apply(this, arguments);
            b = b || {};
            this.K = {
                fb: a,
                opacity: b.opacity || 1,
                Oo: b.imageURL || "",
                Or: b.displayOnMinLevel || 1,
                Yi: b.enableMassClear === t ? t : p,
                Nr: b.displayOnMaxLevel || 19,
                t_: b.stretch || t
            };
            0 === b.opacity && (this.K.opacity = 0);
            var c = this;
            K.load("groundoverlay", function() {
                c.kb()
            })
        }
    }
    z.lang.wa(uc, gb, "GroundOverlay");
    z.extend(uc.prototype, {
        setBounds: function(a) {
            this.K.fb = a
        },
        getBounds: function() {
            return this.K.fb
        },
        setOpacity: function(a) {
            this.K.opacity = a
        },
        getOpacity: function() {
            return this.K.opacity
        },
        setImageURL: function(a) {
            this.K.Oo = a
        },
        getImageURL: function() {
            return this.K.Oo
        },
        setDisplayOnMinLevel: function(a) {
            this.K.Or = a
        },
        getDisplayOnMinLevel: function() {
            return this.K.Or
        },
        setDisplayOnMaxLevel: function(a) {
            this.K.Nr = a
        },
        getDisplayOnMaxLevel: function() {
            return this.K.Nr
        }
    });
    var vc = 3
      , wc = 4;
    function xc() {
        var a = document.createElement("canvas");
        return !(!a.getContext || !a.getContext("2d"))
    }
    function yc(a, b) {
        var c = this;
        xc() && (a === l && aa(Error("\u6ca1\u6709\u4f20\u5165points\u6570\u636e")),
        "[object Array]" !== Object.prototype.toString.call(a) && aa(Error("points\u6570\u636e\u4e0d\u662f\u6570\u7ec4")),
        b = b || {},
        gb.apply(c, arguments),
        c.ha = {
            la: a
        },
        c.K = {
            shape: b.shape || vc,
            size: b.size || wc,
            color: b.color || "#fa937e",
            Yi: p
        },
        this.AA = [],
        this.me = [],
        K.load("pointcollection", function() {
            for (var a = 0, b; b = c.AA[a]; a++)
                c[b.method].apply(c, b.arguments);
            for (a = 0; b = c.me[a]; a++)
                c[b.method].apply(c, b.arguments)
        }))
    }
    z.lang.wa(yc, gb, "PointCollection");
    z.extend(yc.prototype, {
        initialize: function(a) {
            this.AA && this.AA.push({
                method: "initialize",
                arguments: arguments
            })
        },
        setPoints: function(a) {
            this.me && this.me.push({
                method: "setPoints",
                arguments: arguments
            })
        },
        setStyles: function(a) {
            this.me && this.me.push({
                method: "setStyles",
                arguments: arguments
            })
        },
        clear: function() {
            this.me && this.me.push({
                method: "clear",
                arguments: arguments
            })
        },
        remove: function() {
            this.me && this.me.push({
                method: "remove",
                arguments: arguments
            })
        }
    });
    var zc = new pc(H.sa + "marker_red_sprite.png",new P(19,25),{
        anchor: new P(10,25),
        infoWindowAnchor: new P(10,0)
    })
      , Ac = new pc(H.sa + "marker_red_sprite.png",new P(20,11),{
        anchor: new P(6,11),
        imageOffset: new P(-19,-13)
    });
    function W(a, b) {
        gb.call(this);
        b = b || {};
        this.point = a;
        this.Sp = this.map = q;
        this.K = {
            Da: b.offset || new P(0,0),
            ue: b.icon || zc,
            Gk: Ac,
            title: b.title || "",
            label: q,
            oJ: b.baseZIndex || 0,
            ef: p,
            T5: t,
            ND: t,
            Yi: b.enableMassClear === t ? t : p,
            Vb: t,
            VM: b.raiseOnDrag === p ? p : t,
            cN: t,
            Fd: b.draggingCursor || H.Fd,
            rotation: b.rotation || 0,
            left: b.left === p ? p : t,
            right: b.right === p ? p : t
        };
        b.icon && !b.shadow && (this.K.Gk = q);
        b.enableDragging && (this.K.Vb = b.enableDragging);
        Hb(b.enableClicking) && (this.K.ef = b.enableClicking);
        var c = this;
        K.load("marker", function() {
            c.kb()
        })
    }
    W.fu = lc.sk(-90) + 1E6;
    W.IF = W.fu + 1E6;
    z.lang.wa(W, gb, "Marker");
    z.extend(W.prototype, {
        Tb: function(a) {
            if (a instanceof pc || a instanceof qc)
                this.K.ue = a
        },
        Do: function() {
            return this.K.ue
        },
        Vx: function(a) {
            a instanceof pc && (this.K.Gk = a)
        },
        getShadow: function() {
            return this.K.Gk
        },
        Em: function(a) {
            this.K.label = a || q
        },
        bD: function() {
            return this.K.label
        },
        Vb: function() {
            this.K.Vb = p
        },
        $B: function() {
            this.K.Vb = t
        },
        ka: x("point"),
        ua: function(a) {
            a instanceof J && (this.point = new J(a.lng,a.lat))
        },
        oi: function(a, b) {
            this.K.ND = !!a;
            a && (this.fG = b || 0)
        },
        Bc: function(a) {
            this.K.title = a + ""
        },
        getTitle: function() {
            return this.K.title
        },
        Kd: function(a) {
            a instanceof P && (this.K.Da = a)
        },
        aj: function() {
            return this.K.Da
        },
        Dm: ba("Sp"),
        mp: function(a) {
            this.K.rotation = a
        },
        TK: function() {
            return this.K.rotation
        }
    });
    function Bc(a) {
        this.options = a || {};
        this.VY = this.options.paneName || "labelPane";
        this.zIndex = this.options.zIndex || 0;
        this.bV = this.options.contextType || "2d"
    }
    Bc.prototype = new lc;
    Bc.prototype.initialize = function(a) {
        this.M = a;
        var b = this.canvas = document.createElement("canvas")
          , c = this.canvas.getContext(this.bV);
        b.style.cssText = "position:absolute;left:0;top:0;z-index:" + this.zIndex + ";";
        Cc(this);
        Dc(c);
        a.getPanes()[this.VY].appendChild(b);
        var e = this;
        a.addEventListener("resize", function() {
            Cc(e);
            Dc(c);
            e.kb()
        });
        return this.canvas
    }
    ;
    function Cc(a) {
        var b = a.M.Cb()
          , a = a.canvas;
        a.width = b.width;
        a.height = b.height;
        a.style.width = a.width + "px";
        a.style.height = a.height + "px"
    }
    function Dc(a) {
        var b = (window.devicePixelRatio || 1) / (a.oU || a.O5 || a.m4 || a.n4 || a.r4 || a.oU || 1)
          , c = a.canvas.width
          , e = a.canvas.height;
        a.canvas.width = c * b;
        a.canvas.height = e * b;
        a.canvas.style.width = c + "px";
        a.canvas.style.height = e + "px";
        a.scale(b, b)
    }
    Bc.prototype.draw = function() {
        var a = this
          , b = arguments;
        clearTimeout(a.I_);
        a.I_ = setTimeout(function() {
            a.kb.apply(a, b)
        }, 15)
    }
    ;
    fa = Bc.prototype;
    fa.kb = function() {
        var a = this.M;
        this.canvas.style.left = -a.offsetX + "px";
        this.canvas.style.top = -a.offsetY + "px";
        this.dispatchEvent("draw");
        this.options.update && this.options.update.apply(this, arguments)
    }
    ;
    fa.Qa = x("canvas");
    fa.show = function() {
        this.canvas || this.M.Oa(this);
        this.canvas.style.display = "block"
    }
    ;
    fa.$ = function() {
        this.canvas.style.display = "none"
    }
    ;
    fa.qp = function(a) {
        this.canvas.style.zIndex = a
    }
    ;
    fa.sk = x("zIndex");
    function Ec(a, b) {
        nc.call(this, b);
        b = b || {};
        this.K.qg = b.fillOpacity ? b.fillOpacity : 0.65;
        this.K.fillColor = "" == b.fillColor ? "" : b.fillColor ? b.fillColor : "#fff";
        this.ie(a);
        var c = this;
        K.load("poly", function() {
            c.kb()
        })
    }
    z.lang.wa(Ec, nc, "Polygon");
    z.extend(Ec.prototype, {
        ie: function(a, b) {
            this.Sn = nc.Gw(a).slice(0);
            var c = nc.Gw(a).slice(0);
            1 < c.length && c.push(new J(c[0].lng,c[0].lat));
            nc.prototype.ie.call(this, c, b)
        },
        Gm: function(a, b) {
            this.Sn[a] && (this.Sn[a] = new J(b.lng,b.lat),
            this.la[a] = new J(b.lng,b.lat),
            0 == a && !this.la[0].Wb(this.la[this.la.length - 1]) && (this.la[this.la.length - 1] = new J(b.lng,b.lat)),
            this.th())
        },
        Se: function() {
            var a = this.Sn;
            0 == a.length && (a = this.la);
            return a
        }
    });
    function Fc(a, b) {
        nc.call(this, b);
        this.cr(a);
        var c = this;
        K.load("poly", function() {
            c.kb()
        })
    }
    z.lang.wa(Fc, nc, "Polyline");
    function Gc(a, b, c) {
        this.point = a;
        this.Ca = Math.abs(b);
        Ec.call(this, [], c)
    }
    Gc.iE = [0.01, 1.0E-4, 1.0E-5, 4.0E-6];
    z.lang.wa(Gc, Ec, "Circle");
    z.extend(Gc.prototype, {
        initialize: function(a) {
            this.map = a;
            this.la = this.Fu(this.point, this.Ca);
            this.th();
            return q
        },
        Bb: x("point"),
        rf: function(a) {
            a && (this.point = a)
        },
        RK: x("Ca"),
        sf: function(a) {
            this.Ca = Math.abs(a)
        },
        Fu: function(a, b) {
            if (!a || !b || !this.map)
                return [];
            for (var c = [], e = b / 6378800, f = Math.PI / 180 * a.lat, g = Math.PI / 180 * a.lng, i = 0; 360 > i; i += 9) {
                var k = Math.PI / 180 * i
                  , m = Math.asin(Math.sin(f) * Math.cos(e) + Math.cos(f) * Math.sin(e) * Math.cos(k))
                  , k = new J(((g - Math.atan2(Math.sin(k) * Math.sin(e) * Math.cos(f), Math.cos(e) - Math.sin(f) * Math.sin(m)) + Math.PI) % (2 * Math.PI) - Math.PI) * (180 / Math.PI),m * (180 / Math.PI));
                c.push(k)
            }
            e = c[0];
            c.push(new J(e.lng,e.lat));
            return c
        }
    });
    var Hc = {};
    function Ic(a) {
        this.map = a;
        this.mj = [];
        this.Xf = [];
        this.Cg = [];
        this.DU = 300;
        this.pE = 0;
        this.wg = {};
        this.Ti = {};
        this.wk = 0;
        this.GD = p;
        this.rV = {};
        this.Cn = this.bq(1);
        this.lg = this.bq(2);
        this.ql = this.bq(3);
        this.eg = this.bq(4);
        a.platform.appendChild(this.Cn);
        a.platform.appendChild(this.lg);
        a.platform.appendChild(this.ql);
        a.platform.appendChild(this.eg);
        var b = 256 * Math.pow(2, 15)
          , c = 3 * b
          , a = S.gb(new J(180,0)).lng
          , c = c - a
          , b = -3 * b
          , e = S.gb(new J(-180,0)).lng;
        this.hA = a;
        this.iA = e;
        this.eA = c + (e - b);
        this.DH = a - e
    }
    D.Xe(function(a) {
        var b = new Ic(a);
        b.xa();
        a.Ye = b
    });
    z.extend(Ic.prototype, {
        xa: function() {
            var a = this
              , b = a.map;
            b.addEventListener("loadcode", function() {
                a.Uo()
            });
            b.addEventListener("addtilelayer", function(b) {
                a.Me(b)
            });
            b.addEventListener("removetilelayer", function(b) {
                a.Wf(b)
            });
            b.addEventListener("setmaptype", function(b) {
                a.Bg(b)
            });
            b.addEventListener("zoomstartcode", function(b) {
                a.Kc(b)
            });
            b.addEventListener("setcustomstyles", function(b) {
                a.mt(b.target);
                a.Uf(p)
            });
            b.addEventListener("initindoorlayer", function(b) {
                a.BD(b)
            })
        },
        Uo: function() {
            var a = this;
            if (z.fa.na)
                try {
                    document.execCommand("BackgroundImageCache", t, p)
                } catch (b) {}
            this.loaded || a.dx();
            a.Uf();
            this.loaded || (this.loaded = p,
            K.load("tile", function() {
                a.pP()
            }))
        },
        BD: function(a) {
            this.Qt = new Jc(this);
            this.Qt.Me(new Kc(this.map,this.Qt,a.Ue))
        },
        dx: function() {
            for (var a = this.map.va().bf, b = 0; b < a.length; b++) {
                var c = new Lc;
                z.extend(c, a[b]);
                this.mj.push(c);
                c.xa(this.map, this.Cn)
            }
            this.mt()
        },
        bq: function(a) {
            var b = O("div");
            b.style.position = "absolute";
            b.style.overflow = "visible";
            b.style.left = b.style.top = "0";
            b.style.zIndex = a;
            return b
        },
        xf: function() {
            this.wk--;
            var a = this;
            this.GD && (this.map.dispatchEvent(new Q("onfirsttileloaded")),
            this.GD = t);
            0 == this.wk && (this.Ci && (clearTimeout(this.Ci),
            this.Ci = q),
            this.Ci = setTimeout(function() {
                if (a.wk == 0) {
                    a.map.dispatchEvent(new Q("ontilesloaded"));
                    a.GD = p
                }
                a.Ci = q
            }, 80))
        },
        nD: function(a, b) {
            return "TILE-" + b.da + "-" + a[0] + "-" + a[1] + "-" + a[2]
        },
        Zw: function(a) {
            var b = a.Hb;
            b && Ab(b) && b.parentNode.removeChild(b);
            delete this.wg[a.name];
            a.loaded || (Mc(a),
            a.Hb = q,
            a.qm = q)
        },
        aL: function(a, b, c) {
            var e = this.map
              , f = e.va()
              , g = e.Va
              , i = e.Zb
              , k = f.Yb(g)
              , m = this.EW()
              , n = m[0]
              , o = m[1]
              , s = m[2]
              , v = m[3]
              , w = m[4]
              , c = "undefined" != typeof c ? c : 0
              , f = f.Hd()
              , m = e.da.replace(/^TANGRAM_/, "");
            for (this.Be ? this.Be.length = 0 : this.Be = []; n < s; n++)
                for (var y = o; y < v; y++) {
                    var A = n
                      , B = y;
                    this.Be.push([A, B]);
                    A = m + "_" + b + "_" + A + "_" + B + "_" + g;
                    this.rV[A] = A
                }
            this.Be.sort(function(a) {
                return function(b, c) {
                    return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                }
            }([w[0] - 1, w[1] - 1]));
            i = [Math.round(-i.lng / k), Math.round(i.lat / k)];
            n = -e.offsetY + e.height / 2;
            a.style.left = -e.offsetX + e.width / 2 + "px";
            a.style.top = n + "px";
            this.Ne ? this.Ne.length = 0 : this.Ne = [];
            n = 0;
            for (e = a.childNodes.length; n < e; n++)
                y = a.childNodes[n],
                y.Aq = t,
                this.Ne.push(y);
            if (n = this.tm)
                for (var C in n)
                    delete n[C];
            else
                this.tm = {};
            this.Oe ? this.Oe.length = 0 : this.Oe = [];
            n = 0;
            for (e = this.Be.length; n < e; n++) {
                C = this.Be[n][0];
                k = this.Be[n][1];
                y = 0;
                for (o = this.Ne.length; y < o; y++)
                    if (s = this.Ne[y],
                    s.id == m + "_" + b + "_" + C + "_" + k + "_" + g) {
                        s.Aq = p;
                        this.tm[s.id] = s;
                        break
                    }
            }
            n = 0;
            for (e = this.Ne.length; n < e; n++)
                s = this.Ne[n],
                s.Aq || this.Oe.push(s);
            this.aF = [];
            y = (f + c) * this.map.R.devicePixelRatio;
            n = 0;
            for (e = this.Be.length; n < e; n++)
                C = this.Be[n][0],
                k = this.Be[n][1],
                v = C * f + i[0] - c / 2,
                w = (-1 - k) * f + i[1] - c / 2,
                A = m + "_" + b + "_" + C + "_" + k + "_" + g,
                o = this.tm[A],
                s = q,
                o ? (s = o.style,
                s.left = v + "px",
                s.top = w + "px",
                o.ln || this.aF.push([C, k, o])) : (0 < this.Oe.length ? (o = this.Oe.shift(),
                o.getContext("2d").clearRect(-c / 2, -c / 2, y, y),
                s = o.style) : (o = document.createElement("canvas"),
                s = o.style,
                s.position = "absolute",
                s.width = f + c + "px",
                s.height = f + c + "px",
                this.mY() && (s.WebkitTransform = "scale(1.001)"),
                o.setAttribute("width", y),
                o.setAttribute("height", y),
                a.appendChild(o)),
                o.id = A,
                s.left = v + "px",
                s.top = w + "px",
                -1 < A.indexOf("bg") && (v = "#F3F1EC",
                this.map.R.mU && (v = this.map.R.mU),
                s.background = v ? v : ""),
                this.aF.push([C, k, o])),
                o.style.visibility = "";
            n = 0;
            for (e = this.Oe.length; n < e; n++)
                this.Oe[n].style.visibility = "hidden";
            return this.aF
        },
        mY: function() {
            return /M040/i.test(navigator.userAgent)
        },
        EW: function() {
            var a = this.map
              , b = a.va()
              , c = b.fL(a.Va)
              , e = a.Zb
              , f = Math.ceil(e.lng / c)
              , g = Math.ceil(e.lat / c)
              , b = b.Hd()
              , c = [f, g, (e.lng - f * c) / c * b, (e.lat - g * c) / c * b];
            return [c[0] - Math.ceil((a.width / 2 - c[2]) / b), c[1] - Math.ceil((a.height / 2 - c[3]) / b), c[0] + Math.ceil((a.width / 2 + c[2]) / b), c[1] + Math.ceil((a.height / 2 + c[3]) / b), c]
        },
        n_: function(a, b, c, e) {
            var f = this;
            f.X1 = b;
            var g = this.map.va()
              , i = f.nD(a, c)
              , k = g.Hd()
              , b = [a[0] * k + b[0], (-1 - a[1]) * k + b[1]]
              , m = this.wg[i];
            if (this.map.va() !== $a && this.map.va() !== Ua) {
                var n = this.Vv(a[0], a[2]).offsetX;
                b[0] += n;
                b.p1 = n
            }
            m && m.Hb ? (yb(m.Hb, b),
            e && (e = new R(a[0],a[1]),
            g = this.map.R.we ? this.map.R.we.style : "normal",
            e = c.getTilesUrl(e, a[2], g),
            m.loaded = t,
            Nc(m, e)),
            m.loaded ? this.xf() : Pc(m, function() {
                f.xf()
            })) : (m = this.Ti[i]) && m.Hb ? (c.Jb.insertBefore(m.Hb, c.Jb.lastChild),
            this.wg[i] = m,
            yb(m.Hb, b),
            e && (e = new R(a[0],a[1]),
            g = this.map.R.we ? this.map.R.we.style : "normal",
            e = c.getTilesUrl(e, a[2], g),
            m.loaded = t,
            Nc(m, e)),
            m.loaded ? this.xf() : Pc(m, function() {
                f.xf()
            })) : (m = k * Math.pow(2, g.Re() - a[2]),
            new J(a[0] * m,a[1] * m),
            e = new R(a[0],a[1]),
            g = this.map.R.we ? this.map.R.we.style : "normal",
            e = c.getTilesUrl(e, a[2], g),
            m = new Qc(this,e,b,a,c),
            Pc(m, function() {
                f.xf()
            }),
            m.Bn(),
            this.wg[i] = m)
        },
        xf: function() {
            this.wk--;
            var a = this;
            0 == this.wk && (this.Ci && (clearTimeout(this.Ci),
            this.Ci = q),
            this.Ci = setTimeout(function() {
                if (a.wk == 0) {
                    a.map.dispatchEvent(new Q("ontilesloaded"));
                    if (wa) {
                        if (sa && ta && ua) {
                            var b = cb()
                              , c = a.map.Cb();
                            setTimeout(function() {
                                Sa(5030, {
                                    load_script_time: ta - sa,
                                    load_tiles_time: b - ua,
                                    map_width: c.width,
                                    map_height: c.height,
                                    map_size: c.width * c.height
                                })
                            }, 1E4);
                            D.Qp("cus.fire", "time", {
                                z_imgfirstloaded: b - ua
                            })
                        }
                        wa = t
                    }
                }
                a.Ci = q
            }, 80))
        },
        nD: function(a, b) {
            return this.map.va() === Ra ? "TILE-" + b.da + "-" + this.map.aw + "-" + a[0] + "-" + a[1] + "-" + a[2] : "TILE-" + b.da + "-" + a[0] + "-" + a[1] + "-" + a[2]
        },
        Zw: function(a) {
            var b = a.Hb;
            b && (Rc(b),
            Ab(b) && b.parentNode.removeChild(b));
            delete this.wg[a.name];
            a.loaded || (Rc(b),
            Mc(a),
            a.Hb = q,
            a.qm = q)
        },
        Vv: function(a, b) {
            for (var c = 0, e = 6 * Math.pow(2, b - 3), f = e / 2 - 1, g = -e / 2; a > f; )
                a -= e,
                c -= this.eA;
            for (; a < g; )
                a += e,
                c += this.eA;
            c = Math.round(c / Math.pow(2, 18 - b));
            return {
                offsetX: c,
                Sl: a
            }
        },
        HU: function(a) {
            for (var b = a.lng; b > this.hA; )
                b -= this.DH;
            for (; b < this.iA; )
                b += this.DH;
            a.lng = b;
            return a
        },
        IU: function(a, b) {
            for (var c = 256 * Math.pow(2, 18 - b), e = Math.floor(this.hA / c), f = Math.floor(this.iA / c), c = Math.floor(this.eA / c), g = [], i = 0; i < a.length; i++) {
                var k = a[i]
                  , m = k[0]
                  , k = k[1];
                if (m >= e) {
                    var m = m + c
                      , n = "id_" + m + "_" + k + "_" + b;
                    a[n] || (a[n] = p,
                    g.push([m, k]))
                } else
                    m <= f && (m -= c,
                    n = "id_" + m + "_" + k + "_" + b,
                    a[n] || (a[n] = p,
                    g.push([m, k])))
            }
            for (i = 0; i < g.length; i++)
                a.push(g[i]);
            return a
        },
        Uf: function(a) {
            if (!this.map.R.pg) {
                var b = this;
                if (b.map.va() == Ra)
                    K.load("coordtrans", function() {
                        b.map.Qb || (b.map.Qb = Ra.kk(b.map.Xg),
                        b.map.aw = Ra.DK(b.map.Qb));
                        b.FH()
                    }, p);
                else {
                    if (a && a)
                        for (var c in this.Ti)
                            delete this.Ti[c];
                    b.FH(a)
                }
            }
        },
        FH: function(a) {
            var b = this.mj.concat(this.Xf)
              , c = b.length
              , e = this.map
              , f = e.va()
              , g = e.Zb
              , i = e.width
              , i = e.va().Yb(e.Va) * i
              , i = this.cY(g.lng - i / 2, g.lng + i / 2);
            this.map.va() !== $a && this.map.va() !== Ua && (g = this.HU(g));
            for (var k = 0; k < c; k++) {
                var m = b[k];
                if (m.gc && e.Va < m.gc)
                    break;
                if (m.Uv) {
                    var n = this.Jb = m.Jb;
                    if (a) {
                        var o = n;
                        if (o && o.childNodes)
                            for (var s = o.childNodes.length, v = s - 1; 0 <= v; v--)
                                s = o.childNodes[v],
                                o.removeChild(s),
                                s = q
                    }
                    if (this.map.Nd()) {
                        this.lg.style.display = "block";
                        n.style.display = "none";
                        this.map.dispatchEvent(new Q("vectorchanged"), {
                            isvector: p
                        });
                        continue
                    } else
                        n.style.display = "block",
                        this.lg.style.display = "none",
                        this.map.dispatchEvent(new Q("vectorchanged"), {
                            isvector: t
                        })
                }
                if (!m.o1 && !(m.ix && !this.map.Nd() || m.GL && this.map.Nd())) {
                    e = this.map;
                    f = e.va();
                    n = f.qk();
                    s = e.Va;
                    g = e.Zb;
                    f == Ra && g.Wb(new J(0,0)) && (g = e.Zb = n.ci(e.oe, e.Qb));
                    var w = f.Yb(s)
                      , n = f.fL(s)
                      , o = Math.ceil(g.lng / n)
                      , y = Math.ceil(g.lat / n)
                      , A = f.Hd()
                      , n = [o, y, (g.lng - o * n) / n * A, (g.lat - y * n) / n * A]
                      , y = i ? 1.5 * (e.width / 2) : e.width / 2
                      , v = n[0] - Math.ceil((y - n[2]) / A)
                      , o = n[1] - Math.ceil((e.height / 2 - n[3]) / A)
                      , y = n[0] + Math.ceil((y + n[2]) / A)
                      , B = 0;
                    f === Ra && 15 == e.ja() && (B = 1);
                    f = n[1] + Math.ceil((e.height / 2 + n[3]) / A) + B;
                    this.jJ = new J(g.lng,g.lat);
                    var C = this.wg, A = -this.jJ.lng / w, B = this.jJ.lat / w, g = [Math.ceil(A), Math.ceil(B)], w = e.ja(), F;
                    for (F in C) {
                        var E = C[F]
                          , G = E.info;
                        (G[2] != w || G[2] == w && (v > G[0] || y <= G[0] || o > G[1] || f <= G[1])) && this.Zw(E)
                    }
                    C = -e.offsetX + e.width / 2;
                    E = -e.offsetY + e.height / 2;
                    m.Jb && (m.Jb.style.left = Math.ceil(A + C) - g[0] + "px",
                    m.Jb.style.top = Math.ceil(B + E) - g[1] + "px",
                    m.Jb.style.WebkitTransform = "translate3d(0,0,0)");
                    A = [];
                    for (e.dB = []; v < y; v++)
                        for (B = o; B < f; B++)
                            A.push([v, B]),
                            e.dB.push({
                                x: v,
                                y: B
                            });
                    this.map.va() !== $a && this.map.va() !== Ua && (A = this.IU(A, s));
                    A.sort(function(a) {
                        return function(b, c) {
                            return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                        }
                    }([n[0] - 1, n[1] - 1]));
                    s = A.length;
                    this.wk += s;
                    for (v = 0; v < s; v++)
                        this.n_([A[v][0], A[v][1], w], g, m, a)
                }
            }
        },
        cY: function(a, b) {
            return a < this.iA || b > this.hA
        },
        Me: function(a) {
            var b = this
              , c = a.target;
            b.map.Nd();
            c.Om && this.map.Me(c.Om);
            if (c.ix) {
                for (a = 0; a < b.Cg.length; a++)
                    if (b.Cg[a] == c)
                        return;
                K.load("vector", function() {
                    c.xa(b.map, b.lg);
                    b.Cg.push(c)
                }, p)
            } else {
                for (a = 0; a < b.Xf.length; a++)
                    if (b.Xf[a] == c)
                        return;
                c.xa(this.map, this.ql);
                b.Xf.push(c)
            }
        },
        Wf: function(a) {
            a = a.target;
            this.map.Nd();
            a.Om && this.map.Wf(a.Om);
            if (a.ix)
                for (var b = 0, c = this.Cg.length; b < c; b++)
                    a == this.Cg[b] && this.Cg.splice(b, 1);
            else {
                b = 0;
                for (c = this.Xf.length; b < c; b++)
                    a == this.Xf[b] && this.Xf.splice(b, 1)
            }
            a.remove()
        },
        Bg: function() {
            for (var a = this.mj, b = 0, c = a.length; b < c; b++)
                a[b].remove();
            delete this.Jb;
            this.mj = [];
            this.Ti = this.wg = {};
            this.dx();
            this.Uf()
        },
        Kc: function() {
            var a = this;
            a.ud && z.U.$(a.ud);
            setTimeout(function() {
                a.Uf();
                a.map.dispatchEvent(new Q("onzoomend"))
            }, 10)
        },
        H5: u(),
        mt: function(a) {
            var b = this.map.va();
            if (!this.map.Nd() && (a ? this.map.R.w_ = a : a = this.map.R.w_,
            a))
                for (var c = q, c = "2" == D.Pt ? [D.url.proto + D.url.domain.main_domain_cdn.other[0] + "/"] : [D.url.proto + D.url.domain.main_domain_cdn.baidu[0] + "/", D.url.proto + D.url.domain.main_domain_cdn.baidu[1] + "/", D.url.proto + D.url.domain.main_domain_cdn.baidu[2] + "/"], e = 0, f; f = this.mj[e]; e++)
                    if (f.i_ == p) {
                        b.m.nc = 18;
                        f.getTilesUrl = function(b, e) {
                            var f = b.x
                              , f = this.map.Ye.Vv(f, e).Sl
                              , m = b.y
                              , n = Rb("normal")
                              , o = 1;
                            this.map.$w() && (o = 2);
                            n = "customimage/tile?&x=" + f + "&y=" + m + "&z=" + e + "&udt=" + n + "&scale=" + o + "&ak=" + qa;
                            n = a.styleStr ? n + ("&styles=" + encodeURIComponent(a.styleStr)) : n + ("&customid=" + a.style);
                            return c[Math.abs(f + m) % c.length] + n
                        }
                        ;
                        break
                    }
        }
    });
    function Qc(a, b, c, e, f) {
        this.qm = a;
        this.position = c;
        this.qu = [];
        this.name = a.nD(e, f);
        this.info = e;
        this.JI = f.Ls();
        e = O("img");
        zb(e);
        e.wK = t;
        var g = e.style
          , a = a.map.va();
        g.position = "absolute";
        g.border = "none";
        g.width = a.Hd() + "px";
        g.height = a.Hd() + "px";
        g.left = c[0] + "px";
        g.top = c[1] + "px";
        g.maxWidth = "none";
        this.Hb = e;
        this.src = b;
        Sc && (this.Hb.style.opacity = 0);
        var i = this;
        this.Hb.onload = function() {
            D.uY.cQ();
            i.loaded = p;
            if (i.qm) {
                var a = i.qm
                  , b = a.Ti;
                if (!b[i.name]) {
                    a.pE++;
                    b[i.name] = i
                }
                if (i.Hb && !Ab(i.Hb) && f.Jb) {
                    f.Jb.appendChild(i.Hb);
                    if (z.fa.na <= 6 && z.fa.na > 0 && i.JI)
                        i.Hb.style.cssText = i.Hb.style.cssText + (';filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + i.src + '",sizingMethod=scale);')
                }
                var c = a.pE - a.DU, e;
                for (e in b) {
                    if (c <= 0)
                        break;
                    if (!a.wg[e]) {
                        b[e].qm = q;
                        var g = b[e].Hb;
                        if (g && g.parentNode) {
                            g.parentNode.removeChild(g);
                            Rc(g)
                        }
                        g = q;
                        b[e].Hb = q;
                        delete b[e];
                        a.pE--;
                        c--
                    }
                }
                Sc && new ub({
                    Gc: 20,
                    duration: 200,
                    za: function(a) {
                        if (i.Hb && i.Hb.style)
                            i.Hb.style.opacity = a * 1
                    },
                    finish: function() {
                        i.Hb && i.Hb.style && delete i.Hb.style.opacity
                    }
                });
                Mc(i)
            }
        }
        ;
        this.Hb.onerror = function() {
            Mc(i);
            if (i.qm) {
                var a = i.qm.map.va();
                if (a.m.CC) {
                    i.error = p;
                    i.Hb.src = a.m.CC;
                    i.Hb && !Ab(i.Hb) && f.Jb.appendChild(i.Hb)
                }
            }
        }
        ;
        e = q
    }
    function Pc(a, b) {
        a.qu.push(b)
    }
    Qc.prototype.Bn = function() {
        this.Hb.src = 0 < z.fa.na && 6 >= z.fa.na && this.JI ? H.sa + "blank.gif" : "" !== this.src && this.Hb.src == this.src ? this.src + "&t = " + Date.now() : this.src
    }
    ;
    function Mc(a) {
        for (var b = 0; b < a.qu.length; b++)
            a.qu[b]();
        a.qu.length = 0
    }
    function Rc(a) {
        if (a) {
            a.onload = a.onerror = q;
            var b = a.attributes, c, e, f;
            if (b) {
                e = b.length;
                for (c = 0; c < e; c += 1)
                    f = b[c].name,
                    Za(a[f]) && (a[f] = q)
            }
            if (b = a.children) {
                e = b.length;
                for (c = 0; c < e; c += 1)
                    Rc(a.children[c])
            }
        }
    }
    function Nc(a, b) {
        a.src = b;
        a.Bn()
    }
    var Sc = !z.fa.na || 8 < z.fa.na;
    function Lc(a) {
        this.Ue = a || {};
        this.dV = this.Ue.copyright || q;
        this.X_ = this.Ue.transparentPng || t;
        this.Uv = this.Ue.baseLayer || t;
        this.zIndex = this.Ue.zIndex || 0;
        this.da = Lc.LR++
    }
    Lc.LR = 0;
    z.lang.wa(Lc, z.lang.Ga, "TileLayer");
    z.extend(Lc.prototype, {
        xa: function(a, b) {
            this.Uv && (this.zIndex = -100);
            this.map = a;
            if (!this.Jb) {
                var c = O("div")
                  , e = c.style;
                e.position = "absolute";
                e.overflow = "visible";
                e.zIndex = this.zIndex;
                e.left = Math.ceil(-a.offsetX + a.width / 2) + "px";
                e.top = Math.ceil(-a.offsetY + a.height / 2) + "px";
                b.appendChild(c);
                this.Jb = c
            }
        },
        remove: function() {
            this.Jb && this.Jb.parentNode && (this.Jb.innerHTML = "",
            this.Jb.parentNode.removeChild(this.Jb));
            delete this.Jb
        },
        Ls: x("X_"),
        getTilesUrl: function(a, b) {
            if (this.map.va() !== $a && this.map.va() !== Ua)
                var c = this.map.Ye.Vv(a.x, b).Sl;
            var e = "";
            this.Ue.tileUrlTemplate && (e = this.Ue.tileUrlTemplate.replace(/\{X\}/, c),
            e = e.replace(/\{Y\}/, a.y),
            e = e.replace(/\{Z\}/, b));
            return e
        },
        am: x("dV"),
        va: function() {
            return this.Ta || Oa
        }
    });
    function Tc(a) {
        Lc.call(this, a);
        this.m = a || {};
        this.GL = p;
        if (this.m.predictDate) {
            if (1 > this.m.predictDate.weekday || 7 < this.m.predictDate.weekday)
                this.m.predictDate = 1;
            if (0 > this.m.predictDate.hour || 23 < this.m.predictDate.hour)
                this.m.predictDate.hour = 0
        }
        this.MT = D.url.proto + D.url.domain.traffic + "/traffic/"
    }
    Tc.prototype = new Lc;
    Tc.prototype.xa = function(a, b) {
        Lc.prototype.xa.call(this, a, b);
        this.M = a
    }
    ;
    Tc.prototype.Ls = da(p);
    Tc.prototype.getTilesUrl = function(a, b) {
        var c = "";
        this.m.predictDate ? c = "HistoryService?day=" + (this.m.predictDate.weekday - 1) + "&hour=" + this.m.predictDate.hour + "&t=" + (new Date).getTime() + "&" : (c = "TrafficTileService?time=" + (new Date).getTime() + "&",
        c += "label=web2D&v=016&");
        var c = this.MT + c + "level=" + b + "&x=" + a.x + "&y=" + a.y
          , e = 1;
        this.M.$w() && (e = 2);
        return (c + "&scaler=" + e).replace(/-(\d+)/gi, "M$1")
    }
    ;
    var Uc = [D.url.proto + D.url.domain.TILES_YUN_HOST[0] + "/georender/gss", D.url.proto + D.url.domain.TILES_YUN_HOST[1] + "/georender/gss", D.url.proto + D.url.domain.TILES_YUN_HOST[2] + "/georender/gss", D.url.proto + D.url.domain.TILES_YUN_HOST[3] + "/georender/gss"]
      , Vc = D.url.proto + D.url.domain.main_domain_nocdn.baidu + "/style/poi/rangestyle"
      , Wc = 100;
    function ob(a, b) {
        Lc.call(this);
        var c = this;
        this.GL = p;
        try {
            document.createElement("canvas").getContext("2d")
        } catch (e) {}
        Ib(a) ? b = a || {} : (c.kn = a,
        b = b || {});
        b.geotableId && (c.zf = b.geotableId);
        b.databoxId && (c.kn = b.databoxId);
        var f = D.md + "geosearch";
        c.$a = {
            PM: b.pointDensity || Wc,
            IX: f + "/detail/",
            JX: f + "/v2/detail/",
            gJ: b.age || 36E5,
            ft: b.q || "",
            H_: "png",
            G3: [5, 5, 5, 5],
            qY: {
                backgroundColor: "#FFFFD5",
                borderColor: "#808080"
            },
            qB: b.ak || qa,
            XE: b.tags || "",
            filter: b.filter || "",
            EN: b.sortby || "",
            tD: b.hotspotName || "tile_md_" + (1E5 * Math.random()).toFixed(0),
            kF: p
        };
        K.load("clayer", function() {
            c.Qd()
        })
    }
    ob.prototype = new Lc;
    ob.prototype.xa = function(a, b) {
        Lc.prototype.xa.call(this, a, b);
        this.M = a
    }
    ;
    ob.prototype.getTilesUrl = function(a, b) {
        var c = a.x
          , e = a.y
          , f = this.$a
          , c = Uc[Math.abs(c + e) % Uc.length] + "/image?grids=" + c + "_" + e + "_" + b + "&q=" + f.ft + "&tags=" + f.XE + "&filter=" + f.filter + "&sortby=" + f.EN + "&ak=" + this.$a.qB + "&age=" + f.gJ + "&page_size=" + f.PM + "&format=" + f.H_;
        f.kF || (f = (1E5 * Math.random()).toFixed(0),
        c += "&timeStamp=" + f);
        this.zf ? c += "&geotable_id=" + this.zf : this.kn && (c += "&databox_id=" + this.kn);
        return c
    }
    ;
    ob.prototype.enableUseCache = function() {
        this.$a.kF = p
    }
    ;
    ob.prototype.disableUseCache = function() {
        this.$a.kF = t
    }
    ;
    ob.kT = /^point\(|\)$/ig;
    ob.lT = /\s+/;
    ob.nT = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    var Xc = {};
    function Yc(a, b) {
        this.gd = a;
        this.sP = 18;
        this.m = {
            gy: 256,
            Ic: new S
        };
        z.extend(this.m, b || {})
    }
    var Zc = [0, 0, 0, 8, 7, 7, 6, 6, 5, 5, 4, 3, 3, 3, 2, 2, 1, 1, 0, 0, 0, 0]
      , $c = [512, 2048, 4096, 32768, 65536, 262144, 1048576, 4194304, 8388608]
      , ad = [0, 0, 0, 3, 5, 5, 7, 7, 9, 9, 10, 12, 12, 12, 15, 15, 17, 17, 19, 19, 19, 19]
      , bd = [0, 0, 0, 256, 256, 512, 256, 512, 256, 512, 256, 256, 512, 1024, 256, 512, 512, 1024, 512, 1024, 2048, 4096];
    Yc.prototype = {
        getName: x("gd"),
        Hd: function(a) {
            return "na" === this.gd ? bd[a] : this.m.gy
        },
        hs: function(a) {
            return "na" === this.gd ? ad[a] : a
        },
        qk: function() {
            return this.m.Ic
        },
        Yb: function(a) {
            return Math.pow(2, this.sP - a)
        },
        eD: function(a) {
            return "na" === this.gd ? $c[Zc[a]] : this.Yb(a) * this.Hd(a)
        }
    };
    var cd = {
        drawPoly: function(a, b, c, e, f, g) {
            var i = a[1];
            if (i)
                for (var a = a[6], k = 0; k < i.length; k++) {
                    var m = i[k][0]
                      , n = f.gj(m, "polygon", c, g);
                    if (n && n.length)
                        for (var o = i[k][1], s = 0; s < o.length; s++) {
                            var v = o[s][1];
                            f.Nc(v[0], c) && (v["cache" + c] || (v["cache" + c] = f.vm(v[1], c, e, a)),
                            v = v["cache" + c],
                            f.M.Xn(b.canvas.id, v, {
                                type: "polygon",
                                Ub: m,
                                style: n
                            }),
                            this.UV(b, v, n, c))
                        }
                }
        },
        UV: function(a, b, c, e) {
            c = c[0];
            if (!c.Ub || !(6 < e && (71013 === c.Ub || 71012 === c.Ub || 71011 === c.Ub) || 6 === e && (71011 === c.Ub || 71012 === c.Ub) || 5 === e && (71011 === c.Ub || 71013 === c.Ub) || 5 > e && (71012 === c.Ub || 71013 === c.Ub))) {
                a.fillStyle = c.Aw;
                a.beginPath();
                a.moveTo(b[0], b[1]);
                for (var e = 2, f = b.length; e < f; e += 2)
                    a.lineTo(b[e], b[e + 1]);
                a.closePath();
                c.borderWidth && (a.strokeStyle = c.ho,
                a.lineWidth = c.borderWidth / 2,
                a.stroke());
                a.fill()
            }
        },
        drawGaoqingRoadBorder: function(a, b, c, e, f) {
            var g = a[1];
            if (g)
                for (var a = a[6], i = 0; i < g.length; i++) {
                    var k = g[i][0]
                      , m = f.gj(k, "polygon", c);
                    if (m && m.length && m[0].borderWidth)
                        for (var n = g[i][1], o = 0; o < n.length; o++) {
                            var s = n[o][1];
                            f.Nc(s[0], c) && (s["cache" + c] || (s["cache" + c] = f.vm(s[1], c, e, a)),
                            s = s["cache" + c],
                            f.M.Xn(b.canvas.id, s, {
                                type: "polygon",
                                Ub: k,
                                style: m
                            }),
                            this.WV(b, s, m))
                        }
                }
        },
        drawGaoqingRoadFill: function(a, b, c, e, f) {
            var g = a[1];
            if (g)
                for (var a = a[6], i = 0; i < g.length; i++) {
                    var k = g[i][0]
                      , m = f.gj(k, "polygon", c);
                    if (m && m.length)
                        for (var n = g[i][1], o = 0; o < n.length; o++) {
                            var s = n[o][1];
                            f.Nc(s[0], c) && (s["cache" + c] || (s["cache" + c] = f.vm(s[1], c, e, a)),
                            s = s["cache" + c],
                            f.M.Xn(b.canvas.id, s, {
                                type: "polygon",
                                Ub: k,
                                style: m
                            }),
                            this.XV(b, s, m))
                        }
                }
        },
        WV: function(a, b, c) {
            c = c[0];
            a.beginPath();
            a.moveTo(b[0], b[1]);
            for (var e = 2, f = b.length; e < f; e += 2)
                a.lineTo(b[e], b[e + 1]);
            a.closePath();
            a.strokeStyle = c.ho;
            a.lineWidth = c.borderWidth / 2;
            a.stroke()
        },
        XV: function(a, b, c) {
            a.fillStyle = c[0].Aw;
            a.beginPath();
            a.moveTo(b[0], b[1]);
            for (var c = 2, e = b.length; c < e; c += 2)
                a.lineTo(b[c], b[c + 1]);
            a.closePath();
            a.fill()
        }
    };
    var dd = {
        drawArrow: function(a, b, c, e, f, g) {
            b.lineWidth = 1.5;
            b.lineCap = "butt";
            b.lineJoin = "miter";
            b.strokeStyle = "rgba(153,153,153,1)";
            var i = a[7];
            if (i) {
                a = i[1];
                e = g.vm(i[0], c, e);
                for (i = 0; i < a.length; i++)
                    if (g.Nc(a[i], c)) {
                        var k = e[4 * i]
                          , m = e[4 * i + 1]
                          , n = e[4 * i + 2]
                          , o = e[4 * i + 3]
                          , s = (k + n) / 2
                          , v = (m + o) / 2
                          , n = (k - n) / f
                          , o = (m - o) / f
                          , k = s + n / 2
                          , n = s - n / 2
                          , m = v + o / 2
                          , o = v - o / 2;
                        this.NV(b, k, m, n, o)
                    }
            }
        },
        NV: function(a, b, c, e, f) {
            a.beginPath();
            a.moveTo(b, c);
            a.lineTo(e, f);
            a.stroke();
            c = this.EU([b, c], [e, f]);
            b = c[0];
            c = c[1];
            a.beginPath();
            a.moveTo(b[0], b[1]);
            a.lineTo(c[0], c[1]);
            a.lineTo(e, f);
            a.closePath();
            a.stroke()
        },
        EU: function(a, b) {
            var c = b[0] - a[0]
              , e = b[1] - a[1]
              , f = 1.8 * Math.sqrt(c * c + e * e)
              , g = b[0] + 4.8410665352790705 * (c / f)
              , f = b[1] + 4.8410665352790705 * (e / f)
              , c = Math.atan2(e, c) + Math.PI;
            return [[g + 4.8410665352790705 * Math.cos(c - 0.3), f + 4.8410665352790705 * Math.sin(c - 0.3)], [g + 4.8410665352790705 * Math.cos(c + 0.3), f + 4.8410665352790705 * Math.sin(c + 0.3)]]
        }
    };
    var ed = {
        drawHregion: function(a, b, c, e, f) {
            var g = a[1];
            if (g)
                for (var a = a[6], i = 0; i < g.length; i++) {
                    var k = g[i][0]
                      , m = f.gj(k, "polygon3d", c);
                    if (m && m.length)
                        for (var n = g[i][1], o = 0; o < n.length; o++) {
                            var s = n[o][2];
                            if (f.Nc(s[0], c)) {
                                var v = s[2];
                                s["cache" + c] || (s["cache" + c] = f.vm(s[1], c, e, a));
                                s = s["cache" + c];
                                f.M.Xn(b.canvas.id, s, {
                                    type: "polygon",
                                    Ub: k,
                                    style: m
                                });
                                this.VV(b, s, v, m)
                            }
                        }
                }
        },
        VV: function(a, b, c, e) {
            e = e[0];
            if (!(c < e.filter)) {
                a.fillStyle = e.mW;
                a.beginPath();
                a.moveTo(b[0], b[1]);
                for (var c = 2, f = b.length; c < f; c += 2)
                    a.lineTo(b[c], b[c + 1]);
                a.closePath();
                e.borderWidth && (a.strokeStyle = e.ho,
                a.lineWidth = e.borderWidth / 2,
                a.stroke());
                a.fill()
            }
        }
    };
    var fd = {
        parse: function(a, b, c, e, f) {
            for (var g = e.M, i = g.ja(), k = Math.pow(2, 18 - i), m = g.Ic.ci(g.Bb()), n = m.lng, o = m.lat, m = g.Cb(), s = m.width, v = m.height, m = [], w = 0; w < a.length; w++) {
                var y = []
                  , A = a[w].F_;
                y.x = A[0];
                y.y = A[1];
                y.S5 = A[2];
                for (var B = (A[0] * c * k - n) / k + s / 2, C = (o - (A[1] + 1) * c * k) / k + v / 2, F = 0; F < a[w].length; F++)
                    a[w][F].ML ? this.LM(a[w][F].ML, A, e, b, c, B, C, i, k, s, v, y) : a[w][F].PX ? this.LM(a[w][F].PX, A, e, b, c, B, C, i, k, s, v, y, p, window.K3) : this.aZ(a[w][F].rY, A, e, b, c, B, C, i, k, s, v, y, f);
                m.push(y)
            }
            if (/collision=0/.test(location.search)) {
                a = [];
                for (w = 0; w < m.length; w++)
                    for (F = 0; F < m[w].length; F++)
                        a.push(m[w][F])
            } else
                a = this.nZ(m, e.M.ja());
            g.TU();
            for (w = 0; w < a.length; w++)
                if (c = a[w],
                !c.Gs)
                    if (F = [c.Sf, c.Tf, c.Sf, c.gi, c.fi, c.gi, c.fi, c.Tf, c.Sf, c.Tf],
                    c.style && g.Xn("poi", F, {
                        type: "polygon",
                        Ub: c.style.Ub,
                        style: c.style
                    }),
                    "fixed" === c.type) {
                        F = t;
                        c.ue && (c.style && 4 === c.direction) && (F = p);
                        if (c.ue)
                            if (F) {
                                var E = this;
                                this.Vr(b, c, e, F, function(a) {
                                    for (var c = 0; c < a.tf.length; c++)
                                        E.eK(b, a.tf[c].$d, a.tf[c].ae, a.tf[c].text, a.style, e)
                                })
                            } else
                                this.Vr(b, c, e);
                        if (c.style && !F)
                            for (F = 0; F < c.tf.length; F++)
                                this.eK(b, c.tf[F].$d, c.tf[F].ae, c.tf[F].text, c.style, e)
                    } else if ("line" === c.type)
                        for (F = 0; F < c.tO.length; F++)
                            f = c.tO[F],
                            fd.QV(b, f.$d, f.ae, f.hU, f.rO, f.width, f.height, c.style, e);
            return m
        },
        LM: function(a, b, c, e, f, g, i, k, m, n, o, s, v, w) {
            if (a = a[1])
                for (b = 0; b < a.length; b++) {
                    var y = a[b]
                      , A = y[0]
                      , B = c.gj(A, "point", k, w)
                      , A = c.gj(A, "pointText", k, w)
                      , y = y[1]
                      , C = q
                      , F = 100
                      , E = 0
                      , G = 0;
                    B && B[0] && (B = B[0],
                    C = B.ue,
                    F = B.zoom || 100);
                    A = A && A[0] ? A[0] : q;
                    for (B = 0; B < y.length; B++) {
                        var N = y[B][4];
                        if (N && c.Nc(N[2], k)) {
                            var L = Math.round(N[0] / 100) / m + g
                              , M = f - Math.round(N[1] / 100) / m + i;
                            if (v || !(-50 > L || -50 > M || L > n + 50 || M > o + 50)) {
                                var T = N[7] || ""
                                  , ea = {
                                    type: "fixed",
                                    uid: N[3] || "",
                                    name: T,
                                    Kx: N[4],
                                    Bs: q,
                                    tf: [],
                                    yx: [L, M],
                                    style: A
                                };
                                if (C) {
                                    var ca = window.iconSetInfo_high[C] || window.iconSetInfo_high["MapRes/" + C];
                                    if (!ca) {
                                        var va = C.charCodeAt(0);
                                        48 <= va && 57 >= va && (ca = window.iconSetInfo_high["_" + C])
                                    }
                                    ca && (E = ca[2],
                                    G = ca[3],
                                    E = E / 2 * F / 100,
                                    G = G / 2 * F / 100,
                                    ea.Bs = {
                                        $d: L - E / 2,
                                        ae: M - G / 2,
                                        width: E,
                                        height: G
                                    },
                                    ea.ue = C)
                                }
                                if (A) {
                                    N = N[5];
                                    "number" !== typeof N && (N = 0);
                                    var za = ca = 0
                                      , va = (A.fontSize || 12) / 2
                                      , Ea = 0.2 * va;
                                    e.font = fd.Fw(A, c);
                                    var T = T.split("\\")
                                      , ra = T.length;
                                    ea.direction = N;
                                    for (var Ta = 0; Ta < ra; Ta++) {
                                        var re = T[Ta]
                                          , Oc = e.measureText(re).width;
                                        switch (N) {
                                        case 3:
                                            za = M - va / 2 * ra - Ea * (ra - 1) / 2;
                                            ca = L - Oc - E / 2;
                                            za = za + va * Ta + Ea * Ta;
                                            break;
                                        case 1:
                                            za = M - va / 2 * ra - Ea * (ra - 1) / 2;
                                            ca = L + E / 2;
                                            za = za + va * Ta + Ea * Ta;
                                            break;
                                        case 2:
                                            za = M - G / 2 - va * ra - Ea * (ra - 1) - Ea;
                                            ca = L - Oc / 2;
                                            za = za + va * Ta + Ea * Ta;
                                            break;
                                        case 0:
                                            za = M + G / 2 + Ea / 2;
                                            ca = L - Oc / 2;
                                            za = za + va * Ta + Ea * Ta;
                                            break;
                                        case 4:
                                            za = M - va / 2 * ra - Ea * (ra - 1) / 2,
                                            ca = L - Oc / 2,
                                            za = za + va * Ta + Ea * Ta
                                        }
                                        ea.tf.push({
                                            $d: ca,
                                            ae: za,
                                            width: Oc,
                                            height: va,
                                            text: re
                                        })
                                    }
                                }
                                s.push(ea)
                            }
                        }
                    }
                }
        },
        aZ: function(a, b, c, e, f, g, i, k, m, n, o, s, v) {
            b = a[7].length;
            if ((n = c.gj(a[0], "pointText", k)) && n.length) {
                n = n[0];
                e.font = fd.Fw(n, c);
                for (var o = n.fontSize / 2, w = a[1], y = a[2], A = y.split("").length, B = a[4], C = B.slice(0, 2), F = 2; F < B.length; F += 2)
                    C[F] = C[F - 2] + B[F],
                    C[F + 1] = C[F - 1] + B[F + 1];
                for (F = 2; F < B.length; F += 2)
                    0 === F % (2 * A) || 1 === F % (2 * A) || (C[F] = C[F - 2] + B[F] / v,
                    C[F + 1] = C[F - 1] + B[F + 1] / v);
                for (v = 0; v < b; v++)
                    if (c.Nc(a[7][v], k)) {
                        var F = []
                          , E = l
                          , G = l
                          , N = l
                          , L = l
                          , M = y.split("");
                        a[6][v] && M.reverse();
                        for (var B = 2 * v * A, B = C.slice(B, B + 2 * A), T = 0; T < A; T++) {
                            var ea = a[5][A * v + T]
                              , ca = B[2 * T] / 100 / m + g
                              , va = f - B[2 * T + 1] / 100 / m + i
                              , za = M[T]
                              , Ea = e.measureText(za).width;
                            if (E === l)
                                E = ca - Ea / 2,
                                G = va - o / 2,
                                N = E + Ea,
                                L = G + o;
                            else {
                                var ra = ca - Ea / 2
                                  , Ta = va - o / 2;
                                ra < E && (E = ra);
                                Ta < G && (G = Ta);
                                ra + Ea > N && (N = ra + Ea);
                                Ta + o > L && (L = Ta + o)
                            }
                            F.push({
                                rO: za,
                                $d: ca,
                                ae: va,
                                hU: ea,
                                width: Ea,
                                height: o
                            })
                        }
                        s.push({
                            type: "line",
                            Kx: w,
                            style: n,
                            tO: F,
                            Sf: E,
                            Tf: G,
                            fi: N,
                            gi: L
                        })
                    }
            }
        },
        Vr: function(a, b, c, e, f) {
            var g = b.ue;
            if ("lanche" !== g)
                if (fd.ax[g])
                    this.bK(a, b, fd.ax[g], e, f);
                else {
                    var c = c.KK(g)
                      , i = new Image;
                    i.setAttribute("crossOrigin", "anonymous");
                    var k = this;
                    i.onload = function() {
                        fd.ax[g] = this;
                        k.bK(a, b, this, e, f);
                        i.onload = q
                    }
                    ;
                    i.src = c
                }
        },
        bK: function(a, b, c, e, f) {
            var g = b.Bs
              , i = g.$d
              , k = g.ae
              , m = q
              , n = q
              , o = p
              , s = b.style ? b.style.Ub : q;
            if (b.style && 62203 === s) {
                for (var v = n = m = 0; v < b.tf.length; v++)
                    m < b.tf[v].width && (m = b.tf[v].width),
                    n += 20;
                m = Math.ceil(m) + 10
            }
            e && 519 === s && (o = t);
            m !== q && n !== q ? this.TV(a, b, c, 8, m, n) : e && o ? (m = Math.ceil(b.tf[0].width) + 6,
            this.MV(a, b, c, 12, m, c.height / 2)) : a.drawImage(c, i, k, g.width, g.height);
            f && f(b)
        },
        TV: function(a, b, c, e, f, g) {
            var i = b.yx[0] - f / 2
              , b = b.yx[1] - g / 2;
            0 < navigator.userAgent.indexOf("iPhone") && (b += 1);
            var k = e / 2;
            a.drawImage(c, 0, 0, e, e, i, b, k, k);
            a.drawImage(c, e, 0, 1, e, i + k, b, f - 2 * k, k);
            a.drawImage(c, c.width - e, 0, e, e, i + f - k, b, k, k);
            a.drawImage(c, 0, e, e, 1, i, b + k, k, g - 2 * k);
            a.drawImage(c, e, e, 1, 1, i + k, b + k, f - 2 * k, g - 2 * k);
            a.drawImage(c, c.width - e, e, e, 1, i + f - k, b + k, k, g - 2 * k);
            a.drawImage(c, 0, c.height - e, e, e, i, b + g - k, k, k);
            a.drawImage(c, e, c.height - e, 1, e, i + k, b + g - k, f - 2 * k, k);
            a.drawImage(c, c.width - e, c.height - e, e, e, i + f - k, b + g - k, k, k)
        },
        MV: function(a, b, c, e, f, g) {
            var i = b.yx[0] - f / 2
              , b = b.yx[1] - g / 2
              , g = e / 2;
            a.drawImage(c, 0, 0, e, c.height, i, b, g, c.height / 2);
            a.drawImage(c, e, 0, 1, c.height, i + g, b, f - 2 * g, c.height / 2);
            a.drawImage(c, c.width - e, 0, e, c.height, i + f - g, b, g, c.height / 2)
        },
        QV: function(a, b, c, e, f, g, i, k, m) {
            a.font = fd.Fw(k, m);
            a.fillStyle = k.uK;
            g /= 2;
            i /= 2;
            a.save();
            a.translate(b, c);
            a.rotate(-e / 180 * Math.PI);
            0 < k.Tw && (a.lineWidth = k.Tw,
            a.strokeStyle = k.kL,
            a.strokeText(f, -g, -i));
            a.fillText(f, -g, -i);
            a.restore()
        },
        eK: function(a, b, c, e, f, g) {
            a.font = fd.Fw(f, g);
            a.fillStyle = f.uK;
            0 < f.Tw && (a.lineWidth = f.Tw,
            a.strokeStyle = f.kL,
            a.strokeText(e, b, c));
            a.fillText(e, b, c)
        },
        Fw: function(a, b) {
            var c = a.fontSize / 2
              , e = 10 * a.fontWeight;
            return e = b.HD ? e + " bold" + (" " + c + "px") + ' arial, "PingFang SC", sans-serif' : e + (" " + c + "px") + " arial, sans-serif"
        },
        nZ: function(a, b) {
            var c = []
              , e = 0;
            5 === b && (e = 1);
            a.sort(function(a, b) {
                return a.x * a.y < b.x * b.y ? -1 : 1
            });
            for (var f = 0, g = a.length; f < g; f++)
                for (var i = a[f], k = 0, m = i.length; k < m; k++) {
                    var n = i[k]
                      , o = l
                      , s = l
                      , v = l
                      , w = l;
                    if ("fixed" === n.type) {
                        var y = n.Bs
                          , A = n.tf;
                        y && (o = y.$d,
                        s = y.ae,
                        v = y.$d + y.width,
                        w = y.ae + y.height);
                        for (y = 0; y < A.length; y++) {
                            var B = A[y];
                            o !== l ? (B.$d < o && (o = B.$d),
                            B.ae < s && (s = B.ae),
                            B.$d + B.width > v && (v = B.$d + B.width),
                            B.ae + B.height > w && (w = B.ae + B.height)) : (o = B.$d,
                            s = B.ae,
                            v = B.$d + B.width,
                            w = B.ae + B.height)
                        }
                    } else
                        "line" === n.type ? (o = n.Sf,
                        s = n.Tf,
                        v = n.fi,
                        w = n.gi) : "biaopai" === n.type && (w = n.H4,
                        o = w.$d,
                        s = w.ae,
                        v = w.$d + w.width,
                        w = w.ae + w.height);
                    o !== l && (n.Sf = o,
                    n.Tf = s,
                    n.fi = v,
                    n.gi = w,
                    c.push(n))
                }
            c.sort(function(a, b) {
                return b.Kx - a.Kx || b.Sf - a.Sf || b.Tf - a.Tf
            });
            f = 0;
            for (g = c.length; f < g; f++) {
                m = c[f];
                m.Gs = t;
                m.mJ = [];
                for (k = f + 1; k < g; k++)
                    i = c[k],
                    m.fi - e < i.Sf || (m.Sf > i.fi - e || m.gi - e < i.Tf || m.Tf > i.gi - e) || m.mJ.push(k)
            }
            f = 0;
            for (g = c.length; f < g; f++)
                if (k = c[f],
                k.Gs === t) {
                    e = k.mJ;
                    k = 0;
                    for (m = e.length; k < m; k++)
                        c[e[k]].Gs = p
                }
            return c
        },
        ax: {}
    };
    var gd = ["round", "butt", "square"]
      , hd = ["miter", "round", "bevel"]
      , id = {
        daojiao: [{
            stroke: "#FF6600",
            Ab: 1,
            yb: "round",
            zb: "round",
            rd: [4, 3]
        }],
        daojiao_bai: [{
            stroke: "#f5f3f0",
            Ab: 1,
            yb: "round",
            zb: "round",
            rd: [4, 3]
        }],
        junhuoxian: [{
            stroke: "#DB7093",
            Ab: 1,
            yb: "round",
            zb: "round",
            rd: [4, 3]
        }],
        lundu: [{
            stroke: "#5c91c5",
            Ab: 1,
            yb: "round",
            zb: "round",
            rd: [10, 11]
        }],
        shengjie: [{
            stroke: "#737373",
            Ab: 1,
            yb: "round",
            zb: "round",
            rd: [6, 3]
        }],
        weidingguojie: [{
            stroke: "#aea08a",
            Ab: 1,
            yb: "round",
            zb: "round",
            rd: [4, 3]
        }],
        weidingguojie_guowai: [{
            stroke: "#a29e96",
            Ab: 2,
            yb: "round",
            zb: "round",
            rd: [4, 3]
        }],
        weidingguojie_guonei: [{
            stroke: "#b5a37c",
            Ab: 2,
            yb: "round",
            zb: "round",
            rd: [4, 3]
        }]
    }
      , jd = {};
    function kd(a, b, c) {
        if (/^tielu|^MapRes\/tielu/.test(a)) {
            if ("off" === window[c + "zoomFrontStyle"][b].bmapRailwayVisibility)
                return [];
            var e = "#ffffff"
              , f = "#949494";
            window[c + "zoomFrontStyle"] && (window[c + "zoomFrontStyle"][b] && window[c + "zoomFrontStyle"][b].bmapRailwayStrokeColor) && (e = window[c + "zoomFrontStyle"][b].bmapRailwayStrokeColor);
            window[c + "zoomFrontStyle"] && (window[c + "zoomFrontStyle"][b] && window[c + "zoomFrontStyle"][b].bmapRailwayFillColor) && (f = window[c + "zoomFrontStyle"][b].bmapRailwayFillColor);
            if (4 <= b && 9 >= b || 10 <= b && 16 >= b)
                return [{
                    stroke: e,
                    Ab: 1.5,
                    yb: "butt",
                    zb: "round",
                    rd: [10, 11]
                }, {
                    stroke: f,
                    Ab: 2,
                    yb: "round",
                    zb: "round"
                }];
            if (17 <= b && 18 >= b)
                return [{
                    stroke: e,
                    Ab: 2.5,
                    yb: "butt",
                    zb: "round",
                    rd: [15, 16]
                }, {
                    stroke: f,
                    Ab: 5,
                    yb: "round",
                    zb: "round"
                }];
            if (19 <= b && 20 >= b)
                return [{
                    stroke: e,
                    Ab: 4.5,
                    yb: "butt",
                    zb: "round",
                    rd: [25, 26]
                }, {
                    stroke: f,
                    Ab: 5,
                    yb: "round",
                    zb: "round"
                }]
        } else if (0 === a.indexOf("ditie_zj") || 0 === a.indexOf("MapRes/ditie_zj")) {
            if (12 <= b && 16 >= b)
                return [{
                    stroke: "#868686",
                    Ab: 1,
                    yb: "round",
                    zb: "round",
                    rd: [7, 4]
                }];
            if (17 <= b && 18 >= b || 19 <= b && 20 >= b)
                return [{
                    stroke: "#6e6e6e",
                    Ab: 1,
                    yb: "round",
                    zb: "round",
                    rd: [7, 4]
                }]
        } else if (/^tongdaomian|^MapRes\/tongdaomian/.test(a)) {
            if (17 === b)
                return [{
                    stroke: "#e5e5e5",
                    Ab: 4,
                    yb: "square",
                    zb: "round"
                }, {
                    stroke: "#a8a8a8",
                    Ab: 6,
                    yb: "square",
                    zb: "round"
                }];
            if (18 === b)
                return [{
                    stroke: "#e5e5e5",
                    Ab: 6,
                    yb: "square",
                    zb: "round"
                }, {
                    stroke: "#a8a8a8",
                    Ab: 8,
                    yb: "square",
                    zb: "round"
                }];
            if (19 <= b && 21 >= b)
                return [{
                    stroke: "#e5e5e5",
                    Ab: 8,
                    yb: "square",
                    zb: "round"
                }, {
                    stroke: "#a8a8a8",
                    Ab: 10,
                    yb: "square",
                    zb: "round"
                }]
        } else if (/^jietizhongduan|^dixiatongdaojieti|^MapRes\/jietizhongduan|^MapRes\/dixiatongdaojieti/.test(a)) {
            if (17 === b)
                return [{
                    stroke: "#e5e5e5",
                    Ab: 4,
                    yb: "butt",
                    zb: "round",
                    rd: [2, 1]
                }, {
                    stroke: "#bebebe",
                    Ab: 6,
                    yb: "butt",
                    zb: "round"
                }];
            if (18 === b)
                return [{
                    stroke: "#e5e5e5",
                    Ab: 6,
                    yb: "butt",
                    zb: "round",
                    rd: [3, 1]
                }, {
                    stroke: "#bebebe",
                    Ab: 8,
                    yb: "butt",
                    zb: "round"
                }];
            if (19 <= b && 21 >= b)
                return [{
                    stroke: "#e5e5e5",
                    Ab: 8,
                    yb: "butt",
                    zb: "round",
                    rd: [4, 2]
                }, {
                    stroke: "#bebebe",
                    Ab: 10,
                    yb: "butt",
                    zb: "round"
                }]
        } else if (/^guojietianqiao|^MapRes\/guojietianqiao/.test(a))
            return 18 === b ? [{
                stroke: "#ffffff",
                Ab: 6,
                yb: "butt",
                zb: "round",
                rd: [4, 2]
            }, {
                stroke: "#bebebe",
                Ab: 8,
                yb: "butt",
                zb: "round"
            }] : [{
                stroke: "#ffffff",
                Ab: 8,
                yb: "butt",
                zb: "round",
                rd: [4, 2]
            }, {
                stroke: "#bebebe",
                Ab: 10,
                yb: "butt",
                zb: "round"
            }];
        return id[a] || id[a.replace("MapRes/", "")]
    }
    var ld = {
        drawLink: function(a, b, c, e, f) {
            this.da = f.M.da;
            var g = a[1];
            g && (a = a[6],
            this.bO(g, c, e, b, a, f, p),
            this.bO(g, c, e, b, a, f, t))
        },
        bO: function(a, b, c, e, f, g, i) {
            for (var k = 0; k < a.length; k++) {
                var m = a[k][0]
                  , n = g.gj(m, "line", b);
                if (n && n.length && (!i || n[0].borderWidth))
                    if (!n[0].yo || kd(n[0].yo, b, this.da))
                        for (var o = a[k][1], s = 0; s < o.length; s++) {
                            var v = o[s][3];
                            g.Nc(v[0], b) && (v["cache" + b] || (v["cache" + b] = g.vm(v[1], b, c, f)),
                            v = v["cache" + b],
                            g.M.Xn(e.canvas.id, v, {
                                type: "polyline",
                                Ub: m,
                                style: n
                            }),
                            this.RV(e, v, n, i, b))
                        }
            }
        },
        drawSingleTexture: function(a, b, c, e, f) {
            var g = a[1];
            if (g)
                for (var a = a[6], i = 0; i < g.length; i++) {
                    var k = f.gj(g[i][0], "line", c);
                    if (k && k.length)
                        for (var m = g[i][1], n = 0; n < m.length; n++) {
                            var o = m[n][11];
                            if (f.Nc(o[0], c)) {
                                var s;
                                o["cache" + c] || (o["cache" + c] = f.vm(o[1], c, e, a));
                                s = o["cache" + c];
                                o = o[3];
                                o *= Math.pow(2, c - f.v0[c].Lc);
                                this.SV(b, s, k, o, f)
                            }
                        }
                }
        },
        SV: function(a, b, c, e, f) {
            var g = c[0].yo
              , i = this;
            if (jd[g])
                i.Vr(b, e, a, jd[g]);
            else {
                var c = f.KK(g)
                  , k = new Image;
                k.onload = function() {
                    jd[g] = k;
                    i.Vr(b, e, a, k);
                    k.onload = q
                }
                ;
                k.src = c
            }
        },
        Vr: function(a, b, c, e) {
            var f = [a[0], a[1]]
              , g = [a[2], a[3]]
              , a = g[0] - f[0]
              , g = g[1] - f[1]
              , f = [f[0] + a / 2, f[1] + g / 2]
              , i = Math.sqrt(a * a + g * g)
              , b = b / 10
              , a = Math.atan2(g, a);
            c.save();
            c.translate(f[0], f[1]);
            c.rotate(Math.PI / 2 + a);
            c.drawImage(e, -b / 2, -i / 2, b, i);
            c.restore()
        },
        RV: function(a, b, c, e, f) {
            c = c[0];
            if (!e && c.yo && kd(c.yo, f, this.da))
                this.YV(a, b, c, kd(c.yo, f, this.da));
            else {
                a.beginPath();
                a.moveTo(b[0], b[1]);
                for (var f = 2, g = b.length; f < g; f += 2)
                    a.lineTo(b[f], b[f + 1]);
                c.borderWidth && e ? (a.strokeStyle = c.ho,
                a.lineCap = gd[c.xU],
                a.lineJoin = hd[1],
                a.lineWidth = c.borderWidth / 2,
                a.stroke()) : e || (a.strokeStyle = c.Aw,
                a.lineCap = gd[c.lW],
                a.lineJoin = hd[1],
                a.lineWidth = c.qK / 2,
                a.stroke())
            }
        },
        YV: function(a, b, c, e) {
            if (c = e[1]) {
                a.strokeStyle = c.stroke;
                a.lineCap = c.yb;
                a.lineJoin = c.zb;
                a.lineWidth = c.Ab;
                a.beginPath();
                a.moveTo(b[0], b[1]);
                for (var c = 2, f = b.length; c < f; c += 2)
                    a.lineTo(b[c], b[c + 1]);
                a.stroke()
            }
            if (e = e[0])
                if (e.rd)
                    this.PV(a, b, e);
                else {
                    a.strokeStyle = e.stroke;
                    a.lineCap = e.yb;
                    a.lineJoin = e.zb;
                    a.lineWidth = e.Ab;
                    a.beginPath();
                    a.moveTo(b[0], b[1]);
                    c = 2;
                    for (f = b.length; c < f; c += 2)
                        a.lineTo(b[c], b[c + 1]);
                    a.stroke()
                }
        },
        PV: function(a, b, c) {
            a.strokeStyle = c.stroke;
            a.lineCap = c.yb;
            a.lineJoin = c.zb;
            a.lineWidth = c.Ab;
            var e = p
              , c = c.rd[0];
            a.beginPath();
            for (var f = 0; f < b.length - 2; f += 2) {
                var g = b[f]
                  , i = b[f + 1]
                  , k = b[f + 2] - g
                  , m = b[f + 3] - i
                  , n = 0 !== k ? m / k : 0 < m ? 1E15 : -1E15
                  , m = Math.sqrt(k * k + m * m)
                  , o = c;
                for (a.moveTo(g, i); 0.1 <= m; ) {
                    o > m && (o = m);
                    var s = Math.sqrt(o * o / (1 + n * n));
                    0 > k && (s = -s);
                    g += s;
                    i += n * s;
                    a[e ? "lineTo" : "moveTo"](g, i);
                    m -= o;
                    e = !e
                }
            }
            a.stroke()
        }
    };
    var md = 3, nd = 4, od = 7, pd = 8, qd = 15, rd = 16, sd = {}, td = {}, ud = {}, vd, wd = {
        3: {
            start: 3,
            Lc: 3
        },
        4: {
            start: 4,
            Lc: 5
        },
        5: {
            start: 4,
            Lc: 5
        },
        6: {
            start: 6,
            Lc: 7
        },
        7: {
            start: 6,
            Lc: 7
        },
        8: {
            start: 8,
            Lc: 9
        },
        9: {
            start: 8,
            Lc: 9
        },
        10: {
            start: 10,
            Lc: 10
        },
        11: {
            start: 11,
            Lc: 12
        },
        12: {
            start: 11,
            Lc: 12
        },
        13: {
            start: 11,
            Lc: 12
        },
        14: {
            start: 14,
            Lc: 15
        },
        15: {
            start: 14,
            Lc: 15
        },
        16: {
            start: 16,
            Lc: 17
        },
        17: {
            start: 16,
            Lc: 17
        },
        18: {
            start: 18,
            Lc: 19
        },
        19: {
            start: 18,
            Lc: 19
        },
        20: {
            start: 18,
            Lc: 19
        },
        21: {
            start: 18,
            Lc: 19
        }
    };
    function xd(a) {
        this.M = a;
        this.Fc = a.R.devicePixelRatio;
        this.v0 = wd
    }
    xd.prototype = {
        hC: function(a, b, c, e, f, g, i, k, m) {
            this.M.IN = {};
            var n = this
              , o = n.M.da;
            m || (m = 0);
            if (!window[o + "StyleBody"] && 100 > m)
                setTimeout(function() {
                    n.hC(a, b, c, e, f, g, i, k, m + 1)
                }, 100);
            else {
                vd || (vd = k);
                var s = b.getContext("2d")
                  , v = b.parentNode;
                v.removeChild(b);
                s.clearRect(0, 0, g, g);
                v.appendChild(b);
                v = this.Fc;
                1 < v && !b._scale && (s.scale(v, v),
                b._scale = p);
                s.fillStyle = this.KM("#F5F3F0");
                window[o + "zoomFrontStyle"][f].bmapLandColor && (s.fillStyle = this.KM(window[o + "zoomFrontStyle"][f].bmapLandColor));
                o = b.style.width;
                b.style.width = "0px";
                b.style.width = o;
                s.fillRect(0, 0, g, g);
                if (a[0])
                    for (o = 0; o < a[0].length; o++)
                        v = a[0][o],
                        v[0] === od && cd.drawPoly(v, s, f, g, this);
                17 <= this.M.ja() ? (n.dK(a, s, f, g, i, c, e),
                b.ln = p) : setTimeout(function() {
                    if (!b.HG) {
                        n.dK(a, s, f, g, i, c, e);
                        b.ln = p
                    }
                }, 1)
            }
        },
        dK: function(a, b, c, e) {
            var f = this.M.da;
            if (a[0])
                for (var g = 0; g < a[0].length; g++) {
                    var i = a[0][g]
                      , k = i[0];
                    k === nd ? ld.drawLink(i, b, c, e, this) : k === rd ? ld.drawLink(i, b, c, e, this) : k === qd ? (cd.drawGaoqingRoadBorder(i, b, c, e, this),
                    cd.drawGaoqingRoadFill(i, b, c, e, this)) : 18 === k ? window[f + "zoomFrontStyle"] && (window[f + "zoomFrontStyle"][c] && "off" !== window[f + "zoomFrontStyle"][c].bmapRoadarrowVisibility) && dd.drawArrow(i, b, c, e, Math.pow(2, c - wd[c].Lc), this) : k === pd ? ed.drawHregion(i, b, c, e, this) : 19 === k && ld.drawSingleTexture(i, b, c, e, this)
                }
        },
        cK: function(a, b, c, e, f, g, i) {
            var k = this
              , m = k.M.da;
            i || (i = 0);
            !window[m + "StyleBody"] && 100 > i ? setTimeout(function() {
                k.cK(a, b, c, e, f, g, i + 1)
            }, 100) : (vd || (vd = b),
            a.hZ = fd.parse(a, c, e, this, f))
        },
        gj: function(a, b, c, e) {
            var f = a + "-" + b + "-" + c;
            if (e)
                return sd[f] || (sd[f] = this.sg(a, b, c, e)),
                sd[f];
            this.M.IN[f] = this.sg(a, b, c);
            return this.M.IN[f]
        },
        sg: function(a, b, c, e) {
            var f = this.M.da, g;
            g = e || window[f + "_bmap_baseFs"];
            f = window[f + "StyleBody"];
            e = g[2];
            if ("arrow" === b)
                return this.XY(e[2]);
            switch (b) {
            case "point":
                e = e[0];
                f = f[0] || {};
                break;
            case "pointText":
                e = e[1];
                f = f[1] || {};
                break;
            case "line":
                e = e[3];
                f = f[3] || {};
                break;
            case "polygon":
                e = e[4];
                f = f[4] || {};
                break;
            case "polygon3d":
                e = e[5],
                f = f[5] || {}
            }
            var i = []
              , c = g[1][c - 1][0][a];
            if (!c)
                return i;
            for (g = 0; g < c.length; g++) {
                var k = f[c[g]] || e[c[g]];
                if (k) {
                    switch (b) {
                    case "polygon":
                        k = this.fZ(k, a);
                        break;
                    case "line":
                        k = this.bZ(k, a);
                        break;
                    case "pointText":
                        k = this.dZ(k, a);
                        break;
                    case "point":
                        k = this.cZ(k, a);
                        break;
                    case "polygon3d":
                        k = this.eZ(k, a)
                    }
                    k.o5 = c[g];
                    i[i.length] = k
                }
            }
            return i
        },
        dZ: function(a, b) {
            return {
                Ub: b,
                uK: this.zg(a[0]),
                kL: this.zg(a[1]),
                N1: this.zg(a[2]),
                fontSize: a[3],
                Tw: a[4],
                fontWeight: a[5],
                fontStyle: a[6],
                yV: a[7]
            }
        },
        cZ: function(a, b) {
            return {
                Ub: b,
                Kx: a[0],
                F5: a[1],
                ue: a[2],
                LX: a[3],
                p4: a[4],
                yV: a[5],
                zoom: a[6]
            }
        },
        bZ: function(a, b) {
            return {
                Ub: b,
                ho: this.zg(a[0]),
                Aw: this.zg(a[1]),
                borderWidth: a[2],
                qK: a[3],
                xU: a[4],
                lW: a[5],
                y3: a[6],
                z3: a[7],
                A3: a[8],
                S3: a[9],
                T3: a[10],
                yU: a[11],
                yo: a[12],
                zU: a[13],
                y2: a[14],
                Q3: a[15],
                w3: a[16],
                o4: a[17],
                T4: a[18]
            }
        },
        fZ: function(a, b) {
            return {
                Ub: b,
                Aw: this.zg(a[0]),
                ho: this.zg(a[1]),
                borderWidth: a[2],
                yU: a[3],
                zU: a[4],
                N5: a[5],
                v3: a[6],
                s5: a[7],
                t5: this.zg(a[8])
            }
        },
        eZ: function(a, b) {
            return {
                Ub: b,
                filter: a[0],
                WM: a[1],
                x3: a[2],
                borderWidth: a[3],
                ho: this.zg(a[4]),
                mW: this.zg(a[5]),
                x2: this.zg(a[6]),
                F4: a[7]
            }
        },
        XY: function(a) {
            for (var b in a)
                return a = a[b],
                {
                    color: this.zg(a[0]),
                    LX: a[1],
                    ue: a[2]
                }
        },
        zg: function(a) {
            var b = a;
            if (ud[b])
                return ud[b];
            a >>>= 0;
            ud[b] = "rgba(" + (a & 255) + "," + (a >> 8 & 255) + "," + (a >> 16 & 255) + "," + (a >> 24 & 255) / 255 + ")";
            return ud[b]
        },
        KM: function(a) {
            a = a.replace("#", "");
            6 === a.length && (a += "ff");
            for (var b = "rgba(", c = 0; 8 > c; c += 2)
                b = 6 > c ? b + (parseInt(a.slice(c, c + 2), 16) + ",") : b + (parseInt(a.slice(c, c + 2), 16) / 255 + ")");
            return b
        },
        Nc: function(a, b) {
            var c;
            td[a] || (c = a.toString(2),
            8 > c.length && (c = Array(8 - c.length + 1).join("0") + c),
            td[a] = c);
            c = td[a];
            return "1" === c[b - wd[b].start]
        },
        vm: function(a, b, c) {
            var e = []
              , b = Math.pow(2, b - wd[b].Lc) / 100
              , f = a[0] * b
              , g = a[1] * b;
            e[e.length] = f;
            e[e.length] = c - g;
            for (var i = 2; i < a.length; i += 2)
                f += a[i] * b,
                g += a[i + 1] * b,
                e[e.length] = f,
                e[e.length] = c - g;
            return e
        },
        KK: function(a) {
            var b = a.length % vd.length
              , c = this.QW();
            return vd[b] + a + ".png?v=" + c.mF + "&udt=" + c.iF
        },
        QW: function() {
            if (this.wD)
                return this.wD;
            var a = "undefined" !== typeof MSV ? MSV.h4 : {};
            return this.wD = {
                mF: a.version ? a.version : "001",
                iF: a.Y_ ? a.Y_ : "20150621"
            }
        }
    };
    Q = z.lang.$t;
    md = 3;
    nd = 4;
    od = 7;
    pd = 8;
    qd = 15;
    rd = 16;
    function Kc(a, b, c) {
        c = c || {};
        this.M = a;
        this.Dv = b;
        this.Fc = b.WM;
        this.$a = {
            G_: "na",
            zIndex: 0,
            ON: c.tileUrls || {
                http: ["http://online0.map.bdimg.com/pvd/?qt=vtile", "http://online1.map.bdimg.com/pvd/?qt=vtile", "http://online2.map.bdimg.com/pvd/?qt=vtile", "http://online3.map.bdimg.com/pvd/?qt=vtile", "http://online4.map.bdimg.com/pvd/?qt=vtile"],
                https: ["https://ss0.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile", "https://ss1.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile", "https://ss2.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile", "https://ss3.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile", "https://ss0.bdstatic.com/8bo_dTSlQ1gBo1vgoIiO_jowehsv/pvd/?qt=vtile"]
            },
            vD: c.iconUrls || ["https://ss0.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/sty/map_icons2x/", "https://ss1.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/sty/map_icons2x/"],
            OE: p
        };
        this.aB = "";
        this.hS = {};
        var c = c.urlOpts || {
            styles: "pl",
            extdata: 1,
            textimg: 0,
            mesh3d: 0,
            limit: 30
        }, e;
        for (e in c)
            c.hasOwnProperty(e) && (this.aB = this.aB + "&" + e + "=" + c[e]);
        this.Yg = {};
        this.Gr = [];
        this.Ms = 0;
        this.gx = t;
        this.ax = {};
        a = this.$a.G_;
        Xc[a] ? a = Xc[a] : (b = new Yc(a,l),
        a = Xc[a] = b);
        this.Bd = a;
        this.M.Bd = this.Bd
    }
    window.VectorIndoorTileLayer = "VectorIndoorTileLayer";
    fa = Kc.prototype;
    fa.xa = function() {
        var a = this.M
          , b = a.Ye;
        if (!this.Tn) {
            var c = b.bq(this.$a.zIndex);
            c.style.WebkitTransform = "translate3d(0px, 0px, 0)";
            this.Tn = c
        }
        b.eg.appendChild(this.Tn);
        b.L3 = c;
        if (this.$a.OE) {
            yd(this);
            var e = this;
            a.addEventListener("checkvectorclick", function(a) {
                var b;
                a: {
                    b = a.offsetX;
                    var c = a.offsetY
                      , k = e.Gr.hZ;
                    if (k)
                        for (var m = 0; m < k.length; m++)
                            for (var n = k[m], o = 0; o < n.length; o++)
                                if (a = n[o],
                                !a.Gs && a.Bs && b > a.Sf && b < a.fi && c > a.Tf && c < a.gi) {
                                    b = a.Bs;
                                    b = {
                                        type: 9,
                                        name: a.name,
                                        uid: a.uid,
                                        point: {
                                            x: b.$d + b.width / 2,
                                            y: b.ae + 6
                                        }
                                    };
                                    break a
                                }
                    b = q
                }
                b && (a = new Q("onvectorclick"),
                a.H3 = b,
                a.kf = "base",
                this.dispatchEvent(a))
            })
        }
    }
    ;
    function yd(a) {
        var b = a.M
          , c = b.Ye
          , e = a.Fc
          , f = b.Cb()
          , g = f.width
          , f = f.height
          , i = O("canvas");
        i.style.cssText = "position: absolute;left:0;top:0;width:" + g + "px;height:" + f + "px;z-index:2;";
        i.width = g * e;
        i.height = f * e;
        a.kx = i;
        a.Ro = i.getContext("2d");
        a.Ro.scale(e, e);
        a.Ro.textBaseline = "top";
        c.eg.appendChild(i);
        b.SR = i
    }
    fa.uX = x("Bd");
    fa.update = function(a, b) {
        b = b || {};
        this.jF = b.jF;
        b.Zl && (this.Z_ = b.Zl);
        if (this.$a.OE && (b.Ql && this.Ql(),
        b.o_)) {
            var c = this.Fc
              , e = this.M.Cb()
              , f = e.width
              , e = e.height
              , g = this.kx
              , i = g.style;
            i.width = f + "px";
            i.height = e + "px";
            g.width = f * c;
            g.height = e * c;
            this.Ro.scale(c, c);
            this.Ro.textBaseline = "top"
        }
        if (b.I5) {
            c = this.Tn;
            f = 0;
            for (e = c.childNodes.length; f < e; f++)
                c.childNodes[f].ln = t
        }
        this.qw = a;
        this.Uo(a)
    }
    ;
    fa.Uo = function(a) {
        this.Gr = [];
        var b = this.M
          , c = b.ja()
          , e = b.Ic.ci(b.oe)
          , f = this.Bd.Yb(c)
          , e = [Math.round(-e.lng / f), Math.round(e.lat / f)]
          , f = this.Bd.Hd(c)
          , g = b.da.replace(/^TANGRAM_/, "")
          , i = this.Bd.hs(c)
          , b = this.M
          , k = -b.offsetY + b.height / 2
          , m = this.Tn;
        m.style.left = -b.offsetX + b.width / 2 + "px";
        m.style.top = k + "px";
        this.Ne ? this.Ne.length = 0 : this.Ne = [];
        b = 0;
        for (k = m.childNodes.length; b < k; b++) {
            var n = m.childNodes[b];
            n.Aq = t;
            this.Ne.push(n)
        }
        if (b = this.tm)
            for (var o in b)
                delete b[o];
        else
            this.tm = {};
        this.Oe ? this.Oe.length = 0 : this.Oe = [];
        b = 0;
        for (k = a.length; b < k; b++) {
            var n = a[b][0]
              , s = a[b][1];
            o = 0;
            for (var v = this.Ne.length; o < v; o++) {
                var w = this.Ne[o];
                if (w.id === g + "_" + n + "_" + s + "_" + i + "_" + c) {
                    w.Aq = p;
                    this.tm[w.id] = w;
                    break
                }
            }
        }
        b = 0;
        for (k = this.Ne.length; b < k; b++)
            w = this.Ne[b],
            w.Aq || (w.eB = q,
            delete w.eB,
            w.ln = t,
            this.Oe.push(w));
        o = [];
        v = f * this.Fc;
        b = 0;
        for (k = a.length; b < k; b++) {
            var n = a[b][0]
              , s = a[b][1]
              , w = n * f + e[0]
              , y = (-1 - s) * f + e[1]
              , A = g + "_" + n + "_" + s + "_" + i + "_" + c
              , B = this.tm[A]
              , C = q;
            if (B)
                C = B.style,
                C.left = w + "px",
                C.top = y + "px",
                C.width = f + "px",
                C.height = f + "px",
                B.ln ? B.$E && B.$E && this.Gr.push(B.$E) : (B.HG = p,
                B.eB = q,
                delete B.eB,
                o.push([n, s, B]));
            else {
                if (0 < this.Oe.length) {
                    var B = this.Oe.shift()
                      , F = B.getContext("2d");
                    B.getAttribute("width") !== v && (B._scale = t);
                    B.setAttribute("width", v);
                    B.setAttribute("height", v);
                    C = B.style;
                    C.width = f + "px";
                    C.height = f + "px";
                    F.clearRect(0, 0, v, v)
                } else
                    B = document.createElement("canvas"),
                    C = B.style,
                    C.position = "absolute",
                    this.$a.backgroundColor && (C.background = this.$a.backgroundColor),
                    C.width = f + "px",
                    C.height = f + "px",
                    B.setAttribute("width", v),
                    B.setAttribute("height", v),
                    m.appendChild(B);
                B.id = A;
                C.left = w + "px";
                C.top = y + "px";
                o.push([n, s, B])
            }
            B.style.visibility = ""
        }
        b = 0;
        for (k = this.Oe.length; b < k; b++)
            this.Oe[b].style.visibility = "hidden";
        if (0 === o.length) {
            zd(this);
            a = this.M.da.replace(/^TANGRAM_/, "");
            c = this.M.ja();
            e = this.Bd.hs(c);
            f = {};
            for (g = 0; g < this.qw.length; g++)
                i = this.qw[g],
                i = a + "_" + i[0] + "_" + i[1] + "_" + e + "_" + c,
                this.Yg[i] && (f[i] = this.Yg[i],
                this.jF && this.Dv.iC.hC(this.Yg[i].m0, this.Yg[i].E_, this.Yg[i].Sl, this.Yg[i].Bm, this.Yg[i].XD, this.Bd.Hd(this.Yg[i].XD), this.Bd.eD(this.Yg[i].XD), this.$a.vD));
            this.Yg = f
        } else {
            this.Ms = o.length;
            this.gx = t;
            c = this.Bd.hs(this.M.ja());
            for (e = 0; e < a.length; e++)
                a[e][3] = c;
            for (e = 0; e < o.length; e++)
                a = o[e][2],
                f = o[e][0],
                g = o[e][1],
                o[e][3] = c,
                a.ln = t,
                a.HG = t,
                Ad(this, f, g, c, a)
        }
    }
    ;
    function Ad(a, b, c, e, f) {
        var g = b + "_" + c + "_" + e
          , i = a.hS;
        if (i[g]) {
            if ("loading" === i[g].status)
                return
        } else
            i[g] = {
                status: "init",
                dN: 0
            };
        var k = a
          , m = k.M
          , n = []
          , n = "0" === D.Pt ? k.$a.ON.http : k.$a.ON.https
          , o = Math.abs(b + c) % n.length
          , s = "x=" + b + "&y=" + c + "&z=" + e
          , v = Bd(a.Dv)
          , w = v.mF
          , v = v.iF
          , y = "_" + (0 > b ? "_" : "") + (0 > c ? "$" : "") + parseInt(Math.abs(b) + "" + Math.abs(c) + "" + e, 10).toString(36)
          , s = s + a.aB + "v=" + w + "&udt=" + v + "&fn=window." + y
          , w = n[o] + "&" + s
          , w = n[o] + "&param=" + window.encodeURIComponent(Kb(s));
        window[y] = function(a) {
            clearTimeout(i[g].Lk);
            i[g] = q;
            if (a) {
                var n = m.ja(), o;
                a: {
                    for (o = 0; o < k.qw.length; o++) {
                        var s = k.qw[o];
                        if (s[0] === b && s[1] === c && s[3] === e) {
                            o = p;
                            break a
                        }
                    }
                    o = t
                }
                if (o !== t) {
                    o = new Q("updateindoor");
                    o.IndoorCanvas = [];
                    o.IndoorCanvas.push({
                        canvasDom: f,
                        data: a,
                        canvasID: f.id,
                        ratio: k.Fc
                    });
                    m.dispatchEvent(o);
                    if (m.R.gk) {
                        if (k.Yg[f.id] = {
                            m0: a,
                            E_: f,
                            Sl: b,
                            Bm: c,
                            XD: n
                        },
                        k.Dv.iC.hC(a, f, b, c, n, k.Bd.Hd(n), k.Bd.eD(n), k.$a.vD),
                        k.$a.OE) {
                            n = [];
                            n.F_ = [b, c, e];
                            if (a[0])
                                for (o = 0; o < a[0].length; o++)
                                    a[0][o][0] === md && n.push({
                                        ML: a[0][o]
                                    });
                            if (a[2])
                                for (o = 0; o < a[2].length; o++)
                                    n.push({
                                        rY: a[2][o]
                                    });
                            f.$E = n;
                            k.Gr.push(n);
                            k.gx === t && k.Ms--;
                            (0 === k.Ms || k.gx === p) && zd(k)
                        }
                    } else
                        k.Ms--,
                        (0 === k.Ms || k.gx === p) && zd(k);
                    delete window[y]
                }
            }
        }
        ;
        pa(w);
        i[g].status = "loading";
        k = a;
        i[g].Lk = setTimeout(function() {
            3 > i[g].dN ? (i[g].dN++,
            i[g].status = "init",
            Ad(k, b, c, e, f)) : i[g] = q
        }, 4E3)
    }
    function zd(a) {
        if (a.kx) {
            var b = a.M;
            a.kx.style.left = -b.offsetX + "px";
            a.kx.style.top = -b.offsetY + "px";
            var c = new Q("updateindoorlabel");
            c.labelCanvasDom = b.SR;
            b.dispatchEvent(c);
            if (b.R.gk) {
                a.Ql();
                var c = a.Bd
                  , e = b.ja()
                  , f = c.hs(b.ja());
                a.Dv.iC.cK(a.Gr, a.$a.vD, a.Ro, c.Hd(e), Math.pow(2, e - f), e);
                "moving" !== a.Z_ && b.dispatchEvent(new Q("ontilesloaded"))
            }
        }
    }
    fa.Ql = function() {
        var a = this.M.Cb()
          , b = this.Fc;
        this.Ro.clearRect(0, 0, a.width * b, a.height * b)
    }
    ;
    fa.remove = function() {
        var a = this.M.Ye;
        this.Tn && a.eg.removeChild(this.Tn)
    }
    ;
    function Jc(a) {
        this.M = a.map;
        this.bf = [];
        this.nr = {};
        this.WM = this.M.R.devicePixelRatio;
        this.iC = new xd(this.M);
        this.xa()
    }
    window.VectorIndoorTileMgr = "VectorIndoorTileMgr";
    fa = Jc.prototype;
    fa.xa = function() {
        var a = this
          , b = this.M;
        b.addEventListener("addtilelayer", function(b) {
            a.Me(b.target)
        });
        b.addEventListener("removetilelayer", function(b) {
            a.Wf(b.target)
        });
        setTimeout(function() {
            b.addEventListener("onmoveend", function(b) {
                "centerAndZoom" !== b.kz && a.update({
                    Zl: "moveend"
                })
            });
            b.addEventListener("onmoving", function() {
                a.update({
                    Zl: "moving"
                })
            });
            b.addEventListener("onzoomend", function(b) {
                "centerAndZoom" !== b.kz && a.update({
                    Ql: p,
                    Zl: "zoomend"
                })
            });
            b.addEventListener("centerandzoom", function() {
                a.update({
                    Ql: p,
                    Zl: "centerandzoom"
                })
            });
            b.addEventListener("onupdatestyles", function() {
                a.update({
                    Ql: p,
                    jF: p,
                    Zl: "updatestyles"
                });
                a.M.rf(a.M.Bb());
                setTimeout(function() {
                    a.M.dispatchEvent(new Q("onvectordrawend"))
                }, 10)
            });
            b.addEventListener("onmaptypechange", function(b) {
                b.Ta === Oa && a.update({
                    Ql: p,
                    Zl: "maptypechange"
                })
            })
        }, 1);
        b.addEventListener("indoor_data_refresh", u());
        b.addEventListener("onresize", function() {
            a.update({
                o_: p
            })
        });
        a.update()
    }
    ;
    fa.Me = function(a) {
        if (a instanceof Kc) {
            for (var b = 0; b < this.bf.length; b++)
                if (this.bf[b] === a)
                    return;
            this.bf.push(a);
            a.xa();
            this.M.loaded && this.update()
        }
    }
    ;
    fa.Wf = function(a) {
        if (a instanceof Kc) {
            for (var b = 0; b < this.bf.length; b++)
                if (this.bf[b] === a) {
                    this.bf.splice(b, 1);
                    break
                }
            a.remove()
        }
    }
    ;
    fa.aL = function(a) {
        var b = a.getName();
        if (this.nr[b])
            return this.nr[b];
        var c = this.M
          , e = c.ja()
          , f = c.Zb
          , g = a.eD(e);
        c.da.replace(/^TANGRAM_/, "");
        var i = Math.ceil(f.lng / g)
          , k = Math.ceil(f.lat / g)
          , a = a.Hd(e)
          , m = [i, k, (f.lng / g - i) * a, (f.lat / g - k) * a]
          , e = m[0] - Math.ceil((c.width / 2 - m[2]) / a)
          , f = m[1] - Math.ceil((c.height / 2 - m[3]) / a)
          , g = m[0] + Math.ceil((c.width / 2 + m[2]) / a)
          , c = m[1] + Math.ceil((c.height / 2 + m[3]) / a);
        this.Be ? this.Be.length = 0 : this.Be = [];
        for (a = e; a < g; a++)
            for (e = f; e < c; e++)
                this.Be.push([a, e]);
        this.Be.sort(function(a) {
            return function(b, c) {
                return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
            }
        }([i, k]));
        this.nr[b] = this.Be.slice(0);
        return this.nr[b]
    }
    ;
    function Bd(a) {
        if (a.nF)
            return a.nF;
        a.nF = {
            mF: "001",
            iF: Rb("normal")
        };
        return a.nF
    }
    fa.update = function(a) {
        this.nr = {};
        for (var b = 0; b < this.bf.length; b++) {
            var c = this.bf[b]
              , e = this.aL(c.Bd);
            c.update(e, a)
        }
    }
    ;
    function Cd(a, b, c) {
        this.gd = a;
        this.bf = b instanceof Lc ? [b] : b.slice(0);
        c = c || {};
        this.m = {
            J_: c.tips || "",
            SD: "",
            gc: c.minZoom || 4,
            nc: c.maxZoom || 18,
            F3: c.minZoom || 4,
            E3: c.maxZoom || 18,
            gy: 256,
            ZE: c.textColor || "black",
            CC: c.errorImageUrl || "",
            fb: new fb(new J(-21364736,-16023552),new J(23855104,19431424)),
            Ic: c.projection || new S
        };
        1 <= this.bf.length && (this.bf[0].Uv = p);
        z.extend(this.m, c)
    }
    z.extend(Cd.prototype, {
        getName: x("gd"),
        vs: function() {
            return this.m.J_
        },
        c3: function() {
            return this.m.SD
        },
        tX: function() {
            return this.bf[0]
        },
        r3: x("bf"),
        Hd: function() {
            return this.m.gy
        },
        lf: function() {
            return this.m.gc
        },
        Re: function() {
            return this.m.nc
        },
        setMaxZoom: function(a) {
            this.m.nc = a
        },
        hm: function() {
            return this.m.ZE
        },
        qk: function() {
            return this.m.Ic
        },
        V2: function() {
            return this.m.CC
        },
        Hd: function() {
            return this.m.gy
        },
        Yb: function(a) {
            return Math.pow(2, 18 - a)
        },
        fL: function(a) {
            return this.Yb(a) * this.Hd()
        }
    });
    var Dd = [D.url.proto + D.url.domain.TILE_BASE_URLS[0] + "/it/", D.url.proto + D.url.domain.TILE_BASE_URLS[1] + "/it/", D.url.proto + D.url.domain.TILE_BASE_URLS[2] + "/it/", D.url.proto + D.url.domain.TILE_BASE_URLS[3] + "/it/", D.url.proto + D.url.domain.TILE_BASE_URLS[4] + "/it/"]
      , Ed = [D.url.proto + D.url.domain.TILE_ONLINE_URLS[0] + "/tile/", D.url.proto + D.url.domain.TILE_ONLINE_URLS[1] + "/tile/", D.url.proto + D.url.domain.TILE_ONLINE_URLS[2] + "/tile/", D.url.proto + D.url.domain.TILE_ONLINE_URLS[3] + "/tile/"]
      , Fd = {
        dark: "dl",
        light: "ll",
        normal: "pl"
    }
      , Gd = new Lc;
    Gd.i_ = p;
    Gd.getTilesUrl = function(a, b, c) {
        var e = a.x
          , a = a.y
          , f = Rb("normal")
          , g = 1
          , c = Fd[c];
        // this.map.$w() && (g = 2);
        // e = this.map.Ye.Vv(e, b).Sl;
        // return (Ed[Math.abs(e + a) % Ed.length] + "?qt=vtile&x=" + (e + "").replace(/-/gi, "M") + "&y=" + (a + "").replace(/-/gi, "M") + "&z=" + b + "&styles=" + c + "&scaler=" + g + (6 == z.fa.na ? "&color_dep=32&colors=50" : "") + "&udt=" + f + "&from=jsapi3_0").replace(/-(\d+)/gi, "M$1")
      tdir = mapConfig.tiles_dir.length > 0 ? mapConfig.tiles_dir : mapConfig.home + "tiles";
      console.log(a);
      return tdir + "/" + b + "/" + e + "/" + a + mapConfig.imgext; // 使用本地的瓦片
    }
    ;
    var Oa = new Cd("\u5730\u56fe",Gd,{
        tips: "\u663e\u793a\u666e\u901a\u5730\u56fe",
        maxZoom: 19
    })
      , Hd = new Lc;
    Hd.NN = [D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[0] + "/resource/mappic/", D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[1] + "/resource/mappic/", D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[2] + "/resource/mappic/", D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[3] + "/resource/mappic/"];
    Hd.getTilesUrl = function(a, b) {
        var c = a.x
          , e = a.y
          , f = 256 * Math.pow(2, 20 - b)
          , e = Math.round((9998336 - f * e) / f) - 1;
        return url = this.NN[Math.abs(c + e) % this.NN.length] + this.map.Qb + "/" + this.map.aw + "/3/lv" + (21 - b) + "/" + c + "," + e + ".jpg"
    }
    ;
    var Ra = new Cd("\u4e09\u7ef4",Hd,{
        tips: "\u663e\u793a\u4e09\u7ef4\u5730\u56fe",
        minZoom: 15,
        maxZoom: 20,
        textColor: "white",
        projection: new hb
    });
    Ra.Yb = function(a) {
        return Math.pow(2, 20 - a)
    }
    ;
    Ra.kk = function(a) {
        if (!a)
            return "";
        var b = H.AB, c;
        for (c in b)
            if (-1 < a.search(c))
                return b[c].Fx;
        return ""
    }
    ;
    Ra.DK = function(a) {
        return {
            bj: 2,
            gz: 1,
            sz: 14,
            sh: 4
        }[a]
    }
    ;
    var Id = new Lc({
        Uv: p
    });
    Id.getTilesUrl = function(a, b) {
        var c = a.x
          , e = a.y;
        return (Dd[Math.abs(c + e) % Dd.length] + "u=x=" + c + ";y=" + e + ";z=" + b + ";v=009;type=sate&fm=46&udt=" + Rb("satellite")).replace(/-(\d+)/gi, "M$1")
    }
    ;
    var $a = new Cd("\u536b\u661f",Id,{
        tips: "\u663e\u793a\u536b\u661f\u5f71\u50cf",
        minZoom: 4,
        maxZoom: 19,
        textColor: "white"
    })
      , Jd = new Lc({
        transparentPng: p
    });
    Jd.getTilesUrl = function(a, b) {
        var c = a.x
          , e = a.y
          , f = Rb("satelliteStreet");
        return (Ed[Math.abs(c + e) % Ed.length] + "?qt=vtile&x=" + (c + "").replace(/-/gi, "M") + "&y=" + (e + "").replace(/-/gi, "M") + "&z=" + b + "&styles=sl" + (6 == z.fa.na ? "&color_dep=32&colors=50" : "") + "&udt=" + f).replace(/-(\d+)/gi, "M$1")
    }
    ;
    var Ua = new Cd("\u6df7\u5408",[Id, Jd],{
        tips: "\u663e\u793a\u5e26\u6709\u8857\u9053\u7684\u536b\u661f\u5f71\u50cf",
        labelText: "\u8def\u7f51",
        minZoom: 4,
        maxZoom: 19,
        textColor: "white"
    });
    var Kd = 1
      , X = {};
    window.z0 = X;
    function Y(a, b) {
        z.lang.Ga.call(this);
        this.yd = {};
        this.Fm(a);
        b = b || {};
        b.pa = b.renderOptions || {};
        this.m = {
            pa: {
                Na: b.pa.panel || q,
                map: b.pa.map || q,
                Wg: b.pa.autoViewport || p,
                it: b.pa.selectFirstResult,
                zs: b.pa.highlightMode,
                Vb: b.pa.enableDragging || t
            },
            Xs: b.onSearchComplete || u(),
            AM: b.onMarkersSet || u(),
            zM: b.onInfoHtmlSet || u(),
            CM: b.onResultsHtmlSet || u(),
            yM: b.onGetBusListComplete || u(),
            xM: b.onGetBusLineComplete || u(),
            vM: b.onBusListHtmlSet || u(),
            uM: b.onBusLineHtmlSet || u(),
            gE: b.onPolylinesSet || u(),
            cp: b.reqFrom || ""
        };
        this.m.pa.Wg = "undefined" != typeof b && "undefined" != typeof b.renderOptions && "undefined" != typeof b.renderOptions.autoViewport ? b.renderOptions.autoViewport : p;
        this.m.pa.Na = z.Cc(this.m.pa.Na)
    }
    z.wa(Y, z.lang.Ga);
    z.extend(Y.prototype, {
        getResults: function() {
            return this.Ec ? this.zi : this.ma
        },
        enableAutoViewport: function() {
            this.m.pa.Wg = p
        },
        disableAutoViewport: function() {
            this.m.pa.Wg = t
        },
        Fm: function(a) {
            a && (this.yd.src = a)
        },
        vt: function(a) {
            this.m.Xs = a || u()
        },
        setMarkersSetCallback: function(a) {
            this.m.AM = a || u()
        },
        setPolylinesSetCallback: function(a) {
            this.m.gE = a || u()
        },
        setInfoHtmlSetCallback: function(a) {
            this.m.zM = a || u()
        },
        setResultsHtmlSetCallback: function(a) {
            this.m.CM = a || u()
        },
        fm: x("Ke")
    });
    var Ld = {
        TF: D.md,
        ob: function(a, b, c, e, f) {
            this.qZ(b);
            var g = (1E5 * Math.random()).toFixed(0);
            D._rd["_cbk" + g] = function(b) {
                b.result && b.result.error && 202 === b.result.error ? alert("\u8be5AK\u56e0\u4e3a\u6076\u610f\u884c\u4e3a\u5df2\u7ecf\u88ab\u7ba1\u7406\u5458\u5c01\u7981\uff01") : (c = c || {},
                a && a(b, c),
                delete D._rd["_cbk" + g])
            }
            ;
            e = e || "";
            b = c && c.d0 ? Gb(b, encodeURI) : Gb(b, encodeURIComponent);
            this.TF = c && c.mK ? c.bN ? c.bN : D.Vo : D.md;
            e = this.TF + e + "?" + b + "&ie=utf-8&oue=1&fromproduct=jsapi";
            f || (e += "&res=api");
            e = e + ("&callback=BMap._rd._cbk" + g) + ("&ak=" + qa);
            pa(e)
        },
        qZ: function(a) {
            if (a.qt) {
                var b = "";
                switch (a.qt) {
                case "bt":
                    b = "z_qt|bt";
                    break;
                case "nav":
                    b = "z_qt|nav";
                    break;
                case "walk":
                    b = "z_qt|walk";
                    break;
                case "bse":
                    b = "z_qt|bse";
                    break;
                case "nse":
                    b = "z_qt|nse";
                    break;
                case "drag":
                    b = "z_qt|drag"
                }
                "" !== b && D.alog("cus.fire", "count", b)
            }
        }
    };
    window.N0 = Ld;
    D._rd = {};
    var bb = {};
    window.M0 = bb;
    bb.YM = function(a) {
        a = a.replace(/<\/?[^>]*>/g, "");
        return a = a.replace(/[ | ]* /g, " ")
    }
    ;
    bb.YY = function(a) {
        return a.replace(/([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g, "$1,$2;")
    }
    ;
    bb.ZY = function(a, b) {
        return a.replace(RegExp("(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){" + b + "}", "ig"), "$1")
    }
    ;
    var Md = 2
      , Nd = 6
      , Od = 8
      , Pd = 2
      , Qd = 3
      , Rd = 6
      , Sd = 0
      , Td = "bt"
      , Ud = "nav"
      , Vd = "walk"
      , Wd = "bl"
      , Xd = "bsl"
      , Yd = "ride"
      , Zd = 15
      , $d = 18;
    D.I = window.Instance = z.lang.Mc;
    function ae(a, b, c) {
        z.lang.Ga.call(this);
        if (a) {
            this.Ya = "object" == typeof a ? a : z.Cc(a);
            this.page = 1;
            this.Id = 100;
            this.kJ = "pg";
            this.Vf = 4;
            this.vJ = b;
            this.update = p;
            a = {
                page: 1,
                y5: 100,
                Id: 100,
                Vf: 4,
                kJ: "pg",
                update: p
            };
            c || (c = a);
            for (var e in c)
                "undefined" != typeof c[e] && (this[e] = c[e]);
            this.za()
        }
    }
    z.extend(ae.prototype, {
        za: function() {
            this.xa()
        },
        xa: function() {
            this.OU();
            this.Ya.innerHTML = this.mV()
        },
        OU: function() {
            isNaN(parseInt(this.page)) && (this.page = 1);
            isNaN(parseInt(this.Id)) && (this.Id = 1);
            1 > this.page && (this.page = 1);
            1 > this.Id && (this.Id = 1);
            this.page > this.Id && (this.page = this.Id);
            this.page = parseInt(this.page);
            this.Id = parseInt(this.Id)
        },
        i3: function() {
            location.search.match(RegExp("[?&]?" + this.kJ + "=([^&]*)[&$]?", "gi"));
            this.page = RegExp.$1
        },
        mV: function() {
            var a = []
              , b = this.page - 1
              , c = this.page + 1;
            a.push('<p style="margin:0;padding:0;white-space:nowrap">');
            if (!(1 > b)) {
                if (this.page >= this.Vf) {
                    var e;
                    a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp1}">\u9996\u9875</a></span>'.replace("{temp1}", "BMap.I('" + this.da + "').toPage(1);"))
                }
                a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp2}">\u4e0a\u4e00\u9875</a></span>'.replace("{temp2}", "BMap.I('" + this.da + "').toPage(" + b + ");"))
            }
            if (this.page < this.Vf)
                e = 0 == this.page % this.Vf ? this.page - this.Vf - 1 : this.page - this.page % this.Vf + 1,
                b = e + this.Vf - 1;
            else {
                e = Math.floor(this.Vf / 2);
                var f = this.Vf % 2 - 1
                  , b = this.Id > this.page + e ? this.page + e : this.Id;
                e = this.page - e - f
            }
            this.page > this.Id - this.Vf && this.page >= this.Vf && (e = this.Id - this.Vf + 1,
            b = this.Id);
            for (f = e; f <= b; f++)
                0 < f && (f == this.page ? a.push('<span style="margin-right:3px">' + f + "</span>") : 1 <= f && f <= this.Id && (e = '<span><a style="color:#7777cc;margin-right:3px" href="javascript:void(0)" onclick="{temp3}">[' + f + "]</a></span>",
                a.push(e.replace("{temp3}", "BMap.I('" + this.da + "').toPage(" + f + ");"))));
            c > this.Id || a.push('<span><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp4}">\u4e0b\u4e00\u9875</a></span>'.replace("{temp4}", "BMap.I('" + this.da + "').toPage(" + c + ");"));
            a.push("</p>");
            return a.join("")
        },
        toPage: function(a) {
            a = a ? a : 1;
            "function" == typeof this.vJ && (this.vJ(a),
            this.page = a);
            this.update && this.za()
        }
    });
    function db(a, b) {
        Y.call(this, a, b);
        b = b || {};
        b.renderOptions = b.renderOptions || {};
        this.lp(b.pageCapacity);
        "undefined" != typeof b.renderOptions.selectFirstResult && !b.renderOptions.selectFirstResult ? this.aC() : this.uC();
        this.Ba = [];
        this.uf = [];
        this.cb = -1;
        this.Ra = [];
        var c = this;
        K.load("local", function() {
            c.Qy()
        }, p)
    }
    z.wa(db, Y, "LocalSearch");
    db.Ep = 10;
    db.I0 = 1;
    db.Vm = 100;
    db.HF = 2E3;
    db.QF = 1E5;
    z.extend(db.prototype, {
        search: function(a, b) {
            this.Ra.push({
                method: "search",
                arguments: [a, b]
            })
        },
        Cm: function(a, b, c) {
            this.Ra.push({
                method: "searchInBounds",
                arguments: [a, b, c]
            })
        },
        ip: function(a, b, c, e) {
            this.Ra.push({
                method: "searchNearby",
                arguments: [a, b, c, e]
            })
        },
        Pe: function() {
            delete this.La;
            delete this.Ke;
            delete this.ma;
            delete this.ya;
            this.cb = -1;
            this.Xa();
            this.m.pa.Na && (this.m.pa.Na.innerHTML = "")
        },
        im: u(),
        uC: function() {
            this.m.pa.it = p
        },
        aC: function() {
            this.m.pa.it = t
        },
        lp: function(a) {
            this.m.yk = "number" == typeof a && !isNaN(a) ? 1 > a ? db.Ep : a > db.Vm ? db.Ep : a : db.Ep
        },
        mf: function() {
            return this.m.yk
        },
        toString: da("LocalSearch")
    });
    var be = db.prototype;
    V(be, {
        clearResults: be.Pe,
        setPageCapacity: be.lp,
        getPageCapacity: be.mf,
        gotoPage: be.im,
        searchNearby: be.ip,
        searchInBounds: be.Cm,
        search: be.search,
        enableFirstResultSelection: be.uC,
        disableFirstResultSelection: be.aC
    });
    function ce(a, b) {
        Y.call(this, a, b)
    }
    z.wa(ce, Y, "BaseRoute");
    z.extend(ce.prototype, {
        Pe: u()
    });
    function de(a, b) {
        Y.call(this, a, b);
        b = b || {};
        this.ut(b.policy);
        this.qN(b.intercityPolicy);
        this.AN(b.transitTypePolicy);
        this.lp(b.pageCapacity);
        this.Eb = Td;
        this.Kp = Kd;
        this.Ba = [];
        this.cb = -1;
        this.m.nn = b.enableTraffic || t;
        this.Ra = [];
        var c = this;
        K.load("route", function() {
            c.Qd()
        })
    }
    de.Vm = 100;
    de.KO = [0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1];
    de.LO = [0, 3, 4, 0, 0, 0, 5];
    z.wa(de, ce, "TransitRoute");
    z.extend(de.prototype, {
        ut: function(a) {
            this.m.ge = 0 <= a && 5 >= a ? a : 0
        },
        qN: function(a) {
            this.m.nm = 0 <= a && 2 >= a ? a : 0
        },
        AN: function(a) {
            this.m.Lm = 0 <= a && 2 >= a ? a : 0
        },
        Sz: function(a, b) {
            this.Ra.push({
                method: "_internalSearch",
                arguments: [a, b]
            })
        },
        search: function(a, b) {
            this.Ra.push({
                method: "search",
                arguments: [a, b]
            })
        },
        lp: function(a) {
            if ("string" === typeof a && (a = parseInt(a, 10),
            isNaN(a))) {
                this.m.yk = de.Vm;
                return
            }
            this.m.yk = "number" !== typeof a ? de.Vm : 1 <= a && a <= de.Vm ? Math.round(a) : de.Vm
        },
        toString: da("TransitRoute"),
        y1: function(a) {
            return a.replace(/\(.*\)/, "")
        }
    });
    var ee = de.prototype;
    V(ee, {
        _internalSearch: ee.Sz
    });
    function fe(a, b) {
        Y.call(this, a, b);
        this.Ba = [];
        this.cb = -1;
        this.Ra = [];
        var c = this
          , e = this.m.pa;
        1 !== e.zs && 2 !== e.zs && (e.zs = 1);
        this.zu = this.m.pa.Vb ? p : t;
        K.load("route", function() {
            c.Qd()
        });
        this.DD && this.DD()
    }
    fe.$O = " \u73af\u5c9b \u65e0\u5c5e\u6027\u9053\u8def \u4e3b\u8def \u9ad8\u901f\u8fde\u63a5\u8def \u4ea4\u53c9\u70b9\u5185\u8def\u6bb5 \u8fde\u63a5\u9053\u8def \u505c\u8f66\u573a\u5185\u90e8\u9053\u8def \u670d\u52a1\u533a\u5185\u90e8\u9053\u8def \u6865 \u6b65\u884c\u8857 \u8f85\u8def \u531d\u9053 \u5168\u5c01\u95ed\u9053\u8def \u672a\u5b9a\u4e49\u4ea4\u901a\u533a\u57df POI\u8fde\u63a5\u8def \u96a7\u9053 \u6b65\u884c\u9053 \u516c\u4ea4\u4e13\u7528\u9053 \u63d0\u524d\u53f3\u8f6c\u9053".split(" ");
    z.wa(fe, ce, "DWRoute");
    z.extend(fe.prototype, {
        search: function(a, b, c) {
            this.Ra.push({
                method: "search",
                arguments: [a, b, c]
            })
        }
    });
    function ge(a, b) {
        fe.call(this, a, b);
        b = b || {};
        this.m.nn = b.enableTraffic || t;
        this.ut(b.policy);
        this.Eb = Ud;
        this.Kp = Qd
    }
    z.wa(ge, fe, "DrivingRoute");
    ge.prototype.ut = function(a) {
        this.m.ge = 0 <= a && 5 >= a ? a : 0
    }
    ;
    function he(a, b) {
        fe.call(this, a, b);
        this.Eb = Vd;
        this.Kp = Pd;
        this.zu = t
    }
    z.wa(he, fe, "WalkingRoute");
    function ie(a, b) {
        fe.call(this, a, b);
        this.Eb = Yd;
        this.Kp = Rd;
        this.zu = t
    }
    z.wa(ie, fe, "RidingRoute");
    function je(a, b) {
        z.lang.Ga.call(this);
        this.Rf = [];
        this.Ak = [];
        this.m = b;
        this.lj = a;
        this.map = this.m.pa.map || q;
        this.jN = this.m.jN;
        this.Db = q;
        this.dk = 0;
        this.VE = "";
        this.jf = 1;
        this.BC = "";
        this.dp = [0, 0, 0, 0, 0, 0, 0];
        this.YL = [];
        this.Er = [1, 1, 1, 1, 1, 1, 1];
        this.VN = [1, 1, 1, 1, 1, 1, 1];
        this.ep = [0, 0, 0, 0, 0, 0, 0];
        this.Am = [0, 0, 0, 0, 0, 0, 0];
        this.Ib = [{
            B: "",
            Cd: 0,
            Mm: 0,
            x: 0,
            y: 0,
            ra: -1
        }, {
            B: "",
            Cd: 0,
            Mm: 0,
            x: 0,
            y: 0,
            ra: -1
        }, {
            B: "",
            Cd: 0,
            Mm: 0,
            x: 0,
            y: 0,
            ra: -1
        }, {
            B: "",
            Cd: 0,
            Mm: 0,
            x: 0,
            y: 0,
            ra: -1
        }, {
            B: "",
            Cd: 0,
            Mm: 0,
            x: 0,
            y: 0,
            ra: -1
        }, {
            B: "",
            Cd: 0,
            Mm: 0,
            x: 0,
            y: 0,
            ra: -1
        }, {
            B: "",
            Cd: 0,
            Mm: 0,
            x: 0,
            y: 0,
            ra: -1
        }];
        this.Rh = -1;
        this.Kt = [];
        this.gF = [];
        K.load("route", u())
    }
    z.lang.wa(je, z.lang.Ga, "RouteAddr");
    var ke = navigator.userAgent;
    /ipad|iphone|ipod|iph/i.test(ke);
    var le = /android/i.test(ke);
    function ne(a) {
        this.Ue = a || {}
    }
    z.extend(ne.prototype, {
        iN: function(a, b, c) {
            var e = this;
            K.load("route", function() {
                e.Qd(a, b, c)
            })
        }
    });
    function oe(a) {
        this.m = {};
        z.extend(this.m, a);
        this.Ra = [];
        var b = this;
        K.load("othersearch", function() {
            b.Qd()
        })
    }
    z.wa(oe, z.lang.Ga, "Geocoder");
    z.extend(oe.prototype, {
        em: function(a, b, c) {
            this.Ra.push({
                method: "getPoint",
                arguments: [a, b, c]
            })
        },
        cm: function(a, b, c) {
            this.Ra.push({
                method: "getLocation",
                arguments: [a, b, c]
            })
        },
        toString: da("Geocoder")
    });
    var pe = oe.prototype;
    V(pe, {
        getPoint: pe.em,
        getLocation: pe.cm
    });
    function Geolocation(a) {
        a = a || {};
        this.R = {
            timeout: a.timeout || 1E4,
            maximumAge: a.maximumAge || 6E5,
            enableHighAccuracy: a.enableHighAccuracy || t,
            ti: a.SDKLocation || t
        };
        this.me = [];
        var b = this;
        K.load("othersearch", function() {
            for (var a = 0, e; e = b.me[a]; a++)
                b[e.method].apply(b, e.arguments)
        })
    }
    z.extend(Geolocation.prototype, {
        getCurrentPosition: function(a, b) {
            this.me.push({
                method: "getCurrentPosition",
                arguments: arguments
            })
        },
        getStatus: function() {
            return Md
        },
        enableSDKLocation: function() {
            I() && (this.R.ti = p)
        },
        disableSDKLocation: function() {
            this.R.ti = t
        }
    });
    function qe(a) {
        a = a || {};
        a.pa = a.renderOptions || {};
        this.m = {
            pa: {
                map: a.pa.map || q
            }
        };
        this.Ra = [];
        var b = this;
        K.load("othersearch", function() {
            b.Qd()
        })
    }
    z.wa(qe, z.lang.Ga, "LocalCity");
    z.extend(qe.prototype, {
        get: function(a) {
            this.Ra.push({
                method: "get",
                arguments: [a]
            })
        },
        toString: da("LocalCity")
    });
    function ue() {
        this.Ra = [];
        var a = this;
        K.load("othersearch", function() {
            a.Qd()
        })
    }
    z.wa(ue, z.lang.Ga, "Boundary");
    z.extend(ue.prototype, {
        get: function(a, b) {
            this.Ra.push({
                method: "get",
                arguments: [a, b]
            })
        },
        toString: da("Boundary")
    });
    function ve(a, b) {
        Y.call(this, a, b);
        this.XO = Wd;
        this.ZO = Zd;
        this.WO = Xd;
        this.YO = $d;
        this.Ra = [];
        var c = this;
        K.load("buslinesearch", function() {
            c.Qd()
        })
    }
    ve.Ou = H.sa + "iw_plus.gif";
    ve.RR = H.sa + "iw_minus.gif";
    ve.IT = H.sa + "stop_icon.png";
    z.wa(ve, Y);
    z.extend(ve.prototype, {
        getBusList: function(a) {
            this.Ra.push({
                method: "getBusList",
                arguments: [a]
            })
        },
        getBusLine: function(a) {
            this.Ra.push({
                method: "getBusLine",
                arguments: [a]
            })
        },
        setGetBusListCompleteCallback: function(a) {
            this.m.yM = a || u()
        },
        setGetBusLineCompleteCallback: function(a) {
            this.m.xM = a || u()
        },
        setBusListHtmlSetCallback: function(a) {
            this.m.vM = a || u()
        },
        setBusLineHtmlSetCallback: function(a) {
            this.m.uM = a || u()
        },
        setPolylinesSetCallback: function(a) {
            this.m.gE = a || u()
        }
    });
    function we(a) {
        Y.call(this, a);
        a = a || {};
        this.$a = {
            input: a.input || q,
            tB: a.baseDom || q,
            types: a.types || [],
            Xs: a.onSearchComplete || u()
        };
        this.yd.src = a.location || "\u5168\u56fd";
        this.Qi = "";
        this.kg = q;
        this.rH = "";
        this.Gi();
        Sa(Ka);
        var b = this;
        K.load("autocomplete", function() {
            b.Qd()
        })
    }
    z.wa(we, Y, "Autocomplete");
    z.extend(we.prototype, {
        Gi: u(),
        show: u(),
        $: u(),
        LE: function(a) {
            this.$a.types = a
        },
        Fm: function(a) {
            this.yd.src = a
        },
        search: ba("Qi"),
        Rx: ba("rH"),
        vt: function(a) {
            this.$a.Xs = a
        }
    });
    var Va;
    function Qa(a, b) {
        function c() {
            f.m.visible ? ("inter" === f.Ie && Wa() && f.m.haveBreakId && f.m.indoorExitControl === p ? z.U.show(f.xq) : z.U.$(f.xq),
            this.m.closeControl && this.yf && this.M && this.M.Qa() === this.P ? z.U.show(f.yf) : z.U.$(f.yf),
            this.m.forceCloseControl && z.U.show(f.yf)) : (z.U.$(f.yf),
            z.U.$(f.xq))
        }
        this.P = "string" == typeof a ? z.ea(a) : a;
        this.da = xe++;
        this.m = {
            enableScrollWheelZoom: p,
            panoramaRenderer: Pa() ? "javascript" : "flash",
            swfSrc: D.Yh("main_domain_nocdn", "res/swf/") + "APILoader.swf",
            visible: p,
            indoorExitControl: p,
            indoorFloorControl: t,
            linksControl: p,
            clickOnRoad: p,
            navigationControl: p,
            closeControl: p,
            indoorSceneSwitchControl: p,
            albumsControl: t,
            albumsControlOptions: {},
            copyrightControlOptions: {},
            forceCloseControl: t,
            haveBreakId: t
        };
        var b = b || {}, e;
        for (e in b)
            this.m[e] = b[e];
        b.closeControl === p && (this.m.forceCloseControl = p);
        b.useWebGL === t && Pa(t);
        this.Ia = {
            heading: 0,
            pitch: 0
        };
        this.An = [];
        this.Kb = this.bb = q;
        this.Sj = this.uq();
        this.Ba = [];
        this.Kc = 1;
        this.Ie = this.oS = this.Zk = "";
        this.He = {};
        this.Kf = q;
        this.Pg = [];
        this.Nq = [];
        "cvsRender" == this.Sj || Pa() ? (this.Kj = 90,
        this.Mj = -90) : "cssRender" == this.Sj && (this.Kj = 45,
        this.Mj = -45);
        this.Rq = t;
        var f = this;
        this.Bn = function() {
            this.Sj === "flashRender" ? K.load("panoramaflash", function() {
                f.Gi()
            }, p) : K.load("panorama", function() {
                f.kb()
            }, p);
            b.kf == "api" ? Sa(Ga) : Sa(Ha);
            this.Bn = u()
        }
        ;
        this.m.bS !== p && (this.Bn(),
        D.Qp("cus.fire", "count", "z_loadpanoramacount"));
        this.TS(this.P);
        this.addEventListener("id_changed", function() {
            Sa(Fa, {
                from: b.kf
            })
        });
        this.kP();
        this.addEventListener("indoorexit_options_changed", c);
        this.addEventListener("scene_type_changed", c);
        this.addEventListener("onclose_options_changed", c);
        this.addEventListener("onvisible_changed", c)
    }
    var ye = 4
      , ze = 1
      , Ae = 5
      , xe = 0;
    z.lang.wa(Qa, z.lang.Ga, "Panorama");
    z.extend(Qa.prototype, {
        kP: function() {
            var a = this
              , b = this.yf = O("div");
            b.className = "pano_close";
            b.style.cssText = "z-index: 1201;display: none";
            b.title = "\u9000\u51fa\u5168\u666f";
            b.onclick = function() {
                a.$()
            }
            ;
            this.P.appendChild(b);
            var c = this.xq = O("a");
            c.className = "pano_pc_indoor_exit";
            c.style.cssText = "z-index: 1201;display: none";
            c.innerHTML = '<span style="float:right;margin-right:12px;">\u51fa\u53e3</span>';
            c.title = "\u9000\u51fa\u5ba4\u5185\u666f";
            c.onclick = function() {
                a.xo()
            }
            ;
            this.P.appendChild(c);
            window.ActiveXObject && !document.addEventListener && (b.style.backgroundColor = "rgb(37,37,37)",
            c.style.backgroundColor = "rgb(37,37,37)")
        },
        xo: u(),
        TS: function(a) {
            var b, c;
            b = a.style;
            c = Xa(a).position;
            "absolute" != c && "relative" != c && (b.position = "relative",
            b.zIndex = 0);
            if ("absolute" === c || "relative" === c)
                if (a = Xa(a).zIndex,
                !a || "auto" === a)
                    b.zIndex = 0
        },
        WW: x("An"),
        Xb: x("bb"),
        vX: x("xv"),
        zN: x("xv"),
        ka: x("Kb"),
        Ha: x("Ia"),
        ja: x("Kc"),
        $i: x("Zk"),
        k3: function() {
            return this.t1 || []
        },
        e3: x("oS"),
        ss: x("Ie"),
        Ux: function(a) {
            a !== this.Ie && (this.Ie = a,
            this.dispatchEvent(new Q("onscene_type_changed")))
        },
        yN: function(a) {
            a !== Ae && (Ae = a)
        },
        tN: function(a) {
            a !== ye && (ye = a)
        },
        Ac: function(a, b, c) {
            "object" === typeof b && (c = b,
            b = l);
            a != this.bb && (this.jl = this.bb,
            this.kl = this.Kb,
            this.bb = a,
            this.Ie = b || "street",
            this.Kb = q,
            c && c.pov && this.od(c.pov))
        },
        ua: function(a) {
            a.Wb(this.Kb) || (this.jl = this.bb,
            this.kl = this.Kb,
            this.Kb = a,
            this.bb = q)
        },
        od: function(a) {
            if (a) {
                var a = this.Ia.pitch
                  , b = this.Ia.heading
                  , b = this.TB(b);
                a > this.Kj ? a = this.Kj : a < this.Mj && (a = this.Mj);
                this.Rq = p;
                this.Ia.pitch = a;
                this.Ia.heading = b
            }
        },
        d_: function(a, b) {
            this.Mj = 0 <= a ? 0 : a;
            this.Kj = 0 >= b ? 0 : b
        },
        TB: function(a) {
            return a - 360 * Math.floor(a / 360)
        },
        Pc: function(a) {
            a != this.Kc && (a > ye && (a = ye),
            a < ze && (a = ze),
            a != this.Kc && (this.Kc = a),
            "cssRender" === this.Sj && this.od(this.Ia))
        },
        OA: function() {
            if (this.M)
                for (var a = this.M.Nw(), b = 0; b < a.length; b++)
                    (a[b]instanceof W || a[b]instanceof tc) && a[b].point && this.Ba.push(a[b])
        },
        IE: ba("M"),
        ot: function(a) {
            this.Kf = a || "none"
        },
        pj: function(a) {
            for (var b in a) {
                if ("object" == typeof a[b])
                    for (var c in a[b])
                        this.m[b][c] = a[b][c];
                else
                    this.m[b] = a[b];
                a.closeControl === p && (this.m.forceCloseControl = p);
                a.closeControl === t && (this.m.forceCloseControl = t);
                switch (b) {
                case "linksControl":
                    this.dispatchEvent(new Q("onlinks_visible_changed"));
                    break;
                case "clickOnRoad":
                    this.dispatchEvent(new Q("onclickonroad_changed"));
                    break;
                case "navigationControl":
                    this.dispatchEvent(new Q("onnavigation_visible_changed"));
                    break;
                case "indoorSceneSwitchControl":
                    this.dispatchEvent(new Q("onindoor_default_switch_mode_changed"));
                    break;
                case "albumsControl":
                    this.dispatchEvent(new Q("onalbums_visible_changed"));
                    break;
                case "albumsControlOptions":
                    this.dispatchEvent(new Q("onalbums_options_changed"));
                    break;
                case "copyrightControlOptions":
                    this.dispatchEvent(new Q("oncopyright_options_changed"));
                    break;
                case "closeControl":
                    this.dispatchEvent(new Q("onclose_options_changed"));
                    break;
                case "indoorExitControl":
                    this.dispatchEvent(new Q("onindoorexit_options_changed"));
                    break;
                case "indoorFloorControl":
                    this.dispatchEvent(new Q("onindoorfloor_options_changed"))
                }
            }
        },
        uk: function() {
            this.sl.style.visibility = "hidden"
        },
        Yx: function() {
            this.sl.style.visibility = "visible"
        },
        cW: function() {
            this.m.enableScrollWheelZoom = p
        },
        EV: function() {
            this.m.enableScrollWheelZoom = t
        },
        show: function() {
            this.m.visible = p
        },
        $: function() {
            this.m.visible = t
        },
        uq: function() {
            return Wa() && !I() && "javascript" != this.m.panoramaRenderer ? "flashRender" : !I() && Ob() ? "cvsRender" : "cssRender"
        },
        Oa: function(a) {
            this.He[a.hd] = a
        },
        Sb: function(a) {
            delete this.He[a]
        },
        Sw: function() {
            return this.m.visible
        },
        ah: function() {
            return new P(this.P.clientWidth,this.P.clientHeight)
        },
        Qa: x("P"),
        AK: function() {
            var a = D.Yh("baidumap", "?")
              , b = this.Xb();
            if (b) {
                var b = {
                    panotype: this.ss(),
                    heading: this.Ha().heading,
                    pitch: this.Ha().pitch,
                    pid: b,
                    panoid: b,
                    from: "api"
                }, c;
                for (c in b)
                    a += c + "=" + b[c] + "&"
            }
            return a.slice(0, -1)
        },
        Xw: function() {
            this.pj({
                copyrightControlOptions: {
                    logoVisible: t
                }
            })
        },
        PE: function() {
            this.pj({
                copyrightControlOptions: {
                    logoVisible: p
                }
            })
        },
        lB: function(a) {
            function b(a, b) {
                return function() {
                    a.Nq.push({
                        jM: b,
                        iM: arguments
                    })
                }
            }
            for (var c = a.getPanoMethodList(), e = "", f = 0, g = c.length; f < g; f++)
                e = c[f],
                this[e] = b(this, e);
            this.Pg.push(a)
        },
        tE: function(a) {
            for (var b = this.Pg.length; b--; )
                this.Pg[b] === a && this.Pg.splice(b, 1)
        },
        HE: u()
    });
    var Be = Qa.prototype;
    V(Be, {
        setId: Be.Ac,
        setPosition: Be.ua,
        setPov: Be.od,
        setZoom: Be.Pc,
        setOptions: Be.pj,
        getId: Be.Xb,
        getPosition: Be.ka,
        getPov: Be.Ha,
        getZoom: Be.ja,
        getLinks: Be.WW,
        getBaiduMapUrl: Be.AK,
        hideMapLogo: Be.Xw,
        showMapLogo: Be.PE,
        enableDoubleClickZoom: Be.u2,
        disableDoubleClickZoom: Be.l2,
        enableScrollWheelZoom: Be.cW,
        disableScrollWheelZoom: Be.EV,
        show: Be.show,
        hide: Be.$,
        addPlugin: Be.lB,
        removePlugin: Be.tE,
        getVisible: Be.Sw,
        addOverlay: Be.Oa,
        removeOverlay: Be.Sb,
        getSceneType: Be.ss,
        setPanoramaPOIType: Be.ot,
        exitInter: Be.xo,
        setInteractiveState: Be.HE
    });
    V(window, {
        BMAP_PANORAMA_POI_HOTEL: "hotel",
        BMAP_PANORAMA_POI_CATERING: "catering",
        BMAP_PANORAMA_POI_MOVIE: "movie",
        BMAP_PANORAMA_POI_TRANSIT: "transit",
        BMAP_PANORAMA_POI_INDOOR_SCENE: "indoor_scene",
        BMAP_PANORAMA_POI_NONE: "none",
        BMAP_PANORAMA_INDOOR_SCENE: "inter",
        BMAP_PANORAMA_STREET_SCENE: "street"
    });
    function Ce() {
        z.lang.Ga.call(this);
        this.hd = "PanoramaOverlay_" + this.da;
        this.W = q;
        this.Sa = p
    }
    z.lang.wa(Ce, z.lang.Ga, "PanoramaOverlayBase");
    z.extend(Ce.prototype, {
        g3: x("hd"),
        xa: function() {
            aa("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        remove: function() {
            aa("remove\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        Jf: function() {
            aa("_setOverlayProperty\u65b9\u6cd5\u672a\u5b9e\u73b0")
        }
    });
    function De(a, b) {
        Ce.call(this);
        var c = {
            position: q,
            altitude: 2,
            displayDistance: p
        }, b = b || {}, e;
        for (e in b)
            c[e] = b[e];
        this.Kb = c.position;
        this.zj = a;
        this.Rp = c.altitude;
        this.vQ = c.displayDistance;
        this.ZE = c.color;
        this.nL = c.hoverColor;
        this.backgroundColor = c.backgroundColor;
        this.nJ = c.backgroundHoverColor;
        this.borderColor = c.borderColor;
        this.rJ = c.borderHoverColor;
        this.fontSize = c.fontSize;
        this.padding = c.padding;
        this.xD = c.imageUrl;
        this.size = c.size;
        this.ve = c.image;
        this.width = c.width;
        this.height = c.height;
        this.OX = c.imageData;
        this.borderWidth = c.borderWidth
    }
    z.lang.wa(De, Ce, "PanoramaLabel");
    z.extend(De.prototype, {
        K2: x("borderWidth"),
        getImageData: x("OX"),
        hm: x("ZE"),
        Z2: x("nL"),
        G2: x("backgroundColor"),
        H2: x("nJ"),
        I2: x("borderColor"),
        J2: x("rJ"),
        X2: x("fontSize"),
        h3: x("padding"),
        a3: x("xD"),
        Cb: x("size"),
        Hw: x("ve"),
        ua: function(a) {
            this.Kb = a;
            this.Jf("position", a)
        },
        ka: x("Kb"),
        ad: function(a) {
            this.zj = a;
            this.Jf("content", a)
        },
        lk: x("zj"),
        BE: function(a) {
            this.Rp = a;
            this.Jf("altitude", a)
        },
        Bo: x("Rp"),
        Ha: function() {
            var a = this.ka()
              , b = q
              , c = q;
            this.W && (c = this.W.ka());
            if (a && c)
                if (a.Wb(c))
                    b = this.W.Ha();
                else {
                    b = {};
                    b.heading = Ee(a.lng - c.lng, a.lat - c.lat) || 0;
                    var a = b
                      , c = this.Bo()
                      , e = this.vn();
                    a.pitch = Math.round(180 * (Math.atan(c / e) / Math.PI)) || 0
                }
            return b
        },
        vn: function() {
            var a = 0, b, c;
            this.W && (b = this.W.ka(),
            (c = this.ka()) && !c.Wb(b) && (a = S.mk(b, c)));
            return a
        },
        $: function() {
            aa("hide\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        show: function() {
            aa("show\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        Jf: u()
    });
    var Fe = De.prototype;
    V(Fe, {
        setPosition: Fe.ua,
        getPosition: Fe.ka,
        setContent: Fe.ad,
        getContent: Fe.lk,
        setAltitude: Fe.BE,
        getAltitude: Fe.Bo,
        getPov: Fe.Ha,
        show: Fe.show,
        hide: Fe.$
    });
    function Ge(a, b) {
        Ce.call(this);
        var c = {
            icon: "",
            title: "",
            panoInfo: q,
            altitude: 2
        }, b = b || {}, e;
        for (e in b)
            c[e] = b[e];
        this.Kb = a;
        this.oH = c.icon;
        this.GI = c.title;
        this.Rp = c.altitude;
        this.FS = c.panoInfo;
        this.Ia = {
            heading: 0,
            pitch: 0
        }
    }
    z.lang.wa(Ge, Ce, "PanoramaMarker");
    z.extend(Ge.prototype, {
        ua: function(a) {
            this.Kb = a;
            this.Jf("position", a)
        },
        ka: x("Kb"),
        Bc: function(a) {
            this.GI = a;
            this.Jf("title", a)
        },
        Io: x("GI"),
        Tb: function(a) {
            this.oH = icon;
            this.Jf("icon", a)
        },
        Do: x("oH"),
        BE: function(a) {
            this.Rp = a;
            this.Jf("altitude", a)
        },
        Bo: x("Rp"),
        hD: x("FS"),
        Ha: function() {
            var a = q;
            if (this.W) {
                var a = this.W.ka()
                  , b = this.ka()
                  , a = Ee(b.lng - a.lng, b.lat - a.lat);
                isNaN(a) && (a = 0);
                a = {
                    heading: a,
                    pitch: 0
                }
            } else
                a = this.Ia;
            return a
        },
        Jf: u()
    });
    var He = Ge.prototype;
    V(He, {
        setPosition: He.ua,
        getPosition: He.ka,
        setTitle: He.Bc,
        getTitle: He.Io,
        setAltitude: He.BE,
        getAltitude: He.Bo,
        getPanoInfo: He.hD,
        getIcon: He.Do,
        setIcon: He.Tb,
        getPov: He.Ha
    });
    function Ee(a, b) {
        var c = 0;
        if (0 !== a && 0 !== b) {
            var c = 180 * (Math.atan(a / b) / Math.PI)
              , e = 0;
            0 < a && 0 > b && (e = 90);
            0 > a && 0 > b && (e = 180);
            0 > a && 0 < b && (e = 270);
            c = (c + 90) % 90 + e
        } else
            0 === a ? c = 0 > b ? 180 : 0 : 0 === b && (c = 0 < a ? 90 : 270);
        return Math.round(c)
    }
    function Pa(a) {
        if ("boolean" === typeof Ie)
            return Ie;
        if (a === t || !window.WebGLRenderingContext)
            return Ie = t;
        if (z.platform.ij) {
            a = 0;
            try {
                a = navigator.userAgent.split("Android ")[1].charAt(0)
            } catch (b) {}
            if (5 > a)
                return Ie = t
        }
        var a = document.createElement("canvas")
          , c = q;
        try {
            c = a.getContext("webgl")
        } catch (e) {
            Ie = t
        }
        return Ie = c === q ? t : p
    }
    var Ie;
    function Je() {
        if ("boolean" === typeof Ke)
            return Ke;
        Ke = p;
        if (z.platform.HD)
            return p;
        var a = navigator.userAgent;
        return -1 < a.indexOf("Chrome") || -1 < a.indexOf("SAMSUNG-GT-I9508") ? p : Ke = t
    }
    var Ke;
    function dc(a, b) {
        this.W = a || q;
        var c = this;
        c.W && c.ga();
        K.load("pservice", function() {
            c.QP()
        });
        "api" == (b || {}).kf ? Sa(Ia) : Sa(Ja);
        this.vd = {
            getPanoramaById: [],
            getPanoramaByLocation: [],
            getVisiblePOIs: [],
            getRecommendPanosById: [],
            getPanoramaVersions: [],
            checkPanoSupportByCityCode: [],
            getPanoramaByPOIId: [],
            getCopyrightProviders: []
        }
    }
    D.zk(function(a) {
        "flashRender" !== a.uq() && new dc(a,{
            kf: "api"
        })
    });
    z.extend(dc.prototype, {
        ga: function() {
            function a(a) {
                if (a) {
                    if (a.id != b.xv) {
                        b.zN(a.id);
                        b.ha = a;
                        Je() || b.dispatchEvent(new Q("onthumbnail_complete"));
                        b.bb != q && (b.kl = b._position);
                        for (var c in a)
                            if (a.hasOwnProperty(c))
                                switch (b["_" + c] = a[c],
                                c) {
                                case "position":
                                    b.Kb = a[c];
                                    break;
                                case "id":
                                    b.bb = a[c];
                                    break;
                                case "links":
                                    b.An = a[c];
                                    break;
                                case "zoom":
                                    b.Kc = a[c]
                                }
                        if (b.kl) {
                            var g = b.kl
                              , i = b._position;
                            c = g.lat;
                            var k = i.lat
                              , m = U(k - c)
                              , g = U(i.lng - g.lng);
                            c = Math.sin(m / 2) * Math.sin(m / 2) + Math.cos(U(c)) * Math.cos(U(k)) * Math.sin(g / 2) * Math.sin(g / 2);
                            b.EG = 6371E3 * 2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c))
                        }
                        c = new Q("ondataload");
                        b.show();
                        c.data = a;
                        b.dispatchEvent(c);
                        b.dispatchEvent(new Q("onposition_changed"));
                        b.dispatchEvent(new Q("onlinks_changed"));
                        b.dispatchEvent(new Q("oncopyright_changed"), {
                            copyright: a.copyright
                        });
                        a.Ol ? (b.pj({
                            haveBreakId: p
                        }),
                        Wa() && b.m.closeControl && z.U.show(b.xq)) : z.U.$(b.xq)
                    }
                } else
                    b.bb = b.jl,
                    b.Kb = b.kl,
                    b.dispatchEvent(new Q("onnoresult"))
            }
            var b = this.W
              , c = this;
            b.addEventListener("id_changed", function() {
                c.Go(b.Xb(), a)
            });
            b.addEventListener("iid_changed", function() {
                c.Qg(dc.Uk + "qt=idata&iid=" + b.Iz + "&fn=", function(b) {
                    if (b && b.result && 0 == b.result.error) {
                        var b = b.content[0].interinfo
                          , f = {};
                        f.Ol = b.BreakID;
                        for (var g = b.Defaultfloor, i = q, k = 0; k < b.Floors.length; k++)
                            if (b.Floors[k].Floor == g) {
                                i = b.Floors[k];
                                break
                            }
                        f.id = i.StartID || i.Points[0].PID;
                        c.Go(f.id, a, f)
                    }
                })
            });
            b.addEventListener("position_changed_inner", function() {
                c.cj(b.ka(), a)
            })
        },
        Go: function(a, b) {
            this.vd.getPanoramaById.push(arguments)
        },
        cj: function(a, b, c) {
            this.vd.getPanoramaByLocation.push(arguments)
        },
        sD: function(a, b, c, e) {
            this.vd.getVisiblePOIs.push(arguments)
        },
        Qw: function(a, b) {
            this.vd.getRecommendPanosById.push(arguments)
        },
        Pw: function(a) {
            this.vd.getPanoramaVersions.push(arguments)
        },
        yB: function(a, b) {
            this.vd.checkPanoSupportByCityCode.push(arguments)
        },
        Ow: function(a, b) {
            this.vd.getPanoramaByPOIId.push(arguments)
        },
        EK: function(a) {
            this.vd.getCopyrightProviders.push(arguments)
        }
    });
    var Le = dc.prototype;
    V(Le, {
        getPanoramaById: Le.Go,
        getPanoramaByLocation: Le.cj,
        getPanoramaByPOIId: Le.Ow
    });
    function cc(a) {
        Lc.call(this);
        "api" == (a || {}).kf ? Sa(Ca) : Sa(Da)
    }
    cc.YF = D.Yh("pano", "tile/");
    cc.prototype = new Lc;
    cc.prototype.getTilesUrl = function(a, b) {
        var c = cc.YF[(a.x + a.y) % cc.YF.length] + "?udt=20150114&qt=tile&styles=pl&x=" + a.x + "&y=" + a.y + "&z=" + b;
        z.fa.na && 6 >= z.fa.na && (c += "&color_dep=32");
        return c
    }
    ;
    cc.prototype.Ls = da(p);
    Me.Ud = new S;
    function Me() {}
    z.extend(Me, {
        FV: function(a, b, c) {
            c = z.lang.Mc(c);
            b = {
                data: b
            };
            "position_changed" == a && (b.data = Me.Ud.oj(new R(b.data.mercatorX,b.data.mercatorY)));
            c.dispatchEvent(new Q("on" + a), b)
        }
    });
    var Ne = Me;
    V(Ne, {
        dispatchFlashEvent: Ne.FV
    });
    var Oe = {
        NO: 50
    };
    Oe.du = D.Yh("pano")[0];
    Oe.bu = {
        width: 220,
        height: 60
    };
    z.extend(Oe, {
        wL: function(a, b, c, e) {
            if (!b || !c || !c.lngLat || !c.panoInstance)
                e();
            else {
                this.Gn === l && (this.Gn = new dc(q,{
                    kf: "api"
                }));
                var f = this;
                this.Gn.yB(b, function(b) {
                    b ? f.Gn.cj(c.lngLat, Oe.NO, function(b) {
                        if (b && b.id) {
                            var g = b.id
                              , m = b.jh
                              , b = b.kh
                              , n = dc.Ud.vg(c.lngLat)
                              , o = f.tR(n, {
                                x: m,
                                y: b
                            })
                              , m = f.PK(g, o, 0, Oe.bu.width, Oe.bu.height);
                            a.content = f.uR(a.content, m, c.titleTip, c.beforeDomId);
                            a.addEventListener("open", function() {
                                ja.V(z.Cc("infoWndPano"), "click", function() {
                                    c.panoInstance.Ac(g);
                                    c.panoInstance.show();
                                    c.panoInstance.od({
                                        heading: o,
                                        pitch: 0
                                    })
                                })
                            })
                        }
                        e()
                    }) : e()
                })
            }
        },
        uR: function(a, b, c, e) {
            var c = c || "", f;
            !e || !a.split(e)[0] ? (e = a,
            a = "") : (e = a.split(e)[0],
            f = e.lastIndexOf("<"),
            e = a.substring(0, f),
            a = a.substring(f));
            f = [];
            var g = Oe.bu.width
              , i = Oe.bu.height;
            f.push(e);
            f.push("<div id='infoWndPano' class='panoInfoBox' style='height:" + i + "px;width:" + g + "px; margin-top: -19px;'>");
            f.push("<img class='pano_thumnail_img' width='" + g + "' height='" + i + "' border='0' alt='" + c + "\u5916\u666f' title='" + c + "\u5916\u666f' src='" + b + "' onerror='Pano.PanoEntranceUtil.thumbnailNotFound(this, " + g + ", " + i + ");' />");
            f.push("<div class='panoInfoBoxTitleBg' style='width:" + g + "px;'></div><a href='javascript:void(0)' class='panoInfoBoxTitleContent' >\u8fdb\u5165\u5168\u666f&gt;&gt;</a>");
            f.push("</div>");
            f.push(a);
            return f.join("")
        },
        tR: function(a, b) {
            var c = 90 - 180 * Math.atan2(a.y - b.y, a.x - b.x) / Math.PI;
            0 > c && (c += 360);
            return c
        },
        PK: function(a, b, c, e, f) {
            var g = {
                panoId: a,
                panoHeading: b || 0,
                panoPitch: c || 0,
                width: e,
                height: f
            };
            return (Oe.du + "?qt=pr3d&fovy=75&quality=80&panoid={panoId}&heading={panoHeading}&pitch={panoPitch}&width={width}&height={height}").replace(/\{(.*?)\}/g, function(a, b) {
                return g[b]
            })
        }
    });
    var Pe = document, Qe = Math, Re = Pe.createElement("div").style, Se;
    a: {
        for (var Te = ["t", "webkitT", "MozT", "msT", "OT"], Ue, Ve = 0, We = Te.length; Ve < We; Ve++)
            if (Ue = Te[Ve] + "ransform",
            Ue in Re) {
                Se = Te[Ve].substr(0, Te[Ve].length - 1);
                break a
            }
        Se = t
    }
    var Xe = Se ? "-" + Se.toLowerCase() + "-" : ""
      , Ze = Ye("transform")
      , $e = Ye("transitionProperty")
      , af = Ye("transitionDuration")
      , bf = Ye("transformOrigin")
      , cf = Ye("transitionTimingFunction")
      , df = Ye("transitionDelay")
      , le = /android/gi.test(navigator.appVersion)
      , ef = /iphone|ipad/gi.test(navigator.appVersion)
      , ff = /hp-tablet/gi.test(navigator.appVersion)
      , gf = Ye("perspective")in Re
      , hf = "ontouchstart"in window && !ff
      , jf = Se !== t
      , kf = Ye("transition")in Re
      , lf = "onorientationchange"in window ? "orientationchange" : "resize"
      , mf = hf ? "touchstart" : "mousedown"
      , nf = hf ? "touchmove" : "mousemove"
      , of = hf ? "touchend" : "mouseup"
      , pf = hf ? "touchcancel" : "mouseup"
      , qf = Se === t ? t : {
        "": "transitionend",
        webkit: "webkitTransitionEnd",
        Moz: "transitionend",
        O: "otransitionend",
        ms: "MSTransitionEnd"
    }[Se]
      , rf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
        return setTimeout(a, 1)
    }
      , sf = window.cancelRequestAnimationFrame || window.P5 || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
      , tf = gf ? " translateZ(0)" : "";
    function uf(a, b) {
        var c = this, e;
        c.Qm = "object" == typeof a ? a : Pe.getElementById(a);
        c.Qm.style.overflow = "hidden";
        c.Nb = c.Qm.children[0];
        c.options = {
            Mo: p,
            Nm: p,
            x: 0,
            y: 0,
            io: p,
            AU: t,
            qx: p,
            VD: p,
            Nk: p,
            qi: t,
            M_: 0,
            Zv: t,
            Uw: p,
            Zh: p,
            ri: p,
            HC: le,
            Yw: ef,
            kW: ef && gf,
            yE: "",
            zoom: t,
            Pk: 1,
            Ap: 4,
            HV: 2,
            sO: "scroll",
            Ct: t,
            ay: 1,
            BM: q,
            tM: function(a) {
                a.preventDefault()
            },
            EM: q,
            sM: q,
            DM: q,
            rM: q,
            xx: q,
            FM: q,
            wM: q,
            Zo: q,
            GM: q,
            Yo: q
        };
        for (e in b)
            c.options[e] = b[e];
        c.x = c.options.x;
        c.y = c.options.y;
        c.options.Nk = jf && c.options.Nk;
        c.options.Zh = c.options.Mo && c.options.Zh;
        c.options.ri = c.options.Nm && c.options.ri;
        c.options.zoom = c.options.Nk && c.options.zoom;
        c.options.qi = kf && c.options.qi;
        c.options.zoom && le && (tf = "");
        c.Nb.style[$e] = c.options.Nk ? Xe + "transform" : "top left";
        c.Nb.style[af] = "0";
        c.Nb.style[bf] = "0 0";
        c.options.qi && (c.Nb.style[cf] = "cubic-bezier(0.33,0.66,0.66,1)");
        c.options.Nk ? c.Nb.style[Ze] = "translate(" + c.x + "px," + c.y + "px)" + tf : c.Nb.style.cssText += ";position:absolute;top:" + c.y + "px;left:" + c.x + "px";
        c.options.qi && (c.options.HC = p);
        c.refresh();
        c.ga(lf, window);
        c.ga(mf);
        !hf && "none" != c.options.sO && (c.ga("DOMMouseScroll"),
        c.ga("mousewheel"));
        c.options.Zv && (c.NU = setInterval(function() {
            c.OP()
        }, 500));
        this.options.Uw && (Event.prototype.stopImmediatePropagation || (document.body.removeEventListener = function(a, b, c) {
            var e = Node.prototype.removeEventListener;
            a === "click" ? e.call(document.body, a, b.mL || b, c) : e.call(document.body, a, b, c)
        }
        ,
        document.body.addEventListener = function(a, b, c) {
            var e = Node.prototype.addEventListener;
            a === "click" ? e.call(document.body, a, b.mL || (b.mL = function(a) {
                a.pZ || b(a)
            }
            ), c) : e.call(document.body, a, b, c)
        }
        ),
        c.ga("click", document.body, p))
    }
    uf.prototype = {
        enabled: p,
        x: 0,
        y: 0,
        qj: [],
        scale: 1,
        OB: 0,
        PB: 0,
        Ve: [],
        qf: [],
        sB: q,
        ly: 0,
        handleEvent: function(a) {
            switch (a.type) {
            case mf:
                if (!hf && 0 !== a.button)
                    break;
                this.qv(a);
                break;
            case nf:
                this.qS(a);
                break;
            case of:
            case pf:
                this.Au(a);
                break;
            case lf:
                this.HA();
                break;
            case "DOMMouseScroll":
            case "mousewheel":
                this.UT(a);
                break;
            case qf:
                this.RT(a);
                break;
            case "click":
                this.YP(a)
            }
        },
        OP: function() {
            !this.ih && (!this.Qk && !(this.Ll || this.Qx == this.Nb.offsetWidth * this.scale && this.hp == this.Nb.offsetHeight * this.scale)) && this.refresh()
        },
        hv: function(a) {
            var b;
            this[a + "Scrollbar"] ? (this[a + "ScrollbarWrapper"] || (b = Pe.createElement("div"),
            this.options.yE ? b.className = this.options.yE + a.toUpperCase() : b.style.cssText = "position:absolute;z-index:100;" + ("h" == a ? "height:7px;bottom:1px;left:2px;right:" + (this.ri ? "7" : "2") + "px" : "width:7px;bottom:" + (this.Zh ? "7" : "2") + "px;top:2px;right:1px"),
            b.style.cssText += ";pointer-events:none;" + Xe + "transition-property:opacity;" + Xe + "transition-duration:" + (this.options.kW ? "350ms" : "0") + ";overflow:hidden;opacity:" + (this.options.Yw ? "0" : "1"),
            this.Qm.appendChild(b),
            this[a + "ScrollbarWrapper"] = b,
            b = Pe.createElement("div"),
            this.options.yE || (b.style.cssText = "position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);" + Xe + "background-clip:padding-box;" + Xe + "box-sizing:border-box;" + ("h" == a ? "height:100%" : "width:100%") + ";" + Xe + "border-radius:3px;border-radius:3px"),
            b.style.cssText += ";pointer-events:none;" + Xe + "transition-property:" + Xe + "transform;" + Xe + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);" + Xe + "transition-duration:0;" + Xe + "transform: translate(0,0)" + tf,
            this.options.qi && (b.style.cssText += ";" + Xe + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"),
            this[a + "ScrollbarWrapper"].appendChild(b),
            this[a + "ScrollbarIndicator"] = b),
            "h" == a ? (this.iL = this.jL.clientWidth,
            this.FX = Qe.max(Qe.round(this.iL * this.iL / this.Qx), 8),
            this.EX.style.width = this.FX + "px") : (this.kO = this.lO.clientHeight,
            this.h0 = Qe.max(Qe.round(this.kO * this.kO / this.hp), 8),
            this.g0.style.height = this.h0 + "px"),
            this.IA(a, p)) : this[a + "ScrollbarWrapper"] && (jf && (this[a + "ScrollbarIndicator"].style[Ze] = ""),
            this[a + "ScrollbarWrapper"].parentNode.removeChild(this[a + "ScrollbarWrapper"]),
            this[a + "ScrollbarWrapper"] = q,
            this[a + "ScrollbarIndicator"] = q)
        },
        HA: function() {
            var a = this;
            setTimeout(function() {
                a.refresh()
            }, le ? 200 : 0)
        },
        Qq: function(a, b) {
            this.Qk || (a = this.Mo ? a : 0,
            b = this.Nm ? b : 0,
            this.options.Nk ? this.Nb.style[Ze] = "translate(" + a + "px," + b + "px) scale(" + this.scale + ")" + tf : (a = Qe.round(a),
            b = Qe.round(b),
            this.Nb.style.left = a + "px",
            this.Nb.style.top = b + "px"),
            this.x = a,
            this.y = b,
            this.IA("h"),
            this.IA("v"))
        },
        IA: function(a, b) {
            var c = "h" == a ? this.x : this.y;
            this[a + "Scrollbar"] && (c *= this[a + "ScrollbarProp"],
            0 > c ? (this.options.HC || (c = this[a + "ScrollbarIndicatorSize"] + Qe.round(3 * c),
            8 > c && (c = 8),
            this[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px"),
            c = 0) : c > this[a + "ScrollbarMaxScroll"] && (this.options.HC ? c = this[a + "ScrollbarMaxScroll"] : (c = this[a + "ScrollbarIndicatorSize"] - Qe.round(3 * (c - this[a + "ScrollbarMaxScroll"])),
            8 > c && (c = 8),
            this[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px",
            c = this[a + "ScrollbarMaxScroll"] + (this[a + "ScrollbarIndicatorSize"] - c))),
            this[a + "ScrollbarWrapper"].style[df] = "0",
            this[a + "ScrollbarWrapper"].style.opacity = b && this.options.Yw ? "0" : "1",
            this[a + "ScrollbarIndicator"].style[Ze] = "translate(" + ("h" == a ? c + "px,0)" : "0," + c + "px)") + tf)
        },
        YP: function(a) {
            if (a.OQ === p)
                return this.hB = a.target,
                this.zw = Date.now(),
                p;
            if (this.hB && this.zw) {
                if (600 < Date.now() - this.zw)
                    return this.zw = this.hB = q,
                    p
            } else {
                for (var b = a.target; b != this.Nb && b != document.body; )
                    b = b.parentNode;
                if (b == document.body)
                    return p
            }
            for (b = a.target; 1 != b.nodeType; )
                b = b.parentNode;
            b = b.tagName.toLowerCase();
            if ("select" != b && "input" != b && "textarea" != b)
                return a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.pZ = p,
                a.stopPropagation(),
                a.preventDefault(),
                this.zw = this.hB = q,
                t
        },
        qv: function(a) {
            var b = hf ? a.touches[0] : a, c, e;
            if (this.enabled) {
                this.options.tM && this.options.tM.call(this, a);
                (this.options.qi || this.options.zoom) && this.II(0);
                this.Qk = this.Ll = this.ih = t;
                this.YB = this.XB = this.Jv = this.Iv = this.dC = this.cC = 0;
                this.options.zoom && (hf && 1 < a.touches.length) && (e = Qe.abs(a.touches[0].pageX - a.touches[1].pageX),
                c = Qe.abs(a.touches[0].pageY - a.touches[1].pageY),
                this.O_ = Qe.sqrt(e * e + c * c),
                this.zx = Qe.abs(a.touches[0].pageX + a.touches[1].pageX - 2 * this.qF) / 2 - this.x,
                this.Ax = Qe.abs(a.touches[0].pageY + a.touches[1].pageY - 2 * this.rF) / 2 - this.y,
                this.options.Zo && this.options.Zo.call(this, a));
                if (this.options.qx && (this.options.Nk ? (c = getComputedStyle(this.Nb, q)[Ze].replace(/[^0-9\-.,]/g, "").split(","),
                e = +(c[12] || c[4]),
                c = +(c[13] || c[5])) : (e = +getComputedStyle(this.Nb, q).left.replace(/[^0-9-]/g, ""),
                c = +getComputedStyle(this.Nb, q).top.replace(/[^0-9-]/g, "")),
                e != this.x || c != this.y))
                    this.options.qi ? this.Yd(qf) : sf(this.sB),
                    this.qj = [],
                    this.Qq(e, c),
                    this.options.xx && this.options.xx.call(this);
                this.Kv = this.x;
                this.Lv = this.y;
                this.Ft = this.x;
                this.Gt = this.y;
                this.jh = b.pageX;
                this.kh = b.pageY;
                this.startTime = a.timeStamp || Date.now();
                this.options.EM && this.options.EM.call(this, a);
                this.ga(nf, window);
                this.ga(of, window);
                this.ga(pf, window)
            }
        },
        qS: function(a) {
            var b = hf ? a.touches[0] : a
              , c = b.pageX - this.jh
              , e = b.pageY - this.kh
              , f = this.x + c
              , g = this.y + e
              , i = a.timeStamp || Date.now();
            this.options.sM && this.options.sM.call(this, a);
            if (this.options.zoom && hf && 1 < a.touches.length)
                f = Qe.abs(a.touches[0].pageX - a.touches[1].pageX),
                g = Qe.abs(a.touches[0].pageY - a.touches[1].pageY),
                this.N_ = Qe.sqrt(f * f + g * g),
                this.Qk = p,
                b = 1 / this.O_ * this.N_ * this.scale,
                b < this.options.Pk ? b = 0.5 * this.options.Pk * Math.pow(2, b / this.options.Pk) : b > this.options.Ap && (b = 2 * this.options.Ap * Math.pow(0.5, this.options.Ap / b)),
                this.So = b / this.scale,
                f = this.zx - this.zx * this.So + this.x,
                g = this.Ax - this.Ax * this.So + this.y,
                this.Nb.style[Ze] = "translate(" + f + "px," + g + "px) scale(" + b + ")" + tf,
                this.options.GM && this.options.GM.call(this, a);
            else {
                this.jh = b.pageX;
                this.kh = b.pageY;
                if (0 < f || f < this.fe)
                    f = this.options.io ? this.x + c / 2 : 0 <= f || 0 <= this.fe ? 0 : this.fe;
                if (g > this.of || g < this.nd)
                    g = this.options.io ? this.y + e / 2 : g >= this.of || 0 <= this.nd ? this.of : this.nd;
                this.cC += c;
                this.dC += e;
                this.Iv = Qe.abs(this.cC);
                this.Jv = Qe.abs(this.dC);
                6 > this.Iv && 6 > this.Jv || (this.options.VD && (this.Iv > this.Jv + 5 ? (g = this.y,
                e = 0) : this.Jv > this.Iv + 5 && (f = this.x,
                c = 0)),
                this.ih = p,
                this.Qq(f, g),
                this.XB = 0 < c ? -1 : 0 > c ? 1 : 0,
                this.YB = 0 < e ? -1 : 0 > e ? 1 : 0,
                300 < i - this.startTime && (this.startTime = i,
                this.Ft = this.x,
                this.Gt = this.y),
                this.options.DM && this.options.DM.call(this, a))
            }
        },
        Au: function(a) {
            if (!(hf && 0 !== a.touches.length)) {
                var b = this, c = hf ? a.changedTouches[0] : a, e, f, g = {
                    Fa: 0,
                    time: 0
                }, i = {
                    Fa: 0,
                    time: 0
                }, k = (a.timeStamp || Date.now()) - b.startTime;
                e = b.x;
                f = b.y;
                b.Yd(nf, window);
                b.Yd(of, window);
                b.Yd(pf, window);
                b.options.rM && b.options.rM.call(b, a);
                if (b.Qk)
                    e = b.scale * b.So,
                    e = Math.max(b.options.Pk, e),
                    e = Math.min(b.options.Ap, e),
                    b.So = e / b.scale,
                    b.scale = e,
                    b.x = b.zx - b.zx * b.So + b.x,
                    b.y = b.Ax - b.Ax * b.So + b.y,
                    b.Nb.style[af] = "200ms",
                    b.Nb.style[Ze] = "translate(" + b.x + "px," + b.y + "px) scale(" + b.scale + ")" + tf,
                    b.Qk = t,
                    b.refresh(),
                    b.options.Yo && b.options.Yo.call(b, a);
                else {
                    if (b.ih) {
                        if (300 > k && b.options.qx) {
                            g = e ? b.EH(e - b.Ft, k, -b.x, b.Qx - b.Tt + b.x, b.options.io ? b.Tt : 0) : g;
                            i = f ? b.EH(f - b.Gt, k, -b.y, 0 > b.nd ? b.hp - b.Rm + b.y - b.of : 0, b.options.io ? b.Rm : 0) : i;
                            e = b.x + g.Fa;
                            f = b.y + i.Fa;
                            if (0 < b.x && 0 < e || b.x < b.fe && e < b.fe)
                                g = {
                                    Fa: 0,
                                    time: 0
                                };
                            if (b.y > b.of && f > b.of || b.y < b.nd && f < b.nd)
                                i = {
                                    Fa: 0,
                                    time: 0
                                }
                        }
                        g.Fa || i.Fa ? (c = Qe.max(Qe.max(g.time, i.time), 10),
                        b.options.Ct && (g = e - b.Kv,
                        i = f - b.Lv,
                        Qe.abs(g) < b.options.ay && Qe.abs(i) < b.options.ay ? b.scrollTo(b.Kv, b.Lv, 200) : (g = b.yI(e, f),
                        e = g.x,
                        f = g.y,
                        c = Qe.max(g.time, c))),
                        b.scrollTo(Qe.round(e), Qe.round(f), c)) : b.options.Ct ? (g = e - b.Kv,
                        i = f - b.Lv,
                        Qe.abs(g) < b.options.ay && Qe.abs(i) < b.options.ay ? b.scrollTo(b.Kv, b.Lv, 200) : (g = b.yI(b.x, b.y),
                        (g.x != b.x || g.y != b.y) && b.scrollTo(g.x, g.y, g.time))) : b.In(200)
                    } else {
                        if (hf)
                            if (b.WJ && b.options.zoom)
                                clearTimeout(b.WJ),
                                b.WJ = q,
                                b.options.Zo && b.options.Zo.call(b, a),
                                b.zoom(b.jh, b.kh, 1 == b.scale ? b.options.HV : 1),
                                b.options.Yo && setTimeout(function() {
                                    b.options.Yo.call(b, a)
                                }, 200);
                            else if (this.options.Uw) {
                                for (e = c.target; 1 != e.nodeType; )
                                    e = e.parentNode;
                                f = e.tagName.toLowerCase();
                                "select" != f && "input" != f && "textarea" != f ? (f = Pe.createEvent("MouseEvents"),
                                f.initMouseEvent("click", p, p, a.view, 1, c.screenX, c.screenY, c.clientX, c.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, q),
                                f.OQ = p,
                                e.dispatchEvent(f)) : e.focus()
                            }
                        b.In(400)
                    }
                    b.options.FM && b.options.FM.call(b, a)
                }
            }
        },
        In: function(a) {
            var b = 0 <= this.x ? 0 : this.x < this.fe ? this.fe : this.x
              , c = this.y >= this.of || 0 < this.nd ? this.of : this.y < this.nd ? this.nd : this.y;
            if (b == this.x && c == this.y) {
                if (this.ih && (this.ih = t,
                this.options.xx && this.options.xx.call(this)),
                this.Zh && this.options.Yw && ("webkit" == Se && (this.jL.style[df] = "300ms"),
                this.jL.style.opacity = "0"),
                this.ri && this.options.Yw)
                    "webkit" == Se && (this.lO.style[df] = "300ms"),
                    this.lO.style.opacity = "0"
            } else
                this.scrollTo(b, c, a || 0)
        },
        UT: function(a) {
            var b = this, c, e;
            if ("wheelDeltaX"in a)
                c = a.wheelDeltaX / 12,
                e = a.wheelDeltaY / 12;
            else if ("wheelDelta"in a)
                c = e = a.wheelDelta / 12;
            else if ("detail"in a)
                c = e = 3 * -a.detail;
            else
                return;
            if ("zoom" == b.options.sO) {
                if (e = b.scale * Math.pow(2, 1 / 3 * (e ? e / Math.abs(e) : 0)),
                e < b.options.Pk && (e = b.options.Pk),
                e > b.options.Ap && (e = b.options.Ap),
                e != b.scale)
                    !b.ly && b.options.Zo && b.options.Zo.call(b, a),
                    b.ly++,
                    b.zoom(a.pageX, a.pageY, e, 400),
                    setTimeout(function() {
                        b.ly--;
                        !b.ly && b.options.Yo && b.options.Yo.call(b, a)
                    }, 400)
            } else
                c = b.x + c,
                e = b.y + e,
                0 < c ? c = 0 : c < b.fe && (c = b.fe),
                e > b.of ? e = b.of : e < b.nd && (e = b.nd),
                0 > b.nd && b.scrollTo(c, e, 0)
        },
        RT: function(a) {
            a.target == this.Nb && (this.Yd(qf),
            this.UA())
        },
        UA: function() {
            var a = this, b = a.x, c = a.y, e = Date.now(), f, g, i;
            a.Ll || (a.qj.length ? (f = a.qj.shift(),
            f.x == b && f.y == c && (f.time = 0),
            a.Ll = p,
            a.ih = p,
            a.options.qi) ? (a.II(f.time),
            a.Qq(f.x, f.y),
            a.Ll = t,
            f.time ? a.ga(qf) : a.In(0)) : (i = function() {
                var k = Date.now(), m;
                if (k >= e + f.time) {
                    a.Qq(f.x, f.y);
                    a.Ll = t;
                    a.options.QY && a.options.QY.call(a);
                    a.UA()
                } else {
                    k = (k - e) / f.time - 1;
                    g = Qe.sqrt(1 - k * k);
                    k = (f.x - b) * g + b;
                    m = (f.y - c) * g + c;
                    a.Qq(k, m);
                    if (a.Ll)
                        a.sB = rf(i)
                }
            }
            ,
            i()) : a.In(400))
        },
        II: function(a) {
            a += "ms";
            this.Nb.style[af] = a;
            this.Zh && (this.EX.style[af] = a);
            this.ri && (this.g0.style[af] = a)
        },
        EH: function(a, b, c, e, f) {
            var b = Qe.abs(a) / b
              , g = b * b / 0.0012;
            0 < a && g > c ? (c += f / (6 / (6.0E-4 * (g / b))),
            b = b * c / g,
            g = c) : 0 > a && g > e && (e += f / (6 / (6.0E-4 * (g / b))),
            b = b * e / g,
            g = e);
            return {
                Fa: g * (0 > a ? -1 : 1),
                time: Qe.round(b / 6.0E-4)
            }
        },
        Oj: function(a) {
            for (var b = -a.offsetLeft, c = -a.offsetTop; a = a.offsetParent; )
                b -= a.offsetLeft,
                c -= a.offsetTop;
            a != this.Qm && (b *= this.scale,
            c *= this.scale);
            return {
                left: b,
                top: c
            }
        },
        yI: function(a, b) {
            var c, e, f;
            f = this.Ve.length - 1;
            c = 0;
            for (e = this.Ve.length; c < e; c++)
                if (a >= this.Ve[c]) {
                    f = c;
                    break
                }
            f == this.OB && (0 < f && 0 > this.XB) && f--;
            a = this.Ve[f];
            e = (e = Qe.abs(a - this.Ve[this.OB])) ? 500 * (Qe.abs(this.x - a) / e) : 0;
            this.OB = f;
            f = this.qf.length - 1;
            for (c = 0; c < f; c++)
                if (b >= this.qf[c]) {
                    f = c;
                    break
                }
            f == this.PB && (0 < f && 0 > this.YB) && f--;
            b = this.qf[f];
            c = (c = Qe.abs(b - this.qf[this.PB])) ? 500 * (Qe.abs(this.y - b) / c) : 0;
            this.PB = f;
            f = Qe.round(Qe.max(e, c)) || 200;
            return {
                x: a,
                y: b,
                time: f
            }
        },
        ga: function(a, b, c) {
            (b || this.Nb).addEventListener(a, this, !!c)
        },
        Yd: function(a, b, c) {
            (b || this.Nb).removeEventListener(a, this, !!c)
        },
        VB: ha(2),
        refresh: function() {
            var a, b, c, e = 0;
            b = 0;
            this.scale < this.options.Pk && (this.scale = this.options.Pk);
            this.Tt = this.Qm.clientWidth || 1;
            this.Rm = this.Qm.clientHeight || 1;
            this.of = -this.options.M_ || 0;
            this.Qx = Qe.round(this.Nb.offsetWidth * this.scale);
            this.hp = Qe.round((this.Nb.offsetHeight + this.of) * this.scale);
            this.fe = this.Tt - this.Qx;
            this.nd = this.Rm - this.hp + this.of;
            this.YB = this.XB = 0;
            this.options.BM && this.options.BM.call(this);
            this.Mo = this.options.Mo && 0 > this.fe;
            this.Nm = this.options.Nm && (!this.options.AU && !this.Mo || this.hp > this.Rm);
            this.Zh = this.Mo && this.options.Zh;
            this.ri = this.Nm && this.options.ri && this.hp > this.Rm;
            a = this.Oj(this.Qm);
            this.qF = -a.left;
            this.rF = -a.top;
            if ("string" == typeof this.options.Ct) {
                this.Ve = [];
                this.qf = [];
                c = this.Nb.querySelectorAll(this.options.Ct);
                a = 0;
                for (b = c.length; a < b; a++)
                    e = this.Oj(c[a]),
                    e.left += this.qF,
                    e.top += this.rF,
                    this.Ve[a] = e.left < this.fe ? this.fe : e.left * this.scale,
                    this.qf[a] = e.top < this.nd ? this.nd : e.top * this.scale
            } else if (this.options.Ct) {
                for (this.Ve = []; e >= this.fe; )
                    this.Ve[b] = e,
                    e -= this.Tt,
                    b++;
                this.fe % this.Tt && (this.Ve[this.Ve.length] = this.fe - this.Ve[this.Ve.length - 1] + this.Ve[this.Ve.length - 1]);
                b = e = 0;
                for (this.qf = []; e >= this.nd; )
                    this.qf[b] = e,
                    e -= this.Rm,
                    b++;
                this.nd % this.Rm && (this.qf[this.qf.length] = this.nd - this.qf[this.qf.length - 1] + this.qf[this.qf.length - 1])
            }
            this.hv("h");
            this.hv("v");
            this.Qk || (this.Nb.style[af] = "0",
            this.In(400))
        },
        scrollTo: function(a, b, c, e) {
            var f = a;
            this.stop();
            f.length || (f = [{
                x: a,
                y: b,
                time: c,
                rZ: e
            }]);
            a = 0;
            for (b = f.length; a < b; a++)
                f[a].rZ && (f[a].x = this.x - f[a].x,
                f[a].y = this.y - f[a].y),
                this.qj.push({
                    x: f[a].x,
                    y: f[a].y,
                    time: f[a].time || 0
                });
            this.UA()
        },
        disable: function() {
            this.stop();
            this.In(0);
            this.enabled = t;
            this.Yd(nf, window);
            this.Yd(of, window);
            this.Yd(pf, window)
        },
        enable: function() {
            this.enabled = p
        },
        stop: function() {
            this.options.qi ? this.Yd(qf) : sf(this.sB);
            this.qj = [];
            this.Ll = this.ih = t
        },
        zoom: function(a, b, c, e) {
            var f = c / this.scale;
            this.options.Nk && (this.Qk = p,
            e = e === l ? 200 : e,
            a = a - this.qF - this.x,
            b = b - this.rF - this.y,
            this.x = a - a * f + this.x,
            this.y = b - b * f + this.y,
            this.scale = c,
            this.refresh(),
            this.x = 0 < this.x ? 0 : this.x < this.fe ? this.fe : this.x,
            this.y = this.y > this.of ? this.of : this.y < this.nd ? this.nd : this.y,
            this.Nb.style[af] = e + "ms",
            this.Nb.style[Ze] = "translate(" + this.x + "px," + this.y + "px) scale(" + c + ")" + tf,
            this.Qk = t)
        }
    };
    function Ye(a) {
        if ("" === Se)
            return a;
        a = a.charAt(0).toUpperCase() + a.substr(1);
        return Se + a
    }
    Re = q;
    function vf(a) {
        this.m = {
            anchor: Xb,
            offset: new P(0,0),
            maxWidth: "100%",
            imageHeight: 80
        };
        var a = a || {}, b;
        for (b in a)
            this.m[b] = a[b];
        this.Al = new dc(q,{
            kf: "api"
        });
        this.Qj = [];
        this.W = q;
        this.dg = {
            height: this.m.imageHeight,
            width: this.m.imageHeight * wf
        };
        this.Qc = this.JA = this.Ol = this.Wc = q
    }
    var xf = [0, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 5, 5, 5, 6, 6, 7, 8, 8, 8, 9, 10]
      , yf = "\u5176\u4ed6 \u6b63\u95e8 \u623f\u578b \u8bbe\u65bd \u6b63\u95e8 \u9910\u996e\u8bbe\u65bd \u5176\u4ed6\u8bbe\u65bd \u6b63\u95e8 \u8bbe\u65bd \u89c2\u5f71\u5385 \u5176\u4ed6\u8bbe\u65bd".split(" ");
    D.zk(function(a) {
        var b = q;
        a.addEventListener("position_changed", function() {
            a.m.visible && a.m.albumsControl === p && (b ? b.Lx(a.Xb()) : (b = new vf(a.m.albumsControlOptions),
            b.xa(a)))
        });
        a.addEventListener("albums_visible_changed", function() {
            a.m.albumsControl === p ? (b ? b.Lx(a.Xb()) : (b = new vf(a.m.albumsControlOptions),
            b.xa(a)),
            b.show()) : b.$()
        });
        a.addEventListener("albums_options_changed", function() {
            b && b.pj(a.m.albumsControlOptions)
        });
        a.addEventListener("visible_changed", function() {
            b && (a.Sw() ? a.m.albumsControl === p && (b.P.style.visibility = "visible") : b.P.style.visibility = "hidden")
        })
    });
    var wf = 1.8;
    I() && (wf = 1);
    z.extend(vf.prototype, {
        pj: function(a) {
            for (var b in a)
                this.m[b] = a[b];
            a = this.m.imageHeight + "px";
            this.rc(this.m.anchor);
            this.P.style.width = isNaN(Number(this.m.maxWidth)) === p ? this.m.maxWidth : this.m.maxWidth + "px";
            this.P.style.height = a;
            this.Vj.style.height = a;
            this.Ih.style.height = a;
            this.dg = {
                height: this.m.imageHeight,
                width: this.m.imageHeight * wf
            };
            this.Uj.style.height = this.dg.height - 6 + "px";
            this.Uj.style.width = this.dg.width - 6 + "px";
            this.Lx(this.W.Xb(), p)
        },
        xa: function(a) {
            this.W = a;
            this.Dr();
            this.wP();
            this.WX();
            this.Lx(a.Xb())
        },
        Dr: function() {
            var a = this.m.imageHeight + "px";
            this.P = O("div");
            var b = this.P.style;
            b.cssText = "background:rgb(37,37,37);background:rgba(37,37,37,0.9);";
            b.position = "absolute";
            b.zIndex = "2000";
            b.width = isNaN(Number(this.m.maxWidth)) === p ? this.m.maxWidth : this.m.maxWidth + "px";
            b.padding = "8px 0";
            b.visibility = "hidden";
            b.height = a;
            this.Vj = O("div");
            b = this.Vj.style;
            b.position = "absolute";
            b.overflow = "hidden";
            b.width = "100%";
            b.height = a;
            this.Ih = O("div");
            b = this.Ih.style;
            b.height = a;
            this.Vj.appendChild(this.Ih);
            this.P.appendChild(this.Vj);
            this.W.P.appendChild(this.P);
            this.Uj = O("div", {
                "class": "pano_photo_item_seleted"
            });
            this.Uj.style.height = this.dg.height - 6 + "px";
            this.Uj.style.width = this.dg.width - 6 + "px";
            this.rc(this.m.anchor)
        },
        ZG: function(a) {
            for (var b = this.Qj, c = b.length - 1; 0 <= c; c--)
                if (b[c].panoId == a)
                    return c;
            return -1
        },
        Lx: function(a, b) {
            if (b || !this.Qj[this.Wc] || !(this.Qj[this.Wc].panoId == a && 3 !== this.Qj[this.Wc].recoType)) {
                var c = this
                  , e = this.ZG(a);
                !b && -1 !== e && this.Qj[e] && 3 !== this.Qj[e].recoType ? this.kp(e) : this.kX(function(a) {
                    for (var b = {}, e, k, m = t, n = [], o = 0, s = a.length; o < s; o++)
                        e = a[o].catlog,
                        k = a[o].floor,
                        l !== e && ("" === e && l !== k ? (m = p,
                        b[k] || (b[k] = []),
                        b[k].push(a[o])) : (b[xf[e]] || (b[xf[e]] = []),
                        b[xf[e]].push(a[o])));
                    for (var v in b)
                        m ? n.push({
                            data: v + "F",
                            index: v
                        }) : n.push({
                            data: yf[v],
                            index: v
                        });
                    c.sG = b;
                    c.Ei = n;
                    c.xl(a);
                    0 == a.length ? c.$() : c.show()
                })
            }
        },
        nV: function() {
            if (!this.Bi) {
                var a = this.ZW(this.Ei)
                  , b = O("div");
                b.style.cssText = ["width:" + 134 * this.Ei.length + "px;", "overflow:hidden;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;"].join("");
                b.innerHTML = a;
                a = O("div");
                a.appendChild(b);
                a.style.cssText = "position:absolute;top:-25px;background:rgb(37,37,37);background:rgba(37,37,37,0.9);border-bottom:1px solid #4e596a;width:100%;line-height:25px;height:25px;overflow:scroll;outline:0";
                new uf(a,{
                    io: t,
                    qx: p,
                    Zh: t,
                    ri: t,
                    Nm: t,
                    VD: p,
                    Zv: p,
                    Uw: p
                });
                this.P.appendChild(a);
                for (var c = this, e = b.getElementsByTagName("span"), f = 0, g = e.length; f < g; f++)
                    b = e[f],
                    z.V(b, "click", function() {
                        if (this.getAttribute("dataindex")) {
                            c.xl(c.sG[this.getAttribute("dataindex")]);
                            for (var a = 0, b = e.length; a < b; a++)
                                e[a].style.color = "#FFFFFF";
                            this.style.color = "#3383FF"
                        }
                    });
                this.Bi = a
            }
        },
        kV: function() {
            if (this.Bi)
                a = this.CK(this.Ei),
                this.MP.innerHTML = a;
            else {
                var a = this.CK(this.Ei)
                  , b = O("ul")
                  , c = this;
                b.style.cssText = "list-style: none;padding:0px;margin:0px;display:block;width:60px;position:absolute;top:7px";
                b.innerHTML = a;
                z.V(b, "click", function(a) {
                    if (a = (a.srcElement || a.target).getAttribute("dataindex")) {
                        c.xl(c.sG[a]);
                        for (var e = b.getElementsByTagName("li"), f = 0, g = e.length; f < g; f++)
                            e[f].childNodes[0].getAttribute("dataindex") === a ? z.U.eb(e[f], "pano_catlogLiActive") : z.U.qc(e[f], "pano_catlogLiActive")
                    }
                });
                var a = O("div")
                  , e = O("a")
                  , f = O("span")
                  , g = O("a")
                  , i = O("span")
                  , k = ["background:url(" + H.sa + "panorama/catlog_icon.png) no-repeat;", "display:block;width:10px;height:7px;margin:0 auto;"].join("");
                f.style.cssText = k + "background-position:-18px 0;";
                e.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
                i.style.cssText = k + "background-position:0 0;";
                g.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
                g.style.top = this.m.imageHeight - 7 + "px";
                a.style.cssText = "position:absolute;top:0px;left:0px;width:60px;";
                e.appendChild(f);
                g.appendChild(i);
                z.V(e, "mouseover", function() {
                    var a = parseInt(b.style.top, 10);
                    7 !== a && (f.style.backgroundPosition = "-27px 0");
                    new ub({
                        Gc: 60,
                        bc: vb.Wr,
                        duration: 300,
                        za: function(c) {
                            b.style.top = a + (7 - a) * c + "px"
                        }
                    })
                });
                z.V(e, "mouseout", function() {
                    f.style.backgroundPosition = "-18px 0"
                });
                z.V(g, "mouseover", function() {
                    var a = parseInt(b.style.top, 10)
                      , e = c.m.imageHeight - 14;
                    if (!(parseInt(b.offsetHeight, 10) < e)) {
                        var f = e - parseInt(b.offsetHeight, 10) + 7;
                        f !== a && (i.style.backgroundPosition = "-9px 0");
                        new ub({
                            Gc: 60,
                            bc: vb.Wr,
                            duration: 300,
                            za: function(c) {
                                b.style.top = a + (f - a) * c + "px"
                            }
                        })
                    }
                });
                z.V(g, "mouseout", function() {
                    i.style.backgroundPosition = "0 0"
                });
                a.appendChild(e);
                a.appendChild(g);
                e = O("div");
                e.style.cssText = ["position:absolute;z-index:2001;left:20px;", "height:" + this.m.imageHeight + "px;", "width:62px;overflow:hidden;background:rgb(37,37,37);background:rgba(37,37,37,0.9);"].join("");
                e.appendChild(b);
                e.appendChild(a);
                this.Bi = e;
                this.MP = b;
                this.P.appendChild(e)
            }
        },
        lV: function() {
            if (this.Ei && !(0 >= this.Ei.length)) {
                var a = O("div");
                a.innerHTML = this.lz;
                a.style.cssText = "position:absolute;background:#252525";
                this.P.appendChild(a);
                this.$r = a;
                this.Qc.fg.style.left = this.dg.width + 8 + "px";
                this.Bi && (this.Bi.style.left = parseInt(this.Bi.style.left, 10) + this.dg.width + 8 + "px");
                var b = this;
                z.V(a, "click", function() {
                    b.W.Ac(b.gW)
                })
            }
        },
        xl: function(a) {
            this.Qj = a;
            this.m.showCatalog && (0 < this.Ei.length ? (Wa() ? this.kV() : this.nV(),
            this.Qc.offsetLeft = 60) : (this.$r && (this.P.removeChild(this.$r),
            this.$r = q,
            this.Qc.fg.style.left = "0px"),
            this.Bi && (this.P.removeChild(this.Bi),
            this.Bi = q),
            this.Qc.offsetLeft = 0));
            var b = this.SW(a);
            Wa() && (this.Ei && 0 < this.Ei.length && this.m.showExit && this.lz) && (this.Qc.offsetLeft += this.dg.width + 8,
            this.$r ? this.$r.innerHTML = this.lz : this.lV());
            this.Ih.innerHTML = b;
            this.Ih.style.width = (this.dg.width + 8) * a.length + 8 + "px";
            a = this.P.offsetWidth;
            b = this.Ih.offsetWidth;
            this.Qc.gs && (b += this.Qc.gs());
            b < a - 2 * this.Qc.ui - this.Qc.offsetLeft ? this.P.style.width = b + this.Qc.offsetLeft + "px" : (this.P.style.width = isNaN(Number(this.m.maxWidth)) === p ? this.m.maxWidth : this.m.maxWidth + "px",
            b < this.P.offsetWidth - 2 * this.Qc.ui - this.Qc.offsetLeft && (this.P.style.width = b + this.Qc.offsetLeft + "px"));
            this.Qc.refresh();
            this.JA = this.Ih.children;
            this.Ih.appendChild(this.Uj);
            this.Uj.style.left = "-100000px";
            a = this.ZG(this.W.Xb(), this.x1);
            -1 !== a && this.kp(a)
        },
        ZW: function(a) {
            for (var b = "", c, e = 0, f = a.length; e < f; e++)
                c = '<div style="color:white;opacity:0.5;margin:0 35px;float:left;text-align: center"><span  dataIndex="' + a[e].index + '">' + a[e].data + "</span></div>",
                b += c;
            return b
        },
        CK: function(a) {
            for (var b = "", c, e = 0, f = a.length; e < f; e++)
                c = '<li class="pano_catlogLi"><span style="display:block;width:100%;" dataIndex="' + a[e].index + '">' + a[e].data + "</span></li>",
                b += c;
            return b
        },
        SW: function(a) {
            for (var b, c, e, f, g = [], i = this.dg.height, k = this.dg.width, m = 0; m < a.length; m++)
                b = a[m],
                recoType = b.recoType,
                e = b.panoId,
                f = b.name,
                c = b.heading,
                b = b.pitch,
                c = Oe.PK(e, c, b, 198, 108),
                b = '<a href="javascript:void(0);" class="pano_photo_item" data-index="' + m + '"><img style="width:' + (k - 2) + "px;height:" + (i - 2) + 'px;" data-index="' + m + '" name="' + f + '" src="' + c + '" alt="' + f + '"/><span class="pano_photo_decs" data-index="' + m + '" style="width:' + k + "px;font-size:" + Math.floor(i / 6) + "px; line-height:" + Math.floor(i / 6) + 'px;"><em class="pano_poi_' + recoType + '"></em>' + f + "</span></a>",
                3 === recoType ? Wa() ? (this.lz = b,
                this.gW = e,
                a.splice(m, 1),
                m--) : (b = '<a href="javascript:void(0);" class="pano_photo_item" data-index="' + m + '"><img style="width:' + (k - 2) + "px;height:" + (i - 2) + 'px;" data-index="' + m + '" name="' + f + '" src="' + c + '" alt="' + f + '"/><div style="background:rgba(37,37,37,0.5);position:absolute;top:0px;left:0px;width:100%;height:100%;text-align: center;line-height:' + this.m.imageHeight + 'px;" data-index="' + m + '"><img src="' + H.sa + 'panorama/photoexit.png" style="border:none;vertical-align:middle;" data-index="' + m + '" alt=""/></div></a>',
                g.push(b)) : g.push(b);
            return g.join("")
        },
        kX: function(a) {
            var b = this
              , c = this.W.Xb();
            c && this.Al.Qw(c, function(e) {
                b.W.Xb() === c && a(e)
            })
        },
        rc: function(a) {
            if (!Ya(a) || isNaN(a) || a < Vb || 3 < a)
                a = this.defaultAnchor;
            var b = this.P
              , c = this.m.offset.width
              , e = this.m.offset.height;
            b.style.left = b.style.top = b.style.right = b.style.bottom = "auto";
            switch (a) {
            case Vb:
                b.style.top = e + "px";
                b.style.left = c + "px";
                break;
            case Wb:
                b.style.top = e + "px";
                b.style.right = c + "px";
                break;
            case Xb:
                b.style.bottom = e + "px";
                b.style.left = c + "px";
                break;
            case 3:
                b.style.bottom = e + "px",
                b.style.right = c + "px"
            }
        },
        wP: function() {
            this.uP()
        },
        uP: function() {
            var a = this;
            z.V(this.P, "touchstart", function(a) {
                a.stopPropagation()
            });
            z.V(this.Vj, "click", function(b) {
                if ((b = (b.srcElement || b.target).getAttribute("data-index")) && b != a.Wc)
                    a.kp(b),
                    a.W.Ac(a.Qj[b].panoId)
            });
            z.V(this.Ih, "mouseover", function(b) {
                b = (b.srcElement || b.target).getAttribute("data-index");
                b !== q && a.FJ(b, p)
            });
            this.W.addEventListener("size_changed", function() {
                isNaN(Number(a.m.maxWidth)) && a.pj({
                    maxWidth: a.m.maxWidth
                })
            })
        },
        kp: function(a) {
            this.Uj.style.left = this.JA[a].offsetLeft + 8 + "px";
            this.Uj.setAttribute("data-index", this.JA[a].getAttribute("data-index"));
            this.Wc = a;
            this.FJ(a)
        },
        FJ: function(a, b) {
            var c = this.dg.width + 8
              , e = 0;
            this.Qc.gs && (e = this.Qc.gs() / 2);
            var f = this.Vj.offsetWidth - 2 * e
              , g = this.Ih.offsetLeft || this.Qc.x
              , g = g - e
              , i = -a * c;
            i > g && this.Qc.scrollTo(i + e);
            c = i - c;
            g -= f;
            c < g && (!b || b && 8 < i - g) && this.Qc.scrollTo(c + f + e)
        },
        WX: function() {
            this.Qc = I() ? new uf(this.Vj,{
                io: t,
                qx: p,
                Zh: t,
                ri: t,
                Nm: t,
                VD: p,
                Zv: p,
                Uw: p
            }) : new zf(this.Vj)
        },
        $: function() {
            this.P.style.visibility = "hidden"
        },
        show: function() {
            this.P.style.visibility = "visible"
        }
    });
    function zf(a) {
        this.P = a;
        this.Sg = a.children[0];
        this.gr = q;
        this.ui = 20;
        this.offsetLeft = 0;
        this.xa()
    }
    zf.prototype = {
        xa: function() {
            this.Sg.style.position = "relative";
            this.refresh();
            this.Dr();
            this.uB()
        },
        refresh: function() {
            this.En = this.P.offsetWidth - this.gs();
            this.gA = -(this.Sg.offsetWidth - this.En - this.ui);
            this.Tu = this.ui + this.offsetLeft;
            this.Sg.style.left = this.Tu + "px";
            this.Sg.children[0] && (this.gr = this.Sg.children[0].offsetWidth);
            this.fg && (this.fg.children[0].style.marginTop = this.Xq.children[0].style.marginTop = this.fg.offsetHeight / 2 - this.fg.children[0].offsetHeight / 2 + "px")
        },
        gs: function() {
            return 2 * this.ui
        },
        Dr: function() {
            this.iv = O("div");
            this.iv.innerHTML = '<a class="pano_photo_arrow_l" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0a\u4e00\u9875"><span class="pano_arrow_l"></span></a><a class="pano_photo_arrow_r" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0b\u4e00\u9875"><span class="pano_arrow_r"></span></a>';
            this.fg = this.iv.children[0];
            this.Xq = this.iv.children[1];
            this.P.appendChild(this.iv);
            this.fg.children[0].style.marginTop = this.Xq.children[0].style.marginTop = this.fg.offsetHeight / 2 - this.fg.children[0].offsetHeight / 2 + "px"
        },
        uB: function() {
            var a = this;
            z.V(this.fg, "click", function() {
                a.scrollTo(a.Sg.offsetLeft + a.En)
            });
            z.V(this.Xq, "click", function() {
                a.scrollTo(a.Sg.offsetLeft - a.En)
            })
        },
        ST: function() {
            z.U.qc(this.fg, "pano_arrow_disable");
            z.U.qc(this.Xq, "pano_arrow_disable");
            var a = this.Sg.offsetLeft;
            a >= this.Tu && z.U.eb(this.fg, "pano_arrow_disable");
            a - this.En <= this.gA && z.U.eb(this.Xq, "pano_arrow_disable")
        },
        scrollTo: function(a) {
            a = a < this.Sg.offsetLeft ? Math.ceil((a - this.ui - this.En) / this.gr) * this.gr + this.En + this.ui - 8 : Math.ceil((a - this.ui) / this.gr) * this.gr + this.ui;
            a < this.gA ? a = this.gA : a > this.Tu && (a = this.Tu);
            var b = this.Sg.offsetLeft
              , c = this;
            new ub({
                Gc: 60,
                bc: vb.Wr,
                duration: 300,
                za: function(e) {
                    c.Sg.style.left = b + (a - b) * e + "px"
                },
                finish: function() {
                    c.ST()
                }
            })
        }
    };
    D.Map = Na;
    D.Hotspot = ib;
    D.MapType = Cd;
    D.Point = J;
    D.Pixel = R;
    D.Size = P;
    D.Bounds = fb;
    D.TileLayer = Lc;
    D.Projection = ic;
    D.MercatorProjection = S;
    D.PerspectiveProjection = hb;
    D.Copyright = function(a, b, c) {
        this.id = a;
        this.fb = b;
        this.content = c
    }
    ;
    D.Overlay = lc;
    D.Label = tc;
    D.GroundOverlay = uc;
    D.PointCollection = yc;
    D.Marker = W;
    D.CanvasLayer = Bc;
    D.Icon = pc;
    D.IconSequence = rc;
    D.Symbol = qc;
    D.Polyline = Fc;
    D.Polygon = Ec;
    D.InfoWindow = sc;
    D.Circle = Gc;
    D.Control = Tb;
    D.NavigationControl = kb;
    D.GeolocationControl = Yb;
    D.OverviewMapControl = mb;
    D.CopyrightControl = Zb;
    D.ScaleControl = lb;
    D.MapTypeControl = nb;
    D.CityListControl = $b;
    D.PanoramaControl = bc;
    D.TrafficLayer = Tc;
    D.CustomLayer = ob;
    D.ContextMenu = ec;
    D.MenuItem = hc;
    D.LocalSearch = db;
    D.TransitRoute = de;
    D.DrivingRoute = ge;
    D.WalkingRoute = he;
    D.RidingRoute = ie;
    D.Autocomplete = we;
    D.RouteSearch = ne;
    D.Geocoder = oe;
    D.LocalCity = qe;
    D.Geolocation = Geolocation;
    D.Convertor = kc;
    D.BusLineSearch = ve;
    D.Boundary = ue;
    D.Panorama = Qa;
    D.PanoramaLabel = De;
    D.PanoramaService = dc;
    D.PanoramaCoverageLayer = cc;
    D.PanoramaFlashInterface = Me;
    function V(a, b) {
        for (var c in b)
            a[c] = b[c]
    }
    V(window, {
        BMap: D,
        _jsload2: function(a, b) {
            ja.by.jY && ja.by.set(a, b);
            K.MU(a, b)
        },
        BMAP_API_VERSION: "2.0"
    });
    var Af = Na.prototype;
    V(Af, {
        getBounds: Af.se,
        getCenter: Af.Bb,
        getMapType: Af.va,
        getSize: Af.Cb,
        setSize: Af.Ae,
        getViewport: Af.ws,
        getZoom: Af.ja,
        centerAndZoom: Af.Dd,
        panTo: Af.ki,
        panBy: Af.yg,
        setCenter: Af.rf,
        setCurrentCity: Af.FE,
        setMapType: Af.Bg,
        setViewport: Af.oh,
        setZoom: Af.Pc,
        highResolutionEnabled: Af.$w,
        zoomTo: Af.Dg,
        zoomIn: Af.sF,
        zoomOut: Af.tF,
        addHotspot: Af.jB,
        removeHotspot: Af.tZ,
        clearHotspots: Af.cw,
        checkResize: Af.PU,
        addControl: Af.tr,
        removeControl: Af.XM,
        getContainer: Af.Qa,
        addContextMenu: Af.Yn,
        removeContextMenu: Af.bp,
        addOverlay: Af.Oa,
        removeOverlay: Af.Sb,
        clearOverlays: Af.CJ,
        openInfoWindow: Af.Zc,
        closeInfoWindow: Af.Vc,
        pointToOverlayPixel: Af.We,
        overlayPixelToPoint: Af.IM,
        getInfoWindow: Af.dh,
        getOverlays: Af.Nw,
        getPanes: function() {
            return {
                floatPane: this.Wd.IC,
                markerMouseTarget: this.Wd.YD,
                floatShadow: this.Wd.tK,
                labelPane: this.Wd.RD,
                markerPane: this.Wd.gM,
                markerShadow: this.Wd.hM,
                mapPane: this.Wd.Qs,
                vertexPane: this.Wd.oO
            }
        },
        addTileLayer: Af.Me,
        removeTileLayer: Af.Wf,
        pixelToPoint: Af.Gb,
        pointToPixel: Af.Rb,
        setFeatureStyle: Af.h5,
        selectBaseElement: Af.a5,
        setMapStyle: Af.mt,
        enable3DBuilding: Af.to,
        disable3DBuilding: Af.BV,
        getPanorama: Af.qs,
        initIndoorLayer: Af.XX,
        setNormalMapDisplay: Af.Sx,
        setMapStyleV2: Af.YZ,
        setBMapCopyrightOffset: Af.EE,
        getVectorContainer: Af.zX
    });
    var Bf = Cd.prototype;
    V(Bf, {
        getTileLayer: Bf.tX,
        getMinZoom: Bf.lf,
        getMaxZoom: Bf.Re,
        getProjection: Bf.qk,
        getTextColor: Bf.hm,
        getTips: Bf.vs
    });
    V(window, {
        BMAP_NORMAL_MAP: Oa,
        BMAP_PERSPECTIVE_MAP: Ra,
        BMAP_SATELLITE_MAP: $a,
        BMAP_HYBRID_MAP: Ua
    });
    var Cf = S.prototype;
    V(Cf, {
        lngLatToPoint: Cf.vg,
        pointToLngLat: Cf.oj
    });
    var Df = hb.prototype;
    V(Df, {
        lngLatToPoint: Df.vg,
        pointToLngLat: Df.oj
    });
    var Ef = fb.prototype;
    V(Ef, {
        equals: Ef.Wb,
        containsPoint: Ef.Br,
        containsBounds: Ef.aV,
        intersects: Ef.Es,
        extend: Ef.extend,
        getCenter: Ef.Bb,
        isEmpty: Ef.kj,
        getSouthWest: Ef.Te,
        getNorthEast: Ef.Of,
        toSpan: Ef.dF
    });
    var Ff = lc.prototype;
    V(Ff, {
        isVisible: Ff.Nc,
        show: Ff.show,
        hide: Ff.$
    });
    lc.getZIndex = lc.sk;
    var Gf = gb.prototype;
    V(Gf, {
        openInfoWindow: Gf.Zc,
        closeInfoWindow: Gf.Vc,
        enableMassClear: Gf.Yi,
        disableMassClear: Gf.DV,
        show: Gf.show,
        hide: Gf.$,
        getMap: Gf.Jw,
        addContextMenu: Gf.Yn,
        removeContextMenu: Gf.bp
    });
    var Hf = W.prototype;
    V(Hf, {
        setIcon: Hf.Tb,
        getIcon: Hf.Do,
        setPosition: Hf.ua,
        getPosition: Hf.ka,
        setOffset: Hf.Kd,
        getOffset: Hf.aj,
        getLabel: Hf.bD,
        setLabel: Hf.Em,
        setTitle: Hf.Bc,
        setTop: Hf.oi,
        enableDragging: Hf.Vb,
        disableDragging: Hf.$B,
        setZIndex: Hf.qp,
        getMap: Hf.Jw,
        setAnimation: Hf.Dm,
        setShadow: Hf.Vx,
        hide: Hf.$,
        setRotation: Hf.mp,
        getRotation: Hf.TK
    });
    V(window, {
        BMAP_ANIMATION_DROP: 1,
        BMAP_ANIMATION_BOUNCE: 2
    });
    var If = tc.prototype;
    V(If, {
        setStyle: If.Ld,
        setStyles: If.ni,
        setContent: If.ad,
        setPosition: If.ua,
        getPosition: If.ka,
        setOffset: If.Kd,
        getOffset: If.aj,
        setTitle: If.Bc,
        setZIndex: If.qp,
        getMap: If.Jw,
        getContent: If.lk
    });
    var Jf = pc.prototype;
    V(Jf, {
        setImageUrl: Jf.nN,
        setSize: Jf.Ae,
        setAnchor: Jf.rc,
        setImageOffset: Jf.lt,
        setImageSize: Jf.SZ,
        setInfoWindowAnchor: Jf.VZ,
        setPrintImageUrl: Jf.g_
    });
    var Kf = sc.prototype;
    V(Kf, {
        redraw: Kf.he,
        setTitle: Kf.Bc,
        setContent: Kf.ad,
        getContent: Kf.lk,
        getPosition: Kf.ka,
        enableMaximize: Kf.$g,
        disableMaximize: Kf.uw,
        isOpen: Kf.Za,
        setMaxContent: Kf.nt,
        maximize: Kf.px,
        enableAutoPan: Kf.Xr
    });
    var Lf = nc.prototype;
    V(Lf, {
        getPath: Lf.Se,
        setPath: Lf.ie,
        setPositionAt: Lf.Gm,
        getStrokeColor: Lf.qX,
        setStrokeWeight: Lf.pp,
        getStrokeWeight: Lf.WK,
        setStrokeOpacity: Lf.np,
        getStrokeOpacity: Lf.rX,
        setFillOpacity: Lf.kt,
        getFillOpacity: Lf.LW,
        setStrokeStyle: Lf.op,
        getStrokeStyle: Lf.VK,
        getFillColor: Lf.KW,
        getBounds: Lf.se,
        enableEditing: Lf.hf,
        disableEditing: Lf.CV,
        getEditing: Lf.HW,
        getGeodesicPath: Lf.OW
    });
    var Mf = Gc.prototype;
    V(Mf, {
        setCenter: Mf.rf,
        getCenter: Mf.Bb,
        getRadius: Mf.RK,
        setRadius: Mf.sf
    });
    var Nf = Ec.prototype;
    V(Nf, {
        getPath: Nf.Se,
        setPath: Nf.ie,
        setPositionAt: Nf.Gm
    });
    var Of = ib.prototype;
    V(Of, {
        getPosition: Of.ka,
        setPosition: Of.ua,
        getText: Of.mD,
        setText: Of.wt
    });
    J.prototype.equals = J.prototype.Wb;
    R.prototype.equals = R.prototype.Wb;
    P.prototype.equals = P.prototype.Wb;
    V(window, {
        BMAP_ANCHOR_TOP_LEFT: Vb,
        BMAP_ANCHOR_TOP_RIGHT: Wb,
        BMAP_ANCHOR_BOTTOM_LEFT: Xb,
        BMAP_ANCHOR_BOTTOM_RIGHT: 3
    });
    var Pf = Tb.prototype;
    V(Pf, {
        setAnchor: Pf.rc,
        getAnchor: Pf.PC,
        setOffset: Pf.Kd,
        getOffset: Pf.aj,
        show: Pf.show,
        hide: Pf.$,
        isVisible: Pf.Nc,
        toString: Pf.toString
    });
    var Qf = kb.prototype;
    V(Qf, {
        getType: Qf.Ko,
        setType: Qf.Hm
    });
    V(window, {
        BMAP_NAVIGATION_CONTROL_LARGE: 0,
        BMAP_NAVIGATION_CONTROL_SMALL: 1,
        BMAP_NAVIGATION_CONTROL_PAN: 2,
        BMAP_NAVIGATION_CONTROL_ZOOM: 3
    });
    var Rf = mb.prototype;
    V(Rf, {
        changeView: Rf.pe,
        setSize: Rf.Ae,
        getSize: Rf.Cb
    });
    var Sf = lb.prototype;
    V(Sf, {
        getUnit: Sf.yX,
        setUnit: Sf.ME
    });
    V(window, {
        BMAP_UNIT_METRIC: "metric",
        BMAP_UNIT_IMPERIAL: "us"
    });
    var Tf = Zb.prototype;
    V(Tf, {
        addCopyright: Tf.Ov,
        removeCopyright: Tf.sE,
        getCopyright: Tf.am,
        getCopyrightCollection: Tf.WC
    });
    V(window, {
        BMAP_MAPTYPE_CONTROL_HORIZONTAL: ac,
        BMAP_MAPTYPE_CONTROL_DROPDOWN: 1,
        BMAP_MAPTYPE_CONTROL_MAP: 2
    });
    var Uf = Lc.prototype;
    V(Uf, {
        getMapType: Uf.va,
        getCopyright: Uf.am,
        isTransparentPng: Uf.Ls
    });
    var Vf = ec.prototype;
    V(Vf, {
        addItem: Vf.Pv,
        addSeparator: Vf.mB,
        removeSeparator: Vf.uE
    });
    var Wf = hc.prototype;
    V(Wf, {
        setText: Wf.wt
    });
    var Xf = Y.prototype;
    V(Xf, {
        getStatus: Xf.fm,
        setSearchCompleteCallback: Xf.vt,
        getPageCapacity: Xf.mf,
        setPageCapacity: Xf.lp,
        setLocation: Xf.Fm,
        disableFirstResultSelection: Xf.aC,
        enableFirstResultSelection: Xf.uC,
        gotoPage: Xf.im,
        searchNearby: Xf.ip,
        searchInBounds: Xf.Cm,
        search: Xf.search
    });
    V(window, {
        BMAP_STATUS_SUCCESS: 0,
        BMAP_STATUS_CITY_LIST: 1,
        BMAP_STATUS_UNKNOWN_LOCATION: Md,
        BMAP_STATUS_UNKNOWN_ROUTE: 3,
        BMAP_STATUS_INVALID_KEY: 4,
        BMAP_STATUS_INVALID_REQUEST: 5,
        BMAP_STATUS_PERMISSION_DENIED: Nd,
        BMAP_STATUS_SERVICE_UNAVAILABLE: 7,
        BMAP_STATUS_TIMEOUT: Od
    });
    V(window, {
        BMAP_POI_TYPE_NORMAL: 0,
        BMAP_POI_TYPE_BUSSTOP: 1,
        BMAP_POI_TYPE_BUSLINE: 2,
        BMAP_POI_TYPE_SUBSTOP: 3,
        BMAP_POI_TYPE_SUBLINE: 4
    });
    V(window, {
        BMAP_TRANSIT_POLICY_RECOMMEND: 0,
        BMAP_TRANSIT_POLICY_LEAST_TIME: 4,
        BMAP_TRANSIT_POLICY_LEAST_TRANSFER: 1,
        BMAP_TRANSIT_POLICY_LEAST_WALKING: 2,
        BMAP_TRANSIT_POLICY_AVOID_SUBWAYS: 3,
        BMAP_TRANSIT_POLICY_FIRST_SUBWAYS: 5,
        BMAP_LINE_TYPE_BUS: 0,
        BMAP_LINE_TYPE_SUBWAY: 1,
        BMAP_LINE_TYPE_FERRY: 2,
        BMAP_LINE_TYPE_TRAIN: 3,
        BMAP_LINE_TYPE_AIRPLANE: 4,
        BMAP_LINE_TYPE_COACH: 5
    });
    V(window, {
        BMAP_TRANSIT_TYPE_POLICY_TRAIN: 0,
        BMAP_TRANSIT_TYPE_POLICY_AIRPLANE: 1,
        BMAP_TRANSIT_TYPE_POLICY_COACH: 2
    });
    V(window, {
        BMAP_INTERCITY_POLICY_LEAST_TIME: 0,
        BMAP_INTERCITY_POLICY_EARLY_START: 1,
        BMAP_INTERCITY_POLICY_CHEAP_PRICE: 2
    });
    V(window, {
        BMAP_TRANSIT_TYPE_IN_CITY: 0,
        BMAP_TRANSIT_TYPE_CROSS_CITY: 1
    });
    V(window, {
        BMAP_TRANSIT_PLAN_TYPE_ROUTE: 0,
        BMAP_TRANSIT_PLAN_TYPE_LINE: 1
    });
    var Yf = ce.prototype;
    V(Yf, {
        clearResults: Yf.Pe
    });
    ee = de.prototype;
    V(ee, {
        setPolicy: ee.ut,
        toString: ee.toString,
        setPageCapacity: ee.lp,
        setIntercityPolicy: ee.qN,
        setTransitTypePolicy: ee.AN
    });
    V(window, {
        BMAP_DRIVING_POLICY_DEFAULT: 0,
        BMAP_DRIVING_POLICY_AVOID_HIGHWAYS: 3,
        BMAP_DRIVING_POLICY_AVOID_CONGESTION: 5,
        BMAP_DRIVING_POLICY_FIRST_HIGHWAYS: 4
    });
    V(window, {
        BMAP_MODE_DRIVING: "driving",
        BMAP_MODE_TRANSIT: "transit",
        BMAP_MODE_WALKING: "walking",
        BMAP_MODE_NAVIGATION: "navigation"
    });
    var Zf = ne.prototype;
    V(Zf, {
        routeCall: Zf.iN
    });
    V(window, {
        BMAP_HIGHLIGHT_STEP: 1,
        BMAP_HIGHLIGHT_ROUTE: 2
    });
    V(window, {
        BMAP_ROUTE_TYPE_DRIVING: Qd,
        BMAP_ROUTE_TYPE_WALKING: Pd,
        BMAP_ROUTE_TYPE_RIDING: Rd
    });
    V(window, {
        BMAP_ROUTE_STATUS_NORMAL: Sd,
        BMAP_ROUTE_STATUS_EMPTY: 1,
        BMAP_ROUTE_STATUS_ADDRESS: 2
    });
    var $f = ge.prototype;
    V($f, {
        setPolicy: $f.ut
    });
    var ag = we.prototype;
    V(ag, {
        show: ag.show,
        hide: ag.$,
        setTypes: ag.LE,
        setLocation: ag.Fm,
        search: ag.search,
        setInputValue: ag.Rx
    });
    V(ob.prototype, {});
    var cg = ue.prototype;
    V(cg, {
        get: cg.get
    });
    V(cc.prototype, {});
    V(window, {
        BMAP_POINT_DENSITY_HIGH: 200,
        BMAP_POINT_DENSITY_MEDIUM: Wc,
        BMAP_POINT_DENSITY_LOW: 50
    });
    V(window, {
        BMAP_POINT_SHAPE_STAR: 1,
        BMAP_POINT_SHAPE_WATERDROP: 2,
        BMAP_POINT_SHAPE_CIRCLE: vc,
        BMAP_POINT_SHAPE_SQUARE: 4,
        BMAP_POINT_SHAPE_RHOMBUS: 5
    });
    V(window, {
        BMAP_POINT_SIZE_TINY: 1,
        BMAP_POINT_SIZE_SMALLER: 2,
        BMAP_POINT_SIZE_SMALL: 3,
        BMAP_POINT_SIZE_NORMAL: wc,
        BMAP_POINT_SIZE_BIG: 5,
        BMAP_POINT_SIZE_BIGGER: 6,
        BMAP_POINT_SIZE_HUGE: 7
    });
    V(window, {
        BMap_Symbol_SHAPE_CAMERA: 11,
        BMap_Symbol_SHAPE_WARNING: 12,
        BMap_Symbol_SHAPE_SMILE: 13,
        BMap_Symbol_SHAPE_CLOCK: 14,
        BMap_Symbol_SHAPE_POINT: 9,
        BMap_Symbol_SHAPE_PLANE: 10,
        BMap_Symbol_SHAPE_CIRCLE: 1,
        BMap_Symbol_SHAPE_RECTANGLE: 2,
        BMap_Symbol_SHAPE_RHOMBUS: 3,
        BMap_Symbol_SHAPE_STAR: 4,
        BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW: 5,
        BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW: 6,
        BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW: 7,
        BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW: 8
    });
    V(window, {
        BMAP_CONTEXT_MENU_ICON_ZOOMIN: fc,
        BMAP_CONTEXT_MENU_ICON_ZOOMOUT: gc
    });
    V(window, {
        BMAP_SYS_DRAWER: Ma,
        BMAP_SVG_DRAWER: 1,
        BMAP_VML_DRAWER: 2,
        BMAP_CANVAS_DRAWER: 3,
        BMAP_SVG_DRAWER_FIRST: 4
    });
    D.iU();
    D.l0();
}
)()