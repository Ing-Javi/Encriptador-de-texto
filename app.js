const casilla = document.querySelector('.casilla');
const mensaje = document.querySelector('.mensaje');


function botonEncriptar(){
    const textoEncriptado = encrip(casilla.value)
    mensaje.value = textoEncriptado
    document.getElementById('img').style.display='none';
    document.getElementById('copi').style.display='block';
    document.getElementById('parra1').style.display='none';
    document.getElementById('parra2').style.display='none';
    casilla.value = "";
}

function encrip(textoIntroducido) {
    let matriz = [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']];
    
    textoIntroducido = textoIntroducido.toLowerCase()
    
    for (let i = 0; i < matriz.length; i++) {
        
        if (textoIntroducido.includes(matriz[i][0])) {
            textoIntroducido = textoIntroducido.replaceAll(matriz[i][0], matriz[i][1])
        }
    }
    
    return textoIntroducido

}

function botonDesncriptar(){
    const textoEncriptado = desencrip(casilla.value)
    mensaje.value = textoEncriptado
}

function desencrip(textoDesencriptado) {
    let matriz = [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']];
    
    textoDesencriptado = textoDesencriptado.toLowerCase()
    
    for (let i = 0; i < matriz.length; i++) {
        
        if (textoDesencriptado.includes(matriz[i][1])) {
            textoDesencriptado = textoDesencriptado.replaceAll(matriz[i][1], matriz[i][0])
        }
    }
    
    return textoDesencriptado

}



function copiar(){
    let copiarTexto = document.getElementById('msjcopiado');
    copiarTexto.select();
    copiarTexto.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copiarTexto.value);

    
    mensaje.value = '';
    alert('texto copiado');
  

}



