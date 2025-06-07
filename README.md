This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# Personal Portfolio

A modern, responsive personal portfolio built with Next.js, React, and Tailwind CSS. Features a beautiful blue theme with dark mode support and modular components for easy customization.

## Features

- 🎨 Modern, clean design with blue/white theme
- 🌙 Dark mode support
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 and React
- 🎯 Modular component architecture
- 🔧 Easy customization and theming
- 📝 Contact form integration ready
- 🚀 Optimized for performance

## Sections

- **Hero** - Introduction and call-to-action
- **About** - Personal information and quick facts
- **Experience** - Work history and roles
- **Projects** - Portfolio of work with live demos
- **Skills** - Technical skills with proficiency levels
- **Contact** - Contact form and information

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Adding New Sections

1. Create a new component in the `components/` directory
2. Add the section to `lib/config/sections.ts`
3. Import and add it to `app/page.tsx`

### Changing Colors

Edit the color theme in `lib/config/sections.ts` or modify Tailwind classes directly in components.

### Adding New Pages

Create new pages in the `app/` directory following Next.js 13+ app router conventions.

## Deployment

This portfolio is ready to deploy on Replit. The project will automatically build and serve on the configured port.

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Heroicons (via SVG)
- **Deployment**: Replit

## Future Enhancements

- Blog integration
- CMS integration
- Animation library integration
- Advanced SEO optimization
- Analytics integration

## Contact

Feel free to reach out if you have any questions or suggestions!
