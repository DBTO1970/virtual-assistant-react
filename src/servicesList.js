let services = [
    {
        number: 0,
        name: "General Admin",
        description: "General administrative tasks, such as inbox management, Excel/spreadsheet creation/updating, scheduling assistance.",
        rate: "$15/hour"        
    },
    {
        number: 1,
        name: "Social Media and Marketing",
        description: "creating and scheduling social media posts, e-mail campaign management, HTML e-mail creation and support, survey management and support",
        rate: "$15-$25/hour"         
    },
    {
        number: 2,
        name: "Digital Editing",
        description:"Editing of digital media assets including: photo editing, video editing(under 10min TRT), podcast audio editing",
        rate: "$25-$50/hour"        
    },
    {
        number: 3,
        name: "Websites and Applications",
        description:"Wordpress site creation and administration, basic web site creation and/or maintenance, blog-site creation",
        rate: "$25-$50/hour"        
    }
];

export function getServices() {
    return services;
}

export function getService(number) {
    return services.find(
        service => service.number === number
    );
}