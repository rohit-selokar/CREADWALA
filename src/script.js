const btn = document.querySelectorAll('button');
btn.forEach(b1=>{
    b1.addEventListener('click',function(e){
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('div');
        ripples.classList.add('btn-animation');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove()
        },1000);
    })
})