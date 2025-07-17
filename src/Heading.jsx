// Dynamic style parsed as props using template literal 

export default function Heading ({dynamicStyles, content}){
    return <div>
        <h1 className={`${dynamicStyles}`}>{content}</h1>
    </div>
}

