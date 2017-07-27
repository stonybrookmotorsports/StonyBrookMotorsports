---
layout: page-fullwidth
show_meta: false
title: "Sponsors"
permalink: "/sponsors/"
header: no
---
Stony Brook Motorsports could not be nearly as successful of a team without the generous help and support of our sponsors, friends, and family. Please check out our sponsorship packet and contact us if you're interested in becoming a sponsor:



<div style="text-align: center;">
<a href="{{site.baseurl}}/files/Sponsorship Packet 17-18.pdf" target="_blank" class="button small">2017-2018 Sponsorship Packet</a>
<a href="{{site.baseurl}}/contact/" class="button small success">Contact</a>
</div>

<br>

<ul class="medium-block-grid-4 small-block-grid-2">
{% for sponsor in site.data.sponsors %}
  {% if sponsor.logoURL and sponsor.websiteURL %}
  <li><a href="{{sponsor.websiteURL}}" target="_blank"><img border="0" alt="{{sponsor.name}}" src="{{ site.baseurl }}{{sponsor.logoURL}}" style="float: left;"></a></li>
  {% elsif sponsor.logoURL %}
  <li><img src="{{ site.baseurl }}{{sponsor.logoURL}}"></li>
  {% elsif sponsor.websiteURL %}
  <li><a href="{{sponsor.websiteURL}}" target="_blank">{{sponsor.name}}</a></li>
  {% else %}
  <li>{{sponsor.name}}</li>
  {% endif %}
{% endfor %}
</ul>
