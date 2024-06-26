import "./Main.css";

const Post= () =>{
    return(
        <div className="post"></div>
    )
}


const MiddleContainer = () => {
    return(
        <aside className="middleContainer">
            <div className="postField"></div>
            <div className="lineThrough">
            <hr/>
            <span>Sort by: <em>Top</em></span>
            </div>
            <div className="posts">
            <Post/>
            <Post/>
            <Post/>
            </div>
        </aside>
    )
}

export default MiddleContainer;