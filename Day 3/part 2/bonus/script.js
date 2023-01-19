var area, choosedShape, base, height, radius, length, lenghtB, axisA,axisB;

var welcome = `Welcome to shapes area calc\n
write the shape name to calc the area
(circle, triangle, square, rectangle, parallelogram, trapezium, ellipse)`;

alert(welcome);

choosedShape = prompt(`write the shape name to calc the area 
(circle, triangle, square, rectangle, parallelogram, trapezium, ellipse)`);

switch (choosedShape.toLocaleLowerCase()) {
  case "circle":
    radius = Number(prompt("Enter radius: "));
    area = Math.PI * Math.pow(radius, 2);
    alert(`Area is : ${area}`);
    break;

  case "triangle":
    base = Number(prompt("Enter base: "));
    height = Number(prompt("Enter height: "));

    area = 0.5 * base * height;

    alert(`Area is : ${area}`);
    break;

  case "rectangle":
    length = Number(prompt("Enter length of any side: "));

    area = Math.pow(length, 2);

    alert(`Area is : ${area}`);
    break;

  case "parallelogram":
    base = Number(prompt("Enter base: "));
    height = Number(prompt("Enter vertical height: "));

    area = base * height;

    alert(`Area is : ${area}`);
    break;

  case "trapezium":
    lengthA = Number(prompt("length of parallel sides (a): "));
    lengthA = Number(prompt("length of parallel sides (b): "));
    height = Number(prompt("Enter height: "));

    area = 0.5 * (lengthA + lenghtB) * height;

    alert(`Area is : ${area}`);
    break;

  case "ellipse":
    axisA = Number(prompt("length of 1/2 minor axis  (a): "));
    axisB = Number(prompt("length of 1/2 minor axis (b): "));

    area = Math.PI * axisA * axisB;

    alert(`Area is : ${area}`);
    break;

  default:
    alert("Please, Enter valid shape");
    break;
}
