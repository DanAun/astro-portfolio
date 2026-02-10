# Personal Portfolio – Astro

This repository contains the source code for my personal portfolio website.  
The site is designed to present my projects, technical skills, and professional background.

The website is built using modern, static-first web technologies with a strong focus on performance, accessibility, and maintainability.

## 🌐 Live Website

➡️ **[Portfolio Website](https://daniel.aunan.org)**  

## 🧠 Purpose

- Showcase selected projects and technical work
- Present skills, technologies, and experience
- Serve as a central reference point for recruiters
- Demonstrate clean frontend architecture and tooling choices

## 🛠️ Tech Stack

- **Astro** – Static site generation with component-based architecture
- **React** – Interactive UI components
- **Tailwind CSS** – Utility-first styling
- **Modern HTML & CSS** – Semantic and accessible markup

## 📂 Project Structure

```text
.
├── public/                 # Static assets (images, icons, etc.)
├── src/
│   ├── components/         # Reusable UI components
│   ├── layouts/            # Page layouts
│   ├── pages/              # Route-based pages
│   ├── styles/             # Global styles
│   └── content/            # Portfolio content (projects, text)
├── astro.config.mjs        # Astro configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Scripts and dependencies
````

## 🚀 Local Development

If you want to run the project locally:

```bash
git clone https://github.com/DanAun/astro-portfolio.git
cd astro-portfolio
npm install
npm run dev
```

The site will be available at:

```
http://localhost:4321
```

## 📦 Build

To generate the production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 📈 Deployment

The website is a static build and can be deployed to platforms such as:

* GitHub Pages
* Netlify
* Vercel
* Cloudflare Pages