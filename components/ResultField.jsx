import { useState, useEffect, useCallback, useMemo } from "react";
import styles from "../styles/Home.module.scss";
import CountryCard from "./countryCard";
import SearchBar from "../components/SearchBar";

function ResultField({ countriesData }) {
  const defaultCountriesData = useMemo(() => [...countriesData]);
  const [countries, setCountries] = useState(defaultCountriesData);
  const [textSearch, setTextSearch] = useState("");
  const [value, setValue] = useState("");

  // if textSearch and reqin value do not change , the filterCountries function will not aplly
  const filterCountries = useCallback(() => {
    const newCountries = countriesData.filter(
      (e) =>
        e.name.match(new RegExp(textSearch, "gi")) &&
        (value ? e.region === value : true)
    );
    setCountries([...newCountries]);
  }, [textSearch, value]);
  // useEffect hock will not aplly till the textSearch and region value change
  useEffect(() => filterCountries(), [filterCountries]);
  return (
    <>
      <SearchBar
        value={value}
        setValue={setValue}
        textSearch={textSearch}
        setTextSearch={setTextSearch}
      />
      <div className={styles.result_container}>
        {countries &&
          countries?.map((c, index) => (
            <CountryCard key={c.name} data={c} flag={c.flag} loading="lazy" />
          ))}
      </div>
    </>
  );
}

export default ResultField;
