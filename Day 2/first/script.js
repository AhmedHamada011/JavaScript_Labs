var age;

age = prompt("Enter your age: ");

while (age != null) {

  age = Number(age);
  if (age > 0 && age !=null) {

    if (age >= 1 && age <= 10) {

      alert("child");

    } else if (age >= 11 && age <= 18) {

      alert("teenager");

    }else if (age >= 19 && age <= 50) {

      alert("Grown up");
      
    }else if (age < 50) {

      alert("old");
    }
    age = Number(prompt("Enter your age: "));

  } else if(age < 0){

    alert("please enter valid age.");

  }
}
