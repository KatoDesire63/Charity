import { useState } from "react";

export default function Scholarship() {
  var initial = {
    fullName: "", age: "", gender: "", school: "",
    grade: "", reason: "", parentName: "", phone: "", email: ""
  };

  var stateResult = useState(initial);
  var form = stateResult[0];
  var setForm = stateResult[1];

  var submittedResult = useState(false);
  var submitted = submittedResult[0];
  var setSubmitted = submittedResult[1];

  function handleChange(e) {
    var name = e.target.name;
    var value = e.target.value;
    setForm(function(prev) {
      var updated = Object.assign({}, prev);
      updated[name] = value;
      return updated;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <div className="bg-white p-10 rounded shadow text-center max-w-md">
          <div className="text-green-600 text-5xl mb-4">✓</div>
          <h2 className="text-2xl font-bold mb-2">Application Submitted!</h2>
          <p className="text-gray-600 mb-6">
            Thank you, {form.fullName}. We will review your application and contact you shortly.
          </p>
          <a href="/" className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50 py-12 px-6">
      <div className="max-w-2xl mx-auto bg-white rounded shadow p-8">

        <h2 className="text-3xl font-bold mb-2 text-green-900">Scholarship Application</h2>
        <p className="text-gray-500 mb-8">Fill in the form below to apply for a scholarship.</p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-sm font-semibold mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
              placeholder="Enter full name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Age</label>
              <input
                type="number"
                name="age"
                value={form.age}
                onChange={handleChange}
                required
                placeholder="Age"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Gender</label>
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">School Name</label>
            <input
              type="text"
              name="school"
              value={form.school}
              onChange={handleChange}
              required
              placeholder="Enter school name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Grade / Class</label>
            <input
              type="text"
              name="grade"
              value={form.grade}
              onChange={handleChange}
              required
              placeholder="e.g. P6, S3, Year 2"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Parent / Guardian Name</label>
            <input
              type="text"
              name="parentName"
              value={form.parentName}
              onChange={handleChange}
              required
              placeholder="Enter parent or guardian name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="07XXXXXXXX"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email (optional)</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="email@example.com"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Why do you need this scholarship?</label>
            <textarea
              name="reason"
              value={form.reason}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Briefly explain your situation..."
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded font-bold hover:bg-green-800 transition"
          >
            Submit Application
          </button>

        </form>
      </div>
    </div>
  );
}