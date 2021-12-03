import './Post.sass';

function Post(props){
    return(
        <div>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
            <div>❤️{props.likes}</div>
            <div>{props.author}</div>
        </div>
    )
}

export default Post