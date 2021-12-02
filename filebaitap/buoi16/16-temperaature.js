// let Temperature = function (celcius){
//     this.celcius = celcius;
//     this.CtoK = function (){
//         return this.celcius + 273.15
//     }
//     this.CtoF = function (){
//         return this.celcius * 1.8 + 32
//     }
//
// }
// let temperature = new Temperature()
// temperature.celcius = 25
// let k = temperature.CtoK()
// let j = temperature.CtoF()
// alert(k)
// alert(j)

class Temperature {
    celcius

    constructor(celcius) {
        this.celcius = celcius
    }
    getC(){
        return this.celcius
    }
    setC(nameSet){
        return this.celcius = nameSet
    }

    Ctok() {
        return this.celcius + 273.15
    }

    CtoF() {
        return this.celcius * 1.8 + 32
    }
}
let temperarure = new Temperature(25)
temperarure.setC(36)
console.log(temperarure.getC())
console.log(temperarure.CtoF())
console.log(temperarure.Ctok())