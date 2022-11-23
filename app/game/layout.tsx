const Layout = ({ children }) => {
  return (
    <div className="w-full max-w-xl p-4 mx-auto bg-purple-600 border border-b-4 border-r-4 border-purple-900 rounded md:p-8">
      {children}
    </div>
  );
};

export default Layout;
