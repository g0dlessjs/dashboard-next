import Image from "next/image";
import {
  IoBrowsersOutline,
  IoCalculator,
  IoFootball,
  IoHeart,
  IoLogoReact,
} from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";

const menuItem = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={40} />,
    title: "Dashboard",
    subTitle: "Visualización",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={40} />,
    title: "Counter",
    subTitle: "Contador Client Side",
  },
  {
    path: "/dashboard/pokemons",
    icon: <IoFootball size={40} />,
    title: "Pokemons",
    subTitle: "Generacion Estatica",
  },
  {
    path: "/dashboard/favorites",
    icon: <IoHeart size={40} />,
    title: "Favoritos",
    subTitle: "Global State",
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "280px" }}
      className="bg-[#0f172a] min-h-screen z-10 text-slate-300 left-0 overflow-y-auto border-r border-white/5 flex flex-col"
    >
      <div id="logo" className="mt-8 mb-4 px-8">
        <h1 className="flex items-center text-2xl font-black tracking-tight text-white group cursor-default">
          <div className="bg-blue-600 p-1.5 rounded-lg mr-3 group-hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20">
            <IoLogoReact size={24} className="text-white animate-spin-slow" />
          </div>
          <span>Dash</span>
          <span className="text-blue-500">8</span>
          <span className="text-blue-600">.</span>
        </h1>
        <p className="text-slate-500 text-xs mt-1 font-medium tracking-wide uppercase">
          Enterprise Solution
        </p>
      </div>

      <div id="profile" className="px-8 py-8">
        <div className="flex flex-col space-y-4">
          <div className="relative group w-fit">
            <div className="absolute -inset-0.5 bg-linear-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            <Image
              className="relative rounded-full w-12 h-12 object-cover border-2 border-slate-800"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
              alt="User avatar"
              width={100}
              height={100}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
              Welcome back,
            </span>
            <span className="text-lg font-bold text-slate-100">
              Juan Carlos
            </span>
          </div>
        </div>
      </div>

      <nav id="nav" className="flex-1 px-4 space-y-1">
        <div className="px-4 mb-4">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
            Main Menu
          </span>
        </div>
        {menuItem.map((item) => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </nav>

      {/* <div className="px-8 py-6 mt-auto border-t border-white/5">
        <div className="bg-slate-800/50 rounded-xl p-4 flex items-center justify-between group cursor-pointer hover:bg-slate-800 transition-colors">
          <div className="flex flex-col">
            <span className="text-xs text-slate-400 font-medium">Plan</span>
            <span className="text-sm text-white font-bold">Pro Member</span>
          </div>
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
        </div>
      </div> */}
    </div>
  );
};
