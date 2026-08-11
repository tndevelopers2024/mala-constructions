/**
 * Helper to transform Cloudinary URLs to include f_auto, q_auto, and optional width constraints
 * to prevent loading massive original images/videos and improve overall web performance.
 */
export function optimizeCloudinaryUrl(
  url: string,
  options: { width?: number; quality?: string } = {}
): string {
  if (!url || typeof url !== "string") return url;
  if (!url.includes("res.cloudinary.com")) return url;

  // Already transformed
  if (url.includes("/f_auto,q_auto") || url.includes("/f_auto")) return url;

  const quality = options.quality || "q_auto";
  const widthParam = options.width ? `,w_${options.width}` : "";

  if (url.includes("/image/upload/")) {
    return url.replace(
      "/image/upload/",
      `/image/upload/f_auto,${quality}${widthParam}/`
    );
  }

  if (url.includes("/video/upload/")) {
    const videoWidth = options.width || 1280;
    return url.replace(
      "/video/upload/",
      `/video/upload/f_auto,${quality},w_${videoWidth}/`
    );
  }

  return url;
}
