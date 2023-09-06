import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex items-center justify-between w-full gap-10 max-lg:flex-col max-container"
    >
      <div className="flex flex-col flex-1">
        <h2 className="text-4xl font-bold capitalize font-palanquin lg:max-w-lg">
          We Provide You
          <span className=" text-coral-red"> Super</span>
          <span className=" text-coral-red"> Quality </span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring Premium comfort and style, our meticulously crafted footwear
          is designed to elvate your experince, providing you with unmatched
          quality, innovation, and a touch of elgance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excelled ensures your satisfaction
        </p>
        <div className="flex flex-wrap gap-4 mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex justify-center flex-1">
        <img
          src={shoe8}
          alt="shoe8"
          width={770}
          height={770}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
