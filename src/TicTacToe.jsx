import React from "react";
import "./TicTacToe.css";

function TicTacToe() {
  const [turn, setTurn] = React.useState("");
  const [game, setGame] = React.useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [wins, setWins] = React.useState("");

  const handleClick = (row, col) => {
    if (wins || !turn) return;
    if (game[row][col]) return;
    let tempGame = game.slice();
    console.log(tempGame, row, col);
    tempGame[row][col] = turn;
    setTurn(turn === "X" ? "O" : "X");
    setGame(tempGame);

    for (let i = 0; i < game.length; i++) {
      if (
        tempGame[i][0] == tempGame[i][1] &&
        tempGame[i][1] == tempGame[i][2] &&
        tempGame[i][2] == turn
      ) {
        setTurn("");
        setWins(turn);
        break;
      }
      if (
        tempGame[0][i] == tempGame[1][i] &&
        tempGame[1][i] == tempGame[2][i] &&
        tempGame[2][i] == turn
      ) {
        setTurn("");
        setWins(turn);
        break;
      }
    }
    if (
      tempGame[0][0] == tempGame[1][1] &&
      tempGame[2][2] == tempGame[1][1] &&
      turn == tempGame[2][2]
    ) {
      setTurn("");
      setWins(turn);
    }

    if (
      tempGame[0][2] == tempGame[1][1] &&
      tempGame[1][1] == tempGame[2][0] &&
      turn == tempGame[2][2]
    ) {
      setTurn("");
      setWins(turn);
    }
  };

  return (
    <div className="container">
      <br />
      <br />
      {turn ? (
        <p>Player {turn} Turn</p>
      ) : (
        <button
          onClick={() => {
            setTurn("X");
            setWins("");
            setGame([
              ["", "", ""],
              ["", "", ""],
              ["", "", ""],
            ]);
          }}
        >
          {" "}
          Start Game
        </button>
      )}
      {!wins ? <></> : <p>Game Ends</p>}
      <br />
      <div className="board">
        {game.map((row, rowIdx) => {
          return (
            <div className="row" key={rowIdx}>
              {row.map((col, colIdx) => (
                <div
                  onClick={() => {
                    handleClick(rowIdx, colIdx);
                  }}
                  className={`cell ${wins || !turn ? "disabled" : "cursor"}`}
                  key={rowIdx + "_" + colIdx}
                >
                  {game[rowIdx][colIdx]}
                  {/* <br />
                  {rowIdx},{colIdx} */}
                </div>
              ))}
            </div>
          );
        })}
      </div>
      {wins ? <p>Player {wins} wins!</p> : <></>}
    </div>
  );
}

export default TicTacToe;
