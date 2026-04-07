// Banco de dados com as informações e FOTOS da Shiota
const informacoes = {
    artista: `
        <h3>Sobre Chiharu Shiota</h3>
        <img src="shiota.webp" style="width:100%; max-width:400px; margin-bottom:15px; border-radius:4px;">
        <p><b>Nascimento:</b> 1972, Osaka, Japão.</p>
        <p><b>Carreira:</b> Vive em Berlim desde 1996. Estudou com a lendária Marina Abramović. Suas obras usam fios, malas e chaves para falar sobre memória e humanidade.</p>
        <p><b>Reconhecimento:</b> Representou o Japão na Bienal de Veneza em 2015 com a instalação A Chave na Mão, composta por 180 mil chaves coletadas em campanha internacional.</p>


    `,
    exposicao: `
        <h3>Exposição: Linhas da Vida</h3>
        <img src="vida.jpg" style="width:100%; max-width:400px; margin-bottom:15px; border-radius:4px;">
        <p><b>Apresentação:</b>A mostra reuniu trabalhos desde o início da carreira de Shiota, em 1994, até instalações inéditas inspiradas no Brasil. Os fios, elemento recorrente em sua obra, funcionam como metáfora de percursos, histórias e relações humanas, criando ambientes imersivos e poéticos que convidam o público a refletir sobre memória, identidade e efemeridade da vida.</p>
    `,
    pele: `
        <h3>Pele (2018)</h3>
        <img src="pele.jpeg" style="width:100%; max-width:400px; margin-bottom:15px; border-radius:4px;">
        <p><b>O que é:</b>  A obra consiste em uma instalação de grandes dimensões. De um lado, vestidos são suspensos no ar ou dispostos no chão, completamente emaranhados por uma densa teia de fios pretos que conectam o teto, as paredes e o chão. A referência à "Pele" e ao "Vestido" sugere uma relação com o corpo ausente e a memória da roupa. O emaranhado de fios simula um labirinto ou uma "segunda pele", criando um ambiente sombrio, porém poético.</p>
    `,
    linha: `
        <h3>Linha Interna (2020)</h3>
        <img src="linha interna.jpeg" style="width:100%; max-width:400px; margin-bottom:15px; border-radius:4px;">
        <p><b>Significado:</b>A obra consiste em uma densa teia de fios pretos que se espalham pelo ambiente, conectando-se a objetos como maçanetas ou estruturas que remetem a portas/janelas. Os fios criam camadas sobrepostas, formando algo como um “labirinto” ou “mapa de conexões internas”. O espaço parece escuro, e os objetos flutuam ou estão fixos nas paredes/teto, sugerindo passagens, limites e o interior da mente/corpo.</p>
    `
};

// Função para mudar o conteúdo na tela
function carregarInfo(chave) {
    const painel = document.getElementById('info-content');
    
    painel.style.opacity = 0;
    
    setTimeout(() => {
        painel.innerHTML = informacoes[chave];
        painel.style.opacity = 1;
    }, 200);
}