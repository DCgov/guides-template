---
layout: page
title: Add a New Page
---
To add new pages, create a 
[Markdown](http://daringfireball.net/projects/markdown/syntax) file in the
`_pages/` directory of the repository. For example, the Markdown text for
this page is
[`_pages/add-a-new-page.md`](https://github.com/DCgov/guides-template/blob/gh-pages/_pages/add-a-new-page.md).

The Markdown document begins with this [YAML front
matter](http://jekyllrb.com/docs/frontmatter/):

~~~
layout: page
title: {{ page.title }}
~~~
{: .language-yaml}

The page will be accessible at `{{ page.path }}`.

## Link to other pages within the guide

Every link to another page _must_ be prefixed with
`{% raw %}{{ site.baseurl }}{% endraw %}`. For example,
this link to [Update the config file]({{ site.baseurl }}/update-the-config-file/)
appears in the Markdown source as:

~~~
{% raw %}[Update the config file]({{ site.baseurl }}/update-the-config-file/){% endraw %}
~~~

## Next steps

Click the _Update the config file_ entry in the table of contents to learn how
to configure your guide.