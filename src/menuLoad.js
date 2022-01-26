import Ceviz from './ceviz.jpg';
import Havuc from './havuc.jpg'
import Kes from './kes.jpg';
import Kalp from './kalp.jpg'
import Karnabahar from './karnabahar.jpg';

function menuLoad(){


  let activeSlide=0;
  const allSlides=[];

  const card1=document.createElement(`div`); 
  const card2=document.createElement(`div`);
  const card3=document.createElement(`div`)
  const card4=document.createElement(`div`);
  const card5=document.createElement(`div`);
  card1.classList.add(`menuitem`);
  card2.classList.add(`menuitem`);
  card3.classList.add(`menuitem`);
  card4.classList.add(`menuitem`);
  card5.classList.add(`menuitem`);



  const menu=document.createElement(`div`);
  menu.classList.add(`menuAlbum`);

  const resim1= new Image();
  const resim2= new Image();
  const resim3= new Image();
  const resim4= new Image();
  const resim5= new Image();
  resim1.src=Kalp;
  resim2.src=Kes;
  resim3.src=Karnabahar;
  resim4.src=Ceviz;
  resim5.src=Havuc;

  const yazi1=document.createElement(`span`);
  const yazi2=document.createElement(`span`);
  const yazi3=document.createElement(`span`);
  const yazi4=document.createElement(`span`);
  const yazi5=document.createElement(`span`);
  yazi1.innerHTML ="SadeRişte<br/><br/> Yalnızca siz ve erişte. Başbaşa.";
  yazi2.innerHTML ="Keşişte<br/><br/> Bolu yöresinden kurutulmuş yoğurtla süslenmiş erişte.";
  yazi3.innerHTML ="Eh İşte<br/><br/> Bunu biz pek sevmiyoruz, ama misafirlerimiz soruyorlar.";
  yazi4.innerHTML ="Cevişte<br/><br/> Kendi bahçemizin cevizleriyle yaptığımız erişte.";
  yazi5.innerHTML ="Çocuk Menüsü<br/> <br /> Çocuklar havuç seviyorlar diye bir duyum aldık.";


  card1.appendChild(resim1);
  card2.appendChild(resim2);
  card3.appendChild(resim3);
  card4.appendChild(resim4);
  card5.appendChild(resim5);
  card1.appendChild(yazi1);
  card2.appendChild(yazi2);
  card3.appendChild(yazi3);
  card4.appendChild(yazi4);
  card5.appendChild(yazi5);
  allSlides[0]=card1;
  allSlides[1]=card2;
  allSlides[2]=card3;
  allSlides[3]=card4;
  allSlides[4]=card5;


  const menuGenel=document.createElement('div');
  menu.appendChild(allSlides[activeSlide]);
 
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
  const navCircle1=document.createElement(`span`);  
 
  const navCircle2=document.createElement(`span`);
  const navCircle3=document.createElement(`span`);
  const navCircle4=document.createElement(`span`);
  const navCircle5=document.createElement(`span`);

  navCircle1.cell=`0`;
  navCircle2.cell=`1`;
  navCircle3.cell=`2`;
  navCircle4.cell=`3`;
  navCircle5.cell=`4`;

  navCircle1.addEventListener("click", selectImage);
  navCircle2.addEventListener("click", selectImage);
  navCircle3.addEventListener("click", selectImage);
  navCircle4.addEventListener("click", selectImage);
  navCircle5.addEventListener("click", selectImage);

  navCircle1.classList.add(`smallButton`);
  navCircle2.classList.add(`smallButton`);
  navCircle3.classList.add(`smallButton`);
  navCircle4.classList.add(`smallButton`);
  navCircle5.classList.add(`smallButton`);



  navCircle1.cell=0;
  navCircle2.cell=1;
  navCircle3.cell=2;
  navCircle4.cell=3;
  navCircle5.cell=4;
  
  blackDot();

  let slideInterval=setInterval(navForward, 5000);
  

  imageNav.appendChild(leftNav);
  imageNav.appendChild(navCircle1);
  imageNav.appendChild(navCircle2);
  imageNav.appendChild(navCircle3);
  imageNav.appendChild(navCircle4);
  imageNav.appendChild(navCircle5);
  imageNav.appendChild(rightNav);
  imageNav.classList.add(`unselectable`);
  
  menuGenel.appendChild(imageNav);
  menuGenel.setAttribute(`id`,`menuContainer`);
  
  return menuGenel;

  function navForward(){
    activeSlide=(activeSlide+1)%5;
    menu.removeChild(menu.firstChild);
    menu.appendChild(allSlides[activeSlide]);
    blackDot();
    clearInterval(slideInterval);
    slideInterval=setInterval(navForward, 5000);
  }

  function navBackward(){
    activeSlide=(activeSlide-1);
    if (activeSlide===-1){activeSlide=4;}
    menu.removeChild(menu.firstChild);
    menu.appendChild(allSlides[activeSlide]);
    blackDot();
    clearInterval(slideInterval);
    slideInterval=setInterval(navForward, 5000);
  }

  function blackDot(){
    if (activeSlide===0){navCircle1.textContent=`●`;}else{navCircle1.textContent=`○`;}
    if (activeSlide===1){navCircle2.textContent=`●`;}else{navCircle2.textContent=`○`;}
    if (activeSlide===2){navCircle3.textContent=`●`;}else{navCircle3.textContent=`○`;}
    if (activeSlide===3){navCircle4.textContent=`●`;}else{navCircle4.textContent=`○`;}
    if (activeSlide===4){navCircle5.textContent=`●`;}else{navCircle5.textContent=`○`;}
  }

  function selectImage(e){
    activeSlide=e.target.cell;
    menu.removeChild(menu.firstChild);
    menu.appendChild(allSlides[activeSlide]);
    blackDot();
    clearInterval(slideInterval);
    slideInterval=setInterval(navForward, 5000);
  }

}



  export {  menuLoad };