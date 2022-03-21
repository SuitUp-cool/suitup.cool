// var url = 'images/suitup/Slider - top@2x.png';
// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');
// var img = new Image();
// img.src = url;
// img.onload = function () {
//   //var width = Math.min(500, 1920);
//   var width = 1920;
//   var height = 1080;

//   canvas.width = width;
//   canvas.height = height;
//   ctx.drawImage(img, 0, 0, width, height);
// };

// var isPress = false;
// var old = null;
// canvas.addEventListener('mousedown', function (e){
//   isPress = true;
//   old = {x: e.offsetX, y: e.offsetY};
// });
// canvas.addEventListener('mousemove', function (e){
//   if (isPress) {
//     var x = e.offsetX;
//     var y = e.offsetY;
//     ctx.globalCompositeOperation = 'destination-out';

//     ctx.beginPath();
//     ctx.arc(x, y, 30, 0, 2 * Math.PI);
//     ctx.fill();

//     ctx.lineWidth = 60;
//     ctx.beginPath();
//     ctx.moveTo(old.x, old.y);
//     ctx.lineTo(x, y);
//     ctx.stroke();

//     old = {x: x, y: y};

//   }
// });
// canvas.addEventListener('mouseup', function (e){
//   isPress = false;
// });