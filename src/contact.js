import Icon from './fork-and-knife.svg';

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
    header.innerHTML = 'CONTACT';
    titleDiv.appendChild(header);
    contentDiv.appendChild(titleDiv);

    const phoneDiv = document.createElement('div');
    phoneDiv.classList.add('headlineDiv');

    const phoneInfo = document.createElement('ul');
    phoneInfo.classList.add('information');
    const phone = document.createElement('li');
    phone.textContent = 'Phone:';
    phoneInfo.appendChild(phone);
    const number = document.createElement('li');
    number.innerHTML = '555-555-5554';
    phoneInfo.appendChild(number);
    phoneDiv.appendChild(phoneInfo);
    contentDiv.appendChild(phoneDiv);

    const emailDiv = document.createElement('div');
    emailDiv.classList.add('headlineDiv');
    const emailInfo = document.createElement('ul');
    emailInfo.classList.add('information');
    const email = document.createElement('li');
    email.textContent = 'Email:';
    emailInfo.appendChild(email);
    const emailAddress = document.createElement('li');
    emailAddress.innerHTML = 'info@forknife.com';
    emailInfo.appendChild(emailAddress);
    emailDiv.appendChild(emailInfo);
    contentDiv.appendChild(emailDiv);

    return contentDiv;
}