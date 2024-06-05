interface InfoProps {
    moves: number;
    time: number;
}

const Info: React.FC<InfoProps> = ({ moves, time }) => {
    return (
        <div className="flex justify-between w-full mb-4">
            <div>Moves: <span>{moves}</span></div>
            <div>Time: <span>{Math.floor(time / 60)}:{String(time % 60).padStart(2, '0')}</span></div>
        </div>
    );
};

export default Info;
