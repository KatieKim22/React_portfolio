import React from 'react';

import NavTabs from './NavTabs';
import Footer from './Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

import CssStyle from '../styles/body.css'

export default function PortfolioContainer() {
    let component
    switch (window.location.pathname) {
        case '/':
            component = <About />
            break;
        case '/react-portfolio':
                component = <About />
                break;
        case '/About':
            component = <About />
            break;
        case '/Contact':
            component = <Contact />
            break;
        case '/Portfolio':
            component = <Portfolio />
            break;
        case '/Resume':
            component = <Resume />
            break;
        default:
            break;
    }

    return (
        <div>
            <NavTabs />
            <div id='container-2' style={CssStyle}>
                {component}
            </div>
            <Footer />
        </div>
    )
}