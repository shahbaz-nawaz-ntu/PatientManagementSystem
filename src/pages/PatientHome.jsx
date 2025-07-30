import React, { useState, useEffect, useCallback, memo } from "react";
import { FiMenu, FiX, FiHome, FiUser, FiSettings, FiPieChart, FiBell, FiChevronRight, FiChevronDown, FiChevronLeft} from "react-icons/fi";
import { create } from "zustand";
import { Routes, Route, Link } from "react-router-dom";

import ADDNewVisit from "./ADDNewVisit";
import VisionandRefraction from "./VisionandRefraction";
import Examination from "./Examination";

const useSidebarStore = create((set) => ({
  isOpen: false,
  setIsOpen: (value) => set({ isOpen: value }),
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}));

const SidebarToggle = memo(({ collapsed, setCollapsed, isMobile, toggleMobileMenu }) => {
  return (
    <button
      onClick={() => isMobile ? toggleMobileMenu() : setCollapsed(!collapsed)}
      className="p-2  hover:bg-highlight hover:text-primary rounded-lg"
    >
      {isMobile ? (
        collapsed ? <FiMenu /> : <FiX />
      ) : (
        collapsed ? <FiChevronRight /> : <FiChevronLeft />
      )}
    </button>
  );
});

const Navigation = memo(({ collapsed }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const navItems = [
    { icon: FiHome, label: "Home", pagelink:"/" },
    { 
      icon: FiSettings, 
      label: "History",
      pagelink:"/patient/addnewvisit",
    //   subItems: ["General", "Security", "Notifications"]
    },
    { icon: FiPieChart, label: "Vision & Refraction",
        pagelink:"/patient/visionandrefraction" 
    },
    { icon: FiBell, label: "Examination", 
        // pagelink:"/todaysreservation" 
    },
    { 
      icon: FiUser, 
      label: "Diagnosis",
    //   subItems: ["Personal Info", "Account Settings", "Privacy"],
    //   pagelink:"/prefrences"
    },
    { 
      icon: FiUser, 
      label: "Prescription",
    //   subItems: ["Personal Info", "Account Settings", "Privacy"],
    //   pagelink:"/OPD"
    },
    { 
      icon: FiUser, 
      label: "Refresh Page",
    //   subItems: ["Personal Info", "Account Settings", "Privacy"],
    //   pagelink:"/prefrences"
    },
    { 
      icon: FiUser, 
      label: "Save to patient list",
    //   subItems: ["Personal Info", "Account Settings", "Privacy"],
    //   pagelink:"/prefrences"
    },
    { 
      icon: FiUser, 
      label: "Save & checkout",
    //   subItems: ["Personal Info", "Account Settings", "Privacy"],
    //   pagelink:"/prefrences"
    },
    { 
      icon: FiUser, 
      label: "Save & Print",
    //   subItems: ["Personal Info", "Account Settings", "Privacy"],
    //   pagelink:"/prefrences"
    },
  ];

  const handleItemClick = (label) => {
    setSelectedItem(selectedItem === label ? null : label);
  };

  return (
    <nav className="mt-4">
      
<ul className="space-y-2 px-2">
  {navItems.map(({ icon: Icon, label, subItems, pagelink }) => (
    <div key={label} className="relative">
      <Link
        to={pagelink}
        onClick={() => handleItemClick(label)}
        onMouseEnter={() => collapsed && setHoveredItem(label)}
        onMouseLeave={() => collapsed && setHoveredItem(null)}
        className={`
          flex items-center p-3 rounded-lg hover:bg-highlight hover:text-primary
          ${collapsed ? "justify-center" : "justify-between"}
          ${selectedItem === label ? "bg-acent text-primary" : ""}
        `}
      >
        <div className="flex items-center">
          <Icon className="w-6 h-6" />
          {!collapsed && <span className="ml-3">{label}</span>}
        </div>
        {!collapsed && subItems && (
          <FiChevronDown 
            className={`transition-transform duration-200 ${selectedItem === label ? "transform rotate-180" : ""}`} 
          />
        )}
      </Link>

      {/* Show dropdown if selected */}
      {subItems && !collapsed && selectedItem === label && (
        <div className="mt-1 ml-8 space-y-1">
          {subItems.map((subItem) => (
            <a
              key={subItem}
              href="#"
              className="block py-2 px-3 text-sm text-gray-300 hover:bg-gray-700 rounded-lg transition-colors duration-200"
            >
              {subItem}
            </a>
          ))}
        </div>
      )}

      {/* Hover card when collapsed */}
      {subItems && hoveredItem === label && collapsed && (
        <div 
          className="
            absolute top-0 left-full
            w-48 bg-gray-800 rounded-lg shadow-lg py-2 z-50
            ml-2
          "
        >
          {subItems.map((subItem) => (
            <a
              key={subItem}
              href="#"
              className="block px-4 py-2 text-white hover:bg-gray-700"
            >
              {subItem}
            </a>
          ))}
        </div>
      )}
    </div>
  ))}
</ul>
    </nav>
  );
});

const PLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleResize = useCallback(() => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
    if (!mobile) {
      setMobileMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const Overlay = () => (
    <div 
      className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100 z-40" : "opacity-0 pointer-events-none"}`}
      onClick={() => setMobileMenuOpen(false)}
    />

  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Added: Mobile menu overlay */}
      {/* <Navbar/> */}
      <Overlay />

      <aside
        className={`
          fixed top-0 h-full bg-primary text-white transition-all duration-300 z-50
          ${isMobile ? (mobileMenuOpen ? "left-0" : "-left-64") : "left-0"}
          ${collapsed && !isMobile ? "w-20" : "w-64"}
        `}
      >
        <div className="p-4 flex items-center justify-between">
          <h1 className={`font-bold ${collapsed && !isMobile ? "hidden" : "block"}`}>Dashboard</h1>
          <SidebarToggle 
            collapsed={collapsed} 
            setCollapsed={setCollapsed} 
            isMobile={isMobile}
            toggleMobileMenu={toggleMobileMenu}
          />
        </div>
        <Navigation collapsed={collapsed && !isMobile} />
      </aside>

      {/* Updated: Responsive main content */}
      <main 
        className={`
          flex-1 transition-all duration-300
          ${isMobile ? "ml-0" : (collapsed ? "ml-20" : "ml-64")}
        `}
      >
        
          <div className='w-full flex items-center justify-between bg-gradient-to-r from-primary to-highlight p-2 rounded'>
                    <div className='flex items-start gap-6 text-white'>
                        <div className='w-[100px] border-2'>
                            <img src="https://img.freepik.com/free-photo/young-adult-enjoying-virtual-date_23-2149328221.jpg?uid=R137875917&ga=GA1.1.2032350152.1743826403&semt=ais_items_boosted&w=740" alt="Patient Management System" className='object-cover' />
                        </div>

                        <div>
                            <div className='flex items-center gap-2'>
                                <h2>Viky viky (75 years, 11 months, Male)</h2>
                                <div className='text-green-400'>+923006578779</div>
                            </div>

                            <div>
                                <p>House No 123, Street No 456, City, Country</p>
                            </div>

                            <div>here some discription</div>
                        </div>
                    </div>
            </div><header className="p-2">
        </header>
        <div>
          <div>
            <Routes>
              <Route path="addnewvisit" element={<ADDNewVisit />} />
              <Route path="visionandrefraction" element={<VisionandRefraction />} />
              <Route path="examination"element={<Examination/>} />
              </Routes> 
            
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default PLayout;