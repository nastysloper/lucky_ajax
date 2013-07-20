var onSuccessHandler = function(responseContent) {
  $("#die").html(responseContent);
};

$(document).ready(function () {
  $("form").on("submit", function(event) {
    event.preventDefault();
    var action = $(this).attr("action");
    var formData = $(this).serialize();

    $.post(action, formData, onSuccessHandler);
  });

  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery (line 6)
  //   2- prevent the default action for that event from happening (line 7)
  //   3- generate a random number between 1 and 6 using JavaScript (line )
  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery

});
