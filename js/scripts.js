$(document).ready(function() {
  $("#form").submit(function() {
    event.preventDefault();
    var userInput = $("textarea").val();
    var charArray = userInput.split("");
    var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    var answer = [];
    charArray.forEach(function(char){
      if (vowels.includes(char)) {
        answer.push("-");
      } else {
        answer.push(char);
      }
    });

    answer.forEach(function(char) {
      $(".question").append(char);
    });

    $(".question").show();
  });
});
