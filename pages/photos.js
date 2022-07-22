import styles from '../styles/Home.module.css'
import HeadInfo from '../components/HeadInfo'
import Image from 'next/image'
import PhotosStyle from '../styles/Photos.module.css'
import Link from 'next/link'

const photos = ({photos}) => {
  return (
    <div className={styles.container}>
        <HeadInfo title="HII PHOTO"/>
        <h1>Photos</h1>
        <ul className={PhotosStyle.photos}>
          {photos.map(photo=>(
            <li key={photo.id}>
              <Link href={`/photos/${photo.id}`}>
                <a>
                <Image src={photo.thumbnailUrl}
                width={100}
                height={100}
                alt={photo.title}
                />
              <span>{photo.title}</span> 
              </a>
              </Link>
            </li>
          ))}

        </ul>
    </div>
  )
}

export const getStaticProps = async()=> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`)
  const photos = await res.json();

  return{
    props:{
      photos
    }
  }
}

export default photos