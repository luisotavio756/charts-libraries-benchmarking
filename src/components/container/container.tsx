export default function Container({ children, title }: { children: React.ReactNode, title: string }) {
  return (
    <div className="w-full h-full p-2 bg-white rounded-lg shadow-md flex flex-col">
      <h2 className="text-md text-center font-semibold mb-2 text-gray-800">{title}</h2>
      <div className="flex-1 min-h-0 w-full">
        {children}
      </div>
    </div>
  );
}