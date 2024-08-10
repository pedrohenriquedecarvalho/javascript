function verificar() {
    var data = new Date()
    var ano=data.getFullYear()
    console.log(ano)
    var fano= document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('verifique os seus dados e tente novamnete"')
    } else{
        var fsex = document.getElementsByName('radsex')
        console.log(fsex)
        var idade = ano - Number(fano.value)
        console.log(idade)
        console.log(fano.value)
        var genero = ``
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        console.log(fsex[0].checked)
         if (fsex[0].checked) {
            console.log('sexo masculino')
            genero = 'Homem'
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'bebeM.jpg')
            }
            else if (idade >= 10 && idade <21) {
                //jovem
                img.setAttribute('src', 'adolescenteM.jpg')
            }
            else if (idade <50) {
                //adulto
                img.setAttribute('src', 'homem.jpg')
            }
            else{
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        
                
        }
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'bebeF.jpg')
            }
            else if (idade >= 10 && idade <21) {
                //jovem
                img.setAttribute('src', 'adolescenteF.jpg')
            }
            else if (idade <50) {
                //adulto
                img.setAttribute('src', 'mulher.jpg')
            }
            else{
                //idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign='center'
        res.innerHTML = `detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}