import _ from 'lodash';
import './style.css';
import homePage from './home';

function tabs(){
    const tabBar = document.createElement('div');
    tabBar.classList.add('bar');

    const tab1 = document.createElement('button');
    tab1.innerHTML = 'Home';
    tab1.classList.add('tabs');
    const tab2 = document.createElement('button');
    tab2.innerHTML = 'Menu';
    tab2.classList.add('tabs');
    const tab3 = document.createElement('button');
    tab3.innerHTML = 'Contact';
    tab3.classList.add('tabs');

    tabBar.appendChild(tab1);
    tabBar.appendChild(tab2);
    tabBar.appendChild(tab3);

    return tabBar;
}

document.body.appendChild(tabs());

document.body.appendChild(homePage());