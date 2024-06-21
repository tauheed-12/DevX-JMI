import React from 'react';

const ChangePassword = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Change Password</h1>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="old-password" className="block text-gray-700 font-medium mb-2">Enter Old Password</label>
                        <input
                            type="password"
                            id="old-password"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Old Password"
                        />
                    </div>
                    <div>
                        <label htmlFor="new-password" className="block text-gray-700 font-medium mb-2">Enter New Password</label>
                        <input
                            type="password"
                            id="new-password"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="New Password"
                        />
                    </div>
                    <button className="w-full py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-200">Change Password</button>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;
