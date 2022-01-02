import { tanitimLoad, resim1Load } from './pageLoad';
import { menuLoad } from './menuLoad';
import { contactLoad } from './contactLoad';
import './style.css';

const herSey = document.createElement('div');
herSey.classList.add(`hersey`);

function ustKisim() {
  const herTepe=document.createElement('div');
  herTepe.classList.add(`tepe`);
  const ustButonlar=document.createElement('ul');

  const menuButon=document.createElement('li');
  menuButon.textContent="Menü";
  menuButon.setAttribute(`id`,`Dugme2`);
  menuButon.addEventListener("click", menuYukleme);

  const hakkindaButon=document.createElement('li');
  hakkindaButon.textContent="Hakkında";
  hakkindaButon.setAttribute(`id`,`Dugme3`);
  hakkindaButon.addEventListener("click", bilgiYukleme);

  const anaButon=document.createElement(`li`);
  anaButon.textContent=`Anasayfa`;
  anaButon.setAttribute(`id`,`Dugme1`);
  anaButon.addEventListener("click", anaYukleme);

  ustButonlar.appendChild(anaButon);
  ustButonlar.appendChild(menuButon);
  ustButonlar.appendChild(hakkindaButon);

  herTepe.appendChild(ustButonlar);

  return herTepe;
}

function altKisim() {
  const altCubuk=document.createElement(`div`);
  altCubuk.classList.add(`footer`);
  const dipnot=document.createElement(`p`);
  dipnot.innerHTML=`<a href=https://github.com/emrergin> Emre Ergin</a> tarafından tasarlanmıştır.`;
  altCubuk.appendChild(dipnot);

  return altCubuk;
}
  
anaYukleme();

function menuYukleme(){
  herSey.innerHTML=``;
  herSey.appendChild(ustKisim());
  herSey.appendChild(menuLoad());
  herSey.appendChild(altKisim());
  document.body.appendChild(herSey);
}

function anaYukleme(){
  herSey.innerHTML=``;
  herSey.appendChild(ustKisim());
  herSey.appendChild(tanitimLoad());
  herSey.appendChild(resim1Load());
  herSey.appendChild(altKisim());
  document.body.appendChild(herSey);
}

function bilgiYukleme(){
  herSey.innerHTML=``;
  herSey.appendChild(ustKisim());
  herSey.appendChild(contactLoad());
  herSey.appendChild(altKisim());
  document.body.appendChild(herSey);
}

// function 

