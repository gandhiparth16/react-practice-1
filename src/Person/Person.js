import React from "react";

const person = (props) => {
  let isHobby = null;
  let hobby = props.children; //{props.children} cannot be used in conditional statement
  if (hobby) {
    isHobby = ". Hobby is" + hobby;
  }
  return (
    /*to add multiple lines inside return statement, use ();
              return multiple lines in output, use div to wrap. */
    <h5>
      Hi {props.name} aged {props.age} {isHobby}
    </h5>
  );
};

export default person;
