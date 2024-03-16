import List from "./list";
import NewButton from "./new-button";

const SideBar = () => {
  return (
    <aside className=" fixed z-[1] h-full w-[60px] bg-yellow-800 flex-1 p-3 flex-col gap-y-4 text-white">
      <div className="">
        <List />
        <NewButton />
      </div>
    </aside>
  );
};
export default SideBar;
