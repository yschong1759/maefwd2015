$(document).ready(function() {
  $('.add-new').click(function () {
    $(this).before('<div class="form-group selection no-margin">\
        <label for="select" class="col-md-2 control-label"><i class="fa fa-lg fa-minus-square"></i></label>\
        <div class="col-md-5 no-padding">\
          <select id="select" class="form-control">\
            <option>None</option>\
            <option>2</option>\
            <option>3</option>\
            <option>4</option>\
            <option>5</option>\
          </select>\
        </div>\
        <div class="col-md-5 no-padding">\
          <select id="select" class="form-control">\
            <option>None</option>\
            <option>2</option>\
            <option>3</option>\
            <option>4</option>\
            <option>5</option>\
          </select>\
        </div>\
      </div>');
  })

  $('.selection-form').on('click', function(e){
    e.stopPropagation();
    e.preventDefault();
    var clicked = e.target;
    if ($(clicked).parents('.selection').length && ($(clicked).is('label') || $(clicked).is('i'))) {
      console.log($(clicked).parent().html());
      $(clicked).parents('.selection').remove();
    }  
  });
  
});

