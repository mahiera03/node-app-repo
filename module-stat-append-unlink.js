const filePath = "sample-file.txt";
const { log } = require("console");
const fs = require("fs");
fs.stat(filePath, (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("File size:", stats.size + "bytes");
  console.log("Is a file:", stats.isFile());
  console.log("Is a directory:", stats.isDirectory());
  console.log("File birthtime (creation time):", stats.birthtime);
  console.log("File modification time:", stats.mtime);
});

//appendFile

const dataToAppend = "\n This data will be appended to the file.";
fs.appendFile(filePath, dataToAppend, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Data has been appended to the file.");
});

//unlink
fs.unlink(filePath, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File has been deleted.");
});
