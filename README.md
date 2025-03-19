# 🎨 Next.js Theme Switcher

![Next.js](https://img.shields.io/badge/Next.js-15.2.3-black)
![React](https://img.shields.io/badge/React-19.0.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0+-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0.0-38B2AC)
![next-themes](https://img.shields.io/badge/next--themes-0.4.6-purple)

A modern Next.js application with an advanced theming system, allowing users to switch between different modes (light/dark) and color palettes.

## 📑 Table of Contents

- [🎨 Next.js Theme Switcher](#-nextjs-theme-switcher)
  - [📑 Table of Contents](#-table-of-contents)
  - [🚀 Getting Started](#-getting-started)
  - [🎭 Theming System](#-theming-system)
    - [Available Themes](#available-themes)
    - [How It Works](#how-it-works)
  - [🧩 Project Structure](#-project-structure)
  - [🛠️ Technologies Used](#️-technologies-used)
  - [👨‍💻 About the Developer](#-about-the-developer)
    - [Yann Thobena](#yann-thobena)
  - [📚 Resources](#-resources)
  - [📝 Contact](#-contact)

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

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

## 🎭 Theming System

This application implements a two-level theming system:

1. **Light/Dark Mode** - Managed by `next-themes`, which adds/removes the `dark` class on the HTML element
2. **Color Themes** - Managed by a custom `ActiveThemeProvider`, which adds classes like `theme-blue`, `theme-purple`, etc. to the body

### Available Themes

- **Standard**: Default, Blue, Green, Amber, Purple, Pink, Midnight
- **Scaled**: Versions of standard themes with adjusted scaling
- **Monospace**: Themes with monospace fonts

### How It Works

The system uses:
- Cookies to persist theme preferences
- CSS variables to define colors
- CSS classes to apply themes
- React context to manage theme state

## 🧩 Project Structure

```
├── app/
│   ├── layout.tsx       # Main layout with theme providers
│   └── globals.css      # Global styles and theme definitions
├── components/
│   ├── active-theme.tsx # Custom provider for themes
│   ├── theme-selector.tsx # Theme selector component
│   ├── theme-toggle.tsx # Light/dark mode toggle
│   └── providers/
│       └── theme-provider.tsx # Wrapper for next-themes
```

## 🛠️ Technologies Used

- **Next.js** (v15.2.3) - React framework
- **React** (v19.0.0) - UI library
- **TypeScript** (v5+) - Static typing
- **Tailwind CSS** (v4) - Utility-first CSS framework
- **Radix UI** - Accessible UI primitives
- **next-themes** (v0.4.6) - Light/dark mode management
- **Lucide React** (v0.483.0) - Icon library

## 👨‍💻 About the Developer

### Yann Thobena

Application Developer at **IPANOVA**, Yann specializes in creating modern and accessible user interfaces. With expertise in React, Next.js, and TypeScript, he designs elegant solutions that combine performance and user experience.

At IPANOVA, Yann contributes to the digital transformation of businesses by developing innovative web applications that meet specific client needs.

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs/primitives/overview/introduction)
- [next-themes Documentation](https://github.com/pacocoursey/next-themes)

---

Developed with ❤️ by [Yann Thobena](https://github.com/thobenayann) at [IPANOVA](https://www.ipanova.com)

## 📝 Contact

- [Email](mailto:yann.thobena@ipanova.com)
- [LinkedIn](https://www.linkedin.com/in/yannthobena/)
- [GitHub](https://github.com/thobenayann)
