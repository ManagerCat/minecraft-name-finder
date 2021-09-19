const fs = require("fs");
const fetch = require('node-fetch')
var text = fs.readFileSync("./words.txt").toString('utf-8');
var textByLine = text.split("\n")

const test = async function (user) {
    console.log('Sent Request')
    await fetch(`https://api.faav.tk/profiles/${user}`).then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.profiles[0]) {
                if (data.profiles[0].uuid) {
                    let uuid = data["profiles"][0].uuid
                    res2(uuid, user)
                }

            }
        })

}
const res2 = async function (uuid, user) {
    await fetch(`https://playerdb.co/api/player/minecraft/${uuid}`).then(response => response.json())
        .then((dt) => {
            if (dt.data.player.username.toLowerCase() != user) {
                fs.appendFile("./names.txt", user + "\n", function (err) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log("The file was saved!");
                });
                console.log('New Name Found!')
            }
        })

}
console.log('Starting to Send Requests...')
textByLine.forEach(async (item, index) => {
    test(item)
})


console.log('DONE!')
