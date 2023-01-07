# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

<!-- Local URLs (replace with yours) -->
WP_URL=http://nuxt3-woo:8888/
WP_URL_HTTPS=http://nuxt3-woo:8888/

<!-- Generate your own keys in WooCommerce Settings -->
WP_CONSUMER_PUBLIC=ck_f01631c3a28de9df5d46dbecbb0b81cadf14d227
WP_CONSUMER_SECRET=cs_8b1d43941bf742489a680f295aa93205ba892c26

### current error

```js
Unhandled error during execution of setup function at
<Index onVnodeUnmounted=fn<onVnodeUnmounted> ref=Ref<undefined >>
```

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
