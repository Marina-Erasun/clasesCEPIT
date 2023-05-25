var Televisor = /** @class */ (function () {
    function Televisor(volumenInicial, canalInicial, marca) {
        this.volumenActual = volumenInicial;
        this.canalActual = canalInicial;
        this.estaPrendido = false;
        this.marca = marca;
    }
    Televisor.prototype.subirVolumen = function () {
        this.volumenActual = this.volumenActual + 1;
    };
    Televisor.prototype.subirCanal = function () {
        this.canalActual = this.canalActual + 1;
    };
    Televisor.prototype.obtenerMarca = function () {
        return this.marca;
    };
    return Televisor;
}());
var tv = new Televisor(1, 1, "BGH");
tv.subirCanal();
tv.subirCanal();
tv.subirCanal();
tv.subirCanal();
tv.subirCanal();
tv.subirCanal();
console.log(tv);
