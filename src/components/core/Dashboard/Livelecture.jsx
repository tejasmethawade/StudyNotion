
import React from 'react';
import { useEffect, useState } from "react";
import { apiConnector } from '../../../services/apiconnector';
import { endpoints } from "../../../services/apis";
import { useParams } from 'react-router-dom';
// import io from "socket.io-client";
import { useDispatch, useSelector } from "react-redux"

// const {
//     CONSUMER_API
// } = endpoints;
// const socket = io("http://localhost:4000");

const Livelecture = () => {


    

    return (
        <div>
            <h3>LiveLecture</h3>
        </div>
    );
}

export default Livelecture;
