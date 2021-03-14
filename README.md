
<h2 align="center">
  PokeWiboo
</h2>

<p align="center">Desafio criado pela Wiboo.</p>

## The Pokémon Showroom
Hoje você deverá fazer uma simples aplicação para mostrar Pokémons e suas características.
Inicie criação sua aplicação com Angular CLI. Escolha estilização SCSS com routing. Ao criar,
inicie um novo repositório GIT e quanto terminar, salve trabalho (git commit).

Ferramentas:
• Angular CLI
• GIT
• Google Chrome (Ou sua escolha)
• Visual Studio Code (Ou sua escolha)

Conceito:
<h1 align="center">
  <img src="https://github.com/ViniciusGabrielOliveira/pokeWiboo/blob/master/src/assets/images/Conceito.JPG?raw=true" />
</h1>

Sua aplicação deverá carregar uma tela igual ao conceito. A REST API usada será a https://
pokeapi.co/
Como ela tem CORS liberado, sua aplicação poderá fazer requisições sem problemas ou
necessidade de um proxy reverso.

A lista de Pokémons (a esquerda) deverá ser montada com a chamada:
GET - https://pokeapi.co/api/v2/pokemon?limit=100
Caminho: results[].name
Ao clicar em algum item da lista, o centro da página deve ser carregado com maiores
informações:
GET - https://pokeapi.co/api/v2/pokemon/ditto
Onde “ditto" é o nome do Pokémon.

Caminho:
• Nome: name
• Imagem: sprites.front_default
• Habilidades: abilities[].name
• Tipos: types[].name

Notas:
• ‘[]’ significa um array. Portanto você precisará fazer algum tipo de mapeamento para mostrar
na tela.
• Você deverá usar @angular/common/http padrão do Angular para acessar as chamadas
REST, tal como Observables da biblioteca RxJS.
• A busca pode ser feita via REST API.
• Deixe busca para ser desenvolvida por último.
• Caso tenha alguma ideia, fique à vontade para implementar. :)

## Resultado

<h1 align="center">
  <img src="https://github.com/ViniciusGabrielOliveira/pokeWiboo/blob/master/src/assets/images/Resultado.JPG?raw=true" />
</h1>

Este é o resultado do projeto.

Algumas considerações:

• Não foi encontrado na PokeAPI uma busca retornando um lista de resultados conforme parâmetro da request. Neste caso, para conseguir filtrar todos pokemons no campo de pesquisa, foi realizado um get de todos pokemons ("https://pokeapi.co/api/v2/pokemon?limit=${totaldepokemos}"), este número total de pokemons obtivemos atraves do get ("https://pokeapi.co/api/v2/pokemon?") no parâmetro count.

• Para a aplicação não ficar muito pesada ao carregar, principalmente por ter imagens de avatar na lista de pokemons, foi criado uma lista de resultados com 15 pokemons da lista total e um botão para addicionar mais pokemons.


## 🔥 Setup


# PokeWiboo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

