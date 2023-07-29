import { useState } from "react";
import { ReactComponent as IconPhoto } from '@assets/icon/icon_photo.svg';
import { ReactComponent as IconLink } from '@assets/icon/icon_link.svg';

export const Image1 = () => {
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
        <div className="w-[100%] group mx-auto flex justify-center items-center">
            <input id="file-input" className="hidden" type="file" accept="image/*" onChange={addImage} />
            <div className="z-10 hidden space-x-2 group-hover:flex group-hover:absolute">
                <label
                    htmlFor="file-input"
                    className="hover:bg-primary-950 flex items-center justify-center w-[30px] h-[30px] bg-primary-900 rounded"
                >
                    <IconPhoto />
                </label>
                <span className="hover:bg-primary-950 flex items-center justify-center w-[30px] h-[30px] bg-primary-900 rounded">
                    <IconLink />
                </span>
            </div>
            <div className="group-hover:brightness-50">
                <img className="object-cover" src={selectedImage?.toString()} alt="placeholder" />
            </div>
        </div>
    )
}