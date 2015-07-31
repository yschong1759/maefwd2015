$('#submitAll').on('click', function(){
    var Pokemon = Parse.Object.extend("pokemon");
    var query = new Parse.Query(Pokemon);

    caughtPokemon = [];

    $( "select option:selected" ).each(function() {
        if ($(this).hasClass('pokemonSel')) {
            caughtPokemon.push($( this ).text());
        }
        //console.log(str);
    });

    query.equalTo("name" , name);
    query.first({
        success: function(group) {
            group.set("experience" , parseInt($('#experience').val()));
            group.set("coin" , parseInt($('#coin').val()));
            group.set("caughtPokemon" , caughtPokemon);
            group.save();
        },
        error: function(error){
            console.log(error);
        }});
    console.log('submitAll script done');
    });

