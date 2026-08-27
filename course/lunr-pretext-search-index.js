var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "syllabus",
  "level": "1",
  "url": "syllabus.html",
  "type": "Section",
  "number": "",
  "title": "Course Syllabus",
  "body": " Course Syllabus   Groups and Geometry (MTH 496: Capstone in Mathematics, section 001) for Fall 2026 .  The topic of this course is the interplay between geometric symmetry and algebraic objects (abstract groups) which are ideally suited for the study of symmetry. This course is designed to satisfies the Tier II Writing Requirement (writing within the discipline) for a Bachelor's Degree from MSU. A recurring theme will be the interconnectedness of the core courses (MTH 309, 310, 320) required for a degree in mathematics.     Basic Information      Instructor  Dr. Robert Bell (bellro@msu.edu).    Office Hours  TBD; either Tuesday or Thursday    Office Location  C-305 Wells Hall    Class Meetings  TR 10:20 -- 11:40 a.m. in A-330 WH    Course Description  This is an introduction to geometrical transformations, e.g., translations, rotations, and reflections, in Euclidean, spherical, and hyperbolic geometry. Groups of such isometric transformations can be studied using abstract group theory, leading to an understanding of these three geometries are related. Later in the course, we will learn how discrete groups can be studied using geometric techniques. Throughout, students will practice writing within the discipline of mathematics.    Prerequisites  Students are expected to have studied linear algebra, abstract algebra, and analysis at an introductory level (such as MTH 309, 310, and 320, respectively). Familiarity with group theory is not assumed.    Textbook and course materials  No textbook is required. Suggested references will be provided in the course notes.    Piazza   Piazza will be used for online discussion . All questions (except those pertaining to you as an individual student, e.g., your grade in the course) should be posted to Piazza. Sign-up using the access code “symmetry” and your MSU NetID email.       Course Overview  Forthcoming      Assessments and Grades  Grades will be determined using the following summative assessments.   Short Quizzes (30%)  Quizzes (25 minutes) will generally be administered every other Thursday class meeting.    Presentations (30%)  Each student will give two short presentations to an audience of peers.    Written report (40%)  Each student will submit a written report that will be graded at regular intervals to assess progress and improvements.      "
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
  "body": " Week 1   This is an outline of the topics we covered in the first week of class.     Monday 08\/31\/2026  Forthcoming    Wednesday 09\/02\/2026  Forthcoming    Friday 09\/04\/2026  Forthcoming   "
},
{
  "id": "notes-week-02",
  "level": "1",
  "url": "notes-week-02.html",
  "type": "Section",
  "number": "",
  "title": "Week 2",
  "body": " Week 2   Monday 09\/06\/2026  Labor Day - No Class Meeting Today    Wednesday  Forthcoming    Friday  Forthcoming   "
},
{
  "id": "homework",
  "level": "1",
  "url": "homework.html",
  "type": "Chapter",
  "number": "",
  "title": "Homework",
  "body": " Homework   Homework assignments will be added at a later time.     "
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
