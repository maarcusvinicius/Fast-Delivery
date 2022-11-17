interface LunchBannerProps {
  bannerUrl: string;
  title: string;
}

export function LunchBanner(props: LunchBannerProps) {
  return (
    <a href="" className='rounded-full overflow-hidden drop-shadow-lg mt-1 hover:mt-0.5'>
        <img src={props.bannerUrl} alt="" />
        {/* <div className='pt-10 pb-3 px-3 absolute bottom-0 left-0 right-0'> */}
        {/* <span className="block">{props.item}</span> */}
        {/* <strong className='text-xs font-bold text-white block'>{props.title}</strong> */}
        {/* <span className='text-zinc-300 text-sm block'>{props.adsCount} anúncios(s)</span> */}
        {/* </div> */}
    </a>

  )
}