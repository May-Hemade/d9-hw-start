import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { BalloonHeart, BalloonHeartFill } from "react-bootstrap-icons"
import { addToFavorites, removeFromFavorites } from "../redux/actions"
import { useDispatch, useSelector } from "react-redux"

const Job = ({ data }) => {
  const favorites = useSelector((state) => {
    return state.favorites.jobs
  })

  const dispatch = useDispatch()
  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={1}>
        {!favorites.some((job) => job._id === data._id) ? (
          <BalloonHeart
            onClick={() => {
              dispatch(addToFavorites(data))
            }}
          />
        ) : (
          <BalloonHeartFill
            onClick={() => {
              dispatch(removeFromFavorites(data))
            }}
          />
        )}
      </Col>
    </Row>
  )
}
export default Job
