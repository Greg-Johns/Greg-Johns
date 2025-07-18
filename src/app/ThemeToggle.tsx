"use client"
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { keyframes } from '@emotion/react'

const ThemeToggle = () => {
  const [stat, setStat] = useState(0);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mounted, setMounted] = useState(false);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' || 'dark';
    setTheme(savedTheme);
    setStat(savedTheme === 'dark' ? 0 : 1);
  }, []);

  function toggleTheme() {
    if (!mounted) return;
    
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.body.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
    setStat(newTheme === 'dark' ? 0 : 1);
  }

  useEffect(() => {
    if (mounted) {
      document.body.dataset.theme = theme;
    }
  }, [theme, mounted]);

  // Prevent hydration mismatch
  if (!mounted) {
    return <span style={{ width: '40px', height: '40px', display: 'inline-block' }} />;
  }

  const shine = keyframes`
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(360deg);
    }
  `;

  const Span = styled.span`
    margin: .8px;
  `;

  const Svg = styled.svg`
    border-radius: 100%;
    &:hover {
      animation: shine 2s linear infinite;
    }
    opacity: ${stat};
  `;

    // opacity: ${stat};
  const Moon = styled.span`
    transform: translateZ(0);
    position: absolute;
    border-radius: 100%;
    width: 1rem;
    height: 1rem;
    margin-top: 12px;
    margin-left: 1px;
    background: var(--color-gold);
    box-shadow: 0 0 10px #ccc, inset 4px 0 0 var( --color-bg-primary);
    outline: 4px solid khaki;
    outline: 2px solid var(--color-gold);
  `;

  return (
    <Span onClick={toggleTheme}>
      <Moon />
      <Svg
        role="button"
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && toggleTheme()}
        width="40" height="40" 
        viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="sunshine" fillRule="evenodd" clipRule="evenodd" d="M21.7229 6.91293L20 0L18.2771 6.91293L14.8236 0.681488L14.9486 7.80479L10 2.67949L11.9643 9.52774L5.85786 5.85786L9.52774 11.9643L2.67949 10L7.80479 14.9486L0.681484 14.8236L6.91293 18.2771L0 20L6.91293 21.7229L0.681484 25.1764L7.80479 25.0514L2.67949 30L9.52774 28.0357L5.85786 34.1421L11.9643 30.4723L10 37.3205L14.9486 32.1952L14.8236 39.3185L18.2771 33.0871L20 40L21.7229 33.0871L25.1764 39.3185L25.0514 32.1952L30 37.3205L28.0357 30.4723L34.1421 34.1421L30.4723 28.0357L37.3205 30L32.1952 25.0514L39.3185 25.1764L33.0871 21.7229L40 20L33.0871 18.2771L39.3185 14.8236L32.1952 14.9486L37.3205 10L30.4723 11.9643L34.1421 5.85786L28.0357 9.52774L30 2.67949L25.0514 7.80479L25.1764 0.681488L21.7229 6.91293ZM20 31C26.0751 31 31 26.0751 31 20C31 13.9249 26.0751 9 20 9C13.9249 9 9 13.9249 9 20C9 26.0751 13.9249 31 20 31Z" fill="#D0B167"/>
      </Svg>
    </Span>
  );
};

export default ThemeToggle;
