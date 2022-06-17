# .map() Quiz

1. What does the `.map()` array method do?

    - The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

    - Returns a new array. Whatever gets returned from the callback function provided is paced at the same index in the new array. Usually we take the items from the original aarray and modify them in some way.

2. What do we usually use `.map()` for in React?

    - Render data to the page easily

    - Convert an array of raw data into an array of JSX elements that can be displayed on the page.

3. Why is using `.map()` better than just creating the components
   manually by typing them out?

    - Can reuse the components with the .map and make changes to data vs adding more lines of code in the componenet 
    
    - It makes the code more self sustaining - not requiring additional changes whenever the data changes
        - for (let i =0; i < someArray.length; i++) {}
        - Check the length to add on without having to make additional changes