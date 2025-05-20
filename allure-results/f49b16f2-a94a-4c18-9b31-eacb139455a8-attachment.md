# Test info

- Name: Test 6 - echoecho Forms
- Location: C:\PlaywrightDemo\tests\PracticeTests\Practice exercises\practice.spec.js:53:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveURL(expected)

Locator: locator(':root')
Expected string: "http://www.echoecho.com/htmlforms10.htm"
Received string: "https://echoecho.com/htmlforms10.htm"
Call log:
  - expect.toHaveURL with timeout 5000ms
  - waiting for locator(':root')
    8 × locator resolved to <html>…</html>
      - unexpected value "https://echoecho.com/htmlforms10.htm"

    at C:\PlaywrightDemo\tests\PracticeTests\Practice exercises\practice.spec.js:59:24
```

# Page snapshot

```yaml
- insertion:
  - iframe
- table:
  - rowgroup:
    - row "Link To Us | Bookmark EchoEcho.Com Site Map":
      - cell "Link To Us | Bookmark EchoEcho.Com Site Map":
        - table:
          - rowgroup:
            - row "Link To Us | Bookmark EchoEcho.Com Site Map":
              - cell "Link To Us | Bookmark EchoEcho.Com":
                - link "Link To Us":
                  - /url: linktous.htm
                - text: "| Bookmark EchoEcho.Com"
              - cell "Site Map":
                - link "Site Map":
                  - /url: https://echoecho.com/sitemap.htm
- table:
  - rowgroup:
    - row "EchoEcho.Com Homepage Web Hosting - As Reliable As It Gets!":
      - cell "EchoEcho.Com Homepage":
        - link "EchoEcho.Com Homepage":
          - /url: https://echoecho.com
          - img "EchoEcho.Com Homepage"
      - cell "Web Hosting - As Reliable As It Gets!":
        - img
        - link "Web Hosting - As Reliable As It Gets!":
          - /url: https://echoechoplus.com/
          - img "Web Hosting - As Reliable As It Gets!"
        - img
- table:
  - rowgroup:
    - row "Home > Tutorials > HTML > Forms Search":
      - cell "Home > Tutorials > HTML > Forms Search":
        - table:
          - rowgroup:
            - row "Home > Tutorials > HTML > Forms Search":
              - cell "Home > Tutorials > HTML > Forms":
                - link "Home":
                  - /url: https://echoecho.com/index.html
                - text: ">"
                - link "Tutorials":
                  - /url: " school.htm"
                - text: ">"
                - link "HTML":
                  - /url: html.htm
                - text: "> Forms"
              - cell "Search":
                - textbox
                - button "Search"
- table:
  - rowgroup:
    - row:
      - cell
      - cell
    - row "Tutorials D-Zine Articles Online Tools Free Resources References Quiz Hosting":
      - cell
      - cell
      - cell "Tutorials":
        - link "Tutorials":
          - /url: school.htm
      - cell
      - cell "D-Zine Articles":
        - link "D-Zine Articles":
          - /url: dzine.htm
      - cell
      - cell "Online Tools":
        - link "Online Tools":
          - /url: tools.htm
      - cell
      - cell "Free Resources":
        - link "Free Resources":
          - /url: free.htm
      - cell
      - cell "References":
        - link "References":
          - /url: documentation.htm
      - cell
      - cell "Quiz":
        - link "Quiz":
          - /url: quiz.htm
      - cell
      - cell "Hosting":
        - link "Hosting":
          - /url: hosting.htm
      - cell
      - cell
    - row:
      - cell
      - cell
      - cell
      - cell
      - cell
      - cell
      - cell
      - cell
      - cell
      - cell
      - cell
      - cell
      - cell
      - cell
      - cell
      - cell
- table:
  - rowgroup:
    - row:
      - cell
      - cell
      - cell
      - cell
- table:
  - rowgroup:
    - row:
      - cell
      - cell
      - cell
- table:
  - rowgroup:
    - 'row "HTML Forms : RADIO BUTTON"':
      - cell
      - cell
      - cell
      - 'cell "HTML Forms : RADIO BUTTON"':
        - table:
          - rowgroup:
            - 'row "HTML Forms : RADIO BUTTON"':
              - 'cell "HTML Forms : RADIO BUTTON"'
              - cell:
                - table:
                  - rowgroup:
                    - row:
                      - cell
      - cell
- table:
  - rowgroup:
    - row:
      - cell
      - cell
      - cell
- table:
  - rowgroup:
    - row:
      - cell
      - cell
      - cell
      - cell:
        - table:
          - rowgroup:
            - row:
              - cell:
                - text: Radio buttons are used when you want to let the visitor select one - and just one - option from a set of alternatives. If more options are to be allowed at the same time you should use
                - link "check boxes":
                  - /url: htmlforms09.htm
                - text: instead.
                - separator
                - text: "SETTINGS: Below is a listing of valid settings for radio buttons:"
                - table:
                  - rowgroup:
                    - row "HTML EXPLANATION EXAMPLE radio ��name= ��value= ��align= ��tabindex= checked Choose one - and only one - option Name of the group. Value that is submitted if checked. Alignment of the field. Tab order of the field. Default check this field.":
                      - cell "HTML EXPLANATION EXAMPLE radio ��name= ��value= ��align= ��tabindex= checked Choose one - and only one - option Name of the group. Value that is submitted if checked. Alignment of the field. Tab order of the field. Default check this field.":
                        - table:
                          - rowgroup:
                            - row "HTML EXPLANATION EXAMPLE":
                              - cell "HTML"
                              - cell "EXPLANATION"
                              - cell "EXAMPLE"
                            - row "radio ��name= ��value= ��align= ��tabindex= checked Choose one - and only one - option Name of the group. Value that is submitted if checked. Alignment of the field. Tab order of the field. Default check this field.":
                              - cell "radio ��name= ��value= ��align= ��tabindex= checked"
                              - cell "Choose one - and only one - option Name of the group. Value that is submitted if checked. Alignment of the field. Tab order of the field. Default check this field."
                              - cell:
                                - radio
                                - radio
                                - radio [checked]
                - text: "The name setting tells which group of radio buttons the field belongs to. When you select one button, all other buttons in the same group are unselected. If you couldn't define which group the current button belongs to, you could only have one group of radio buttons on each page. The value setting defines what will be submitted if checked. The align setting defines how the field is aligned. Valid entries are: TOP, MIDDLE, BOTTOM, RIGHT, LEFT, TEXTTOP, BASELINE, ABSMIDDLE, ABSBOTTOM. The alignments are explained in the image section. You can learn about the different alignments"
                - link "here":
                  - /url: htmlimages07.htm
                - text: . The tabindex setting defines in which order the different fields should be activated when the visitor clicks the tab key.
                - separator
                - text: "AN EXAMPLE: Look at this HTML example:"
                - table:
                  - rowgroup:
                    - row "<html> <head> <title>My Page</title> </head> <body> <form name=\"myform\" action=\"http://www.mydomain.com/myformhandler.cgi\" method=\"POST\"> <div align=\"center\"><br> <input type=\"radio\" name=\"group1\" value=\"Milk\"> Milk<br> <input type=\"radio\" name=\"group1\" value=\"Butter\" checked> Butter<br> <input type=\"radio\" name=\"group1\" value=\"Cheese\"> Cheese <hr> <input type=\"radio\" name=\"group2\" value=\"Water\"> Water<br> <input type=\"radio\" name=\"group2\" value=\"Beer\"> Beer<br> <input type=\"radio\" name=\"group2\" value=\"Wine\" checked> Wine<br> </div> </form> </body> </html>":
                      - cell "<html> <head> <title>My Page</title> </head> <body> <form name=\"myform\" action=\"http://www.mydomain.com/myformhandler.cgi\" method=\"POST\"> <div align=\"center\"><br> <input type=\"radio\" name=\"group1\" value=\"Milk\"> Milk<br> <input type=\"radio\" name=\"group1\" value=\"Butter\" checked> Butter<br> <input type=\"radio\" name=\"group1\" value=\"Cheese\"> Cheese <hr> <input type=\"radio\" name=\"group2\" value=\"Water\"> Water<br> <input type=\"radio\" name=\"group2\" value=\"Beer\"> Beer<br> <input type=\"radio\" name=\"group2\" value=\"Wine\" checked> Wine<br> </div> </form> </body> </html>":
                        - table:
                          - rowgroup:
                            - row "<html> <head> <title>My Page</title> </head> <body> <form name=\"myform\" action=\"http://www.mydomain.com/myformhandler.cgi\" method=\"POST\"> <div align=\"center\"><br> <input type=\"radio\" name=\"group1\" value=\"Milk\"> Milk<br> <input type=\"radio\" name=\"group1\" value=\"Butter\" checked> Butter<br> <input type=\"radio\" name=\"group1\" value=\"Cheese\"> Cheese <hr> <input type=\"radio\" name=\"group2\" value=\"Water\"> Water<br> <input type=\"radio\" name=\"group2\" value=\"Beer\"> Beer<br> <input type=\"radio\" name=\"group2\" value=\"Wine\" checked> Wine<br> </div> </form> </body> </html>":
                              - cell "<html> <head> <title>My Page</title> </head> <body> <form name=\"myform\" action=\"http://www.mydomain.com/myformhandler.cgi\" method=\"POST\"> <div align=\"center\"><br> <input type=\"radio\" name=\"group1\" value=\"Milk\"> Milk<br> <input type=\"radio\" name=\"group1\" value=\"Butter\" checked> Butter<br> <input type=\"radio\" name=\"group1\" value=\"Cheese\"> Cheese <hr> <input type=\"radio\" name=\"group2\" value=\"Water\"> Water<br> <input type=\"radio\" name=\"group2\" value=\"Beer\"> Beer<br> <input type=\"radio\" name=\"group2\" value=\"Wine\" checked> Wine<br> </div> </form> </body> </html>"
                - text: "And the resulting output:"
                - table:
                  - rowgroup:
                    - row "Milk Butter Cheese Water Beer Wine":
                      - cell "Milk Butter Cheese Water Beer Wine":
                        - table:
                          - rowgroup:
                            - row "Milk Butter Cheese Water Beer Wine":
                              - cell "Milk Butter Cheese Water Beer Wine":
                                - radio
                                - text: Milk
                                - radio [checked]
                                - text: Butter
                                - radio
                                - text: Cheese
                                - separator
                                - radio
                                - text: Water
                                - radio
                                - text: Beer
                                - radio [checked]
                                - text: Wine
                - table:
                  - rowgroup:
                    - row "<< PREVIOUS READ MORE >>":
                      - cell "<< PREVIOUS":
                        - table:
                          - rowgroup:
                            - row "<< PREVIOUS":
                              - cell "<< PREVIOUS":
                                - link "<< PREVIOUS":
                                  - /url: " htmlforms09.htm"
                      - cell "READ MORE >>":
                        - table:
                          - rowgroup:
                            - row "READ MORE >>":
                              - cell "READ MORE >>":
                                - link "READ MORE >>":
                                  - /url: htmlforms11.htm
                - separator
                - insertion:
                  - iframe
      - cell
      - 'cell "HTML FORMS INTRODUCTION EXAMPLES CGI SCRIPTS THE FORM TAG FORM FIELDS ���TEXT ���PASSWORD ���HIDDEN ���TEXT AREA ���CHECK BOX ���RADIO BUTTON ���DROP-DOWN MENU ���SUBMIT BUTTON ���RESET BUTTON ���IMAGE BUTTON QUICK REFERENCE TAKE THE QUIZ! HTML TUTORIAL HTML BASICS HTML TEXT HTML LISTS HTML IMAGES HTML LINKS HTML BACKGROUNDS HTML TABLES HTML FRAMES HTML FORMS HTML METATAGS HTML HEXCOLORS HTML QUIZ HTML REFERENCE ALL HTML TAGS HTML 4.0 HTML 3.2 HTML 2.0 NETSCAPE TAGS MICROSOFT TAGS TOP TUTORIALS HTML JAVASCRIPT CSS FLASH JAVA APPLETS EchoEcho Hosting! 5000 MB Server space !! 60 GB Traffic/Month !! Php dynamic pages Perl/cgi scripts MySQL databases Password protected folders Advanced log file stats Spam & Virus checked mail Auto-installed scripts: Forums, Chat, Shop, Photo album, Livehelp etc. Nothing beats this deal: $7.50/month! � Read More web hosting"':
        - table:
          - rowgroup:
            - 'row "HTML FORMS INTRODUCTION EXAMPLES CGI SCRIPTS THE FORM TAG FORM FIELDS ���TEXT ���PASSWORD ���HIDDEN ���TEXT AREA ���CHECK BOX ���RADIO BUTTON ���DROP-DOWN MENU ���SUBMIT BUTTON ���RESET BUTTON ���IMAGE BUTTON QUICK REFERENCE TAKE THE QUIZ! HTML TUTORIAL HTML BASICS HTML TEXT HTML LISTS HTML IMAGES HTML LINKS HTML BACKGROUNDS HTML TABLES HTML FRAMES HTML FORMS HTML METATAGS HTML HEXCOLORS HTML QUIZ HTML REFERENCE ALL HTML TAGS HTML 4.0 HTML 3.2 HTML 2.0 NETSCAPE TAGS MICROSOFT TAGS TOP TUTORIALS HTML JAVASCRIPT CSS FLASH JAVA APPLETS EchoEcho Hosting! 5000 MB Server space !! 60 GB Traffic/Month !! Php dynamic pages Perl/cgi scripts MySQL databases Password protected folders Advanced log file stats Spam & Virus checked mail Auto-installed scripts: Forums, Chat, Shop, Photo album, Livehelp etc. Nothing beats this deal: $7.50/month! � Read More web hosting"':
              - 'cell "HTML FORMS INTRODUCTION EXAMPLES CGI SCRIPTS THE FORM TAG FORM FIELDS ���TEXT ���PASSWORD ���HIDDEN ���TEXT AREA ���CHECK BOX ���RADIO BUTTON ���DROP-DOWN MENU ���SUBMIT BUTTON ���RESET BUTTON ���IMAGE BUTTON QUICK REFERENCE TAKE THE QUIZ! HTML TUTORIAL HTML BASICS HTML TEXT HTML LISTS HTML IMAGES HTML LINKS HTML BACKGROUNDS HTML TABLES HTML FRAMES HTML FORMS HTML METATAGS HTML HEXCOLORS HTML QUIZ HTML REFERENCE ALL HTML TAGS HTML 4.0 HTML 3.2 HTML 2.0 NETSCAPE TAGS MICROSOFT TAGS TOP TUTORIALS HTML JAVASCRIPT CSS FLASH JAVA APPLETS EchoEcho Hosting! 5000 MB Server space !! 60 GB Traffic/Month !! Php dynamic pages Perl/cgi scripts MySQL databases Password protected folders Advanced log file stats Spam & Virus checked mail Auto-installed scripts: Forums, Chat, Shop, Photo album, Livehelp etc. Nothing beats this deal: $7.50/month! � Read More web hosting"':
                - table:
                  - rowgroup:
                    - row:
                      - cell
                    - row "HTML FORMS":
                      - cell "HTML FORMS"
                    - row:
                      - cell
                - table:
                  - rowgroup:
                    - row "INTRODUCTION":
                      - cell "INTRODUCTION":
                        - link "INTRODUCTION":
                          - /url: htmlforms.htm
                    - row "EXAMPLES":
                      - cell "EXAMPLES":
                        - link "EXAMPLES":
                          - /url: htmlforms01.htm
                    - row "CGI SCRIPTS":
                      - cell "CGI SCRIPTS":
                        - link "CGI SCRIPTS":
                          - /url: htmlforms02.htm
                    - row "THE FORM TAG":
                      - cell "THE FORM TAG":
                        - link "THE FORM TAG":
                          - /url: htmlforms03.htm
                    - row "FORM FIELDS":
                      - cell "FORM FIELDS":
                        - link "FORM FIELDS":
                          - /url: htmlforms04.htm
                    - row "���TEXT":
                      - cell "���TEXT":
                        - link "���TEXT":
                          - /url: htmlforms05.htm
                    - row "���PASSWORD":
                      - cell "���PASSWORD":
                        - link "���PASSWORD":
                          - /url: htmlforms06.htm
                    - row "���HIDDEN":
                      - cell "���HIDDEN":
                        - link "���HIDDEN":
                          - /url: htmlforms07.htm
                    - row "���TEXT AREA":
                      - cell "���TEXT AREA":
                        - link "���TEXT AREA":
                          - /url: htmlforms08.htm
                    - row "���CHECK BOX":
                      - cell "���CHECK BOX":
                        - link "���CHECK BOX":
                          - /url: htmlforms09.htm
                    - row "���RADIO BUTTON":
                      - cell "���RADIO BUTTON":
                        - link "���RADIO BUTTON":
                          - /url: htmlforms10.htm
                    - row "���DROP-DOWN MENU":
                      - cell "���DROP-DOWN MENU":
                        - link "���DROP-DOWN MENU":
                          - /url: htmlforms11.htm
                    - row "���SUBMIT BUTTON":
                      - cell "���SUBMIT BUTTON":
                        - link "���SUBMIT BUTTON":
                          - /url: htmlforms12.htm
                    - row "���RESET BUTTON":
                      - cell "���RESET BUTTON":
                        - link "���RESET BUTTON":
                          - /url: htmlforms13.htm
                    - row "���IMAGE BUTTON":
                      - cell "���IMAGE BUTTON":
                        - link "���IMAGE BUTTON":
                          - /url: htmlforms14.htm
                    - row "QUICK REFERENCE":
                      - cell "QUICK REFERENCE":
                        - link "QUICK REFERENCE":
                          - /url: htmlforms15.htm
                    - row "TAKE THE QUIZ!":
                      - cell "TAKE THE QUIZ!":
                        - link "TAKE THE QUIZ!":
                          - /url: http://www.echoecho.com/quiz.htm?section=1&subsection=9
                    - row:
                      - cell
                - table:
                  - rowgroup:
                    - row:
                      - cell
                    - row "HTML TUTORIAL":
                      - cell "HTML TUTORIAL"
                    - row:
                      - cell
                - table:
                  - rowgroup:
                    - row "HTML BASICS":
                      - cell "HTML BASICS":
                        - link "HTML BASICS":
                          - /url: htmlbasics.htm
                    - row "HTML TEXT":
                      - cell "HTML TEXT":
                        - link "HTML TEXT":
                          - /url: htmltext.htm
                    - row "HTML LISTS":
                      - cell "HTML LISTS":
                        - link "HTML LISTS":
                          - /url: htmllists.htm
                    - row "HTML IMAGES":
                      - cell "HTML IMAGES":
                        - link "HTML IMAGES":
                          - /url: htmlimages.htm
                    - row "HTML LINKS":
                      - cell "HTML LINKS":
                        - link "HTML LINKS":
                          - /url: htmllinks.htm
                    - row "HTML BACKGROUNDS":
                      - cell "HTML BACKGROUNDS":
                        - link "HTML BACKGROUNDS":
                          - /url: htmlbackgrounds.htm
                    - row "HTML TABLES":
                      - cell "HTML TABLES":
                        - link "HTML TABLES":
                          - /url: htmltables.htm
                    - row "HTML FRAMES":
                      - cell "HTML FRAMES":
                        - link "HTML FRAMES":
                          - /url: htmlframes.htm
                    - row "HTML FORMS":
                      - cell "HTML FORMS":
                        - link "HTML FORMS":
                          - /url: htmlforms.htm
                    - row "HTML METATAGS":
                      - cell "HTML METATAGS":
                        - link "HTML METATAGS":
                          - /url: htmlmetatags.htm
                    - row "HTML HEXCOLORS":
                      - cell "HTML HEXCOLORS":
                        - link "HTML HEXCOLORS":
                          - /url: htmlhexcolors.htm
                    - row "HTML QUIZ":
                      - cell "HTML QUIZ":
                        - link "HTML QUIZ":
                          - /url: http://www.echoecho.com/quiz.htm?section=1&maxq=20
                    - row:
                      - cell
                - table:
                  - rowgroup:
                    - row:
                      - cell
                    - row "HTML REFERENCE":
                      - cell "HTML REFERENCE"
                    - row:
                      - cell
                - table:
                  - rowgroup:
                    - row "ALL HTML TAGS":
                      - cell "ALL HTML TAGS":
                        - link "ALL HTML TAGS":
                          - /url: http://www.echoecho.com/htmlreference.htm
                    - row "HTML 4.0":
                      - cell "HTML 4.0":
                        - link "HTML 4.0":
                          - /url: http://www.echoecho.com/documentationframe.htm?http&&&www.echoecho.com/html40/cover.html
                    - row "HTML 3.2":
                      - cell "HTML 3.2":
                        - link "HTML 3.2":
                          - /url: http://www.echoecho.com/documentationframe.htm?http&&&www.echoecho.com/html32/REC-html32.htm
                    - row "HTML 2.0":
                      - cell "HTML 2.0":
                        - link "HTML 2.0":
                          - /url: http://www.echoecho.com/documentationframe.htm?http&&&www.echoecho.com/html20/html-spec_toc.html
                    - row "NETSCAPE TAGS":
                      - cell "NETSCAPE TAGS":
                        - link "NETSCAPE TAGS":
                          - /url: http://www.echoecho.com/documentationframe.htm?http&&&developer.netscape.com/docs/manuals/htmlguid/contents.htm
                    - row "MICROSOFT TAGS":
                      - cell "MICROSOFT TAGS":
                        - link "MICROSOFT TAGS":
                          - /url: http://www.echoecho.com/documentationframe.htm?http&&&msdn.microsoft.com/workshop/author/html/reference/elements.asp
                    - row:
                      - cell
                - table:
                  - rowgroup:
                    - row:
                      - cell
                    - row "TOP TUTORIALS":
                      - cell "TOP TUTORIALS"
                    - row:
                      - cell
                - table:
                  - rowgroup:
                    - row "HTML":
                      - cell "HTML":
                        - link "HTML":
                          - /url: html.htm
                    - row "JAVASCRIPT":
                      - cell "JAVASCRIPT":
                        - link "JAVASCRIPT":
                          - /url: javascript.htm
                    - row "CSS":
                      - cell "CSS":
                        - link "CSS":
                          - /url: css.htm
                    - row "FLASH":
                      - cell "FLASH":
                        - link "FLASH":
                          - /url: flash.htm
                    - row "JAVA APPLETS":
                      - cell "JAVA APPLETS":
                        - link "JAVA APPLETS":
                          - /url: applets.htm
                    - row:
                      - cell
                - table:
                  - rowgroup:
                    - row "EchoEcho Hosting!":
                      - cell "EchoEcho Hosting!":
                        - link "EchoEcho Hosting!":
                          - /url: https://www.echoechoplus.com
                    - 'row "5000 MB Server space !! 60 GB Traffic/Month !! Php dynamic pages Perl/cgi scripts MySQL databases Password protected folders Advanced log file stats Spam & Virus checked mail Auto-installed scripts: Forums, Chat, Shop, Photo album, Livehelp etc. Nothing beats this deal: $7.50/month!"':
                      - 'cell "5000 MB Server space !! 60 GB Traffic/Month !! Php dynamic pages Perl/cgi scripts MySQL databases Password protected folders Advanced log file stats Spam & Virus checked mail Auto-installed scripts: Forums, Chat, Shop, Photo album, Livehelp etc. Nothing beats this deal: $7.50/month!"':
                        - text: "5000 MB Server space !! 60 GB Traffic/Month !! Php dynamic pages Perl/cgi scripts MySQL databases Password protected folders Advanced log file stats Spam & Virus checked mail Auto-installed scripts: Forums, Chat, Shop, Photo album, Livehelp etc. Nothing beats this deal:"
                        - link "$7.50/month!":
                          - /url: https://www.echoechoplus.com
                    - row "� Read More":
                      - cell "� Read More":
                        - link "� Read More":
                          - /url: https://www.echoechoplus.com
                - img "web hosting"
      - cell
- table:
  - rowgroup:
    - 'row "Advertisement DEVELOPER TIP! FACT: It takes about half a second for a server to respond to a request sent via the internet. TIP: If your page has 10 very small images - each with a size of 100 bytes - it will take longer to load than had it been a continuous stream of 1000 bytes."':
      - cell
      - cell
      - cell
      - cell "Advertisement":
        - table:
          - rowgroup:
            - row "Advertisement":
              - cell "Advertisement":
                - separator
                - table:
                  - rowgroup:
                    - row "Advertisement":
                      - cell "Advertisement":
                        - table:
                          - rowgroup:
                            - row "Advertisement":
                              - cell "Advertisement":
                                - insertion:
                                  - iframe
      - cell
      - 'cell "DEVELOPER TIP! FACT: It takes about half a second for a server to respond to a request sent via the internet. TIP: If your page has 10 very small images - each with a size of 100 bytes - it will take longer to load than had it been a continuous stream of 1000 bytes."':
        - table:
          - rowgroup:
            - 'row "DEVELOPER TIP! FACT: It takes about half a second for a server to respond to a request sent via the internet. TIP: If your page has 10 very small images - each with a size of 100 bytes - it will take longer to load than had it been a continuous stream of 1000 bytes."':
              - 'cell "DEVELOPER TIP! FACT: It takes about half a second for a server to respond to a request sent via the internet. TIP: If your page has 10 very small images - each with a size of 100 bytes - it will take longer to load than had it been a continuous stream of 1000 bytes."':
                - separator
                - table:
                  - rowgroup:
                    - row "DEVELOPER TIP!":
                      - cell "DEVELOPER TIP!"
                    - 'row "FACT: It takes about half a second for a server to respond to a request sent via the internet. TIP: If your page has 10 very small images - each with a size of 100 bytes - it will take longer to load than had it been a continuous stream of 1000 bytes."':
                      - 'cell "FACT: It takes about half a second for a server to respond to a request sent via the internet. TIP: If your page has 10 very small images - each with a size of 100 bytes - it will take longer to load than had it been a continuous stream of 1000 bytes."'
      - cell
- table:
  - rowgroup:
    - row:
      - cell
      - cell
      - cell
- table:
  - rowgroup:
    - row "\"Better Than Books - As Easy As It Gets!\"":
      - cell
      - cell
      - cell "\"Better Than Books - As Easy As It Gets!\"":
        - table:
          - rowgroup:
            - row "\"Better Than Books - As Easy As It Gets!\"":
              - cell "\"Better Than Books - As Easy As It Gets!\"":
                - img
                - text: "\"Better Than Books - As Easy As It Gets!\""
      - cell
- table:
  - rowgroup:
    - row:
      - cell
- table:
  - rowgroup:
    - 'row "On EchoEcho: D-Zine Articles | Tutorials | Online Tools | Free Resources | References | Quiz | Hosting About EchoEcho"':
      - 'cell "On EchoEcho: D-Zine Articles | Tutorials | Online Tools | Free Resources | References | Quiz | Hosting"':
        - text: "On EchoEcho:"
        - link "D-Zine Articles":
          - /url: https://echoecho.com/dzine.htm
        - text: "|"
        - link "Tutorials":
          - /url: https://echoecho.com/school.htm
        - text: "|"
        - link "Online Tools":
          - /url: https://echoecho.com/tools.htm
        - text: "|"
        - link "Free Resources":
          - /url: https://echoecho.com/free.htm
        - text: "|"
        - link "References":
          - /url: https://echoecho.com/documentation.htm
        - text: "|"
        - link "Quiz":
          - /url: https://echoecho.com/quiz.htm
        - text: "|"
        - link "Hosting":
          - /url: https://echoecho.com/hosting.htm
      - cell "About EchoEcho":
        - link "About EchoEcho":
          - /url: https://echoecho.com/about.htm
- table:
  - rowgroup:
    - row "Contact us | Advertise info | Terms of use | Privacy policy Copyright © 1999-2021 NetKontoret All rights reserved.":
      - cell "Contact us | Advertise info | Terms of use | Privacy policy":
        - link "Contact us":
          - /url: https://echoecho.com/contact.htm
        - text: "|"
        - link "Advertise info":
          - /url: https://echoecho.com/advertise.htm
        - text: "|"
        - link "Terms of use":
          - /url: https://echoecho.com/termsofuse.htm
        - text: "|"
        - link "Privacy policy":
          - /url: https://echoecho.com/privacy.htm
      - cell "Copyright © 1999-2021 NetKontoret All rights reserved.":
        - link "Copyright":
          - /url: https://echoecho.com/legal.htm
        - text: © 1999-2021
        - link "NetKontoret":
          - /url: http://netkontoret.dk
        - text: All rights reserved.
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test'
   2 |
   3 | test('Test 1 - themeforest.net', async ({ page }) => {
   4 |     await page.goto('https://themeforest.net/');
   5 |     const pageTitle = await page.title();
   6 |     const pageURL = await page.url();
   7 |     console.log("Title: ", pageTitle);
   8 |     console.log("URL: ", pageURL);
   9 |     await expect(page).toHaveURL('https://themeforest.net/');
   10 |     await page.close();
   11 | })
   12 |
   13 | test('Test 2 - demo.opencart.com', async ({ page }) => {
   14 |     await page.goto('https://demo.opencart.com/');
   15 |     const pageTitle = await page.title();
   16 |     const pageURL = await page.url();
   17 |     console.log("Title: ", pageTitle);
   18 |     console.log("URL: ", pageURL);
   19 |     await expect(page).toHaveURL('https://demo.opencart.com/');
   20 |     await page.close();
   21 | })
   22 |
   23 | test('Test 3 - www.rediff.com', async ({ page }) => {
   24 |     await page.goto('https://www.rediff.com/');
   25 |     const pageTitle = await page.title();
   26 |     const pageURL = await page.url();
   27 |     console.log("Title: ", pageTitle);
   28 |     console.log("URL: ", pageURL);
   29 |     await expect(page).toHaveURL('https://www.rediff.com/');
   30 |     await page.close();
   31 | })
   32 |
   33 | test('Test 4 - leafground Dropdown', async ({ page }) => {
   34 |     await page.goto('http://www.leafground.com/pages/Dropdown.html');
   35 |     const pageTitle = await page.title();
   36 |     const pageURL = await page.url();
   37 |     console.log("Title: ", pageTitle);
   38 |     console.log("URL: ", pageURL);
   39 |     await expect(page).toHaveURL('http://www.leafground.com/pages/Dropdown.html');
   40 |     await page.close();
   41 | })
   42 |
   43 | test('Test 5 - tizag JavaScript Alert', async ({ page }) => {
   44 |     await page.goto('http://www.tizag.com/javascriptT/javascriptalert.php');
   45 |     const pageTitle = await page.title();
   46 |     const pageURL = await page.url();
   47 |     console.log("Title: ", pageTitle);
   48 |     console.log("URL: ", pageURL);
   49 |     await expect(page).toHaveURL('http://www.tizag.com/javascriptT/javascriptalert.php');
   50 |     await page.close();
   51 | })
   52 |
   53 | test('Test 6 - echoecho Forms', async ({ page }) => {
   54 |     await page.goto('http://www.echoecho.com/htmlforms10.htm');
   55 |     const pageTitle = await page.title();
   56 |     const pageURL = await page.url();
   57 |     console.log("Title: ", pageTitle);
   58 |     console.log("URL: ", pageURL);
>  59 |     await expect(page).toHaveURL('http://www.echoecho.com/htmlforms10.htm');
      |                        ^ Error: Timed out 5000ms waiting for expect(locator).toHaveURL(expected)
   60 |     await page.close();
   61 | })
   62 |
   63 | test('Test 7 - leafground Home', async ({ page }) => {
   64 |     await page.goto('http://www.leafground.com/home.html');
   65 |     const pageTitle = await page.title();
   66 |     const pageURL = await page.url();
   67 |     console.log("Title: ", pageTitle);
   68 |     console.log("URL: ", pageURL);
   69 |     await expect(page).toHaveURL('http://www.leafground.com/home.html');
   70 |     await page.close();
   71 | })
   72 |
   73 | test('Test 8 - automationpractice.com', async ({ page }) => {
   74 |     await page.goto('http://automationpractice.com/index.php');
   75 |     const pageTitle = await page.title();
   76 |     const pageURL = await page.url();
   77 |     console.log("Title: ", pageTitle);
   78 |     console.log("URL: ", pageURL);
   79 |     await expect(page).toHaveURL('http://automationpractice.com/index.php');
   80 |     await page.close();
   81 | })
   82 |
   83 | test('Test 9 - Salesforce Login', async ({ page }) => {
   84 |     await page.goto('https://login.salesforce.com/?locale=in');
   85 |     const pageTitle = await page.title();
   86 |     const pageURL = await page.url();
   87 |     console.log("Title: ", pageTitle);
   88 |     console.log("URL: ", pageURL);
   89 |     await expect(page).toHaveURL('https://login.salesforce.com/?locale=in');
   90 |     await page.close();
   91 | })
   92 |
   93 | test('Test 10 - filehosting.org', async ({ page }) => {
   94 |     await page.goto('http://www.filehosting.org');
   95 |     const pageTitle = await page.title();
   96 |     const pageURL = await page.url();
   97 |     console.log("Title: ", pageTitle);
   98 |     console.log("URL: ", pageURL);
   99 |     await expect(page).toHaveURL('http://www.filehosting.org');
  100 |     await page.close();
  101 | })
  102 |
  103 | test('Test 11 - bing.com', async ({ page }) => {
  104 |     await page.goto('http://www.bing.com');
  105 |     const pageTitle = await page.title();
  106 |     const pageURL = await page.url();
  107 |     console.log("Title: ", pageTitle);
  108 |     console.log("URL: ", pageURL);
  109 |     await expect(page).toHaveURL('http://www.bing.com');
  110 |     await page.close();
  111 | })
  112 |
  113 | test('Test 12 - freecrm.com', async ({ page }) => {
  114 |     await page.goto('https://www.freecrm.com/');
  115 |     const pageTitle = await page.title();
  116 |     const pageURL = await page.url();
  117 |     console.log("Title: ", pageTitle);
  118 |     console.log("URL: ", pageURL);
  119 |     await expect(page).toHaveURL('https://www.freecrm.com/');
  120 |     await page.close();
  121 | })
  122 |
  123 | test('Test 13 - half.ebay.com', async ({ page }) => {
  124 |     await page.goto('http://www.half.ebay.com');
  125 |     const pageTitle = await page.title();
  126 |     const pageURL = await page.url();
  127 |     console.log("Title: ", pageTitle);
  128 |     console.log("URL: ", pageURL);
  129 |     await expect(page).toHaveURL('http://www.half.ebay.com');
  130 |     await page.close();
  131 | })
  132 |
  133 | test('Test 14 - alaskatrips', async ({ page }) => {
  134 |     await page.goto('https://alaskatrips.poweredbygps.com/');
  135 |     const pageTitle = await page.title();
  136 |     const pageURL = await page.url();
  137 |     console.log("Title: ", pageTitle);
  138 |     console.log("URL: ", pageURL);
  139 |     await expect(page).toHaveURL('https://alaskatrips.poweredbygps.com/');
  140 |     await page.close();
  141 | })
  142 |
  143 | test('Test 15 - qaclickacademy', async ({ page }) => {
  144 |     await page.goto('http://www.qaclickacademy.com/interview.php');
  145 |     const pageTitle = await page.title();
  146 |     const pageURL = await page.url();
  147 |     console.log("Title: ", pageTitle);
  148 |     console.log("URL: ", pageURL);
  149 |     await expect(page).toHaveURL('http://www.qaclickacademy.com/interview.php');
  150 |     await page.close();
  151 | })
  152 |
  153 | test('Test 16 - saucelabs login', async ({ page }) => {
  154 |     await page.goto('https://app.saucelabs.com/login');
  155 |     const pageTitle = await page.title();
  156 |     const pageURL = await page.url();
  157 |     console.log("Title: ", pageTitle);
  158 |     console.log("URL: ", pageURL);
  159 |     await expect(page).toHaveURL('https://app.saucelabs.com/login');
```