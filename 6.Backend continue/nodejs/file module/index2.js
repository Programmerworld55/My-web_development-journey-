const fs=require('fs')
fs.writeFileSync('text_file.txt','First File created using sync method\n\n')
fs.appendFileSync('text_file.txt','Its Second text after append')