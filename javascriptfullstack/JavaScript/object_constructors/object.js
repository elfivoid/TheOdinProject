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
