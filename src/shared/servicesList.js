let services = [
    {
        number: 0,
        name: "General",
        nameLong: "General Administrative Services",
        description: "General administrative tasks, such as inbox management, Excel/spreadsheet creation/updating, scheduling assistance.",
        rate: "$15/hour",
        featured: true        
    },
    {
        number: 1,
        name: "Social",
        nameLong: "Social Media and Marketing Services",
        description: "creating and scheduling social media posts, e-mail campaign management, HTML e-mail creation and support, survey management and support",
        rate: "$15-$25/hour",
        featured: false         
    },
    {
        number: 2,
        name: "Accounts",
        nameLong: "Basic Bookkeeping and Accounting",
        description:"Invoicing, account data entry, accounts aging, and other general accounting-related tasks",
        rate: "$25-$50/hour",
        featured: true        
    },
    {
        number: 3,
        name: "Editing",
        nameLong: "Digital Editing Services",
        description:"Editing of digital media assets including: photo editing, video editing(under 10min TRT), podcast audio editing",
        rate: "$25-$50/hour",
        featured: false        
    },
    
    {
        number: 4,
        name: "Websites",
        nameLong: "Web-based Site/Application Services",
        description:"Wordpress site creation and administration, basic web site creation and/or maintenance, blog-site creation",
        rate: "$25-$50/hour",
        featured: true        
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