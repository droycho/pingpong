$("form#enter").submit(function(event) {
  event.preventDefault();
  var userNumber= parseInt($("input#input1").val());
  var start= 1;
  var list= [];
  for (var i = 1; i <= userNumber; i++) {
    list.push(i);
  }

  var factorsThree = list.map(function(item){
    if (item % 3 === 0) {
      return "ping"
    }
  });
  var factorsFive = list.map(function(item){
    if (item % 5 === 0) {
      return "pong"
    }
  });
  var factorsFifteen = list.map(function(item){
    if (item % 15 === 0) {
      return "pingpong"
    }
  });

  var combinedArray =
  console.log(factorsThree);
  console.log(factorsFive);
  console.log(factorsFifteen);



  $("#output").append(result);
});
