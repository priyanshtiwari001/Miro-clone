import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="bg-green-200 flex items-center gap-x-4 p-5">
      <div className="hidden lg:flex lg:flex-1">{/* search bar */}</div>
      <UserButton />
    </div>
  );
};
export default Navbar;
