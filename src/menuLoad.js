function menuLoad(){
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
  resim1.src=`https://via.placeholder.com/150`;
  resim2.src=`https://via.placeholder.com/150`;
  resim3.src=`https://via.placeholder.com/150`;
  resim4.src=`https://via.placeholder.com/150`;

  const yazi1=document.createElement(`span`);
  const yazi2=document.createElement(`span`);
  const yazi3=document.createElement(`span`);
  const yazi4=document.createElement(`span`);
  yazi1.textContent="Eh İşte";
  yazi2.textContent="Eh İşte";
  yazi3.textContent="Eh İşte";
  yazi4.textContent="Eh İşte";


  card1.appendChild(resim1);
  card2.appendChild(resim2);
  card3.appendChild(resim3);
  card4.appendChild(resim4);
  card1.appendChild(yazi1);
  card2.appendChild(yazi2);
  card3.appendChild(yazi3);
  card4.appendChild(yazi4);


  const menuGenel=document.createElement('div');
  menu.appendChild(card1);
  menu.appendChild(card2);
  menu.appendChild(card3);
  menu.appendChild(card4);
  menuGenel.appendChild(menu);
  menuGenel.setAttribute(`id`,`menuContainer`);
  
  return menuGenel;

}

  export {  menuLoad };