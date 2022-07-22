const $btnCus=document.querySelector('.cusBtn');
const $btnOwn=document.querySelector('.ownBtn');

$btnCus.addEventListener('click', handlerCus);
$btnOwn.addEventListener('click', handlerOwn);

function handlerCus(e){
    console.log(e+e.target.textContent);
}

function handlerOwn(e){
    console.log(e+e.target.textContent);
    e.target.classList.toggle('active');

}   