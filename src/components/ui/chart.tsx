"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "@/lib/utils";

// Workaround for https://github.com/recharts/recharts/issues/3615
const CartesianContext = React.createContext<any>(null);

const ChartContext = React.createContext<
  | {
      config: ChartConfig;
    }
  | null
>(null);

type ChartConfig = {
  [k: string]: {
    label?: string;
    icon?: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  } & (
    | {
        color?: string;
        theme?: never;
      }
    | {
        color?: never;
        theme?: string;
      }
  );
};

type ChartContainerProps = React.ComponentProps<"div"> & {
  config: ChartConfig;
  children: React.ReactNode;
};

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  ChartContainerProps
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId}`;
  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-foreground",
          className,
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          <CartesianContext.Provider value={children}>
            {children}
          </CartesianContext.Provider>
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "ChartContainer";

function ChartStyle({ id, config }: { id: string; config: ChartConfig }) {
  const colorConfig = Object.entries(config).filter(
    ([_, item]) => item.theme || item.color,
  );

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          ${colorConfig
            .map(([key, item]) => {
              const color = item.theme
                ? `hsl(var(--chart-${item.theme}))`
                : item.color;
              return `
                .recharts-wrapper [data-chart="${id}"] .recharts-cartesian-grid-vertical line[stroke="${key}"],
                .recharts-wrapper [data-chart="${id}"] .recharts-cartesian-grid-horizontal line[stroke="${key}"],
                .recharts-wrapper [data-chart="${id}"] .recharts-polar-grid-concentric circle[stroke="${key}"],
                .recharts-wrapper [data-chart="${id}"] .recharts-polar-grid radial-line[stroke="${key}"],
                .recharts-wrapper [data-chart="${id}"] .recharts-radial-bar-background-sector[fill="${key}"] {
                  stroke: var(--border);
                  fill: var(--background);
                }

                .recharts-wrapper [data-chart="${id}"] .recharts-bar-rectangle[fill="${key}"],
                .recharts-wrapper [data-chart="${id}"] .recharts-dot[fill="${key}"],
                .recharts-wrapper [data-chart="${id}"] .recharts-line-curve[stroke="${key}"],
                .recharts-wrapper [data-chart="${id}"] .recharts-area-curve[fill="${key}"],
                .recharts-wrapper [data-chart="${id}"] .recharts-area-curve[stroke="${key}"],
                .recharts-wrapper [data-chart="${id}"] .recharts-radar-curve[fill="${key}"],
                .recharts-wrapper [data-chart="${id}"] .recharts-radar-curve[stroke="${key}"],
                .recharts-wrapper [data-chart="${id}"] .recharts-radial-bar-sector[fill="${key}"],
                .recharts-wrapper [data-chart="${id}"] .recharts-sector[fill="${key}"],
                .recharts-wrapper [data-chart="${id}"] .recharts-reference-area-rect[fill="${key}"],
                .recharts-wrapper [data-chart="${id}"] .recharts-active-dot .recharts-dot[fill="${key}"],
                .recharts-wrapper [data-chart="${id}"] .recharts-active-dot .recharts-dot[stroke="${key}"],
                .recharts-wrapper [data-chart="${id}"] .recharts-custom-active-dot .recharts-dot[fill="${key}"],
                .recharts-wrapper [data-chart="${id}"] .recharts-custom-active-dot .recharts-dot[stroke="${key}"],
                .recharts-wrapper [data-chart="${id}"] .recharts-tooltip-cursor[stroke="${key}"],
                .recharts-wrapper [data-chart="${id}"] .recharts-tooltip-cursor[fill="${key}"],
                .recharts-wrapper [data-chart="${id}"] .recharts-brush-bg [fill="${key}"],
                .recharts-wrapper [data-chart="${id}"] .recharts-active-bar[fill="${key}"] {
                  fill: ${color};
                  stroke: ${color};
                }

                .recharts-wrapper [data-chart="${id}"] .recharts-active-label text {
                  fill: ${color};
                }
              `;
            })
            .join("\n")}
        `,
      }}
    />
  );
}

type ChartTooltipProps = React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
  React.ComponentPropsWithoutRef<"div"> & {
    hideLabel?: boolean;
    hideIndicator?: boolean;
    formatter?: (
      value: number,
      name: string,
      props: any,
    ) => React.ReactNode;
    color?: string;
    nameKey?: string;
    labelKey?: string;
    indicator?: "dot" | "line";
  };

const ChartTooltip = React.forwardRef<
  HTMLDivElement,
  ChartTooltipProps
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
      ...props
    },
    ref,
  ) => {
    const { config } = useChart();
    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null;
      }

      const item = payload?.[0];
      const name = (item as any)?.name; // Ép kiểu sang any để truy cập name

      if (labelKey) {
        return (item as any)?.payload?.[labelKey];
      }

      if (labelFormatter) {
        return labelFormatter(label, payload);
      }

      if (name && config[name as keyof typeof config]?.label) {
        return config[name as keyof typeof config]?.label;
      }

      return label;
    }, [hideLabel, payload, label, labelFormatter, config, labelKey]);

    if (!active || !payload?.length) {
      return null;
    }

    const nestLabel = (payload?.[0] as any)?.name && tooltipLabel ? true : false;

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[130px] items-center gap-1.5 rounded-lg border border-border bg-background px-2.5 py-2 text-xs shadow-md",
          className,
        )}
        {...props}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const typedItem: any = item; // Ép kiểu sang any để truy cập thuộc tính
            const key = (typedItem.dataKey || typedItem.name || '') as string;
            if (!key) {
              return null;
            }

            const itemConfig = config[key as keyof typeof config];
            const itemColor = itemConfig?.color || typedItem.color || typedItem.fill || typedItem.stroke || typedItem.payload?.fill || typedItem.payload?.stroke;

            if (typedItem.hide) {
              return null;
            }

            return (
              <div
                key={key}
                className="flex items-center justify-between gap-4"
              >
                {
                  !hideIndicator && (
                    <div
                      className={cn(
                        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                        {
                          "h-2.5 w-2.5": indicator === "dot",
                          "h-4 w-1": indicator === "line",
                        },
                      )}
                      style={
                        {
                          "--color-bg": itemColor,
                          "--color-border": itemColor,
                        } as React.CSSProperties
                      }
                    />
                  )
                }
                <div
                  className={cn(
                    "flex flex-1 justify-between",
                    hideIndicator && "ml-4",
                  )}
                >
                  <div className="grid gap-1.5">
                    {nestLabel ? tooltipLabel : null}
                    <span className="text-muted-foreground">
                      {itemConfig?.label || typedItem.name}
                    </span>
                  </div>
                  {typedItem.value && (
                    <span className="font-mono font-medium tabular-nums text-foreground">
                      {formatter
                        ? formatter(typedItem.value as number, typedItem.name as string, typedItem)
                        : typedItem.value.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);
ChartTooltip.displayName = "ChartTooltip";

type ChartLegendProps = React.ComponentProps<typeof RechartsPrimitive.Legend> &
  React.ComponentPropsWithoutRef<"div"> & {
    hideIcon?: boolean;
    nameKey?: string;
  };

const ChartLegend = React.forwardRef<
  HTMLDivElement,
  ChartLegendProps
>(
  (
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey, ...props },
    ref,
  ) => {
    const { config } = useChart();

    if (!payload?.length) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-wrap items-center justify-center gap-4",
          verticalAlign === "top" ? "pb-8" : "pt-8",
          className,
        )}
        {...props}
      >
        {payload.map((item) => {
          const typedItem: any = item; // Ép kiểu sang any để truy cập thuộc tính
          const key = (typedItem.dataKey || typedItem.name || '') as string;
          if (!key) {
            return null;
          }

          const itemConfig = config[key as keyof typeof config];
          const color = itemConfig?.color || typedItem.color || typedItem.fill || typedItem.stroke || typedItem.payload?.fill || typedItem.payload?.stroke;

          return (
            <div
              key={key}
              className="flex items-center gap-1.5"
            >
              {!hideIcon ? (
                itemConfig?.icon ? (
                  <itemConfig.icon
                    className="h-3 w-3"
                    style={{
                      fill: color,
                      stroke: color,
                    }}
                  />
                ) : (
                  <div
                    className="h-2 w-2 shrink-0 rounded-[2px]"
                    style={{
                      fill: color,
                      stroke: color,
                      backgroundColor: color,
                    }}
                  />
                )
              ) : null}
              {itemConfig?.label || typedItem.name}
            </div>
          );
        })}
      </div>
    );
  },
);
ChartLegend.displayName = "ChartLegend";

// Helper to use ChartContext
function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer>");
  }
  return context;
}

export { ChartContainer, ChartTooltip, ChartLegend, ChartStyle };