import { Button, Card, Label, TextInput } from "flowbite-react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <Card className="w-full max-w-sm p-6 text-center shadow-lg border border-gray-200">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Sign Up</h1>
        <p className="text-sm text-gray-500 mb-6">
          Already a member?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Log In
          </a>
        </p>

        {/* Google Button */}
        <Button
          custom={true}
          className="w-full bg-red-600 hover:!bg-red-700 text-white font-medium py-2.5 rounded-lg focus:outline-2 focus:ring-red-600"
        >
          <div className="flex items-center justify-center gap-2 w-full">
            <FaGoogle className="text-white size-5" />
            <span>Sign up with Google</span>
          </div>
        </Button>




        {/* Facebook Button */}
        <Button
          custom={true}
          className="w-full bg-blue-600 hover:!bg-blue-700 text-white font-medium py-2.5 rounded-lg focus:ring-2 focus:ring-blue-600"
        >
          <div className="flex items-center justify-center gap-2 w-full">
            <FaFacebook className="text-white size-5 " />
            <span>Sign up with Facebook</span>
          </div>
        </Button>

        {/* Email & Password Inputs */}
        <div className="text-left mb-4">
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </Label>
          <TextInput id="email" type="email" placeholder="you@example.com" className="mb-3 mt-1" required />

          <Label htmlFor="password" className="text-sm font-medium text-gray-700">
            Password
          </Label>
          <TextInput id="password" type="password" placeholder="••••••••" className="mt-1" required />
        </div>


        {/* Sign up with email */}
        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg transition-colors">
          Sign up with email
        </button>


      </Card>
    </div>
  );
}

export default App;
