import Auto from './Auto'
import Rueda from './Ruedas';
class AutoDepotivo extends Auto {
    public cilindrarda: string;
    public turbo: boolean;
    public rueda:Rueda;

    constructor (cilindrarda:string , patente:string, modelo:string, marca:string,velocidadActual:number, velocidadMax:number, turbo:boolean, rueda:Rueda){
       super(patente,modelo,marca,velocidadMax, rueda)
       this.cilindrarda= cilindrarda;
       this.turbo=turbo;
    }

    public acelerar(): void {
        this.velocidadActual = this.velocidadActual + 50;
    }
}
   
   export default AutoDepotivo;