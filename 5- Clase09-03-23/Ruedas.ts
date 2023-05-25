export default class Rueda{
    public tamaño: number;
    public tipo: string;
    public material: string;
    public marca: string;
    public presionAire: number=0;
    public presionMaxima: number;
    public materialCubierta: string;
    public tipoDePico: string;

    constructor (tamaño:number, tipo: string, material:string,marca:string, presionAire:number, presionMaxima: number,materialCubierta:string,tipoDePico:string){
    this.tamaño= tamaño;
    this.tipo=tipo;
    this.material=material;
    this.marca=marca;
    this.presionAire=presionAire
    this.presionMaxima= 40;
    this.materialCubierta= materialCubierta;
    this. tipoDePico = tipoDePico;
    }
    
}
