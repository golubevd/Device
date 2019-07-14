'use strict';

let writeLink = document.querySelector('.write-btn');
let mapLink = document.querySelector('.main-contacts_map');

let writeModal = document.querySelector('.write-us_modal');
let mapModal = document.querySelector('.map-modal');

let userName = writeModal.querySelector("[name=user-name]");
let userEmail = writeModal.querySelector("[name=user-email]");

let closeModal = writeModal.querySelector('.close-modal');
let closeModalMap = mapModal.querySelector('.close-map');



const openPopup= function(element,modal, addClass){
   element.addEventListener('click', function (e) {
    e.preventDefault();
    modal.classList.add(addClass);
    if(userName) return userName.focus();
});
}

const closePopup= function(element,modal, removeClass){
element.addEventListener('click', function (e) {
    e.preventDefault();
    modal.classList.remove(removeClass);
});
}

const escKeyPress= function(element,modal, removeClass){
  element.addEventListener('keydown', function (e) {
    e.keyCode === 27 && modal.classList.contains(removeClass) && modal.classList.remove(removeClass);
});  
}


openPopup(writeLink,writeModal,'modal-show');
closePopup(closeModal,writeModal,'modal-show');
escKeyPress(window,writeModal,'modal-show');


openPopup(mapLink,mapModal,'show-map');
closePopup(closeModalMap,mapModal,'show-map');
escKeyPress(window,mapModal,'show-map');