import _ from 'lodash';

// console.log('hello');

//  function component() {
//    const element = document.createElement('div');

//   // Lodash, now imported by this script
//    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//    return element;
//  }

//  document.body.appendChild(component());


 const contentDiv = document.getElementById('content');
 const header = document.createElement('h1');

 header.innerHTML = _.join(['Hello', 'header'], ' ');

 contentDiv.appendChild(header);