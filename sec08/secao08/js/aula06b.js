let btns = document.querySelectorAll('button');

for(let i = 0; i < btns.length; i++){
    console.log(btns[i].getAttribute('class').split('-')[1]); // green/yellow/blue/black/red
    btns[i].onclick = function(){        
        document.querySelector('body').style.backgroundColor = 
            this.getAttribute('class').split('-')[1];

        // São a mesmo coisa, substitui o acima
        //let cor = this.style.backgroundColor;
        //let cor = btn[i].style.backgroundColor;
    };
}
