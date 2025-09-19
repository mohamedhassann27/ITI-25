import { NavLink, Outlet } from 'react-router'
import { MdAddBox } from "react-icons/md";
import { IoIosListBox } from "react-icons/io";

function Dashboard() {
    return (
        <div id='dashboard' className="bg-[var(--primary)]">
            <div className="flex max-md:flex-col gap-6 mx-15 py-10 max-md:py-6 min-h-screen max-md:mx-0 ">
                
                <div className="w-[18%] h-screen max-md:w-[90%] max-md:h-fit max-md:flex max-md:justify-around max-md:items-center max-md:px-0 max-md:py-5 bg-white py-15 rounded-md shadow-md px-10 max-md:mx-auto">
                    <NavLink
                        to="/dashboard/add"
                        className={({ isActive }) =>
                        `block text-lg font-semibold text-[var(--secondary)]  ${
                            isActive ? "text-[var(--secondary)]" : "text-black"
                        } mb-10 max-md:mb-0 flex items-center gap-2`
                        }
                    >
                        <MdAddBox /> Add item
                    </NavLink>
                    <NavLink
                        to="list"
                        className={({ isActive }) =>
                        `block text-lg font-semibold text-[var(--secondary)] ${
                            isActive ? "text-[var(--secondary)]" : "text-black"
                        } flex items-center gap-2`
                        }
                    >
                        <IoIosListBox /> List items
                    </NavLink>
                </div>
            {/* -------------------------------------------- */}
            
                <Outlet/>
            
            </div>
        </div>
    )
}

export default Dashboard
