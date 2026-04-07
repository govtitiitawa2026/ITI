
  let menuBtn = document.getElementById("menuBtn");
  let navMenu = document.getElementById("navMenu");

  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
  


  const trade=document.querySelector(".trade");
  const subtrade=document.querySelector(".sub-trade");


  trade.addEventListener("click" ,open);

  function open(){
    subtrade.classList.toggle("show");

    
    
  }

  
  
  