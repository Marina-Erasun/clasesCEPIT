enum Talle {
    xs=1, s, m, l, xl, xxl
}

class Pantalon {
    public modelo: string;
    public material: string;
    public talle: Talle;
constructor(modelo:string, material:string, talle:Talle){
        this.modelo=modelo;
        this.material=material
        this.talle= talle
    };
    private getTalle (talle:Talle): string{
        const talles={
        1: "xs",
        2: "s",
        3: "m",
        4: "l",
        5: "xl",
        6: "xxl",
        }
        return talles [talle] || "desconocido";
    }
    public getPantalon(): string|undefined {
        return `
        Modelo:   ${this.modelo}
        Material: ${this.material} 
        Talle:    ${this.getTalle(this.talle)}
        `;
    }
  }

const panta1 = new Pantalon("Bulldog", "nylon", Talle.m);
panta1.getPantalon;


