/**
 * Helper to transform Cloudinary URLs to include f_auto, dpr_auto, q_auto:best, and optional width constraints
 * to prevent pixelation on high-DPI / Retina displays while optimizing overall web performance.
 */
export function optimizeCloudinaryUrl(
  url: string,
  options: { width?: number; quality?: string } = {}
): string {
  if (!url || typeof url !== "string") return url;
  if (!url.includes("res.cloudinary.com")) return url;

  const quality = options.quality || "q_auto:best";
  const widthParam = options.width ? `,w_${options.width}` : "";
  const transformString = `f_auto,dpr_auto,${quality}${widthParam}`;

  // Image Upload Optimization
  if (url.includes("/image/upload/")) {
    // Check if URL already has transformation segment between /upload/ and /v...
    const uploadRegex = /\/image\/upload\/(?:(?:f_auto|dpr_\w+|q_auto\w*|w_\d+|c_\w+|g_\w+)[^/]*\/)?/;
    if (uploadRegex.test(url)) {
      return url.replace(
        uploadRegex,
        `/image/upload/${transformString}/`
      );
    }
    return url.replace(
      "/image/upload/",
      `/image/upload/${transformString}/`
    );
  }

  // Video Upload Optimization
  if (url.includes("/video/upload/")) {
    const videoWidth = options.width || 1280;
    const videoTransform = `f_auto,${quality},w_${videoWidth}`;
    const videoRegex = /\/video\/upload\/(?:(?:f_auto|q_auto\w*|w_\d+|c_\w+)[^/]*\/)?/;
    if (videoRegex.test(url)) {
      return url.replace(
        videoRegex,
        `/video/upload/${videoTransform}/`
      );
    }
    return url.replace(
      "/video/upload/",
      `/video/upload/${videoTransform}/`
    );
  }

  return url;
}


