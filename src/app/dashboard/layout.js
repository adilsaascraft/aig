import '../globals.css';
import DashboardNavbar from '../components/DashboardNavbar';
import Sidebar from '../components/Sidebar';

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {/* Top Navbar */}
        <DashboardNavbar />

        {/* Sidebar + Page Content */}
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 p-8 bg-gray-50">{children}</main>
        </div>
      </body>
    </html>
  );
}
