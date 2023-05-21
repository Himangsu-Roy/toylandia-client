import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = "ToyLandia " + title;
   }, [])
}

export default useTitle;

