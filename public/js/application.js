var onSuccessHandler = function(responseContent) {
  $("#die").html(responseContent);
};


var onJaxHandler = function(responseContent) {
  $('#jax').append(responseContent);
};

$(document).ready(function () {
  $("form").on("submit", function(event) {
    event.preventDefault();
    var action = $(this).attr("action");
    var formData = $(this).serialize();

    $.post('action', formData, onSuccessHandler);
  });


  $('#jaxForm').on('submit', function(event){
    event.preventDefault();

    var action = $(this).attr('action'); // this is the url
    var formData = $(this).serialize(); // this is the data in the form
    
    console.log(formData);  // I'm getting jaxster=97 

    $.post('action', formData, onJaxHandler);
  });
});


// $('.container').on("submit", '#rollForm', function(e){
//   e.preventDefault()
//   $.post("/rolls", function(data){
//     $('#die').html(data)
//   })
// })
