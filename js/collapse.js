  function toggle(button=null, menuId=null, trueStyle=null, falseStyle=null){
  
  const flag = document.getElementById(`${button}`);
  const menu = document.getElementById(`${menuId}`);
 
  if(flag.getAttribute('value') == "true"){
    console.log(`el atributo esta en true`);
    flag.setAttribute('value', "false");
    menu.setAttribute("class", `${trueStyle}`);

  }else{
    menu.setAttribute("class", `${falseStyle}`); 
    console.log(`xd`);
    flag.setAttribute('value', "true");
    
  }
  

}

  
