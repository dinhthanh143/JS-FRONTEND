import java.util.Scanner;

public class bt1{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Nhap diem trung binh cua hoc sinh: ");
        double diem = scanner.nextDouble();
        
        if (diem < 5) {
            System.out.println("Hoc luc: Yeu");
        } else if (diem >= 5 && diem < 6.5) {
            System.out.println("Hoc luc: Trung binh");
        } else if (diem >= 6.5 && diem < 7) {
            System.out.println("Hoc luc: Trung binh kha");
        } else if (diem >= 7 && diem < 8) {
            System.out.println("Hoc luc: Kha");
        } else if (diem >= 8 && diem < 9) {
            System.out.println("Hoc luc: Gioi");
        } else if (diem >= 9) {
            System.out.println("Hoc luc: Xuat sac");
        } else {
            System.out.println("Diem khong hop le.");
        }
        
        scanner.close();
    }
}
