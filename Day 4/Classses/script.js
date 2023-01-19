class Person {
  constructor(name, money, sleepMood, healthRate) {
    this.fullName = name;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;
  }

  sleep(hours) {
    if (hours == 7) console.log("happy");
    else if (hours < 7) console.log("tired");
    else console.log("lazy");  
  }

  eat(meals){
    if (meals == 3) console.log("100% health rate");
    else if (meals == 2) console.log("75% health rate");
    else if (meals == 1) console.log("50% health rate");
  }

  buy(itemNumber)
  {
    this.money = this.money - itemNumber * 10;
    console.log(this.money);  
  }

}



const ahmed = new Person("ahmed", 5000, 7, 2);

ahmed.sleep(4);
ahmed.eat(2);
ahmed.buy(5);
