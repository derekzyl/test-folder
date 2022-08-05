import java.util.Scanner;
public class New{
  //change the class New to shape factory
  // and change the file name from new to shapefactory

public static void main(String[] args) {

Scanner input = new Scanner(System.in);
//i added a while loop cause the question asked that the loop should end when you press x
while (true){
System.out.print(" \n  ** welcome to shape factory**  \n \n");
System.out.print("would you like to print: reversed pyramid  or number pattern? \n a) select R for pyramid pattern \n b) select # for number pattern \n c) select x to exit \n");
//above i added the exit button which is tge third option to exit the loop
String oneInput = input.next().toLowerCase();
String twoInput;
if (oneInput.equals("r")){
System.out.print("you have selected pyramid pattern \n");


System.out.print("would you like to print: reversed pyramid of stars(*) or reversed pyramid of signs (@)? \n a) select * for stars (*) \n b) select @ for signs (@)  \n c) select x to exit \n");
// i also added the exit option here
twoInput = input.next();



if (twoInput.equals("*") || twoInput.equals("@")){
System.out.print("you have selected " + twoInput + " pattern pyramid " +" \n \n");
int arr = 5;

for (int i = arr; i >= 1; --i) {
for (int dash = 1; dash <= arr - i; ++dash) {
System.out.print("  ");
}

for (int j = i; j <= 2 * i - 1; ++j) {
System.out.print( twoInput + " ");
}

for (int j = 0; j < i - 1; ++j) {
System.out.print(twoInput + " ");
}

System.out.println();
}
} else if (twoInput.equals("x") || twoInput.equals("X")){
System.out.print("bye!! \n");
break;
//the break statement ends the loop
} else {
System.out.print("kindly select * or @ to get a pattern pyramid \n");
}

} else if (oneInput.equals("#")){
System.out.print("you have selected number pattern \n");
int arra = 5, num = 1;

for (int i = 1; i <= arra; i++) {

for (int j = 1; j <= i; j++) {
System.out.print(num + " ");
++num;
}
System.out.println();
}

} else if (oneInput.equals("x")){
System.out.print("bye!! \n");
break;
} else {
System.out.print("wrong input please select R or #  or X   \n");
}
}

}
}