import '../../globals.css';
import DashboardNavbar from '../../components/DashboardNavbar';

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
          <body>
            <DashboardNavbar />
            <main>{children}</main>
          </body>
        </html>
  );
}
