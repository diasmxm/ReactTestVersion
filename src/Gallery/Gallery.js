import React from 'react';
import axios from 'axios';
import Card from '../Card';
import './Gallery.sass';
// компонент галереии
// запрашивать информацию при render

class Gallery extends React.Component{
    constructor(){
        super()
        this.state = {
                images: [],
                loaded: true
        }
    }

    async componentDidMount() {
        const images = await axios({
            method: "GET",
            url: "https://picsum.photos/v2/list"
        })

        this.setState({
            images: images.data,
            loaded: false
        })
    }
    render() {
        const CardList = this.state.images.map(img=>{
            return <Card 
                key = {img.id}
                img_link = {img.download_url}
                author = {img.author}
                url = {img.url}
           />
        })
        if(this.state.loaded){
            return <div> Идет загрузка </div>
        } else {
        return (
            <div>
                <h1>Gallery</h1>
                <div className="gallery_wrapper">
                    {CardList}
                </div>
            </div>
        )
    }
}
}
export default Gallery