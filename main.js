const itens = document.querySelectorAll('.card');
const botoes = document.querySelectorAll('.btn-saiba-mais');

botoes.forEach((botao, index) => {
  botao.addEventListener('click', function() {
    // Remove a classe 'active' de todos os itens, exceto o item correspondente ao botão acionado
    itens.forEach((item, itemIndex) => {
      if (itemIndex !== index) {
        item.classList.remove('active');
      }
    });

    // Verifica se o item correspondente ao botão possui a classe 'active'
    const hasActiveClass = itens[index].classList.contains('active');

    // Remove a classe do item se estiver presente
    if (hasActiveClass) {
      itens[index].classList.remove('active');
    } else {
      // Adiciona a classe ao item
      itens[index].classList.add('active');
    }
  });
});
