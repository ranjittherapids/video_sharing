import React, { useEffect } from 'react'

export default function calluser() {
    useEffect(() => {
        function callPeer(id) {
            const peer = new Peer({
              initiator: true,
              trickle: false,
              config: {
        
                iceServers: [
                    {
                        urls: "stun:numb.viagenie.ca",
                        username: "sultan1640@gmail.com",
                        credential: "98376683"
                    },
                    {
                        urls: "turn:numb.viagenie.ca",
                        username: "sultan1640@gmail.com",
                        credential: "98376683"
                    }
                ]
            },
              stream: stream,
            });
            peer.on("signal", data => {
                socket.current.emit("callUser", { userToCall: id, signalData: data, from: yourID })
              })
          
              peer.on("stream", stream => {
                if (partnerVideo.current) {
                  partnerVideo.current.srcObject = stream;
                }
              });
          
              socket.current.on("callAccepted", signal => {
                setCallAccepted(true);
                peer.signal(signal);
              })
          
            }
        
      }, [ ])
  return (
    <div> 
        call user 
    </div>
  )
}
