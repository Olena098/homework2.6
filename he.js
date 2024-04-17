const bcrypt = require('bcrypt');
const prompt = require('prompt-sync')();

function hashPassword(password) {
    const saltRounds = 10; 
    bcrypt.hash(password, saltRounds, function(err, hash) {
        if (err) {
            console.error("Помилка хешування пароля:", err);
        } else {
            console.log("Хеш пароля:", hash);
        }
    });
}


const password = prompt("Введіть ваш пароль: ");
hashPassword(password);
