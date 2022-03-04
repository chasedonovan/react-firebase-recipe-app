# Test Zone
new
new

# Emoji Commits

### PHILOSOPHY

In order to reduce inconsistencies with work commits, and to provide a uniform system that is visually easy to understand, emoji commits was modified to fit the organization needs.

1. **IMPERATIVE** ↓

   - Make your Git commit messages imperative.
   - Write a commit message like you're giving an order.
   - E.g., Use ✅ `Add` instead of ❌ `Added`.
   - E.g., Use ✅ `Create` instead of ❌ `Creating`.

2. **RULES** ↓

   - A small number of categories — easy to memorize.
   - Nothing more nothing less.
   - E.g. `📦 NEW`, `👍 IMPROVE`, `🐛 FIX`, `📖 DOCUMENT`, `🚀 READY`, `🤖 TESTING`, and `☣️ BREAKING`

3. **ACTIONS** ↓

   - Make git commits based on the actions you take.

### GETTING STARTED

Only use the following Git Commit Messages. A simple and small footprint is critical here.

- `📦 NEW: IMPERATIVE_MESSAGE_GOES_HERE`

  > Use when you add something entirely new.
  > E.g. `📦 NEW: Add Git ignore file`

- `👍 IMPROVE: IMPERATIVE_MESSAGE_GOES_HERE`

  > Use when you improve/enhance piece of code like refactoring etc.
  > E.g. `👍 IMPROVE: Remote IP API Function`

- `🐛 FIX: IMPERATIVE_MESSAGE_GOES_HERE`

  > Use when you fix a bug.
  > E.g. `🐛 FIX: Case conversion`

- `📖 DOCUMENT: IMPERATIVE_MESSAGE_GOES_HERE`

  > Use when you add documentation like `README.md`, or even inline docs.
  > E.g. `📖 DOC: API Interface Tutorial`

- `🚀 READY: IMPERATIVE_MESSAGE_GOES_HERE`

  > Use when you are complete with a feature and ready for testing.
  > E.g. `🚀 READY: Feature`

- `🤖 TESTINT: IMPERATIVE_MESSAGE_GOES_HERE`

  > Use when it's related to testing.
  > E.g. `🤖 TEST: Mock User Login/Logout`

- `☣️ BREAKING: IMPERATIVE_MESSAGE_GOES_HERE`
  > Use when releasing a change that breaks previous versions.
  > E.g. `☣️ BREAKING: Change authentication protocol`

### GIT ALIASES

- `git inc` => Takes no message and is for the initial commit ONLY <br> => 🎉 INITIAL COMMIT
- `git fb <branch>` => Takes a branch name and creates a `feature/branch` and set the upstream to that branch
- `git bb <branch>` => Takes a branch name and creates a `breaking/branch` and set the upstream to that branch
- `git pub <branch>` => Takes a branch name and pulls origin `branch`
- `git pom` => Takes no parameters and does a `git pull origin main`
- `git rmb <branch>` => Takes a branch name to delete
- `git new '<message>'` => Takes a commit message, and uses `git cap` to add, commit, and push <br> => 📦 NEW: 'message'
- `git imp '<message>'` => Takes a commit message, and uses `git cap` to add, commit, and push <br> => 👍 IMPROVE: 'message'
- `git fix '<message>'` => Takes a commit message, and uses `git cap` to add, commit, and push <br> => 🐛 FIX: 'message'
- `git rdy '<message>'` => Takes a commit message, and uses `git cap` to add, commit, and push <br> => 🚀 READY: 'message'
- `git doc '<message>'` => Takes a commit message, and uses `git cap` to add, commit, and push <br> => 📖 DOCUMENT: 'message'
- `git tst '<message>'` => Takes a commit message, and uses `git cap` to add, commit, and push <br> => 🤖 TESTING: 'message'
- `git brk '<message>'` => Takes a commit message, and uses `git cap` to add, commit, and push <br> => ☣️ BREAKING: 'message'
- `git cap '<message>'` => Takes a commit message, to add, commit, and push

### GITCONFIG UPDATE

- Update your gitconfig file with the following codesnippet
- `code ~/.gitconfig`

```js
[init]
	defaultBranch = main
[alias]
  # Git Commit, Add all and Push — in one step.
  cap = "!f() { git add .; git commit -m \"$@\"; git push; }; f"
  # NEW.
  new = "!f() { git cap \"📦 NEW: $@\"; }; f"
  # IMPROVE.
  imp = "!f() { git cap \"👍 IMPROVE: $@\"; }; f"
  # FIX.
  fix = "!f() { git cap \"🐛 FIX: $@\"; }; f"
  # READY.
  rdy = "!f() { git cap \"🚀 READY: $@\"; }; f"
  # DOCUMENT.
  doc = "!f() { git cap \"📖 DOCUMENT: $@\"; }; f"
  # TESTING.
  tst = "!f() { git cap \"🤖 TESTING: $@\"; }; f"
  # BREAKING CHANGE.
  brk = "!f() { git cap \"☣️ BREAKING: $@\"; }; f"
  # FEATURE BRANCH.
  fb = "!f() { git checkout -b "feature/$@"; git push -u origin "feature/$@"; }; f"
  # BREAKING BRANCH.
  bb = "!f() { git checkout -b "breaking/$@"; git push -u origin "breaking/$@"; }; f"
  # INITIAL COMMIT.
  inc = "!f() { git add .; git commit -m \"🎉 INITIAL COMMIT\"; git push -u origin main; }; f"
  # Pull origin <branch-name>.
  pub = "!f() { git pull origin "$@ "}; f"
  # Pull origin main.
  pom = "!f() { git pull origin main; }; f"
  # Remove <branch-name>.
  rmb = "!f() { git branch -D "$@" }; f"
```

### Credits

- Emoji Commits is a modified version of Emoji-Logs.

- **Last Updated**: Jan 26, 2023
