import Auto from './Auto'
import AutoDepotivo from './AutoDeportivo';
import Rueda from './Ruedas';

let ruedaPirelli:Rueda = new Rueda (14, 'calle', 'carbono', 'pirelli',0, 40, 'caucho', 'autos')
let fordFalcon:Auto = new Auto ('123abc', 'Falcon', 'Ford', 200, ruedaPirelli)
let fordKa:Auto = new Auto ('123abc', 'Ka', 'Ford', 200, ruedaPirelli)
let astra:Auto = new Auto ('123abc', 'Astra', 'chevrolet', 200, ruedaPirelli)
let minicooper:Auto = new Auto ('123abc', 'minicooper', 'minicooper', 200, ruedaPirelli)
console.log(fordFalcon);

//fordFalcon.encenderApagar()
//fordFalcon.acelerar()
//console.log(fordFalcon);

let lamborghini: AutoDepotivo = new AutoDepotivo('5000cc', 'abs123', '1994', 'lamborgini',0,300,true, ruedaPirelli)
let ferrari: AutoDepotivo = new AutoDepotivo('5000cc', 'abs123', '1992', 'ferrari',0,300,true, ruedaPirelli)
let camaro: AutoDepotivo = new AutoDepotivo('5000cc', 'abs123', '1996', 'chevrolet',0,300,true, ruedaPirelli)
let rollroyce: AutoDepotivo = new AutoDepotivo('5000cc', 'abs123', '1998', 'rollroyce',0,300,true, ruedaPirelli)
//lamborghini.encenderApagar
//lamborghini.acelerar
//lamborghini.acelerar
//console.log(lamborghini);

let listadoAutos : Auto [] = [fordFalcon, fordKa, astra, lamborghini, camaro, ferrari, minicooper,rollroyce];
function buscarModelo (array: Auto[], modelo:string){
    let autos= array.filter(auto=> auto.modelo === modelo)
    console.log(autos); 
}

buscarModelo (listadoAutos, '1992')