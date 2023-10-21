export default function List() {
    const listItems = people.map((person: Person) => {
        const {accomplishment, id, name, profession} = person;
        return (
            <li key={id}>
                <img src={getImageUrl(person)} alt={name}/>
                <b>{name}</b>
                {` ${profession} `}
                known for {accomplishment}
            </li>
        );
    });
    return <ul>{listItems}</ul>;
}

type Person = {
    id: number; // JSXでkeyとして用いる
    name: string;
    profession: string;
    accomplishment: string;
    imageId: string;
};
const people: Person[] = [
    {
        id: 0, // Used in JSX as a key
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
        accomplishment: 'spaceflight calculations',
        imageId: 'MK3eW3A'
    }, {
        id: 1, // Used in JSX as a key
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
        accomplishment: 'discovery of Arctic ozone hole',
        imageId: 'mynHUSa'
    }, {
        id: 2, // Used in JSX as a key
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
        accomplishment: 'electromagnetism theory',
        imageId: 'bE7W1ji'
    }, {
        id: 3, // Used in JSX as a key
        name: 'Percy Lavon Julian',
        profession: 'chemist',
        accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
        imageId: 'IOjWm71'
    }, {
        id: 4, // Used in JSX as a key
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
        accomplishment: 'white dwarf star mass calculations',
        imageId: 'lrWQx8l'
    }
];

export function getImageUrl(person: Person) {
    return `https://i.imgur.com/${person.imageId}s.jpg`;
}