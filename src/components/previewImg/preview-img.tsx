type PreviewImgProps = {
  img: string;
};

export const PreviewImg = ({ img }: PreviewImgProps) => {
  return (
    <div className="mt-4 flex justify-center">
      <img src={img} alt="Preview" style={{ maxWidth: 300, maxHeight: 400 }} />
    </div>
  );
};
