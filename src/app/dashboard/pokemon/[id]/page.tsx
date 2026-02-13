import { Pokemon } from "@/pokemons";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    const staticPokemons = Array.from({ length: 151 }).map((v, i) => `${i + 1}`);
    return staticPokemons.map((id) => ({
        id: id,
    }));
}

export async function generateMetadata({ params }: Props) {
    const { id } = await params;
    const pokemon = await getPokemon(id);
    return {
        title: `#${id} - ${pokemon.name}`,
        description: `Pokemon ${pokemon.name}`,
    };
}

const getPokemon = async (id: string): Promise<Pokemon> => {
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
            cache: "force-cache", // Opcional: para que Next.js lo cachee
        });
        const data: Pokemon = await resp.json();
        return data;
    } catch (error) {
        notFound();
    }
};

export default async function PokemonPage(props: Props) {
    const { id } = await props.params;
    const pokemon = await getPokemon(id);

    const mainType = pokemon.types[0].type.name;
    const secondType = pokemon.types[1]?.type.name;
    const bgGradient = secondType
        ? `linear-gradient(135deg, ${getTypeColor(mainType)}30 0%, ${getTypeColor(secondType)}30 100%)`
        : `${getTypeColor(mainType)}20`;

    return (
        <div className="flex mt-8 flex-col items-center text-slate-900 px-4 mb-20 animate-in fade-in duration-700">
            <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl">
                {/* Lado Izquierdo: Card Principal */}
                <div className="flex flex-col w-full lg:w-2/5 gap-6">
                    <div
                        className="rounded-[3rem] p-1.5 shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                        style={{
                            background: secondType
                                ? `linear-gradient(135deg, ${getTypeColor(mainType)}, ${getTypeColor(secondType)})`
                                : getTypeColor(mainType),
                        }}
                    >
                        <div className="bg-white rounded-[2.9rem] p-8 flex flex-col items-center relative overflow-hidden group h-full">
                            {/* Fondo con textura sutil */}
                            <div
                                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                                style={{
                                    backgroundImage: `radial-gradient(circle at 2px 2px, ${getTypeColor(mainType)} 1px, transparent 0)`,
                                    backgroundSize: "24px 24px",
                                }}
                            ></div>

                            {/* Badge de Tipos con Colores Reales */}
                            <div className="absolute top-8 left-8 flex flex-col gap-2 z-20">
                                {pokemon.types.map((type) => (
                                    <span
                                        key={type.type.name}
                                        className="px-5 py-2 rounded-2xl text-[11px] font-black uppercase tracking-[0.15em] text-white shadow-xl flex items-center justify-center min-w-[100px]"
                                        style={{ backgroundColor: getTypeColor(type.type.name) }}
                                    >
                                        {type.type.name}
                                    </span>
                                ))}
                            </div>

                            {/* Número ID - MUCHO MÁS VISIBLE */}
                            <div
                                className="absolute -top-4 -right-2 text-9xl font-black italic opacity-10 leading-none select-none tracking-tighter pointer-events-none pr-4"
                                style={{ color: getTypeColor(mainType) }}
                            >
                                #{pokemon.id.toString().padStart(3, "0")}
                            </div>

                            {/* Área de Imagen */}
                            <div className="relative w-80 h-80 my-10 flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-105">
                                <div
                                    className="absolute inset-0 rounded-full blur-[60px] opacity-20 group-hover:opacity-30 transition-all duration-700"
                                    style={{ backgroundColor: getTypeColor(mainType) }}
                                ></div>

                                <Image
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
                                    width={340}
                                    height={340}
                                    alt={pokemon.name}
                                    className="z-10 transition-all duration-700 ease-in-out group-hover:opacity-0 group-hover:scale-90"
                                    priority
                                />
                                <Image
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${pokemon.id}.png`}
                                    width={340}
                                    height={340}
                                    alt={`${pokemon.name} shiny`}
                                    className="absolute z-0 transition-all duration-700 ease-in-out opacity-0 scale-110 group-hover:opacity-100 group-hover:scale-100"
                                />
                            </div>

                            <h1 className="text-5xl font-black capitalize text-slate-800 tracking-tight z-10 drop-shadow-sm">
                                {pokemon.name}
                            </h1>

                            <div className="mt-10 flex gap-12 z-10 w-full border-t border-slate-50 pt-8 justify-center">
                                <div className="text-center">
                                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">
                                        Peso
                                    </p>
                                    <p className="text-2xl font-black text-slate-700">
                                        {pokemon.weight / 10}
                                        <span className="text-xs ml-1 text-slate-400">kg</span>
                                    </p>
                                </div>
                                <div className="w-px h-12 bg-slate-100"></div>
                                <div className="text-center">
                                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">
                                        Altura
                                    </p>
                                    <p className="text-2xl font-black text-slate-700">
                                        {pokemon.height / 10}
                                        <span className="text-xs ml-1 text-slate-400">m</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Variantes Side-by-Side */}
                    <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-xl shadow-slate-200/50">
                        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] mb-6 text-center">
                            Formas de Combate
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                {
                                    label: "Frente",
                                    norm: pokemon.sprites.front_default,
                                    shin: pokemon.sprites.front_shiny,
                                },
                                {
                                    label: "Espalda",
                                    norm: pokemon.sprites.back_default,
                                    shin: pokemon.sprites.back_shiny,
                                },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="group/variant relative bg-slate-50 rounded-[2rem] p-6 flex flex-col items-center transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 border border-transparent hover:border-slate-100 overflow-hidden cursor-help"
                                >
                                    <div className="relative w-28 h-28 flex items-center justify-center">
                                        <Image
                                            src={item.norm}
                                            width={110}
                                            height={110}
                                            alt={item.label}
                                            className="transition-all duration-500 group-hover/variant:opacity-0 group-hover/variant:scale-75"
                                        />
                                        <Image
                                            src={item.shin}
                                            width={110}
                                            height={110}
                                            alt={`${item.label} shiny`}
                                            className="absolute opacity-0 transition-all duration-500 group-hover/variant:opacity-100 group-hover/variant:scale-110"
                                        />
                                    </div>
                                    <span className="mt-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Lado Derecho: Stats y Habilidades */}
                <div className="flex flex-col w-full lg:w-3/5 gap-8">
                    {/* Sección de Estadísticas PROFESIONAL */}
                    <div className="bg-white rounded-[3rem] p-12 shadow-2xl shadow-slate-200/60 border border-slate-100 relative overflow-hidden">
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-3xl font-black text-slate-800 flex items-center gap-4">
                                <span
                                    className="w-3 h-10 rounded-full"
                                    style={{ backgroundColor: getTypeColor(mainType) }}
                                ></span>
                                Estadísticas
                            </h2>
                            <span
                                className="text-[11px] font-black text-white px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg"
                                style={{ backgroundColor: getTypeColor(mainType) }}
                            >
                                Base 2024
                            </span>
                        </div>

                        <div className="space-y-10">
                            {pokemon.stats.map((stat) => (
                                <div key={stat.stat.name} className="relative">
                                    <div className="flex justify-between items-end px-1 mb-3">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="w-1.5 h-1.5 rounded-full"
                                                style={{
                                                    backgroundColor: getStatColor(stat.stat.name),
                                                }}
                                            ></div>
                                            <span className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] w-32">
                                                {stat.stat.name.replace("special-", "SP. ")}
                                            </span>
                                        </div>
                                        <div className="flex items-baseline gap-1.5 bg-slate-50 px-3 py-1 rounded-lg border border-slate-100">
                                            <span className="text-xl font-black text-slate-800 tabular-nums">
                                                {stat.base_stat}
                                            </span>
                                            <span className="text-[10px] font-bold text-slate-300">
                                                / 255
                                            </span>
                                        </div>
                                    </div>

                                    {/* Barra de Progreso Mejorada */}
                                    <div className="h-5 w-full bg-slate-50 rounded-2xl border border-slate-100 relative p-1 overflow-hidden">
                                        {/* Divisiones decorativas en la barra */}
                                        <div className="absolute inset-0 flex justify-between px-4 pointer-events-none opacity-20">
                                            {[...Array(4)].map((_, i) => (
                                                <div key={i} className="w-px h-full bg-slate-200"></div>
                                            ))}
                                        </div>

                                        <div
                                            className="h-full rounded-xl transition-all duration-1000 ease-out relative group/bar"
                                            style={{
                                                width: `${(stat.base_stat / 255) * 100}%`,
                                                backgroundColor: getStatColor(stat.stat.name),
                                                boxShadow: `0 4px 12px ${getStatColor(stat.stat.name)}40`,
                                            }}
                                        >
                                            {/* Efecto de brillo en la barra */}
                                            <div className="absolute top-0 left-0 w-full h-1/2 bg-white/20 rounded-t-xl"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Habilidades Rediseñadas */}
                    <div className="bg-slate-900 rounded-[2.5rem] p-12 shadow-2xl text-white relative overflow-hidden">
                        {/* Glow decorativo de fondo */}
                        <div
                            className="absolute -bottom-20 -right-20 w-80 h-80 blur-[120px] opacity-20"
                            style={{ backgroundColor: getTypeColor(mainType) }}
                        ></div>

                        <h2 className="text-2xl font-black mb-10 flex items-center gap-4">
                            Habilidades Especiales
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {pokemon.abilities.map((ability) => (
                                <div
                                    key={ability.ability.name}
                                    className={`relative p-8 rounded-[2rem] border transition-all duration-500 hover:-translate-y-1 ${ability.is_hidden
                                        ? "border-white/10 bg-white/5 hover:bg-white/10"
                                        : "border-slate-700 bg-slate-800/50 hover:bg-slate-800"
                                        }`}
                                >
                                    <div className="flex justify-between items-center mb-3">
                                        <span
                                            className={`text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full ${ability.is_hidden ? "bg-amber-500/20 text-amber-400" : "bg-slate-700 text-slate-400"}`}
                                        >
                                            {ability.is_hidden ? "Oculta" : "Natural"}
                                        </span>
                                        {ability.is_hidden && <span className="text-xl">✨</span>}
                                    </div>
                                    <p className="text-2xl font-black capitalize tracking-tight">
                                        {ability.ability.name.replace("-", " ")}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function getTypeColor(type: string): string {
    const colors: Record<string, string> = {
        fire: "#FF421C",
        water: "#2F9AFF",
        grass: "#63BB5B",
        electric: "#FFD32E",
        ice: "#51C4E7",
        fighting: "#C56E5C",
        poison: "#924593",
        ground: "#D3A328",
        flying: "#A193FF",
        psychic: "#FF4692",
        bug: "#ABBC1C",
        rock: "#A58E49",
        ghost: "#6060B2",
        dragon: "#6E5CE6",
        dark: "#595761",
        steel: "#8A8A9D",
        fairy: "#fb89fb",
        normal: "#919191",
    };
    return colors[type] || "#777777";
}

// Helper colors for stats
function getStatColor(stat: string): string {
    const colors: Record<string, string> = {
        hp: "#ff5959",
        attack: "#f5ac78",
        defense: "#fae078",
        "special-attack": "#9db7f5",
        "special-defense": "#a7db8d",
        speed: "#fa92b2",
    };
    return colors[stat] || "#CBD5E1";
}
