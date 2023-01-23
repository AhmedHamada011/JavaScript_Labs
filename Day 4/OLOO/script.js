const Person  = {
  init(name, money, sleepMood, healthRate) {
    this.fullName = name;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;

    return this;
  },

  sleep: function (hours) {
    if (hours == 7) console.log("happy");
    else if (hours < 7) console.log("tired");
    else console.log("lazy");  
  },

  eat: function(meals){
    if (meals == 3) healthRate = 100;
    else if (meals == 2) healthRate = 75;
    else if (meals == 1) healthRate = 50;
  },

  buy: function(itemNumber)
  {
    this.money = this.money - itemNumber * 10;
    console.log(this.money);  
  }

}




const ahmed = Object.create(Person).init("ahmed", 5000, 7, 2);
console.log(ahmed);
ahmed.sleep(4);
ahmed.eat(2);
ahmed.buy(5);
