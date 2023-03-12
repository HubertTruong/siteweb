import cn from "classnames";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { hidePopups, useSelector } from "../store";
import axios from 'axios';

export default function Leaderboard() {
  const dispatch = useDispatch();
  const shown = useSelector((s) => s.popups.leaderboard);

  axios.get(`http://192.168.99.10:${process.env.REACT_APP_SERVER_PORT}/test`, {
    params: {
      table: 'users',
    },
  }).then((response: { data: any; }) => {
    console.log(response.data);
    let titleLeaderboard = (document.getElementById("titleLeaderboard") as HTMLInputElement);
    let leaderboard = (document.getElementById("leaderboard") as HTMLInputElement)
    titleLeaderboard.innerHTML = "Classement :";
    leaderboard.innerHTML = "";
    response.data.forEach((element: { id: any; name: any; score: any; }) => {
      leaderboard.innerHTML += `
        <tr>
          <td>${element.id}</td>
          <td>${element.name}</td>
          <td> ${element.score}</td>
        </tr>`;
    });
  });



  return (
    <div className={cn("popup-wrapper", !shown && "hidden")}>
      <div className="popup">
        <h1 id="titleLeaderboard">Loading ...</h1>
        <div>
          <table className="tableLeaderboard">
            <thead>
              <tr>
                <th></th>
                <th>Nom</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody id="leaderboard">
            </tbody>
          </table>
        </div>
        <button className="close" onClick={() => dispatch(hidePopups())}>
          close
        </button>
      </div>
    </div>
  );
}
