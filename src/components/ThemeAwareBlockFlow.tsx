"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import block_flow from '../../public/block_flow.png';
import block_flow_light from '../../public/block_flow_light.png';

const ThemeAwareBlockFlow = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Get initial theme
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' || 'dark';
    setTheme(savedTheme);

    // Listen for theme changes
    const handleThemeChange = () => {
      const currentTheme = document.body.dataset.theme as 'dark' | 'light' || 'dark';
      setTheme(currentTheme);
    };

    // Watch for theme attribute changes on body
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          handleThemeChange();
        }
      });
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    // Initial theme set
    handleThemeChange();

    return () => {
      observer.disconnect();
    };
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return <div style={{ width: '100%', height: '200px', backgroundColor: '#f0f0f0' }} />;
  }

  return (
    <div style={{ margin: '40px 0', textAlign: 'center' }}>
      <Image
        src={theme === 'dark' ? block_flow : block_flow_light}
        alt="Block flow diagram showing EIP-1559 fee structure"
        priority={false}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
    </div>
  );
};

export default ThemeAwareBlockFlow;
