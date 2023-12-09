import { useState } from "react";

import { categories, flirtQuestions, dareQuestions, talkQuestions } from "../data";
import Card from "./components/Card";

const App = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <div className="relative bg-gameroom bg-cover h-screen w-screen flex items-center justify-center sm:px-20">
            <div className="absolute h-full w-full bg-black/60 backdrop-blur-sm" />
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-10 w-[90%] sm:w-[65%]">
                {categories.map((category, idx) => (
                    <Card
                        key={category.id}
                        cardTitle={category.category}
                        imgSrc={category.image}
                        active={idx === activeIndex}
                        message={
                            (activeIndex == 0 && flirtQuestions[Math.floor(Math.random() * flirtQuestions.length)]) ||
                            (activeIndex == 1 && dareQuestions[Math.floor(Math.random() * dareQuestions.length)]) ||
                            (activeIndex == 2 && talkQuestions[Math.floor(Math.random() * talkQuestions.length)])
                        }
                        onClick={() => {
                            if (confirm(`You selected: ${categories[idx].category}`)) {
                                setActiveIndex(categories.indexOf(category));
                            } else {
                                return;
                            }
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
