# Install these 

**Type**: Individual

In case the list is overwhelming and time is sparse I have split it into things that you must have done before week 1 and things that you can do later.

---

## Must do before week 1


#### Editor / IDE

Have an editor / IDE ready (including renewing licenses). You are free to use any editor during the course. I will use VSCode but it has very little significance for the lectures. 


#### Ensure that you can run `ssh` in your terminal

Run `ssh` in your terminal. If you get a message that it is not installed then you need to install it or use a different terminal. This is needed already for the first lecture!

For convenience and uniformity of the course materials we will use RSA keys so ensure that you have `id_rsa` and `id_rsa.pub` files in the `~/.ssh/` folder.

#### Install uv

We will use `uv` to manage projects and dependencies in Python:

https://docs.astral.sh/uv/getting-started/installation/

---

### Windows users only

Don't use CMD in the course - find a suitable terminal. 

`Scoop` is a package manager for Windows that will be used to install tools for the course.

Install `Scoop`: https://scoop.sh/

Install `Windows subsystem for Linux`: https://learn.microsoft.com/en-us/windows/wsl/install

Make sure that you can actually run it. If you have Docker installed prior to it then it will try to launch in Docker and fail. This is the solution to that problem:

https://stackoverflow.com/questions/75157946/wsl-failed-to-initialize-on-windows-11


#### Make sure you can run Python

Python comes preinstalled on all operating systems but make sure that you can run Python on your computer. 

You might need to run this on Windows in an admin Powershell terminal to run Python. 

```powershell
$ Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
```

Write `pyth` in the terminal and hit tab. It should autocomplete. In Windows it might be called `python.exe`.

---

### Mac users only

Install homebrew: https://brew.sh/

---

## Must do before week 2

#### Install Postman and create account

https://www.postman.com/

Create an account. We will be using features that require the non-lightweight version as they call it. You can use a throwaway email to signup. 

---

## Must do before week 3

You can do the following before the semester start or later on. Once the semester start there are many assignments of higher priority so consider postponing this section.

#### GitHub Student Developers Pack

Check the GitHub Student Developers Pack: https://education.github.com/pack. For instance, you can get some credit for DigitalOcean as an alternative to Azure.

There are benefits to getting a GitHub Pro account. 


#### Azure

Set up or renew your Azure for students account. Look into Azure for Students where you will get free credit.

https://azure.microsoft.com/en-us/free/students/

[Guide with screenshots](./how_to_renew_azure_for_students/how_to_renew_azure_for_students.md)


#### SSH keys

Many of you generated a SSH key pair last semester. If you have lost it then generate a new one. Generate a RSA key pair. RSA, specifically, will be required for Terraform later in the course.

#### `az` (Azure CLI)

Install Azures CLI `az`. Look here to find how to install it for your OS:

https://learn.microsoft.com/en-us/cli/azure/install-azure-cli

In Powershell, this command can be used:

```powershell
$ Invoke-WebRequest -Uri https://aka.ms/installazurecliwindows -OutFile .\AzureCLI.msi; Start-Process msiexec.exe -Wait -ArgumentList '/I AzureCLI.msi /quiet'; rm .\AzureCLI.msi
```

Remember to run:

```bash
$ az login
```

And select the subscription id by number.

Successful criteria: Can run `az --version` in the terminal that you use. So if you install it for Powershell but always use Git Bash for instance, then you might consider a different installation method.

---

## Must do before week 4

#### Install Node.js. 

Install Node.js: https://nodejs.org/en/download

Both LTS (long-time support) or Current are fine. 

Verify that you have Node.js installed. 

```bash 
$ node --version
```

#### Docker

Have Docker Desktop installed and be ready to work with Docker. Success criteria: Can run `docker --version` in the teminal. 

Install Docker: https://www.docker.com/products/docker-desktop/.

Ensure that you can run an image in your favorite editor:

```bash
$ docker run --rm hello-world
```

---

## Must do before week 10

#### Terraform

Install Terraform:

https://developer.hashicorp.com/terraform/install?product_intent=terraform

---

## Optional

#### Sqlite3 CLI

There is an SQLite3 CLI that you can install. It will allow you to interact with Sqlite databases from the terminal.





