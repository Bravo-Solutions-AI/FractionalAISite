export default function TestPage() {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Tailwind CSS Test</h1>
        <p className="text-gray-600 mb-4">If you can see this styled properly, Tailwind is working!</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
          Test Button
        </button>
      </div>
    </div>
  )
}