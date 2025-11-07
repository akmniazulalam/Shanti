import React from 'react'
import { Search, MoreVertical, Bell } from "lucide-react"

const Notifications = () => {
  const notifications = [
  {
    id: 1,
    text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
  },
  {
    id: 2,
    text: "So yes, the alcohol (ethanol) in hand sanitizers can be absorbed through the skin, but no, it would not cause intoxication.",
  },
  {
    id: 3,
    text: "How a visual artist redefines success in graphic design.",
  },
  {
    id: 4,
    text: "For athletes, high altitude produces two contradictory effects on performance. For explosive events (sprints up to 400 meters, long jump, triple jump) the reduction in atmospheric pressure means there is less resistance from the atmosphere and the athlete’s performance will generally be better at high altitude.",
  },
  {
    id: 5,
    text: "Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue.",
  },
  {
    id: 6,
    text: "In fermentum posuere urna nec.",
  },
  {
    id: 7,
    text: "ID: 22739",
  },
  {
    id: 8,
    text: "How We Keep Brand Consistency In Our Visual Language — A Design System for Illustrations.",
  },
]
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Search Bar */}
      <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm w-full max-w-2xl mx-auto">
        <Search className="text-gray-500" size={18} />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 px-3 text-sm outline-none bg-transparent"
        />
        <MoreVertical className="text-gray-500" size={18} />
      </div>

      {/* Notification List */}
      <div className="bg-white rounded-xl shadow-md mt-6 p-6 max-w-2xl mx-auto border border-gray-200">
        <ul className="space-y-5">
          {notifications.map((item) => (
            <li
              key={item.id}
              className="flex items-start gap-4 border-b border-gray-100 pb-4 last:border-none last:pb-0"
            >
              <Bell className="text-gray-500 mt-1" size={18} />
              <p className="text-sm text-gray-700 leading-relaxed">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Notifications
