import {ChangeEventHandler, FormEventHandler, useState, FC} from 'react';

const sendMessage = (message: string) => {
    // ...
};
export default function MessageForm() {
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState<any>('Hi!');
    const handleChange: ChangeEventHandler<HTMLTextAreaElement> =
        ({target: {value}}) => {
            setMessage(value);
        };
    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        setIsSent(true);
        sendMessage(message);
    };
    return isSent ? (
        <SendMessage/>
    ) : (
        <Form
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            message={message}
        />
    );
}

const SendMessage: FC = () => {
    return (
        <h1>Your message is on its way!</h1>
    );
};

type Props = {
    handleChange: ChangeEventHandler<HTMLTextAreaElement>;
    handleSubmit: FormEventHandler<HTMLFormElement>;
    message: string;
};
const Form: FC<Props> = ({handleChange, handleSubmit, message}) => {
    return (
        <form onSubmit={handleSubmit}>
            <textarea placeholder="Message" value={message} onChange={handleChange}/>
            <button type="submit">Send</button>
        </form>
    );
};