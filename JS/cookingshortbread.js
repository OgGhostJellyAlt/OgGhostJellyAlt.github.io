function mult() {
  
    function submit() {
      var userinput = document.getElementById('input').value;
      var flour = document.getElementById('butter')
      var egg = document.getElementById('sugar')
      var milk = document.getElementById('flour')
      var oil = document.getElementById('starch')
      var salt = document.getElementById('powder')

      flour.innerHTML = userinput * 100
      egg.innerHTML = userinput * 40
      milk.innerHTML = userinput * 150
      oil.innerHTML = userinput * 1
      salt.innerHTML = userinput * 0.25
    }
    return {submit};
  }
