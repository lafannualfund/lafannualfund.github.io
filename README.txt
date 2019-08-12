For Updating for Future Years:
1. Save FY Brick List as a .csv
2. Open the .csv with Microsoft Word
3. Use the find and replace tool:
	a. Find the character: ^p
	b. Replace All with TWO spaces
4. CTRL + A to select the entire list, and CTRL + C to copy the list
5. Close the .csv (you do not need to save the newly formatted document)
6. Open dataLoad.js (in the src folder in this repository)
7. Erase everything in Line 20 (the really long line with the names. This should be fairly easy in the GitHub editor) and replace with EXACTLY the following: allDonors = "";
8. CTRL + V to paste the new list IN BETWEEN THE QUOTATION MARKS. This may take a few seconds.
9. Scroll to the bottom of the page and add a message where it says "Update dataLoad.js" (I would write something like "Updated names for FY[insert year])
10. Click "Commit Changes" and wait a minute or two for the website to update!

For any assistance with the code or updating for future years, please contact me at elast27@yahoo.com
