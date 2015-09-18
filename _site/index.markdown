--- layout: default title: Home ---
<div class="posts">

{% for post in paginator.posts %}
<div class="post">

[{{ post.title }}]({{%20post.url%20}}) {.post-title}
======================================

<span class="post-date">{{ post.date | date\_to\_string }}</span> {{
post.content }}

</div>

{% endfor %}

</div>

<div class="pagination">

{% if paginator.next\_page %}
[Older]({{%20site.baseurl%20}}page{{paginator.next_page}}) {% else %}
<span class="pagination-item older">Older</span> {% endif %} {% if
paginator.previous\_page %} {% if paginator.page == 2 %}
[Newer]({{%20site.baseurl%20}}) {% else %}
[Newer]({{%20site.baseurl%20}}page{{paginator.previous_page}}) {% endif
%} {% else %} <span class="pagination-item newer">Newer</span> {% endif
%}

</div>
