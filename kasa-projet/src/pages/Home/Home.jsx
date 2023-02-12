import './Home.css';
import Header from "../../components/Header/Header";
import Gallery from "../../components/Gallery/Gallery";
import Banner from '../../components/Banner/Banner';
import baniere from '../../assets/images/baniere.png';
import useFetch from "../../hook/useFetch";

const Home = (props) => {
  const { data, hasError, errorType, isLoading } = useFetch("https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json");

  return (
    <>
      <Header />
      <Banner image={baniere} text={"Chez vous, partout et ailleurs"} />
      <Gallery
        data={data}
        hasError={hasError}
        errorType={errorType}
        isLoading={isLoading}
      />
    </>
  );
};

export default Home;