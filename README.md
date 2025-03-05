# Franklin University DataFest Website

This repository contains the source code for Franklin University's DataFest website. The website provides information about the annual ASA DataFest competition hosted at Franklin University, showcasing event details, registration information, and past event highlights with a modern, responsive design.

## About DataFest

ASA DataFest is a data analysis competition where teams of 2-5 undergraduate students work on analyzing a complex, real-world dataset over a weekend. The event features:
- Guidance from mentors (graduate students, faculty, and industry professionals)
- Opportunities for students to showcase their data analysis skills
- Prizes for Best Insight
- Networking opportunities with professionals in the field

## Website Features

### Content
- Modern, responsive hero sections
- Interactive timeline for event schedule
- Grid-based cards for tools and technologies
- Past events and winners showcase
- Comprehensive FAQ section
- Contact information

### Design & UI
- Franklin University brand colors
- Modern, responsive navigation
- Card-based content layout
- Timeline components
- Mobile-first approach
- Accessible design elements
- SEO optimization

## Technical Stack

- [Eleventy](https://www.11ty.dev/) (11ty) - Static Site Generator
- Nunjucks for templating
- Modern CSS with CSS Grid and Flexbox
- Responsive images
- Mobile-first design principles

## Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Jiang-Li/datafest_website.git
   cd datafest_website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run serve
   ```
   The development server will be available at `http://localhost:8080`

4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
├── src/
│   ├── _includes/    # Template files and layouts
│   │   └── base.njk  # Base template with navigation and footer
│   ├── styles/       # CSS styles
│   │   └── main.css  # Main stylesheet
│   ├── images/       # Image assets
│   └── *.md         # Content pages (index, faq, etc.)
├── .eleventy.js     # Eleventy configuration
├── .gitignore       # Git ignore configuration
└── package.json     # Project dependencies and scripts
```

## Key Features Implementation

### Responsive Navigation
- Fixed navigation bar with logo
- Mobile-friendly menu
- Prominent registration button
- Smooth transitions

### Modern UI Components
- Hero sections with dual-button layout
- Card grid system for content organization
- Timeline component for event schedule
- Footer with quick links and resources

### Styling
- CSS custom properties for theming
- Responsive typography
- Grid and Flexbox layouts
- Animation and transitions
- Mobile-first media queries

## Development Workflow

1. Content updates: Modify markdown files in `src/`
2. Style changes: Update `src/styles/main.css`
3. Layout modifications: Edit templates in `src/_includes/`
4. Test locally using `npm run serve`
5. Build for production using `npm run build`

## Contributing

To contribute to the website:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is maintained by Franklin University. All rights reserved.

## Contact

For questions about DataFest at Franklin University, please visit our [contact page](https://your-website-url/contact) or reach out to the Computer Science department. 