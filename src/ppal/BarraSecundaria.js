import './css/BarraSecundaria.css';
import UserImg from '../icons/LOGO JReyes.jpg';
/*import menuIcon from 'https://cdn-icons-gif.flaticon.com/8121/8121316.gif';
import notifIcon from 'https://cdn-icons-gif.flaticon.com/6454/6454198.gif';
import lupaIcon from './icons/lupa.png';*/

function BarraSecundaria() {
  return(
   <nav className="BarraSecundaria">
    <img src={'https://cdn-icons-gif.flaticon.com/8121/8121316.gif'} className="menuIcon" alt="menuIcon" />
    <div className="Search">
      <img src={'https://cdn-icons-gif.flaticon.com/8718/8718007.gif'} className="lupaIcon" alt="lupaIcon" />
      <input className="inputSearch" placeholder="Buscar"></input>
    </div>
    <div className="accessUser">
      <img src={'https://cdn-icons-gif.flaticon.com/6454/6454198.gif'} className="notifIcon" alt="notifIcon" />
      <img src={UserImg} className="userImg" alt="UserImg" />
    </div>
   </nav>
  )
}

  export { BarraSecundaria };