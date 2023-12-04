export const getSender = (loggedUser, users) => {
    return users[0]._id === loggedUser._id ? users[1].name : users[0].name;
}

// export const getSender = (loggedUser, users) => {
//     if (Array.isArray(users) && users.length >= 2 && loggedUser && loggedUser._id) {
//         if (users[0]._id === loggedUser._id) {
//             return users[1].name;
//         } else {
//             return users[0].name;
//         }
//     } else {
//         // Handle cases where the array is empty or doesn't contain necessary elements
//         return "Unknown"; // Or any other appropriate value or action
//     }
// };
