import { Link } from "react-router-dom";


function Book({book}) {
    const {bookId, image, tags, bookName, author, category, rating} = book;
  return (
       <Link to={`/book/${bookId}`}>
       <div className="card bg-white p-10 m-5 border">
          <div className="bg-stone-100 p-10  rounded-md ">
          <figure>
            <img
              className="h-40 w-35"
              src={image}
              alt="img" />
          </figure>
          </div>
          <div>
          <div className="flex mt-5">
          <button className='border rounded-lg  px-5 mr-4 text-green-400'>{tags[0]}</button>
          <button className='border rounded-lg  px-5 mr-4 text-green-400'>{tags[1]}</button>
          </div>
          <div className=" text-black pt-5">
          <h1 className="text-xl font-extrabold">{bookName}</h1>
          <p>By : {author}</p>
          </div>
          <p className="bg-blend-color-burn">------------------------------------------------------</p>
            <div className="flex justify-between text-black">
              <p>{category}</p>
               <div className="flex">
               <p>{rating}</p>
               <input type="radio" name="rating" className="mask mask-star-2 bg-white text-2xl" />
               </div>
            </div>
          </div>
        </div>
       </Link>
  )
}

export default Book
