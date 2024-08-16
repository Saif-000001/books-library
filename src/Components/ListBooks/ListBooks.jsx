import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { ImManWoman } from "react-icons/im";
import { SiPagekit } from "react-icons/si";
import { Link } from 'react-router-dom';



function ListBooks({listBook}) {
  const {bookId,image, bookName, author, category, tags, totalPages, publisher, yearOfPublishing, rating} = listBook;
  return (
<div className="grid md:grid-cols-4 gap-4 text-gray-700 m-5 border rounded-xl">
      <div className="md:col-span-1 text-center bg-slate-100 border rounded-xl m-5 h-60 w-50">
        <div className="m-12 text-center">
        <img className="h-40 w-35 " src={image} alt="" />
        </div>
      </div>
      <div className="md:col-span-3 max-w-xl m-5 h-60 w-50">
        <div className="mt-4 mb-4 ">
        <h1 className="text-3xl">{bookName}</h1>
        <p className='text-sm font-bold mt-2'>By : {author}</p>
      </div>
        <div className="flex mt-5 text-sm">
          <span className="font-bold mr-10">Tags</span>
          <button className='border-spacing-px bg-green-100 rounded-full  px-5 mr-4 text-green-600'>#{tags[0]}</button>
          <button className='border-spacing-px bg-green-100 rounded-full px-5 mr-4 text-green-600'>#{tags[1]}</button>
           <div className='flex'>
           <CiLocationOn className='text-xl mr-1' /> <span className="mr-2 text-sm">Year Of Publishe : {yearOfPublishing}</span><br />
           </div>
        </div>
        <div className="flex mt-5 mb-4">
        <ImManWoman className='text-xl mr-2' /> <span className=" text-sm mr-2">publisher : {publisher}</span>
        <SiPagekit className='text-xl mr-2' /> <span className="text-sm mr-2">Page : {totalPages}</span>
        </div>
        <hr />
        <div className="mt-5">
        <button className='border-spacing-px bg-blue-200 rounded-full px-5 p-2 mr-4 text-blue-600'>Category: {category}</button>
        <button className='border-spacing-px bg-orange-200 rounded-full px-5 p-2 mr-4 text-orange-600'>Rating: {rating}</button>
        <Link to={`/book/${bookId}`}><button className='border-spacing-px bg-green-700 rounded-full px-5 p-2 mr-4 text-white'>View Details</button></Link>
        </div>
      </div>
    </div>
  )
}

export default ListBooks
