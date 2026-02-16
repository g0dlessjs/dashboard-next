import { SimpleWidget } from "@/components";
import {
  Calculator,
  LayoutGrid,
  LucideIcon,
  Pocket,
  ShoppingBag,
} from "lucide-react";

export default function MainPage() {
  return (
    <div className="flex flex-col p-8 max-w-7xl mx-auto">
      <div className="flex flex-col mb-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Resumen del Dashboard
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        <SimpleWidget
          title="151"
          subTitle="Pokémons disponibles"
          label="Catálogo"
          href="/dashboard/pokemons"
        />
      </div>
    </div>
  );
}
