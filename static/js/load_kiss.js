var KISSY = function (a) {
  var f = this, j, l = 0;
  return j = {
    __BUILD_TIME: "20131125184002",
    Env: {host: f},
    Config: {debug: "", fns: {}},
    version: "1.32",
    config: function (k, c) {
      var i, f, b = this, e, o = j.Config, h = o.fns;
      j.isObject(k) ? j.each(k, function (a, d) {
        (e = h[d]) ? e.call(b, a) : o[d] = a
      }) : (i = h[k], c === a ? f = i ? i.call(b) : o[k] : i ? f = i.call(b, c) : o[k] = c);
      return f
    },
    log: function (k, c, i) {
      if (j.Config.debug && (i && (k = i + ": " + k), f.console !== a && console.log))console[c && console[c] ? c : "log"](k)
    },
    error: function (a) {
      if (j.Config.debug)throw a instanceof Error ? a : Error(a);
    },
    guid: function (a) {
      return (a || "") + l++
    }
  }
}();
(function (a, f) {
  function j() {
  }

  function l(a, g) {
    var d;
    b ? d = b(a) : (j.prototype = a, d = new j);
    d.constructor = g;
    return d
  }

  function k(e, g, d, m, p, r) {
    if (!g || !e)return e;
    var b, o, i, j;
    g[c] = e;
    r.push(g);
    i = a.keys(g);
    j = i.length;
    for (b = 0; b < j; b++)if (o = i[b], o != c) {
      var l = e, B = g, I = d, y = m, A = p, x = r;
      if (I || !(o in l) || A) {
        var u = l[o], t = B[o];
        if (u === t)u === f && (l[o] = u); else if (y && (t = y.call(B, o, t)), A && t && (a.isArray(t) || a.isPlainObject(t)))t[c] ? l[o] = t[c] : (B = u && (a.isArray(u) || a.isPlainObject(u)) ? u : a.isArray(t) ? [] : {}, l[o] = B, k(B, t, I, y, n, x)); else if (t !==
          f && (I || !(o in l)))l[o] = t
      }
    }
    return e
  }

  var c = "__MIX_CIRCULAR", i = this, n = !0, b = Object.create, e = !{toString: 1}.propertyIsEnumerable("toString"), o = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toString,toLocaleString,valueOf".split(",");
  (function (a, g) {
    for (var d in g)a[d] = g[d]
  })(a, {
    stamp: function (e, g, d) {
      var d = d || "__~ks_stamped", m = e[d];
      if (!m && !g)try {
        m = e[d] = a.guid(d)
      } catch (p) {
        m = f
      }
      return m
    }, keys: function (a) {
      var g = [], d, m;
      for (d in a)g.push(d);
      if (e)for (m = o.length - 1; 0 <= m; m--)d = o[m], a.hasOwnProperty(d) &&
      g.push(d);
      return g
    }, mix: function (e, g, d, m, p) {
      "object" === typeof d && (m = d.whitelist, p = d.deep, d = d.overwrite);
      if (m && "function" !== typeof m)var r = m, m = function (d, m) {
        return a.inArray(d, r) ? m : f
      };
      d === f && (d = n);
      var b = [], o = 0;
      for (k(e, g, d, m, p, b); g = b[o++];)delete g[c];
      return e
    }, merge: function (e) {
      var e = a.makeArray(arguments), g = {}, d, m = e.length;
      for (d = 0; d < m; d++)a.mix(g, e[d]);
      return g
    }, augment: function (e, g) {
      var d = a.makeArray(arguments), m = d.length - 2, p = 1, r = d[m], b = d[m + 1];
      a.isArray(b) || (r = b, b = f, m++);
      "boolean" !== typeof r && (r =
        f, m++);
      for (; p < m; p++)a.mix(e.prototype, d[p].prototype || d[p], r, b);
      return e
    }, extend: function (e, g, d, m) {
      if (!g || !e)return e;
      var p = g.prototype, r;
      r = l(p, e);
      e.prototype = a.mix(r, e.prototype);
      e.superclass = l(p, g);
      d && a.mix(r, d);
      m && a.mix(e, m);
      return e
    }, namespace: function () {
      var e = a.makeArray(arguments), g = e.length, d = null, m, p, r, b = e[g - 1] === n && g--;
      for (m = 0; m < g; m++) {
        r = ("" + e[m]).split(".");
        d = b ? i : this;
        for (p = i[r[0]] === d ? 1 : 0; p < r.length; ++p)d = d[r[p]] = d[r[p]] || {}
      }
      return d
    }
  })
})(KISSY);
(function (a, f) {
  var j = Array.prototype, l = j.indexOf, k = j.lastIndexOf, c = j.filter, i = j.every, n = j.some, b = j.map;
  a.mix(a, {
    each: function (e, b, h) {
      if (e) {
        var g, d, m = 0;
        g = e && e.length;
        d = g === f || "function" === a.type(e);
        h = h || null;
        if (d)for (d = a.keys(e); m < d.length && !(g = d[m], !1 === b.call(h, e[g], g, e)); m++); else for (d = e[0]; m < g && !1 !== b.call(h, d, m, e); d = e[++m]);
      }
      return e
    }, indexOf: l ? function (a, b) {
      return l.call(b, a)
    } : function (a, b) {
      for (var h = 0, g = b.length; h < g; ++h)if (b[h] === a)return h;
      return -1
    }, lastIndexOf: k ? function (a, b) {
      return k.call(b,
        a)
    } : function (a, b) {
      for (var h = b.length - 1; 0 <= h && b[h] !== a; h--);
      return h
    }, unique: function (e, b) {
      var h = e.slice();
      b && h.reverse();
      for (var g = 0, d, m; g < h.length;) {
        for (m = h[g]; (d = a.lastIndexOf(m, h)) !== g;)h.splice(d, 1);
        g += 1
      }
      b && h.reverse();
      return h
    }, inArray: function (e, b) {
      return -1 < a.indexOf(e, b)
    }, filter: c ? function (a, b, h) {
      return c.call(a, b, h || this)
    } : function (e, b, h) {
      var g = [];
      a.each(e, function (d, a, e) {
        b.call(h || this, d, a, e) && g.push(d)
      });
      return g
    }, map: b ? function (a, c, h) {
      return b.call(a, c, h || this)
    } : function (a, b, h) {
      for (var g =
        a.length, d = Array(g), m = 0; m < g; m++) {
        var p = "string" == typeof a ? a.charAt(m) : a[m];
        if (p || m in a)d[m] = b.call(h || this, p, m, a)
      }
      return d
    }, reduce: function (a, b, h) {
      var g = a.length;
      if ("function" !== typeof b)throw new TypeError("callback is not function!");
      if (0 === g && 2 == arguments.length)throw new TypeError("arguments invalid");
      var d = 0, m;
      if (3 <= arguments.length)m = arguments[2]; else {
        do {
          if (d in a) {
            m = a[d++];
            break
          }
          d += 1;
          if (d >= g)throw new TypeError;
        } while (1)
      }
      for (; d < g;)d in a && (m = b.call(f, m, a[d], d, a)), d++;
      return m
    }, every: i ? function (a,
                            b, h) {
      return i.call(a, b, h || this)
    } : function (a, b, h) {
      for (var g = a && a.length || 0, d = 0; d < g; d++)if (d in a && !b.call(h, a[d], d, a))return !1;
      return !0
    }, some: n ? function (a, b, h) {
      return n.call(a, b, h || this)
    } : function (a, b, h) {
      for (var g = a && a.length || 0, d = 0; d < g; d++)if (d in a && b.call(h, a[d], d, a))return !0;
      return !1
    }, makeArray: function (b) {
      if (null == b)return [];
      if (a.isArray(b))return b;
      var c = typeof b.length, h = typeof b;
      if ("number" != c || b.alert || "string" == h || "function" == h && !("item" in b && "number" == c))return [b];
      for (var c = [], h = 0, g = b.length; h <
      g; h++)c[h] = b[h];
      return c
    }
  })
})(KISSY);
(function (a, f) {
  function j(a) {
    var g = typeof a;
    return null == a || "object" !== g && "function" !== g
  }

  function l() {
    if (b)return b;
    var e = c;
    a.each(i, function (a) {
      e += a + "|"
    });
    e = e.slice(0, -1);
    return b = RegExp(e, "g")
  }

  function k() {
    if (e)return e;
    var b = c;
    a.each(n, function (a) {
      b += a + "|"
    });
    b += "&#(\\d{1,5});";
    return e = RegExp(b, "g")
  }

  var c = "", i = {
    "&amp;": "&",
    "&gt;": ">",
    "&lt;": "<",
    "&#x60;": "`",
    "&#x2F;": "/",
    "&quot;": '"',
    "&#x27;": "'"
  }, n = {}, b, e, o = /[\-#$\^*()+\[\]{}|\\,.?\s]/g;
  (function () {
    for (var a in i)n[i[a]] = a
  })();
  a.mix(a, {
    urlEncode: function (a) {
      return encodeURIComponent("" +
        a)
    }, urlDecode: function (a) {
      return decodeURIComponent(a.replace(/\+/g, " "))
    }, fromUnicode: function (a) {
      return a.replace(/\\u([a-f\d]{4})/ig, function (a, d) {
        return String.fromCharCode(parseInt(d, 16))
      })
    }, escapeHtml: function (a) {
      return (a + "").replace(l(), function (a) {
        return n[a]
      })
    }, escapeRegExp: function (a) {
      return a.replace(o, "\\$&")
    }, unEscapeHtml: function (a) {
      return a.replace(k(), function (a, d) {
        return i[a] || String.fromCharCode(+d)
      })
    }, param: function (b, g, d, m) {
      g = g || "&";
      d = d || "=";
      m === f && (m = !0);
      var p = [], e, s, i, o, k, n =
        a.urlEncode;
      for (e in b)if (k = b[e], e = n(e), j(k))p.push(e), k !== f && p.push(d, n(k + c)), p.push(g); else if (a.isArray(k) && k.length) {
        s = 0;
        for (o = k.length; s < o; ++s)i = k[s], j(i) && (p.push(e, m ? n("[]") : c), i !== f && p.push(d, n(i + c)), p.push(g))
      }
      p.pop();
      return p.join(c)
    }, unparam: function (b, g, d) {
      if ("string" != typeof b || !(b = a.trim(b)))return {};
      for (var d = d || "=", m = {}, e, r = a.urlDecode, b = b.split(g || "&"), c = 0, i = b.length; c < i; ++c) {
        e = b[c].indexOf(d);
        if (-1 == e)g = r(b[c]), e = f; else {
          g = r(b[c].substring(0, e));
          e = b[c].substring(e + 1);
          try {
            e = r(e)
          } catch (k) {
          }
          a.endsWith(g,
            "[]") && (g = g.substring(0, g.length - 2))
        }
        g in m ? a.isArray(m[g]) ? m[g].push(e) : m[g] = [m[g], e] : m[g] = e
      }
      return m
    }
  });
  a.escapeHTML = a.escapeHtml;
  a.unEscapeHTML = a.unEscapeHtml
})(KISSY);
(function (a) {
  function f(a, f, k) {
    var c = [].slice, i = c.call(arguments, 3), n = function () {
    }, b = function () {
      var b = c.call(arguments);
      return f.apply(this instanceof n ? this : k, a ? b.concat(i) : i.concat(b))
    };
    n.prototype = f.prototype;
    b.prototype = new n;
    return b
  }

  a.mix(a, {
    noop: function () {
    }, bind: f(0, f, null, 0), rbind: f(0, f, null, 1), later: function (f, l, k, c, i) {
      var l = l || 0, n = f, b = a.makeArray(i), e;
      "string" == typeof f && (n = c[f]);
      f = function () {
        n.apply(c, b)
      };
      e = k ? setInterval(f, l) : setTimeout(f, l);
      return {
        id: e, interval: k, cancel: function () {
          this.interval ?
            clearInterval(e) : clearTimeout(e)
        }
      }
    }, throttle: function (f, l, k) {
      l = l || 150;
      if (-1 === l)return function () {
        f.apply(k || this, arguments)
      };
      var c = a.now();
      return function () {
        var i = a.now();
        i - c > l && (c = i, f.apply(k || this, arguments))
      }
    }, buffer: function (f, l, k) {
      function c() {
        c.stop();
        i = a.later(f, l, 0, k || this, arguments)
      }

      l = l || 150;
      if (-1 === l)return function () {
        f.apply(k || this, arguments)
      };
      var i = null;
      c.stop = function () {
        i && (i.cancel(), i = 0)
      };
      return c
    }
  })
})(KISSY);
(function (a, f) {
  function j(b, e, f) {
    var h = b, g, d, m, p;
    if (!b)return h;
    if (b[i])return f[b[i]].destination;
    if ("object" === typeof b) {
      p = b.constructor;
      if (a.inArray(p, [Boolean, String, Number, Date, RegExp]))h = new p(b.valueOf()); else if (g = a.isArray(b))h = e ? a.filter(b, e) : b.concat(); else if (d = a.isPlainObject(b))h = {};
      b[i] = p = a.guid("c");
      f[p] = {destination: h, input: b}
    }
    if (g)for (b = 0; b < h.length; b++)h[b] = j(h[b], e, f); else if (d)for (m in b)if (m !== i && (!e || e.call(b, b[m], m, b) !== c))h[m] = j(b[m], e, f);
    return h
  }

  function l(b, e, c, h) {
    if (b[n] ===
      e && e[n] === b)return k;
    b[n] = e;
    e[n] = b;
    var g = function (d, a) {
      return null !== d && d !== f && d[a] !== f
    }, d;
    for (d in e)!g(b, d) && g(e, d) && c.push("expected has key '" + d + "', but missing from actual.");
    for (d in b)!g(e, d) && g(b, d) && c.push("expected missing key '" + d + "', but present in actual.");
    for (d in e)d != n && (a.equals(b[d], e[d], c, h) || h.push("'" + d + "' was '" + (e[d] ? e[d].toString() : e[d]) + "' in expected, but was '" + (b[d] ? b[d].toString() : b[d]) + "' in actual."));
    a.isArray(b) && a.isArray(e) && b.length != e.length && h.push("arrays were not the same length");
    delete b[n];
    delete e[n];
    return 0 === c.length && 0 === h.length
  }

  var k = !0, c = !1, i = "__~ks_cloned", n = "__~ks_compared";
  a.mix(a, {
    equals: function (a, e, c, h) {
      c = c || [];
      h = h || [];
      return a === e ? k : a === f || null === a || e === f || null === e ? null == a && null == e : a instanceof Date && e instanceof Date ? a.getTime() == e.getTime() : "string" == typeof a && "string" == typeof e || "number" === typeof a && "number" === typeof e ? a == e : "object" === typeof a && "object" === typeof e ? l(a, e, c, h) : a === e
    }, clone: function (b, e) {
      var c = {}, h = j(b, e, c);
      a.each(c, function (a) {
        a = a.input;
        if (a[i])try {
          delete a[i]
        } catch (d) {
          a[i] = f
        }
      });
      c = null;
      return h
    }, now: Date.now || function () {
      return +new Date
    }
  })
})(KISSY);
(function (a, f) {
  var j = /^[\s\xa0]+|[\s\xa0]+$/g, l = String.prototype.trim, k = /\\?\{([^{}]+)\}/g;
  a.mix(a, {
    trim: l ? function (a) {
      return null == a ? "" : l.call(a)
    } : function (a) {
      return null == a ? "" : (a + "").replace(j, "")
    }, substitute: function (a, i, n) {
      return "string" != typeof a || !i ? a : a.replace(n || k, function (a, e) {
        return "\\" === a.charAt(0) ? a.slice(1) : i[e] === f ? "" : i[e]
      })
    }, ucfirst: function (a) {
      a += "";
      return a.charAt(0).toUpperCase() + a.substring(1)
    }, startsWith: function (a, f) {
      return 0 === a.lastIndexOf(f, 0)
    }, endsWith: function (a, f) {
      var k =
        a.length - f.length;
      return 0 <= k && a.indexOf(f, k) == k
    }
  })
})(KISSY);
(function (a, f) {
  var j = {}, l = Object.prototype, k = l.toString;
  a.mix(a, {
    isBoolean: 0,
    isNumber: 0,
    isString: 0,
    isFunction: 0,
    isArray: 0,
    isDate: 0,
    isRegExp: 0,
    isObject: 0,
    type: function (a) {
      return null == a ? "" + a : j[k.call(a)] || "object"
    },
    isNull: function (a) {
      return null === a
    },
    isUndefined: function (a) {
      return a === f
    },
    isEmptyObject: function (a) {
      for (var i in a)if (i !== f)return !1;
      return !0
    },
    isPlainObject: function (c) {
      if (!c || "object" !== a.type(c) || c.nodeType || c.window == c)return !1;
      var i, k;
      try {
        if ((k = c.constructor) && !l.hasOwnProperty.call(c,
            "constructor") && !l.hasOwnProperty.call(k.prototype, "isPrototypeOf"))return !1
      } catch (b) {
        return !1
      }
      for (i in c);
      return i === f || l.hasOwnProperty.call(c, i)
    }
  });
  a.each("Boolean,Number,String,Function,Array,Date,RegExp,Object".split(","), function (c, f) {
    j["[object " + c + "]"] = f = c.toLowerCase();
    a["is" + c] = function (c) {
      return a.type(c) == f
    }
  })
})(KISSY);
(function (a, f) {
  function j(a, d, m) {
    if (a instanceof i)return m(a[o]);
    var b = a[o];
    if (a = a[h])a.push([d, m]); else if (k(b))j(b, d, m); else return d && d(b);
    return f
  }

  function l(a) {
    if (!(this instanceof l))return new l(a);
    this.promise = a || new c
  }

  function k(a) {
    return a && a instanceof c
  }

  function c(a) {
    this[o] = a;
    a === f && (this[h] = [])
  }

  function i(a) {
    if (a instanceof i)return a;
    c.apply(this, arguments);
    return this
  }

  function n(a, d, m) {
    function b(a) {
      try {
        return d ? d(a) : a
      } catch (m) {
        return new i(m)
      }
    }

    function e(a) {
      try {
        return m ? m(a) : new i(a)
      } catch (d) {
        return new i(d)
      }
    }

    function s(a) {
      f || (f = 1, h.resolve(b(a)))
    }

    var h = new l, f = 0;
    a instanceof c ? j(a, s, function (a) {
      f || (f = 1, h.resolve(e(a)))
    }) : s(a);
    return h.promise
  }

  function b(a) {
    return !e(a) && k(a) && a[h] === f && (!k(a[o]) || b(a[o]))
  }

  function e(a) {
    return k(a) && a[h] === f && a[o] instanceof i
  }

  var o = "__promise_value", h = "__promise_pendings";
  l.prototype = {
    constructor: l, resolve: function (b) {
      var d = this.promise, m;
      if (!(m = d[h]))return null;
      d[o] = b;
      m = [].concat(m);
      d[h] = f;
      a.each(m, function (a) {
        j(d, a[0], a[1])
      });
      return b
    }, reject: function (a) {
      return this.resolve(new i(a))
    }
  };
  c.prototype = {
    constructor: c, then: function (a, d) {
      return n(this, a, d)
    }, fail: function (a) {
      return n(this, 0, a)
    }, fin: function (a) {
      return n(this, function (d) {
        return a(d, !0)
      }, function (d) {
        return a(d, !1)
      })
    }, done: function (a, d) {
      (a || d ? this.then(a, d) : this).fail(function (a) {
        setTimeout(function () {
          throw a;
        }, 0)
      })
    }, isResolved: function () {
      return b(this)
    }, isRejected: function () {
      return e(this)
    }
  };
  a.extend(i, c);
  KISSY.Defer = l;
  KISSY.Promise = c;
  c.Defer = l;
  a.mix(c, {
    when: n, isPromise: k, isResolved: b, isRejected: e, all: function (a) {
      var d = a.length;
      if (!d)return null;
      for (var m = l(), b = 0; b < a.length; b++)(function (b, e) {
        n(b, function (b) {
          a[e] = b;
          0 === --d && m.resolve(a)
        }, function (a) {
          m.reject(a)
        })
      })(a[b], b);
      return m.promise
    }
  })
})(KISSY);
(function (a) {
  function f(a, c) {
    for (var f = 0, j = a.length - 1, b = [], e; 0 <= j; j--)e = a[j], "." != e && (".." === e ? f++ : f ? f-- : b[b.length] = e);
    if (c)for (; f--; f)b[b.length] = "..";
    return b = b.reverse()
  }

  var j = /^(\/?)([\s\S]+\/(?!$)|\/)?((?:\.{1,2}$|[\s\S]+?)?(\.[^.\/]*)?)$/, l = {
    resolve: function () {
      var k = "", c, i = arguments, j, b = 0;
      for (c = i.length - 1; 0 <= c && !b; c--)j = i[c], "string" == typeof j && j && (k = j + "/" + k, b = "/" == j.charAt(0));
      k = f(a.filter(k.split("/"), function (a) {
        return !!a
      }), !b).join("/");
      return (b ? "/" : "") + k || "."
    }, normalize: function (k) {
      var c =
        "/" == k.charAt(0), i = "/" == k.slice(-1), k = f(a.filter(k.split("/"), function (a) {
        return !!a
      }), !c).join("/");
      !k && !c && (k = ".");
      k && i && (k += "/");
      return (c ? "/" : "") + k
    }, join: function () {
      var f = a.makeArray(arguments);
      return l.normalize(a.filter(f, function (a) {
        return a && "string" == typeof a
      }).join("/"))
    }, relative: function (f, c) {
      var f = l.normalize(f), c = l.normalize(c), i = a.filter(f.split("/"), function (a) {
        return !!a
      }), j = [], b, e, o = a.filter(c.split("/"), function (a) {
        return !!a
      });
      e = Math.min(i.length, o.length);
      for (b = 0; b < e && i[b] == o[b]; b++);
      for (e = b; b < i.length;)j.push(".."), b++;
      j = j.concat(o.slice(e));
      return j = j.join("/")
    }, basename: function (a, c) {
      var f;
      f = (a.match(j) || [])[3] || "";
      c && f && f.slice(-1 * c.length) == c && (f = f.slice(0, -1 * c.length));
      return f
    }, dirname: function (a) {
      var c = a.match(j) || [], a = c[1] || "", c = c[2] || "";
      if (!a && !c)return ".";
      c && (c = c.substring(0, c.length - 1));
      return a + c
    }, extname: function (a) {
      return (a.match(j) || [])[4] || ""
    }
  };
  a.Path = l
})(KISSY);
(function (a, f) {
  function j(d) {
    d._queryMap || (d._queryMap = a.unparam(d._query))
  }

  function l(a) {
    this._query = a || ""
  }

  function k(a, m) {
    return encodeURI(a).replace(m, function (a) {
      a = a.charCodeAt(0).toString(16);
      return "%" + (1 == a.length ? "0" + a : a)
    })
  }

  function c(d) {
    if (d instanceof c)return d.clone();
    var m = this;
    a.mix(m, {scheme: "", userInfo: "", hostname: "", port: "", path: "", query: "", fragment: ""});
    d = c.getComponents(d);
    a.each(d, function (d, b) {
      d = d || "";
      if ("query" == b)m.query = new l(d); else {
        try {
          d = a.urlDecode(d)
        } catch (e) {
        }
        m[b] = d
      }
    });
    return m
  }

  var i = /[#\/\?@]/g, n = /[#\?]/g, b = /[#@]/g, e = /#/g, o = RegExp("^(?:([\\w\\d+.-]+):)?(?://(?:([^/?#@]*)@)?([\\w\\d\\-\\u0100-\\uffff.+%]*|\\[[^\\]]+\\])(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"), h = a.Path, g = {
    scheme: 1,
    userInfo: 2,
    hostname: 3,
    port: 4,
    path: 5,
    query: 6,
    fragment: 7
  };
  l.prototype = {
    constructor: l, clone: function () {
      return new l(this.toString())
    }, reset: function (a) {
      this._query = a || "";
      this._queryMap = null;
      return this
    }, count: function () {
      var d = 0, m, b;
      j(this);
      m = this._queryMap;
      for (b in m)a.isArray(m[b]) ?
        d += m[b].length : d++;
      return d
    }, has: function (d) {
      var m;
      j(this);
      m = this._queryMap;
      return d ? d in m : !a.isEmptyObject(m)
    }, get: function (a) {
      var m;
      j(this);
      m = this._queryMap;
      return a ? m[a] : m
    }, keys: function () {
      j(this);
      return a.keys(this._queryMap)
    }, set: function (d, m) {
      var b;
      j(this);
      b = this._queryMap;
      "string" == typeof d ? this._queryMap[d] = m : (d instanceof l && (d = d.get()), a.each(d, function (a, d) {
        b[d] = a
      }));
      return this
    }, remove: function (a) {
      j(this);
      a ? delete this._queryMap[a] : this._queryMap = {};
      return this
    }, add: function (d, m) {
      var b =
        this, e, g;
      a.isObject(d) ? (d instanceof l && (d = d.get()), a.each(d, function (a, d) {
        b.add(d, a)
      })) : (j(b), e = b._queryMap, g = e[d], g = g === f ? m : [].concat(g).concat(m), e[d] = g);
      return b
    }, toString: function (d) {
      j(this);
      return a.param(this._queryMap, f, f, d)
    }
  };
  c.prototype = {
    constructor: c, clone: function () {
      var d = new c, b = this;
      a.each(g, function (a, e) {
        d[e] = b[e]
      });
      d.query = d.query.clone();
      return d
    }, resolve: function (d) {
      "string" == typeof d && (d = new c(d));
      var b = 0, e, g = this.clone();
      a.each("scheme,userInfo,hostname,port,path,query,fragment".split(","),
        function (c) {
          if (c == "path")if (b)g[c] = d[c]; else {
            if (c = d.path) {
              b = 1;
              if (!a.startsWith(c, "/"))if (g.hostname && !g.path)c = "/" + c; else if (g.path) {
                e = g.path.lastIndexOf("/");
                e != -1 && (c = g.path.slice(0, e + 1) + c)
              }
              g.path = h.normalize(c)
            }
          } else if (c == "query") {
            if (b || d.query.toString()) {
              g.query = d.query.clone();
              b = 1
            }
          } else if (b || d[c]) {
            g[c] = d[c];
            b = 1
          }
        });
      return g
    }, getScheme: function () {
      return this.scheme
    }, setScheme: function (a) {
      this.scheme = a;
      return this
    }, getHostname: function () {
      return this.hostname
    }, setHostname: function (a) {
      this.hostname =
        a;
      return this
    }, setUserInfo: function (a) {
      this.userInfo = a;
      return this
    }, getUserInfo: function () {
      return this.userInfo
    }, setPort: function (a) {
      this.port = a;
      return this
    }, getPort: function () {
      return this.port
    }, setPath: function (a) {
      this.path = a;
      return this
    }, getPath: function () {
      return this.path
    }, setQuery: function (d) {
      "string" == typeof d && (a.startsWith(d, "?") && (d = d.slice(1)), d = new l(k(d, b)));
      this.query = d;
      return this
    }, getQuery: function () {
      return this.query
    }, getFragment: function () {
      return this.fragment
    }, setFragment: function (d) {
      a.startsWith(d,
        "#") && (d = d.slice(1));
      this.fragment = d;
      return this
    }, isSameOriginAs: function (a) {
      return this.hostname.toLowerCase() == a.hostname.toLowerCase() && this.scheme.toLowerCase() == a.scheme.toLowerCase() && this.port.toLowerCase() == a.port.toLowerCase()
    }, toString: function (d) {
      var b = [], g, c;
      if (g = this.scheme)b.push(k(g, i)), b.push(":");
      if (g = this.hostname) {
        b.push("//");
        if (c = this.userInfo)b.push(k(c, i)), b.push("@");
        b.push(encodeURIComponent(g));
        if (c = this.port)b.push(":"), b.push(c)
      }
      if (c = this.path)g && !a.startsWith(c, "/") &&
      (c = "/" + c), c = h.normalize(c), b.push(k(c, n));
      if (d = this.query.toString.call(this.query, d))b.push("?"), b.push(d);
      if (d = this.fragment)b.push("#"), b.push(k(d, e));
      return b.join("")
    }
  };
  c.Query = l;
  c.getComponents = function (d) {
    var b = (d || "").match(o) || [], e = {};
    a.each(g, function (a, d) {
      e[d] = b[a]
    });
    return e
  };
  a.Uri = c
})(KISSY);
(function (a, f) {
  function j(a) {
    var d = 0;
    return parseFloat(a.replace(/\./g, function () {
      return 0 === d++ ? "." : ""
    }))
  }

  function l(a, d) {
    var b;
    d.trident = 0.1;
    if ((b = a.match(/Trident\/([\d.]*)/)) && b[1])d.trident = j(b[1]);
    d.core = "trident"
  }

  function k(a) {
    var d, b;
    return (d = a.match(/MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/)) && (b = d[1] || d[2]) ? j(b) : 0
  }

  function c(a) {
    var d, b = "", e = "", c, h = [6, 9], i, o = n && n.createElement("div"), v = [], q = {
      webkit: f, trident: f, gecko: f, presto: f, chrome: f, safari: f, firefox: f, ie: f, opera: f, mobile: f, core: f,
      shell: f, phantomjs: f, os: f, ipad: f, iphone: f, ipod: f, ios: f, android: f, nodejs: f
    };
    o && o.getElementsByTagName && (o.innerHTML = "<\!--[if IE {{version}}]><s></s><![endif]--\>".replace("{{version}}", ""), v = o.getElementsByTagName("s"));
    if (0 < v.length) {
      l(a, q);
      c = h[0];
      for (h = h[1]; c <= h; c++)if (o.innerHTML = "<\!--[if IE {{version}}]><s></s><![endif]--\>".replace("{{version}}", c), 0 < v.length) {
        q[e = "ie"] = c;
        break
      }
      if (!q.ie && (i = k(a)))q[e = "ie"] = i
    } else if ((c = a.match(/AppleWebKit\/([\d.]*)/)) && c[1]) {
      q[b = "webkit"] = j(c[1]);
      if ((c = a.match(/OPR\/(\d+\.\d+)/)) &&
        c[1])q[e = "opera"] = j(c[1]); else if ((c = a.match(/Chrome\/([\d.]*)/)) && c[1])q[e = "chrome"] = j(c[1]); else if ((c = a.match(/\/([\d.]*) Safari/)) && c[1])q[e = "safari"] = j(c[1]);
      if (/ Mobile\//.test(a) && a.match(/iPad|iPod|iPhone/)) {
        q.mobile = "apple";
        if ((c = a.match(/OS ([^\s]*)/)) && c[1])q.ios = j(c[1].replace("_", "."));
        d = "ios";
        if ((c = a.match(/iPad|iPod|iPhone/)) && c[0])q[c[0].toLowerCase()] = q.ios
      } else if (/ Android/i.test(a)) {
        if (/Mobile/.test(a) && (d = q.mobile = "android"), (c = a.match(/Android ([^\s]*);/)) && c[1])q.android = j(c[1])
      } else if (c =
          a.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/))q.mobile = c[0].toLowerCase();
      if ((c = a.match(/PhantomJS\/([^\s]*)/)) && c[1])q.phantomjs = j(c[1])
    } else if ((c = a.match(/Presto\/([\d.]*)/)) && c[1]) {
      if (q[b = "presto"] = j(c[1]), (c = a.match(/Opera\/([\d.]*)/)) && c[1]) {
        q[e = "opera"] = j(c[1]);
        if ((c = a.match(/Opera\/.* Version\/([\d.]*)/)) && c[1])q[e] = j(c[1]);
        if ((c = a.match(/Opera Mini[^;]*/)) && c)q.mobile = c[0].toLowerCase(); else if ((c = a.match(/Opera Mobi[^;]*/)) && c)q.mobile = c[0]
      }
    } else if (i = k(a))q[e = "ie"] = i, l(a, q); else if (c =
        a.match(/Gecko/)) {
      q[b = "gecko"] = 0.1;
      if ((c = a.match(/rv:([\d.]*)/)) && c[1])q[b] = j(c[1]), /Mobile|Tablet/.test(a) && (q.mobile = "firefox");
      if ((c = a.match(/Firefox\/([\d.]*)/)) && c[1])q[e = "firefox"] = j(c[1])
    }
    d || (/windows|win32/i.test(a) ? d = "windows" : /macintosh|mac_powerpc/i.test(a) ? d = "macintosh" : /linux/i.test(a) ? d = "linux" : /rhino/i.test(a) && (d = "rhino"));
    q.os = d;
    q.core = q.core || b;
    q.shell = e;
    return q
  }

  var i = a.Env.host, n = i.document, i = i.navigator, b = KISSY.UA = c(i && i.userAgent || "");
  if ("object" === typeof process) {
    var e, o;
    if ((e =
        process.versions) && (o = e.node))b.os = process.platform, b.nodejs = j(o)
  }
  b.getDescriptorFromUserAgent = c;
  e = "webkit,trident,gecko,presto,chrome,safari,firefox,ie,opera".split(",");
  o = n && n.documentElement;
  var h = "";
  o && (a.each(e, function (a) {
    var d = b[a];
    d && (h += " ks-" + a + (parseInt(d) + ""), h += " ks-" + a)
  }), a.trim(h) && (o.className = a.trim(o.className + h)))
})(KISSY);
(function (a) {
  var f = a.Env, j = f.host, l = a.UA, k = j.document || {}, c = "ontouchstart" in k && !l.phantomjs, i = (k = k.documentMode) || l.ie, n = (f.nodejs && "object" === typeof global ? global : j).JSON;
  k && 9 > k && (n = 0);
  a.Features = {
    isTouchSupported: function () {
      return c
    }, isDeviceMotionSupported: function () {
      return !!j.DeviceMotionEvent
    }, isHashChangeSupported: function () {
      return "onhashchange" in j && (!i || 7 < i)
    }, isNativeJSONSupported: function () {
      return n
    }
  }
})(KISSY);
(function (a) {
  (a.Loader = {}).Status = {INIT: 0, LOADING: 1, LOADED: 2, ERROR: 3, ATTACHED: 4}
})(KISSY);
(function (a) {
  function f(a) {
    if ("string" == typeof a)return j(a);
    for (var b = [], e = 0, c = a.length; e < c; e++)b[e] = j(a[e]);
    return b
  }

  function j(a) {
    "/" == a.charAt(a.length - 1) && (a += "index");
    return a
  }

  var l = a.Loader, k = a.Path, c = a.Env.host, i = a.startsWith, n = l.Status, b = n.ATTACHED, e = n.LOADED, o = n.ERROR, h = l.Utils = {}, g = c.document;
  a.mix(h, {
    docHead: function () {
      return g.getElementsByTagName("head")[0] || g.documentElement
    }, normalDepModuleName: function (a, b) {
      var e = 0, c;
      if (!b)return b;
      if ("string" == typeof b)return i(b, "../") || i(b, "./") ?
        k.resolve(k.dirname(a), b) : k.normalize(b);
      for (c = b.length; e < c; e++)b[e] = h.normalDepModuleName(a, b[e]);
      return b
    }, createModulesInfo: function (d, b) {
      a.each(b, function (a) {
        h.createModuleInfo(d, a)
      })
    }, createModuleInfo: function (d, b, e) {
      var b = j(b), c = d.Env.mods, g = c[b];
      return g ? g : c[b] = g = new l.Module(a.mix({name: b, runtime: d}, e))
    }, isAttached: function (d, e) {
      var c;
      a:{
        var g = d.Env.mods, f, h;
        c = a.makeArray(e);
        for (h = 0; h < c.length; h++)if (f = g[c[h]], !f || f.status !== b) {
          c = 0;
          break a
        }
        c = 1
      }
      return c
    }, getModules: function (d, e) {
      var c = [d],
        g, f, i, j, k = d.Env.mods;
      a.each(e, function (e) {
        g = k[e];
        if (!g || "css" != g.getType())f = h.unalias(d, e), (i = a.reduce(f, function (a, d) {
          j = k[d];
          return a && j && j.status == b
        }, !0)) ? c.push(k[f[0]].value) : c.push(null)
      });
      return c
    }, attachModsRecursively: function (a, b, e, c) {
      var e = e || [], g, f = 1, j = a.length, i = e.length;
      for (g = 0; g < j; g++)f = h.attachModRecursively(a[g], b, e, c) && f, e.length = i;
      return f
    }, attachModRecursively: function (d, c, g, f) {
      var j, i = c.Env.mods[d];
      if (!i)return 0;
      j = i.status;
      if (j == b)return 1;
      j == o && f.push(i);
      if (j != e)return 0;
      if (a.inArray(d,
          g))return g.push(d), 0;
      g.push(d);
      return h.attachModsRecursively(i.getNormalizedRequires(), c, g, f) ? (h.attachMod(c, i), 1) : 0
    }, attachMod: function (a, c) {
      if (c.status == e) {
        var g = c.fn;
        c.value = "function" === typeof g ? g.apply(c, h.getModules(a, c.getRequiresWithAlias())) : g;
        c.status = b
      }
    }, getModNamesAsArray: function (a) {
      "string" == typeof a && (a = a.replace(/\s+/g, "").split(","));
      return a
    }, normalizeModNames: function (a, b, c) {
      return h.unalias(a, h.normalizeModNamesWithAlias(a, b, c))
    }, unalias: function (a, b) {
      for (var c = [].concat(b),
             e, g, h, j = 0, i, k = a.Env.mods; !j;) {
        j = 1;
        for (e = c.length - 1; 0 <= e; e--)if ((g = k[c[e]]) && (h = g.alias)) {
          j = 0;
          for (i = h.length - 1; 0 <= i; i--)h[i] || h.splice(i, 1);
          c.splice.apply(c, [e, 1].concat(f(h)))
        }
      }
      return c
    }, normalizeModNamesWithAlias: function (a, b, c) {
      var a = [], e, g;
      if (b) {
        e = 0;
        for (g = b.length; e < g; e++)b[e] && a.push(f(b[e]))
      }
      c && (a = h.normalDepModuleName(c, a));
      return a
    }, registerModule: function (d, b, c, g) {
      var b = j(b), f = d.Env.mods, i = f[b];
      if (!i || !i.fn)h.createModuleInfo(d, b), i = f[b], a.mix(i, {name: b, status: e, fn: c}), a.mix(i, g)
    }, getMappedPath: function (a,
                                b, c) {
      for (var a = c || a.Config.mappedRules || [], e, c = 0; c < a.length; c++)if (e = a[c], b.match(e[0]))return b.replace(e[0], e[1]);
      return b
    }
  })
})(KISSY);
(function (a) {
  function f(a, c) {
    return c in a ? a[c] : a.runtime.Config[c]
  }

  function j(b) {
    a.mix(this, b)
  }

  function l(b) {
    this.status = k.Status.INIT;
    a.mix(this, b);
    this.callbacks = []
  }

  var k = a.Loader, c = a.Path, i = k.Utils;
  a.augment(j, {
    reset: function (b) {
      a.mix(this, b)
    }, getTag: function () {
      return f(this, "tag")
    }, getName: function () {
      return this.name
    }, getBase: function () {
      return f(this, "base")
    }, getPrefixUriForCombo: function () {
      var a = this.getName();
      return this.getBase() + (a && !this.isIgnorePackageNameInUri() ? a + "/" : "")
    }, getPackageUri: function () {
      return this.packageUri ?
        this.packageUri : this.packageUri = new a.Uri(this.getPrefixUriForCombo())
    }, getBaseUri: function () {
      return f(this, "baseUri")
    }, isDebug: function () {
      return f(this, "debug")
    }, isIgnorePackageNameInUri: function () {
      return f(this, "ignorePackageNameInUri")
    }, getCharset: function () {
      return f(this, "charset")
    }, isCombine: function () {
      return f(this, "combine")
    }, getGroup: function () {
      return f(this, "group")
    }
  });
  k.Package = j;
  a.augment(l, {
    addCallback: function (a) {
      this.callbacks.push(a)
    }, notifyAll: function () {
      for (var a, c = this.callbacks.length,
             f = 0; f < c; f++) {
        a = this.callbacks[f];
        try {
          a(this)
        } catch (h) {
          setTimeout(function () {
            throw h;
          }, 0)
        }
      }
      this.callbacks = []
    }, setValue: function (a) {
      this.value = a
    }, getType: function () {
      var a = this.type;
      a || (this.type = a = ".css" == c.extname(this.name).toLowerCase() ? "css" : "js");
      return a
    }, getFullPath: function () {
      var a, e, f, h;
      if (!this.fullpath) {
        e = this.getPackage();
        a = e.getBaseUri();
        h = this.getPath();
        if (e.isIgnorePackageNameInUri() && (f = e.getName()))h = c.relative(f, h);
        e = a.resolve(h);
        if (a = this.getTag())a += "." + this.getType(), e.query.set("t",
          a);
        this.fullpath = i.getMappedPath(this.runtime, e.toString())
      }
      return this.fullpath
    }, getPath: function () {
      var a;
      if (!(a = this.path)) {
        a = this.name;
        var e = "." + this.getType(), f = "-min";
        a = c.join(c.dirname(a), c.basename(a, e));
        this.getPackage().isDebug() && (f = "");
        a = this.path = a + f + e
      }
      return a
    }, getValue: function () {
      return this.value
    }, getName: function () {
      return this.name
    }, getPackage: function () {
      var b;
      if (!(b = this.packageInfo)) {
        var c = this.name;
        b = this.runtime.config("packages");
        var c = c + "/", f = "", h;
        for (h in b)a.startsWith(c, h +
          "/") && h.length > f.length && (f = h);
        b = this.packageInfo = b[f] || n
      }
      return b
    }, getTag: function () {
      return this.tag || this.getPackage().getTag()
    }, getCharset: function () {
      return this.charset || this.getPackage().getCharset()
    }, getRequiredMods: function () {
      var b = this.runtime;
      return a.map(this.getNormalizedRequires(), function (a) {
        return i.createModuleInfo(b, a)
      })
    }, getRequiresWithAlias: function () {
      var a = this.requiresWithAlias, c = this.requires;
      if (!c || 0 == c.length)return c || [];
      a || (this.requiresWithAlias = a = i.normalizeModNamesWithAlias(this.runtime,
        c, this.name));
      return a
    }, getNormalizedRequires: function () {
      var a, c = this.normalizedRequiresStatus, f = this.status, h = this.requires;
      if (!h || 0 == h.length)return h || [];
      if ((a = this.normalizedRequires) && c == f)return a;
      this.normalizedRequiresStatus = f;
      return this.normalizedRequires = i.normalizeModNames(this.runtime, h, this.name)
    }
  });
  k.Module = l;
  var n = new k.Package({name: "", runtime: a})
})(KISSY);
(function (a) {
  function f(a, b) {
    var f = 0;
    if (k.webkit)a.sheet && (c.debug("webkit css poll loaded: " + b), f = 1); else if (a.sheet)try {
      a.sheet.cssRules && (c.debug("same domain css poll loaded: " + b), f = 1)
    } catch (g) {
      var d = g.name;
      c.debug("css poll exception: " + d + " " + g.code + " " + b);
      "NS_ERROR_DOM_SECURITY_ERR" == d && (c.debug("css poll exception: " + d + "loaded : " + b), f = 1)
    }
    return f
  }

  function j() {
    for (var e in b) {
      var i = b[e], h = i.node;
      f(h, e) && (i.callback && i.callback.call(h), delete b[e])
    }
    a.isEmptyObject(b) ? (c.debug("clear css poll timer"),
      n = 0) : n = setTimeout(j, l)
  }

  var l = 30, k = a.UA, c = {
    debug: function () {
    }
  }, i = a.Loader.Utils, n = 0, b = {};
  i.pollCss = function (a, f) {
    var h;
    h = b[a.href] = {};
    h.node = a;
    h.callback = f;
    n || (c.debug("start css poll timer"), j())
  };
  i.isCssLoaded = f
})(KISSY);
(function (a) {
  var f = a.Env.host.document, j = a.Loader.Utils, l = a.Path, k = {}, c, i = a.UA;
  a.getScript = function (n, b, e) {
    function o() {
      var a = s.readyState;
      if (!a || "loaded" == a || "complete" == a)s.onreadystatechange = s.onload = null, F(0)
    }

    var h = b, g = 0, d, m, p, r;
    a.startsWith(l.extname(n).toLowerCase(), ".css") && (g = 1);
    a.isPlainObject(h) && (b = h.success, d = h.error, m = h.timeout, e = h.charset, p = h.attrs);
    h = k[n] = k[n] || [];
    h.push([b, d]);
    if (1 < h.length)return h.node;
    var s = f.createElement(g ? "link" : "script");
    p && a.each(p, function (a, d) {
      s.setAttribute(d,
        a)
    });
    e && (s.charset = e);
    g ? (s.href = n, s.rel = "stylesheet") : (s.src = n, s.async = !0);
    h.node = s;
    var F = function (d) {
      var b;
      if (r) {
        r.cancel();
        r = void 0
      }
      a.each(k[n], function (a) {
        (b = a[d]) && b.call(s)
      });
      delete k[n]
    }, b = "onload" in s, e = a.Config.forceCssPoll || i.webkit && 536 > i.webkit;
    g && e && b && (b = !1);
    b ? (s.onload = o, s.onerror = function () {
      s.onerror = null;
      F(1)
    }) : g ? j.pollCss(s, function () {
      F(0)
    }) : s.onreadystatechange = o;
    m && (r = a.later(function () {
      F(1)
    }, 1E3 * m));
    c || (c = j.docHead());
    g ? c.appendChild(s) : c.insertBefore(s, c.firstChild);
    return s
  }
})(KISSY);
(function (a, f) {
  function j(b) {
    b = b.replace(/\\/g, "/");
    "/" != b.charAt(b.length - 1) && (b += "/");
    i ? b = i.resolve(b) : (a.startsWith(b, "file:") || (b = "file:" + b), b = new a.Uri(b));
    return b
  }

  var l = a.Loader, k = l.Utils, c = a.Env.host.location, i, n, b = a.Config.fns;
  if (!a.UA.nodejs && c && (n = c.href))i = new a.Uri(n);
  b.map = function (a) {
    var b = this.Config;
    return !1 === a ? b.mappedRules = [] : b.mappedRules = (b.mappedRules || []).concat(a || [])
  };
  b.mapCombo = function (a) {
    var b = this.Config;
    return !1 === a ? b.mappedComboRules = [] : b.mappedComboRules = (b.mappedComboRules ||
    []).concat(a || [])
  };
  b.packages = function (b) {
    var c, h = this.Config, g = h.packages = h.packages || {};
    return b ? (a.each(b, function (b, e) {
      c = b.name || e;
      var f = j(b.base || b.path);
      b.name = c;
      b.base = f.toString();
      b.baseUri = f;
      b.runtime = a;
      delete b.path;
      g[c] ? g[c].reset(b) : g[c] = new l.Package(b)
    }), f) : !1 === b ? (h.packages = {}, f) : g
  };
  b.modules = function (b) {
    var c = this, f = c.Env;
    b && a.each(b, function (b, d) {
      k.createModuleInfo(c, d, b);
      a.mix(f.mods[d], b)
    })
  };
  b.base = function (a) {
    var b = this.Config;
    if (!a)return b.base;
    a = j(a);
    b.base = a.toString();
    b.baseUri =
      a;
    return f
  }
})(KISSY);
(function (a, f) {
  function j(b, c) {
    a.mix(this, {runtime: b, requireLoadedMods: {}, waitingModules: c})
  }

  var l, k, c, i, n = f, b, e, o, h, g;
  l = a.Loader;
  k = l.Status;
  c = l.Utils;
  i = a.UA;
  e = k.LOADING;
  o = k.LOADED;
  h = k.ERROR;
  g = k.ATTACHED;
  a.augment(j, {
    use: function (a) {
      var b, c = a.length;
      for (b = 0; b < c; b++)this.loadModule(a[b])
    }, loadModRequires: function (a) {
      var b = this.requireLoadedMods, c = a.name;
      b[c] || (b[c] = 1, a = a.getNormalizedRequires(), this.use(a))
    }, loadModule: function (a) {
      var b = this, f = b.waitingModules, i, j, k = c.createModuleInfo(b.runtime, a);
      i = k.status;
      i == g || i == h || (i === o ? b.loadModRequires(k) : (j = f.contains(a), j || (k.addCallback(function () {
        b.loadModRequires(k);
        f.remove(a);
        f.notifyAll()
      }), f.add(a), i < e && b.fetchModule(k))))
    }, fetchModule: function (d) {
      function g() {
        d.fn || (d.status = h);
        d.notifyAll()
      }

      var j = this.runtime, k = d.getName(), l = d.getCharset(), o = d.getFullPath(), z = i.ie, v = "css" == d.getType();
      d.status = e;
      z && !v && (b = k);
      a.getScript(o, {
        attrs: z ? {"data-mod-name": k} : f, success: function () {
          v ? c.registerModule(j, k, a.noop) : n && (c.registerModule(j, k, n.fn, n.config),
            n = f);
          a.later(g)
        }, error: g, charset: l
      })
    }
  });
  j.add = function (d, e, f, g) {
    if ("function" === typeof d)if (f = e, e = d, i.ie) {
      var d = a.Env.host.document.getElementsByTagName("script"), h, j, k;
      for (j = d.length - 1; 0 <= j; j--)if (k = d[j], "interactive" == k.readyState) {
        h = k;
        break
      }
      d = h ? h.getAttribute("data-mod-name") : b;
      c.registerModule(g, d, e, f);
      b = null
    } else n = {fn: e, config: f}
  };
  l.SimpleLoader = j
})(KISSY);
(function (a) {
  function f(b, c, d) {
    var e = b && b.length, f = [], g = [];
    a.each(b, function (b) {
      a.getScript(b.fullpath, {
        success: function () {
          g.push(b);
          --e || c(g, f)
        }, error: function () {
          f.push(b);
          --e || c(g, f)
        }, charset: d
      })
    })
  }

  function j(b, c) {
    a.mix(this, {runtime: b, waitingModules: c})
  }

  function l(b) {
    a.each(b, function (b) {
      var c = [];
      a.each(b.mods, function (a) {
        a.status == o && c.push(a.name)
      })
    })
  }

  function k(a, b) {
    for (var a = a.split(/\//), b = b.split(/\//), c = Math.min(a.length, b.length), d = 0; d < c && a[d] === b[d]; d++);
    return a.slice(0, d).join("/") +
      "/"
  }

  function c(a) {
    var b = 5381, c;
    for (c = a.length; -1 < --c;)b = (b << 5) + b + a.charCodeAt(c);
    return b + ""
  }

  var i = a.Loader, n = i.Status, b = i.Utils, e = n.LOADING, o = n.LOADED, h = n.ERROR, g = a.now(), d = n.ATTACHED;
  j.groupTag = g;
  a.augment(j, {
    use: function (c) {
      var d = this.runtime, c = a.keys(this.calculate(c));
      b.createModulesInfo(d, c);
      c = this.getComboUrls(c);
      a.each(c.css, function (c) {
        f(c, function (c, e) {
          l(c);
          a.each(c, function (c) {
            a.each(c.mods, function (c) {
              b.registerModule(d, c.getName(), a.noop);
              c.notifyAll()
            })
          });
          a.each(e, function (b) {
            a.each(b.mods,
              function (a) {
                a.status = h;
                a.notifyAll()
              })
          })
        }, c.charset)
      });
      a.each(c.js, function (b) {
        f(b, function (c) {
          l(c);
          a.each(b, function (b) {
            a.each(b.mods, function (a) {
              a.fn || (a.status = h);
              a.notifyAll()
            })
          })
        }, b.charset)
      })
    }, calculate: function (a, c, f) {
      var g, i, j, k, l = this.waitingModules, n = this.runtime, f = f || {}, c = c || {};
      for (g = 0; g < a.length; g++)i = a[g], c[i] || (c[i] = 1, j = b.createModuleInfo(n, i), k = j.status, k !== h && (k != o && k != d && !l.contains(i) && (k != e && (j.status = e, f[i] = 1), j.addCallback(function (a) {
        l.remove(a.getName());
        l.notifyAll()
      }), l.add(i)),
        this.calculate(j.getNormalizedRequires(), c, f)));
      return f
    }, getComboMods: function (c, d) {
      for (var e = {}, f, h = this.runtime, i = 0, j = c.length, l, n, o, y, A, x, u, t, C; i < j; ++i) {
        l = c[i];
        l = b.createModuleInfo(h, l);
        o = l.getType();
        C = l.getFullPath();
        n = l.getPackage();
        u = n.getName();
        A = n.getCharset();
        y = n.getTag();
        t = n.getGroup();
        x = n.getPrefixUriForCombo();
        f = n.getPackageUri();
        var w = u;
        (l.canBeCombined = n.isCombine() && a.startsWith(C, x)) && t ? (w = t + "_" + A + "_" + g, (n = d[w]) ? n.isSameOriginAs(f) ? n.setPath(k(n.getPath(), f.getPath())) : (w = u, d[u] =
          f) : d[w] = f.clone()) : d[u] = f;
        f = e[o] = e[o] || {};
        (o = f[w]) ? 1 == o.tags.length && o.tags[0] == y || o.tags.push(y) : (o = f[w] = [], o.charset = A, o.tags = [y]);
        o.push(l)
      }
      return e
    }, getComboUrls: function (a) {
      var d = this.runtime, e = d.Config, f = e.comboPrefix, g = e.comboSep, h = e.comboMaxFileNum, i = e.comboMaxUrlLength, j = {}, a = this.getComboMods(a, j), k = {}, l;
      for (l in a) {
        k[l] = {};
        for (var n in a[l]) {
          var o = [], x = [], u = a[l][n], t = u.tags, C = (t = 1 < t.length ? c(t.join("")) : t[0]) ? "?t=" + encodeURIComponent(t) + "." + l : "", t = C.length, w = j[n].toString(), L = w.length,
            J = w + f, D = k[l][n] = [], w = J.length;
          D.charset = u.charset;
          D.mods = [];
          for (var K = function () {
            D.push({fullpath: b.getMappedPath(d, J + o.join(g) + C, e.mappedComboRules), mods: x})
          }, G = 0; G < u.length; G++) {
            var E = u[G];
            D.mods.push(E);
            var H = E.getFullPath();
            if (E.canBeCombined) {
              if (H = H.slice(L).replace(/\?.*$/, ""), o.push(H), x.push(E), o.length > h || w + o.join(g).length + t > i)o.pop(), x.pop(), K(), o = [], x = [], G--
            } else D.push({fullpath: H, mods: [E]})
          }
          o.length && K()
        }
      }
      return k
    }
  });
  i.ComboLoader = j
})(KISSY);
(function (a, f) {
  function j(b) {
    a.mix(this, {fn: b, waitMods: {}})
  }

  function l(b) {
    var c = b.src || "";
    if (!c.match(h))return 0;
    var b = (b = b.getAttribute("data-config")) ? (new Function("return " + b))() : {}, e = b.comboPrefix = b.comboPrefix || "??", i = b.comboSep = b.comboSep || ",", j, k = c.indexOf(e);
    -1 == k ? j = c.replace(o, "$1") : (j = c.substring(0, k), "/" != j.charAt(j.length - 1) && (j += "/"), c = c.substring(k + e.length).split(i), a.each(c, function (a) {
      return a.match(h) ? (j += a.replace(o, "$1"), !1) : f
    }));
    return a.mix({base: j}, b)
  }

  function k() {
    var a = i.host.document.getElementsByTagName("script"),
      b, c;
    for (b = a.length - 1; 0 <= b; b--)if (c = l(a[b]))return c;
    return null
  }

  var c = KISSY.Loader, i = a.Env, n = c.Utils, b = c.SimpleLoader, e = c.ComboLoader;
  j.prototype = {
    constructor: j, notifyAll: function () {
      var b = this.fn;
      b && a.isEmptyObject(this.waitMods) && (this.fn = null, b())
    }, add: function (a) {
      this.waitMods[a] = 1
    }, remove: function (a) {
      delete this.waitMods[a]
    }, contains: function (a) {
      return this.waitMods[a]
    }
  };
  c.WaitingModules = j;
  a.mix(a, {
    add: function (c, d, e) {
      "string" == typeof c ? n.registerModule(a, c, d, e) : b.add(c, d, e, a)
    }, use: function (c,
                      d) {
      function h() {
        var b = [];
        n.attachModsRecursively(k, a, f, b) ? d && (z ? d.apply(a, n.getModules(a, c)) : setTimeout(function () {
          d.apply(a, n.getModules(a, c))
        }, 0)) : b.length ? o && (z ? o.apply(a, b) : setTimeout(function () {
          o.apply(a, b)
        }, 0)) : (v.fn = h, l.use(k))
      }

      var i = a.Config, k, l, o, z, v = new j(h);
      a.isPlainObject(d) && (z = d.sync, o = d.error, d = d.success);
      c = n.getModNamesAsArray(c);
      c = n.normalizeModNamesWithAlias(a, c);
      k = n.unalias(a, c);
      l = i.combine && !a.UA.nodejs ? new e(a, v) : new b(a, v);
      z ? v.notifyAll() : setTimeout(function () {
          v.notifyAll()
        },
        0);
      return a
    }, require: function (b) {
      return n.getModules(a, n.normalizeModNamesWithAlias(a, [b]))[1]
    }
  });
  var o = /^(.*)(seed|kissy)(?:-min)?\.js[^/]*/i, h = /(seed|kissy)(?:-min)?\.js/i;
  a.UA.nodejs ? a.config({
    charset: "utf-8",
    base: __dirname.replace(/\\/g, "/").replace(/\/$/, "") + "/"
  }) : a.config(a.mix({comboMaxUrlLength: 2E3, comboMaxFileNum: 40, charset: "utf-8", tag: "20131125184002"}, k()));
  i.mods = {}
})(KISSY);
(function (a, f) {
  function j() {
    c && !k.nodejs && p(l, d, j);
    b.resolve(a)
  }

  var l = a.Env.host, k = a.UA, c = l.document, i = c && c.documentElement, n = l.location, b = new a.Defer, e = b.promise, o = /^#?([\w-]+)$/, h = /\S/, g = !(!c || !c.addEventListener), d = "load", m = g ? function (a, b, c) {
    a.addEventListener(b, c, !1)
  } : function (a, b, c) {
    a.attachEvent("on" + b, c)
  }, p = g ? function (a, b, c) {
    a.removeEventListener(b, c, !1)
  } : function (a, b, c) {
    a.detachEvent("on" + b, c)
  };
  a.mix(a, {
    isWindow: function (a) {
      return null != a && a == a.window
    }, parseXML: function (a) {
      if (a.documentElement)return a;
      var b;
      try {
        l.DOMParser ? b = (new DOMParser).parseFromString(a, "text/xml") : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = !1, b.loadXML(a))
      } catch (c) {
        b = f
      }
      !b || !b.documentElement || b.getElementsByTagName("parsererror");
      return b
    }, globalEval: function (a) {
      a && h.test(a) && (l.execScript || function (a) {
        l.eval.call(l, a)
      })(a)
    }, ready: function (a) {
      e.done(a);
      return this
    }, available: function (b, d) {
      var b = (b + "").match(o)[1], e = 1, f, g = a.later(function () {
        ((f = c.getElementById(b)) && (d(f) || 1) || 500 < ++e) && g.cancel()
      }, 40, !0)
    }
  });
  if (n && -1 !==
    (n.search || "").indexOf("ks-debug"))a.Config.debug = !0;
  (function () {
    if (!c || "complete" === c.readyState)j(); else if (m(l, d, j), g) {
      var a = function () {
        p(c, "DOMContentLoaded", a);
        j()
      };
      m(c, "DOMContentLoaded", a)
    } else {
      var b = function () {
        "complete" === c.readyState && (p(c, "readystatechange", b), j())
      };
      m(c, "readystatechange", b);
      var e, f = i && i.doScroll;
      try {
        e = null === l.frameElement
      } catch (h) {
        e = !1
      }
      if (f && e) {
        var k = function () {
          try {
            f("left"), j()
          } catch (a) {
            setTimeout(k, 40)
          }
        };
        k()
      }
    }
  })();
  if (k.ie)try {
    c.execCommand("BackgroundImageCache", !1,
      !0)
  } catch (r) {
  }
})(KISSY, void 0);
(function (a) {
  a.config({modules: {core: {alias: "dom,event,ajax,anim,base,node,json,ua,cookie".split(",")}}});
  if ("undefined" != typeof location) {
    var f = a.startsWith(location.href, "https") ? "https://s.tbcdn.cn/s/kissy/" : "http://a.tbcdn.cn/s/kissy/";
    a.config({packages: {gallery: {base: f}, mobile: {base: f}}})
  }
})(KISSY);
(function (a, f, j) {
  a({ajax: {requires: ["dom", "json", "event"]}});
  a({anim: {requires: ["dom", "event"]}});
  a({base: {requires: ["event/custom"]}});
  a({button: {requires: ["component/base", "event"]}});
  a({calendar: {requires: ["node", "event"]}});
  a({color: {requires: ["base"]}});
  a({combobox: {requires: ["dom", "component/base", "node", "menu", "ajax"]}});
  a({"component/base": {requires: ["rich-base", "node", "event"]}});
  a({"component/extension": {requires: ["dom", "node"]}});
  a({"component/plugin/drag": {requires: ["rich-base", "dd/base"]}});
  a({"component/plugin/resize": {requires: ["resizable"]}});
  a({datalazyload: {requires: ["dom", "event", "base"]}});
  a({dd: {alias: ["dd/base", "dd/droppable"]}});
  a({"dd/base": {requires: ["dom", "node", "event", "rich-base", "base"]}});
  a({"dd/droppable": {requires: ["dd/base", "dom", "node", "rich-base"]}});
  a({"dd/plugin/constrain": {requires: ["base", "node"]}});
  a({"dd/plugin/proxy": {requires: ["node", "base", "dd/base"]}});
  a({"dd/plugin/scroll": {requires: ["dd/base", "base", "node", "dom"]}});
  a({
    dom: {
      alias: ["dom/base", j.ie && (9 >
      j.ie || 9 > document.documentMode) ? "dom/ie" : ""]
    }
  });
  a({"dom/ie": {requires: ["dom/base"]}});
  a({editor: {requires: ["node", "htmlparser", "component/base", "core"]}});
  a({event: {alias: ["event/base", "event/dom", "event/custom"]}});
  a({"event/custom": {requires: ["event/base"]}});
  a({"event/dom": {alias: ["event/dom/base", f.isTouchSupported() ? "event/dom/touch" : "", f.isDeviceMotionSupported() ? "event/dom/shake" : "", f.isHashChangeSupported() ? "" : "event/dom/hashchange", 9 > j.ie ? "event/dom/ie" : "", j.ie ? "" : "event/dom/focusin"]}});
  a({"event/dom/base": {requires: ["dom", "event/base"]}});
  a({"event/dom/focusin": {requires: ["event/dom/base"]}});
  a({"event/dom/hashchange": {requires: ["event/dom/base", "dom"]}});
  a({"event/dom/ie": {requires: ["event/dom/base", "dom"]}});
  a({"event/dom/shake": {requires: ["event/dom/base"]}});
  a({"event/dom/touch": {requires: ["event/dom/base", "dom"]}});
  a({imagezoom: {requires: ["node", "overlay"]}});
  a({json: {requires: [KISSY.Features.isNativeJSONSupported() ? "" : "json/json2"]}});
  a({kison: {requires: ["base"]}});
  a({
    menu: {
      requires: ["component/extension",
        "node", "component/base", "event"]
    }
  });
  a({menubutton: {requires: ["node", "menu", "button", "component/base"]}});
  a({mvc: {requires: ["event", "base", "ajax", "json", "node"]}});
  a({node: {requires: ["dom", "event/dom", "anim"]}});
  a({overlay: {requires: ["node", "component/base", "component/extension", "event"]}});
  a({resizable: {requires: ["node", "rich-base", "dd/base"]}});
  a({"rich-base": {requires: ["base"]}});
  a({separator: {requires: ["component/base"]}});
  a({"split-button": {requires: ["component/base", "button", "menubutton"]}});
  a({stylesheet: {requires: ["dom"]}});
  a({swf: {requires: ["dom", "json", "base"]}});
  a({switchable: {requires: ["dom", "event", "anim", KISSY.Features.isTouchSupported() ? "dd/base" : ""]}});
  a({tabs: {requires: ["button", "toolbar", "component/base"]}});
  a({toolbar: {requires: ["component/base", "node"]}});
  a({tree: {requires: ["node", "component/base", "event"]}});
  a({waterfall: {requires: ["node", "base"]}});
  a({xtemplate: {alias: ["xtemplate/facade"]}});
  a({"xtemplate/compiler": {requires: ["xtemplate/runtime"]}});
  a({
    "xtemplate/facade": {
      requires: ["xtemplate/runtime",
        "xtemplate/compiler"]
    }
  })
})(function (a) {
  KISSY.config("modules", a)
}, KISSY.Features, KISSY.UA);
(function (a) {
  (function (a) {
    a.add("empty", a.noop);
    a.add("promise", function () {
      return a.Promise
    });
    a.add("ua", function () {
      return a.UA
    });
    a.add("uri", function () {
      return a.Uri
    });
    a.add("path", function () {
      return a.Path
    })
  })(KISSY);
  a.UA.nodejs && (a.KISSY = a, module.exports = a)
})(KISSY);
