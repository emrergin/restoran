function menuLoad(){


  let activeSlide=0;
  const allSlides=[];

  const card1=document.createElement(`div`); 
  const card2=document.createElement(`div`);
  const card3=document.createElement(`div`)
  const card4=document.createElement(`div`);
  card1.classList.add(`menuitem`);
  card2.classList.add(`menuitem`);
  card3.classList.add(`menuitem`);
  card4.classList.add(`menuitem`);



  const menu=document.createElement(`div`);
  menu.classList.add(`menuAlbum`);

  const resim1= new Image();
  const resim2= new Image();
  const resim3= new Image();
  const resim4= new Image();
  resim1.src=`https://via.placeholder.com/150?text=Eh+İşte+1`;
  resim2.src=`https://via.placeholder.com/150?text=Eh+İşte+2`;
  resim3.src=`https://via.placeholder.com/150?text=Eh+İşte+3`;
  resim4.src=`https://via.placeholder.com/150?text=Eh+İşte+4`;

  const yazi1=document.createElement(`span`);
  const yazi2=document.createElement(`span`);
  const yazi3=document.createElement(`span`);
  const yazi4=document.createElement(`span`);
  yazi1.textContent="Eh İşte -1";
  yazi2.textContent="Eh İşte -2";
  yazi3.textContent="Eh İşte -3";
  yazi4.textContent="Eh İşte -4";


  card1.appendChild(resim1);
  card2.appendChild(resim2);
  card3.appendChild(resim3);
  card4.appendChild(resim4);
  card1.appendChild(yazi1);
  card2.appendChild(yazi2);
  card3.appendChild(yazi3);
  card4.appendChild(yazi4);
  allSlides[0]=card1;
  allSlides[1]=card2;
  allSlides[2]=card3;
  allSlides[3]=card4;


  const menuGenel=document.createElement('div');
  menu.appendChild(allSlides[activeSlide]);
  // menu.appendChild(card2);
  // menu.appendChild(card3);
  // menu.appendChild(card4);
  menuGenel.appendChild(menu);

  const imageNav= document.createElement(`div`);
  const leftNav=document.createElement(`span`);
  leftNav.addEventListener("click", navBackward);
  leftNav.classList.add(`smallButton`);
  leftNav.textContent=`◀`;
  const rightNav=document.createElement(`span`);
  rightNav.textContent=`▶`
  rightNav.addEventListener("click", navForward);
  rightNav.classList.add(`smallButton`);
  const navText=document.createElement(`span`);
  
  navText.textContent=blackDot();

  let slideInterval=setInterval(navForward, 5000);
  

  imageNav.appendChild(leftNav);
  imageNav.appendChild(navText);
  imageNav.appendChild(rightNav);
  imageNav.classList.add(`unselectable`);
  
  menuGenel.appendChild(imageNav);
  menuGenel.setAttribute(`id`,`menuContainer`);
  
  return menuGenel;

  function navForward(){
    activeSlide=(activeSlide+1)%4;
    menu.removeChild(menu.firstChild);
    menu.appendChild(allSlides[activeSlide]);
    navText.textContent=blackDot();
  }

  function navBackward(){
    activeSlide=(activeSlide-1);
    if (activeSlide===-1){activeSlide=3;}
    menu.removeChild(menu.firstChild);
    menu.appendChild(allSlides[activeSlide]);
    navText.textContent=blackDot();
  }

  function blackDot(){
    let navString=`○○○○`;
    navString=navString.substring(0,activeSlide) + `●`+ navString.substring(activeSlide+1);
    return navString;
  }

}



  export {  menuLoad };