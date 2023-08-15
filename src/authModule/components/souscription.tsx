import { BsFillEyeSlashFill } from "react-icons/bs";
const Souscription = () => {
  return (
    <div className="w-full h-screen px-4 py-16 bg-gradient-to-tl from-green-400 to-indigo-900">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full p-10 mt-16 bg-white rounded shadow lg:w-1/3 md:w-1/2">
          <p
            tabIndex={0}
            role="heading"
            aria-label="Login to your account"
            className="text-2xl font-extrabold leading-6 text-gray-800"
          >
            Create your Account
          </p>
          <div className="pt-8 ">
            <label className="text-sm font-medium leading-none text-gray-800">
              Email
            </label>
            <input
              aria-label="enter email adress"
              role="input"
              type="email"
              className="w-full py-3 pl-3 mt-2 text-xs font-medium leading-none text-gray-800 bg-gray-200 border rounded focus:outline-none"
            />
          </div>
          <div className="w-full mt-6">
            <label className="text-sm font-medium leading-none text-gray-800">
              Password
            </label>
            <div className="relative flex items-center justify-center">
              <input
                aria-label="enter Password"
                role="input"
                type="password"
                className="w-full py-3 pl-3 mt-2 text-xs font-medium leading-none text-gray-800 bg-gray-200 border rounded focus:outline-none"
              />
              <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                <BsFillEyeSlashFill />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <button
              role="button"
              aria-label="create my account"
              className="w-full py-4 text-sm font-semibold leading-none text-white bg-indigo-700 border rounded focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none hover:bg-indigo-600"
            >
              Create my account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Souscription;
