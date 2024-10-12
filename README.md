# OMDBAPI TEST

## Preface

As requested I've used nuxt 3, vue 3, typescript, tailwind and pinia

No external styling libraries were used.

The icons are just unicode symbols, probably not the best idea for production code but in this case will do

The localstorage is used to persist the current search and the list of favorites.

The MovieList component is used to render both the search result and the favoriete list.

Styling is minimal but looks good and is usable on mobile and large screens. I'm not a designer so I didn't venture on creating something more complex that would look ugly.

The OMDB_API_KEY is stored in the .env file and is public, in a real word scenario probably would be wiser to keep it private.

The code was written in around 3.5 hrs, before starting I did play around a bit with the API because I was not familiar with it.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Create a .env file with the Environment variables as shown in .env.example

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```
