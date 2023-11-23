"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [formValue, SetFormValue] = useState({
    email: "email@email.com",
    password: "123",
  });
  const router = useRouter();

  const inputChange = (name: string, value: string) => {
    SetFormValue((formValue) => ({
      ...formValue,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formValue.email.length === 0) {
      alert("Email Required");
    } else if (formValue.password.length === 0) {
      alert("Password Required");
    } else {
      const config = { method: "POST", body: JSON.stringify(formValue) };
      const response = await fetch("/api/login", config);
      const json = await response.json();
      if (json["status"] === true) {
        router.replace("/roman");
      } else {
        alert(json["message"]);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">User Email</label>
          <input
            className="w-full border border-gray-300 p-2 rounded"
            value={formValue.email}
            onChange={(e) => inputChange("email", e.target.value)}
            type="email"
            placeholder="example@example.com"
          />
          <label className="block">User Password</label>
          <input
            className="w-full border border-gray-300 p-2 rounded"
            value={formValue.password}
            onChange={(e) => inputChange("password", e.target.value)}
            type="password"
            placeholder="XXXXXXX"
          />
          <input
            className="w-full bg-blue-500 text-white p-2 rounded cursor-pointer hover:bg-blue-600"
            type="submit"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
};

export default Page;
