
import React from "react";
import { useEffect, useState } from "react";
import { apiConnector } from '../../../services/apiconnector';
import { useParams } from 'react-router-dom';
import { endpoints } from "../../../services/apis";
// import io from "socket.io-client";
import { useDispatch, useSelector } from "react-redux"

// const {
//     BROADCAST_API
// } = endpoints;
const toggleButton = document.getElementById("toggleCam");
// const socket = io("http://localhost:4000");

export default function Liveclass() {

    // const { courseId } = useParams();
    // const { user } = useSelector((state) => state.profile)
    // const [messages, setMessages] = useState([]);
    // const [inputValue, setInputValue] = useState("");
    // const userName = user?.firstName;

    // let userStream;

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
    //         console.log(courseId);
    //         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    //         // const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
    //         userStream = stream;
    //         console.log(stream);
    //         document.getElementById("video").srcObject = stream;
    //         const peer = createPeer(courseId);
    //         console.log("Broadcast peer got created", peer);
    //         stream.getTracks().forEach(track => peer.addTrack(track, stream));
    //     } catch (error) {
    //         console.error("Error initializing broadcaster:", error);
    //     }
    // }

    // async function handleNegotiationNeededEvent(peer, courseId) {
    //     try {
    //         const offer = await peer.createOffer();
    //         await peer.setLocalDescription(offer);
    //         const payload = {
    //             sdp: peer.localDescription,
    //             courseId:courseId,
    //             isScreenSharing: true
    //         };

    //         console.log("Offer sent", payload);
    //         const { data } = await apiConnector("post", BROADCAST_API, payload)
    //         console.log("Answer received:", data);
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
    //     peer.onnegotiationneeded = () => handleNegotiationNeededEvent(peer, courseId);

    //     return peer;
    // }

    // function handleToggleClick(){
    //     console.log("Reached");
    //     const videoTrack = userStream.getTracks().find(track => track.kind === 'video');
    //     if(videoTrack.enabled){
    //         videoTrack.enabled = false;
    //     }
    //     else{
    //         videoTrack.enabled = true;
    //     }
        
    // };

    return (
        <div>
{/*             <div>
                <div className="mb-14 items-center justify-between">
                    <h1 className="text-3xl font-medium text-richblack-5">Live</h1>
                    <button className="text-3xl font-medium text-richblack-5" onClick={() => init(courseId)}>Start Stream</button>
                    <video controls autoPlay id="video"></video>
                    <button className="text-3xl font-medium text-richblack-5" id="toggleCam" onClick={handleToggleClick}>Toggle Camera</button>
                </div>
            </div>

            <div>
                <div className="mb-14 items-center justify-between">
                    <h1 className="text-3xl font-medium text-richblack-5">Live Chat</h1>
                    <div className="chat-container">
                        <div className="chat-messages text-white">
                            {messages.map((msg, index) => (
                                <div key={index} className="chat-message">
                                    <strong>{msg.userName}:</strong>
                                    <strong>{msg.message}</strong>
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
            </div> */}
            <LiveClass
        </div>
    );
}
