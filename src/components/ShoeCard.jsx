const Shoecard = ({ imgURL, changeBigShoeImage, bigShoeImag }) => {
  const handleClick = () => {
    if (bigShoeImag !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl
        ${
          bigShoeImag === imgURL.bigShoe ? "border-coral-red" : "border-transparent"
        } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
          <div className="flex items-center justify-center bg-center bg-cover rounded-xl bg-card sm:w-40 sm:h-40 max-sm:p-4">
              <img
                  src={imgURL.thumbnail}
                  alt="shoe collection"
                  width={127}
                  height={103}
                  className="object-contain"
              />
      </div>
    </div>
  );
};

export default Shoecard;
