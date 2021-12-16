# Spotify Clone

This project is a dummy project for learning NextJS, and Next Auth. This project based on tutorial from [Sonny Sangha](https://www.youtube.com/watch?v=3xrko3GpYoU) 

<!-- ## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)
 -->
## How to use

* clone this repo,
* create spotify service to get clientId, and clientSecret, [here](https://developer.spotify.com/documentation/general/guides/authorization/app-settings/)
* copy `.env.local.example` file and rename it as `.env.local` 
* enter your jwt secret, spotify clientId, and clientSecret to `.env.local`
* run this bash command: 
```bash
yarn install
yarn run dev
```