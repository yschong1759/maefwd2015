// triggered when submission success
function submitSuccess() {
    console.log('here');
    $('#myForm').hide();
    $('#submitSuccess').show();

}

// triggered when submission fail
function submitFail() {
    console.log('here');
    $('#myForm').hide();
    $('#error').show();

}

function submitAgain() {
    console.log('here');
    $('#myForm').show();
    $('#error').hide();

}

//triggered to submit all inputted data
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
            var experience = $('#experience').val();
            var coin = $('#coin').val();
            if (experience == '') {
                experience = 0;
            };
            if (coin == '') {
                coin = 0;
            }; 
            query.set("experience" , query.get('experience') + parseInt(experience));
            query.set("coin" , query.get('coin') + parseInt(coin));
            query.set("caughtPokemon" , query.get('caughtPokemon').concat(caughtPokemon));
            //count for number of caught pokemon
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
