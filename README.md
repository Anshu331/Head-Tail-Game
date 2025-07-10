# 🎮 Game Hub - Head & Tail Interactive Game

<div align="center">

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**A modern, interactive web application featuring the unique Head & Tail game with dynamic column arrangement**

[🚀 Live Demo](#)

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🎯 Game Logic](#-game-logic)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)
- [🎮 How to Play](#-how-to-play)
- [🔧 Development](#-development)
- [📱 Responsive Design](#-responsive-design)

---

## ✨ Features

### 🎯 Core Functionality
- **Dynamic Grid System**: Intelligent column-based arrangement of H and T selections
- **Interactive UI**: Beautiful dropdown selection with smooth animations
- **Real-time Statistics**: Live count tracking for H and T selections
- **Smart Column Logic**: Automatic grouping of same-type selections
- **Reset Functionality**: One-click game reset with state clearing

### 🎨 User Experience
- **Responsive Design**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, professional interface with gradient backgrounds
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Accessibility**: Keyboard navigation and screen reader friendly
- **Visual Feedback**: Color-coded selections (Blue for H, Purple for T)

### 🧭 Navigation
- **Multi-page Application**: Home, About, and Game pages
- **React Router Integration**: Smooth client-side routing
- **Breadcrumb Navigation**: Easy navigation between sections

---

## 🎯 Game Logic

The Head & Tail game implements a unique column-based arrangement system:

### Algorithm Overview
1. **First Selection**: Creates the initial column
2. **Same Type Selection**: Adds to the last column of the same type
3. **Different Type Selection**: Creates a new column
4. **Visual Arrangement**: Displays in a dynamic grid format
   
---

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.3.1** - Modern JavaScript library for building user interfaces
- **TypeScript 5.5.3** - Static type checking for enhanced development experience
- **JSX/TSX** - Component-based architecture

### Build Tools & Development
- **Vite 5.4.2** - Lightning-fast build tool and development server
- **@vitejs/plugin-react 4.3.1** - Optimized React integration

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **PostCSS 8.4.35** - CSS post-processing
- **Autoprefixer 10.4.18** - Automatic vendor prefixing

### Routing & Icons
- **React Router DOM 7.6.3** - Declarative routing for React
- **Lucide React 0.344.0** - Beautiful, customizable icons

### Code Quality
- **ESLint 9.9.1** - Code linting and formatting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **React Hooks ESLint Plugin** - React Hooks best practices

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (version 16.0 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/game-hub-head-tail.git
   cd game-hub-head-tail
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

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview
```

---

## 📁 Project Structure

```
game-hub-head-tail/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── About.tsx          # About page component
│   │   ├── HeadTail.tsx       # Main game component
│   │   └── Home.tsx           # Landing page component
│   ├── App.tsx                # Main application component
│   ├── main.tsx               # Application entry point
│   ├── index.css              # Global styles
│   └── vite-env.d.ts          # Vite type definitions
├── index.html                 # HTML template
├── package.json               # Project dependencies
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite configuration
└── README.md                  # Project documentation
```

---

## 🎮 How to Play

### Step-by-Step Guide

1. **Navigate to the Game**
   - Click "Head & Tail Game" from the home page
   - Or visit `/head-tail` directly

2. **Make Your Selection**
   - Click the dropdown menu
   - Choose either "H - Head" or "T - Tail"

3. **Submit Your Choice**
   - Click the "Submit" button
   - Watch as your selection appears in the game board

4. **Continue Playing**
   - Keep selecting H or T to build your pattern
   - Observe how the algorithm arranges your choices

5. **Reset When Needed**
   - Click "Reset" to clear the board and start over

### Game Rules
- **H selections** appear in blue columns
- **T selections** appear in purple columns
- Same-type selections group together in columns
- Different types create new columns
- Real-time statistics show your H and T counts

---

## 🔧 Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

### Development Guidelines

1. **Code Style**: Follow TypeScript and React best practices
2. **Components**: Keep components focused and reusable
3. **Styling**: Use Tailwind CSS utility classes
4. **State Management**: Utilize React hooks for state management
5. **Type Safety**: Maintain strict TypeScript typing

### Adding New Features

1. Create feature branch: `git checkout -b feature/new-feature`
2. Implement changes with proper TypeScript types
3. Test thoroughly across different screen sizes
4. Update documentation if needed
5. Submit pull request with detailed description

---

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Mobile Devices** (320px - 768px)
- **Tablets** (768px - 1024px)
- **Desktop** (1024px and above)

### Key Responsive Features
- Flexible grid layouts
- Scalable typography
- Touch-friendly interactive elements
- Optimized spacing and padding
- Adaptive navigation

---



<div align="center">

**Made with ❤️ by [Your Name](https://github.com/yourusername)**

⭐ Star this repository if you found it helpful!

</div>
