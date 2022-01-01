
// import Utrektli from './Man_eating_noodels.JPG';
import Alman from './almanEristesi.jpg';
import Eniste from './Italyan.jpg'

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



//     <div class="hersey">
//         <div class="tepe">
//             <div class="tepe1"> 
//                 <div class="logo">Buraya Resim</div>
//                 <ul>
//                     <li><a href="https://korogluatolye.com/goster.php?s=icerikListele" class="headerlink">Dergilerde Köroğlu</a></li>
//                     <li><a href="https://www.instagram.com/korogluoykuatolyesi/" class="headerlink">Yarışmalarda Köroğlu</a></li>
//                     <li><a href="https://twitter.com/korogluyayinevi" class="headerlink">Kitabı Çıkanlar</a></li>
//                 </ul>
//             </div>

//             <div class="tepe2">
//                 <div class="sol">
//                     <h1> Köroğlu Öykü Atölyesi</h1>
//                     <p>Okumadan okur, yemeden obur olunmayacağı gibi, yazmadan da yazar olunmaz. Peki yazınca olunuyor mu yani? Fiilî duası yapılmadan ele geçen nimet, başkasının nasibidir.</p>
//                     <a href="https://twitter.com/Alistirma" class="button">Kaydol!</a>
//                 </div>
//                 <img src="images/book-g5c082a865_640.png">
//             </div>
//         </div>
//         <div class="orta">
//             <h2>Aramızdan Bazıları</h2>
//             <div class="album">
//                 <div class="card">
//                     <img src="images/edgar-allan-poe-g22951b53e_640.png" class="kucukresim">
//                     <span>Edgar Allan Poe - Mardin</span>
//                 </div>
//                 <div class="card">
//                     <img src="images/johann-wolfgang-von-goethe-gd5b085f51_640.png" class="kucukresim">
//                     <span>Johann Wolfgang von Goethe - Kudüs</span>
//                 </div>
//                 <div class="card">
//                     <img src="images/john-milton-ge5c266a25_640.png" class="kucukresim">
//                     <span>John Milton - Konya</span>
//                 </div>
//                 <div class="card">
//                     <img src="images/william-shakespeare-gf55fd0c3f_640.png" class="kucukresim">
//                     <span>William Shakespeare - Yozgat</span>
//                 </div>
//             </div>
//         </div>
//         <div class="alinti">
//             <div class="alcon">
//                 <div class="soz">Onu ben niye seveyim? Anası babası sevsin.</div>
//                 <div class="kaynak"> - Ahmet Abi</div>
//             </div>
//         </div>
//         <div class="buyukdugme">
//             <div class="sol2">
//                 <h3> Acele et! Düğmeye bas! </h3>
//                 <p>Geç kalma, atölye kapanabilir yahut kıyamet kopabilir.</p>
//             </div>
//             <a href="https://twitter.com/Alistirma" class="button">Kaydol!</a>
//         </div>
//         <div class="footer">
//             <p>Şair Olmayanlar Derneği © 2021</p>
//         </div>
//     </div>
// </body>
// </html>