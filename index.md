---
layout: home

hero:
  name: "Laravel LTE3"
  text: "Documentation"
  tagline: "Comprehensive guide for fomvasss/laravel-lte3 package"
  actions:
    - theme: brand
      text: Get Started
      link: /installation
    - theme: alt
      text: View on GitHub
      link: https://github.com/fomvasss/laravel-lte3

features:
  - title: 🎨 AdminLTE3 Integration
    details: Complete AdminLTE3 theme integration with Laravel Blade components
  - title: 📝 Rich Form Fields
    details: Extensive collection of form fields with built-in validation and styling
  - title: ⚙️ Configurable
    details: Flexible configuration system with comprehensive customization options
  - title: 🔧 JavaScript Utilities
    details: Built-in JavaScript functions for AJAX, modals, and UI interactions
---

# Laravel LTE3 — Overview

**Laravel LTE3** is a comprehensive package that provides AdminLTE3 theme integration and a rich set of Blade components, helpers, and JavaScript utilities for rapid admin panel development in Laravel.

## Quick Start

```bash
# Install the package
composer require fomvasss/laravel-lte3

# Publish configuration
php artisan vendor:publish --tag=lte3-config

# Initialize the package
php artisan lte3:install
```

## Documentation Structure

- **[Installation](/installation)** — Package installation and setup guide
- **[Configuration](/configuration)** — Configuration options (`config/lte3.php`)
- **[Fields](/fields/text)** — Complete guide to all available form fields
- **[JS API](/js-api)** — JavaScript functions and utilities
- **[Options](/options)** — Layout options and modal configurations

## Links

- 📦 **Package Repository**: [fomvasss/laravel-lte3](https://github.com/fomvasss/laravel-lte3)
- 📖 **Documentation**: [https://fomvasss.github.io/laravel-lte3-docs/](https://fomvasss.github.io/laravel-lte3-docs/)
- 🎨 **AdminLTE**: [adminlte.io](https://adminlte.io/)

> **Note**: More component examples and complete templates are available in `resources/views/vendor/lte3` after publishing views.
