import star from '../assets/icons/star.svg' 

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-col flex-1 w-full max-sm:w-full ">
      <img src={imgURL} alt="{name}" className="w-[280px] h-[280px]" />
      <div className="flex justify-start mt-8 gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="text-xl leading-normal font-montserrat text-slate-gray ">
          4.7
        </p>
      </div>
        <h3 className="mt-2 text-2xl font-semibold leading-normal font-palanquin">
          {name}
        </h3>
        <p className="mt-2 text-2xl font-semibold leading-normal font-montserrat text-coral-red ">
          {price}
      </p>
      
    </div>
  );
}

export default PopularProductCard