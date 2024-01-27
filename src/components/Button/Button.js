const Button = function ({ children, classNames, onClick, disabled }) {
   return (
      <button
         className={`${classNames ? classNames : ""}`}
         onClick={() => onClick()}
         disabled={disabled}
      >
         {children}
      </button>
   );
};

export default Button;
