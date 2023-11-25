const fs = require('fs');

function writeInFile() {
    for (let count = 0; count < 5; count++) {
        let text="count is "+count;
        fs.appendFileSync('countfile.txt', text + '\n'); 
    }
}

// .....................................Method 1..........................
function readinfile()
{

        try{
            // let regex=/^mytext$/m;
            let regex2=/\bmytext\b/;
        let content=fs.readFileSync('countfile.txt','utf-8')
      
        console.log("content is :\n",content)
        let match=content.match(regex2)
        if(match)
        {
            console.log("content i want is  : ",match[0])
        }
        else{
            console.log('content not found in file')
        }
        }
        catch(error)
        {
            console.log("Error while reading file : ",error)
        }
    }




// .....................................Method 2..........................


function readinfile_method2() {
        let count_word = 0;
        let found = false;
        let w_to_find = ['m', 'y', 't', 'e', 'x', 't'];
        let content = fs.readFileSync('countfile.txt', 'utf-8');
    
        for (let i = 0; i < content.length; i++) {
            if (content[i] === w_to_find[count_word]) {
                count_word++;
                if (count_word === w_to_find.length) {
                    console.log("Found: mytext");
                    found = true;
                    count_word = 0;
                }
            } else {
                count_word = 0;
            }
            console.log(content[i], " ");
        }
    
        if (!found) {
            console.log("mytext not found in the content.");
        }
    }   


function readruffile()
{
    try{
        let content=fs.readFileSync('sharyar.html','utf-8')
        console.log("content is : ",content)
    }
    catch(error)
    {
        console.log("Error While Reading file")
    }


}

function readruffileusingbuffer()
{
    try{
        const  buf_data=fs.readFileSync('countfile.txt','utf-8')
        console.log("content is : ",buf_data)
    }
    catch(error)
    {
        console.log("Error While Reading file")
    }


}

function renamefile()
{
    fs.renameSync('countfile.txt','renamedbyme')
}
renamefile()
// readruffileusingbuffer()
// readruffile()
// writeInFile();
// readinfile();
// readinfile_method2()
