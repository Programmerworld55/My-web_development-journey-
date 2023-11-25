// const os=require('os')
// let freemem=os.freemem()
// console.log(`free memory : ${Math.round(freemem/1024/1024/1024)}gb`)
// console.log(Math.round(os.totalmem()/1024/1024/1024),"gb")

const add=()=>{
    // let list=""
    let name="hyy"
    for(let i=0;i<name.length;i++)
    {
        
       
       setTimeout(() => {
        console.log(name[i])
       },1000*i);
    
     
    }
     
    
 
  
}



module.exports={
    add:add
    
}