import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={imgURL}
        alt="customer"
        className="object-cover w-[120px] h-[120px] rounded-full"
      />
      <p className="max-w-sm mt-6 text-center info-text">{feedback}</p>
      <div className="flex items-center justify-center mt-3 gap-2.5">
        <img src={star} width={24} height={24} className="object-contain m-0" />
        <p className="text-xl font-montserrat tex-slate-gray">({rating})</p>
          </div>
          <h3 className="mt-1 text-3xl font-bold text-center font-palanquin">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
