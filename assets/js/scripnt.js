$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
//burger
const burger=document.querySelector(".burger");
if(burger){
  burger.addEventListener("click", function () {
      const mobilnav = document.querySelector(".nav_list");
      if (mobilnav.style.transform == "translateX(-500px)") {
        mobilnav.style.transform = "translateX(0px)";
      }
      else  {
        mobilnav.style.transform = "translateX(-500px)";
      }
    })
}
//accardion
const openAccardion=document.querySelector(".accardion_data")
if(openAccardion){
  openAccardion.addEventListener("click",()=>{
    const Opendata=document.querySelector(".accardion-form")
    Opendata.classList.toggle("active")
    
  })
}