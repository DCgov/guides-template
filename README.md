## DCgov Guides Template

This repository is at once a skeleton template for DCgov Guides sites and a set of instructions for setting up your own DCgov Guide. 

DCgov guides sites are intended for documenting **best practice standards** (e.g. design, accessibility, analytics, licensing). They may also be used to provide **background information** on project repositories, but you really should try to do so in your repository's README file. [18F's open source style guide](https://pages.18f.gov/open-source-guide/) provides excellent advice for making your projects easy to use and understand!

The template is based on [CFPB/DOCter](https://github.com/CFPB/DOCter)-based, using [Jekyll](http://jekyllrb.com/) as the rendering engine. The guide's text is based on the [18F/guides-template](https://github.com/18F/guides-template).


### Getting started

#### Installing Ruby

You will need [Ruby](https://www.ruby-lang.org) ( > version 2.0 ). To check
whether it's already installed on a UNIX-like system, open up a terminal
window (e.g. Terminal on OS X) and type `ruby -v` at the command prompt. For
example, you should see something similar to the following:

```shell
$ ruby -v
ruby 2.2.3p173 (2015-08-18 revision 51636) [x86_64-darwin14]
```

If the version number is less than 2.0, or instead you see something like:

```shell
$ ruby -v
-bash: ruby: command not found
```

Then Ruby is not installed, and you should choose one of the installation
methods below. [The "Installing Ruby" page of the official
Ruby language web
site](https://www.ruby-lang.org/en/documentation/installation/) explains how
to do this in a number of ways across many different systems.

##### Quickest Ruby install/upgrade for OS X

On OS X, you can use [Homebrew](http://brew.sh/) to install Ruby in
`/usr/local/bin`, which may require you to update your `$PATH` environment
variable:

```shell
$ brew update
$ brew install ruby
```

##### Optional: using a version manager

Whether or not Ruby is already installed, we strongly recommend using a Ruby
version manager such as [rbenv](https://github.com/sstephenson/rbenv) or
[rvm](https://rvm.io/) to help ensure that Ruby version upgrades don't mean
all your [gems](https://rubygems.org/) will need to be rebuilt.

#### Install Dependencies

To install all of the site's dependencies, run the following commands:

```shell
$ gem install bundler
$ bundle install
```

#### Cloning and serving the Guides Template locally

To create a new guide and serve it locally, where `MY-NEW-GUIDE` is the name
of your new repository:

```shell
$ git clone https://github.com/DCgov/guides-template.git MY-NEW-GUIDE
$ cd MY-NEW-GUIDE
$ ./go serve
```

This will launch a running instance at `http://localhost:4000/`.

#### Follow the template instructions

The Guides Template (either [running locally](http://localhost:4000) or the
[published version](https://dcgov.github.io/guides-template/)) will walk you
through the rest of the steps to edit and publish your guide.


## Public Domain

This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the CC0 1.0 Universal public domain dedication. For more information, see [LICENSE.md](https://github.com/DCgov/license/blob/master/LICENSE.md).
