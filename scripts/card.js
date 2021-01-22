// import { openPopup, popupFoto, popupFotoImage, fotoCaption} from './index.js';

export class Card {
  constructor(cardAttributes, cardTemplate) {
    this._articleID = cardAttributes.articleID;
    this._lastRevisionN = cardAttributes.lastRevisionN;
    this._articleRevision = cardAttributes.articleRevisions[this._lastRevisionN];
    this._authors = this._articleRevision.authors;
    this._affiliations = this._articleRevision.affiliations
    this._type = this._articleRevision.type;
    this._publicationDateTime = this._articleRevision.publicationDateTime;
    this._preImageLink = this._articleRevision.preImageLink;
    this._fullArticleLink = this._articleRevision.fullLink;
    this._articleTitle = this._articleRevision.articleTitle;
    this._abstract = this._articleRevision.abstract;
    this._pdfID = this._articleRevision.pdfID;
    this._ratingByAuthor = this._articleRevision.ratingByAuthor;
    this._likeCount = this._articleRevision.likeCount;
    this._cardTemplate = cardTemplate;
  }

  _getTemplate() {
    this._element = document
      .querySelector(this._cardTemplate)
      .content
      .cloneNode(true);
  }

  // _setEventListeners() {
  //   this._elementImage = this._element.querySelector('.elements__image');
  //   this._element.querySelector('.elements__like').addEventListener('click', this._handleLikePlace);
  //   this._elementImage.addEventListener('click', () => { this._handleOpenFotoPopup() });

  // };

  // handle functions
  // _handleLikePlace(evt) {
  //   evt.target.classList.toggle('elements__like_active');
  // };

  // _handleDeletePlace(evt) {
  //   evt.target.closest('.elements__element').remove();
  // };

  // _handleOpenFotoPopup() {
  //   popupFotoImage.src = this._link;
  //   popupFotoImage.alt = this._name;
  //   fotoCaption.textContent = this._name;
  //   openPopup(popupFoto);
  // }

  generateCard() {
    this._getTemplate();
    // this._setEventListeners();
    this._element.querySelector('.card__article-type').textContent = this._type;
    this._element.querySelector('.card__article-date').textContent = this._publicationDateTime;
    this._element.querySelector('.card__link').href = this._fullArticleLink;
    // console.log(this._element);
    this._element.querySelector('.card__image').src = this._preImageLink;
    this._element.querySelector('.card__title').textContent = this._articleTitle;
    this._element.querySelector('.card__authors').textContent = this._authors;
    this._element.querySelector('.card__authors-aff').textContent = this._affiliations;
    this._element.querySelector('.card__text').textContent = this._abstract;
    return this._element;
  }
}
