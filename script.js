


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
}

const newTask = new Task("Task2", new Date());
console.log(newTask.isOverdue);

if(!newTask.isOverdue){
    console.log(`Task is not overdue`);
}