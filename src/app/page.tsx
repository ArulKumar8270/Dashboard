"use client";
import * as React from "react";
import { Button, NextUIProvider, Switch } from "@nextui-org/react";
import { StoreLoginSideBar } from "./Components/SideBar/Storeloginsidebar";
import StoreForm from "./Components/Forms/Forms";

export default function Home() {
  const users = [
    {
      id: 1,
      productName: "Jane Fisher",
      role: "Sr. Dev",
      category: "Development",
      status: "active",
      price: "22",
      offers: "90%",
      image: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      email: "jane.fisher@example.com",
    },
    {
      id: 2,
      productName: "Jane samz",
      role: "Sr. Dev",
      category: "Programmer",
      status: "active",
      price: "20062",
      offers: "70%",
      image: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      email: "jane.fisher@example.com",
    },
  ];
  return (
    <NextUIProvider>
      <main className="mytheme text-foreground overflow-hidden p-4">
        <div className="flex flex-row">
          <div className="w-1/4 md:w-1/3 lg:w-1/5">
            <StoreLoginSideBar />
          </div>
          <div className="w-1/4 md:w-2/3 lg:w-4/5 px-3 custom-scrollbar">
            <div className="h-[81vh] overflow-auto navBarStyle p-4 mt-3">
              {/* <TableList
                TableColumns={TotalProductEntries}
                Defualt_Columns={Defualt_Columns_TotalProductEntries}
                Tableitems={users}
              /> */}
              <StoreForm />
            </div>
          </div>
        </div>
      </main>
    </NextUIProvider>
  );
}
