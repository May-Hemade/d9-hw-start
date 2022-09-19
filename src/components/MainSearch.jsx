import { useState } from "react"
import { Container, Row, Col, Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getJobsAction, setQueryAction } from "../redux/actions"
import Job from "./Job"

const MainSearch = () => {
  // const [query, setQuery] = useState("")
  // const [jobs, setJobs] = useState([])

  const jobs = useSelector((state) => state.main.jobs)
  const query = useSelector((state) => state.main.query)

  // const mapStateToProps = (state) => {
  //   return {
  //     jobs: state.main.jobs,
  //   }
  // }

  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(setQueryAction(e.target.value))
    // props.setQuery(e.target.value)
  }

  // const mapDispatchToProps = (dispatch) => {
  //   return {
  //     setQuery: (query) => {
  //       dispatch(setQueryAction(query))
  //     },
  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()

    dispatch(getJobsAction(query))
  }

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1> <Link to="/favorites">Favorites</Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

// export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);

export default MainSearch
