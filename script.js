function fibonacciGenerator() {
  var output = [];

  var start = Number(document.getElementById("start").value);
  var number = Number(document.getElementById("number").value);
  var seperator = document.getElementById("seperator");
  var seperatorText = seperator.options[seperator.selectedIndex].text;

  if (number === 0) {
    document.getElementById("output").innerHTML = null;
  } else if (number === 1) {
    document.getElementById("output").innerHTML = start;
  } else if (number === 2) {
    document.getElementById("output").innerHTML =
      start + " " + seperatorText + " " + (start + 1);
  } else {
    output = [start, start + 1];
    document.getElementById("output").innerHTML =
      start + " " + seperatorText + " " + (start + 1);
    for (var i = 2; i < number; i++) {
      var newValue = output[output.length - 2] + output[output.length - 1];
      output.push(newValue);
      document.getElementById("output").innerHTML +=
        " " + seperatorText + " " + newValue;
    }
  }
  document.getElementById("output").innerHTML += " .";
}
