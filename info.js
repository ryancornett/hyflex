const coursesList = ["Number Sense", "Geometry", "Algebra", "Grammar", "Language Arts", "Reading", "Social Studies", "Science"];
const daysList = ["Monday", "Tuesday", "Wednesday", "Thursday"];
const timesList = ["9:00-10:30", "10:30-12:00", "1:00-2:30", "2:30-4:00", "4:00-5:30", "4:30-6:00", "5:00-6:30"];
const linksList = [
    {
        clay: "https://us02web.zoom.us/j/3619478526?pwd=WkJZUUUzdUx3dVp5RVdoV1h0amF0QT09",
        corbin: "https://us02web.zoom.us/j/4974845563?pwd=Q1ErU2gzaW9oNiszYmkyZXRVajRSUT09",
        laurel: "https://us02web.zoom.us/j/6447967863?pwd=aldCSW50bGlPVzhHMi9oczR4QUJUQT09",
        knox: "https://us02web.zoom.us/j/86233937397?pwd=bVhnSWF0NmF6SFRyYmhOSlE3bXlXdz09",
        whitley: "https://us06web.zoom.us/j/83660895039?pwd=NCtBUWNBUTJlazBUeHN0OW9jT2RBUT09"
    },
    {
        chesnut: "https://docs.google.com/document/d/1EEQ88RKRlLGmUWX7I-w4Wm7YQC5TJVCAS_ECEC-n9Zc",
        cornettAlg: "https://docs.google.com/document/d/16PSAURXOOeply26bk4stq4NS-Zm0XQHvUG6KOLUMm7E",
        cornettGra: "https://docs.google.com/document/d/1VxzMq3oCd4XtE9U8i78DGcO6zYqIGMnS",
        gaines: "https://docs.google.com/document/d/1J5qYvq_pgTa2vjvzQ-BEH6NmGWeS_QYW/edit#heading=h.gjdgxs",
        gibbins: "https://docs.google.com/document/d/1eqdCqYwZfu91px41632gvHuG636-bfd2",
        jones: "https://docs.google.com/document/d/1OBO3t2L06DDkJ9ey9yHB_Bmg1QUpboUX",
        ledford: "https://docs.google.com/document/d/1sNDHvD5xIXkQ_tqmWdguvl1L9KnBTL5y",
        lipps: "https://docs.google.com/document/d/1WYkF4sSxJ9EgesBxfhVLGHaJ3iD9ZdIB",
        martin: "https://docs.google.com/document/d/1d1CX0555JBnFl41n6o2FyuiDU_B3YOnluIYxbSGjRo0",
        mosesAlg: "https://docs.google.com/document/d/1kK8JKq7Ft_w_3siKnofJWA5meHYpC4wXnrUoTvJ2AFI",
        mosesGeo: "https://docs.google.com/document/d/1it_ayhDkbsMRkBlMwIAPaEBkWevndAeEi4N9lE0uJT4",
        newquist: "https://docs.google.com/document/d/1EYehhPu-3YI6Ta2a9O_yxSKLGmuBUgP2",
        peters: "https://docs.google.com/document/d/1Ex8_nomM_ex3dmGJarMkSPK9HuBPKCXr",
        sizemore: "https://docs.google.com/document/d/1lBnj1anz5cOa1L5bbV-CUbs2pysiH7Ys"
    }
];

const description = {
    numberSense: "In this class, you'll sharpen your skills with operations, fractions, decimals, percents, and word problems. You'll also work with reading bar graphs, circle graphs, line plots, tables, and other ways of representing data.",
    geometry: "In this class, you'll work on area, perimeter, surface area, and volume formulas. Plus, you'll look at data analysis concepts like mean, median, mode, range, and probability.",
    algebra: "In this class, you'll work on expressions, equations, inequalities, functions, and graphs.",
    grammar: "In this class, you'll learn the science of how Standard American English works. Better command of the language means better command of your audience.",
    rla: "In this class students will learn grammar, reading, and writing skills needed to successfully pass the RLA section of the GED.",
    rlaSS: "By the end of this course, participants will understand social studies concepts, apply social studies concepts, read graphs and charts displaying social studies data, use reasoning, and interpret social studies information",
    reading: "In this class, students will be introduced to various reading foundations and strategy skills to help them learn to read and improve their reading skills.",
    science: "This course will cover various science topics that are presented on the GED Science test.  The topics covered include:  Life Science, Physical Science, Earth Science.",
    socialStudies: "Students will exit this course with necessary skills for passing the GED Social Studies Test. Topics include civics and government, United States history, economics, world geography, and social studies practices."
};

const phoneNumbers = {
    clay: "(606) 599-1230",
    corbin: "(606) 528-0379",
    knox: "(606) 545-6032",
    london: "(606) 878-9134",
    whitley: "(606) 549-1989"
};

let courseNameElement = document.querySelectorAll('.course-name');
let daysElement = document.querySelectorAll('.days');
let timesElement = document.querySelectorAll('.times');
let syllabusElement = document.querySelectorAll('.syllabus-link');
let zoomElement = document.querySelectorAll('.zoom-link');
let descriptionElement = document.querySelectorAll('.description');
let instructorElement = document.querySelectorAll('.first-last');
let emailAddressElement = document.querySelectorAll('.email-address');
let phoneNumberElement = document.querySelectorAll('.phone-number');

export {coursesList, daysList, timesList, linksList, description, phoneNumbers, courseNameElement, daysElement, timesElement, syllabusElement, zoomElement, descriptionElement, instructorElement, emailAddressElement, phoneNumberElement};