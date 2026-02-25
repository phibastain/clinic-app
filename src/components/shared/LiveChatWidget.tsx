'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

const LiveChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: 'Welcome to M-Trust Urology Clinic! 👋' },
        { type: 'bot', text: 'How can we help you today?' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        setMessages([...messages, { type: 'user', text: inputValue }]);
        setInputValue('');

        setTimeout(() => {
            setMessages(prev => [...prev, { type: 'bot', text: 'Thank you for your message. One of our specialists will be with you shortly.' }]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end pointer-events-none">
            {/* Chat Window */}
            <div className={`
        mb-4 w-[350px] max-w-[calc(100vw-48px)] bg-white/90 dark:bg-[#1a1a2e]/95 backdrop-blur-xl border border-slate-200 dark:border-slate-700 shadow-2xl rounded-2xl overflow-hidden transition-all duration-300 origin-bottom-right pointer-events-auto
        ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10 pointer-events-none absolute bottom-0 right-0'}
      `}>
                {/* Header */}
                <div className="bg-linear-to-r from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
                                <img src="https://cdn-icons-png.flaticon.com/512/3050/3050257.png" alt="M-Trust Support" className="w-6 h-6 object-contain" />
                            </div>
                            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-slate-900 rounded-full"></div>
                        </div>
                        <div>
                            <h4 className="text-white text-sm font-bold">M-Trust Support</h4>
                            <p className="text-slate-400 text-[10px]">Online</p>
                        </div>
                    </div>
                    <button onClick={() => setIsOpen(false)} aria-label="Close chat" className="text-slate-400 hover:text-white transition-colors">
                        <X size={18} />
                    </button>
                </div>

                {/* Messages */}
                <div className="h-[300px] p-4 overflow-y-auto space-y-3 bg-slate-50/50 dark:bg-transparent">
                    {messages.map((msg, i) => (
                        <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${msg.type === 'user'
                                ? 'bg-amber-500 text-white rounded-br-sm'
                                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-bl-sm shadow-sm border border-slate-100 dark:border-slate-700'
                                }`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <form onSubmit={handleSend} className="p-3 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1a1a2e] flex items-center gap-2">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 px-4 py-2.5 rounded-xl text-sm bg-slate-100 dark:bg-slate-800 border-none outline-none text-slate-800 dark:text-white placeholder:text-slate-400"
                    />
                    <button type="submit" className="w-10 h-10 rounded-xl bg-amber-500 hover:bg-amber-600 text-white flex items-center justify-center transition-colors" aria-label="Send message">
                        <Send size={16} />
                    </button>
                </form>
            </div>

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Close chat' : 'Open chat'}
                className={`
          relative group pointer-events-auto
          w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-110 active:scale-95
          ${isOpen ? 'bg-slate-900 text-white rotate-90' : 'bg-linear-to-tr from-amber-500 to-amber-600 text-white'}
        `}
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={28} className="animate-pulse-slow" />}

                {/* Notification Badge */}
                {!isOpen && (
                    <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                    </span>
                )}
            </button>
        </div>
    );
};

export default LiveChatWidget;
