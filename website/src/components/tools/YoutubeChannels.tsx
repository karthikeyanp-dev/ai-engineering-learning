import { useState } from 'react';
import { youtubeChannels, youtubeCategories, keyPlaylists, podcastRecommendations } from '../../lib/resources-data';

export function YoutubeChannels() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredChannels = youtubeChannels.filter(
    (ch) => selectedCategory === 'All' || ch.category === selectedCategory
  );

  return (
    <div className="space-y-10">
      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        {youtubeCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
              selectedCategory === cat
                ? 'bg-red-500/20 text-red-400 border-red-500/40'
                : 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-muted)] border-white/10 hover:border-white/20 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Channels Grid */}
      <section>
        <h2 className="text-xl font-bold mb-4">Channels ({filteredChannels.length})</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredChannels.map((channel) => (
            <a
              key={channel.name}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl p-5 bg-[var(--color-bg-secondary)] border border-white/10 hover:border-red-500/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-bold text-sm">
                  {channel.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{channel.name}</h3>
                  <p className="text-xs text-[var(--color-text-muted)]">{channel.focus}</p>
                </div>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border bg-red-500/10 text-red-400 border-red-500/20">
                  {channel.category}
                </span>
              </div>
              <div className="space-y-1">
                {channel.keyContent.map((content) => (
                  <p key={content} className="text-xs text-[var(--color-text-muted)] flex items-center gap-1.5">
                    <span className="text-[var(--color-accent-start)]">&#8226;</span> {content}
                  </p>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Key Playlists */}
      <section>
        <h2 className="text-xl font-bold mb-4">Key Playlists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {keyPlaylists.map((pl) => (
            <a
              key={pl.title}
              href={pl.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl p-4 bg-[var(--color-bg-secondary)] border border-white/10 hover:border-[var(--color-accent-start)]/40 transition-all duration-200"
            >
              <h3 className="font-medium text-white mb-1">{pl.title}</h3>
              <p className="text-sm text-[var(--color-text-muted)]">by {pl.channel}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Podcasts */}
      <section>
        <h2 className="text-xl font-bold mb-4">Podcast Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {podcastRecommendations.map((pod) => (
            <a
              key={pod.title}
              href={pod.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl p-4 bg-[var(--color-bg-secondary)] border border-white/10 hover:border-purple-500/40 transition-all duration-200"
            >
              <h3 className="font-medium text-white mb-1">{pod.title}</h3>
              <p className="text-sm text-[var(--color-text-muted)]">{pod.description}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
