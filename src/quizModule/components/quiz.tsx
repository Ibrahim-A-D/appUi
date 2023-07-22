import { useState } from "react";
export const Quiz = () => {
  return (
    <div className="border flex items-center h-full border-black w-[70%] mx-auto rounded-lg p-14">
      <div className="text-lg">
        <h1>First Element of question</h1>
      </div>
      <div className="bg-white m-[40px] border rounded-lg">
        <div className="p-5 rounded-lg bg-slate-300">
          <p className="pb-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
            accusantium aliquid, ducimus reiciendis in doloremque quam maxime?
            Beatae expedita reprehenderit obcaecati voluptas dolor aperiam
            facilis facere aspernatur? Laudantium, explicabo aut.
          </p>
          <p className="pb-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
            accusantium aliquid, ducimus reiciendis in doloremque quam maxime?
            Beatae expedita reprehenderit obcaecati voluptas dolor aperiam
            facilis facere aspernatur? Laudantium, explicabo aut.
          </p>
          <p className="pb-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
            accusantium aliquid, ducimus reiciendis in doloremque quam maxime?
            Beatae expedita reprehenderit obcaecati voluptas dolor aperiam
            facilis facere aspernatur? Laudantium, explicabo aut.
          </p>
        </div>
        <div className="p-12 overflow-y-scroll h-[300px]">
          <div className="flex items-center mb-8">
            <p className="mr-8 border-r border-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              harum quia, labore est quidem sunt vero quaerat dignissimos quae
              eaque ea earum nemo, dolores eligendi enim, ad non assumenda
              temporibus!
            </p>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="w-4 h-4 border-2 border-blue-500 rounded-none form-radio"
                name="radio"
                value="true"
              />
              <span className="ml-2">True</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                className="w-4 h-4 border-2 border-red-500 rounded-none form-radio"
                name="radio"
                value="false"
              />
              <span className="ml-2">False</span>
            </label>
          </div>
          <div className="flex items-center mb-8">
            <p className="mr-8 border-r border-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              harum quia, labore est quidem sunt vero quaerat dignissimos quae
              eaque ea earum nemo, dolores eligendi enim, ad non assumenda
              temporibus!
            </p>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="w-4 h-4 border-2 border-blue-500 rounded-none form-radio"
                name="radio"
                value="true"
              />
              <span className="ml-2">True</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                className="w-4 h-4 border-2 border-red-500 rounded-none form-radio"
                name="radio"
                value="false"
              />
              <span className="ml-2">False</span>
            </label>
          </div>
          <div className="flex items-center mb-8">
            <p className="mr-8 border-r border-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              harum quia, labore est quidem sunt vero quaerat dignissimos quae
              eaque ea earum nemo, dolores eligendi enim, ad non assumenda
              temporibus!
            </p>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="w-4 h-4 border-2 border-blue-500 rounded-none form-radio"
                name="radio"
                value="true"
              />
              <span className="ml-2">True</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                className="w-4 h-4 border-2 border-red-500 rounded-none form-radio"
                name="radio"
                value="false"
              />
              <span className="ml-2">False</span>
            </label>
          </div>
          <div className="flex items-center mb-8">
            <p className="mr-8 border-r border-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              harum quia, labore est quidem sunt vero quaerat dignissimos quae
              eaque ea earum nemo, dolores eligendi enim, ad non assumenda
              temporibus!
            </p>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="w-4 h-4 border-2 border-blue-500 rounded-none form-radio"
                name="radio"
                value="true"
              />
              <span className="ml-2">True</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                className="w-4 h-4 border-2 border-red-500 rounded-none form-radio"
                name="radio"
                value="false"
              />
              <span className="ml-2">False</span>
            </label>
          </div>
          <div className="flex items-center mb-8">
            <p className="mr-8 border-r border-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              harum quia, labore est quidem sunt vero quaerat dignissimos quae
              eaque ea earum nemo, dolores eligendi enim, ad non assumenda
              temporibus!
            </p>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="w-4 h-4 border-2 border-blue-500 rounded-none form-radio"
                name="radio"
                value="true"
              />
              <span className="ml-2">True</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                className="w-4 h-4 border-2 border-red-500 rounded-none form-radio"
                name="radio"
                value="false"
              />
              <span className="ml-2">False</span>
            </label>
          </div>
          <div className="flex flex-col items-end mt-12">
            <p>Commentaire</p>
            <textarea
              style={{ height: "8rem", width: "21rem" }}
              name="commentaire"
              id="description"
              placeholder="Description"
              className="text-black bg-white border border-black fill"
              // value="come"
              // onChange={handleInputChange}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};
