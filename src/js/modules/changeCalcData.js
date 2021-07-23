/* const calcData = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result); 
          
    let sum = 0;

    const calcFunc = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = 'Пожалуйста, выберите размер и материал картины';
        } else if (promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        }
    };

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input', calcFunc);
};

export default calcData; */


import { getResource } from "../services/request";

const changeCalcData = (state) => {
    const size = document.querySelectorAll('#size'),
          material = document.querySelectorAll('#material'),
          options = document.querySelectorAll('#options'),
          promocode = document.querySelectorAll('.promocode'),
          result = document.querySelectorAll('calc-price');
          

         
    function bindActionToElems(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                if (elem.length > 1) {
                    state[prop] = i;
                } else {
                    state[prop] = item.value;
                }
                
                console.log(state);
            });
        });
    }

    bindActionToElems('change', size, 'size');
    bindActionToElems('change', material, 'material');
    bindActionToElems('change', options, 'options');
    bindActionToElems('input', promocode, 'promocode');
    bindActionToElems('input', result, 'result');
};

export default changeCalcData;