# Makefile
#
# Converts Markdown to other formats (HTML, PDF, DOCX, RTF, ODT, EPUB) using Pandoc
# <http://johnmacfarlane.net/pandoc/>
#
# Run "make" (or "make all") to convert to all other formats
#
# Run "make clean" to delete converted files

# Convert all files in this directory that have a .yml suffix
SOURCE_DOCS := $(wildcard *.yml)

EXPORTED_DOCS=\
 $(SOURCE_DOCS:.yml=.html) \
 $(SOURCE_DOCS:.yml=.pdf) \
 # $(SOURCE_DOCS:.yml=.docx) \
 # $(SOURCE_DOCS:.yml=.rtf) \
 # $(SOURCE_DOCS:.yml=.odt) \
 # $(SOURCE_DOCS:.yml=.epub)

RM=/bin/rm

PANDOC=/usr/local/bin/pandoc

PANDOC_OPTIONS=--smart --standalone

PANDOC_HTML_OPTIONS=--to html5 -H style.css --template=template.html
PANDOC_PDF_OPTIONS=--template=template.tex --latex-engine=xelatex
# PANDOC_DOCX_OPTIONS=
# PANDOC_RTF_OPTIONS=
# PANDOC_ODT_OPTIONS=
# PANDOC_EPUB_OPTIONS=--to epub3


# Pattern-matching Rules

%.html : %.yml
	$(PANDOC) $(PANDOC_OPTIONS) $(PANDOC_HTML_OPTIONS) -o CV.html $<

%.pdf : %.yml
	$(PANDOC) $(PANDOC_OPTIONS) $(PANDOC_PDF_OPTIONS) -o CV.pdf $<

# %.docx : %.md
# 	$(PANDOC) $(PANDOC_OPTIONS) $(PANDOC_DOCX_OPTIONS) -o $@ $<

# %.rtf : %.md
# 	$(PANDOC) $(PANDOC_OPTIONS) $(PANDOC_RTF_OPTIONS) -o $@ $<

# %.odt : %.md
# 	$(PANDOC) $(PANDOC_OPTIONS) $(PANDOC_ODT_OPTIONS) -o $@ $<

# %.epub : %.md
# 	$(PANDOC) $(PANDOC_OPTIONS) $(PANDOC_EPUB_OPTIONS) -o $@ $<


# Targets and dependencies

.PHONY: all clean

all : $(EXPORTED_DOCS)

clean:
	- $(RM) $(EXPORTED_DOCS)

move:
	- mv McLearCV* /Users/Roambot/Dropbox/Personal/bin/pelican-web/content/extra/
