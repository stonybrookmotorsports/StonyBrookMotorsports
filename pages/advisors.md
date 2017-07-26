---
layout: page-fullwidth
show_meta: false
title: "Faculty Advisors"
permalink: "/team/advisors/"
header: no


advisors:
  - Name: Noah Machtay, Ph.D., P.E.
    imageName: Noah
  - Name: Rafael Tejada
    imageName: Rafael
    position: Machine Maintenance and Fabrication Advisor
  - Name: Henry Honigman
    imageName: Henry
  - Name: Joe Schurz
    imageName: Joe
  - Name: Bob Martin
    imageName: Bob
---
<br>
<ul class="small-block-grid-1 medium-block-grid-3">
{% for advisor in page.advisors %}
  <li>
    <img src="{{ site.baseurl }}/images/advisors/{{ advisor.imageName }}.png" width="250px"><br>
    <h4>{{advisor.Name}}</h4>
    {% if advisor.position %}
      <i>{{ advisor.position}}</i><br>
    {% endif %}
  <br><br>
  </li>

{% endfor %}
</ul>
