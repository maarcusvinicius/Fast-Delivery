interface LunchBannerProps {
  item: string;
}

export function LunchBanner(props: LunchBannerProps) {
    return (
        <a href="" className='relative rounded-full overflow-hidden w-12 h-12 drop-shadow-lg mt-1 hover:mt-0'>
          <div className='pt-10 pb-3 px-3 bg-white absolute bottom-0 left-0 right-0'>
            <span className="block">{props.item}</span>
          </div>
        </a>
    )
}