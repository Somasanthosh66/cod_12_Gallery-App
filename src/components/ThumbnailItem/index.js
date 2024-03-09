// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachThumb, updateThumbnail, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachThumb

  const changeImage = () => {
    updateThumbnail(id)
  }

  const activeBtn = isActive ? '' : 'hide-image'
  return (
    <li className="list-item">
      <button className="button" type="button" onClick={changeImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`image ${activeBtn}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
