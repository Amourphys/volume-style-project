import { postData } from "../services/request";

const drop = () => {
    // drag *
    // dragend *
    // dragenter - объект над dropArea
    // dragexit *
    // dragleave - объект за пределами dropArea
    // dragover - объект зависает над dropArea
    // dragstart *
    // drop - объект отправлен в dropArea

    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highLight(item) {
        item.closest('.file_upload').style.border = '5px solid ellow';
        item.closest('.file_upload').style.background = 'rgba(0,0,0, .7)';
    }

    function unhighLight(item) {
        item.closest('.file_upload').style.border = 'none';
        if (item.closest('.calc_form')) {
            item.closest('.file_upload').style.background = 'initial';
        } else {
            item.closest('.file_upload').style.background = '#ededed';
        }
        
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highLight(input), false);
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unhighLight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            if (input.closest('main')) {
 
                const formData = new FormData();
                formData.append('file', input.files[0]);
                
                const postData = async (url, data) => {
                    let res = await fetch(url, {
                        method: "POST",
                        body: data
                    });
                    return await res.text();
                };
 
                postData('assets/server.php', formData)
                    .then(res => console.log(res))
                    .catch(() => console.log('Ошибка'));
            }
            /* if (input.getAttribute('data-upload')) {
                preventDefaults();
                let formData = new FormData();
                [...input.files].forEach(file => {
                    formData.append('image', file);
                    postData('assets/server.php', formData)
                        .then(res => {
                            console.log(res);
                        });
                });
            } */
            let dots;
            const arr = input.files[0].name.split('.');
            arr[0].length > 6 ? dots = '...' : dots = '.';
            const name =  arr[0].substring(0, 6) + dots +  arr[1];
            input.previousElementSibling.textContent = name;
        });
    });
};

export default drop;