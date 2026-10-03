import CurrentYear from "./CurrentYear";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer">
        <p>
          © <CurrentYear /> Alexis Artaza · Solo Coding
        </p>
        <p>Victoria, Entre Ríos, Argentina</p>
      </div>
    </footer>
  );
}
