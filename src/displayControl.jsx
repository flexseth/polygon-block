// data has been retrieved
export default function displayControl(retrievedData, isLoading) {
    return (
        <>
            <p>
                            // this JUST displays the number of items returned by the API
                            { ! isLoading
                                ? `Loaded ${ retrievedData.length } items`
                                : 'Loading...' }
            </p>
        </>
    )
    
}
