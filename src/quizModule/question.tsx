/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import { db } from "../config";
import { dataToSave } from "../helpers";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

const Questions = () => {
  const [value, setValue] = useState("false");
  const [data, setData] = useState<any[]>([]);
  const [message, setMessage] = useState<string>("");
  const [boxIndex, setBoxIndex] = useState(null);

  const handleBoxClick = (index: any) => {
    if (boxIndex === index) {
      setBoxIndex(null); // Toggle box open/close if the same index is clicked
    } else {
      setBoxIndex(index); // Open the box of the clicked index
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("value", event.target.value);
    setMessage(event.target.value);
  };

  useEffect(() => {
    // Fonction pour récupérer les données de toutes les collections
    // Fonction pour récupérer les données de Firestore
    const fetchUsers = async () => {
      try {
        const usersCollection = collection(db, "third");
        const usersSnapshot = await getDocs(usersCollection);

        const usersData = usersSnapshot.docs.map((doc) => doc.data());
        setData(usersData.map((user) => [user]));
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des utilisateurs :",
          error
        );
      }
    };

    // Appeler la fonction pour récupérer les données
    // saveDataToFirestore(dataToSave);
    fetchUsers();
  }, []);

  // Fonction pour sauvegarder les données dans Firestore
  // const saveDataToFirestore = async (data: any) => {
  //   try {
  //     // Boucle sur chaque objet dans le tableau de données
  //     for (const item of data) {
  //       // Ajoutez le document dans la collection "users" avec l'e-mail comme ID du document
  //       await addDoc(collection(db, "third"), {
  //         email: item.email,
  //         questions: item.questions,
  //         reponse: item.reponse,
  //       });
  //     }

  //     console.log("Données sauvegardées avec succès dans Firestore !");
  //   } catch (error) {
  //     console.error("Erreur lors de la sauvegarde des données :", error);
  //   }
  // };

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
          {data &&
            data.map((elem, index) => (
              <div key={index} className="w-[90%] mb-4">
                <div className="p-8 bg-white rounded shadow">
                  <div
                    onClick={() => handleBoxClick(index)}
                    data-menu
                    className="flex items-center justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white"
                  >
                    <div>
                      {elem &&
                        elem.map(
                          (elemA: any, index: any) =>
                            elemA &&
                            elemA.questions.map((valueOfQuestion: any) => (
                              <h2
                                key={index}
                                className="text-base font-semibold leading-none text-gray-800"
                              >
                                {valueOfQuestion.firstQuestion}
                              </h2>
                            ))
                        )}
                    </div>
                    {boxIndex === index ? (
                      <RiArrowDropDownLine className="text-4xl" />
                    ) : (
                      <RiArrowDropUpLine className="text-4xl" />
                    )}
                  </div>
                  {boxIndex === index && (
                    <ul key={index} className="">
                      <li>
                        {elem &&
                          elem.map(
                            (elemA: any, index: any) =>
                              elemA &&
                              elemA.reponse.map((valueRes: any) => (
                                <div
                                  key={index}
                                  className="flex items-center justify-between w-full"
                                >
                                  <p className="mt-4 text-base leading-normal text-gray-600 lg:w-96">
                                    {valueRes.rep1}
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
                              ))
                          )}
                        <TextField
                          id="outlined-multiline-static"
                          label="commentaire"
                          multiline
                          size={"medium"}
                          rows={4}
                          placeholder="Laisser un commentaire"
                          className="w-full"
                          onChange={handleChangeInput}
                        />
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
