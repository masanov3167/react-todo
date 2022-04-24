import lang from "./Lang";

const Control = ({leftVal, allVal, language}) =>{
    return (
        <ol className="control-list">
            <li>{leftVal}{lang[language].items}</li>
            <li>{lang[language].all}{allVal}</li>
            <li>{lang[language].active}</li>
            <li>{lang[language].completed}</li>
        </ol>
    )
}

export default Control;