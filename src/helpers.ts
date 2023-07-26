
export interface users {
    username : string;
    password : string;
}

export interface dataOfQuestion{
    firstQuestion : string;
}
export interface reponse{
    rep1 : string;
    repChoix : string;
}

export interface dataToSave{
    email : string;
    questions : dataOfQuestion[];
    reponse : reponse[];
    commantaire : string;
}

export const dataToSave:dataToSave[] = [
  {
    email: "ibrah25.b@gmail.com",
    questions: [
      { firstQuestion: "manger tot" },
      { firstQuestion: "c'est quoi tot" },
    ],
    reponse: [
      {
        rep1: "aafd",
        repChoix: "",
      },
      {
        rep1: "qertqe",
        repChoix: "",
      },
      {
        rep1: "aqeqr",
        repChoix: "",
      },
    ],
    commantaire : ""
  },
  {
    email: "",
    questions: [
      { firstQuestion: "manger tres tot" },
      { firstQuestion: "c'est tot" },
    ],
    reponse: [
      {
        rep1: "aafdgge",
        repChoix: "",
      },
      {
        rep1: "qertqeeqer",
        repChoix: "",
      },
      {
        rep1: "aqeqreqrq",
        repChoix: "",
      },
    ],
    commantaire : ""
  },
];