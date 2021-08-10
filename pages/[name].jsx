import styles from "../styles/Home.module.scss";
import Image from "next/image";
import Link from "next/link";
import BackIcon from "@material-ui/icons/ArrowBack";

function Country({ data }) {
  return (
    <div className={styles.detailPageWrapper}>
      <Link href="/">
        <button>
          <BackIcon /> <span>Back</span>
        </button>
      </Link>
      <div className={styles.detailPageContainer}>
        <div className={styles.flag}>
          <Image src={data.flag} layout="fill" />
        </div>
        <div className={styles.detailsField}>
          <h1>{data.name}</h1>
          <div className={styles.detailsLists}>
            <ul className={styles.details}>
              <li>
                Native Name: <span>{data.nativeName}</span>
              </li>
              <li>
                Population: <span>{data.population}</span>
              </li>
              <li>
                Region: <span>{data.region}</span>
              </li>
              <li>
                Sub Region: <span>{data.subregion}</span>
              </li>
              <li>
                Capital: <span>{data.capital}</span>
              </li>
            </ul>
            <ul className={styles.details}>
              <li>
                Top Level Domain: <span>{data.topLevelDomain}</span>
              </li>
              <li>
                Currencies:{" "}
                <span>{data?.currencies?.map((cu) => cu.name).join()}</span>
              </li>
              <li>
                Languages:{" "}
                <span>{data?.languages?.map((l) => l.name).join()}</span>
              </li>
            </ul>
          </div>
          <div className={styles.bordersField}>
            <h4>Border Countries: </h4>
            <div>
              {data?.borders?.map((cb) => (
                <span key={cb}> {cb} </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ query: { name } }) => {
  const res = await fetch(
    `https://restcountries.eu/rest/v2/name/${name}?fullText=true`
  );
  const data = await res.json();
  if (!data) return { notFound: true };

  return {
    props: { data: data[0] },
  };
};

export default Country;
