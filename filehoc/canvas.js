// let c = document.getElementById("myCanvas");
// let ctx = c.getContext("2d");
// ctx.moveTo(0,0);
// ctx.lineTo(200,100);
// ctx.stroke();

// Su dung phuong thuc arc de ve mot duong tron
// let c = document.getElementById('myCanvas')
// let ctx = c.getContext("2d")
// ctx.beginPath();
// ctx.arc(95,50,40,0,2*Math.PI);
// ctx.stroke();


// ve chu
// let c = document.getElementById('myCanvas')
// let ctx = c.getContext("2d")
// ctx.font = "30px Arial";
// ctx.fillText("Hello World", 30, 30)

// hieu ung gradient
// let c = document.getElementById("myCanvas")
// let ctx = c.getContext("2d")
// let grd = ctx.createLinearGradient(0,0,200,0);
// grd.addColorStop(0, "red")
// grd.addColorStop(1, "white")
// ctx.fillStyle = grd;
// ctx.fillRect(10,10,150, 80)

// hieu ung gradient tron

let c = document.getElementById('myCanvas')
let ctx = c.getContext("2d")
let grd = ctx.createRadialGradient(75,60,5,90,60,100)
grd.addColorStop(0, "red")
grd.addColorStop(1, "white")
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);