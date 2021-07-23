import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import changeCalcData from './modules/changeCalcData';
import filter from './modules/filter';
import filtr from './modules/filtr';
import pictureSize from './modules/pictureSize';
import accordion from './modules/acordion';
import jsAccordion from './modules/jsAccordion';
import burger from './modules/burger';
import scrolling from './modules/scrolling';
import requestAnimationScrolling from './modules/requestAnimScrolling';
import drop from './modules/drop';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let calcData = {};
    console.log(calcData);

    changeCalcData(calcData);
    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    //forms();
    forms(calcData);
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    //showMoreStyles('.button-styles', '.styles-2');
    showMoreStyles('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    //filter();
    filtr();
    pictureSize('.sizes-block');
    //accordion('.accordion-heading', '.accordion-block');
    jsAccordion('.accordion-heading');
    burger('.burger-menu', '.burger');
    //scrolling('.pageup');
    requestAnimationScrolling('.pageup');
    drop();
});