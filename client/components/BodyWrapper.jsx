export default function BodyWrapper({ children, skipBottomHeight, classes }) {

  return (
    <section
      className={`px-3 h-[calc(100vh-${skipBottomHeight})] overflow-y-auto ${classes}`}
    >
      {children}
    </section>
  );
}
