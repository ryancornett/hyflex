class Course {
    constructor(tier, subject, name, days, time, syllabus, zoom, description, picture, instructor, email, phone, grid) {
        this.id = crypto.randomUUID();
        Object.assign(this, { tier, subject, name, days, time, syllabus, zoom, description, picture, instructor, email, phone, grid })
    }
}

const Tiers = Object.freeze({ F: "Foundational", I: "Intermediate" });
const Subjects = Object.freeze({ M: "Math", R: "RLA", S:"Soc/Sci" });

const icons = {
    [Tiers.F]: { [Subjects.M]: "percent", [Subjects.R]: "book", [Subjects.S]: "globe-americas"},
    [Tiers.I]: { [Subjects.M]: "calculator", [Subjects.R]: "pencil-square", [Subjects.S]: "hourglass-split"}
}

function addCellStyling(icon) {
    switch (icon) {
        case "percent":
            return "ct-fm cal-math";
        
        case "calculator":
            return "ct-im cal-math";

        case "book":
            return "ct-fr cal-rla"
        
        case "pencil-square":
            return "ct-ir cal-rla"
        
        case "globe-americas":
            return "ct-fs cal-ss"
        
        case "hourglass-split":
            return "ct-is cal-ss"

        default:
            return null;
    }
}

function getFoundationalSubject(s) {
    if (s == [Subjects.S]) {
        return "fs-color";
    } else if (s == [Subjects.M]) {
        return "fm-color";
    } else { return "fr-color"; }
}
function getIntermediateSubject(s) {
    if (s == [Subjects.S]) {
        return "is-color";
    } else if (s == [Subjects.M]) {
        return "im-color";
    } else { return "ir-color"; }
}

function getTierSubjectClass(name) {
    switch (name.tier) {
        case Tiers.F:
            return getFoundationalSubject(name.subject);
        
        case Tiers.I:
            return getIntermediateSubject(name.subject);
    }
}

// add open class slot <td> id attributes to openCells 
const openCells = ['c2', 'd2', 'c4', 'd4', 'a5', 'b5', 'a7', 'b7', 'a9', 'd9', 'a10', 'd10', 'a11', 'd11'];

// add 'coming soon' class slot <td> id attributes to cell and other corresponding info 
const comingSoonCells = [
    {cell: 'd5', tier: Tiers.F, subject:Subjects.M},
    {cell: 'a6', tier: Tiers.F, subject:Subjects.S},
    {cell: 'b6', tier: Tiers.F, subject:Subjects.S},
    {cell: 'c6', tier: Tiers.F, subject:Subjects.R},
    {cell: 'b10', tier: Tiers.I, subject:Subjects.S}
];
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

// Keep these for adding bold, red notes in a new line below the course overview ('description' property of the Course object); place ${NOTE_STATE}--your message--${NOTE_END} before the closing backtick
const NOTE_START = "<p class='course-note'><b>";
const NOTE_END = "</b></p>"

const mathCourses = [
    new Course(Tiers.F, Subjects.M, "#01", "Monday", "9:00-9:45", FM_Folder, LONDON_ZOOM, `${FM_Overview}`, "img/mickeyy.webp", "Mickey York", "mickey@laureladulted.org", LONDON_PHONE, "a1"),

    new Course(Tiers.I, Subjects.M, "#01", "Monday", "10:30-11:15", FM_Folder, CORBIN_ZOOM, `${IM_Overview}`, "img/jenniferl.webp", "Jennifer Ledford", "jennifer@laureladulted.org", CORBIN_PHONE, "a3"),

    new Course(Tiers.F, Subjects.M, "#02", "Tuesday", "9:00-9:45", FM_Folder, LONDON_ZOOM, `${FM_Overview}`, "img/mickeyy.webp", "Mickey York", "mickey@laureladulted.org", LONDON_PHONE, "b1"),

    new Course(Tiers.I, Subjects.M, "#02", "Tuesday", "10:30-11:15", IM_Folder, CORBIN_ZOOM, `${IM_Overview}`, "img/erinm.webp", "Erin Moses", "erin@laureladulted.org", CORBIN_PHONE, "b3"),

    new Course(Tiers.I, Subjects.M, "#03", "Tuesday", "5:30-6:15", IM_Folder, CLAY_ZOOM, `${IM_Overview}`, "img/rodneyl.webp", "Rodney Lipps", "rodney@laureladulted.org", CLAY_PHONE, "b11"),

    new Course(Tiers.F, Subjects.M, "#03", "Wednesday", "1:00-1:45", FM_Folder, CORBIN_ZOOM, `${FM_Overview}`, "img/jenniferl.webp", "Jennifer Ledford", "jennifer@laureladulted.org", CORBIN_PHONE, "c5"),

    new Course(Tiers.I, Subjects.M, "#04", "Wednesday", "2:30-3:15", IM_Folder, CORBIN_ZOOM, `${IM_Overview}`, "img/erinm.webp", "Erin Moses", "erin@laureladulted.org", CORBIN_PHONE, "c7"),

    new Course(Tiers.F, Subjects.M, "#04", "Wednesday", "4:00-4:45", FM_Overview, LONDON_ZOOM, `${FM_Overview}`, "img/marks.webp", "Mark Sizemore", "mark@laureladulted.org", LONDON_PHONE, "c9"),

    // following was not signed up for by any instructor
    // new Course("Foundational Math #5", "Thursday", "1:00-1:45", FM_Folder, CORBIN_ZOOM, `${FM_Overview}`, "img/jenniferl.webp", "Jennifer Ledford", "jennifer@laureladulted.org", CORBIN_PHONE),

    new Course(Tiers.I, Subjects.M, "#05", "Thursday", "2:30-3:15", IM_Overview, LONDON_ZOOM, `${IM_Overview}`, "img/marks.webp", "Mark Sizemore", "mark@laureladulted.org", LONDON_PHONE, "d7"),
];

const rlaCourses = [
    new Course(Tiers.I, Subjects.R, "#01", "Monday", "9:45-10:30", IR_Folder, CLAY_ZOOM, `${IR_Overview}`, "img/ryanc.webp", "Ryan Cornett", "ryan@laureladulted.org", CLAY_PHONE, "a2"),

    new Course(Tiers.F, Subjects.R, "#01", "Monday", "11:15-12:00", FR_Folder, LONDON_ZOOM, `${FR_Overview}`, "img/mickeyy.webp", "Mickey York", "mickey@laureladulted.org", LONDON_PHONE, "a4"),

    new Course(Tiers.I, Subjects.R, "#02", "Tuesday", "9:45-10:30", IR_Folder, CLAY_ZOOM, `${IR_Overview}`, "img/ryanc.webp", "Ryan Cornett", "ryan@laureladulted.org", CLAY_PHONE, "b2"),

    new Course(Tiers.F, Subjects.R, "#02", "Tuesday", "11:15-12:00", FR_Folder, LONDON_ZOOM, `${FR_Overview}`, "img/mickeyy.webp", "Mickey York", "mickey@laureladulted.org", LONDON_PHONE, "b4"),

    // new Course("Foundational RLA #3", "Wednesday", "1:45-2:30", FR_Folder, LONDON_ZOOM, `${FR_Overview}`, "img/icon-person.svg", "TBA", "info@laureladulted.org", LONDON_PHONE),

    new Course(Tiers.I, Subjects.R, "#03", "Wednesday", "3:15-4:00", IR_Folder, LONDON_ZOOM, `${IR_Overview}`, "img/rachaelc_v2.webp", "Rachael Chestnut", "rachael@laureladulted.org", LONDON_PHONE, "c8"),

    new Course(Tiers.I, Subjects.R, "#04", "Wednesday", "4:45-5:30", IR_Folder, LONDON_ZOOM, `${IR_Overview}`, "img/rachaelc_v2.webp", "Rachael Chestnut & Dema Hacker", "rachael@laureladulted.org", LONDON_PHONE, "c10"),

    new Course(Tiers.F, Subjects.R, "#04", "Wednesday", "5:30-6:15", FR_Folder, LONDON_ZOOM, `${FR_Overview}`, "img/demah.webp", "Dema Hacker", "dema@laureladulted.org", LONDON_PHONE, "c11"),

    new Course(Tiers.F, Subjects.R, "#05", "Thursday", "1:45-2:30", FR_Folder, KAYLA_ZOOM, `${FR_Overview}`, "img/kaylaj.webp", "Kayla Jones", "kayla.jones@whitley.kyschools.us", WHITLEY_PHONE, "d6"),

    new Course(Tiers.I, Subjects.R, "#05", "Thursday", "3:15-4:00", IR_Folder, LONDON_ZOOM, `${IR_Overview}`, "img/rachaelc_v2.webp", "Rachael Chestnut", "rachael@laureladulted.org", LONDON_PHONE, "d8"),
];

const soc_SciCourses = [
    // new Course("Foundational Soc/Sci #1", "Monday", "1:45-2:30", FS_Folder, LONDON_ZOOM, `${FS_Overview}`, "img/icon-person.svg", "TBA", "info@laureladulted.org", LONDON_PHONE),

    new Course(Tiers.I, Subjects.S, "#01", "Monday", "3:15-4:00", IS_Folder, ZAC_ZOOM, `${IS_Overview}`, "img/zacg.webp", "Zac Gibbins", "zac.gibbins@whitley.kyschools.us", WHITLEY_PHONE, "a8"),

    // new Course("Foundational Soc/Sci #2", "Tuesday", "1:45-2:30", FS_Folder, LONDON_ZOOM, `${FS_Overview}`, "img/icon-person.svg", "TBA", "info@laureladulted.org", LONDON_PHONE),

    new Course(Tiers.I, Subjects.S, "#02", "Tuesday", "3:15-4:00", IS_Folder, ZAC_ZOOM, `${IS_Overview}`, "img/zacg.webp", "Zac Gibbins", "zac.gibbins@whitley.kyschools.us", WHITLEY_PHONE, "b8"),

    new Course(Tiers.F, Subjects.S, "#03", "Tuesday", "4:00-4:45", FS_Folder, "https://us02web.zoom.us/j/86366565815", `${FS_Overview}`, "img/candaces.webp", "Candace Smith", "candace.smith@knox.kyschools.us", KNOX_PHONE, "b9"),

    // new Course("Intermediate Soc/Sci #3", "Tuesday", "4:45-5:30", IS_Folder, LONDON_ZOOM, `${IS_Overview}`, "img/icon-person.svg", "TBA", "info@laureladulted.org", LONDON_PHONE),

    new Course(Tiers.F, Subjects.S, "#04", "Wednesday", "9:00-9:45", FS_Folder, "https://us02web.zoom.us/j/88205176530", `${FS_Overview}`, "img/candaces.webp", "Candace Smith", "candace.smith@knox.kyschools.us", KNOX_PHONE, "c1"),

    new Course(Tiers.I, Subjects.S, "#04", "Wednesday", "10:30-11:15", IS_Folder, CLAY_ZOOM, `${IS_Overview}`, "img/ryanc.webp", "Ryan Cornett", "ryan@laureladulted.org", CLAY_PHONE, "c3"),

    new Course(Tiers.F, Subjects.S, "#05", "Thursday", "9:00-9:45", FS_Folder, "https://us02web.zoom.us/j/87655095797", `${FS_Overview}`, "img/candaces.webp", "Candace Smith", "candace.smith@knox.kyschools.us", KNOX_PHONE, "d1"),

    new Course(Tiers.I, Subjects.S, "#05", "Thursday", "10:30-11:15", IS_Folder, CLAY_ZOOM, `${IS_Overview}`, "img/ryanc.webp", "Ryan Cornett", "ryan@laureladulted.org", CLAY_PHONE, "d3"),
];

function generateSubjectDiv(subject, container, parent) {
    parent.innerHTML = "";
    // COMMENT OUT ANNOUNCEMENT BELOW WHEN NOT IN USE

    // const announcement = document.createElement('h4');
    // announcement.classList.add('announcement');
    // announcement.textContent = "No classes 11/27/2025";
    // parent.appendChild(announcement);

    // COMMENT OUT ANNOUNCEMENT ABOVE WHEN NOT IN USE

    for (let i = 0; i < subject.length; i++) {
    let courseName = document.createElement("h3");
    courseName.setAttribute("class", "course-name");
    courseName.setAttribute("id", subject[i].id);
    courseName.classList.add(getTierSubjectClass(subject[i]));
    courseName.innerText = `${subject[i].tier} ${subject[i].subject} ${subject[i].name}`;
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

function populateCellInfo(course) {
    let cell = document.getElementById(course.grid);
    cell.innerHTML = `${course.tier} ${course.subject}  <sl-icon name="${icons[course.tier][course.subject]}"></sl-icon>`;
    cell.setAttribute('title', `Open the ${course.subject} tab above for more information`);
    cell.setAttribute('data-anchor', course.id);
    const classes = addCellStyling(icons[course.tier][course.subject]);
    let classesArr = classes.split(' ');
    cell.classList.add(classesArr[0], classesArr[1]);
}

function populateOpenCells() {
    openCells.map((cell) => {
        let openCell = document.getElementById(cell);
        openCell.classList.add('ct-es');
        openCell.innerHTML = 'Open &nbsp;<sl-icon name="door-open"></sl-icon>';
    })
}

function populateComingSoonCells() {
    comingSoonCells.map((slot) => {
        let soonSlot = document.getElementById(slot.cell);
        const classes = addCellStyling(icons[slot.tier][slot.subject]);
        let classesArr = classes.split(' ');
        soonSlot.classList.add(classesArr[0], classesArr[1]);
        soonSlot.innerHTML = `COMING SOON! &nbsp;<sl-icon name="${icons[slot.tier][slot.subject]}"></sl-icon>`;
        soonSlot.setAttribute('title', `Open the ${slot.subject} tab above for more information`);
    })
}

function displayQuickGrid() {
    mathCourses.map((course) => populateCellInfo(course));
    rlaCourses.map((course) => populateCellInfo(course));
    soc_SciCourses.map((course) => populateCellInfo(course));
    populateOpenCells();
    populateComingSoonCells();
}

export { mathCourses, rlaCourses, soc_SciCourses as otherCourses, generateSubjectDiv, displayQuickGrid };