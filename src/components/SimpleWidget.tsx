import Link from "next/link";
import { LucideIcon } from "lucide-react";
import clsx from "clsx";

interface Props {
  title: string;
  subTitle?: string;
  label?: string;
  icon?: LucideIcon;
  iconSize?: number;
  href?: string;
  className?: string;
}

export const SimpleWidget = ({
  title,
  subTitle,
  label,
  icon: Icon,
  iconSize = 40,
  href,
  className,
}: Props) => {
  return (
    <div
      className={clsx(
        "bg-slate-50 dark:bg-slate-900",
        "border border-slate-200 dark:border-slate-800",
        "shadow-sm rounded-2xl",
        "m-2 sm:min-w-[280px] min-w-full",
        "flex flex-col group",
        "transition-all duration-300",
        "hover:shadow-md hover:-translate-y-0.5",
        className,
      )}
    >
      <div className="p-6 flex flex-col flex-1">
        {label && (
          <span className="text-[11px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            {label}
          </span>
        )}

        <div className="flex items-center gap-4">
          {Icon && (
            <div className="flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              <Icon size={iconSize} strokeWidth={1.5} />
            </div>
          )}

          <div className="flex flex-col">
            <h4 className="text-3xl font-bold text-slate-900 dark:text-white leading-tight">
              {title}
            </h4>

            {subTitle && (
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {subTitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {href && (
        <div className="px-6 pb-4 border-t border-slate-100 dark:border-slate-800/50 pt-3 mt-auto flex justify-start">
          <Link
            href={href}
            aria-label={`Ver más sobre ${title}`}
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            Ver más
          </Link>
        </div>
      )}
    </div>
  );
};
