import {coursesList, daysList, timesList, linksList, description, phoneNumbers, courseNameElement, daysElement, timesElement, syllabusElement, zoomElement, descriptionElement, instructorElement, emailAddressElement, phoneNumberElement} from './info.js'

const courses = [
    {name: coursesList[0],
    days: `${daysList[0]} & ${daysList[1]}`,
    time: timesList[0],
    syllabus: linksList[1].sizemore,
    zoom: linksList[0].laurel,
    description: description.numberSense,
    instructor: "Mark Sizemore",
    email: "mark@laureladulted.org",
    phone: phoneNumbers.london
    },

    {name: coursesList[0],
    days: `${daysList[2]} & ${daysList[3]}`,
    time: timesList[0],
    syllabus: linksList[1].ledford,
    zoom: linksList[0].corbin,
    description: description.numberSense,
    instructor: "Jennifer Ledford",
    email: "jennifer@laureladulted.org",
    phone: phoneNumbers.corbin
    },

    {name: coursesList[1],
    days: `${daysList[2]} & ${daysList[3]}`,
    time: times[1],
    syllabus: linksList[1].chesnut,
    zoom: linksList[0].laurel,
    description: description.geometry,
    instructor: "Rachael Chesnut",
    email: "rachael@laureladulted.org",
    phone: phoneNumbers.london
    },
    
    {name: coursesList[1],
    days: daysList[1],
    time: timesList[4],
    syllabus: linksList[1].moses_geo,
    zoom: linksList[0].corbin,
    description: description.geometry,
    instructor: "Erin Moses",
    email: "erin@laureladulted.org",
    phone: phoneNumbers.corbin
    },
    
    {name: coursesList[2],
    days: daysList[0],
    time: timesList[1],
    syllabus: linksList[1].moses_alg,
    zoom: linksList[0].corbin,
    description: description.algebra,
    instructor: "Erin Moses",
    email: "erin@laureladulted.org",
    phone: phoneNumbers.corbin
    },
    
    {name: coursesList[2],
    days: daysList[1],
    time: timesList[1],
    syllabus: linksList[1].cornettAlg,
    zoom: linksList[0].clay,
    description: description.algebra,
    instructor: "Ryan Cornett",
    email: "ryan@laureladulted.org",
    phone: phoneNumbers.clay
    },
    
    {name: coursesList[2],
    days: daysList[1],
    time: timesList[4],
    syllabus: linksList[1].lipps,
    zoom: linksList[0].clay,
    description: description.algebra,
    instructor: "Rodney Lipps",
    email: "rodney@laureladulted.org",
    phone: phoneNumbers.clay
    },
    
    {name: coursesList[3],
    days: daysList[0],
    time: timesList[1],
    syllabus: linksList[1].cornettGra,
    zoom: linksList[0].clay,
    description: description.grammar,
    instructor: "Ryan Cornett",
    email: "ryan@laureladulted.org",
    phone: phoneNumbers.clay
    },

    {name: coursesList[7],
    days: `${daysList[1]} & ${daysList[3]}`,
    time: timesList[2],
    syllabus: linksList[1].newquist,
    zoom: linksList[0].knox,
    description: description.science,
    instructor: "Terry Newquist",
    email: "terry@laureladulted.org",
    phone: phoneNumbers.knox
    }
];


function insert() {
    for (let a = 0; a < courseNameElement.length; a++) {
        courseNameElement[a].textContent = courses[a].name;
    }
    for (let b = 0; b < daysElement.length; b++) {
        daysElement[b].textContent = courses[b].days;
    }
    for (let c = 0; c < timesElement.length; c++) {
        timesElement[c].textContent = courses[c].time;
    }
    for (let d = 0; d < syllabusElement.length; d++) {
        syllabusElement[d].innerHTML = `<a href=" ${courses[d].syllabus}">Syllabus</a>`;
    }
    for (let e = 0; e < zoomElement.length; e++) {
        zoomElement[e].innerHTML = `<a href=" ${courses[e].zoom}">Zoom Meeting Room</a>`;
    }
    for (let f = 0; f < descriptionElement.length; f++) {
        descriptionElement[f].textContent = courses[f].description;
    }
    for (let g = 0; g < instructorElement.length; g++) {
        instructorElement[g].textContent = courses[g].instructor;
    }
    for (let h = 0; h < emailAddressElement.length; h++) {
        emailAddressElement[h].textContent = courses[h].email;
    }
    for (let i = 0; i < phoneNumberElement.length; i++) {
        phoneNumberElement[i].textContent = courses[i].phone;
    }
};
export {insert as default};