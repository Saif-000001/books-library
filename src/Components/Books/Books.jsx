import React, { useEffect, useState } from 'react'
import Book from '../Book/Book'

function Books() {
    const [books, setBooks] = useState([])
    const [booksLength, setBooksLength] = useState(6)

    useEffect(()=>{
        fetch('books.json')
        
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
  return (
    <div>
      <h1 className='text-5xl text-center text-black'>Books</h1>
      <div className='grid grid-cols-3 '>
        {
            books.slice(0, booksLength).map((book) => <Book key={book.bookId} book={book} />)
        }
      </div>
      <div className={`text-center m-5 ${booksLength===books.length ? "hidden": ""}`}>
      <button onClick={() => setBooksLength(books.length)} type="button" class="text-white bg-green-800 hover:bg-green-500 focus:ring-4 font-medium rounded-lg text-sm px-6 py-4 me-2 mb-2 dark:bg-green-500 ">See All Books</button>
      </div>
    </div>
  )
}

export default Books
