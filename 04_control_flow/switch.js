// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "feb"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

// Note: if break is not used, all the cases after the matched case will also be executed till next break line, except default case as it will not be executed unless no case matches