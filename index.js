const express = require('express')
const { exec } = require("child_process");
const app = express()

require('dotenv').config()
app.use(express.json())

app.post('/',(req,res) => {

    exec("bash ./run.bash", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(stdout);
    });
})

//starts server
app.listen(process.env.PORT,() => {
    console.log('Up and running on port ' + process.env.PORT)
})