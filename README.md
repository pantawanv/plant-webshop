# Plant Webshop 🌱

A plant webshop built with React, Redux Toolkit and React Router.

The webshop allows users to browse plants fetched from the Perenual API, add plants to a shopping cart, change quantities, remove products and complete a checkout flow.

## Technologies

- React
- Vite
- Redux Toolkit
- React Router
- JavaScript
- CSS
- Perenual API

## Features

- Browse plants fetched from an external API
- Add plants to the shopping cart
- Increase and decrease product quantities
- Remove products from the cart
- Clear the entire cart
- See the total number of items in the cart
- Checkout page with order summary and total price
- Place an order and clear the cart
- Navigate between pages without full-page reloads

## Pages

- Home
- Shop
- Cart
- Checkout

## Installation and Setup

Follow these steps to run the project locally.

### Step 1: Clone the repository

Open a terminal and run:

    git clone https://github.com/pantawanv/plant-webshop.git

### Step 2: Navigate into the project

    cd plant-webshop

### Step 3: Install dependencies

    npm install

### Step 4: Add the API key

The project uses the Perenual API to fetch plant data.

To get an API key, visit the [Perenual API website](https://perenual.com/).

After getting your API key, create a `.env` file in the root of the project, in the same folder as `package.json`.

Add your Perenual API key:

    VITE_PERENUAL_API_KEY=your_api_key_here

Replace `your_api_key_here` with your own Perenual API key.

The `.env` file is included in `.gitignore` and should not be uploaded to GitHub.

### Step 5: Start the development server

Run:

    npm run dev

The application will then be available at the local address shown in the terminal.

## Redux

Redux Toolkit is used to manage the global shopping cart state.

The cart supports:

- Adding products
- Increasing quantity
- Decreasing quantity
- Removing products
- Clearing the cart

## API

Plant information is fetched from the Perenual API and displayed on the Shop page.

## Deployment

The project is deployed using GitHub Pages.

GitHub repository:

https://github.com/pantawanv/plant-webshop
