
import { Suspense } from 'react'
import './App.css'
import Blog from './components/Blog/Blog'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {


  return (
    <>
    <div>
    <Navbar></Navbar>
    

    <div className="main-container flex text-center mt-10">
      {/* left container */}
      <div className="left-container w-[70%]">

       <Blogs></Blogs>
       
      </div>
      <div className='right-container w-[30%] '>
           <h1 className='font-semibold text-3xl'>Reading Time:</h1>
           <h1 className='font-semibold text-3xl'>Bookmark count: 0</h1>
      </div>
    </div>
    </div>
     
    </>
  )
}

export default App
