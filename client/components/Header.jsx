export default function Header({ title, children }) {
  return (
    <header className="flex z-50 top-0 bg-blue-200 rounded-es-lg rounded-ee-lg py-3 px-3 sticky justify-between mb-2">
      <div className="font-bold text-lg">{title}</div>
      <div>{children}</div>
    </header>
  );
}