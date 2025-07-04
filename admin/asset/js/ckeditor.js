// Load thư viện CKEditor từ CDN
const script = document.createElement('script');
script.src = 'https://cdn.ckeditor.com/ckeditor5/39.0.1/classic/ckeditor.js';
script.onload = function () {
    ClassicEditor
        .create(document.querySelector('.editor_content'))
        .catch(error => {
            console.error(error);
        });

    ClassicEditor
        .create(document.querySelector('.editor_des'))
        .catch(error => {
            console.error(error);
        });
};
document.head.appendChild(script);
