# html-resume

The orignial version of this single-page résumé template, done purely with HTML
and CSS, which can be rendered into PDF through web browsers' print-to-PDF
functionality, making a nice, sleek, professsional and ready-to-print résumé,
lives [here](https://github.com/mnjul/html-resume).

You can see the author's living example at: https://mnjul.net/cv/resume.pdf

Since the author graciously released it as open source with an Apache License,
you're allowed (and encouraged!) to create your own fine-tuned template and
share with others.

Find the background story of this project at
[purincess @ matrix](https://blogs.purincess.tw/matrixblog/2016/04/typesetting-resume-with-html-and-css/).

# Fonts, Icon Fonts, and Dependencies
* [Open Sans](https://www.google.com/fonts/specimen/Open+Sans),
  [Source Code Pro](https://fonts.google.com/specimen/Source+Code+Pro) and
  [Source Sans Pro](https://www.google.com/fonts/specimen/Source+Sans+Pro) are
  used at various weights, but are not included in the source repository.
  Please follow the links to download the fonts onto your computer.
* Icons from [Font Awesome](https://fortawesome.github.io/Font-Awesome/) are
  used and are incorporated as a git submodule in this repository.

# Paper Size/Orientation
* Currently letter portrait only. PRs welcome for other paper sizes --
  especially A4!

# Actually Rendering the PDF
* Just open the HTML file with the browser. No need to serve the document from
  any kind of web server --- the ``file:///`` protocol should be good enough.
* On Firefox:
  * You probably need to remove any page margins in **about:config**.
  * Uncheck **Ignore Scaling and Shrink To Fit Page Width**.
  * Check **Print Background Colors**.
  * Clear out the headers and footers.
  * Save as PDF.
* On Google Chrome:
  * Set **Margin** to **None**.
  * Print **Background Graphics**.
  * Don't print headers and footers.
  * Save as PDF.

# Footnotes and License
* If you ever print out the rendered PDF, make sure texts are not clipped off,
  or items have not unexpectedly shrunk. Additionally, since the PDF has no
  margin outside the shaded sidebar, while most printers have no-print areas,
  the shaded sidebar probably won't fill up to the page's edge when printed.
* This project is licensed under the Apache License.
