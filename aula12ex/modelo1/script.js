function carregar() {
 var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 8
msg.innerHTML=`agora são ${hora} horas`
if (hora >= 0 && hora < 12) {

   document.body.style.backgroundColor='#e2cd9f'
    img.src = 'fotomanha.jpg'
}

else if (hora >= 12 && hora <18)
     {
    document.body.style.backgroundColor='#b9846f'   
     img.src = 'fototarde.jpg'
}
else  {
    document.body.style.backgroundColor='#515154'
     img.src = 'fotonoite.jpg'
}


}
