(function (){
    const titleInfo = [...document.querySelectorAll('.title_info')];
    console.log(titleInfo)

    titleInfo.forEach(title =>{
        title.addEventListener('click', ()=>{
            let height = 0;
            let lista = title.nextElementSibling;
            let addinfo = title.parentElement.parentElement;

            addinfo.classList.toggle('container-info--add');
            title.children[0].classList.toggle('in-icon--rotate');
            

            if(lista.clientHeight === 0){
                height = lista.scrollHeight;
            }
            
            lista.style.height = `${height}px`;
        });
    });
})();