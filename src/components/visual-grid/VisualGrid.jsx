import { useEffect, useState } from "react";
import VisualGridElement from "./VisualGridElement";
import { Container, Row } from "react-bootstrap";
import { useSearchTerm } from "../../contexts/SearchTerm";
import ReactLoading from "react-loading";
import Loading from "../loaders/Loading";

function VisualGrid({ video }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const { searchTerm } = useSearchTerm();

  useEffect(() => {
    setPage(1);
    setData([]);
  }, [searchTerm]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_PIXABAY_API_KEY;
    const perPage = 18;
    const dataFetch = async () => {
      try {
        const response = await fetch(
          `https://pixabay.com/api/${
            video ? `videos/` : ``
          }?key=${apiKey}&q=${searchTerm}&image_type=all&pretty=true&per_page=${perPage}&page=${page}`
        ); // fetch gives me a promise => that promise on resolve gives me http response
        if (!response.ok) {
          throw new Error(`Status: ${response.status}`);
        }
        const actualData = await response.json();

        setData((prev) => {
          const newData = actualData.hits.filter(
            (item) => !prev.some((prevItem) => prevItem.id === item.id)
          );
          return [...prev, ...newData];
        });
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    dataFetch();
  }, [searchTerm, page]);

  useEffect(() => {
    const handleInfiniteScroll = () => {
      if (
        window.scrollY + window.innerHeight + 1 >=
        document.body.offsetHeight
      ) {
        setPage((prev) => prev + 1);
        // setLoading(true);
      }
    };

    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  return (
    <Container fluid className="px-4">
      {!loading && !data.length && error && (
        <h1 className="text-center animate-bounce my-20">{error}</h1>
      )}
      <Row>
        {!error && !loading && !data?.length ? (
          <>
            <h1 className="text-center mt-5 text-[5rem]">:(</h1>
            <h1 className="text-center mt-3">
              No {video ? "Videos" : "Images"} Found
            </h1>
          </>
        ) : (
          data?.map((item) => (
            <VisualGridElement item={item} key={item.id} video={video} />
          ))
        )}
        {loading && <Loading />}
      </Row>
    </Container>
  );
}

export default VisualGrid;
