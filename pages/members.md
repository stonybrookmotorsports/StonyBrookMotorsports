---
layout: page-fullwidth
show_meta: false
title: "Members"
permalink: "/team/members/"
header: no
---
<br>
<ul class="small-block-grid-1 medium-block-grid-3">
{% for member in site.data.members %}
  <li>
      <img src="{{ site.baseurl }}/images/members/{{ member.imageName }}.png" width="250px">
      <h4>{{ member.name }}</h4>
      {% if member.position %}
        <i>{{ member.position}}</i><br>
      {% endif %}
      {% if member.subsystem %}
          <span style="color:#A4A4A4;">Subsystem:</span> {{ member.subsystem}}<br>
      {% endif %}
      {% if member.major %}
        <span style="color:#A4A4A4;">Major:</span> {{member.major}}<br>
      {% endif %}
      {% if member.year %}
        <span style="color:#A4A4A4;">Year:</span> {{ member.year }}<br>
      {% endif %}
      <br><br>
  </li>
{% endfor %}
</ul>
