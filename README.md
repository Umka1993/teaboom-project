# Product Card — Pineapple Oolong (Teaboom.ru)

Test assignment: layout of the upper part of a product card for the [Teaboom.ru](https://teaboom.ru/product/ananasovij-ulun) online store.

## What's included

- product image, title, category, packaging options, SKU, prices, “Add to cart” button, short description;
- switching packaging updates the price, old price, SKU, and selected state;
- “Add to cart” button with a hover state (no real cart);
- responsive layout for desktop (1440px), tablet (768px), and mobile (375px);
- HTML5, SCSS, vanilla JavaScript, Flexbox / Grid;
- visual style inspired by Teaboom.ru (Open Sans, yellow accent `#f5d730`, cream background).

## Project structure

```
teaboom-project/
├── index.html          # page markup
├── css/style.css       # compiled styles
├── scss/style.scss     # style source
├── js/main.js          # packaging selection logic
├── images/             # product image
├── package.json
└── README.md
```

## Getting started

### Quick start

Open `index.html` in a browser or start a local server:

```bash
npx serve . -p 3000
```

Page: [http://localhost:3000](http://localhost:3000)

### Rebuild CSS from SCSS

```bash
npm install
npm run build:css
```

Watch mode:

```bash
npm run watch:css
```

## Packaging options

| Weight | SKU   | Price    | Old price |
|--------|-------|----------|-----------|
| 100 g  | 01306 | 326.40 ₽ | 349.20 ₽  |
| 500 g  | 01307 | 1,432 ₽  | 1,646 ₽   |
| 1000 g | 01308 | 2,064 ₽  | 2,592 ₽   |
| 5000 g | 01309 | 6,320 ₽  | 8,710 ₽   |

## Source

Product data and image are taken from [teaboom.ru/product/ananasovij-ulun](https://teaboom.ru/product/ananasovij-ulun).
