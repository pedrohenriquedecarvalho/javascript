let num = window.document.getElementById('fnum')
let lista = window.document.getElementById('flista')
let res = window.document.getElementById('res')
let valores = []

function isnumero(n) {
    if (Number(n) >= 1 && Number (n) <= 100 ) {
        return true 
    }else{
        return false 
    }
}

function inlista(n , l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
   
    
}

function adicionar() {
     if (isnumero(num.value) && !inlista (num.value , valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado `
        lista.appendChild(item)
        res.innerHTML = ''

     }else{
        window.alert(' valor já encontrado ')
     }
     num.value = ''
     num.focus()
}

function finalizar() {
    if(valores.length == 0 ){
        window.alert('adicione valores antes de finalizar')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores ) {
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
        if(valores[pos] < menor)
            menor = valores [pos]
        }
        media = soma/tot
        res.innerHTML = ' '
        res.innerHTML += `<p> ao todo , temos ${tot} números cadastrados . </p>`
        res.innerHTML += `<p> o maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p> o maior valor informado foi ${menor}.</p>`
        res.innerHTML += `<p> a média dos valores digitados é  ${media}.</p>`
    }
}