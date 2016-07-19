

var test = "Hello";
var corkscrew = {name:"CO2 Corkscrew", description:"The secret behind Cork Pops revolutionary design is a small C02 cartridge that provides just the right amount of power to safely push your cork out", price:"29.95", url: "http://wineenthusiast.scene7.com/is/image/WineEnthusiast/f/n/w/1500/17917.jpg"}

var winestop = {name:"Wine Stopper", description:"Personalized with your initial, this clear acrylic bottle stopper provides an elegant seal to opened wine. The stopper's weighty chrome base is fitted with a rubber gasket to keep the air out and the flavor in",
price:"24.95", url: "http://wineenthusiast.scene7.com/is/image/WineEnthusiast/f/n/w/1500/22421.jpg"}

var wineair = {name:"VinOair", description:"Ingenious construction complemented with optimal convenience. This on-bottle wine aerator does it all: serves up a perfect pour, eliminates drips, and fully aerates and oxidates your wine for maximum flavor and quality", price:"19.95", url: "http://wineenthusiast.scene7.com/is/image/WineEnthusiast/f/n/w/465/28315.jpg"}

var winecave = {name:"EuroCave Wine Art", description:"TPreserve your opened wine bottle for 10 days",
price:"29.95", url: "http://wineenthusiast.scene7.com/is/image/WineEnthusiast/f/n/w/1500/32619.jpg"}

var bottlehold = {name:"Bottle Wooden Wine Caddy", description:"Antique inspired bottle caddy, holds up to 6 bottles",
price:"29.95", url: "http://wineenthusiast.scene7.com/is/image/WineEnthusiast/f/n/w/465/34616.jpg"}

var advancecork = {name:"Le Creuset", description:"With a bold, geometric design built to work with both synthetic and natural corks, the Advanced Lever features patented rotation technology for fast and effortless cork removal", price:"199.95", url: "http://wineenthusiast.scene7.com/is/image/WineEnthusiast/f/n/w/1500/29728.jpg"}

var winefridge = {name:"Silent Wine Refrigeretaor", description:"Two zones for storage and service! The Wine Enthusiast 32 Bottle Dual Zone Touchscreen Wine Refrigerator is thermoelectric, energy-efficient and CFC-free.", price:"359.95", url: "http://wineenthusiast.scene7.com/is/image/WineEnthusiast/f/n/w/1500/17927.jpg"}

var winebarrel = {name:"American Oak Barrel", description:"Preserve your wine in an authentic wine barrel",
price:"69.95", url: "http://wineenthusiast.scene7.com/is/image/WineEnthusiast/f/n/w/465/35795_1.jpg"}

var wineproducts = [corkscrew, winestop, wineair, winecave, bottlehold, advancecork, winefridge, winebarrel];
//document.getElementById.innerHTML(product) += "<header>" + test + "</header>";//
for (i = 0; i < wineproducts.length; i++) {
document.getElementById("product").innerHTML += `<article><header> ${ wineproducts[i].name } </header><p class="parag">${wineproducts[i].description}
</p><p>${wineproducts[i].price}</p><a href=${ wineproducts[i].url }><img src= ${wineproducts[i].url}></a></article>`;
  }
