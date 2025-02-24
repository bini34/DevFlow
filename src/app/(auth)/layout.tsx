const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-green-500">
      {children}
    </main>
  );
};

export default Layout;
