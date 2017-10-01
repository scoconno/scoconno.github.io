---
layout: course
title: Self-Mind

---

# Course Information

There are two sections of this course, one that meets in person and one that meets online. Please click the relevant syllabus for your course. 

+ [Syllabus for M & W section](Syllabus.pdf)
+ [Syllabus for online section](SyllabusFO.pdf)
+ [Philosophy of Mind Resources](/mind/resources)
+ [General Education at NJCU](http://www.njcu.edu/department/general-education)
+ [Signature Assignments at NJCU](http://www.njcu.edu/academics/general-education/signature-assignment-information-students)

## Withdrawal Dates

|         	 |     | 
| :-------------: | ------------- | 
| September 11 | Final day to drop course(s) for 100% refund of tuition online through self-service on GothicNet or at the Registrar’s Office, 9:00 a.m. to 7:00 p.m. Canceled courses are dropped by computer for 100% refund. |
| October 2 | Final day to withdraw from a course(s) for a 50% refund of tuition with a “W” grade(s) at the Registrar’s Office, H-214. |
| November 1  | Final Day to withdraw from a course(s) for a “W” grade(s) at the Registrar’s Office, H-214.|

## Materials

Please refer to the syllabus for a weekly schedule of readings and assignments. Changes will be announced through Blackboard. 

<ul>
  {% for page in site.data.mind-week %}
    <li>
     <a href="{{site.baseurl}}/mind/{{page.folder}}/">{{page.title}}</a>
      {{page.content | markdownify}}
    </li>
  {% endfor %}
</ul>
