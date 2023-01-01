import React from 'react';
import Nav from 'react-bootstrap/Nav';

import githubLogo from '../components/image/291716_github_logo_social network_social_icon.png';
import linkedinLogo from '../components/image/291709_logo_linked in_social network_social_social media_icon.png';

function Footer() {
    const logoStyle = { width: '3em', height: '3em' }

    return (
        <>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="https://github.com/KatieKim22"><img src={githubLogo} style={logoStyle} alt='github' /></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='https://www.linkedin.com/in/katie-kim-cpa-ba74b047/'><img src={linkedinLogo} style={logoStyle} alt='linkedin' /></Nav.Link>
                </Nav.Item>
            </Nav>


        </>
    )
}

export default Footer;