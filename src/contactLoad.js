function contactLoad(){
  const bilgiBaslik=document.createElement(`h1`);
  bilgiBaslik.textContent=`Neredeyiz?`;
  const Harita=document.createElement(`div`);  
  Harita.innerHTML=`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.954648447218!2d33.39680595083063!3d39.94240409217298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf7387337fb908ab1!2zMznCsDU2JzMyLjYiTiAzM8KwMjMnNTYuNCJF!5e0!3m2!1str!2str!4v1641134803765!5m2!1str!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
  


  const bilgiGenel=document.createElement('div');
  bilgiGenel.appendChild(bilgiBaslik);
  bilgiGenel.appendChild(Harita);
  return bilgiGenel;
}

export {  contactLoad };