/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable prefer-const */
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
import { getAuth } from "firebase/auth";
import {
  collection,
  getDocs,
  addDoc,
  setDoc,
  onSnapshot,
  where,
  query,
  orderBy,
} from "firebase/firestore";
import useArticleStore from "../store/formStore";

const Questions = () => {
  const [data, setData] = useState<any[]>([]);
  const [boxIndex, setBoxIndex] = useState(null);
  const auth = getAuth();
  const userStore = useArticleStore();

  const handleBoxClick = (index: any) => {
    if (boxIndex === index) {
      setBoxIndex(null); // Toggle box open/close if the same index is clicked
    } else {
      setBoxIndex(index); // Open the box of the clicked index
    }
  };

  auth.onAuthStateChanged((user) => {
    if (user) {
      userStore.setEmailUser(user.email!);
    } else {
      console.log("User Signed Out");
    }
  });

  const handleChange = (
    index: number,
    innerIndex: number,
    responseIndex: number,
    target: { value: string }
  ) => {
    setData((currentData) => {
      // Clone the elements to avoid modifying the state directly
      const newData = [...currentData];
      const newInnerData = [...newData[index]];

      const newElem = { ...newInnerData[innerIndex] };
      const newRep = { ...newElem.reponse[responseIndex] };

      // Update the repChoix field
      newRep.repChoix = target.value;

      // Update the nested objects and array
      newElem.reponse[responseIndex] = newRep;
      newInnerData[innerIndex] = newElem;

      newData[index] = newInnerData;

      return newData;
    });
  };

  const handleChangeInput = (
    event: any,
    mainIndex: number,
    subIndex: number
  ) => {
    setData((currentData) => {
      const newData = [...currentData];
      const newObject = { ...newData[mainIndex][subIndex] };
      newObject.commentaire = event.target.value;
      newData[mainIndex][subIndex] = newObject;
      return newData;
    });
  };

  useEffect(() => {
    const fetchUsers = () => {
      const usersCollection = collection(db, "modele");
      const specificEmailQuery = query(
        usersCollection,
        where("email", "==", userStore.emailUser),
        orderBy("ordre")
      );
      const emptyEmailQuery = query(
        usersCollection,
        where("email", "==", ""),
        orderBy("ordre")
      );
      const unsubscribeSpecificEmail = onSnapshot(
        specificEmailQuery,
        (snapshot) => {
          if (!snapshot.empty) {
            const usersData = snapshot.docs.map((doc) => doc.data());
            setData(usersData.map((user) => [user]));
          } else {
            unsubscribeSpecificEmail();
            const unsubscribeEmptyEmail = onSnapshot(
              emptyEmailQuery,
              (snapshot) => {
                const usersData = snapshot.docs.map((doc) => doc.data());
                setData(usersData.map((user) => [user]));
              },
              (error) => {
                console.error(
                  "Erreur lors de la récupération des utilisateurs:",
                  error
                );
              }
            );
            return unsubscribeEmptyEmail;
          }
        },
        (error) => {
          console.error(
            "Erreur lors de la récupération des utilisateurs:",
            error
          );
        }
      );

      return unsubscribeSpecificEmail;
    };

    fetchUsers();
    // saveDataToFirestoreFirst();
  }, []);

  const SendForm = () => {
    saveDataToFirestore(data);
  };

  // const saveDataToFirestoreFirst = async () => {
  //   try {
  //     // Boucle sur chaque objet dans le tableau de données
  //     for (const item of dataToSave) {
  //       await addDoc(collection(db, "modele"), {
  //         email: item.email,
  //         questions: item.questions,
  //         reponse: item.reponse,
  //         commentaire: item.commentaire,
  //       });
  //     }
  //     console.log("Données sauvegardées avec succès dans Firestore !");
  //   } catch (error) {
  //     console.error("Erreur lors de la sauvegarde des données :", error);
  //   }
  // };
  // Fonction pour sauvegarder les données dans Firestore
  const saveDataToFirestore = async (data: any) => {
    let newFlatData = data && data.flat();

    try {
      for (const item of newFlatData) {
        // Query the 'third' collection for documents where 'email' field is equal to the provided email
        const q = query(
          collection(db, "third"),
          where("email", "==", userStore.emailUser)
        );

        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          // If no such documents exist, create a new document
          await addDoc(collection(db, "third"), {
            email: userStore.emailUser,
            questions: item.questions,
            reponse: item.reponse,
            commentaire: item.commentaire,
          });
        } else {
          // If such documents exist, update them
          querySnapshot.forEach(async (doc) => {
            await setDoc(
              doc.ref,
              {
                email: userStore.emailUser,
                questions: item.questions,
                reponse: item.reponse,
                commentaire: item.commentaire,
              },
              { merge: true }
            );
          });
        }
      }

      console.log("Data saved successfully to Firestore!");
    } catch (error) {
      console.error("Erreur lors de la sauvegarde des données :", error);
    }
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
              Asked Questions
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
                          (elemA: any) =>
                            elemA &&
                            elemA.questions.map(
                              (valueOfQuestion: any, index: any) => (
                                <h2
                                  key={index}
                                  className="text-base font-semibold leading-none text-gray-800"
                                >
                                  {valueOfQuestion.firstQuestion}
                                </h2>
                              )
                            )
                        )}
                    </div>
                    {boxIndex === index ? (
                      <RiArrowDropDownLine className="text-4xl" />
                    ) : (
                      <RiArrowDropUpLine className="text-4xl" />
                    )}
                  </div>
                  {boxIndex === index && (
                    <ul className="">
                      <li>
                        {elem &&
                          elem.map(
                            (elemA: any, innerIndex: any) =>
                              elemA &&
                              elemA.reponse.map(
                                (valueRes: any, responseIndex: any) => (
                                  <>
                                    <div
                                      key={responseIndex}
                                      className="flex items-center justify-between w-full"
                                    >
                                      <p className="mt-4 text-base leading-normal text-gray-600 lg:w-96">
                                        {valueRes.rep1}
                                      </p>
                                      <FormControl>
                                        <FormLabel id="demo-controlled-radio-buttons-group">
                                          Choose
                                        </FormLabel>
                                        <RadioGroup
                                          aria-labelledby="demo-controlled-radio-buttons-group"
                                          name={valueRes.rep1}
                                          value={valueRes.repChoix}
                                          onChange={(event) =>
                                            handleChange(
                                              index,
                                              innerIndex,
                                              responseIndex,
                                              event.target
                                            )
                                          }
                                        >
                                          <FormControlLabel
                                            value="true"
                                            control={<Radio />}
                                            label="true"
                                          />
                                          <FormControlLabel
                                            value="false"
                                            control={<Radio />}
                                            label="false"
                                          />
                                        </RadioGroup>
                                      </FormControl>
                                    </div>
                                    <hr className="w-full h-2 text-black " />
                                  </>
                                )
                              )
                          )}
                        <TextField
                          id="outlined-multiline-static"
                          label="comment"
                          multiline
                          size={"medium"}
                          rows={4}
                          placeholder="comment"
                          className="w-full"
                          value={data[index][0].commentaire}
                          onChange={(e: any) => handleChangeInput(e, index, 0)}
                        />
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
      <div
        className=" bg-blue-600 absolute right-14
      w-[100px] h-[50px] flex justify-center items-center"
      >
        <button onClick={SendForm}>envoyer</button>
      </div>
    </div>
  );
};

export default Questions;
