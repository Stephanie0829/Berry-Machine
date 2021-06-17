//initialize objects for each berry
//hashmap array maps integer to proper object
let berries = new Map();
//normal berries N 
berries.set(0, {url: "url(berries/classicberry.png)", description: "Classic blue berry: Classic like vanilla, will never leave you with a frown"});
berries.set(1, {url: "url(berries/mysterberry.png)", description: "Mystery berry: A mystery inside... or might just be an unripe berry"});
berries.set(2, {url: "url(berries/lemonberry.png)", description: "Lemon berry: When life gives you lemo- no, when life gives you lemon berries, you eat it"});
berries.set(3, {url: "url(berries/orange.png)", description: "Orange berry: Berry that is not an orange but is most definitely orange"});
berries.set(4, {url: "url(berries/soot.png)", description: "Soot berry: This was what cinderella's step sisters gave cinderella for christmas"});
berries.set(5, {url: "url(berries/clay.png)", description: "Clay berry: Natural clay found in a little kid's hands after mixing all the colors of their playdough"});
berries.set(6, {url: "url(berries/grape.png)", description: "Grape berry: Same look as a grape, same taste as a grape, is this a grape?"});
berries.set(7, {url: "url(berries/sunset.png)", description: "Sun berry: A berry that layed in the sun and somehow was not burnt"});
berries.set(8, {url: "url(berries/turquoise.png)", description: "Turquoise berry: Such a bright turquoise color that it gets mistaken for a robin's egg"});
berries.set(9, {url: "url(berries/snow.png)", description: "Snow berry: The remnants of an intense snowball fight"});
berries.set(10, {url: "url(berries/blackberry.png)", description: "Black berry: Contradicting what you would expect, it is not entirely black?"});
berries.set(11, {url: "url(berries/raspberry.png)", description: "Rasp berry: Whenever people see this berry, they gasp and talk in a raspy tone"});
berries.set(12, {url: "url(berries/strawberry.png)", description: "Straw berry: Can you drink this with a straw?"});
berries.set(13, {url: "url(berries/flower.png)", description: "Flower berry: Smells so good one may not believe it is edible. This berry can be eaten for self-permeating perfume"});

//rare barries R
berries.set(14, {url: "url(berries/eraser.png)", description: "Eraser berry: Why are erasers so rare? Definitely not since I keep losing them"});
berries.set(15, {url: "url(berries/space.png)", description: "Space berry: Somehow is colored with the colors of space, though it grows on Earth"});
berries.set(16, {url: "url(berries/tulip.png)", description: "Tulip berry: Found near tulips, and is the perfect dessert for thumbelina"});
berries.set(17, {url: "url(berries/cherrybsm.png)", description: "Cherry berry: A cherry blossom berry that grows in DC, and is not related to cherries"});
berries.set(18, {url: "url(berries/redkoi.png)", description: "Red koi berry: Found in the depths of seas to be swimming with fish-oh not literally swimming, but swimming in their tummies"});

//super rare berries SR
berries.set(19, {url: "url(berries/beach.png)", description: "Beach berry: Perfect for a sunny day next to the beach. Found on the shores of No-Stress Town"});
berries.set(20, {url: "url(berries/glacier.png)", description: "Glacier berry: Icy and cold, this is the perfect ingredient for icecream. Due to global warming, supply is sparse"});
berries.set(21, {url: "url(berries/mint.png)", description: "Peppermint berry: Perfect treat for the holidays. Beware, for it is often stolen by elfs"});
berries.set(22, {url: "url(berries/water.png)", description: "Water berry: Lives with brevity as in the blink of a second it cannot preserve its form"});

//super super rare berries SSR
berries.set(23, {url: "url(berries/diamond.png)", description: "Diamond berry: I cannot bear to eat this berry for it looks way too beautiful (the lady's best friend)"});
berries.set(24, {url: "url(berries/peridot.png)", description: "Peridot berry: Created from the condensation on clusters of peridots solidifying over thousands of years"});
berries.set(25, {url: "url(berries/pinktourmaline.png)", description: "Tourmaline berry: Has a natural fragrance, and is formed from the depths where tourmalines lie"});
berries.set(26, {url: "url(berries/topaz.png)", description: "Topaz berry: Levitating in close proximity to the sun, it is formed from the residual helium vapors"});

//super super super rare berries (mythical) UR
berries.set(27, {url: "url(berries/dragon.png)", description: "Dragon berry: Grown from a dragon's scales after their death, and holds several mysterious unexplored powers"});
berries.set(28, {url: "url(berries/flame.png)", description: "Pheonix berry: From the beaks of a pheonix this berry is roasted. One can ask for a rare, medium, or well berry"});
berries.set(29, {url: "url(berries/rainbow.png)", description: "Unicorn berry: A single strand of unicorn hair caught in some clumps of dirt has a chance to grow into this beauty, even forming leaves made of clouds"});
function changeimg(){
    //obtain key to hashmap
        //obtain bucket/rarity category
    var rarity = Math.floor(Math.random()*198 + 1); //random int from [1, 198)
    rarity = hashfunc(rarity);
    console.log(rarity);

        //set icon and map key to proper rarity/index
    var key = 0;
    if(rarity == 4){
        key = Math.floor(Math.random()*14);   
    } else if (rarity == 3){
        key = Math.floor(Math.random()*5 + 14);  
    } else if (rarity == 2){
        key = Math.floor(Math.random()*4 + 19);   
    } else if (rarity == 1){
        key = Math.floor(Math.random()*4 + 23); 
    } else if (rarity == 0){
        key = Math.floor(Math.random()*3 + 27);   
    }

    //access object and properly display
    var div = document.getElementById("display");
    div.style.backgroundImage = berries.get(key).url;
    document.getElementById("description").innerHTML = berries.get(key).description;
}

function hashfunc(index){
    //want mapping similar to an exponential decay function
   var mapping = -1*Math.pow(1.02, index) + 51;
   mapping/=10;
   mapping = Math.trunc(mapping);
   return mapping;
}

function displaystats(){
    var statselement = document.getElementById("statistics");
    if(statselement.style.display == "none" || statselement.style.display == ""){
        statselement.style.display = "block";
    } else {
        statselement.style.display = "none";
    }
}