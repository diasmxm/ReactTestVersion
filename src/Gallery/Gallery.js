import React from 'react';
import axios from 'axios';
import Card from '../Card';
import './Gallery.sass';
import key from '../key';
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
            url: "https://api.pexels.com/v1/curated",
            headers: {
                'Authorization': key
            }
        })

        this.setState({
            images: images.data.photos,
            loaded: false
        })
    }
    render() {
        const CardList = this.state.images.map(img=>{
            return <Card 
                key = {img.id}
                src = {img.src.large}
                author = {img.author}
                url = {img.url}
                photographer_url = {img.photographer_url}
                photographer = {img.photographer}
           />
        })
        if(this.state.loaded){
            return <div> Идет загрузка </div>
        } else {
        return (
            <div className = 'wrapper'>
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