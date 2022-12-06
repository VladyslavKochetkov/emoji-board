const Checker = ({ theme, icon }) => {
  return (
    <div className={"checker " + theme}>
      <i className={"fa fa-" + icon}></i>
    </div>
  );
};

export default Checker;
