---
layout: page
title:  "Configure the guide"
---

Work your way through these steps to prepare your GitHub repository:

- [Create a new local repository.](#create-local-repo)
- [Set up SSH access to GitHub.](#set-up-ssh)
- [Create a new GitHub repository.](#create-repo)

## <a name="create-local-repo"></a>Create a new local repository

Once you've got the `_config.yml` file up to date, detach your new
guide's history from the template's. Do this by replacing the
original local Git repository — the one your guide inherited — from the template with a
completely new local repository, which won't contain the history from the
template and will become the starting point for your new GitHub repository.

At this point, you can safely delete all of the pages (in the _pages folder) and glossary terms (in the glossary.yaml file of the _data folder) you have no need for.

In the top-level directory, run `bundle exec jekyll serve --watch --baseurl ''` to preview your guide locally. It will be accessible by pointing your browser to [http://localhost:4000/](http://localhost:4000/).

When you are ready, execute the following commands to create your new guide:

```
git add .
git commit -m 'Initial commit'
```

## <a name="set-up-ssh"></a>Set up SSH access to GitHub

You may want to [set up SSH access to
GitHub](https://help.github.com/articles/generating-ssh-keys/) if you haven't
already— this way you won't need to enter your password and two-factor authentication
code every time you push changes to GitHub. Otherwise, you can use
`https://github.com/DCgov/` URLs to access 18F repos.

## <a name="create-repo"></a>Create a new GitHub repository

Now you're ready to [create a new GitHub
repository](https://github.com/organizations/DCgov/repositories/new). You'll
want to set the `Public` attribute under the **Team** section and add a
fitting `Description`.

Do _not_ select **Initialize this repository with a README**, **Add
.gitignore**, or **Add a license**. Instead, update the `README.md` file in
your own, local repository, as necessary. Your local repository also already has
`.gitignore` and `LICENSE.md` files.

After submitting the form to create a new repository, you'll see GitHub's
instructions to create a local repository and push your changes up to it. You can ignore these instructions. Instead, do the following, replacing `MY-NEW-GUIDE` with the name of your guide's repository:

```
# If you have SSH set up:
$ git remote add origin git@github.com:DCgov/MY-NEW-GUIDE.git

# Otherwise:
$ git remote add origin https://github.com/DCgov/MY-NEW-GUIDE.git

$ git push -u origin gh-pages
```

Note that you can update the description and add a website link to the
repository after creating it.

## Next steps

Once you've finished the steps to create your new guide repo and push it
to GitHub, click the _Post Your Guide_ entry in the table of contents for the
final steps to publish your guide.
