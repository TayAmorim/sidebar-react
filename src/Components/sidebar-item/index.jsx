import "./style.css";

export function SidebarItem(props) {
  console.log(props.showTransition);
  return (
    <div className="open">
      <img src={props.img} alt="" />
      <p
        className={`${props.showTransition ? "text-transition" : ""} ${
          props.showText ? "" : "text-hide"
        } `}
      >
        {props.name}
      </p>
    </div>
  );
}
