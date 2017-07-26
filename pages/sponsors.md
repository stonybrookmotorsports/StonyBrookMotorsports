---
layout: page-fullwidth
show_meta: false
title: "Sponsors"
permalink: "/sponsors/"
header: no
---
Stony Brook Motorsports could not be nearly as successful of a team without the generous help and support of our sponsors, friends, and family. Below is a list of all of our current sponsors.  <a href="#sponsorus">Interested in sponsoring us?</a>

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

<a name="sponsorus"></a>
<h3>Sponsor Us</h3>

By offering your support, you will be helping future engineers gain important skills and ensuring the team continues to exist for future students to have the same opportunity.  Please check out our [2017-2018 sponsorship packet]({{site.baseurl}}/files/Sponsorship Packet 17-18.pdf){:target="_blank"} for more details, and [contact]({{site.baseurl}}/contact/) us if you're interested in becoming a sponsor.
