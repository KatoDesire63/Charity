import { useState } from "react";

var amounts = [10, 25, 50, 100, 250];

export default function Donate() {
  var selectedResult = useState(25);
  var selected = selectedResult[0];
  var setSelected = selectedResult[1];

  var customResult = useState("");
  var custom = customResult[0];
  var setCustom = customResult[1];

  var formResult = useState({ name: "", email: "", phone: "", message: "" });
  var form = formResult[0];
  var setForm = formResult[1];

  var submittedResult = useState(false);
  var submitted = submittedResult[0];
  var setSubmitted = submittedResult[1];

  function handleChange(e) {
    var name = e.target.name;
    var value = e.target.value;

    setForm(function (prev) {
      var updated = Object.assign({}, prev);
      updated[name] = value;
      return updated;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  var finalAmount = custom ? custom : selected;

  if (submitted) {
    return (
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/donate2.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black/60 w-full min-h-screen flex items-center justify-center">
          <div className="bg-white p-10 rounded shadow text-center max-w-md">
            <div className="text-red-500 text-5xl mb-4">♥</div>

            <h2 className="text-2xl font-bold mb-2">
              Thank You, {form.name}!
            </h2>

            <p className="text-gray-600 mb-2">
              Your donation of{" "}
              <span className="font-bold text-red-500">
                ${finalAmount}
              </span>{" "}
              has been received.
            </p>

            <p className="text-gray-500 mb-6">
              May Allah reward you abundantly for your generosity.
            </p>

            <a
              href="/"
              className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-6 py-12"
      style={{
        backgroundImage: "url('/img/donate-bg.jpg')"
      }}
    >
      {/* DARK OVERLAY */}
      <div className="bg-red-50 w-full min-h-screen flex items-center justify-center py-12">

        <div className="max-w-2xl w-full bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8">

          <h2 className="text-3xl font-bold mb-2 text-red-700">
            Make a Donation
          </h2>

          <p className="text-gray-600 mb-8">
            Your generosity helps us support orphaned children with shelter,
            education, and care.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* AMOUNTS */}
            <div>
              <label className="block text-sm font-semibold mb-3">
                Select Amount (USD)
              </label>

              <div className="flex flex-wrap gap-3">
                {amounts.map(function (amt) {
                  return (
                    <button
                      key={amt}
                      type="button"
                      onClick={function () {
                        setSelected(amt);
                        setCustom("");
                      }}
                      className={
                        "px-5 py-2 rounded border font-bold transition " +
                        (selected === amt && !custom
                          ? "bg-red-500 text-white border-red-500"
                          : "bg-white text-gray-700 border-gray-300 hover:border-red-400")
                      }
                    >
                      ${amt}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CUSTOM AMOUNT */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                Or Enter Custom Amount
              </label>

              <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                <span className="bg-gray-100 px-3 py-2 text-gray-500 font-bold">
                  $
                </span>

                <input
                  type="number"
                  value={custom}
                  onChange={function (e) {
                    setCustom(e.target.value);
                    setSelected(null);
                  }}
                  placeholder="Enter amount"
                  className="flex-1 px-4 py-2 focus:outline-none"
                />
              </div>
            </div>

            {/* NAME */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>

            {/* EMAIL + PHONE */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Email"
                className="border border-gray-300 rounded px-4 py-2"
              />

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="border border-gray-300 rounded px-4 py-2"
              />
            </div>

            {/* MESSAGE */}
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="3"
              placeholder="Message (optional)"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />

            {/* TOTAL */}
            <div className="bg-red-50 border border-red-200 rounded p-4 text-center">
              <p className="text-sm text-gray-500">You are donating</p>
              <p className="text-3xl font-bold text-red-500">
                ${finalAmount || 0}
              </p>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded font-bold hover:bg-red-600 transition"
            >
              Donate Now
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}