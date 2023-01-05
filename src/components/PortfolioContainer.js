import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import NavTabs from './NavTabs';
import Footer from './Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

import CssStyle from '../styles/body.css'

export default function PortfolioContainer() {

    return (
        <HashRouter>
            <div>
                <NavTabs />
                <div id='container-2' style={CssStyle}>
                    <Routes>
                        {/* Define routes to render different page components at different paths */}
                        <Route
                            path="/"
                            element={<About />}
                        />
                        {/* Define a route that will take in variable data */}
                        <Route
                            path="/react-portfolio"
                            element={<About />}
                        />
                        <Route
                            path="/react-portfolio/About"
                            element={<About />}
                        />
                        <Route
                            path="/react-portfolio/Contact"
                            element={<Contact />}
                        />
                        <Route
                            path="/react-portfolio/Portfolio"
                            element={<Portfolio />}
                        />
                        <Route
                            path="/react-portfolio/Resume"
                            element={<Resume />}
                        />
                        <Route
                            path="/About"
                            element={<About />}
                        />
                        <Route
                            path="/Contact"
                            element={<Contact />}
                        />
                        <Route
                            path="/Portfolio"
                            element={<Portfolio />}
                        />
                        <Route
                            path="/Resume"
                            element={<Resume />}
                        />
                    </Routes>
                </div>
                <Footer />
            </div>
        </HashRouter>

    )
}