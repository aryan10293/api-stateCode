const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const app = express()
const PORT = process.env.PORT || 5000
app.use(helmet())
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(cors())
const states = {
    'california' :{
        "id": 0,
        "code": "06"
    },
    "rhode island":{
        "id": 1,
        "code": "44"
    },
    "georgia":{
        "id": 2,
        "code": "13"
    },
    "north dakota":{
        "id": 3,
        "code": "38"
    },
    "louisiana":{
        "id": 4,
        "code": "22"
    },
    "alaska":{
        "id": 5,
        "code": "02"
    },
    "washinton":{
        "id": 6,
        "code": "53"
    },
    "new mexico":{
        "id": 7,
        "code": "35"
    },
    "massachusettts":{
        "id": 8,
        "code": "06"
    },
    "utah":{
        "id": 9,
        "code": "49"
    },
    "mississippi":{
        "id": 10,
        "code": "28"
    },
    "united states virgin island":{
        "id": 11,
        "code": "78"
    },
    "texas":{
        "id": 12,
        "code": "48"
    },
    "west virginia":{
        "id": 13,
        "code": "54"
    },
    "puerto rico":{
        "id": 14,
        "code": "72"
    },
    "new jersey":{
        "id": 15,
        "code": "34"
    },
    "hawaii":{
        "id": 16,
        "code": "15"
    },
    "pennsylvania":{
        "id": 17,
        "code": "42"
    },
    "south dakota":{
        "id": 18,
        "code": "46"
    },
    "tennessee":{
        "id": 19,
        "code": "47"
    },
   "delaware": {
        "id": 20,
        "code": "10"
    },
    "district of columbia":{
        "id": 21,
        "code": "11"
    },
    "missouri":{
        "id": 22,
        "code": "29"
    },
    "florida":{
        "id": 23,
        "code": "12"
    },
    "connecticut":{
        "id": 24,
        "code": "09"
    },
    "maryland":{
        "id": 25,
        "code": "24"
    },
    "wyoming":{
        "id": 26,
        "code": "56"
    },
    "nebraska":{
        "id": 27,
        "code": "31"
    },
    "oregon":{
        "id": 28,
        "code": "41"
    },
    "idaho":{
        "id": 29,
        "code": "16"
    },
    "kentucky":{
        "id": 30,
        "code": "21"
    },
    "colorado":{
        "id": 31,
        "code": "08"
    },
    "minnesota":{
        "id": 32,
        "code": "27"
    },
    "iowa":{
        "id": 33,
        "code": "19"
    },
    "american samoa":{
        "id": 34,
        "code": "60"
    },
    "maine":{
        "id": 35,
        "code": "23"
    },
    "michigan":{
        "id": 36,
        "code": "26"
    },
    "kansas":{
        "id": 37,
        "code": "20"
    },
    "guam":{
        "id": 38,
        "code": "66"
    },
    "arizona":{
        "id": 39,
        "code": "04"
    },
    "south carolina":{
        "id": 40,
        "code": "45"
    },
    "nevada":{
        "id": 41,
        "code": "32"
    },
    "ohio":{
        "id": 42,
        "code": "39"
    },
    "virginia":{
        "id": 43,
        "code": "51"
    },
    "indiana":{
        "id": 44,
        "code": "18"
    },
    "commonwealth of the northern mariana islands":{
        "id": 45,
        "code": "69"
    },
    "oklahoma":{
        "id": 46,
        "code": "40"
    },
    "illinois":{
        "id": 47,
        "code": "17"
    },
    "montana":{
        "id": 48,
        "code": "30"
    },
    "new hampshire":{
        "id": 49,
        "code": "33"
    },
    "arkansas":{
        "id": 50,
        "code": "05"
    },
    "wisconsin":{
        "id": 51,
        "code": "55"
    },
    "alabama":{
        "id": 52,
        "code": "01"
    },
    "vermont":{
        "id": 53,
        "code": "50"
    },
    "north carolina":{
        "id": 54,
        "code": "37"
    },
    "new york":{
        "id": 55,
        "code": "36"
    }
}

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
})