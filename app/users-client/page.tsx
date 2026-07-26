"use client";

import CommonPageDesign from "../components/commonPageDesign";
import Loading from "../components/ui/loading";

import { useState, useEffect } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default function UsersClientPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchUsers() { 
            try {
              const response = await fetch(
                "https://jsonplaceholder.typicode.com/users",
              );

              //setUsers(await response.json());

              const usersData = await response.json();

              // Artificial delay
              await new Promise((resolve) => setTimeout(resolve, 500));

              setUsers(usersData);

              // setTimeout(() => {
              //   setUsers(usersData);
              //   setLoading(false);
              // }, 50000);

              console.log("Fetched users:", usersData);
            } catch (err) {
                setError("Failed to fetch users");
            } finally {
                setLoading(false); 
            }
        }

        fetchUsers();
    }, []);

  return (
    <CommonPageDesign>
      <section className="relative w-full sm:w-3/4 rounded-md border border-cyan-100 bg-slate-800 p-12 shadow-4xl backdrop-blur-4xl text-slate-200">
        <div className="w-full flex justify-end">
          <div className="mb-8 rounded-sm border border-white/60 bg-cyan-100 px-4 py-1 text-sm font-medium text-cyan-700">
            users-client/page.tsx
          </div>
        </div>

        <h1 className="mb-4 text-2xl font-bold">Users List</h1>
        {loading && <Loading />}
        {error && (
          <p className="text-red-500 text-center text-2xl p-4 border border-red-400 bg-red-50 font-semibold mx-4 rounded-2xl">
            {error}
          </p>
        )}
        {!loading && !error && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="rounded-2xl border border-cyan-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl"
              >
                {/* User Header */}
                <div className="mb-5 flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80"
                    alt="User Avatar"
                    className="h-16 w-16 rounded-full border-2 border-cyan-300 object-cover shadow-md"
                  />

                  <div>
                    <h2 className="text-lg font-semibold text-slate-800">
                      {user.name}
                    </h2>

                    <p className="text-sm text-cyan-600">@{user.username}</p>
                  </div>
                </div>

                {/* User Details */}
                <div className="space-y-3 text-sm text-slate-600">
                  <div>
                    <span className="font-medium text-slate-800">📧 Email</span>
                    <p>{user.email}</p>
                  </div>

                  <div>
                    <span className="font-medium text-slate-800">📞 Phone</span>
                    <p>{user.phone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </CommonPageDesign>
  );
}
