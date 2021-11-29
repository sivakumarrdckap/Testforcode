import React from "react";
import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from "react-image-gallery";
import "../style.scss";
export default function ImageGalleryy(props) {
    const { images } = props;
    let imagedata = [];
    images &&
        images.map((val) => {
            let value = val;
            let temp = {
                original: `https://elementvape.com/pub/media/catalog/product${value.file}`,
                thumbnail: `https://elementvape.com/pub/media/catalog/product${value.file}`,
            };
            imagedata.push(temp);
        });
    // console.log({ imagesss, imagedata, images });
    return (
        <div className="gallery-box">
            <ImageGallery showPlayButton={false} items={imagedata} />
        </div>
    );
}
