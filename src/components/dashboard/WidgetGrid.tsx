"use client";

import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";

export const WidgetGrid = () => {
  const inCart = useAppSelector((state) => state.counter.count);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      <SimpleWidget
        title="151"
        subTitle="Pokémons disponibles"
        label="Catálogo"
        href="/dashboard/pokemons"
      />
      <SimpleWidget
        title={inCart.toString()}
        subTitle="Produtos agregados"
        label="Contador"
        href="/dashboard/counter"
      />
    </div>
  );
};
