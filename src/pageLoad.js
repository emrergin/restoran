
// import Utrektli from './Man_eating_noodels.JPG';
import Alman from './almanEristesi.jpg';
import Eniste from './Italyan.jpg'
import { menuLoad } from './menuLoad';

function pageLoad(){
    const herSey = document.createElement('div');
    herSey.classList.add(`hersey`);
    const herTepe=document.createElement('div');
    herTepe.classList.add(`tepe`);
    const Tepe1=document.createElement('div');
    Tepe1.classList.add(`tepe1`);
    const solKoseResmi=document.createElement('div');
    const sagUstButonlar=document.createElement('ul');
    const menuButon=document.createElement('li');
    menuButon.textContent="Menü";
    menuButon.addEventListener("onclick", menuLoad());
    const hakkindaButon=document.createElement('li');
    hakkindaButon.textContent="Hakkında";
    
    sagUstButonlar.appendChild(menuButon);
    sagUstButonlar.appendChild(hakkindaButon);

    Tepe1.appendChild(solKoseResmi);
    Tepe1.appendChild(sagUstButonlar);

    herTepe.appendChild(Tepe1);
    herSey.appendChild(herTepe);

    const baslik=document.createElement('h1');
    baslik.innerHTML=`Eniştenin <span class="mor">Erişteleri</span>`;
    const aciklama=document.createElement('p');
    aciklama.textContent=`Makarnalar, lazanyalar, nudıllar ve diğer uyduruk işlerden sıkılmadınız mı? Batılı yahut Doğulu olmaktan sıkılmadınız mı? Buralı olmaya ne dersiniz? 
    Bir eniştenin elinden, nefis erişteler. Rezervasyon gereklidir.`;

    // const tepe2icerik=document.cre

    const Tepe2ic=document.createElement('div');
    Tepe2ic.classList.add(`yaziyeri`);
    const Tepe2=document.createElement('div');
    Tepe2.classList.add(`tepe2`);
    
    Tepe2ic.appendChild(baslik);
    Tepe2ic.appendChild(aciklama);
    Tepe2.appendChild(Tepe2ic);
    herSey.appendChild(Tepe2);
    //EN TEPENIN BITISI================================

    const Orta=document.createElement(`div`);
    Orta.classList.add(`orta`);

    const resAlbum=document.createElement(`div`);
    resAlbum.classList.add(`album`);

    const card1= document.createElement(`div`);
    card1.classList.add(`card`);
    const card2= document.createElement(`div`);
    card2.classList.add(`card`);

    const nudil1= new Image();
    nudil1.src=Alman;
    const eniste=new Image();
    eniste.src=Eniste;

    card1.appendChild(eniste);
    card2.appendChild(nudil1);
    resAlbum.appendChild(card1);
    resAlbum.appendChild(card2);
    Orta.appendChild(resAlbum);
    herSey.appendChild(Orta);

    // ORTANIN BITISI================================
    const altCubuk=document.createElement(`div`);
    altCubuk.classList.add(`footer`);
    const dipnot=document.createElement(`p`);
    dipnot.innerHTML=`<a href=https://github.com/emrergin> Emre Ergin </a> tarafından itina ile üretilmiştir.`;
    altCubuk.appendChild(dipnot);
    herSey.appendChild(altCubuk);
  
    return herSey;
}


export {  pageLoad };