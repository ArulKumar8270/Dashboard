"use client";
import * as React from "react";
import { Button, NextUIProvider, Switch } from "@nextui-org/react";
import { SideNavbar } from "./Components/SideBar/page";
import { StoreLoginSideBar } from "./Components/SideBar/Storeloginsidebar";
import TableList from "./Components/Table/TableList";

export default function Home() {
  return (
        <NextUIProvider >
          <main className="mytheme text-foreground overflow-hidden p-4">
            <div className="flex flex-row">
              <div className="w-1/4 md:w-1/3 lg:w-1/5">
                {/* <SideNavbar /> */}
                <StoreLoginSideBar/>
              </div>
              <div className="w-1/4 md:w-2/3 lg:w-4/5 px-3 custom-scrollbar">
                {/* <ProductDetail /> */}
                <div className="h-[81vh] overflow-auto navBarStyle p-4 mt-3">
                  {/* <AccordionComp   /> */}
                  <TableList/>
                </div>
              </div>
            </div>
          </main>
        </NextUIProvider>
     
  );
}
