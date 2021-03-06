#Javascript
Javascript is the scripting language that powers the web. You can use it to animate page elements, handle information submitted by the people who visit your web page and generally create more sophisticated interactive content than you could with HTML and CSS alone.

Most of our <a href="http://www.dataomaha.com/media/web-uploads/maps/2015-01-testy_test_test.html">maps</a> and <a href="http://dataomaha.com/media/cody/oppd-bills/">charts</a> and other assorted widgetry depend on Javascript.

###Session outline
<ol>
<li>Real-world examples</li>
<li>Alerts, prompts and logging</li>
<li>Targeting elements</li>
<li>Changing HTML content or styles</li>
<li>Variables</li>
<li>Functions</li>
<li>Event Listeners</li>
<li>Validating inputs</li>
<li>Working with data: If-else logic</li>
<li>Working with data: Objects and arrays</li>
<li>Working with data: The <em>for</em> loop</li>
<li>Working with data: Looping over data to construct HTML</li>
<li>Using developer tools to debug your code</li>
</ol>

###console.log("roll up those sleeves")
If you're writing Javascript directly in an HTML file, as we'll do today, you need to wrap it in a <code>&lt;script></code> tag. That tells the browser: Hey! You're about to see some Javascript. Interpret accordingly.

Later, as your scripts get more complicated, you'll want to save your scripts in a separate file and link to it from your HTML file, similar to how you linked to an external CSS file in the last session. It's not required, but it's best practice-y to separate page structure (HTML) from design rules (CSS) from interactivity (Javascript).

###Working with data

#####String
"Hello there, I am a string."<br>
"234"<br>
"true"

#####Number
213<br>
3.043

#####Date
new Date()

#####Boolean
true<br>
false

###Comments
To insert a comment &mdash; a note explaining some code &mdash; prepend two slashes:

<pre>
&lt;script>
    function (x) {
    // This message won't be interpreted by your browser
    return x - 30;
    }
&lt;script>
</pre>

Enclose multiline comments in /* &emsp;&emsp; */:

<pre>
&lt;script>
    /*
    I am a multi-line
    comment
    look at me
    being all
    multi-liney
    */
&lt;/script>
</pre>

###Using Javascript to generate HTML
Let's say you've got some data that you want to plop on a web page in a repeating pattern. Good news! You can use Javascript to simplify the process.

Here's what a basic HTML table looks like behind the scenes:

<pre>
&lt;table>
    &lt;tr>
        &lt;td>
        Apples
        &lt;/td>
        &lt;td>
        10
        &lt;/td>
    &lt;/tr>
    &lt;tr>
        &lt;td>
        Oranges
        &lt;/td>
        &lt;td>
        7
        &lt;/td>
    &lt;/tr>
    &lt;tr>
        &lt;td>
        Watermelon
        &lt;/td>
        &lt;td>
        3
        &lt;/td>
    &lt;/tr>
&lt;/table>
</pre>

... which renders this:

<table>
    <tr>
        <td>
        Apples
        </td>
        <td>
        10
        </td>
    </tr>
    <tr>
        <td>
        Oranges
        </td>
        <td>
        7
        </td>
    </tr>
    <tr>
        <td>
        Watermelon
        </td>
        <td>
        3
        </td>
    </tr>
</table>

Not a heavy lift. But it would get old pretty quick if you had 100 things to tabulate instead of three. One solution: Use Javascript to loop over your data and generate the HTML code dynamically. Comme &ccedil;a:

<pre>
&lt;table id="fruit_table">&lt;/table>

&lt;script>
// store the data as an array of objects
    var fruit = [
        { 'name': 'Apples',
          'count': 10
        },
        { 'name': 'Oranges',
          'count': 7
        },
        { 'name': 'Watermelon',
          'count': 13
        }
   ]

// make a variable called table_content   
   var table_content = '';

// start a loop
   for (i=0;i&lt;fruit.length;i++) {

// for each loop, add data to the table_content variable
        table_content += [
        '&lt;tr>&lt;td>',
        fruit[i].name,
        '&lt;/td>&lt;td>',
        fruit[i].count,
        '&lt;/td>&lt;/tr>'
        ].join('')
   }

// finally, set the table HTML equal to table_content
   document.getElementById('fruit_table').innerHTML = table_content;
&lt;/script>
</pre>

You'll find another example of this in the file called <code>journos.html</code> in the _examples_ folder. Add new entries to the file called <code>journos.js</code>, which is in the folder _examples/data_, then reload the page and see what happens.

You'll find a more advanced example of HTML concatenation in the file <code>animals.html</code> in the _examples_ folder, which uses data from one of my favorite Wikipedia pages ever, <a href="http://en.wikipedia.org/wiki/List_of_English_terms_of_venery,_by_animal">List of English terms of venery</a>. I pulled my favorite entries into a spreadsheet and then used <a href="http://shancarter.github.io/mr-data-converter/">Mr. Data Converter</a> to convert the rows and columns of my spreadsheet into <a href="http://json.org/">a data structure that Javascript understands</a>. I saved the data in a file called <code>animals.js</code>, which you will find in _examples/data_, and which is linked to in the HTML file.

The basic idea was to make a page with a dropdown menu using the HTML <code>&lt;select></code> tag. When a user selects an option from this menu, the page will display the type of animal and its collective noun (e.g., "a shrewdness of apes").

###Tips
<ol>
<li>Pay attention to the order in which you import Javascript libraries. If you have a script that needs jQuery to work, make sure you import jQuery first.</li>
<li>Use Chrome or Firefox. Seriously. Both have handy developer tools that will make debugging Javascript much easier.</li>
<li>Use console.log() statements liberally when debugging your scripts. Check the console for errors or use it to test out code. To view the console, try F12 or, if you're on a Mac, Command + Option + I.</li>
<li>Use lots of comments to explain what you're doing. Your future self will thank you.</li>
<li>Pay attention to capitalization</li>
<li>Javascript can be finicky about semicolons; <a href="http://www.codecademy.com/blog/78-your-guide-to-semicolons-in-javascript">here's a handy guide</a></li>
</ol>

###Resources
<ul>
<li><a href="http://www.w3schools.com/js/">W3 Schools</a></li>
<li><a href="http://www.codecademy.com/en/tracks/javascript">Codecademy</a></li>
<li><a href="http://eloquentjavascript.net/">Eloquent JavaScript</a></li>
</ul>