import { ChangeEvent, FormEvent, useState } from "react";
import { users } from "../../helpers";
import { Link, useNavigate } from "react-router-dom";

export const Forms = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState<users>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const [disable, setDisable] = useState<boolean>(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement> | undefined) => {
    const { name, value } = e!.target;
    setAuth({
      ...auth,
      [name]: value,
    });
    setDisable(false);
  };

  const handleSubmitAuth = (event: FormEvent<HTMLFormElement> | undefined) => {
    event?.preventDefault();
    console.log("clicked");
    if (auth.username == "admin" && auth.password == "admin") {
      navigate("/home");
    } else {
      setError("Username or password invalide");
    }
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmitAuth}>
        <h1 className="text-center">Bienvenue pour continuez :</h1>
        <h3 className="text-center">Connectez-vous</h3>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Nom d'utilisateur :
          </label>
          <input
            id="username"
            type="username"
            name="username"
            value={auth.username}
            className="w-full px-3 py-2 leading-tight text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            placeholder="Nom d'utilisateur"
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Mot de passe :
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={auth.password}
            className="w-full px-3 py-2 leading-tight text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            placeholder="Mot de passe"
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={disable}
          >
            Se connecter
          </button>
          <Link
            className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800"
            to="/home"
          >
            Pas de compte ?
          </Link>
        </div>
        <p className="text-sm text-red-600">{error}</p>
      </form>
    </div>
  );
};
