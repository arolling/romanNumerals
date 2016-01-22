var breakDown = function(number) {
  var romanBases = ["M", "D", "C", "L", "X", "V", "I"];
  var arabicBases = [1000,500,100,50,10,5,1];
  var romanNumeral = '';

  for (var i=0; i < romanBases.length ; i++) {
    if (number >= arabicBases[i]) {
      var quantity = Math.floor(number / arabicBases[i]);
      var remainder = number % arabicBases[i];
      number = remainder;
      for (var j = 0; j < quantity; j++) {
        romanNumeral = romanNumeral + romanBases[i];
      }
    }
  }
  return romanNumeral;
}

var moreThanThree = function(rawNumerals) {
  var romanBases = ["M", "D", "C", "L", "X", "V", "I"];
  if (rawNumerals.includes('VIIII')) {
    rawNumerals = rawNumerals.replace(/viiii/gi, 'IX');
  }
  if (rawNumerals.includes('IIII')) {
    rawNumerals = rawNumerals.replace(/iiii/gi, 'IV');
  }
  if (rawNumerals.includes('LXXXX')) {
    rawNumerals = rawNumerals.replace(/lxxxx/gi, 'XC');
  }
  if (rawNumerals.includes('XXXX')) {
    rawNumerals = rawNumerals.replace(/xxxx/gi, 'XL');
  }
  if (rawNumerals.includes('DCCCC')) {
    rawNumerals = rawNumerals.replace(/dcccc/gi, 'CM');
  }
  if (rawNumerals.includes('CCCC')) {
    rawNumerals = rawNumerals.replace(/cccc/gi, 'CD');
  }
  return rawNumerals;
}

var romanConverter = function(number){
  if (number > 3999) {
    return "error";
  }
  var rawNumerals = breakDown(number);
  if (rawNumerals.includes('IIII') || rawNumerals.includes('XXXX') || rawNumerals.includes('CCCC')) {
    var numerals = moreThanThree(rawNumerals);
  } else {
    var numerals = rawNumerals;
  }
  return numerals;
}
// END BUSINESS LOGIC

$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    var arabicNumber = parseInt($("#inputNumber").val());
    var romanNumber = romanConverter(arabicNumber);
    //window.location.href ="disemvowelled.html";
    $(".output").text(romanNumber);
    //alert(endPhrase);


  });
});
