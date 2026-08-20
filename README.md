# KODR Bootcamp Landing Page

A modern landing page built for the KODR Bootcamp. The main focus of this project was to create a clean, responsive and interactive experience instead of just a static landing page.

The page includes different sections for the bootcamp, instructors, student growth, pricing, FAQs and other important information.

## What I Used

- React.js
- Vite
- Tailwind CSS
- GSAP
- ScrollTrigger
- Swiper.js
- React Icons
- Vercel

## Main Features

- Fully responsive design
- Dark themed UI
- GSAP animations and interactions
- Scroll based animations
- Magnetic card hover effects
- Interactive instructor slider
- Swiper Coverflow effect
- FAQ accordion
- Responsive pricing section
- Growth comparison section
- Reusable components
- Separate data files for dynamic content

## Animations

I used GSAP for most of the interactive animations on the page.

Some of the animations include:

- Cards appearing on scroll
- Mouse movement based card animation
- Magnetic hover effect
- 3D card tilt
- Floating background elements
- Smooth hover transitions

The instructor section uses Swiper.js with the Coverflow effect to give the cards a 3D carousel look.

## Project Structure

```text
src
├── assets
│   ├── images
│   └── svgs
│
├── components
│   ├── Button.jsx
│   ├── GrowthComparison.jsx
│   ├── Instructors.jsx
│   ├── InstructorSwiperCard.jsx
│   └── ...
│
├── data
│   ├── growthComparisonData.js
│   ├── instructorsData.js
│   └── ...
│
├── App.jsx
├── main.jsx
└── index.css