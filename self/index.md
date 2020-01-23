---
layout: course
title: Self-Mind

---

# Course Information

+ [Syllabus for Winter 2020 section](Syllabus.pdf)
+ [Syllabus for Spring 2020 section](SyllabusM.pdf)
+ [Philosophy of Mind Resources](/self/resources)
+ [General Education at NJCU](http://www.njcu.edu/department/general-education)
+ [Signature Assignments at NJCU](http://www.njcu.edu/academics/general-education/signature-assignment-information-students)

## Withdrawal Dates for Spring 2020 Section (Ignore for Winter Section)

|         	 |     | 
| :-------------: | ------------- | 
| January, 27| Final day to drop course(s) for 100% refund of tuition online through self-service on GothicNet or at the Registrar’s Office, 9:00 a.m. to 7:00 p.m. Canceled courses are dropped by computer for 100% refund. |
| February, 18 | Final day to withdraw from a course(s) for a 50% refund of tuition with a “W” grade(s) at the Registrar’s Office, H-214. |
| April, 1 | Final Day to withdraw from a course(s) for a “W” grade(s) at the Registrar’s Office, H-214.|

## Materials

Please refer to the syllabus for a weekly schedule of readings and assignments. Changes will be announced through Blackboard. 

<ul>
  {% for page in site.data.mind-week %}
    <li>
     <a href="{{site.baseurl}}/self/{{page.folder}}/">{{page.title}}</a>
      {{page.content | markdownify}}
    </li>
  {% endfor %}
</ul>
