type MetricName = "LCP" | "CLS" | "INP";

const METRICS = new Set<MetricName>(["LCP", "CLS", "INP"]);

function report(metric: MetricName, value: number) {
  if (!METRICS.has(metric)) return;
  console.info(`[WebVitals] ${metric}:`, value);
}

export function initPerformanceVitals() {
  if (typeof window === "undefined" || !("PerformanceObserver" in window)) return;

  try {
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEntry | undefined;
      if (!lastEntry) return;
      report("LCP", Math.round(lastEntry.startTime));
    }).observe({ type: "largest-contentful-paint", buffered: true });

    let cls = 0;
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries() as Array<{
        hadRecentInput?: boolean;
        value?: number;
      }>) {
        if (entry.hadRecentInput) continue;
        cls += entry.value || 0;
      }
      report("CLS", Number(cls.toFixed(4)));
    }).observe({ type: "layout-shift", buffered: true });

    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (!lastEntry) return;
      report("INP", Math.round(lastEntry.duration));
    }).observe({ type: "event", buffered: true, durationThreshold: 40 });
  } catch (error) {
    console.warn("Web Vitals observer setup failed:", error);
  }
}
