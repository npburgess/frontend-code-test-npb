import {
  Sidebar as FlowbiteSidebar,
  SidebarItems,
  SidebarItemGroup,
  SidebarItem,
} from 'flowbite-react';
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiUser,
  HiViewBoards,
} from 'react-icons/hi';

export const Sidebar = ({ className }: { className?: string }) => {
  return (
    <FlowbiteSidebar aria-label="Default sidebar example" className={className}>
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem href="/" icon={HiChartPie} active={true}>
            Dashboard
          </SidebarItem>
          <SidebarItem
            href="#"
            icon={HiViewBoards}
            label="Pro"
            labelColor="dark"
          >
            Kanban
          </SidebarItem>
          <SidebarItem href="#" icon={HiInbox} label="3">
            Inbox
          </SidebarItem>
          <SidebarItem href="#" icon={HiUser}>
            Users
          </SidebarItem>
          <SidebarItem href="#" icon={HiShoppingBag}>
            Products
          </SidebarItem>
          <SidebarItem href="#" icon={HiArrowSmRight}>
            Log In
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </FlowbiteSidebar>
  );
};
