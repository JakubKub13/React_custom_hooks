import useFetch from './useFetch'

const url = "http://api.open-notify.org/iss-now.json";

const Coordinates = () => {
   const {data, loading} = useFetch(url)

  return <di>
    <div>{loading ? "loading....." : <div>
        <h2>Zemepisna dlzka</h2>
        <p>{data.iss_position.longitude}</p>
        <h2>Zemepisna sirka</h2>
        <p>{data.iss_position.latitude}</p>
        </div>}</div>
  </di>
}

export default Coordinates