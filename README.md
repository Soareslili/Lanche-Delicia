# Lanches Delícia

Projeto de cardápio digital para lanchonete, desenvolvido em React com Tailwind CSS.

## Funcionalidades

- Visualização de produtos por categoria (Lanches, Bebidas, Sobremesas)
- Adição de produtos ao carrinho
- Estilização responsiva com Tailwind CSS
- Integração com WhatsApp para envio de pedidos

## Tecnologias

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/) (ou Create React App)
- [React Icons](https://react-icons.github.io/react-icons/) (opcional)

## Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/lanches-delicia.git
   cd lanches-delicia
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Rode o projeto:**
   ```bash
   npm run dev
   ```
   O projeto estará disponível em `http://localhost:5173` (ou porta configurada).

## Estrutura de Pastas

```
src/
  assets/         # Imagens dos produtos
  pages/
    components/
      Hero.jsx    # Componente principal do cardápio
      Header.jsx  # Cabeçalho
  App.jsx         # Componente principal
  index.css       # Estilos globais e Tailwind
```

## Personalização

- Para alterar os produtos, edite o array `products` no arquivo `Hero.jsx`.
- Para mudar as cores, ajuste as classes Tailwind nos componentes.

## Licença

Este projeto é livre para uso educacional e pessoal.