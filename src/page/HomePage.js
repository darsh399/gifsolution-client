import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const slide = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const Hero = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, #6C63FF, #FF6584);
  color: white;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  button {
    padding: 0.8rem 1.5rem;
    background: white;
    color: #6C63FF;
    border: none;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.2rem;
    }

    p {
      font-size: 1rem;
    }

    button {
      padding: 0.6rem 1.2rem;
    }
  }
`;

const ClientSection = styled.div`
  padding: 2rem;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
  }

  .logos-wrapper {
    overflow: hidden;
  }

  .logos {
    display: flex;
    gap: 2rem;
    white-space: nowrap;
    animation: ${slide} 20s linear infinite;

    span {
      font-size: 1.2rem;
      color: #555;
      background: #f0f0f0;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      min-width: 80px;
      text-align: center;
      display: inline-block;
      white-space: normal;
    }
  }

  @media (max-width: 768px) {
    .logos {
      gap: 1rem;

      span {
        font-size: 1rem;
        min-width: 70px;
      }
    }
  }
`;


const AboutSection = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: auto;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.6;
    font-size: 1.1rem;
  }
`;

function HomePage() {
  return (
    <>
      <Hero
        as={motion.section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1>Grow Your Brand with Us</h1>
        <p>
          We help you tell your story with video, marketing, and live events.
        </p>
        <button>See Our Work</button>
      </Hero>

      <ClientSection>
        <h2>Clients We’ve Worked With</h2>
        <div className="logos-wrapper">
          <div className="logos">
            <span>Client 1</span>
            <span>Client 2</span>
            <span>Client 3</span>
            <span>Client 1</span>
            <span>Client 2</span>
            <span>Client 3</span>
          </div>
        </div>
      </ClientSection>

      <AboutSection>
        <h2>About Us</h2>
        <p>
          GIF Studios is a creative team that helps brands stand out. We work on video, marketing, and events all done with care and focus.
        </p>
      </AboutSection>
    </>
  );
}

export default HomePage;
