import { useEffect, useState } from "react";

const headers = new Headers();

headers.append("Content-Type", "application/json;charset=utf-8");
headers.append("Content-Type", "application/json");
headers.append("Access-Control-Allow-Credentials", "false");
headers.append("Access-Control-Allow-Headers", "x-amz-id-2,x-amz-request-id,Date,Last-Modified,ETag,x-amz-version-id,Accept-Ranges,Content-Type,Server,Content-Length");
headers.append("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE, PATCH")
headers.append("Access-Control-Allow-Origin", "http://localhost:3000/");
headers.append("Access-Control-Expose-Headers", "x-amz-id-2, x-amz-request-id, Date, Last-Modified, ETag, x-amz-version-id, Accept-Ranges, Content-Type, Server, Content-Length");
headers.append("X-Content-Type-Options", "nosniff");
headers.append("Accept-Ranges", "bytes");
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
                const response = await fetch(url
                    // , {
                    //     headers: headers
                    // }
                );
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