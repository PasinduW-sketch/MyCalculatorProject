import javax.swing.*;
import java.awt.*;

public class PHW_AnalyticsSuite extends JFrame {
    public PHW_AnalyticsSuite() {
        setTitle("PHW Research Suite - Developed by Pasindu Harsha Wanniarachchi");
        setSize(450, 650);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new BorderLayout());

        // Header Section
        JPanel header = new JPanel(new GridLayout(2, 1));
        JLabel nameLabel = new JLabel("PASINDU HARSHA WANNIARACHCHI", SwingConstants.CENTER);
        nameLabel.setFont(new Font("Arial", Font.BOLD, 16));
        header.add(nameLabel);
        header.add(new JLabel("ENTC - KDU Sri Lanka", SwingConstants.CENTER));
        add(header, BorderLayout.NORTH);

        // Tabbed Interface for World-Class functionality
        JTabbedPane tabs = new JTabbedPane();
        tabs.add("Matrix Solver", new JPanel()); // Future ENTC Module
        tabs.add("Unit Converter", createConverterPanel());
        tabs.add("Health Analytics", createHealthPanel());

        add(tabs, BorderLayout.CENTER);
        setVisible(true);
    }

    private JPanel createConverterPanel() {
        JPanel p = new JPanel(new GridLayout(4, 1));
        p.add(new JLabel("Thermal & Motion Converter"));
        p.add(new JTextField("Enter Value..."));
        p.add(new JButton("Convert (m/s to km/h)"));
        return p;
    }

    private JPanel createHealthPanel() {
        JPanel p = new JPanel(new GridLayout(3, 1));
        p.add(new JLabel("Bio-Medical Analytics (BMI/BMR)"));
        p.add(new JButton("Calculate Analysis"));
        return p;
    }

    public static void main(String[] args) {
        new PHW_AnalyticsSuite();
    }
}