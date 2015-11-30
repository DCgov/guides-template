#!/bin/bash

function create_guide { rm -rf .git; echo "Deleted old repository references"; git init; git checkout -b gh-pages; sed -i '' 's/\(function create_guide.*\)//g' go; git add .; echo "Staged new additions for commit"; git commit -m 'Initial commit'; }

function serve { bundle exec jekyll serve --watch --baseurl ''; }

$@
