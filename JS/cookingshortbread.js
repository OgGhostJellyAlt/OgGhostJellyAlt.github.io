  var ingredients = [
    "butter","100",
    "sugar","40",
    "flour","150",
    "starch","1",
    "powder","0.25",
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

  