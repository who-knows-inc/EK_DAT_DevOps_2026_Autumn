<div class="title-card">
    <h1>Prek Tutorial</h1>
</div>

---

# Pre-commit Hooks with Prek

[Prek](https://github.com/j178/prek) is a tool that allows to easily install and manage pre-commit.

---


# Installation

Find more ways to install Prek [here](https://github.com/j178/prek?tab=readme-ov-file#installation).

MacOS:

```bash
brew install prek
```

```powershell
$ scoop install main/prek
```

---

# Create a `prek.toml` config file

Create a `prek.toml` file in the root of your project:

```toml
[[repos]]
repo = "https://github.com/pre-commit/pre-commit-hooks"
rev = "v6.0.0"
hooks = [
  { id = "check-yaml" },
  { id = "end-of-file-fixer" },
]
```
This will use the [pre-commit-hooks library](https://github.com/pre-commit/pre-commit-hooks) to:

1. Check that all YAML files are valid.
2. Ensure that all files end with a newline and remove any extra newlines at the end of files.

---

# Install the hooks

Run the following command to install the hooks:

```bash
$ prek install
```

This will create a `.git/hooks/pre-commit` file that will run the specified hooks before each commit.

---

# Run the hooks

You can run the hooks manually with the following command:

```bash
$ prek run
```

This should validate the configuration.

To see the hook in actionyou must create, add and commit files that violate the rules.

---

# Adding a custom hook

Add the following to the `prek.toml` file:

```toml
[[repos]]
repo = "local"
hooks = [
  {
    id = "inline-standard",
    name = "inline-standard",
    entry = "npx standard --fix",
    language = "system",
    pass_filenames = true
  },
]
```

This will run `npx standard --fix` on all staged files before each commit.

Try to add and commit a JavaScript file that violates the standard rules to see the hook in action.

---

# Conclusion

That's it. You can either find rules in the [pre-commit-hooks library](https://github.com/pre-commit/pre-commit-hooks) or create your own custom hooks.

