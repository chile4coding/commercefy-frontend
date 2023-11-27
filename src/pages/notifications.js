import Applayout from "@/components/header/layout/Applayout";
import { clearNotification } from "@/redux/storeSlice";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Notifications() {
  const { user, transactionFilter, transactions, notifications } = useSelector(
    (state) => state.store
  );
  const router = useRouter();
  const dispatch  = useDispatch()

function getTimeDifference(timestamp) {
  const now = new Date();
  const diff = now - timestamp;

  const seconds = Math.floor(diff / 1000);
  if (seconds < 60) {
    return seconds + " seconds ago";
  }

  const minutes = Math.floor(diff / 1000 / 60);
  if (minutes < 60) {
    return minutes + " minutes ago";
  }

  const hours = Math.floor(diff / 1000 / 60 / 60);
  if (hours < 24) {
    return hours + " hours ago";
  }

  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  if (days < 30) {
    return days + " days ago";
  }

  const months = Math.floor(diff / 1000 / 60 / 60 / 24 / 30);
  return months + " months ago";
}

function clearNofication(){
dispatch(clearNotification([]));
}

  return (
    <Applayout>
      <div className="max-w-md mx-auto ">
        {
          <div className=" flex justify-between items-center">
            <h2 className=" font-bold my-6">Notifications</h2>

            <p className=" cursor-pointer" onClick={clearNofication}>
              Clear{" "}
            </p>
          </div>
        }

        {notifications &&
          notifications.length > 0 &&
          notifications.map((notice) => {
            if (notice.hasOwnProperty("notification")) {
              return (
                <div className="  flex justify-between  items-center cursor-pointer border-b  border-b-slate-400">
                  <p
                    className="  my-4 text-sm "
                    onClick={() => router.push(`${notice.desc.link}`)}>
                    {notice.notification}.....
                  </p>
                  <p className="my-4 text-sm text-[red]">
                    {getTimeDifference(notice?.desc?.time)}
                  </p>
                </div>
              );
            }
          })}

          {
            notifications && notifications.length  < 1 && <div className=" flex  justify-center items-center text-center h-[30vh] text-red-500 font-bold"> No notification </div>
          }
      </div>
    </Applayout>
  );
}
