function mult() {
  
    function submit() {
      var userinput = document.getElementById('input').value;
      var flour = document.getElementById('flour')
      var egg = document.getElementById('egg')
      var milk = document.getElementById('milk')
      var oil = document.getElementById('oil')
      var salt = document.getElementById('salt')

      var flouramount = flour.innerHTML
      var eggamount = egg.innerHTML
      var milkamount = milk.innerHTML
      var oilamount = oil.innerHTML
      var saltamount = salt.innerHTML

      flour.innerHTML = userinput * flouramount
      egg.innerHTML = userinput * eggamount
      milk.innerHTML = userinput * milkamount
      oil.innerHTML = userinput * oilamount
      salt.innerHTML = userinput * saltamount
    }
    return {submit};
  }

