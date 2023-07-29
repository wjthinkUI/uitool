import { useEffect, useState } from "react";
import { ReactComponent as IconPhoto } from '@assets/icon/icon_photo.svg';
import { ReactComponent as IconLink } from '@assets/icon/icon_link.svg';

interface Image1Props {
    height: string;
}

export const Image1 = ({height}:Image1Props) => {
    const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>('https://via.placeholder.com/400');
    const [inputId, setInputId] = useState<string>('file-input');

    useEffect(() => {
        const uniqueId = "file-input-" + Math.random().toString(36).substr(2, 9);
        setInputId(uniqueId);
    }, []);
    
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
        <div className={`w-[100%] h-[${height}] group mx-auto flex justify-center items-center`}>
            <input id={inputId} className="hidden" type="file" accept="image/*" onChange={addImage} />
            <div className="z-10 hidden space-x-2 group-hover:flex group-hover:absolute">
                <label
                    htmlFor={inputId}
                    className="hover:bg-primary-950 flex items-center justify-center w-[30px] h-[30px] bg-primary-900 rounded"
                >
                    <IconPhoto />
                </label>
                <span className="hover:bg-primary-950 flex items-center justify-center w-[30px] h-[30px] bg-primary-900 rounded">
                    <IconLink />
                </span>
            </div>
            <div className="group-hover:brightness-50">
                <img className="object-contain" src={selectedImage?.toString()} alt="placeholder" />
            </div>
        </div>
    )
}