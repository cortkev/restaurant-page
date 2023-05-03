import Icon from './fork-and-knife.svg';

export default function homePage(){
    const contentDiv = document.getElementById('content');
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('titleDiv')
    
    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.classList.add("logo");
    titleDiv.appendChild(myIcon);

    const header = document.createElement('h1');
    header.classList.add('logo');
    header.innerHTML = 'FORKNIFE';
    titleDiv.appendChild(header);
    contentDiv.appendChild(titleDiv);

    const headlineDiv = document.createElement('div');
    headlineDiv.classList.add('headlineDiv');
    const headline = document.createElement('p');
    headline.innerHTML = "Experience the best dining in town at our restaurant. We offer a unique blend of flavors and ingredients that will tantalize your taste buds. Our expert chefs prepare each dish with care and attention to detail, ensuring that every meal is a work of art.";
    headlineDiv.appendChild(headline);
    contentDiv.appendChild(headlineDiv);

    //hoursDiv
    const hoursDiv = document.createElement('div');
    hoursDiv.classList.add('headlineDiv');
    const hoursList = document.createElement('ul');
    hoursList.classList.add('hours-list');
    const monday = document.createElement('li');
    monday.textContent = 'Monday: 9am - 10pm';
    hoursList.appendChild(monday);
    const tuesday = document.createElement('li');
    tuesday.textContent = 'Tuesday: 9am - 10pm';
    hoursList.appendChild(tuesday);
    const wednesday = document.createElement('li');
    wednesday.textContent = 'Wednesday: 9am - 10pm';
    hoursList.appendChild(wednesday);
    const thursday = document.createElement('li');
    thursday.textContent = 'Thursday: 9am - 10pm';
    hoursList.appendChild(thursday);
    const friday = document.createElement('li');
    friday.textContent = 'Friday: 9am - 10pm';
    hoursList.appendChild(friday);
    // add the list to the hoursDiv
    hoursDiv.appendChild(hoursList);
    contentDiv.appendChild(hoursDiv);

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('headlineDiv');

    const restaurantInfo = document.createElement('ul');
    restaurantInfo.classList.add('information');
    const location = document.createElement('li');
    location.textContent = 'Location:';
    restaurantInfo.appendChild(location);
    const address = document.createElement('li');
    address.textContent = '123 Main St, Anytown USA';
    restaurantInfo.appendChild(address);
    
    infoDiv.appendChild(restaurantInfo);
    contentDiv.appendChild(infoDiv);
    

    return contentDiv;
    
}