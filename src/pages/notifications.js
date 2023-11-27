import Applayout from "@/components/header/layout/Applayout";
import { clearNotification, filterOutNotice } from "@/redux/storeSlice";
import { clearNotifications, deleteNotifications, getCookie } from "@/services/request";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Notifications() {
  const { user, transactionFilter, transactions, notifications } = useSelector(
    (state) => state.store
  );
  const [token, setToken] = useState(null)
  const router = useRouter();
  const dispatch  = useDispatch()

  useEffect(()=>{
const token = getCookie()
setToken(token)
  },[])

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

async function clearNofication(){
  const data = await clearNotifications(token)
 
  if(data){
    dispatch(clearNotification([]));
    
  }
}
async function deleteNotification(id){

  const data = await deleteNotifications(id.id, token)

  if(data){
    dispatch(filterOutNotice(id.id));
    router.push(`${id.link}`)

  }




}

  return (
    <Applayout>
      <div className="max-w-md mx-auto ">
        {
          <div className=" flex justify-between items-center">
            <h2 className=" font-bold my-6 px-4">Notifications</h2>

            <p className="pr-4 cursor-pointer" onClick={clearNofication}>
              Clear{" "}
            </p>
          </div>
        }

        {notifications &&
          notifications.length > 0 &&
          notifications.map((notice) => {
            if (notice.hasOwnProperty("notification")) {
              return (
                <div className=" px-4  flex justify-between  items-center cursor-pointer border-b  border-b-slate-400">
                  <p key={notice.id}
                    className="  my-4 text-sm "
                    onClick={ deleteNotification.bind(this, {id:notice.id, link: notice.desc.link})}>
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
