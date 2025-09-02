// thank-you.jsx
export default function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-6">
      <h1 className="text-3xl md:text-5xl font-bold text-green-600 mb-4">
        🎉 Thank You!
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-md">
        Your message has been successfully sent.
        I’ll get back to you as soon as possible.
      </p>
      <a
        href="/"
        className="mt-6 inline-block px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
      >
        Back to Home
      </a>
    </div>
  )
}
