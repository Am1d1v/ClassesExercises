


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

