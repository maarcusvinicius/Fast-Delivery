interface LunchBannerProps {
  bannerUrl: string;
  title: string;
}

export function LunchBanner(props: LunchBannerProps) {
  return (
    <a href="" className='rounded-full overflow-hidden drop-shadow-lg mt-1 hover:mt-0.5'>
      <img src={props.bannerUrl} alt="" />

    </a>
  )
}