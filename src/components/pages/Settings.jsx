import React from 'react'
import {
  Search,
  MoreVertical,
  Edit3,
  MessageSquare,
  Image,
  HelpCircle,
  Key,
  Palette,
  Trash2,
} from "lucide-react"

const Settings = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Top Search Bar */}
      <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm w-full max-w-3xl mx-auto">
        <Search className="text-gray-500" size={18} />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 px-3 text-sm outline-none bg-transparent"
        />
        <MoreVertical className="text-gray-500" size={18} />
      </div>

      {/* Settings Content */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Profile Settings */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-6">
              Profile Settings
            </h2>

            {/* User Info */}
            <div className="flex flex-col items-center mb-8">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="User"
                className="w-20 h-20 rounded-full object-cover mb-3"
              />
              <h3 className="font-semibold text-gray-800">
                A B M Shawon Islam
              </h3>
              <p className="text-sm text-gray-500">Stay home stay safe</p>
            </div>

            {/* Options */}
            <ul className="space-y-4">
              <ListItem icon={<Edit3 size={18} />} text="Edit Profile Name." />
              <ListItem
                icon={<MessageSquare size={18} />}
                text="Edit Profile Status Info."
              />
              <ListItem icon={<Image size={18} />} text="Edit Profile Photo." />
              <ListItem icon={<HelpCircle size={18} />} text="Help." />
            </ul>
          </div>

          <p className="text-center text-xs text-gray-400 mt-8">Chat App</p>
        </div>

        {/* Account Settings */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-6">
              Account Settings
            </h2>

            <ul className="space-y-5">
              <ListItem icon={<Key size={18} />} text="Change Password." />
              <ListItem icon={<Palette size={18} />} text="Theme." />
              <ListItem icon={<Trash2 size={18} />} text="Delete Account." />
            </ul>
          </div>

          <p className="text-center text-xs text-gray-400 mt-8">Chat App</p>
        </div>
      </div>
    </div>
  )
}
// Reusable List Item Component
const ListItem = ({ icon, text }) => (
  <li className="flex items-center gap-3 text-gray-700 text-sm hover:text-purple-600 cursor-pointer transition">
    <span className="text-gray-500">{icon}</span>
    {text}
  </li>
)
export default Settings
