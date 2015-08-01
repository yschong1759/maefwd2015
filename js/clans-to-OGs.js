
$(".clans").on('click', function(e){
    var to_be_rendered = $(this).attr("data-bind");
    
    var clans = {
        'moltres': ['Charizard', 'Typhlosion', 'Blaziken', 'Infernape', 'Emboar'],
        'darkrai': ['Honchkrow', 'Tyranitar', 'Sharpedo', 'Houndoom', 'Malamar'],
        'kyurem': ['Glalie', 'Walrein', 'Beartic', 'Weavile', 'Aurorus'],
        'lugia': ['Alakazam','Hypno', 'Slowking', 'Gallade', 'Metagross'],
        'virizion': ['Venasaur', 'Meganium', 'Sceptile', 'Torterra', 'Serperior'],
        'suicune': ['Blastoise', 'Feraligatr', 'Swampert', 'Empoleon', 'Samurott'] };
     
    e.stopPropagation();
    e.preventDefault();

    var matched = clans[to_be_rendered] || [];
    var renderHtml = $.map(matched, function(matched){
        return '<div class="groups col-md-2" data-name="' + matched + '"> <img src="img/' + matched + '.jpg" class="pc-only img-responsive center-block"> \
        <div style="background-color:Blue" class="img-div-bottom text-center zero-padding pc-only">' + matched + '</div><img src="img/'+ matched +'.png" class="mobile-only center-block"> \
        <div style="background-color:Blue" class="img-div-onmobile text-center mobile-only">' + matched + '</div> \
      </div>'}).join('');
    $(".clan2OG").html(('<div class="col-md-1"></div>' + renderHtml + '<div class="col-md-1"></div>').replace(',','')); 

    $(".clan2OG").show();
    $(".clans").hide();

    console.log(document.getElementsByClassName('groups'));

    $(".groups").click(function(e){
        $('.clan2OG').hide();
        $('.final').show();

        var Pokemon = Parse.Object.extend("pokemon");
        var query = new Parse.Query(Pokemon);

        query.equalTo("name" , $(this).data('name'));
        query.find({
            success: function(results) {
                //deal with your returned data here.
                //console.log(results[0]["attributes"]);

                var result = results[0]["attributes"];
                $('#OGtype').html(result["type"]);
                $('#OGname').html(result["name"]);
                $('#Height').html(result["height"]);
                $('#Weight').html(result["weight"]);
                $('#Description').html(result["description"]);
                $('#ExperienceP').html(result["experience"]);
                $('#CoinP').html(result["coin"]);

            },
            error: function(error) {
                console.log(error);
            }
    });
})
});

