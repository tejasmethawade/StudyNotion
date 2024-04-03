
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


    // const {courseId} = useParams();
    // const { user } = useSelector((state) => state.profile)
    // const [messages, setMessages] = useState([]);
    // const [inputValue, setInputValue] = useState("");
    // const userName = user?.firstName;

    // useEffect(() => {
    //     socket.emit('join room', { courseId, userName });

    //     socket.on('chat message', ({ userName, message }) => {
    //         setMessages(prevMessages => [...prevMessages, { userName, message }]);
    //     });

    //     return () => {
    //         socket.emit('leave room', courseId);
    //         socket.off('chat message');
    //     };
    // }, [courseId, userName]);

    //   const sendMessage = () => {
    //     if (inputValue.trim() !== "") {
    //       const message = {
    //         courseId: courseId,
    //         userName: userName,
    //         text: inputValue,
    //       };
    //       // Send the chat message to the backend
    //       socket.emit("chat message", inputValue);
    //       setInputValue("");
    //     }
    //   };
    
    // async function init(courseId) {
    //     try {
    //         const peer = createPeer(courseId);
    //         console.log("Receiver peer got created", peer);
    //         peer.addTransceiver("video", { direction: "recvonly" });
    //     } catch (error) {
    //         console.error("Error initializing consumer:", error);
    //     }
    // }

    // async function handleNegotiationNeededEvent(peer, courseId) {
    //     try {
    //         const offer = await peer.createOffer();
    //         await peer.setLocalDescription(offer);
    //         const payload = {
    //             sdp: peer.localDescription,
    //             courseId: courseId
    //         };

    //         console.log("Offer sent:", payload);
    //         const { data } = await apiConnector("post", CONSUMER_API, payload)
    //         console.log("Answer Received:", data);
    //         const desc = new RTCSessionDescription(data.sdp);
    //         peer.setRemoteDescription(desc).catch(e => console.log(e));
    //     } catch (error) {
    //         console.error("Error handling negotiation needed event:", error);
    //     }
    // }

    // function createPeer(courseId) {
    //     const peer = new RTCPeerConnection({
    //         iceServers: [
    //             {
    //                 urls: "stun:stun.stunprotocol.org"
    //             }
    //         ]
    //     });
    //     peer.ontrack = handleTrackEvent;
    //     peer.onnegotiationneeded = () => handleNegotiationNeededEvent(peer, courseId);

    //     return peer;
    // }

    // function handleTrackEvent(e) {
    //     console.log("Triggered handleTrack");
    //     document.getElementById("video").srcObject = e.streams[0];
    // };

    return (
        <div>
{/*             <div>
                <div className="mb-14 items-center justify-between">
                    <h1 className="text-3xl font-medium text-richblack-5">Live</h1>
                    <button className="text-3xl font-medium text-richblack-5" onClick={() => init(courseId)}>View Stream</button>
                    <video controls autoPlay id="video"></video>
                </div>
            </div>

            <div>
                <div className="mb-14 items-center justify-between">
                    <h1 className="text-3xl font-medium text-richblack-5">Live Chat</h1>
                    <div className="chat-container">
                        {/* <h3 className='text-white'>chat container</h3> */}
                        <div className="chat-messages text-white">
                            {messages.map((msg, index) => (
                                
                                <div key={index} className="chat-message text-white">
                                    <strong>{msg.userName}:</strong>
                                    <strong>{msg.message}</strong>
                                    {/* <span>{msg.message}</span> */}

                                    {/* <strong>{msg.userName}:</strong> {msg.message} */}
                                </div>
                            ))}
                        </div>
                        <div className="chat-input">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type your message..."
                        />
                        <button onClick={sendMessage}>Send</button>
                        </div>
                    </div>
                </div>
            </div> */
            <h1>LiveLecture</h1>
        </div>
    );
}

export default Livelecture;
