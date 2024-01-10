const { Console } = require('console')
const fs=require('fs')

//write to file

// Synchronus call
// fs.writeFileSync('./test.txt','Hey there')  //(path,content)

//Asynchronus call
// fs.writeFile('./test.txt','Hey there',(err)=>{})

//Read from a file

//Synchronus call

// const result=fs.readFileSync('./contacts.txt','utf-8')
// console.log(result);

//Asynchronus Call
// fs.readFile('./contacts.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log("Error",err);
//     }
//     else{
//         console.log(data);
//     }
// })


//Append File


// fs.appendFileSync("./contacts.txt",new Date().getDate().toLocaleString());
// fs.appendFileSync("./contacts.txt",`\n Hey there`);

//copy file

// fs.copyFileSync("contacts.txt","newCopiedContacts.txt")

// By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
// fs.copyFileSync("contacts.txt","newCopiedContacts.txt", fs.COPYFILE_EXCL);


// try {
//     fs.copyFileSync("contacts.txt", "newCopiedContacts.txt", fs.constants.COPYFILE_EXCL);
//     console.log("File copied successfully.");
//   } catch (err) {
//     if (err.code === 'EEXIST') {
//       console.error("Destination file already exists. Operation failed.");
//     } else {
//       console.error("Error copying file:", err);
//     }
//   }



//Delete files

// fs.unlinkSync('./contacts.txt')

//status of a file

// console.log((fs.statSync('newCopiedContacts.txt')))

//Making Folder
//fs.mkdirSync('my-docs')

//Make folder inside folder

fs.mkdirSync('new-docs/a/b',{recursive:true})