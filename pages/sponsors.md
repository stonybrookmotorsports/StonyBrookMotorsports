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

By offering your support, you will be helping future engineers gain important skills and ensuring the team continues to exist for future students to have the same opportunity.  To show our appreciation, some of the ways we recognize our sponsors include:
<ul>  
<li>name/logo on our website, team shirt, trailer, and vehicles</li>  
<li>recognition at on-campus and community events</li>  
<li>recognition at SAE competitions attended by roughly 1250 students and 1000 professionals and onlookers</li>  
<li>tour of the machine shop and updates on the status of the car</li>  
</ul>

Please check out our [2016-2017 sponsorship packet](https://drive.google.com/open?id=0B_n_QnoqnnU7NjZ5c2tZUWZZcDg){:target="_blank"} for more details, and [contact]({{site.baseurl}}/contact/) us if you're interested in becoming a sponsor.

<br>

<ul class="medium-block-grid-3 small-block-grid-1" style="width:100%; margin:auto;">
  <li><div><img src="{{ site.baseurl }}/images/sponsorPage/panel.jpg" ><div><I>Sponsor logos</I></div></div></li>
  <li><div><img src="{{ site.baseurl }}/images/sponsorPage/involvement.jpg" ><div><I>Campus Involvement Fair</I></div></div></li>
  <li><div><img src="{{ site.baseurl }}/images/sponsorPage/holiday.jpg" ><div><I>Three Village Holiday Parade</I></div></div></li>
  <li><div><img src="{{ site.baseurl }}/images/sponsorPage/admitted.jpg" ><div><I>Admitted Students Day</I></div></div></li>
  <li><div><img src="{{ site.baseurl }}/images/sponsorPage/homecoming.jpg" ><div><I>Wolfstock homecoming barbeque</I></div></div></li>
  <li><div><img src="{{ site.baseurl }}/images/sponsorPage/iab.jpg" ><div><I>Industrial Advisory Board</I></div></div></li>
</ul>
