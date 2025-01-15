interface SchoolListProp {
    search?: string
}

const SchoolList = ({ search }: SchoolListProp) => {

    const arr = [
        {
            "School Name": "CMS",
            "Principle": "XYZ",
            "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus molestias molestiae veniam corrupti maxime quibusdam quo deleniti minima reiciendis hic.",
            "Location": "Lucknow"
        },
        {
            "School Name": "CMS",
            "Principle": "XYZ",
            "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus molestias molestiae veniam corrupti maxime quibusdam quo deleniti minima reiciendis hic.",
            "Location": "Lucknow"
        },
        {
            "School Name": "CMS",
            "Principle": "XYZ",
            "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus molestias molestiae veniam corrupti maxime quibusdam quo deleniti minima reiciendis hic.",
            "Location": "Kanpur"
        },
        {
            "School Name": "CMS",
            "Principle": "XYZ",
            "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus molestias molestiae veniam corrupti maxime quibusdam quo deleniti minima reiciendis hic.",
            "Location": "Agra"
        },
        {
            "School Name": "CMS",
            "Principle": "XYZ",
            "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus molestias molestiae veniam corrupti maxime quibusdam quo deleniti minima reiciendis hic.",
            "Location": "Ayodhya"
        },
    ]

    return (
        <div className="p-4 flex flex-wrap gap-5">
            {search}
            {
                arr.filter((item) => search && search.length > 1 ? item["Location"] === search : item).map((item, index) =>
                    <Card data={index} key={index} />
                )
            }
        </div>
    )
}

export default SchoolList

interface CardProp {
    data: number
}

const Card = ({ data }: CardProp) => {
    return (
        <div className="border flex flex-col lg:flex-row">
            {/* School Image */}
            <img src="/dr.png" alt="" className="h-72 object-cover bg-gray-400" />

            {/* School Info */}
            <div className="p-3 flex gap-3 flex-col items-center justify-evenly">
                {/* Name */}
                <p>School Name: <span className="font-semibold">CMS</span></p>
                <p>Created By: <span className="font-semibold">Gandhi Ji</span></p>
                <p className="text-center">Description: <span className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus molestias molestiae veniam corrupti maxime quibusdam quo deleniti minima reiciendis hic.</span></p>
                <p>Location: <span className="font-semibold">Lucknow</span></p>
            </div>
        </div>
    )
}