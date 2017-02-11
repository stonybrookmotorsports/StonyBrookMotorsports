---
layout: page-fullwidth
show_meta: false
title: "Sponsors"
permalink: "/sponsors/"
header: no
---
Stony Brook Motorsports could not be nearly as successful of a team without the generous help and support of our sponsors, friends, and family. Below is a list of all of our current sponsors. Check out our [2016-2017 sponsorship packet](https://drive.google.com/open?id=0B_n_QnoqnnU7NjZ5c2tZUWZZcDg){:target="_blank"} for more details.  Please [contact]({{site.baseurl}}/contact/) us if you're interested in becoming a sponsor or have any questions.

<br>

<ul class="medium-block-grid-4 small-block-grid-2" style="width:90%; margin:auto;">
  <li><img src="{{ site.baseurl }}/images/sponsors/SponsorshipPacketpg1.jpg" alt="sponsorpacket" style="border:1px solid black"></li>
  <li><img src="{{ site.baseurl }}/images/sponsors/SponsorshipPacketpg2.jpg" alt="sponsorpacket" style="border:1px solid black"></li>
  <li><img src="{{ site.baseurl }}/images/sponsors/SponsorshipPacketpg3.jpg" alt="sponsorpacket" style="border:1px solid black"></li>
  <li><img src="{{ site.baseurl }}/images/sponsors/SponsorshipPacketpg4.jpg" alt="sponsorpacket" style="border:1px solid black"></li>
</ul>

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
