const livros = require('./index')

function menorValor(arrProdutos, posicaoInicial){
    let atual = posicaoInicial
    let maisBarato = posicaoInicial
    
    for (atual; atual < arrProdutos.length; atual++ ){
        if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco){
            maisBarato = atual
        }
    }
    return maisBarato
}

module.exports = menorValor