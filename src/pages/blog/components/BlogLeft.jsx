import blog_left from "../../../img/blog_left.png"
const BlogLeft = () => {
    return (
        <div>
            <div className="left_blog">
                <div className="blog_content">
                    <div className="blog_content_radius">
                        <span className="">01</span>
                    </div>
                    <div className="meta">
                        <p>August 09, 2022 / MetaVerse / 4 Comments</p>
                    </div>
                    <div className="People">
                        <h3>Reasons Why People Use Discord</h3>
                    </div>
                    <div className="img">
                        <img src={blog_left} alt="" />
                        <div className="line"></div>
                    </div>
                </div>
                <div className="blog_btn">
                    <button className="btn">Read All Articles</button>
                </div>
            </div>
        </div>
    )
}

export default BlogLeft