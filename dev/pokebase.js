var version = "1.0.0",
    pokebase = { init: init, get: getData },
    _ = pokebase;

function log(msg) { console.log("pokebase > " + msg); }

function init(callback) {
    log("Loading Pokebase.js...")
    log("Fetching pokemon...")
    $.get("http://pokeapi.co/api/v1/pokedex/1/", function(data) {
        pokebase.pokedex = data;
        log("Got a dex populated by " + pokebase.pokedex.pokemon.length + " pokemon.");
        log("Populating variables...");
        pokebase.dex = pokebase.pokedex;
        pokebase.mon = pokebase.pokedex.pokemon.length;
        log("Done!");
        callback();
    });
}

pokebase.parse = function(callback) {
    var data = [];
    for (var i = 0;; i++) {
        if ( i > pokebase.dex.pokemon.length - 1 ) {
            done();
            break;
        }
        data[i] = { text: pokebase.dex.pokemon[i].name, id: i };
    }
    
    function done() {
        callback(data);
    }
}

pokebase.pokemon = { get: getPokemon };

function getPokemon(resource, callback) {
    $.get("http://pokeapi.co/" + resource, function(data) {
        callback(data);
    });
}

function getData(resource, callback) {
    $.get("http://pokeapi.co" + resource, function(data) {
        callback(data);
    });
}