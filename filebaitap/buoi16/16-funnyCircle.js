// function Circle(x, y, radius){
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
// }
// function createCircle(){
//     let ctx = document.getElementById("myCanvas").getContext("2d");
//     let circle= new Circle(500, 500, 80);
//     ctx.beginPath();
//     ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
//     ctx.fill();
// }
//
// createCircle();

// ve hinh tron voi kich thuoc ngau nhien
// function Circle(x, y, radius){
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
// }
// function createCircle(){
//     let ctx = document.getElementById('myCanvas').getContext("2d")
//     let radius = Math.floor(Math.random()*60)
//     let circle = new Circle(500,500, radius)
//     ctx.beginPath();
//     ctx.arc(circle.x, circle.y, circle.radius, 0,2*Math.PI)
//     ctx.fill()
// }
// createCircle()

//  ve hinh tron mau ngau nhien
// function Circle(x, y, radius){
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
//
// }
// function getRandomHex(){
//     return Math.floor(Math.random()*255);
// }
// function getRandomColor(){
//     let red = getRandomHex();
//     let green = getRandomHex()
// }
// function createCirle(){
//     let ctx = document.getElementById('myCanvas').getContext('2d')
//     let radius = Math.floor(Math.random()*80)
//     let color = getRandomColor();
//     let circle = new Circle(500,500,radius)
//     ctx.beginPath()
//     ctx.arc(circle.x, circle.y, circle.radius, 0,2 * Math.PI)
//     ctx.fillStyle = color
//     ctx.fill()
//
// }
// createCirle()

// ve nhieu hinh tron
// function Circle(x, y, radius){
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
// }
//
// function getRandomHex(){
//     return Math.floor(Math.random()*255);
// }
//
// function getRandomColor(){
//     var red = getRandomHex();
//     var green = getRandomHex();
//     var blue = getRandomHex();
//     return "rgb(" + red + "," + blue + "," + green +")";
// }
//
// function createCircle(){
//     var ctx = document.getElementById("myCanvas").getContext("2d");
//     var radius = Math.floor(Math.random() * 80);
//     var color = getRandomColor();
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     var circle= new Circle(x, y, radius);
//     ctx.beginPath();
//     ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
//     ctx.fillStyle = color;
//     ctx.fill();
//     ctx.closePath()
// }
//
// function createMultipleCircle(){
//     for(var i = 0; i < 40; i++){
//         createCircle();
//     }
// }
//
// createMultipleCircle();

// ve theo chuan ES6
// class Circle {
//     constructor(x, y, radius) {
//     this.radius = radius
//         this.x = x
//         this.y = y
    }
    // getRadius(){
    //     return this.radius
    // }
    // setRadius (r){
    //     return this.radius = r
    // }
}
// function createCircle(){
//     let ctx = document.getElementById('myCanvas').getContext('2d');
//     let circle = new Circle(500, 500, 80)
//     ctx.beginPath();
//     ctx.arc(circle.x, circle.y, circle.radius, 0, 2*Math.PI)
//     ctx.fill()
//     ctx.closePath()
// }
// createCircle()

// tao hinh tron ban kinh va vi tri bat ky
