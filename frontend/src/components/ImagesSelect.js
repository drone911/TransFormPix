import React, { useState } from "react";
import ImageCard from './ImageCard';
import './ImagesSelect.css'

function ImagesSelect() {
    const noImagesEmoji = String.raw`(ノ￣□￣)ノ ~┻━┻`;
    
    const [selectedImages, setSelectedImages] = useState([]);

    const handleUpload = (event) => {
        const image = event.target.files[0];
        if (image) {
            setSelectedImages((uploadedImages) => [...uploadedImages, image])
        }
    }

    return (
        <div className="image-select-container">
            {selectedImages.length === 0 ? (
                <div className="no-image-containers">
                    <h2 className="no-images-available-label">No Images available</h2>
                    <h2 className="no-images-available-label">{noImagesEmoji}</h2>    
                </div>
            ) : (
                selectedImages.map((imageContent, index) => (
                    <ImageCard key={index} content={imageContent} />
                ))
            )}
            <div className="upload-button">
                <label htmlFor="image-upload" className="upload-label">Upload An Image <span className="material-symbols-outlined">upload</span> </label>
                <input type="file" id="image-upload" onChange={handleUpload} accept="image/jpg, image/jpeg, image/png"></input>
            </div>
        </div>
    )
}

export default ImagesSelect;