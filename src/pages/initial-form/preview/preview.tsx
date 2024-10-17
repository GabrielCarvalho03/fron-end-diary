import { Button } from "../../../components/button/button";
import { UsePreview } from "../../../hooks/usePreview/use-preview";

export const Preview = () => {
  const { preview, Title, description } = UsePreview();

  return (
    <>
      <section className="md:ml-20 w-full md:w-10/12 h-auto flex flex-col justify-center items-center border-0.5px border-gray-600">
        <div className="md:max-w-80 h-auto  flex flex-col justify-center items-center pb-5">
          <h1 className="py-1">
            {Title.length >= 30 ? Title.substring(0, 30) + "..." : Title}
          </h1>
          {description && (
            <p className="text-xs text-gray-500 py-1 pb-2">
              {description.length >= 50
                ? description.substring(0, 150) + "..."
                : description}
            </p>
          )}

          <img
            src={preview}
            alt=""
            style={{
              maxWidth: window.innerWidth <= 900 ? "90%" : 400,
              maxHeight: 400,
            }}
          />
        </div>
      </section>

      {(preview ||
        Title.length > 0 ||
        (description && description?.length > 0)) && (
        <div className="w-full md:ml-20 md:w-10/12 h-auto flex flex-col justify-center items-center mt-5">
          <Button type="submit" title="Finalizar" />
        </div>
      )}
    </>
  );
};
