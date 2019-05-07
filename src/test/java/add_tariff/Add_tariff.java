package add_tariff;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Add_tariff {
	WebDriver driver;
	@Given("make sure customer at telecom site")
	public void telecom(){
		System.setProperty("webdriver.chrome.driver", 
				"C:\\Users\\Ashok 555\\eclipse-workspace\\bharath\\cucumber_tariff\\tariff\\lib & driver\\chromedriver.exe");
		 driver = new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/index.html");
		driver.findElement(By.xpath("//a[text()='Telecom Project']")).click();
		
		
	    
	}

	@Given("click add tariff plan")
	public void click_tariff(){
		driver.findElement(By.xpath("//a[text()='Add Tariff Plan']")).click();
	    
	}

	@When("enter the tariff details in  numeric values {rental1},{local_minutes},{inter_minutes},{sms_pack},{minutes_charges},{inter_charges},{sms_charges}")
	public void add_details(){
	    driver.findElement(By.id("rental1")).sendKeys("rental1");
	    driver.findElement(By.id("local_minutes")).sendKeys("local_minutes");
	    driver.findElement(By.id("inter_minutes")).sendKeys("inter_minutes");
	    driver.findElement(By.id("sms_pack")).sendKeys("sms_pack");
	    driver.findElement(By.id("minutes_charges")).sendKeys("minutes_charges");
	    driver.findElement(By.id("inter_charges")).sendKeys("inter_charges");
	    driver.findElement(By.id("sms_charges")).sendKeys("sms_charges");
	    
	}

	@When("click submit")
	public void click_submit(){
		driver.findElement(By.name("submit")).click();
	    
	}

	@Then("check congratulation message display")
	public void check_message(){
		driver.findElement(By.xpath("//h2[text()='Congratulation you add Tariff Plan']")).isDisplayed();
	    
	}



}
