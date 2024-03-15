import React, { useEffect } from 'react'
import image from '../assets/Avatar.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuotes } from '../REDUX/Slices/quoteSlice';
import { addLiked } from '../REDUX/Slices/likedquoteSlice';
import { TwitterShareButton } from "react-share";

const QuoteSection = () => {

  const dispatch = useDispatch()
  const { allQuotes, error, loading } = useSelector((state) => state.quoteReducer)
  // console.log(allQuotes, error, loading);

  useEffect(() => {
    dispatch(fetchQuotes())
  }, [])

  const liked = useSelector(state => state.likedquoteReducer)

  const handleLiked = (quote) => {
    if (liked?.includes(quote)) {
      alert("Quote already liked...")
    } else {
      dispatch(addLiked(quote))
      alert("Liked")
    }
  }

  const currentPageUrl = 'twitter.com';

  return (
    <div>
      <Container className='px-0'>
        <Row >
          <div >

            {allQuotes?.map((quote, index) => (
              <div key={index} className='d-flex border-bottom border-secondary pt-4'>
                <div>
                  <img src={image} />
                </div>
                <div className='ps-3' >

                  <h6 style={{ fontSize: '16px' }}>{quote?.author}</h6>
                  <h6 className='text-white' style={{ fontSize: '15px' }}>{quote?.content}</h6>
                  <button onClick={() => handleLiked(quote)} className=' btn border-0 pe-1 ps-1 '><i className="fa-regular fa-heart"></i></button>
                  <button className='btn border-0 pe-1 '><i className="fa-regular fa-comment"></i></button>

                  <TwitterShareButton url={currentPageUrl} quote="please share this post" hastag='#quote'><button className='btn border-0 '><i className="fa-regular fa-paper-plane"></i></button></TwitterShareButton>
                  <p className='pt-2' style={{ fontSize: '13px' }}>wisdom . love</p>
                </div>
              </div>
            ))
            }
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default QuoteSection