import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTagQuotes } from '../REDUX/Slices/tagSlice'
import { Link } from 'react-router-dom'

const Trending = () => {
  const dispatch = useDispatch()
  const { allTagQuotes, error, loading } = useSelector((state) => state.tagReducer)

  useEffect(() => {
    dispatch(fetchTagQuotes())
  }, [])

  const handleAllQuotes = () => {
    const updatedList = allTagQuotes.map((x) => x)
    console.log(updatedList);

  }
  return (
    <>
      <div className='pt-5 ps-3 '>
        <div className='d-flex justify-content-between'>
          <h5>Trending Topics</h5>
          <i className="fa-solid fa-gear pe-4 pt-2" style={{ float: 'right' }}></i>
        </div>

        <Link to={'/quotelist'}>
          <button onClick={() => handleAllQuotes()} className='btn border-0 text-primary pt-3 ps-1'>show all quotes</button>

        </Link>
        <div className='text-secondary pt-2 pt-2'>AGE</div>
        <Link to={'/quotelist'}>
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
    </>
  )
}

export default Trending