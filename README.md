# 🌐 Tammineni Saritha — Portfolio

A modern, animated developer portfolio showcasing full-stack development skills with a warm editorial design, 3D laptop imagery, and smooth micro-interactions.

![Portfolio Preview](public/images/laptop-hero.png)

---

## ✨ Features

- **Warm Editorial Theme** — Cream & navy color palette with gradient accents
- **3D Floating Laptop Images** — Custom AI-generated 3D laptop visuals
- **Typing Code Animation** — Real-time code typing effect in the hero section
- **Scroll Progress Bar** — Gradient bar showing page scroll progress
- **Animated Skill Bars** — Smooth fill animations on scroll
- **Counter Animations** — Stats count up when scrolled into view
- **Floating Tech Chips** — Animated technology labels orbiting the hero
- **3D Card Tilt Effect** — Cards tilt on hover with perspective transforms
- **Infinite Marquee** — Scrolling tech stack showcase
- **Timeline Education** — Interactive timeline with pulsing markers
- **Responsive Design** — Fully responsive across all devices
- **Mobile Navigation** — Hamburger menu for mobile screens

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 19 |
| Language | TypeScript |
| Build Tool | Vite 7 |
| Styling | Tailwind CSS 4 |
| Fonts | Instrument Serif, Inter, JetBrains Mono |
| Deployment | Static (Single File) |

---

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Sarithatammineni/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── laptop-hero.png        # 3D laptop for hero section
│   │   ├── laptop-workspace.png   # 3D workspace for about section
│   │   ├── laptop-cta.png         # 3D laptop for contact section
│   │   ├── project-agri.jpg       # Smart Agri Track mockup
│   │   └── project-renovation.jpg # Home Renovation mockup
│   └── your-resume.pdf            # Your resume PDF
├── src/
│   ├── App.tsx                    # Main application
│   ├── index.css                  # Global styles & animations
│   ├── main.tsx                   # React entry point
│   └── utils/
│       └── cn.ts                  # Utility function
├── index.html                     # HTML template
├── package.json                   # Dependencies
├── tsconfig.json                  # TypeScript config
├── vite.config.ts                 # Vite config
└── README.md                      # This file
```

---

## 🎨 Customization Guide

### 1. Personal Information

Edit `src/App.tsx` → `PERSON` object (around line 115):

```tsx
const PERSON = {
  name: "Your Name",
  shortName: "FirstName",
  title: "Full Stack Developer",
  tagline: "Your tagline here",
  email: "your.email@example.com",
  phone: "+91 XXXXX XXXXX",
  location: "Your City, State",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  resume: "/your-resume.pdf",
};
```

### 2. Skills

Edit the `SKILL_CATEGORIES` array (around line 165):

```tsx
const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    icon: Icon.Code,
    blurb: "Your description here",
    skills: [
      { name: "React.js", level: 85 },  // level: 0-100
    ],
  },
  // Add more categories...
];
```

### 3. Projects

Edit the `PROJECTS` array (around line 205):

```tsx
const PROJECTS = [
  {
    title: "Project Name",
    eyebrow: "Category · Type",
    description: "Project description here...",
    image: "/images/your-project.jpg",  // Place image in public/images/
    tech: ["React", "Node.js", "MongoDB"],
    live: "https://your-live-link.com",
    github: "https://github.com/yourusername/project",
  },
];
```

### 4. Education

Edit the `education` array inside `PERSON` (around line 134):

```tsx
education: [
  {
    period: "2022 — Present",
    degree: "Your Degree",
    field: "Your Field",
    school: "Your Institution",
    detail: "Description of your studies.",
  },
],
```

### 5. Resume PDF

1. Place your resume in `public/` folder
2. Rename it to `your-resume.pdf` (or update the path in `PERSON.resume`)

### 6. Theme Colors

Edit the color palette in `src/index.css`:

```css
@theme {
  --color-cream-50: #fefdfb;    /* Lightest cream */
  --color-cream-100: #fdf9f3;   /* Main background */
  --color-navy-900: #151a24;    /* Primary text */
  --color-accent-start: #8b5cf6; /* Purple */
  --color-accent-mid: #ec4899;   /* Pink */
  --color-accent-end: #f97316;   /* Orange */
}
```

### 7. Fonts

Change fonts in `src/index.css` → Google Fonts import:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@400;500;600&display=swap');
```

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## 🌐 Deployment

### GitHub Pages

```bash
# Build the project
npm run build

# The dist folder contains your static files
# Upload dist/ to GitHub Pages
```

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

1. Push to GitHub
2. Connect repo on [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`

---

## 🖼️ Adding Project Images

1. Place images in `public/images/`
2. Reference them in `PROJECTS` array:

```tsx
image: "/images/your-image.jpg",
```

---

## 🔧 Troubleshooting

### Images not loading?

- Ensure images are in `public/images/` folder
- Check file names are case-sensitive
- Verify paths in code match actual file names

### Resume not downloading?

- Place PDF in `public/` folder
- Update `PERSON.resume` path to match file name
- Test by visiting `http://localhost:5173/your-resume.pdf`

### Styles not applying?

- Run `npm install` to reinstall dependencies
- Restart dev server with `npm run dev`

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Credits

- **Fonts**: [Google Fonts](https://fonts.google.com/)
- **Icons**: Custom SVG icons
- **Images**: AI-generated 3D laptop visuals

---

## 📧 Contact

**Tammineni Saritha**

- Email: tamminenisarithachowdary@gmail.com
- GitHub: [Sarithatammineni](https://github.com/Sarithatammineni)
- LinkedIn: [tammineni-saritha](https://www.linkedin.com/in/tammineni-saritha)

---

Made with ❤️ by Saritha
