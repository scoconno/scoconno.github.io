# CV Boilerplate

A boilerplate to ease the pain of building and maintaining a CV or résumé using
 [pandoc](http://pandoc.org).

## Intro

Separating presentation from content makes life easier. The typical content of a CV is a perfect fit for a YAML file due to its structured nature:

```YAML
name: Immanuel Kant
address: Königsberg, Prussia
email: manny@copernicanrevolution.edu

AOS:
- Aesthetics, Epistemology, Ethics, Metaphysics, Philosophy of Mind, Political Philosophy

AOC:
- German Idealism, Philosophy of Religion

experience:
- years: 1770-1804
  employer: University of Königsberg
  job: Chair of Logic and Metaphysics
  city: Königsberg, DE
```

The advantage of keeping things in the YAML file is that it is then easy to
convert the information, using [pandoc](pandoc.org), into a PDF (via pandoc and
LaTeX) or html (via pandoc and some css styling), or any other format (e.g. a
Word .docx file).

For example, using `template.tex` we can easily iterate on repetitive data structures:

```latex
$for(experience)$
  $experience.years$\\
  \textsc{$experience.employer$}\\
  \emph{$experience.job$}\\
  $experience.city$\\[.2cm]
$endfor$
```

There is also a makefile included for ease of generation of PDF and html. With
this method, you can keep your entire CV encoded in a single YAML file, put it
under version control (into a gist, for instance), and generate a PDF and
webpage on the fly, with a single `make` command when needed.

## Dependencies

1. LaTeX with the following extra packages: `fontspec` `geometry` `multicol` `xunicode` `xltxtra` `marginnote` `sectsty` `ulem` `hyperref` `polyglossia`
2. Pandoc

To install LaTeX on Mac OS X, I recommend getting the smaller version BasicTeX from [here](https://tug.org/mactex/morepackages.html) and installing the additional packages with `tlmgr` afterwards. Same goes for Linux: install `texlive-base` with your package manager and add the needed additional packages later.

To install pandoc on Mac OS X, run `brew install pandoc`. To install it on Linux, refer to the [official docs](http://pandoc.org/installing.html).

## Getting started

1. Run this in your terminal to clone the repo, move into the right directory and delete all the git stuff:

        git clone git@github.com:mclearc/cv-boilerplate.git && cd cv-boilerplate && rm -rf .git

2. Open `content.yml` with your text editor and fill it with your personal details, work experience, education, and desired settings.
3. Run `make` to compile the PDF.
4. Tweak the `template.tex`, `template.html`, and `style.css` files until you're satisfied with the results.

Refer to [pandoc's documentation](http://pandoc.org/demo/example9/templates.html) to learn more about how templates work.

**Note**: for the font settings to work this template needs to be compiled with XeTeX.

## Available settings

- **`mainfont`**: Hoefler Text is the default, but every font installed on your system should work out of the box (thanks, XeTeX!)
- **`fontsize`**: Possible values here are 10pt, 11pt and 12pt.
- **`lang`**: Sets the main language through the `polyglossia` package. This is important for proper hyphenation, among other things.
- **`geometry`**: A string that sets the margins through `geometry`. Read [this](https://www.sharelatex.com/learn/Page_size_and_margins) to learn how this package works.

## Recommended readings

- [Why I do my résumé in LaTeX](http://www.toofishes.net/blog/why-i-do-my-resume-latex/) by Dan McGee
- [What are the benefits of writing resumes in TeX/LaTeX?](http://tex.stackexchange.com/questions/11955/what-are-the-benefits-of-writing-resumes-in-tex-latex) on TeX Stack Exchange
- [Typesetting your academic CV in LaTeX](http://nitens.org/taraborelli/cvtex) by Dario Taraborelli
- [Résumé advices](http://practicaltypography.com/resumes.html) from Butterick's Practical Typography 

## Resources

-  If you're not familiar with the YAML syntax, [here](http://learnxinyminutes.com/docs/yaml/)'s a good overview.
- If you want to edit the template but LaTeX scares you, this [docs](https://www.sharelatex.com/learn/Main_Page) put together by ShareLaTeX cover most of the basics and are surprisingly kind to the beginner.
- Odds are your question already has an answer on [TeX Stack Exchange](https://www.sharelatex.com/learn/Main_Page). Also, pretty friendly crowd in there.

## See also

- [invoice-boilerplate](https://github.com/mrzool/invoice-boilerplate) — Simple automated LaTeX invoicing system
- [letter-boilerplate](https://github.com/mrzool/letter-boilerplate) — Quickly and painlessly generate high-quality letters from markdown through LaTeX

## License

This repository contains a modified version of Dario Taraborelli's
[cvtex](https://github.com/dartar/cvtex) template, with further modifications
from Mattia Tezzele's original  [boilerplate](https://github.com/mrzool/cv-boilerplate.git).

License: [CC BY-SA 3.0](http://creativecommons.org/licenses/by-sa/3.0/)
