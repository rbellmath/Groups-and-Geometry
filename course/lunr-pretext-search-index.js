var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "syllabus",
  "level": "1",
  "url": "syllabus.html",
  "type": "Section",
  "number": "",
  "title": "Course Syllabus",
  "body": " Course Syllabus   Groups and Geometry (MTH 496: Capstone in Mathematics, section 001) for Fall 2026 .  The topic of this course is the interplay between geometric symmetry and the algebraic objects (abstract groups) which are ideally suited for the study of symmetry. This course is designed to satisfies the Tier II Writing Requirement (writing within the discipline) for a Bachelor's Degree from MSU. A recurring theme will be the interconnectedness of the core courses (MTH 309, 310, 320) required for a degree in mathematics.     Basic Information      Instructor  Dr. Robert Bell (bellro@msu.edu).    Office Hours  TBD; either Tuesdays or Thursdays    Office Location  C-305 Wells Hall    Class Meetings  TR 10:20 -- 11:40 a.m. in A-330 WH       Course Description  This is an introduction to the interplay between geometries (such as Euclidean, spherical, and hyperbolic geometry) and group theory. In the first part of the course, we will learn how the language and techniques of group theory can be used to classify the symmetries of such geometries. Later in the course, we will learn how (discrete) groups can themselves be studied as geometric spaces. Throughout the course, students will practice writing within the discipline of mathematics.    Prerequisites  Students are expected to have studied linear algebra, abstract algebra, and analysis at an introductory level (such as MTH 309, 310, and 320, respectively). Familiarity with group theory is not assumed.    Textbook and course materials  No textbook is required. Suggested references will be provided. Course notes will be shared.    Piazza   Piazza will be used for online discussion . All questions (except those pertaining to you as an individual student, e.g., your grade in the course) should be posted to Piazza. Sign-up using the access code “symmetry” and your MSU NetID email.    Assessments and Grades  Grades will be determined using the following summative assessments.   Short Quizzes (30%)  Quizzes (25 minutes) be be given (roughly) every other week. This will occur during class.    Presentations (30%)  Each student will give two presentations to an audience of peers from this class. This will occur outside of class.    Written report (40%)  Each student will submit a written report that will be graded at regular intervals to assess progress and improvements. Students will be interviewed by the instructor to assess their understanding.       Course Policies   Attendance  Students are expected to attend all class meetings, to arrive on time, and to actively participate during each 50 minute meeting. Students are responsible for material covered if absent from class. If absent, you will need to obtain missed material or information from your classmates and check Piazza for updates and references to materials posted on D2L.    "
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
