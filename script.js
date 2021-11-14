async function start() {
    const response = await fetch("https://api.iq.inrix.com/auth/v1/appToken?appId=bk5opnzi3d&hashToken=Yms1b3BuemkzZHxGU2xCcG43em9sMkpUMnFHMlRoYms2S3FtSGVJWGV0YjIxVWNScGU1")
    const data = await response.json()
    const token = data.result.token
        // Constructing the URL to INRIX Parking Blocks
    const speedSegmentsURL =
        "https://api.iq.inrix.com/v1/segments/speed?box=37.757386%7C-122.490667%2C37.746138%7C-122.395481";

    //Preparing the axios headers. Very impotant to note is the Authorization Header
    const axiosConfig = {
        headers: {
            "content-type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
        },
    };

    // Executing a call using axios to get the INRIX Parking Blocks data
    const speedSegmentsResponse = await axios
        .get(speedSegmentsURL, axiosConfig)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert(error);
            }
        });

    console.log(speedSegmentsResponse)
}

start()