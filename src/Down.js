export const Down = ({ handleClick }) => {
  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];

  return (
    <div className="calculator">
      {buttons.map((btn) => (
        <button key={btn} className="btn" onClick={() => handleClick(btn)}>
          {btn}
        </button>
      ))}
      <button className="btn double" onClick={() => handleClick("C")}>
        C
      </button>
    </div>
  );
};
