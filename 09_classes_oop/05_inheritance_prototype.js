const User = {
    name: "Rupam",
    email: "rupam@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // Now TASupport is inheritated from TeachingSupport
}
// We can also do it outside..
Teacher.__proto__=User // Teacher is now inheritated from User 

// These all are old school syntax
// New Syntax:
Object.setPrototypeOf(TeachingSupport,Teacher); // TeachingSupport is inheritated from Teacher