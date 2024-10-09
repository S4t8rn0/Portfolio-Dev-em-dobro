const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', ()=> {
    MostrarProjetos();

    esconderProjetos();
});

function esconderProjetos() {
    botaoMostrarProjetos.classList.add("remover");
}

function MostrarProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
