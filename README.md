
## Features

✨ **AI-Powered Tools** - Get intelligent content suggestions to enhance your resume  
�� **Multiple Professional Templates** - Choose from Modern, Classic, Minimal, or Creative designs  
⚡ **Real-Time Preview** - See your resume update instantly as you type  
📄 **PDF Export** - Download your resume as a high-quality PDF  
📱 **Responsive Design** - Works perfectly on all devices  
🎯 **ATS-Friendly** - Optimized for Applicant Tracking Systems

## Screenshots

### Landing Page
Professional landing page with hero section and feature highlights

#### Desktop View (MacBook)
![Landing Page - MacBook](https://github.com/user-attachments/assets/db4bfc6e-705d-4c45-836d-ad526d1bf182)

#### Mobile View (iPhone)
![Landing Page - iPhone](https://github.com/user-attachments/assets/51bcfe71-3705-4d04-9915-46d5d3dc3f68)

### Resume Builder Interface
Intuitive form-based builder with live preview

#### Desktop View (MacBook)
![Resume Builder - MacBook](https://github.com/user-attachments/assets/07733b12-d69d-4592-a8bd-16e3c2cbf1c9)

#### Mobile View (iPhone)
![Resume Builder - iPhone](https://github.com/user-attachments/assets/96b92b3c-115f-468a-8709-050376d8a9dd)

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for modern, responsive styling
- **Lucide React** for beautiful icons
- **jsPDF & html2canvas** for PDF generation

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/OnlyMaxon/Ai-Resume.git
cd Ai-Resume
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Usage

1. **Landing Page**: Start on the professional landing page showcasing features
2. **Get Started**: Click "Get Started" to access the resume builder
3. **Fill Your Information**: 
   - Personal Information (name, email, phone, location, etc.)
   - Work Experience (company, position, dates, description)
   - Education (institution, degree, field, GPA)
   - Skills (with proficiency levels)
4. **Choose Template**: Select from 4 professional templates
5. **Real-Time Preview**: Watch your resume update live
6. **Download**: Export your resume as a PDF

## Available Templates

1. **Modern** - Clean design with blue accents and skill bars
2. **Classic** - Traditional black and white format
3. **Minimal** - Elegant, minimalist design with ample whitespace
4. **Creative** - Colorful gradient-based design with rounded sections

## Development

### Project Structure

```
src/
├── components/
│   ├── LandingPage.tsx      # Landing page component
│   ├── ResumeBuilder.tsx    # Main builder interface
│   ├── ResumeForm.tsx       # Form for resume data entry
│   └── ResumePreview.tsx    # Live preview with templates
├── types.ts                  # TypeScript type definitions
├── App.tsx                   # Main app component
└── index.css                 # Global styles with Tailwind
```

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

MIT License - feel free to use this project for your own purposes!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ for job seekers worldwide
