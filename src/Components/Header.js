import React from 'react'

export default function Header() {
  return (

            <div>
              <div className="svg-container">
                {/* I crated SVG with: https://codepen.io/anthonydugois/pen/mewdyZ */}
                <svg viewBox="0 0 800 400" className="svg">
                  <path id="curve" fill="#50c6d8" d="M 800 300 Q 400 350 0 300 L 0 0 L 800 0 L 800 300 Z">
                  </path>
                </svg>
              </div>
              <header>
                <h1>This is a header title</h1>
                <h3>Here you are, scroll down.</h3>
              </header>
              <main>
                <p>And the main section.</p>
              </main>
              <footer>
                <p>And, the footer.</p>
                <small>🕷 Wish you luck, <a href="http://armantaherian.com">Arman</a>.</small>
              </footer>
            </div>
          );
        }
      
