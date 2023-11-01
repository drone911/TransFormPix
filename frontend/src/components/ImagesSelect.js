import React, { useState } from "react";
import ImageCard from './ImageCard';

function ImagesSelect() {
    const [selectedImages, setSelectedImages] = useState([]);

    const handleUpload = (event) => {
        const image = event.target.files[0];
        if (image) {
            setSelectedImages((uploadedImages) => [...uploadedImages, image])
        }
    }

    return (
        <div className="image-select-container">
            <input type="file" onChange={handleUpload}></input>
            {selectedImages.length === 0 ? (
                <div>No Images available</div>
            ) : (
                selectedImages.map((imageContent, index) => (
                    <ImageCard key={index} content={imageContent} />
                ))
            )}
        </div>
    )
}

export default ImagesSelect;