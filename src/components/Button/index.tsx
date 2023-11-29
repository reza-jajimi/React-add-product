type buttonValueType = {
  name: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
};

const Button = ({ name, type, onClick }: buttonValueType) => {
  return (
    <>
      <button
        style={{
          background: "linear-gradient(25deg, #C0A312, #FAD726)",
          boxShadow: "-6px 7px 20px 2px #6C541F57",
        }}
        className="py-2 px-8 rounded-md text-amber-950 active:scale-95"
        type={type}
        onClick={onClick}
      >
        {name}
      </button>
    </>
  );
};

export default Button;
