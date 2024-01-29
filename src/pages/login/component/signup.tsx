import React, { useState } from "react";

type SignupProps = {
  toggleSignupScreen: any;
  createUser: any;
  loading: boolean;
};

function Signup({ toggleSignupScreen, loading, createUser }: SignupProps) {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [collegeEmail, setCollegeEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordMatch, isPasswordMatch] = useState(true);
  return (
    <div className={"grid grid-cols-3 h-screen"}>
      <div className={"col-span-1 bg-blue-500"}></div>
      <div
        className={
          "col-span-2 bg-gray-50 flex flex-col justify-center items-center"
        }
      >
        <center>
          <div className={"bg-white rounded shadow flex flex-col px-20 py-10"}>
            <div>
              Been here before?
              <span
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                onClick={toggleSignupScreen}
              >
                Sign In.
              </span>
            </div>
            <form action={""} onChange={() => {}} onSubmit={() => false}>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={firstName}
                    onChange={(e) => setFirstName((prev) => e.target.value)}
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="mid_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Middle name
                  </label>
                  <input
                    type="text"
                    id="mid_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={middleName}
                    onChange={(e) => setMiddleName((prev) => e.target.value)}
                    placeholder="D"
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={lastName}
                    onChange={(e) => setLastName((prev) => e.target.value)}
                    placeholder="Doe"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="123-45-678"
                    value={phone}
                    onChange={(e) => setPhone((prev) => e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="college"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  College Name
                </label>
                <input
                  type="text"
                  id="college"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="University of Cincinnati"
                  value={collegeEmail}
                  onChange={(e) => setCollegeEmail((prev) => e.target.value)}
                  required
                />
              </div>
              <div className="mt-6 mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john.doe@company.com"
                  value={email}
                  onChange={(e) => {
                    setEmail((prev) => e.target.value);
                  }}
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="•••••••••"
                  value={password}
                  onChange={(e) => {
                    setPassword((prev) => e.target.value);
                    if (verifyPassword.length) {
                      isPasswordMatch(verifyPassword === e.target.value);
                    }
                    console.log(passwordMatch);
                  }}
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="confirm_password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  id="confirm_password"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${
                    passwordMatch
                      ? "dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      : "dark:focus:ring-red-500 dark:focus:border-red-500"
                  }`}
                  placeholder="•••••••••"
                  value={verifyPassword}
                  onChange={(e) => {
                    setVerifyPassword((prev) => e.target.value);
                    isPasswordMatch(e.target.value === password);
                    console.log(passwordMatch);
                  }}
                  required
                />
              </div>
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  I agree with the{" "}
                  <a
                    href="#"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    terms and conditions
                  </a>
                  .
                </label>
              </div>
              <button
                type={"button"}
                className={`text-white ${
                  loading ? "bg-gray-700" : "bg-blue-700"
                } hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                onClick={() =>
                  !loading &&
                  createUser({
                    email,
                    password,
                    firstName,
                    middleName,
                    lastName,
                    collegeEmail,
                    phone,
                  })
                }
              >
                Submit
              </button>
            </form>
          </div>
        </center>
      </div>
    </div>
  );
}

export default Signup;
