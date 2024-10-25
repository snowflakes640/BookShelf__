import React, {useState, useContext, useEffect} from "react";
import { useCallback } from "react";

const URL = "https://www.googleapis.com/books/v1/volumes?q="
const API_Key = "AIzaSyA3A-TejBMRPs9uTEWKR_NoMo6LAx6wskc"
const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState("The Lost world")
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)
    const [resultTitle, setResultTitle] = useState("")

    const fetchBooks = useCallback(async() => {
        setLoading(true);
        try{
            const response = await fetch(`${URL}${searchTerm}&key=${API_Key}`)
            const data = await response.json()
            console.log(data)
            const {items} = data
            if (items) {
                setBooks(items);
                setResultTitle(`Results for "${searchTerm}"`);
            } else {
                setBooks([]);
                setResultTitle("No results found");
            }
            setLoading(false)
        }catch(error){
            console.log(error)
            setLoading(false)
        }
    }, [searchTerm])
    
    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks])

    return(
        <AppContext.Provider value = {{
            loading, books, setSearchTerm, resultTitle, setResultTitle
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}