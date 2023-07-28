import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { fetchAllPendulumAnswers, fetchPendulumAnswerById } from "../frontendApi/api";
 

const Pendulum = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [pendulumAnswers, setPendulumAnswers] = useState([]);
    const [activePendulumAnswer, setActivePendulumAnswer] = useState([]);
    const [onePendulumAnswer, setOnePendulumAnswer] = useState([]);
    // const [randomPendulumAnswer, setRandomPendulumAnswer] = useState ([]);

    useEffect(() => {
        if (props.isLoggedIn) {
            setIsLoggedIn(true);
        }
    }, [props.isLoggedIn, props.setIsLoggedIn]);

    useEffect(() => {
        const fetchPendulumAnswers = async () => {
            const allPendulumAnswers = await fetchAllPendulumAnswers();
            setPendulumAnswers(allPendulumAnswers);
        };
        fetchPendulumAnswers();

    }, []);

    console.log(pendulumAnswers);

    useEffect(() => {
        const fetchPendulumAnswer = async () => {
            const onePendulumAnswer = await fetchPendulumAnswerById();
            setOnePendulumAnswer(onePendulumAnswer);
        }
        fetchPendulumAnswer();
    }, []);


    function randomPendulumAnswer () {
        const len = allPendulumAnswers.length
        setActivePendulumAnswer(Math.floor(Math.random() * len))
    };


    useEffect(() => {
        document.title = `THE GREAT PENDULUM`
    })



    return (
        <div>
            <h1 className="header">
                ASK YOUR QUESTIONS TO THE GREAT PENDULUM
            </h1>
            <h2 className="bdy">
                Disclaimer: The pendulum will only respond with yes, no, or maybe
            </h2>
            <div>{onePendulumAnswer[activePendulumAnswer]}
                <div className="pendulumAnswerComponents">
                    {onePendulumAnswer.map((pendulumAnswer) => (
                        <div
                            key={pendulumAnswer.id}
                            className="pendulumComponent"
                        >

                            <h1 className="pendulumComponent">
                                {pendulumComponent.answer}
                            </h1>

                            <img src={pendulumComponent.pendulumImage} width="300px" height="300px">
                            </img>
                        </div>
                    ))};
                    <button onClick={() => randomPendulumAnswer(pendulumAnswers.pendulumImage, pendulumAnswers.answer)}>Get Your Answer</button>
                </div>
            </div>
        </div>
    );

};

export default Pendulum;