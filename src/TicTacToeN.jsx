import React from "react";
import "./TicTacToe.css";

function TicTacToeN({ n }) {
  const [turn, setTurn] = React.useState("X");
  const [game, setGame] = React.useState([]);
  const [wins, setWins] = React.useState("");

  React.useEffect(() => {
    const gameArray = [];

    for (let i = 0; i < n; i++) {
      const tempArr = [];
      for (let j = 0; j < n; j++) {
        tempArr.push("");
      }
      gameArray.push(tempArr);
    }

    setGame(gameArray);
  }, []);

  const handleClick = (row, col) => {
    if (wins) return;
    if (game[row][col]) return;
    let tempGame = game.slice();
    console.log(tempGame, row, col);
    tempGame[row][col] = turn;
    setTurn(turn === "X" ? "O" : "X");
    setGame(tempGame);

    for (let i = 0; i < game.length; i++) {
      let rowStart = tempGame[i][0];
      let rowYes = true;
      let colStart = tempGame[0][i];
      let colYes = true;
      if (rowStart == "" && colStart == "") continue;
      for (let j = 0; j < game.length; j++) {
        if (rowStart != tempGame[i][j] || tempGame[i][j] == "") {
          rowYes = false;
        }
        if (colStart != tempGame[j][i] || tempGame[j][i] == "") {
          colYes = false;
        }
      }
      if (rowYes || colYes) {
        setWins(turn);
      }
    }

    let diagonal = tempGame[0][0];
    let oppositeDiagonal = tempGame[0][game.length - 1];
    let diagonalYes = true;
    let oppDiaYes = true;

    for (let i = 0; i < game.length; i++) {
      if (tempGame[i][i] != diagonal || tempGame[i][i] == "") {
        diagonalYes = false;
      }
      if (
        tempGame[i][game.length - 1 - i] != oppositeDiagonal ||
        tempGame[i][game.length - 1 - i] == ""
      ) {
        oppDiaYes = false;
      }
    }

    if (diagonalYes || oppDiaYes) {
      setWins(turn);
    }
  };

  return (
    <div className="container">
      {!wins ? <p>Player {turn} Turn</p> : <p>Game Ends</p>}
      <div className="board">
        {game.map((row, rowIdx) => {
          return (
            <div className="row" key={rowIdx}>
              {row.map((col, colIdx) => (
                <div
                  onClick={() => {
                    handleClick(rowIdx, colIdx);
                  }}
                  className={`cell ${wins ? "disabled" : "cursor"}`}
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

export default TicTacToeN;
