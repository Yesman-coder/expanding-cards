import React from "react";

function Card({ people }) {
  return (
    <>
      {people.map((person) => {
        const { firstname, lastname, image } = person;
        return (
          <div
            className="panel"
            style={{ backgroundImage: "url(" + image + ")" }}
          >
            <h3>{firstname + " " + lastname}</h3>
          </div>
        );
      })}
    </>
  );
}

export default Card;
