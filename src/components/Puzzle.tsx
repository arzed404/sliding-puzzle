import { useState, useEffect } from "react";

interface PuzzleProps {
    setMoveCounter: (moves: number) => void;
    setTimer: (time: number) => void;
    updateLeaderboard: (moves: number, time: string) => void;
}

const Puzzle: React.FC<PuzzleProps> = ({ setMoveCounter, setTimer, updateLeaderboard }) => {
    const [puzzleState, setPuzzleState] = useState<(number | null)[]>([]);
    const [moveCounter, internalSetMoveCounter] = useState(0);
    const [timer, internalSetTimer] = useState(0);
    const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const initialState = [1, 2, 3, 4, 5, 6, 7, 8, null];
        shuffleArray(initialState);
        setPuzzleState(initialState);
        internalSetMoveCounter(0);
        internalSetTimer(0);
        startTimer();
    }, []);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const emptyIndex = puzzleState.indexOf(null);
            let moveIndex;
            switch (event.key) {
                case "ArrowUp":
                    moveIndex = emptyIndex + 3;
                    break;
                case "ArrowDown":
                    moveIndex = emptyIndex - 3;
                    break;
                case "ArrowLeft":
                    moveIndex = emptyIndex + 1;
                    break;
                case "ArrowRight":
                    moveIndex = emptyIndex - 1;
                    break;
                default:
                    return;
            }
            if (moveIndex >= 0 && moveIndex < puzzleState.length) {
                moveBlock(moveIndex);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [puzzleState]);

    useEffect(() => {
        setMoveCounter(moveCounter);
    }, [moveCounter]);

    useEffect(() => {
        setTimer(timer);
    }, [timer]);

    const shuffleArray = (array: (number | null)[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    const isValidMove = (index: number, emptyIndex: number) => {
        const validMoves = [emptyIndex - 1, emptyIndex + 1, emptyIndex - 3, emptyIndex + 3];
        return validMoves.includes(index);
    };

    const moveBlock = (index: number) => {
        const emptyIndex = puzzleState.indexOf(null);
        if (isValidMove(index, emptyIndex)) {
            const newState = [...puzzleState];
            [newState[emptyIndex], newState[index]] = [newState[index], newState[emptyIndex]];
            setPuzzleState(newState);
            internalSetMoveCounter(moveCounter + 1);
            checkWin(newState);
        }
    };

    const startTimer = () => {
        const interval = setInterval(() => internalSetTimer((prev) => prev + 1), 1000);
        setTimerInterval(interval);
    };

    const checkWin = (state: (number | null)[]) => {
        const winState = [1, 2, 3, 6, 5, 4, 7, 8, null];
        if (JSON.stringify(state) === JSON.stringify(winState)) {
            if (timerInterval) clearInterval(timerInterval);
            alert(`You win! Moves: ${moveCounter}, Time: ${Math.floor(timer / 60)}:${String(timer % 60).padStart(2, '0')}`);
            updateLeaderboard(moveCounter, `${Math.floor(timer / 60)}:${String(timer % 60).padStart(2, '0')}`);
        }
    };

    return (
        <div className="grid grid-cols-3 grid-rows-3 gap-2">
            {puzzleState.map((value, index) => (
                <div
                    key={index}
                    className={`flex items-center justify-center w-24 h-24 bg-blue-500 text-white text-2xl cursor-pointer ${value === null ? "bg-gray-300 cursor-default" : ""
                        }`}
                    onClick={() => value !== null && moveBlock(index)}
                >
                    {value}
                </div>
            ))}
        </div>
    );
};

export default Puzzle;
