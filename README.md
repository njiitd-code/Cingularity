# Cingularity Aerospace™ Website

A modern, professional aerospace company website built with React and Express.js. Features include product showcases, company information, and an inquiry management system designed for defense contractors and investors.

## 🚀 Features

- **Modern Defense Contractor Aesthetics**: Professional design with aerospace blue theme
- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Product Portfolio**: Comprehensive showcase of UAV and aerospace solutions
- **Inquiry Management**: Contact form with backend inquiry processing
- **Performance Optimized**: Fast loading with modern web technologies
- **SEO Friendly**: Optimized meta tags and structure

## 🛠️ Technology Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **Wouter** for routing
- **TanStack Query** for state management

### Backend
- **Express.js** with TypeScript
- **Drizzle ORM** for database operations
- **Zod** for validation
- **In-memory storage** for development

## 📋 Prerequisites

Before running this project locally, ensure you have:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Git** (to clone the repository)

## 🚀 Local Installation & Setup

### 1. Download the Project

If you have access to the source code, download or clone it to your local machine:

```bash
# If cloning from a repository
git clone <repository-url>
cd cingularity-aerospace

# Or if you have a downloaded folder
cd path/to/cingularity-aerospace
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

The application will start on `http://localhost:5000`

### 4. Build for Production

To create an optimized production build:

```bash
npm run build
```

## 🌐 Production Deployment

### Option 1: Node.js Server
1. Build the project: `npm run build`
2. Start the production server: `npm start`
3. Access at `http://localhost:5000`

### Option 2: Static Hosting (Netlify, Vercel)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting provider
3. Configure the backend separately if needed

### Option 3: Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5000
CMD ["npm", "start"]
```

## 📁 Project Structure

```
cingularity-aerospace/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utilities and configurations
│   │   └── hooks/          # Custom React hooks
│   └── index.html
├── server/                 # Backend Express application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Data storage layer
│   └── vite.ts           # Vite integration
├── shared/                # Shared types and schemas
│   └── schema.ts
├── package.json
└── README.md
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
NODE_ENV=production
PORT=5000
```

### Database Configuration
The project uses in-memory storage by default. To use PostgreSQL:

1. Install PostgreSQL dependencies
2. Update `server/storage.ts` to use database connection
3. Configure database URL in environment variables

## 🎨 Customization

### Brand Colors
Edit `client/src/index.css` to modify the color scheme:

```css
:root {
  --aerospace-blue: hsl(217, 91%, 60%);
  --amber-accent: hsl(43, 96%, 56%);
  --slate-gray: hsl(215, 13%, 65%);
}
```

### Content Updates
- Company information: `client/src/pages/home.tsx`
- Product details: Update the product cards in the homepage
- Contact information: Modify the contact section

### Adding New Pages
1. Create new component in `client/src/pages/`
2. Add route in `client/src/App.tsx`
3. Update navigation in the homepage

## 🔗 API Endpoints

- `POST /api/inquiries` - Submit new inquiry
- `GET /api/inquiries` - Get all inquiries (admin)
- `GET /api/inquiries/:id` - Get specific inquiry

## 📱 Mobile Optimization

The website is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚀 Performance Features

- **Lazy Loading**: Images and components load on demand
- **Code Splitting**: Optimized bundle sizes
- **Caching**: Efficient caching strategies
- **Compression**: Gzip compression enabled

## 🔒 Security Features

- Input validation with Zod schemas
- CORS protection
- SQL injection prevention
- XSS protection

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill process on port 5000
   npx kill-port 5000
   ```

2. **Node modules issues**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Build failures**
   ```bash
   # Clear cache and rebuild
   npm run clean
   npm run build
   ```

## 📞 Support

For technical support or customization requests:
- Email: contact@cingularity.in
- Phone: +91 9886171088

## 📄 License

© 2025 Cingularity Aerospace™ - All Rights Reserved

---

**Built with ❤️ for Indian Aerospace & Defense**