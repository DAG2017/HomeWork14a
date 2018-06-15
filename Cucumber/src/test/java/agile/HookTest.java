package agile;
import cucumber.annotation.After;
import cucumber.annotation.Before;
import cucumber.runtime.PendingException;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;

/**
 * Created by jdhameliya on 25/08/2017.
 */
public class HookTest {
    WebDriver driver = null;


    @Before
    public void setUp(){
        driver = new FirefoxDriver();
        driver.manage().window().maximize();
    }

//    @Given("^the user navigates to Facebook$")
//    public void the_user_navigates_to_Facebook() {
//        driver.navigate().to("http://opensource.demo.orangehrmlive.com/");
//        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
//    }
//
//    @When("^I enter Username as \"([^\"]*)\" and Password as \"([^\"]*)\"$")
//    public void I_enter_Username_as_and_Password_as(String arg1, String arg2) {
//        driver.findElement(By.id("txtUsername")).sendKeys(arg1);
//        driver.findElement(By.id("txtPassword")).sendKeys(arg2);
//        driver.findElement(By.id("btnLogin")).click();
//    }
//
//    @Then("^login should be unsuccessful$")
//    public void validateRelogin() {
//
//        String expectedUrl = "http://opensource.demo.orangehrmlive.com/index.php/auth/validateCredentials";
//        String actualUrl = driver.getCurrentUrl();
//        Assert.assertEquals(expectedUrl,actualUrl);
//        if(driver.getCurrentUrl().equalsIgnoreCase(
//                "http://opensource.demo.orangehrmlive.com/index.php/auth/validateCredentials")){
//            System.out.println("Test Pass");
//        } else {
//            System.out.println("Test Failed");
//        }
//
//    }

    @After
    public void cleanUp(){
        driver.close();
    }

    @Given("^user is on login page$")
    public void userIsOnLoginPage()  {
        driver.navigate().to("http://opensource.demo.orangehrmlive.com/");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }

    @When("^user enter Username as \"([^\"]*)\" and Password as \"([^\"]*)\"$")
    public void userEnterUsernameAsAndPasswordAs(String userName, String password) {
        driver.findElement(By.id("txtUsername")).sendKeys(userName);
        driver.findElement(By.id("txtPassword")).sendKeys(password);
        driver.findElement(By.id("btnLogin")).click();
    }
    @Then("^user should be able to login successfully and see welcome as \"([^\"]*)\"$")
    public void userShouldBeAbleToLoginSuccessfullyAndSeeWelcomeAs(String name) {


        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("welcome")));
        String actualMsg = driver.findElement(By.id("welcome")).getText();

        Assert.assertTrue(name.equalsIgnoreCase(actualMsg));

        System.out.println("User logged in..................");

    }


//    @Then("^user should login should be unsuccessful$")
//    public void userShouldLoginShouldBeUnsuccessful()  {
//
//        String expectedUrl = "http://opensource.demo.orangehrmlive.com/index.php/auth/validateCredentials";
//        String actualUrl = driver.getCurrentUrl();
//        Assert.assertEquals(expectedUrl,actualUrl);
//        if(driver.getCurrentUrl().equalsIgnoreCase(expectedUrl)){
//            System.out.println("Test Pass");
//        } else {
//            System.out.println("Test Failed");
//        }
//
//    }

    @Then("^user should not login$")
    public void userShouldNotLogin() throws Throwable {
        String expectedUrl = "http://opensource.demo.orangehrmlive.com/index.php/auth/validateCredentials";
        String actualUrl = driver.getCurrentUrl();
//        String expectedErrorMsg = "Invalid credentials";
//        String actualErrorMsg =
        Assert.assertEquals(expectedUrl,actualUrl);
        Assert.assertTrue(driver.findElement(By.id("spanMessage")).isDisplayed());

    }
}
