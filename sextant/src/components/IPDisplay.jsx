import { useEffect, useState } from "react";

const IPDisplay = () => {

    const [ip, setIp] = useState({})

    async function getIP() {
        await fetch("https://api64.ipify.org?format=json")
        .then((res) => {
            if (res.ok){
                return res.json()
                // console.log(res)
                
            }
        })
        .then(
            (data) => setIp(data)
            
        )
    }

    useEffect(() => {
      getIP()
    }, [])
    


    return(
        <div>
            {`ip : ${ip.ip}`}
        </div>
    )

}

export default IPDisplay