import { useState } from "react";
import Puzzle from "../components/Puzzle";
import Leaderboard from "../components/Leaderboard";
import Info from "../components/Info";
import "tailwindcss/tailwind.css"

interface LeaderboardEntry {
    moves: number;
    time: string;
}

const Home: React.FC = () => {
    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
    const [moveCounter, setMoveCounter] = useState(0);
    const [timer, setTimer] = useState(0);

    const updateLeaderboard = (moves: number, time: string) => {
        setLeaderboard((prev) => [...prev, { moves, time }]);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col md:flex-row">
                <div className="mr-8 mb-8 md:mb-0">
                    <Leaderboard entries={leaderboard} />
                </div>
                <div>
                    <Info moves={moveCounter} time={timer} />
                    <Puzzle setMoveCounter={setMoveCounter} setTimer={setTimer} updateLeaderboard={updateLeaderboard} />
                </div>
            </div>
        </div>
    );
};

export default Home;
