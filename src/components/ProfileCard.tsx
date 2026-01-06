import iconGithub from '../assets/img/icon_github.webp'

export default function ProfileCard() {
  return (
    <div className="glassmorphism w-full max-w-3xl mx-4 sm:mx-6 p-5 sm:p-6 lg:p-8 rounded-2xl">
      <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 lg:gap-8">
        <img
          src={iconGithub}
          alt="github icon"
          className="rounded-full w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-cover shadow-lg ring-4 ring-white/30 flex-shrink-0"
          loading="lazy"
          decoding="async"
        />
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left flex-1 gap-2 sm:gap-3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            つつみん
          </h2>
          <p className="text-sm sm:text-base text-white/60">
            そこらへんの情報系大学生
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-white/85">
            東京の情報系の学部に所属している大学生です。
            <br />
            主にフロントエンドの興味があります。
            <br />
            最近はGNU/Linuxの勉強をしています。
            <br />
            まだまだ初学者なので精進したいところ。
          </p>
        </div>
      </div>
    </div>
  )
}


