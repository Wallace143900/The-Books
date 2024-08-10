# Projeto: The Book

## Descrição

#### Este projeto é uma aplicação de livraria online responsiva, desenvolvida com React.js e Sass. A aplicação permite que os usuários naveguem, pesquisem e filtrem uma coleção de livros por categoria e faixa de preço. Com uma interface intuitiva e moderna, a livraria online proporciona uma experiência agradável tanto em dispositivos móveis quanto em desktops.

## Funcionalidades

#### Pesquisa e Filtro de Livros: Os usuários podem pesquisar livros por palavras-chave e filtrá-los por categorias específicas, como "Ação", "Fantasia", e "Romance", além de poder definir uma faixa de preço mínima e máxima. Os resultados são atualizados em tempo real, oferecendo uma experiência dinâmica e responsiva.

#### Design Responsivo: A aplicação é totalmente responsiva, garantindo que o conteúdo seja exibido de forma otimizada em diferentes dispositivos, desde smartphones até telas de desktop.

#### Componentes Modulares: O projeto é estruturado em componentes modulares de React, como BookCard, BooksList, CategoryFilters, PriceFilters, e SearchForm. Essa modularidade facilita a manutenção e a escalabilidade do código.

## Principais Componentes

#### BookCard: Exibe as informações de um livro individual, incluindo o nome, a categoria e o preço, formatado em Real Brasileiro (BRL).

#### BooksList: Renderiza uma lista de livros utilizando o componente BookCard. Exibe o número total de livros encontrados e a mensagem de pesquisa.

#### CategoryFilters: Permite que os usuários filtrem os livros por categoria, utilizando dados pré-definidos.

#### PriceFilters: Permite a filtragem de livros com base em um intervalo de preços, onde os usuários podem definir um valor mínimo e máximo.

#### SearchForm: Um formulário de pesquisa que permite aos usuários buscar livros por nome ou categoria. O formulário atualiza os resultados conforme o usuário digita.

#### Filters: Um componente que agrupa todos os filtros de pesquisa (categoria, preço e pesquisa), além de incluir um botão para limpar todos os filtros aplicados.

## Tecnologias Utilizadas

#### React.js: Biblioteca JavaScript para construção de interfaces de usuário.

#### Sass: Extensão CSS para adicionar funcionalidades como variáveis, aninhamento e mixins.

#### React Icons: Biblioteca para ícones de React.

#### JavaScript: Linguagem principal utilizada para a lógica da aplicação.

## Conclusão

### Este projeto demonstra uma aplicação web moderna e responsiva, utilizando boas práticas de desenvolvimento com React.js e Sass. A estrutura modular do código facilita futuras expansões e manutenções, tornando-o ideal para uma livraria online ou outras aplicações que requerem funcionalidades semelhantes.