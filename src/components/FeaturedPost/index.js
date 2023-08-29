import Image from 'next/image'
import { Link } from '../Link'

import { 
  FeaturedPostWrapper, 
  FeaturedPostDate,
  FeaturedPostImage,
  FeaturedPostHeader,
  FeaturedPostTitle,
  FeaturedPostSubTitle
} from './style'

function FeaturedPost({ ...props }) {
  const {
    imgSrc,
    imgAlt,
    href,
    date,
    title,
    subtitle
  } = props

  return (
    <FeaturedPostWrapper>
      <Link target='_blank' href={href}>
        <FeaturedPostImage>
          <Image
            src={imgSrc}
            alt={imgAlt}
            fill
            priority
          />
        </FeaturedPostImage>
        <FeaturedPostHeader>
          <FeaturedPostDate>{date}</FeaturedPostDate>
          <FeaturedPostTitle>{title}</FeaturedPostTitle>
          <FeaturedPostSubTitle>{subtitle}</FeaturedPostSubTitle>
        </FeaturedPostHeader>
      </Link>
    </FeaturedPostWrapper>
  );
}

export { FeaturedPost }
