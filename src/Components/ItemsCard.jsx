import { Link } from "react-router-dom";

const ItemsCard = ({ data }) => {
  const { name, cloudinaryImageId } = data?.info || {};

  return (
    <div className="shadow-sm rounded-xl mx-6 my-4 border">
      <Link to={`items/${data?.id}`}>
        <div className="w-48 cursor-pointer hover:scale-90">
          <img
            className="rounded-xl h-36 justify-center w-full object-contain"
            src={cloudinaryImageId}
            alt="ItemImages"
          />
          <p className="font-bold text-lg text-gray-800 my-4 text-wrap">
            {name}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ItemsCard;
