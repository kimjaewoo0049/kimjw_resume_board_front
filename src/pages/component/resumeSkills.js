export default function Skill ({imgSrc, imgAlt, description}){
    return (
        <div>
            <img src={imgSrc} alt={imgAlt}></img>
            <p>{description}</p>
        </div>
    )
}