import "./App.css";
import { Auth } from "./authModule/auth";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Questions from "./quizModule/question";
import { app } from "./config";
import { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import Souscription from "./authModule/components/souscription";
import SimpleCharts from "./quizModule/Chart";
function App() {
  const auth = getAuth();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  app;

  useEffect(() => {
    console.log("app");
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("user", auth);
      if (user) {
        console.log("user", user);
        // L'utilisateur est connecté
        setIsAuthenticated(true);
      } else {
        // L'utilisateur n'est pas connecté
        setIsAuthenticated(false);
      }
    });

    // Nettoyer l'observateur lors du démontage du composant
    return () => unsubscribe();
  }, [auth]);

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Auth />,
    },
    {
      path: "/",
      element: <Navigate to="/login" />,
    },
    {
      path: "/home",
      element: isAuthenticated ? <Questions /> : <Auth />,
    },
    {
      path: "/sign-in",
      element: <Souscription />,
    },
    {
      path: "/chart",
      element: <SimpleCharts />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
