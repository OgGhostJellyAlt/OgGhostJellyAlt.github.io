function mult() {
  
    function submit() {
      var userinput = document.getElementById('input').value;
      var flour = document.getElementById('flour')
      var egg = document.getElementById('egg')
      var milk = document.getElementById('milk')
      var oil = document.getElementById('oil')
      var salt = document.getElementById('salt')

      let flouramount = flour.innerHTML
      let eggamount = egg.innerHTML
      let milkamount = milk.innerHTML
      let oilamount = oil.innerHTML
      const saltamount = salt.innerHTML

      flour.innerHTML = userinput * flouramount
      egg.innerHTML = userinput * eggamount
      milk.innerHTML = userinput * milkamount
      oil.innerHTML = userinput * oilamount
      salt.innerHTML = userinput * saltamount
    }
    return {submit};
  }

