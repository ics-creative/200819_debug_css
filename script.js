document.querySelectorAll(".navigation a").forEach(element=>{
  element.addEventListener("click",(event)=>{
    event.preventDefault()
    const target = event.target.attributes.href.value;
    const targetElement = document.querySelector(target);
    const elementTop = targetElement.getBoundingClientRect().top;
    const offsetTop = window.pageYOffset
    const offset = 120
    const top = elementTop + offsetTop - offset
    window.scrollTo({
      top,
      behavior: "smooth"
    });
  })
})