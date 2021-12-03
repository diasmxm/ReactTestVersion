import './Paginate.sass'

function Paginate(props){
    function handleClick(index){
        props.handleClick(index);
    }
    const paginateButtons = []
    for(let i=1; i<props.number; i++){
        if(props.selectNumber == i){
            paginateButtons.push(<button className = 'is_active'>{i}</button>) 
        }else{
            paginateButtons.push(<button onClick = {() => handleClick(i)}>{i}</button>)
        }
    }
    return (
        <div className="paginate_wrap"> {paginateButtons}</div>
    )
}

export default Paginate;