# Abhishek Singh - Premium Web Presence

A modern, responsive portfolio website showcasing my work as a Full-Stack Developer & CEO @ Illustro Webs.

## 🚀 Features

- **Modern UI/UX**: Built with shadcn/ui components and Tailwind CSS
- **Smooth Animations**: Powered by Framer Motion and GSAP
- **Particle Effects**: Interactive background particles using tsparticles
- **Responsive Design**: Fully responsive across all devices
- **TypeScript**: Type-safe codebase
- **Performance Optimized**: Built with Vite for fast development and production builds

## 🛠️ Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Animations**: Framer Motion, GSAP
- **Particles**: tsparticles
- **Routing**: React Router
- **State Management**: TanStack Query
- **Smooth Scrolling**: Lenis

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd new-portfolio
```

2. Install dependencies:
```bash
npm run install:all
```

Or navigate to this directory and run:
```bash
npm install
```

3. Create a `.env` file (optional):
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix linting issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## 📁 Project Structure

```
src/
├── components/      # React components
│   ├── ui/         # shadcn/ui components
│   ├── About.tsx   # About section with profile image
│   ├── Hero.tsx    # Hero section
│   ├── Skills.tsx  # Skills showcase
│   ├── Experience.tsx # Work experience
│   ├── Projects.tsx   # Portfolio projects
│   ├── Contact.tsx    # Contact form
│   └── ...         # Other components
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
├── pages/          # Page components
└── test/           # Test files
```

## 🎨 Customization

- Update personal information in component files
- Modify colors and themes in `tailwind.config.ts`
- Add or remove sections as needed
- Customize animations in component files
- Replace profile image: Update `/public/Mypic.jpg`

## 🧪 Testing

Run tests with:
```bash
npm run test
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` directory, ready to be deployed to any static hosting service like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any static hosting provider

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../../LICENSE) file for details.

## 👤 Author

**Abhishek Singh**
- CEO & Co-Founder @ Illustro Webs
- Full-Stack Developer

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For any questions or inquiries, please reach out through the contact form on the website.

---

Built with ❤️ using React, TypeScript, and modern web technologies.
