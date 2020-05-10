// mmc -> mínimo múltiplo comum
var delta = 0
var mmc = 0
var resposta = 0
const minha_lista = [8, 6, 20]  // 

function maior(matriz) {
    return matriz.reduce(function (a, b) {
        return Math.max(a, b)
    })
}

function resto0(numero, matriz, p) {
    if ((maior(matriz) + p) % numero == 0) {
        return true
    }
    else {
        return false
    }
}

function achar_mmc(matriz, p) {
    return (matriz).every((cada, indice) => {
        return resto0(cada, matriz, p)
    })
}

function tentativas(matriz, p) {
    while (achar_mmc(matriz, p) == false) {
        //console.log('delta: ' + p)
        //console.log(achar_mmc(matriz, p))
        mmc = maior(matriz) + p
        //console.log('mmc : ' + mmc)
        p += 1
    }
    return mmc 
}

tentativas(minha_lista, delta)

resposta = mmc + 1
console.log('maior elemento : ' + maior(minha_lista))
console.log('mmc: ' + resposta)