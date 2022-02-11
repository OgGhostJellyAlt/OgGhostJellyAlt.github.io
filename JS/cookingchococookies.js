  var ingredients = [
    "butter","100",
    "wsugar", "100",
    "bsugar","100",
    "egg","1",
    "vanilla","1",
    "soda", "0.5",
    "water","1",
    "salt","0.25",
    "flour","200",
    "chocochip","200",
  ];
  
  function mult() {
    
      function submit() {
        var userinput = document.getElementById('input').value;
        var i = 0;
  
        do {
        document.getElementById(ingredients[i]).innerHTML = userinput * ingredients[i + 1];
  
        i = i + 2;
        } while (i < ingredients.length);
      }
      return {submit};
    }
  
