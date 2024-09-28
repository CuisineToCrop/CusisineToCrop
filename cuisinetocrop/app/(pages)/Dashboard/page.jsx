// app/dashboard/page.js

export default function Dashboard() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-lg font-semibold">YO</h2>
          <p className="text-2xl">23123</p>
        </div>
      </div>
    </div>
  );
}
