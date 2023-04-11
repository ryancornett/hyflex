let mathCourses = [
    {name: "Number Sense",
    days: "Monday & Tuesday",
    time: "9:00-10:00",
    syllabus: "https://docs.google.com/document/d/1lBnj1anz5cOa1L5bbV-CUbs2pysiH7Ys/edit#heading=h.gjdgxs",
    zoom: "https://us02web.zoom.us/j/6447967863?pwd=aldCSW50bGlPVzhHMi9oczR4QUJUQT09",
    description: "In this class, you'll sharpen your skills with operations, fractions, decimals, percents, and word problems. You'll also work with reading bar graphs, circle graphs, line plots, tables, and other ways of representing data.",
    picture: "img/marks.jpg",
    instructor: "Mark Sizemore",
    email: "mark@laureladulted.org",
    phone: "(606) 878-9134"
    },

    {name: "Algebra",
    days: "Tuesday",
    time: "5:00-6:30",
    syllabus: "https://docs.google.com/document/d/1WYkF4sSxJ9EgesBxfhVLGHaJ3iD9ZdIB/edit?usp=share_link&ouid=104017723111487459394&rtpof=true&sd=true",
    zoom: "https://us02web.zoom.us/j/3619478526?pwd=WkJZUUUzdUx3dVp5RVdoV1h0amF0QT09",
    description: "In this class, you'll work on expressions, equations, inequalities, functions, and graphs.",
    picture: "img/rodneyl.jpg",
    instructor: "Rodney Lipps",
    email: "rodney@laureladulted.org",
    phone: "(606) 599-1230"
    },

    {name: "Number Sense",
    days: "Wednesday",
    time: "10:30-12:00",
    syllabus: "https://docs.google.com/document/d/1sNDHvD5xIXkQ_tqmWdguvl1L9KnBTL5y",
    zoom: "https://us02web.zoom.us/j/4974845563?pwd=Q1ErU2gzaW9oNiszYmkyZXRVajRSUT09",
    description: "In this class, you'll sharpen your skills with operations, fractions, decimals, percents, and word problems. You'll also work with reading bar graphs, circle graphs, line plots, tables, and other ways of representing data.",
    picture: "img/jenniferl.jpg",
    instructor: "Jennifer Ledford",
    email: "jennifer@laureladulted.org",
    phone: "(606) 528-0379"
    },
    
    {name: "Geometry",
    days: "Thursday",
    time: "1:00-2:30",
    syllabus: "https://docs.google.com/document/d/1EEQ88RKRlLGmUWX7I-w4Wm7YQC5TJVCAS_ECEC-n9Zc",
    zoom: "https://us02web.zoom.us/j/6447967863?pwd=aldCSW50bGlPVzhHMi9oczR4QUJUQT09",
    description: "In this class, you'll work on area, perimeter, surface area, and volume formulas. Plus, you'll look at data analysis concepts like mean, median, mode, range, and probability.",
    picture: "img/rachaelc.jpg",
    instructor: "Rachael Chestnut",
    email: "rachael@laureladulted.org",
    phone: "(606) 878-9134"
    },
    
    {name: "Algebra",
    days: "Thursday",
    time: "10:30-12:00",
    syllabus: "https://docs.google.com/document/u/0/d/1EEQ88RKRlLGmUWX7I-w4Wm7YQC5TJVCAS_ECEC-n9Zc",
    zoom: "https://us02web.zoom.us/j/6447967863?pwd=aldCSW50bGlPVzhHMi9oczR4QUJUQT09",
    description: "In this class, you'll work on expressions, equations, inequalities, functions, and graphs.",
    picture: "img/erinm.jpg",
    instructor: "Erin Moses",
    email: "erin@laureladulted.org",
    phone: "(606) 528-0379"
    }
];

let englishCourses = [
    {name: "Grammar & Writing",
    days: "Monday",
    time: "10:30-12:00",
    syllabus: "https://docs.google.com/document/d/1VxzMq3oCd4XtE9U8i78DGcO6zYqIGMnS/edit?usp=share_link&ouid=115847489402002050925&rtpof=true&sd=true",
    zoom: "https://us02web.zoom.us/j/3619478526?pwd=WkJZUUUzdUx3dVp5RVdoV1h0amF0QT09",
    description: "In this class, you'll learn the science of how Standard American English works. Better command of the language means better command of your audience.",
    picture: "img/ryanc.jpg",
    instructor: "Ryan Cornett",
    email: "ryan@laureladulted.org",
    phone: "(606) 599-1230"
    },
    
    {name: "Language Arts/Social Studies",
    days: "Monday",
    time: "4:00-5:30",
    syllabus: "https://docs.google.com/document/d/1J5qYvq_pgTa2vjvzQ-BEH6NmGWeS_QYW",
    zoom: "https://us02web.zoom.us/j/6447967863?pwd=aldCSW50bGlPVzhHMi9oczR4QUJUQT09",
    description: "By the end of this course, participants will understand social studies concepts, apply social studies concepts, read graphs and charts displaying social studies data, use reasoning, and interpret social studies information",
    picture: "img/student.jpg",
    instructor: "Robert Gaines",
    email: "robert@laureladulted.org",
    phone: "(606) 878-9134"
    },
    
    {name: "Reading",
    days: "Thursday",
    time: "1:00-2:30",
    syllabus: "https://docs.google.com/document/d/1OBO3t2L06DDkJ9ey9yHB_Bmg1QUpboUX/edit#heading=h.gjdgxs",
    zoom: "https://us06web.zoom.us/j/89007426822",
    description: "In this class, students will be introduced to various reading foundations and strategy skills to help them learn to read and improve their reading skills.",
    picture: "img/kaylaj.jpg",
    instructor: "Kaya Jones",
    email: "kayla.jones@whitley.kyschools.us",
    phone: "(606) 549-1989"
    }
];

let otherCourses = [
    {name: "Language Arts/Social Studies",
    days: "Monday",
    time: "4:00-5:30",
    syllabus: "https://docs.google.com/document/d/1J5qYvq_pgTa2vjvzQ-BEH6NmGWeS_QYW",
    zoom: "https://us02web.zoom.us/j/6447967863?pwd=aldCSW50bGlPVzhHMi9oczR4QUJUQT09",
    description: "By the end of this course, participants will understand social studies concepts, apply social studies concepts, read graphs and charts displaying social studies data, use reasoning, and interpret social studies information",
    picture: "img/student.jpg",
    instructor: "Robert Gaines",
    email: "robert@laureladulted.org",
    phone: "(606) 878-9134"
    },

    {name: "Facilitated Lab",
    days: "Tuesday",
    time: "10:00-12:00",
    syllabus: "google.com",
    zoom: "https://us02web.zoom.us/j/86233937397?pwd=bVhnSWF0NmF6SFRyYmhOSlE3bXlXdz09",
    description: "Facilitated Lab is a...",
    picture: "img/student.jpg",
    instructor: "Della Martin",
    email: "della.martin@knox.kyschools.us",
    phone: "(606) 545-6032"
    },

    {name: "Social Studies",
    days: "Wednesday & Thursday",
    time: "10:30-12:00",
    syllabus: "https://docs.google.com/document/d/1Ex8_nomM_ex3dmGJarMkSPK9HuBPKCXr",
    zoom: "https://us02web.zoom.us/j/89829217809?pwd=T1VSQ1A3S2wyTnRKZ1BHQUVDd0RRUT09",
    description: "Students will exit this course with necessary skills for passing the GED Social Studies Test. Topics include civics and government, United States history, economics, world geography, and social studies practices.",
    picture: "img/student.jpg",
    instructor: "Austin Peters",
    email: "austin.peters@knox.kyschools.us",
    phone: "(606) 545-6032"
    },

    {name: "Open Lab",
    days: "Thursday",
    time: "2:00-4:00",
    syllabus: "google.com",
    zoom: "https://us06web.zoom.us/j/83660895039?pwd=NCtBUWNBUTJlazBUeHN0OW9jT2RBUT09",
    description: "Open Lab is a...",
    picture: "img/student.jpg",
    instructor: "Zac Gibbins",
    email: "zac.gibbins@whitley.kyschools.us",
    phone: "(606) 549-1989"
    }
];

export { mathCourses, englishCourses, otherCourses };