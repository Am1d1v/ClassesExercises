


const User = {

    init(email, password){
        this.email = email;
        this.password = password;
    },

    log(){
        console.log("Log");
    }
}

const user = Object.create(User);
console.log(user);
user.log();

/*

user.email = 'a@a.com';
user.password = '123';

*/

console.log(user.__proto__ == User);
user.init('a@a.com', "123");

const user2 = Object.create(user);