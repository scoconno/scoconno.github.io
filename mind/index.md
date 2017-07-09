---
layout: course
title: Self-Mind

---

# Course Information
+ [Syllabus](Syllabus.pdf)
+ [Philosophy of Mind Resources](/mind/resources)
+ [General Education at NJCU](http://www.njcu.edu/department/general-education)
+ [Signature Assignments at NJCU](http://www.njcu.edu/academics/general-education/signature-assignment-information-students)

## Withdrawal Dates

|         |     | 
| :-------------: | ------------- | 
| July 13-26 | Final day to withdraw from a course(s) for a 50% refund of tuition with a “W” grade(s) at the Registrar’s Office, H-214. |
| July 27-August 7  | Final Day to withdraw from a course(s) for a “W” grade(s) at the Registrar’s Office, H-214.|

## Weekly schedule

Note that the syllabus schedule of work takes precedence.  

<ul>
  {% for page in site.data.mind-week %}
    <li>
     <a href="{{site.baseurl}}/mind/{{page.folder}}/">{{page.title}}</a>
      {{page.content | markdownify}}
    </li>
  {% endfor %}
</ul>
