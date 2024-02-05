function Productos(nombre,precio,stock,preparacion){
  this.nombre=nombre;
  this.precio=precio;
  this.stock=stock;
  this.preparacion=preparacion
}

let producto1=new Productos("Salmón","20000",true,"El salmón es delicioso a la parrilla con un poco de limón y hierbas frescas. También puedes hornearlo con una costra de especias y servirlo con salsa de mantequilla de limón.")
let producto2=new Productos("Boga despinada","7000",false,"A la parrilla")
let producto3=new Productos("Camarones","10000",true,"Copa de camarones")
let producto4=new Productos("Rabas","12000",true,"Fritas")
let producto5=new Productos("Dorado","8000",true,"A la parrilla")
let producto6=new Productos("Pacú","6000",true,"Con roquefort")
let producto7=new Productos("Empanadas de surubí","6000",true,"Al horno o fritas")
let producto8=new Productos("Milanesas de tarucha","5000",true,"Al horno")

let botonver=document.getElementById("ver")
botonver.addEventListener("click",function(){
  let container=document.getElementById("productos")
  let ver=document.createElement("div")
  ver.innerHTML=`<p>${producto1.nombre}</p>
  <p>${producto2.nombre}</p>
  <p>${producto3.nombre}</p>
  <p>${producto4.nombre}</p>
  <p>${producto5.nombre}</p>
  <p>${producto6.nombre}</p>
  <p>${producto7.nombre}</p>
  <p>${producto8.nombre}</p>`
  container.appendChild(ver)
})


