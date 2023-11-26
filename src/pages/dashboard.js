import ActiveLink from "@/components/header/layout/ActiveLink";
import { MdDashboardCustomize } from "react-icons/md";
import React, { useEffect, useState } from "react";
import Applayout from "@/components/header/layout/Applayout";
import KYCModal from "@/components/header/modal/KYCModal";
import { useDispatch, useSelector } from "react-redux";
import {
  businessTransactions,
  geClients,
  geWithdraw,
  getCookie,
  getInvoices,
  getUser,
  socket,
} from "@/services/request";
import {
  allTransaction,
  filterTransaction,
  getInvoice,
  getNotification,
  getOwnerClients,
  getTransactions,
  getWithdrawal,
  setUser,
} from "@/redux/storeSlice";
import { useRouter } from "next/router";

function Transactions({ transactions }) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr className="bg-[#EDEAF3] font-semibold p-2 text-sm">
            <th>Date</th>
            <th>Description</th>
            <th>Status</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {transactions &&
            transactions.length > 0 &&
            transactions.map((item) => {
              return (
                <tr>
                  <td>{item?.date}</td>

                  <td>
                    <div>{item.name}</div>
                    <div className="text-xs">{item.type}</div>
                  </td>
                  <td className=" text-center">
                    {" "}
                    <span>{item.status}</span>{" "}
                    {item.status !== "pending" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none">
                        <g clip-path="url(#clip0_256_621)">
                          <path
                            d="M14.2985 5.46666C14.3334 6.16675 14.3334 6.99959 14.3334 7.99999C14.3334 10.9855 14.3334 12.4783 13.4059 13.4059C12.4784 14.3333 10.9856 14.3333 8.00008 14.3333C5.01452 14.3333 3.52174 14.3333 2.59424 13.4059C1.66675 12.4783 1.66675 10.9855 1.66675 7.99999C1.66675 5.01443 1.66675 3.52165 2.59424 2.59415C3.52174 1.66666 5.01452 1.66666 8.00008 1.66666C8.71468 1.66666 9.34381 1.66666 9.90008 1.67938"
                            stroke="#1A8C18"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            d="M5.33325 7.66666C5.33325 7.66666 6.33325 7.66666 7.66659 9.99999C7.66659 9.99999 11.0391 3.88888 14.3333 2.66666"
                            stroke="#1A8C18"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_256_621">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none">
                        <path
                          d="M2 8C2 5.01444 2 3.52166 2.92749 2.59416C3.85499 1.66667 5.34777 1.66667 8.33333 1.66667C11.3189 1.66667 12.8117 1.66667 13.7392 2.59416C14.6667 3.52166 14.6667 5.01444 14.6667 8C14.6667 10.9855 14.6667 12.4783 13.7392 13.4059C12.8117 14.3333 11.3189 14.3333 8.33333 14.3333C5.34777 14.3333 3.85499 14.3333 2.92749 13.4059C2 12.4783 2 10.9855 2 8Z"
                          stroke="#8C1D18"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.9998 8H5.6665"
                          stroke="#8C1D18"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    )}
                  </td>
                  <td>₦{item?.amount.toFixed(2)}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default function Dashbooard() {
  const [show, setShow] = useState(true);
  const { user, transactionFilter, transactions } = useSelector(
    (state) => state.store
  );

  const [name, setName] = useState([
    { name: "All Transaction", id: 1, active: true },
    { name: "Money In", id: 2, active: false },
    { name: "Money Out", id: 3, active: false },
  ]);

  const [showBalnce, setShowBalance] = useState(true);

  const dispatch = useDispatch();

  function closeKYC() {
    setShow(false);
  }
  const router = useRouter();
  useEffect(() => {
    const token = getCookie();
    async function getUserDetails() {
      const response = await getUser(token);

      if (response.status === 200) {
        const data = await response.json();
        dispatch(setUser(data.owner));
        const dataI = await getInvoices(token);
        dispatch(getInvoice(dataI.invoices));
        const dataW = await geWithdraw(token);

        dispatch(getWithdrawal(dataW.withdraw));
        const dataC = await geClients(token);

        dispatch(getOwnerClients(dataC.clients));

        const dataT = await businessTransactions(token);

        dispatch(getTransactions(dataT.transactions));
        dispatch(allTransaction(dataT.transactions));
      }
    }

    socket.on(`${user?.id}`, getUserDetails );
    socket.on(`${user?.id}transferNotification`, (message) => {
      dispatch(getNotification(message.notification));
      console.log(message);
      getUserDetails();
    });
    socket.on(`${user?.id}invoicemessage`, (message) => {
      console.log(message)
      dispatch(getNotification(message.notification));
      getUserDetails();
    });

    return () => {
      socket.off(`${user?.id}`);
      socket.off(`${user?.id}transferNotification`);
    };
  }, []);

  function toggleBalance() {
    setShowBalance((prev) => !prev);
  }

  function handleFilter(id) {
    const filter = name.map((item) => {
      if (item.id === id) {
        return { ...item, active: true };
      } else {
        return { ...item, active: false };
      }
    });
    setName(filter);

    if (id === 1) {
      dispatch(allTransaction(transactions));
    }
    if (id === 2) {
      dispatch(filterTransaction("credit"));
    }
    if (id === 3) {
      dispatch(filterTransaction("withdrawal"));
    }
  }

  return (
    <Applayout>
      {!user?.KYC && show && <KYCModal show={show} close={closeKYC} />}

      <div className="max-w-md mx-auto ">
        <div className="" id="tab1">
          <div className="lg:p-1 p-2">
            <div className="bg-gradient-to-r from-[#BAA4F7] via-[#FFA0A0] to-[#6750A4CC] p-5  rounded-lg shadow-md">
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-0">
                <div className="mb-4">
                  <h1 className="lg:text-xl text-base font-bold text-[#0,000.00]">
                    Balance
                  </h1>
                  <p
                    className="  lg:text-3xl text-lg font-bold text-[#252525] mt-2"
                    id="numberDisplay">
                    {showBalnce
                      ? `₦${user?.wallet?.balance.toFixed(2)}`
                      : "******"}
                  </p>
                  <div className="mt-5 bg-[#FEFEFE80] flex items-center rounded-md">
                    <span
                      onClick={() => router.push("/withdraw")}
                      className=" cursor-pointer text-[#252525] lg:text-lg text-xs p-2 flex items-center">
                      Transfer funds
                      <div className="ml-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none">
                          <path
                            d="M6 12.6667L12.1953 6.47141C12.6796 5.98705 12.9218 5.74488 13.1275 5.83011C13.3333 5.91535 13.3333 6.25783 13.3333 6.9428V9.1746"
                            stroke="#141B34"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10.0001 3.33334L3.80482 9.5286C3.32047 10.0129 3.07829 10.2551 2.87252 10.1699C2.66675 10.0847 2.66675 9.7422 2.66675 9.0572V6.66667"
                            stroke="#141B34"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </span>
                  </div>
                </div>

                <button
                  className="focus:outline-none cursor-pointer"
                  onClick={toggleBalance}>
                  <i
                    id="toggleIcon"
                    className="far fa-eye"
                    style={{ color: "#FEFEFE" }}></i>
                </button>
              </div>
            </div>
          </div>
          <div className="flex mb-4 mt-10 p-0">
            {name.map((item) => (
              <span
                key={item.id}
                className={` cursor-pointer w-1/2 py-2 text-[#252525] text-center hover:bg-[#4F378B1A] lg:text-base text-sm font-medium ${
                  item.active ? "bg-[#e7e6e6]" : ""
                }`}
                onClick={handleFilter.bind(this, item.id)}>
                {item.name}
              </span>
            ))}
          </div>
        </div>

        {/* {transactionFilter &&
          transactionFilter.length > 0 &&
          transactionFilter.map((item) => {
            return <Transactions key={item.id} item={item} />;
          })} */}
        <div className=" ">
          {<Transactions transactions={transactionFilter} />}
        </div>

        {transactionFilter && transactionFilter.length === 0 && (
          <div className=" text-center">No transaction found</div>
        )}
      </div>
    </Applayout>
  );
}
