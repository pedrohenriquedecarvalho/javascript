var agora = new Date()
var diasem = agora.getDay()


switch (diasem) {
    case 0:
        console.log('domingo')
        break;

    case 1 :
        console.log('segunda')
         break

    case 2: 
        console.log('terça ')
        break
    
    case 3:
        console.log('quarta')
        break
         
    case 4:
        console.log('quinta')

        case 4:
            console.log('sexta')

        case 5:
            console.log('sabado')
    default:
        break;
}