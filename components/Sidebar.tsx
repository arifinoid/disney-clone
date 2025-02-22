import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-20 h-screen bg-gray-900 text-white flex flex-col items-center p-4">
      <Link href="/">
        <div className="p-4 hover:bg-gray-700 rounded">🏠</div>
      </Link>
      <Link href="/search">
        <div className="p-4 hover:bg-gray-700 rounded">🔍</div>
      </Link>
      <Link href="/watchlist">
        <div className="p-4 hover:bg-gray-700 rounded">📺</div>
      </Link>
    </aside>
  );
};

export default Sidebar;
