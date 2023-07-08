import React, { useState, useEffect } from "react";
import { fetchAllPendulumAnswers } from "../frontendApi/api";

const Pendulum = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [pendulumAnswers, setPendulumAnswers] = useState([]);
    const [pendulumGenerator, setPendulumGenerator] = useState([]);

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
        document.title = `THE GREAT PENDULUM ${pendulumGenerator}`
    })

    

    return (
        <div>
            <h1 className="header">
                ASK YOUR QUESTIONS TO THE GREAT PENDULUM
            </h1>
            <h2 className="bdy">
                Disclaimer: The pendulum will only respond with yes, no, or maybe
            </h2>
        </div>);
};

export default Pendulum;