let Rectangle = function (width, height) {
    this.width = width
    this.height = height
    this.getWidth = function (){
        return this.width
    }
    this.getHeight = function (){
        return this.height
    }
    this.area = function () {
        return (this.width * this.height)
    }
    this.primeter = function () {
        return (this.width + this.height) * 2
    }
    this.drawRectangle = function (){
        let canvas = document.getElementById('myCanvas')
        if (canvas.getContext) {
            let ctx = canvas.getContext('2d');
            ctx.fillStyle='#36de52';
            ctx.fillRect(30, 20, 240, 140);
        }
    }
}
let rectangle = new Rectangle(50,100)
let width = rectangle.getWidth()
let height = rectangle.getHeight()
document.getElementById('area').innerHTML = rectangle.area()
document.getElementById('pri').innerHTML = rectangle.primeter()
rectangle.width = 20
rectangle.height = 40
document.getElementById('area').innerHTML = "Dien tich la: " + rectangle.area()
document.getElementById('pri').innerHTML = "chu vi la: " + rectangle.primeter()
rectangle.drawRectangle()