
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog}) => {
console.log(blog.cover)
    return (
        <div className="mt-4">
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={blog.cover}
      alt="Shoes" />
  </figure>
  
  <div className="card-body">
    <h2 className="card-title">{blog.title}</h2>
    <div className="flex items-center justify-around">
        <h2>{blog.author}</h2>
        <img className="w-12 rounded-full" src={blog.author_img} alt="" />
        <FaBookmark size={24} />
    </div>
    <div className="flex">
        {
            blog.hasting_tag.map(has =><p>{has}</p>)
        }
    </div>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Mark as read</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;