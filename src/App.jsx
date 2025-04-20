
import { Suspense, useState } from 'react'
import './App.css'
import Blog from './components/Blog/Blog'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {

  const [bookmarked, setBookMarked] = useState([])
  const [count, setCount] = useState(0)


  const handleMark =(blog)=>{
    const newBookMark = [...bookmarked,blog]
    setBookMarked(newBookMark)
    const newCount = count +1;
    setCount(newCount)
  }

  const [readCount, setReadCount]= useState(0)

  const handleReadCount = (time, id) =>{
     const newCount = readCount + time
     setReadCount(newCount)
     removeBookMark(id)
     
  }
  const removeBookMark = (id) =>{
   setBookMarked(bookmarked.filter((mark) =>mark.id !== id))

  }


  return (
    <>
    <div>
    <Navbar></Navbar>
    

    <div className="main-container flex text-center mt-10">
      {/* left container */}
      <div className="left-container w-[55%]">

       <Blogs handleMark={handleMark} handleReadCount={handleReadCount}></Blogs>
       
      </div>
      <div className='right-container w-[45%] '>
           <h1 className='font-semibold text-3xl'>Reading Time:  {readCount}</h1>
           
           <h1 className='font-semibold text-3xl'>Bookmark count: {count}</h1>

           <div className='text-3xl'>
           {
            bookmarked.map((book) =><p>{book.title}</p>)
           }
           </div>
      </div>
    </div>
    </div>
     
    </>
  )
}

export default App
