let i =10
/*function countDown(){
    const interval = setInterval (()=>{
        if (i===0){
            clearInterval (interval)
            console.log("Boom!");
        }else{
            console.log(`La bomba hara Boom en ${i} segndos`);
            i--;
        }
    },1000)
}*/

setTimeout(()=> {
    let i =10
    const interval = setInterval (()=>{
        if (i===0){
            clearInterval (interval)
            console.log("Boom!");
        }else{
            console.log(`La bomba hara Boom en ${i} segndos`);
            i--;
        }
    },1000)
},5000)


