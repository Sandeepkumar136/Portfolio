// toggle function
const openBUtton=document.getElementById('toggle_function');
const sidebar=document.querySelector('.sidebar');
const closeBUtton=document.getElementById('close-button');
const navbar=document.querySelector('.nav');


openBUtton.addEventListener('click', ()=>{
    sidebar.classList.add('show-sidebar');
    navbar.classList.add('hide-nav-bar');
});

window.addEventListener('DOMContentLoaded', ()=>{
    sidebar.classList.remove('show-sidebar');

    let wordIndex=0;
    let chartIndex=0;
    let isDeleting=false;
    const words=["Frontend Developer", "Backend Developer", "Fullstack Developer"];
    const texttyper=document.querySelector('.typewritter');
    function type(){
        const currentword=words[wordIndex];
        const currentText=isDeleting ? currentword.substring(0, chartIndex --):currentword.substring(0, chartIndex++);

        texttyper.textContent=currentText;

        if(!isDeleting && chartIndex===currentword.length){
            setTimeout(()=>(isDeleting=true), 1000);
        }else if(isDeleting && chartIndex===0){
            isDeleting=false;
            wordIndex=(wordIndex +1)%words.length;
        }
        const typingspeend=isDeleting ?50:100;
        setTimeout(type, typingspeend);
    }
    type();
});

closeBUtton.addEventListener('click', ()=>{
    sidebar.classList.remove('show-sidebar');
    navbar.classList.remove('hide-nav-bar');
})
// Dark Theme
function ThemeFun(){
    let body=document.body;
    body.classList.toggle('dark-mode');
    let togglebtn=document.querySelector('.ThemeContain');
    if(body.classList.contains('dark-mode')){
        togglebtn.classList.remove('bxs-moon');
        togglebtn.classList.add('bxs-sun');
    }else{
        togglebtn.classList.remove('bxs-sun');
        togglebtn.classList.add('bxs-moon');
    }
}

