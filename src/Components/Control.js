import lang from "./Lang";

const Control = ({itemNumber, language,all}) =>{
    return (
        <ol className="control-list">
            <li>{itemNumber} {lang[language].items}</li>
            <li className="all-item" onClick={all}>{lang[language].all}</li>
            <li className="active-item" onClick={all}>{lang[language].active}</li>
            <li className="complated-item" onClick={all}>{lang[language].completed}</li>
        </ol>
    )
}

export default Control;