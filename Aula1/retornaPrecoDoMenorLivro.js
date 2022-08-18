const livros = require('./index')

let atual = 0;
let maisBarato = 0;

for (atual; atual < livros.length; atual++ ){
    if(livros[atual].preco < livros[maisBarato].preco){
        maisBarato = atual
    }
}

console.log(`o livro mais barato custo ${livros[maisBarato].preco} e seu nome é ${livros[maisBarato].titulo}`)