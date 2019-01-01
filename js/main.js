//create empty menu object
//add to menu, _courses set to empty object
//add to _courses, 3 empty arrays (appetizers, mains, desserts)

const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
//create getter and setter methods for appetizers, mains, and desserts  
  get appetizers() {
    return this.appetizers;
  },
  get mains() {
    return this.mains;
  },
  get desserts() {
    return this.desserts;
  },
  
  set appetizers(appsIn) {
    this.appetizers = appsIn;
  },
  set mains(mainsIn) {
    this.mains = mainsIn;
  },
  set desserts(dessertsIn) {
    this.desserts = dessertsIn 
  },
  
//create empty getter method for _courses 
//return object w/ key/value pairs for a,m,d. 
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    }
  },
//create method to add new dish to specified course on the menu -- add 3 parameters: courseName, dishName, dishPrice  
  addDishToCourse(courseName, dishName, dishPrice) {
//the method should push new dish object (w/name and price from parameters)into appropriate array
    const dish = {
      name: dishName,
      price: dishPrice
    };
    //try setter method or this=> 
    this._courses[courseName].push(dish);
  },

//this function gets a random dish from a course on the menu to be used for generating a random meal 
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
  },
  
//this function creates a random 3 course meal
  generateRandomMeal() {
    const appetizers = this.getRandomDishFromCourse('appetizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    //const totalPrice = appetizers.price + mains.price + desserts.price;
    
    return //`Your randomly generated meal will start you off with ${appetizer.name}.Your main course will be ${main.name}.And for ${dessert.name} for dessert. Total price for your meal will be $${totalPrice}. Enjoy!`;
    'this will be fixed soon'
  }
};

//add items to menu
menu.addDishToCourse('appetizers', 'Spring Rolls', 4.50);
menu.addDishToCourse('appetizers', 'House Seasonal Salad', 6.00);
menu.addDishToCourse('appetizers', 'Queso Dip and Chips', 6.50);
menu.addDishToCourse('appetizers', 'Loaded Potato Wedges', 8.00);

menu.addDishToCourse('mains', 'Tacos w/Rice and Beans', 7.00);
menu.addDishToCourse('mains', '1/3Lb. Cheeseburger', 8.00);
menu.addDishToCourse('mains', 'Spaghetti and Meatballs', 9.00);
menu.addDishToCourse('mains', 'Shrimp Pad Thai', 10.00);
menu.addDishToCourse('mains', 'Lamb and Beef Gyro Plate', 11.00);
menu.addDishToCourse('mains', 'T-bone Steak & Onions', 12.00);

menu.addDishToCourse('desserts', 'Raspberry Cheesecake', 4.50);
menu.addDishToCourse('desserts', 'Fried Banana and Ice Cream', 5.50);
menu.addDishToCourse('desserts', 'Banana Split', 6.50);

//generate meal
let meal = menu.generateRandomMeal();
console.log(meal);