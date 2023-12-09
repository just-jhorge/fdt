interface CardProps {
    cardTitle: string;
    imgSrc: string;
    active: boolean;
    message: string | boolean;
    onClick: () => void;
}

const Card: React.FC<CardProps> = ({ cardTitle, imgSrc, onClick, active, message }) => {
    return (
        <div
            onClick={onClick}
            className="relative h-[18rem] sm:h-[35rem] cursor-pointer shadow-lg sm:hover:-translate-y-5 transition duration-300 last:translate-x-1/2 sm:last:translate-x-0"
        >
            <div
                className={`relative flex items-center justify-center h-full w-full bg-red-700 ${
                    active ? "opacity-0" : "opacity-100"
                }`}
            >
                <h3 className="absolute text-center bottom-8 sm:bottom-20 left-0 right-0 text-2xl sm:text-5xl capitalize text-black overflow-hidden">
                    {cardTitle}
                </h3>
                <img
                    className="h-[7rem] sm:h-[14rem] object-cover -translate-y-5 sm:-translate-y-10"
                    src={imgSrc}
                    alt="FDT"
                />
            </div>
            <div
                className={`absolute top-0 bottom-0 left-0 right-0 bg-white transition duration-300 ${
                    active ? "opacity-100" : "opacity-0"
                } p-3 sm:p-5`}
            >
                <div className="container border border-black h-full">
                    <p className="p-2 sm:p-5 text-neutral-600 uppercase font-sans font-light text-sm sm:text-2xl">
                        {message}
                    </p>
                </div>
                <div className="absolute bottom-1 sm:bottom-2.5 right-5 sm:right-10 bg-white px-1.5 sm:px-3 uppercase font-sans text-xs sm:text-xl text-black">
                    {cardTitle}
                </div>
            </div>
        </div>
    );
};

export default Card;
