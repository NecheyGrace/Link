


# Personal Website Project

## Overview

This project is a single-page website that outlines my tech goals for the next two years. The website is built using HTML, CSS, and JavaScript, and is designed to be responsive and visually appealing. It includes key elements such as my Slack display name, current time in UTC, current day of the week, Slack email, and profile picture. Additionally, it provides links to relevant websites.

## Features

- Display Slack Display Name
- Show current time in UTC
- Show the current day of the week
- Display Slack Email
- Display Slack Profile Picture with natural dimensions
- Include links to hng.tech/learn, keyword.dog, and scrapeanyweb.site
- Fully responsive design

## Requirements

- HTML
- CSS
- JavaScript

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- Git
- GitHub CLI (gh)

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-github-username/personal-website.git
   cd personal-website
   ```

2. **Create Project Files**

   The project structure should look like this:

   ```plaintext
   personal-website/
   ├── index.html
   ├── styles.css
   └── script.js
   ```

3. **Index.html**

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>My Tech Goals</title>
       <link rel="stylesheet" href="styles.css">
   </head>
   <body>
       <header>
           <h1 data-testid="slackDisplayName">Your Slack Name</h1>
           <img src="your-profile-picture.jpg" alt="Slack Profile Picture" data-testid="slackProfilePicture">
       </header>
       <section>
           <h2>My Tech Goals for the Next 2 Years</h2>
           <ul>
               <li>Goal 1</li>
               <li>Goal 2</li>
               <li>Goal 3</li>
           </ul>
       </section>
       <footer>
           <p data-testid="currentTimeUTC">Current Time in UTC</p>
           <p data-testid="currentDay">Current Day</p>
           <p data-testid="slackEmail">Your Slack Email</p>
           <a href="https://hng.tech/learn" data-testid="hngLink">HNG Learn</a>
           <a href="https://keyword.dog" data-testid="keywordLink">Keyword Dog</a>
           <a href="https://scrapeanyweb.site" data-testid="scrapeanywebLink">Scrape Any Web</a>
       </footer>
       <script src="script.js"></script>
   </body>
   </html>
   ```

4. **Styles.css**

   ```css
   body {
       font-family: Arial, sans-serif;
       margin: 0;
       padding: 0;
       display: flex;
       flex-direction: column;
       align-items: center;
   }
   header, section, footer {
       width: 100%;
       max-width: 800px;
       padding: 20px;
       margin: 10px;
   }
   header {
       display: flex;
       flex-direction: column;
       align-items: center;
   }
   img {
       width: auto;
       height: auto;
       max-width: 100%;
       max-height: 100%;
   }
   ul {
       list-style-type: none;
       padding: 0;
   }
   footer {
       display: flex;
       flex-direction: column;
       align-items: center;
   }
   a {
       margin: 5px;
   }
   ```

5. **Script.js**

   ```javascript
   function updateDateTime() {
       const currentTimeUTC = new Date().toISOString().split('T')[1].split('.')[0];
       const currentDay = new Date().toLocaleString('en-US', { weekday: 'long' });

       document.querySelector('[data-testid="currentTimeUTC"]').textContent = `Current Time (UTC): ${currentTimeUTC}`;
       document.querySelector('[data-testid="currentDay"]').textContent = `Current Day: ${currentDay}`;
   }

   window.onload = function() {
       updateDateTime();
       setInterval(updateDateTime, 1000); // Update every second
   }
   ```

### Hosting on GitHub Pages

1. **Initialize Git Repository**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create GitHub Repository**

   ```bash
   gh repo create personal-website --public --source=. --remote=origin
   ```

3. **Push to GitHub**

   ```bash
   git branch -M main
   git push -u origin main
   ```

4. **Deploy to GitHub Pages**

   ```bash
   gh pages set up --source=main
   ```

5. **Access Your Website**

   Your website will be available at `https://<your-github-username>.github.io/personal-website`.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Contact

Please contact [nechemetu@gmail.com](mailto:nechemetu@gmail.com) for any inquiries or issues.

---

Could you replace the placeholder values with your actual details? This README provides an overview, setup instructions, file structure, and hosting steps to help users get started with your project easily.
