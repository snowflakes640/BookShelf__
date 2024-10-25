import React from 'react'
import PropTypes from 'prop-types'
import { useGlobalContext } from '../../context'
import coverImg from "../../assets/not_found_img.png"
import Loading from "../Loader"
import Book from './Book'

const Booklist = () => {
  const { books, loading, resultTitle } = useGlobalContext();

  const booksWithCovers = books.map((singleBook) => {
    const { volumeInfo } = singleBook;
    return {
      ...singleBook,
      id: singleBook.id,
      book_link: singleBook.selfLink,
      cover_img: volumeInfo.imageLinks ? 
        volumeInfo.imageLinks.thumbnail : 
        coverImg,
      volumeInfo: volumeInfo, // Pass volumeInfo for additional details if needed
    };
  });
  console.log(booksWithCovers)

  if(loading) return <Loading />

  return (
    <section className='booklist flex flex-grow:1'>
      <div className='container'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>
        <div className='booklist-content grid'>
          {
            booksWithCovers.slice(0, 30).map((item, index) => {
              return(
                <Book key={index} {... item} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

Booklist.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      cover_img: PropTypes.string,
      volumeInfo: PropTypes.shape({
        title: PropTypes.string.isRequired,
        authors: PropTypes.arrayOf(PropTypes.string),
        publishedDate: PropTypes.string,
      }).isRequired,
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  resultTitle: PropTypes.string.isRequired,
};

export default Booklist