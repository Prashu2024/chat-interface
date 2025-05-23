import { useRef, useEffect } from "react";
import { nanoid } from "nanoid";
import useStore from "../store/store";
import Message from "./Message";
import { processCommand } from "../utils/commandParse";

export default function ChatUI() {
  const inputRef = useRef();
  const messagesEndRef = useRef();
  const { messages, addMessage } = useStore();

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const content = inputRef.current.value.trim();
    if (!content) return;

    // Add user message
    addMessage({
      id: nanoid(),
      sender: "user",
      content,
      type: "text",
      timestamp: new Date().toISOString(),
    });

    // Process command
    const response = await processCommand(content);
    if (response) {
      addMessage({
        id: nanoid(),
        sender: "assistant",
        ...response,
        timestamp: new Date().toISOString(),
      });
    }

    inputRef.current.value = "";
  };

//   return (
//     <div className="flex flex-col h-screen bg-gray-100">
//       {/* Header */}
//       <div className="bg-white shadow-sm border-b sticky top-0 z-10  px-6">
//         <h1 className="text-xl font-bold text-gray-800 text-center">
//           Chat Assistant
//         </h1>
//         <div className="flex justify-center items-center h-[-50%] bg-gray-50">
//           <div className="bg-white shadow-lg p-8 rounded-lg h-[20%] w-[20%] mx-auto m-4">
//             <form onSubmit={handleSubmit} className="flex items-center gap-4">
//               <input
//                 ref={inputRef}
//                 className="flex-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 px-4 py-2 bg-white text-sm"
//                 placeholder="Type a message..."
//               />
//               <button
//                 type="submit"
//                 className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm transition-colors"
//               >
//                 Send
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Chat Messages Container */}
//       <div className="flex-1 h-[80%]overflow-y-auto p-4">
//         <div className="max-w-2xl mx-auto space-y-4">
//           {messages.map((msg) => (
//             <Message key={msg.id} message={msg} />
//           ))}
//           <div ref={messagesEndRef} />
//         </div>
//       </div>

//       {/* Fixed Input Container */}
//     </div>
//   );

return (
    <div className="flex flex-col space-y-10 h-screen bg-gray-100">
      {/* Sticky Header + Input Bar */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10 px-6 py-4">
        {/* Title */}
        <h1 className="text-xl font-bold text-gray-800 text-center mb-2">
          Chat Assistant
        </h1>
  
        {/* Input Bar */}
        <form onSubmit={handleSubmit} className=" w-[50%] mx-auto mb-8 flex items-center gap-4">
          <input
            ref={inputRef}
            className="flex-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 px-4 py-3 text-sm"
            placeholder="Type a message..."
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm transition-colors"
          >
            Send
          </button>
        </form>
      </div>
  
      {/* Scrollable Messages Section */}
      <div className="flex-1 h-[80%]overflow-y-auto mt-4  px-4 py-6">
        <div className="max-w-2xl mx-auto space-y-4">
          {messages.map((msg) => (
            <Message key={msg.id} message={msg} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
    </div>
  );
  
  
  
}
