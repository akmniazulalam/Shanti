import React from 'react'
import { Search, MoreVertical, Send, Paperclip, Smile } from "lucide-react"

const Chats = () => {
  const groups = [
  { name: "Friends Reunion", desc: "Hi Guys, Wassup!", img: "https://randomuser.me/api/portraits/lego/3.jpg" },
  { name: "Friends Forever", desc: "Good to see you.", img: "https://randomuser.me/api/portraits/lego/4.jpg" },
  { name: "Crazy Cousins", desc: "What plans today?", img: "https://randomuser.me/api/portraits/lego/5.jpg" },
]

const friends = [
  { name: "Raghav", msg: "Dinner?", img: "https://randomuser.me/api/portraits/men/1.jpg" },
  { name: "Swathi", msg: "Sure!", img: "https://randomuser.me/api/portraits/women/2.jpg", active: true },
  { name: "Kiran", msg: "Hi...", img: "https://randomuser.me/api/portraits/men/3.jpg" },
  { name: "Tejeshwini C", msg: "I will call him today.", img: "https://randomuser.me/api/portraits/women/4.jpg" },
]

const messages = [
  { from: "them", text: "Hey There !", time: "Today, 2:02pm" },
  { from: "them", text: "How are you doing?", time: "Today, 2:02pm" },
  { from: "me", text: "Hello...", time: "Today, 2:12pm" },
  { from: "me", text: "I am good and how about you?", time: "Today, 2:13pm" },
  { from: "them", text: "I am doing well. Can we meet up tomorrow?", time: "Today, 2:13pm" },
  { from: "me", text: "Sure!", time: "Today, 2:14pm" },
]
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="col-span-1 p-4 bg-white shadow-md rounded-r-2xl flex flex-col gap-6">
        {/* Search Bar */}
        <div className="flex items-center bg-gray-50 px-4 py-2 rounded-full shadow-sm">
          <Search className="text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Search"
            className="flex-1 px-3 text-sm outline-none bg-transparent"
          />
          <MoreVertical className="text-gray-500" size={18} />
        </div>

        {/* Groups */}
        <Section title="Groups" items={groups} />

        {/* Friends */}
        <Section title="Friends" items={friends} friends />
      </div>

      {/* Chat Section */}
      <div className="col-span-2 flex flex-col bg-white shadow-md rounded-l-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="Swathi"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-800">Swathi</h3>
              <p className="text-xs text-green-500 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
                Online
              </p>
            </div>
          </div>
          <MoreVertical className="text-gray-500" size={18} />
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex flex-col ${
                msg.from === "me" ? "items-end" : "items-start"
              }`}
            >
              <div
                className={`px-4 py-2 text-sm rounded-2xl max-w-xs ${
                  msg.from === "me"
                    ? "bg-purple-600 text-white rounded-br-none"
                    : "bg-gray-200 text-gray-800 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
              <span className="text-[11px] text-gray-400 mt-1">{msg.time}</span>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="border-t p-4 flex items-center gap-3">
          <button className="text-gray-500 hover:text-gray-700">
            <Paperclip size={18} />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <Smile size={18} />
          </button>
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
// Reusable Section Component
const Section = ({ title, items, friends }) => (
  <div>
    <div className="flex items-center justify-between mb-3">
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <MoreVertical className="text-gray-400" size={18} />
    </div>
    <ul className="space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-3">
          <div className="relative">
            <img
              src={item.img}
              alt={item.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            {item.active && (
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            )}
          </div>
          <div>
            <h4 className="font-semibold text-sm text-gray-800">{item.name}</h4>
            <p className="text-xs text-gray-500">
              {item.msg || item.desc}
            </p>
          </div>
        </li>
      ))}
    </ul>
  </div>
)

export default Chats
