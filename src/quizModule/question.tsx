import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
const Questions = () => {
  const [box1, setBox1] = useState<boolean>(false);
  const [value, setValue] = useState("female");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

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
            <div className="p-8 bg-white rounded shadow">
              <div
                onClick={() => {
                  setBox1(!box1);
                }}
                data-menu
                className="flex items-center justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white"
              >
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
                    <div className="flex items-center justify-between w-full">
                      <p className="mt-4 text-base leading-normal text-gray-600 lg:w-96">
                        If you want to choose Pro or Business plan the you can
                        use all payments. You can pay from Paypal, Payoneer,
                        Master Card, Debit Card.
                      </p>
                      <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group">
                          Choix
                        </FormLabel>
                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="controlled-radio-buttons-group"
                          value={value}
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            value="true"
                            control={<Radio />}
                            label="Vrai"
                          />
                          <FormControlLabel
                            value="false"
                            control={<Radio />}
                            label="Faux"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <TextField
                      id="outlined-multiline-static"
                      label="commantaire"
                      multiline
                      size={"medium"}
                      rows={4}
                      placeholder="Laisser un commentaire"
                      className="w-full"
                    />
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
