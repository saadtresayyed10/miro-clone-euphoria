import { List } from "./list";
import NewButton from "./new-button";

const Sidebar = () => {
  return (
    <aside className="fixed z-[1] left-0 bg-gradient-to-br from-emerald-900 to-lime-600 h-full w-[60px] flex p-3 flex-col gap-y-4 text-white">
      <List />
      <NewButton />
    </aside>
  );
};

export default Sidebar;
