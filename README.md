# Desafio SciCrop Backend - Mini Sistema de Blog

## Resumo do Projeto

Este projeto consiste no desenvolvimento de um mini sistema de blog que deve cumprir com os requisitos pormenorizados em [Funcionalidades](#funcionalidades-implementadas). O objetivo é demonstrar habilidades no desenvolvimento de sistemas web utilizando uma arquitetura completa que inclui backend, banco de dados e frontend.

### Estrutura do Projeto

- **Backend**: Desenvolvido com Express.js, um framework para Node.js que proporciona flexibilidade e simplicidade na criação de APIs.
- **Banco de Dados**: SQLite, um banco de dados leve e eficiente, ideal para aplicações de pequeno porte.
- **Frontend**: Construído com Vue.js, por meio do Vite para inicializar o projeto, proporcionando uma interface dinâmica e responsiva. Acesse o repositório do Frontend [clicando aqui](https://github.com/Pedro-Jelev/DesafioSciCropFrontend).

## Funcionalidades Implementadas

### 1. **Listagem de Posts**

- Página que lista todos os posts disponíveis no blog.
- Cada post é exibido com seu título, funcionando como link para a exibição do conteúdo completo.
- Posts ordenados por data de publicação (mais recentes primeiro).
- **Status**: Atendido em sua totalidade.

### 2. **Criação de Post**

- Formulário para criação de novos posts com campos para título e corpo do texto.
- Após submissão, o post é salvo no banco de dados e o usuário é redirecionado para a listagem.
- **Status**: Atendido em sua totalidade.

### 3. **Exibição de Post Selecionado**

- Página dedicada para exibir o título e o conteúdo completo do post selecionado.
- Navegação via link da listagem de posts.
- **Status**: Atendido em sua totalidade.

### 4. **Extras (Opcional)**

- Adiconar as funcionalidade de editar e excluir posts;
- **Status**: Implementado parcialmente: funcionalidade excluir permite soft delete.
- Estilização com uso de frameworks de CSS como Bootstrap ou Tailwind.
- **Status**: Não implementado.
- Uso de Vue.js ou outro framework frontend visando proporcionar experiência dinâmica;
- **Status**: Implementado em sua totalidade: Uso de Vue.js em 100% do frontend para aprimorar a interatividade e responsividade da aplicação.

## Tecnologias Utilizadas

- **[Express.js](https://expressjs.com/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[SQLite](https://www.sqlite.org/)**
- **[Nodemon](https://www.npmjs.com/package/nodemon)**
- **[Sucrase](https://www.npmjs.com/package/sucrase)**
- **[Cors](https://www.npmjs.com/package/cors)**

## Instruções para Execução

1. Clone o repositório:

   ```bash
   git clone https://github.com/Pedro-Jelev/DesafioSciCropBackend
   ```

2. Dentro da pasta DesafioSciCropBackend, instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor (porta 3000):

   ```bash
   npm run dev
   ```

4. Observações Importantes:
   Visando mitigar possíveis complexidades do projeto não utilizei variáveis de ambiente, portanto, o servidor sempre será executado na porta 3000. Você poderá modificar a porta de execução alterando a constante `PORT`, localizada no arquivo server.ts

## Resumo de Aprendizado

Desenvolver o Backend deste projeto me possibilitou integrar os conhecimentos teóricos da faculdade, como modelagem de dados e normalização, aos conhecimentos práticos de estudos anteriores. Fazer um projeto do zero, dentro de um prazo curto, e que mantenha o escopo proposto é sempre um desafio. É preciso ignorar requisitos óbvios como a necessidade de autenticação antes de excluir qualquer post, ou mesmo avaliar se o usuário em questão possui permissão para acessar certa funcionalidade ou página.

Escrever o comportamento do banco de dados sem as facilidades de um query builder ou mesmo executar a aplicação em um ambiente não controlado, abrindo mão das vantagens oferecidas pelo docker em virtude da simplicidade, foi uma exigência imposta por mim.
