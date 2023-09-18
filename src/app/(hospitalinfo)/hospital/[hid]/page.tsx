export async function generateStaticParams() {
    return [{hid: "001"}, {hid: "002"}, {hid: "003"}]
}

export default function HospitalItem({params}: {params : {hid: string}}) {
    const mockHMap = new Map();
    mockHMap.set("001", {name: "Chulalongkorn Hospital", image: "/img/chula.jpg"});
    mockHMap.set("002", {name: "Rajavithi Hospital", image: "/img/rajavithi.jpg"});
    mockHMap.set("003", {name: "Thammasat University Hospital", image: "/img/thammasat.jpg"});

    return (
        <div className="w-screen my-20">
            <h1 className="text-lg font-medium text-blue-600"> This Hospital ID is {params.hid} </h1>
            <div className="flex flex-row items-center justify-center">
                <img src={(mockHMap.get(params.hid)).image} className="w-100 h-100" alt="Hospital Picture" />
                <div className="text-md mx-5 text-rose-700"> {(mockHMap.get(params.hid)).name} </div>
            </div>
        </div>
    )
}