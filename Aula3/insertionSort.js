const livros = require('./index')

function insertionSort(lista){

    for(let atual = 0; atual < lista.length; atual++){
        let analise = atual;
        while(analise > 0 && lista[analise].preco < lista[analise - 1].preco){
            let itemAnalise = lista[analise]
            //console.log("livro atual", livros[atual])
            let itemAnterior = livros[analise-1]
            //console.log("livro menor preço", livros[menor])


            lista[analise] = itemAnterior
            lista[analise - 1] = itemAnalise

            analise--
        }
    }

    console.log(lista)
}

insertionSort(livros);