const request = require('request-promise')
const cheerio = require('cheerio')

async function scrapeTripAd(){
    const result = await request.get("https://www.tripadvisor.com/Tourism-g294115-Papua_New_Guinea-Vacations.html")
    const $ = cheerio.load(result)
 
    let destinationList = []

    $("._1RFDj48Z").each((index, element)=>{
    
        // for(i = 0; i < 5; i++){
        //     console.log($(element).text())
        // }
        destinationList.push($(element).text())

    })
    console.log(destinationList)

    // $("._1RFDj48Z > a").each((index, element)=>{
    //     console.log($(element))
    // })
}

let apecEconomies = [ 
    "Australia", "Brunei", "Canada", "Chile", "Taiwan", "Hong Kong", "Indonesia", "Japan"
    , "Malaysia", "Mexico", "New Zealand", "Papua New Guinea", "China", "Peru", "South Korea"
    , "Philippines", "Russia", "Singapore", "Thailand", "United States", "Vietnam"
]

async function scrapeCovidCountry(){
    const result = await request.get("https://ncov2019.live/data")
    const $ = cheerio.load(result)



    let countryList = []



    $("#sortable_table_mobile_world > tbody > tr > td").each((index, element)=>{
        // console.log($(element).text())
        
        let country = $(element&".text--gray > div > span:nth-child(2)").text()
            .trim()
        
        if(country != ""){
 
            for (i=0;i < apecEconomies.length; i++ ){
                if( country == apecEconomies[i].trim()){
                    countryList.push(country)
                }
            }
        }
        

    })
    console.log(countryList)
}

// scrapeTripAd()
scrapeCovidCountry()
