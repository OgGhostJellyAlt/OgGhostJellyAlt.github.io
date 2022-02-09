function mult() {
  
    function submit() {
      var userinput = document.getElementById('input').value;
      var bread = document.getElementById('bread')
      var butter = document.getElementById('butter')
      var milk = document.getElementById('milk')
      var sugar = document.getElementById('sugar')
      var raisin = document.getElementById('raisin')
      var egg = document.getElementById('egg')
      var cinnamon = document.getElementById('cinnamon')
      var vanilla = document.getElementById('vanilla')

      bread.innerHTML = userinput * 275
      butter.innerHTML = userinput * 30
      milk.innerHTML = userinput * 400
      sugar.innerHTML = userinput * 100
      raisin.innerHTML = userinput * 80
      egg.innerHTML = userinput * 3
      cinnamon.innerHTML = userinput * 0.5
      vanilla.innerHTML = userinput * 0.5
    }
    return {submit};
  }
