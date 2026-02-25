# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Franklin University DataFest website - a static site built with [Eleventy (11ty)](https://www.11ty.dev/). Content is managed through Markdown files with Nunjucks templating for layouts.

## Common Commands

```bash
# Development (live reload at http://localhost:8080)
npm run serve

# Production build (with minification)
npm run build:prod
# Regular build (no optimizations)
npm run build

# Clean build output
npm run clean

# Debug mode
npm run debug
```

## Architecture

### Directory Structure
```
src/
├── _includes/base.njk    # Main layout template (nav, footer, head)
├── styles/main.css       # Global stylesheet
├── images/               # Image assets (auto-optimized during build)
├── index.md              # Homepage
├── faq.md                # FAQ page
├── contact.md            # Contact page
└── post-events.md        # Past events/winners

_site/                    # Build output (not in repo)
```

### Template System

**Base Template** (`src/_includes/base.njk`):
- Provides consistent layout with navigation, footer, and SEO meta tags
- Contains conditional path handling for root vs. subdirectory pages
- Uses `{{ content | safe }}` to inject page content
- Navigation links update based on `page.url`

**Path Handling**: The template uses `{% if page.url == "/" %} ... {% else %} ... {% endif %}` to handle relative paths correctly for root (`href="styles/main.css"`) vs. nested pages (`href="../styles/main.css"`).

### Content Files

All pages use front matter with `layout` and `title`:
```yaml
---
layout: base
title: Page Title
---
```

### Custom Filters (defined in `.eleventy.js`)

- `formatDate` - Format dates as "Month Day, Year"
- `currentDate` - Current date in Eastern Time
- `cssmin` - Minify CSS in production only

### Build Optimizations (production only)

- HTML minification via `html-minifier`
- CSS minification via `clean-css`
- Image optimization via Sharp (resize to max 1200px, 80% quality)

## Code Style (from .cursorrule)

- **Prefer Markdown** for content over HTML
- Use HTML only for: complex layouts, interactive elements, custom styling
- **Indent**: 2 spaces
- **Quotes**: Single quotes
- **Line length**: 80 characters

## Content Management

- **Add new page**: Create `.md` in `src/` with front matter (`layout: base`, `title`)
- **Update styles**: Edit `src/styles/main.css`
- **Modify layout**: Edit `src/_includes/base.njk`
- **Add images**: Place in `src/images/` (auto-optimized)
- **Event dates**: `src/index.md`
- **Past winners**: `src/post-events.md`

## Deployment

The site uses `deploy.sh` to rsync `_site/` contents to the production server.
