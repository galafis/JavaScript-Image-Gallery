# Galeria de Imagens em JavaScript

![GitHub last commit](https://img.shields.io/github/last-commit/galafis/javascript-image-gallery?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/galafis/javascript-image-gallery?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/galafis/javascript-image-gallery?style=for-the-badge)
![GitHub top language](https://img.shields.io/github/languages/top/galafis/javascript-image-gallery?style=for-the-badge)

## Visão Geral

Este projeto apresenta uma **Galeria de Imagens Interativa** desenvolvida em JavaScript puro, HTML e CSS. Foi concebido para ser uma solução leve e eficiente para exibir coleções de imagens de forma dinâmica e responsiva. A galeria permite a navegação entre imagens, visualização em tela cheia e é facilmente integrável em qualquer projeto web.

## Funcionalidades

*   **Navegação Intuitiva**: Botões de navegação e miniaturas para fácil acesso às imagens.
*   **Responsividade**: Adapta-se a diferentes tamanhos de tela, proporcionando uma experiência consistente em dispositivos móveis e desktops.
*   **Modo Tela Cheia**: Opção para visualizar imagens em tela cheia para uma experiência imersiva.
*   **Carregamento Dinâmico**: Suporte para adicionar e remover imagens dinamicamente.

## Arquitetura

```mermaid
graph TD
    A[index.html] --> B(Estilos CSS)
    A --> C(Lógica JavaScript)
    C --> D{Manipulação do DOM}
    C --> E[Event Listeners]
    D --> F[Exibição de Imagens]
    E --> F
```

## Como Usar

### Instalação

Não é necessária instalação complexa. Basta clonar o repositório e abrir o arquivo `index.html` em seu navegador.

```bash
git clone https://github.com/galafis/javascript-image-gallery.git
cd javascript-image-gallery
# Abra index.html no seu navegador
```

### Estrutura do Projeto

```
.  
├── docs/  
│   ├── README.original.md  
│   ├── README.pt.md  
│   └── README.en.md  
├── src/  
│   └── index.js  
├── index.html  
├── style.css  
└── README.md  
```

### Exemplo de Uso

Para adicionar imagens à galeria, edite o arquivo `index.html` e inclua suas imagens dentro de um contêiner específico, ou utilize a API JavaScript para adicionar dinamicamente.

```html
<div id="gallery-container">
    <img src="images/image1.jpg" alt="Descrição da Imagem 1">
    <img src="images/image2.jpg" alt="Descrição da Imagem 2">
</div>
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests para melhorias, correção de bugs ou novas funcionalidades.

## Autor

**Gabriel Demetrios Lafis**

*   [GitHub](https://github.com/galafis)
*   [LinkedIn](https://www.linkedin.com/in/gabriel-demetrios-lafis/)

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

