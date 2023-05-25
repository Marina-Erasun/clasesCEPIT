import Rueda from "./Ruedas";
class Auto{
    public patente: string;
    public modelo: string;
    public marca: string;
    protected velocidadActual: number;
    protected velocidadMax: number;
    public encendido: boolean;
    public rueda: Rueda
    constructor(patente:string, modelo:string, marca:string, velocidadMax:number, rueda:Rueda){
       this.patente = patente;
       this.modelo = modelo;
       this.marca = marca;
       this.velocidadActual = 0;
       this.velocidadMax = 0;
       this.encendido = false;
       this.rueda=rueda
    }
    encenderApagar(){
       if(this.encendido === true){
           this.encendido = false;
           console.log('El auto se ha apagado');
           
       } else {
           this.encendido = true;
           console.log('El auto se ha encendido');
       }
    }
    public acelerar(){
       this.velocidadActual = this.velocidadActual + 10;
       console.log('El auto acelero 10km, su velocidad actual es' + this.velocidadActual);
    }
    public frenar(){
       this.velocidadActual = this.velocidadActual - 10;
    }
   }
   
   export default Auto
   
   
   
   
   
   
   