import Icon from './fork-and-knife.png';

export default function homePage(){
    const contentDiv = document.getElementById('content');
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('titleDiv')
    
    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.classList.add("logo");
    titleDiv.appendChild(myIcon);

    const header = document.createElement('h1');
    header.innerHTML = 'FORKNIFE';
    titleDiv.appendChild(header);

    contentDiv.appendChild(titleDiv);

    const headline = document.createElement('p');
    headline.innerHTML = "Experience the best dining in town at our restaurant. We offer a unique blend of flavors and ingredients that will tantalize your taste buds. Our expert chefs prepare each dish with care and attention to detail, ensuring that every meal is a work of art.";
    contentDiv.appendChild(headline);

    

    return contentDiv;
    
}