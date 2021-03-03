# Contributing

## Workflow

All work should be done in a distinct branch. The primary widgets of the app have their own individual branches, and sub-branches should be created for any feature you're working on in that widget.

As an example, if you're working on a "style selector" of the overview widget, you would first make sure you have the latest 'overview' code:

```
git pull origin overview
```

You would then create a new branch for your feature:

```
git checkout -b style-selector
```

Do whatever work you need, committing regularly, and once your code is complete, merge it back into the primary 'feature' branch:

```
git checkout overview
git merge style-selector
```

Then push that branch back up to the main repo, move your ticket to 'staged for review' and create a pull request from the feature branch to the master branch, and create a comment in the ticket with the link to the pull request.
