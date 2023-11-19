const verbetes = document.querySelectorAll('.settings');

verbetes.forEach((verbete) => {
    verbete.addEventListener('click', () => {
        const card = verbete.closest('.card');
        const info = card.querySelector('.info');
        const tab = card.querySelector('.card-content');
        const titulo = card.querySelector('.nome-jornada');

        tab.classList.toggle('current-card');

        if (tab.classList.contains('current-card')) {
            info.style.display = "block";
            tab.style.cssText = "pointer-events: none; height:37vh; border-radius: 5px 5px 20px 20px; background:rgba(22, 22, 22, 0.575); color:white; padding-top:3vh; padding-left:0.5vw; font-family:'Pixelify Sans';"

        } else {
            info.style.display = "none";
            tab.style.cssText = "background-color: rgba(0, 0, 0, 0.432);";
            titulo.style.fontFamily = "'Pixelify Sans', sans-serif";
        }
    });
});

document.addEventListener('DOMContentLoaded', ()=>{
    const card = document.querySelectorAll('.card-content')
    card.forEach((card) => {
    card.addEventListener('click', ()=>{
        let titulo = card.querySelector('.nome-jornada');
        console.log(titulo)
        titulo = titulo.textContent

        var urlDestino = titulo +'.html'
        window.location.href = urlDestino
    })
})
})