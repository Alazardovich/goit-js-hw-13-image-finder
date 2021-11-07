import './sass/main.scss';
import * as basicLightbox from 'basiclightbox';
import '../node_modules/basiclightbox/dist/basiclightbox.min.css';
import { error, alert } from '@pnotify/core';
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css"
import itemTamplate from './tamplate/tamplate.hbs';
import BasicApi from './js/apiService';
import { refs } from './js/refs';

const debounce = require('lodash.debounce');
const basicApi = new BasicApi();

basicApi.resetPage();
forClearForm();

refs.onSearchForm.addEventListener ('submit', funcForSeach);
refs.onLoadButton.addEventListener ('click', () => {
    refs.onContainerTmamlate.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
basicApi.fetchImg().then(appenArticleMarkup);
});
refs.onContainerTmamlate.addEventListener('click', (e) => {
if (e.target.nodeName === 'IMG') {
    const instance = basicLightbox
    .create(`<img src="${e.target.dataset.source}">`);
    instance.show();
}
})


function funcForSeach(event) {
event.preventDefault();
forClearForm();

basicApi.searchQuery = event.currentTarget.elements.query.value;
basicApi.resetPage();


basicApi.fetchImg().then(appenArticleMarkup);
};

function appenArticleMarkup(articles) {
    if (basicApi.searchQuery == '' || basicApi.searchQuery == ' ') {
        alert({
            title: 'Incorrect request!',
            text: 'What do you find!',
            shadow: true,
            delay: 2000,
        });
        forClearForm();
        basicApi.fetchImg()
        return;
        };
        if (!basicApi.searchQuery) {
            error({
                title: 'Incorrect request!',
                text: 'Write to correct text!',
                shadow: true,
                delay: 3000,  
            })
            forClearForm();
        basicApi.fetchImg()
            return;
        }
    refs.onContainerTmamlate.insertAdjacentHTML('beforeend', itemTamplate(articles));
}; 

function forClearForm() {
    refs.onContainerTmamlate.innerHTML = '';   
};



