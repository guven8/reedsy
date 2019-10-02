### 1. About Me
##### "Tell us about one of your commercial projects with Vue.js or AngularJS."

I have not worked on any commercial projects using Vue.js or AngularJS, I have been working with 
ReactJS and React Native exclusively for my last two roles. I do however have a solid understanding 
of the fundamental concepts and design principles of front end web development, such as the model 
view controller design pattern, therefore I am able to learn new frameworks very quickly. 

### 2. General
##### "2.1. What kind of front end projects do you enjoy working on? Why?"

I enjoy working on front end projects that capture my imagination and allow me to get into a state 
of flow. I particularly enjoy building a new user interface and seeing it come to life after wiring 
it up to a back end api. It’s always fun to complete tasks which I have previous experience in but 
I also enjoy more challenging tasks that force me to learn new skills.

##### “2.3. Explain the difference between creating a DOM element setting innerHTML and using createElement.”

Modifying the DOM using createElement will preserve all existing references to DOM elements. If you 
append to innerHTML all of the DOM nodes inside that element will have to be re-parsed. Repeatedly 
reparsing and creating elements can bring performance issues so it is generally better to use 
createElement instead of innerHTML when making lots of additions to the DOM. Also setting innerHTML 
will not automatically re-attach event handlers to the new elements it creates.

##### “2.4. Compare two-way data binding vs one-way data flow.”

Two-way data binding means that the data displayed in UI is bound to the model, changes to the data 
made from the UI will update the model and vice-versa. An example of a framework that uses two-way 
data binding is AngularJS using event binding and property binding.

One-way data flow is where the data is flowing in one direction, meaning that the model is the 
single source of truth. Changes made in the UI trigger messages that signal the users intent, but 
only the model is able to change the apps state. An example of one-way data flow is a React / Redux 
application, where events trigger “actions” (functions) which update the store (the apps state), 
changes to the store may then be reflected in the UI.

##### “2.5. Why is asynchronous programming important in JavaScript?”

Asynchronous programming means that the engine (the software running your code) runs within an 
event loop, when a blocking (long running) operation is needed, such as a network request or disk 
I/O, the request starts without blocking whilst waiting for the result. When the result is ready, 
an interrupt is fired which causes an event handler to be run, where the control flow continues. 
This way a single program thread can handle many concurrent operations. This is especially 
important in Javascript as it is a single threaded programming language which deals with long 
running tasks frequently such as network requests and disk I/O. 