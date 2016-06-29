## To get files (or new files) and open a pull request

1. Clone the repository: `git clone https://github.com/amyhua/example-website.git`

2. `cd example-website/`

2b. If you’ve already cloned it: do a `git pull origin master` to get latest changes I’ve pushed to the repo

3. Open your own branch and go to it: `git checkout -b nahum`

4. Make some changes to files in `example-website/`

5. Stage and commit your changes on git

6. Visit the github webpage for the repo, https://github.com/amyhua/example-website

7. Click on the New Pull Request button next to your branch, and open a new pull request!

-----


## If Statement Syntax

*A note about using if statements*: We talked about how the braces,

```
if (condition) {

}
```

are _optional_. This is technically true. If your statement is *one-line long*, you can do

```
if (x > 3) console.log(x);
```

a single line. But as soon as you have a *multi-line statement*, like

```
if (x > 3) {
 x + 3;
 console.log(x);
}
```

Now that your statement is longer than 1 line, the braces `{…}` are now *required*.

Note that

```
if (x > 3)
console.log(x);
```

is invalid, because an if statement without braces needs to be *on one line*.
Correct:

```
if (x > 3) console.log(x);
```
