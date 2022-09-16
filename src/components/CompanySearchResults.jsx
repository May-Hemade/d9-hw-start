import { useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Job from "./Job"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setCompanyJobAction } from "../redux/actions"

const CompanySearchResults = () => {
  // const [jobs, setJobs] = useState([])
  const jobs = useSelector((state) => {
    return state.company.jobs
  })

  const params = useParams()
  const dispatch = useDispatch()

  const baseEndpoint = "https://strive-jobs-api.herokuapp.com/jobs?company="

  useEffect(() => {
    getJobs()
  }, [])

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.companyName)
      if (response.ok) {
        const { data } = await response.json()
        dispatch(setCompanyJobAction(data))
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
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default CompanySearchResults
