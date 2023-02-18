// using classes
// class Shape {
//   name;
//   sides;
//   sideLength;

//   constructor(name,sides,sideLength){
//     this.name = name;
//     this.sides = sides;
//     this.sideLength = sideLength;
//   }

//   calcPerimeter(){
//     let perimeter = this.sides * this.sideLength;
//     return perimeter;
//   }
// }

// class Square extends Shape{
//   constructor(sideLength){
//     super('square',4,sideLength);

//   }

//   calcArea(){
//     let perimeter = 4 * this.sideLength;
//     return perimeter;
//   }

// }

// let square = new Square(5);

// console.log(square.calcArea());


// let triangle = new Shape('square',3,3);

// console.log(triangle.calcPerimeter());


// with function constructor

function Shape (name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
}

Shape.prototype.calcPerimeter = function (){
  let perimeter = this.sides * this.sideLength;
  return perimeter;
}

function Square(sideLength){

  Shape.call(this,"square", 4, sideLength);

}

Square.prototype.calcArea =   function (){
  let perimeter = 4 * this.sideLength;
  return perimeter;
}


let square = new Square(5);

console.log(square.calcArea());


let triangle = new Shape('square',3,3);

console.log(triangle.calcPerimeter());