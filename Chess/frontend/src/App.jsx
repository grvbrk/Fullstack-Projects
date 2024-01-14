import "./index.css";
import React from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

function App() {
  const game = React.useMemo(()=>{
    return new Chess()
  }, [])
  const [fen, setFen] = React.useState(game.fen())

  function makeAMove(move) {

    game.move(move)
    setFen(game.fen())


  }

  function handlePieceDrop(sourceSq, targetSq) {

    const move = sourceSq + targetSq;
    const pieceMoved = makeAMove(move);
  }

  return (
    <div className="chessboard-container">
      <div className="chessboard">
        <Chessboard
        animationDuration = {false}
          position={fen}
          customBoardStyle={{
            borderRadius: "4px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
          }}
          onPieceDrop={handlePieceDrop}
        />
      </div>
    </div>
  );
}

export default App;
