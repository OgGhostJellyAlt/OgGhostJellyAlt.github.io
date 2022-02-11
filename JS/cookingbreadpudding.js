  var ingredients = [
    "bread","275",
    "butter","30",
    "milk","400",
    "sugar","100",
    "raisin","80",
    "egg","3",
    "cinnamon","0.5",
    "vanilla","0.5"
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
  