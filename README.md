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

    - Next, in Powershell/Command Prompt:
            
         * `cd Meteor`
            
         * `cd us-uniprep-master`
         
         * `cd us-uniprep-master`
            
         * `meteor npm install`                            (This may take a while.)
            
         * `meteor`                                        (This may also take a while. Wait until it says "App running at: http://localhost:3000/")
            
6. Ensure that the application is running by going to http://localhost:3000/.            
          
---

**NOTE: The application, while almost completely finished, is not completely finished. The college search, found in files main.js (client), main.js (server), main.html, and albums.js, does not work. If you want to and can fix it, or if you want to change anything else, feel free.**
