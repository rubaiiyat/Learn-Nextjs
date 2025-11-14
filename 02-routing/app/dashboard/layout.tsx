const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-row">
      <div className="w-64 ">
        <h1>Side bar</h1>
      </div>
      <div className="flex-grow md-12">{children} </div>
    </div>
  );
};

export default layout;
