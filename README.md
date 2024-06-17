# Yntech News

## Descrição do Projeto
Yntech News é uma aplicação de notícias que permite aos usuários visualizar as notícias mais recentes categorizadas por diferentes tópicos. Os usuários podem filtrar notícias por categoria e visualizar detalhes de uma notícia específica.

## Tecnologias Utilizadas
- React
- TypeScript
- Tailwind CSS
- Vite
- React Router

## Configuração do Ambiente de Desenvolvimento

### Pré-requisitos
- Node.js (>= 14.x)
- npm (>= 6.x) ou yarn (>= 1.x)

### Passos para Configuração

1. **Clone o repositório:**

    ```sh
    git clone https://github.com/seu-usuario/yntech-news.git
    cd yntech-news
    ```

2. **Instale as dependências:**

    ```sh
    npm install
    ```

    ou

    ```sh
    yarn install
    ```

3. **Configure as variáveis de ambiente:**

    Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

    ```sh
    VITE_NEWS_API_URL=https://newsapi.org/v2/top-headlines
    VITE_NEWS_API_KEY=seu_api_key
    ```

    Substitua `seu_api_key` pela chave da API do [News API](https://newsapi.org/).

4. **Inicie o servidor de desenvolvimento:**

    ```sh
    npm run dev
    ```

    ou

    ```sh
    yarn dev
    ```

    A aplicação estará disponível em `http://localhost:5173`.

## Estrutura do Projeto

- `src/`: Contém o código-fonte da aplicação
  - `components/`: Componentes reutilizáveis
  - `contexts/`: Contextos do React para gerenciamento de estado
  - `App.tsx`: Componente principal da aplicação
  - `main.tsx`: Ponto de entrada da aplicação
- `public/`: Arquivos públicos (imagens, ícones, etc.)
- `.env`: Arquivo de variáveis de ambiente

## Funcionalidades Principais

### Listagem de Notícias

A aplicação exibe uma lista de notícias mais recentes. Os usuários podem filtrar essas notícias por categoria.

### Filtragem por Categoria

Os usuários podem selecionar uma categoria específica para visualizar apenas as notícias relacionadas a essa categoria.

### Visualização de Detalhes de Notícias

Ao clicar em uma notícia, o usuário é redirecionado para uma página de detalhes onde pode visualizar mais informações sobre a notícia.

## Exemplo de Chamadas à API

### Busca de Notícias por Categoria

```sh
GET https://newsapi.org/v2/top-headlines?country=br&category=business&apiKey=SEU_API_KEY
```

### Testando as Funcionalidades
## Filtros de Categoria:
# Selecione diferentes categorias no filtro de categorias e verifique se a lista de notícias é atualizada corretamente.

#### Visualização de Detalhes:
## Clique em uma notícia para ser redirecionado à página de detalhes e verifique se as informações completas da notícia são exibidas.
