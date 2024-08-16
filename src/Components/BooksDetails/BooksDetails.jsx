import { useLoaderData, useParams } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBookApplication } from "../../utility/LocalStorage";


function BooksDetails() {
    const books = useLoaderData();
    const {bookId} = useParams();
    const idInt = parseInt(bookId)
    const book = books.find(book => book.bookId == idInt)
    console.log(book)

    const handleRead = () =>{
        saveBookApplication(idInt)
        toast("Read Don!")
    }

    const handlWishlist = () =>{
        saveBookApplication(idInt)
        toast("Wishlist Don!")
    }
  return (
    <div className="grid md:grid-cols-4 gap-4 text-gray-700 mt-5">
      <div className="md:col-span-2 text-center bg-slate-100 border rounded ml-10 mb-20 mr-10">
        <div className="m-12">
        <img className="h-96 w-80 " src={book.image} alt="" />
        </div>
      </div>
      <div className="md:col-span-2 max-w-xl">
        <div className="mt-4 mb-4 ">
        <h1 className="text-3xl">{book.bookName}</h1>
        <p>By : {book.author}</p>
        
        </div>
        <hr />
        <div className="mt-4 mb-3">
        <h1> {book.category}</h1>
        </div>
        <hr />
        <div className="mt-5 mb-4">
        <h3><span className="font-bold">Review : </span>{book.review}</h3>
        <div className="flex mt-5">
          <span className="font-bold mr-10">Tags</span>
          <button className='border rounded-lg  px-5 mr-4 text-green-400'>#{book.tags[0]}</button>
          <button className='border rounded-lg  px-5 mr-4 text-green-400'>#{book.tags[1]}</button>
        </div>
        </div>
        <hr />
        <div className="flex mt-5 mb-4 md:col-span-4">
            <div className="md:col-span-2">
                <span className="mr-10">Number of Pages:</span><br />
                <span className="mr-14">Publisher:</span><br />
                <span className="mr-10">Year Of Publishe:</span><br />
                <span className="mr-10">Ratin:</span><br />
            </div>
            <div className="mr-10 md:col-span-2">
                <span className="font-bold">{book.totalPages}</span><br />
                <span className="font-bold">{book.publisher}</span><br />
                <span className="font-bold">{book.yearOfPublishing}</span><br />
                <span className="font-bold">{book.rating}</span><br />
            </div>
        </div>
        <hr />
        <div className="mt-5 mb-4 justify-between">
        <button onClick={handleRead} className=" focus:ring-2 hover:bg-red-700 text-black px-5 py-2 mr-6 rounded border">Read</button>
        <button onClick={handlWishlist} type="button" className="text-white bg-cyan-800 hover:bg-cyan-500 focus:ring-2 font-medium rounded px-5 py-2 mr-6  dark:bg-cyan-500 ">Wishlist</button>
        </div>
        <ToastContainer />
      </div>
    </div>
  )
}

export default BooksDetails
