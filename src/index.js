import { pageLoad } from './pageLoad';
import { menuLoad } from './menuLoad';
import { contactLoad } from './contactLoad';
import './style.css';


function component() {
  return pageLoad();
}
  
document.body.appendChild(component());

