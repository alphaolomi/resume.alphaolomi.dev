# Alpha's Resume

Simple web app that renders minimalist CV with print-friendly layout.

Built with Next.js and `shadcn/ui`, deployed on Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/alphaolomi/resume.git)

## Features

- Setup only takes a few minutes [single config file](./src/data/resume-data.tsx)
- Built using Next.js 14, React, Typescript, Shadcn/UI, TailwindCSS
- Auto generated Layout
- Responsive for different devices
- Optimized for Next.js and Vercel

# Usage

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/alphaolomi/resume.git
   ```

2. Move to the cloned directory

   ```bash
   cd resume
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Start the local Server:

   ```bash
   pnpm dev
   ```

5. Open the [Config file](./src/data/resume-data.tsx) and make changes

## Run with Docker

Build the container

```bash
docker compose build
```

Run the container

```bash
docker compose up -d
```

Stop the Container

```bash
docker compose down 
```

## Credits

- Original work from [BartoszJarocki/cv](https://github.com/BartoszJarocki/cv)

# License

[MIT](https://choosealicense.com/licenses/mit/)
