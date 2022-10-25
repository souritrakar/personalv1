export default function BannerHeader({style, title}){
    return(
        <mark className={`text-white lg:text-5xl font-bold text-4xl z-10 py-2 rounded-lg ${style}`}>{title}</mark>
    )
}