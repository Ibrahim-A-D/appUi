/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { makeAutoObservable } from "mobx";
import { dataOfQuestion, dataToSave, reponse } from "../helpers";

export class ArticleStore {
  emailUser =""
  order: dataToSave = {
    email: "",
    first:0,
    commentaire:"",
    questions: [
      { 
        firstQuestion: ""
     },
      { 
        firstQuestion: "" 
    },
    ],
    reponse: [
      {
        rep1: "",
        repChoix: "",
      },
      {
        rep1: "",
        repChoix: "",
      },
      {
        rep1: "",
        repChoix: "",
      },
    ],
  };

  constructor() {
    makeAutoObservable(this);
  }
  setEmailUser(email:string){
    this.emailUser = email
  }
  setOrder(order: dataToSave | any) {
    this.order = order;
    console.log(" dd",order);
  }

  setQuestion(question : dataOfQuestion[]){
    this.order = {
      ...this.order,
      questions : question};
  }

  setResponse(response : reponse[]){
    this.order = {
      ...this.order,
      reponse : response};
  }
}

let _articleStore: ArticleStore;

const useArticleStore = () => {
  if (!_articleStore) _articleStore = new ArticleStore();
  return _articleStore;
};

export default useArticleStore;