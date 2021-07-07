import React from "react";

export function SearchForm(props) {
    return (
        <div className="card">
            <header className="card-header">
            <p className="title">
            Farm Search
            </p>
            </header>
            <div className="card-content">
                <div className="content">
                    <div className="field">
                        <div className="control">
                            <input onChange={props.handleInputChange} className="input" type="text" placeholder="Search for farm by zip code" />
                        </div>
                    </div>
                    <div className="control">
                        <button onClick={props.handleFormSubmit} className="button">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchForm;