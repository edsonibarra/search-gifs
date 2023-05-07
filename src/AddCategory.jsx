import { useState } from 'react';

// AddCategory component manages all the logic related
// to add a new category to categories array.

export const AddCategory = ({ setCategories }) => {


    // We use this hook to handle the values that are being typed
    // in the input value.


    //      1.   User types in the input field.
    //      2.   Every new change in the input is being catched by onInputChange
    //           which is using setInputValue to set the new inputValue in real time.
    //      3.   When the user hits enter will be called the onSubmit function used in the form.
    //           It will call the setCategories function which is declared in the parent component
    //           of AddCategory.
    //      4.   At the end, inputValue is clenead from any value sent before.


    
    const [ inputValue, setInputValue ] = useState('One Punch')

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()

        // It adds the new category
        setCategories( categories => {
            return [inputValue, ...categories]
        })
        
        setInputValue('')
    }

    return (
        <form onSubmit={onSubmit}>
            <h5>Add Category</h5>
            <input 
                type="text"
                placeholder="Search gifs"
                value={ inputValue }
                onChange={onInputChange}
            />
        </form>
    )
}