import React from "react";

const religion = [ 
    { Key : 1, Label: 'Hindhu'},
    { Key : 2, Label: 'Christian'},
    { Key : 3, Label: 'Sikhism'},
    { Key : 4, Label: 'Jainism'},
    { Key : 5, Label: 'Buddhism'},
    { Key : 6, Label: 'Others'} ]

const Religion = ({ label, ...others }) => (
  <>
    <label>{label}</label>
    <select {...others}>
      {religion.map(([value, name]) => (
        <option value={value}>{name}</option>
      ))}
    </select>
  </>
);
 
export default Religion;
