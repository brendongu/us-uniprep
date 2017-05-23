# us-uniprep

Hello! If you are reading this, you are likely a future Academy class! (... or you somehow found it randomly)

This is an application developed by the R&D Department of Unperplexed Solutions during the 2016-2017 school year.

---

If you would like to use this app, you can. Just use the following steps to get it working on either a school desktop or a personal
computer. 


1. Download and install Meteor. (https://www.meteor.com/install)
2. Download the entire app from the repository. (https://github.com/brendongu/us-uniprep --> Clone or download --> Download ZIP)
3. Create a folder for Meteor projects in the computer's C:\ drive.

    - If you are using a school desktop, open Windows Powershell.
    
        - Type the following commands into Powershell:    (If it isn't obvious, hit enter after each command)
        
            * `set-location C:`                           (This will take you to the C: drive from the default H: drive)
            
            * `cd users`
    
            * `cd (your login username)`                  (your school login username: ie. nguyenj (John Nguyen); gub (Brendon Gu))
    
            * `mkdir Meteor`                              (This will create a Meteor directory (folder) in your personal folder)
    
    - If you are using a personal computer, you just need to create the folder in your C:\ drive. This can be done by just using File Explorer.
            
4. Extract the zip into the Meteor folder just created.
5. Run the app.

    - In Powershell/Command Prompt:
            
         * `cd Meteor`
            
         * `cd us-uniprep-master`
            
         * `meteor npm install`                            (This may take a while.)
            
         * `meteor`                                        (This may also take a while. Wait until it says "App running at: http://localhost:3000/")
            
6. Ensure that the application is running by going to http://localhost:3000/.            
          
---

**NOTE: The college search, found in files main.js (client), main.js (server), main.html, and albums.js, is a little finicky. The Mongo collection of colleges, in albums.js, is commented out by default. To add the colleges, just uncomment all lines starting with Meteor.insert(... . Then, comment them out again so they aren't added to the collection multiple times. If something goes wrong and a college is entered mutiple times, you can just delete everything in the collection or uncomment the lines starting with Meteor.remove(... .**

**Also, if you want add or change anything, feel free.
We tried to comment how each file works and what it does, but only got to a few of them.
You can email any of us if you have questions, and we'll try our best.**

- John Nguyen - mjrnguyen@gmail.com
- Brendon Gu - brendnongu@gmail.com
- Matthew Hallac - matthewhallac@gmail.com
- Kinjal Jasani - kjasani111@gmail.com
