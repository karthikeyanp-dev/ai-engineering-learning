interface VideoEmbedProps {
  url: string;
  title?: string;
}

function extractVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\s?]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

export function VideoEmbed({ url, title }: VideoEmbedProps) {
  const videoId = extractVideoId(url);
  const embedUrl = videoId
    ? `https://www.youtube-nocookie.com/embed/${videoId}`
    : url;

  return (
    <div className="relative w-full rounded-xl overflow-hidden border border-white/10 bg-[var(--color-bg-secondary)]">
      {title && (
        <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-md bg-black/70 backdrop-blur-sm text-xs font-medium text-white">
          {title}
        </div>
      )}
      <div className="relative w-full pt-[56.25%]">
        <iframe
          src={embedUrl}
          title={title || 'Video'}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  );
}
