import { Outlet } from "react-router";

export default function AuthLayout() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-linear-to-r from-blue-800 to-gray-700">

            <div className="bg-gray-600 p-8 rounded-2xl shadow-x1 w-full max-w-md">

                <Outlet />

            </div>

        </div>
    )
}