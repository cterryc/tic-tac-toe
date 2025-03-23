import { useState, useRef, useEffect } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import Square from './components/square.jsx'
import musicFile from './assets/X2Download.app - Warcraft III Frozen Throne Music - Power of the Horde (128 kbps).mp3'
import reactLogo from './assets/react.svg'

const TURNS = {
  X: '❌',
  O: '⚪'
}

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return new Array(9).fill(null)
  })

  useEffect(() => {
    const audioElement = audioRef.current

    audioElement.addEventListener('ended', handleAudioEnd)

    return () => {
      audioElement.removeEventListener('ended', handleAudioEnd)
    }
  }, [])
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    return null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const handleAudioEnd = () => {
    audioRef.current.currentTime = 0
    audioRef.current.play()
  }

  const togglePlay = () => {
    const audioElement = audioRef.current

    if (isPlaying) {
      audioElement.pause()
    } else {
      audioElement.play()
    }

    setIsPlaying(!isPlaying)
  }

  return (
    <main className='board'>
      <div className='header'>
        <img src={reactLogo} className='logo react' alt='React logo' />
        <h1>Tic Tac Toe</h1>
      </div>
      <div className='controls'>
        <button className='control-btn' onClick={resetGame}>
          Reiniciar
        </button>
        <button className='control-btn' onClick={togglePlay}>
          {isPlaying ? 'Pausar música' : 'Reproducir música'}
        </button>
      </div>
      <audio ref={audioRef} src={musicFile} loop />
      <section className='game'>
        {board.map((ele, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {ele}
            </Square>
          )
        })}
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      {winner !== null && (
        <section className='winner'>
          <div className='text'>
            <h2 className='result-title'>
              {winner === false ? '¡Empate!' : '¡Ganador!'}
            </h2>
            <header className='win'>
              {winner && <Square>{winner}</Square>}
            </header>
            <footer>
              <button className='restart-btn' onClick={resetGame}>
                Jugar de nuevo
              </button>
            </footer>
          </div>
        </section>
      )}
    </main>
  )
}

export default App
