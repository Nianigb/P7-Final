import { useEffect, useState } from "react";

const headers = new Headers();

headers.append("Access-Control-Allow-Origin", "http://localhost:3000/");
headers.append("Access-Control-Allow-Credentials", "true");
headers.append("Access-Control-Allow-Headers", "Special-Request-Header");
headers.append("Access-Control-Request-Headers", "Authorization, Content-Type");
headers.append("Content-Type", "application/json;charset=utf-8");
headers.append("Referrer-Policy", "same-origin");

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [errorType, setErrorType] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!url) return;
        setIsLoading(true);

        async function fetchData() {
            try {
                const response = await fetch(url, {
                    method: 'GET', // *GET, POST, PUT, DELETE, etc.
                    mode: 'cors', // no-cors, *cors, same-origin
                    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    credentials: 'same-origin',
                    headers: headers
                });
                const data = await response.json();
                setData(data);
            } catch (err) {
                setHasError(true);
                setErrorType(err.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, [url]);

    return { data, hasError, errorType, isLoading };
}

export default useFetch;