import { FunctionComponent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function Navbar() {
  const [activeItem, setActiveItem] = useState<string>("About");

  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") setActiveItem("About");  
    if (pathname === "/projects") setActiveItem("Projects");
    if (pathname === "/resume") setActiveItem("Resume");
  }, [pathname]);

  const NavItem:FunctionComponent<{
      activeItem: string 
      setActiveItem: Function 
      name: string 
      route:string}> = ({activeItem, name, route, setActiveItem}) => {
      return activeItem !== name ? (
            <Link href={route}>
              <a>
                <span className='dark:fancy-link-dark fancy-link' onClick={() => setActiveItem(name)}>{name}</span>
              </a>
            </Link>
          ) : null;
      
  }
  
  return (
    <div className='flex justify-between px-5 pt-3 pb-1 mt-3'>
      <span className="text-xl font-bold border-b-4 text-green border-green md:text-2xl">{activeItem}</span>
      <div className="flex space-x-5 font-lg">
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='About' route='/'/>
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Projects' route='/projects' />
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Resume' route='/resume'/>
      </div>
    </div>
  );
}

export default Navbar;
