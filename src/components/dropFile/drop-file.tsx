import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { PreviewImg } from "../previewImg/preview-img";
import { UsePreview } from "../../hooks/usePreview/use-preview";

type FileDropzoneProps = {
  onDrop: (acceptedFiles: File[]) => void;
  ismodal?: boolean;
};

export const DropFile = ({ onDrop, ismodal }: FileDropzoneProps) => {
  const { preview, setPreview, setFile } = UsePreview();

  const onDropCallback = useCallback(
    (acceptedFiles: File[]) => {
      onDrop(acceptedFiles);
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        setFile(file);

        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    },
    [onDrop]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropCallback,
  });

  return (
    <div
      {...getRootProps()}
      className={` border-2 border-dashed p-5 mb-10 text-center ${
        isDragActive ? "border-blue-500" : "border-gray-300"
      }`}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className={`${ismodal && "text-gray-600"}`}>
          Solte os arquivos aqui...
        </p>
      ) : (
        <p className={`${ismodal && "text-gray-600"}`}>
          Arraste e solte alguns arquivos aqui, ou clique para selecionar
          arquivos
        </p>
      )}

      {preview && <PreviewImg img={preview} />}
    </div>
  );
};
