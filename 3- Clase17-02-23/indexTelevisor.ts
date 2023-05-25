class Televisor_1 {
    private estaPrendido:boolean;
    private volumenActual: number;
    private canalActual: number;
    private marca: string;

    public constructor(volumenInicial:number, canalInicial:number, marca:string){
        this.volumenActual=volumenInicial;
        this.canalActual=canalInicial;
        this.estaPrendido=false;
        this.marca=marca;
    }
    public subirVolumen (): void{
        this.volumenActual = this.volumenActual +1
    }
    public subirCanal (): void {
        this.canalActual = this.canalActual +1
    }
    public obtenerMarca (): string {
        return this.marca;
    }

}

let tv_1: Televisor_1 = new Televisor_1 (1,1,"BGH");
tv_1.subirCanal()
console.log (tv_1);
