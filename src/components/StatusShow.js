
function StatusShow({ danger, message }) {
    if (message == "") {
        return "";
    }
    return (
        <>

            <span className={`text-red-600 font-normal ${danger == true ? "text-red-500" : "text-green-500"}`}>
                {message}
            </span>
        </>
    );
}
export default StatusShow;