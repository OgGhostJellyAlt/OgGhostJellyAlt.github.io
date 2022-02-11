var ingredients = [
  "flour","100",
  "egg","2",
  "milk","300",
  "oil", "1",
  "salt","1",
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

