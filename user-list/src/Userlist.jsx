import React from "react";

const Userlist = ({ users }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {users.length === 0 ? (
        <p className="text-gray-400 text-center col-span-2">No users found</p>
      ) : (
        users.map((user) => (
          <div key={user.id} className="bg-gray-700 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h2 className="text-xl font-semibold text-blue-300">{user.name}</h2>
            <p className="text-gray-300">{user.email}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Userlist;
