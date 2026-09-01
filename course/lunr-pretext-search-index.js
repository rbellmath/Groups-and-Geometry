var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "syllabus",
  "level": "1",
  "url": "syllabus.html",
  "type": "Section",
  "number": "",
  "title": "Course Syllabus",
  "body": " Course Syllabus   Groups and Geometry (MTH 496: Capstone in Mathematics, section 001) for Fall 2026 .     Basic Information      Instructor  Dr. Robert Bell (bellro@msu.edu).    Office Hours  TBD; likely Thursday before or after class    Office Location  C-305 Wells Hall    Class Meetings  TR 10:20-11:40 AM in A-330 WH       Course Description  This course is an introduction to the interplay between two fundamental fields of mathematics: geometry and group theory. The primary connection is that the language of group theory is ideal for describing the symmetries of geometric objects.  In the first part of the course, we will learn the language and techniques of group theory to classify the symmetries of Euclidean and spherical geometry. Later in the course, we will learn how (discrete) groups can themselves be studied as geometric spaces.  Throughout the course, students will practice writing within the discipline of mathematics. Learning how to effectively communicate mathematics in a written format is a primary learning goal.  As a capstone course, a recurring theme will be the interconnectedness of the core courses (e.g., MTH 309, 310, 320) required of all majors in the mathematical sciences.    Prerequisites  Students are expected to have studied linear algebra (MTH 309) at an introductory level. Some experience with abstract algebra (MTH 310) and analysis (MTH 320) is important for understanding how write correct mathematical proofs of theorems in this course.    Textbook and course materials  No textbook is required. Suggested references will be provided. Course notes will be shared at regular intervals.    Piazza   Piazza will be used for online discussion . All questions (except those pertaining to you as an individual student, e.g., your grade in the course) should be posted to Piazza. Sign-up using the access code “symmetry” and your MSU NetID email.    Assessments and Grades  Grades will be determined using the following summative assessments.   Quizzes (30%)  Quizzes will be be given (roughly) every other week. These will occur during class. The topic of the quiz will be announced in advance.    Presentations (30%)  Each student will give two presentations to an audience of peers from this class. Presentations will occur outside of class. A grading rubric will be provided in advance.    Written report (40%)  Each student will write a written report that will be graded at regular intervals to assess progress and improvements. Students will be interviewed by the instructor to assess their understanding.       Course Policies   Attendance  Students are expected to attend all class meetings, to arrive on time, and to actively participate during each 50 minute meeting. Students are responsible for material covered if absent from class. If absent, you will need to obtain missed material or information from your classmates and check Piazza for updates and references to materials posted on D2L.    Use of Cell Phones and Other Devices  Use of cell phones, tablets, laptops, and similar electronic devices are not permitted during class except for the purpose of note taking. Students must be engaged with the class and not be distracted by personal matters, work for this or another courses during class meetings. If you need to take an emergency call or text, please step outside and return when you can.    Use of LLMs or Similar Generative AI Technology  Using Large Language Models (LLMs) or similar generative AI technology to assist with assignments is not permitted. One exception is that you may use generative AI chatbots to search for relevant literature. Anoher exception is that you may use such tools to help you prepare for quizzes, for example to generate exercises. The use of such technology to produce any text for the body of your written report is explicitly forbidden.    Recordings  Students are not permitted to make recordings during lecture without permission from the instructor. Students are expected to follow appropriate University policies and maintain the security of passwords used to access any recorded instructional videos that may be shared on D2L or MSU's MediaSpace. Recordings may not be reproduced, shared with those not enrolled in the class, nor uploaded to another online environment. Doing so may result in disciplinary or legal action.    RCPD and AccessMSU  Michigan State University is committed to providing access and inclusion in all programs, services and activities. Disabled persons should contact the Resource Center for Persons with Disabilities (RCPD) at 517-884-RCPD or by visiting RCPD’s website to request accommodations. Additional communication between the student, instructor, and RCPD specialist may be necessary to ensure an accessible classroom experience.  Please send your Accommodation Letter to your instructor as soon as possible so they can ensure proper facilitation of accommodations. Accommodation Letters are generated and sent from within the AccessMSU student portal. Accommodations are not required to be provided prior to receiving the letter. Students should share their testing accommodation with their instructor at least 7 days prior to the need for the accommodation.  Note: Students affiliated with RCPD prior to June 1, 2026 may have existing Accommodation Letters that were previously sent via email communication with instructors. I can still accept these letters, but you will need to also send your Accommodation Letter via AccessMSU.    "
},
{
  "id": "syllabus-2-1",
  "level": "2",
  "url": "syllabus.html#syllabus-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Groups and Geometry (MTH 496: Capstone in Mathematics, section 001) for Fall 2026 "
},
{
  "id": "notes-week-01",
  "level": "1",
  "url": "notes-week-01.html",
  "type": "Section",
  "number": "",
  "title": "Week 1",
  "body": " Week 1   This is an outline of the topics we covered in the first week of class.     Tuesday 09\/01\/2026  Forthcoming    Thursday 09\/03\/2026  Forthcoming   "
},
{
  "id": "notes-week-02",
  "level": "1",
  "url": "notes-week-02.html",
  "type": "Section",
  "number": "",
  "title": "Week 2",
  "body": " Week 2   Tuesday 09\/08\/2026  Forthcoming    Thursday 09\/10\/2026  Forthcoming   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
