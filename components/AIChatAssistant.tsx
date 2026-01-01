
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Minus, Bot, Sparkles, ShieldCheck } from 'lucide-react';
import { getAIResponse } from '../geminiService';
import { cvData } from '../data';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const AIChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { text: `System online. I'm ${cvData.personal.name.split(' ')[0]}'s virtual interface. How can I assist you with his Physics research or Cybersecurity profile?`, sender: 'bot' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
    setIsLoading(true);

    const response = await getAIResponse(userMessage);
    
    setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
    setIsLoading(false);
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-10 right-10 p-5 bg-blue-600 text-white rounded-[1.5rem] shadow-2xl hover:bg-blue-500 glow-blue transition-all transform hover:scale-110 z-50 flex items-center justify-center border border-white/10"
      >
        <div className="relative">
          <MessageCircle size={28} />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-4 border-blue-600" />
        </div>
      </button>
    );
  }

  return (
    <div className={`fixed right-10 bottom-10 w-80 sm:w-[400px] glass-dark rounded-[2.5rem] shadow-2xl border border-white/10 flex flex-col transition-all overflow-hidden z-50 ${isMinimized ? 'h-20' : 'h-[600px]'}`}>
      {/* Header */}
      <div className="p-6 bg-slate-900 border-b border-white/5 text-white flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-500">
            <Bot size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest">{cvData.personal.name.split(' ')[0]} AI v1.0</span>
            <span className="text-[9px] font-bold text-green-500 uppercase tracking-widest flex items-center gap-1">
              <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" /> Encrypted Link
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setIsMinimized(!isMinimized)} className="hover:bg-white/5 p-2 rounded-xl transition-colors text-slate-400">
            <Minus size={20} />
          </button>
          <button onClick={() => setIsOpen(false)} className="hover:bg-white/5 p-2 rounded-xl transition-colors text-slate-400">
            <X size={20} />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-black/40">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed ${
                  msg.sender === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none shadow-lg' 
                    : 'bg-white/5 border border-white/10 text-slate-300 rounded-tl-none backdrop-blur-md'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 p-4 rounded-3xl rounded-tl-none backdrop-blur-md">
                  <div className="flex gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce delay-100"></div>
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input with KM branding */}
          <div className="p-6 border-t border-white/5 bg-slate-900">
            <div className="relative flex items-center gap-3 group">
              <div className="relative flex-1">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none border-r border-white/10 pr-3 mr-3">
                   <div className="w-6 h-6 bg-white text-slate-950 rounded flex items-center justify-center text-[10px] font-black">KM</div>
                </div>
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Secure prompt entry..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-16 pr-6 py-4 text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition-all"
                />
              </div>
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-blue-600 text-white p-4 rounded-2xl hover:bg-blue-500 disabled:opacity-50 transition-all shadow-lg shadow-blue-600/20 active:scale-95 flex-shrink-0"
              >
                <Send size={20} />
              </button>
            </div>
            <p className="mt-4 text-[9px] text-center text-slate-600 font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2">
              <ShieldCheck size={10} className="text-blue-500/50" />
              Powered by Gemini 3 Flash Alpha
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default AIChatAssistant;
