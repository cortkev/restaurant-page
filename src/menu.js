import Icon from './fork-and-knife.svg';
import Img from './durr-burger.jpg';

export default function menu(){
    const contentDiv = document.getElementById('content');
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('titleDiv')
    
    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.classList.add("logo");
    titleDiv.appendChild(myIcon);

    const header = document.createElement('h1');
    header.classList.add('logo');
    header.innerHTML = 'MENU';
    titleDiv.appendChild(header);
    contentDiv.appendChild(titleDiv);

    const headlineDiv = document.createElement('div');
    headlineDiv.classList.add('headlineDiv');
    const myImg = new Image();
    myImg.src = Img;
    myImg.classList.add("image");
    headlineDiv.appendChild(myImg);
    contentDiv.appendChild(headlineDiv);

    return contentDiv;
}