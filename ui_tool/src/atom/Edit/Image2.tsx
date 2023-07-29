import { useState } from "react";
import { ReactComponent as IconPhoto } from '@assets/icon/icon_photo.svg';
import { ReactComponent as IconLink } from '@assets/icon/icon_link.svg';
import { Image1 } from "./Image1";

export const Image2 = () => {
    const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>('https://via.placeholder.com/500');

    const imgaeStyle = {
        contain: 'object-contain',
        cover: 'object-cover',
        fill: 'object-fill',
        none: 'object-none',
        scaleDown: 'object-scale-down',
    }
    // const { contain, cover, fill, none, scaleDown } = imgaeStyle;

    const addImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result)
            }
            reader.readAsDataURL(file);
        }
    }
    return (
        <div className="w-[100%] mx-auto flex justify-center items-center">
            <Image1 />
            <Image1 />
        </div>
    )
}