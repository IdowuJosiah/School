import React from "react"
import "../css/GalleryPageComponent.css"
import {images} from "../interfaces/interface";

const GalleryPageComponent = () => {
    let GalleryImage: string[] = ["3c15d55b-a063-431f-84d6-ced2f31f680d.JPG",
        "8abd8a28-5879-40fb-8227-5fbfdf895e45.JPG",
        "74d433cf-cebd-40d1-a999-a1e66859cba5.JPG",
        "ab961ccd-3e00-468f-86ab-4c83f383a1fa.JPG",
        "PHOTO-2023-07-17-20-25-37 (2).jpg",
        "PHOTO-2023-07-17-20-25-38.jpg",
        "PHOTO-2023-07-17-20-25-40.jpg",
        "PHOTO-2023-07-17-20-28-14 (2).jpg",
        "PHOTO-2023-07-17-20-28-17.jpg",
        "PHOTO-2023-07-17-20-34-35 2.jpg",
        "PHOTO-2023-07-17-20-49-24 10.jpg",
        "IMG_6246.jpg",]
    return(
        <div className="gallery-page admission-page-width">
            <header className="gallery-header">
                <h1>
                    HONEY ROCK SCHOOL GALLERY
                </h1>
            </header>
            <div className="gallery-images">
                {
                    GalleryImage.map((item, index) =>{
                        return(
                            <div className="gallery-image-div">
                                <img alt="iggs" src={item}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default GalleryPageComponent