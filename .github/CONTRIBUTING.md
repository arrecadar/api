# Contrinuting
You can contribute to this project by following the steps bellow:

## Git flow
1. Fork this repository: `git clone git@github.com:arrecadar/api.git`.
2. Create your branch feature: `git checkout -b add-feature`. _(we recommend you use prefix as the same type in commit styles)_
3. Make your changes and commit: `git add . && git commit`.
4. Write a descritive commit message.
5. Open a [pull request](https://github.com/arrecadar/api/compare?expand=1).

## Commit styles
We follow the pattern below to commit messages:

- The subject of commit must have less than 50 characters.
- The format of subject must be `scope: type description`:
  - **scope** is where the commit affects.
  - **type** is what your commit does.
    - type is strict and has some types availables: `fix`, `refactor`, `chore`, `add`, `update` and `remove`.
  - **description** is your description.
- The body message needs have less than 80 characters.
