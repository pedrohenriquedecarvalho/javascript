function contar() {
   let ini = window.document.getElementById('txti')
   console.log(`valor de ini ${ini.value}`)
   let fim = window.document.getElementById('txtf')
   console.log(`valor de fim ${fim.value}`)
   let passo =  window.document.getElementById('txtp')
   console.log(`valor de passo ${passo.value}`)
   let res = window.document.getElementById('res')

 if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
   res.innerHTML = 'impossível contar'
   window.alert('erro')
 }else{
   res.innerHTML = 'contando'
   let i = Number(ini.value) 
   let f = Number(fim.value) 
   let p = Number(passo.value) 
   if(p <= 0 )
   {
      window.alert('passo invalido')
      p = 1
   }

      for(let c = i ; c <= f  ; c += p){
         console.log(`valor de c ${c}`)
         res.innerHTML += `\u{1F449} ${c}`
      
       }
     
   }

     
 
}
