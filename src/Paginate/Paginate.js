import './Paginate.sass'

function Paginate(props){
    const paginateButtons = []
    for(let i=0; i<props.number; i++){
        paginateButtons.push(<button>{i}</button>)
    }
    return (
        <div className="paginate_wrap"> {paginateButtons}</div>
    )
}

//