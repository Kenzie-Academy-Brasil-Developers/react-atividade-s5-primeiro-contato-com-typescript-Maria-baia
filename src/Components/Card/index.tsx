interface CardProps {
    name: string;
    age: number;
    hobby: string;
}

export const Card = ({ name, age, hobby } : CardProps) => {
    return (
        <div className="card">
            <h1>{name}</h1>
            <h2>{age}</h2>
            <p>{hobby}</p>
        </div>
    )
}