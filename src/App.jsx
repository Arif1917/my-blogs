
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
  console.log(bookmarked)

  return (
    <>
    <div>
    <Navbar></Navbar>
    

    <div className="main-container flex text-center mt-10">
      {/* left container */}
      <div className="left-container w-[70%]">

       <Blogs handleMark={handleMark}></Blogs>
       
      </div>
      <div className='right-container w-[30%] '>
           <h1 className='font-semibold text-3xl'>Reading Time:</h1>
           
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
