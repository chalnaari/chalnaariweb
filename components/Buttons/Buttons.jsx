import "./style.scss";

export function CommonButton({ text }) {
  return <button className="commonButton">{text}</button>;
}

export function SmallButton({ text }) {
  return <button className="smallButton">{text}</button>;
}
