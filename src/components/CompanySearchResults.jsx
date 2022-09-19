import { useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Job from "./Job"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getCompanyJobs } from "../redux/actions"

const CompanySearchResults = () => {
  // const [jobs, setJobs] = useState([])
  const jobs = useSelector((state) => {
    return state.company.jobs
  })

  const params = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCompanyJobs(params.companyName))
  }, [])

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
