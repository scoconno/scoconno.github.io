---
layout: course
title: Self-I as Mind

---



# Course Information

+ [Syllabus](Syllabus.pdf)
+ [Philosophy of Mind Resources](/self/resources)
+ [General Education at NJCU](http://www.njcu.edu/department/general-education)
+ [Signature Assignments at NJCU](http://www.njcu.edu/academics/general-education/signature-assignment-information-students)



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
