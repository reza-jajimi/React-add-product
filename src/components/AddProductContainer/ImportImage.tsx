import { ChangeEventHandler } from "react";
import importImages from "../../assets/image/importImage.png";
import deleteImage from "../../assets/image/remove.png";

type ImportImageType = {
  imageFiles: any;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  handleRemoveImage: (index: number) => void;
};

const ImportImage = ({
  imageFiles,
  onChange,
  handleRemoveImage,
}: ImportImageType) => {
  console.log(imageFiles);

  return (
    <div className="flex gap-2 flex-wrap">
      {imageFiles?.map((image: File, index: number) => {
        const imageSrc = URL.createObjectURL(image);
        console.log(image);

        return (
          <div
            className="image-container rounded cursor-pointer overflow-hidden relative"
            key={index}
            onClick={() => handleRemoveImage(index)}
          >
            <img src={imageSrc} alt="selectPic" className="w-24 h-24" />
            <img src={deleteImage} alt="delete" className="remove-item" />
          </div>
        );
      })}

      <label htmlFor="uploadImages" className="cursor-pointer inline-block">
        {imageFiles.length === 14 ? null : (
          <img className="w-24 h-24" src={importImages} alt="uploadPIc" />
        )}
      </label>

      <input
        id="uploadImages"
        type="file"
        accept="image/png , image/jpeg"
        className="hidden"
        onChange={onChange}
        multiple
      />
    </div>
  );
};

export default ImportImage;
