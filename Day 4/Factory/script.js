function Person(name, money, sleepMood, healthRate) {
  return {
    name,
    money,
    sleepMood,
    healthRate,
    sleep(hours) {
      if (hours == 7) console.log("happy");
      else if (hours < 7) console.log("tired");
      else console.log("lazy");
    },
    eat(meals) {
      if (meals == 3) console.log("100% health rate");
      else if (meals == 2) console.log("75% health rate");
      else if (meals == 1) console.log("50% health rate");
    },
    buy(itemNumber) {
      this.money = this.money - itemNumber * 10;
      console.log(this.money);
    },
  };
}


const ahmed = Person("ahmed", 5000, 7, 2);
console.log(ahmed);
ahmed.sleep(4);
ahmed.eat(2);
ahmed.buy(5);
