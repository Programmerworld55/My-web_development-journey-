let intro={name:'Coders',occupation:"Web_Developer",Education:"BSCS",Experience:"1_year"}
let introofme=["coders","web developer","BSCS","1_year"]
let intro_first=["Name : ","Occupation : ","Education : ","Experience : "]
console.log("!..........................About me.............................!")

for(let i=0;i<4;i++)
{
    setTimeout(() => {
        console.log(intro_first[i],introofme[i])
    }, 2000*i);
}