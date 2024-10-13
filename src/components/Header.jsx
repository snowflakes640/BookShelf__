import SearchForm from "./SearchForm"
import React from 'react'

const Header = () => {
  return (
    <div className="holder">
        <header className="header-content flex flex-c text-center text-white">
            <h2 className="header-title text-capitalize">
                find your kind of books
            </h2>
            <p className="header-text fs-18 fw-3">
                Explore endless worlds of books, where every page opens up a new adventure, idea, or perspective. From
                thrilling stories to deep reflections, there's always something waiting to be discovered. Dive into the magic of reading!
            </p>
        </header>
        <SearchForm />
    </div>
  )
}

export default Header


// const Header = () => {
//     return (
//         <div className="holder">
//             <header className="header">
//                 <div className="header-content">
//                     <h2 className="header-title text-capitalize">
//                         find your book of choice
//                     </h2> <br />
//                     <p className="header-text fs-18">
//                     Explore endless worlds of books, where every page
//                     opens up a new adventure, idea, or perspective. From
//                     thrilling stories to deep reflections, there's always
//                     something waiting to be discovered. Dive into the magic of reading!
//                     </p>
//                     <SearchForm />
//                 </div>
//             </header>
//         </div>
//     )
// }

// export default Header