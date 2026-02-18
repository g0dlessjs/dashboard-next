import { SimpleWidget, WidgetGrid } from "@/components";

export default function MainPage() {
  return (
    <div className="flex flex-col p-8 max-w-7xl mx-auto">
      <div className="flex flex-col mb-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Resumen del Dashboard
        </h1>
      </div>

      <WidgetGrid />
    </div>
  );
}
