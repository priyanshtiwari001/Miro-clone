import SideBar from "./_components/sidebar";
import Navbar from "./_components/sidebar/navbar";
import OrgSideBar from "./_components/sidebar/org-sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className="h-full">
      <SideBar />
      <div className="pl-[60px] h-full ">
        <div className="flex  gap-x-3 h-full">
          <OrgSideBar />
          <div className="h-full  flex-1">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
