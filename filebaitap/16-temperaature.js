let Temperature = function (celcius){
    this.celcius = celcius;
    this.CtoK = function (){
        return this.celcius + 273.15
    }
    this.CtoF = function (){
        return this.celcius * 1.8 + 32
    }

}
let temperature = new Temperature()
temperature.celcius = 25
let k = temperature.CtoK()
let j = temperature.CtoF()
alert(k)
alert(j)