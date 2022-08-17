import React from "react";
import QuestionList from "../../Components/HomeMainbar/QuestionList";
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar';
import RightSidebar from '../../Components/RightSidebar/RightSidebar';
import QuestionsDetails from "./QuestionsDetails";

const DisplayQuestion = () =>{
    return (
        <div>
            <div className="home-container-1">
            <LeftSidebar/>
            {/* leftsidebar is .jsx file, used as a tag */}
            <div className="home-container-2" >
                <QuestionsDetails/>
                <RightSidebar/>
            </div>

        </div>

        </div>
    )
}

export default DisplayQuestion