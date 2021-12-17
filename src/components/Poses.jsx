import React, { Component } from 'react';
import posesList from './posesList';
import '../index.css'

const queryString = require('query-string');
var _ = require("underscore");

class Poses extends Component {
    constructor(props) {
        super(props);
        const parsed = queryString.parse(window.location.search);
        this.parsedNumber = parsed.number
        this.shuffledPosesList = _.shuffle(posesList).slice(0, this.parsedNumber)
    }

    showPoses() {
        return (
            <>
                {this.shuffledPosesList.map(pose => {
                    return <>
                        <img src={pose.picUrl} alt={pose.name}></img>
                        <p>{pose.name}</p>
                    </>
                })}
            </>

        )
    }

    render() {
        return (
            <div className={'poses'}>
                {this.showPoses()}
            </div>
        );
    }
}

export default Poses;