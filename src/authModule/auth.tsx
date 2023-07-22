import logo from "../assets/question.png";
import { Forms } from "./components/forms";
export const Auth = () => {
  return (
    <div className="flex w-full h-screen bg-fixed bg-center bg-cover bg-myBgFirst">
      <div className="flex flex-col justify-center h-screen w-[40%] bg-white">
        <img
          src={logo}
          alt="logo not loaded"
          className="w-[60px] h-[60px] mx-auto my-[20px]"
        />
        <Forms />
      </div>
    </div>
  );
};
