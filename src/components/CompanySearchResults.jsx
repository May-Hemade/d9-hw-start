import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Job from "./Job"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setJobs } from "../redux/actions"

const CompanySearchResults = () => {
  // const [jobs, setJobs] = useState([])
  const jobs = useSelector((state) => state.search.jobs)
  console.log("this is jobs", jobs)
  const dispatch = useDispatch()
  const params = useParams()

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search="

  useEffect(() => {
    getJobs()
  }, [])

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.companyName)
      if (response.ok) {
        const result = await response.json()

        console.log("search ok", result.data)
        dispatch(setJobs(result.data))
        console.log("iam the heloow", result.data)
      } else {
        alert("Error fetching results")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          {jobs.map((job) => (
            <Job key={job._id} data={job} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default CompanySearchResults
