# Franklin University DataFest Website

This repository contains the source code for Franklin University's DataFest website. The website provides information about the annual ASA DataFest competition hosted at Franklin University, including event details, registration information, and past event highlights.

## About DataFest

ASA DataFest is a data analysis competition where teams of 2-5 undergraduate students work on analyzing a complex, real-world dataset over a weekend. The event features:
- Guidance from mentors (graduate students, faculty, and industry professionals)
- Opportunities for students to showcase their data analysis skills
- Prizes for Best Insight
- Networking opportunities with professionals in the field

## Website Features

- Event information and schedules
- Registration process details
- Past events and winners
- Contact information
- Frequently asked questions

## Technical Stack

This website is built using:
- [Eleventy](https://www.11ty.dev/) (11ty) - Static Site Generator
- Markdown for content
- Nunjucks for templating
- Basic HTML/CSS for styling

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

4. Build for production:
   ```bash
   npm run build
   ```

The development server will be available at `http://localhost:8080`.

## Project Structure

```
├── src/
│   ├── _includes/    # Template files
│   ├── images/       # Image assets
│   └── *.md         # Content pages
├── .eleventy.js     # Eleventy configuration
└── package.json     # Project dependencies
```

## Contributing

If you'd like to contribute to the website, please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is maintained by Franklin University. All rights reserved.

## Contact

For questions about DataFest at Franklin University, please visit our [contact page](https://your-website-url/contact). 