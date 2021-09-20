import { FormValidator } from './formValidator.js';
import { registrationConfig } from './configs.js';

const formRegistration = document.querySelector('.registration__form');
// buttons
const loginButton = document.querySelector('.header__login-button');
const linkRegisterOpen = document.querySelector('.popup__register-link');
const allButtonsClose = Array.from(document.querySelectorAll('.popup-close'));
const buttonUserLogin = document.querySelector('.popup__button_user-login');
// service functions
function closePopupByEsc(evt) {
  if (evt.key === 'Escape') {
    const popupElement = document.querySelector('.popup_opened');
    closePopup(popupElement);
  }
}

function openPopup(type) {
  type.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
};
// handle functions
// function handleLikePlace(evt) {
//   evt.target.classList.toggle('elements__like_active');
// };

// function handleDeletePlace(evt) {
//   evt.target.closest('.elements__element').remove();
// };

// function handleOpenFotoPopup(item) {
//   popupFotoImage.src = item.link;
//   popupFotoImage.alt = item.name;
//   fotoCaption.textContent = item.name;
//   openPopup(popupFoto);
// }

function handleOpenUserLoginPopup(evt) {
  evt.preventDefault();
  const inputList = Array.from(formRegistration.querySelectorAll('.popup__input'));
  // newProfileName.value = profileName.textContent;
  // newProfileJob.value = profileJob.textContent;
  buttonUserLogin.classList.add('popup__button_disabled');
  // inputList.forEach((inputElement) => {
  //   hideInputError(formElement, inputElement)
  // });
  openPopup(popupUserLogin);
}

function handleOpenRegisterPopup(evt) {
  evt.preventDefault();
  const formElement = popupRegister.querySelector('.popup__form');
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  // newProfileName.value = profileName.textContent;
  // newProfileJob.value = profileJob.textContent;
  buttonUserLogin.classList.add('popup__button_disabled');
  // inputList.forEach((inputElement) => {
  //   hideInputError(formElement, inputElement)
  // });
  openPopup(popupRegister);
}

// function handleOpenPlacePopup() {
//   const formElement = popupPlace.querySelector('.popup__form');
//   const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
//   formElement.reset();
//   buttonSavePlace.classList.add('popup__button_disabled');
//   inputList.forEach((inputElement) => {
//     hideInputError(formElement, inputElement)
//   });
//   openPopup(popupPlace);
// }

function closePopup(popupElement) {
  popupElement.closest('.popup').classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
}

function handleUserLogin(evt) {
  evt.preventDefault();
  formRegistration.reset();
  closePopup(formRegistration);
  // profileName.textContent = newProfileName.value;
  // profileJob.textContent = newProfileJob.value;
}

// function handleAddNewPlace(evt) {
//   evt.preventDefault();
//   addPlace({ name: newPlaceName.value, link: newPlaceLink.value });
//   closePopup(closePopupButtonPlace);
// }

function closePopupOverlay(evt, popupElement) {
  if (evt.target === popupElement) {
    closePopup(popupElement);
  }
}
// main functions

function setCloseBottunListeners() {
  allButtonsClose.forEach((buttonClose) => {
    buttonClose.addEventListener('click', (evt) => { closePopup(buttonClose) });
  });
};

// main page code
// linkRegisterOpen.addEventListener('click', handleOpenRegisterPopup);
// buttonNewPlace.addEventListener('click', handleOpenPlacePopup);
formRegistration.addEventListener('submit', handleUserLogin);
// formPlace.addEventListener('submit', handleAddNewPlace);
setCloseBottunListeners();
