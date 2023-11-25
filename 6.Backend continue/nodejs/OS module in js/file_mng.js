const os=require('os')
const fs=require('fs')
const path=require('path')



// folder_path="C:/Users/Asad Bashir/Desktop/os check"
let files=fs.readdirSync('C:/Users/Asad Bashir/Desktop/os check')



let extension_count={}
let extension_set=new Set()
files.forEach(file=>{
    let extension=path.extname(file).toLowerCase()
    if(extension)
    {
        extension_count[extension]=(extension_count[extension] || 0) + 1;
        extension_set.add(extension)
    }
})

console.log("Total files are : ",files.length)
console.log("Different Extensions Are : ",extension_count)


let fileCollections={}
console.log("Different extensions are : ",Array.from(extension_set))//to show in form of array
let extension_array=Array.from(extension_set)
extension_array.forEach(extensionn=>{
    fileCollections[extensionn]=files.filter(file=>path.extname(file).toLowerCase()===extensionn)
})

extension_array.forEach(extensionn=>{
    console.log(`files with extension ${extensionn} Are : ${fileCollections[extensionn]}`)
})
