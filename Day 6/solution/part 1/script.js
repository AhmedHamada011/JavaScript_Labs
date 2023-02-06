// with classses
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
//       let perimeter = this.sides * this.sideLength;
//       return perimeter;
//   }
// }

// let square = new Shape('square',4,5);

// console.log(square.calcPerimeter());


// let triangle = new Shape('triangle',3,3);

// console.log(triangle.calcPerimeter());

function Shape(name,sides,sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
}

Shape.prototype.calcPerimeter = function (){
  let perimeter = this.sides * this.sideLength;
  return perimeter;
}


let square = new Shape('square',4,5);

console.log(square.calcPerimeter());


let triangle = new Shape('triangle',3,3);

console.log(triangle.calcPerimeter());