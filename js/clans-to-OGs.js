Parse.initialize("fxS2moYN7SBJwg02HO9kMFMLFXzFIBs8EaS9s7vf" , "Ci7HRvQesSsQroPRJnNea7ofhuPjiwhof39kdp9n");

//triggered when click back button
function backButton(){
    if (!($('.clan2OG').is(':hidden'))) {
        $('.clans').show();
        $('.clan2OG').hide();
        window.scrollTo(0,0);
    } else if (!($('.final').is(':hidden'))) {
        $('.clan2OG').show();
        $('.final').hide();
        window.scrollTo(0,0);
    };
}

function toClansButton(){
    $('.clans').show();
    $('.clan2OG').hide();
    $('.final').hide();
    window.scrollTo(0,0);
    };

//function to count ranking for each group
function rankingCount(group) {
    var Pokemon = Parse.Object.extend("pokemon");
    var query = new Parse.Query(Pokemon);
    var name = 'name';
    query.find({
        success: function(name) {
            //console.log("Successfully retrieved " + name.length + " scores.");
            // Do something with the returned Parse.Object values
            var dict = {};
            //console.log(dict);
            for (var i = 0; i < name.length; i++) {
              var object = name[i];
              var target = object.get('experience');
              
              if (target in dict) {
                dict[target] = dict[target] + ',' + object.get('name');
              } else {
                dict[target] = object.get('name') ;
              }
            };
            //console.log(dict);
            var rankingList = [];
            var temp1 = Object.keys(dict);
            var temp2 = [];
            for (var i=0; i<temp1.length; i++) {
              temp2[i] = parseInt(temp1[i]);
            }

            temp3 = temp2.reverse();
            for(var i=0; i<temp3.length; i++) {
              rankingList = rankingList.concat(dict[temp3[i]].split(','));
              $('#Ranking').html(rankingList.indexOf(group) + 1);
            }
      },
        error: function(query, error){
            console.log(error);
        }
    });
}

//linking to OGs in each clan
$(".clans").on('click', function(e){
    var to_be_rendered = $(this).attr("data-bind");
    var clans = {
        'moltres': ['Charizard', 'Typhlosion', 'Blaziken', 'Infernape', 'Emboar'],
        'darkrai': ['Honchkrow', 'Tyranitar', 'Sharpedo', 'Houndoom', 'Malamar'],
        'kyurem': ['Glalie', 'Walrein', 'Beartic', 'Weavile', 'Aurorus'],
        'lugia': ['Alakazam','Hypno', 'Slowking', 'Gallade', 'Metagross'],
        'virizion': ['Venusaur', 'Meganium', 'Sceptile', 'Torterra', 'Serperior'],
        'suicune': ['Blastoise', 'Feraligatr', 'Swampert', 'Empoleon', 'Samurott'] };
    var color = {
        'moltres': '#FF0000',
        'lugia': '#9F55A1',
        'virizion': '#6FDB27',
        'suicune': '#15AFD1',
        'darkrai': '#333131',
        'kyurem': '#FFFFFF' };

    e.stopPropagation();
    e.preventDefault();

    var matched = clans[to_be_rendered] || [];
    var bg_color = color[to_be_rendered];
    console.log(bg_color);
    var renderHtml = $.map(matched, function(matched){
        return '<div class="groups col-md-2" data-name="' + matched + '"> <img src="img/' + matched + '.jpg" class="pc-only img-responsive center-block"> \
        <div style="background-color:'+ bg_color +'" class="img-div-bottom text-center zero-padding pc-only">' + matched + '</div><img src="img/'+ matched +'.png" class="mobile-only center-block"> \
        <div style="background-color:'+ bg_color +'" class="img-div-onmobile text-center mobile-only">' + matched + '</div> \
      </div>'}).join(',');
    $(".clan2OG").html(('<div class="col-md-1"></div>' + renderHtml + '<div class="col-md-1"></div>')); 

    $(".clan2OG").show();
    $(".clans").hide();
    window.scrollTo(0,0);

    //do not delete the line below
    document.getElementsByClassName('groups');

    //retrieve group details from database
    $(".groups").click(function(e){
        $('.clan2OG').hide();
        $('.final').show();
        window.scrollTo(0,0);

        var Pokemon = Parse.Object.extend("pokemon");
        var query = new Parse.Query(Pokemon);

        query.equalTo("name" , $(this).data('name'));
        query.find({
            success: function(results) {
                //deal with your returned data here.
                //console.log(results[0]["attributes"]);
                var result = results[0]["attributes"];
                $('#OGimg').html('<center><img src="img/' + result["name"] + '.png"></center>');
                $('#OGtype').html(result["type"]);
                $('#OGname').html(result["name"]);
                $('#Height').html(result["height"]);
                $('#Weight').html(result["weight"]);
                $('#Description').html(result["description"]);

                //Items below are for public page only
                if ($('#ExperienceP') || $('#CoinP') || $('#Ranking') || $('#caught') ) {
                    $('#ExperienceP').html(result["experience"]);
                    $('#CoinP').html(result["coin"]);
                    var temp = rankingCount(result["name"]);
                    $('#Ranking').html(temp);

                    // to display img for caught pokemon
                    var temp = result["caughtPokemon"];
                    var prepare = '';
                    for(var i=0; i<temp.length; i++) {
                        var poke = temp[i];
                        //console.log(poke);
                        prepare = prepare.concat('<div class="col-sm-3 col-xs-3 zero-padding zero padding"><img src="img/'+ poke +'.png" class="img-thumbnail"></div>');        
                        //console.log(prepare);
                    }

                    if (prepare==''){
                        $('#caught').html('<p> No Pokemon caught yet!! Gambateh!! </p>');
                    } else {
                        $('#caught').html(prepare);
                    };
                };
            },
            error: function(error) {
                console.log(error);
            }
    });
})
});

