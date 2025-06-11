# Ambition Academy - Educational Platform

A modern, responsive React application for Ambition Academy, designed to showcase educational services and provide easy access to study materials.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Easy Navigation**: Two main pages (Home and Notes) with intuitive navigation
- **Dynamic Content**: All content managed through data files for easy updates
- **Production Ready**: Optimized for deployment on Vercel

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ambition-academy
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Navbar.jsx       # Navigation component
│   ├── Hero.jsx         # Hero section component
│   ├── Card.jsx         # Card components (Class, Faculty, Topper)
│   ├── Table.jsx        # Table components (Schedule, Notes)
│   └── Footer.jsx       # Footer component
├── data/                # Static data files
│   ├── classesData.js   # Class information
│   ├── scheduleData.js  # Schedule and fees data
│   ├── facultyData.js   # Faculty profiles
│   ├── topperData.js    # Student achievements
│   └── notesData.js     # Study materials links
├── pages/               # Page components
│   ├── Home.jsx         # Home page
│   └── Notes.jsx        # Notes page
└── App.tsx              # Main app component with routing
```

## 🎨 Customization

### Updating Content

All content is managed through data files in the `src/data/` directory:

- **Classes**: Edit `classesData.js` to update class information
- **Schedule & Fees**: Modify `scheduleData.js` for timing and pricing
- **Faculty**: Update `facultyData.js` to manage faculty profiles
- **Achievements**: Edit `topperData.js` to showcase student success
- **Study Materials**: Modify `notesData.js` to manage downloadable content

### Styling

The application uses Tailwind CSS with a custom color palette:
- Primary: Teal shades (#14B8A6)
- Secondary: Navy shades (#1E293B)
- Background: Clean whites and grays

To modify the theme, edit `tailwind.config.js`.

## 🚀 Deployment on Vercel

### Method 1: Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

### Method 2: GitHub Integration

1. Push your code to GitHub
2. Connect your GitHub account to Vercel
3. Import your repository
4. Deploy automatically

### Method 3: Drag & Drop

1. Build the project:
```bash
npm run build
```

2. Drag the `dist` folder to Vercel's deployment interface

## 📧 Configuration

### Email Integration

The application includes mailto links for:
- Contact forms
- Enrollment inquiries
- Study material requests

Update email addresses in the respective components to match your actual contact information.

### Study Materials

Update the Google Drive links in `notesData.js` with your actual study material links. Ensure the links are publicly accessible.

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🎯 SEO Optimization

The application includes:
- Semantic HTML structure
- Meta tags for search engines
- Proper heading hierarchy
- Alt tags for images
- Fast loading times

## 🔧 Troubleshooting

### Common Issues

1. **Build Errors**: Ensure all dependencies are installed with `npm install`
2. **Routing Issues**: Verify `vercel.json` is configured for SPA routing
3. **Image Loading**: Check image URLs are accessible and properly formatted

### Performance Tips

- Images are loaded from Pexels CDN for optimal performance
- Components are properly structured to avoid unnecessary re-renders
- CSS classes are optimized with Tailwind's purge functionality

## 📄 License

This project is licensed under the MIT License.

## 🤝 Support

For support and questions:
- Email: info@ambitionacademy.com
- Phone: +91 98765 43210

## 🚀 Future Enhancements

Potential features to add:
- Student login portal
- Online payment integration
- Live chat support
- Mobile app version
- Advanced analytics