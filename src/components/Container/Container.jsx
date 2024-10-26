export const Container = ({ children, className }) => {
    return (<div className={`md:px-10 lg:px-[100px] w-full ${className ? " " + className : ""}`}>
      {children}
    </div>);
};
