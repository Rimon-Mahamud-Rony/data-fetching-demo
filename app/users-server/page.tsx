import React from 'react';
import CommonPageDesign from "../components/commonPageDesign";
import Loading from "../components/ui/loading";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function UsersServer() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: User[] = await response.json();

    return (
      <CommonPageDesign>
        <section className="relative w-full sm:w-3/4 rounded-md border border-cyan-100 bg-slate-800 p-12 shadow-4xl backdrop-blur-4xl text-slate-200">
          <h1 className="text-2xl font-bold mb-4">
            Users for Server Component
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {users.length < 1 && <Loading />}
            {users.map((user) => (
              <div
                key={user.id}
                className="rounded-2xl border border-cyan-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl"
              >
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
        </section>
      </CommonPageDesign>
    );
 }