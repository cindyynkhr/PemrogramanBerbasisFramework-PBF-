import { Navbar, Footer } from '../navbar';

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  
  return (
    <main>
      <Navbar />
      <div>
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default AppShell;
