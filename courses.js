class Course {
    constructor(name, days, time, syllabus, zoom, description, picture, instructor, email, phone) {
        Object.assign(this, { name, days, time, syllabus, zoom, description, picture, instructor, email, phone })
    }
}

const COURSE01 = new Course("Number Sense", "Monday & Tuesday", "9:00-10:00", "https://docs.google.com/document/d/1lBnj1anz5cOa1L5bbV-CUbs2pysiH7Ys/edit#heading=h.gjdgxs", "https://us02web.zoom.us/j/6447967863?pwd=aldCSW50bGlPVzhHMi9oczR4QUJUQT09", "In this class, you'll sharpen your skills with operations, fractions, decimals, percents, and word problems. You'll also work with reading bar graphs, circle graphs, line plots, tables, and other ways of representing data.", "img/marks.webp", "Mark Sizemore", "mark@laureladulted.org", "(606) 878-9134");

const COURSE02 = new Course("Algebra", "Tuesday", "5:00-6:30", "https://docs.google.com/document/d/1WYkF4sSxJ9EgesBxfhVLGHaJ3iD9ZdIB/edit?usp=share_link&ouid=104017723111487459394&rtpof=true&sd=true", "https://us02web.zoom.us/j/3619478526?pwd=WkJZUUUzdUx3dVp5RVdoV1h0amF0QT09", "In this class, you'll work on expressions, equations, inequalities, functions, and graphs.", "img/rodneyl.webp", "Rodney Lipps", "rodney@laureladulted.org", "(606) 599-1230");

const COURSE03 = new Course("Math Foundations", "Wednesday", "10:30-12:00", "https://docs.google.com/document/d/12AWYyoIoSb8FPdp5ccw2wBdIlJfXGUzW", "https://us02web.zoom.us/j/4974845563?pwd=Q1ErU2gzaW9oNiszYmkyZXRVajRSUT09", "This course will introduce learners to the concepts and skills necessary to progress to the GED mathematics exam or improve applied mathematics skills for the workforce or post-secondary education. <p style='color:red; font-weight:200; font-size: 0.8rem'><b>No class May 10 or May 17</b></p>", "img/jenniferl.webp", "Jennifer Ledford", "jennifer@laureladulted.org", "(606) 528-0379");

const COURSE04 = new Course("Geometry", "Thursday", "1:00-2:30", "https://docs.google.com/document/d/1EEQ88RKRlLGmUWX7I-w4Wm7YQC5TJVCAS_ECEC-n9Zc", "https://us02web.zoom.us/j/6447967863?pwd=aldCSW50bGlPVzhHMi9oczR4QUJUQT09", "In this class, you'll work on area, perimeter, surface area, and volume formulas. Plus, you'll look at data analysis concepts like mean, median, mode, range, and probability.", "img/rachaelc.webp", "Rachael Chestnut", "rachael@laureladulted.org", "(606) 878-9134");

const COURSE05 = new Course("Algebra", "Thursday", "10:30-12:00", "https://docs.google.com/document/u/0/d/1EEQ88RKRlLGmUWX7I-w4Wm7YQC5TJVCAS_ECEC-n9Zc", "https://us02web.zoom.us/j/6447967863?pwd=aldCSW50bGlPVzhHMi9oczR4QUJUQT09", "In this class, you'll work on expressions, equations, inequalities, functions, and graphs.", "img/erinm.webp", "Erin Moses", "erin@laureladulted.org", "(606) 528-0379");

let mathCourses = [COURSE01, COURSE02, COURSE03, COURSE04, COURSE05];

const COURSE06 = new Course("Grammar & Writing", "Monday", "10:30-12:00", "https://docs.google.com/document/d/1cFHIMcdR3V1Nz8zG_VCGzIbAWj6NQDhp", "https://us02web.zoom.us/j/3619478526?pwd=WkJZUUUzdUx3dVp5RVdoV1h0amF0QT09", "In this class, you'll learn how to write essays and the science of how Standard American English works. Better command of the language means better command of your audience.", "img/ryanc.webp", "Ryan Cornett", "ryan@laureladulted.org", "(606) 599-1230");

// const COURSE07 = new Course("Language Arts/Social Studies", "Monday", "4:00-5:30", "https://docs.google.com/document/d/1J5qYvq_pgTa2vjvzQ-BEH6NmGWeS_QYW", "https://us02web.zoom.us/j/6447967863?pwd=aldCSW50bGlPVzhHMi9oczR4QUJUQT09", "By the end of this course, participants will understand social studies concepts, apply social studies concepts, read graphs and charts displaying social studies data, use reasoning, and interpret social studies information", "img/person_icon.webp", "Robert Gaines", "robert@laureladulted.org", "(606) 878-9134");

const COURSE08 = new Course("Phonics Fundamentals", "Thursday", "1:00-2:30", "https://drive.google.com/file/d/1ynjejcMlSgcoryKYJt0Dsrb7hsFIuKiq", "https://us06web.zoom.us/j/89007426822", "This course will introduce learners to the concepts and skills necessary to learn/improve reading skills. The course is taught using lesson plans based on the College and Career Readiness Standards.", "img/kaylaj.webp", "Kayla Jones", "kayla.jones@whitley.kyschools.us", "(606) 549-1989");

let englishCourses = [COURSE06, COURSE08]

// const COURSE09 = new Course("Language Arts/Social Studies", "Monday", "4:00-5:30", "https://docs.google.com/document/d/1J5qYvq_pgTa2vjvzQ-BEH6NmGWeS_QYW", "https://us02web.zoom.us/j/6447967863?pwd=aldCSW50bGlPVzhHMi9oczR4QUJUQT09", "By the end of this course, participants will understand social studies concepts, apply social studies concepts, read graphs and charts displaying social studies data, use reasoning, and interpret social studies information", "img/person_icon.webp", "Robert Gaines", "robert@laureladulted.org", "(606) 878-9134");

const COURSE10 = new Course("Facilitated Lab", "Tuesday", "10:00-12:00", "https://drive.google.com/file/d/1snMiuVuAVjIbC3TIE_bYlpJbifsSvSpG", "https://us02web.zoom.us/j/86233937397?pwd=bVhnSWF0NmF6SFRyYmhOSlE3bXlXdz09", "Tutoring in all four subject areas (language arts, math, science, social studies), catering to what skills you need to build and improve to pass the GED.", "img/dellam.jpg", "Della Martin", "della.martin@knox.kyschools.us", "(606) 545-6032");

const COURSE11 = new Course("Social Studies", "Wednesday & Thursday", "10:30-12:00", "https://docs.google.com/document/d/1Ex8_nomM_ex3dmGJarMkSPK9HuBPKCXr", "https://us02web.zoom.us/j/89829217809?pwd=T1VSQ1A3S2wyTnRKZ1BHQUVDd0RRUT09", "Students will exit this course with necessary skills for passing the GED Social Studies Test. Topics include civics and government, United States history, economics, world geography, and social studies practices.", "img/person_icon.webp", "Austin Peters", "austin.peters@knox.kyschools.us", "(606) 545-6032");

const GIBBINS_OPEN_LAB = new Course("Open Lab", "Thursday", "2:00-4:00", "https://docs.google.com/document/d/10uEX9Xf5Q0MitRv7AOZkg2TrJXN-YPirOFLV5Y4nOFo", "https://us06web.zoom.us/j/83660895039?pwd=NCtBUWNBUTJlazBUeHN0OW9jT2RBUT09", "Do you have a math skill you want extra practice with? Is there a science idea you want to explore? Want a refresher on a social studies concept? Maybe even a quick boot camp with reading and writing strategies? Any topic, any subject, your choice. Just let your instructor know what you need when you join.", "img/zacg.webp", "Zac Gibbins", "zac.gibbins@whitley.kyschools.us", "(606) 549-1989");

let otherCourses = [COURSE10, COURSE11, GIBBINS_OPEN_LAB]

function generateSubjectDiv(subject, container, parent) {
parent.innerHTML = "";
for (let i = 0; i < subject.length; i++) {
    let courseName = document.createElement("h3");
    courseName.setAttribute("class", "course-name");
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
    syllabusLink.innerHTML = `<a href = "${subject[i].syllabus}">Course Syllabus</a>`;
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

export { mathCourses, englishCourses, otherCourses, generateSubjectDiv };