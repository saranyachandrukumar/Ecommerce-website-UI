import React from 'react';
import './navbaritem.css';
import './homepage.css';
import { Container, Row } from 'react-bootstrap';
import { ArrowLeftShort } from 'react-bootstrap-icons';
import desktop from './desktop.png';
import tablet from './tablet.png';
import phone from './phone.png';
import github from './github.jpg';
import { Download } from 'react-bootstrap-icons';

const Navone = () => {

  const [isDesktopHovered, setIsDesktopHovered] = React.useState(false);

  const handleImageClick = (device) => {
    console.log(`Clicked on ${device}`)
  }
  const handleGitHubClick = () => {
    window.open('https://github.com', '_blank');
  };
  const handleDownloadClick = () => {
    window.open('cv-saranya.docx');


  };

  return (
    <Container fluid style={{ marginTop: '-2rem' }}>
      <Row>
        <div className="container">
          <ArrowLeftShort size={20} className='mt-5' />
          <div className="text">Overview page</div>
          <div
            onClick={() => handleImageClick('Desktop')}
            className={`clickable ${isDesktopHovered ? 'desktop-hover' : ''}`}
            onMouseEnter={() => setIsDesktopHovered(true)}
            onMouseLeave={() => setIsDesktopHovered(false)}
          >
            <img src={desktop} alt="desktop" className="desktop" title="Desktop View" />
          </div>
          <div onClick={() => handleImageClick('Tablet')} className="Clickable">
            <img src={tablet} alt="tablet" className="tablet" title="Tablet View" />
          </div>
          <div onClick={() => handleImageClick('Phone')} className="Clickable">
            <img src={phone} alt="phone" className="phone" title="Phone View" />
          </div>
          <button className="github-button" onClick={handleGitHubClick}>
            <img src={github} alt="github" className="githublogo" />
            <button className="downloadfile" onClick={handleDownloadClick}>
              <Download size={15} style={{ marginRight: '8px' }} />
              Free Download
            </button>
          </button>
        </div>
      </Row>
    </Container>

  );
};

export default Navone;