import React from 'react';

const ForgetPassword = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Forget Password</h2>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <div className="flex">
                        <input type="email" id="email" placeholder="Enter your email" className="w-full p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                        <button className="px-4 py-2 bg-purple-500 text-white rounded-r-lg hover:bg-purple-600 transition duration-200">Send OTP</button>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="otp" className="block text-gray-700 font-medium mb-2">OTP</label>
                    <input type="number" id="otp" placeholder="Enter the OTP" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
                <button className="w-full py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-200">Verify OTP</button>
            </div>
        </div>
    );
}

export default ForgetPassword;
