


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