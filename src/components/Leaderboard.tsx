interface InfoProps {
    moves: number;
    time: number;
}

const Info: React.FC<InfoProps> = ({ moves, time }) => {
    return (
        <div className="border-2 border-indigo-600 w-full">
            <div className="border-1 border-black w-full flex flex-justify justify-between">
                <div className="ml-2">Moves</div>
                <div className="mr-2">Time</div>
            </div>
            <div className="border-1 border-black w-full flex flex-justify justify-between">
                <div className="ml-2">00<span>{moves}</span></div>
                <div className="mr-2"><span>{Math.floor(time / 60)}:{String(time % 60).padStart(2, '0')}</span></div>
            </div>
            <div className="border-1 border-black w-full flex flex-justify justify-between">
                <div className="ml-2">00<span>{moves}</span></div>
                <div className="mr-2"><span>{Math.floor(time / 60)}:{String(time % 60).padStart(2, '0')}</span></div>
            </div>
            <div className="border-1 border-black w-full flex flex-justify justify-between">
                <div className="ml-2">00<span>{moves}</span></div>
                <div className="mr-2"><span>{Math.floor(time / 60)}:{String(time % 60).padStart(2, '0')}</span></div>
            </div>
            <div className="border-1 border-black w-full flex flex-justify justify-between">
                <div className="ml-2">00<span>{moves}</span></div>
                <div className="mr-2"><span>{Math.floor(time / 60)}:{String(time % 60).padStart(2, '0')}</span></div>
            </div>
            <div className="border-1 border-black w-full flex flex-justify justify-between">
                <div className="ml-2">00<span>{moves}</span></div>
                <div className="mr-2"><span>{Math.floor(time / 60)}:{String(time % 60).padStart(2, '0')}</span></div>
            </div>
        </div>
    );
};

export default Info;
