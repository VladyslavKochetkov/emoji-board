import Checker from "./Checker";

const Row = ({ row, maxWidth, rowOffset }) => {
  const children = [];
  for (let i = 0; i < maxWidth; i++) {
    const checker = row[i];
    children.push(
      <Checker
        theme={(i + rowOffset) % 2 ? "dark" : "light"}
        key={i}
        icon={checker ? checker.iconName : undefined}
      />
    );
  }

  return <div className="row">{children}</div>;
};

export default Row;
