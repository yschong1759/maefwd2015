//Guide for Parse is https://www.parse.com/docs/js/guide

//Initialize the Parse connection.
Parse.initialize("fxS2moYN7SBJwg02HO9kMFMLFXzFIBs8EaS9s7vf" , "Ci7HRvQesSsQroPRJnNea7ofhuPjiwhof39kdp9n");

//This function cannot be used directly. Simply copy and paste the code to where the data is required.
//Deal with the data returned inside the success function.
//This principle applies to all the get data methods.
function getPokemonInfo(id){
    var Pokemon = Parse.Object.extend("pokemon");
    var query = new Parse.Query(Pokemon);

    query.equalTo("name" , id);
    query.find({
        success: function(results) {
            //deal with your returned data here.
            console.log(results[0]["attributes"]);
        },
        error: function(error) {
            console.log(error);
        }
    });
}

function getPokemonsInGroup(group_id) {
    var Pokemon = Parse.Object.extend("pokemon");
    var query = new Parse.Query(Pokemon);

    query.equalTo("group" , group_id);
    query.find({
        success: function(results) {
            for(var i=0;i<results.length;i++) {
                console.log(results[i]["attributes"]);
            }
        },
        error: function(error){
            console.log(error);
        }
    })
}

function getGroupInfo(id) {
    var Group = Parse.Object.extend("group");
    var query = new Parse.Query(Group);

    query.equalTo("Id" , id);
    query.find({
        success: function(results) {

            console.log(results[0]["attributes"]);
        },
        error: function(error) {
            console.log(error);
        }
    })
}

//Every time to use the function, please provide all the parameters required in their final state.
function updateGroupInfo(name, experience , coin, caughtPokemon) {
    var Pokemon = Parse.Object.extend("pokemon");
    var query = new Parse.Query(Pokemon);

    query.equalTo("name" , name);
    query.first({
        success: function(group) {
            group.set("experience" , experience);
            group.set("coin" , coin);
            group.set("caughtPokemon" , caughtPokemon);
            group.save();
        },
        error: function(error){
            console.log(error);
        }
    });
}

function getUserInfo(username) {
    var User = Parse.Object.extend("user");
    var query = new Parse.Query(User);

    query.equalTo("username" , username);
    query.find({
       success: function(results) {
           console.log(results[0]["attributes"]);
       },
        error: function(error) {
            console.log(error);
        }
    });
}

//Insert the new user info inside the database.
//The password here is directly stored inside the database. You can add more encryption if needed.
function insertUser(username, password) {
    var User = Parse.Object.extend("user");
    var user = new User();

    user.set("username" , username);
    user.set("password" , password);
    user.save();
}
