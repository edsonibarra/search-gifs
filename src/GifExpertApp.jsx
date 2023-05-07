import {useState} from 'react'
import { AddCategory } from './AddCategory'


export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['primera category'])

    const addNewCategory = () => {
        // React doesnt allow mutate the state; categories. Create a new one.
        setCategories([ 'hello world', ...categories])
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            

            {/*
            
            Send setCategory function to AddCategory component to
            add new values to categories array.
            
            */}
            
            <AddCategory setCategories={setCategories} />

            <ol>
                {categories.map( cat => {
                    return <li>{cat}</li>
                })}
            </ol>
        </>
    )
}