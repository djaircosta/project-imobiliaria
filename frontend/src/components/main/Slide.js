import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

export default class Slide extends React.Component {
    render() {
        const images = [
            {
                original: '/img/photos/original/01.jpg',
                thumbnail: '/img/photos/thumb/01.jpg',
            },
            {
                original: '/img/photos/original/02.jpg',
                thumbnail: '/img/photos/thumb/02.jpg',
            },
            {
                original: '/img/photos/original/03.jpg',
                thumbnail: '/img/photos/thumb/03.jpg',
            },
            {
                original: '/img/photos/original/04.jpg',
                thumbnail: '/img/photos/thumb/04.jpg',
            },
            {
                original: '/img/photos/original/05.jpg',
                thumbnail: '/img/photos/thumb/05.jpg',
            },
            {
                original: '/img/photos/original/06.jpg',
                thumbnail: '/img/photos/thumb/06.jpg',
            },
            {
                original: '/img/photos/original/07.jpg',
                thumbnail: '/img/photos/thumb/07.jpg',
            },
            {
                original: '/img/photos/original/08.jpg',
                thumbnail: '/img/photos/thumb/08.jpg',
            },
           
        ]
        return (
            <ImageGallery items={images} autoPlay={true} />
        );
    }
}