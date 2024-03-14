import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import home from '../assets/Vector.png'
import likes from '../assets/Likes.png'
import rightinfos from '../assets/RighInfos.png'
import { Link } from 'react-router-dom';

const Header = () => {
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

                    </Link>                </Col>
                <Col lg={3} className=' border-bottom border-secondary pt-3' style={{ textAlign: 'right' }}><img src={rightinfos} alt="" /></Col>
            </Row>
        </div>
    )
}

export default Header