var fs = require("fs");
var text = fs.readFileSync("./wordsUnfiltered.txt").toString('utf-8');
var textByLine = text.split("\n")
var newText = ""

textByLine.forEach((item, index) => {
    if(item.length > 4) {
        newText = newText + item + "\n"
    }
})

fs.writeFile("./words.txt", newText, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 