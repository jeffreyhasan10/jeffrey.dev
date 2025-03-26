
import React, { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <div className="fixed inset-0 bg-dark-200 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-300/40" />
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-neon-blue/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-neon-purple/5 blur-[150px] rounded-full" />
      </div>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
