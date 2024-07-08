import React, {useState} from 'react';
import img1 from "./img/camping_tent_foq0kyz24de7.svg"
import img2 from "./img/route_h8sgw3rrls08.svg"
import img3 from "./img/map_g35973evcu7x.svg"
import img4 from "./img/rucksack_a774bqlf4hi3.svg"


export const TestDel = () => {
    let imgArr: any[] = [img1, img2, img3, img4]
    let [img, setIng] = useState(imgArr)

    function handleDelete(index: any) {
        setIng((prevImages) => {
            const updatedImages = [...prevImages];
            updatedImages.splice(index, 1);
            return updatedImages;
        })
    }

    return (
        <div>
            {img.length === 0 ? (
                <span>no img</span>
            ) : (
                img.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Image ${index}`} width="100" height="100"/>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </div>
                ))
            )}
        </div>
    );
};

