import Resizer from "react-image-file-resizer";

export const resizeImage = (file: Blob) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      1000, // Max width
      800, // Max height
      "JPEG",
      75, // Quality
      0,
      (uri) => {
        resolve(uri);
      },
      "file"
    );
  });
