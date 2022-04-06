function verificaSenha(){
    var forca = document.getElementById('forca');
    var senha = document.getElementById('senha').value;
    var forcaColorida = document.getElementById('forcaColorida')
    var barraDeProgresso = document.getElementById('barraDeProgresso')
    var forcaSenha = 0;
    
    senha.length >= 4 && senha.length <= 6 ? forcaSenha += 10 : forcaSenha
    senha.match(/[a-z]+/) && senha.length >= 8 ? forcaSenha += 20 : forcaSenha
    senha.match(/[A-Z]+/) && senha.length >= 8 ? forcaSenha += 20 : forcaSenha
    senha.match(/[0-9]+/) && senha.length >= 8 ? forcaSenha += 30 : forcaSenha
    senha.match(/[!@#$%{}*()~?,\.]+/) && senha.length >= 12 ? forcaSenha += 40 : forcaSenha

    
    //forca.innerHTML = "Força da senha: " + forcaSenha + " pontos";
    
    if (forcaSenha <= 10 && forcaSenha >= 0 && forcaSenha != 0) {
        forcaColorida.innerHTML = "<span style='color: #a30016' class='alerta-senha'>Extremamente fraca</span>"
        barraDeProgresso.style.width = "0%"
    }
    
    if (forcaSenha >= 20) {
        forcaColorida.innerHTML = "<span style='color: #FFD700' class='alerta-senha'>Fraca</span>"
        barraDeProgresso.style.width = "25%"
    }

    if (forcaSenha >= 50) {
        forcaColorida.innerHTML = "<span style='color: #f00' class='alerta-senha'>Média</span>"
        barraDeProgresso.style.width = "50%"
    }

    if (forcaSenha >= 70) {
        forcaColorida.innerHTML = "<span style='color: #9d41e8' class='alerta-senha'>Forte</span>"
        barraDeProgresso.style.width = "75%"
    }
    
    if (forcaSenha >= 100) {
        forcaColorida.innerHTML = "<span style='color: #9d41e8' class='alerta-senha'>Senha muito forte</span>"
        barraDeProgresso.style.width = "100%"
    }

    senha.length < 1 ? forcaSenha = 0 : forcaSenha
     
}


