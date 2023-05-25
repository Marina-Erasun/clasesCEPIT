class Auto{
    fechaFab: Date
    modelo: string

    constructor(fechaFab:Date, modelo: string){
        this.fechaFab=fechaFab
        this.modelo= modelo
    }
    const fecha: string ='2022-03-01'
    const date = new Date (fecha)
}

let auto2:Auto = new Auto (date, 'camaro');
