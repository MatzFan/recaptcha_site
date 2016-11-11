// bytecode interpreter for reCaptcha

var G = this,
    n = function(O, Y, I) {
        if ("object" == (Y = typeof O, Y))
            if (O) {
                if (O instanceof Array) return "array";
                if (O instanceof Object) return Y;
                if (I = Object.prototype.toString.call(O), "[object Window]" == I) return "object";
                if ("[object Array]" == I || "number" == typeof O.length && "undefined" != typeof O.splice && "undefined" != typeof O.propertyIsEnumerable && !O.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == I || "undefined" != typeof O.call && "undefined" != typeof O.propertyIsEnumerable && !O.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == Y && "undefined" == typeof O.call) return "object";
        return Y
    },
    g, X = (new function() {}, function(O, Y) {
        try {
            W(this, O, Y)
        } catch (I) {
            C(this, I)
        }
    }),
    V = function(O, Y, I, p) {
        try {
            for (p = 0; 101513633568 != p;) O += (Y << 4 ^ Y >>> 5) + Y ^ p + I[p & 3], p += 3172301049, Y += (O << 4 ^ O >>> 5) + O ^ p + I[p >>> 11 & 3];
            return [O >>> 24, O >> 16 & 255, O >> 8 & 255, O & 255, Y >>> 24, Y >> 16 & 255, Y >> 8 & 255, Y & 255]
        } catch (z) {
            throw z;
        }
    },
    Q = function(O, Y) {
        return O[Y] << 24 | O[Y + 1] << 16 | O[Y + 2] << 8 | O[Y + 3]
    },
    l = function(O, Y, I, p, z, b) {
        for (p = (89 == (z = O.f(Y), Y) ? (Y = function(O, Y, I, p) {
                if ((Y = z.length, I = Y - 4 >> 3, z).l != I) {
                    p = [0, (z.l = I, 0), 0, b], I = (I << 3) - 4;
                    try {
                        z.g = V(Q(z, I), Q(z, I + 4), p)
                    } catch (e) {
                        throw e;
                    }
                }
                z.push(z.g[Y & 7] ^ O)
            }, b = O.f(201)) : Y = function(O) {
                z.push(O)
            }, p && Y(p & 255), 0), O = I.length; p < O; p++) Y(I[p])
    },
    a = function(O, Y) {
        for (Y = []; O--;) Y.push(255 * Math.random() | 0);
        return Y
    },
    F = function(O, Y, I, p, z, b) {
        return function() {
            var P = p & 1,
                m = [5, Y, I, void 0, z, b, arguments];
            if (p & 2 && A(O, false), P && O.V.length) d(O, m);
            else return t(O, m)
        }
    },
    r = function(O, Y, I) {
        if (!((Y = O.f(68), Y) in O.c)) throw O.B(31), O.v;
        return ((void 0 == O.u && (O.u = Q(O.c, Y - 4), O.$ = void 0), O.$ != Y >> 3 && (O.$ = Y >> 3, I = [0, 0, 0, O.f(140)], O.C = V(O.u, O.$, I)), L)(O, 68, Y + 1), O.c[Y]) ^ O.C[Y % 8]
    },
    c = function(O, Y, I, p, z, b) {
        for (b = (z = (p = ((I = r((Y = {}, O)), Y.T = r(O), Y).D = [], r(O)) - 1, r(O)), 0); b < p; b++) Y.D.push(r(O));
        for (Y.R = O.f(I), Y.o = O.f(z); p--;) Y.D[p] = O.f(Y.D[p]);
        return Y
    },
    L = ((g = X.prototype, X.prototype).B = function(O, Y, I, p) {
        Y = ((void 0 != (p = this.f(107), O = [O, p >> 8 & 255, p & 255], I) && O.push(I), 0 == this.f(211).length) && (this.G[211] = void 0, L(this, 211, O)), I = "", Y && (Y.message && (I += Y.message), Y.stack && (I += ":" + Y.stack)), this).f(9), 3 < Y && (I = I.slice(0, Y - 3), Y -= I.length + 3, I = U(I.replace(/\\r\\n/g, "\\n")), l(this, 89, q(I.length, 2).concat(I), 9)), L(this, 9, Y)
    }, g.Z = false, function(O, Y, I) {
        if (68 == Y || 107 == Y)
            if (O.G[Y]) O.G[Y][O.S](I);
            else O.G[Y] = O.I(I);
        else if (179 != Y && 89 != Y && 211 != Y || !O.G[Y]) O.G[Y] = O.O(I, O.f);
        140 == Y && (O.u = void 0, L(O, 68, O.f(68) + 4))
    }),
    B = (X.prototype.X = function(O, Y, I) {
        if (3 == O.length) {
            for (I = 0; 3 > I; I++) Y[I] += O[I];
            for (I = 0, O = [13, 8, 13, 12, 16, 5, 3, 10, 15]; 9 > I; I++) Y[3](Y, I % 3, O[I])
        }
    }, function(O, Y, I) {
        return (I = O.f(68), O.c && I < O.c.length) ? (L(O, 68, O.c.length), u(O, Y)) : L(O, 68, Y), O.H(I)
    }),
    h = function(O, Y) {
        return (Y = r(O), Y) & 128 && (Y = Y & 127 | r(O) << 7), Y
    },
    C = (g.K = "caller", function(O, Y) {
        O.N = ("E:" + Y.message + ":" + Y.stack).slice(0, 2048)
    }),
    W = function(O, Y, I, p) {
        ((((((((((((((((((((p = ((((((((O.m = O.P(), O.G = [], O).O = function(O, Y, I, p, T, E, e, H, D) {
            return O = (((H = (e = (p = (T = function() {
                return p()
            }, function(O, z, b) {
                for (O = (O = T[b = 0, I.K], z = O === Y, O && O[I.K]); O && O != E && O != e && O != H && O != D && 20 > b;) b++, O = O[I.K];
                return p[I.F + z + !(!O + (b + 3 >> 3))]
            }), X), I = this, D = I.b, I.B), E = I.H, T)[I.S] = function(O) {
                p[I.A] = O
            }, T)[I.S](O), T)
        }, O.I = function(O, Y, I) {
            return Y = (I = function() {
                return O
            }, function() {
                return I()
            }), Y[this.S] = function(z) {
                O = z
            }, Y
        }, L)(O, 68, 0), L)(O, 107, 0), L(O, 145, function(O, Y, I) {
            (I = (Y = r(O), r)(O), L)(O, I, "" + O.f(Y))
        }), L(O, 148, function(O) {
            w(O, 1)
        }), L(O, 52, function(O, Y, I, p) {
            if (Y = O.s.pop()) {
                for (I = r(O); 0 < I; I--) p = r(O), Y[p] = O.G[p];
                Y[211] = O.G[211], O.G = Y
            } else L(O, 68, O.c.length)
        }), L(O, 2, 0), L)(O, 140, 0), L(O, 42, function(O, Y, I, p, T) {
            for (p = (I = (Y = r(O), h(O)), T = 0, []); T < I; T++) p.push(r(O));
            L(O, Y, p)
        }), L(O, 71, function(O, Y, I, p, T) {
            for (p = (Y = [], I = r(O), 0); p < I; p++) T = r(O), Y.push(O.f(T));
            (I = r(O), L)(O, I, function(O, z) {
                for (z = 0; z < Y.length; z++)(0, Y[z])(O)
            })
        }), O.i = false, L)(O, 189, function(O, Y, I, p, T, E, e) {
            (0 == (T = (p = (Y = c(O), Y).o, Y).R, I = Y.D, e = I.length, e) ? E = new p[T] : 1 == e ? E = new p[T](I[0]) : 2 == e ? E = new p[T](I[0], I[1]) : 3 == e ? E = new p[T](I[0], I[1], I[2]) : 4 == e ? E = new p[T](I[0], I[1], I[2], I[3]) : O.B(22), L)(O, Y.T, E)
        }), O.s = [], L(O, 67, []), L)(O, 169, function(O, Y, I) {
            Y = r(O), I = r(O), Y = O.f(Y), L(O, I, n(Y))
        }), L(O, 53, function(O, Y, I, p) {
            p = (Y = r(O), I = r(O), r)(O), O.f(Y)[O.f(I)] = O.f(p)
        }), L)(O, 8, function(O, Y, I, p) {
            (p = (I = (Y = r(O), r(O)), r)(O), L)(O, p, O.f(Y) >> I)
        }), I).Y || function() {}, L(O, 185, function(O) {
            O.j(4)
        }), L)(O, 217, function(O, Y, I, p) {
            p = (Y = r(O), I = r(O), r(O)), L(O, p, (O.f(Y) in O.f(I)) + 0)
        }), L)(O, 211, []), L)(O, 9, 2048), L(O, 93, function(O, Y, I, p) {
            p = (I = (Y = r(O), r(O)), r)(O), L(O, p, O.f(Y) || O.f(I))
        }), L(O, 242, function() {}), L)(O, 154, function(O) {
            f(O, 4)
        }), L)(O, 191, function(O, Y, I, p, T) {
            (p = (I = (Y = (Y = r(O), I = r(O), p = r(O), O.f(Y)), T = O.f(r(O)), O).f(I), O).f(p), 0) !== Y && (p = F(O, p, T, 1, Y, I), Y.addEventListener(I, p, K), L(O, 223, [Y, I, p]))
        }), L)(O, 121, G), L)(O, 126, function(O, Y) {
            O.i && (Y = O.f(68), L(O, 68, O.c.length), O.V.push([3, Y]))
        }), L(O, 104, 104), L(O, 142, function(O, Y, I) {
            Y = (Y = r(O), I = r(O), O).G[Y] && O.f(Y), L(O, I, Y)
        }), L(O, 1, function(O, Y) {
            (O = (Y = r(O), O).f(Y), O[0]).removeEventListener(O[1], O[2], false)
        }), L)(O, 223, 0), L(O, 164, function(O, Y, I, p) {
            (p = (I = (Y = r(O), r(O)), r(O)), O.f(Y)) == O.f(I) && L(O, p, O.f(p) + 1)
        }), O.W = function(O, Y) {
            (Y.push(O[0] << 24 | O[1] << 16 | O[2] << 8 | O[3]), Y).push(O[4] << 24 | O[5] << 16 | O[6] << 8 | O[7]), Y.push(O[8] << 24 | O[9] << 16 | O[10] << 8 | O[11])
        }, L(O, 249, function(O, Y, I) {
            (I = (Y = r(O), r(O)), L)(O, I, O.f(I) + O.f(Y))
        }), L)(O, 89, a(4)), L)(O, 64, function(O, Y) {
            (Y = c(O), L)(O, Y.T, Y.R.apply(Y.o, Y.D))
        }), L(O, 29, function(O, Y, I, p, T) {
            I = (T = (I = (Y = r(O), r)(O), p = O.f(r(O)), O).f(r(O)), O.f(I)), L(O, Y, F(O, I, p, T))
        }), L)(O, 179, [160, 0, 0]), L)(O, 172, O), L)(O, 201, 0), L)(O, 96, function(O, Y) {
            Y = O.f(r(O)), u(O, Y)
        }), O).V = [], L)(O, 208, function(O) {
            w(O, 4)
        }), L)(O, 18, function(O, Y, I, p, T, E, e, H, D, S) {
            if (void 0 != (p = (I = (Y = r(O), h)(O), ""), O).G[4])
                for (T = O.f(4), e = T.length, E = 0; I--;) E = (E + h(O)) % e, p += T[E];
            else {
                for (T = 0, p = []; T < I; T++) p.push(r(O));
                for (I = [], E = T = 0; T < p.length;) e = p[T++], 128 > e ? I[E++] = String.fromCharCode(e) : 191 < e && 224 > e ? (H = p[T++], I[E++] = String.fromCharCode((e & 31) << 6 | H & 63)) : 239 < e && 365 > e ? (H = p[T++], D = p[T++], S = p[T++], e = ((e & 7) << 18 | (H & 63) << 12 | (D & 63) << 6 | S & 63) - 65536, I[E++] = String.fromCharCode(55296 + (e >> 10)), I[E++] = String.fromCharCode(56320 + (e & 1023))) : (H = p[T++], D = p[T++], I[E++] = String.fromCharCode((e & 15) << 12 | (H & 63) << 6 | D & 63));
                p = I.join("")
            }
            L(O, Y, p)
        }), L(O, 113, function(O) {
            f(O, 2)
        }), L)(O, 33, function(O, Y, I, p, T, E) {
            if ((p = (p = (Y = r(O), I = r(O), r)(O), T = r(O), Y = O.f(Y), I = O.f(I), O.f(p)), O = O.f(T), "object") == n(Y)) {
                for (E in T = [], Y) T.push(E);
                Y = T
            }
            for (E = (T = 0, Y).length; T < E; T += p) I(Y.slice(T, T + p), O)
        }), L(O, 124, function(O, Y, I) {
            (I = (Y = r(O), r)(O), L)(O, I, function(O) {
                return eval(O)
            }(O.f(Y)))
        }), L)(O, 106, {}), L)(O, 197, function(O) {
            f(O, 1)
        }), L(O, 127, function(O, Y, I, p) {
            (Y = (I = (p = (I = (Y = r(O), r)(O), r(O)), O.f(I)), O).f(Y), L)(O, p, Y[I])
        }), L(O, 103, function(O, Y, I) {
            (Y = r(O), I = r(O), 0) != O.f(Y) && L(O, 68, O.f(I))
        }), Y && "!" == Y.charAt(0) ? (O.N = Y, p()) : (O.c = N(Y), O.c && O.c.length ? (Y = !!I.Y, O.i = Y, d(O, [4, p]), O.H(), A(O, Y)) : (O.B(17), p()))
    },
    N = ((X.prototype.w = function(O, Y, I, p) {
        try {
            p = O[(Y + 2) % 3], O[Y] = O[Y] - O[(Y + 1) % 3] - p ^ (1 == Y ? p << I : p >>> I)
        } catch (z) {
            throw z;
        }
    }, X.prototype).f = function(O, Y) {
        if (void 0 === (Y = this.G[O], Y)) throw this.B(30, 0, O), this.v;
        return Y()
    }, function(O, Y, I, p, z) {
        if (Y = window.atob) {
            for (O = Y(O), Y = [], p = I = 0; p < O.length; p++) {
                for (z = O.charCodeAt(p); 255 < z;) Y[I++] = z & 255, z >>= 8;
                Y[I++] = z
            }
            O = Y
        } else O = null;
        return O
    }),
    q = ((g.S = "toString", g).v = {}, function(O, Y, I, p) {
        for (p = Y - 1, I = []; 0 <= p; p--) I[Y - 1 - p] = O >> 8 * p & 255;
        return I
    }),
    u = function(O, Y) {
        ((O.s.push(O.G.slice()), O.G)[68] = void 0, L)(O, 68, Y)
    },
    U = (g = (g.A = (g.F = 34, 36), X.prototype), function(O, Y, I, p, z) {
        for (p = (Y = [], I = 0); p < O.length; p++) z = O.charCodeAt(p), 128 > z ? Y[I++] = z : (2048 > z ? Y[I++] = z >> 6 | 192 : (55296 == (z & 64512) && p + 1 < O.length && 56320 == (O.charCodeAt(p + 1) & 64512) ? (z = 65536 + ((z & 1023) << 10) + (O.charCodeAt(++p) & 1023), Y[I++] = z >> 18 | 240, Y[I++] = z >> 12 & 63 | 128) : Y[I++] = z >> 12 | 224, Y[I++] = z >> 6 & 63 | 128), Y[I++] = z & 63 | 128);
        return Y
    }),
    J = (g.P = function(O) {
        return (O = window.performance) && O.now ? function() {
            return O.now() | 0
        } : function() {
            return +new Date
        }
    }(), function(O, Y) {
        if (Y = O.P(), 15 > Y - O.m || 0 != document.hidden) return false;
        return O.m = Y, true
    }),
    A = function(O, Y) {
        0 != O.V.length && (Y && !J(O) ? R(O, Y) : Y ? O.a(function() {
            R(O, Y)
        }) : R(O, Y))
    },
    f = (g.H = function(O, Y, I, p, z, b, P) {
        try {
            for (Y = (I = 5001, z = (p = void 0, 0), this.c).length;
                (--I || this.Z) && (z = this.f(68)) < Y;) try {
                L(this, 107, z), b = r(this), (p = this.f(b)) && p.call ? p(this) : this.B(21, 0, b)
            } catch (m) {
                m != this.v && (P = this.f(104), 104 != P ? (L(this, P, m), L(this, 104, 104)) : this.B(22, m))
            }
            I || this.B(33)
        } catch (m) {
            try {
                this.B(22, m)
            } catch (T) {
                C(this, T)
            }
        }
        return Y = this.f(106), O && L(this, 68, O), Y
    }, function(O, Y, I, p) {
        for (I = r(O), p = 0; 0 < Y; Y--) p = p << 8 | r(O);
        L(O, I, p)
    }),
    w = (g.U = function(O, Y, I) {
        return O ^ ((Y = ((Y ^= Y << 13, Y ^= Y >> 17, Y) ^ Y << 5) & I) || (Y = 1), Y)
    }, function(O, Y, I, p) {
        I = r(O), p = r(O), l(O, p, q(O.f(I), Y))
    }),
    K = (X.prototype.b = function(O, Y, I, p, z) {
        if ((Y = O[0], 1) == Y) Y = O[2], I = O[1], Y.push(this.f(179).length, this.f(89).length, this.f(67).length, this.f(9)), this.i = I, L(this, 106, O[3]), this.G[235] && B(this, this.f(235));
        else {
            if (2 == Y) {
                if (I = ((O = (4 < (0 < (p = (0 < (I = q((Y = O[2], this.f(179)).length + 2, 2), O = this.f(211), O.length) && l(this, 179, q(O.length, 2).concat(O), 10), O = this.f(2) & 511, O -= this.f(179).length + 5, this.f(89)), 4 < p.length && (O -= p.length + 3), O) && l(this, 179, q(O, 2).concat(a(O)), 15), p).length && l(this, 179, q(p.length, 2).concat(p), 156), a(2).concat(this.f(179))), O[1] = O[0] ^ 6, O[3] = O[1] ^ I[0], O)[4] = O[1] ^ I[1], window.btoa)) {
                    for (p = (z = 0, ""); z < O.length; z += 8192) p += String.fromCharCode.apply(null, O.slice(z, z + 8192));
                    I = I(p).replace(/\\+/g, "-").replace(/\\/g, "_").replace(/=/g, "")  // removed extra / after /\ \ / and before g
                } else I = void 0;
                if (I) I = "!" + I;
                else
                    for (p = 0, I = ""; p < O.length; p++) z = O[p][this.S](16), 1 == z.length && (z = "0" + z), I += z;
                return (O = ((this.f(179).length = Y[0], this).f(89).length = Y[1], this.f(67).length = Y[2], I), L)(this, 9, Y[3]), O
            }
            if (3 == Y) B(this, O[1]);
            else if (5 == Y) return B(this, O[1])
        }
    }, g.L = function(O, Y, I, p, z, b) {
        for (b = p = (I = [], 0); b < O.length; b++)
            for (z = z << Y | O[b], p += Y; 7 < p;) p -= 8, I.push(z >> p & 255);
        return I
    }, false),
    t = (X.prototype.a = window.requestIdleCallback ? function(O) {
        window.requestIdleCallback(O, {
            timeout: 4
        })
    } : window.setImmediate ? function(O) {
        window.setImmediate(O)
    } : function(O) {
        setTimeout(O, 0)
    }, X.prototype.j = function(O, Y, I, p) {
        ((I = (p = (Y = O & 4, O &= 3, I = r(this), r(this)), this.f(I)), Y && (I = U(("" + I).replace(/\\r\\n/g, "\\n"))), O) && l(this, p, q(I.length, 2)), l)(this, p, I)
    }, function(O, Y, I, p, z) {
        if (I = Y[0], 1 == I) O.b(Y);
        else if (2 == I) {
            p = (I = Y[1], Y)[3];
            try {
                O.i = false, z = O.b(Y)
            } catch (b) {
                C(O, b), z = O.N
            }
            I && I(z), p.push(z)
        } else if (3 == I) O.b(Y);
        else if (4 == I) O.i = false, Y = Y[1], Y();
        else if (5 == I) return z = Y[2], L(O, 63, Y[6]), L(O, 106, z), O.b(Y)
    }),
    R = function(O, Y, I) {
        if (I = O.V.pop()) t(O, I), A(O, Y)
    },
    d = function(O, Y) {
        O.V.splice(0, 0, Y)
    };
(g.J = function(O, Y, I, p, z, b) {
    if (this.N) return this.N;
    try {
        b = [], z = [], p = !!O, d(this, [1, p, z, Y]), d(this, [2, O, z, b]), A(this, p), I = b[0]
    } catch (P) {
        C(this, P), I = this.N, O && O(I)
    }
    return I
}, g).M = function(O, Y, I, p, z) {
    for (z = p = 0; z < O.length; z++) p += O.charCodeAt(z), p += p << 10, p ^= p >> 6;
    return (p = new Number((p += p << 3, p ^= p >> 11, O = p + (p << 15) >>> 0, O & (1 << Y) - 1)), p)[0] = (O >>> Y) % I, p
};
try {
    window.addEventListener("unload", function() {}, K), window.addEventListener("test", null, Object.defineProperty({}, "passive", {
        get: function() {
            K = {
                passive: true
            }
        }
    }))
} catch (O) {}(G.botguard || (G.botguard = {}), G).botguard.bg = function(O, Y, I) {
    (I = new X(O, {
        Y: Y
    }), this).invoke = function(O, Y, b) {
        return (b = I.J(Y && O, b), O) && !Y && O(b), b
    }
