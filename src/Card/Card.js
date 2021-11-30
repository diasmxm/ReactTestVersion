import './Card.sass';

function Card(props) {
    return(
        <div className="card">
            <div style={{backgroundImage: `url(${props.src})`}} alt="" 
            onClick={props.handleClick}
            className = '__img' />
            <div><a href={props.url}>ссылка на оригинал</a></div>
            <div><a href={props.photographer_url}>{props.photographer}</a></div>
        </div>
    )
}
export default Card