console.log(beers)

const beerCardComponent = function (title, sub, text) {
    return `
     <div class="card">
     <div class="beerName">${title}</div>
     <div class="beerCompany">${sub}</div>
     <div class="beerType">${text}</div>
     </div>
     `
    // az id egy egyéni azonosító. van 10 db sörünk, ha egyáni komponenst adunk neki 10x jelenik meg
    
    //name, company, type helyére be lehetne küldeni bármit ha sima string lenne

    //a fv. paramétereinek bármilyen név megadható csak következetesen kell használni

}

const beerTitleComponent = `
    <h1>Beers</h1>    
`

// a komponenseket illesszük be a html kódba, nem html-ben írjuk meg őket külön

/*
    - nincs értelme kirenderelni valamit külön, ha meg fog változni úgyis
    - mindig komponensekként adjuk hozzá
        - könnyebb karbantartani, updatelni
    - ez egy argumentum. beküldünk neki egy argumentumot, mint a saját fv.-nek

*/

const loadEvent = function () {
    const rootElement = document.getElementById("root");
    console.log(rootElement);
    rootElement.insertAdjacentHTML( "beforeend" , beerTitleComponent);

    console.log(beers.cards);
    console.log(beers.logo);

    // inserAdjacentHTML: 2 kódot kér, egy position stringet és egy olyat, amit html-é tud konvertálni

// objecthez a tömb neve jön, azt ált. feljebb szoktuk meghatározni még a for előtt. az of elé bármi írható kisbetűvel, egyes számban.

/* 



*/

    for (const beer of beers.cards) {
        console.log(beer);
       // console.log(beers.cards[0].title) - ehelyett van a beer iterátor
        rootElement.insertAdjacentHTML("beforeend", beerCardComponent(beer.title, beer.sub, beer.text))

    }

}

// ezzel a ciklussal végiglépkedek egy tömb elemein, ennek a tömbnek az elérési útvonala egy beersnevű válrozó cards kulcán lévő tömb. ezt a folyamaott elnevezem ez az elnevezés az iterátor, erre hivatkozom

//for, forof átnézni, extra: ugyanilyen adatsturktúra -> új repóba

window.addEventListener("load", loadEvent)


 //azonnal megkapjuk a böngészőből
 // eseményfigyelő (window): 

 /* js azonnal létrehoz egy window objektumot
    - addEventListener: 
    - böngésző letölti a html kódunkat azonnal
    - meg kell győződni hoy az oldal betöltődik-e
      -> ezt figyeli aze seményfigyelő
      "szeretném meghívni az eseményfigyelőt benned. window"
      "milyen eseményt akarsz figyelni? -load."
    - minden script.j-sben kell egy window.addEventListener (load, loadEvent)

    null: amikor nem talál egy objektumot
    */

/* 

AZ ADATELÉRÉS 
    - tömb = for ciklus
    - tömbökön végig kell iterálni

FOR CIKLUS
  - ha van adat -> forof használata
  - nincs - > sima for (az i++-os)


*/