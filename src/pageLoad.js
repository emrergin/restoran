// import Utrektli from './Man_eating_noodels.JPG';
import Alman from './almanEristesi.jpg';
import Eniste from './Italyan.jpg'

function tanitimLoad(){
    const baslik=document.createElement('h1');
    baslik.innerHTML=`Eniştenin <span class="mor">Erişteleri</span>`;
    const aciklama=document.createElement('p');
    aciklama.textContent=`Makarnalar, lazanyalar, nudıllar ve diğer uyduruk işlerden sıkılmadınız mı? Batılı yahut Doğulu olmaktan sıkılmadınız mı? Buralı olmaya ne dersiniz? 
    Bir eniştenin elinden, nefis erişteler. Rezervasyon gereklidir.`;
    const Tepe2ic=document.createElement('div');
    Tepe2ic.classList.add(`yaziyeri`);
    const Tepe2=document.createElement('div');
    Tepe2.classList.add(`tepe2`);
    
    Tepe2ic.appendChild(baslik);
    Tepe2ic.appendChild(aciklama);
    Tepe2.appendChild(Tepe2ic);
    return Tepe2;
}

function resim1Load(){
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
    return Orta;
}


export {  tanitimLoad,resim1Load };