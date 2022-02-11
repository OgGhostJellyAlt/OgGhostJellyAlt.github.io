function mult() {
  
    function submit() {
      var userinput = document.getElementById('input').value;
      var flour = document.getElementById('flour')
      var egg = document.getElementById('egg')
      var milk = document.getElementById('milk')
      var oil = document.getElementById('oil')
      var salt = document.getElementById('salt')

      flour.innerHTML = userinput * 100
      egg.innerHTML = userinput * 2
      milk.innerHTML = userinput * 300
      oil.innerHTML = userinput * 1
      salt.innerHTML = userinput * 1
    }
    return {submit};
  }

