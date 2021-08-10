import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

function CountryCard({ data, flag }) {
  const router = useRouter();
  return (
    <div className={styles.card} onClick={() => router.push(`/${data.name}`)}>
      <div className={styles.img_field}>
        <Image src={flag} alt="flag" layout="fill" />
      </div>
      <div className={styles.content}>
        <h3>{data.name}</h3>
        <ul className={styles.details}>
          <li>
            Population: <span>{data.population}</span>
          </li>
          <li>
            Region: <span>{data.region}</span>
          </li>
          <li>
            Capital: <span>{data.capital}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CountryCard;
