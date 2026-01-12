type MutualLink = {
  href: string
  title: string
  description: string
  img?: string
}

const MUTUAL_LINKS: MutualLink[] = [
  // 相互リンクを追加する際はここに追記
  // {
  //   href: 'https://example.com',
  //   title: 'サイト名',
  //   description: 'サイトの説明',
  //   img: 'アイコン画像のパス（省略可）',
  // },
]

export default function MutualLinks() {
  if (!MUTUAL_LINKS.length) {
    return (
      <div className="text-white/60 text-center px-4">
        <p>Coming soon...</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 w-full max-w-4xl px-4 sm:px-6">
      {MUTUAL_LINKS.map((link) => (
        <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="block group">
          <div className="glassmorphism p-4 sm:p-5 rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:bg-white/15">
            <div className="flex items-center gap-4">
              {link.img && (
                <div className="w-12 h-12 flex-shrink-0 rounded-xl overflow-hidden bg-white/10 p-2">
                  <img
                    src={link.img}
                    alt={link.title}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-bold text-white/90 truncate">{link.title}</h3>
                <p className="text-sm text-white/60 line-clamp-2">{link.description}</p>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

