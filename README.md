# Franklin University DataFest Website

This repository contains the source code for Franklin University's DataFest website, built with Eleventy (11ty) and modern web technologies. The website provides comprehensive information about the annual ASA DataFest competition, featuring event details, registration, and past winners.

## 🎯 Quick Start

```bash
# Clone the repository
git clone https://github.com/Jiang-Li/datafest_website.git
cd datafest_website

# Install dependencies
npm install

# Start development server
npm run serve   # Site will be available at http://localhost:8080

# Build for production
npm run build   # Output will be in _site directory
```

## 🏗 Project Structure

```
datafest_website/
├── src/                  # Source files
│   ├── _includes/       # Templates and layouts
│   │   └── base.njk    # Base template with nav and footer
│   ├── styles/         # CSS files
│   │   └── main.css   # Main stylesheet
│   ├── images/        # Image assets
│   ├── index.md       # Homepage
│   ├── faq.md         # FAQ page
│   ├── contact.md     # Contact page
│   └── post-events.md # Past events page
├── _site/              # Generated site (not in repo)
├── .eleventy.js       # Eleventy configuration
├── package.json       # Dependencies and scripts
└── README.md         # This file
```

## 🛠 Technical Stack

- **Static Site Generator**: [Eleventy](https://www.11ty.dev/) (11ty) v2.0.1
- **Templating**: Nunjucks
- **Styling**: Modern CSS with Custom Properties, Grid, and Flexbox
- **Development**:
  - Node.js
  - npm for package management
  - Git for version control

## 📱 Features

### Content Management
- Markdown-based content
- Nunjucks templates for layouts
- Automated date handling
- SEO-optimized meta tags

### User Interface
- Responsive navigation
- Modern hero sections
- Card-based content layout
- Interactive timeline
- Mobile-first design
- Accessible components

### Performance
- Optimized asset loading
- Minimal JavaScript usage
- Efficient CSS organization
- Fast build times

## 🔧 Development

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

### Local Development
1. Start the development server:
   ```bash
   npm run serve
   ```
2. Make changes to files in `src/` directory
3. The browser will automatically reload

### Build Process
1. Run the production build:
   ```bash
   npm run build
   ```
2. Test the built site in `_site/` directory
3. Deploy the contents of `_site/`

### Common Tasks
- **Update Content**: Edit markdown files in `src/`
- **Modify Styles**: Update `src/styles/main.css`
- **Change Layout**: Edit `src/_includes/base.njk`
- **Add Images**: Place in `src/images/` directory

## 🔍 SEO & Performance

The website implements several SEO best practices:
- Semantic HTML structure
- Meta descriptions and keywords
- Open Graph tags
- Responsive images
- Fast loading times
- Mobile-friendly design

## 📝 Content Guidelines

### Adding New Pages
1. Create a new `.md` file in `src/`
2. Add front matter with layout and title
3. Write content in Markdown
4. Update navigation if needed

### Updating Event Information
- Event dates in `src/index.md`
- Past winners in `src/post-events.md`
- FAQ updates in `src/faq.md`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

Copyright © 2024 Franklin University. All rights reserved.

## 📞 Contact

For questions about the website or DataFest:
- Visit our [contact page](https://your-website-url/contact)
- Email the Computer Science department
- Check the [FAQ page](https://your-website-url/faq) for common questions 