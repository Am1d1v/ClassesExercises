


const Book = function(title, author){
    this.title = title;
    this.author = author;
};

Book.prototype.read = function(){
    this.isRead = true;
};

class BookClass {
    constructor(title, author){
        this.title = title;
        this.author = author;
        this.isRead = false;
    };

    read(){
        this.isRead = false;
    }
};

const LOTR = new BookClass("lotr", "Tolkien");
console.log(LOTR);
console.log(LOTR instanceof BookClass);
console.log(LOTR.__proto__);

LOTR.read();

//====== Setters & Getters ==========================


const task = {
    title: "Task1",
    dueTo: new Date('2024/01/01'),

    get isOverdue(){
        return this.dueTo < new Date();
    },

    set isOverdue(isOverdueTask){  
        if(!this.isOverdueTask){
            this.dueTo = new Date();
        }
    }
}

/*

if (!task.isOverdue()){
    console.log(`Task is not overdue`);
} else {
    console.log(`Task is overdue`);
} 

*/

console.log(task.isOverdue);
task.isOverdue = true;
console.log(task);

//===================

class Task {
    constructor(title, dueDate){
        this.title = title;
        this.dueDate = dueDate;
    }

    get isOverdue(){
        return this.dueTo < new Date();
    }

    set dueDate(date){
        if(date < new Date()){
            return
        }
        this._dueDate = date;
    }
}

const newTask = new Task("Task2", new Date());
console.log(newTask.isOverdue);

if(!newTask.isOverdue){
    console.log(`Task is not overdue`);
}

//======= Static ===========================

/*

Number.MAX_SAFE_INTEGER;
new Number();

Array.from([0,1,2]);
new Array();

*/

class Test {
    static a = 1;
    static hello(){
        console.log("Hello");
    }

    static{
        let b = 5;
        this.a = 5;
    }
}

console.log(Test);
Test.hello();

const test2 = function(){

};

test2.hello = function(){
    console.log("Hello");
}
test2.hello();

//====== Privat ====================

class Car {
    #vin;
    speed;

    constructor(){
        //this.#someThing = 10;
        this.someFing = 10;
    }

    #changeVin(){
        console.log('Changed');
    }

    test(){
        this.#changeVin();
    }

    static #field = 0;

    static {
        this.#field = 10;
    }
}

const car = new Car();
console.log(car);
console.log(car.test());

//===============================

class User{
    #login;
    #_password;
    constructor(login, password){
        this.#login = login;
        this.#password = password;

    }

    set #password(pass){
        this.#_password = pass.split(' ').reverse().join();
    }

    get #password(){
        return this.#_password.split(' ').reverse().join();
    }

    get login(){
        return this.#login;
    }

    checkPassword(pass){
        return this.#password == pass;
    }

    changePassword(oldPass, newPass){
        if(!this.checkPassword(oldPass)){
            return  false;
        }
        
        this.#password = newPass;
        return true;
    }
}

const user = new User("a@a","123");
console.log(user);
console.log(user.login);

/*

user.login = "aaaaaaaaaaa@a.com";
console.log(user.login);

*/

console.log(user.checkPassword("123"));
console.log(user.checkPassword("223")); //false password


