import euphoniumImg from '../assets/img/euphonium.webp'
import karaokeImg from '../assets/img/karaoke.webp'
import pcImg from '../assets/img/pc.webp'
import uedaImg from '../assets/img/ueda.webp'

type HobbyItem = {
  img: string
  alt: string
  text: string
}

const HOBBIES: HobbyItem[] = [
  {
    img: uedaImg,
    alt: 'camera',
    text: '一眼レフを使って写真を撮るのが好き。\nもっといいカメラを使いたい。\n1DXとかいいなぁって思ってる。',
  },
  {
    img: pcImg,
    alt: 'pc',
    text:
      'パソコンで遊ぶのも好き。\n自作PC(windows/今後はArchLinuxの予定)\nMacBook Pro M4(macOS)\nVivoBook (Arch Linux/Omarchy)',
  },
  {
    img: euphoniumImg,
    alt: 'music',
    text:
      '大学の吹奏楽サークルでユーフォニアムを吹いています。\nYEP-642S/Bach 5G\n最近は大河ドラマのサントラをずっと聴いてる',
  },
  {
    img: karaokeImg,
    alt: 'karaoke',
    text: '歌を歌うことも好き。\n米津の曲を歌うのが好き。\nよく聴くのはオルタナティブだけど。',
  },
]

export default function Hobby() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 w-full max-w-7xl px-4 sm:px-6">
      {HOBBIES.map((item) => (
        <div key={item.alt} className="glassmorphism p-4 sm:p-5 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:bg-white/15 group">
          <div className="flex flex-col gap-4">
            <div className="w-full aspect-[4/3] overflow-hidden rounded-xl">
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-white/85 whitespace-pre-line text-center">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}


