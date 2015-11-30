---
layout: page
title:  "Configure the Guide"
---

Work your way through these steps to update 
the `_config.yml` file — this configures the DCgov style template for your specific guide:

- [Set the guide name.](#set-name)
- [Set the `exclude:` entries.](#set-exclude-entries)
- [Register new pages.](#register-new-pages)
- [Update the repository list.](#update-repository-list)
- [Optional: Update `google_analytics_ua:`.](#set-google-analytics)

## <a name="set-name"></a>Set the guide name

The `name:` property appears as the guide's overall title. For example:

~~~
name: {{site.name}}
~~~
{: .language-yaml}

## <a name="set-exclude-entries"></a>Set the `exclude:` entries

Make sure the `exclude:` list contains at least the following files, and add
any other files you might have added that shouldn't appear in the
generated `_site` directory:

~~~
exclude: [".rvmrc", ".rbenv-version", "README.md", "changelog.md"]
~~~
{: .language-yaml}

## <a name="register-new-pages"></a>Register new pages

The `navigation:` list is used to generate the table of contents. For example,
the `navigation:` section of this guide contains:

~~~
navigation:
{% for i in site.navigation %}- text: {{ i.text }}{% if i.url %}
  internal: {{ i.internal }}
  url: {{ i.url }}{% elsif i.glossary %}
  glossary: {{ i.glossary }}{% endif %}
{% endfor %}
~~~
{: .language-yaml}

For internal pages, the url should match the the name of the page's markdown file.
If you would like to include a link to the glossary in the sidebar, add navigation item with a glossary attribute set to true.

## <a name="update-repository-list"></a>Update the repository list

You'll need to update the `repos:` list to reflect the GitHub
repository that will contain your guide. The first of these repositories
should be the repository for the guide itself; it will be used to generate
the _Edit this page_ and _file an issue_ links in the footer.

The `url:` should be `https://github.com/DCgov/MY-NEW-GUIDE`, where
`MY-NEW-GUIDE` is the name you gave your clone of the DCgov/guides-template
repository. For the `description:` property, it's OK to enter something
generic like "main repository." However, if you aren't certain about either
value, it's also OK to enter placeholder text for these properties and change
them later.

The `repos:` entry of this template contains:

~~~
{% for i in site.repos %}
- name: {{ i.name }}
  description: {{ i.description }}
  url: {{ i.url }}
{% endfor %}
~~~
{: .language-yaml}

## <a name="set-google-analytics"></a>Optional: update `google_analytics_ua:`

The `google_analytics_ua:` property can be optionally set to the Google Analytics
account identifier, if there is one.