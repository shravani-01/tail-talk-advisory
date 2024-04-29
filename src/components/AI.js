import React, { useEffect } from 'react';

const AI = () => {
    useEffect(() => {
        // Initialize the chatbot after the component mounts
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            // Initialize the chatbot
            window.Chatbot.initFull({
                chatflowid: "74168cdd-c1b0-4c74-b815-f52bd8660b2d",
                apiHost: "https://fw.telaeris.com",
                theme: {
                    button: {
                        // backgroundColor: "#332d2d",
                        backgroundColor: '#ffe7d5',
                        // backgroundColor: '#FFDAB9',
                        right: 20,
                        size: "medium",
                        iconColor: "#332d2d",
                        customIconSrc: "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg"
                      },
                    chatWindow: {
                        welcomeMessage: "Hello! This is a custom welcome message",
                        backgroundColor: "#ffe7d5",
                        // backgroundColor: "#FFD1DC",
                        height: 800,
                        width: 1500,
                        fontSize: 16,
                        poweredByTextColor: "#ffe7d5",
                        botMessage: {
                            // backgroundColor: "#f7f8ff",
                            backgroundColor: "#ffc7b0",
                            // backgroundColor: "#FFB6C1",
                            // backgroundColor: "#FFB6C1",
                            textColor: "black",
                            showAvatar: true,
                            // avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
                            avatarSrc: "https://upload.wikimedia.org/wikipedia/commons/5/51/Paw-print.svg",
                        },
                        userMessage: {
                            // backgroundColor: "#3B81F6",
                            // textColor: "#ffffff",
                            backgroundColor: "#ffc7b0",
                            // backgroundColor: "#FFB6C1",
                            textColor: "black",
                            showAvatar: false,
                            // avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
                        },
                        textInput: {
                            placeholder: "Type your question",
                            backgroundColor: "#ffffff",
                            // textColor: "#303235",
                            // backgroundColor: "#332d2d",
                            textColor: "black",
                            sendButtonColor: "black",
                            // sendButtonColor: "#3B81F6",
                        }
                    }
                }
                
            });
        };

        // Cleanup function to remove the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="ai-container">
            <br></br>
            <br></br>
            <br></br>
            <flowise-fullchatbot></flowise-fullchatbot>
        </div>
    );
};

export default AI;
// import React, { useEffect } from 'react';

// const AI = () => {
//     let observer;

//     useEffect(() => {
//         const initChatbot = () => {
//             console.log('Initializing chatbot...');
//             if (window.Chatbot && window.Chatbot.initFull) {
//                 console.log('Chatbot object found. Initializing...');
//                 window.Chatbot.initFull({
//                     chatflowid: "74168cdd-c1b0-4c74-b815-f52bd8660b2d",
//                     apiHost: "https://fw.telaeris.com",
//                     theme: {
//                         chatWindow: {
//                             welcomeMessage: "Hello! This is custom welcome message",
//                             backgroundColor: "#ffffff",
//                             height: 700,
//                             width: 400,
//                             fontSize: 16,
//                             poweredByTextColor: "#303235",
//                             botMessage: {
//                                 backgroundColor: "#f7f8ff",
//                                 textColor: "#303235",
//                                 showAvatar: true,
//                                 avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
//                             },
//                             userMessage: {
//                                 backgroundColor: "#3B81F6",
//                                 textColor: "#ffffff",
//                                 showAvatar: true,
//                                 avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
//                             },
//                             textInput: {
//                                 placeholder: "Type your question",
//                                 backgroundColor: "#ffffff",
//                                 textColor: "#303235",
//                                 sendButtonColor: "#3B81F6",
//                             }
//                         }
//                     }
//                 });
//             } else {
//                 console.error('Chatbot object or initFull method not found.');
//             }
//         };

//         const initChatbotWhenAvailable = () => {
//             console.log('Checking if <flowise-fullchatbot> element is available...');
//             if (document.querySelector('flowise-fullchatbot')) {
//                 console.log('<flowise-fullchatbot> element found. Initializing chatbot...');
//                 initChatbot();
//                 observer.disconnect(); // Disconnect observer once the element is found
//             }
//         };

//         initChatbotWhenAvailable();

//         observer = new MutationObserver(initChatbotWhenAvailable);
//         observer.observe(document.body, { childList: true, subtree: true });

//         return () => {
//             if (observer) {
//                 observer.disconnect();
//             }
//         };
//     }, []);

//     return (
//         <div>
//             <flowise-fullchatbot></flowise-fullchatbot>
//         </div>
//     );
// };

// export default AI;
