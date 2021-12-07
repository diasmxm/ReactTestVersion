import './Posts.sass';
import {Link} from 'react-router-dom';

function Post(props){
    return(
        <div>
            <Link to={`${props.id}`}> <h3>{props.title}</h3> </Link>
            <p>{props.body}</p>
            <div>❤️{props.likes}</div>
            <div>{props.author}</div>
        </div>
    )
}

export default Post