const products = [
    //bearings
    {name: "Bones", imageUrl: "https://img.skatewarehouse.com/watermark/rs.php?path=BSREDBR-1.jpg&nw=435", description: "Bones Reds Bearings", price: "17.95", countInStock: 12},
    {name: "Bones", imageUrl: "https://img.skatewarehouse.com/watermark/rs.php?path=BSBGBBR-1.jpg&nw=435", description: "Bones Big Balls Reds Bearings", price: "24.95", countInStock: 12},
    {name: "Bones", imageUrl: "https://img.skatewarehouse.com/watermark/rs.php?path=BSSWBR-1.jpg&nw=435", description: "Bones Original Swiss Bearings", price: "63.50", countInStock: 14},
    {name: "Grizzly", imageUrl: "https://img.skatewarehouse.com/watermark/rs.php?path=GZA7BR-1.jpg&nw=435", description: "Grizzly Abec 7 Gold Bearings", price: "19.99", countInStock: 11},
    {name: "Grizzly", imageUrl: "https://img.skatewarehouse.com/watermark/rs.php?path=GZA9BR-1.jpg&nw=435", description: "Grizzly Abec 9 Black Bearings", price: "21.99", countInStock: 15},
    {name: "Shake Junt", imageUrl: "https://img.skatewarehouse.com/watermark/rs.php?path=SJNGHTTRNBR-1.jpg&nw=435", description: "Shake Junt Night Train Bearings", price: "12.99", countInStock: 4},
    {name: "Shake Junt", imageUrl: "https://img.skatewarehouse.com/watermark/rs.php?path=SJ7BR-1.jpg&nw=435", description: "Shake Junt Bearings ABEC 7s", price: "16.99", countInStock: 16},
    {name: "Spitfire", imageUrl: "https://img.skatewarehouse.com/watermark/rs.php?path=SFBUBR-1.jpg&nw=435", description: "Spitfire Burner Bearings", price: "16.99", countInStock: 4},
    {name: "Independent", imageUrl: "https://img.skatewarehouse.com/watermark/rs.php?path=INGPRBR-1.jpg&nw=435", description: "Independent GP-R Bearings", price: "12.99", countInStock: 12},
    {name: "Independent", imageUrl: "https://img.skatewarehouse.com/watermark/rs.php?path=INGPBBR-1.jpg", description: "Independent GP-B Bearings", price: "16.99", countInStock: 15},
    //decks
    {name: "Girl", imageUrl: "https://img.skatewarehouse.com/watermark/rs.php?path=GIWP85DK-1.jpg&nw=435", description: "Girl Wilson Power OG Deck", price: "55.00", countInStock: 13},
    {name: "Plan B", imageUrl: "https://img.skatewarehouse.com/watermark/rs.php?path=PLTNEON81DK-1.jpg&nw=435", description: "Plan B Trevor Neon Deck", price: "56.99", countInStock: 12},
    {name: "Plan B", imageUrl: "https://img.skatewarehouse.com/watermark/rs.php?path=PLTOGBK82DK-1.jpg&nw=435", description: "Plan B Team OG Black Deck", price: "54.99", countInStock: 11},
    {name: "Plan B", imageUrl: "https://img.skatewarehouse.com/watermark/rs.php?path=PLWONOF80DK-1.jpg&nw=435", description: "Plan B Way One Off Deck", price: "56.99", countInStock: 41},
    {name: "Enjoi", imageUrl: "https://img.skatewarehouse.com/watermark/rs.php?path=ENWPWDK-1.jpg&nw=435", description: "Enjoi Whitey Panda Wide Deck", price: "62.99", countInStock: 5},
    {name: "Anti-Hero", imageUrl: "https://img.skatewarehouse.com/watermark/rs.php?path=AHCEXNDK-1.jpg&nw=435", description: "Anti Hero Classic Eagle XL Navy Deck", price: "59.99", countInStock: 9},
    {name: "Darkstar", imageUrl: "https://img.skatewarehouse.com/watermark/rs.php?path=DSANGDK-1.jpg&nw=435", description: "Darkstar Anodize Gold Deck", price: "44.99", countInStock: 8},
    {name: "Toy Machine", imageUrl: "https://img.skatewarehouse.com/watermark/rs.php?path=TMMFDK-1.jpg&nw=435", description: "Toy Machine Monster Face Deck", price: "52.99", countInStock: 87},
    //trucks
    {name: "Thunder", imageUrl: "https://img.skatewarehouse.com/watermark/rs.php?path=TUONCTR-SI-SI-1.jpg&nw=435", description: "Thunder O'neill Commodore Pro Light Trucks", price: "29.99", countInStock: 7},
    {name: "Thunder", imageUrl: "https://img.skatewarehouse.com/watermark/rs.php?path=TUTONTR-WH-BK-1.jpg&nw=435", description: "Thunder Onyx Black/White Team Trucks", price: "26.99", countInStock: 3},
    {name: "Thunder", imageUrl: "https://img.skatewarehouse.com/watermark/rs.php?path=TURHTR-SI-SI-1.jpg&nw=435", description: "Thunder Polished Truck", price: "21.99", countInStock: 3},
    {name: "Independent", imageUrl: "https://img.skatewarehouse.com/watermark/rs.php?path=INELSTR-SI-SI-1.jpg&nw=435", description: "Independent Stage 11 Standard Truck", price: "22.99", countInStock: 15},
    {name: "Independent", imageUrl: "https://img.skatewarehouse.com/watermark/rs.php?path=INMTLTR-SI-SI-1.jpg&nw=435", description: "Independent Mid Truck", price: "27.99", countInStock: 18},
    {name: "Independent", imageUrl: "https://img.skatewarehouse.com/watermark/rs.php?path=INHSTR-SI-SI-1.jpg&nw=435", description: "Independent Stage 11 Hollow Standard Truck", price: "22.99", countInStock: 2},
    {name: "Royal", imageUrl: "https://img.skatewarehouse.com/watermark/rs.php?path=RYIKTR-SI-SI-1.jpg&nw=435", description: "Royal Inverted Kingpin Standard Truck", price: "16.98", countInStock: 1},
    //wheels
    {name: "Spitfire", imageUrl: "https://img.skatewarehouse.com/watermark/rs.php?path=SFTPFWH-WH-1.jpg&nw=435", description: "Spitfire F4 99a Tyshawn Forever Classic Wheels", price: "38.99", countInStock: 23},
    {name: "Spitfire", imageUrl: "https://img.skatewarehouse.com/watermark/rs.php?path=SF4FDWH-WH-1.jpg&nw=435", description: "Spitfire F4 Fabiana Conical Full 99a Wheels", price: "38.99", countInStock: 3},
    {name: "Spitfire", imageUrl: "https://img.skatewarehouse.com/watermark/rs.php?path=SFC97WH-WH-1.jpg&nw=435", description: "Spitfire Formula 4 Classics 97a Wheels", price: "38.99", countInStock: 5},
    {name: "Spitfire", imageUrl: "https://img.skatewarehouse.com/watermark/rs.php?path=SFCL9WH-WH2-1.jpg&nw=435", description: "Spitfire Formula 4 Classic 99a Wheels", price: "38.99", countInStock: 5},
    {name: "Bones", imageUrl: "https://img.skatewarehouse.com/watermark/rs.php?path=BSR99WH-WH-1.jpg&nw=435", description: "Bones STF Roots 99a V5 Sidecut Wheels", price: "34.99", countInStock: 6}

] 

module.exports = products;