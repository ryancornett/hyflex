class Course {
    constructor(name, days, time, syllabus, zoom, description, picture, instructor, email, phone) {
        Object.assign(this, { name, days, time, syllabus, zoom, description, picture, instructor, email, phone })
    }
}

function getFoundationalSubject(s) {
    if (s.includes("Soc/Sci")) {
        return "fs-color";
    } else if (s.includes("Math")) {
        return "fm-color";
    } else { return "fr-color"; }
}
function getIntermediateSubject(s) {
    if (s.includes("Soc/Sci")) {
        return "is-color";
    } else if (s.includes("Math")) {
        return "im-color";
    } else { return "ir-color"; }
}

function getTierSubjectClass(name) {
    let n = name.split(" ");
    switch (n[0]) {
        case "Foundational":
            return getFoundationalSubject(n[1]);
        
        case "Intermediate":
            return getIntermediateSubject(n[1]);
    }
}
const CLAY_ZOOM = `https://us02web.zoom.us/j/3619478526?pwd=WkJZUUUzdUx3dVp5RVdoV1h0amF0QT09`;
const KNOX_ZOOM = null; // Candace set up 3 different recurring meetings for her classes in Knox
const KAYLA_ZOOM = "https://us06web.zoom.us/j/81133947947?pwd=er2aTKgnOPGSOZPWDXvlmE4oa7nobx.1";
const ZAC_ZOOM = "https://us06web.zoom.us/j/83660895039?pwd=NCtBUWNBUTJlazBUeHN0OW9jT2RBUT09"
const LONDON_ZOOM = `https://us02web.zoom.us/j/6447967863?pwd=aldCSW50bGlPVzhHMi9oczR4QUJUQT09`;
const CORBIN_ZOOM = `https://us02web.zoom.us/j/4974845563?pwd=Q1ErU2gzaW9oNiszYmkyZXRVajRSUT09`;
const CLAY_PHONE = "(606) 599-1230";
const KNOX_PHONE = "(606) 645-2340";
const LONDON_PHONE = "(606) 878-9134";
const CORBIN_PHONE = "(606) 528-0379";
const WHITLEY_PHONE = "(606) 549-1989";

const FM_Overview = "This course helps build math confidence by practicing real-life skills like reading graphs, measuring, and working with money, shapes, place value, word problems, geometry, and percentages."
const FM_Folder = "https://drive.google.com/drive/folders/1E4Rg4IjURtwLSb-KLQvI7WYHOm3z0-QH"
const FR_Overview = "This course helps you become a better reader and writer by learning how to find the main idea, understand new words, and fix grammar mistakes."
const FR_Folder = "https://drive.google.com/drive/folders/1xTsSDCC4GbA83QAQbeO4xmIA4tQaqNCs"
const FS_Overview = "This course helps you understand history and science by learning how to read for information, use visuals like graphs and maps, and make sense of cause-and-effect."
const FS_Folder = "https://drive.google.com/drive/folders/1gzPXV-Nko_ylv7SRx2YcDz1Kof1nFkiq"
const IM_Overview = "This course helps you build confidence in algebra, geometry, and problem solving for real-life situations. Week by week, you'll learn to use formulas, read graphs, and break down word problems."
const IM_Folder = "https://drive.google.com/drive/folders/1EuVX5UzXqOFWOyuWrlaGJN0z7UsppXH1"
const IR_Overview = "This course strengthens reading and writing skills for the GED by helping you analyze texts, form arguments, and improve your grammar. You'll learn how to make inferences, spot tone, write organized paragraphs, and edit for clarity."
const IR_Folder = "https://drive.google.com/drive/folders/12Mbu_OEbHHqJpKtGm_jDhApPWPyorw_3"
const IS_Overview = "This course builds skills in reading, analyzing, and interpreting social studies and science information. You'll learn to examine sources, evaluate data, identify cause and effect, and support conclusions using evidence."
const IS_Folder = "https://drive.google.com/drive/folders/1yg6CiJh6J3HHAJ0dciyBS21t9JqfLhTH"

const NOTE_START = "<p class='course-note'><b>";
const NOTE_END = "</b></p>"

const mathCourses = [
    new Course("Foundational Math #1", "Monday", "9:00-9:45", FM_Folder, LONDON_ZOOM, `${FM_Overview}`, "img/mickeyy.webp", "Mickey York", "mickey@laureladulted.org", LONDON_PHONE),

    new Course("Intermediate Math #1", "Monday", "10:30-11:15", FM_Folder, CORBIN_ZOOM, `${IM_Overview}`, "img/jenniferl.webp", "Jennifer Ledford", "jennifer@laureladulted.org", CORBIN_PHONE),

    new Course("Foundational Math #2", "Tuesday", "9:00-9:45", FM_Folder, LONDON_ZOOM, `${FM_Overview}`, "img/mickeyy.webp", "Mickey York", "mickey@laureladulted.org", LONDON_PHONE),

    new Course("Intermediate Math #2", "Tuesday", "10:30-11:15", IM_Folder, CORBIN_ZOOM, `${IM_Overview}`, "img/erinm.webp", "Erin Moses", "erin@laureladulted.org", CORBIN_PHONE),

    new Course("Intermediate Math #3", "Tuesday", "5:30-6:15", IM_Folder, CLAY_ZOOM, `${IM_Overview}`, "img/rodneyl.webp", "Rodney Lipps", "rodney@laureladulted.org", CLAY_PHONE),

    new Course("Foundational Math #3", "Wednesday", "1:00-1:45", FM_Folder, CORBIN_ZOOM, `${FM_Overview}`, "img/jenniferl.webp", "Jennifer Ledford", "jennifer@laureladulted.org", CORBIN_PHONE),

    new Course("Intermediate Math #4", "Wednesday", "2:30-3:15", IM_Folder, CORBIN_ZOOM, `${IM_Overview}`, "img/erinm.webp", "Erin Moses", "erin@laureladulted.org", CORBIN_PHONE),

    new Course("Foundational Math #4", "Wednesday", "4:00-4:45", FM_Overview, LONDON_ZOOM, `${FM_Overview}`, "img/marks.webp", "Mark Sizemore", "mark@laureladulted.org", LONDON_PHONE),

    new Course("Foundational Math #5", "Wednesday", "1:00-1:45", FM_Folder, LONDON_ZOOM, `${FM_Overview}`, "img/icon-person.svg", "TBA", "info@laureladulted.org", CORBIN_PHONE),

    new Course("Intermediate Math #5", "Thursday", "2:30-3:15", IM_Overview, LONDON_ZOOM, `${IM_Overview}`, "img/marks.webp", "Mark Sizemore", "mark@laureladulted.org", LONDON_PHONE),
];

const rlaCourses = [
    new Course("Intermediate RLA #1", "Monday", "9:45-10:30", IR_Folder, CLAY_ZOOM, `${IR_Overview}`, "img/ryanc.webp", "Ryan Cornett", "ryan@laureladulted.org", CLAY_PHONE),

    new Course("Foundational RLA #1", "Monday", "11:15-12:00", FR_Folder, LONDON_ZOOM, `${FR_Overview}`, "img/mickeyy.webp", "Mickey York", "mickey@laureladulted.org", LONDON_PHONE),

    new Course("Intermediate RLA #2", "Tuesday", "9:45-10:30", IR_Folder, CLAY_ZOOM, `${IR_Overview}`, "img/ryanc.webp", "Ryan Cornett", "ryan@laureladulted.org", CLAY_PHONE),

    new Course("Foundational RLA #2", "Tuesday", "11:15-12:00", FR_Folder, LONDON_ZOOM, `${FR_Overview}`, "img/mickeyy.webp", "Mickey York", "mickey@laureladulted.org", LONDON_PHONE),

    new Course("Foundational RLA #3", "Wednesday", "1:45-2:30", FR_Folder, LONDON_ZOOM, `${FR_Overview}`, "img/icon-person.svg", "TBA", "info@laureladulted.org", LONDON_PHONE),

    new Course("Intermediate RLA #3", "Wednesday", "3:15-4:00", IR_Folder, LONDON_ZOOM, `${IR_Overview}`, "img/rachaelc_v2.webp", "Rachael Chestnut", "rachael@laureladulted.org", LONDON_PHONE),

    new Course("Intermediate RLA #4", "Wednesday", "3:15-4:00", IR_Folder, LONDON_ZOOM, `${IR_Overview}`, "img/rachaelc_v2.webp", "Rachael Chestnut & Dema Hacker", "rachael@laureladulted.org", LONDON_PHONE),

    new Course("Foundational RLA #4", "Wednesday", "5:30-6:15", FR_Folder, LONDON_ZOOM, `${FR_Overview}`, "img/demah.webp", "Dema Hacker", "dema@laureladulted.org", LONDON_PHONE),

    new Course("Foundational RLA #5", "Thursday", "1:45-2:30", FR_Folder, KAYLA_ZOOM, `${FR_Overview}`, "img/kaylaj.webp", "Kayla Jones", "kayla.jones@whitley.kyschools.us", WHITLEY_PHONE),

    new Course("Intermediate RLA #5", "Thursday", "3:15-4:00", IR_Folder, LONDON_ZOOM, `${IR_Overview}`, "img/rachaelc_v2.webp", "Rachael Chestnut", "rachael@laureladulted.org", LONDON_PHONE),
];

const soc_SciCourses = [
    new Course("Foundational Soc/Sci #1", "Monday", "1:45-2:30", FS_Folder, LONDON_ZOOM, `${FS_Overview}`, "img/icon-person.svg", "TBA", "info@laureladulted.org", LONDON_PHONE),

    new Course("Intermediate Soc/Sci #1", "Monday", "3:15-4:00", IS_Folder, ZAC_ZOOM, `${IS_Overview}`, "img/zacg.webp", "Zac Gibbins", "zac.gibbins@whitley.kyschools.us", WHITLEY_PHONE),

    new Course("Foundational Soc/Sci #2", "Tuesday", "1:45-2:30", FS_Folder, LONDON_ZOOM, `${FS_Overview}`, "img/icon-person.svg", "TBA", "info@laureladulted.org", LONDON_PHONE),

    new Course("Intermediate Soc/Sci #2", "Tuesday", "3:15-4:00", IS_Folder, ZAC_ZOOM, `${IS_Overview}`, "img/zacg.webp", "Zac Gibbins", "zac.gibbins@whitley.kyschools.us", WHITLEY_PHONE),

    new Course("Foundational Soc/Sci #3", "Tuesday", "4:00-4:45", FS_Folder, "https://us02web.zoom.us/j/86366565815", `${FS_Overview}`, "img/candaces.webp", "Candace Smith", "candace.smith@knox.kyschools.us", KNOX_PHONE),

    new Course("Intermediate Soc/Sci #3", "Tuesday", "4:45-5:30", IS_Folder, LONDON_ZOOM, `${IS_Overview}`, "img/icon-person.svg", "TBA", "info@laureladulted.org", LONDON_PHONE),

    new Course("Foundational Soc/Sci #4", "Wednesday", "9:00-9:45", FS_Folder, "https://us02web.zoom.us/j/88205176530", `${FS_Overview}`, "img/candaces.webp", "Candace Smith", "candace.smith@knox.kyschools.us", KNOX_PHONE),

    new Course("Intermediate Soc/Sci #4", "Wednesday", "10:30-11:15", IS_Folder, CLAY_ZOOM, `${IS_Overview}`, "img/ryanc.webp", "Ryan Cornett", "ryan@laureladulted.org", CLAY_PHONE),

    new Course("Foundational Soc/Sci #5", "Thursday", "9:00-9:45", FS_Folder, "https://us02web.zoom.us/j/87655095797", `${FS_Overview}`, "img/candaces.webp", "Candace Smith", "candace.smith@knox.kyschools.us", KNOX_PHONE),

    new Course("Intermediate Soc/Sci #5", "Thursday", "10:30-11:15", IS_Folder, CLAY_ZOOM, `${IS_Overview}`, "img/ryanc.webp", "Ryan Cornett", "ryan@laureladulted.org", CLAY_PHONE),
];

function generateSubjectDiv(subject, container, parent) {
    parent.innerHTML = "";
    // const announcement = document.createElement('h4');
    // announcement.classList.add('announcement');
    // announcement.textContent = "Classes resume 9/2/2025";
    // parent.appendChild(announcement);
    for (let i = 0; i < subject.length; i++) {
    let courseName = document.createElement("h3");
    courseName.setAttribute("class", "course-name");
    courseName.classList.add(getTierSubjectClass(subject[i].name))
    courseName.innerText = subject[i].name;
    parent.appendChild(courseName);
    let infoDiv = document.createElement('div');
    infoDiv.setAttribute('class', 'course-info');
    parent.appendChild(infoDiv);
    let courseDays = document.createElement('h4');
    courseDays.setAttribute('class', 'days');
    courseDays.innerText = subject[i].days;
    infoDiv.appendChild(courseDays);
    let courseTime = document.createElement('h4');
    courseTime.setAttribute('class', 'time');
    courseTime.innerText = subject[i].time;
    infoDiv.appendChild(courseTime);
    let linksDiv = document.createElement('div');
    linksDiv.setAttribute('class', 'course-links');
    parent.appendChild(linksDiv);
    let syllabusLink = document.createElement('p');
    syllabusLink.setAttribute('class', 'syllabus');
    syllabusLink.innerHTML = `<a href = "${subject[i].syllabus}">Learning Targets</a>`;
    linksDiv.appendChild(syllabusLink);
    let zoomLink = document.createElement('p');
    zoomLink.setAttribute('class', 'zoom');
    zoomLink.innerHTML = `<a href = "${subject[i].zoom}">Zoom Meeting Link</a>`;
    linksDiv.appendChild(zoomLink);
    let description = document.createElement('span');
    description.setAttribute('class', 'description');
    description.innerHTML = subject[i].description;
    parent.appendChild(description);
    let profileDiv = document.createElement('div');
    profileDiv.setAttribute('class', 'profile');
    parent.appendChild(profileDiv);
    let picture = document.createElement('img');
    picture.setAttribute('src', subject[i].picture);
    picture.setAttribute('class', 'picture');
    picture.setAttribute('alt', subject[i].instructor);
    profileDiv.appendChild(picture);
    let instructor = document.createElement('h4');
    instructor.setAttribute('class', 'instructor');
    instructor.textContent = subject[i].instructor;
    profileDiv.appendChild(instructor);
    let email = document.createElement('p');
    email.setAttribute('class', 'email');
    email.textContent = subject[i].email;
    profileDiv.appendChild(email);
    let phone = document.createElement('p');
    phone.setAttribute('class', 'phone');
    phone.textContent = subject[i].phone;
    profileDiv.appendChild(phone);
    container.appendChild(parent);
  }};

export { mathCourses, rlaCourses as englishCourses, soc_SciCourses as otherCourses, generateSubjectDiv };