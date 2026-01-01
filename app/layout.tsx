import Footer from "@/components/footer";
import "./globals.css";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 flex flex-col min-h-screen">
        <Header />
        <SubHeader />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
