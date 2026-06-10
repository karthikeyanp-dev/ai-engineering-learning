import { useState, useMemo } from 'react';
import { githubRepos, githubCategories, type GithubCategory } from '../../lib/resources-data';

export function GithubRepos() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<GithubCategory>('All');

  const essentialRepos = githubRepos.filter((r) => r.isEssential);

  const filteredRepos = useMemo(() => {
    return githubRepos.filter((repo) => {
      const matchesSearch =
        search === '' ||
        repo.name.toLowerCase().includes(search.toLowerCase()) ||
        repo.description.toLowerCase().includes(search.toLowerCase()) ||
        repo.fullName.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || repo.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <div className="space-y-8">
      {/* Top 10 Essential Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="text-yellow-400">&#9733;</span> Top 10 Essential Repositories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {essentialRepos.map((repo) => (
            <a
              key={repo.fullName}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl p-5 border border-[var(--color-accent-start)]/30 bg-gradient-to-br from-[var(--color-accent-start)]/5 to-[var(--color-accent-end)]/5 hover:border-[var(--color-accent-start)]/60 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-semibold text-white">{repo.name}</h3>
                <span className="flex items-center gap-1 text-yellow-400 text-sm whitespace-nowrap">
                  &#9733; {repo.stars}
                </span>
              </div>
              <p className="text-sm text-[var(--color-text-muted)] mb-3">{repo.description}</p>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border bg-[var(--color-accent-start)]/10 text-[var(--color-accent-start)] border-[var(--color-accent-start)]/20">
                  {repo.category}
                </span>
                <span className="text-xs text-[var(--color-text-muted)]">{repo.fullName}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Search and Filter */}
      <section>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search repositories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[var(--color-bg-tertiary)] border border-white/10 text-white placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-start)]/50 transition-colors"
            />
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {githubCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[var(--color-accent-start)]/20 text-[var(--color-accent-start)] border-[var(--color-accent-start)]/40'
                  : 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-muted)] border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm text-[var(--color-text-muted)] mb-4">
          Showing {filteredRepos.length} repositories
        </p>

        {/* Repo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredRepos.map((repo) => (
            <a
              key={repo.fullName}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl p-5 bg-[var(--color-bg-secondary)] border border-white/10 hover:border-[var(--color-accent-start)]/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-semibold text-white">{repo.name}</h3>
                <span className="flex items-center gap-1 text-yellow-400 text-sm whitespace-nowrap">
                  &#9733; {repo.stars}
                </span>
              </div>
              <p className="text-sm text-[var(--color-text-muted)] mb-3">{repo.description}</p>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border bg-[var(--color-info)]/10 text-[var(--color-info)] border-[var(--color-info)]/20">
                  {repo.category}
                </span>
                <span className="text-xs text-[var(--color-text-muted)]">{repo.fullName}</span>
              </div>
            </a>
          ))}
        </div>

        {filteredRepos.length === 0 && (
          <div className="text-center py-12 text-[var(--color-text-muted)]">
            <p className="text-lg">No repositories found</p>
            <p className="text-sm mt-2">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </section>
    </div>
  );
}
