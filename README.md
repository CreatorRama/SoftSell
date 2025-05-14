# SoftSell - Software License Resale Platform

## Overview

SoftSell is a responsive, single-page marketing website for a software resale startup. The platform facilitates the buying and selling of unused software licenses, built with modern web technologies including Next.js, Tailwind CSS, and React.

![SoftSell Logo](public/logo.jpg)

## Features

### Core Features
- ✅ Responsive hero section with headline and CTA
- ✅ "How It Works" section with 3-step process
- ✅ "Why Choose Us" section with feature tiles
- ✅ Customer testimonials section
- ✅ Contact form with frontend validation

### Bonus Features
- ✨ Dark/light mode toggle
- ✨ AI-powered chat widget
- ✨ SEO optimization with meta tags
- ✨ Responsive design for all screen sizes
- ✨ Animated interactive elements

## Technologies Used

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Icons**: React Icons (Feather icons)
- **Form Handling**: React Hook Form
- **Animations**: Framer Motion (for chat widget)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm (v9 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/softsell.git
   cd softsell
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
softsell/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── ChatWidget.tsx      # AI chat component
│   ├── ContactForm.tsx     # Lead generation form
│   ├── Footer.tsx          # Site footer
│   ├── HeroSection.tsx     # Main hero banner
│   ├── HowItWorks.tsx      # Process steps
│   ├── Navbar.tsx          # Navigation bar
│   ├── Testimonials.tsx    # Customer reviews
│   └── WhyChooseUs.tsx     # Value proposition
├── public/                 # Static assets
│   └── favicon.ico         # Site favicon
├── tailwind.config.js      # Tailwind configuration
└── postcss.config.js       # PostCSS configuration
```

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to a GitHub repository
2. Create a new project in Vercel
3. Connect your GitHub repository
4. Deploy!

## Design Decisions

### Color Scheme
- Primary: Blue (#3B82F6) for CTAs
- Secondary: Indigo (#6366F1) for accents
- Neutral: Gray palette for text/backgrounds
- Dark mode: Deep gray (#111827) background

### Typography
- **Font Family**: Inter (clean, modern, highly readable)
- **Font Weights**: Regular (body), Semibold/Bold (headings)

### Layout Principles
- Mobile-first responsive design
- Consistent spacing and padding
- Card-based component design
- Max-width container for content

## Time Spent

| Task | Hours |
|------|-------|
| Planning & Setup | 1.5 |
| Hero Section | 1.5 |
| How It Works | 1 |
| Why Choose Us | 1 |
| Testimonials | 0.5 |
| Contact Form | 2 |
| Chat Widget | 3 |
| Dark Mode Implementation | 1.5 |
| Responsive Adjustments | 1.5 |
| Testing & Polishing | 2 |
| **Total** | **14.5** |

## Future Improvements

- Add user authentication
- Implement real backend API
- Add pricing calculator
- Expand chat widget capabilities
- Add more interactive animations

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Contact

If you have any questions or feedback, please reach out to:

- Email: contact@softsell.example.com
- Twitter: [@SoftSellApp](https://twitter.com/softsellapp)
