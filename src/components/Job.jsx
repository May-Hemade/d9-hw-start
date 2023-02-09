import { Row, Col } from "react-bootstrap"
import { BalloonHeart, BalloonHeartFill, Search } from "react-bootstrap-icons"
import { Link } from "react-router-dom"

import { useDispatch } from "react-redux"

import { useSelector } from "react-redux"
import { addFavorite, deleteFavorites } from "../redux/reducers/favoritesSlice"

const Job = ({ data }) => {
  const dispatch = useDispatch()
  const favorites = useSelector((state) => state.favorites.jobs)

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Search></Search>
      <Col xs={7}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={2}>
        {favorites.some((job) => data._id === job._id) ? (
          <span onClick={() => dispatch(deleteFavorites(data))}>
            <BalloonHeartFill></BalloonHeartFill>
          </span>
        ) : (
          <span onClick={() => dispatch(addFavorite(data))}>
            <BalloonHeart></BalloonHeart>
          </span>
        )}
      </Col>
    </Row>
  )
}

export default Job
