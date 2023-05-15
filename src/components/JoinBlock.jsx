import React from "react";
import socket from "../socket";

function JoinBlock() {
  return (
    <div className="join-block">
      <input type="text" placeholder="ID кімнати" />
      <input type="text" placeholder="Ваше ім'я" />
      <button className="btn btn-success">Увійти</button>
    </div>
  );
}

export default JoinBlock;
