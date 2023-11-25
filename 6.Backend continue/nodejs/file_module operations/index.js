// create a Folder name it textfile_folder
// create a file name  it textfile
// add more data in file at end of existing data
// read data without getting buffer data
//rename file name to mybio.txt
// delete both file and folder
  //                              START                                 //
  const fs=require('fs')

  function createfolder()
  {
    fs.mkdirSync('textfile_folder')
  }

  function createfile()
  {
    let content="content added by me \t"
    fs.writeFileSync('textfile_folder/textfile.txt',content)
  }

  function addmoredata()
  {
    let content=" More data appended by me"
    fs.appendFileSync('textfile_folder/textfile.txt',content)
  }

  function readdata()
  {
    let content=fs.readFileSync('textfile_folder/textfile.txt')
    let O_text=content.toString()
    console.log("content is : ",O_text)
  }
  
  function renamefile()
  {
    fs.renameSync('textfile_folder/textfile.txt','renammed_by_me')
  }

  function deletefile()
  {
    fs.unlinkSync('textfile_folder/textfile.txt')
  }
  deletefile()
//   renamefile()
//   readdata()
//   addmoredata()
//   createfolder()
// createfile()

