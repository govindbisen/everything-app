import React from 'react';
import { useState } from 'react';

// import "./styles.css";


export function Conditionalbtlike() {
  const [show, setShow] = useState(true);
  const [like, setLike] = useState(0);
  const [dislike, setdisLike] = useState(0);

  const style1 = { background: like >= dislike ? "red" : "yellow" };
  const buttonsm = show ? "showless" : "showmore";
  return (
    <div>
      <h2> Filename Conditionalbtlike</h2>
      <h2 style={style1}>Rainbow in my area it is raining!! </h2>
      <button onClick={() => setLike(like + 1)}>↑:{like}</button>
      <button onClick={() => setdisLike(dislike + 1)}>↓:{dislike}</button>
      <button onClick={() => setShow(!show)}> {buttonsm}</button>
      {show ? <p>I am visible</p> : ""}
    </div>
  );
}
