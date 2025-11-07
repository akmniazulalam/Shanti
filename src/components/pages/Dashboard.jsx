import { Search, MoreVertical, Plus } from "lucide-react";
const Dashboard = () => {
  const users = [
    {
      name: "Raghav",
      msg: "Dinner?",
      time: "Today, 8:55pm",
      img: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Swathi",
      msg: "Sure!",
      time: "Today, 3:25pm",
      img: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Kiran",
      msg: "Hi...",
      time: "Yesterday, 6:32pm",
      img: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "Tejeshwini C",
      msg: "I will call him today.",
      time: "Today, 12:32pm",
      img: "https://randomuser.me/api/portraits/women/4.jpg",
    },
  ];

  const groups = [
    {
      name: "Friends Reunion",
      desc: "Hi Guys, Wassup!",
      img: "https://randomuser.me/api/portraits/lego/3.jpg",
    },
    {
      name: "Friends Forever",
      desc: "Good to see you.",
      img: "https://randomuser.me/api/portraits/lego/4.jpg",
    },
    {
      name: "Crazy Cousins",
      desc: "What plans today?",
      img: "https://randomuser.me/api/portraits/lego/5.jpg",
    },
  ];
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Search Bar */}
      <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm w-full max-w-md mx-auto">
        <Search className="text-gray-500" size={18} />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 px-3 text-sm outline-none bg-transparent"
        />
        <MoreVertical className="text-gray-500" size={18} />
      </div>

      {/* Grid Layout */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {/* Groups List */}
        <Card
          title="Groups List"
          items={groups}
          buttonText="Join"
          buttonColor="bg-purple-600"
        />

        {/* Friends */}
        <Card title="Friends" items={users} />

        {/* User List */}
        <Card title="User List" items={users} icon={<Plus size={18} />} />

        {/* Friend Requests */}
        <Card
          title="Friend Request"
          items={users}
          buttonText="Accept"
          buttonColor="bg-purple-600"
        />

        {/* Group */}
        <Card title="Group" items={users} />

        {/* Blocked Users */}
        <Card
          title="Blocked Users"
          items={users}
          buttonText="Unblock"
          buttonColor="bg-purple-500"
        />
      </div>
    </div>
  );
};
// Reusable Card Component
const Card = ({ title, items, buttonText, buttonColor, icon }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <MoreVertical className="text-gray-400" size={18} />
      </div>
      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={item.img}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-sm text-gray-800">
                  {item.name}
                </h4>
                <p className="text-xs text-gray-500">{item.msg || item.desc}</p>
              </div>
            </div>

            {buttonText ? (
              <button
                className={`text-white text-xs font-medium px-3 py-1 rounded-lg ${buttonColor}`}>
                {buttonText}
              </button>
            ) : icon ? (
              <button className="bg-purple-100 p-2 rounded-full text-purple-600 hover:bg-purple-200">
                {icon}
              </button>
            ) : (
              <p className="text-xs text-gray-400">{item.time}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Dashboard;
