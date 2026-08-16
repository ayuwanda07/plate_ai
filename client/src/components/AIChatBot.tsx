import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { X, Send, Sparkles, Trash2, Maximize2, Minimize2, AlertCircle, RefreshCw } from 'lucide-react';
import type { ChatMessage } from '../types';
import { SHORTCUT_CHIPS } from '../data/mockData';

interface AIChatBotProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  pendingPrompt?: string | null;
  onClearPendingPrompt?: () => void;
}

export const AIChatBot: React.FC<AIChatBotProps> = ({
  isOpen,
  onClose,
  onOpen,
  pendingPrompt,
  onClearPendingPrompt,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      role: 'model',
      text: "Halo! Saya **PlatePal AI**, ahli nutrisi virtual Anda dari PT Nutrifood Indonesia 🥗.\n\nSaya siap membantu Anda dengan rekomendasi makanan sehat, perhitungan kalori & makronutrisi, serta rencana menu harian. Ada yang ingin Anda tanyakan seputar diet atau makanan sehat hari ini?",
      timestamp: 'Baru saja'
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [lastFailedMessage, setLastFailedMessage] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isLoading]);

  // Handle prompt passed from external shortcut chips
  useEffect(() => {
    if (pendingPrompt && pendingPrompt.trim()) {
      onOpen();
      handleSendMessage(pendingPrompt.trim());
      if (onClearPendingPrompt) {
        onClearPendingPrompt();
      }
    }
  }, [pendingPrompt]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputQuery).trim();
    if (!query || isLoading) return;

    const userMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      role: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    // Prepare updated conversation history including the new user message
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputQuery('');
    setIsLoading(true);
    setLastFailedMessage(null);

    try {
      // Build conversation payload for backend API
      // Filter to send user and model turns
      const conversationPayload = updatedMessages
        .filter((msg) => !msg.isError)
        .map((msg) => ({
          role: msg.role === 'user' ? 'user' : 'model',
          text: msg.text
        }));

      // Ensure the conversation starts with a user turn for Gemini API compliance
      const firstUserIndex = conversationPayload.findIndex((m) => m.role === 'user');
      const formattedPayload = firstUserIndex !== -1
        ? conversationPayload.slice(firstUserIndex)
        : [{ role: 'user', text: query }];

      const response = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          conversation: formattedPayload,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Server responded with status: ${response.status}`);
      }

      const data = await response.json();
      const aiReply = data.result || "Maaf, tidak ada respons yang diterima dari server.";

      const aiMessage: ChatMessage = {
        id: `ai-${Date.now()}`,
        role: 'model',
        text: aiReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error: any) {
      console.error('Error communicating with PlatePal AI backend:', error);
      setLastFailedMessage(query);

      const errorMessage: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'model',
        text: `⚠️ **Gagal terhubung ke AI Nutritionist:**\n${error.message || 'Pastikan backend server berjalan di `http://localhost:3000`.'}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isError: true
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    if (lastFailedMessage) {
      handleSendMessage(lastFailedMessage);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: 'model',
        text: "Percakapan telah direset! Ada yang bisa saya bantu terkait pilihan makanan sehat atau target kalori Anda hari ini? 🥗",
        timestamp: 'Baru saja'
      }
    ]);
    setLastFailedMessage(null);
  };

  return (
    <>
      {/* CUTE FLOATING LAUNCHER BUTTON (Bottom-Right) */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center group">
          {/* Tooltip on hover */}
          <div className="hidden sm:block mr-3 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 pointer-events-none whitespace-nowrap">
            <span>🥗 Chat with PlatePal AI</span>
            <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-slate-900" />
          </div>

          <button
            onClick={onOpen}
            aria-label="Open PlatePal AI Dietitian"
            className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 text-white shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center border-2 border-white cursor-pointer"
          >
            {/* Glowing ripple pulse rings */}
            <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping pointer-events-none" />
            <span className="absolute -inset-2 rounded-full bg-emerald-500/20 blur-md pointer-events-none animate-pulse-slow" />

            {/* Cute Food / AI Icon */}
            <div className="relative flex items-center justify-center">
              <span className="text-2xl sm:text-3xl select-none animate-bounce" style={{ animationDuration: '2.5s' }}>
                🥗
              </span>
              <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-950 text-emerald-300 border-2 border-white flex items-center justify-center shadow-xs">
                <Sparkles className="w-2.5 h-2.5 text-emerald-400" />
              </span>
            </div>

            {/* Online Status Green Dot */}
            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full" />
          </button>
        </div>
      )}

      {/* FLOATING CHAT WINDOW */}
      {isOpen && (
        <div
          className={`fixed z-50 transition-all duration-300 flex flex-col ${
            isExpanded
              ? 'inset-3 sm:inset-8 max-w-4xl mx-auto'
              : 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[94vw] sm:w-[440px] h-[620px] max-h-[88vh]'
          }`}
        >
          <div className="w-full h-full rounded-3xl bg-white/95 backdrop-blur-2xl border border-emerald-200/90 shadow-2xl flex flex-col overflow-hidden text-left ring-1 ring-emerald-500/10">
            
            {/* Chat Header */}
            <div className="px-5 py-4 bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 text-white flex items-center justify-between shadow-md shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center text-xl shadow-inner border border-white/20">
                    🥗
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-300 border-2 border-emerald-800 rounded-full" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-sm font-bold font-display">PlatePal AI Nutritionist</h3>
                    <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-white/20 text-emerald-100">
                      Live API
                    </span>
                  </div>
                  <p className="text-[11px] text-emerald-100/90 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                    Nutrifood AI • Online
                  </p>
                </div>
              </div>

              {/* Header Action Buttons */}
              <div className="flex items-center gap-1 text-emerald-100">
                <button
                  onClick={handleClearChat}
                  title="Clear conversation"
                  className="p-1.5 hover:bg-white/15 rounded-xl transition-colors cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  title={isExpanded ? 'Collapse size' : 'Expand window'}
                  className="p-1.5 hover:bg-white/15 rounded-xl transition-colors hidden sm:block cursor-pointer"
                >
                  {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={onClose}
                  title="Close chat"
                  className="p-1.5 hover:bg-white/20 rounded-xl transition-colors text-white ml-1 bg-white/10 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Shortcut Chips Banner inside Chat */}
            <div className="bg-emerald-50/90 px-4 py-2 border-b border-emerald-100/80 flex items-center gap-1.5 overflow-x-auto scrollbar-none text-xs shrink-0">
              <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider shrink-0 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-emerald-600" />
                <span>Quick:</span>
              </span>
              {SHORTCUT_CHIPS.map((chip) => (
                <button
                  key={chip.id}
                  onClick={() => handleSendMessage(chip.query)}
                  disabled={isLoading}
                  className="px-2.5 py-1 rounded-lg bg-white hover:bg-emerald-100/80 text-slate-700 hover:text-emerald-900 border border-emerald-200/60 text-[11px] font-semibold whitespace-nowrap transition-colors flex items-center gap-1 shadow-2xs cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{chip.icon}</span>
                  <span>{chip.label.split(' ')[0]} {chip.label.split(' ')[1]}</span>
                </button>
              ))}
            </div>

            {/* Message Area */}
            <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 bg-gradient-to-b from-slate-50/50 via-white to-emerald-50/20">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`flex items-end gap-2 max-w-[88%] sm:max-w-[82%] ${
                      msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                    }`}
                  >
                    {/* Avatar */}
                    {msg.role === 'model' && (
                      <div className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 shadow-xs text-xs mb-1 ${
                        msg.isError ? 'bg-rose-500 text-white' : 'bg-emerald-600 text-white'
                      }`}>
                        {msg.isError ? <AlertCircle className="w-4 h-4" /> : '🥗'}
                      </div>
                    )}

                    {/* Bubble Content */}
                    <div
                      className={`p-3.5 sm:p-4 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-xs ${
                        msg.role === 'user'
                          ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-br-none shadow-emerald-500/20'
                          : msg.isError
                          ? 'bg-rose-50 border border-rose-200 text-rose-800 rounded-bl-none'
                          : 'bg-white border border-slate-200/80 text-slate-800 rounded-bl-none shadow-slate-200/50'
                      }`}
                    >
                      {msg.role === 'user' ? (
                        <p className="whitespace-pre-wrap">{msg.text}</p>
                      ) : (
                        <div className="prose prose-sm max-w-none text-slate-800 space-y-2 [&_p]:leading-relaxed [&_p]:my-1.5 [&_ul]:my-2 [&_ul]:pl-4 [&_li]:my-0.5 [&_strong]:text-emerald-800 [&_strong]:font-extrabold [&_h1]:text-base [&_h1]:font-bold [&_h2]:text-sm [&_h2]:font-bold [&_h3]:text-xs [&_h3]:font-bold [&_a]:text-emerald-600 [&_a]:underline [&_a]:font-bold">
                          <ReactMarkdown>{msg.text}</ReactMarkdown>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-1 px-1">
                    <span className="text-[10px] text-slate-400">
                      {msg.timestamp}
                    </span>
                    {msg.isError && lastFailedMessage && (
                      <button
                        onClick={handleRetry}
                        className="text-[10px] font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 cursor-pointer"
                      >
                        <RefreshCw className="w-3 h-3" />
                        <span>Coba lagi</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing / Loading Animation */}
              {isLoading && (
                <div className="flex items-center gap-2 animate-in fade-in duration-200">
                  <div className="w-7 h-7 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-xs">
                    🥗
                  </div>
                  <div className="px-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-500 rounded-bl-none flex items-center gap-2 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                    <span className="text-xs font-semibold text-emerald-700 ml-1">PlatePal sedang menganalisis nutrisi...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 sm:p-4 bg-white border-t border-slate-100 shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputQuery}
                  onChange={(e) => setInputQuery(e.target.value)}
                  disabled={isLoading}
                  placeholder={isLoading ? "Menunggu respons AI..." : "Tanya kalori, resep sehat, atau menu diet..."}
                  className="flex-1 bg-slate-100/80 hover:bg-slate-100 focus:bg-white text-xs sm:text-sm text-slate-900 placeholder-slate-400 rounded-2xl px-4 py-3 border border-transparent focus:border-emerald-500 focus:outline-none transition-colors disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={!inputQuery.trim() || isLoading}
                  aria-label="Send message"
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all cursor-pointer ${
                    inputQuery.trim() && !isLoading
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-md shadow-emerald-500/25 hover:scale-105 active:scale-95'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <div className="mt-1.5 text-center">
                <span className="text-[10px] text-slate-400">
                  PlatePal AI • Konsultasi gizi & rekomendasi kalori harian PT Nutrifood Indonesia
                </span>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
