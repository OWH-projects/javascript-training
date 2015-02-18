#Javascript

Javascript is the scripting language that powers the web. You can use it to animate page elements, handle information submitted by the people who visit your web page and generally create more sophisticated interactive content than you could with HTML and CSS alone.

###Session outline
<ol>
<li>What's Javascript good for, anyway?</li>
<li>Changing HTML content or styles dynamically</li>
<li>Functions and variables</li>
<li>If-else logic</li>
<li>Working with data: numbers, strings and booleans</li>
<li>The <em>for</em> loop</li>
<li>Using developer tools to debug your code</li>
</ol>

###console.log("roll up those sleeves")
If you're writing Javascript directly in an HTML file, as we'll do today, you need to wrap it in a <code>&lt;script></code> tag. That tells the browser: Hey! You're about to see some Javascript. Interpret accordingly.

Later, as your scripts get more complicated, you'll want to save your scripts in a separate file and link to it from your HTML file, similar to how you linked to an external CSS file in the last session. It's not required, but it's best practice-y to separate page structure (HTML) from design rules (CSS) from interactivity (Javascript).

Neato. Let's write some Javascript.

In the _examples_ folder, open the file <code>example1.html</code> in your text editor (right-click and select "edit with" or "open with" the text editing program).

Type (don't copy/paste) the following code into <code>example1.html</code>:

<pre>
&lt;script>
    alert("Hello, friends. I am an alert.")
&lt;/script>
</pre>

Now open <code>example1.html</code> in a browser of your choice. You should get a popup.

###Working with data

#####String
"Hello there, I am a string."
"234"
"true"

#####Number
213
3.043

#####Boolean
true
false

###Comments
To insert a comment -- a note explaining some code -- prepend two slashes:

<pre>
&lt;script>
    var x = 40;
    // This message won't be interpreted by your browser
    return x - 30;
&lt;script>
</pre>

Enclose multiline comments in /*    */:

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
&lt;table id="fruit_table"></table>

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
   for (i=0;i<fruit.length;i++) {

// in each loop, add data to the table_content variable
        table_content += [
        '<tr><td>',
        fruit[i].name,
        '</td></tr>'
        ].join('')
   }

// finally, set the table HTML equal to _table_content_   
   document.getElementById('fruit_table').innerHTML = table_content;
&lt;/script>
</pre>

You'll find a more advanced example of this in <code>example3.html</code> in the _examples_ folder. There, you'll find data from one of the best Wikipedia pages, <a href="http://en.wikipedia.org/wiki/List_of_English_terms_of_venery,_by_animal">List of English terms of venery</a>. I pulled my favorite entries into a spreadsheet and then used <a href="http://shancarter.github.io/mr-data-converter/">Mr. Data Converter</a> to convert the rows and columns of my spreadsheet into <a href="http://json.org/">a data structure that Javascript understands</a>. I saved the data in a file called <code>animals.js</code>, which you will find in _examples/data_, and which is linked to in the HTML file.

The basic idea was to make a page with a dropdown menu (using the HTML <code>&lt;select></code> tag). When a user selects an option from this menu, the page will display the type of animal and its collective noun (e.g., "a shrewdness of apes").

###Tips
<ol>
<li>Pay attention to the order in which you import Javascript libraries. If you have a script that needs jQuery to work, make sure you import jQuery first.</li>
<li>Use Chrome or Firefox. Seriously. Both have handy developer tools that will make debugging Javascript much easier.</li>
<li>Use console.log() statements liberally when debugging your scripts. Check the console for errors or use it to test out code (on Windows, <code>ctrl + shift + j</code> is the shortcut to view the console).</li>
<li>Comment liberally. Your future self will thank you.</li>
<li>Javascript can be finicky about semicolons; <a href="http://www.codecademy.com/blog/78-your-guide-to-semicolons-in-javascript">here's a handy guide</a></li>
</ol>