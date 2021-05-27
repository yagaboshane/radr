const request = require("request-promise")
const cheerio = require("cheerio")

const covidsite = "https://www.worldometers.info/coronavirus/"
const tripsite = 'https://www.tripadvisor.com/Tourism-g294115-Papua_New_Guinea-Vacations.html'

let countryList = []


const apecEconomies = require('./apecEconomies(2)')

let het = [ 
    {
        name:"Australia",
        code: "Australia"
    }, 
    {
        name:"Brunei",
        code: "Brunei "
    }, 
    {
        name:"Canada",
        code:"Canada"
    }, 
    {
        name: "Chile",
        code: "Chile"
    }, 
    {
        name: "Taiwan",
        code: "Taiwan"
    }, 
    {
        name:"Hong Kong",
        code: "Hong Kong"
    }, 
    {
        name:"Indonesia",
        code:"Indonesia"
    },
    {
        name:"Japan",
        code:"Japan"
    },
    {
        name:"Malaysia",
        code:"Malaysia"
    },
    {
        name:"Mexico",
        code:"Mexico"
    },
    {
        name:"New Zealand",
        code:"New Zealand"
    },
    {
        name:"Papua New Guinea",
        code:"Papua New Guinea"
    },
    {
        name:"China",
        code:"China"
    },
    {
        name:"Peru",
        code:"Peru"
    },
    {
        name:"South Korea",
        code:"S. Korea"
    },
    {
        name:"Philippines",
        code:"Philippines"
    },
    {
        name:"Russia",
        code:"Russia"
    },
    {
        name:"Singapore",
        code:"Singapore"
    },
    {
        name:"Thailand",
        code:"Thailand"
    },
    {
        name:"United States",
        code:"USA"
    },
    {
        name:"Vietnam",
        code:"Vietnam"
    }    
]

let apecData = []

async function scrapeCovidLive(req, res){
    try{
        const htmlResult = await request.get(covidsite)
        const $ = await cheerio.load(htmlResult)

       $("#main_table_countries_today > tbody > tr").map((index, element)=>{

            const countryElement = $(element).find("td:nth-child(2)")
            const totalCasesElement = $(element).find("td:nth-child(3)")
            const totalDeathsElement = $(element).find("td:nth-child(5)")
            const totalRecoveredElement = $(element).find("td:nth-child(7)")
            const activeCasesElement = $(element).find("td:nth-child(8)")
            const totalTestsElement = $(element).find("td:nth-child(12)")
            const populationElement = $(element).find("td:nth-child(14)")

            const country = $(countryElement).text()
            const totalCases = $(totalCasesElement).text()
            const totalDeaths = $(totalDeathsElement).text()
            const totalRecovered = $(totalRecoveredElement).text()
            const activeCases = $(activeCasesElement).text()
            const totalTests = $(totalTestsElement).text()
            const population = $(populationElement).text()

            let results = {country, totalCases, totalDeaths, totalRecovered, activeCases, totalTests, population}
                
            for(i=0; i < apecEconomies.length ; i++){
                if(country == apecEconomies[i].code){
                    countryList.push(results)    
                }
            }
        })
        console.log(countryList)

    } catch(err){
        console.log(err)
    }
}

async function travelDestinations(req, res){
    try{
        const htmlresult = await request.get(tripsite)
        const $ = await cheerio.load(htmlresult)

        $('._19Yovgro > li > a').map((index,element)=>{
            let destination = ($(element).text())
            let destUrl = ($(element).attr('href'))
            
        })
         
        console.log(travelData)
        
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    scrapeCovidLive,
    travelDestinations
}
