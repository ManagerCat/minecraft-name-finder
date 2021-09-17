# minecraft-name-finder

Find avaliable names from a list of words.

# Ratelimits

I haven't tested the exact amount of words yet but there is a limit with the API as far as I know.

# Errors

Most errors that will be seen is either because of ratelimits or because of the wifi limiting the amount of packets itself

# Installation
`git clone https://github.com/ManagerCat/minecraft-name-finder/`
`cd minecraft-name-finder`
`npm install`

# Usage
`npm run filter` to filter out words from wordUnfiltered.txt, outputs to words.txt

`npm start` to check words from words.txt, outputs to names.txt
