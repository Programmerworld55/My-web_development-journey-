// 1.convert to json 
// 2.add in file
// 3.readfile
// 4.convert back to object 
// 5.print

const fs=require('fs')
let objectt={
    name:"coder",
    occupation:"programming",
    exp:"1year"
}
let in_json_format=JSON.stringify(objectt)
fs.writeFile('json_data.json',in_json_format,(err)=>{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log("File Created")
    }
})

fs.readFile('json_data.json', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    try {
        let json_data = data;
        let O_data = JSON.parse(json_data);
        console.log(`json data is: ${json_data}`);
        console.log(`Original data is: ${O_data}`);
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
});
