interface InfoProps {
    position: number;
    moves: number;
    time: number;
}

const Info: React.FC<InfoProps> = ({ position, moves, time }) => {
    return (
        <div className=" border-2 border-indigo-600 flex justify-between w-full mb-4">
            <div>Moves: <span>{moves}</span></div>
            <h1>Position: <span>{position}</span></h1>
            <div>Time: <span>{Math.floor(time / 60)}:{String(time % 60).padStart(2, '0')}</span></div>
        </div>
    );
};

export default Info;
