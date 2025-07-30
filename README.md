# 🖥️ Retro Portfolio - Desktop Computer Theme

A stunning retro-styled portfolio website featuring a desktop computer interface with boot sequence, interactive navigation, and project showcases. Built with vanilla HTML, CSS, and JavaScript with full mobile responsiveness.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![HTML](https://img.shields.io/badge/HTML-5-orange) ![CSS](https://img.shields.io/badge/CSS-3-blue) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

## 🌟 Features

### 🎮 Interactive Desktop Experience
- **Realistic Boot Sequence**: Complete BIOS simulation with loading animations
- **Power Button**: Functional shutdown/startup system
- **Retro Monitor Design**: Authentic CRT monitor styling with scanlines
- **Animated Background**: Floating particles and circuit patterns

### 🚀 Navigation & UX
- **Keyboard Navigation**: Full keyboard support with shortcuts ([P], [A], [C], [R])
- **Arrow Key Navigation**: Navigate through projects with ↑↓ keys
- **Mouse & Touch Support**: Fully responsive across all devices
- **ESC Key Support**: Exit from any page or modal

### 📱 Mobile Responsive
- **Touch-Friendly Interface**: Optimized touch targets (44px minimum)
- **Swipe Navigation**: Swipe up/down to navigate projects on mobile
- **Responsive Typography**: Scalable text across all screen sizes
- **Mobile-First Design**: Optimized for phones and tablets

### 💼 Project Showcase
- **Interactive Project Modals**: Click any project to see details and links
- **Multiple Link Types**: GitHub repos, live demos, Telegram bots
- **Keyboard Selection**: Use ENTER to open focused projects
- **Smooth Animations**: Hover effects and transitions

### 📄 Resume Integration
- **Downloadable PDF**: Direct link to resume PDF
- **Contact Links**: Clickable email, phone, LinkedIn, and GitHub links
- **Professional Layout**: Clean, readable format

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6)
- **Styling**: CSS Grid, Flexbox, Custom Animations
- **Fonts**: VT323 (Retro monospace), Courier Prime
- **Responsive**: Mobile-first approach with breakpoints
- **Icons**: Custom ASCII-style icons

## 🚀 Live Demo

Visit the live portfolio: [Your GitHub Pages URL]

## 🎮 Usage & Navigation

### Keyboard Shortcuts
- **[P]** - Projects page
- **[A]** - About page  
- **[C]** - Contact page
- **[R]** - Resume page
- **[H]** - Home page
- **[ESC]** - Go back/Close modals
- **↑↓** - Navigate projects (on Projects page)
- **ENTER** - Select focused project

### Mouse Navigation
- Click navigation cards on home screen
- Click ESC button in top-right corner of pages
- Click projects to open detailed modals
- Click outside modals to close them

### Mobile Navigation  
- Tap navigation cards
- Swipe up/down on projects page
- Tap and hold for focus effects
- All buttons optimized for touch

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling and responsive design
├── script.js           # Interactive functionality
├── resume.pdf          # Downloadable resume
└── README.md           # Project documentation
```

## 🎨 Styling Features

### Visual Effects
- **CRT Monitor Simulation**: Authentic retro computer appearance
- **Scanline Overlay**: Realistic CRT scanline effect
- **Glitch Animations**: Text glitch effects on title
- **Floating Elements**: Animated background particles
- **Circuit Patterns**: Animated circuit line effects
- **Gradient Backgrounds**: Dynamic color shifting

### Color Scheme
- **Primary Green**: `#00ff00` (Matrix/terminal green)
- **Secondary Yellow**: `#ffff00` (Highlight color)
- **Accent Cyan**: `#00ffff` (Link color)
- **Background**: Dark gradient with blue tones
- **Text**: High contrast for readability

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🔧 Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/morakib/portfolio.git
   cd portfolio
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your preferred browser
   # Or use a local server:
   python -m http.server 8000
   # Then visit: http://localhost:8000
   ```

3. **Customize content**
   - Update personal information in `index.html`
   - Replace `resume.pdf` with your own resume
   - Modify project links in `script.js`
   - Adjust styling in `styles.css`

## 🌐 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to repository Settings
3. Navigate to Pages section
4. Select source branch (main/master)
5. Your site will be live at: `https://username.github.io/portfolio`

### Other Platforms
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect GitHub repository
- **Surge.sh**: Use surge CLI tool

## 🎯 Performance Features

- **Lightweight**: Pure vanilla JavaScript, no frameworks
- **Fast Loading**: Optimized CSS and minimal dependencies
- **Smooth Animations**: Hardware-accelerated transitions
- **Mobile Optimized**: Touch-friendly interactions
- **SEO Ready**: Semantic HTML structure

## 🔒 Browser Compatibility

- ✅ Chrome 70+
- ✅ Firefox 65+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Customization Guide

### Adding New Projects
```javascript
// In script.js, add to the project click handler:
} else if (projectTitle.includes('NEW_PROJECT')) {
    showProjectModal('New Project Name', [
        {
            icon: 'CODE',
            text: 'View Source Code',
            url: 'https://github.com/username/repo'
        },
        {
            icon: 'LIVE',
            text: 'Live Demo',
            url: 'https://your-demo.com'
        }
    ]);
```

### Updating Personal Info
- Edit the hero section in `index.html`
- Update contact links
- Replace resume content
- Modify about page information

### Styling Modifications
- Colors: Update CSS custom properties
- Fonts: Change font imports and family declarations
- Animations: Modify keyframes and transitions
- Layout: Adjust grid and flexbox properties

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**MD. Morakib Hossain**
- 📧 Email: morakibnashit@gmail.com
- 🔗 LinkedIn: [morakib-hossain-837250255](https://linkedin.com/in/morakib-hossain-837250255)
- 🐙 GitHub: [@morakib](https://github.com/morakib)

## ⭐ Acknowledgments

- Inspired by retro computing and terminal interfaces
- VT323 font for authentic monospace styling
- CSS Grid and Flexbox for responsive layouts
- Vanilla JavaScript for performance and compatibility

---

### 🚀 Ready to impress? Launch your retro portfolio today!

*Built with ❤️ and lots of ☕ by Morakib*
