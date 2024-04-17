const bcrypt = require('bcrypt');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function hashPassword(password) {
    const saltRounds = 10; 
    bcrypt.hash(password, saltRounds, (err, hash) => { 
        if (err) {
            console.error("Помилка хешування пароля:", err);
        } else {
            console.log("Хеш пароля:", hash);
            rl.close(); 
        }
    });
}

rl.question("Введіть ваш пароль: ", (password) => {
    hashPassword(password);
});
