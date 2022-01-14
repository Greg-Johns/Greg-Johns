import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { keyframes } from '@emotion/react'

const ToggleButton = styled.button`
  --toggle-width: 30px;
  --toggle-height: 30px;
  --toggle-padding: 2px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 28px;
  height: 28px;
  border-radius: calc(var(--toggle-width) / 2);
  cursor: pointer;
  background: var(--color-bg-toggle);
  background: #e2e2e2;
  transition: background 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
  &:focus {
    outline-offset: 5px;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
  &:hover {
    box-shadow: 0 0 5px 2px var(--color-bg-toggle);
  },
`;

const ThemeToggle = () => {
  const [activeTheme, setActiveTheme] = useState(null);
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";
  const [moonSize, setMoonSize] = useState(0);

  useEffect(() => {
    setActiveTheme(document.body.dataset.theme); // This is be executed when `loading` state changes
  }, []);

const bigMoon = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1.46);
  }
`;

  const Circle = styled.span`
    position: relative;
    border-radius: 100%;
    width: 1.8rem;
    height: 1.8rem;
    background: linear-gradient(40deg, #ff8100,#fbff00 70%);
    margin: auto;
  `;

  const Crecent = styled.span`
    position: absolute;
    border-radius: 100%;
    right: 0;
    width: 1rem;
    height: 1rem;
    background: var(--color-bg-primary);
    transform: scale(${moonSize});
    transform-origin: top right;
    animation: ${bigMoon} .4s ease;
    transition: transform .6s cubic-bezier(0.645, 0.045, 0.355, 1);
  `;

  const setTheme = () => {
    inactiveTheme === 'dark' ? setMoonSize(1.46) : setMoonSize(0)
    setActiveTheme(inactiveTheme);
  };

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);

  return (
    <Circle
      aria-label={`Change to ${inactiveTheme} mode`}
      title={`Change to ${inactiveTheme} mode`}
      type="button"
      onClick={() => setTheme()}
    > 
      <Crecent />
    </Circle>
  );
};

export default ThemeToggle;
