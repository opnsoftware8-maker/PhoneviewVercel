"use client";

import React, { useState, useEffect, useRef } from "react";
import { Send, X, RotateCcw, Sparkles, ChevronDown, Check, HelpCircle } from "lucide-react";

export interface ExploredPhoneInfo {
  name: string;
  brand?: string;
  price?: number;
}

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

interface GeminiChatProps {
  lastExploredPhone: ExploredPhoneInfo | null;
  onClearExploredPhone?: () => void;
  openSignal?: number;
}

// Authentic Google Gemini 4-pointed sparkle logo
export function GeminiLogoIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gemini-sparkle-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4E82EE" />
          <stop offset="45%" stopColor="#7F67E8" />
          <stop offset="85%" stopColor="#D96590" />
          <stop offset="100%" stopColor="#F2994A" />
        </linearGradient>
      </defs>
      <path
        d="M12 1.5C12 7.29899 16.701 12 22.5 12C16.701 12 12 16.701 12 22.5C12 16.701 7.29899 12 1.5 12C7.29899 12 12 7.29899 12 1.5Z"
        fill="url(#gemini-sparkle-gradient)"
      />
    </svg>
  );
}

export default function GeminiChat({ lastExploredPhone, onClearExploredPhone, openSignal }: GeminiChatProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (openSignal && openSignal > 0) {
      setIsOpen(true);
    }
  }, [openSignal]);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial-greeting",
      role: "assistant",
      content:
        "สวัสดีครับ! ผมคือ PhoneView AI (ขับเคลื่อนด้วย Gemini) ผู้ช่วยวิเคราะห์และแนะนำสมาร์ทโฟน ยินดีตอบทุกข้อสงสัยเกี่ยวกับสเปกมือถือครับ",
      timestamp: new Date().toLocaleTimeString("th-TH", { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Phone Context state
  const [activePhoneContext, setActivePhoneContext] = useState<ExploredPhoneInfo | null>(null);
  
  // Track whether we showed the prompt for the current explored phone
  const [promptedPhoneName, setPromptedPhoneName] = useState<string | null>(null);
  const [showPromptQuestion, setShowPromptQuestion] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [isOpen, messages, showPromptQuestion]);

  // When a new phone is explored and chat is opened or already open
  useEffect(() => {
    if (lastExploredPhone && lastExploredPhone.name !== promptedPhoneName) {
      setPromptedPhoneName(lastExploredPhone.name);
      setShowPromptQuestion(true);
    }
  }, [lastExploredPhone, promptedPhoneName]);

  // Handle user's answer to: "คุณต้องการรู้เรื่องมือถือ รุ่น -- ใช่หรือไม่?"
  const handlePromptDecision = (decision: boolean) => {
    setShowPromptQuestion(false);
    const phone = lastExploredPhone;

    if (!phone) return;

    if (decision) {
      // User says YES: Lock context to this phone
      setActivePhoneContext(phone);
      const confirmMsg: Message = {
        id: "decision-yes-" + Date.now(),
        role: "assistant",
        content: `ยินดีครับ! ผมดึงข้อมูลสเปกของ **${phone.name}** ${
          phone.price ? `(ราคาประมาณ ${phone.price.toLocaleString()} บาท)` : ""
        } มาพร้อมแล้วครับ คุณสามารถถามเรื่องความคุ้มค่า, เล่นเกมลื่นไหม, สเปกกล้อง, แบตเตอรี่ หรือเปรียบเทียบกับรุ่นอื่นได้เลยครับ`,
        timestamp: new Date().toLocaleTimeString("th-TH", { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, confirmMsg]);
    } else {
      // User says NO: General questions
      setActivePhoneContext(null);
      const dismissMsg: Message = {
        id: "decision-no-" + Date.now(),
        role: "assistant",
        content:
          "รับทราบครับ! คุณสามารถสอบถามเกี่ยวกับสมาร์ทโฟนรุ่นอื่นๆ หรือบอกงบประมาณและการใช้งานที่คุณต้องการได้เลยครับ",
        timestamp: new Date().toLocaleTimeString("th-TH", { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, dismissMsg]);
    }
  };

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend ?? inputMessage).trim();
    if (!text || isLoading) return;

    const userMsg: Message = {
      id: "user-" + Date.now(),
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString("th-TH", { hour: "2-digit", minute: "2-digit" }),
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInputMessage("");
    setIsLoading(true);

    try {
      const payload = {
        messages: newMessages.map((m) => ({
          role: m.role,
          content: m.content,
        })),
        phoneContextName: activePhoneContext?.name || undefined,
      };

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      const aiMsg: Message = {
        id: "ai-" + Date.now(),
        role: "assistant",
        content:
          data.reply ||
          "ขออภัยครับ ไม่ได้รับคำตอบจากระบบ กรุณาลองใหม่อีกครั้งครับ",
        timestamp: new Date().toLocaleTimeString("th-TH", { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMsg: Message = {
        id: "error-" + Date.now(),
        role: "assistant",
        content:
          "ขออภัยครับ เกิดข้อผิดพลาดในการเชื่อมต่อ กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ตหรือ GEMINI_API_KEY ในระบบครับ",
        timestamp: new Date().toLocaleTimeString("th-TH", { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    setActivePhoneContext(null);
    setShowPromptQuestion(false);
    onClearExploredPhone?.();
    setMessages([
      {
        id: "initial-greeting",
        role: "assistant",
        content:
          "เริ่มต้นการสนทนาใหม่แล้วครับ คุณต้องการสอบถามหรือให้ผมช่วยแนะนำสมาร์ทโฟนรุ่นไหน สอบถามได้เลยครับ!",
        timestamp: new Date().toLocaleTimeString("th-TH", { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  };

  // Quick suggestions based on whether a phone is focused
  const quickQuestions = activePhoneContext
    ? [
        `จุดเด่นและข้อสังเกตของ ${activePhoneContext.name}`,
        `รุ่นนี้เล่นเกมสเปกสูงลื่นไหม?`,
        `กล้องและการถ่ายวิดีโอเป็นอย่างไร?`,
        `ในงบนี้มีรุ่นไหนคุ้มค่าเทียบเท่าบ้าง?`,
      ]
    : [
        "แนะนำมือถืองบไม่เกิน 10,000 บาท",
        "มือถือเล่นเกมลื่นๆ แบตอึด",
        "มือถือถ่ายรูปสวยที่สุดตอนนี้",
        "เปรียบเทียบ iPhone 16 กับ Samsung S24",
      ];

  // Helper to format assistant messages with bold text and line breaks nicely
  const formatMessageText = (content: string) => {
    const lines = content.split("\n");
    return lines.map((line, lIdx) => {
      // Parse bold **text**
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={lIdx} className={lIdx > 0 ? "mt-1.5" : ""}>
          {parts.map((part, pIdx) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return (
                <strong key={pIdx} className="font-semibold text-zinc-900">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <>
      {/* Floating Action Button (FAB) at bottom-right */}
      <div className="fixed bottom-5 right-5 z-40 sm:bottom-6 sm:right-6">
        <button
          id="gemini-chat-toggle-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="เปิดแชทกับ Gemini AI"
          className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-zinc-900 text-white shadow-xl hover:shadow-2xl border-2 border-zinc-700 hover:border-indigo-500 transition-all duration-300 active:scale-95 focus:outline-none"
        >
          {/* Subtle glowing ring */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 opacity-20 group-hover:opacity-60 blur-sm transition-opacity duration-300"></span>

          {isOpen ? (
            <X className="w-6 h-6 text-white z-10 transition-transform duration-200 group-hover:rotate-90" />
          ) : (
            <div className="relative z-10 flex items-center justify-center">
              <GeminiLogoIcon className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
            </div>
          )}

          {/* Badge when a phone has been explored */}
          {!isOpen && lastExploredPhone && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4 z-20">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-indigo-600 border border-white"></span>
            </span>
          )}

          {/* Hover Tooltip on Desktop */}
          {!isOpen && (
            <div className="hidden md:block pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-zinc-900 text-white text-xs py-1.5 px-3 rounded-lg shadow-lg border border-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-prompt">
              {lastExploredPhone ? (
                <span>ถาม AI เกี่ยวกับ <strong>{lastExploredPhone.name}</strong></span>
              ) : (
                <span>แชทกับ Gemini AI</span>
              )}
            </div>
          )}
        </button>
      </div>

      {/* Chat Window Popup */}
      {isOpen && (
        <div
          id="gemini-chat-window"
          className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[410px] h-[580px] max-h-[82vh] bg-white rounded-2xl shadow-2xl border border-zinc-200 flex flex-col overflow-hidden font-prompt animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          {/* Header */}
          <div className="px-4 py-3 bg-zinc-900 text-white flex items-center justify-between border-b border-zinc-800 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center shadow-inner">
                <GeminiLogoIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-trirong font-bold text-sm tracking-wide text-white">
                    PhoneView AI
                  </h3>
                  <span className="text-[10px] px-1.5 py-0.2 font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 rounded-full">
                    Gemini
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400 leading-none mt-0.5">
                  ผู้เชี่ยวชาญให้คำแนะนำสมาร์ทโฟน
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                id="gemini-chat-reset"
                onClick={handleResetChat}
                title="ล้างการสนทนา"
                className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                id="gemini-chat-close"
                onClick={() => setIsOpen(false)}
                title="ปิดหน้าต่างแชท"
                className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Active Context Banner if set */}
          {activePhoneContext && (
            <div className="px-3.5 py-1.5 bg-indigo-50 border-b border-indigo-100 flex items-center justify-between text-xs text-indigo-900 shrink-0">
              <div className="flex items-center gap-1.5 truncate">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span className="truncate">
                  กำลังโฟกัส: <strong>{activePhoneContext.name}</strong>
                </span>
              </div>
              <button
                onClick={() => setActivePhoneContext(null)}
                className="text-[11px] text-indigo-600 hover:text-indigo-800 underline shrink-0 ml-2"
              >
                ยกเลิก
              </button>
            </div>
          )}

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-zinc-50/60">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.role === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white rounded-br-xs shadow-sm font-normal"
                      : "bg-white text-zinc-800 border border-zinc-200 rounded-bl-xs shadow-sm"
                  }`}
                >
                  {msg.role === "assistant" ? (
                    formatMessageText(msg.content)
                  ) : (
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                  )}
                </div>
                <span className="text-[10px] text-zinc-400 mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {/* Prompt Card: The required algorithm for previously explored phone */}
            {showPromptQuestion && lastExploredPhone && (
              <div className="p-3.5 rounded-xl bg-white border-2 border-indigo-200 shadow-md space-y-2.5 animate-in fade-in duration-300">
                <div className="flex items-start gap-2 text-zinc-800">
                  <div className="p-1 rounded-md bg-indigo-100 text-indigo-600 shrink-0 mt-0.5">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <div className="text-xs leading-relaxed">
                    <p className="font-semibold text-zinc-900">
                      ตรวจพบว่าคุณเพิ่งดูสเปกของรุ่นนี้:
                    </p>
                    <p className="text-indigo-900 mt-0.5">
                      คุณต้องการทราบข้อมูลหรือสอบถามเรื่องมือถือรุ่น{" "}
                      <strong className="underline decoration-indigo-400 decoration-2">
                        {lastExploredPhone.name}
                      </strong>{" "}
                      ใช่หรือไม่ครับ?
                    </p>
                  </div>
                </div>

                {/* Yes / No Options */}
                <div className="flex items-center gap-2 pt-1">
                  <button
                    id="gemini-prompt-yes"
                    onClick={() => handlePromptDecision(true)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-xs font-semibold shadow-sm transition-all"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>ใช่ (สอบถามรุ่นนี้)</span>
                  </button>
                  <button
                    id="gemini-prompt-no"
                    onClick={() => handlePromptDecision(false)}
                    className="flex-1 py-2 px-3 rounded-lg bg-zinc-100 hover:bg-zinc-200 active:bg-zinc-300 text-zinc-700 text-xs font-medium border border-zinc-200 transition-all"
                  >
                    <span>ไม่ใช่ (ถามเรื่องอื่น)</span>
                  </button>
                </div>
              </div>
            )}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex items-center gap-2 text-zinc-500 text-xs py-1">
                <div className="w-6 h-6 rounded-full bg-white border border-zinc-200 flex items-center justify-center shadow-xs">
                  <GeminiLogoIcon className="w-3.5 h-3.5 animate-spin" />
                </div>
                <div className="flex items-center gap-1 bg-white border border-zinc-200 px-3 py-2 rounded-2xl shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse delay-150"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse delay-300"></span>
                  <span className="text-[11px] text-zinc-500 ml-1">Gemini กำลังพิมพ์ตอบ...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Question Chips */}
          <div className="px-3 py-2 bg-white border-t border-zinc-100 overflow-x-auto whitespace-nowrap no-scrollbar flex gap-1.5 shrink-0">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q)}
                disabled={isLoading}
                className="text-[11px] px-2.5 py-1 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border border-zinc-200 transition-colors shrink-0 disabled:opacity-50"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-zinc-200 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                id="gemini-chat-input"
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="พิมพ์คำถามเกี่ยวกับมือถือที่นี่..."
                disabled={isLoading}
                className="flex-1 bg-zinc-50 border border-zinc-200 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl outline-none transition-all placeholder:text-zinc-400 font-prompt"
              />
              <button
                id="gemini-chat-send"
                type="submit"
                disabled={!inputMessage.trim() || isLoading}
                className="w-10 h-10 rounded-xl bg-zinc-900 hover:bg-black text-white flex items-center justify-center transition-all disabled:opacity-40 disabled:hover:bg-zinc-900 shrink-0 shadow-sm active:scale-95"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
