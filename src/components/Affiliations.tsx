import geekenIniadImg from '../assets/img/tekunotes.webp'
import tekunotesImg from '../assets/img/tekunotes.webp'
import tgrImg from '../assets/img/tgr-color.min.svg'

type Affiliation = {
  href: string
  title: string
  img: string
  alt: string
  description: string
}

const AFFILIATIONS: Affiliation[] = [
  {
    href: 'https://tekunotes.com',
    title: 'TEKUNOTES',
    img: tekunotesImg,
    alt: 'tekunotes',
    description: 'TEKUNOTESでガジェット系の記事を書いたりしています。',
  },
  {
    href: 'https://tgrgroup.jp',
    title: 'TGR',
    img: tgrImg,
    alt: 'tgrgroup',
    description: 'TGRは学生の開発コミュニティです。',
  },
  {
    href: 'https://github.com/geeken-iniad',
    title: 'GeeKen',
    img: geekenIniadImg,
    alt: 'geeken-iniad',
    description: 'GeeKenは情報技術メディア研究会の略称です。',
  },  
]

export default function Affiliations() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 w-full max-w-5xl px-4 sm:px-6">
      {AFFILIATIONS.map((a) => (
        <a key={a.href} href={a.href} target="_blank" rel="noreferrer" className="block group">
          <div className="glassmorphism p-4 sm:p-5 rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:bg-white/15">
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              <div className="w-full aspect-video overflow-hidden rounded-xl">
                <img
                  src={a.img}
                  alt={a.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white/90">{a.title}</h3>
              <p className="text-sm sm:text-base leading-relaxed text-white/85 whitespace-pre-line text-center">{a.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}


