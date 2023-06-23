interface BannerImageProps {
    url: string
}

export default function BannerImage({ url }: BannerImageProps) {
    return (
        <section
            style={{ backgroundImage: `url(${url})`, height: '500px' }}
            className={`fade-intro w-full h-[500px] bg-center bg-no-repeat bg-cover
        absolute top-0 -z-10 brightness-50 shadow-[inset_120px_-200px_300px_-25px_#062635]`}
        >
        </section>
    )
}