$(document).ready(function() {
  $('.add-new').click(function () {
    $(this).before('<div class="form-group selection no-margin">\
          <label for="select" class="col-md-1 control-label"><i class="fa fa-lg fa-minus-square"></i></label>\
          <div class="col-md-5 no-padding">\
            <select class="form-control pokeType">\
              <option value="None">Type</option>\
              <option value="Fire">Fire</option>\
              <option value="Water">Water</option>\
              <option value="Ice">Ice</option>\
              <option value="Physics">Physics</option>\
              <option value="Grass">Grass</option>\
            </select>\
          </div>\
          <div class="col-md-5 no-padding">\
            <select class="col-sm-3 form-control pokemonSelect"></select>\
          </div>\
          <div class="col-md-1"></div>\
        </div>');
  })

  $('.selection-form').on('click', function(e){
    e.stopPropagation();
    e.preventDefault();
    var clicked = e.target;
    if ($(clicked).parents('.selection').length && ($(clicked).is('label') || $(clicked).is('i'))) {
      $(clicked).parents('.selection').remove();
    }  
  });
  
});

