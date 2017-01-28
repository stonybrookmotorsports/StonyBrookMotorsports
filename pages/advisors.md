---
layout: page
show_meta: false
title: "Faculty Advisors"
permalink: "/about/advisors/"
header: no
sidebar: left
sidebarCategory: About
categoryLink: "/about/"

advisors:
  - Name: Noah Machtay, Ph.D., P.E.
    imageName: Noah
  - Name: Henry Honigman
    imageName: Henry
  - Name: Bob Martin
    imageName: Bob
---
<br>
<ul class="small-block-grid-1 medium-block-grid-2">
{% for advisor in page.advisors %}
  <li>
    <img src="{{ site.baseurl }}/images/advisors/{{ advisor.imageName }}.png"><br>
    <h3>{{advisor.Name}}</h3><br><br>   
  </li>
{% endfor %}
</ul>
