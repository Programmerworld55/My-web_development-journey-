const EventEmitter=require('events')
let event=new EventEmitter()


event.on("sayMyName",()=>{
    console.log("my name is asad");
});
event.on("sayMyName",()=>{
    console.log("user clicked the button");
});
event.on("sayMyName",()=>{
    console.log("user want to see more");
});

event.emit("sayMyName");