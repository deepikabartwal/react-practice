import React from "react";

const person = (personDetails) => {
  return (
    <p>
      Hi! I am {personDetails.name} and I am {personDetails.age} years old.
    </p>
  );
};

export default person;
