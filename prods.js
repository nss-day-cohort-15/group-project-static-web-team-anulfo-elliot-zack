

var test = "Hello";
var corkscrew = {name:"CO2 Corkscrew", description:"The secret behind Cork Pops revolutionary design is a small C02 cartridge that provides just the right amount of power to safely push your cork out", price:"29.95", url: "http://wineenthusiast.scene7.com/is/image/WineEnthusiast/f/n/w/465/35795_1.jpg"}

var winestop = {name:"Wine Stopper", description:"Personalized with your initial, this clear acrylic bottle stopper provides an elegant seal to opened wine. The stopper's weighty chrome base is fitted with a rubber gasket to keep the air out and the flavor in",
price:"24.95", url: "http://www.wineenthusiast.com/personalized-1-initial-bottle-stopper.asp"}

var wineair = {name:"VinOair", description:"Ingenious construction complemented with optimal convenience. This on-bottle wine aerator does it all: serves up a perfect pour, eliminates drips, and fully aerates and oxidates your wine for maximum flavor and qualityt", price:"19.95", url: "http://www.wineenthusiast.com/vinoair-wine-aerator.asp"}

var winecave = {name:"EuroCave Wine Art", description:"TPreserve your opened wine bottle for 10 days",
price:"29.95", url: "http://www.wineenthusiast.com/eurocave-wine-art.asp"}

var bottlehold = {name:"Bottle Wooden Wine Caddy", description:"Antique inspired bottle caddy, holds up to 6 bottles",
price:"29.95", url: "http://www.wineenthusiast.com/personalized-6-bottle-wooden-wine-caddy.asp"}

var advancecork = {name:"Le Creuset", description:"With a bold, geometric design built to work with both synthetic and natural corks, the Advanced Lever features patented rotation technology for fast and effortless cork removal", price:"199.95", url: "http://www.wineenthusiast.com/le-creuset-advanced-lever-corkscrew-gift-set.asp"}

var winefridge = {name:"Silent Wine Refrigeretaor", description:"Two zones for storage and service! The Wine Enthusiast 32 Bottle Dual Zone Touchscreen Wine Refrigerator is thermoelectric, energy-efficient and CFC-free.", price:"359", url: "http://www.wineenthusiast.com/wine-enthusiast-silent-32-bottle-dual-zone-touchscreen-wine-refrigerator.asp"}

var winebarrel = {name:"American Oak Barrel", description:"Preserve your wine in an authentic wine barrel",
price:"69.95", url: "http://www.wineenthusiast.com/grapevine-design-personalized-handcrafted-american-oak-barrel.asp"}

var wineproducts = [corkscrew, winestop, wineair, winecave, bottlehold, advancecork, winefridge, winebarrel];
//document.getElementById.innerHTML(product) += "<header>" + test + "</header>";//
for (i = 0; i < wineproducts.length; i++) {
document.getElementById("product").innerHTML += `<header> ${ wineproducts[i].name } </header><p>${wineproducts[i].description}
</p><p>${wineproducts[i].price}</p><img src= ${wineproducts[i].url}>`;
  }
