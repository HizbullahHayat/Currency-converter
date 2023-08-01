#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";


let turnoff= ()=>{
    return new Promise((res)=>
    setTimeout(res, 3000))
}
async function welcome() {
    let karaoke=chalkAnimation.karaoke(`INITIATING A CURRENCY CONVERTER ............`);
    await turnoff();
    karaoke.stop();
    console.log(`
    
██▄   ▄███▄      ▄   ▄███▄   █    ████▄ █ ▄▄  ▄███▄   ██▄       ███ ▀▄    ▄ 
█  █  █▀   ▀      █  █▀   ▀  █    █   █ █   █ █▀   ▀  █  █      █  █  █  █  
█   █ ██▄▄   █     █ ██▄▄    █    █   █ █▀▀▀  ██▄▄    █   █     █ ▀ ▄  ▀█   
█  █  █▄   ▄▀ █    █ █▄   ▄▀ ███▄ ▀████ █     █▄   ▄▀ █  █      █  ▄▀  █    
███▀  ▀███▀    █  █  ▀███▀       ▀       █    ▀███▀   ███▀      ███  ▄▀     
                █▐                        ▀                                 
                ▐                                                           
         ▄  █ ▄█  ▄▄▄▄▄▄   ███     ▄   █    █    ██    ▄  █                 
        █   █ ██ ▀   ▄▄▀   █  █     █  █    █    █ █  █   █                 
        ██▀▀█ ██  ▄▀▀   ▄▀ █ ▀ ▄ █   █ █    █    █▄▄█ ██▀▀█                 
        █   █ ▐█  ▀▀▀▀▀▀   █  ▄▀ █   █ ███▄ ███▄ █  █ █   █                 
           █   ▐           ███   █▄ ▄█     ▀    ▀   █    █                  
          ▀                       ▀▀▀              █    ▀                   
                                                  ▀                         

    `);
}
await welcome();
const conversionRate= {
    "PKR": {
        "Dollar": 0.0035,
        "Yen":0.50,
        "Euro":0.0032,
        "PKR": 1
    },
    "Dollar": {
        "PKR": 287.15,
        "Yen":143.40,
        "Euro":0.91, 
        "Dollar":1
    },
    "Yen": {
        "PKR": 2.01,
        "Dollar":0.0070,
        "Euro":0.0064, 
        "Yen": 1
    },
    "Euro": {
        "PKR": 315.20,
        "Dollar":1.10,
        "Yen":157.17,
        "Euro":1 
    } 
}
const answer:{
    basecurr: 'PKR'| 'Dollar'| 'Yen'| 'Euro',
    refcurr: 'PKR'| 'Dollar'| 'Yen'| 'Euro',
    amt: number
    } = await inquirer.prompt([
        {
        type:"list",
        name:"basecurr",
        message:"Select the currency you want to convert: ",
        choices:['PKR', 'Dollar', 'Yen', 'Euro']
        },
        {
        type:"number",
        name:"amt",
        message:`Select the amount you want to convert: `,
        },
        {
        type:"list",
        name:"refcurr",
        message:"Select the currency in which you want to convert: ",
        choices:['PKR', 'Dollar', 'Yen', 'Euro']
        }
    ])
const {basecurr, amt, refcurr} = answer;

if(basecurr && amt && refcurr){
    let results = conversionRate[basecurr][refcurr] *amt;
    console.log(`Your conversion from ${basecurr} to ${refcurr} is: ${results}`);
}else{
    console.log(`Invalid Input...`);
}
console.log(chalk.greenBright(`Thanks for using our service.....`));