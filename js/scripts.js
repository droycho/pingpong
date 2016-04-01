$("form#enter").submit(function(event) {
  event.preventDefault();
  var userNumber= parseInt($("input#input1").val());
  var start= 1;
  var list= [];
  for (var i = 1; i <= userNumber; i++) {
    list.push(i);
  }

  var factorsThree = list.map(function(item){
    if (item % 15 === 0) {
      return "pingpong"
    } else if (item % 5 === 0) {
      return "pong"
    } else if (item % 3 === 0) {
      return "ping"
    } else {
      return item
    }
  });
  console.log(list);
  console.log(factorsThree);
$('#output').append("<li>" + factorsThree + "</li>");

});
