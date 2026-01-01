export default function Subtitle({ subtitle }: { subtitle: string }) {
    return (
        <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mt-6 mb-4 text-left mx-4 md:mx-6 lg:mx-8 pl-2 md:pl-3">{subtitle}</h3>
    )
}