import { pageLoad } from './pageLoad';
import './style.css';


function component() {
  return pageLoad();
}
  
document.body.appendChild(component());