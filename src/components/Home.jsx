import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './home.css';

function Home() {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current.textContent;
    textRef.current.innerHTML = `<span class='text-block'>${text}</span>`; // Wrap the entire text in a span
    
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    
    tl.fromTo(
      ".text-block",
      { opacity: 0, x: -300 },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power3.out",
      }
    ).to(
      ".text-block",
      {
        opacity: 0,
        x: 300,
        duration: 2,
        ease: "power3.in",
      }
    );
  }, []);

  return (
    <div className="banner">
      <section id="home">
        <h1 ref={textRef} style={{ color: "white" }}>
          Hi, I'm Alen Joy, a passionate developer
        </h1>
      </section>
    </div>
  );
}

export default Home;
