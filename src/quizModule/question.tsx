import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { useState } from "react";
const Questions = () => {
  const [box1, setBox1] = useState<boolean>(false);

  return (
    <div>
      <div>
        <img
          src="https://i.ibb.co/DQ4FZhL/pattern-bg.png"
          alt="blue pattern background"
          className="absolute z-0 object-center w-full h-32 md:h-52 object-fit"
        />
        <div className="relative z-20 flex flex-col items-center justify-center px-6 pb-32 sm:px-0">
          <div className="py-6 md:py-12">
            <h1
              role="heading"
              className="text-xl font-bold leading-10 text-white xl:text-6xl md:text-5xl"
            >
              Questions posées
            </h1>
          </div>
          <div className="w-[90%]">
            <div
              onClick={() => {
                setBox1(!box1);
              }}
              data-menu
              className="p-8 bg-white rounded shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-semibold leading-none text-gray-800">
                    1-Why should I use your service?
                  </h2>
                  <h2 className="text-base font-semibold leading-none text-gray-800">
                    2-Why should I use your service?
                  </h2>
                  <h2 className="text-base font-semibold leading-none text-gray-800">
                    3-Why should I use your service?
                  </h2>
                </div>
                {box1 ? (
                  <RiArrowDropDownLine className="text-4xl" />
                ) : (
                  <RiArrowDropUpLine className="text-4xl" />
                )}
              </div>
              {box1 && (
                <ul className="">
                  <li>
                    <p className="mt-4 text-base leading-normal text-gray-600 lg:w-96">
                      If you want to choose Pro or Business plan the you can use
                      all payments. You can pay from Paypal, Payoneer, Master
                      Card, Debit Card.
                    </p>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
