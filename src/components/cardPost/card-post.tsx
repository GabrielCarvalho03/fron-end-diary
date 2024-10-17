import moment from "moment";
import { postProps } from "../../hooks/useWebPage/types";
import { UseWebPage } from "../../hooks/useWebPage/use-web-page";

type CardPostProps = {
  data: postProps;
};

export const CardPost = ({ data }: CardPostProps) => {
  const { user } = UseWebPage();
  return (
    <main className="max-w-96 my-5">
      <div className="py-2 flex gap-1 items-center">
        <img
          className="w-10 h-10 rounded-3xl"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtqCVDTXAd-0T6AHxiF37haj940dTxuBqTqQ&s"
          alt=""
        />
        <section>
          <p className=" text-sm">{user.nameofcouple}</p>
          <p className=" text-1xs text-gray-500">
            {moment(data.cretatedAt).format("DD/MM/YYYY")}
          </p>
        </section>
      </div>

      <section className="">
        <h1>{data.title}</h1>
        <p className="text-xs text-gray-500 py-1 pb-5">{data.description}</p>
      </section>
      {data.photo !== "" ||
        (data.photo !== null && (
          <section className="w-full flex justify-center h-80  ">
            <img
              src={data.photo}
              alt=""
              className="object-cover min-w-[300px] max-w-[400px] max-h-[300px]"
            />
          </section>
        ))}
    </main>
  );
};
