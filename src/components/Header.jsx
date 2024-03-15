import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import rightinfos from '../assets/RighInfos.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Trending from '../components/Trending';



const Header = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Row className=' text-white'>
                <Col lg={3} className='border-end border-bottom border-secondary text-center pb-2 pt-1 fs-4'>Quotverse</Col>
                <Col lg={6} className='border-end border-bottom border-secondary pt-2' style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Link to={'/'}>
                        <button className='btn  border-0'><i className="fa-solid fa-house fs-5 text-white"></i></button>

                    </Link>
                    <Link to={'/liked'}>
                        <button className='btn border-0'><i className="fa-solid fa-heart text-secondary fs-5"></i></button>

                    </Link>
                </Col>
                <Col onClick={handleShow} placement={'end'} lg={3} className=' border-bottom border-secondary pt-3' style={{ textAlign: 'right' }}><img src={rightinfos} alt="" /></Col>
            </Row>




            <Offcanvas show={show} onHide={handleClose} placement={'end'}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Trending />
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Header