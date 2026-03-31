export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function getProjectImageUrl(slug: string, width = 800, height = 600): string {
  return `https://picsum.photos/seed/${slug}/${width}/${height}`
}

export function getPlaceholderImage(seed: string, width = 800, height = 600): string {
  return `https://picsum.photos/seed/${seed}/${width}/${height}`
}

export function formatPhoneLink(phone: string): string {
  return `tel:+91${phone.replace(/\s/g, '')}`
}
