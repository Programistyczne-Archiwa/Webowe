class Figura {
    protected _nazwa: string;
    get nazwa(): string {
        return "<strong>" +  this._nazwa + "</strong>";
    }
    set nazwa(nazwa: string) {
        this._nazwa = nazwa;
    }
    protected _canvas: any;
    constructor(nazwa: string) {
        this._nazwa = "";
        this.nazwa = nazwa;
        this._canvas = null;
    }
    public setCanvas(canvas: any) {
        this._canvas = canvas;
    }
    public opis(): String {
        return("Nazwa: " + this.nazwa + ", pole powierzchni: " + this.polePow());
    }
    public polePow(): number { return 0; }
    public rysuj() {
        var ctx = this._canvas.getContext("2d");
        ctx.font = "30px Arial";
        ctx.fillText(this._nazwa, 10, 50);
    }
};

class Kolo extends Figura {
    get nazwa(): string {
        return "<strong>" +  this._nazwa + "</strong>";
    }
    set nazwa(nazwa: string) {
        this._nazwa = nazwa + " (Kolo)";
    }
    private _x: number;
    private _y: number;
    private _promien: number;
    constructor(nazwa: string, x: number, y: number, promien: number) {
        super(nazwa);
        this._x = x;
        this._y = y;
        this._promien = promien;
        this._canvas = null;
    }
    public polePow(): number {
        return Math.PI * this._promien * this._promien;
    }
    public rysuj() {
        var ctx = this._canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(this._x, this._y, this._promien, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

class Kwadrat extends Figura {
    get nazwa(): string {
        return "<strong>" +  this._nazwa + "</strong>";
    }
    set nazwa(nazwa: string) {
        this._nazwa = nazwa + " (Kwadrat)";
    }
    private _x: number;
    private _y: number;
    private _bok: number;
    constructor(nazwa: string, x: number, y: number, bok: number) {
        super(nazwa);
        this._x = x;
        this._y = y;
        this._bok = bok;
        this._canvas = null;
    }
    public polePow(): number {
        return this._bok * this._bok;
    }
    public rysuj() {
        var ctx = this._canvas.getContext("2d");
        ctx.beginPath();
        ctx.rect(this._x, this._y, this._bok, this._bok);
        ctx.stroke();
    }
}

let fig:Figura = new Figura('figura bez nazwy');
let figKo:Figura = new Kolo('kolo1', 150, 150, 70);
let figKw:Figura = new Kwadrat('kwadrat1', 20, 20, 70);