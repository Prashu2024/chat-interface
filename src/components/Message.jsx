
import PluginRenderer from "./PluginRendered";
export default function Message({ message }) {
    return (
    //   <div className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
        <div
          className={`max-w-[70%] rounded-lg p-3 mt-4 ${
            message.sender === "user"
              ? "bg-blue-500 text-white"
              : "bg-white border shadow-sm"
          }`}
        >
          {message.type === "plugin" ? (
            <PluginRenderer plugin={message} />
          ) : (
            <p className="text-sm">{message.content}</p>
          )}
          <p
            className={`text-xs mt-1 ${
              message.sender === "user" ? "text-blue-100" : "text-gray-500"
            }`}
          >
            {new Date(message.timestamp).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
    //   </div>
    );
  }
