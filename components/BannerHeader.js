export default function BannerHeader({style, title}){
    return(
        <mark className={`text-white lg:text-6xl text-4xl z-40 rounded-lg ${style}`}>{title}</mark>
    )
}