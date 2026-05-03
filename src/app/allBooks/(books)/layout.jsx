import CategoryBooks from "@/components/home/books/CategoryBooks";
import SearchBooks from "@/components/home/books/SearchBooks";
import React from "react";

const layout = ({ children }) => {


  return (
    <div className="">
      <div className=" ">
        <div className="drawer lg:drawer-open ">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Navbar */}
            <nav className="navbar w-full bg-purple-500/10  ">
              <label
                htmlFor="my-drawer-4"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost lg:hidden"
              >
                {/* Sidebar toggle icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M9 4v16"></path>
                  <path d="M14 10l2 2l-2 2"></path>
                </svg>
              </label>
              <SearchBooks/>
            </nav>
            {/* Page content here */}
            <div className="p-4">
              {children}
              </div>
          </div>

          <div className="drawer-side">
       <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
       <div className="lg:w-64 min-h-full bg-[#0f111a] border-r border-white/10">
          <CategoryBooks />
       </div>
    </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default layout;
