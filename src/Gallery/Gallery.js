import React from 'react';
import axios from 'axios';
import Card from '../Card';
import './Gallery.sass';
import key from '../key';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
// компонент галереии
// запрашивать информацию при render

class Gallery extends React.Component{
    constructor(){
        super()
        this.state = {
            images: [],
            loaded: true,
            photoIndex: 0,
            isOpen: false,
            lightImages: [],
            paginateNumber: 2,
            perPage: 30
        }
    }

    async componentDidMount() {
        const images = await axios({
            method: "GET",
            url: `https://api.pexels.com/v1/curated?page=${this.state.paginateNumber}?per_page=${this.state.perPage}`,
            headers: {
                'Authorization': key
            }
        })
        const lightImages = images.data.photos.map(img=>{
            return img.src.large2x
        })
        this.setState({
            images: images.data.photos,
            loaded: false,
            lightImages
        })
    }
    render() {
        const { photoIndex, isOpen, lightImages } = this.state;
        const CardList = this.state.images.map((img, index)=>{
            return <Card
                handleClick = {()=>this.setState({isOpen: true, photoIndex:index})}
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
        {isOpen && (
          <Lightbox
            mainSrc={lightImages[photoIndex]}
            nextSrc={lightImages[(photoIndex + 1) % lightImages.length]}
            prevSrc={lightImages[(photoIndex + lightImages.length - 1) % lightImages.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + lightImages.length - 1) % lightImages.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % lightImages.length,
              })
            }
          />
        )}
                </div>
            </div>
        )
    }
}
}
export default Gallery