---
layout: course
title: Metaphysics
---

# Course Information

+ [Syllabus](Syllabus.pdf)
+ [Metaphysics links](https://pegasus.cc.ucf.edu/~janzb/metaphysics/)


## Withdrawal Dates

|         |     | 
| :-------------: | ------------- | 
| September 11 | Final day to drop course(s) for 100% refund of tuition online through self-service on GothicNet or at the Registrar’s Office, 9:00 a.m. to 7:00 p.m. Canceled courses are dropped by computer for 100% refund. |
| October 2 | Final day to withdraw from a course(s) for a 50% refund of tuition with a “W” grade(s) at the Registrar’s Office, H-214. |
| November 1  | Final Day to withdraw from a course(s) for a “W” grade(s) at the Registrar’s Office, H-214.|

## Modules

Please refer to the syllabus for a weekly schedule of readings and assignments. All changes will be announaced through Blackboard. 

<ul>
  {% for page in site.data.metaphysics-week %}
    <li>
     <a href="{{site.baseurl}}/metaphysics/{{page.folder}}/">{{page.title}}</a>
      {{page.content | markdownify}}
    </li>
  {% endfor %}
</ul>
