import React from 'react'
import { Link } from 'react-router-dom';

const Book = ({id, cover_img, book_link, volumeInfo}) => {
    const { title, authors, publishedDate } = volumeInfo || {};
  
    return (
      <div className="book-item flex flex-column flex-sb" key={id}>
        <Link to = {book_link}>
        <div className="book-item-img">
            <img src={cover_img} alt={title || 'No Title'} />
        </div>
        <div className="book-item-info">
            <div className="book-item-info-item title fw-7 fs-18">
                <span>{title}</span>
            </div>
        </div>
        </Link>
        <div className='book-item-info'>
            <div className="book-item-info-item author fs-15">
                <span className='text-capitalize fw-7'>Author: </span>
                <span>{authors ? authors.join(', ') : 'Unknown Author'}</span>
            </div>
            <div className="book-item-info-item publish-year fs-15">
                <span className='text-capitalize fw-7'>First Published on: </span>
                <span>{publishedDate || "No Date Available"}</span>
            </div>
         </div>
    </div>
    );


}

export default Book


{/* // const Book = (book) => {
//   return (
//     <div className="book-item flex flex-column flex-sb">
//         <div className="book-item-img">
//             <img src={book.cover_img} alt='cover' /> 
//         </div>
//         <div className="book-item-info text-center">
//             <Link to = {"/book/${book.id"} {...book}>
//             <div className="book-item-info">
//                 <span>{book.title}</span>
//             </div>
//             </Link>
//         </div>
//     </div>
//   )
// }
// <div className="book-details">
        //   <h3>{title || 'Unknown Title'}</h3>
        //   <p>{authors ? authors.join(', ') : 'Unknown Author'}</p>
        //   <p>{publishedDate || 'No Date Available'}</p>
        // </div> */}

