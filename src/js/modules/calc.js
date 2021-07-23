import { getResource } from "../services/request";
import { postData } from "../services/request";

const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result),
          divRes = document.querySelector('.calc-price'),
          checkboxes = document.querySelectorAll('select'),
          upload = document.querySelectorAll('[name="upload"]'); 
          
    let sum = 0,
        sizeValue = '',
        materialValue = '',
        optionsValue = '',
        state = [sizeBlock, materialBlock, optionsBlock, promocode, result];

    function choiseParam(event, elem) {
        elem.addEventListener(event, (e) => {
            const target = e.target,
                  select = target.id;

            function calcFunc(state) {
                console.log(state[select]);
                for (let key in state[select]) {
                    if (elem.value === key) {
                        switch(select) {
                            case "size":
                                sizeValue = state[select][key];
                                break;
                            case "material":
                                materialValue = state[select][key];
                                break;
                            case "options":
                                optionsValue = state[select][key];
                                break;
                        }
                    }
                    
                }
                sum = Math.round((+sizeValue) * (+materialValue) + (+optionsValue));

                    if (sizeBlock.value == '' || materialBlock.value == '') {
                        resultBlock.textContent = 'Пожалуйста, выберите размер и материал картины';
                    } else if (promocodeBlock.value === 'IWANTPOPART') {
                        resultBlock.textContent = Math.round(sum * 0.7);
                    } else {
                        resultBlock.textContent = sum;
                    }
            }

            const clearInputs = () => {
                checkboxes.forEach(item => {
                    //очистка инпутов куда вводятся данные
                    item.value = '';
                     // очистка чекбоксов
                     if (item.getAttribute('type') == 'checkbox') {
                        item.checked = false;
                    }
                    upload.forEach(item => {
                        item.previousElementSibling.textContent = 'Файл не выбран';
                    });
                });
                divRes.value = '';
            };
            
            

            getResource('http://localhost:3000/calcdata')
                .then(res => {
                    calcFunc(res);
                })
                .catch(e => console.error(e));

           

            /* postData('http://localhost:3000/requests',
            state)
                .then(data => {
                    console.log(data);
                })
                .catch(e => console.error(e))
                .finally(() => {
                    clearInputs();
                    
                }); */
    
        });
    }
    choiseParam('change', sizeBlock);
    choiseParam('change', materialBlock);
    choiseParam('change', optionsBlock);
    choiseParam('input', promocodeBlock);
};

export default calc;