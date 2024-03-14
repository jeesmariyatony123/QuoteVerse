import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from '../assets/Avatar.png'


import User from '../components/User';
import Trending from '../components/Trending';
import Header from '../components/Header'
import { Container } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { fetchTagQuotes } from '../REDUX/Slices/tagSlice';
import { Link } from 'react-router-dom';


const QuotesList = () => {
    const dispatch = useDispatch()
    const { allTagQuotes, error, loading } = useSelector((state) => state.tagReducer)

    const [tagsAre, setTagsAre] = useState([])
    


    useEffect(() => {
        dispatch(fetchTagQuotes())
        const updatedList = allTagQuotes.map((list) => list)
        setTagsAre(updatedList)
    }, [])

    const handleFilter=()=>{

    }
    return (
        <>
            <div className='px-3'>
                <Header />
                <Row >
                    <Col lg={3} ><User /></Col>
                    <Col lg={6} className='border border-top-0 border-secondary h-50'>
                        <Row >
                            <div >

                                {tagsAre?.map((quote, index) => (
                                    <div key={index} className='d-flex border-bottom border-secondary pt-4'>
                                        <div>
                                            <img src={image} />
                                        </div>
                                        <div className='ps-3' >

                                            <h6 style={{ fontSize: '16px' }}>{quote?.author}</h6>
                                            <h6 className='text-white' style={{ fontSize: '15px' }}>{quote?.content}</h6>

                                            <button onClick={() => handleLiked(quote)} className=' btn border-0 pe-1 ps-1 '><i className="fa-regular fa-heart"></i></button>
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

                    <Col lg={3} className=' border-secondary'>
                        <div className='pt-5 ps-3'>
                            <div className='d-flex justify-content-between'>
                                <h5>Trending Topics</h5>
                                <i className="fa-solid fa-gear pe-4 pt-2" style={{ float: 'right' }}></i>
                            </div>

                            <Link to={'/quotelist'}>
                                <button onClick={() => handleAllQuotes()} className='btn border-0 text-primary pt-3 ps-1'>show all quotes</button>

                            </Link>
                            <div className='text-secondary pt-2 pt-2'>AGE</div>
                            <Link >
                                <button onClick={() => handleFilter('age')} className='btn border-0 ps-1 text-white'>#age</button>
                            </Link>
                            <h6 className='text-secondary'>123 quotes</h6>

                            <div className='text-secondary pt-3'>EDUCATION</div>
                            <button onClick={() => handleFilter('education')} className='btn border-0 ps-1 text-white'>#education</button>
                            <h6 className='text-secondary'>93 quotes</h6>

                            <div className='text-secondary pt-3'>SCIENCE</div>
                            <button onClick={() => handleFilter('science')} className='btn border-0 ps-1 text-white'>#science</button>
                            <h6 className='text-secondary'>85 quotes</h6>

                            <div className='text-secondary pt-3'>GAMES</div>
                            <button onClick={() => handleFilter('games')} className='btn border-0 ps-1 text-white'>#games</button>
                            <h6 className='text-secondary'>71 quotes</h6>

                            <div className='text-secondary pt-3'>DESIGN</div>
                            <button onClick={() => handleFilter('design')} className='btn border-0 ps-1 text-white'>#design</button>
                            <h6 className='text-secondary'>69 quotes</h6>



                        </div>
                    </Col>
                </Row>

            </div>
        </>
    )
}

export default QuotesList