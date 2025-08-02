# 🚀 Cingularity Aerospace™ - Local Deployment Guide

## Quick Start (5 Minutes)

### Prerequisites
- Node.js 18+ installed on your machine
- Git (optional, for cloning)

### Download & Run
1. **Download the project** to your local machine
2. **Open terminal/command prompt** in the project folder
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the server:**
   ```bash
   npm run dev
   ```
5. **Open browser** and go to `http://localhost:5000`

That's it! Your website is now running locally.

## 📋 Step-by-Step Instructions

### For Windows Users
1. Download and install Node.js from [nodejs.org](https://nodejs.org)
2. Extract the project folder to your desired location (e.g., Desktop)
3. Open Command Prompt or PowerShell
4. Navigate to project folder:
   ```cmd
   cd Desktop\cingularity-aerospace
   ```
5. Install dependencies:
   ```cmd
   npm install
   ```
6. Start the website:
   ```cmd
   npm run dev
   ```

### For Mac Users
1. Download and install Node.js from [nodejs.org](https://nodejs.org)
2. Extract the project folder to your desired location
3. Open Terminal
4. Navigate to project folder:
   ```bash
   cd ~/Desktop/cingularity-aerospace
   ```
5. Install dependencies:
   ```bash
   npm install
   ```
6. Start the website:
   ```bash
   npm run dev
   ```

### For Linux Users
1. Install Node.js:
   ```bash
   # Ubuntu/Debian
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # CentOS/RHEL
   curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
   sudo yum install -y nodejs
   ```
2. Extract project and navigate to folder
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the website:
   ```bash
   npm run dev
   ```

## 🌐 Making It Accessible to Others

### On Your Local Network
1. Find your computer's IP address:
   - **Windows:** `ipconfig` in Command Prompt
   - **Mac/Linux:** `ifconfig` in Terminal
2. Share the URL: `http://YOUR_IP_ADDRESS:5000`
3. Others on your WiFi can access it

### For Professional Demos
1. **Build for production:**
   ```bash
   npm run build
   npm start
   ```
2. **Use tools like:**
   - **ngrok** for temporary public URLs
   - **Heroku** for cloud hosting
   - **Vercel** for static hosting

## 🔧 Customization for Your Demo

### Update Company Information
Edit `client/src/pages/home.tsx`:
- Company statistics (line ~245)
- Product specifications
- Contact information

### Change Branding Colors
Edit `client/src/index.css`:
```css
:root {
  --aerospace-blue: hsl(217, 91%, 60%);  /* Primary blue */
  --amber-accent: hsl(43, 96%, 56%);     /* Accent color */
}
```

### Add Your Logo
Replace the text logo in `client/src/pages/home.tsx` (line ~105) with an image:
```jsx
<img src="/path/to/your/logo.png" alt="Company Logo" className="h-12" />
```

## 📱 Demo Features to Highlight

### For Investors
- **Professional Design**: Modern aerospace aesthetics
- **Statistics Dashboard**: Key metrics prominently displayed
- **Scalability**: Built with enterprise technologies

### For Defense Contractors
- **Security**: Input validation and secure architecture
- **Compliance**: Professional structure suitable for defense industry
- **Integration Ready**: API endpoints for system integration

### Technical Features
- **Responsive Design**: Works on all devices
- **Fast Performance**: Optimized loading times
- **Modern Stack**: React, TypeScript, Tailwind CSS

## 🚨 Troubleshooting

### "Command not found" errors
- Install Node.js from [nodejs.org](https://nodejs.org)
- Restart your terminal/command prompt

### Port 5000 already in use
```bash
# Change port in package.json or kill existing process
npx kill-port 5000
```

### "Permission denied" errors (Mac/Linux)
```bash
# Install dependencies with correct permissions
sudo npm install -g npm
npm install
```

### Website not loading
1. Check if server is running (should show "serving on port 5000")
2. Try `http://localhost:5000` or `http://127.0.0.1:5000`
3. Disable firewall/antivirus temporarily

## 📞 Demo Day Checklist

- [ ] Test website on demo machine beforehand
- [ ] Ensure stable internet connection
- [ ] Have backup plan (screenshots/video)
- [ ] Test contact form functionality
- [ ] Check mobile responsiveness
- [ ] Prepare talking points for each section

## 🎯 Key Selling Points for Demo

1. **Professional Grade**: Built with enterprise-level technologies
2. **Investor Ready**: Clean, modern design that impresses stakeholders
3. **Scalable Architecture**: Can grow with your business needs
4. **Mobile Optimized**: Reaches clients on any device
5. **Fast Performance**: Quick loading times enhance user experience
6. **Industry Focused**: Designed specifically for aerospace/defense sector

---

**Need help during your demo? Contact: contact@cingularity.in**