import "./Experience.css";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import Timeline from "./Timeline/Timeline";
import ExperienceData from '../../Data/Experience/Experience.js';
import { useState } from "react";
import Tabs from "./Tabs/Tabs";
import Heading from "../Heading/Heading";

const Experience = () => {
    return (
        <div className="Experience container mt-5" id="experience">

            <Heading name="Experience" />

            <div class="content">
                <div class="tabs"> <Tabs ExperienceData={ExperienceData} /></div>
            </div>

        </div>
    );
};

export default Experience;
