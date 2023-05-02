import _ from 'lodash';
import './style.css';
import homePage from './home';
import menu from './menu';

function tabs(){
    const tabBar = document.createElement('div');
    tabBar.classList.add('bar');

    const tab1 = document.createElement('button');
    tab1.innerHTML = 'Home';
    tab1.classList.add('tabs');
    tab1.setAttribute('id', 'button1');
    const tab2 = document.createElement('button');
    tab2.innerHTML = 'Menu';
    tab2.classList.add('tabs');
    tab2.setAttribute('id', 'button2');
    const tab3 = document.createElement('button');
    tab3.innerHTML = 'Contact';
    tab3.classList.add('tabs');
    tab3.setAttribute('id', 'button3');

    tabBar.appendChild(tab1);
    tabBar.appendChild(tab2);
    tabBar.appendChild(tab3);

    return tabBar;
}

document.body.appendChild(tabs());
document.body.appendChild(homePage());


// empty div before applying content
function emptyDiv() {
    document.getElementById('content').innerHTML = '';
  }

  button1.addEventListener('click', function() {
    // Code to execute when button1 is clicked
    emptyDiv()
    document.body.appendChild(homePage());
  });
  
  button2.addEventListener('click', function() {
    // Code to execute when button2 is clicked
    emptyDiv()
    document.body.appendChild(menu());
  });
  
  button3.addEventListener('click', function() {
    // Code to execute when button3 is clicked
    emptyDiv()
  });