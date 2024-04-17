const crypto = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function hashPassword(password) {
    const hash = crypto.createHash('sha256');
    hash.update(password);
    rl.close(); 
        return hash.digest('hex');
        }

rl.question("Введіть ваш пароль: ", (password) => {
    const hashedpassword = hashPassword(password);
    console.log(hashedpassword);
});
