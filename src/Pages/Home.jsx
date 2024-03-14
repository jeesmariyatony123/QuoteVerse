import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Header from './Header'

import User from '../components/User';
import QuoteSection from '../components/QuoteSection';
import Trending from '../components/Trending';
import Header from '../components/Header'
function Home() {

  return (
    <>
      <div className='px-3'>
        <Header />
        <Row >
          <Col lg={3} ><User /></Col>
          <Col lg={6} className='border border-top-0 border-secondary h-50'><QuoteSection /></Col>
          <Col lg={3} className=' border-secondary'><Trending /></Col>
        </Row>

      </div>

     
    </>
  )
}

export default Home
