const fetch = require('node-fetch')
const fs = require("fs");
var dt
var user = "spacific"
var res2 = async function (uuid) {
    let res2 = await fetch(`https://playerdb.co/api/player/minecraft/${uuid}`).then(response => response.json())
        .then((dt) => {
            console.log(dt.data.player.username == user)
            if (dt.data.player.username != user) {

                fs.writeFile("./names.txt", user + "\n", function (err) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log("The file was saved!");
                });
            }
        })

}
var test = async function () {
    var response = await fetch(`https://api.faav.tk/profiles/${user}`).then(response => {if(response.ok) {response.json()}})
        .then(data => dt = data)
    if (dt.profiles[0].uuid) {
        let uuid = dt["profiles"][0].uuid
        res2(uuid)
    }
}

test()