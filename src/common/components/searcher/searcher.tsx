import React from "react";

interface Props {
    searchHandler: (name: string) => void;
}

export const SearcherComponent: React.FC<Props> = (props) => {
    const { searchHandler } = props;
    const [filter, setFilter] = React.useState<string>('');

    const onChangeHandler = (text: string) => {
        setFilter(text);
        searchHandler(text);
    }

    return(
        <div>
            <p>Search</p>
            <input placeholder="Type pokemon name here" value={filter} onChange={(e) => onChangeHandler(e.target.value)} />
        </div>
    )
}