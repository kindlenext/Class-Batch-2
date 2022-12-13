import React from 'react'

export default function Forin(props) {
  let x = props.x;
  let z = [];
  for (let i in x) {
    z.push(<li>{x[i]}</li>);
  }
  return (
    <div>
      <ul>{z}</ul>
    </div>);

}
