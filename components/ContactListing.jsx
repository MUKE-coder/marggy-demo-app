"use client";
import Link from "next/link";
import React from "react";

export default function ContactListing() {
  const savedLocalContacts = JSON.parse(localStorage.getItem("contacts")) || [];
  console.log(savedLocalContacts);
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <caption className="flex items-center justify-between p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          My Contacts({savedLocalContacts.length ?? 0})
          <Link href="/contacts/create">Add New Contact</Link>
        </caption>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {savedLocalContacts && savedLocalContacts.length > 0 ? (
              savedLocalContacts.map((item) => {
                return (
                  <tr
                    key={item.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.name}
                    </th>
                    <td className="px-6 py-4">{item.phone}</td>
                    <td className="px-6 py-4">{item.email}</td>
                    <td className="px-6 py-4">{item.category}</td>
                    <td className="px-6 py-4 text-right justify-end flex gap-2">
                      <a
                        href="/contacts/edit/12333"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                      <button className="font-medium text-red-600 dark:text-red-500 cursor-pointer">
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <p>No Data Found</p>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
