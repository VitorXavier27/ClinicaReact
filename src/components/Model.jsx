import React from "react";

const Model = ({ isOpen, setCloseModal, children }) => {
  if (isOpen) {
    return (
      <div className=" fixed top-10 left-90 right-90  z-1000 shadow rounded-md">
        <div
          className="cursor-pointer bg-blue-200 hover:bg-blue-700 text-2xl pl-10"
          onClick={setCloseModal}
        >
          x
        </div>
        <div className=" top-50 left-50 transform p-15 bg-white rounded-md">
          {children}
        </div>
      </div>
    );
  }
  return null;
};

export default Model;
