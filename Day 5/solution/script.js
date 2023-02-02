class Person {
  #healthRate;
  #sleepMood;

  constructor(name, money) {
    this.fullName = name;
    this.money = money;
  }

  set sleepMood(hours) {
    if (hours == 7) this.#sleepMood = "Happy";
    else if (hours < 7) this.#sleepMood = "Tired";
    else this.#sleepMood = "Lazy";
  }

  get sleepMood() {
    return this.#sleepMood;
  }

  /**
   * @param {number} meals
   */
  set healthRate(meals) {
    if (meals == 3) this.#healthRate = 100;
    else if (meals == 2) this.#healthRate = 75;
    else if (meals == 1) this.#healthRate = 50;
  }

  buy(itemNumber) {
    this.money = this.money - itemNumber * 10;
    console.log(this.money);
  }
}

class Employee extends Person {
  #salary;
  #workMood;
  constructor(id, name, money, sleepHours, meals, email, isManager) {
    super(name, money, sleepHours, meals);
    super.sleepMood = sleepHours;
    super.healthRate = meals;

    this.id = id;
    this.email = email;
    this.isManager = isManager;
  }

  /**
   * @param {number} hours
   */
  set workMood(hours) {
    if (hours == 8) this.#workMood = "Happy";
    else if (hours > 8) this.#workMood = "Tired";
    else this.#workMood = "Lazy";
  }

  get workMood() {
    return this.#workMood;
  }

  set salary(amount) {
    this.#salary = amount;
    if (amount < 1000) {
      this.#salary = 1000;
    }
  }

  get salary() {
    return this.#salary;
  }
}

class Office {
  constructor(name, employees) {
    this.employees = employees;
    this.name = name;
  }

  getAllEmployees() {
    return employees;
  }

  getEmployee(id) {
    return employees[id];
  }

  fire() {
    employees.pop();
  }

  hire() {
    let id = Math.floor(Math.random() * 100 + 1);
    let name = prompt("Enter your name: ");
    let money = Number(prompt("Enter how much money you have : "));
    let sleepHours = Number(prompt("How many hours you have sleep: "));
    let meals = Number(prompt("How many meals you have eaten: "));
  
    let email = prompt("Enter email: ");
    let workHours = Number(prompt("How many hours you have work: "));
    let salary = Number(prompt("Enter your salary: "));
    let isManager =
      prompt("Are you manager (yes or no): ") == "yes" ? true : false;
  
    let emp = new Employee(id, name, money, sleepHours, meals, email, workHours, salary, isManager);
    emp.workMood = workHours;
    emp.salary = salary;
  
    this.employees.push(emp);
  }


}

var employees = [];

itiOffice = new Office("ITI", employees);

run = true;
do{
  var choose = prompt(`print_all : Print All employees
  get: get specific employee
  add: add new employee
  remove: remove last employee
  quit: quit from program`);

  switch(choose){
    case "print_all":
      console.log(itiOffice.getAllEmployees());
      break;
    case "get":
      let id = Number(prompt("Enter employee id: "));
      console.log(itiOffice.getEmployee(id));
      break;
    case "add":
      itiOffice.hire();
      break;
    case "remove":
      itiOffice.fire();
      break;
    case "quit":
      run = false;
      break;
  }
}while(run && choose != null);




