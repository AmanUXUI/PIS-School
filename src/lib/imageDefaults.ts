const CRITICAL_IMAGE_SELECTORS = ["#hero img", "#navbar img", 'img[fetchpriority="high"]'];

function isCriticalImage(img: HTMLImageElement) {
  return CRITICAL_IMAGE_SELECTORS.some((selector) => img.matches(selector));
}

function optimizeImageElement(img: HTMLImageElement) {
  if (img.loading || isCriticalImage(img)) return;
  img.loading = "lazy";
  img.decoding = "async";
}

export function setupImageDefaults() {
  const processImages = () => {
    document.querySelectorAll("img").forEach((img) => {
      optimizeImageElement(img as HTMLImageElement);
    });
  };

  processImages();
  const observer = new MutationObserver(processImages);
  observer.observe(document.body, { childList: true, subtree: true });
}
