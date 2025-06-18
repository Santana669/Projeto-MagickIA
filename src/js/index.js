//pegar o botao de aplicar filtros do html e mandar pro js
const botaoFiltrar = document.querySelector('.btn-filtrar')

//escutar o clique do botao de aplicar filtros
botaoFiltrar.addEventListener('click', function(){
    //pegar os valores de categoria e preço
    const categoriaSelecionada= document.querySelector('#categoria').value;
    console.log(categoriaSelecionada);
    const precoMaximoSelecionado = document.querySelector('#preco').value;

    //para cada carta, verificar se ela deve ser mostrada ou escondida baseado nos filtros que a pessoa digitou
    const cartas= document.querySelectorAll('.carta')
    cartas.forEach(function(carta){
        const categoriaCarta= carta.dataset.categoria;
        const precoCarta= carta.dataset.preco;

        let mostrarCarta= true;
        const temFiltroDeCategoria= categoriaSelecionada.toLowerCase() !== "";
        const cartaNAoBateComFiltroDeCategoria= categoriaSelecionada !== categoriaCarta.toLowerCase()
        if(temFiltroDeCategoria && cartaNAoBateComFiltroDeCategoria){
            mostrarCarta= false;
        }
        const temFiltroDePreco= precoMaximoSelecionado !== "";

        const cartaNaoBateComFiltroDePrecoMaximo= parseFloat(precoCarta) > parseFloat(precoMaximoSelecionado)
        
        if(temFiltroDePreco && cartaNaoBateComFiltroDePrecoMaximo){
            mostrarCarta= false;
        }
        if(mostrarCarta){
            carta.classList.add('mostrar');
            carta.classList.remove('esconder');
        }else{
            carta.classList.remove('mostrar');
            carta.classList.add('esconder');

        }
    })
})
