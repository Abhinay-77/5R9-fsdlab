const fs = require('fs');

fs.mkdir('lab5/sample',(err)=>{
    if(err){
        console.log(` error :${err.meassge}`);
    }else{
        console.log(`directory created`);
    }
});


fs.unlink('lab5/3.txt', (err) => {
  if (err) {
    console.log('Error deleting file:', err);
  } else {
    console.log('File deleted successfully!');
  }
});


fs.rename('eventm.js', 'lab5/eventManagement.js', (err) => {
  if (err) {
    console.log('Error renaming file:', err);
  } else {
    console.log('File renamed successfully!');
  }
});


fs.readdir('.', (err, files) => {
  if (err) {
    console.log('Error reading directory:', err);
  } else {
    console.log('Directory contents:', files);
  }
});



