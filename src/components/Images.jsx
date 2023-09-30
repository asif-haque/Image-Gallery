import { useEffect, useState } from "react";
import ImageDiv from "./ImageDiv";
import { Container, Row } from "react-bootstrap";
import { useSearchTerm } from "../contexts/SearchTerm";

function Images() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { searchTerm } = useSearchTerm();

  useEffect(() => {
    const apiKey = `39714103-844fde0d1dca6763520c6ed1e`;
    const perPage = 24;
    const dataFetch = async () => {
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}&image_type=photo&pretty=true&per_page=${perPage}`
        ); // fetch gives me a promise => that promise on resolve gives me response object
        if (!response.ok) {
          throw new Error(`Status: ${response.status}`);
        }
        const actualData = await response.json(); // response => json data
        setData(actualData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    dataFetch();
  }, [searchTerm]); //dependency array should be rethought,

  return (
    <Container fluid className="px-4">
      {loading && <h1 className="text-center">Loading...</h1>}
      {error && <h1>{error}</h1>}
      <Row>
        {data &&
          (data.hits.length === 0 ? (
            <>
              <h1 className="text-center mt-5" style={{fontSize: "5rem"}}>:(</h1>
              <h1 className="text-center mt-3">No Images Found</h1>
            </>
          ) : (
            data.hits.map((item) => <ImageDiv item={item} key={item.id} />)
          ))}
      </Row>
    </Container>
  );
}

export default Images;
