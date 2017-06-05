$(document).ready(function() {
  $("#things").submit(function(event) {
    event.preventDefault();
    var items = ["food", "food1", "food2", "food3"];

    var newItems = items.map(function(number) {
      return $("input#" + number).val().toUpperCase();
    });

    var newItems = newItems.sort();
    var counter = 0;
    newItems.forEach(function(item) {
      $("ul.groceryList").append("<li>" + newItems[counter] + "</li>");
      counter += 1;
  $(".things").show()
    });
  });
});
