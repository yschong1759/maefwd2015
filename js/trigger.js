$(".group").click(function(e){
    console.log('here');
});


$(".group").click(function(e){
    console.log('here');
    $('.clan2OG').hide();
    $('.final').show();

    var Pokemon = Parse.Object.extend("pokemon");
    var query = new Parse.Query(Pokemon);

    query.equalTo("name" , $(this).data('name'));
    query.find({
        success: function(results) {
            //deal with your returned data here.
            console.log(results[0]["attributes"]);

            var result = results[0]["attributes"];
            $('#OGtype').html(result["type"]);
            $('#OGname').html(result["name"]);
            $('#Height').html(result["height"]);
            $('#Weight').html(result["weight"]);
            $('#Description').html(result["description"]);


            

        },
        error: function(error) {
            console.log(error);
        }
    });
})


