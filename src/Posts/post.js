import './Posts.sass';
import {Link} from 'react-router-dom';

function Post(props){
    return(
        <div className='pb-8'>
            <Link to={`${props.id}`}> 
            <h3 className='text-lg font-medium hover:text-lightRed'>{props.title}</h3> </Link>
            <p className='italic font-medium text-sm pb-4'>{props.author}</p>
            <p className='pb-6'>{props.description}</p>
            <div>❤️{props.likes}</div>
        </div>
    )
}

export default Post