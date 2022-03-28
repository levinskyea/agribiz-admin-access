import React from 'react';
import agribiz_mobile_logo from '../components/assets/img/agribiz-mobile-p.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FileSaver from 'file-saver';

export default function DownloadApp() {

    const saveFile = () => {
        FileSaver.saveAs("/public/app-debug.apk", "agribiz.apk"
        );
    }

    return (
    <>
        <Container fluid style={{ backgroundColor: '#36590026' }}>
        <br/><br/>
            <Container>
                <Row>
                    <Col>
                        <img src={ agribiz_mobile_logo } alt="barter" style={{ width: '316px', height: '619px'}}/>
                    </Col>
                    <Col>
                        <Container fluid style={{ textAlign:'left' }}>
                        <br/>
                        <h1 style={{ fontSize: '3.5rem', fontWeight:'bold', textAlign:'left' }}>DOWNLOAD</h1>
                        <h1 style={{ fontSize: '2rem', textAlign:'left' }}>OUR APP NOW</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        
                        <Button className="custom-download-button" onClick={saveFile}>
                            Download app
                        </Button>
                        
                        </Container>
                        
                    </Col>
                </Row>
            </Container>
            <br/>
            <br/>
            <br/>
        </Container>
    </>
  );
}
