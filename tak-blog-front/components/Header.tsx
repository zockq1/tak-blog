import styled from "styled-components";
import Link from "next/link";
import {
  CloseOutlined,
  LoginOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";

const HeaderWrapper = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 30px;
  border-bottom: 1px solid #efefef;
`;

const Logo = styled(Link)`
  font-family: "Sansita Swashed", cursive;
  font-size: 36px;
  font-weight: 900;
`;

const Sidebar = styled.nav<{ isActive: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ isActive }) => (isActive ? "0" : "-310px")};
  width: 300px;
  height: 100vh;
  padding: 0 16px;
  background-color: white;
  border-right: 1px solid #efefef;
  transition: left 0.3s ease-in-out, background-color 0.3s ease-in-out;
  z-index: 1000;
  overflow: auto;
`;

const SidebarHeader = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #efefef;
`;

function Header(): React.ReactElement {
  const [isActive, setisActive] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const isActiveSidebar = () => {
    console.log("click!", isActive);
    setisActive(!isActive);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setisActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <HeaderWrapper>
      <Sidebar isActive={isActive} ref={sidebarRef}>
        <SidebarHeader>
          <h1>Menu</h1>
          <CloseOutlined onClick={isActiveSidebar} />
        </SidebarHeader>

        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </Sidebar>
      <MenuUnfoldOutlined onClick={isActiveSidebar} />
      <Logo href="/">Tak-Blog</Logo>
      <Link href="/login">
        <LoginOutlined />
      </Link>
    </HeaderWrapper>
  );
}

export default Header;
