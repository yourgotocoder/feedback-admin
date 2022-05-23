import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

type ExitFeedbackData = {
    po1: { id: number; title: string; question: string; rating: string };
    po2: { id: number; title: string; question: string; rating: string };
    po3: { id: number; title: string; question: string; rating: string };
    po4: { id: number; title: string; question: string; rating: string };
    po5: { id: number; title: string; question: string; rating: string };
    po6: { id: number; title: string; question: string; rating: string };
    po7: { id: number; title: string; question: string; rating: string };
    po8: { id: number; title: string; question: string; rating: string };
    po9: { id: number; title: string; question: string; rating: string };
    po10: { id: number; title: string; question: string; rating: string };
    po11: { id: number; title: string; question: string; rating: string };
    po12: { id: number; title: string; question: string; rating: string };
    pso1: { id: number; question: string; rating: string };
    pso2: { id: number; question: string; rating: string };
    futurePlans: {
        selection: string;
        detail: string;
    };
    strengths: {
        strength_one: string;
        strength_two: string;
        strength_three: string;
    };
    weakness: {
        weakness_one: string;
        weakness_two: string;
        weakness_three: string;
    };
    satifaction: {
        selection: string;
        detail: string;
    };
    detailed_comments: string;
};

type ExitFeedback = {
    count: number;
    exitFeedbackData: ExitFeedbackData[];
};

function App() {
    const [exitFeedback, setExitFeedbackData] = useState<ExitFeedback>();

    useEffect(() => {
        fetch("http://localhost:3010/exit-feedback")
            .then((res) => res.json())
            .then((data: ExitFeedback) => {
                setExitFeedbackData(data);
            });
    }, []);
    return (
        <div>
            <ul>
                <li>{exitFeedback?.count}</li>
                {exitFeedback?.exitFeedbackData.map((data, index) => (
                    <li key={index}></li>
                ))}
            </ul>
        </div>
    );
}

export default App;
