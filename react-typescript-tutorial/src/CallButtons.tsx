export default function CallButtons() {
    return (
        <div
            onClick={() => {
                alert('The parent is called');
            }}
            onClickCapture={() => {
                alert('Capture event is triggered');
            }}
        >
            <button
                onClick={(event: React.MouseEvent) => {
                    event.stopPropagation();
                    alert('The child is called');
                }}
            >
                Button
            </button>
        </div>
    );
}