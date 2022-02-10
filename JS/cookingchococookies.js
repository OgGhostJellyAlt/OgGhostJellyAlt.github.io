function mult() {
  
    function submit() {
      var userinput = document.getElementById('input').value;
      var butter = document.getElementById('butter')
      var wsugar = document.getElementById('wsugar')
      var bsugar = document.getElementById('bsugar')
      var egg = document.getElementById('egg')
      var vanilla = document.getElementById('vanilla')
      var soda = document.getElementById('soda')
      var water = document.getElementById('water')
      var salt = document.getElementById('salt')
      var flour = document.getElementById('flour')
      var chocochip = document.getElementById('chocochip')
      

      butter.innerHTML = userinput * 100
      wsugar.innerHTML = userinput * 100
      bsugar.innerHTML = userinput * 100
      egg.innerHTML = userinput * 1
      vanilla.innerHTML = userinput * 1
      soda.innerHTML = userinput * 0.5
      water.innerHTML = userinput * 1
      salt.innerHTML = userinput * 0.25
      flour.innerHTML = userinput * 200
      chocochip.innerHTML = userinput * 200
    }
    return {submit};
  }
