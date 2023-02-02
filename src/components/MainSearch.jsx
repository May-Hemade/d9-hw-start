import { Container, Row, Col, Form, Alert, Spinner } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { searchJobs, setQuery } from "../redux/actions"

import Job from "./Job"

const MainSearch = () => {
  // const [query, setQuery] = useState("")
  // const [jobs, setJobs] = useState([])

  const jobs = useSelector((state) => state.main.jobs)
  const query = useSelector((state) => state.main.query)
  const error = useSelector((state) => state.main.error)
  const load = useSelector((state) => state.main.load)

  const dispatch = useDispatch()
  // const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search="

  const handleChange = (e) => {
    dispatch(setQuery(e.target.value))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(searchJobs())

    // try {
    //   const response = await fetch(baseEndpoint + query + "&limit=20")
    //   if (response.ok) {
    //     const { data } = await response.json()
    //     dispatch(setMainJobs(data))
    //   } else {
    //     alert("Error fetching results")
    //   }
    // } catch (error) {
    //   console.log(error)
    // }
  }

  return (
    <Container>
      {error && (
        <Alert variant="info">This is a Danger alert—check it out!</Alert>
      )}

      {load && <Spinner animation="grow" variant="info" />}
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
        </Col>
        <Col xs={2}>
          <Link to="/favorites">favorites</Link>
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

export default MainSearch
