import React from 'react'
import User from '../components/User'
import Trending from '../components/Trending'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import image from '../assets/Avatar.png'
import { useDispatch, useSelector } from 'react-redux'
import { removeLiked } from '../REDUX/Slices/likedquoteSlice'


const Liked = () => {
  const liked = useSelector(state => state.likedquoteReducer)
  const dispatch=useDispatch()

  return (
    <>
      <div className='px-3'>
        <Header />
        <Row >
          <Col lg={3} ><User /></Col>
          <Col lg={6} className='border border-top-0 border-secondary h-50'>
            <Row >
              <div >
                {
                  liked?.map((quote,index) => (
                    <div key={index} className='d-flex border-bottom border-secondary pt-4'>
                      <div>
                        <img src={image} />
                      </div>
                      <div className='ps-3' >

                        <h6 style={{ fontSize: '16px' }}>{quote?.author}</h6>
                        <h6 className='text-white' style={{ fontSize: '15px' }}>{quote?.content}</h6>

                        <button onClick={() => dispatch(removeLiked(quote?._id))} className='btn border-0 pe-1 ps-1 '><i className="fa-solid fa-heart text-danger "></i></button>
                        <button className='btn border-0 pe-1 '><i className="fa-regular fa-comment"></i></button>
                        <button className='btn border-0 '><i className="fa-regular fa-paper-plane"></i></button>
                        <p className='pt-2' style={{ fontSize: '13px' }}>wisdom . love</p>
                      </div>
                    </div>
                  ))
                }


              </div>
            </Row>
          </Col>
          <Col lg={3} className=' border-secondary'><Trending /></Col>
        </Row>

      </div>
    </>
  )
}

export default Liked