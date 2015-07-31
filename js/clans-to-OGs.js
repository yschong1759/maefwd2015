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
        return '<div class="col-md-2"> <img src="img/' + matched + '.jpg" class="pc-only img-responsive center-block"> \
        <div style="background-color:Blue" class="img-div-bottom text-center zero-padding pc-only">' + matched + '</div><img src="img/'+ matched +'.png" class="mobile-only center-block"> \
        <div style="background-color:Blue" class="img-div-onmobile text-center mobile-only">' + matched + '</div> \
      </div>'}).join('');
    $(".clan2OG").html(('<div class="col-md-1"></div>' + renderHtml + '<div class="col-md-1"></div>').replace(',','')); 

    $(".clan2OG").show();
    $(".clans").hide();

})