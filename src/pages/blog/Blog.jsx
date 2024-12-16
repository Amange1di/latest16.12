
import BlogLeft from "./components/BlogLeft"
import BlogRight from "./components/BlogRight"
import "./Blog.scss"




const Blog = () => {
    return (
        <div id="blog">
            <div className="container">
                <div className="blog">
                    <h3 className="title">Latest Articles</h3>
                    <div className="blog_general">
                        <BlogLeft />
                        <BlogRight />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog