import java.util.*;
import java.io.*;

class Reader{
	Scanner sc;
	ArrayList<Donor> donors = new ArrayList<Donor>();
	class Donor{
		String id;
		String fname;
		String lname;
		int year;
		String col;
		int num;
	}
	public static void main(String[] args) {
		Reader r = new Reader();
		r.setup();	
	}
	public void setup(){
		try{
			sc = new Scanner(new File("C:/Users/Eric/Desktop/Lafayette/Fleck Internship/FY19 Final Brick List.txt"));
			sc.useDelimiter("\t");
			System.out.println("File read successfully");
			int i = 0;
			while(i == 0){
				Donor d = new Donor();
				d.id = sc.next();
				d.fname = sc.next();
				d.lname = sc.next();
				d.year = Integer.parseInt(sc.next());
				sc.useDelimiter("\n");
				String call = sc.next();
				String[] callbreak = call.split("-");
				d.col = callbreak[0].substring(callbreak[0].length()-1,callbreak[0].length());
				d.num = Integer.parseInt(callbreak[1].replaceAll("\r",""));
				donors.add(d);
				if(!sc.hasNext())i = 1;
				sc.useDelimiter("\t");
			}
			System.out.println("All donors added successfully");
			for(int j = 0; j < donors.size(); j++){
				System.out.println(donors.get(j).id);
				System.out.println(donors.get(j).fname + " " + donors.get(j).lname);
				System.out.println(donors.get(j).year);
				System.out.println(donors.get(j).col + "-" + donors.get(j).num);
			}
		}catch(Exception e){
			System.out.println("File cannot be read");
			System.out.println(e);
		}
	}
}