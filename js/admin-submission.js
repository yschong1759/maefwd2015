// triggered when submission success
function submitSuccess() {
    $('#myForm').hide();
    $('#submitSuccess').show();

}

// triggered when submission fail
function submitFail() {
    $('#myForm').hide();
    $('#error').show();

}

// triggered when click submit again
function submitAgain() {
    $('#myForm').show();
    $('#submitAll').html('Submit');
    $('#submitAll').prop('disabled', false);
    $('#error').hide();
    $('#submitSuccess').hide();

}

$('#experience').on('change', function(){
    $('#checkExp').show();
    if (parseInt($(this).val()) > 0) {
        $('#checkExp').removeClass('label-primary label-default').addClass('label-info');
        $('#checkExp').html('Positive number');
    } else if (parseInt($(this).val()) < 0) {
        $('#checkExp').removeClass('label-info label-default').addClass('label-primary');
        $('#checkExp').html('Negative number is entered');
    } else {
        $('#checkExp').removeClass('label-info label-primary').addClass('label-default');
        $('#checkExp').html('Zero');
    }
})

$('#coin').on('change', function(){
    $('#checkCoin').show();
    if (parseInt($(this).val()) > 0) {
        $('#checkCoin').removeClass('label-primary label-default').addClass('label-info');
        $('#checkCoin').html('Positive number');
    } else if (parseInt($(this).val()) < 0) {
        $('#checkCoin').removeClass('label-default label-info').addClass('label-primary');
        $('#checkCoin').html('Negative number is entered');
    } else {
        $('#checkCoin').removeClass('label-info label-primary').addClass('label-default');
        $('#checkCoin').html('Zero');
    }
})

//triggered to submit all inputted data
$('#submitAll').on('click', function(){

    if (!(($('#experience').val()) || ($('#coin').val()))) {
        alert('Put zero for EXP or coin if intended to leave blank. Pokemon caught may leave blank.');
    } else {
        $(this).html('Submitting');
        $(this).prop('disabled', true);

        var Pokemon = Parse.Object.extend("pokemon");
        var query = new Parse.Query(Pokemon);

        caughtPokemon = [];

        $( "select option:selected" ).each(function() {
            if ($(this).hasClass('pokemonSel')) {
                caughtPokemon.push($( this ).text());
            }
            //console.log(caughtPokemon);
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
                query.set("numberCaught" , query.get('caughtPokemon').length);
                query.save();
                //console.log('success');
                submitSuccess();
            },
            error: function(error){
                console.log(error);
                submitFail();
            }});
    }
    });
