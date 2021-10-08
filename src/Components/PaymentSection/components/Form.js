import { CashIcon } from "@heroicons/react/solid";

export default function Form({ handleFieldChange, fields, handleSend }) {
  return (
    <div className="">
      <form className="mt-8 space-y-6" onSubmit={handleSend}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={fields.email}
              onChange={handleFieldChange}
              autoComplete="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Your Email Address "
            />
          </div>
          <div>
            <label htmlFor="address" className="sr-only">
              Password
            </label>
            <input
              id="sendAddress"
              name="address"
              type="text"
              value={fields.sendAddress}
              onChange={handleFieldChange}
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Cash App BTC Address"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <CashIcon
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
