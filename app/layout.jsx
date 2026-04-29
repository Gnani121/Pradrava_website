import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
	title: "Pradrava",
	description: "End-to-End IT, AI & Cloud Solutions"
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="site-shell">
				<Navbar />
				<main className="site-main">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
