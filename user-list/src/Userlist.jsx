import React from "react";

const Userlist = ({ users }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {users.length === 0 ? (
        <p className="text-gray-400 text-center col-span-4">No users found</p>
      ) : (
        users.map((user) => (
          <div key={user.id} className="bg-gray-700 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h2 className="text-xl font-semibold text-blue-300">{user.name}</h2>
            <p className="text-gray-300"><strong>Email:</strong> {user.email}</p>
            <p className="text-gray-300"><strong>Age:</strong> {user.age}</p>
            <p className="text-gray-300"><strong>Gender:</strong> {user.gender}</p>
            <p className="text-gray-300"><strong>Country:</strong> {user.country}</p>
            <p className="text-gray-300"><strong>Status:</strong> {user.is_active ? "Active" : "Inactive"}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Userlist;
