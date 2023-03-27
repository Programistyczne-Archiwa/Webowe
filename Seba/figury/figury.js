var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Figura = /** @class */ (function () {
    function Figura(nazwa) {
        this._nazwa = "";
        this.nazwa = nazwa;
        this._canvas = null;
    }
    Object.defineProperty(Figura.prototype, "nazwa", {
        get: function () {
            return "<strong>" + this._nazwa + "</strong>";
        },
        set: function (nazwa) {
            this._nazwa = nazwa;
        },
        enumerable: false,
        configurable: true
    });
    Figura.prototype.setCanvas = function (canvas) {
        this._canvas = canvas;
    };
    Figura.prototype.opis = function () {
        return ("Nazwa: " + this.nazwa + ", pole powierzchni: " + this.polePow());
    };
    Figura.prototype.polePow = function () { return 0; };
    Figura.prototype.rysuj = function () {
        var ctx = this._canvas.getContext("2d");
        ctx.font = "30px Arial";
        ctx.fillText(this._nazwa, 10, 50);
    };
    return Figura;
}());
;
var Kolo = /** @class */ (function (_super) {
    __extends(Kolo, _super);
    function Kolo(nazwa, x, y, promien) {
        var _this = _super.call(this, nazwa) || this;
        _this._x = x;
        _this._y = y;
        _this._promien = promien;
        _this._canvas = null;
        return _this;
    }
    Object.defineProperty(Kolo.prototype, "nazwa", {
        get: function () {
            return "<strong>" + this._nazwa + "</strong>";
        },
        set: function (nazwa) {
            this._nazwa = nazwa + " (Kolo)";
        },
        enumerable: false,
        configurable: true
    });
    Kolo.prototype.polePow = function () {
        return Math.PI * this._promien * this._promien;
    };
    Kolo.prototype.rysuj = function () {
        var ctx = this._canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(this._x, this._y, this._promien, 0, 2 * Math.PI);
        ctx.stroke();
    };
    return Kolo;
}(Figura));
var Kwadrat = /** @class */ (function (_super) {
    __extends(Kwadrat, _super);
    function Kwadrat(nazwa, x, y, bok) {
        var _this = _super.call(this, nazwa) || this;
        _this._x = x;
        _this._y = y;
        _this._bok = bok;
        _this._canvas = null;
        return _this;
    }
    Object.defineProperty(Kwadrat.prototype, "nazwa", {
        get: function () {
            return "<strong>" + this._nazwa + "</strong>";
        },
        set: function (nazwa) {
            this._nazwa = nazwa + " (Kwadrat)";
        },
        enumerable: false,
        configurable: true
    });
    Kwadrat.prototype.polePow = function () {
        return this._bok * this._bok;
    };
    Kwadrat.prototype.rysuj = function () {
        var ctx = this._canvas.getContext("2d");
        ctx.beginPath();
        ctx.rect(this._x, this._y, this._bok, this._bok);
        ctx.stroke();
    };
    return Kwadrat;
}(Figura));
var fig = new Figura('figura bez nazwy');
var figKo = new Kolo('kolo1', 150, 150, 70);
var figKw = new Kwadrat('kwadrat1', 20, 20, 70);
