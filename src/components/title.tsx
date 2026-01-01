export default function Title({ title }: { title: string }) {
    return (
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-3 font-bold mb-2 md:mb-2 lg:mb-4 text-left mx-4 md:mx-6 lg:mx-8">{title}</h2>
    )
}