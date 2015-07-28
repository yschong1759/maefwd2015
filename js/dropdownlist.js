jQuery(function($) {
    var matching = {
        'Fire': ['Charmander', 'Charmeleon', 'Charizard'],
        'Water': ['Squirtle', 'Wartortle', 'Blastoise'],
        'Grass': ['Bulbasaur', 'Ivysaur', 'Venusaur'],
        'Ice': ['Spheal','Sealeo', 'Walrein'],
        'Physics': ['Ralts', 'Kirlia', 'Gardevoir'],
        'Dark': ['Deino', 'Zweilous', 'Hydreigon']
    }
    
    var $matching = $('#pokemonSelect');
    $('#pokeType').change(function () {
        var pokeType = $(this).val(), poke = matching[pokeType] || [];
        
        var html = $.map(poke, function(poke){
            return '<option value="' + poke + '">' + poke + '</option>'
        }).join('');
        $matching.html(html)
    });
});
