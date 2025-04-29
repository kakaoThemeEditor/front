import { ImageUpIcon } from "lucide-react";
import { useState, useRef } from "react";

interface ImageFileButtonProps {
  onImageUpload?: (imageUrl: string) => void;
  className?: string;
}

export default function ImageFileButton({ className = "", onImageUpload }: ImageFileButtonProps) {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setPreviewImage(imageUrl);
        onImageUpload?.(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={`relative cursor-pointer p-2 ${className}`} onClick={handleClick}>
      <input type="file" ref={fileInputRef} onChange={handleImageChange} accept="image/*" className="hidden" />
      {previewImage ? (
        <div className="w-12 h-12 rounded-none">
          <img src={previewImage} alt="Uploaded" className="w-full h-full object-contain" />
        </div>
      ) : (
        <div className="w-6 h-6  ">
          <ImageUpIcon className="w-full h-full" />
        </div>
      )}
    </div>
  );
}
