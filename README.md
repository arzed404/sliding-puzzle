# 🧩 Next.js Puzzle Game with Tailwind CSS and Flowbite

Welcome to the Next.js Puzzle Game project! This project is a classic sliding puzzle game built with Next.js, TypeScript, Tailwind CSS, and Flowbite. The objective is to arrange numbered blocks from 1 to 8 in order by clicking them or using the arrow keys to move them into the empty space.

## 🚀 Features

- **Interactive Puzzle Game**: Move blocks by clicking or using arrow keys.
- **Move Counter**: Tracks the number of moves made.
- **Timer**: Tracks the time taken to solve the puzzle.
- **Leaderboard**: Displays the best scores with move counts and times.
- **Responsive Design**: Built with Tailwind CSS and Flowbite for a modern, responsive interface.

## 🛠️ Setup & Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/nextjs-puzzle-game.git
   cd nextjs-puzzle-game
   
2. **Install Dependencies**

   ```bash
    npm install
   
3. **Configure Tailwind CSS**

   Make sure you have the following configurations:

   - `tailwind.config.js`

     ```javascript
     /** @type {import('tailwindcss').Config} */
     module.exports = {
       content: [
         "./src/pages/**/*.{js,ts,jsx,tsx}",
         "./src/components/**/*.{js,ts,jsx,tsx}",
         "node_modules/flowbite/**/*.{js,jsx,ts,tsx}"
       ],
       theme: {
         extend: {},
       },
       plugins: [
         require('flowbite/plugin')
       ],
     }
     ```

   - `src/styles/globals.css`

     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;

     @import 'flowbite';
     ```
     
4. **Run the Development Server**

   ```bash
   npm run dev

#Live Demo

<a href="" target="_blank">Demo</a>

## Enjoy the game! 🎮✨