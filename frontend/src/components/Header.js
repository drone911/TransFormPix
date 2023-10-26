import React, { useEffect, useState } from 'react';
import './Header.css';

function Header() {

    const [hue, setHue] = useState(0);

    useEffect(() => {
        const hueInterval = setInterval(() => {
            setHue(currHue => (currHue + 1) % 360);
        }, 100)

        return () => {
            clearInterval(hueInterval);
        }
    }, []);

    return (
        <header style={{ backgroundColor: `hsl(${hue}, 100%, 65%)` }}>
            <p className='header-text'>
                <span className='header-start-text'>Transform</span><span style={{ color: `hsl(${(hue + 180) % 360}, 100%, 50%)` }}>Pix</span>
            </p>
        </header>
    )
}

export default Header;