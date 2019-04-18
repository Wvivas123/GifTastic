// at load javascript creats buttons at top
// when buttons are pressed app generates gifs via giphy api
// if user inputs topic into serch bar app creates button dynamiclly and returns gifs via api

$(document).ready(function(){

var gifURL = "http://api.giphy.com/v1/gifs/search?q=monkey&api_key=6yLe0B2bH4OQyPMpbI43W53Y6qkdQfws&limit=10";

var topics = ["dogs", "cats", "monkey", "chimp", "frog", "whale", "dolphin", "sloth"];
var movie;
var newButtons = [];
var buttonValue;

//var movie = $(".gifButtons").val();







$(document).on("click", function() {

  $(".gifButtons").on("click", function() {
    console.log("gifButtons.value");
    var animal = $("#animal-input").val().trim();
    var buttonValue = $(this).val();

    var gifURL = "http://api.giphy.com/v1/gifs/search?q=" + buttonValue + "&api_key=6yLe0B2bH4OQyPMpbI43W53Y6qkdQfws&limit=10";
    $.ajax({
      method: "Get",
      url: gifURL,
    }).then(function(response) {
      console.log(response);

      for (var i = 0; i < response.data.length; i++) {
        //loop through data and grab images and append them to screen
        console.log(response.data[i].images.original.url);

        var gifURLS = response.data[i].images.original.url;




        $("#gifsArea0").html("<img class='gifs' id='Gif0' src=" + response.data[0].images.original.url  + "></img>");
        $("#gifsArea1").html("<img class='gifs' id='Gif1' src=" + response.data[1].images.original.url  + "></img>");
        $("#gifsArea2").html("<img class='gifs' id='Gif2' src=" + response.data[2].images.original.url  + "></img>");
        $("#gifsArea3").html("<img class='gifs' id='Gif3' src=" + response.data[3].images.original.url  + "></img>");
        $("#gifsArea4").html("<img class='gifs' id='Gif4' src=" + response.data[4].images.original.url  + "></img>");
        $("#gifsArea5").html("<img class='gifs' id='Gif5' src=" + response.data[5].images.original.url  + "></img>");
        $("#gifsArea6").html("<img class='gifs' id='Gif6' src=" + response.data[6].images.original.url  + "></img>");
        $("#gifsArea7").html("<img class='gifs' id='Gif7' src=" + response.data[7].images.original.url  + "></img>");
        $("#gifsArea8").html("<img class='gifs' id='Gif8' src=" + response.data[8].images.original.url  + "></img>");
        $("#gifsArea9").html("<img class='gifs' id='Gif9' src=" + response.data[9].images.original.url  + "></img>");
        $("#gifsArea10").html("<img class='gifs'id='Gif10' src=" + response.data[10].images.original.url  + "></img>");

      }
    });



  });

});







$("#submitButton").on("click", function(event) {
  event.preventDefault();
  // This line grabs the input from the textbox
  var animal = $("#animal-input").val().trim();

  // Adding movie from the textbox to our array
  $("#buttons").append("<button class='gifButtons' value=" + animal + ">" + animal + "</button>");
  newButtons.push(animal);

  // Calling renderButtons which handles the processing of our movie array

});

function renderButtons() {

  for (var i = 0; i < topics.length; i++) {
    // console.log(topics[i]);
    $("#buttons").append("<button class='gifButtons' value=" + topics[i] + ">" + topics[i] + "</button>");
    var newButton = topics[i];
    newButtons.push(newButton);


  }




}





renderButtons();
});
//$.ajax({
//  method: "Get",
//  url: gifURL,
//}).then(function(response){
//  console.log(response);
//});
