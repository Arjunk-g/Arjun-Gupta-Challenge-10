const inquirer = require('inquirer');
const express = require('express')
const http = require('http');
const fs = require('fs');
const app = express()
const PORT = 3001
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'))
});

app.use('/', router);
app.listen(PORT, () => {
  console.log(`Click Here for your Generated cards: http://localhost:${PORT}`)
})

// inquirer
//     .prompt([
//     {
//       type: 'input',
//       message: 'What is the title of your project?',
//       name: 'title',
//     },
//     {
//       type: 'input',
//       message: 'Description section of your project:',
//       name: 'description',
//    },

//     ])
//     .then((response) =>
//     fs.appendFile('index.html', `Title: ${response.title}\n `, (err) =>
//         err ? console.error(err) : console.log(err)
    
//     ));


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })



//     fs.appendFile('README.md', `Title: ${response.title}\n `, (err) =>
//         err ? console.error(err) : console.log(err)
    
//     ));