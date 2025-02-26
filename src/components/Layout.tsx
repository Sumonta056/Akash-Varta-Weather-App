import { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="bg-gradient-to-br from-background to-muted">
      Header
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t backdrop-blur py-12 supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 text-center">
          <p>
            All Right Reserved by
            <span className="font-bold text-rose-600"> Sumonta056</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
