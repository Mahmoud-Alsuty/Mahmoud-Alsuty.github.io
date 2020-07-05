
/* select elements and store them in variables*/
const sec = document.querySelectorAll(".sec");
const unordered = document.querySelector("ul");
const section1 =document.querySelector(".section1");
const section2 =document.querySelector(".section2");
const section3 =document.querySelector(".section3");
const section4 =document.querySelector(".section4");
let list;
let link;
/* making loop to get dynamic navBar*/
for(let loop=1;loop<=sec.length;loop++){
   list = document.createElement("li");
  link = document.createElement("a");
  const text = document.createTextNode(`sec ${loop}`);
  unordered.appendChild(list);
  list.appendChild(link);
  link.appendChild(text);
  
  /*making scroll to section when pressing on navBar*/
   if (loop==1){
   let lista = list.classList.add("sec1");
  link.addEventListener('click',function(){
  section1.scrollIntoView({behavior: "smooth"});
  })

}
  else if (loop ==2){
    let listb = list.classList.add("sec2");
link.addEventListener('click',function (){
  section2.scrollIntoView({behavior: "smooth"});
})
}
else if (loop==3){
  let listc = list.classList.add("sec3");
  link.addEventListener('click',function(){
  section3.scrollIntoView({behavior: "smooth"});
  })
}
else if (loop==4){
 let  listd = list.classList.add("sec4");
  link.addEventListener('click',function(){
  section4.scrollIntoView({behavior: "smooth"});
  })
}

}
/* getting sections active class when it is in view and removing active class when no longer in view and adding  active class to navbar when its section viewed*/
window.addEventListener('scroll',function(){
  if(section1.getBoundingClientRect().top < window.innerHeight){
    section1.setAttribute('class','your-active-class');
    document.querySelector(".sec1").classList.add("active");
  }else{
    section1.removeAttribute('class','your-active-class');
    document.querySelector(".sec1").classList.remove("active");
  }
})
window.addEventListener('scroll',function(){
  if(section2.getBoundingClientRect().top < window.innerHeight){
    section2.setAttribute('class','your-active-class');
    section1.removeAttribute('class','your-active-class');
    document.querySelector(".sec2").classList.add("active");
    document.querySelector(".sec1").classList.remove("active");
  } else{
    section2.removeAttribute('class','your-active-class');
    document.querySelector(".sec2").classList.remove("active");
  }
})
window.addEventListener('scroll',function(){
  if(section3.getBoundingClientRect().top < window.innerHeight){
    section3.setAttribute('class','your-active-class');
    section2.removeAttribute('class','your-active-class');
    section1.removeAttribute('class','your-active-class');
    document.querySelector(".sec3").classList.add("active");
    document.querySelector(".sec2").classList.remove("active");
    document.querySelector(".sec1").classList.remove("active");
  }else{
    section3.removeAttribute('class','your-active-class');
    document.querySelector(".sec3").classList.remove("active");
  }
})

window.addEventListener('scroll',function(){
  if(section4.getBoundingClientRect().top < window.innerHeight){
    section4.setAttribute('class','your-active-class');
    section1.removeAttribute('class','your-active-class');
    section2.removeAttribute('class','your-active-class');
    section3.removeAttribute('class','your-active-class');
  document.querySelector(".sec4").classList.add("active");
  document.querySelector(".sec2").classList.remove("active");
    document.querySelector(".sec3").classList.remove("active");
    document.querySelector(".sec1").classList.remove("active");
  }else{
    section4.removeAttribute('class','your-active-class');
    document.querySelector(".sec4").classList.remove("active");
  }
})