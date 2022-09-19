import React from "react"
import { Container } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Job from "./Job"

function Favorite() {
  const favoriteJobs = useSelector((state) => {
    return state.favorites.jobs
  })

  return (
    <div>
      <h1>My favorites</h1>
      <Link to="/">home</Link>
      <div>
        <Container>
          {favoriteJobs.map((job) => (
            <Job key={job._id} data={job} />
          ))}
        </Container>
      </div>
    </div>
  )
}

export default Favorite
