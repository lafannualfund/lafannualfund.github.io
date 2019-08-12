For Updating for Future Years:
1. Save FY Brick List as a .csv
2. Open the .csv with Microsoft Word
3. Use the find and replace tool:
	a. Find the character: ^p
	b. Replace All with TWO spaces
4. CTRL + A to select the entire list, and CTRL + C to copy the list
5. Close the .csv (you do not need to save the newly formatted document)
6. Open dataLoad.js in any text editor (I use SublimeText for coding, but notepad works fine)
7. Erase everything in Line 20 (the really long line with the names. If you turn off Word Wrap this should be easy) and replace with the following: allDonors = "";
8. CTRL + V to paste the new list IN BETWEEN THE QUOTATION MARKS. This may take a few seconds.
9. Save dataLoad.js