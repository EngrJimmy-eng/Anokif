Anokif Express Website

A modern, responsive logistics and express services website built with React. The application presents Anokif's services, company information, contact channels, logistics operations, and location information through an interactive and visually focused web experience.

🚀 Overview

Anokif Express is a frontend web application designed to provide a professional online presence for a logistics and express services business.

The website combines responsive layouts, service sections, image/video carousels, interactive maps, and structured navigation to showcase logistics services across different transportation and warehousing operations.

✨ Features

- Responsive React-based user interface
- Professional navigation and footer
- Hero section with visual presentation
- Company/about section
- Logistics and express service presentation
- Services page
- Contact page
- Interactive contact map using Leaflet
- Image and video carousel components
- Responsive service and content sections
- React Icons for interface elements
- Client-side routing with React Router
- Netlify deployment configuration
- SPA fallback routing for deployed pages

🛠️ Technology Stack

Frontend

- React 19
- JavaScript (ES6+)
- React Router
- React Bootstrap
- Bootstrap 5
- React Icons
- Keen Slider
- Leaflet
- React Leaflet
- CSS

Testing

The project includes the React Testing Library ecosystem for frontend testing:

- Testing Library React
- Testing Library DOM
- Testing Library Jest DOM
- Testing Library User Event

Deployment

- Netlify
- Node.js 20 build environment
- Create React App production build

🏗️ Application Structure

The application is organized into reusable React components and page-level components.

Anokif/
├── public/
│   ├── _redirects
│   ├── anokiflogo2.png
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── lorry.jpg
│   ├── planeoffloading2.jpeg
│   ├── warehouse.jpg
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│   ├── assets/
│   │   ├── plane.jpg
│   │   ├── ship.jpg
│   │   └── warehouse.jpg
│   │
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── ContactMap.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── OurServices.jsx
│   │   ├── SecondCarousel.jsx
│   │   ├── VideoCarousel.jsx
│   │   ├── VideoCarousel.css
│   │   └── WhatWeDo.jsx
│   │
│   ├── pages/
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Footer.js
│   │   ├── Home.js
│   │   └── Services.js
│   │
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
│
├── .gitignore
├── netlify.toml
├── package.json
├── package-lock.json
└── README.md

🧩 Main Pages

Home

The home page provides the primary introduction to the company and brings together major visual and service sections.

Services

Presents the logistics and express services offered by the organization.

About

Provides information about the company and its operations.

Contact

Provides contact information and an interactive map for location-based information.

🧱 Reusable Components

The project separates major interface sections into reusable components, including:

- "Navbar"
- "Hero"
- "About"
- "OurServices"
- "WhatWeDo"
- "Contact"
- "ContactSection"
- "ContactMap"
- "SecondCarousel"
- "VideoCarousel"
- "Footer"

This component-based architecture makes the interface easier to maintain and extend.

🗺️ Interactive Map

The contact experience integrates Leaflet through React Leaflet to provide an interactive map component.

This allows the website to present location information directly within the application rather than relying solely on static address information.

🎞️ Visual Content

The application uses logistics-related imagery and carousel components to create a visually engaging presentation.

Assets include imagery representing:

- Air transportation
- Shipping
- Warehousing
- Logistics operations
- Transportation vehicles

Keen Slider is used for carousel functionality, while dedicated CSS is used for video carousel presentation.

🔀 Routing

The application uses React Router for client-side navigation.

Current routes include:

/
 /services
 /contact
 /about

Because this is a single-page React application, Netlify is configured to redirect application routes back to "index.html".

☁️ Deployment

The project includes a "netlify.toml" configuration for production deployment.

[build]
  command = "npm run build"
  publish = "build"

[build.environment]
  NODE_VERSION = "20"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

This configuration:

- Builds the application using "npm run build"
- Publishes the generated "build" directory
- Uses Node.js 20 for the build environment
- Enables SPA routing on Netlify

💻 Local Development

Prerequisites

Make sure you have:

- Node.js 20 or compatible modern Node.js version
- npm

Installation

Clone the repository:

git clone https://github.com/EngrJimmy-eng/Anokif.git
cd Anokif

Install dependencies:

npm install

Start the development server:

npm start

The application will normally be available at:

http://localhost:3000

🏭 Production Build

Create an optimized production build with:

npm run build

The production files are generated inside:

build/

🧪 Testing

Run the project's test suite with:

npm test

The project includes Testing Library packages for building and testing React components and user interactions.

📦 Available Scripts

Command| Purpose
"npm start"| Start the development server
"npm test"| Run the test suite
"npm run build"| Create a production build
"npm run eject"| Eject from Create React App configuration

«"npm run eject" is an irreversible Create React App operation and is generally unnecessary unless direct configuration control is required.»

🔐 Engineering Considerations

The project follows several frontend engineering practices:

- Component-based React architecture
- Separation of pages and reusable components
- Client-side routing
- Externalized deployment configuration
- Responsive UI development
- Reusable visual components
- Dedicated CSS files where required
- Interactive map integration
- Production build configuration

📈 Future Improvements

Potential future improvements include:

- Automated CI/CD pipeline
- Automated dependency and security scanning
- End-to-end testing with Playwright
- Performance optimization and Lighthouse monitoring
- Accessibility improvements and automated accessibility testing
- Progressive Web App enhancements
- Image optimization and lazy loading
- SEO improvements
- Docker-based deployment
- Infrastructure-as-Code deployment
- Production monitoring and observability

👨‍💻 Developer

Ikenna Ndumele

Computer Engineering | Full-Stack Development | DevOps | Cloud Engineering

GitHub: EngrJimmy-eng

📄 License

This project is maintained as part of the developer's professional portfolio and project showcase.
