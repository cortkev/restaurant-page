import Icon from './fork-and-knife.svg';
import Img from './durr-burger.jpg';
import Juice from './slurp-juice.png';

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

    const burgerDiv = document.createElement('div');
    burgerDiv.classList.add('headlineDiv');

    const burgerDescription = document.createElement('p');
    burgerDescription.classList.add('descriptions');
    burgerDescription.innerHTML = 'Juicy beef patty with melted cheese, crispy lettuce, and tangy pickles, all served on a fresh sesame seed bun. A classic burger that never disappoints!';
    burgerDiv.appendChild(burgerDescription);

    const myImg = new Image();
    myImg.src = Img;
    myImg.classList.add("image");
    burgerDiv.appendChild(myImg);
    contentDiv.appendChild(burgerDiv);

    const drinkDiv = document.createElement('div');
    drinkDiv.classList.add('headlineDiv');

    const slurpDescription = document.createElement('p');
    slurpDescription.classList.add('descriptions');
    slurpDescription.innerHTML = 'Replenish your health and shield with our legendary Slurp Juice. The perfect refreshment for any battle!';
    drinkDiv.appendChild(slurpDescription);

    const juiceImg = new Image();
    juiceImg.src = Juice;
    juiceImg.classList.add("image");
    drinkDiv.appendChild(juiceImg);
    contentDiv.appendChild(drinkDiv);

    return contentDiv;
}