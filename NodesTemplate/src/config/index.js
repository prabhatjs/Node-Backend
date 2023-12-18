const dotenv=require('dotenv');
dotenv.config()//it provide the all env file object

console.log(process.env);

module.exports={
    PORT:process.env.PORT
}

//configure file add all env varibale and global varibale hare  this index file is insted of .env file and use in server creation file