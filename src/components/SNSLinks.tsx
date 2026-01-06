import twitterImg from '../assets/img/x.svg'
import githubImg from '../assets/img/github.svg'
import qitaImg from '../assets/img/qiita-icon.png'

type SNSLink = {
  href: string
  title: string
  img: string
  alt: string
}

const SNS_LINKS: SNSLink[] = [
  {
    href: 'https://x.com/tsutsumin_dev',
    title: 'Twitter(X)',
    img: twitterImg,
    alt: 'tekunotes',
  },
  {
    href: 'https://github.com/kuraryu405',
    title: 'GitHub',
    img: githubImg,
    alt: 'tgrgroup',
  },
  {
    href: 'https://qiita.com/kuraryu405',
    title: 'Qiita',
    img: qitaImg,
    alt: 'qita-icon',
  },
]

export default function SNSLinks() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 w-full max-w-3xl px-4 sm:px-6">
      {SNS_LINKS.map((a) => (
        <a key={a.href} href={a.href} target="_blank" rel="noreferrer" className="block group">
          <div className="glassmorphism p-4 sm:p-5 rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:bg-white/15">
            <div className="flex items-center sm:flex-col gap-4 sm:gap-3">
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-xl overflow-hidden bg-white/10 p-2 sm:p-3">
                <img
                  src={a.img}
                  alt={a.alt}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white/90">{a.title}</h3>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

