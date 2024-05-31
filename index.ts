#! /usr/bin/env node



import inquirer from"inquirer";
import chalk from "chalk";
class player{
    name:string;
    fuel:number=100;
    constructor(name:string){
    this.name=name};
    fueldecrease(){
        let fuel = this.fuel -25
        this.fuel=fuel
    };fuelincrease(){
        this.fuel=100

    };
}

class opponent{
    name:string
    fuel:number=100
    constructor(name:string){
    this.name=name}
    fueldecrease(){
        let fuel = this.fuel -25
        this.fuel=fuel
    };fuelincrease(){
     this.fuel=100
    };
}
let player1=await inquirer.prompt({
    name:'name',
    type:'input',
    message:'enter your name'
})
let opponent1=await inquirer.prompt({
    name:'select',
    type:'list',
    message:'choose your opponent',
    choices:['zombie','gorilla','skeleton']
})
let p1=new player(player1.name)
let o1=new opponent(opponent1.select)
do{
    if(
    opponent1.select=='skeleton')
    {
        console.log(`${chalk.bold.green(p1.name)} vs ${chalk.bold.red(o1.name)}`);
        
    
let ask=await inquirer.prompt({
    name:'select',
    type:'list',
    choices:['attack','drink potion','giveup']
})
if(ask.select=='attack'){
    console.log('attack');
    
    let num1=Math.floor(Math.random()*2)
    if(num1>0){
        p1.fueldecrease()
            
        console.log(`${chalk.bold.red(o1.name)}  ${o1.fuel} `);
        console.log(`${chalk.bold.green(p1.name)}   ${p1.fuel} `);
            if(p1.fuel<=0){
                console.log(`${chalk.bold.red('you loose')}`);
        process.exit()
                
            }
    }
        if(num1<=0){
            o1.fueldecrease()
                
                console.log(`${chalk.bold.red(o1.name)}  ${o1.fuel} `);
                console.log(`${chalk.bold.green(p1.name)}   ${p1.fuel} `);
                if(o1.fuel<=0){
                    console.log(`${chalk.bold.green('you win')}`);
        process.exit()
                    
                }
            }}
    if(ask.select=='drink potion'){
        p1.fuelincrease()
        console.log(`${chalk.bold.green(p1.name)}: ${chalk.bold.greenBright(p1.fuel)}`);
        
    }
    
    if(ask.select=='giveup'){
        console.log(`${chalk.bold.redBright("you loose")}`);
        process.exit()
    }


}
if(
    opponent1.select=='gorilla')
    {
        console.log(`${chalk.bold.green(p1.name)} vs ${chalk.bold.red(o1.name)}`);
        
    
let ask=await inquirer.prompt({
    name:'select',
    type:'list',
    choices:['attack','drink potion','giveup']
})
if(ask.select=='attack'){
    console.log('attack');
    
    let num1=Math.floor(Math.random()*2)
    if(num1>0){
        p1.fueldecrease()
            
        console.log(`${chalk.bold.red(o1.name)}  ${o1.fuel} `);
        console.log(`${chalk.bold.green(p1.name)}   ${p1.fuel} `);
            if(p1.fuel<=0){
                console.log(`${chalk.bold.red('you loose')}`);
        process.exit()
                
            }
    }
        if(num1<=0){
            o1.fueldecrease()
                
                console.log(`${chalk.bold.red(o1.name)}  ${o1.fuel} `);
                console.log(`${chalk.bold.green(p1.name)}   ${p1.fuel} `);
                if(o1.fuel<=0){
                    console.log(`${chalk.bold.green('you win')}`);
        process.exit()
                    
                }
            }}
    if(ask.select=='drink potion'){
        p1.fuelincrease()
        console.log(`${chalk.bold.green(p1.name)}: ${chalk.bold.greenBright(p1.fuel)}`);
        
    }
    
    if(ask.select=='giveup'){
        console.log(`${chalk.bold.redBright("you loose")}`);
        process.exit()
    }


}
if(
    opponent1.select=='zombie')
    {
        console.log(`${chalk.bold.green(p1.name)} vs ${chalk.bold.red(o1.name)}`);
        
    
let ask=await inquirer.prompt({
    name:'select',
    type:'list',
    choices:['attack','drink potion','giveup']
})
if(ask.select=='attack'){
    console.log('attack');
    
    let num1=Math.floor(Math.random()*2)
    if(num1>0){
        p1.fueldecrease()
            
        console.log(`${chalk.bold.red(o1.name)}  ${o1.fuel} `);
        console.log(`${chalk.bold.green(p1.name)}   ${p1.fuel} `);
            if(p1.fuel<=0){
                console.log(`${chalk.bold.red('you loose')}`);
        process.exit()
                
            }
    }
        if(num1<=0){
            o1.fueldecrease()
                
                console.log(`${chalk.bold.red(o1.name)}  ${o1.fuel} `);
                console.log(`${chalk.bold.green(p1.name)}   ${p1.fuel} `);
                if(o1.fuel<=0){
                    console.log(`${chalk.bold.green('you win')}`);
        process.exit()
                    
                }
            }}
    if(ask.select=='drink potion'){
        p1.fuelincrease()
        console.log(`${chalk.bold.green(p1.name)}: ${chalk.bold.greenBright(p1.fuel)}`);
        
    }
    
    if(ask.select=='giveup'){
        console.log(`${chalk.bold.redBright("you loose")}`);
        process.exit()
    }


}
}
while(true)
