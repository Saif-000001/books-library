import React, {useState , useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getStorageBookApplication } from '../../utility/LocalStorage';
import ListBooks from '../ListBooks/ListBooks';
import { IoIosArrowDropdown } from "react-icons/io";


function ListedBooks() {
    const books = useLoaderData();
    const [bookFounds, setBookFound] = useState([])
    const [bookDisplay, setBookDisplay] = useState([])

    const handleSortRating = () =>{
      const sorted_rating = [...bookFounds].sort((a,b) => b.rating - a.rating)
      setBookDisplay(sorted_rating)
    }

    const handleSortPublishYer = () =>{
      const sorted_publishing_year = [...bookFounds].sort((a,b) => b.yearOfPublishing - a.yearOfPublishing)
      setBookDisplay(sorted_publishing_year)
    }

    const handleSortByPages = () =>{
      const sorted_pages_number = [...bookFounds].sort((a,b)=> b.totalPages - a.totalPages)
      setBookDisplay(sorted_pages_number)
    }


    useEffect(() =>{
        const storedBookIds = getStorageBookApplication();
        if(books.length > 0){
            // const bookFound = books.filter(book => storedBookIds.includes(book.bookId))
            const bookFound =[]
            for(const id of storedBookIds){
                const book = books.find(book => book.bookId === id)
                if(book){
                    bookFound.push(book)
                }

            }
            // console.log(books, storedBookIds, bookFound)
            setBookFound(bookFound)
            setBookDisplay(bookFound)
        }
    },[books])
    
  return (
    <div>

      <h1 className='text-center font-bold p-5'>Listed of Book : {bookFounds.length}</h1>
      <div className='text-center'>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn bg-green-600 m-1 text-white ">Sort by<IoIosArrowDropdown className='text-xl'/></div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 text-white rounded-box  w-52 p-2 shadow">
          <li onClick={handleSortRating}><a>Rating</a></li>
          <li onClick={handleSortPublishYer}><a>Published Year</a></li>
          <li onClick={handleSortByPages}><a>Number Of Pages</a></li>
        </ul>
      </div>
      </div>
      <div>
      {
        bookDisplay.map(listBook =><ListBooks key={listBook.bookId} listBook={listBook} />)
      }
      </div>
    </div>
  )
}

export default ListedBooks
