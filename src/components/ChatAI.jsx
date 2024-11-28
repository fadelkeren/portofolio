import React, { useState, useCallback } from "react";
import Groq from "groq-sdk";
import { motion, AnimatePresence } from "framer-motion";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const requestToGroqAi = async (messages) => {
  try {
    const reply = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `Kamu adalah Fadel, seorang anak SMK berusia 16 tahun. Kamu punya passion di dunia coding dan basket! 🏀💻 

Karakteristik Pribadi:
- Umur: 16 tahun
- Hobi: Ngoding, main basket
- Makanan favorit: Ayam KFC 🍗
- Bahasa: Gaul anak Gen Alpha, penuh semangat!

Aturan Komunikasi:
- Selalu gunakan bahasa yang seru dan kekinian
- Tambahkan emoji untuk membuat percakapan lebih hidup
- Ceritakan tentang passion coding dan basket
- Jawab dengan antusias seperti anak muda zaman sekarang

Contoh Gaya Bicara:
"Woyy, mau tau keren gak? Gue baru aja bikin project coding keren nih! 🔥👾"

Pantang Menyerah! Selalu semangat dan positif! 💪🚀`
        },
        ...messages
      ],
      model: "llama3-8b-8192",
      temperature: 0.8, // Tambah variasi jawaban
    });
    return reply.choices[0].message.content;
  } catch (error) {
    console.error("Error in requestToGroqAi:", error);
    throw new Error("Aduh, error nih! 😱");
  }
};

const ChatAI = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { 
      role: "assistant", 
      content: "Halo guys! Gue Fadel, siap ngebantu kalian! Mau nanya apa nih? 🤙🏀" 
    }
  ]);
  const [loading, setLoading] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSendMessage = useCallback(async () => {
    if (!message.trim()) return;

    const newMessages = [
      ...messages,
      { role: "user", content: message }
    ];

    setMessages(newMessages);
    setMessage("");
    setLoading(true);

    try {
      const reply = await requestToGroqAi(newMessages);
      
      setMessages(prevMessages => [
        ...prevMessages,
        { role: "assistant", content: reply }
      ]);
    } catch (error) {
      setMessages(prevMessages => [
        ...prevMessages,
        { role: "assistant", content: "Aduh, error nih! Koneksi lagi error kayaknya 😅" }
      ]);
    } finally {
      setLoading(false);
    }
  }, [message, messages]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && message.trim() && !loading) {
      handleSendMessage();
    }
  };

  const clearConversation = () => {
    setMessages([
      { 
        role: "assistant", 
        content: "Reset chat! Siap lagi nih, mau nanya apa? 🔥" 
      }
    ]);
  };

  return (
    <>
      <motion.button 
        className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full shadow-lg z-50"
        onClick={() => setIsPopupOpen(!isPopupOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Fadel AI 🤖
      </motion.button>

      <AnimatePresence>
        {isPopupOpen && (
          <motion.div 
            className="fixed bottom-24 right-2
              w-[95vw] max-w-md 
              sm:w-80 
              md:w-[500px] 
              bg-white 
              rounded-xl 
              shadow-2xl 
              z-50 
              border-2 border-gray-800"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="bg-black text-white p-4 rounded-t-xl flex justify-between items-center">
              <h3 className="font-bold flex items-center">
                Fadel AI 🏀💻 
              </h3>
              <div className="flex items-center gap-2">
                <motion.button 
                  onClick={clearConversation}
                  whileHover={{ scale: 1.1 }}
                  className="text-white text-xs"
                >
                  🗑️ Reset
                </motion.button>
                <motion.button 
                  onClick={() => setIsPopupOpen(false)}
                  whileHover={{ rotate: 90 }}
                  className="text-white"
                >
                  ✖
                </motion.button>
              </div>
            </div>

            <div className="p-4">
              <div className="mb-4 h-72 overflow-y-auto bg-gray-50 p-2 rounded">
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`mb-2 p-2 rounded ${
                      msg.role === 'user' 
                        ? 'bg-gray-200 text-right' 
                        : 'bg-gray-300 text-left'
                    }`}
                  >
                    {msg.content}
                  </motion.div>
                ))}
              </div>
              
              <div className="flex">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Tanya Fadel dong! 🤙"
                  disabled={loading}
                  className="flex-grow p-2 border-2 border-gray-300 rounded-l focus:outline-none focus:border-gray-600"
                />
                <motion.button 
                  onClick={handleSendMessage} 
                  disabled={loading || !message}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white p-2 rounded-r disabled:opacity-50"
                >
                  {loading ? "Mikir..." : "Kirim 🚀"}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatAI;
