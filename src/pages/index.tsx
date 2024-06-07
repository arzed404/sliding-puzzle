import { useState } from "react";
import Puzzle from "../components/Puzzle";
import Leaderboard from "../components/Leaderboard";
import Info from "../components/Info";
import Position from "../components/Position";
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
        <div className="max-w-full border-2 border-indigo-600 flex flex-col h-screen lg:justify-between flex-wrap-none lg:flex-row lg:flex-nowrap">
            {/* <div className="flex flex-col md:flex-row"> */}
            <div className=" lg:h-screen lg:w-[30%] bg-gray-300">
                <Leaderboard entries={leaderboard} />
            </div>
            <div className="w-full h-screen bg-red-500 flex items-center justify-center lg:w-[70%] ">
                <div >
                    <Position moves={moveCounter} time={timer} position={10} />
                    <Info moves={moveCounter} time={timer} />
                    <Puzzle setMoveCounter={setMoveCounter} setTimer={setTimer} updateLeaderboard={updateLeaderboard} />
                </div>
            </div>
            {/* </div> */}
        </div>
    );
};

export default Home;
