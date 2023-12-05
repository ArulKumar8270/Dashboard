import {
  Accordion,
  AccordionItem,
  Checkbox,
  Switch,
  cn,
} from "@nextui-org/react";
import * as React from "react";

export const StoreLoginSideBar = () => {
  const itemClasses = {
    title: "font-normal text-sm text-black ms-1",
    indicator: "text-medium",
    content: "text-small px-2",
  };

  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["1"]));
  return (
    <>
      <div className="navBarStyle">
        <a
          href="#"
          className="flex items-center justify-center border-b-2 border-b-white text-gray-900 dark:text-white group logoCls"
        >
          <span className="">Logo</span>
        </a>
        <aside id="default-sidebar" className="h-[84vh]" aria-label="Sidebar">
          <div className="h-full px-3 pb-4 pt-0 overflow-y-auto custom-scrollbar">
            <div className="scroll-content h-fit left-0 top-0 transition-transform z-40">
              <ul role="list" className="space-y-2 font-medium list-disc">
                <li className="bg-white rounded-xl">
                  <a
                    href="#"
                    className="mt-7 p-3 text-sm flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <div className="flex justify-between w-full items-center">
                      <p>Without prime</p>
                    </div>
                  </a>
                </li>
                <li
                  className="rounded-xl"
                  style={{ backgroundColor: "var(--secondary-500)" }}
                >
                  <a
                    href="#"
                    className="p-3 text-sm flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <div className="flex justify-between w-full items-center">
                      <p>Total uploaded products</p>
                    </div>
                  </a>
                </li>
                <li
                  className="rounded-xl"
                  style={{ backgroundColor: "var(--secondary-500)" }}
                >
                  <a
                    href="#"
                    className="p-3 text-sm flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <div className="flex justify-between w-full items-center">
                      <p>Add Products</p>
                    </div>
                  </a>
                </li>
                <li
                  className="rounded-xl"
                  style={{ backgroundColor: "var(--secondary-500)" }}
                >
                  <a
                    href="#"
                    className="p-3 text-sm flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <div className="flex justify-between w-full items-center">
                      <p>Categories List</p>
                    </div>
                  </a>
                </li>
                <li
                  className="rounded-xl"
                  style={{ backgroundColor: "var(--secondary-500)" }}
                >
                  <a
                    href="#"
                    className="p-3 text-sm flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <div className="flex justify-between w-full items-center">
                      <p>Customer Request</p>
                    </div>
                  </a>
                </li>
                <li
                  className="rounded-xl"
                  style={{ backgroundColor: "var(--secondary-500)" }}
                >
                  <a
                    href="#"
                    className="p-3 text-sm flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <div className="flex justify-between w-full items-center">
                      <p>Request to admin</p>
                    </div>
                  </a>
                </li>
                <li
                  className="rounded-xl"
                  style={{ backgroundColor: "var(--secondary-500)" }}
                >
                  <a
                    href="#"
                    className="p-3 text-sm flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <div className="flex justify-between w-full items-center">
                      <p>Nickname Vendor List</p>
                    </div>
                  </a>
                </li>

                <li className="bg-white rounded-xl">
                  <a
                    href="#"
                    className="mt-7 p-3 text-sm flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <div className="flex justify-between w-full items-center">
                      <p>With Prime</p>
                    </div>
                  </a>
                </li>
                <li
                  className="rounded-xl"
                  style={{ backgroundColor: "var(--secondary-500)" }}
                >
                  <a
                    href="#"
                    className="p-3 text-sm flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <div className="flex justify-between w-full items-center">
                      <p>Orders</p>
                    </div>
                  </a>
                </li>
                <li
                  className="rounded-xl"
                  style={{ backgroundColor: "var(--secondary-500)" }}
                >
                  <a
                    href="#"
                    className="p-3 text-sm flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <div className="flex justify-between w-full items-center">
                      <p>Customer Details</p>
                    </div>
                  </a>
                </li>
                <li
                  className="rounded-xl"
                  style={{ backgroundColor: "var(--secondary-500)" }}
                >
                  <a
                    href="#"
                    className="p-3 text-sm flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <div className="flex justify-between w-full items-center">
                      <p>Vendors</p>
                    </div>
                  </a>
                </li>
                <li
                  className="rounded-xl"
                  style={{ backgroundColor: "var(--secondary-500)" }}
                >
                  <a
                    href="#"
                    className="p-3 text-sm flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <div className="flex justify-between w-full items-center">
                      <p>Booked Customers</p>
                    </div>
                  </a>
                </li>
                <li
                  className="rounded-xl"
                  style={{ backgroundColor: "var(--secondary-500)" }}
                >
                  <a
                    href="#"
                    className="p-3 text-sm flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <div className="flex justify-between w-full items-center">
                      <p>Transaction List Customer</p>
                    </div>
                  </a>
                </li>
                <li
                  className="rounded-xl"
                  style={{ backgroundColor: "var(--secondary-500)" }}
                >
                  <a
                    href="#"
                    className="p-3 text-sm flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <div className="flex justify-between w-full items-center">
                      <p>Transaction List Vendors</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};
