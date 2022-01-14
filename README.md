# Lord of The Rings Random Characters and Quotes

This is a small website that shows you random characters and quotes from The Lord of The Rings. It is hosted with Vercel and can be found here: [lotr.vercel.app](https://l0tr.vercel.app/).

It consists of three pages: a home page to choose whether you want to see a character or a quote, and one page for each of the two. The characters page loads a character, some basic info, an image (if one is available, otherwise I use a default generic one) and a more detailed description/background story about the character. The quotes page loads a quote and its author. The website also has a dark/light theme switcher. I am deliberately not detecting the preferred colored scheme of the user, since in my opinion the text looks better with the dark background. For the font, I have used "Nunito".

The website uses a combination of two different sources to fetch the data: [The One API](https://the-one-api.dev/) for the list of characters and quotes and [The One Wiki](https://lotr.fandom.com/wiki/Main_Page) for additional information on every character.

The project is built using [SvelteKit](https://kit.svelte.dev/) as a practice exercise. This is my first Svelte project and I have tried to use as many of the features of both Svelte and SvelteKit as I could such as await, each, if blocks, SvelteKit endpoints, animations. I have also added a component to check your internet connection and display a message in case you are offline and hence cannot fetch any of the data.

For the styling I have used sass, css variables and PostCSS for processing. That allowed me to experiment with some new features such as [css custom selectors](https://cssdb.org/#custom-selectors). I generally enjoyed the Svelte way of styling components and that it automatically scopes the styles to the component by creating its own custom class names.

I am using vercel to host the project, hence I have used [their custom adapter](https://github.com/sveltejs/kit/tree/master/packages/adapter-vercel) for dynamic server rendering. I have also used environment variables to hide the API key for The One API. You can find an example `.env_sample` file to show you how to add your API key so it can work with Vite (the build tool that SvelteKit uses). If you are using Vercel, you can add the environment variable in the settings of your project.

Overall I enjoyed the developing process and I believe I will stick to Svelte and SvelteKit for some time to come. I ran into a few problems. For example I originally used the svelte-adapter-static instead of the Vercel one. Your endpoints will work perfectly fine locally when you do that, but as soon as you try uploading to vercel you will get a few errors.

The project was developed in a private repo first, hence the lack of history of commits. You can find all the steps to run the project bellow:

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab

npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
