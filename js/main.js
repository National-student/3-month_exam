  var elSectionList = document.querySelector('.section__list');
  var elSectionItem = document.querySelector('.section__item');
  var elPakemon = document.querySelector('.pakemon');
  var elPakemonImg = document.querySelector('.pakemon__img');
  var elPakemonText = document.querySelector('.pakemon-text');
  var elPakemonName = document.querySelector('.pakemon-name');
  var elPakemonType = document.querySelector('.pakemon-type');
  var elPakemonWeight = document.querySelector('.pakemon-weight');
  var elPakemonAge = document.querySelector('.pakemon-age');

  for (const item of pokemons) {
    
    // CREATE ELEMENT

    var elItem = document.createElement('li');
    var elDiv = document.createElement('div');
    var elImg = document.createElement('img');
    var elDiv2 = document.createElement('div');
    var elH4 = document.createElement('h4');
    var elType = document.createElement('p');
    var elWeight = document.createElement('p');
    var elAge = document.createElement('p');
  
    // CLASSLIST ADD
  
    elItem.classList.add('section__item');
    elDiv.classList.add('pakemon');
    elImg.src = item.img
    elDiv2.classList.add('pakemon-text');
    elH4.classList.add('pakemon-name');
    elType.classList.add('pakemon-type');
    elWeight.classList.add('pakemon-weight');
    elAge.classList.add('pakemon-age');

    //TEXTCONTENT
    elH4.textContent = item.name;
    elType.textContent = item.type;
    elWeight.textContent = item.weight;
    elAge.textContent = item.height;
  
    // APPENDCHILD
  
    elSectionList.appendChild(elItem);
    elItem.appendChild(elDiv)
    elDiv.appendChild(elImg)
    elItem.appendChild(elDiv2);
    elDiv2.appendChild(elH4);
    elDiv2.appendChild(elType);
    elDiv2.appendChild(elWeight);
    elDiv2.appendChild(elAge)
  }