//initialize for parse
Parse.initialize("fxS2moYN7SBJwg02HO9kMFMLFXzFIBs8EaS9s7vf" , "Ci7HRvQesSsQroPRJnNea7ofhuPjiwhof39kdp9n");


//function to retrieve and verify
function verify(username, password) {
    var User = Parse.Object.extend("user");
    var query = new Parse.Query(User);
    var name = 'username';
    query.find({
        success: function(name) {
            // Do something with the returned Parse.Object values
            var dict = {};
            for (var i = 0; i < name.length; i++) {
              var object = name[i];
              dict[object.get('username')] = object.get('password') ;
            };
            if (username in dict && (password == dict[username]))  {
              $('.login').hide();
              $('#logingroup').removeClass('login');
              $('#firstpage').show();
              $
               window.scrollTo(0,0);

            } else {
              console.log('not success');
              $('#notSuccess').show()
            }
      },
        error: function(query, error){
            console.log(error);
        }
    });
}

//triggered when click login button
$('#submitLogin').on('click', function(){
  verify($('#loginUser').val(), $('#loginPassword').val());
})