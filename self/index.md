---
layout: course
title: Self-Mind

---

<img src="{{site.baseurl}}/rosa.Aristotle" alt="Aristotle and Homer">

# Course Information

+ [Syllabus](Syllabus.pdf)
+ [Philosophy of Mind Resources](/self/resources)
+ [General Education at NJCU](http://www.njcu.edu/department/general-education)
+ [Signature Assignments at NJCU](http://www.njcu.edu/academics/general-education/signature-assignment-information-students)
+ Successfully completing this course satisfies the following General Education requirements: 
	+ One Tier 2 requirement. 
	+ One Critical Thinking and Problem Solving requirement (for students entering NJCU from fall 2021 onwards).
	+ One Written Communication requirement (for students entering NJCU from fall 2021 onwards).
	+ One Language, Literary, and Cultural Studies requirement (for students who entered NJCU before fall 2021). 


## Withdrawal Dates for Summer I 2022  

|         	 |     | 
| :-------------: | ------------- | 
| May 18, 2022| Final day to drop course(s) for 100% refund of tuition online through self-service on GothicNet or at the Registrar’s Office, 9:00 a.m. to 7:00 p.m. Canceled courses are dropped by computer for 100% refund. |
| May 25, 2022| Final day to withdraw from a course(s) for a 50% refund of tuition with a “W” grade(s) at the Registrar’s Office, H-214. |
| June 6, 2022 | Final Day to withdraw from a course(s) for a “W” grade(s) at the Registrar’s Office, H-214.|

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
