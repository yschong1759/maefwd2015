function submitSuccess() {
    console.log('here');
    $('#myForm').hide();
    $('#submitSuccess').show();

}

function submitFail() {
    console.log('here');
    $('#myForm').hide();
    $('#error').show();

}

$('#submitAll').on('click', function(){
    var Pokemon = Parse.Object.extend("pokemon");
    var query = new Parse.Query(Pokemon);

    caughtPokemon = [];

    $( "select option:selected" ).each(function() {
        if ($(this).hasClass('pokemonSel')) {
            caughtPokemon.push($( this ).text());
        }
        console.log(caughtPokemon);
    });

    query.equalTo("name" , $('#OGname').text());
    query.first({
        success: function(query) {
            query.set("experience" , query.get('experience') + parseInt($('#experience').val()));
            query.set("coin" , query.get('coin') + parseInt($('#coin').val()));
            query.set("caughtPokemon" , query.get('caughtPokemon').concat(caughtPokemon));
            query.set("numberCaught" , query.get('caughtPokemon').concat(caughtPokemon).length);
            query.save();
            console.log('success');
            console.log('triggering jumping container');
            submitSuccess();
        },
        error: function(error){
            console.log(error);
            submitFail();
        }});
    console.log('submitAll script done');
    });
