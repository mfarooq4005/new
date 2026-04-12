# Lincoln Elementary School Website

A beautiful, modern, and AI-optimized website for Lincoln Elementary School built with React and Vite.

## Features

### 🎨 Beautiful Design
- Modern gradient-based color scheme
- Smooth animations and transitions
- Responsive design for all devices
- Professional typography with Inter font
- Card-based layouts with hover effects

### 🤖 AI & SEO Optimized
- Comprehensive meta tags for search engines
- Open Graph and Twitter Card support
- Structured data (Schema.org) for better understanding by AI assistants
- Semantic HTML structure
- AI bot indexing enabled
- Optimized page performance

### 📱 Fully Responsive
- Mobile-first design approach
- Hamburger menu for mobile devices
- Flexible grid layouts
- Touch-friendly interactions

### 🏫 School-Specific Sections
- **Home**: Hero section with call-to-action
- **About**: School history and features
- **Academics**: Program information by grade level
- **Admissions**: Application process and inquiry form
- **News & Events**: Latest school updates
- **Contact**: Contact information and location
- **Footer**: Quick links and social media

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to the project directory
cd school-website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Customization

#### Update School Information
Edit `src/App.jsx` to customize:
- School name and logo
- Contact information
- Programs and descriptions
- News and events
- Statistics

#### Change Colors
Modify CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #2563eb;
  --primary-dark: #1d4ed8;
  --secondary-color: #10b981;
  --accent-color: #f59e0b;
}
```

#### Update Meta Tags
Edit `index.html` to customize:
- Page title and description
- Keywords
- Social media information
- Structured data

## Project Structure

```
school-website/
├── public/              # Static assets
│   ├── favicon.svg     # Site favicon
│   └── icons.svg       # Icon sprites
├── src/
│   ├── App.jsx         # Main React component
│   ├── App.css         # Component styles
│   ├── index.css       # Global styles & variables
│   └── main.jsx        # Entry point
├── index.html          # HTML template with SEO/AI meta tags
├── package.json        # Dependencies and scripts
└── vite.config.js      # Vite configuration
```

## Performance Features

- ⚡ Fast builds with Vite
- 📦 Optimized bundle sizes
- 🎯 Code splitting ready
- 🔗 Preconnect to external resources
- 💾 Efficient CSS with custom properties
- 🚀 Lazy loading ready

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is proprietary and intended for use by Lincoln Elementary School.

## Contact

For questions or support, contact the web development team.
