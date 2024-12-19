"use client";

export default function Drawer({ closeDrawer }) {
  return (
    // Black Overlay
    <div className="fixed inset-0 bg-black h-screen bg-opacity-50 z-40">
      {/* Drawer Container */}
      <div className="fixed top-0 right-0 h-screen w-64 bg-white shadow-lg z-50 transform transition-transform translate-x-0">
        {/* Contents */}
        <div className="p-4">
          <h2 className="text-lg font-bold">User Options</h2>
          <button
            onClick={closeDrawer}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            Close Drawer
          </button>
        </div>
      </div>
    </div>
  );
}
