// Defines a function called saturdayFun with an optional parameter for the activity
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// Defines a function called mondayWork using a function expression with an optional parameter for the activity
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};

// Defines a function called wrapAdjective that takes in a parameter for the visual flair
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}

