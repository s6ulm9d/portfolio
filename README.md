# Professional Portfolio

A modern, high-performance personal portfolio website built with **React**, **TypeScript**, and **Vite**. This project showcases professional experience, skills, and projects with a sleek, responsive design featuring glassmorphism aesthetics and smooth animations.

## 🚀 Technologies

- **Core**: [React](https://reactjs.org/) (v18), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)

## ✨ Features

- **Dynamic Hero Section**: Engaging introduction with scrambled text effects.
- **Interactive Resume**: Integrated PDF viewer for seamless resume reading without leaving the site.
- **Certifications Gallery**: showcase of professional certifications with direct download options for credentials.
- **Project Showcase**: Detailed view of technical projects with links to repositories and live demos.
- **Contact Integration**: Functional contact form powered by direct `mailto` integration for immediate communication.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices using Tailwind CSS.
- **Modern UI/UX**: Features glassmorphism effects (`GlassCard`), custom cursors, and reveal animations.

## 🛠️ Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (latest LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```bash
src/
├── components/   # Reusable UI components (GlassCard, Navbar, etc.)
├── sections/     # Page sections (Hero, About, Projects, etc.)
├── constants/    # Static data and configuration
├── App.tsx       # Main application component
└── main.tsx      # Entry point
public/
├── certifications/ # Certification images and PDF assets
└── resume.pdf      # Main resume file
```

## 🎨 Customization

- **Colors**: Modified via `tailwind.config.js` and CSS variables.
- **Content**: Update text and data in the respective files under `src/sections/`.
- **Assets**: Place images and PDFs in the `public/` directory.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
