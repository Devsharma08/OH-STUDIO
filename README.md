# OH Studio Clone

A sleek, responsive, and highly interactive frontend clone of the **OH Studio** originally designed to showcase a modern design portfolio. This project heavily focuses on premium aesthetics, seamless animations, and top-tier user experience.

**🔗 Live Demo:** [https://oh-studio-eta.vercel.app/](https://oh-studio-eta.vercel.app/)

> **Note:** This project is strictly a clone built for educational and learning purposes, to explore modern web animations and UI components.

## 🌟 Features

- **Infinite Scrolling Carousel:** Utilizes Framer Motion for a seamlessly looping, smooth-scrolling hero section.
- **Draggable Interactions:** Users can click and drag the project carousel, which smoothly pauses the auto-scroll animation when hovering or interacting.
- **Dynamic Lottie Animations:** High-quality, lightweight SVG animations implemented natively via `lottie-react`.
- **Modern UI & Typography:** Tight tracking, `text-balance`, and a tailored CSS architecture utilizing Tailwind CSS v4.
- **Rich Media Support:** Mix of both high-resolution AVIF images and inline auto-playing `.mp4` background videos to create a dynamic visual reel experience.

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`) + PostCSS
- **Animations:** Framer Motion (`framer-motion`)
- **Interactive Vectors:** Lottie React (`lottie-react`)
- **Icons:** Lucide React

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have Node.js and a package manager like `npm`, `yarn`, or `pnpm` installed.

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <your-repo-url>
   cd oh-studio
   ```

2. **Install all dependencies:**
   ```bash
   pnpm install
   # or npm install / yarn install
   ```

3. **Start the Development Server:**
   ```bash
   pnpm run dev
   # or npm run dev / yarn dev
   ```

4. **View in the Browser:**
   Open your browser and navigate to the localhost URL provided in your terminal (usually `http://localhost:5173/`).

## 📂 Project Structure

```text
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images, Videos, SVG logos, and Lottie JSON files
│   ├── components/         # Reusable React components (e.g., Hero.jsx)
│   ├── App.jsx             # Main Application layout and Header integration
│   ├── index.css           # Global Tailwind & Custom CSS classes
│   └── main.jsx            # React root and strict mode wrapper
├── index.html              # HTML DOM entry point
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```

## 🎨 Design Decisions

- **Handling Default Exports across Modules:** Built-in safeguards check whether component defaults are wrapped in CJS/ESM (`LottieImport.default || LottieImport`) preventing Vite development crashes. 
- **Auto-pausing CSS vs Framer:** Mouse interactions combine both standard React synthetic events for motion control and CSS specificity for foolproof pause states.
- **Font Face:** Tailored to utilize `Helvetica Now Display Bold` for punchy, impactful headers.

## 📚 Disclaimer

**This project was created for educational and learning purposes only.** 
It is a practice clone built to explore frontend web design, animation techniques, and React component structuring. All design rights, original concepts, and branding belong to the original creators of OH Studio. **Additionally, any company logos and taglines used within this project are acting purely as visual placeholders; there is no actual affiliation with these respective brands.**
