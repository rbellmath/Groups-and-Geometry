var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "syllabus",
  "level": "1",
  "url": "syllabus.html",
  "type": "Section",
  "number": "",
  "title": "Course Syllabus",
  "body": " Course Syllabus   Groups and Geometry (MTH 496: Capstone in Mathematics, section 001) for Fall 2026 .  The topic of this course is the interplay between geometric symmetry and algebraic objects (abstract groups) which are ideally suited for the study of symmetry. This course is designed to satisfies the Tier II Writing Requirement (writing within the discipline) for a Bachelor's Degree from MSU. A recurring theme will be the interconnectedness of the core courses (MTH 309, 310, 320) required for a degree in mathematics.     Basic Information      Instructor  Dr. Robert Bell (bellro@msu.edu).    Office Hours  TBD; either Tuesday or Thursday    Office Location  C-305 Wells Hall    Class Meetings  TR 10:20 -- 11:40 a.m. in A-330 WH    Course Description  This is an introduction to geometrical transformations, e.g., translations, rotations, and reflections, in Euclidean, spherical, and hyperbolic geometry. Groups of such isometric transformations can be studied using abstract group theory, leading to an understanding of these three geometries are related. Later in the course, we will learn how discrete groups can be studied using geometric techniques. Throughout, students will practice writing within the discipline of mathematics.    Prerequisites  Students are expected to have studied linear algebra, abstract algebra, and analysis at an introductory level (such as MTH 309, 310, and 320, respectively). Familiarity with group theory is not assumed.    Textbook and course materials  No textbook is required. Suggested references will be provided in the course notes.       Course Overview        Assessments and Grades  Grades will be determined using the following summative assessments.   Short Quizzes (30%)  Short (20 minute) quizzes will be administered on a regular basis during class meetings.    Presentations (30%)  Each student will give two short presentations to an audience of peers.    Written report (40%)  Each student will submit a written report that will be graded at regular intervals to assess progress and improvements.      "
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
  "body": " Week 1   This is an outline of the topics we covered in the first week of class.     Monday 8\/22      Wednesday 8\/24      Friday 8\/26     "
},
{
  "id": "notes-week-02",
  "level": "1",
  "url": "notes-week-02.html",
  "type": "Section",
  "number": "",
  "title": "Week 2",
  "body": " Week 2   Monday      Wednesday      Friday     "
},
{
  "id": "activity-01-intro-activity",
  "level": "1",
  "url": "activity-01-intro-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "Introduction Activity",
  "body": " Introduction Activity    This is the introduction to the activity.      This is the first exercise.    "
},
{
  "id": "activity-01-intro-activity-3",
  "level": "2",
  "url": "activity-01-intro-activity.html#activity-01-intro-activity-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  This is the first exercise.   "
},
{
  "id": "handouts",
  "level": "1",
  "url": "handouts.html",
  "type": "Chapter",
  "number": "",
  "title": "Handouts",
  "body": " Handouts   These are copies of handouts distributed during lectures.     "
},
{
  "id": "homework",
  "level": "1",
  "url": "homework.html",
  "type": "Chapter",
  "number": "",
  "title": "Homework",
  "body": " Homework   Homework assignments are found here.     "
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
