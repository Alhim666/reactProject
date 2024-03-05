export const CardContent = ({ title, image }) => {
  return (
    <div className="card-content">
      <p className="card-title">{title}</p>
      <img src={image} className="card-image" alt="" />
    </div>
  )
}
