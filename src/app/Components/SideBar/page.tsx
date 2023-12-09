import {
  Accordion,
  AccordionItem,
  Checkbox,
  Switch,
  cn,
} from "@nextui-org/react";
import * as React from "react";

export const SideNavbar = () => {
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
                      <p>For Me</p>
                      <Switch
                        color="secondary"
                        defaultSelected
                        classNames={{
                          wrapper: "p-0 h-4 overflow-visible",
                          thumb: cn(
                            "w-6 h-6 border-2 shadow-lg",
                            "group-data-[hover=true]:border-secondary",
                            //selected
                            "group-data-[selected=true]:ml-6 bg-secondary",
                            // pressed
                            "group-data-[pressed=true]:w-7",
                            "group-data-[selected]:group-data-[pressed]:ml-4"
                          ),
                        }}
                        aria-label="Automatic updates"
                      />
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
                      <p>Within 5Km</p>
                      <Switch
                        color="secondary"
                        defaultSelected
                        classNames={{
                          wrapper: "p-0 h-4 overflow-visible",
                          thumb: cn(
                            "w-6 h-6 border-2 shadow-lg",
                            "group-data-[hover=true]:border-secondary",
                            //selected
                            "group-data-[selected=true]:ml-6 bg-secondary",
                            // pressed
                            "group-data-[pressed=true]:w-7",
                            "group-data-[selected]:group-data-[pressed]:ml-4"
                          ),
                        }}
                        aria-label="Automatic updates"
                      />
                    </div>
                  </a>
                </li>
                <li
                  className="rounded-xl hover:bg-gray-100"
                  style={{ backgroundColor: "var(--secondary-500)" }}
                >
                  <Accordion
                    itemClasses={itemClasses}
                    className="customAccordion"
                  >
                    <AccordionItem
                      key="1"
                      aria-label="Accordion 1"
                      title="Categories"
                      className="text-black"
                    >
                      <ul className="list-disc pl-10">
                        <li className="flex justify-between pb-2.5">
                          <div>Grocery</div>
                          <Checkbox
                            className="m-0 p-0"
                            defaultSelected
                            size="md"
                            color="success"
                          ></Checkbox>
                        </li>
                        <li className="flex justify-between pb-2.5">
                          <div>Electronics</div>
                          <Checkbox
                            className="m-0 p-0"
                            defaultSelected
                            size="md"
                            color="success"
                          ></Checkbox>
                        </li>
                        <li className="flex justify-between pb-2.5">
                          <div>Mobiles</div>
                          <Checkbox
                            className="m-0 p-0"
                            defaultSelected
                            size="md"
                            color="success"
                          ></Checkbox>
                        </li>
                        <li className="flex justify-between pb-2.5">
                          <div>Home</div>
                          <Checkbox
                            className="m-0 p-0"
                            defaultSelected
                            size="md"
                            color="success"
                          ></Checkbox>
                        </li>
                        <li className="flex justify-between pb-2.5">
                          <div>Beauty, Toys & More</div>
                          <Checkbox
                            className="m-0 p-0"
                            defaultSelected
                            size="md"
                            color="success"
                          ></Checkbox>
                        </li>
                      </ul>
                    </AccordionItem>
                  </Accordion>
                </li>
                <li
                  className="rounded-xl hover:bg-gray-100"
                  style={{ backgroundColor: "var(--secondary-500)" }}
                >
                  <Accordion
                    itemClasses={itemClasses}
                    className="customAccordion"
                  >
                    <AccordionItem
                      key="2"
                      aria-label="Accordion 1"
                      title={
                        <div className="flex ">
                          <h3 className="mr-2">Other For You</h3>
                          <p className="rounded-full bg-secondary text-secondary border-1 px-1 py-0 leading-4 text-xs">
                            3
                          </p>
                        </div>
                      }
                      className="text-black"
                    >
                      <ul className="list-disc pl-10">
                        <li className="flex justify-between pb-2.5">
                          <div>Grocery</div>
                          <Checkbox
                            className="m-0 p-0"
                            defaultSelected
                            size="md"
                            color="success"
                          ></Checkbox>
                        </li>
                        <li className="flex justify-between pb-2.5">
                          <div>Electronics</div>
                          <Checkbox
                            className="m-0 p-0"
                            defaultSelected
                            size="md"
                            color="success"
                          ></Checkbox>
                        </li>
                        <li className="flex justify-between pb-2.5">
                          <div>Mobiles</div>
                          <Checkbox
                            className="m-0 p-0"
                            defaultSelected
                            size="md"
                            color="success"
                          ></Checkbox>
                        </li>
                        <li className="flex justify-between pb-2.5">
                          <div>Home</div>
                          <Checkbox
                            className="m-0 p-0"
                            defaultSelected
                            size="md"
                            color="success"
                          ></Checkbox>
                        </li>
                        <li className="flex justify-between pb-2.5">
                          <div>Beauty, Toys & More</div>
                          <Checkbox
                            className="m-0 p-0"
                            defaultSelected
                            size="md"
                            color="success"
                          ></Checkbox>
                        </li>
                      </ul>
                    </AccordionItem>
                  </Accordion>
                </li>

                <li className="bg-white rounded-xl">
                  <a
                    href="#"
                    className="p-3 text-sm flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <div className="flex justify-between w-full items-center">
                      <p>Cash on Delivery</p>
                      <Switch
                        color="secondary"
                        defaultSelected
                        classNames={{
                          wrapper: "p-0 h-4 overflow-visible",
                          thumb: cn(
                            "w-6 h-6 border-2 shadow-lg",
                            "group-data-[hover=true]:border-secondary",
                            //selected
                            "group-data-[selected=true]:ml-6 bg-secondary",
                            // pressed
                            "group-data-[pressed=true]:w-7",
                            "group-data-[selected]:group-data-[pressed]:ml-4"
                          ),
                        }}
                        aria-label="Automatic updates"
                      />
                    </div>
                  </a>
                </li>
                <li className="bg-white rounded-xl">
                  <a
                    href="#"
                    className="p-3 text-sm flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <div className="flex justify-between w-full items-center">
                      <p>Pre Booking</p>
                      <Switch
                        color="secondary"
                        defaultSelected
                        classNames={{
                          wrapper: "p-0 h-4 overflow-visible",
                          thumb: cn(
                            "w-6 h-6 border-2 shadow-lg",
                            "group-data-[hover=true]:border-secondary",
                            //selected
                            "group-data-[selected=true]:ml-6 bg-secondary",
                            // pressed
                            "group-data-[pressed=true]:w-7",
                            "group-data-[selected]:group-data-[pressed]:ml-4"
                          ),
                        }}
                        aria-label="Automatic updates"
                      />
                    </div>
                  </a>
                </li>
                <li className="bg-white rounded-xl">
                  <a
                    href="#"
                    className="p-3 text-sm flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <div className="flex justify-between w-full items-center">
                      <p>Open Shop</p>
                      <Switch
                        color="secondary"
                        defaultSelected
                        classNames={{
                          wrapper: "p-0 h-4 overflow-visible",
                          thumb: cn(
                            "w-6 h-6 border-2 shadow-lg",
                            "group-data-[hover=true]:border-secondary",
                            //selected
                            "group-data-[selected=true]:ml-6 bg-secondary",
                            // pressed
                            "group-data-[pressed=true]:w-7",
                            "group-data-[selected]:group-data-[pressed]:ml-4"
                          ),
                        }}
                        aria-label="Automatic updates"
                      />
                    </div>
                  </a>
                </li>
                <li className="bg-white rounded-xl">
                  <a
                    href="#"
                    className="p-3 text-sm flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <div className="flex justify-between w-full items-center">
                      <p>Hospitals</p>
                      <Switch
                        color="secondary"
                        defaultSelected
                        classNames={{
                          wrapper: "p-0 h-4 overflow-visible",
                          thumb: cn(
                            "w-6 h-6 border-2 shadow-lg",
                            "group-data-[hover=true]:border-secondary",
                            //selected
                            "group-data-[selected=true]:ml-6 bg-secondary",
                            // pressed
                            "group-data-[pressed=true]:w-7",
                            "group-data-[selected]:group-data-[pressed]:ml-4"
                          ),
                        }}
                        aria-label="Automatic updates"
                      />
                    </div>
                  </a>
                </li>
                <li className="bg-white rounded-xl">
                  <a
                    href="#"
                    className="p-3 text-sm flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <div className="flex justify-between w-full items-center">
                      <p>Hotels</p>
                      <Switch
                        color="secondary"
                        defaultSelected
                        classNames={{
                          wrapper: "p-0 h-4 overflow-visible",
                          thumb: cn(
                            "w-6 h-6 border-2 shadow-lg",
                            "group-data-[hover=true]:border-secondary",
                            //selected
                            "group-data-[selected=true]:ml-6 bg-secondary",
                            // pressed
                            "group-data-[pressed=true]:w-7",
                            "group-data-[selected]:group-data-[pressed]:ml-4"
                          ),
                        }}
                        aria-label="Automatic updates"
                      />
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
