---
layout: page
title:  "GitHub Setup"
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

When you are ready, execute the following commands to create your new guide:

~~~
$ git add .
$ git commit -m 'Initial commit'
~~~
{: .language-shell}

You can also do all of the above in one step by running the following command from the top-level directory of your repository:

~~~
$ ./go create_guide
~~~
{: .language-shell}

To preview your guide locally before making any commits, run the following from the same directory and point your web browser to [http://localhost:4000/](http://localhost:4000/):

~~~
$ ./go serve
~~~
{: .language-shell}

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

~~~
# If you have SSH set up:
$ git remote add origin git@github.com:DCgov/MY-NEW-GUIDE.git

# Otherwise:
$ git remote add origin https://github.com/DCgov/MY-NEW-GUIDE.git

$ git push -u origin gh-pages
~~~
{: .language-shell}

Note that you can update the description and add a website link to the
repository after creating it.

You will now be able to see your repository at https://dcgov.github.io/MY-NEW-GUIDE.
