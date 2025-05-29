```twig
  {% embed 'duchess:upcoming-events-card' with {
    title: 'Cancer Screening Research Forum',
    location: 'Regina',
    date: 'October 13, 2023',
    linkHref: '#',
    } %}
    {% block description &}
    {% endblock %}
  {% endembed %}
```
