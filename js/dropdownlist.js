$('.selection-form').on('change', function(e){
    var matching = {
        'Fire': ['Charmander', 'Charmeleon', 'Charizard'],
        'Water': ['Squirtle', 'Wartortle', 'Blastoise'],
        'Grass': ['Bulbasaur', 'Ivysaur', 'Venusaur'],
        'Ice': ['Spheal','Sealeo', 'Walrein'],
        'Physics': ['Ralts', 'Kirlia', 'Gardevoir'],
        'Dark': ['Deino', 'Zweilous', 'Hydreigon']
    }

    e.stopPropagation();
    e.preventDefault();
    var clicked = e.target;
    if ($(clicked).is(".pokeType")) {
      var poke_type=matching[$(clicked).val()] || [];
      var poke_html=$.map(poke_type, function(poke_type){
            return '<option value="' + poke_type + '">' + poke_type + '</option>'
        }).join('');
      $(clicked).parent().next().children(".pokemonSelect").html(poke_html);
    }  
  });