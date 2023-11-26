import Applayout from "@/components/header/layout/Applayout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Notifications() {
  const { user, transactionFilter, transactions, notifications } = useSelector(
    (state) => state.store
  );
  const router = useRouter();

  return (
    <Applayout>
      <div className="max-w-md mx-auto ">
        <h2 className=" font-bold my-6">Notifications</h2>
        {notifications &&
          notifications.length > 0 &&
          notifications.map((notice) => (
            <p
              className=" border-b border-b-black my-4 text-xs "
              onClick={() => router.push(`/dashboard`)}>
              {notice}
            </p>
          ))}
      </div>
    </Applayout>
  );
}
