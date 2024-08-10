import { useState } from "react";
import { MdSearch } from "react-icons/md";

export const SearchForm = ({setSearch}) => {
    const [value, setValue] =useState("");

    const submit = (e) => {
        e.preventDefault();
        setSearch(value);
        setValue("");
    }

    return (
        <form onSubmit={submit} >
            <input type="text" placeholder="Pesquisar..."  value={value} onChange={(e) => setValue(e.target.value)} required/>
            <button type="submit"><MdSearch size={21} /></button>
        </form>
    )
}