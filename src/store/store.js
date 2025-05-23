import { create } from 'zustand';
import { nanoid } from 'nanoid';

const useStore = create((set) => ({
  messages: JSON.parse(localStorage.getItem('chat-messages')) || [],
  addMessage: (message) => set((state) => {
    const newMessages = [...state.messages, message];
    localStorage.setItem('chat-messages', JSON.stringify(newMessages));
    return { messages: newMessages };
  }),
}));

export default useStore;

// import { create } from 'zustand';

// const useChatStore = create((set) => ({
//   messages: JSON.parse(localStorage.getItem('messages')) || [],
//   addMessage: (msg) => {
//     set((state) => {
//       const updated = [...state.messages, msg];
//       localStorage.setItem('messages', JSON.stringify(updated));
//       return { messages: updated };
//     });
//   },
// }));

// export default useChatStore;
