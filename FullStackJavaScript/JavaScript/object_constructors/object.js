"use strict"

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

const player = new Player("steve", "x");
console.log(player.name) //"steve"

function Player(name, marker) {
    //Error Logging
    if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
        console.log(this.name);
    };
}

const player1 = new Player("steve", "x");
const player2 = new Player ("also steve", "O");
player1.sayName(); //log "steve"
player2.sayName(); //log "also steve"


// ------------------ Exercise -----------------------------------------------

function Book(title, author, pages, read) {
    if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    console.log(this.title);
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages}, ${this.read}.`;
};
const newBook = new Book("The Hobbit", "J.R.R Tolkien", "295 pages", "not read yet");

console.log(newBook.info());



Object.getPrototypeOf(player1) === Player.prototype; //returns true
Object.getPrototypeOf(player2) === Player.prototype; //returns true

Player.prototype.sayHello = function() {
  console.log("Hello, I'm a player!");
};

player1.sayHello(); // logs "Hello, I'm a player!"
player2.sayHello(); // logs "Hello, I'm a player!"

// ------------------ Character Creation -----------------------------------------------

let x = {};
console.log(Object.getPrototypeOf(x)); //to find the newly created object

// Initialize constructor functions
function Hero(name, level) {
  this.name = name;
  this.level = level;
}

function Warrior(name, level, weapon) {
  Hero.call(this, name, level);

  this.weapon = weapon;
}

function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}

// Link prototypes and add prototype methods
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
}

Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
}

Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`;
}

// Initialize individual character instances
const hero1 = new Warrior('Bjorn', 1, 'axe');
const hero2 = new Healer('Kanin', 1, 'cure');


// ------------------ Prototype Inheritance -----------------------------------------------

/* let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
}

Object.setPrototypeOf(pockets, bed);
Object.setPrototypeOf(bed, table);
Object.setPrototypeOf(table, head);



console.log(pockets.pen);
console.log(pockets.glasses);
console.log(pockets.money); */


//Faster solution, create prototype direct
let head = {
    glasses: 1
};
let table = Object.create(head);
table.pen = 3;

let bed = Object.create(table);
bed.sheet = 1;
bed.pillow = 2;

let pockets = Object.create(bed);
pockets.money = 2000;

console.log(pockets.pen);     // 3
console.log(pockets.glasses); // 1
console.log(pockets.money);   // 2000

//Hamster Quiz

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach = [food];
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
console.log( speedy.stomach ); // apple

// This one also has it, why? fix please.
console.log( lazy.stomach ); // apple