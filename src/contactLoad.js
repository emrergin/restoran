function contactLoad(){
  const bilgiBaslik=document.createElement(`h1`);
  bilgiBaslik.textContent=`Neredeyiz?`;
  // bilgiBaslik
  const Harita=document.createElement(`iframe`);
  Harita.setAttribute(`src`,"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.954648447218!2d33.39680595083063!3d39.94240409217298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf7387337fb908ab1!2zMznCsDU2JzMyLjYiTiAzM8KwMjMnNTYuNCJF!5e0!3m2!1str!2str!4v1641134803765!5m2!1str!2str");
  Harita.setAttribute(`allowfullscreen`,"");
  Harita.setAttribute(`loading`,"lazy");
  Harita.classList.add(`harita`);


  const bilgiGenel=document.createElement('div');
  bilgiGenel.classList.add(`orta3`);
  bilgiGenel.appendChild(bilgiBaslik);
  bilgiGenel.appendChild(Harita);
  return bilgiGenel;
}

export {  contactLoad };