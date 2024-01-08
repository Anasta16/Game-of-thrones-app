import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Search = () => {

    const params = useParams();
    console.log(params.search);

    const [searchedCharacters, setSearchedCharacters] = useState([]);

    const getSearched = async (name) => {

        const api = await fetch(`https://thronesapi.com/api/v2/Characters/${name}`);
        const data = await api.json();
        setSearchedCharacters(data);
    }

    useEffect(() => {
        getSearched(params.search)
    }, [params.search]);

    const [quotes, setQuotes] = useState([""]);

    const getQuotes = async (name) => {

        const url = `https://api.gameofthronesquotes.xyz/v1/author/${name}/2`
        const input = url.toLowerCase();
        const api = await fetch(input);
        const data = await api.json();
        setQuotes(data);
    }

    useEffect(() => {
        getQuotes(searchedCharacters.firstName)
    }, [searchedCharacters.firstName]);



    return (
        <div className="search">
            <div className="search-detail">
                <img src={searchedCharacters.imageUrl} alt="" />
            </div>
            <div>
                <h4>{searchedCharacters.fullName}</h4>
                <h5>{searchedCharacters.title}</h5>
                <p>{searchedCharacters.family}</p>

                {
                quotes.map((item) => {
                    return (
                        <p>{item.sentence}</p>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Search;